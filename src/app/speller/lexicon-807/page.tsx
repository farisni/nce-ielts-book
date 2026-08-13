"use client"

import Link from "next/link";
import { ChevronRight, Keyboard } from "lucide-react";
import { LEXICON_807_UNITS } from "@/lib/speller/lexicon-807";

/**
 * Speller · 807 雅思词汇单词听写
 * 课程 → 场景选择页：26 个场景卡片（Test N 场景名），点击进入单词听写
 */
export default function Lexicon807Page() {
  const totalWords = LEXICON_807_UNITS.reduce((s, u) => s + u.words.length, 0);

  return (
    <div className="mx-auto w-full max-w-3xl pb-16 pt-10">
      <header className="mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Word Dictation
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">807 雅思词汇 · 听写</h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          看中文，听原声，用键盘打出单词。选择一个场景开始练习。
        </p>
        <p className="mt-2 text-sm text-muted-foreground/70">
          共 {LEXICON_807_UNITS.length} 个场景 · {totalWords} 个单词
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {LEXICON_807_UNITS.map((u) => (
          <Link
            key={u.slug}
            href={`/speller/lexicon-807/${u.slug}`}
            className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-ring/60 hover:bg-muted/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-base font-bold text-primary-foreground">
                  {u.name.replace(/^Test\s*(\d+).*$/, "$1")}
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{u.name}</h2>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {u.wordCount} 个单词 · 难度 {u.difficulty}/5
                  </p>
                </div>
              </div>
              <ChevronRight className="size-5 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground/70">
        <Keyboard className="size-4" />
        进入场景后：空格跳字母 · Enter 提交 · Tab 重播原声
      </p>
    </div>
  );
}
