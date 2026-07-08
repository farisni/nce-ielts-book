"use client";

import { NotebookPen } from "lucide-react";

type Props = {
  title?: string;
  titleCn?: string;
};

export function NotebookPlaceholder({ title, titleCn }: Props) {
  return (
    <div className="notebook-container w-full min-h-[600px] rounded-lg border border-dashed border-zinc-300 p-8 flex flex-col items-center justify-center">
      <NotebookPen className="size-12 text-muted-foreground/20 mb-4" />
      {title ? (
        <p className="text-4xl font-semibold tracking-normal text-muted-foreground/60">{title}</p>
      ) : (
        <p className="text-lg text-muted-foreground/60">笔记区域</p>
      )}
      {titleCn && (
        <p className="text-xl text-muted-foreground/40 mt-1">{titleCn}</p>
      )}
    </div>
  );
}
