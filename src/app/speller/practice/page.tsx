"use client"

import { useRouter, useSearchParams } from "next/navigation";
import SentencePractice from "@/components/speller/SentencePractice";
import { getCourse } from "@/lib/speller/courses";

/**
 * Speller · 听写练习页
 * 从 URL ?course=xxx 读取课程，挂载即自动开始；
 * 顶部进度条与底部按钮通过 Portal 渲染到本页槽位
 */
export default function SpellerPracticePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course") ?? "basic";
  const course = getCourse(courseId);

  // 课程不存在时回退到课程列表
  if (!course) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <p className="text-lg text-muted-foreground">课程不存在</p>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      {/* 进度条固定槽位：练习中的进度/时间条通过 Portal 渲染到这里（页面顶部） */}
      <div id="progress-slot" className="w-full shrink-0" />

      {/* 主练习区：宽度撑满 + 内容上下左右居中 */}
      <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center px-6 py-6">
        <SentencePractice course={course} autoStart onExit={() => router.push("/speller")} />
      </div>

      {/* 底部栏：左上一句 / 中快捷键按钮 / 右下一句 */}
      <footer className="shrink-0 border-t">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-2.5">
          {/* 左：上一句（Portal 槽位） */}
          <div id="prev-slot" className="flex w-28 flex-none items-center justify-start" />

          {/* 中：快捷键按钮（Portal 槽位，由 SentencePractice 渲染可点击按钮） */}
          <div id="shortcut-slot" className="flex flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-2" />

          {/* 右：下一句（Portal 槽位） */}
          <div id="next-slot" className="flex w-28 flex-none items-center justify-end" />
        </div>
      </footer>
    </div>
  );
}
