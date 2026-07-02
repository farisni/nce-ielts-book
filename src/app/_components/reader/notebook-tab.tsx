"use client";

import React from "react";
import { Highlighter, MessageSquareText, Bookmark } from "lucide-react";
import { useReaderStore } from "@/stores/reader-store";
import type { Article } from "@/app/mock";

type Props = {
  article: Article;
  onScrollToBlock: (blockId: string) => void;
};

type AnnotationEntry = {
  blockId: string;
  sentenceText: string;
  note: { label: string; description: string };
};

export function NotebookTab({ article, onScrollToBlock }: Props) {
  const activeBlockId = useReaderStore((s) => s.activeBlockId);
  const notesByBlockId = useReaderStore((s) => s.notesByBlockId);

  // Collect all inlineAnnotations from the article
  const annotationEntries: AnnotationEntry[] = [];
  for (let pi = 0; pi < article.original.paragraphs.length; pi++) {
    const paragraph = article.original.paragraphs[pi];
    for (let si = 0; si < paragraph.length; si++) {
      const sentence = paragraph[si];
      const blockId = `${pi}-${si}`;
      for (const ann of sentence.inlineAnnotations ?? []) {
        if (ann.label && ann.description) {
          annotationEntries.push({
            blockId,
            sentenceText: sentence.text,
            note: { label: ann.label, description: ann.description },
          });
        }
      }
    }
  }

  // Also collect custom notes
  const noteEntries = Object.entries(notesByBlockId).map(([blockId, note]) => {
    // Find sentence text for this block
    let sentenceText = "";
    for (let pi = 0; pi < article.original.paragraphs.length; pi++) {
      const paragraph = article.original.paragraphs[pi];
      for (let si = 0; si < paragraph.length; si++) {
        if (`${pi}-${si}` === blockId) {
          sentenceText = paragraph[si].text;
          break;
        }
      }
    }
    return { blockId, sentenceText, note };
  });

  const hasAnnotations = annotationEntries.length > 0;
  const hasNotes = noteEntries.length > 0;

  if (!hasAnnotations && !hasNotes) {
    return (
      <div className="p-6 text-center text-sm text-muted-foreground">
        <Highlighter className="size-8 mx-auto mb-2 opacity-30" />
        <p>还没有笔记</p>
        <p className="mt-1 text-xs">行间笔记将在此处显示</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      {/* Inline Annotations Section */}
      {hasAnnotations && (
        <div className="py-1">
          <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            行间笔记
          </p>
          {annotationEntries.map(({ blockId, sentenceText, note }) => {
            const isActive = activeBlockId === blockId;
            return (
              <button
                key={`${blockId}-${note.label}`}
                onClick={() => onScrollToBlock(blockId)}
                className={`w-full text-left p-3 transition-colors hover:bg-muted/50 ${
                  isActive ? "bg-sky-100 dark:bg-sky-900/30 border-l-2 border-sky-500" : ""
                }`}
              >
                <p className="text-xs text-muted-foreground mb-0.5 font-mono">
                  block {blockId}
                </p>
                <p className="text-sm line-clamp-2 leading-relaxed">
                  {sentenceText}
                </p>
                <div className="mt-1.5 flex items-start gap-1.5 text-xs">
                  <Bookmark className="size-3 shrink-0 mt-0.5 text-violet-500" />
                  <span>
                    <strong className="text-foreground">{note.label}</strong>
                    {note.description && (
                      <span className="text-muted-foreground">
                        {" — "}{note.description}
                      </span>
                    )}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Custom Notes Section */}
      {hasNotes && (
        <div className="py-1">
          <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            我的笔记
          </p>
          {noteEntries.map(({ blockId, sentenceText, note }) => {
            const isActive = activeBlockId === blockId;
            return (
              <button
                key={`note-${blockId}`}
                onClick={() => onScrollToBlock(blockId)}
                className={`w-full text-left p-3 transition-colors hover:bg-muted/50 ${
                  isActive ? "bg-sky-100 dark:bg-sky-900/30 border-l-2 border-sky-500" : ""
                }`}
              >
                <p className="text-xs text-muted-foreground mb-0.5 font-mono">
                  block {blockId}
                </p>
                <p className="text-sm line-clamp-2 leading-relaxed">
                  {sentenceText}
                </p>
                <div className="mt-1.5 flex items-start gap-1.5 text-xs text-muted-foreground">
                  <MessageSquareText className="size-3 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{note}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
