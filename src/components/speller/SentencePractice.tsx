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
import { LogOut, CheckCircle2, Eye, ArrowLeft, ArrowRight, Volume2, BookMarked, Check, List } from "lucide-react"
import confetti from "canvas-confetti"
import { shuffle, type SentenceEntry, type Course } from "@/lib/speller/courses"
import { getProgress, updateProgress, getPronHistory, savePronScore } from "@/lib/speller/progress"
import PronunciationPractice, { type EvalResult } from "@/components/speller/PronunciationPractice"

type Phase = "idle" | "playing" | "done"
type CharStatus = "correct" | "wrong" | "pending" | "punct" | "space"

interface CharState {
  ch: string
  status: CharStatus
  /** 属于当前激活单词（整词绿色下划线） */
  active?: boolean
  /** 所属单词拼写错误（提交检查后整词下划线标红） */
  wordWrong?: boolean
  /** 槽位宽度（em，按字母实际宽度自适应，窄字母窄、宽字母宽） */
  widthEm?: number
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
    // 槽位宽度按【实际显示的字符】计算：
    // - pending/correct 显示目标字母 → 宽度稳定（输入正确不抖）
    // - wrong 显示用户输入的错误字符 → 按错误字符宽度排列，间距均匀
    for (let j = 0; j < wordTarget.length; j++) {
      const t = typed[j]
      const status: CharStatus = t === undefined ? "pending" : t.toLowerCase() === wordTarget[j] ? "correct" : "wrong"
      const ch = t ?? wordTarget[j]
      chars.push({ ch, status, active, wordWrong, widthEm: measureCharWidthEm(ch) })
    }
    // 多余输入：超出单词长度，显示在当前单词尾部（红色），不影响下一个单词
    for (let j = wordTarget.length; j < typed.length; j++) {
      chars.push({ ch: typed[j], status: "wrong", active, wordWrong, widthEm: measureCharWidthEm(typed[j]) })
    }
    wi++
  }
  return chars
}

function useSpeech() {
  const pendingRef = useRef<number | null>(null)
  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return
    const synth = window.speechSynthesis
    // Chrome 兼容：speechSynthesis 可能处于 paused 状态，speak 前先唤醒
    synth.resume()
    synth.cancel()
    const u = new SpeechSynthesisUtterance(text)
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
    playBuffer(successBufferRef.current, 1.0)
  }, [playBuffer])

  return { playType, playSuccess, soundReady: ready }
}

function formatTime(ms: number): string {
  const s = Math.floor(ms / 1000)
  const m = Math.floor(s / 60)
  return m > 0 ? `${m}:${String(s % 60).padStart(2, "0")}` : `${s}s`
}

