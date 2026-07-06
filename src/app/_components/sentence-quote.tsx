import React from "react";

interface SentenceQuoteProps {
  children: React.ReactNode;
  className?: string;
}

export function SentenceQuote({ children, className }: SentenceQuoteProps) {
  return (
    <blockquote className={`border-l-2 border-zinc-300 pl-4 my-4 text-black text-lg font-semibold ${className ?? ""}`}>
      {children}
    </blockquote>
  );
}
