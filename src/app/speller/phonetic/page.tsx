"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WAXUE_CHAPTERS } from "@/lib/speller/phonetic";
import { getAllProgress } from "@/lib/speller/progress";

/**
 * Speller · 英式音标听力
 * 48 个音标单元表格化展示（phonics 风格）：按音标类别分卡片区块，
 * 每个音标单元是可点击的单元格（音标 + 词数 + 上次听写位置），点击进入单词听写
 */
export default function PhoneticPage() {
  // 各类别的上次听写位置：{ chapterSlug: 单词序号（从 1 起，类别整体进度） }
  const [lastPos, setLastPos] = useState<Record<string, number>>({});

  // 播放音素标准发音（yyybabc 音标材料的 /audio/phonetic/ipa/{音素}.aac）
  const playIpa = (phonetics: string) => {
    const ph = phonetics.replace(/\//g, "");
    new Audio(`/audio/phonetic/ipa/${encodeURIComponent(ph)}.aac`).play().catch(() => {});
  };

  // 播放单词原声（有 mp3 播原声，无则 TTS）
  const playWord = (word: string, audio?: string) => {
    if (audio) {
      new Audio(audio).play().catch(() => {});
      return;
    }
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = "en-US";
    u.rate = 0.85;
    synth.speak(u);
  };
  const totalWords = WAXUE_CHAPTERS.reduce(
    (sum, ch) => sum + ch.tests.reduce((s, t) => s + t.words.length, 0),
    0,
  );

  useEffect(() => {
    // 读取每个类别的上次位置（数据库；course id = phonetic-${chapter}，类别整体进度）
    getAllProgress()
      .then((map) => {
        const pos: Record<string, number> = {};
        for (const ch of WAXUE_CHAPTERS) {
          const last = map[`phonetic-${ch.slug}`]?.lastPos ?? 0;
          if (last > 0) pos[ch.slug] = last + 1; // 0-based → 第 N 词
        }
        setLastPos(pos);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl pb-16 pt-10">
      <header className="mb-8">
        <Link
          href="/speller"
          className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          返回 Speller
        </Link>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          IPA Dictation
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">英式音标听力</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {WAXUE_CHAPTERS.length} 类 · {WAXUE_CHAPTERS.reduce((s, c) => s + c.tests.length, 0)} 个音标单元 ·{" "}
          {totalWords} 个单词。点击音标进入该音的单词听写，练习发音与拼写。
        </p>
      </header>

      {/* 音标类别区块 */}
      {WAXUE_CHAPTERS.map((ch) => {
        const chapterWords = ch.tests.reduce((s, t) => s + t.words.length, 0);
        const chapterPos = lastPos[ch.slug];
        return (
          <section key={ch.slug} className="group mb-8 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold text-foreground">{ch.name}</h2>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                {ch.tests.length} 个音标 · {chapterWords} 词
              </span>
              {chapterPos !== undefined && (
                <span className="text-xs font-medium text-[#337ea9] dark:text-[#9cd8fc]">第 {chapterPos} 词</span>
              )}
              {/* 点击进入该类别的整体听写 */}
              <Link
                href={`/speller/phonetic/${ch.slug}`}
                className="text-xs font-medium text-[#337ea9] transition-transform group-hover:translate-x-1 dark:text-[#9cd8fc]"
              >
                点击音标进入听写 →
              </Link>
            </div>
            <div className="space-y-3">
              {ch.tests.map((t) => {
                // 表格：第 1 列音标（跨行），第 2-6 列示例单词（每行 5 个）
                const rows = Math.max(1, Math.ceil(t.words.length / 5));
                const focus = (t.phonetics ?? "").replace(/\//g, "");
                // 该音标对应的不同拼写组合（如 /iː/ → ey/ee/ea…）：红紫交替着色
                const patterns: string[] = [];
                for (const w of t.words) {
                  for (const p of w.phonemeMap ?? []) {
                    if (p.ipa === focus && !patterns.includes(p.spelling)) patterns.push(p.spelling);
                  }
                }
                const spellColors: Record<string, string> = {};
                patterns.forEach((pt, i) => {
                  spellColors[pt] = i % 2 === 0 ? "text-rose-500" : "text-violet-500";
                });
                return (
                  <div key={t.slug} className="grid grid-cols-6 gap-2">
                    {/* 音标列：点击播放该音标发音（TTS 读示例单词），垂直居中跨 rows 行 */}
                    <button
                      type="button"
                      onClick={() => playIpa(t.phonetics ?? "")}
                      title={`播放 ${t.phonetics ?? ""} 发音`}
                      className="group/ipa flex cursor-pointer flex-col items-center justify-center rounded-lg border border-border px-2 py-3 transition-colors hover:border-ring/60 hover:bg-muted/40"
                      style={{ gridRow: `span ${rows}` }}
                    >
                      {/* 音标固定宽度区域（居中对齐），拼写组合形式在右靠左（两列网格） */}
                      <span className="flex w-full items-center justify-center gap-3">
                        <span className="w-12 shrink-0 text-center text-lg font-semibold leading-tight text-foreground group-hover/ipa:text-primary">
                          {t.phonetics ?? t.name.replace(/.*\//, "/")}
                        </span>
                        {patterns.length > 0 && (
                          <span className="grid grid-cols-2 items-start gap-x-2 gap-y-1 text-sm font-semibold leading-tight">
                            {patterns.map((pt) => (
                              <span key={pt} className={spellColors[pt]}>
                                {pt}
                              </span>
                            ))}
                          </span>
                        )}
                      </span>
                      {/* 组合形式超过 4 个：卡片底部高亮线提示 */}
                      {patterns.length > 4 && (
                        <span className="mt-3 h-1 w-10 shrink-0 rounded-full bg-primary/70" />
                      )}
                    </button>
                    {/* 示例单词：点击播放该词发音（原声 mp3，无则 TTS）；对应练习音素的字母高亮 */}
                    {t.words.map((w, wi) => (
                      <button
                        key={`${w.word}-${wi}`}
                        type="button"
                        onClick={() => playWord(w.word, w.audio)}
                        title={`播放 ${w.word}`}
                        className="flex cursor-pointer items-center justify-center rounded-lg border border-border px-2 py-1 text-lg font-medium text-foreground transition-colors hover:border-ring/60 hover:bg-muted/40"
                      >
                        {renderHighlightWord(w.word, w.phonemeMap, focus, spellColors)}
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

/** 单词中对应练习音素（phonemeMap.ipa === focus）的拼写字母高亮：
 *  不同拼写组合（ey/ee/ea…）按 spellColors 交替着色（红紫交替） */
function renderHighlightWord(
  word: string,
  map: { ipa: string; spelling: string }[] | undefined,
  focus: string,
  spellColors: Record<string, string>,
) {
  if (!map || !focus) return word;
  // 按 spelling 展开字母 → 所属拼写组合的颜色
  const letterColors: (string | null)[] = [];
  let gi = 0;
  for (const p of map) {
    const len = p.spelling.length;
    const color = p.ipa === focus ? (spellColors[p.spelling] ?? "text-rose-500") : null;
    for (let k = 0; k < len; k++) letterColors[gi + k] = color;
    gi += len;
  }
  if (letterColors.every((c) => c === null)) return word;
  return (
    <>
      {word.split("").map((c, i) =>
        letterColors[i] ? (
          <span key={i} className={letterColors[i]!}>
            {c}
          </span>
        ) : (
          c
        ),
      )}
    </>
  );
}
