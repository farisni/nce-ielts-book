"use client";

import type { RootRef, RootData } from "./md-root-data-context";

const COLORS = ["#e03e3e", "#f2994a", "#2f80ed", "#9b51e0", "#219653"];

type RootSection = {
  root: string;
  title: string;
  words: { word: string; meaning: string }[];
};

function parseRootSections(ra: { roots?: Record<string, RootRef[]> } | undefined): RootSection[] {
  if (!ra?.roots) return [];
  return Object.entries(ra.roots).map(([key, entries]) => {
    const match = key.match(/^(.+?)\((.+)\)$/);
    const root = match ? match[1] : key;
    const title = match ? match[2] : "";
    return {
      root,
      title,
      words: entries.map((r) => ({ word: r.word, meaning: r.meaning })),
    };
  });
}

export function RootAffixSections({
  data,
  onRootClick,
}: {
  data: RootData | undefined;
  onRootClick?: () => void;
}) {
  if (!data) return <p className="text-xs text-muted-foreground/40 mt-2">—</p>;

  const sections = parseRootSections(data);

  // 收集 prefixes / suffixes
  const prefixSections =
    data.prefixes
      ? Object.entries(data.prefixes).map(([key, entries]) => {
          const match = key.match(/^(.+?)\((.+)\)$/);
          return {
            root: match ? match[1] : key,
            title: match ? match[2] : "",
            label: "前缀",
            words: entries.map((r) => ({ word: r.word, meaning: r.meaning })),
          };
        })
      : [];

  const suffixSections =
    data.suffixes
      ? Object.entries(data.suffixes).map(([key, entries]) => {
          const match = key.match(/^(.+?)\((.+)\)$/);
          return {
            root: match ? match[1] : key,
            title: match ? match[2] : "",
            label: "后缀",
            words: entries.map((r) => ({ word: r.word, meaning: r.meaning })),
          };
        })
      : [];

  const allSections = [
    ...sections.map((s) => ({ ...s, label: "词根" })),
    ...prefixSections,
    ...suffixSections,
  ];

  if (!allSections.length)
    return <p className="text-xs text-muted-foreground/40 mt-2">—</p>;

  return (
    <div className="rounded-md bg-background/70 p-3">
      <p className="text-xs font-medium text-muted-foreground mb-2">词根词缀</p>
      <div className="space-y-3">
        {allSections.map((section, i) => (
          <div key={`${section.label}-${section.root}`}>
            <button
              onClick={onRootClick}
              className="flex items-baseline gap-1.5 group cursor-pointer text-left w-full"
            >
              <span
                className="mt-1 size-1.5 rounded-full shrink-0"
                style={{ background: COLORS[i % 5] }}
              />
              <span className="text-sm font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                <span className="tracking-wide font-mono font-normal text-foreground">
                  {section.root}
                </span>
                {section.title && (
                  <span className="text-xs font-normal text-muted-foreground ml-1.5">
                    {section.title}
                  </span>
                )}
                <span className="text-[11px] text-muted-foreground/50 ml-1">
                  {section.label}
                </span>
              </span>
            </button>
            <div className="ml-1 pl-3 border-l border-border/70 mt-2 space-y-1">
              {section.words.slice(0, 8).map((entry) => (
                <p key={entry.word} className="text-sm leading-snug">
                  <span className="font-normal text-foreground/70">
                    {entry.word}
                  </span>
                  <span className="text-muted-foreground ml-1.5 text-xs">
                    {entry.meaning}
                  </span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
