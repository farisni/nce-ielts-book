"use client";

import { useRef, useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import type { ImperativePanelHandle } from "react-resizable-panels";
import { AnimatePresence, motion } from "motion/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AppSidebar } from "@/app/_components/app-sidebar";
import TopNav from "@/app/_components/top-nav";
import { NotebookTab } from "@/app/_components/reader/notebook-tab";
import { FloatAction } from "@/app/_components/float-action";
import { useReaderStore } from "@/stores/reader-store";

const pillHandle =
  "relative flex items-center justify-center bg-transparent cursor-col-resize flex-shrink-0 " +
  "before:pointer-events-none before:absolute before:top-1/2 before:left-1/2 before:z-10 " +
  "before:h-6 before:w-1 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full " +
  "before:bg-muted-foreground/25 before:transition-all before:duration-300 " +
  "before:ease-[cubic-bezier(0.32,0.72,0,1)] " +
  "hover:before:h-10 hover:before:bg-muted-foreground/40 " +
  "active:before:h-12 active:before:w-1.5 active:before:bg-primary";

export default function ReaderV2Layout({ children }: { children: React.ReactNode }) {
  const article = useReaderStore((s) => s.article);
  const isPanelOpen = useReaderStore((s) => s.isPanelOpen);
  const scrollToBlock = useReaderStore((s) => s.scrollToBlock);

  const notesPanelRef = useRef<ImperativePanelHandle>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
    notesPanelRef.current?.resize(isPanelOpen ? 30 : 0);
    const t = setTimeout(() => setTransitioning(false), 350);
    return () => clearTimeout(t);
  }, [isPanelOpen]);

  return (
    <div className="h-screen w-full overflow-hidden flex">
      <AppSidebar />

      <div className="flex-1 min-w-0">
        <PanelGroup direction="horizontal" className="h-full">
          <Panel defaultSize={70} minSize={40}>
            <div className="h-full flex flex-col relative">
              <TopNav />
              <main data-scroll-container className="flex-1 overflow-y-auto p-6">
                <div className="border border-dashed border-border rounded-xl p-6 min-h-full">
                  {children}
                </div>
              </main>
              <FloatAction className="absolute bottom-4 right-4 z-10" />
            </div>
          </Panel>

          {isPanelOpen && <PanelResizeHandle className={pillHandle} />}

          <Panel
            ref={notesPanelRef}
            defaultSize={0}
            minSize={0}
            maxSize={40}
            className={transitioning ? "transition-[flex] duration-300 ease-out" : ""}
          >
            <AnimatePresence>
              {isPanelOpen && (
                <motion.aside
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-full bg-background border-l border-border"
                >
                  <ScrollArea className="h-full" chevron={false} scrollFade={false}>
                    {article ? (
                      <NotebookTab article={article} onScrollToBlock={scrollToBlock} />
                    ) : (
                      <div className="p-4 text-xs text-muted-foreground">加载中…</div>
                    )}
                  </ScrollArea>
                </motion.aside>
              )}
            </AnimatePresence>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}
