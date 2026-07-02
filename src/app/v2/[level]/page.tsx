"use client";

import { use, useEffect, useState, useRef } from "react";
import { MoreHorizontal } from "lucide-react";
import { GrammarToggleButton } from "@/app/_components/float-action";
import { allArticles } from "@/app/mock";
import type { Article, SentenceData } from "@/app/mock";
import { useReaderStore } from "@/stores/reader-store";
import { useScrollSync } from "@/hooks/use-scroll-sync";
import { renderHighlightedText } from "@/lib/render-highlighted-text";
import { useArticleSettings } from "@/stores/article-settings";

const LEVEL_PREFIXES: Record<string, string> = {
  nce2: "nce2",
  nce3: "nce3",
  nce4: "nce4",
  ielts: "ielts",
};

const EMPTY_HIGHLIGHTS: never[] = [];

type Block = {
  blockId: string;
  sentence: SentenceData;
  start: number;
};

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ level: string }>;
  searchParams: Promise<{ article?: string | string[] }>;
}) {
  const { level } = use(params);
  const [article, setArticle] = useState<Article | null>(null);
  const [sp, setSp] = useState<{ article?: string | string[] }>({});
  const setStoreArticle = useReaderStore((s) => s.setArticle);
  const activeBlockId = useReaderStore((s) => s.activeBlockId);
  const selectedBlockId = useReaderStore((s) => s.selectedBlockId);
  const setSelectedBlockId = useReaderStore((s) => s.setSelectedBlockId);
  const scrollToBlock = useReaderStore((s) => s.scrollToBlock);
  const isPanelOpen = useReaderStore((s) => s.isPanelOpen);
  const togglePanel = useReaderStore((s) => s.togglePanel);

  const containerRef = useRef<HTMLDivElement>(null);
  const { observeBlock } = useScrollSync(containerRef);
  const showGrammarHighlights = useArticleSettings((s) => s.showGrammarHighlights);
  const highlights = useArticleSettings((s) =>
    (s.highlightsByArticleId[article?.id ?? ''] ?? EMPTY_HIGHLIGHTS)
  );

  useEffect(() => {
    searchParams.then(setSp);
  }, [searchParams]);

  useEffect(() => {
    if (!sp.article) return;
    const key = Array.isArray(sp.article) ? sp.article[0] : sp.article;
    const found = allArticles[key] || Object.values(allArticles).find((a) => a.id === key);
    setArticle(found || null);
  }, [sp.article]);

  useEffect(() => {
    setStoreArticle(article);
    return () => { setStoreArticle(null); };
  }, [article, setStoreArticle]);

  if (!article) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
        选择一篇文章…
      </div>
    );
  }

  // Flatten paragraphs into blocks
  let globalOffset = 0;
  const blocks: Block[] = [];
  for (let pi = 0; pi < article.original.paragraphs.length; pi++) {
    const paragraph = article.original.paragraphs[pi];
    for (let si = 0; si < paragraph.length; si++) {
      const sentence = paragraph[si];
      const blockId = `${pi}-${si}`;
      blocks.push({ blockId, sentence, start: globalOffset });
      globalOffset += sentence.text.length + 1;
    }
  }

  const handleTogglePanel = (blockId: string) => {
    if (selectedBlockId === blockId) {
      setSelectedBlockId(null);
      if (isPanelOpen) togglePanel();
    } else {
      setSelectedBlockId(blockId);
      scrollToBlock(blockId);
      if (!isPanelOpen) togglePanel();
    }
  };

  return (
    <div ref={containerRef} className="max-w-[750px] mx-auto">
      <div className="flex items-center gap-2 mb-2"><h1 className="text-3xl font-bold tracking-tight">
        {article.title}
      </h1><GrammarToggleButton className="shrink-0" /></div>
      {article.titleCn && (
        <p className="text-muted-foreground mb-8">{article.titleCn}</p>
      )}

      <div
        className="text-lg leading-loose text-foreground [text-indent:2em]"
        style={{
          fontFamily:
            '"Lyon Text", "IBM Plex Serif", "Georgia", "Times New Roman", serif',
        }}
      >
        {blocks.map(({ blockId, sentence, start }) => {
          const isActive = activeBlockId === blockId;
          const isOpen = selectedBlockId === blockId;
          const hasPanelNotes = (sentence.expansionNotes?.length ?? 0) > 0;

          return (
            <span
              key={blockId}
              data-block-id={blockId}
              ref={observeBlock}
              className={`sentence-inline transition-colors duration-200 ${
                isActive
                  ? "bg-sky-100 dark:bg-sky-900/30 rounded-md px-1.5 py-0.5 -mx-1.5"
                  : ""
              }`}
            >
              {renderHighlightedText(
                sentence.text,
                start,
                highlights,
                false,
                false,
                sentence.predicates,
                sentence.auxiliaries,
                sentence.clauseIntroducers,
                showGrammarHighlights,
                sentence.inlineAnnotations
              )}
              {hasPanelNotes && (
                <button
                  type="button"
                  onClick={() => handleTogglePanel(blockId)}
                  className={`inline-flex size-5 items-center justify-center rounded transition-colors align-middle mx-0.5 ${
                    isOpen
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground/50 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <MoreHorizontal className="size-3.5" />
                </button>
              )}
              {" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
