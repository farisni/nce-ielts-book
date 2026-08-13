"use client"

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Keyboard } from "lucide-react";
import { WHALE_CHAPTERS } from "@/lib/speller/whale-king";

/**
 * Speller · 雅思王听力单词听写
 * 课程 → Chapter 选择页：Chapter 卡片手风琴展开显示 Test 列表，点击进入单词听写
 */
export default function WhaleListeningPage() {
  // 展开的 chapter slug（默认展开第一个）
  const [openChapter, setOpenChapter] = useState<string | null>(WHALE_CHAPTERS[0]?.slug ?? null);
  const totalWords = WHALE_CHAPTERS.reduce(
    (sum, ch) => sum + ch.tests.reduce((s, t) => s + t.words.length, 0),
    0,
  );

  return (
    <div className="mx-auto w-full max-w-3xl pb-16 pt-10">
      <header className="mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Word Dictation
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">雅思王听力 · 词汇听写</h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          看中文，听原声，用键盘打出单词。选择 Chapter，展开 Test 开始练习。
        </p>
        <p className="mt-2 text-sm text-muted-foreground/70">
          共 {WHALE_CHAPTERS.length} 个 Chapter · {totalWords} 个单词
        </p>
      </header>

      <div className="space-y-3">
        {WHALE_CHAPTERS.map((ch) => {
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
                onClick={() => setOpenChapter(isOpen ? null : ch.slug)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/40"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                    {ch.name.replace(/^Chapter\s*/, "C")}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold text-foreground">{ch.name}</h2>
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        {ch.tests.length} 个 Test
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {ch.description} · 共 {chapterWords} 词
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
                    {ch.tests.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={`/speller/whale-listening/${ch.slug}/${t.slug}`}
                          className="group flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-muted/40"
                        >
                          <div className="flex items-center gap-4">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-base font-semibold text-foreground">
                              {t.name.replace(/^Test\s*/, "")}
                            </span>
                            <div>
                              <p className="font-medium text-foreground">{t.name}</p>
                              <p className="mt-0.5 text-sm text-muted-foreground">
                                {t.wordCount} 个单词 · 难度 {t.difficulty}/5
                              </p>
                            </div>
                          </div>
                          <span className="flex items-center gap-2 text-sm font-medium text-[#337ea9] transition-transform group-hover:translate-x-1 dark:text-[#9cd8fc]">
                            开始听写
                            <ChevronRight className="size-4" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground/70">
        <Keyboard className="size-4" />
        进入 Test 后：空格跳字母 · Enter 提交 · Tab 重播原声
      </p>
    </div>
  );
}
