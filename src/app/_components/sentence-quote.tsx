import React from "react";

interface SentenceQuoteProps {
  children: React.ReactNode;
  className?: string;
}

export function SentenceQuote({ children, className }: SentenceQuoteProps) {
  return (
    <blockquote className={`border-l-2 border-[#67c4f4] pl-4 my-4 text-black text-lg font-semibold ${className ?? ""}`}>
      {children}
    </blockquote>
  );
}
