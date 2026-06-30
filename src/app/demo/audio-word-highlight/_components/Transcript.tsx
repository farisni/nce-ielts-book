"use client";

import { useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WordTiming, Sentence } from "../data";

interface TranscriptProps {
  sentences: Sentence[];
  currentTime: number;
  isPlaying: boolean;
  onWordClick?: (time: number) => void;
}

function Word({
  word,
  globalIndex,
  activeGlobalIndex,
  isPlaying,
  onClick,
}: {
  word: WordTiming;
  globalIndex: number;
  activeGlobalIndex: number;
  isPlaying: boolean;
  onClick?: (time: number) => void;
}) {
  const distance = activeGlobalIndex === -1 ? 999 : Math.abs(globalIndex - activeGlobalIndex);
  const isActive = distance === 0;
  const isNear = distance === 1;
  const isNear2 = distance === 2;

  return (
    <motion.span
      layout
      data-word-idx={globalIndex}
      className={`
        relative inline-flex cursor-pointer select-none
        rounded-[6px] px-[3px] py-[1px]
        transition-colors duration-150
      `}
      style={{
        opacity: isActive ? 1 : isNear ? 0.6 : isNear2 ? 0.35 : 0.2,
        scale: isActive ? 1 : isNear ? 0.92 : 1,
      }}
      animate={{
        opacity: isActive ? 1 : isNear ? 0.6 : isNear2 ? 0.35 : isPlaying ? 0.2 : 0.55,
        scale: isActive ? 1 : isNear ? 0.95 : 1,
        color: isActive ? "var(--color-fg-active)" : "var(--color-fg-idle)",
      }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 32,
        mass: 0.8,
      }}
      onClick={() => onClick?.(word.start)}
    >
      {/* Active highlight background */}
      <AnimatePresence>
        {isActive && (
          <motion.span
            layoutId="word-highlight"
            className="absolute inset-0 rounded-[6px] bg-primary/15 dark:bg-primary/25"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{word.text}</span>
    </motion.span>
  );
}

export function Transcript({ sentences, currentTime, isPlaying, onWordClick }: TranscriptProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Flatten all words with global index
  const flatWords = useMemo(() => {
    const result: (WordTiming & { globalIndex: number; sentenceIdx: number })[] = [];
    let idx = 0;
    sentences.forEach((s, si) => {
      s.words.forEach((w) => {
        result.push({ ...w, globalIndex: idx++, sentenceIdx: si });
      });
    });
    return result;
  }, [sentences]);

  // Find active word index
  const activeGlobalIndex = useMemo(() => {
    const t = currentTime * 1000;
    for (let i = flatWords.length - 1; i >= 0; i--) {
      if (t >= flatWords[i].start * 1000) {
        return i;
      }
    }
    return -1;
  }, [currentTime, flatWords]);

  // Auto-scroll to active word
  useEffect(() => {
    if (activeGlobalIndex < 0 || !containerRef.current) return;
    const el = containerRef.current.querySelector(
      `[data-word-idx="${activeGlobalIndex}"]`,
    ) as HTMLElement | null;
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeGlobalIndex]);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap gap-x-[4px] gap-y-[4px] leading-[2.2] text-xl max-h-[420px] overflow-y-auto px-4 py-6"
    >
      {flatWords.map((w) => (
        <Word
          key={w.globalIndex}
          word={w}
          globalIndex={w.globalIndex}
          activeGlobalIndex={activeGlobalIndex}
          isPlaying={isPlaying}
          onClick={onWordClick}
        />
      ))}
    </div>
  );
}
