"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, Loader2 } from "lucide-react";
import { SPANISH_ALPHABET, SPANISH_OLD_LETTERS } from "@/lib/spanish-alphabet";

/**
 * 西班牙语字母表听读表格
 * 复刻 studyspanish.com/pronunciation/lessons/spanish-alphabet
 * - 27 个字母 + 字母名称 + 例词
 * - 点击字母/名称/例词，用浏览器 TTS 朗读（es-ES 语音）
 */

/** 朗读西语文本：优先找 es-ES 语音，找不到则用任意 es 语音 */
function speakSpanish(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const synth = window.speechSynthesis;
  synth.resume();
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "es-ES";
  u.rate = 0.9;
  const voices = synth.getVoices();
  const voice =
    voices.find((v) => v.lang.toLowerCase().startsWith("es-es") && /female|monica|maria|helena|paulina|jorge|laura/i.test(v.name)) ||
    voices.find((v) => v.lang.toLowerCase().startsWith("es"));
  if (voice) u.voice = voice;
  synth.speak(u);
}

export default function SpanishAlphabetPage() {
  // 当前播放项：letter-xxx / name-xxx / ex-xxx，用于显示喇叭高亮
  const [playing, setPlaying] = useState<string | null>(null);
  const [voicesReady, setVoicesReady] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // Chrome 的 getVoices 异步加载，重新查询一次确保拿到 es 语音
    const load = () => {
      if (window.speechSynthesis.getVoices().length > 0) setVoicesReady(true);
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const play = useCallback((text: string, id: string) => {
    window.speechSynthesis.cancel();
    setPlaying(id);
    speakSpanish(text);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    // 估算朗读时长结束（字母名短，2 秒足够；例词给 3 秒）
    const ms = id.startsWith("ex-") ? 3000 : 2000;
    timerRef.current = window.setTimeout(() => setPlaying(null), ms);
  }, []);

  /** 单元格内的喇叭图标：hover 显示，播放中高亮 */
  const Speaker = ({ id }: { id: string }) => (
    <span className="ml-1 inline-flex align-[-2px] text-muted-foreground/0 transition-colors group-hover:text-muted-foreground/70">
      {playing === id ? <Volume2 className="size-3.5 text-primary" /> : <Volume2 className="size-3.5" />}
    </span>
  );

  /** 一行：字母（可点）/ 名称（可点）/ 例词（可点）/ 音节拆分 */
  const LetterRow = ({
    item,
    old = false,
  }: {
    item: { letter: string; name: string; nameNote?: string; example: string; meaning?: string; syllables?: string };
    old?: boolean;
  }) => (
    <div className="grid grid-cols-[4.5rem_1fr_1fr_1fr] items-center border-b border-border bg-background last:border-b-0 sm:grid-cols-[6rem_10rem_1fr_1fr]">
      {/* 字母 */}
      <button
        type="button"
        onClick={() => play(item.letter, `letter-${item.letter}`)}
        className={`group flex h-full items-center justify-center border-r border-border py-3 text-2xl font-semibold transition-colors hover:bg-muted/50 ${
          old ? "text-muted-foreground" : "text-blue-600"
        }`}
        title={`${item.letter} · 播放字母发音`}
      >
        {item.letter}
        <Speaker id={`letter-${item.letter}`} />
      </button>
      {/* 名称 */}
      <button
        type="button"
        onClick={() => play(item.name, `name-${item.letter}`)}
        className="group flex h-full items-center gap-2 border-r border-border px-4 py-3 text-left transition-colors hover:bg-muted/50"
        title={`${item.name} · 播放名称发音`}
      >
        <span className="font-medium text-foreground">{item.name}</span>
        {item.nameNote && <span className="text-xs text-muted-foreground">{item.nameNote}</span>}
        <Speaker id={`name-${item.letter}`} />
      </button>
      {/* 例词 */}
      <button
        type="button"
        onClick={() => play(item.example, `ex-${item.letter}`)}
        className="group flex h-full items-center gap-2 border-r border-border px-4 py-3 text-left transition-colors hover:bg-muted/50"
        title={`${item.example} · 播放例词发音`}
      >
        <span className="text-foreground">{item.example}</span>
        {item.meaning && <span className="text-xs text-muted-foreground">{item.meaning}</span>}
        <Speaker id={`ex-${item.letter}`} />
      </button>
      {/* 音节拆分 */}
      <span className="px-4 py-3 font-mono text-sm text-muted-foreground">
        {item.syllables ?? "—"}
      </span>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-6">
      {/* 页头 */}
      <header className="mb-6">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Spanish · El Abecedario
        </p>
        <h1 className="mb-3 text-2xl font-semibold tracking-wide text-foreground">
          西班牙语字母表
        </h1>
        <p className="mb-1 max-w-2xl leading-7 text-muted-foreground">
          西班牙语字母表（el abecedario）共 27 个字母，比英语多一个{" "}
          <span className="font-semibold text-foreground">ñ</span>。点击字母、字母名称或例词，可听发音。
        </p>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground/80">
          需浏览器内置西班牙语语音（Chrome/Edge/Safari 自带，首次加载可能延迟片刻）。
        </p>
      </header>

      {/* 元音组 */}
      <h2 className="mb-1 text-lg font-semibold text-foreground">
        元音 Vowels <span className="ml-1 text-sm font-normal text-muted-foreground">5 个</span>
      </h2>
      <p className="mb-3 text-sm text-muted-foreground">
        西班牙语只有 5 个纯元音，且每个永远发同样的音——没有长短元音。
      </p>
      <div className="overflow-hidden rounded-lg border border-border">
        <div className="grid grid-cols-[4.5rem_1fr_1fr_1fr] border-b border-border bg-muted/40 text-sm font-medium text-muted-foreground sm:grid-cols-[6rem_10rem_1fr_1fr]">
          <div className="px-3 py-2.5 text-center">字母</div>
          <div className="border-l border-border px-4 py-2.5">西语名称</div>
          <div className="border-l border-border px-4 py-2.5">例词</div>
          <div className="border-l border-border px-4 py-2.5">音节拆分</div>
        </div>
        {SPANISH_ALPHABET.filter((l) => l.type === "vowel").map((item) => (
          <LetterRow key={item.letter} item={item} />
        ))}
      </div>

      {/* 辅音组 */}
      <h2 className="mb-1 mt-8 text-lg font-semibold text-foreground">
        辅音 Consonants <span className="ml-1 text-sm font-normal text-muted-foreground">22 个</span>
      </h2>
      <p className="mb-3 text-sm text-muted-foreground">
        其余 22 个字母为辅音；含特殊的 <span className="font-medium text-foreground">ñ</span> 与半元音{" "}
        <span className="font-medium text-foreground">y</span>。
      </p>
      <div className="overflow-hidden rounded-lg border border-border">
        <div className="grid grid-cols-[4.5rem_1fr_1fr_1fr] border-b border-border bg-muted/40 text-sm font-medium text-muted-foreground sm:grid-cols-[6rem_10rem_1fr_1fr]">
          <div className="px-3 py-2.5 text-center">字母</div>
          <div className="border-l border-border px-4 py-2.5">西语名称</div>
          <div className="border-l border-border px-4 py-2.5">例词</div>
          <div className="border-l border-border px-4 py-2.5">音节拆分</div>
        </div>
        {SPANISH_ALPHABET.filter((l) => l.type !== "vowel").map((item) => (
          <LetterRow key={item.letter} item={item} />
        ))}
      </div>

      {/* 过去移除的 ch / ll */}
      <h2 className="mb-1 mt-8 text-lg font-semibold text-foreground">
        已从字母表移除的组合
      </h2>
      <p className="mb-3 max-w-2xl text-sm leading-7 text-muted-foreground">
        2014 年西班牙皇家学院（RAE）将 <span className="font-medium text-foreground">ch</span> 和{" "}
        <span className="font-medium text-foreground">ll</span> 从字母表移除——它们不再算作独立字母，但对应的拼写与发音仍在使用。
      </p>
      <div className="overflow-hidden rounded-lg border border-border">
        <div className="grid grid-cols-[4.5rem_1fr_1fr_1fr] border-b border-border bg-muted/40 text-sm font-medium text-muted-foreground sm:grid-cols-[6rem_10rem_1fr_1fr]">
          <div className="px-3 py-2.5 text-center">组合</div>
          <div className="border-l border-border px-4 py-2.5">过去的名称</div>
          <div className="border-l border-border px-4 py-2.5">例词</div>
          <div className="border-l border-border px-4 py-2.5">音节拆分</div>
        </div>
        {SPANISH_OLD_LETTERS.map((item) => (
          <LetterRow key={item.letter} item={item} old />
        ))}
      </div>

      {/* 说明 */}
      <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">双 R（rr）小知识</h2>
      <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
        西班牙语中的双写 <span className="font-medium text-foreground">rr</span> 并非独立字母，但它强制发"大舌颤音"
        （rolling r）。点击
        <button
          type="button"
          onClick={() => play("perro", "ex-perro")}
          className="group mx-1 inline-flex items-center gap-1 font-medium text-foreground underline decoration-border underline-offset-2 hover:decoration-primary"
        >
          perro
          <Speaker id="ex-perro" />
        </button>
        感受舌尖振动。
      </p>
    </div>
  );
}
