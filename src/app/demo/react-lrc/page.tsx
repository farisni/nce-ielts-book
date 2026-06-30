"use client";

import { Lrc } from "react-lrc";
import { useState, useRef, useEffect, useCallback } from "react";

const FALLBACK_LRC = `[00:00.46]Lesson 1
[00:02.59]Finding fossil man
[00:10.90]Why are legends handed down by storytellers useful?
[00:17.43]We can read of things that happened 5,000 years ago in the Near East,
[00:23.28]where people first learned to write.
[00:26.92]But there are some parts of the world where even now people cannot write.
[00:33.40]The only way that they can preserve their history is to recount it as sagas.
[00:46.15]These legends are useful because they can tell us something about migrations.
[00:54.22]but none could write down what they did.
[00:57.67]Anthropologists wondered where the remote ancestors of the Polynesian peoples came from.
[01:06.91]The sagas of these people explain that some of them came from Indonesia about 2,000 years ago.
[01:15.26]But the first people who were like ourselves lived so long ago that even their sagas are forgotten.
[01:25.71]So archaeologists have neither history nor legends to help them.
[01:34.84]Fortunately, however, ancient men made tools of stone, especially flint.
[01:41.45]because this is easier to shape than other kinds.
[01:45.74]They may also have used wood and skins, but these have rotted away.
[01:52.16]Stone does not decay, and so the tools of long ago have remained.`;

export default function ReactLrcDemo() {
  const [lrc, setLrc] = useState("");
  const [error, setError] = useState("");
  const [currentMs, setCurrentMs] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    fetch("/audio/nce4-01.lrc")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((text) => {
        if (!text.trim()) throw new Error("Empty LRC");
        setLrc(text);
      })
      .catch((err) => {
        setError(err.message);
        setLrc(FALLBACK_LRC);
      });
  }, []);

  const onTimeUpdate = useCallback(() => {
    const a = audioRef.current;
    if (a) {
      setCurrentMs(a.currentTime);
      if (a.duration && !isNaN(a.duration)) setDuration(a.duration);
    }
  }, []);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play();
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = parseFloat(e.target.value);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-8">
      <div className="rounded-xl border-2 border-dashed border-border p-8">
        <h1 className="mb-2 text-2xl font-semibold tracking-normal">
          Finding Fossil Man
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          NCE4 · Lesson 1
        </p>

        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio
          ref={audioRef}
          src="/audio/nce4-01.mp3"
          onTimeUpdate={onTimeUpdate}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onLoadedMetadata={() => {
            const a = audioRef.current;
            if (a) setDuration(a.duration);
          }}
        />

        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
          >
            {playing ? "Pause" : "Play"}
          </button>
          <span className="text-sm tabular-nums text-muted-foreground">
            {formatTime(currentMs)} / {formatTime(duration)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 1}
            step={0.1}
            value={currentMs}
            onChange={seek}
            className="flex-1 accent-foreground"
          />
        </div>

        <div className="rounded-lg border border-border bg-surface-1/50 p-6">
          {error && (
            <p className="mb-2 text-xs text-muted-foreground">⚠ fetch: {error} (using fallback)</p>
          )}
          {lrc ? (
            <Lrc
              lrc={lrc}
              currentMillisecond={currentMs * 1000}
              verticalSpace
              lineRenderer={({ active, line }) => (
                <p
                  className={`my-1 transition-all duration-300 ${
                    active
                      ? "text-lg font-medium text-foreground"
                      : "text-base text-muted-foreground"
                  }`}
                >
                  {line.content || "\u00A0"}
                </p>
              )}
            />
          ) : (
            <p className="text-sm text-muted-foreground">Loading lyrics...</p>
          )}
        </div>
      </div>
    </section>
  );
}
