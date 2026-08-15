"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { LogOut, CheckCircle2, Eye, List, SkipBack, SkipForward, Play, Mic, Square, Pause } from "lucide-react"
import { Kbd } from "@/components/ui/kbd"
import confetti from "canvas-confetti"
import WaveSurfer from "wavesurfer.js"
import { shuffle, type SentenceEntry, type Course } from "@/lib/speller/courses"
import { getProgress, updateProgress, getPronHistory, savePronScore, migratePositions } from "@/lib/speller/progress"
import PronunciationPractice, { type EvalResult, type PronunciationPracticeHandle } from "@/components/speller/PronunciationPractice"

type Phase = "idle" | "playing" | "done"
type CharStatus = "correct" | "wrong" | "pending" | "punct" | "space"

interface CharState {
  ch: string
  status: CharStatus
  /** 属于当前激活单词（整词绿色下划线） */
  active?: boolean
  /** 所属单词拼写错误（提交检查后整词下划线标红） */
  wordWrong?: boolean
  /** 字母宽度（em，按字符实际宽度，字母紧排用） */
  widthEm?: number
  /** 下划线宽度（em：词内 = 目标字母自然宽恒定；超长槽位 = 字符宽，随写多伸缩） */
  underlineEm?: number
  /** 多余输入槽位（超出单词长度的尾部扩展），挂载时播放展开动画 */
  overflow?: boolean
}

interface Token {
  kind: "word" | "space" | "punct"
  text: string
}

/** 把目标句子拆成 token（单词/空格/标点） */
function tokenize(target: string): Token[] {
  const tokens: Token[] = []
  for (const ch of target) {
    if (/[a-zA-Z]/.test(ch)) {
      const last = tokens[tokens.length - 1]
      if (last && last.kind === "word") last.text += ch
      else tokens.push({ kind: "word", text: ch })
    } else if (ch === " ") {
      tokens.push({ kind: "space", text: " " })
    } else {
      tokens.push({ kind: "punct", text: ch })
    }
  }
  return tokens
}

/** 目标句子 → 单词列表（保留原大小写）。
 *  与 buildDisplay 的 tokenize 分词保持一致：按连续字母切分，
 *  连字符/撇号等标点作为分隔（cat-like → ["cat","like"]），
 *  保证空格导航的词数量与渲染槽位数一一对应。 */
function getWords(target: string): string[] {
  return target.match(/[a-zA-Z]+/g) ?? []
}

/** 模块级 canvas 测量上下文（复用，避免重复创建） */
let measureCtx: CanvasRenderingContext2D | null = null

/** 测量单个字符宽度（em 单位），用于槽位自适应宽度。
 *  字重与渲染一致（400），边距尽量小，保证字母紧凑。 */
function measureCharWidthEm(ch: string): number {
  if (typeof window === "undefined") return 0.6
  if (!measureCtx) {
    const c = document.createElement("canvas")
    measureCtx = c.getContext("2d")!
    measureCtx.font =
      '500 100px -apple-system, BlinkMacSystemFont, "system-ui", "PingFang SC", "Microsoft YaHei", sans-serif'
  }
  const w = measureCtx.measureText(ch).width / 100
  // 槽位 = 字母实际宽度，不加边距（字母间零空隙、完全紧贴）
  return Math.max(w, 0.2)
}

/**
 * 逐词独立构建显示：
 * - 每个单词独立比对（用户在该词上输入的字母，超长的显示为当前词尾部的红色槽位，不会溢到下一个单词）
 * - 忽略大小写，正确字母显示目标形式
 * - 激活单词所有槽位标记 active（整词绿色下划线）
 */
function buildDisplay(target: string, inputs: string[], activeIdx: number): CharState[] {
  const chars: CharState[] = []
  let wi = 0
  for (const tok of tokenize(target)) {
    if (tok.kind === "space") {
      chars.push({ ch: " ", status: "space" })
      continue
    }
    if (tok.kind === "punct") {
      chars.push({ ch: tok.text, status: "punct" })
      continue
    }
    // 单词
    const wordTarget = tok.text.toLowerCase()
    const typed = inputs[wi] ?? ""
    const active = wi === activeIdx
    // 单词是否拼写正确（提交检查时：整词下划线标红依据）
    const wordWrong = typed.toLowerCase() !== wordTarget
    // 槽位：逐个与目标字母比对（忽略大小写）。
    // 「分离字母与下划线」：字母按字符实际宽度排列（非等宽，i 窄 m 宽）零空隙紧排；
    // 词级下划线是一条整体（宽度 = Σ 目标字母自然宽 + 两端余量），写错字母不伸缩，
    // 只有输入字母数超过正确个数（超长槽位）时才随展开加长
    for (let j = 0; j < wordTarget.length; j++) {
      const t = typed[j]
      const status: CharStatus = t === undefined ? "pending" : t.toLowerCase() === wordTarget[j] ? "correct" : "wrong"
      const ch = t ?? wordTarget[j]
      chars.push({
        ch,
        status,
        active,
        wordWrong,
        widthEm: measureCharWidthEm(ch),
        underlineEm: measureCharWidthEm(wordTarget[j]),
      })
    }
    // 多余输入：超出单词长度，显示在当前单词尾部（红色），不影响下一个单词；
    // overflow 标记：渲染时从 0 宽展开动画，与普通宽度过渡一致的平滑感
    for (let j = wordTarget.length; j < typed.length; j++) {
      chars.push({
        ch: typed[j],
        status: "wrong",
        active,
        wordWrong,
        overflow: true,
        widthEm: measureCharWidthEm(typed[j]),
        underlineEm: measureCharWidthEm(typed[j]),
      })
    }
    wi++
  }
  return chars
}

function useSpeech() {
  const pendingRef = useRef<number | null>(null)
  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return
    const synth = window.speechSynthesis
    // Chrome 兼容：speechSynthesis 可能处于 paused 状态，speak 前先唤醒
    synth.resume()
    synth.cancel()
    const u = new SpeechSynthesisUtterance(text)
    // 播放结束回调（footer 播放按钮恢复播放图标用）
    if (onEnd) u.onend = onEnd
    u.lang = "en-US"
    u.volume = 0.8
    u.rate = 0.85
    u.pitch = 1
    // Chrome 里 getVoices 首次可能返回空数组（异步加载），延迟后重取
    const voices = synth.getVoices()
    const voice =
      voices.find((v) => v.lang.toLowerCase().startsWith("en-us") && /female|samantha|zira|aria|jenny/i.test(v.name)) ||
      voices.find((v) => v.lang.toLowerCase().startsWith("en"))
    if (voice) u.voice = voice
    // Chrome 竞态 bug：cancel 后立刻 speak 可能被吞，加微小延迟
    if (pendingRef.current) window.clearTimeout(pendingRef.current)
    pendingRef.current = window.setTimeout(() => {
      pendingRef.current = null
      synth.speak(u)
    }, 30)
  }, [])
  const stop = useCallback(() => {
    if (typeof window === "undefined") return
    if (pendingRef.current) {
      window.clearTimeout(pendingRef.current)
      pendingRef.current = null
    }
    window.speechSynthesis.cancel()
  }, [])
  return { speak, stop }
}

/**
 * 游戏音效（取自哇学社 waxueshe.com 的打字/撒花音效）：
 * - 打字音效：type.mp3 短促敲击声，每次按键快速连播（Web Audio，连打不卡顿）
 * - 撒花音效：答对/撒花时播放的庆祝提示音
 */
