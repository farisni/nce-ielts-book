"use client";

import React, { useEffect } from "react";
import { Highlighter, MessageSquareText, Bookmark, BookOpen } from "lucide-react";
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

type ExpansionEntry = {
  blockId: string;
  sentenceText: string;
  note: { label: string; description: string; examples?: { word: string; meaning: string; enExample: string; zhExample: string }[] };
};

export function NotebookTab({ article, onScrollToBlock }: Props) {
  const activeBlockId = useReaderStore((s) => s.activeBlockId);
  const selectedBlockId = useReaderStore((s) => s.selectedBlockId);
  const notesByBlockId = useReaderStore((s) => s.notesByBlockId);

  // Auto-scroll right panel to the selected block's entry
  useEffect(() => {
    if (!selectedBlockId) return;
    const id = setTimeout(() => {
      const el = document.getElementById(`nb-${selectedBlockId}`);
      if (!el) return;
      const viewport = el.closest("[data-slot=\"scroll-area-viewport\"]");
      if (viewport instanceof HTMLElement) {
        const rect = el.getBoundingClientRect();
        const vRect = viewport.getBoundingClientRect();
        viewport.scrollBy({
          top: rect.top - vRect.top,
          behavior: "smooth",
        });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 150);
    return () => clearTimeout(id);
  }, [selectedBlockId]);

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

  // Collect all expansionNotes
  const expansionEntries: ExpansionEntry[] = [];
  for (let pi = 0; pi < article.original.paragraphs.length; pi++) {
    const paragraph = article.original.paragraphs[pi];
    for (let si = 0; si < paragraph.length; si++) {
      const sentence = paragraph[si];
      const blockId = `${pi}-${si}`;
      for (const exp of sentence.expansionNotes ?? []) {
        if (exp.label) {
          expansionEntries.push({
            blockId,
            sentenceText: sentence.text,
            note: { label: exp.label, description: exp.description ?? "", examples: exp.examples },
          });
        }
      }
    }
  }

  // Also collect custom notes
  const noteEntries = Object.entries(notesByBlockId).map(([blockId, note]) => {
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
  const hasExpansions = expansionEntries.length > 0;
  const hasNotes = noteEntries.length > 0;

  if (!hasAnnotations && !hasExpansions && !hasNotes) {
    return (
      <div className="p-6 text-center text-sm text-muted-foreground">
        <Highlighter className="size-8 mx-auto mb-2 opacity-30" />
        <p>还没有笔记</p>
        <p className="mt-1 text-xs">点击左侧句子的 ··· 按钮可在此查看</p>
      </div>
    );
  }

  const highlightClass = (blockId: string) => {
    const isHighlighted = selectedBlockId === blockId || activeBlockId === blockId;
    return isHighlighted
      ? "border-l-2 border-sky-500"
      : "";
  };

  // Track seen blockIds to only add id to first entry per block
  const seenBlocks = new Set<string>();

  return (
    <div className="divide-y divide-border">
      {hasExpansions && (
        <div className="py-1">
          <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            扩展笔记
          </p>
          {expansionEntries.map(({ blockId, sentenceText, note }) => {
            const isFirst = !seenBlocks.has(blockId);
            if (isFirst) seenBlocks.add(blockId);
            return (
              <button
                key={`exp-${blockId}-${note.label}`}
                id={isFirst ? `nb-${blockId}` : undefined}
                onClick={() => onScrollToBlock(blockId)}
                className={`w-full text-left p-3 ${highlightClass(blockId)}`}
              >
                <p className="text-xs text-muted-foreground mb-0.5 font-mono">
                  block {blockId}
                </p>
                <p className="text-sm line-clamp-2 leading-relaxed">
                  {sentenceText}
                </p>
                <div className="mt-1.5 flex items-start gap-1.5 text-xs">
                  <BookOpen className="size-3 shrink-0 mt-0.5 text-emerald-500" />
                  <span>
                    <strong className="text-foreground">{note.label}</strong>
                    {note.description && (
                      <span className="text-muted-foreground">
                        {" — "}{note.description}
                      </span>
                    )}
                  </span>
                </div>
                {note.examples && note.examples.length > 0 && (
                  <div className="mt-2 space-y-1.5">
                    {note.examples.map((ex, i) => (
                      <div key={i} className="text-[11px] text-muted-foreground bg-muted/40 rounded px-2 py-1">
                        {ex.word && <span className="font-medium text-foreground">{ex.word}</span>}
                        {ex.meaning && <span className="ml-1">{ex.meaning}</span>}
                        {ex.enExample && <div className="mt-0.5">{ex.enExample}</div>}
                        {ex.zhExample && <div className="mt-0.5">{ex.zhExample}</div>}
                      </div>
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}

      {hasAnnotations && (
        <div className="py-1">
          <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            行间笔记
          </p>
          {annotationEntries.map(({ blockId, sentenceText, note }) => {
            const isFirst = !seenBlocks.has(blockId);
            if (isFirst) seenBlocks.add(blockId);
            return (
              <button
                key={`${blockId}-${note.label}`}
                id={isFirst ? `nb-${blockId}` : undefined}
                onClick={() => onScrollToBlock(blockId)}
                className={`w-full text-left p-3 ${highlightClass(blockId)}`}
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

      {hasNotes && (
        <div className="py-1">
          <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            我的笔记
          </p>
          {noteEntries.map(({ blockId, sentenceText, note }) => {
            const isFirst = !seenBlocks.has(blockId);
            if (isFirst) seenBlocks.add(blockId);
            return (
              <button
                key={`note-${blockId}`}
                id={isFirst ? `nb-${blockId}` : undefined}
                onClick={() => onScrollToBlock(blockId)}
                className={`w-full text-left p-3 ${highlightClass(blockId)}`}
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
