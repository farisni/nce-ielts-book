"use client";

import { useState, useCallback, useRef } from "react";
import { AudioPlayer } from "./_components/AudioPlayer";
import { Transcript } from "./_components/Transcript";
import { transcript, totalDuration } from "./data";

// Generate a silent WAV programmatically for demo purposes
// Uses Web Audio API to create a tone that matches our transcript timing
function generateToneAudio(): string {
  // We'll return a placeholder — user should provide their own audio
  return "/audio/silence-28s.mp3";
}

export default function AudioWordHighlightPage() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const activeWordRef = useRef<number>(-1);

  const handleTimeUpdate = useCallback((t: number) => {
    setCurrentTime(t);
  }, []);

  const handlePlayStateChange = useCallback((playing: boolean) => {
    setIsPlaying(playing);
  }, []);

  const handleWordClick = useCallback(
    (time: number) => {
      setCurrentTime(time);
      // Directly seek by reloading approach — for simplicity,
      // we set currentTime and let the audio element handle it
      const a = document.querySelector("audio");
      if (a) {
        a.currentTime = time;
      }
    },
    [],
  );

  return (
    <div className="mx-auto flex w-full max-w-[960px] flex-col gap-8 px-4 py-0">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-normal text-foreground">
          逐词高亮字幕播放器
        </h1>
        <p className="mt-1.5 text-base text-muted-foreground/70">
          requestAnimationFrame 实时同步 · Framer Motion spring 动画 · 点击单词跳转
        </p>
      </div>

      {/* Card container */}
      <div className="rounded-xl border-2 border-dashed border-border p-6">
        {/* Player */}
        <div className="mb-6">
          <AudioPlayer
            audioSrc="/audio/nce4/1.mp3"
            currentTime={currentTime}
            onTimeUpdate={handleTimeUpdate}
            onPlayStateChange={handlePlayStateChange}
            isPlaying={isPlaying}
            duration={totalDuration}
          />
        </div>

        {/* Transcript */}
        <div
          className="rounded-lg border border-border/50 bg-surface-1/50 p-0 overflow-hidden"
          style={
            {
              "--color-fg-active": "var(--color-foreground, #09090b)",
              "--color-fg-idle": "var(--color-muted-foreground, #71717a)",
            } as React.CSSProperties
          }
        >
          <Transcript
            sentences={transcript}
            currentTime={currentTime}
            isPlaying={isPlaying}
            onWordClick={handleWordClick}
          />
        </div>
      </div>

      {/* Info */}
      <p className="text-xs text-muted-foreground/50 text-center">
        音频文件: /audio/nce4/1.mp3 — 请确保该文件存在，或替换为其他 mp3。
        字幕时间轴为演示数据，非真实音频对齐。
      </p>
    </div>
  );
}
