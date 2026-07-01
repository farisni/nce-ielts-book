"use client";

import { motion } from "motion/react";

// ── Types ──────────────────────────────────────────────

export interface TableRow {
  main: string;
  explain: string;
  enExample: string;
  zhExample: string;
}

export interface NoteItem {
  title: string;
  body: string;
  table?: TableRow[];
}

export interface TimelineNoteProps {
  notes: NoteItem[];
  palette?: string[];
}

// ── Tokenizer ──────────────────────────────────────────

function tokenize(text: string): string[] {
  return text.split(/(?<= )/g);
}

function TokenText({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {tokenize(text).map((tok, i) => (
        <span key={i} data-token={i} data-start="" data-end="" className={className}>
          {tok}
        </span>
      ))}
    </>
  );
}

// ── Framer-motion ──────────────────────────────────────

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Default palette ────────────────────────────────────

const defaultPalette = ["#c9b99a", "#9aabc9", "#a9c99a", "#c9aac9", "#aac99a"];

// ── SVG Dot (ShadcnTimeline style) ─────────────────────

function DotRing({ color, size = 16 }: { color: string; size?: number }) {
  return (
    <div className="flex items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-border/40"
      style={{ width: size + 8, height: size + 8 }}
    >
      <svg width={size} height={size} viewBox="0 0 16 16">
        <path
          d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
          style={{ fill: color }}
        />
      </svg>
    </div>
  );
}

// ── Sub-table · flexbox dot column ─────────────────────

function ExampleTable({ rows, color }: { rows: TableRow[]; color: string }) {
  return (
    <div className="flex flex-col">
      {rows.map((row, ri) => {
        const isLast = ri === rows.length - 1;
        return (
          <div key={ri} className="flex items-stretch">
            <div className="flex flex-col items-center shrink-0 w-3">
              <div className="h-[0.65rem] shrink-0" />
              <span
                className="size-1 rounded-full shrink-0"
                style={{ background: color }}
              />
              {!isLast && (
                <div className="w-px flex-1 opacity-20" style={{ background: color }} />
              )}
            </div>
            <div className="py-1.5 w-44 shrink-0">
              <span className="text-[13px] font-medium text-foreground/65">
                {row.main}
              </span>
              <span className="ml-1 text-[11px] text-muted-foreground/55">
                {row.explain}
              </span>
            </div>
            <div className="py-1.5 leading-relaxed flex-1 min-w-0">
              <div className="text-[13px]">
                <TokenText text={row.enExample} />
              </div>
              <div className="text-[11px] text-muted-foreground/55 mt-0.5">
                <TokenText text={row.zhExample} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Main component ─────────────────────────────────────

export function TimelineNote({
  notes,
  palette = defaultPalette,
}: TimelineNoteProps) {
  if (!notes.length) return null;

  return (
    <div className="relative">
      {/* ── Single global vertical track ── */}
      <div
        className="absolute top-0 bottom-0 w-px bg-border/60"
        style={{ left: 24, transform: "translateX(-50%)" }}
      />

      <motion.div variants={container} initial="hidden" animate="show" className="pt-2">
        {notes.map((note, ni) => {
          const color = palette[ni % palette.length];
          return (
            <motion.div key={ni} variants={item}>
              <div className="grid grid-cols-[48px_1fr] group/card">
                {/* ── Dot ── */}
                <div className="relative">
                  <div className="absolute left-1/2 top-1/2 z-10 transition-transform duration-200 group-hover/card:scale-110"
                    style={{ transform: "translate(-50%,-50%)" }}
                  >
                    <DotRing color={color} size={14} />
                  </div>
                </div>

                {/* ── Content ── */}
                <div className="pt-4 pb-5">
                  <div className="flex items-start gap-2.5 flex-wrap">
                    <span
                      className="shrink-0 inline-flex items-center rounded-md px-2.5 py-0.5 text-[13px] font-medium"
                      style={{ background: color + "1a", color }}
                    >
                      {note.title}
                    </span>
                    <span className="text-[13px] text-muted-foreground leading-relaxed pt-0.5">
                      {note.body}
                    </span>
                  </div>

                  {note.table && note.table.length > 0 && (
                    <div className="mt-2">
                      <ExampleTable rows={note.table} color={color} />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default TimelineNote;
