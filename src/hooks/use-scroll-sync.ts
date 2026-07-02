"use client";

import { useEffect, useRef, useCallback } from "react";
import { useReaderStore } from "@/stores/reader-store";

export function useScrollSync(containerRef: React.RefObject<HTMLElement | null>) {
  const setActiveBlockId = useReaderStore((s) => s.setActiveBlockId);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        }
        if (best && best.intersectionRatio > 0) {
          const id = (best.target as HTMLElement).dataset.blockId;
          if (id) setActiveBlockId(id);
        }
      },
      {
        root: container,
        rootMargin: "-10% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, [containerRef, setActiveBlockId]);

  const observeBlock = useCallback((el: HTMLElement | null) => {
    if (el && observerRef.current) {
      observerRef.current.observe(el);
    }
  }, []);

  return { observeBlock };
}
