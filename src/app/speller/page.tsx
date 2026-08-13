"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, ChevronRight, Keyboard } from "lucide-react";
import { COURSES } from "@/lib/speller/courses";
import { getAllProgress, migrateLegacyProgress, type CourseProgress } from "@/lib/speller/progress";

/**
 * Speller · 听写打字练习
 * 课程列表页：展示课程卡片，点击进入对应课程的练习
 */
export default function SpellerPage() {
  const [progress, setProgress] = useState<Record<string, CourseProgress>>({});

  // 读取所有课程进度（客户端），并迁移旧 localStorage 数据
  useEffect(() => {
    let cancelled = false;
    (async () => {
      await migrateLegacyProgress().catch(() => {});
      const map = await getAllProgress().catch(() => ({}));
      if (!cancelled) setProgress(map);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-3xl pb-16 pt-10">
      <header className="mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Sentence Dictation
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">听写句子</h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          看中文，听发音，用键盘打出英文句子。选择一个课程开始练习。
        </p>
      </header>

      <div className="grid gap-4">
        {/* 雅思真题听力 · 一个卡片涵盖全部剑雅，点击直达各册 */}
        <div className="overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-ring/60">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl">
              🎯
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-foreground">雅思真题听力</h2>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                  句子听写
                </span>
              </div>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                看中文，听原声，用键盘打出英文句子
              </p>
            </div>
          </div>

          {/* 剑雅各册入口 */}
          <div className="mt-4 space-y-2">
            <Link
              href="/speller/ielts/09"
              className="group flex items-center justify-between gap-4 rounded-lg border border-border px-4 py-3 transition-colors hover:border-ring/60 hover:bg-muted/40"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">📕</span>
                <div>
                  <div className="text-sm font-semibold text-foreground">剑桥雅思 9</div>
                  <div className="text-xs text-muted-foreground">Test 1-4 · 39 段 · 731 句</div>
                </div>
              </div>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/speller/ielts/19"
              className="group flex items-center justify-between gap-4 rounded-lg border border-border px-4 py-3 transition-colors hover:border-ring/60 hover:bg-muted/40"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">📗</span>
                <div>
                  <div className="text-sm font-semibold text-foreground">剑桥雅思 19</div>
                  <div className="text-xs text-muted-foreground">第 27 期 · 15 句</div>
                </div>
              </div>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* 雅思王听力 · 单词听写课程（Chapter → Test 层级） */}
        <Link
          href="/speller/whale-listening"
          className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-ring/60 hover:bg-muted/40"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl">
                🐋
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-foreground">雅思王听力</h2>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    单词听写
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  特别名词 · 按 Chapter / Test 分组，听原声，打单词
                </p>
              </div>
            </div>
            <Keyboard className="size-5 shrink-0 text-muted-foreground/50" />
          </div>

          <span className="mt-4 inline-block text-sm font-medium text-[#337ea9] transition-transform group-hover:translate-x-1 dark:text-[#9cd8fc]">
            选择 Test →
          </span>
        </Link>

        {/* 雅思词汇真经 · 单词听写课程（22 Unit） */}
        <Link
          href="/speller/zhenjing"
          className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-ring/60 hover:bg-muted/40"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl">
                📖
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-foreground">雅思词汇真经</h2>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    单词听写
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  22 个 Unit · 3674 词，听原声，打单词
                </p>
              </div>
            </div>
            <Keyboard className="size-5 shrink-0 text-muted-foreground/50" />
          </div>

          <span className="mt-4 inline-block text-sm font-medium text-[#337ea9] transition-transform group-hover:translate-x-1 dark:text-[#9cd8fc]">
            选择 Unit →
          </span>
        </Link>

        {/* 807 雅思词汇 · 场景单词听写课程（26 场景） */}
        <Link
          href="/speller/lexicon-807"
          className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-ring/60 hover:bg-muted/40"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl">
                🗂️
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-foreground">807 雅思词汇</h2>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    单词听写
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  26 个场景 · 4340 词，听原声，打单词
                </p>
              </div>
            </div>
            <Keyboard className="size-5 shrink-0 text-muted-foreground/50" />
          </div>

          <span className="mt-4 inline-block text-sm font-medium text-[#337ea9] transition-transform group-hover:translate-x-1 dark:text-[#9cd8fc]">
            选择场景 →
          </span>
        </Link>

        {/* 自然拼读规则表 */}
        <Link
          href="/speller/phonics"
          className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-ring/60 hover:bg-muted/40"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl">
                🔤
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-foreground">自然拼读规则表</h2>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                    规则表
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  字母发音 · 元音组合 44 · 辅音组合 50 · 元辅组合 52
                </p>
              </div>
            </div>
            <Keyboard className="size-5 shrink-0 text-muted-foreground/50" />
          </div>

          <span className="mt-4 inline-block text-sm font-medium text-[#337ea9] transition-transform group-hover:translate-x-1 dark:text-[#9cd8fc]">
            查看规则表 →
          </span>
        </Link>

        {/* NCE3 新概念英语第三册 · 课系列入口 */}
        <Link
          href="/speller/nce3"
          className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-ring/60 hover:bg-muted/40"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl">
                📘
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-foreground">NCE3 · 新概念英语第三册</h2>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    视频课程
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  A Puma at Large · 看视频，听真人朗读，打字拼写
                </p>
              </div>
            </div>
            <Keyboard className="size-5 shrink-0 text-muted-foreground/50" />
          </div>

          <span className="mt-4 inline-block text-sm font-medium text-[#337ea9] transition-transform group-hover:translate-x-1 dark:text-[#9cd8fc]">
            选择课 →
          </span>
        </Link>

        {COURSES.filter((c) => !c.id.startsWith("nce3-") && !c.id.startsWith("ielts")).map((course) => {
          const p = progress[course.id];
          const progressPct = course.sentences.length > 0
            ? Math.round(((p?.passed ?? 0) / course.sentences.length) * 100)
            : 0;

          return (
            <Link
              key={course.id}
              href={course.video ? `/speller/video/${course.id}` : `/speller/practice?course=${course.id}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-ring/60 hover:bg-muted/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl">
                    🎧
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold text-foreground">{course.name}</h2>
                      {course.video && (
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                          视频课程
                        </span>
                      )}
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        {course.sentences.length} 句
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {course.description}
                    </p>
                  </div>
                </div>
                <Keyboard className="size-5 shrink-0 text-muted-foreground/50" />
              </div>

              {/* 进度条 */}
              <div className="mt-5">
                <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="size-3.5" />
                    {p?.passed ?? 0} / {course.sentences.length} 已通过
                  </span>
                  <span>{progressPct}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              {/* 练习数据 */}
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                <span>
                  掌握 <span className="font-semibold text-foreground">{p?.mastered ?? 0}</span>
                </span>
                <span>
                  生词 <span className="font-semibold text-foreground">{p?.newWords ?? 0}</span>
                </span>
                <span>
                  完成 <span className="font-semibold text-foreground">{p?.completed ?? 0}</span> 轮
                </span>
              </div>

              <span className="mt-4 inline-block text-sm font-medium text-[#337ea9] transition-transform group-hover:translate-x-1 dark:text-[#9cd8fc]">
                开始练习 →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
