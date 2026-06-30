"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

interface AudioPlayerProps {
  audioSrc: string;
  currentTime: number;
  onTimeUpdate: (t: number) => void;
  onPlayStateChange: (playing: boolean) => void;
  isPlaying: boolean;
  duration: number;
}

export function AudioPlayer({
  audioSrc,
  currentTime,
  onTimeUpdate,
  onPlayStateChange,
  isPlaying,
  duration,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const rafRef = useRef<number>(0);
  const [internalTime, setInternalTime] = useState(0);
  const [internalDuration, setInternalDuration] = useState(duration);

  // Sync audio.currentTime via requestAnimationFrame
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const loop = () => {
      onTimeUpdate(a.currentTime);
      setInternalTime(a.currentTime);
      rafRef.current = requestAnimationFrame(loop);
    };
    if (isPlaying) {
      rafRef.current = requestAnimationFrame(loop);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying, onTimeUpdate]);

  // Auto-pause when currentTime reaches end
  useEffect(() => {
    if (internalTime >= internalDuration && internalDuration > 0 && isPlaying) {
      const a = audioRef.current;
      if (a) {
        a.pause();
        onPlayStateChange(false);
      }
    }
  }, [internalTime, internalDuration, isPlaying, onPlayStateChange]);

  const togglePlay = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().catch(() => {});
      onPlayStateChange(true);
    } else {
      a.pause();
      onPlayStateChange(false);
    }
  }, [onPlayStateChange]);

  const onLoadedMetadata = useCallback(() => {
    const a = audioRef.current;
    if (a && a.duration && !isNaN(a.duration)) {
      setInternalDuration(a.duration);
    }
  }, []);

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center gap-4 w-full">
      <audio
        ref={audioRef}
        src={audioSrc}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => onPlayStateChange(false)}
        preload="auto"
      />

      <button
        onClick={() => {}}
        className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground/50 transition-colors hover:text-muted-foreground"
        aria-label="Skip back"
      >
        <SkipBack className="size-4" />
      </button>

      <button
        onClick={togglePlay}
        className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95 shadow-sm"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause className="size-5" /> : <Play className="size-5 ml-0.5" />}
      </button>

      <button
        onClick={() => {}}
        className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground/50 transition-colors hover:text-muted-foreground"
        aria-label="Skip forward"
      >
        <SkipForward className="size-4" />
      </button>

      {/* Time display */}
      <span className="text-sm tabular-nums text-muted-foreground min-w-[80px]">
        {formatTime(internalTime)} / {formatTime(internalDuration)}
      </span>

      {/* Progress bar */}
      <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-75 ease-linear"
          style={{
            width: internalDuration > 0 ? `${(internalTime / internalDuration) * 100}%` : "0%",
          }}
        />
      </div>
    </div>
  );
}
