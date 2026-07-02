"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { AnimatePresence, motion } from "motion/react";
import { AppSidebar } from "@/app/_components/app-sidebar";
import { NotebookTab } from "@/app/_components/reader/notebook-tab";
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

  return (
    <div className="h-screen w-full overflow-hidden flex">
      <AppSidebar />

      <PanelGroup direction="horizontal" className="h-full flex-1">
        <Panel defaultSize={70} minSize={60}>
          <main data-scroll-container className="h-full overflow-y-auto p-6">
            <div className="border border-dashed border-border rounded-xl p-6 min-h-full">
              {children}
            </div>
          </main>
        </Panel>

        {isPanelOpen && <PanelResizeHandle className={pillHandle} />}

        <Panel defaultSize={isPanelOpen ? 30 : 0} minSize={0} maxSize={isPanelOpen ? 40 : 0}>
          <AnimatePresence>
            {isPanelOpen && (
              <motion.aside
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="h-full overflow-y-auto bg-background"
              >
                {article ? (
                  <NotebookTab article={article} onScrollToBlock={scrollToBlock} />
                ) : (
                  <div className="p-4 text-xs text-muted-foreground">加载中…</div>
                )}
              </motion.aside>
            )}
          </AnimatePresence>
        </Panel>
      </PanelGroup>
    </div>
  );
}
