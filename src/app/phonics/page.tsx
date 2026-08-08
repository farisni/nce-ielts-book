"use client"

import { useCallback, useRef, useState } from "react";
import { Volume2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { PHONICS_ROWS, type GraphemeCell } from "@/lib/phonics-code";

/** 原版字体（Sassoon Primary，儿童书写教学体）。本机未安装时回退到系统手写体。 */
const PHONICS_FONT = "'Sassoon Primary', 'SassoonPrimary', 'Chalkboard SE', 'Chalkboard', 'Comic Sans MS', cursive";

/**
 * 根据背景色亮度自动选择色条文字颜色（同原版：深底浅字 #eee / 浅底深字 #666）。
 * hex 或 oklch 都转成相对亮度，阈值取 0.5。
 */
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
  // 非 hex（如 oklch）默认深底浅字
  return "#eee";
}

/**
 * 计算音素行在 6 列网格中需要补多少个空位格（同原版：空白处也是带边框的空格子）。
 * 用稀疏自动放置模拟 CSS grid：rowspan=2 的格占当前行 + 下一行同列。
 */
function countEmptyCells(cells: GraphemeCell[], cols = 6): number {
  const occupied = new Set<number>();
  const key = (r: number, c: number) => r * cols + c;
  let col = 0;
  let row = 0;
  let maxRow = 0;
  for (const cell of cells) {
    while (occupied.has(key(row, col))) {
      col++;
      if (col >= cols) {
        col = 0;
        row++;
      }
    }
    occupied.add(key(row, col));
    maxRow = Math.max(maxRow, row);
    if (cell.rowspan > 1) {
      occupied.add(key(row + 1, col));
      maxRow = Math.max(maxRow, row + 1);
    }
    col++;
    if (col >= cols) {
      col = 0;
      row++;
    }
  }
  const totalCells = (maxRow + 1) * cols;
  return totalCells - occupied.size;
}

/**
 * 播放本地音频：先加载后播放，同一时刻只播一个。
 * 返回播放函数与正在加载/播放的状态。
 */
function useSound() {
  const [active, setActive] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback((src: string, id: string) => {
    const a = audioRef.current;
    if (a) {
      a.pause();
      a.currentTime = 0;
    }
    setActive(id);
    setLoading(id);
    const next = new Audio(src);
    next.oncanplaythrough = () => setLoading(null);
    next.onended = () => setActive(null);
    next.onerror = () => {
      setActive(null);
      setLoading(null);
    };
    next.play().catch(() => {
      setActive(null);
      setLoading(null);
    });
    audioRef.current = next;
  }, []);

  return { play, active, loading };
}