export default function SentencePractice({
  course,
  autoStart = false,
  onExit,
  showCn = true,
  playVoice,
  onCurrentSentence,
  onJumpToSentence,
  confettiOrigin = { x: 0.5, y: 0.7 },
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
  /** 当前句在课程原始句子中的索引回调（视频/SRT 联动用） */
  onCurrentSentence?: (courseIndex: number) => void
  /** 点击句子列表中的某句，跳转到对应 SRT 时间点 */
  onJumpToSentence?: (courseIndex: number) => void
  /** 答对撒花的位置（canvas-confetti origin） */
  confettiOrigin?: { x: number; y: number }
}) {
  const { speak, stop } = useSpeech()
  const { playType, playSuccess } = useGameSounds()

  // ── 会话状态 ──
  const [phase, setPhase] = useState<Phase>("idle")
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
  const advanceRef = useRef<number | null>(null)

  const sentence = session[index]
  const target = sentence?.en ?? ""
  const words = useMemo(() => getWords(target), [target])

  // ── 计时器 ──
  useEffect(() => {
    if (phase !== "playing" || startAt === null) return
    timerRef.current = window.setInterval(() => setElapsed(Date.now() - startAt), 250)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [phase, startAt])

  // 切换句子时自动发音（视频模式用视频原声，禁用 TTS）
  useEffect(() => {
    if (phase !== "playing" || !sentence || !autoSpeak || playVoice) return
    const t = window.setTimeout(() => speak(sentence.en), 300)
    return () => window.clearTimeout(t)
  }, [index, phase, sentence, autoSpeak, speak, playVoice])

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
  }, [course])

  // 本轮完成（done）时累加完成轮数
  useEffect(() => {
    if (phase !== "done" || !course) return
    savePatch({ completed: 1 })
  }, [phase, course, savePatch])

  // ── 进入下一句 ──
  const gotoNext = useCallback(() => {
    const next = index + 1
    if (next >= session.length) {
      setPhase("done")
      return
    }
    setIndex(next)
    setWordInputs(getWords(session[next].en).map(() => ""))
    setActiveIdx(0)
    setSubmitted(false)
    setRevealed(false)
    setPassed(false)
  }, [index, session])

  // ── 回到上一句（无上句则忽略）──
  const gotoPrev = useCallback(() => {
    const prev = index - 1
    if (prev < 0) return
    setIndex(prev)
    setWordInputs(getWords(session[prev].en).map(() => ""))
    setActiveIdx(0)
    setSubmitted(false)
    setRevealed(false)
    setPassed(false)
  }, [index, session])

  // 提交通过后自动进入下一句
  useEffect(() => {
    if (!passed || phase !== "playing") return
    advanceRef.current = window.setTimeout(() => gotoNext(), 700)
    return () => {
      if (advanceRef.current) window.clearTimeout(advanceRef.current)
    }
  }, [passed, phase, gotoNext])

  // ── 动作 ──
  const startGame = useCallback(() => {
    const pool = course?.sentences ?? []
    const sessionSize = course?.sessionSize ?? 10
    // 洗牌同时记录课程原始索引，供视频/SRT 联动
    const idx = shuffle(pool.map((_, i) => i)).slice(0, sessionSize)
    const s = idx.map((i) => pool[i])
    if (s.length === 0) return
    setSession(s)
    setSessionSrcIdx(idx)
    setIndex(0)
    setWordInputs(getWords(s[0].en).map(() => ""))
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
  }, [course])

  // 独立练习路由：挂载后自动开始
  useEffect(() => {
    if (autoStart && phase === "idle") {
      startGame()
    }
  }, [autoStart, phase, startGame])

  // 当前句变化时，把课程原始索引通知视频页（SRT 联动）
  useEffect(() => {
    if (onCurrentSentence && sessionSrcIdx[index] !== undefined) {
      onCurrentSentence(sessionSrcIdx[index])
    }
  }, [index, sessionSrcIdx, onCurrentSentence])

  const replay = useCallback(() => {
    if (playVoice) {
      playVoice()
      return
    }
    if (sentence) speak(sentence.en)
  }, [sentence, speak, playVoice])

  /** 「听写」按钮：重置当前句输入状态 + 清除评分显示 + 播放发音，开始新一轮打字听写 */
  const startDictation = useCallback(() => {
    setWordInputs(getWords(target).map(() => ""))
    setActiveIdx(0)
    setSubmitted(false)
    setRevealed(false)
    setPassed(false)
    // 清除当前句评分历史与角标/答案显示，让输入区回到空白听写状态
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
    setRevealed(true)
    setWordInputs(words.map((w) => w))
    setHintCount((h) => h + 1)
  }, [sentence, passed, words])

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

  // ── 开始页键盘监听：按 Enter 直接开始听写 ──
  useEffect(() => {
    if (phase !== "idle") return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault()
        startGame()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [phase, startGame])

  // ── 键盘监听 ──
  useEffect(() => {
    if (phase !== "playing" || !sentence || passed) return

    const onKeyDown = (e: KeyboardEvent) => {
      // 单独按下右 ⌘：直接切换显示/隐藏答案（按住不重复触发）
      if (e.code === "MetaRight" && !e.repeat) {
        e.preventDefault()
        if (revealed) {
          setRevealed(false)
          setWordInputs(words.map(() => ""))
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
        return
      }

      // 反引号 `：播放发音（显示答案时按 → 隐藏答案，回到输入状态）
      // 同时匹配 e.key 和 e.code（中文输入法下 e.key 可能不是 `，但物理键 Backquote 不变）
      if (e.key === "`" || e.code === "Backquote") {
        e.preventDefault()
        if (revealed) {
          setRevealed(false)
          setWordInputs(words.map(() => ""))
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
  }, [phase, sentence, activeIdx, wordInputs, words, submitted, revealed, replay, submit, showAnswer, markMastered, markNewWord, gotoNext, gotoPrev, playType])

  // ── 渲染数据 ──
  const chars = useMemo(() => buildDisplay(target, wordInputs, activeIdx), [target, wordInputs, activeIdx])
  const fullyCorrect = submitted && !revealed && words.every((w, i) => (wordInputs[i] ?? "").toLowerCase() === w.toLowerCase())

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

  const progressPct = session.length > 0 ? ((index + (passed ? 1 : 0)) / session.length) * 100 : 0

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
        <span className="text-sm tabular-nums text-muted-foreground">
          {index + 1} / {session.length}
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
        size="sm"
        onClick={gotoPrev}
        disabled={index <= 0}
        title="上一句"
        aria-label="上一句"
        className="gap-1.5"
      >
        <ArrowLeft className="size-4" />
        上一句
      </Button>
    ) : null
  const nextBtn =
    phase === "playing" ? (
      <Button
        variant="ghost"
        size="sm"
        onClick={gotoNext}
        disabled={index >= session.length - 1}
        title="下一句"
        aria-label="下一句"
        className="gap-1.5"
      >
        下一句
        <ArrowRight className="size-4" />
      </Button>
    ) : null
  const prevPortal =
    typeof document !== "undefined" && document.getElementById("prev-slot")
      ? createPortal(prevBtn, document.getElementById("prev-slot")!)
      : null
  const nextPortal =
    typeof document !== "undefined" && document.getElementById("next-slot")
      ? createPortal(nextBtn, document.getElementById("next-slot")!)
      : null

  // ── 底部快捷键按钮组（可点击，渲染到 footer 中间槽位）──
  const Kbd = ({ children }: { children: React.ReactNode }) => (
    <kbd className="flex h-4 items-center gap-0.5 rounded border bg-muted px-1 font-mono text-[10px] font-medium leading-none text-foreground">
      {children}
    </kbd>
  )
  const Cmd = () => (
    <span className="flex h-4 items-center overflow-hidden text-[12px] leading-none">⌘</span>
  )
  const shortcutBar =
    phase === "playing" ? (
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="secondary" size="sm" onClick={replay} title={playVoice ? "播放视频" : "播放发音"} aria-label={playVoice ? "播放视频" : "播放发音"} className="gap-1.5">
          <Volume2 className="size-3.5" />
          {playVoice ? "播放视频" : "播放发音"}
          <Kbd>`</Kbd>
        </Button>
        <Button variant="secondary" size="sm" onClick={markMastered} title="掌握" aria-label="掌握" className="gap-1.5">
          <CheckCircle2 className="size-3.5" />
          掌握
          <Kbd><Cmd />M</Kbd>
        </Button>
        <Button variant="secondary" size="sm" onClick={markNewWord} title="生词" aria-label="生词" className="gap-1.5">
          <BookMarked className="size-3.5" />
          生词
          <Kbd><Cmd />N</Kbd>
        </Button>
        <Button variant="secondary" size="sm" onClick={submit} title="提交" aria-label="提交" className="gap-1.5">
          <Check className="size-3.5" />
          提交
          <Kbd>Enter</Kbd>
        </Button>
        <Button variant="secondary" size="sm" onClick={showAnswer} title="显示答案" aria-label="显示答案" className="gap-1.5">
          <Eye className="size-3.5" />
          显示答案
          <Kbd>右⌘</Kbd>
        </Button>
      </div>
    ) : null
  const shortcutPortal =
    typeof document !== "undefined" && document.getElementById("shortcut-slot")
      ? createPortal(shortcutBar, document.getElementById("shortcut-slot")!)
      : null

  // ── 开始页 ──
  if (phase === "idle") {
    return (
      <>
        {progressPortal}
        {prevPortal}
        {nextPortal}
        {shortcutPortal}
        <div className="flex h-full w-full flex-col items-center justify-center text-center">
          <p className="mb-3 text-base font-medium uppercase tracking-[0.3em] text-primary">Sentence Dictation</p>
          <h1 className="mb-5 text-5xl font-bold tracking-tight text-foreground">听写句子</h1>
          <p className="mb-10 max-w-lg text-lg text-muted-foreground">
            看中文，听发音，用键盘打出英文句子。
            <br />
            Enter 提交，写对标绿、写错标红。共 {course?.sessionSize ?? 10} 句。
          </p>
          <Button onClick={startGame} size="lg" className="h-12 px-12 text-lg">
            开始听写
          </Button>
        </div>
      </>
    )
  }

  // ── 完成页 ──
  if (phase === "done") {
    const accuracy = session.length > 0 ? Math.round((passedCount / session.length) * 100) : 0
    return (
      <>
        {progressPortal}
        {prevPortal}
        {nextPortal}
        {shortcutPortal}
        <div className="flex h-full w-full flex-col items-center justify-center text-center">
          <div className="mb-6 text-7xl">{accuracy >= 90 ? "🎉" : accuracy >= 60 ? "👍" : "💪"}</div>
          <h1 className="mb-3 text-4xl font-bold text-foreground">本组完成！</h1>
          <p className="mb-8 text-base text-muted-foreground">共 {session.length} 个句子</p>
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
      {prevPortal}
      {nextPortal}
      {shortcutPortal}
      {/* 句子列表抽屉（shadcn Sheet） */}
      <Sheet open={showSentences} onOpenChange={setShowSentences} modal={false}>
        <SheetContent side="right" className="w-full max-w-xl gap-0 p-0">
          <SheetHeader className="border-b border-border px-5 py-4">
            <SheetTitle className="text-lg font-semibold">
              {course?.name ?? "课程"} · 句子列表
            </SheetTitle>
            <SheetDescription className="text-sm">
              {course?.sentences.length ?? 0} 句
            </SheetDescription>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <ol className="space-y-2">
              {(course?.sentences ?? []).map((s, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowSentences(false)
                      onJumpToSentence?.(i)
                    }}
                    className="flex w-full gap-4 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/40"
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
              ))}
            </ol>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex min-h-0 w-full flex-1 flex-col gap-6">
        {/* 中文句子（视频课程模式下隐藏，避免泄露答案） */}
        {showCn && (
          <div key={`cn-${index}`} className="mt-[100px] text-center">
            <h2 className="text-3xl font-normal leading-snug text-muted-foreground sm:text-4xl">{sentence.cn}</h2>
          </div>
        )}

        {/* 英文句子输入区 */}
        <div key={`en-${index}`} className="flex min-h-0 w-full flex-1 flex-col items-center justify-center">
          <div
            className={`font-input flex min-h-[4.4em] w-full max-w-5xl flex-1 flex-col items-center justify-center text-center text-4xl font-medium leading-none sm:text-[2.875rem] ${
              fullyCorrect ? "text-emerald-500" : "text-foreground"
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
                    {/* 字母行 */}
                    <span className="inline-flex flex-none">
                    {group.chars.map((c, i) => {
                      const idx = group.startIdx + i
                      // 发音评分已反馈：直接把句子原版字母显示在槽位上（和打字一样），按发音质量着色
                      if (pron) {
                        return (
                          <span
                            key={idx}
                            className="relative inline-flex h-[2.2em] flex-none items-end justify-center"
                            style={{ width: `${c.widthEm ?? 0.6}em` }}
                          >
                            <span className="invisible leading-none">W</span>
                            <span
                              className={`absolute inset-x-0 bottom-0 flex justify-center leading-none ${
                                pronWrong
                                  ? "text-rose-500"
                                  : pron.score >= 70
                                    ? "text-emerald-500"
                                    : "text-amber-500"
                              }`}
                              style={{ transform: "translateY(-0.14em)" }}
                            >
                              {c.ch}
                            </span>
                            <span
                              className={`absolute inset-x-[-0.15em] bottom-0 h-[3px] rounded-[2px] ${
                                pronWrong
                                  ? "bg-rose-500"
                                  : pron.score >= 70
                                    ? "bg-emerald-500"
                                    : "bg-amber-500"
                              }`}
                            />
                          </span>
                        )
                      }
                      if (c.status === "pending") {
                        // 未输入：灰色横线；激活单词 → 绿色横线。隐形占位字符保证行高恒定
                        return (
                          <span
                            key={idx}
                            className="relative inline-flex h-[2.2em] flex-none items-center justify-center"
                            style={{ width: `${c.widthEm ?? 0.6}em` }}
                          >
                            <span className="invisible leading-none">W</span>
                            <span
                              className={`absolute inset-x-[-0.15em] bottom-0 h-[3px] rounded-[2px] ${
                                c.wordWrong && submitted ? "bg-rose-500" : c.active ? "bg-cyan-500" : "bg-neutral-400"
                              }`}
                            />
                          </span>
                        )
                      }
                      if (c.status === "correct") {
                        // 写对的字母：底部对齐下划线；正常输入显示绿色，显示答案后显示浅灰色
                        return (
                          <span
                            key={idx}
                            className="relative inline-flex h-[2.2em] flex-none items-end justify-center"
                            style={{ width: `${c.widthEm ?? 0.6}em` }}
                          >
                            <span className="invisible leading-none">W</span>
                            <span
                              className={`absolute inset-x-0 bottom-0 flex justify-center leading-none ${
                                revealed ? "text-muted-foreground" : "text-emerald-500"
                              }`}
                              style={{ transform: "translateY(-0.14em)" }}
                            >
                              {c.ch}
                            </span>
                            <span
                              className={`absolute inset-x-[-0.15em] bottom-0 h-[3px] rounded-[2px] ${
                                c.wordWrong && submitted ? "bg-rose-500" : c.active ? "bg-cyan-500" : "bg-neutral-400"
                              }`}
                            />
                          </span>
                        )
                      }
                      if (c.status === "wrong") {
                        // 错误/多余字母：字母红色，整词提交后下划线标红
                        return (
                          <span
                            key={idx}
                            className="relative inline-flex h-[2.2em] flex-none items-end justify-center"
                            style={{ width: `${c.widthEm ?? 0.6}em` }}
                          >
                            <span className="invisible leading-none">W</span>
                            <span
                              className="absolute inset-x-0 bottom-0 flex justify-center leading-none text-rose-500"
                              style={{ transform: "translateY(-0.14em)" }}
                            >
                              {c.ch}
                            </span>
                            <span
                              className={`absolute inset-x-[-0.15em] bottom-0 h-[3px] rounded-[2px] ${
                                c.wordWrong && submitted ? "bg-rose-500" : c.active ? "bg-cyan-500" : "bg-neutral-400"
                              }`}
                            />
                          </span>
                        )
                      }
                      return <span key={idx}>{c.ch}</span>
                    })}
                    {endPunctMark}
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
          sentence={target}
          initialResult={pronHistory[target] ?? null}
          onResult={(r) => {
            setPronHistory((prev) => ({ ...prev, [target]: r }))
            setHasRecorded(true)
            if (course) savePronScore(course.id, target, r).catch(() => {})
          }}
          onEvaluationSuccess={playSuccess}
          onPlayVoice={startDictation}
        />

        {/* 统计栏 */}
        <div className="flex justify-center gap-12 text-center text-sm text-muted-foreground">
          <div>
            <div className="text-xl font-bold text-emerald-500">{passedCount}</div>
            已通过
          </div>
          <div>
            <div className="text-xl font-bold text-amber-500">{masteredCount}</div>
            已掌握
          </div>
          <div>
            <div className="text-xl font-bold text-sky-500">{newWords}</div>
            生词
          </div>
          <div>
            <div className="text-xl font-bold text-rose-500">{errorCount}</div>
            错误提交
          </div>
        </div>
      </div>
    </>
  )
}
