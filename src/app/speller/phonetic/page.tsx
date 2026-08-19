"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { WAXUE_CHAPTERS } from "@/lib/speller/phonetic";
import { getAllProgress } from "@/lib/speller/progress";

/**
 * Speller · 英式音标听力音标听写
 * 课程 → Chapter 选择页：Chapter 卡片手风琴展开显示 Test 列表，点击进入单词听写
 * - 记住上次展开的 Chapter（localStorage）
 * - 每个 Test 显示上次听写到的位置（第 N 个单词，存数据库）
 */
export default function WhaleListeningPage() {
  // 展开的 chapter slug（默认展开上次记忆的，无记忆则第一个）
  const [openChapter, setOpenChapter] = useState<string | null>(null);
  // 各 Test 的上次听写位置：{ `${chapterSlug}/${testSlug}`: 单词序号（从 1 起） }
  const [lastPos, setLastPos] = useState<Record<string, number>>({});
  const totalWords = WAXUE_CHAPTERS.reduce(
    (sum, ch) => sum + ch.tests.reduce((s, t) => s + t.words.length, 0),
    0,
  );

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("speller:phonetic-chapter");
      if (saved && WAXUE_CHAPTERS.some((c) => c.slug === saved)) {
        setOpenChapter(saved);
      } else {
        setOpenChapter(WAXUE_CHAPTERS[0]?.slug ?? null);
      }
    } catch {
      setOpenChapter(WAXUE_CHAPTERS[0]?.slug ?? null);
    }
    // 读取每个 Test 的上次位置（数据库；course id = whale-${chapter}-${test}）
    getAllProgress()
      .then((map) => {
        const pos: Record<string, number> = {};
        for (const ch of WAXUE_CHAPTERS) {
          for (const t of ch.tests) {
            const last = map[`phonetic-${ch.slug}-${t.slug}`]?.lastPos ?? 0;
            if (last > 0) pos[`${ch.slug}/${t.slug}`] = last + 1; // 0-based → 第 N 词
          }
        }
        setLastPos(pos);
      })
      .catch(() => {});
  }, []);

  const toggleChapter = (slug: string, isOpen: boolean) => {
    setOpenChapter(isOpen ? null : slug);
    try {
      window.localStorage.setItem("speller:phonetic-chapter", slug);
    } catch {
      // ignore
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl pb-16 pt-10">
      <header className="mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Word Dictation
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">英式音标听力</h1>
        <p className="mt-2 text-sm text-muted-foreground/70">
          共 {WAXUE_CHAPTERS.length} 个 Chapter · {totalWords} 个单词
        </p>
      </header>

      <div className="space-y-3">
        {WAXUE_CHAPTERS.map((ch) => {
          const isOpen = openChapter === ch.slug;
          const chapterWords = ch.tests.reduce((s, t) => s + t.words.length, 0);
          return (
            <div
              key={ch.slug}
              className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-ring/60"
            >
              {/* Chapter 头部：点击展开/收起 */}
              <button
                type="button"
                onClick={() => toggleChapter(ch.slug, isOpen)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/40"
              >
                <div className="flex items-center gap-4">
                  <span className="shrink-0 text-2xl leading-none">{ch.emoji}</span>
                  <div>
                    <h2 className="text-lg font-normal text-foreground">
                      <span className="text-muted-foreground">{ch.name}</span>
                      <span className="ml-2">{ch.description}</span>
                    </h2>
                    <p className="mt-0.5 text-sm text-muted-foreground/70">
                      {ch.tests.length} 个 Test · 共 {chapterWords} 词
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`size-5 shrink-0 text-muted-foreground/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Test 列表（展开时显示） */}
              {isOpen && (
                <div className="border-t border-border">
                  <ul className="divide-y divide-border">
                    {ch.tests.map((t) => {
                      const pos = lastPos[`${ch.slug}/${t.slug}`];
                      return (
                        <li key={t.slug}>
                          <Link
                            href={`/speller/phonetic/${ch.slug}/${t.slug}`}
                            className="group flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-muted/40"
                          >
                            <div>
                              <p className="text-lg font-normal text-foreground">{t.name}</p>
                              <p className="mt-0.5 text-sm text-muted-foreground/70">
                                {t.wordCount} 个单词 · 难度 {t.difficulty}/5
                                {pos !== undefined && (
                                  <span className="ml-2 text-[#337ea9] dark:text-[#9cd8fc]">
                                    上次听到第 {pos} 词
                                  </span>
                                )}
                              </p>
                            </div>
                            <ChevronRight className="size-5 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
