"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { Shuffle, Search, ChevronDown, ChevronUp, ArrowUpDown } from "lucide-react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  createColumnHelper,
  type SortingState,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";

import { vocabChapters, type VocabWord } from "@/app/mock/ielts-vocabulary";
import { InputGroup, InputField } from "@/components/ui/input-group";

const ROW_HEIGHT = 44;
const EXPANDED_ESTIMATE = 160;
const SEARCH_HEADER_WIDTH = 156;
const TABLE_CONTENT_WIDTH = 1058;

const columnHelper = createColumnHelper<VocabWord>();

export default function VocabularyPage() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [chapter, setChapter] = useState(vocabChapters[0]?.title ?? "");

  const toggleRow = useCallback((id: number) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const activeChapter = vocabChapters.find((ch) => ch.title === chapter);

  const chapterWords = useMemo(() => {
    const words: VocabWord[] = [];
    const ch = activeChapter;
    if (!ch) return words;
    for (const group of ch.groups) {
      for (const word of group) {
        words.push(word);
      }
    }
    return words;
  }, [activeChapter]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "",
        cell: (info) => <span className="text-muted-foreground/50 text-xs">{info.row.index + 1}</span>,
        size: 48,
        enableSorting: false,
      }),
      columnHelper.accessor("word", { header: "单词", cell: (info) => <span className="font-medium text-[17px]">{info.getValue()}</span>, size: 150 }),
      columnHelper.accessor("chinese", {
        header: "释义",
        cell: (info) => <span className="text-muted-foreground"><span className="text-muted-foreground/60">{info.row.original.partOfSpeech}</span> {info.getValue()}</span>,
        size: 250,
        enableSorting: false,
      }),
      columnHelper.accessor("example", { header: "例句", cell: (info) => <span className="text-muted-foreground italic text-xs truncate block max-w-full">{info.getValue()}</span>, enableSorting: false, size: 454 }),
    ],
    []
  );

  const table = useReactTable({
    data: chapterWords,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const rows = table.getRowModel().rows;
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      el.classList.add("is-scrolling");
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        el.classList.remove("is-scrolling");
      }, 600);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  const estimateSize = useCallback(
    (index: number) => {
      const row = rows[index];
      return row && expandedRows.has(row.original.id) ? EXPANDED_ESTIMATE : ROW_HEIGHT;
    },
    [rows, expandedRows]
  );

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize,
    overscan: 8,
  });

  return (
    <section className="mx-auto flex w-[1022px] min-w-[1022px] flex-none flex-col min-h-0 rounded-md p-6">
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-2xl font-bold">雅思词汇真经</h1>
        <button
          type="button"
          onClick={() => setChapter(vocabChapters[Math.floor(Math.random() * vocabChapters.length)]?.title ?? "")}
          className="grid size-8 shrink-0 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          title="随机章节"
        >
          <Shuffle className="size-4" />
        </button>
        <p className="text-sm text-muted-foreground">{activeChapter?.title} · {chapterWords.length} words</p>
      </div>

      <div ref={scrollRef} className="scrollbar-ghost rounded-md border border-border" style={{ height: "calc(100vh - 320px)" }}>
        <div style={{ minWidth: TABLE_CONTENT_WIDTH }}>
          <div className="sticky top-0 z-40 flex bg-background border-b border-border/50">
            <div className="flex min-w-0 flex-none" style={{ width: TABLE_CONTENT_WIDTH - SEARCH_HEADER_WIDTH }}>
              {table.getHeaderGroups().map((hg) =>
                hg.headers.map((header) => (
                  <div key={header.id} className="px-2 flex items-center text-sm font-medium text-muted-foreground tracking-wide uppercase truncate" style={{ width: header.getSize(), minWidth: header.getSize() }}>
                    {header.column.getCanSort() ? (
                      <button onClick={header.column.getToggleSortingHandler()} className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getIsSorted() === "asc" ? <ChevronUp className="size-3" /> : header.column.getIsSorted() === "desc" ? <ChevronDown className="size-3" /> : <ArrowUpDown className="size-3 opacity-30" />}
                      </button>
                    ) : (
                      flexRender(header.column.columnDef.header, header.getContext())
                    )}
                  </div>
                ))
              )}
            </div>
            <div className="flex w-[156px] flex-none items-center justify-end pr-2 pl-2">
              <InputGroup className="h-7 w-full rounded-md border-0 bg-transparent transition-all focus-within:border focus-within:border-border/60 focus-within:bg-[#ffffff] focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-border/60">
                <InputField
                  icon={Search}
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  placeholder="搜索..."
                  className="text-[11px] placeholder:text-muted-foreground/30"
                />
              </InputGroup>
            </div>

          </div>

          <div style={{ height: rowVirtualizer.getTotalSize(), position: "relative" }}>
            {rowVirtualizer.getVirtualItems().map((vRow) => {
              const row = rows[vRow.index];
              if (!row) return null;
              const word = row.original;
              const isExpanded = expandedRows.has(word.id);
              const COLORS = ["var(--vocab-color-0)","var(--vocab-color-1)","var(--vocab-color-2)","var(--vocab-color-3)","var(--vocab-color-4)"];
              const borderColor = COLORS[(word.colorIndex ?? 0) % COLORS.length];

              return (
                <div key={row.id} ref={rowVirtualizer.measureElement} data-index={vRow.index} style={{ position: "absolute", top: 0, left: 0, width: "100%", transform: `translateY(${vRow.start}px)`, boxShadow: `inset 4px 0 0 ${borderColor}, inset 0 -1px 0 rgba(0,0,0,0.06)` }}>
                  <div
                    onDoubleClick={() => toggleRow(word.id)}
                    className={`flex cursor-pointer transition-colors ${isExpanded ? "bg-muted/30" : "hover:bg-muted/30"}`}
                    style={{ height: ROW_HEIGHT, minHeight: ROW_HEIGHT }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <div key={cell.id} className="px-2 truncate flex items-center text-sm" style={{ width: cell.column.getSize(), minWidth: cell.column.getSize() }}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </div>
                    ))}
                  </div>

                  {isExpanded && (
                    <div className="bg-muted/10 px-5 py-4">
                      <div className="grid grid-cols-[80px_1fr] gap-x-4 gap-y-2 text-sm">
                        <span className="text-muted-foreground/50">词性</span>
                        <span className="text-muted-foreground">{word.partOfSpeech}</span>
                        <span className="text-muted-foreground/50">释义</span>
                        <span className="text-muted-foreground">{word.chinese}</span>
                        <span className="text-muted-foreground/50 self-start pt-0.5">例句</span>
                        <p className="text-muted-foreground italic leading-relaxed">{word.example}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
