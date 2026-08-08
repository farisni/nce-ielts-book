"use client"

import { useRouter, useParams } from "next/navigation";
import SentencePractice from "@/components/speller/SentencePractice";
import { getCourse } from "@/lib/speller/courses";

/**
 * Speller · 视频听写页
 * 左右布局：左 = 视频播放，右 = 拼写练习
 * 尚未接入 SRT 字幕时，视频独立播放，拼写用 TTS 发音
 */
export default function VideoSpellerPage() {
  const router = useRouter();
  const params = useParams();
  const courseId = (params.course as string) ?? "nce3-l1";
  const course = getCourse(courseId);

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

      {/* 左右布局 */}
      <div className="flex min-h-0 flex-1 flex-col gap-6 p-6 lg:flex-row">
        {/* 左：视频播放（垂直居中） */}
        <div className="flex w-full flex-col justify-center gap-3 lg:w-[42%] lg:shrink-0">
          <div className="overflow-hidden rounded-xl border border-border bg-black">
            <video
              src={course.video}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full"
            />
          </div>

          {/* 字幕区：尚未接入 SRT 时占位 */}
          <div className="rounded-lg border border-dashed border-border bg-muted/40 px-4 py-6 text-center text-sm text-muted-foreground">
            <p className="mb-1 font-medium text-foreground/80">逐句字幕</p>
            <p>尚未接入 SRT 字幕，视频独立播放。</p>
            <p className="mt-1 text-xs text-muted-foreground/70">
              接入字幕后将支持：当前句高亮 · 点句跳转 · 视频句段循环
            </p>
          </div>
        </div>

        {/* 右：拼写练习 */}
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
          <SentencePractice
            course={course}
            autoStart
            onExit={() => router.push("/speller")}
          />
        </div>
      </div>

      {/* 底部栏：左上一句 / 中快捷键按钮 / 右下一句 */}
      <footer className="shrink-0 border-t">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-2.5">
          <div id="prev-slot" className="flex w-28 flex-none items-center justify-start" />
          <div id="shortcut-slot" className="flex flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-2" />
          <div id="next-slot" className="flex w-28 flex-none items-center justify-end" />
        </div>
      </footer>
    </div>
  );
}
