"use client";

import { NotebookPen } from "lucide-react";

export function NotebookPlaceholder() {
  return (
    <div className="notebook-container w-full min-h-[600px] rounded-lg border border-dashed border-zinc-300 p-8 flex flex-col items-center justify-center">
      <NotebookPen className="size-12 text-muted-foreground/20 mb-4" />
      <p className="text-lg text-muted-foreground/60">笔记区域</p>
      <p className="text-sm text-muted-foreground/40 mt-1">选择左侧句子，在此创建你的语法笔记</p>
    </div>
  );
}
