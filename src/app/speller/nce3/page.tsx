"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, Keyboard } from "lucide-react";
import { COURSES } from "@/lib/speller/courses";
import { getAllProgress, type CourseProgress } from "@/lib/speller/progress";

/**
 * Speller · NCE3 新概念英语第三册
 * 课列表页：展示 NCE3 全部听写课（目前一课，后续在 courses.ts 添加自动出现）
 */
export default function Nce3Page() {
  const [progress, setProgress] = useState<Record<string, CourseProgress>>({});

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const map = await getAllProgress().catch(() => ({}));
      if (!cancelled) setProgress(map);
    })();
    return () => { cancelled = true; };
  }, []);

  // NCE3 系列课 = courses.ts 中所有 nce3- 前缀课程（按名称自然序）
  const lessons = COURSES
    .filter((c) => c.id.startsWith("nce3-"))
    .sort((a, b) => a.id.localeCompare(b.id));

  return (
    <div className="mx-auto w-full max-w-3xl pb-16 pt-10">
      <header className="mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          NCE3 Dictation
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">新概念英语第三册</h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          看视频，听真人朗读，用键盘打出英文句子。选择一课开始练习。
        </p>
        <p className="mt-2 text-sm text-muted-foreground/70">
          共 {lessons.length} 课 · 点击课程进入听写
        </p>
      </header>

      <div className="grid gap-4">
        {lessons.map((course) => {
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
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                    L{lessons.indexOf(course) + 1}
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
