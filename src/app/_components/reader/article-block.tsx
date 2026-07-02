"use client";

import React from "react";
import { motion } from "motion/react";
import { MoreHorizontal } from "lucide-react";
import { renderHighlightedText } from "@/lib/render-highlighted-text";
import { useArticleSettings } from "@/stores/article-settings";
import type { SentenceData } from "@/app/mock";

type Props = {
  blockId: string;
  sentence: SentenceData;
  sentenceStart: number;
  articleId: string;
  isActive: boolean;
  onTogglePanel?: (blockId: string) => void;
  isPanelOpen?: boolean;
  hideInlineAnnotations?: boolean;
};

const EMPTY_HIGHLIGHTS: never[] = [];

export function ArticleBlock({
  blockId,
  sentence,
  sentenceStart,
  articleId,
  isActive,
  onTogglePanel,
  isPanelOpen,
  hideInlineAnnotations,
}: Props) {
  const highlights = useArticleSettings((s) => s.highlightsByArticleId[articleId]) ?? EMPTY_HIGHLIGHTS;
  const showGrammarHighlights = useArticleSettings((s) => s.showGrammarHighlights);
  const hasPanelNotes = (sentence.expansionNotes?.length ?? 0) > 0;

  return (
    <span
      data-block-id={blockId}
      className={`sentence-inline transition-colors duration-200 ${
        isActive
          ? "bg-sky-100 dark:bg-sky-900/30 rounded-md px-1.5 py-0.5 -mx-1.5"
          : ""
      }`}
    >
      {renderHighlightedText(
        sentence.text,
        sentenceStart,
        highlights,
        false,
        false,
        sentence.predicates,
        sentence.auxiliaries,
        sentence.clauseIntroducers,
        showGrammarHighlights,
        hideInlineAnnotations ? undefined : sentence.inlineAnnotations
      )}
      {hasPanelNotes && onTogglePanel && (
        <button
          type="button"
          onClick={() => onTogglePanel(blockId)}
          className={`inline-flex size-5 items-center justify-center rounded transition-colors align-middle mx-0.5 ${
            isPanelOpen
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
}
