"use client";

import React from "react";
import { Highlighter, MessageSquareText } from "lucide-react";
import { useReaderStore } from "@/stores/reader-store";
import { useArticleSettings } from "@/stores/article-settings";
import type { Article } from "@/app/mock";

type Props = {
  article: Article;
  onScrollToBlock: (blockId: string) => void;
};

const NO_HIGHLIGHTS: never[] = [];

export function NotebookTab({ article, onScrollToBlock }: Props) {
  const activeBlockId = useReaderStore((s) => s.activeBlockId);
  const notesByBlockId = useReaderStore((s) => s.notesByBlockId);
  const highlights = useArticleSettings(
    (s) => s.highlightsByArticleId[article.id]
  ) ?? NO_HIGHLIGHTS;

  // Build block entries from the article
  const entries: { blockId: string; text: string }[] = [];
  for (let pi = 0; pi < article.original.paragraphs.length; pi++) {
    const paragraph = article.original.paragraphs[pi];
    for (let si = 0; si < paragraph.length; si++) {
      const blockId = `${pi}-${si}`;
      entries.push({ blockId, text: paragraph[si].text });
    }
  }

  // Filter to blocks that have highlights or notes
  const activeEntries = entries.filter(
    (e) => notesByBlockId[e.blockId]
  );

  if (activeEntries.length === 0) {
    return (
      <div className="p-6 text-center text-sm text-muted-foreground">
        <Highlighter className="size-8 mx-auto mb-2 opacity-30" />
        <p>还没有笔记</p>
        <p className="mt-1 text-xs">在文章中选择文字添加高亮或笔记</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      {activeEntries.map(({ blockId, text }) => {
        const isActive = activeBlockId === blockId;
        const note = notesByBlockId[blockId];

        return (
          <button
            key={blockId}
            onClick={() => onScrollToBlock(blockId)}
            className={`w-full text-left p-3 transition-colors hover:bg-muted/50 ${
              isActive ? "bg-primary/5 border-l-2 border-primary" : ""
            }`}
          >
            <p className="text-xs text-muted-foreground mb-1 font-mono">
              block {blockId}
            </p>
            <p className="text-sm line-clamp-2 leading-relaxed">{text}</p>
            {note && (
              <div className="mt-2 flex items-start gap-1.5 text-xs text-muted-foreground">
                <MessageSquareText className="size-3 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{note}</span>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
