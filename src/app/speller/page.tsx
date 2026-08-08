"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, Keyboard } from "lucide-react";
import { COURSES } from "@/lib/speller/courses";
import { getProgress, type CourseProgress } from "@/lib/speller/progress";

/**
 * Speller · 听写打字练习
 * 课程列表页：展示课程卡片，点击进入对应课程的练习
 */
export default function SpellerPage() {
  const [progress, setProgress] = useState<Record<string, CourseProgress>>({});

  // 读取所有课程进度（客户端）
  useEffect(() => {
    const map: Record<string, CourseProgress> = {};
    for (const c of COURSES) {
      map[c.id] = getProgress(c.id);
    }
    setProgress(map);
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
        {COURSES.map((course) => {
          const p = progress[course.id];
          const progressPct = course.sentences.length > 0
            ? Math.round(((p?.passed ?? 0) / course.sentences.length) * 100)
            : 0;

          return (
            <Link
              key={course.id}
              href={`/speller/practice?course=${course.id}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-ring/60 hover:bg-muted/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                    {course.name.charAt(0)}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold text-foreground">{course.name}</h2>
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
