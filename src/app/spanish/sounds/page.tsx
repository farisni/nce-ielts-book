"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SPANISH_SOUND_GROUPS, type SpanishSoundLetter } from "@/lib/spanish-sounds";

/**
 * 西班牙语辅音发音对照表
 * 每列一个字母/组合：读音、音标、音节例词。
 * 音节用浏览器 TTS 朗读（es-ES）；每列底部配一个原网站 studyspanish.com 的原版单词示例（本地 mp3）
 */
/** 朗读音节文本（浏览器 TTS es-ES）；音频用于标记播放状态 */
function playTts(text: string, id: string) {
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
  // 简易播放标记：TTS 期间短暂高亮
  window.dispatchEvent(new CustomEvent("tts-playing", { detail: id }));
}

export default function SpanishSoundsPage() {
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ttsTimerRef = useRef<number | null>(null);

  // 监听 TTS 播放标记，短暂高亮后清除
  useEffect(() => {
    const onTts = (e: Event) => {
      const id = (e as CustomEvent).detail as string;
      setPlaying(id);
      if (ttsTimerRef.current) window.clearTimeout(ttsTimerRef.current);
      ttsTimerRef.current = window.setTimeout(() => setPlaying(null), 2500);
    };
    window.addEventListener("tts-playing", onTts);
    return () => {
      window.removeEventListener("tts-playing", onTts);
      if (ttsTimerRef.current) window.clearTimeout(ttsTimerRef.current);
    };
  }, []);

  /** 播放原版 mp3：同一时刻只播一个 */
  const playAudio = useCallback((audio: string, id: string) => {
    const prev = audioRef.current;
    if (prev) {
      prev.pause();
      prev.currentTime = 0;
    }
    setPlaying(id);
    const next = new Audio(`/audio/spanish-sounds/${audio}`);
    next.onended = () => setPlaying(null);
    next.onerror = () => setPlaying(null);
    next.play().catch(() => setPlaying(null));
    audioRef.current = next;
  }, []);

  /** 可点击发音的音节文字，附带 hover 喇叭（TTS） */
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
      onClick={() => playTts(text, id)}
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

  /** 元音列序：a e i o u */
  const VOWELS = ["a", "e", "i", "o", "u"];

  /** 表格列模板（表头与数据行共用同一套固定宽度，保证严格对齐）：
   *  字母 | 读音 | 音标 | a | e | i | o | u | 例词 */
  const GRID_COLS = "grid-cols-[3.5rem_6.5rem_3.5rem_3.5rem_3.5rem_3.5rem_3.5rem_3.5rem_9rem] gap-x-2";

  /** 单个字母行：字母 | 读音 | 音标 | a | e | i | o | u | 例词（行式表格） */
  const LetterRow = ({ item, idBase }: { item: SpanishSoundLetter; idBase: string }) => (
    <div className={`grid ${GRID_COLS} items-stretch border-b border-border px-3 py-2 last:border-b-0`}>
      {/* 字母 */}
      <Speakable text={item.letter} id={`${idBase}-letter`} className="self-center text-2xl font-semibold text-blue-600" />
      {/* 读音 */}
      <Speakable text={item.name} id={`${idBase}-name`} className="self-center text-lg font-medium text-foreground" />
      {/* 音标：斜杠浅灰，中间音标蓝色（不发音等无斜杠文本原样显示） */}
      <span className="self-center text-xl tabular-nums">
        {/^\/.*\/$/.test(item.phoneme) ? (
          <>
            <span className="mr-0.5 text-muted-foreground/50">/</span>
            <span className="text-blue-600">{item.phoneme.slice(1, -1)}</span>
            <span className="ml-0.5 text-muted-foreground/50">/</span>
          </>
        ) : (
          <span className="text-primary">{item.phoneme}</span>
        )}
      </span>
      {/* 5 个元音子列：a e i o u（syllables 按该顺序，缺失为空串；整格可点击播放） */}
      {VOWELS.map((vowel, vi) => {
        const syl = item.syllables[vi]
        if (!syl) return <span key={vowel} className="self-center text-center text-base text-muted-foreground/25">—</span>
        return (
          <Speakable
            key={vowel}
            text={syl}
            id={`${idBase}-${vowel}`}
            className="flex h-full w-full items-center justify-center self-stretch text-xl leading-tight text-foreground"
          />
        )
      })}
      {/* 原版单词示例 + 备注 */}
      <div className="flex h-full w-full flex-col items-start justify-center gap-0.5 self-stretch">
        {item.audio && item.example ? (
          <button
            type="button"
            onClick={() => playAudio(item.audio!, `${idBase}-ex`)}
            title={`播放原版 ${item.example}`}
            className="group flex w-full items-center gap-1 rounded px-1.5 py-1 transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            <span className="text-sm font-medium text-foreground">{item.example}</span>
            <span className="text-[11px] text-muted-foreground/60">{item.exampleMeaning}</span>
            <Volume2 className={cn("size-3", playing === `${idBase}-ex` ? "text-primary" : "text-muted-foreground/0 group-hover:text-muted-foreground/70")} />
          </button>
        ) : (
          <span className="text-xs text-muted-foreground/40">—</span>
        )}
        {item.note && (
          <span className="text-[10px] leading-tight text-muted-foreground/60">{item.note}</span>
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
          点击字母、读音或任意音节可听发音；例词为原版录音。
        </p>
      </header>

      {/* 各组对照表 */}
      {SPANISH_SOUND_GROUPS.map((group) => (
        <section key={group.title} className="mb-8">
          <h2 className="mb-1 text-lg font-semibold text-foreground">{group.title}</h2>
          <p className="mb-3 text-sm text-muted-foreground">{group.desc}</p>
          <div className="overflow-hidden rounded-lg border border-border bg-background">
            {/* 表头（与数据行共用 GRID_COLS，保证列严格对齐） */}
            <div className={`grid ${GRID_COLS} items-center border-b border-border bg-muted/40 px-3 py-2 text-xs font-medium text-muted-foreground`}>
              <div>字母</div>
              <div>读音</div>
              <div>音标</div>
              {VOWELS.map((v) => (
                <div key={v} className="text-2xl font-semibold text-blue-600">{v}</div>
              ))}
              <div>例词</div>
            </div>
            {group.letters.map((item) => (
              <LetterRow key={item.letter} item={item} idBase={item.letter} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