function useGameSounds() {
  const ctxRef = useRef<AudioContext | null>(null)
  const typeBufferRef = useRef<AudioBuffer | null>(null)
  const successBufferRef = useRef<AudioBuffer | null>(null)
  // 成功提示音：常驻 HTMLAudioElement。
  // Chrome 自动播放策略：无用户手势的 play() 会被拒绝（录音评测返回是异步回调，无手势）。
  // 在用户手势时解锁（play 一次立即暂停）后，任何时机播放都不再被拦
  const successAudioRef = useRef<HTMLAudioElement | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (!Ctx) return
    const ctx = new Ctx()
    ctxRef.current = ctx
    let typeBuf: AudioBuffer | null = null
    let success: AudioBuffer | null = null
    const dec = (url: string) =>
      fetch(url)
        .then((r) => r.arrayBuffer())
        .then((buf) => ctx.decodeAudioData(buf))
    Promise.all([dec("/sounds/type.mp3"), dec("/sounds/success.mp3")])
      .then(([t, s]) => {
        if (cancelled) return
        typeBuf = t
        success = s
        typeBufferRef.current = typeBuf
        successBufferRef.current = success
        setReady(true)
      })
      .catch(() => {})
    return () => {
      cancelled = true
      ctx.close().catch(() => {})
    }
  }, [])

  /** 播放一次 Web Audio buffer，不打断之前的（快速连播） */
  const playBuffer = useCallback((buffer: AudioBuffer | null, volume: number) => {
    const ctx = ctxRef.current
    if (!ctx || !buffer) return
    const play = () => {
      const src = ctx.createBufferSource()
      src.buffer = buffer
      const gain = ctx.createGain()
      gain.gain.value = volume
      src.connect(gain).connect(ctx.destination)
      src.start()
    }
    if (ctx.state === "suspended") {
      ctx.resume().then(play).catch(() => {})
      return
    }
    play()
  }, [])

  const playType = useCallback(() => {
    playBuffer(typeBufferRef.current, 0.8)
  }, [playBuffer])

  const playSuccess = useCallback(() => {
    // 成功提示音：常驻 Audio 元素播放 success.mp3（音量 1.0）。
    // 拼写成功与录音评测提示音共用同一实现同一元素；元素已在用户手势时解锁，
    // 评测返回（异步无手势）也能正常出声，与拼写成功完全一致
    const a = successAudioRef.current
    if (!a) return
    // 解锁阶段可能仍在静音播放；先停止该会话，再以完整音量从头播放。
    // 两条成功路径都经过这里，避免异步评测复用静音中的播放状态。
    a.pause()
    a.currentTime = 0
    a.muted = false
    a.volume = 1
    a.play().catch(() => {})
  }, [])

  /** 用户手势期间解锁成功提示音元素 + 恢复 AudioContext：
   *  Chrome autoplay 策略要求媒体播放需用户手势，评测返回是异步回调（无手势），
   *  若不解锁会被静默拒绝 → 声音缺失/变小。
   *  解锁 = 静音播放一次（不暂停、让它自然放完），过程中不发声；
   *  音量在 playSuccess 时恢复为 1，无 pause 竞态（不会被截断） */
  const unlockAudio = useCallback(() => {
    if (!successAudioRef.current) {
      successAudioRef.current = new Audio("/sounds/success.mp3")
      successAudioRef.current.volume = 1
    }
    const a = successAudioRef.current
    if (a.paused) {
      a.volume = 0
      a.currentTime = 0
      a.play().catch(() => {
        a.volume = 1
      })
    }
    // 打字音效的 AudioContext：恢复运行状态
    const ctx = ctxRef.current
    if (ctx && ctx.state === "suspended") {
      ctx.resume().catch(() => {})
    }
  }, [])

  return { playType, playSuccess, unlockAudio, soundReady: ready }
}

function formatTime(ms: number): string {
  const s = Math.floor(ms / 1000)
  const m = Math.floor(s / 60)
  return m > 0 ? `${m}:${String(s % 60).padStart(2, "0")}` : `${s}s`
}

/** 单词 → 每个字母的音节索引（如 interstellar → [0,0,0,1,1,1,2,2,2,2,3,3]）。
 *  syllables 拼接后与单词不一致（含标点/大小写差异）返回 null，放弃着色 */
function wordSyllableIdx(wordText: string, syllables?: string[]): number[] | null {
  if (!syllables || syllables.length === 0) return null
  const lower = wordText.toLowerCase()
  let remaining = lower
  const idxMap: number[] = []
  let si = 0
  for (const syll of syllables) {
    const s = syll.toLowerCase()
    const pos = remaining.indexOf(s)
    if (pos < 0) return null
    for (let i = 0; i < pos; i++) idxMap.push(si)
    for (let i = 0; i < s.length; i++) idxMap.push(si)
    remaining = remaining.slice(pos + s.length)
    si++
  }
  if (remaining.length > 0) return null
  return idxMap
}

/** 把整句/整词组的音节数组按词边界分组（含空格的音节标记词边界，如
 *  ["spe","cia","list"," en","gi","ne ","design"] → [["spe","cia","list"],["en","gi","ne"],["design"]]）。
 *  每个词独立调用 wordSyllableIdx 时才不会因跨词的空格音节匹配失败。 */
function wordSyllableGroups(syllables?: string[]): string[][] {
  if (!syllables || syllables.length === 0) return []
  const groups: string[][] = []
  let cur: string[] = []
  for (const s of syllables) {
    cur.push(s.replace(/\s+/g, ""))
    if (s.includes(" ")) {
      // 含空格音节：音节本身属于当前词，空格标记词边界 → 开始新词
      groups.push(cur)
      cur = []
    }
  }
  if (cur.length > 0) groups.push(cur)
  return groups
}

