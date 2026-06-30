"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { parseLrc, type LrcLine } from "@/lib/parse-lrc";

export function useAudioSync(lesson: number) {
  const [lrcLines, setLrcLines] = useState<LrcLine[]>([]);
  const [playing, setPlaying] = useState(false);
  const [currentMs, setCurrentMs] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeSentenceIndex, setActiveSentenceIndex] = useState(-1);
  const audioRef = useRef<HTMLAudioElement>(null);
  const lrcLinesRef = useRef<LrcLine[]>([]);

  // Keep ref in sync so timeupdate callback always reads latest
  useEffect(() => {
    lrcLinesRef.current = lrcLines;
  }, [lrcLines]);

  // Fetch and parse LRC
  useEffect(() => {
    let cancelled = false;
    fetch(`/audio/nce4/${lesson}.lrc`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((text) => {
        if (cancelled) return;
        setLrcLines(parseLrc(text));
      })
      .catch(() => {
        // LRC not available — audio works without sync
        setLrcLines([]);
      });
    return () => { cancelled = true; };
  }, [lesson]);

  const onTimeUpdate = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    const t = a.currentTime;
    setCurrentMs(t);
    if (a.duration && !isNaN(a.duration)) setDuration(a.duration);

    // Find active LRC line
    const lines = lrcLinesRef.current;
    if (lines.length === 0) return;
    const ms = t * 1000;
    let idx = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
      if (ms >= lines[i].startMs) {
        idx = i;
        break;
      }
    }
    setActiveSentenceIndex(idx);
  }, []);

  const togglePlay = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().catch(() => {
        // interrupted by pause or DOM removal — ignore
      });
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  }, []);

  const seek = useCallback((value: number) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = value;
  }, []);

  const onPlay = useCallback(() => setPlaying(true), []);
  const onPause = useCallback(() => setPlaying(false), []);
  const onEnded = useCallback(() => setPlaying(false), []);
  const onLoadedMetadata = useCallback(() => {
    const a = audioRef.current;
    if (a) setDuration(a.duration);
  }, []);

  return {
    audioRef,
    playing,
    togglePlay,
    currentMs,
    duration,
    activeSentenceIndex,
    lrcLines,
    seek,
    hasLrc: lrcLines.length > 0,
    // callbacks for <audio>
    audioHandlers: { onTimeUpdate, onPlay, onPause, onEnded, onLoadedMetadata },
  };
}
