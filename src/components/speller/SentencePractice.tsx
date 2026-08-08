"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LogOut, CheckCircle2, AlertCircle, Eye, ArrowLeft, ArrowRight } from "lucide-react"
import confetti from "canvas-confetti"
import { SENTENCES, SESSION_SIZE, shuffle, type SentenceEntry } from "@/lib/speller/sentences"

type Phase = "idle" | "playing" | "done"
type CharStatus = "correct" | "wrong" | "pending" | "punct" | "space"

interface CharState {
  ch: string
  status: CharStatus
  /** 属于当前激活单词（整词绿色下划线） */
  active?: boolean
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

/** 目标句子 → 单词列表（保留原大小写） */
function getWords(target: string): string[] {
  return target
    .replace(/[^a-zA-Z\s]/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
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
    // 槽位：逐个与目标字母比对（忽略大小写）。
    // 槽位宽度按【实际显示的字符】计算：
    // - pending/correct 显示目标字母 → 宽度稳定（输入正确不抖）
    // - wrong 显示用户输入的错误字符 → 按错误字符宽度排列，间距均匀
    for (let j = 0; j < wordTarget.length; j++) {
      const t = typed[j]
      const status: CharStatus = t === undefined ? "pending" : t.toLowerCase() === wordTarget[j] ? "correct" : "wrong"
      const ch = t ?? wordTarget[j]
      chars.push({ ch, status, active, widthEm: measureCharWidthEm(ch) })
    }
    // 多余输入：超出单词长度，显示在当前单词尾部（红色），不影响下一个单词
    for (let j = wordTarget.length; j < typed.length; j++) {
      chars.push({ ch: typed[j], status: "wrong", active, widthEm: measureCharWidthEm(typed[j]) })
    }
    wi++
  }
  return chars
}

function useSpeech() {
  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = "en-US"
    u.volume = 0.8
    u.rate = 0.85
    u.pitch = 1
    const voices = window.speechSynthesis.getVoices()
    const voice =
      voices.find((v) => v.lang.toLowerCase().startsWith("en-us") && /female|samantha|zira|aria|jenny/i.test(v.name)) ||
      voices.find((v) => v.lang.toLowerCase().startsWith("en"))
    if (voice) u.voice = voice
    window.speechSynthesis.speak(u)
  }, [])
  const stop = useCallback(() => {
    if (typeof window === "undefined") return
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
    const src = ctx.createBufferSource()
    src.buffer = buffer
    const gain = ctx.createGain()
    gain.gain.value = volume
    src.connect(gain).connect(ctx.destination)
    src.start()
  }, [])

  const playType = useCallback(() => {
    playBuffer(typeBufferRef.current, 0.45)
  }, [playBuffer])

  const playSuccess = useCallback(() => {
    playBuffer(successBufferRef.current, 0.9)
  }, [playBuffer])

  return { playType, playSuccess, soundReady: ready }
}

function formatTime(ms: number): string {
  const s = Math.floor(ms / 1000)
  const m = Math.floor(s / 60)
  return m > 0 ? `${m}:${String(s % 60).padStart(2, "0")}` : `${s}s`
}

