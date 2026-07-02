"use client";

import React, { Fragment } from "react";
import { Tooltip } from "@/components/ui/tooltip";
import type { SentenceData } from "@/app/mock";

type HighlightRange = {
  start: number;
  end: number;
};

export function renderHighlightedText(
  text: string,
  paragraphStart: number,
  highlights: HighlightRange[],
  disableHighlights?: boolean,
  animate?: boolean,
  predicates?: string[],
  auxiliaries?: string[],
  clauseIntroducers?: string[],
  showGrammarHighlights?: boolean,
  inlineAnnotations?: SentenceData["inlineAnnotations"],) {
  const paragraphEnd = paragraphStart + text.length;
  const relevantHighlights = highlights.filter(
    (highlight) => highlight.start < paragraphEnd && highlight.end > paragraphStart,
  );

  // Collect grammar-level matches: { start, end, color, type }
  type GrammarMatch = { start: number; end: number; color: string };
  const grammarMatches: GrammarMatch[] = [];

  function findWords(words: string[], color: string) {
    if (!words || words.length === 0) return;
    for (const word of words) {
      if (!word) continue;
      const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
      let match;
      while ((match = regex.exec(text)) !== null) {
        grammarMatches.push({ start: match.index, end: match.index + match[0].length, color });
      }
    }
  }

  if (showGrammarHighlights !== false) {
    findWords(predicates ?? [], '#c2410c');      // rust for predicates
  findWords(auxiliaries ?? [], '#d97706');      // amber for auxiliaries (nearby rust)
    findWords(clauseIntroducers ?? [], '#418faf'); // teal for clause introducers
  }

  // Sort by position
  grammarMatches.sort((a, b) => a.start - b.start);

  // Ruby notes: find positions + tips
  type RubyRange = { start: number; end: number; label: string; description: string };
  const rubyRanges: RubyRange[] = [];
  if (inlineAnnotations && inlineAnnotations.length > 0 && showGrammarHighlights !== false) {
    for (const note of inlineAnnotations) {
      if (!note.label) continue;
      const escaped = note.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escaped, 'gi');
      let match;
      while ((match = regex.exec(text)) !== null) {
        rubyRanges.push({ start: match.index, end: match.index + match[0].length, label: note.label, description: note.description });
      }
    }
    rubyRanges.sort((a, b) => a.start - b.start);
    // Remove exact duplicates
    const deduped: RubyRange[] = [];
    for (const r of rubyRanges) {
      const last = deduped[deduped.length - 1];
      if (!last || r.start !== last.start || r.end !== last.end) {
        deduped.push(r);
      }
    }
    rubyRanges.length = 0;
    rubyRanges.push(...deduped);
  }

  // Remove overlapping grammar matches (keep first)
  const filteredGrammar: GrammarMatch[] = [];
  for (const gm of grammarMatches) {
    const last = filteredGrammar[filteredGrammar.length - 1];
    if (!last || gm.start >= last.end) {
      filteredGrammar.push(gm);
    }
  }

  // If nothing to highlight, return plain text
  if (disableHighlights && filteredGrammar.length === 0) return text;
  if (relevantHighlights.length === 0 && filteredGrammar.length === 0) return text;

  // Merge user highlights and grammar matches, splitting text into segments
  interface Segment { start: number; end: number; color?: string; isUser?: boolean }
  const segments: Segment[] = [];

  // Add grammar segments
  for (const gm of filteredGrammar) {
    segments.push({ start: gm.start, end: gm.end, color: gm.color });
  }

  // Add user highlight segments
  if (!disableHighlights) {
    for (const hl of relevantHighlights) {
      const s = Math.max(hl.start - paragraphStart, 0);
      const e = Math.min(hl.end - paragraphStart, text.length);
      if (s < e) {
        segments.push({ start: s, end: e, color: '#fef9e0', isUser: true });
      }
    }
  }

  // Sort, grammar wins over user on overlap
  segments.sort((a, b) => a.start - b.start);

  // Build non-overlapping segments
  const final: { start: number; end: number; color?: string }[] = [];
  for (const seg of segments) {
    const last = final[final.length - 1];
    if (!last || seg.start >= last.end) {
      final.push(seg);
    } else if (seg.end > last.end) {
      last.end = seg.end;
    }
  }

  if (final.length === 0 && rubyRanges.length === 0) return text;

  // Split segments at ruby note boundaries
  type FinalSegment = { start: number; end: number; color?: string; isUser?: boolean; ruby?: { label: string; description: string } };
  let finalSegments: FinalSegment[] = final.map(s => ({ ...s }));

  // First, add ruby-only segments for ranges that don't overlap any existing segment
  for (const rr of rubyRanges) {
    let overlaps = false;
    for (const seg of finalSegments) {
      if (!(rr.end <= seg.start || rr.start >= seg.end)) {
        overlaps = true;
        break;
      }
    }
    if (!overlaps) {
      finalSegments.push({ start: rr.start, end: rr.end, ruby: { label: rr.label, description: rr.description } });
    }
  }
  finalSegments.sort((a, b) => a.start - b.start);

  // Then split overlapping segments at ruby boundaries
  for (const rr of rubyRanges) {
    const next: FinalSegment[] = [];
    for (const seg of finalSegments) {
      if (rr.end <= seg.start || rr.start >= seg.end) {
        // No overlap
        next.push(seg);
      } else {
        // Overlap — split into before, overlap, after
        if (seg.start < rr.start) {
          next.push({ start: seg.start, end: rr.start, color: seg.color, isUser: seg.isUser });
        }
        const overlapStart = Math.max(seg.start, rr.start);
        const overlapEnd = Math.min(seg.end, rr.end);
        // Only set ruby on the first matching range for each overlap
        const existingRuby = (seg as FinalSegment).ruby;
        next.push({ start: overlapStart, end: overlapEnd, color: seg.color, isUser: seg.isUser, ruby: existingRuby || { label: rr.label, description: rr.description } });
        if (seg.end > rr.end) {
          next.push({ start: rr.end, end: seg.end, color: seg.color, isUser: seg.isUser });
        }
      }
    }
    finalSegments = next;
  }

  if (finalSegments.length === 0) return text;

  const parts: React.ReactNode[] = [];
  let cursor = 0;
  let idx = 0;

  for (const seg of finalSegments) {
    if (seg.start > cursor) {
      parts.push(
        <Fragment key={`tx-${paragraphStart}-${idx}`}>
          {text.slice(cursor, seg.start)}
        </Fragment>,
      );
    }
    const Wrapper = "span";
    const wrapperProps = seg.isUser
      ? { style: { backgroundColor: seg.color, paddingTop: '2px', paddingBottom: '1px', borderBottom: '2px solid #fad730' } as React.CSSProperties }
      : { style: { color: seg.color, fontWeight: 600 } as React.CSSProperties };

    const innerContent = (
      <Wrapper key={`hl-${paragraphStart}-${idx}`} {...wrapperProps}>
        {text.slice(seg.start, seg.end)}
      </Wrapper>
    );

    if (seg.ruby) {
      const hasGrammarColor = !!seg.color;
      parts.push(
        <Tooltip key={`ruby-${paragraphStart}-${idx}`} content={seg.ruby.description} delayDuration={300}>
          <span className={hasGrammarColor ? "cursor-help" : "cursor-help underline decoration-violet-500/50 decoration-dotted underline-offset-[6px]"}>
            {innerContent}
          </span>
        </Tooltip>
      );
    } else {
      parts.push(innerContent);
    }
    cursor = seg.end;
    idx++;
  }

  if (cursor < text.length) {
    parts.push(<Fragment key={`tx-${paragraphStart}-tail`}>{text.slice(cursor)}</Fragment>);
  }

  return parts;
}

type ArticlePageProps = {
  defaultLevel: string;
  searchParams: Promise<{ article?: string | string[] }>;
};

const dotColors = ["#c9b99a", "#9aabc9", "#a9c99a", "#c9aac9", "#aac99a"];
const pillBg = ["#ede8e3", "#e3e8ed", "#e8ede3", "#ede3e8", "#e8e3ed"];

