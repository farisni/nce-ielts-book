"use client"

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Volume2, Mic, Loader2, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { SPANISH_SOUND_GROUPS, SPANISH_DIPHTHONGS, type SpanishSoundLetter, type SpanishDiphthong } from "@/lib/spanish-sounds";

/** 日常会话例句分组（点击西语例句播放发音） */
const PHRASE_GROUPS = [
  {
    title: "问候类 · Saludos",
    items: [
      { es: "Hola", zh: "你好", syl: "Ho-la", audio: "hola.mp3" },
      { es: "Buenos días", zh: "早上好", syl: "Bue-nos dí-as", audio: "buenos_dias.mp3" },
      { es: "Buenas tardes", zh: "下午好", syl: "Bue-nas tar-des", audio: "buenas_tardes.mp3" },
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
  // 各句跟读评分历史（key=例句文本，保留最近 5 次）
  type PhraseScore = { total: number; accuracy: number; fluency: number; integrity: number };
  const [scores, setScores] = useState<Record<string, PhraseScore[]>>({});

  // 挂载时从 SQLite 加载该页全部例句的评分历史
  useEffect(() => {
    let cancelled = false
    fetch("/api/spanish/pron-history")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status))))
      .then((data) => {
        if (cancelled) return
        const hist = data.history ?? {}
        const map: Record<string, PhraseScore[]> = {}
        for (const [sentence, list] of Object.entries(hist)) {
          if (Array.isArray(list) && list.length > 0) map[sentence] = list.slice(-5) as PhraseScore[]
        }
        setScores(map)
      })
      .catch(() => {}) // 服务不可用时静默，用内存态
    return () => { cancelled = true }
  }, [])

  /** 保存某句评分：更新内存 + 持久化到 SQLite */
  const saveScore = useCallback((sentence: string, res: PhraseScore) => {
    setScores((prev) => {
      const list = prev[sentence] ? [...prev[sentence], res] : [res]
      return { ...prev, [sentence]: list.slice(-5) }
    })
    fetch("/api/spanish/pron-history", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sentence, result: res }),
    }).catch(() => {})
  }, [])

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

  /** 播放日常会话例句：有真人音频（spanish-phrases 目录）用 mp3，否则 TTS */
  const playPhrase = useCallback((p: { es: string; audio?: string }, id: string) => {
    if (p.audio) {
      const prev = audioRef.current;
      if (prev) {
        prev.pause();
        prev.currentTime = 0;
      }
      setPlaying(id);
      const next = new Audio(`/audio/spanish-phrases/${p.audio}`);
      next.onended = () => setPlaying(null);
      next.onerror = () => setPlaying(null);
      next.play().catch(() => setPlaying(null));
      audioRef.current = next;
    } else {
      playTts(p.es, id);
    }
  }, []);

  /** 跟读录音评分：录音 → 解码 16k PCM → 上传讯飞（西语走 suntone）→ onResult 上报评分 */
  const PhraseRecorder = ({ text, onResult }: { text: string; onResult?: (s: { total: number; accuracy: number; fluency: number; integrity: number }) => void }) => {
    const [recording, setRecording] = useState(false);
    const [evaluating, setEvaluating] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [sec, setSec] = useState(0);
    const recRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
      return () => {
        if (timerRef.current) window.clearInterval(timerRef.current);
        recRef.current?.stream.getTracks().forEach((t) => t.stop());
      };
    }, []);

    const start = async () => {
      setError(null);
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mr = new MediaRecorder(stream);
        const chunks: Blob[] = [];
        mr.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };
        mr.start();
        recRef.current = mr;
        chunksRef.current = chunks;
        setRecording(true);
        setSec(0);
        timerRef.current = window.setInterval(() => setSec((s) => s + 1), 1000);
      } catch (e) {
        setError("无法访问麦克风");
      }
    };

    const stop = async () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      setRecording(false);
      const mr = recRef.current;
      if (!mr || mr.state === "inactive") return;
      const chunks = chunksRef.current;
      await new Promise<void>((resolve) => { mr.onstop = () => resolve(); mr.stop(); });
      mr.stream.getTracks().forEach((t) => t.stop());
      recRef.current = null;
      if (chunks.length === 0) { setError("未采集到音频"); return; }

      setEvaluating(true);
      try {
        // 解码 webm/opus → 16k 16bit 单声道 PCM
        const blob = new Blob(chunks, { type: chunks[0].type || "audio/webm" });
        const ctx = new AudioContext();
        const decoded = await ctx.decodeAudioData(await blob.arrayBuffer());
        const srcRate = decoded.sampleRate || 48000;
        const off = new OfflineAudioContext(1, Math.ceil((decoded.length / srcRate) * 16000), 16000);
        const buf = off.createBuffer(1, decoded.length, srcRate);
        buf.getChannelData(0).set(decoded.getChannelData(0));
        const src = off.createBufferSource();
        src.buffer = buf;
        src.connect(off.destination);
        src.start(0);
        const rendered = await off.startRendering();
        const data = rendered.getChannelData(0);
        const pcm = new Int16Array(data.length);
        for (let i = 0; i < data.length; i++) {
          const s = Math.max(-1, Math.min(1, data[i]));
          pcm[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
        }
        await ctx.close();

        const fd = new FormData();
        fd.append("audio", new Blob([pcm.buffer], { type: "audio/pcm" }), "recording.pcm");
        fd.append("text", text);
        const res = await fetch("/api/pronunciation", { method: "POST", body: fd });
        const json = await res.json();
        if (!json.success) throw new Error(json.error || "评测失败");
        const s = {
          total: Math.round(Number(json.result.total) || 0),
          accuracy: Math.round(Number(json.result.accuracy) || 0),
          fluency: Math.round(Number(json.result.fluency) || 0),
          integrity: Math.round(Number(json.result.integrity) || 0),
        };
        onResult?.(s);
      } catch (e) {
        setError((e as Error).message || "评测失败");
      } finally {
        setEvaluating(false);
      }
    };

    return (
      <div className="flex shrink-0 items-center gap-2">
        {!recording ? (
          <button
            type="button"
            onClick={start}
            disabled={evaluating}
            title="跟读录音评分"
            className="inline-flex w-full items-center justify-center gap-1 rounded border border-border px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted/60 disabled:opacity-50"
          >
            <Mic className="size-3.5" />
            跟读
          </button>
        ) : (
          <button
            type="button"
            onClick={stop}
            title={`停止 (${sec}s)`}
            className="inline-flex w-full items-center justify-center gap-1 rounded border border-destructive/50 bg-destructive/10 px-2 py-1 text-xs text-destructive"
          >
            <Square className="size-3 fill-current" />
            {sec}s
          </button>
        )}
        {evaluating && <Loader2 className="size-3.5 animate-spin text-muted-foreground" />}
        {!evaluating && error && <span className="text-xs text-rose-500">{error}</span>}
      </div>
    );
  };

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
            {group.items.map((p, i) => {
              const s = scores[p.es];
              return (
                <div
                  key={`${group.title}-${i}`}
                  className="grid w-full grid-cols-[288px_1fr_175px_96px] items-center gap-3 border-b border-border px-4 py-2 transition-colors hover:bg-muted/30"
                >
                  {/* 例句（点击播放真人/TTS） */}
                  <button
                    type="button"
                    onClick={() => playPhrase(p, `phr-${group.title}-${i}`)}
                    title={`播放 ${p.es}${p.audio ? "（真人发音）" : ""}`}
                    className="group flex min-w-0 items-center gap-3 rounded text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                  >
                    <Volume2 className={cn("size-4 shrink-0", playing === `phr-${group.title}-${i}` ? "text-primary" : "text-muted-foreground/0 group-hover:text-muted-foreground/70")} />
                    <span className="min-w-0">
                      <span className="block text-lg text-blue-600">{p.es}</span>
                      {p.syl && (
                        <span className="block font-mono text-xs text-muted-foreground/70">{p.syl}</span>
                      )}
                    </span>
                  </button>
                  {/* 评分列（紧跟例句，第二列）；hover 显示最近 5 次历史 */}
                  <div
                    className="flex shrink-0 items-center gap-1.5"
                    title={s && s.length > 0 ? `最近 ${s.length} 次评分\n` + s.map((sc, idx) => `第${idx + 1}次 总${sc.total} 准${sc.accuracy} 流${sc.fluency} 整${sc.integrity}`).join("\n") : ""}
                  >
                    {s && s.length > 0 ? (
                      [
                        // 总分：<80 判不及格 → 橘红色；其余维度保持原有分级
                        { label: "总", v: s[s.length - 1].total, isTotal: true },
                        { label: "准", v: s[s.length - 1].accuracy, isTotal: false },
                        { label: "流", v: s[s.length - 1].fluency, isTotal: false },
                        { label: "整", v: s[s.length - 1].integrity, isTotal: false },
                      ].map((item) => (
                        <span key={item.label} className="flex items-center gap-0.5 text-base tabular-nums">
                          <span className="text-muted-foreground/60">{item.label}</span>
                          <span
                            className={cn(
                              "font-semibold",
                              item.isTotal
                                ? item.v >= 80 ? "text-emerald-500" : "text-orange-600"
                                : item.v >= 70 ? "text-emerald-500" : item.v >= 50 ? "text-amber-500" : "text-rose-500",
                            )}
                          >
                            {item.v}
                          </span>
                        </span>
                      ))
                    ) : (
                      <span className="text-base text-muted-foreground/40">—</span>
                    )}
                  </div>
                  {/* 中文释义 */}
                  <span className="shrink-0 text-sm text-muted-foreground">{p.zh}</span>
                  {/* 跟读录音 */}
                  <PhraseRecorder
                    text={p.es}
                    onResult={(res) => saveScore(p.es, res)}
                  />
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
