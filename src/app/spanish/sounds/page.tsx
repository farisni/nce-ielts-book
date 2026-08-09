"use client"

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SPANISH_SOUND_GROUPS, SPANISH_DIPHTHONGS, type SpanishSoundLetter, type SpanishDiphthong } from "@/lib/spanish-sounds";

/** 日常会话例句分组（点击西语例句播放发音） */
const PHRASE_GROUPS = [
  {
    title: "问候类 · Saludos",
    items: [
      { es: "Hola", zh: "你好", syl: "Ho-la" },
      { es: "Buenos días", zh: "早上好", syl: "Bue-nos dí-as" },
      { es: "Buenas tardes", zh: "下午好", syl: "Bue-nas tar-des" },
      { es: "Buenas noches", zh: "晚上好", syl: "Bue-nas no-ches" },
    ],
  },
  {
    title: "告别类 · Despedidas",
    items: [
      { es: "Adiós", zh: "再见", syl: "A-diós" },
      { es: "Hasta luego", zh: "再见（回见）", syl: "Has-ta lue-go" },
      { es: "Hasta mañana", zh: "明天见", syl: "Has-ta ma-ña-na" },
      { es: "Hasta pronto", zh: "再见（很快见）", syl: "Has-ta pron-to" },
    ],
  },
  {
    title: "日常交流类 · Conversación",
    items: [
      { es: "¿Cómo estás?", zh: "你好吗？", syl: "¿Có-mo es-tás?" },
      { es: "Muy bien, gracias. ¿Y tú?", zh: "我很好，谢谢，你呢？", syl: "Muy bien, gra-cias. ¿Y tú?" },
      { es: "¿Cómo te llamas?", zh: "你叫什么名字？", syl: "¿Có-mo te lla-mas?" },
      { es: "Me llamo Leticia.", zh: "我叫蕾蒂西亚。", syl: "Me lla-mo Le-ti-cia." },
      { es: "¿De dónde eres?", zh: "你是从哪里来的？", syl: "¿De dón-de e-res?" },
      { es: "Soy de Madrid.", zh: "我是从马德里来的。", syl: "Soy de Ma-drid." },
      { es: "¿Eres chino?", zh: "你是中国人吗？", syl: "¿E-res chi-no?" },
      { es: "Sí, soy de Mongolia Interior.", zh: "是的，我是内蒙古人。", syl: "Sí, soy de Mon-go-lia In-te-rior." },
      { es: "Mucho tiempo sin verte.", zh: "好久不见了。", syl: "Mu-cho tiem-po sin ver-te." },
      { es: "De nada.", zh: "不用谢", syl: "De na-da." },
    ],
  },
];

