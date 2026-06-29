"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import type { VocabItem } from "@/app/mock/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type NcexVocabularyTableProps = {
  vocabulary: VocabItem[];
};

export function NcexVocabularyTable({ vocabulary }: NcexVocabularyTableProps) {
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? vocabulary.filter((item) => {
        const q = search.toLowerCase();
        return (
          item.word.toLowerCase().includes(q) ||
          item.meaning.toLowerCase().includes(q) ||
          item.pos.toLowerCase().includes(q)
        );
      })
    : vocabulary;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 rounded-md px-2 py-1.5">
        <Search className="size-3.5 text-muted-foreground shrink-0" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="搜索单词..."
          className="w-full bg-transparent text-xs placeholder:text-muted-foreground/50 outline-none"
        />
      </div>

      <Table containerClassName="max-h-[420px] overflow-y-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-8 text-xs text-muted-foreground">#</TableHead>
            <TableHead className="text-xs">单词</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.length === 0 ? (
            <TableRow>
              <TableCell colSpan={2} className="text-center text-xs text-muted-foreground py-6">
                无匹配词汇
              </TableCell>
            </TableRow>
          ) : (
            filtered.map((item, index) => (
              <TableRow key={`${item.word}-${item.pos}-${item.meaning}-${vocabulary.indexOf(item)}`} className="group">
                <TableCell className="w-8 text-xs text-muted-foreground/60 align-top pt-2">
                  {index + 1}
                </TableCell>
                <TableCell className="py-1.5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-foreground">
                      {item.word}
                    </span>
                    <span className="text-[0.7rem] text-muted-foreground/60 leading-tight">
                      {item.phonetic && item.phonetic !== "//" ? `${item.phonetic} ` : ""}
                      {item.pos}
                    </span>
                    <span className="text-xs text-muted-foreground leading-snug">
                      {item.meaning}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
