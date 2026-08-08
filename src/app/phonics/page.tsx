"use client"

import { useCallback, useRef, useState } from "react";
import { Volume2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { PHONICS_ROWS, type GraphemeCell } from "@/lib/phonics-code";

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
      className="group relative flex min-w-[88px] flex-1 flex-col items-center gap-1 overflow-hidden rounded-lg border border-border bg-card px-2 py-2.5 transition-colors hover:border-ring/60 hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      {/* 拼写替代（silent 字母用空心/浅色标注） */}
      <span className="text-lg font-semibold leading-tight text-foreground">
        {renderGrapheme(cell.g, cell.silent)}
      </span>

      {/* 例词：目标拼写高亮 */}
      <span className="text-sm text-muted-foreground">
        {renderExample(cell.ex, cell.hl)}
      </span>

      {/* 配图（有则显示，小尺寸） */}
      {cell.img && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={cell.img}
          alt={cell.ex}
          loading="lazy"
          className="mt-0.5 h-9 w-9 object-contain"
        />
      )}

      {/* 底部色条（Phonics International 单元颜色） */}
      {cell.color && (
        <span
          className="absolute inset-x-0 bottom-0 h-[3px]"
          style={{ backgroundColor: cell.color }}
        />
      )}

      {/* 喇叭/加载状态 */}
      <span className="pointer-events-none absolute right-1 top-1 text-muted-foreground/0 transition-colors group-hover:text-muted-foreground/70">
        {loading ? <Loader2 className="size-3.5 animate-spin" /> : active ? <Volume2 className="size-3.5 text-primary" /> : <Volume2 className="size-3.5" />}
      </span>
    </button>
  );
}

/** 拼写替代文本：silent 字母渲染为浅色空心样式 */
function renderGrapheme(grapheme: string, silent: string[]) {
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

      {/* 音素代码表 */}
      <div className="mt-6 space-y-2">
        {PHONICS_ROWS.map((row) => (
          <div
            key={row.phoneme}
            className="grid grid-cols-[64px_1fr] items-stretch gap-2 sm:grid-cols-[88px_1fr]"
          >
            {/* 音素格 */}
            <button
              type="button"
              onClick={() => row.audio && play(row.audio, `ph-${row.phoneme}`)}
              title="播放音素发音"
              className="flex flex-col items-center justify-center gap-1 rounded-lg border border-border bg-muted/50 px-1 py-2 transition-colors hover:border-ring/60 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              <span className="text-lg font-semibold leading-none text-foreground">{row.phoneme}</span>
              {row.audio && (
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  {loading === `ph-${row.phoneme}` ? (
                    <Loader2 className="size-3 animate-spin" />
                  ) : active === `ph-${row.phoneme}` ? (
                    <Volume2 className="size-3 text-primary" />
                  ) : (
                    <Volume2 className="size-3" />
                  )}
                  发音
                </span>
              )}
            </button>

            {/* 该音素的拼写格组 */}
            <div className="flex flex-wrap gap-2">
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
            </div>
          </div>
        ))}
      </div>

      {/* 页脚说明 */}
      <footer className="mt-10 border-t pt-6 text-sm leading-7 text-muted-foreground/70">
        <p>
          本表整理自{" "}
          <a
            href="https://syntheticphonics.com/the-english-alphabetic-code-with-audio/"
            target="_blank"
            rel="noreferrer"
            className="text-[#337ea9] underline-offset-4 hover:underline dark:text-[#9cd8fc]"
          >
            Synthetic Phonics — The English Alphabetic Code with Audio
          </a>
          ，版权归原站所有，仅供学习交流。任何拼读代码表都无法完全涵盖口音差异，部分音素在单独发音时可能采用“简化”读法。
        </p>
      </footer>
    </div>
  );
}