/**
 * 西语字母表 · 音节拼读
 * 字母 × 元音（a/e/i/o/u）拼读表：读音、音标、音节。
 * 音节用浏览器 TTS 朗读（es-ES）；例词配原网站 studyspanish.com 的原版录音（本地 mp3）
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

  /** 播放双元音：有原版音频（spanish-ipa 目录）用 mp3，无则 TTS */
  const playDiph = useCallback((d: SpanishDiphthong) => {
    const id = `dip-${d.combo}`;
    if (d.audio) {
      const prev = audioRef.current;
      if (prev) {
        prev.pause();
        prev.currentTime = 0;
      }
      setPlaying(id);
      const next = new Audio(`/audio/spanish-ipa/${d.audio}`);
      next.onended = () => setPlaying(null);
      next.onerror = () => setPlaying(null);
      next.play().catch(() => setPlaying(null));
      audioRef.current = next;
    } else {
      playTts(d.example, id);
    }
  }, []);

  /** 双元音矩阵单元格：组合 + 例词 + 声音图标（紧凑单行，不溢出） */
  const DiphthongCell = ({ dip }: { dip: SpanishDiphthong | null }) => {
    if (!dip) return <span className="flex items-center justify-center text-muted-foreground/25">—</span>;
    const id = `dip-${dip.combo}`;
    const isPlaying = playing === id;
    return (
      <button
        type="button"
        onClick={() => playDiph(dip)}
        title={`${dip.combo} · ${dip.example} ${dip.meaning}${dip.audio ? "（原版）" : ""}`}
        className="group flex h-full w-full items-center justify-center gap-2 overflow-hidden px-1.5 py-1.5 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
      >
        {/* 左：组合（固定宽度，右侧加大内边距向中间靠拢） */}
        <span className="w-8 shrink-0 pr-2 text-center text-xl font-bold text-blue-600">{dip.combo}</span>
        {/* 中：例词 / 音节 / 中文（内容自适应，宽度减小） */}
        <span className="min-w-0 shrink">
          <span className="block truncate text-xs text-foreground">{dip.example}</span>
          {dip.exampleSyllables && (
            <span className="block truncate font-mono text-[10px] text-muted-foreground/70">{dip.exampleSyllables}</span>
          )}
          <span className="block truncate text-[10px] text-muted-foreground/70">{dip.meaning}</span>
        </span>
        {/* 右：声音图标（左右加大内边距） */}
        <span className="flex shrink-0 items-center px-2">
          <Volume2
            className={cn(
              "size-3.5",
              isPlaying ? "text-primary opacity-100" : "text-muted-foreground/60 opacity-0 group-hover:opacity-100",
            )}
          />
        </span>
      </button>
    );
  };

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
   *  字母 | 读音 | 音标 | a | e | i | o | u | 例词 | 音节拆分 */
  const GRID_COLS = "grid-cols-[3.5rem_6.5rem_3.5rem_3.5rem_3.5rem_3.5rem_3.5rem_3.5rem_8rem_6rem] gap-x-2";

  /** 单个字母行：字母 | 读音 | 音标 | a | e | i | o | u | 例词 | 音节拆分（行式表格） */
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
      {/* 原版单词示例 + 备注（单行内联，放不下用 title tooltip 显示完整） */}
      <div className="flex h-full w-full items-center self-stretch overflow-hidden">
        {item.audio && item.example ? (
          <button
            type="button"
            onClick={() => playAudio(item.audio!, `${idBase}-ex`)}
            title={`${item.example} ${item.exampleMeaning ?? ""} ${item.note ? "· " + item.note : ""}`}
            className="group flex w-full items-center gap-1 whitespace-nowrap rounded px-1.5 py-1 text-left transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            <span className="text-sm font-medium text-foreground">{item.example}</span>
            <span className="text-[11px] text-muted-foreground/60">{item.exampleMeaning}</span>
            {item.note && <span className="truncate text-[10px] text-muted-foreground/60">· {item.note}</span>}
            <Volume2 className={cn("size-3 shrink-0", playing === `${idBase}-ex` ? "text-primary" : "text-muted-foreground/0 group-hover:text-muted-foreground/70")} />
          </button>
        ) : (
          <span className="text-xs text-muted-foreground/40">—</span>
        )}
      </div>
      {/* 音节拆分（独立列） */}
      <span className="self-center px-1 font-mono text-xs text-muted-foreground/70">
        {item.exampleSyllables ?? "—"}
      </span>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-16 pt-6">
      {/* 页头 */}
      <header className="mb-6">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Spanish · Alphabet · Sílabas
        </p>
        <h1 className="mb-3 text-2xl font-semibold tracking-wide text-foreground">
          西语字母表 · 音节拼读
        </h1>
        <p className="mb-1 max-w-2xl leading-7 text-muted-foreground">
          西语字母与 5 个元音拼读（a/e/i/o/u）：唇音、齿音、喉音、舌后音、舌前音。
          点击字母、读音或任意音节可听发音；例词为原版录音。
        </p>
      </header>

      {/* 大表格：分类标题跨整列穿插在各组之间；只保留行与行的水平分隔线 */}
      <div className="overflow-hidden bg-background">
        {/* 表头（与数据行共用 GRID_COLS，保证列严格对齐） */}
        <div className={`grid ${GRID_COLS} items-center border-b border-t border-border bg-muted/40 px-3 py-2 text-xs font-medium text-muted-foreground`}>
          <div>字母</div>
          <div>读音</div>
          <div>音标</div>
          {VOWELS.map((v) => (
            <div key={v} className="text-2xl font-semibold text-orange-600">{v}</div>
          ))}
          <div>例词</div>
          <div>音节拆分</div>
        </div>
        {SPANISH_SOUND_GROUPS.map((group) => (
          <Fragment key={group.title}>
            {/* 分类分隔行：跨整列显示组名 + 说明 */}
            <div className="border-b border-border bg-muted/30 px-4 py-2.5">
              <span className="text-sm font-semibold text-foreground">{group.title}</span>
              {group.desc && <span className="ml-2 text-xs text-muted-foreground">{group.desc}</span>}
            </div>
            {group.letters.map((item) => (
              <LetterRow key={item.letter} item={item} idBase={item.letter} />
            ))}
          </Fragment>
        ))}
      </div>

      {/* 双元音（元元组合）：表格展示，整行可点击播放；有原版音频用 mp3，无则 TTS */}
      <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
        双元音 · Diptongos <span className="ml-1 text-sm font-normal text-muted-foreground">13 个</span>
      </h2>
      <p className="mb-3 text-sm text-muted-foreground">
        两个元音在同一音节连读（如 ai、ue）。矩阵行 = 首元音、列 = 尾元音，点击有组合的格子听发音；前 5 个为 speechgen 原版录音，其余为浏览器 TTS。
      </p>
      {/* 矩阵表格：行=首元音，列=尾元音（外部边框 + 单元格竖线） */}
      <div className="overflow-hidden border border-border bg-background">
        {/* 表头：空角 + 尾元音列 */}
        <div className="grid grid-cols-[4rem_repeat(5,1fr)] items-center border-b border-border bg-muted/40 text-sm font-medium text-muted-foreground">
          <div className="px-2 py-2 text-center text-xs">首＼尾</div>
          {VOWELS.map((v) => (
            <div key={v} className="border-l border-border px-2 py-2 text-center text-2xl font-semibold text-orange-600">{v}</div>
          ))}
        </div>
        {/* 数据行：每行一个首元音（最后一行保留 border-b 作为底部线） */}
        {VOWELS.map((first) => (
          <div key={first} className="grid grid-cols-[4rem_repeat(5,1fr)] items-stretch border-b border-border">
            <div className="flex items-center justify-center bg-muted/20 px-2 py-2 text-2xl font-semibold text-orange-600">{first}</div>
            {VOWELS.map((second) => {
              const dip = SPANISH_DIPHTHONGS.find((d) => d.combo === first + second) ?? null;
              return (
                <div key={second} className="min-w-0 overflow-hidden border-l border-border">
                  <DiphthongCell dip={dip} />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* 日常会话例句：大表格，分类标题跨整列穿插，点击西语例句播放发音 */}
      <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
        日常会话 · Frases Útiles
      </h2>
      <div className="overflow-hidden bg-background">
        {PHRASE_GROUPS.map((group) => (
          <Fragment key={group.title}>
            {/* 分类分隔行：跨整列显示组名（不加粗） */}
            <div className="border-b border-border bg-muted/30 px-4 py-2.5">
              <span className="text-base text-foreground">{group.title}</span>
            </div>
            {group.items.map((p, i) => (
              <button
                key={`${group.title}-${i}`}
                type="button"
                onClick={() => playTts(p.es, `phr-${group.title}-${i}`)}
                title={`播放 ${p.es}`}
                className="group flex w-full items-center gap-3 border-b border-border px-4 py-2.5 text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                <Volume2 className={cn("size-4 shrink-0", playing === `phr-${group.title}-${i}` ? "text-primary" : "text-muted-foreground/0 group-hover:text-muted-foreground/70")} />
                <span className="min-w-0 flex-1">
                  <span className="block text-lg text-blue-600">{p.es}</span>
                  {p.syl && (
                    <span className="block font-mono text-xs text-muted-foreground/70">{p.syl}</span>
                  )}
                </span>
                <span className="shrink-0 text-sm text-muted-foreground">{p.zh}</span>
              </button>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
