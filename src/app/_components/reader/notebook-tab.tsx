"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { Highlighter, MessageSquareText } from "lucide-react";
import { useReaderStore } from "@/stores/reader-store";
import type { Article } from "@/app/mock";

const pillBg = ["#ede8e3", "#e3e8ed", "#e8ede3", "#ede3e8", "#e8e3ed"];
const anchorBg = "#e8f1ff";  // 句子描点统一色

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


type ExpansionEntry = {
  blockId: string;
  sentenceText: string;
  note: { label: string; description: string; examples?: { kind?: "example" | "synonym"; word: string; meaning: string; enExample: string; zhExample: string }[] };
};

export function NotebookTab({ article, onScrollToBlock }: Props) {
  const activeBlockId = useReaderStore((s) => s.activeBlockId);
  const notesByBlockId = useReaderStore((s) => s.notesByBlockId);
  const openedByBlockId = useReaderStore((s) => s.openedByBlockId);
  const isPanelOpen = useReaderStore((s) => s.isPanelOpen);
  const setActiveBlockId = useReaderStore((s) => s.setActiveBlockId);
  const prevOpenedRef = useRef<string | null>(null);
  const skipObserverRef = useRef(false);
  const scrollOffsetsRef = useRef<Map<string, number>>(new Map());
  const ratiosRef = useRef<Map<string, number>>(new Map());

  // 保存当前激活 block 相对视口顶部的偏移量，同时更新 openedByBlockId
  const saveOffset = useCallback(() => {
    const store = useReaderStore.getState();
    // 优先取 Observer 追踪到的 activeBlockId（用户实际在看的位置），兜底 openedByBlockId
    const id = store.activeBlockId || store.openedByBlockId;
    if (!id) return;
    const el = document.getElementById(`nb-${id}`);
    if (!el) return;
    const viewport = el.closest('[data-slot="scroll-area-viewport"]') as HTMLElement | null;
    if (!viewport) return;
    const elTop = el.getBoundingClientRect().top;
    const vpTop = viewport.getBoundingClientRect().top;
    scrollOffsetsRef.current.set(id, elTop - vpTop);
    useReaderStore.setState({
      panelScrollTop: elTop - vpTop,
      // 同步 openedByBlockId，确保重开时定位到用户实际在看的 block
      openedByBlockId: id,
    });
  }, []);

  // 面板关闭时保存偏移量
  useEffect(() => {
    if (isPanelOpen) return;
    saveOffset();
  }, [isPanelOpen, saveOffset]);

  // Auto-scroll right panel when panel opens or openedByBlockId changes
  useEffect(() => {
    if (!isPanelOpen || !openedByBlockId) return;

    const isSameBlock = openedByBlockId === prevOpenedRef.current;
    prevOpenedRef.current = openedByBlockId;
    setActiveBlockId(openedByBlockId);
    skipObserverRef.current = true;

    // 有保存的偏移量就用它（精确恢复位置），否则默认 60px
    const savedOffset = scrollOffsetsRef.current.get(openedByBlockId);
    const targetOffset = savedOffset ?? 60;

    const id = setTimeout(() => {
      const el = document.getElementById(`nb-${openedByBlockId}`);
      if (!el) { skipObserverRef.current = false; return; }
      const viewport = el.closest('[data-slot="scroll-area-viewport"]') as HTMLElement | null;
      if (!viewport) { skipObserverRef.current = false; return; }
      const currentOffset = el.getBoundingClientRect().top - viewport.getBoundingClientRect().top;
      viewport.scrollBy({
        top: currentOffset - targetOffset,
        behavior: "instant" as ScrollBehavior,
      });
      skipObserverRef.current = false;
    }, 400);

    return () => { clearTimeout(id); skipObserverRef.current = false; };
  }, [isPanelOpen, openedByBlockId, setActiveBlockId]);

  // Notebook scroll sync: update activeBlockId as notebook scrolls
  useEffect(() => {
    const root = document.querySelector('.notes-panel-viewport') as HTMLElement | null;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id.replace(/^nb-/, '');
          if (entry.intersectionRatio > 0) {
            ratiosRef.current.set(id, entry.intersectionRatio);
          } else {
            ratiosRef.current.delete(id);
          }
        }
        let bestId: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of ratiosRef.current) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestId && !skipObserverRef.current) setActiveBlockId(bestId);
      },
      {
        root,
        rootMargin: "0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    // Observe all existing nb-* elements
    const observeAll = () => {
      root.querySelectorAll('[id^="nb-"]').forEach((el) => observer.observe(el));
    };

    // Initial observe
    observeAll();

    // Also watch for new nb-* elements being added
    const mutationObs = new MutationObserver(() => observeAll());
    mutationObs.observe(root, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObs.disconnect();
      ratiosRef.current.clear();
    };
  }, [setActiveBlockId]);

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

  const hasExpansions = expansionEntries.length > 0;
  const hasNotes = noteEntries.length > 0;

  if (!hasExpansions && !hasNotes) {
    return (
      <div className="p-6 text-center text-base text-muted-foreground">
        <Highlighter className="size-8 mx-auto mb-2 opacity-30" />
        <p>还没有笔记</p>
        <p className="mt-1 text-sm">点击左侧句子的 ··· 按钮可在此查看</p>
      </div>
    );
  }

  const highlightClass = (blockId: string) => {
    const isHighlighted = activeBlockId === blockId;
    return isHighlighted
      ? "border-l-2 border-[#80b0eb]"
      : "";
  };

  // Track seen blockIds to only add id to first entry per block
  const seenBlocks = new Set<string>();

  return (
    <div className="divide-y divide-border">
      {hasExpansions && (
        <div className="py-1">
          <p className="sticky top-0 z-10 flex items-center h-14 px-3 text-sm font-medium text-muted-foreground uppercase tracking-wider bg-sidebar border-b border-border/50">
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
                  className={`${highlightClass(blockId)} px-3`}
                >
                  <button
                    onClick={() => onScrollToBlock(blockId)}
                    className="block text-left px-4 py-3 pb-1.5 rounded-md mx-3 my-2" style={{ background: anchorBg }}
                  >
                    <p className="text-base leading-relaxed text-foreground" style={{ fontFamily: '"Lyon Text", "IBM Plex Serif", "Georgia", "Times New Roman", serif' }}>
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
