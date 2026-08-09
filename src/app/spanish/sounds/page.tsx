"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SPANISH_SOUND_GROUPS, type SpanishSoundLetter } from "@/lib/spanish-sounds";

/**
 * 西班牙语辅音发音对照表
 * 每列一个字母/组合：读音、音标、音节例词。点击任意项用 TTS 朗读（es-ES）
 */

/** 朗读西语文本：优先 es-ES 女声 */
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
    voices.find((v) => v.lang.toLowerCase().startsWith("es-es") && /female|monica|maria|helena|paulina|laura/i.test(v.name)) ||
    voices.find((v) => v.lang.toLowerCase().startsWith("es"));
  if (voice) u.voice = voice;
  synth.speak(u);
}

export default function SpanishSoundsPage() {
  const [playing, setPlaying] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.getVoices();
  }, []);

  const play = useCallback((text: string, id: string) => {
    window.speechSynthesis.cancel();
    setPlaying(id);
    speakSpanish(text);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setPlaying(null), 2500);
  }, []);

  /** 可点击发音的文字，附带 hover 喇叭 */
  const Speakable = ({
    text,
    id,
    className,
  }: {
    text: string;
    id: string;
    className?: string;
  }) => (
    <button
      type="button"
      onClick={() => play(text, id)}
      title={`播放 ${text}`}
      className={cn(
        "group inline-flex items-center gap-1 rounded transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
        className,
      )}
    >
      {text}
      <span className="text-muted-foreground/0 transition-colors group-hover:text-muted-foreground/70">
        <Volume2 className={cn("size-3", playing === id && "text-primary")} />
      </span>
    </button>
  );

  /** 单个字母列：字母 + 读音 + 音标 + 音节 */
  const LetterCol = ({ item, idBase }: { item: SpanishSoundLetter; idBase: string }) => (
    <div className="flex min-w-0 flex-1 flex-col border-l border-border first:border-l-0">
      {/* 字母 */}
      <div className="border-b border-border px-2 py-3 text-center">
        <Speakable text={item.letter} id={`${idBase}-letter`} className="text-2xl font-semibold text-foreground" />
      </div>
      {/* 读音 */}
      <div className="border-b border-border px-2 py-2 text-center">
        <Speakable text={item.name} id={`${idBase}-name`} className="text-sm font-medium text-foreground" />
      </div>
      {/* 音标 */}
      <div className="border-b border-border px-2 py-1.5 text-center text-sm tabular-nums text-primary">
        {item.phoneme}
      </div>
      {/* 音节 */}
      <div className="flex flex-col items-center gap-1 px-2 py-2">
        {item.syllables.map((s) => (
          <Speakable
            key={s}
            text={s}
            id={`${idBase}-${s}`}
            className="text-base leading-tight text-muted-foreground"
          />
        ))}
        {item.note && (
          <span className="mt-1 text-[11px] leading-tight text-muted-foreground/60">{item.note}</span>
        )}
      </div>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-16 pt-6">
      {/* 页头 */}
      <header className="mb-6">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Spanish · Pronunciation
        </p>
        <h1 className="mb-3 text-2xl font-semibold tracking-wide text-foreground">
          西班牙语辅音发音对照表
        </h1>
        <p className="mb-1 max-w-2xl leading-7 text-muted-foreground">
          常见易混辅音及字母组合的读音对照：唇音、齿音、喉音、舌后音、舌前音。
          点击字母、读音或任意音节可听发音。
        </p>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground/80">
          需浏览器内置西班牙语语音（Chrome/Edge/Safari 自带）。
        </p>
      </header>

      {/* 各组对照表 */}
      {SPANISH_SOUND_GROUPS.map((group) => (
        <section key={group.title} className="mb-8">
          <h2 className="mb-1 text-lg font-semibold text-foreground">{group.title}</h2>
          <p className="mb-3 text-sm text-muted-foreground">{group.desc}</p>
          <div className="flex overflow-hidden rounded-lg border border-border bg-background">
            {group.letters.map((item) => (
              <LetterCol key={item.letter} item={item} idBase={item.letter} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
