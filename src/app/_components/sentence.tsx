import React from "react";
import { SentenceQuote } from "./sentence-quote";

interface SentenceProps {
  quote?: React.ReactNode;
  quoteClassName?: string;
  children: React.ReactNode;
}

export function Sentence({ quote, quoteClassName, children }: SentenceProps) {
  return (
    <div>
      {quote && (
        <SentenceQuote className={quoteClassName}>
          {quote}
        </SentenceQuote>
      )}
      <div className="space-y-10">
        {children}
      </div>
    </div>
  );
}
