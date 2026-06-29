"use client";

import React, { useState, useCallback, useMemo, useRef, useEffect } from "react";
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
import { ChevronDown, ChevronUp, Search, ArrowUpDown } from "lucide-react";
import { InputGroup, InputField } from '@/components/ui/input-group';

type Word = {
  id: number;
  word: string;
  phonetic: string;
  pos: string;
  meaning: string;
  example: string;
  synonyms: string[];
  examples: string[];
};

const MOCK_WORDS: Word[] = Array.from({ length: 500 }, (_, i) => ({
  id: i + 1,
  word: ["abandon", "abstract", "academy", "access", "accommodate", "accompany", "accomplish", "accord", "account", "accumulate"][i % 10] + (i >= 10 ? `_${Math.floor(i / 10)}` : ""),
  phonetic: ["/əˈbændən/", "/ˈæbstrækt/", "/əˈkædəmi/", "/ˈækses/", "/əˈkɒmədeɪt/", "/əˈkʌmpəni/", "/əˈkɒmplɪʃ/", "/əˈkɔːd/", "/əˈkaʊnt/", "/əˈkjuːmjəleɪt/"][i % 10],
  pos: ["v.", "adj. / n.", "n.", "n. / v.", "v.", "v.", "v.", "n. / v.", "n. / v.", "v."][i % 10],
  meaning: ["放弃；抛弃", "抽象的；摘要", "学院；学会", "进入；通道", "容纳；适应", "陪伴；伴随", "完成；实现", "一致；协议", "账户；解释", "积累；积聚"][i % 10],
  example: [
    "They had to abandon the plan due to lack of funding.",
    "The concept is too abstract for most people to grasp.",
    "He was admitted to the Royal Academy of Arts.",
    "Students have access to the library 24 hours a day.",
    "The hotel can accommodate up to 500 guests.",
    "She accompanied her friend to the airport.",
    "We have accomplished all goals for this quarter.",
    "His actions do not accord with his words.",
    "Please give a detailed account of the incident.",
    "Over the years, she accumulated a vast collection.",
  ][i % 10],
  synonyms: [
    ["desert", "forsake", "relinquish"],
    ["theoretical", "conceptual", "intangible"],
    ["institute", "college", "conservatory"],
    ["entry", "admission", "entrance"],
    ["house", "shelter", "adjust"],
    ["escort", "attend", "chaperone"],
    ["achieve", "attain", "fulfill"],
    ["agreement", "harmony", "conformity"],
    ["report", "narrative", "explanation"],
    ["amass", "gather", "compile"],
  ][i % 10],
  examples: [
    ["Many animals abandon their young if they sense danger.", "The crew had no choice but to abandon ship."],
    ["Abstract art can be challenging to interpret.", "Please submit an abstract of your research paper."],
    ["The academy offers a wide range of courses.", "He was honored by the National Academy of Sciences."],
    ["Only authorized personnel have access to this area.", "The internet provides access to vast information."],
    ["The new stadium can accommodate 80,000 spectators.", "We try to accommodate all dietary requirements."],
    ["Lightning often accompanies heavy rain.", "He accompanied the singer on the piano."],
    ["She accomplished more in one year than most do in a lifetime.", "The mission was accomplished without any casualties."],
    ["The two sides reached an accord after lengthy negotiations.", "Her version does not accord with the evidence."],
    ["I need to settle my account before leaving.", "How do you account for the missing funds?"],
    ["Snow accumulated on the ground throughout the night.", "He accumulated enough points to win the award."],
  ][i % 10],
}));

const ROW_HEIGHT = 44;
const EXPANDED_ESTIMATE = 200;

const columnHelper = createColumnHelper<Word>();

export default function DemoPage() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleRow = useCallback((id: number) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", { header: "#", cell: (info) => <span className="text-muted-foreground/50 text-xs">{info.getValue()}</span>, size: 48, enableSorting: false }),
      columnHelper.accessor("word", { header: "单词", cell: (info) => <span className="font-medium">{info.getValue()}</span>, size: 140 }),
      columnHelper.accessor("meaning", { header: "释义", cell: (info) => <span className="text-muted-foreground">{info.getValue()}</span>, size: 160 }),
      columnHelper.accessor("pos", { header: "词性", cell: (info) => <span className="text-muted-foreground text-xs">{info.getValue()}</span>, size: 100 }),
      columnHelper.accessor("example", { header: "例句", cell: (info) => <span className="text-muted-foreground italic text-xs truncate block max-w-full">{info.getValue()}</span>, enableSorting: false, size: 400 }),
    ],
    []
  );

  const table = useReactTable({
    data: MOCK_WORDS,
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
    <section className="mx-auto flex w-[1022px] min-w-[1022px] flex-none flex-col rounded-md p-6">
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-2xl font-bold">🧪 Demo · Table</h1>
      </div>

      <div
        ref={scrollRef}
        className="scrollbar-ghost rounded-md"
        style={{ height: "calc(100vh - 350px)" }}
      >
        <div className="min-w-[848px]">
          <div className="sticky top-0 z-40 flex bg-background border-b border-border/60" style={{ height: 44 }}>
            {table.getHeaderGroups().map((hg) =>
              hg.headers.map((header) => (
                <div
                  key={header.id}
                  className="px-2 flex items-center text-sm font-medium text-muted-foreground tracking-wide uppercase truncate"
                  style={{ width: header.getSize(), minWidth: header.getSize() }}
                >
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
            <div className="ml-auto shrink-0 flex items-center pr-2">
              <InputGroup className="h-7 w-36 rounded-md border-0 bg-transparent transition-all focus-within:border focus-within:border-border/60 focus-within:bg-[#ffffff] focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-border/60">
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

              return (
                <div
                  key={row.id}
                  ref={rowVirtualizer.measureElement}
                  data-index={vRow.index}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", transform: `translateY(${vRow.start}px)` }}
                >
                  <div
                    onDoubleClick={() => toggleRow(word.id)}
                    className={`flex cursor-pointer border-b border-border/20 transition-colors ${isExpanded ? "bg-muted/30" : "hover:bg-muted/20"}`}
                    style={{ height: ROW_HEIGHT, minHeight: ROW_HEIGHT }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <div key={cell.id} className="px-2 truncate flex items-center text-sm" style={{ width: cell.column.getSize(), minWidth: cell.column.getSize() }}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </div>
                    ))}
                    <div className="flex items-center justify-center w-8 shrink-0 text-muted-foreground/30">
                      {isExpanded ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-b border-border/20 bg-muted/10 px-4 py-3">
                      <div className="grid grid-cols-[80px_1fr] gap-x-4 gap-y-1 text-xs">
                        <span className="text-muted-foreground/50">音标</span>
                        <span className="text-muted-foreground font-mono">{word.phonetic}</span>
                        <span className="text-muted-foreground/50">近义词</span>
                        <div className="flex flex-wrap gap-1">
                          {word.synonyms.map((s) => (<span key={s} className="inline-block rounded border border-border/60 px-1.5 py-px text-[0.65rem] text-muted-foreground bg-background">{s}</span>))}
                        </div>
                        <span className="text-muted-foreground/50 self-start pt-0.5">更多例句</span>
                        <div className="flex flex-col gap-0.5">
                          {word.examples.map((ex, i) => (<p key={i} className="text-muted-foreground italic leading-relaxed">{ex}</p>))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground/50 mt-2">
        {rows.length} 行 · 双击展开 · 点击表头排序 · 搜索实时过滤 · 虚拟滚动
      </p>
    </section>
  );
}
