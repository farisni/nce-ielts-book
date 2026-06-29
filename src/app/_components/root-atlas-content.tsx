"use client";

import { useState } from "react";
import { ROOT_DATA } from "@/app/mock";

const SECTIONS_GAP = "space-y-10";
const CONTENT_BLOCK = "ml-1 pl-5 border-l border-gray-200 overflow-hidden transition-all duration-300";

export function RootAtlasContent() {
  const [expandedRoots, setExpandedRoots] = useState<Set<number>>(
    new Set(ROOT_DATA.map((_, i) => i))
  );

  const toggleRoot = (index: number) => {
    setExpandedRoots((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <div className={SECTIONS_GAP}>
      {ROOT_DATA.map((section, index) => {
        const isExpanded = expandedRoots.has(index);

        return (
          <section key={section.root}>
            {/* Bullet + Title */}
            <button
              onClick={() => toggleRoot(index)}
              className="group flex items-baseline gap-2.5 cursor-pointer text-left w-full"
            >
              <span
                className="mt-1.5 size-2 rounded-full shrink-0 transition-colors"
                style={{
                  background: isExpanded
                    ? ["#e03e3e", "#f2994a", "#2f80ed", "#9b51e0", "#219653"][index % 5]
                    : "#d1d5db",
                }}
              />
              <span className="text-xl font-semibold text-gray-900">
                <span className="tracking-wide text-gray-900 font-mono font-normal mr-2">
                  {section.root}
                </span>
                <span className="text-base font-normal text-gray-500 ml-2">
                  {section.title}
                </span>
              </span>
            </button>

            {/* Content with left border */}
            <div
              className={`${CONTENT_BLOCK} ${
                isExpanded ? "mt-4 max-h-[2000px] opacity-100" : "max-h-0 opacity-0 mt-0"
              }`}
            >
              {/* Word list */}
              <div className="space-y-3">
                {section.words.map((entry) => (
                  <p key={entry.word} className="text-base text-gray-500 leading-snug">
                    <span className="text-lg font-medium text-gray-500 mr-2">{entry.word}</span>
                    <span className="text-sm text-gray-400 mr-1.5">{entry.pos}</span>
                    <span className="text-sm">{entry.meaning}</span>
                  </p>
                ))}
              </div>

              {/* Load more */}
              {section.words.length < section.total && (
                <p className="mt-5 text-sm text-gray-400 cursor-pointer hover:text-gray-600 transition-colors select-none">
                  查看全部 {section.total} 个单词 →
                </p>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
