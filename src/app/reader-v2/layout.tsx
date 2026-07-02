"use client";

import { useRef, useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import type { ImperativePanelHandle } from "react-resizable-panels";
import { AnimatePresence, motion } from "motion/react";
import { PanelRightOpen, PanelRightClose } from "lucide-react";
import { AppSidebar } from "@/app/_components/app-sidebar";
import TopNav from "@/app/_components/top-nav";
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
  const togglePanel = useReaderStore((s) => s.togglePanel);
  const setSelectedBlockId = useReaderStore((s) => s.setSelectedBlockId);
  const scrollToBlock = useReaderStore((s) => s.scrollToBlock);

  const notesPanelRef = useRef<ImperativePanelHandle>(null);

  useEffect(() => {
    notesPanelRef.current?.resize(isPanelOpen ? 30 : 0);
  }, [isPanelOpen]);

  const handleToggle = () => {
    if (isPanelOpen) setSelectedBlockId(null);
    togglePanel();
  };

  return (
    <div className="h-screen w-full overflow-hidden flex">
      <AppSidebar />

      <div className="flex-1 min-w-0">
        <PanelGroup direction="horizontal" className="h-full">
          <Panel defaultSize={70} minSize={40}>
            <div className="h-full flex flex-col">
              <div className="flex items-center shrink-0">
                <div className="flex-1 min-w-0">
                  <TopNav />
                </div>
                <button
                  type="button"
                  onClick={handleToggle}
                  className="size-8 flex items-center justify-center rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors mr-2"
                  title={isPanelOpen ? "收起笔记" : "展开笔记"}
                >
                  {isPanelOpen ? (
                    <PanelRightClose className="size-4" />
                  ) : (
                    <PanelRightOpen className="size-4" />
                  )}
                </button>
              </div>
              <main data-scroll-container className="flex-1 overflow-y-auto p-6">
                <div className="border border-dashed border-border rounded-xl p-6 min-h-full">
                  {children}
                </div>
              </main>
            </div>
          </Panel>

          {isPanelOpen && <PanelResizeHandle className={pillHandle} />}

          <Panel
            ref={notesPanelRef}
            defaultSize={0}
            minSize={0}
            maxSize={40}
            className="transition-[flex] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          >
            <AnimatePresence>
              {isPanelOpen && (
                <motion.aside
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-full overflow-y-auto bg-background border-l border-border"
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
    </div>
  );
}
