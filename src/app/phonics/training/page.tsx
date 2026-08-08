"use client"

import { useCallback, useRef, useState } from "react";
import { Volume2, Loader2 } from "lucide-react";
import { PDF_PHONICS_ROWS, type GraphemeCell } from "@/lib/phonics-pdf";

/** 原版字体（Sassoon Primary，儿童书写教学体）。已本地化到 /fonts，缺失时回退系统手写体。 */
const PHONICS_FONT = "'Sassoon Primary', 'SassoonPrimary', 'Chalkboard SE', 'Chalkboard', 'Comic Sans MS', cursive";

/** 播放本地音频 */
function useSound() {
  const [active, setActive] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const play = useCallback((src: string, id: string) => {
    const a = audioRef.current;
    if (a) { a.pause(); a.currentTime = 0; }
    setActive(id);
    setLoading(id);
    const next = new Audio(src);
    next.oncanplaythrough = () => setLoading(null);
    next.onended = () => setActive(null);
    next.onerror = () => { setActive(null); setLoading(null); };
    next.play().catch(() => { setActive(null); setLoading(null); });
    audioRef.current = next;
  }, []);
  return { play, active, loading };
}

/** 根据背景亮度选文字颜色 */
function colorContrast(hex: string | null): string {
  if (!hex) return "transparent";
  const m = hex.replace("#", "");
  if (/^[0-9a-fA-F]{6}$/.test(m)) {
    const r = parseInt(m.slice(0, 2), 16) / 255;
    const g = parseInt(m.slice(2, 4), 16) / 255;
    const b = parseInt(m.slice(4, 6), 16) / 255;
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return lum > 0.55 ? "#444" : "#eee";
  }
  return "#eee";
}

/** 计算 6 列网格需要补的空格数 */
function countEmptyCells(cells: GraphemeCell[], cols = 6): number {
  const occupied = new Set<number>();
  const key = (r: number, c: number) => r * cols + c;
  let col = 0, row = 0, maxRow = 0;
  for (const cell of cells) {
    while (occupied.has(key(row, col))) {
      col++;
      if (col >= cols) { col = 0; row++; }
    }
    occupied.add(key(row, col));
    maxRow = Math.max(maxRow, row);
    if (cell.rowspan > 1) {
      occupied.add(key(row + 1, col));
      maxRow = Math.max(maxRow, row + 1);
    }
    col++;
    if (col >= cols) { col = 0; row++; }
  }
  return (maxRow + 1) * cols - occupied.size;
}

/** 拼写替代：silent 字母空心描边（保持粗体） */
function renderGrapheme(grapheme: string, silent: string[]) {
  if (!silent.length) return grapheme;
  const silentSet = new Set(silent);
  return [...grapheme].map((ch, i) =>
    silentSet.has(ch) ? (
      <span key={i} className="font-bold text-white" style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", marginLeft: i > 0 ? "3px" : undefined, letterSpacing: "3px" }}>{ch}</span>
    ) : (
      <span key={i}>{ch}</span>
    ),
  );
}

/** 例词：目标拼写主题色高亮 */
function renderExample(example: string, highlights: string[]) {
  if (!highlights.length) return example;
  const hl = highlights[0];
  if (!hl) return example;
  const idx = example.toLowerCase().indexOf(hl.toLowerCase());
  if (idx < 0) return example;
  return (
    <>
      {example.slice(0, idx)}
      <span className="font-semibold text-[#337ea9] dark:text-[#9cd8fc]">{example.slice(idx, idx + hl.length)}</span>
      {example.slice(idx + hl.length)}
    </>
  );
}

