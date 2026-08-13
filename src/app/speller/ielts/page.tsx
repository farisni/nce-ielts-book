"use client"

import Link from "next/link";
import { Keyboard } from "lucide-react";
import { IELTS09_COURSES } from "@/lib/speller/data/ielts09";

/**
 * Speller · 雅思真题听力
 * 册列表页：选择剑雅册次，进入该册的 Test/Section/Part 听写
 */
export default function IeltsPage() {
  const books = [
    {
      slug: "09",
      name: "剑桥雅思 9",
      emoji: "📕",
      courseCount: IELTS09_COURSES.length,
      sentenceCount: IELTS09_COURSES.reduce((s, c) => s + c.sentences.length, 0),
      description: "真题听力 39 期 · 逐句听写，含中英对照字幕",
    },
    {
      slug: "19",
      name: "剑桥雅思 19",
      emoji: "📗",
      courseCount: 1,
      sentenceCount: 15,
      description: "第 27 期（Test 4 · 跑步教练播客）· 逐句听写",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl pb-16 pt-10">
      <header className="mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          IELTS Listening
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">雅思真题听力</h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          看中文，听原声，用键盘打出英文句子。选择册次，进入 Test / Section 听写。
        </p>
      </header>

      <div className="grid gap-4">
        {books.map((b) => (
          <Link
            key={b.slug}
            href={`/speller/ielts/${b.slug}`}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-ring/60 hover:bg-muted/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl">
                  {b.emoji}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold text-foreground">{b.name}</h2>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {b.courseCount} 个课程
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              </div>
              <Keyboard className="size-5 shrink-0 text-muted-foreground/50" />
            </div>
            <span className="mt-4 inline-block text-sm font-medium text-[#337ea9] transition-transform group-hover:translate-x-1 dark:text-[#9cd8fc]">
              选择 Test →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
