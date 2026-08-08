"use client"

import { useRouter, useParams } from "next/navigation";
import { useRef, useCallback, useEffect, useMemo, useState } from "react";
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
  // 自定义控制条状态：是否播放 + 当前时间 + 总时长
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // 音量：0~1，以及是否静音
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);

  // 根据视频当前播放位置，在 SRT cues 里定位对应字幕（跟随视频进度）
  const subtitleIdx = useMemo(() => {
    if (cues.length === 0) return -1
    const ms = currentTime * 1000
    for (let i = cues.length - 1; i >= 0; i--) {
      if (ms >= cues[i].startMs) return i
    }
    return -1
  }, [cues, currentTime])

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

  // 播放指定句的视频片段（SRT 时间点驱动）
  const playCue = useCallback((idx: number) => {
    const v = videoRef.current
    if (!v) return
    const cue = cues[idx]
    if (cue) {
      const start = cue.startMs / 1000
      const end = cue.endMs / 1000
      stopAtRef.current = end
      v.currentTime = start
      v.play().catch(() => {})
      return true
    }
    return false
  }, [cues])

  // 播放发音 → 播放当前句对应的视频片段（SRT 时间点驱动）
  const playVoice = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (playCue(currentIdx)) return
    // 无 SRT：整段播放/暂停
    if (v.paused) {
      v.play().catch(() => {})
    } else {
      v.pause()
    }
  }, [currentIdx, playCue])

  // 点击句子列表某句 → 更新当前句索引（听写模式：不自动播放，按反引号 ` 才播放）
  const jumpToSentence = useCallback((courseIndex: number) => {
    setCurrentIdx(courseIndex)
  }, [])

  // 播放到句段结束自动暂停 + 同步自定义进度条状态
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onTimeUpdate = () => {
      setCurrentTime(v.currentTime)
      if (stopAtRef.current !== null && v.currentTime >= stopAtRef.current) {
        v.pause()
        stopAtRef.current = null
      }
    }
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onLoaded = () => {
      if (!isNaN(v.duration)) setDuration(v.duration)
    }
    v.addEventListener("timeupdate", onTimeUpdate)
    v.addEventListener("play", onPlay)
    v.addEventListener("pause", onPause)
    v.addEventListener("loadedmetadata", onLoaded)
    return () => {
      v.removeEventListener("timeupdate", onTimeUpdate)
      v.removeEventListener("play", onPlay)
      v.removeEventListener("pause", onPause)
      v.removeEventListener("loadedmetadata", onLoaded)
    }
  }, [cues])

  // 点击视频画面切换播放/暂停（空格仍留给拼写）
  const toggleVideo = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play().catch(() => {})
    } else {
      v.pause()
    }
  }, [])

  const formatTime = (s: number) => {
    if (!isFinite(s) || s <= 0) return "0:00"
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${String(sec).padStart(2, "0")}`
  }

  // 静音/取消静音切换
  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }, [])

  // 设置音量（同时取消静音）
  const handleVolume = useCallback((val: number) => {
    const v = videoRef.current
    if (!v) return
    const next = Math.max(0, Math.min(1, val))
    v.volume = next
    v.muted = next === 0
    setVolume(next)
    setMuted(next === 0)
  }, [])

  // 同步视频音量状态变化（如键盘快捷键改变时）
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onVolumeChange = () => {
      setVolume(v.volume)
      setMuted(v.muted)
    }
    v.addEventListener("volumechange", onVolumeChange)
    return () => v.removeEventListener("volumechange", onVolumeChange)
  }, [])

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
            {/* 视频：无原生控件（禁止空格控制/拖动进度条），点击画面切换播放 */}
            <video
              ref={videoRef}
              src={course.video}
              playsInline
              preload="metadata"
              className="aspect-video w-full cursor-pointer"
              onClick={toggleVideo}
            />
            {/* 自定义只读进度条 + 播放控制 */}
            <div className="flex items-center gap-3 border-t border-white/10 bg-black/60 px-3 py-2">
              <button
                type="button"
                onClick={toggleVideo}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
                aria-label={isPlaying ? "暂停" : "播放"}
              >
                {isPlaying ? (
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><rect x="1" width="3" height="12" rx="1"/><rect x="6" width="3" height="12" rx="1"/></svg>
                ) : (
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M1 1l8 5-8 5V1z"/></svg>
                )}
              </button>
              {/* 只读进度条：不可拖动 */}
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-white/70"
                  style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
              <span className="shrink-0 text-[11px] tabular-nums text-white/70">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              {/* 音量控制：静音切换 + 音量滑条 */}
              <div className="group flex shrink-0 items-center gap-1.5">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                  aria-label={muted || volume === 0 ? "取消静音" : "静音"}
                  title={muted || volume === 0 ? "取消静音" : "静音"}
                >
                  {muted || volume === 0 ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12a4.5 4.5 0 00-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                  )}
                </button>
                {/* 音量滑条 */}
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={muted ? 0 : volume}
                  onChange={(e) => handleVolume(parseFloat(e.target.value))}
                  className="h-1 w-16 cursor-pointer appearance-none rounded-full bg-white/20 accent-white"
                  aria-label="音量"
                />
              </div>
            </div>
          </div>

          {/* 字幕区：跟随视频播放进度显示对应句 */}
          <div className="rounded-lg border border-dashed border-border bg-muted/40 px-4 py-6 text-center text-sm text-muted-foreground">
            {cues.length > 0 ? (
              <>
                <p className="mb-2 font-medium text-foreground/80">
                  当前句 · {subtitleIdx >= 0 ? subtitleIdx + 1 : "—"}/{cues.length}
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  {subtitleIdx >= 0 ? cues[subtitleIdx]?.text : "—"}
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
