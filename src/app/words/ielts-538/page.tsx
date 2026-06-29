"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { Search, ArrowUpDown, ChevronUp, ChevronDown } from "lucide-react";
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
import { cn } from "@/lib/utils";
import { InputGroup, InputField } from "@/components/ui/input-group";
import { RoughHighlight } from "@/components/rough-annotate";
import { keywordCategories, type Keyword } from "@/app/mock/ielts-538-vocabulary";

type VocabRow = Keyword & { id: string; category: string };

const ROW_HEIGHT = 44;
const SEARCH_HEADER_WIDTH = 156;
const TABLE_CONTENT_WIDTH = 940;

const allRows: VocabRow[] = keywordCategories.flatMap((cat) =>
  cat.words.map((w, i) => ({ ...w, id: `${cat.title}-${i}`, category: cat.title }))
);

const columnHelper = createColumnHelper<VocabRow>();

export default function Ielts538Page() {
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const category = keywordCategories[categoryIdx];

  const rows = useMemo(() => {
    const base = categoryIdx === 0
      ? allRows.filter((r) => r.category === category.title)
      : allRows;
    return base;
  }, [categoryIdx, category.title]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("word", { header: "单词", cell: (info) => <span className="font-medium text-[17px]">{info.getValue()}</span>, size: 156 }),
      columnHelper.accessor("pos", { header: "词性", cell: (info) => <span className="text-xs text-muted-foreground/60">{info.getValue()}</span>, size: 68 }),
      columnHelper.accessor("meaning", { header: "释义", cell: (info) => <span className="text-sm text-muted-foreground">{info.getValue()}</span>, size: 250, enableSorting: false }),
      columnHelper.accessor("synonyms", { header: "同义替换", cell: (info) => <span className="text-xs text-muted-foreground">{info.getValue()}</span>, size: 240, enableSorting: false }),
      columnHelper.accessor("notes", { header: "注释", cell: (info) => <span className="text-xs text-muted-foreground">{info.getValue()}</span>, size: 70, enableSorting: false }),
    ],
    []
  );

  const table = useReactTable({
    data: rows,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const tableRows = table.getRowModel().rows;
  const scrollRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: tableRows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: (index) => (expandedRows.has(index) ? ROW_HEIGHT + 120 : ROW_HEIGHT),
    overscan: 15,
  });

  const toggleRow = useCallback((index: number) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      rowVirtualizer.measure();
      return next;
    });
  }, [rowVirtualizer]);

  return (
    <section className="mx-auto flex w-[1022px] min-w-[1022px] flex-none flex-col min-h-0 rounded-md p-6">
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-2xl font-bold">538 考点词</h1>
        <span className="text-sm text-muted-foreground">{rows.length} words</span>

        <div className="flex flex-wrap gap-2 ml-4">
          {keywordCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => { setCategoryIdx(i); setGlobalFilter(""); }}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                i === categoryIdx
                  ? "bg-foreground text-background border-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-3 text-sm text-muted-foreground">
        {keywordCategories[categoryIdx]?.description}
      </p>

      <div ref={scrollRef} className="scrollbar-ghost rounded-md" style={{ height: "calc(100vh - 340px)" }}>
        <div style={{ minWidth: TABLE_CONTENT_WIDTH }}>
          <div className="sticky top-0 z-40 flex bg-background border-b border-border/50" style={{ height: 44 }}>
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
              const row = tableRows[vRow.index];
              if (!row) return null;
              const word = row.original;
              const isExpanded = expandedRows.has(vRow.index);

              return (
                <div
                  key={row.id}
                  ref={rowVirtualizer.measureElement}
                  data-index={vRow.index}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", transform: `translateY(${vRow.start}px)`, boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.06)" }}
                >
                  <div
                    onDoubleClick={() => toggleRow(vRow.index)}
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
                    <div className="bg-muted/10 px-4 py-3">
                      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5">
                        <span className="text-xs text-muted-foreground">单词</span>
                        <span className="text-sm font-medium">{word.word}</span>
                        <span className="text-xs text-muted-foreground">词性</span>
                        <span className="text-sm text-muted-foreground">{word.pos}</span>
                        <span className="text-xs text-muted-foreground">释义</span>
                        <span className="text-sm text-muted-foreground">{word.meaning}</span>
                        <span className="text-xs text-muted-foreground">同义替换</span>
                        <span className="text-sm text-muted-foreground">{word.synonyms}</span>
                        {word.notes && (
                          <>
                            <span className="text-xs text-muted-foreground">注释</span>
                            <span className="text-sm text-muted-foreground">{word.notes}</span>
                          </>
                        )}
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