/** 单个拼写格 */
function GraphemeCard({ cell, onPlay, active, loading }: { cell: GraphemeCell; onPlay: () => void; active: boolean; loading: boolean }) {
  return (
    <button
      type="button"
      onClick={onPlay}
      title={`${cell.g} · ${cell.ex}`}
      className={`group relative flex min-w-0 flex-col overflow-hidden border-b border-r border-black/70 bg-white pt-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 ${cell.rowspan > 1 ? "row-span-2" : ""}`}
      style={{ fontFamily: PHONICS_FONT }}
    >
      <span className="w-full px-2 text-left text-[32px] font-bold leading-none text-foreground">{renderGrapheme(cell.g, cell.silent)}</span>
      {cell.img && (
        <div className={`flex w-full items-center justify-center ${cell.rowspan > 1 ? "flex-1 py-1" : "h-20 py-1"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cell.img} alt={cell.ex} loading="lazy" className="max-h-full max-w-full object-contain" />
        </div>
      )}
      <span className="w-full px-2 pb-2 text-left text-[24px] font-semibold leading-none text-muted-foreground">{renderExample(cell.ex, cell.hl)}</span>
      <span className="mt-auto flex w-full items-center justify-start px-1.5 py-0.5 text-left text-[10px] font-medium leading-tight" style={{ backgroundColor: cell.color ?? "transparent", color: colorContrast(cell.color) }}>
        {cell.unit || " "}
      </span>
      <span className="pointer-events-none absolute right-1 top-1 text-muted-foreground/0 transition-colors group-hover:text-muted-foreground/70">
        {loading ? <Loader2 className="size-5 animate-spin" /> : active ? <Volume2 className="size-5 text-primary" /> : <Volume2 className="size-5" />}
      </span>
    </button>
  );
}

/** 教学信息栏内容（取自 PDF 右侧信息栏） */
const INFO_SECTIONS: { title: string; body: string }[] = [
  {
    title: "教学原则",
    body: "Teach the KNOWLEDGE of the alphabetic code; that is, the letter/s-sound correspondences. 即：先教字母/音的对应知识（alphabetic code）。",
  },
  {
    title: "三大核心技能",
    body: "1. DECODING 解码：Sound out and blend all-through-the-printed-word for reading unknown words.\n2. ENCODING 编码：Orally segment the sounds for spelling; then select the correct graphemes AS CODE FOR the identified sounds.\n3. HANDWRITING 书写：Hold the pencil with the tripod grip and form correctly the 26 upper case and 26 lower case letters.",
  },
  {
    title: "Simple Code 先行",
    body: "Teach a simple code first, that is, mainly one spelling for each sound. The simple code is part of the complex code – a first step towards teaching the alphabetic code. 先教简单拼写（一个音一个主要拼写），再引入复杂拼写（Complex Code）。",
  },
  {
    title: "Accents 口音",
    body: "Teaching the English alphabetic code is not an 'exact science' and accents need to be taken into account at all times along with the notion of 'tweaking' (modifying) pronunciation when decoding. 音素代码表无法完全涵盖口音差异。",
  },
  {
    title: "Schwa 效应",
    body: "A sound close to /u/ is the spoken translation of the written code in words such as 'sofa' (sofu), 'faster' (fastu), 'little' (littul), 'around' (uround). 弱元音 schwa 在非重读音节中常读作接近 /u/ 的音。",
  },
  {
    title: "The notion of a 'code'",
    body: "Root all the teaching for decoding and encoding in the CODE - the relationship between the sounds of speech and their spelling alternatives (the graphemes). 字母不'说出'声音，它们只是提示我们生成声音。'silent letters' 如 kn/wr/mb/gn 其实是该音的拼写替代的一部分。",
  },
];

export default function PhonicsTrainingPage() {
  const { play, active, loading } = useSound();
  const vowelRows = PDF_PHONICS_ROWS.filter((r) => r.type === "vowel");
  const consonantRows = PDF_PHONICS_ROWS.filter((r) => r.type === "consonant");

  const renderRow = (row: (typeof PDF_PHONICS_ROWS)[number]) => (
    <div key={row.phoneme} className="grid grid-cols-[100px_1fr] sm:grid-cols-[128px_1fr]">
      {/* 音素格 */}
      <button
        type="button"
        onClick={() => row.audio && play(row.audio, `ph-${row.phoneme}`)}
        title="播放音素发音"
        className="group relative flex h-full flex-col items-center justify-center gap-1 border-b border-r border-black/70 bg-[#fffa94] px-1 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 dark:bg-[#3a3520]"
        style={{ fontFamily: PHONICS_FONT }}
      >
        <span className="text-[36px] font-bold leading-none text-foreground">{row.phoneme}</span>
        {row.audio && (
          <span className="pointer-events-none absolute right-1 top-1 text-muted-foreground/0 transition-colors group-hover:text-muted-foreground/70">
            {loading === `ph-${row.phoneme}` ? <Loader2 className="size-4 animate-spin" /> : active === `ph-${row.phoneme}` ? <Volume2 className="size-4 text-primary" /> : <Volume2 className="size-4" />}
          </span>
        )}
      </button>
      {/* 拼写格组 */}
      <div className="grid grid-cols-3 bg-white sm:grid-cols-6">
        {row.cells.map((cell, i) => {
          if (cell.note && !cell.g && !cell.ex) {
            return (
              <div key={`note-${i}`} className="flex min-w-0 flex-col items-center justify-center gap-1.5 border-b border-r border-black/70 bg-[#fffa94] px-2 py-2 text-center" style={{ fontFamily: PHONICS_FONT }}>
                <span className="text-[15px] leading-snug text-foreground">{cell.note}</span>
              </div>
            );
          }
          const cid = `${row.phoneme}-${i}`;
          return (
            <GraphemeCard
              key={`${cell.g}-${cell.ex}-${i}`}
              cell={cell}
              onPlay={() => cell.audio && play(cell.audio, cid)}
              active={active === cid}
              loading={loading === cid}
            />
          );
        })}
        {Array.from({ length: countEmptyCells(row.cells) }).map((_, i) => (
          <div key={`empty-${i}`} className="border-b border-r border-black/70 bg-white" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[1600px] pb-16">
      {/* 页头 */}
      <header className="mb-6">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">The English Alphabetic Code · Training Illustrated</p>
        <h1 className="mb-3 text-2xl font-semibold tracking-wide text-foreground">英语字母拼读代码表 · 教学图表</h1>
        <p className="mb-2 max-w-3xl leading-7 text-muted-foreground">
          教学顺序排列：先元音（红色）后辅音（蓝色）。26 个字母代表约 44 个语音的最小声音单位，有三种方式：一个音可由一至四个字母表示；一个音可有多种拼写替代；一个拼写可表示多个音。
        </p>
        <p className="max-w-3xl text-sm leading-7 text-muted-foreground/80">
          组合音素用 <span className="font-semibold">+</span> 标记（如 /kw/ /ks/）；灰色破折号表示该拼写通常不用于词首；空心字母提示可能有多种发音。
        </p>
      </header>

      {/* 主布局：左侧图表 + 右侧教学信息栏 */}
      <div className="flex gap-6">
        {/* 左侧：音素代码表 */}
        <div className="min-w-0 flex-1">
          {/* 表头 */}
          <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[128px_1fr]" style={{ fontFamily: PHONICS_FONT }}>
            <div className="row-span-2 flex flex-col items-center justify-center gap-1 border-b border-r border-black/70 bg-[#fff200] px-1 py-2 text-center">
              <span className="text-sm font-semibold leading-tight text-foreground sm:text-base">Units of Sound</span>
              <span className="text-sm font-semibold leading-tight text-foreground sm:text-base">Phoneme/s</span>
            </div>
            <div className="flex items-center justify-center border-b border-r border-black/70 bg-[#e7d970] px-3 py-2 text-center text-sm font-semibold leading-tight text-foreground sm:text-base">
              Graphemes (letters or letter groups) that are code for the sounds
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6">
              <div className="flex items-center justify-center border-b border-r border-black/70 bg-[#b8e8fb] px-1 py-1.5 text-center text-xs font-semibold text-foreground sm:text-sm">Simple Code</div>
              <div className="col-span-2 flex items-center justify-center border-b border-r border-black/70 bg-[#c9d9dc] px-1 py-1.5 text-center text-xs font-semibold text-foreground sm:col-span-5 sm:text-sm">Complex Code</div>
            </div>
          </div>

          {/* 元音区 */}
          <div className="border-t border-l border-black/70 bg-white">
            <div className="flex items-center gap-2 border-b border-r border-black/70 bg-[#fff200]/60 px-3 py-1.5 text-sm font-bold text-foreground" style={{ fontFamily: PHONICS_FONT }}>
              元音 Vowel Sounds
            </div>
            {vowelRows.map(renderRow)}
          </div>

          {/* 辅音区 */}
          <div className="border-t border-l border-black/70 bg-white">
            <div className="flex items-center gap-2 border-b border-r border-black/70 bg-[#b8e8fb]/60 px-3 py-1.5 text-sm font-bold text-foreground" style={{ fontFamily: PHONICS_FONT }}>
              辅音 Consonant Sounds
            </div>
            {consonantRows.map(renderRow)}
          </div>
        </div>

        {/* 右侧：教学信息栏 */}
        <aside className="hidden w-[280px] shrink-0 lg:block">
          <div className="sticky top-20 flex flex-col gap-4 rounded-lg border border-border bg-card p-4">
            <h2 className="text-sm font-semibold text-foreground">教学要点</h2>
            {INFO_SECTIONS.map((s) => (
              <div key={s.title} className="text-xs leading-5 text-muted-foreground">
                <h3 className="mb-0.5 font-semibold text-foreground">{s.title}</h3>
                <p className="whitespace-pre-line">{s.body}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
