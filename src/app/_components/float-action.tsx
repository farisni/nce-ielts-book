"use client";

import { Highlighter } from "lucide-react";
import { FloatingDisclosure, items } from "@/components/ui/floating-disclosure";
import { Button } from "@/components/ui/button";
import { useArticleSettings } from "@/stores/article-settings";
import { cn } from "@/lib/utils";

export function GrammarToggleButton({ className }: { className?: string }) {
  const showGrammarHighlights = useArticleSettings((s) => s.showGrammarHighlights);
  const toggleGrammarHighlights = useArticleSettings((s) => s.toggleGrammarHighlights);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleGrammarHighlights}
      className={cn("rounded-full hover:bg-[#f0f0f0]", className)}
      aria-label={showGrammarHighlights ? "Hide grammar colors" : "Show grammar colors"}
    >
      <Highlighter className={showGrammarHighlights ? "size-4 text-[#c2410c]" : "size-4 text-muted-foreground/40 group-hover/button:text-[#c2410c]"} />
    </Button>
  );
}

export function FloatAction({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <FloatingDisclosure items={items} />
    </div>
  );
}
