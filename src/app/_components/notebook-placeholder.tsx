"use client";

import { NotebookPen } from "lucide-react";

export function NotebookPlaceholder() {
  return (
    <section className="w-full min-h-[600px] rounded-lg border border-dashed border-zinc-300 p-8 flex flex-col items-center justify-center">
      <NotebookPen className="size-12 text-muted-foreground/20 mb-4" />
      <p className="text-lg text-muted-foreground/60">笔记区域</p>
      <p className="text-sm text-muted-foreground/40 mt-1">在这里记录你的学习笔记</p>
    </section>
  );
}
