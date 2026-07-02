"use client";

import React, { useEffect } from "react";
import { Highlighter, MessageSquareText } from "lucide-react";
import { useReaderStore } from "@/stores/reader-store";
import type { Article } from "@/app/mock";

const pillBg = ["#ede8e3", "#e3e8ed", "#e8ede3", "#ede3e8", "#e8e3ed"];

const highlightInText = (text: string, keyword: string) => {
  if (!keyword || !text) return text;
  const escaped = keyword.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === keyword.trim().toLowerCase()
      ? React.createElement('span', { key: i, className: 'text-amber-600/80' }, part)
      : part
  );
};

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
  note: { label: string; description: string; examples?: { kind?: "example" | "synonym"; word: string; meaning: string; enExample: string; zhExample: string }[] };
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
      <div className="p-6 text-center text-base text-muted-foreground">
        <Highlighter className="size-8 mx-auto mb-2 opacity-30" />
        <p>还没有笔记</p>
        <p className="mt-1 text-sm">点击左侧句子的 ··· 按钮可在此查看</p>
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
          <p className="px-3 py-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            扩展笔记
          </p>
          {(() => {
            // Group by blockId so sentence text appears only once per block
            const grouped = new Map<string, typeof expansionEntries>();
            for (const entry of expansionEntries) {
              const list = grouped.get(entry.blockId) || [];
              list.push(entry);
              grouped.set(entry.blockId, list);
            }
            return Array.from(grouped.entries()).map(([blockId, entries]) => {
              const first = entries[0];
              seenBlocks.add(blockId);
              return (
                <div
                  key={`exp-${blockId}`}
                  id={`nb-${blockId}`}
                  className={`${highlightClass(blockId)}`}
                >
                  <button
                    onClick={() => onScrollToBlock(blockId)}
                    className="w-full text-left p-3 pb-1.5"
                  >
                    <p className="text-base leading-relaxed">
                      {first.sentenceText}
                      <span className="text-sm text-muted-foreground/60 font-mono ml-2">block {blockId}</span>
                    </p>
                  </button>
                  <div className="px-3 pb-3 space-y-2">
                    {entries.map(({ note }, ni) => (
                      <div key={ni} className="text-sm">
                        <div className="flex items-start gap-1.5">
                          <span>
                            <span className="shrink-0 inline-flex items-center rounded px-1.5 py-0.5 text-sm font-semibold text-foreground/80" style={{ background: pillBg[ni % pillBg.length] }}>
                              {note.label}
                            </span>
                            {note.description && (
                              <span className="text-foreground font-medium">
                                {" — "}{note.description}
                              </span>
                            )}
                          </span>
                        </div>
                        {note.examples && note.examples.length > 0 && (() => {
                            const synonymRows = note.examples.filter(r => r.kind === "synonym" || (!r.kind && r.word));
                            const exampleRows = note.examples.filter(r => r.kind === "example" || (!r.kind && !r.word));
                            return (
                              <div className="mt-1.5 ml-4.5 space-y-1.5">
                                {exampleRows.map((ex, i) => (
                                  <div key={i} className="text-sm text-muted-foreground rounded px-2 py-1">
                                    <span>{highlightInText(ex.enExample, note.label)}</span>
                                    {ex.zhExample && <div className="mt-0.5">{ex.zhExample}</div>}
                                  </div>
                                ))}
                                {exampleRows.length > 0 && synonymRows.length > 0 && (
                                  <div className="border-t border-border my-1 w-3/4" />
                                )}
                                {synonymRows.map((ex, i) => (
                                  <div key={i} className="text-sm text-muted-foreground rounded px-2 py-1">
                                    <span className="font-medium text-foreground">{ex.word}</span>
                                    {ex.meaning && <span className="ml-1">{ex.meaning}</span>}
                                    {ex.enExample && <div className="mt-0.5">{highlightInText(ex.enExample, ex.word)}</div>}
                                    {ex.zhExample && <div className="mt-0.5">{ex.zhExample}</div>}
                                  </div>
                                ))}
                              </div>
                            );
                          })()}
                      </div>
                    ))}
                  </div>
                </div>
              );
            });
          })()}
        </div>
      )}

      {hasAnnotations && (
        <div className="py-1">
          <p className="px-3 py-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            行间笔记
          </p>
          {(() => {
            const grouped = new Map<string, typeof annotationEntries>();
            for (const entry of annotationEntries) {
              const list = grouped.get(entry.blockId) || [];
              list.push(entry);
              grouped.set(entry.blockId, list);
            }
            return Array.from(grouped.entries()).map(([blockId, entries]) => {
              const first = entries[0];
              return (
                <div
                  key={`ann-${blockId}`}
                  id={`nb-${blockId}`}
                  className={`${highlightClass(blockId)}`}
                >
                  <button
                    onClick={() => onScrollToBlock(blockId)}
                    className="w-full text-left p-3 pb-1.5"
                  >
                    <p className="text-base leading-relaxed">
                      {first.sentenceText}
                      <span className="text-sm text-muted-foreground/60 font-mono ml-2">block {blockId}</span>
                    </p>
                  </button>
                  <div className="px-3 pb-3 space-y-2">
                    {entries.map(({ note }, ni) => (
                      <div key={ni} className="text-sm">
                        <div className="flex items-start gap-1.5">
                          <span>
                            <span className="shrink-0 inline-flex items-center rounded px-1.5 py-0.5 text-sm font-semibold text-foreground/80" style={{ background: pillBg[ni % pillBg.length] }}>
                              {note.label}
                            </span>
                            {note.description && (
                              <span className="text-foreground font-medium">
                                {" — "}{note.description}
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            });
          })()}
        </div>
      )}

      {hasNotes && (
        <div className="py-1">
          <p className="px-3 py-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
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
                <p className="text-sm text-muted-foreground mb-0.5 font-mono">
                  block {blockId}
                </p>
                <p className="text-base line-clamp-2 leading-relaxed">
                  {sentenceText}
                </p>
                <div className="mt-1.5 flex items-start gap-1.5 text-sm text-muted-foreground">
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
