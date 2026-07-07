"use client";

import React from "react";
import { KnowledgePoint } from "@/app/_components/knowledge-point";
import { Sentence } from "@/app/_components/sentence";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const DOT_COLORS = ["#d4ddd9", "#C7D2CD", "#b4c1bb", "#a1b0a9", "#8e9f97", "#7b8e85"];

function HighlightText({ text, word }: { text: string; word: string }) {
  const idx = text.indexOf(word);
  if (idx === -1) return <>{text}</>;
  return <>{text.slice(0, idx)}<mark>{text.slice(idx, idx + word.length)}</mark>{text.slice(idx + word.length)}</>;
}

// ═══ Data Arrays — extend as needed ═══

export default function Page() {
  return (
    <main className="mx-auto mt-16 w-[880px] min-w-[880px] min-h-[600px] rounded-md border border-dashed border-zinc-300 p-8">
      {/* === Placeholder — run gen_demo.py to fill === */}
    </main>
  );
}