export default function SentencePractice({
  course,
  autoStart = false,
  onExit,
  showCn = true,
  playVoice,
  autoPlayVoice = false,
  onCurrentSentence,
  onJumpToSentence,
  confettiOrigin = { x: 0.5, y: 0.7 },
  waveAudioRef,
  waveSegment,
  onStopVoice,
  voicePlaying,
  restoreKey,
}: {
  /** 课程（决定句子库与每组大小） */
  course?: Course
  /** 挂载后自动开始（用于独立练习路由 /speller/practice） */
  autoStart?: boolean
  /** 退出练习时的回调（默认回到 idle 状态） */
  onExit?: () => void
  /** 是否显示中文句提示（视频课程模式下隐藏，避免泄露答案） */
  showCn?: boolean
  /** 播放发音回调（视频课程模式下播放视频；不传则用 TTS） */
  playVoice?: () => void
  /** 切句时自动调用 playVoice（单词课程自动播原声用；默认不自动播，手动 Tab） */
  autoPlayVoice?: boolean
  /** 当前句在课程原始句子中的索引回调（视频/SRT 联动用） */
  onCurrentSentence?: (courseIndex: number) => void
  /** 点击句子列表中的某句，跳转到对应 SRT 时间点 */
  onJumpToSentence?: (courseIndex: number) => void
  /** 答对撒花的位置（canvas-confetti origin） */
  confettiOrigin?: { x: number; y: number }
  /** 播放原声的媒体元素（声波图用：播放时显示完整波形，进度从左到右读动；audio 或 video 均可） */
  waveAudioRef?: { current: HTMLMediaElement | null }
  /** 声波图只显示该时间段（秒，如句子课程当前句的 SRT 片段）；不传显示全部 */
  waveSegment?: { start: number; end: number } | null
  /** 停止视频/音频页面播放的回调（开始录音前打断播放用） */
  onStopVoice?: () => void
  /** 视频/音频页面媒体的播放状态（footer 播放按钮换状态用；不传则用内部 TTS/原声状态） */
  voicePlaying?: boolean
  /** 位置记忆键（如 "wang-listening/chapter-3/test-1"）：下次进入从上次听写到的位置继续 */
  restoreKey?: string
}) {
  const { speak, stop } = useSpeech()
  const { playType, playSuccess, unlockAudio } = useGameSounds()

  // 任何用户手势（点击/按键）都解锁成功提示音元素 + 恢复 AudioContext：
  // 让评测返回（异步无手势）的提示音与拼写成功完全一致，不被自动播放策略拦截
  useEffect(() => {
    const onGesture = () => unlockAudio()
    window.addEventListener("pointerdown", onGesture)
    window.addEventListener("keydown", onGesture)
    return () => {
      window.removeEventListener("pointerdown", onGesture)
      window.removeEventListener("keydown", onGesture)
    }
  }, [unlockAudio])

  // ── 声波图（whalelisten 同款：WaveSurfer 渲染波形，media 绑定原声元素）──
  // 配置照 whalelisten：waveColor 浅灰 / progressColor 深灰 / cursor 主题色 / 2px 圆角条 / 60px 高
  const waveContainerRef = useRef<HTMLDivElement | null>(null)
  const wsRef = useRef<WaveSurfer | null>(null)
  // 跟读录音进行中：footer 的录音按钮切换为「停止」样式，声波图区域让给录音波形
  const [pronRecording, setPronRecording] = useState(false)
  // 播放中：footer 播放按钮切换为暂停/停止图标（TTS / 单词原声 / 视频页面媒体任一播放中）。
  // 视频/音频页面传 voicePlaying（页面媒体事件驱动）；无则用内部状态（TTS / 单词原声）
  const [localPlaying, setLocalPlaying] = useState(false)
  const isPlaying = voicePlaying ?? localPlaying
  const setIsPlaying = setLocalPlaying

  // 单词课程原声（waveAudioRef）播放状态 → 播放按钮换状态
  useEffect(() => {
    const el = waveAudioRef?.current
    if (!el) return
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    el.addEventListener("play", onPlay)
    el.addEventListener("pause", onPause)
    return () => {
      el.removeEventListener("play", onPlay)
      el.removeEventListener("pause", onPause)
    }
  }, [waveAudioRef?.current])

  useEffect(() => {
    const el = waveAudioRef?.current
    const container = waveContainerRef.current
    // 录音时容器让给录音波形（RecordPlugin），停止后恢复播放波形
    if (!el || !container || pronRecording) return
    // 清掉容器内残留渲染层（切句重建时旧实例可能未完全清理）
    container.innerHTML = ""
    // 切词（src 变化）/切句（waveSegment 变化）时 effect 重跑 → 销毁重建，
    // 自动解码新波形（whalelisten 同款做法）。句子课程只显示当前句片段
    const ws = WaveSurfer.create({
      container,
      media: el,
      waveColor: "#e2e8f0",
      progressColor: "#64748b",
      cursorColor: "hsl(var(--primary))",
      height: 60,
      barWidth: 2,
      barGap: 2,
      barRadius: 2,
      normalize: true,
    })
    wsRef.current = ws
    // 句子课程：解码完成后放大到「片段时长占满容器」并定位到片段起点 → 只显示当前句波形
    ws.on("ready", () => {
      if (waveSegment && container.clientWidth > 0) {
        ws.zoom(container.clientWidth / Math.max(0.5, waveSegment.end - waveSegment.start))
        ws.setTime(waveSegment.start)
      }
    })
    // 进度校准：media 播放进度与波形偏差过大时对齐（媒体元素驱动播放，波形只读展示）。
    // 片段模式校准绝对时间（波形已 zoom 到片段区间）
    const sync = () => {
      const d = el.duration
      if (d <= 0) return
      if (waveSegment) {
        if (Math.abs(el.currentTime - ws.getCurrentTime()) > 0.05) ws.seekTo(el.currentTime)
      } else {
        const t = el.currentTime / d
        const dur = ws.getDuration()
        if (dur > 0 && Math.abs(t - ws.getCurrentTime() / dur) > 0.01) ws.seekTo(t)
      }
    }
    el.addEventListener("timeupdate", sync)
    return () => {
      el.removeEventListener("timeupdate", sync)
      ws.destroy()
      wsRef.current = null
      // destroy 后彻底清空容器，避免旧渲染层残留累积
      container.innerHTML = ""
    }
  }, [waveAudioRef?.current, waveAudioRef?.current?.src, pronRecording, waveSegment])

  // ── 会话状态 ──
  const [phase, setPhase] = useState<Phase>("idle")
  /** 跟读录音组件句柄（F5 触发录音/停止） */
  const pronRef = useRef<PronunciationPracticeHandle>(null)
  const [session, setSession] = useState<SentenceEntry[]>([])
  /** session 每项对应的课程原始句子索引（视频/SRT 联动用） */
  const [sessionSrcIdx, setSessionSrcIdx] = useState<number[]>([])
  const [index, setIndex] = useState(0)
  // 逐词独立输入：wordInputs[i] = 第 i 个单词已输入的字母串（可任意长）
  const [wordInputs, setWordInputs] = useState<string[]>([])
  const [activeIdx, setActiveIdx] = useState(0) // 当前激活（正在输入）的单词索引
  const [submitted, setSubmitted] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [passed, setPassed] = useState(false)

  // ── 统计 ──
  /** 课程总通过数（数据库维度，进度条按课程全部句子计算，而非本次随机会话） */
  const [coursePassed, setCoursePassed] = useState(0)
  const [passedCount, setPassedCount] = useState(0)
  const [errorCount, setErrorCount] = useState(0)
  const [masteredCount, setMasteredCount] = useState(0)
  const [newWords, setNewWords] = useState(0)
  const [hintCount, setHintCount] = useState(0)
  const [startAt, setStartAt] = useState<number | null>(null)
  const [elapsed, setElapsed] = useState(0)
  const [autoSpeak, setAutoSpeak] = useState(true)
  const [flashTick, setFlashTick] = useState(0)
  // 句子列表抽屉
  const [showSentences, setShowSentences] = useState(false)
  // 发音评测历史：按句子文本保存每次录音评分（翻句/切回可见）
  const [pronHistory, setPronHistory] = useState<Record<string, EvalResult>>({})
  // 本次会话是否录过音（默认不显示历史评分角标，只有录音返回后才显示）
  const [hasRecorded, setHasRecorded] = useState(false)
  // 听写重置计数：点「听写」+1，驱动 PronunciationPractice 重新挂载（清掉评分/答案显示）
  const [dictationTick, setDictationTick] = useState(0)

  const timerRef = useRef<number | null>(null)
  /** 显示答案前保存的输入快照：隐藏答案时恢复，不丢拼到一半的字符 */
  const inputSnapshotRef = useRef<string[] | null>(null)
  /** restoreKey 课程的起始位置（数据库读取完成前为 null，读取后为数字） */
  const [restoredPos, setRestoredPos] = useState<number | null>(null)

  // 加载课程进度（数据库已通过数 + 上次听写位置）
  useEffect(() => {
    if (!course) return
    let cancelled = false
    ;(async () => {
      // 位置改存数据库：先把旧的 localStorage 位置一次性迁移过来（只执行一次）
      if (restoreKey) {
        await migratePositions().catch(() => {})
      }
      if (cancelled) return
      const p = await getProgress(course.id).catch(() => null)
      if (cancelled) return
      setCoursePassed(p?.passed ?? 0)
      // lastPos 为 -1 表示读取失败（未知）：从 0 开始练，但保存时跳过，避免覆盖数据库
      setRestoredPos(p?.lastPos ?? 0)
    })()
    return () => { cancelled = true }
  }, [course?.id, course, restoreKey])

  /** 当前听写句在课程中的原始索引（句子列表高亮联动用） */
  const activeCourseIdx = sessionSrcIdx[index] ?? -1
  // 高亮项自动滚动到可见区域
  const activeItemRef = useRef<HTMLLIElement | null>(null)
  useEffect(() => {
    activeItemRef.current?.scrollIntoView({ block: "nearest" })
  }, [activeCourseIdx, showSentences])

  const sentence = session[index]
  const target = sentence?.en ?? ""
  const words = useMemo(() => getWords(target), [target])
  // 单词课程（绝大多数 en 为单个单词，允许少量词组）→ 文案用「单词」，句子课程用「句」
  const isWordMode = useMemo(() => {
    const s = course?.sentences ?? []
    if (s.length === 0) return false
    const singleWords = s.filter((x) => !x.en.includes(" ")).length
    return singleWords / s.length >= 0.9
  }, [course])
  const unitLabel = isWordMode ? "个单词" : "句"

  // ── 计时器 ──
  useEffect(() => {
    if (phase !== "playing" || startAt === null) return
    timerRef.current = window.setInterval(() => setElapsed(Date.now() - startAt), 250)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [phase, startAt])

  // 切换句子时自动发音：默认 TTS 朗读；autoPlayVoice 时调用 playVoice（单词课程自动播原声）
  // 录音状态用 ref 实时守卫（不进 deps）：避免停止录音（pronRecording 变化）时 effect 重跑导致重复自动播放
  const pronRecordingRef = useRef(pronRecording)
  useEffect(() => {
    pronRecordingRef.current = pronRecording
  }, [pronRecording])
  useEffect(() => {
    if (phase !== "playing" || !sentence || !autoSpeak) return
    const t = window.setTimeout(() => {
      // 互斥：录音中不自动播放发音
      if (pronRecordingRef.current) return
      if (playVoice && autoPlayVoice) playVoice()
      else if (!playVoice) speak(sentence.en)
    }, 300)
    return () => window.clearTimeout(t)
  }, [index, phase, sentence, autoSpeak, speak, playVoice, autoPlayVoice])

  // 卸载时停止语音
  useEffect(() => () => stop(), [stop])

  // 点击左上角 logo → 回到首页（重置到 idle，停止语音与计时）
  useEffect(() => {
    const onGoHome = () => {
      stop()
      setPhase("idle")
    }
    window.addEventListener("speller:go-home", onGoHome)
    return () => window.removeEventListener("speller:go-home", onGoHome)
  }, [stop])

  // ── 进度保存（每句实时累加，退出/完成都不丢）──
  const savePatch = useCallback(
    (patch: Parameters<typeof updateProgress>[1]) => {
      if (course) updateProgress(course.id, patch).catch(() => {})
    },
    [course],
  )

  // 挂载时从 SQLite 加载该课程历史评分（切页/刷新后仍能看到）
  // 依赖 course?.id 而非 course 对象：听写页每次播放发音都会重新渲染并新建 course 对象，
  // 若依赖对象引用，会反复从数据库加载评分，覆盖「听写」按钮清除的评分显示
  useEffect(() => {
    if (!course) return
    let cancelled = false
    getPronHistory(course.id)
      .then((hist) => {
        if (cancelled) return
        const map: Record<string, EvalResult> = {}
        for (const [sentence, raw] of Object.entries(hist)) {
          if (typeof raw === "object" && raw !== null) {
            map[sentence] = raw as EvalResult
          }
        }
        setPronHistory(map)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [course?.id])

  // 本轮完成（done）时累加完成轮数
  useEffect(() => {
    if (phase !== "done" || !course) return
    savePatch({ completed: 1 })
  }, [phase, course, savePatch])

  // ── 进入下一句 ──
  // 显示答案状态（revealed）切句后延续：开启后后续句子/单词都直接显示答案，
  // 再按一次「显示答案」才关闭（toggle 逻辑在 showAnswer 与 Tab/右⌘ 分支）。
  // 延续时新句输入直接填答案（显示答案本质 = 输入区填入答案）
  const gotoNext = useCallback(() => {
    const next = index + 1
    if (next >= session.length) {
      setPhase("done")
      return
    }
    const nextWords = getWords(session[next].en)
    inputSnapshotRef.current = null
    setIndex(next)
    setWordInputs(revealed ? nextWords.map((w) => w) : nextWords.map(() => ""))
    setActiveIdx(0)
    setSubmitted(false)
    setPassed(false)
  }, [index, session, revealed])

  // ── 回到上一句（无上句则忽略）──
  const gotoPrev = useCallback(() => {
    const prev = index - 1
    if (prev < 0) return
    const prevWords = getWords(session[prev].en)
    inputSnapshotRef.current = null
    setIndex(prev)
    setWordInputs(revealed ? prevWords.map((w) => w) : prevWords.map(() => ""))
    setActiveIdx(0)
    setSubmitted(false)
    setPassed(false)
  }, [index, session, revealed])

  // ── 句子列表抽屉：点击某句 → 跳到该句听写 ──
  // 该句在本组 session 中 → 直接跳转；不在 → 把当前进度位置的句子替换为点击句
  const jumpToCourseSentence = useCallback(
    (courseIndex: number) => {
      const target = course?.sentences[courseIndex]
      if (!target) return
      const j = sessionSrcIdx.indexOf(courseIndex)
      if (j >= 0) {
        // 本组已有该句：跳转到对应位置
        setIndex(j)
      } else {
        // 本组没有：替换当前句位置（进度位置不变，句子换成点击句）
        setSession((prev) => prev.map((item, k) => (k === index ? target : item)))
        setSessionSrcIdx((prev) => prev.map((v, k) => (k === index ? courseIndex : v)))
      }
      // 重置输入状态，进入该句听写
      inputSnapshotRef.current = null
      setWordInputs(getWords(target.en).map(() => ""))
      setActiveIdx(0)
      setSubmitted(false)
      setRevealed(false)
      setPassed(false)
      // 外部联动（视频页：SRT 定位该句原声）
      onJumpToSentence?.(courseIndex)
    },
    [course, sessionSrcIdx, index, onJumpToSentence],
  )

  // 提交通过后稍作停留（撒花动画），自动进入下一句
  useEffect(() => {
    if (!passed || phase !== "playing") return
    const t = window.setTimeout(() => gotoNext(), 1400)
    return () => window.clearTimeout(t)
  }, [passed, phase, gotoNext])

  // ── 动作 ──
  // course 对象每次 render 都是新引用：用 ref 持有最新值，避免 startGame 随计时器反复重建
  const courseRef = useRef(course)
  useEffect(() => {
    courseRef.current = course
  }, [course])
  const startGame = useCallback(() => {
    const c = courseRef.current
    const pool = c?.sentences ?? []
    const sessionSize = c?.sessionSize ?? 10
    // 记录课程原始索引，供视频/SRT 联动。
    // 全量课程（sessionSize ≥ 总数，如单词听写整 Unit 顺序学）不洗牌：
    // 方向键上一个/下一个按原序切换；抽查课程（sessionSize < 总数）才洗牌
    const poolIdx = pool.map((_, i) => i)
    const idx = sessionSize >= pool.length ? poolIdx : shuffle(poolIdx).slice(0, sessionSize)
    const s = idx.map((i) => pool[i])
    if (s.length === 0) return
    // 位置记忆：restoreKey 课程（如单词听写）从数据库的上次位置继续，而不是重头开始
    const start = restoreKey ? Math.max(0, Math.min(restoredPos ?? 0, s.length - 1)) : 0
    setSession(s)
    setSessionSrcIdx(idx)
    setIndex(start)
    inputSnapshotRef.current = null
    setWordInputs(getWords(s[start].en).map(() => ""))
    setActiveIdx(0)
    setSubmitted(false)
    setRevealed(false)
    setPassed(false)
    setPassedCount(0)
    setErrorCount(0)
    setMasteredCount(0)
    setNewWords(0)
    setHintCount(0)
    setElapsed(0)
    setStartAt(Date.now())
    setPhase("playing")
  }, [restoreKey, restoredPos])

  // 记住当前位置：切句/跳转时写入数据库，下次进入从该位置继续。
  // deps 只用 course.id：course 对象每次 render 都是新引用，若进 deps 会随计时器
  // （setElapsed 每 250ms）反复触发保存，把位置覆盖回旧值
  useEffect(() => {
    if (!restoreKey || phase !== "playing" || !course) return
    // 位置未知（读取失败）时不保存，避免把数据库中的上次位置覆盖成 0
    if ((restoredPos ?? -1) < 0) return
    updateProgress(course.id, { lastPos: index }).catch(() => {})
  }, [restoreKey, phase, index, course?.id, restoredPos])

  // 独立练习路由：挂载后自动开始（restoreKey 课程等待数据库位置加载完成再开始）
  useEffect(() => {
    if (autoStart && phase === "idle" && (!restoreKey || restoredPos !== null)) {
      startGame()
    }
  }, [autoStart, phase, startGame, restoreKey, restoredPos])

  // 当前句变化时，把课程原始索引通知视频页（SRT 联动）
  useEffect(() => {
    if (onCurrentSentence && sessionSrcIdx[index] !== undefined) {
      onCurrentSentence(sessionSrcIdx[index])
    }
  }, [index, sessionSrcIdx, onCurrentSentence])

  /** 停止一切播放（TTS + 单词原声 + 视频/音频页面媒体），开始录音前/播放按钮停止时调用 */
  const stopAllPlayback = useCallback(() => {
    stop()
    waveAudioRef?.current?.pause()
    onStopVoice?.()
    setIsPlaying(false)
  }, [stop, waveAudioRef, onStopVoice])

  const replay = useCallback(() => {
    // 互斥：录音中不播放原声/发音
    if (pronRecording) return
    // 播放中：按钮再点 → 停止播放（换状态后作为暂停/停止键）
    if (isPlaying) {
      stopAllPlayback()
      return
    }
    setIsPlaying(true)
    if (playVoice) {
      playVoice()
      return
    }
    if (sentence) speak(sentence.en, () => setIsPlaying(false))
  }, [sentence, speak, playVoice, pronRecording, isPlaying, stopAllPlayback])

  /** 跟读录音入口（按钮 / F5）：开始录音前打断一切播放，保证互斥；
   *  停止录音（用户手势）时恢复 AudioContext，保证评测返回的提示音与拼写成功音量一致 */
  const toggleRecording = useCallback(() => {
    if (!pronRecording) stopAllPlayback()
    unlockAudio()
    pronRef.current?.toggle()
  }, [pronRecording, stopAllPlayback, unlockAudio])

  /** 「听写」按钮：重置当前句输入状态 + 清除评分显示 + 播放发音，开始新一轮打字听写 */
  const startDictation = useCallback(() => {
    inputSnapshotRef.current = null
    setWordInputs(getWords(target).map(() => ""))
    setActiveIdx(0)
    setSubmitted(false)
    setRevealed(false)
    setPassed(false)
    // 重置录音标记 + 清除当前句评分，让输入区立即回到空白听写状态（评分角标/着色消失）
    setHasRecorded(false)
    setPronHistory((prev) => {
      if (!(target in prev)) return prev
      const next = { ...prev }
      delete next[target]
      return next
    })
    setDictationTick((t) => t + 1)
    if (playVoice) playVoice()
    else if (sentence) speak(sentence.en)
  }, [target, sentence, playVoice, speak])

  const submit = useCallback(() => {
    if (!sentence || submitted || revealed) return
    const correct = words.every((w, i) => (wordInputs[i] ?? "").toLowerCase() === w.toLowerCase())
    if (correct) {
      setSubmitted(true)
      setPassed(true)
      setPassedCount((c) => c + 1)
      setCoursePassed((c) => c + 1)
      savePatch({ passed: 1 })
      // 撒花庆祝（canvas-confetti basic cannon）+ 撒花音效
      confetti({ particleCount: 100, spread: 70, ticks: 60, origin: confettiOrigin })
      playSuccess()
    } else {
      setSubmitted(true)
      setErrorCount((n) => n + 1)
      savePatch({ errors: 1 })
      setFlashTick((f) => f + 1)
      // 自动跳到第一个拼错的单词，方便直接修改
      const firstErr = words.findIndex((w, i) => (wordInputs[i] ?? "").toLowerCase() !== w.toLowerCase())
      if (firstErr >= 0) setActiveIdx(firstErr)
    }
  }, [sentence, submitted, revealed, words, wordInputs, savePatch, confettiOrigin])

  const showAnswer = useCallback(() => {
    if (!sentence || passed) return
    if (revealed) {
      // 再次按下 → 隐藏答案：恢复显示答案前的输入（不丢拼到一半的字符）
      setRevealed(false)
      setWordInputs(inputSnapshotRef.current ?? words.map(() => ""))
      inputSnapshotRef.current = null
    } else {
      // 显示答案：先保存当前输入快照（拼到一半的字符），隐藏答案时恢复
      inputSnapshotRef.current = wordInputs
      setRevealed(true)
      setWordInputs(words.map((w) => w))
      setHintCount((h) => h + 1)
    }
  }, [sentence, passed, revealed, words, wordInputs])

  const markMastered = useCallback(() => {
    if (!sentence || passed) return
    setMasteredCount((c) => c + 1)
    setPassed(true)
    savePatch({ mastered: 1 })
    gotoNext()
  }, [sentence, passed, gotoNext, savePatch])

  const markNewWord = useCallback(() => {
    if (!sentence || passed) return
    setNewWords((c) => c + 1)
    setPassed(true)
    savePatch({ newWords: 1 })
    gotoNext()
  }, [sentence, passed, gotoNext, savePatch])


  // ── 键盘监听 ──
  useEffect(() => {
    if (phase !== "playing" || !sentence) return

    const onKeyDown = (e: KeyboardEvent) => {
      // 本句已通过：停留撒花，仅响应 Enter 进入下一句
      if (passed) {
        if (e.key === "Enter") {
          e.preventDefault()
          gotoNext()
        }
        return
      }

      // 单独按下右 ⌘：直接切换显示/隐藏答案（按住不重复触发）
      if (e.code === "MetaRight" && !e.repeat) {
        e.preventDefault()
        if (revealed) {
          // 隐藏答案：恢复显示答案前的输入（不丢拼到一半的字符）
          setRevealed(false)
          setWordInputs(inputSnapshotRef.current ?? words.map(() => ""))
          inputSnapshotRef.current = null
        } else {
          showAnswer()
        }
        return
      }

      // Cmd / Command 组合快捷键（macOS）
      if (e.metaKey) {
        const k = e.key.toLowerCase()
        if (k === "m") {
          e.preventDefault()
          markMastered()
          return
        }
        if (k === "n") {
          e.preventDefault()
          markNewWord()
          return
        }
        if (k === "d") {
          e.preventDefault()
          startDictation()
          return
        }
        return
      }

      // F5：跟读录音（录音中按 → 停止并评分）
      // F5 默认是刷新页面，必须 preventDefault
      if (e.key === "F5") {
        e.preventDefault()
        toggleRecording()
        return
      }

      // Tab：播放发音（显示答案时按 → 隐藏答案，回到输入状态）
      // Tab 默认是焦点切换，必须 preventDefault
      if (e.key === "Tab") {
        e.preventDefault()
        // 互斥：录音中不播放发音
        if (pronRecording) return
        if (revealed) {
          // 隐藏答案：恢复显示答案前的输入（不丢拼到一半的字符）
          setRevealed(false)
          setWordInputs(inputSnapshotRef.current ?? words.map(() => ""))
          inputSnapshotRef.current = null
        } else {
          replay()
        }
        return
      }

      // 空格：跳到下一个单词；到末尾则循环回第一个单词（保留已输入内容）
      if (e.key === " ") {
        e.preventDefault()
        if (submitted) setSubmitted(false)
        // Shift+空格：反向回退激活单词，到开头则循环回最后一个单词
        if (e.shiftKey) {
          if (activeIdx - 1 >= 0) {
            setActiveIdx((a) => a - 1)
          } else {
            setActiveIdx(words.length - 1)
            setRevealed(false)
          }
          return
        }
        if (activeIdx + 1 < words.length) {
          setActiveIdx((a) => a + 1)
        } else {
          setActiveIdx(0)
          setRevealed(false)
        }
        return
      }

      // 左/右方向键：切换到上一句/下一句
      if (e.key === "ArrowRight") {
        e.preventDefault()
        gotoNext()
        return
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        gotoPrev()
        return
      }

      // 退格 / Delete：删除当前激活单词的最后一个字母；
      // 当前词删空后继续按 → 自动跳到上一个单词继续删除（跨单词回溯）
      if (e.key === "Backspace" || e.key === "Delete") {
        e.preventDefault()
        setSubmitted(false)
        const next = [...wordInputs]
        let target = activeIdx
        if ((next[target] ?? "").length > 0) {
          next[target] = (next[target] ?? "").slice(0, -1)
        } else {
          // 当前词为空 → 往前找第一个有字母的单词删除，并跳过去
          let moved = false
          for (let i = target - 1; i >= 0; i--) {
            if ((next[i] ?? "").length > 0) {
              next[i] = (next[i] ?? "").slice(0, -1)
              target = i
              moved = true
              break
            }
          }
          if (!moved) return // 前面都空，无操作
        }
        setWordInputs(next)
        if (target !== activeIdx) setActiveIdx(target)
        return
      }

      // 提交 / 显示答案后进入下一句
      if (e.key === "Enter") {
        e.preventDefault()
        if (revealed) {
          gotoNext()
        } else {
          submit()
        }
        return
      }

      // 字母：追加到当前激活单词（数量不限，超出部分显示为红色）。
      // 显示答案状态下禁止输入，避免误打
      if (/^[a-zA-Z]$/.test(e.key) && !revealed) {
        e.preventDefault()
        playType()
        if (submitted) setSubmitted(false)
        setWordInputs((prev) => {
          const next = [...prev]
          next[activeIdx] = (next[activeIdx] ?? "") + e.key
          return next
        })
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [phase, sentence, activeIdx, wordInputs, words, submitted, revealed, replay, submit, showAnswer, markMastered, markNewWord, startDictation, gotoNext, gotoPrev, playType, pronRecording, toggleRecording])

  // ── 渲染数据 ──
  const chars = useMemo(() => buildDisplay(target, wordInputs, activeIdx), [target, wordInputs, activeIdx])
  const fullyCorrect = submitted && !revealed && words.every((w, i) => (wordInputs[i] ?? "").toLowerCase() === w.toLowerCase())
  // 音节着色模式：答对撒花后，单词按音节红黑相间显示（有音节数据时）
  const syllableMode = fullyCorrect && !!sentence?.syllables?.length

  // 把 chars 按单词分组：每个单词的字母包进不可换行容器，只在单词间换行（避免单词被截断）
  const charGroups = useMemo(() => {
    type Group = { kind: "word" | "space" | "punct"; chars: CharState[]; startIdx: number }
    const groups: Group[] = []
    let current: CharState[] | null = null
    let currentStart = 0
    for (let gi = 0; gi < chars.length; gi++) {
      const c = chars[gi]
      if (c.status === "space") {
        if (current) { groups.push({ kind: "word", chars: current, startIdx: currentStart }); current = null }
        groups.push({ kind: "space", chars: [c], startIdx: gi })
      } else if (c.status === "punct") {
        if (current) { groups.push({ kind: "word", chars: current, startIdx: currentStart }); current = null }
        groups.push({ kind: "punct", chars: [c], startIdx: gi })
      } else {
        if (!current) { current = []; currentStart = gi }
        current.push(c)
      }
    }
    if (current) groups.push({ kind: "word", chars: current, startIdx: currentStart })
    return groups
  }, [chars])

  // 进度条按课程总句数计算（数据库已通过 / 全部句子），与句子列表一致
  const courseTotal = course?.sentences.length ?? session.length
  const progressPct = courseTotal > 0 ? Math.round((coursePassed / courseTotal) * 100) : 0

  // 当前句的发音评分单词级结果（本次会话录音后才显示，避免默认亮出历史评分）
  const pronWords = hasRecorded ? pronHistory[target]?.words : undefined
  // charGroups 里每个单词组的索引 → 该单词在句子中的序号（用于把评分对齐到对应单词槽）
  const wordSeqByGroup = useMemo(() => {
    const m = new Map<number, number>()
    let seq = 0
    charGroups.forEach((g, gi) => {
      if (g.kind === "word") {
        m.set(gi, seq)
        seq++
      }
    })
    return m
  }, [charGroups])

  // ── 进度条（渲染到页面顶部固定槽位 #progress-slot，不随内容居中）──
  const progressBar =
    phase === "playing" ? (
      <div className="mx-auto flex w-full max-w-5xl items-center gap-3 px-6 py-2.5">
        <span
          className="text-sm tabular-nums text-muted-foreground"
          title={`第 ${activeCourseIdx + 1} ${unitLabel} / 共 ${courseTotal}`}
        >
          #{activeCourseIdx + 1} / {courseTotal}
        </span>
        <Progress value={progressPct} className="h-1.5 flex-1" />
        <span className="text-sm tabular-nums text-muted-foreground">{formatTime(elapsed)}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowSentences(true)}
          title="句子列表"
          aria-label="句子列表"
          className="gap-1.5"
        >
          <List className="size-3.5" />
          句子
        </Button>
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={() => {
            stop()
            if (onExit) onExit()
            else setPhase("idle")
          }}
          title="退出"
          aria-label="退出"
        >
          <LogOut className="size-3.5" />
        </Button>
      </div>
    ) : null

  const progressPortal =
    typeof document !== "undefined" && progressBar && document.getElementById("progress-slot")
      ? createPortal(progressBar, document.getElementById("progress-slot")!)
      : null

  // ── 底部栏左右箭头（上一句/下一句，渲染到 footer 槽位）──
  const prevBtn =
    phase === "playing" ? (
      <Button
        variant="ghost"
        size="icon"
        onClick={gotoPrev}
        disabled={index <= 0}
        title="上一句 (←)"
        aria-label="上一句"
        className="rounded-full"
      >
        <SkipBack className="size-5" />
      </Button>
    ) : null
  const nextBtn =
    phase === "playing" ? (
      <Button
        variant="ghost"
        size="icon"
        onClick={gotoNext}
        disabled={index >= session.length - 1}
        title="下一句 (→)"
        aria-label="下一句"
        className="rounded-full"
      >
        <SkipForward className="size-5" />
      </Button>
    ) : null

  // ── 底部快捷键按钮组（可点击，渲染到 footer 中间槽位）──
  const shortcutBar =
    phase === "playing" ? (
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="secondary" size="sm" onClick={markMastered} title="掌握" aria-label="掌握" className="gap-1.5">
          掌握
          <Kbd>⌘M</Kbd>
        </Button>
        <Button variant="secondary" size="sm" onClick={markNewWord} title="生词" aria-label="生词" className="gap-1.5">
          生词
          <Kbd>⌘N</Kbd>
        </Button>
        {/* 跟读录音：录音中切换为「录音模式」停止样式 */}
        <Button
          variant="secondary"
          size="sm"
          onClick={toggleRecording}
          title={pronRecording ? "停止录音 (F5)" : "跟读录音 (F5)"}
          aria-label={pronRecording ? "停止录音" : "跟读录音"}
          className={`gap-1.5 ${pronRecording ? "border-destructive/50 bg-destructive/10 text-destructive hover:bg-destructive/15 hover:text-destructive" : ""}`}
        >
          {pronRecording ? <Square className="size-3.5 fill-current" /> : <Mic className="size-3.5" />}
          <Kbd>F5</Kbd>
        </Button>
        <span className="mx-2 h-6 w-px bg-border" />
        {/* 播放器三连：上一句 / 播放 / 下一句（等大，居中） */}
        {prevBtn}
        <button
          type="button"
          onClick={replay}
          title={isPlaying ? "停止播放" : playVoice ? "播放原声 (Tab)" : "播放发音 (Tab)"}
          aria-label={isPlaying ? "停止播放" : playVoice ? "播放原声" : "播放发音"}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {isPlaying ? (
            <Pause className="size-4 fill-current" />
          ) : (
            <Play className="size-4 fill-current translate-x-[1px]" />
          )}
        </button>
        {nextBtn}
        <span className="mx-2 h-6 w-px bg-border" />
        <Button variant="secondary" size="sm" onClick={showAnswer} title="显示答案 (右⌘)" aria-label="显示答案" className="gap-1.5">
          <Eye className="size-3.5" />
          <Kbd>⌘</Kbd>
        </Button>
        <Button variant="secondary" size="sm" onClick={startDictation} title="听写 (⌘D)" aria-label="听写" className="gap-1.5">
          听写
          <Kbd>⌘D</Kbd>
        </Button>
        <Button variant="secondary" size="sm" onClick={submit} title="提交" aria-label="提交" className="gap-1.5">
          提交
          <Kbd>Enter</Kbd>
        </Button>
      </div>
    ) : null
  const shortcutPortal =
    typeof document !== "undefined" && document.getElementById("shortcut-slot")
      ? createPortal(shortcutBar, document.getElementById("shortcut-slot")!)
      : null

  // ── 开始前（所有页面均 autoStart，挂载后立即进入听写，不显示开始页）──
  if (phase === "idle") {
    return null
  }

  // ── 完成页 ──
  if (phase === "done") {
    const accuracy = session.length > 0 ? Math.round((passedCount / session.length) * 100) : 0
    return (
      <>
        {progressPortal}
        {shortcutPortal}
        <div className="flex h-full w-full flex-col items-center justify-center text-center">
          <div className="mb-6 text-7xl">{accuracy >= 90 ? "🎉" : accuracy >= 60 ? "👍" : "💪"}</div>
          <h1 className="mb-3 text-4xl font-bold text-foreground">本组完成！</h1>
          <p className="mb-8 text-base text-muted-foreground">共 {session.length} {unitLabel}</p>
          <div className="mb-10 grid grid-cols-2 gap-x-14 gap-y-6 text-center sm:grid-cols-4">
            <div>
              <div className="text-4xl font-bold text-emerald-500">{passedCount}</div>
              <div className="mt-1 text-sm text-muted-foreground">听写通过</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-500">{errorCount}</div>
              <div className="mt-1 text-sm text-muted-foreground">错误提交</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-500">{masteredCount}</div>
              <div className="mt-1 text-sm text-muted-foreground">已掌握</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-500">{newWords}</div>
              <div className="mt-1 text-sm text-muted-foreground">生词</div>
            </div>
          </div>
          <div className="mb-8 text-base text-muted-foreground">
            用时 {formatTime(elapsed)} · 提示 {hintCount} 次 · 正确率 {accuracy}%
          </div>
          <Button onClick={startGame} size="lg" className="h-12 px-12 text-lg">
            再来一组
          </Button>
        </div>
      </>
    )
  }

  // ── 听写中 ──
  return (
    <>
      {progressPortal}
      {shortcutPortal}
      {/* 句子列表抽屉（shadcn Sheet） */}
      <Sheet open={showSentences} onOpenChange={setShowSentences} modal={false}>
        <SheetContent side="right" className="w-full max-w-xl gap-0 p-0">
          <SheetHeader className="border-b border-border px-5 py-4">
            <SheetTitle className="text-lg font-semibold">{course?.name ?? "课程"}</SheetTitle>
            {/* 统计信息：已通过 / 总数 / 已掌握 / 生词 / 错误提交 */}
            <SheetDescription className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="font-medium text-emerald-500">{passedCount} 已通过</span>
              <span>
                共 {courseTotal} {isWordMode ? "个" : "句"}
              </span>
              <span className="font-medium text-amber-500">{masteredCount} 已掌握</span>
              <span className="font-medium text-sky-500">{newWords} 生词</span>
              <span className="font-medium text-rose-500">{errorCount} 错误提交</span>
            </SheetDescription>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <ol className="space-y-2">
              {(course?.sentences ?? []).map((s, i) => {
                const isActive = i === activeCourseIdx
                return (
                <li key={i} ref={isActive ? activeItemRef : null}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowSentences(false)
                      jumpToCourseSentence(i)
                    }}
                    className={`flex w-full gap-4 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/40 ${
                      isActive
                        ? "bg-blue-50 ring-1 ring-blue-300 dark:bg-blue-950/40 dark:ring-blue-700"
                        : ""
                    }`}
                  >
                    <span className="w-8 shrink-0 text-right tabular-nums text-muted-foreground/70">
                      {i + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xl font-medium text-foreground">{s.en}</span>
                      <span className="block text-lg text-muted-foreground">{s.cn}</span>
                    </span>
                  </button>
                </li>
                )
              })}
            </ol>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex min-h-0 w-full flex-1 flex-col gap-6">
        {/* 中文句子（视频课程模式下隐藏，避免泄露答案）；单词课程在下方显示音标 */}
        {showCn && (
          <div key={`cn-${index}`} className="mt-[100px] text-center">
            {/* 音标：大字置顶；词组（多词）每个词的音标独立用 /…/ 包围。
                段内逗号/分号是多读音分隔（如 "ˈprɒdʒekt; prəˈdʒekt"），只取第一个读音 */}
            {sentence.phonetic && (
              <p className="text-3xl font-normal leading-snug text-muted-foreground sm:text-4xl">
                {sentence.phonetic
                  .trim()
                  .replace(/^\/+|\/+$/g, "")
                  .split(/\s+/)
                  .filter(Boolean)
                  .map((seg, i) => (
                    <span key={i} className={i > 0 ? "ml-[0.45em]" : ""}>
                      / {seg.split(/[,;]/)[0].trim()} /
                    </span>
                  ))}
              </p>
            )}
            {/* 中文释义：小字放音标下方；词性前缀（n./v. 等）保持原样，第一个释义（分号/换行前）加粗加黑 */}
            {(() => {
              const posMatch = sentence.cn.match(/^((?:[a-z]+\.\/?)+ )/)
              const rest = posMatch ? sentence.cn.slice(posMatch[1].length) : sentence.cn
              const m = rest.match(/^([^；;\n]+[；;\n]?)/)
              const bold = m ? m[1] : null
              const tail = m ? rest.slice(m[1].length) : rest
              return (
                <h2 className="mt-2 text-xl leading-relaxed text-muted-foreground/70">
                  {posMatch?.[1]}
                  {bold && <span className="font-semibold text-foreground/80">{bold}</span>}
                  {tail}
                </h2>
              )
            })()}
          </div>
        )}

        {/* 英文句子输入区 */}
        <div key={`en-${index}`} className="flex min-h-0 w-full flex-1 flex-col items-center justify-center">
          <div
            className={`font-input flex min-h-[4.4em] w-full max-w-5xl flex-1 flex-col items-center justify-center text-center text-4xl font-medium leading-none sm:text-[2.875rem] ${
              fullyCorrect && !syllableMode ? "text-violet-500" : "text-foreground"
            }`}
          >
            {chars.length === 0 && <span className="text-muted-foreground">— 听发音，用键盘输入英文句子 —</span>}
            {/* 内层行：按单词分组渲染，flex wrap 只在单词之间换行，单词内部不截断 */}
            <span className="inline-flex flex-wrap justify-center">
              {charGroups.map((group, gIndex) => {
                // 句末标点：不占独立行，挂在最后一个单词/空格右侧
                const endPunct = chars[chars.length - 1]
                const isEndPunct = gIndex === charGroups.length - 1 && endPunct.status === "punct"
                // 句末标点挂在它前面那一组（单词或空格）右侧，避免自身被跳过丢失
                const showEndPunct =
                  endPunct.status === "punct" &&
                  gIndex === charGroups.length - 2
                const endPunctMark = showEndPunct ? (
                  <span
                    className="pointer-events-none absolute inset-y-0 left-full flex items-end pl-[0.25em] text-muted-foreground"
                    style={{ transform: "translateY(0.14em)" }}
                  >
                    {endPunct.ch}
                  </span>
                ) : null
                if (isEndPunct) return null
                if (group.kind === "punct") {
                  // 句中标点自动显示：与字母同线，左侧留出呼吸空间
                  return (
                    <span
                      key={gIndex}
                      className="relative inline-flex h-[2.2em] flex-none items-end pl-[0.25em] pr-[0.08em] text-muted-foreground"
                      style={{ transform: "translateY(-0.19em)" }}
                    >
                      {group.chars[0].ch}
                      {endPunctMark}
                    </span>
                  )
                }
                if (group.kind === "space") {
                  // 单词之间的空格：留白；若其后紧跟句末标点，标点挂在这里
                  return (
                    <span key={gIndex} className="relative inline-block w-[0.45em] flex-none">
                      {endPunctMark}
                    </span>
                  )
                }
                // 单词：字母包进不可换行容器，flex-wrap 不会在单词中间断开
                const wordSeq = wordSeqByGroup.get(gIndex) ?? -1
                const pron = pronWords?.[wordSeq]
                // 发音评测读错 → 整词下划线标红（优先级最高，优先于听写错误/激活态）
                const pronWrong = !!pron?.wrong
                // 音节着色：答对撒花后、显示答案时（灰/深灰）、录音评分返回后（红黑）按音节区分。
                // 词组（整组音节含空格边界标记）按词分组后匹配当前词，避免跨词匹配失败
                const wordText = group.chars.map((cc) => cc.ch).join("")
                const syllMap =
                  (syllableMode || revealed || !!pronWords) && sentence?.syllables?.length
                    ? wordSyllableIdx(wordText, wordSyllableGroups(sentence.syllables)[gIndex] ?? sentence.syllables)
                    : null
                return (
                  <span
                    key={gIndex}
                    className={`group/word relative inline-flex flex-none ${pron ? "mr-[0.6em]" : ""}`}
                  >
                    {/* 发音评分：以轻量上标贴在单词右上角 */}
                    {pron && (
                      <span
                        className={`pointer-events-none absolute bottom-[1.5em] left-full ml-[0.3em] z-10 whitespace-nowrap text-[0.4em] font-bold leading-none ${
                          pron.wrong ? "text-rose-500" : "text-muted-foreground/70"
                        }`}
                        title={pron.wrong ? "发音错误" : `发音 ${Math.round(pron.score)} 分`}
                      >
                        {pron.wrong ? "✗" : Math.round(pron.score)}
                      </span>
                    )}
                    {/* 字母行：overflow-hidden 裁掉超出词容器的下划线（窄错字时
                        下划线不穿过词间空格连到下一个词） */}
                    <span className="relative inline-flex flex-none overflow-hidden">
                    {group.chars.map((c, i) => {
                      const idx = group.startIdx + i
                      // 发音评分已反馈：直接把句子原版字母显示在槽位上（和打字一样）。
                      // 有音节数据 → 按音节红黑着色（与答对撒花一致）；否则按发音质量着色
                      if (pron) {
                        const syllIdx =
                          syllMap && syllMap[i] !== undefined ? syllMap[i] : null
                        const letterColor = syllIdx !== null
                          ? syllIdx % 2 === 1
                            ? "text-red-500"
                            : "text-foreground"
                          : pronWrong
                            ? "text-rose-500"
                            : pron.score >= 70
                              ? "text-violet-500"
                              : "text-amber-500"
                        const underlineColor = pronWrong
                          ? "bg-rose-500"
                          : syllIdx !== null
                            ? "bg-neutral-400" // 音节红黑模式下下划线回归中性，不干扰红黑区分
                            : pron.score >= 70
                              ? "bg-violet-500"
                              : "bg-amber-500"
                        return (
                          <span
                            key={idx}
                            className="relative inline-flex h-[2.2em] flex-none items-end"
                            style={{ transition: "width 120ms ease" }}
                          >
                            <span
                              className={`leading-none ${letterColor}`}
                              style={{ transform: "translateY(-0.14em)" }}
                            >
                              {c.ch}
                            </span>
                            <span
                              className={`absolute bottom-0 left-0 h-[3px] rounded-[2px] ${underlineColor}`}
                              style={{ width: `${c.underlineEm ?? 0.5}em` }}
                            />
                          </span>
                        )
                      }
                      if (c.status === "pending") {
                        // 未输入：灰色横线；激活单词 → 绿色横线。隐形占位字符保证行高恒定
                        return (
                          <span
                            key={idx}
                            className="relative inline-flex h-[2.2em] flex-none items-center"
                            style={{ transition: "width 120ms ease" }}
                          >
                            {/* 未输入：隐形目标字母撑宽（字母层宽度 = 目标字母宽） */}
                            <span className="invisible leading-none">{c.ch}</span>
                          </span>
                        )
                      }
                      if (c.status === "correct") {
                        // 写对的字母：底部对齐下划线；正常输入显示绿色，显示答案后显示浅灰色
                        // 音节着色：答对撒花后红黑相间；显示答案时灰/深灰交替
                        const syllIdx =
                          syllMap && syllMap[i] !== undefined ? syllMap[i] : null
                        const letterColor = syllIdx !== null
                          ? syllIdx % 2 === 1
                            ? "text-red-500"
                            : "text-foreground"
                          : revealed
                            ? "text-muted-foreground"
                            : "text-violet-500"
                        return (
                          <span
                            key={idx}
                            className="relative inline-flex h-[2.2em] flex-none items-end"
                            style={{ transition: "width 120ms ease" }}
                          >
                            <span
                              className={`leading-none ${letterColor}`}
                              style={{ transform: "translateY(-0.14em)" }}
                            >
                              {c.ch}
                            </span>
                          </span>
                        )
                      }
                      if (c.status === "wrong") {
                        // 错误/多余字母：字母红色，整词提交后下划线标红；
                        // overflow（多余输入）槽位挂载时从 0 宽展开，与宽度过渡一致的平滑感
                        return (
                          <span
                            key={idx}
                            className={`relative inline-flex h-[2.2em] flex-none items-end ${c.overflow ? "animate-slot-grow" : ""}`}
                            style={{
                              transition: "width 120ms ease",
                              ...(c.overflow ? ({ "--slot-w": `${c.widthEm ?? 0.6}em` } as React.CSSProperties) : {}),
                            }}
                          >
                            <span
                              className="leading-none text-rose-500"
                              style={{ transform: "translateY(-0.14em)" }}
                            >
                              {c.ch}
                            </span>
                          </span>
                        )
                      }
                      return <span key={idx}>{c.ch}</span>
                    })}
                    {endPunctMark}
                    {/* 词级连续下划线（整体一条，与字母分离）：
                        宽度 = max(Σ 目标字母宽, Σ 输入字母宽) + 两端 0.12em 余量——
                        窄错字（i）不变（不缩），宽错字（m/w）自动加长到覆盖字母，
                        超长槽位随展开平滑加长 */}
                    {!pron && (
                      <span
                        className={`pointer-events-none absolute bottom-0 h-[3px] rounded-full ${
                          group.chars[0]?.wordWrong && submitted
                            ? "bg-rose-500"
                            : passed
                              ? "bg-emerald-500"
                              : group.chars[0]?.active
                                ? "bg-violet-500"
                                : "bg-neutral-400"
                        }`}
                        style={{
                          left: 0,
                          width: `${Math.max(
                            group.chars.reduce((s, c) => s + (c.underlineEm ?? 0.5), 0),
                            group.chars.reduce((s, c) => s + (c.widthEm ?? 0.5), 0),
                          ) + 0.24}em`,
                          transition: "width 120ms ease",
                        }}
                      />
                    )}
                    </span>
                  </span>
                )
              })}
            </span>
          </div>
        </div>

        {/* 反馈提示 */}
        <div key={`flash-${flashTick}`} className="flex h-7 items-center justify-center text-lg">
          {passed ? (
            <span className="flex items-center gap-2 font-medium text-emerald-500">
              <CheckCircle2 className="size-5" /> 完美！
            </span>
          ) : (
            // 默认（未提交、未显示答案、无错误）：不显示提示文字，仅保留高度
            <span />
          )}
        </div>

        {/* 发音评测：跟读录音评分
            key=句子+听写重置计数 → 切句/点「听写」时重新挂载；
            重新挂载后按 initialResult 恢复（听写重置时该句历史已被清除，回到空白） */}
        <PronunciationPractice
          key={`${target}-${dictationTick}`}
          ref={pronRef}
          sentence={target}
          initialResult={pronHistory[target] ?? null}
          onResult={(r) => {
            setPronHistory((prev) => ({ ...prev, [target]: r }))
            setHasRecorded(true)
            if (course) savePronScore(course.id, target, r).catch(() => {})
            // 录音评分 >85 分撒花庆祝（被拒结果不撒花；onEvaluationSuccess 已播提示音）
            if (!r.isRejected && r.total > 85) {
              confetti({ particleCount: 100, spread: 70, ticks: 60, origin: confettiOrigin })
            }
          }}
          onEvaluationSuccess={() => {
            playSuccess()
          }}
          onPlayVoice={startDictation}
          onRecordingChange={(on) => setPronRecording(on)}
          // 只有存在播放声波图区域（waveAudioRef）时才复用该容器；
          // 无音频的页面（如纯文本课程）传 undefined，录音组件自建容器
          waveContainer={waveAudioRef ? waveContainerRef : undefined}
        />

        {/* 声波图（whalelisten 同款）：WaveSurfer 波形，放在跟读录音下方，播放时进度从左到右读动 */}
        {waveAudioRef && (
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md bg-muted/5 px-5 py-3 shadow-[0_0_12px_rgba(0,0,0,0.07)]">
            <div ref={waveContainerRef} className="w-full cursor-pointer" style={{ minHeight: 60 }} />
          </div>
        )}
      </div>
    </>
  )
}