/** 单个拼写格：拼写替代 + 例词（高亮该拼写）+ 配图 + 底部色条，点击播放发音 */
function GraphemeCard({
  cell,
  onPlay,
  active,
  loading,
}: {
  cell: GraphemeCell;
  onPlay: () => void;
  active: boolean;
  loading: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      title={`${cell.g} · ${cell.ex}`}
      className={`group relative flex min-w-0 flex-col overflow-hidden border-b border-r border-black/70 bg-white pt-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 ${
        cell.rowspan > 1 ? "row-span-2" : ""
      }`}
      style={{ fontFamily: PHONICS_FONT }}
    >
      {/* 拼写替代（silent 字母用空心/浅色标注）：原版 32px 粗体左对齐 */}
      <span className="w-full px-2 text-left text-[32px] font-bold leading-none text-foreground">
        {renderGrapheme(cell.g, cell.silent)}
      </span>

      {/* 配图：单行格固定缩略图高度；跨行格（rowspan>1）撑满剩余空间，避免下方留白 */}
      {cell.img && (
        <div
          className={`flex w-full items-center justify-center ${
            cell.rowspan > 1 ? "flex-1 py-1" : "h-14 py-1"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cell.img}
            alt={cell.ex}
            loading="lazy"
            className={`object-contain ${cell.rowspan > 1 ? "h-full w-full" : "max-h-full max-w-full"}`}
          />
        </div>
      )}

      {/* 例词：原版 24px/600/灰色，左对齐 */}
      <span className="w-full px-2 pb-1.5 text-left text-[24px] font-semibold leading-none text-muted-foreground">
        {renderExample(cell.ex, cell.hl)}
      </span>

      {/* 底部色条：整条全宽色条 + 色条上的教学单元标注（同原版）；mt-auto 保证始终贴底 */}
      <span
        className="mt-auto flex w-full items-center justify-start px-1.5 py-0.5 text-left text-[10px] font-medium leading-tight"
        style={{
          backgroundColor: cell.color ?? "transparent",
          color: colorContrast(cell.color),
        }}
      >
        {cell.unit || " "}
      </span>

      {/* 喇叭/加载状态 */}
      <span className="pointer-events-none absolute right-1 top-1 text-muted-foreground/0 transition-colors group-hover:text-muted-foreground/70">
        {loading ? <Loader2 className="size-5 animate-spin" /> : active ? <Volume2 className="size-5 text-primary" /> : <Volume2 className="size-5" />}
      </span>
    </button>
  );
}

/** 拼写替代文本：silent 字母渲染为浅色空心样式 */function renderGrapheme(grapheme: string, silent: string[]) {
  if (!silent.length) return grapheme;
  // 按字符拆分，silent 中的字符用浅色
  const silentSet = new Set(silent);
  return [...grapheme].map((ch, i) =>
    silentSet.has(ch) ? (
      <span key={i} className="font-normal text-muted-foreground/50">
        {ch}
      </span>
    ) : (
      <span key={i}>{ch}</span>
    ),
  );
}

/**
 * 音素格渲染：斜杠保持前景色，斜杠内的音素字母按类型着色（同原版）。
 * 原版 CSS：act-left-1（元音）字母红 #ee1d24，act-left-2（辅音）字母蓝 #3157a4；
 * 描述文字（short/long/schwa 等）保持黑色。
 */
function renderPhoneme(phoneme: string, type: "vowel" | "consonant") {
  const letterColor = type === "vowel" ? "#ee1d24" : "#3157a4";
  const parts = phoneme.split(/(\/.*?\/)/g).filter(Boolean);
  return parts.map((part, i) => {
    // 形如 /s/ 的片段：斜杠黑，中间字母着色
    if (part.startsWith("/") && part.endsWith("/")) {
      const inner = part.slice(1, -1);
      return (
        <span key={i}>
          <span className="text-foreground">/</span>
          <span style={{ color: letterColor }}>{inner}</span>
          <span className="text-foreground">/</span>
        </span>
      );
    }
    // 描述文字：黑色
    return <span key={i} className="text-foreground">{part}</span>;
  });
}

/** 例词：hl 中的子串用主题色加粗 */
function renderExample(example: string, highlights: string[]) {
  if (!highlights.length) return example;
  // 简单做法：在例词中查找第一个高亮片段并包上高亮
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

export default function PhonicsPage() {
  const { play, active, loading } = useSound();

  return (
    <div className="mx-auto w-full max-w-[1200px] pb-16">
      {/* 页头 */}
      <header className="mb-2">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Synthetic Phonics · The English Alphabetic Code
        </p>
        <h1 className="mb-3 text-2xl font-semibold tracking-wide text-foreground">
          自然拼读 · 英语字母拼读代码表
        </h1>
        <p className="mb-1 max-w-2xl leading-7 text-muted-foreground">
          英语的音素（phoneme）与拼写替代（grapheme）对照表。点击任意格子或喇叭
          <Volume2 className="mx-0.5 inline size-3.5 align-[-2px]" />
          可听该音素/拼写的发音示范。
        </p>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground/80">
          深色部分为 Simple Code（单字母拼写），浅色部分为 Complex Code（字母组合拼写）；
          格子底部色条为 Phonics International 教学单元的区分色。
        </p>
      </header>

      {/* 音素代码表：格子自身 border 画网格线，容器白底，无缝隙无圆角（同原版 table） */}
      <div className="mt-6 border-l border-t border-black/70 bg-white">
        {/* 表头：Units of Sound / Graphemes / Simple & Complex Code */}
        <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[128px_1fr]">
          <div className="row-span-2 flex flex-col items-center justify-center gap-1 border-b border-r border-black/70 bg-[#fff200] px-1 py-2 text-center">
            <span className="text-xs font-semibold leading-tight text-foreground sm:text-sm">Units of Sound</span>
            <span className="text-xs font-semibold leading-tight text-foreground sm:text-sm">Phoneme/s</span>
          </div>
          <div className="flex items-center justify-center border-b border-r border-black/70 bg-[#e7d970] px-3 py-2 text-center text-xs font-semibold leading-tight text-foreground sm:text-sm">
            Graphemes (letters or letter groups) that are code for the sounds
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6">
            <div className="flex items-center justify-center border-b border-r border-black/70 bg-[#b8e8fb] px-1 py-1.5 text-center text-[11px] font-semibold text-foreground">
              Simple Code
            </div>
            <div className="col-span-2 flex items-center justify-center border-b border-r border-black/70 bg-[#c9d9dc] px-1 py-1.5 text-center text-[11px] font-semibold text-foreground sm:col-span-5">
              Complex Code
            </div>
          </div>
        </div>

        {PHONICS_ROWS.map((row) => (
          <div
            key={row.phoneme}
            className="grid grid-cols-[100px_1fr] sm:grid-cols-[128px_1fr]"
          >
            {/* 音素格：原版黄色背景 + 26px 字号；播放图标右上角 hover 显示（同拼写格） */}
            <button
              type="button"
              onClick={() => row.audio && play(row.audio, `ph-${row.phoneme}`)}
              title="播放音素发音"
              className="group relative flex h-full flex-col items-center justify-center gap-1 border-b border-r border-black/70 bg-[#fffa94] px-1 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 dark:bg-[#3a3520]"
              style={{ fontFamily: PHONICS_FONT }}
            >
              <span className="text-[26px] font-semibold leading-none">
                {renderPhoneme(row.phoneme, row.type)}
              </span>
              {/* 播放图标：右上角，hover 才出现（同拼写格） */}
              {row.audio && (
                <span className="pointer-events-none absolute right-1 top-1 text-muted-foreground/0 transition-colors group-hover:text-muted-foreground/70">
                  {loading === `ph-${row.phoneme}` ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : active === `ph-${row.phoneme}` ? (
                    <Volume2 className="size-4 text-primary" />
                  ) : (
                    <Volume2 className="size-4" />
                  )}
                </span>
              )}
            </button>

            {/* 该音素的拼写格组：固定 6 列网格，多出的格自动换行；空位补边框空格（同原版 table） */}
            <div className="grid grid-cols-3 bg-white sm:grid-cols-6">
              {row.cells.map((cell, i) => {
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
        ))}
      </div>
    </div>
  );
}
