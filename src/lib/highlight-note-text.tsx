import React from "react";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function highlightNoteText(text: string, terms: string | string[] | undefined) {
  const keywords = (Array.isArray(terms) ? terms : [terms])
    .map((term) => term?.trim())
    .filter((term): term is string => Boolean(term))
    .filter((term, index, list) => list.findIndex((item) => item.toLowerCase() === term.toLowerCase()) === index)
    .sort((a, b) => b.length - a.length);

  if (!text || keywords.length === 0) return text;

  const matcher = new RegExp(`(${keywords.map(escapeRegExp).join("|")})`, "gi");
  const parts = text.split(matcher);

  return parts.map((part, index) =>
    keywords.some((term) => part.toLowerCase() === term.toLowerCase()) ? (
      <span key={index} className="text-amber-600/80">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
