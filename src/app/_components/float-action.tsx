"use client";

import { Highlighter } from "lucide-react";
import { FloatingDisclosure, items } from "@/components/ui/floating-disclosure";
import { useArticleSettings } from "@/stores/article-settings";
import { cn } from "@/lib/utils";

export function GrammarToggleButton({ className }: { className?: string }) {
  const showGrammarHighlights = useArticleSettings((s) => s.showGrammarHighlights);
  const toggleGrammarHighlights = useArticleSettings((s) => s.toggleGrammarHighlights);

  return (
    <button
      onClick={toggleGrammarHighlights}
      className={cn(
        "flex size-7 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-colors hover:bg-muted cursor-pointer",
        className
      )}
      aria-label={showGrammarHighlights ? "Hide grammar colors" : "Show grammar colors"}
    >
      <Highlighter className={showGrammarHighlights ? "size-4 text-[#c2410c]" : "size-4 text-muted-foreground/40"} />
    </button>
  );
}

export function FloatAction({ className }: { className?: string }) {
  const showGrammarHighlights = useArticleSettings((s) => s.showGrammarHighlights);
  const toggleGrammarHighlights = useArticleSettings((s) => s.toggleGrammarHighlights);

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <button
        onClick={toggleGrammarHighlights}
        className="flex size-7 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-colors hover:bg-muted cursor-pointer"
        aria-label={showGrammarHighlights ? "Hide grammar colors" : "Show grammar colors"}
      >
        <Highlighter className={showGrammarHighlights ? "size-4 text-[#c2410c]" : "size-4 text-muted-foreground/40"} />
      </button>
      <FloatingDisclosure items={items} />
    </div>
  );
}
