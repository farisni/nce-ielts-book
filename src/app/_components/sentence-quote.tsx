import React from "react";

interface SentenceQuoteProps {
  children: React.ReactNode;
  className?: string;
}

export function SentenceQuote({ children, className }: SentenceQuoteProps) {
  return (
    <blockquote className={`border-l-2 border-[#8f9eae] pl-4 my-4 text-zinc-800 text-lg font-normal ${className ?? ""}`}>
      {children}
    </blockquote>
  );
}
