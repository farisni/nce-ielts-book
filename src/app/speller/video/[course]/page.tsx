"use client"

import { useRouter, useParams } from "next/navigation";
import { useRef, useCallback, useEffect, useState } from "react";
import SentencePractice from "@/components/speller/SentencePractice";
import { getCourse } from "@/lib/speller/courses";
import { parseSrt, type SrtCue } from "@/lib/parse-srt";

/**
 * Speller · 视频听写页
 * 左右布局：左 = 视频播放 + 字幕联动，右 = 拼写练习
 * 反引号 ` 播放当前句对应的视频片段（由 SRT 时间点驱动）
 */
export default function VideoSpellerPage() {
  const router = useRouter();
  const params = useParams();
  const courseId = (params.course as string) ?? "nce3-l1";
  const course = getCourse(courseId);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [cues, setCues] = useState<SrtCue[]>([]);
  const [currentIdx, setCurrentIdx] = useState(-1);
  const [subtitle, setSubtitle] = useState<string | null>(null);
  const stopAtRef = useRef<number | null>(null);

  // 加载 SRT 字幕
  useEffect(() => {
    if (!course?.subtitle) return
    let cancelled = false
    fetch(course.subtitle)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.text()
      })
      .then((text) => {
        if (cancelled) return
        const parsed = parseSrt(text)
        setCues(parsed)
        setSubtitle(text)
      })
      .catch(() => {
        if (!cancelled) setCues([])
      })
    return () => { cancelled = true }
  }, [course?.subtitle])

  // 播放发音 → 播放当前句对应的视频片段（SRT 时间点驱动）
  const playVoice = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    const cue = cues[currentIdx]
    if (cue) {
      const start = cue.startMs / 1000
      const end = cue.endMs / 1000
      stopAtRef.current = end
      v.currentTime = start
      v.play().catch(() => {})
      return
    }
    // 无 SRT：整段播放/暂停
    if (v.paused) {
      v.play().catch(() => {})
    } else {
      v.pause()
    }
  }, [cues, currentIdx])

  // 点击句子列表某句 → 跳转到该句 SRT 时间点并播放
  const jumpToSentence = useCallback((courseIndex: number) => {
    const v = videoRef.current
    if (!v) return
    setCurrentIdx(courseIndex)
    const cue = cues[courseIndex]
    if (cue) {
      const start = cue.startMs / 1000
      const end = cue.endMs / 1000
      stopAtRef.current = end
      v.currentTime = start
      v.play().catch(() => {})
    }
  }, [cues])

  // 播放到句段结束自动暂停
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onTimeUpdate = () => {
      if (stopAtRef.current !== null && v.currentTime >= stopAtRef.current) {
        v.pause()
        stopAtRef.current = null
      }
    }
    v.addEventListener("timeupdate", onTimeUpdate)
    return () => v.removeEventListener("timeupdate", onTimeUpdate)
  }, [cues])

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
              ref={videoRef}
              src={course.video}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full"
              onKeyDown={(e) => {
                // 空格留给拼写（跳词），视频播放用反引号 ` 触发
                if (e.code === "Space") e.preventDefault()
              }}
            />
          </div>

          {/* 字幕区：显示当前句字幕或占位 */}
          <div className="rounded-lg border border-dashed border-border bg-muted/40 px-4 py-6 text-center text-sm text-muted-foreground">
            {cues.length > 0 ? (
              <>
                <p className="mb-2 font-medium text-foreground/80">当前句 · {currentIdx + 1}/{cues.length}</p>
                <p className="text-base leading-relaxed text-foreground">
                  {cues[currentIdx]?.text ?? "—"}
                </p>
                <p className="mt-2 text-xs text-muted-foreground/70">
                  反引号 ` 播放当前句 · 空格跳词 · Enter 提交
                </p>
              </>
            ) : (
              <>
                <p className="mb-1 font-medium text-foreground/80">逐句字幕</p>
                <p>尚未接入 SRT 字幕，视频整段播放。</p>
                <p className="mt-1 text-xs text-muted-foreground/70">
                  接入字幕后将支持：当前句高亮 · 点句跳转 · 视频句段循环
                </p>
              </>
            )}
          </div>
        </div>

        {/* 右：拼写练习 */}
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
          <SentencePractice
            course={course}
            autoStart
            showCn={false}
            playVoice={playVoice}
            onCurrentSentence={setCurrentIdx}
            onJumpToSentence={jumpToSentence}
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
