"use client";

import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ArticleReader } from "./reader/article-reader";
import { InspectorPanel } from "./reader/inspector-panel";
import { useReaderStore } from "@/stores/reader-store";
import type { Article } from "@/app/mock";

type Props = {
  article: Article;
};

export function ReaderPage({ article }: Props) {
  const scrollToBlock = useReaderStore((s) => s.scrollToBlock);
  const isPanelOpen = useReaderStore((s) => s.isPanelOpen);

  return (
    <div className="-mx-6 -mb-6 h-full">
      <ResizablePanelGroup
        key={isPanelOpen ? "open" : "closed"}
        orientation="horizontal"
        className="h-full"
      >
        <ResizablePanel defaultSize={isPanelOpen ? 70 : 100} minSize={35}>
          <ArticleReader article={article} />
        </ResizablePanel>

        {isPanelOpen ? (
          <ResizableHandle withHandle />
        ) : null}

        {isPanelOpen ? (
          <ResizablePanel defaultSize={30} minSize={25}>
            <InspectorPanel article={article} onScrollToBlock={scrollToBlock} />
          </ResizablePanel>
        ) : null}
      </ResizablePanelGroup>
    </div>
  );
}
