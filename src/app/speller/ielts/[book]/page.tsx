"use client"

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronDown, ChevronRight, Keyboard } from "lucide-react";
import { COURSES, type Course } from "@/lib/speller/courses";
import { IELTS09_COURSES } from "@/lib/speller/data/ielts09";

/**
 * Speller · 雅思真题听力 · 册内课程列表
 * 剑雅9：按 Test 手风琴展开 Section/Part 课程
 * 剑雅19：直接列出课程
 */
export default function IeltsBookPage() {
  const { book } = useParams<{ book: string }>();
  const isBook9 = book === "09";

  const courses: Course[] = isBook9
    ? IELTS09_COURSES
    : COURSES.filter((c) => c.id === "ielts19-27");

  // 剑雅9：按 Test 分组；展开的 test（默认 Test 1）
  const tests = isBook9
    ? [...new Set(courses.map((c) => c.id.match(/t(\d)/)?.[1]))]
        .sort()
        .map((t) => ({
          test: Number(t),
          items: courses.filter((c) => c.id.includes(`t${t}s`)),
        }))
    : [];
  const [openTest, setOpenTest] = useState<number | null>(tests[0]?.test ?? null);

  const bookName = isBook9 ? "剑桥雅思 9" : "剑桥雅思 19";

  return (
    <div className="mx-auto w-full max-w-3xl pb-16 pt-10">
      <header className="mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          IELTS Listening
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">{bookName} · 真题听力</h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          {isBook9
            ? "共 4 个 Test，按 Section/Part 分段。展开 Test，选择一段开始逐句听写。"
            : "选择课程开始逐句听写。"}
        </p>
      </header>

      {isBook9 ? (
        <div className="space-y-3">
          {tests.map(({ test, items }) => {
            const isOpen = openTest === test;
            const totalSents = items.reduce((s, c) => s + c.sentences.length, 0);
            return (
              <div key={test} className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-ring/60">
                <button
                  type="button"
                  onClick={() => setOpenTest(isOpen ? null : test)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xl font-bold text-foreground">
                      {test}
                    </span>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Test {test}</h2>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {items.length} 段 · {totalSents} 句
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-foreground/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-border">
                    <ul className="divide-y divide-border">
                      {items.map((c) => {
                        // 从课程 id（ielts09-t1s1p1）解析 Test/Section/Part
                        const m = c.id.match(/-t(\d)s(\d)p(\d)/);
                        return (
                          <li key={c.id}>
                            <Link
                              href={`/speller/video/${c.id}`}
                              className="group flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-muted/40"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-16 shrink-0 text-sm font-semibold text-foreground">
                                  S{m?.[2] ?? "?"} · P{m?.[3] ?? "?"}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  {c.sentences.length} 句
                                </span>
                              </div>
                              <ChevronRight className="size-4 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5" />
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
      ) : (
        <div className="grid gap-4">
          {courses.map((c) => (
            <Link
              key={c.id}
              href={`/speller/video/${c.id}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-ring/60 hover:bg-muted/40"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl">
                  🎧
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold text-foreground">{c.name}</h2>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {c.sentences.length} 句
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{c.description}</p>
                </div>
              </div>
              <span className="mt-4 inline-block text-sm font-medium text-[#337ea9] transition-transform group-hover:translate-x-1 dark:text-[#9cd8fc]">
                开始练习 →
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
