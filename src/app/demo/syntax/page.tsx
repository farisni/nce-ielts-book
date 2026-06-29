"use client";

import { useEffect, useRef, useState } from "react";

export default function DemoSyntaxPage() {
  const startRef = useRef<HTMLSpanElement>(null);
  const endRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pathD, setPathD] = useState("");

  const updatePath = () => {
    const start = startRef.current;
    const end = endRef.current;
    const container = containerRef.current;
    if (!start || !end || !container) return;

    const containerRect = container.getBoundingClientRect();
    const startRect = start.getBoundingClientRect();
    const endRect = end.getBoundingClientRect();

    const x1 = startRect.left + startRect.width / 2 - containerRect.left;
    const y1 = startRect.top - containerRect.top;
    const x2 = endRect.left + endRect.width / 2 - containerRect.left;
    const y2 = endRect.top - containerRect.top;

    const mx = (x1 + x2) / 2;
    const my = Math.min(y1, y2) - 50;

    setPathD(`M${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`);
  };

  useEffect(() => {
    const timer = setTimeout(updatePath, 100);
    window.addEventListener("resize", updatePath);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updatePath);
    };
  }, []);

  return (
    <main className="mx-auto w-[1022px] min-w-[1022px] flex-none rounded-md pl-16 pr-[40px] py-6">
      <div className="max-w-4xl">
        <h1 className="text-xl font-semibold text-gray-900 mb-2">
          语法依存关系可视化
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          Dependency Syntax Layout — 弧线标注从句与主句动词的依存关系
        </p>

        <div
          ref={containerRef}
          className="relative rounded-lg bg-white dark:bg-zinc-900 pt-16 px-8 pb-8 md:px-10 md:pb-10 overflow-visible"
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-50 overflow-visible">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="6"
                markerHeight="4"
                refX="6"
                refY="2"
                orient="auto"
              >
                <polygon points="0 0, 6 2, 0 4" fill="#a1a1aa" />
              </marker>
            </defs>
            {pathD && (
              <path
                d={pathD}
                fill="none"
                stroke="#a1a1aa"
                strokeWidth={1.5}
                strokeDasharray="6 4"
                strokeLinecap="round"
                markerEnd="url(#arrowhead)"
              />
            )}
          </svg>

          <p className="text-lg md:text-xl leading-relaxed pt-4 text-gray-700 dark:text-gray-200 text-justify">
            Dr Stella Pachidi from Cambridge Judge Business School{" "}
            <span
              ref={endRef}
              className="font-semibold text-zinc-700 dark:text-zinc-300 underline decoration-zinc-300 decoration-dotted underline-offset-4"
            >
              believes
            </span>{" "}
            <span
              ref={startRef}
              className="bg-yellow-100 dark:bg-yellow-900/40 px-1 rounded-sm"
            >
              that some
            </span>{" "}
            of the most fundamental changes are happening as a result of the
            algorithmication of jobs that are dependent on data rather than on
            production – the so-called
          </p>
        </div>

        <div className="mt-8 flex gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-yellow-200 dark:bg-yellow-700" />
            从句标记 (that)
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-zinc-400" />
            主句动词 (believes)
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 bg-zinc-400 rounded-full opacity-50" />
            <span className="text-gray-400">依存弧线</span>
          </div>
        </div>
      </div>
    </main>
  );
}
