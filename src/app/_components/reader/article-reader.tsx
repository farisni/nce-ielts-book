"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SPRING_PANEL } from "@/lib/ease";
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
  const [openPanelId, setOpenPanelId] = useState<string | null>(null);

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
            <React.Fragment key={blockId}>
              <ArticleBlock
                blockId={blockId}
                sentence={sentence}
                sentenceStart={start}
                articleId={article.id}
                isActive={activeBlockId === blockId}
                onTogglePanel={(id) =>
                  setOpenPanelId((prev) => (prev === id ? null : id))
                }
                isPanelOpen={openPanelId === blockId}
              />
              <AnimatePresence>
                {openPanelId === blockId &&
                  sentence.expansionNotes &&
                  sentence.expansionNotes.length > 0 && (
                    <motion.div
                      key={`panel-${blockId}`}
                      data-selection-offset-excluded="true"
                      className="rounded-lg px-4 py-3 relative z-[52] [text-indent:0] font-sans"
                      style={{ background: "#f2f7f2" }}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={SPRING_PANEL}
                    >
                      {sentence.expansionNotes.map((note, i) => (
                        <div
                          key={i}
                          className="text-sm text-foreground/80 leading-relaxed"
                        >
                          <span className="font-semibold text-foreground">
                            {note.label}
                          </span>
                          {note.description && (
                            <span className="text-muted-foreground ml-2">
                              {note.description}
                            </span>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
              </AnimatePresence>
            </React.Fragment>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
