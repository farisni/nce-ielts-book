"use client";

import React, { useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArticleBlock } from "./article-block";
import { useScrollSync } from "@/hooks/use-scroll-sync";
import { useReaderStore } from "@/stores/reader-store";
import type { Article, SentenceData } from "@/app/mock";

type Props = {
  article: Article;
};

export function ArticleReader({ article }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { observeBlock } = useScrollSync(containerRef);
  const activeBlockId = useReaderStore((s) => s.activeBlockId);
  const selectedBlockId = useReaderStore((s) => s.selectedBlockId);
  const scrollToBlock = useReaderStore((s) => s.scrollToBlock);
  const setSelectedBlockId = useReaderStore((s) => s.setSelectedBlockId);

  // Flatten all paragraphs into blocks with position tracking
  let globalOffset = 0;
  const blocks: { blockId: string; sentence: SentenceData; start: number }[] = [];

  for (let pi = 0; pi < article.original.paragraphs.length; pi++) {
    const paragraph = article.original.paragraphs[pi];
    for (let si = 0; si < paragraph.length; si++) {
      const sentence = paragraph[si];
      const blockId = `${pi}-${si}`;
      blocks.push({ blockId, sentence, start: globalOffset });
      globalOffset += sentence.text.length + 1; // +1 for trailing space
    }
  }

  const handleTogglePanel = (blockId: string) => {
    if (selectedBlockId === blockId) {
      setSelectedBlockId(null);
    } else {
      setSelectedBlockId(blockId);
      scrollToBlock(blockId);
    }
  };

  return (
    <ScrollArea className="h-full">
      <div ref={containerRef} className="px-8 py-6 max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          {article.title}
        </h1>
        {article.titleCn && (
          <p className="text-muted-foreground mb-8">{article.titleCn}</p>
        )}

        {/* Body */}
        <div
          className="text-lg leading-loose text-foreground [text-indent:2em]"
          style={{
            fontFamily:
              '"Lyon Text", "IBM Plex Serif", "Georgia", "Times New Roman", serif',
          }}
        >
          {blocks.map(({ blockId, sentence, start }) => (
            <ArticleBlock
              key={blockId}
              blockId={blockId}
              sentence={sentence}
              sentenceStart={start}
              articleId={article.id}
              isActive={activeBlockId === blockId}
              onTogglePanel={handleTogglePanel}
              isPanelOpen={selectedBlockId === blockId}
              hideInlineAnnotations
            />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
