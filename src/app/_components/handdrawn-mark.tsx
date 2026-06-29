"use client";

import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

interface Props {
  children: React.ReactNode;
}

export function HandDrawnMark({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const annotationsRef = useRef<ReturnType<typeof annotate>[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    annotationsRef.current.forEach((a) => a.remove());
    annotationsRef.current = [];

    const marks = containerRef.current.querySelectorAll("mark");
    marks.forEach((el) => {
      const annotation = annotate(el as HTMLElement, {
        type: "highlight",
        color: "rgba(253, 224, 71, 0.45)",
        strokeWidth: 1.5,
        padding: 1,
        iterations: 2,
        multiline: true,
      });
      annotation.show();
      annotationsRef.current.push(annotation);
    });

    return () => {
      annotationsRef.current.forEach((a) => a.remove());
    };
  }, [children]);

  return (
    <div ref={containerRef}>
      <style>{`
        mark {
          background: transparent !important;
          color: inherit;
        }
        .block-id-tag {
          font-size: 0.65em;
          color: #9ca3af;
          font-weight: 400;
          margin-left: 0.15em;
          cursor: default;
          user-select: none;
        }
      `}</style>
      {children}
    </div>
  );
}