export default function SentencePractice({
  autoStart = false,
  onExit,
}: {
  /** 挂载后自动开始（用于独立练习路由 /speller/practice） */
  autoStart?: boolean
  /** 退出练习时的回调（默认回到 idle 状态） */
  onExit?: () => void
}) {
  const { speak, stop } = useSpeech()
  const { playType, playSuccess } = useGameSounds()

  // ── 会话状态 ──
  const [phase, setPhase] = useState<Phase>("idle")
  const [session, setSession] = useState<SentenceEntry[]>([])
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

  // 切换句子时自动发音
  useEffect(() => {
    if (phase !== "playing" || !sentence || !autoSpeak) return
    const t = window.setTimeout(() => speak(sentence.en), 300)
    return () => window.clearTimeout(t)
  }, [index, phase, sentence, autoSpeak, speak])

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
    const s = shuffle(SENTENCES).slice(0, SESSION_SIZE)
    setSession(s)
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
  }, [])

  // 独立练习路由：挂载后自动开始
  useEffect(() => {
    if (autoStart && phase === "idle") {
      startGame()
    }
  }, [autoStart, phase, startGame])

  const replay = useCallback(() => {
    if (sentence) speak(sentence.en)
  }, [sentence, speak])

  const submit = useCallback(() => {
    if (!sentence || submitted || revealed) return
    const correct = words.every((w, i) => (wordInputs[i] ?? "").toLowerCase() === w.toLowerCase())
    if (correct) {
      setSubmitted(true)
      setPassed(true)
      setPassedCount((c) => c + 1)
      // 撒花庆祝（canvas-confetti basic cannon）+ 撒花音效
      confetti({ particleCount: 100, spread: 70, ticks: 60, origin: { y: 0.6 } })
      playSuccess()
    } else {
      setSubmitted(true)
      setErrorCount((n) => n + 1)
      setFlashTick((f) => f + 1)
    }
  }, [sentence, submitted, revealed, words, wordInputs])

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
    gotoNext()
  }, [sentence, passed, gotoNext])

  const markNewWord = useCallback(() => {
    if (!sentence || passed) return
    setNewWords((c) => c + 1)
    setPassed(true)
    gotoNext()
  }, [sentence, passed, gotoNext])

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
        if (activeIdx + 1 < words.length) {
          setActiveIdx((a) => a + 1)
        } else {
          setActiveIdx(0)
          setRevealed(false)
        }
        return
      }

      // 左/右方向键：左右切换激活单词
      if (e.key === "ArrowRight") {
        e.preventDefault()
        if (submitted) setSubmitted(false)
        if (activeIdx + 1 < words.length) setActiveIdx((a) => a + 1)
        return
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        if (submitted) setSubmitted(false)
        if (activeIdx - 1 >= 0) setActiveIdx((a) => a - 1)
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
  }, [phase, sentence, activeIdx, wordInputs, words, submitted, revealed, replay, submit, showAnswer, markMastered, markNewWord, gotoNext, playType])

  // ── 渲染数据 ──
  const chars = useMemo(() => buildDisplay(target, wordInputs, activeIdx), [target, wordInputs, activeIdx])
  const fullyCorrect = submitted && !revealed && words.every((w, i) => (wordInputs[i] ?? "").toLowerCase() === w.toLowerCase())
  const hasError = submitted && !fullyCorrect

  const progressPct = session.length > 0 ? ((index + (passed ? 1 : 0)) / session.length) * 100 : 0

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

  // ── 开始页 ──
  if (phase === "idle") {
    return (
      <>
        {progressPortal}
        {prevPortal}
        {nextPortal}
        <div className="flex h-full w-full flex-col items-center justify-center text-center">
          <p className="mb-3 text-base font-medium uppercase tracking-[0.3em] text-primary">Sentence Dictation</p>
          <h1 className="mb-5 text-5xl font-bold tracking-tight text-foreground">听写句子</h1>
          <p className="mb-10 max-w-lg text-lg text-muted-foreground">
            看中文，听发音，用键盘打出英文句子。
            <br />
            Enter 提交，写对标绿、写错标红。共 {SESSION_SIZE} 句。
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
      <div className="flex min-h-0 w-full flex-1 flex-col gap-6">
        {/* 中文句子 */}
        <div key={`cn-${index}`} className="mt-[100px] text-center">
          <h2 className="text-3xl font-semibold leading-snug text-muted-foreground sm:text-4xl">{sentence.cn}</h2>
        </div>

        {/* 英文句子输入区 */}
        <div key={`en-${index}`} className="flex min-h-0 w-full flex-1 flex-col items-center justify-center">
          <div
            className={`font-input flex min-h-[4.4em] w-full max-w-5xl flex-1 flex-col items-center justify-center text-center text-4xl font-medium leading-none sm:text-[2.875rem] ${
              fullyCorrect ? "text-emerald-500" : "text-foreground"
            }`}
          >
            {chars.length === 0 && <span className="text-muted-foreground">— 听发音，用键盘输入英文句子 —</span>}
            {/* 内层行：flex wrap 保证槽位固定高度、下划线对齐，超宽自动换行
                所有槽位统一 flex-none 固定宽度，宽字母不外溢，输入过程布局零变化 */}
            <span className="inline-flex flex-wrap justify-center">
              {chars.map((c, i) => {
                // 句末标点：不占独立行，挂在前一个槽位右侧（紧跟句子末尾、永不换行）
                const endPunct = chars[chars.length - 1]
                const isEndPunct = i === chars.length - 1 && endPunct.status === "punct"
                const showEndPunct = endPunct.status === "punct" && i === chars.length - 2
                if (isEndPunct) return null
                const endPunctMark = showEndPunct ? (
                  <span
                    className="pointer-events-none absolute inset-y-0 left-full flex items-end pl-[0.08em] text-muted-foreground"
                    style={{ transform: "translateY(0.14em)" }}
                  >
                    {endPunct.ch}
                  </span>
                ) : null
                if (c.status === "punct") {
                  // 句中标点自动显示：与字母同线
                  return (
                    <span
                      key={i}
                      className="relative inline-flex h-[2.2em] flex-none items-end px-[0.08em] text-muted-foreground"
                      style={{ transform: "translateY(-0.19em)" }}
                    >
                      {c.ch}
                      {endPunctMark}
                    </span>
                  )
                }
                if (c.status === "space") {
                  // 单词之间的空格：留白；若其后紧跟句末标点，标点挂在这里
                  return (
                    <span key={i} className="relative inline-block w-[0.45em] flex-none">
                      {endPunctMark}
                    </span>
                  )
                }
                if (c.status === "pending") {
                  // 未输入：灰色横线；激活单词 → 绿色横线。隐形占位字符保证行高恒定
                  return (
                    <span
                      key={i}
                      className="relative inline-flex h-[2.2em] flex-none items-center justify-center"
                      style={{ width: `${c.widthEm ?? 0.6}em` }}
                    >
                      <span className="invisible leading-none">W</span>
                      <span
                        className={`absolute inset-x-[-0.15em] bottom-0 h-[3px] rounded-[2px] ${
                          c.active ? "bg-emerald-500" : "bg-neutral-400"
                        }`}
                      />
                      {endPunctMark}
                    </span>
                  )
                }
                if (c.status === "correct") {
                  // 写对的字母：底部对齐下划线；正常输入显示绿色，显示答案后显示浅灰色
                  return (
                    <span
                      key={i}
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
                          c.active ? "bg-emerald-500" : "bg-neutral-400"
                        }`}
                      />
                      {endPunctMark}
                    </span>
                  )
                }
                if (c.status === "wrong") {
                  // 错误/多余字母：字母红色，下划线颜色保持不变（跟随激活状态，不因错误变色）
                  return (
                    <span
                      key={i}
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
                          c.active ? "bg-emerald-500" : "bg-neutral-400"
                        }`}
                      />
                      {endPunctMark}
                    </span>
                  )
                }
                return <span key={i}>{c.ch}</span>
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
          ) : revealed ? (
            <span className="flex items-center gap-2 font-medium text-amber-500">
              <Eye className="size-5" /> 答案已显示 · Enter 进入下一句
            </span>
          ) : hasError ? (
            <span className="flex items-center gap-2 font-medium text-rose-500">
              <AlertCircle className="size-5" /> 有拼写错误，红色部分需修正（Enter 重新检查）
            </span>
          ) : (
            // 默认（未提交、未显示答案、无错误）：不显示提示文字，仅保留高度
            <span />
          )}
        </div>

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
