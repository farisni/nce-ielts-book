"use client";

import { Highlighter } from "lucide-react";
import { FloatingDisclosure, items } from "@/components/ui/floating-disclosure";
import { useArticleSettings } from "@/stores/article-settings";

export function FloatAction() {
  const showGrammarHighlights = useArticleSettings((s) => s.showGrammarHighlights);
  const toggleGrammarHighlights = useArticleSettings((s) => s.toggleGrammarHighlights);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
      <button
        onClick={toggleGrammarHighlights}
        className="flex size-10 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-colors hover:bg-muted cursor-pointer"
        aria-label={showGrammarHighlights ? "Hide grammar colors" : "Show grammar colors"}
      >
        <Highlighter className={showGrammarHighlights ? "size-5 text-[#c2410c]" : "size-5 text-muted-foreground/40"} />
      </button>
      <FloatingDisclosure items={items} />
    </div>
  );
}
