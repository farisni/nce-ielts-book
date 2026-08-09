"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, ChevronLeft, ChevronRight, RotateCcw, Repeat, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { VOWEL_A_CARDS } from "@/lib/spanish-listen-repeat";

/**
 * 西班牙语发音听读练习 · 元音 a
 * 复刻 studyspanish.com/pronunciation/listen-and-repeat/vowel_a
 * - 卡片式单词听读：点击播放 TTS（es-ES），Continue/Previous 翻卡
 * - Repeat 重播当前卡，Start Over 回到第一张
 */
export default function SpanishListenRepeatPage() {
  const total = VOWEL_A_CARDS.length;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const card = VOWEL_A_CARDS[index];

  const play = useCallback((text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    synth.resume();
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "es-ES";
    u.rate = 0.85;
    const voices = synth.getVoices();
    const voice =
      voices.find((v) => v.lang.toLowerCase().startsWith("es-es") && /female|monica|maria|helena|paulina|laura/i.test(v.name)) ||
      voices.find((v) => v.lang.toLowerCase().startsWith("es"));
    if (voice) u.voice = voice;
    u.onstart = () => setPlaying(true);
    u.onend = () => setPlaying(false);
    synth.speak(u);
  }, []);

  // 首次加载语音
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.getVoices();
  }, []);

  // 换卡后自动朗读（单词卡）
  useEffect(() => {
    if (card.isWord) play(card.word);
    else setPlaying(false);
    return () => window.speechSynthesis?.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);
  const startOver = useCallback(() => setIndex(0), []);

  // 键盘快捷键：空格播放/重播、方向键翻卡
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " ") {
        e.preventDefault();
        if (card.isWord) play(card.word);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [card, next, prev, play]);

  return (
    <div className="mx-auto w-full max-w-xl px-6 pb-16 pt-8">
      {/* 页头 */}
      <header className="mb-6 text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Spanish · Pronunciation · Vowel A
        </p>
        <h1 className="mb-2 text-2xl font-semibold tracking-wide text-foreground">
          西班牙语元音 A · 单词听读
        </h1>
        <p className="mx-auto max-w-md text-sm leading-7 text-muted-foreground">
          西班牙语字母 a 发音类似英语 "father" 里的 a。点击卡片或播放按钮听单词，跟读练习。
        </p>
      </header>

      {/* 进度：N of 35 */}
      <div className="mb-3 text-center text-sm tabular-nums text-muted-foreground">
        {index + 1} of {total}
      </div>

      {/* 单词卡片 */}
      <button
        type="button"
        onClick={() => card.isWord && play(card.word)}
        title={card.isWord ? "点击播放" : ""}
        className={cn(
          "group relative flex w-full flex-col items-center justify-center rounded-2xl border px-6 py-12 transition-colors",
          "bg-background hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
        )}
      >
        {/* 大号单词 / 引导语 */}
        <span className={cn("text-center text-4xl font-semibold leading-tight", card.isWord ? "text-foreground" : "text-muted-foreground")}>
          {card.word}
        </span>
        {/* 释义 */}
        <span className="mt-3 text-center text-lg text-muted-foreground">
          {card.meaning}
        </span>
        {/* 中文释义 */}
        {card.zh && (
          <span className="mt-1 text-center text-sm text-muted-foreground/70">
            {card.zh}
          </span>
        )}
        {/* 播放图标 */}
        {card.isWord && (
          <span className={cn(
            "absolute right-4 top-4 rounded-full p-2 transition-colors",
            playing ? "bg-primary/10 text-primary" : "text-muted-foreground/40 group-hover:text-muted-foreground/80",
          )}>
            {playing ? <Volume2 className="size-5" /> : <Play className="size-5" />}
          </span>
        )}
      </button>

      {/* 操作按钮：Continue / Previous / Repeat / Start Over */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/60 disabled:opacity-40"
        >
          <ChevronLeft className="size-4" />
          Previous
        </button>
        <button
          type="button"
          onClick={next}
          disabled={index >= total - 1}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/60 disabled:opacity-40"
        >
          Continue
          <ChevronRight className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => card.isWord && play(card.word)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/60"
        >
          <Repeat className="size-4" />
          Repeat
        </button>
        <button
          type="button"
          onClick={startOver}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/60"
        >
          <RotateCcw className="size-4" />
          Start Over
        </button>
      </div>

      {/* 快捷键提示 */}
      <p className="mt-6 text-center text-xs text-muted-foreground/60">
        空格 = 播放 / 重播 · ← → = 上一张 / 下一张
      </p>
    </div>
  );
}
