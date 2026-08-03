"use client";

import { useRef, useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import type { ImperativePanelHandle } from "react-resizable-panels";
import { motion } from "motion/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AppSidebar } from "@/app/_components/app-sidebar";
import TopNav from "@/app/_components/top-nav";
import { NotebookTab } from "@/app/_components/reader/notebook-tab";
import { FloatAction } from "@/app/_components/float-action";
import { ScrollProgress } from "@/components/scroll-progress";
import { useReaderStore } from "@/stores/reader-store";
import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

const pillHandle =
  "relative flex items-center justify-center bg-transparent cursor-col-resize flex-shrink-0 " +
  "before:pointer-events-none before:absolute before:top-1/2 before:left-1/2 before:z-10 " +
  "before:h-6 before:w-1 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full " +
  "before:bg-muted-foreground/25 before:transition-all before:duration-300 " +
  "before:ease-[cubic-bezier(0.32,0.72,0,1)] " +
  "hover:before:h-10 hover:before:bg-muted-foreground/40 " +
  "active:before:h-12 active:before:w-1.5 active:before:bg-primary";

export function RootLayoutShell({ children }: { children: React.ReactNode }) {
  const article = useReaderStore((s) => s.article);
  const isPanelOpen = useReaderStore((s) => s.isPanelOpen);
  const searchParams = useSearchParams();
  const isArticlePage = searchParams.has("article");
  const isNce3Article = isArticlePage && article?.level === "NCE3";
  const shouldShowNotesPanel = isArticlePage && isPanelOpen;
  const panelSize = isNce3Article ? 45 : isArticlePage ? 30 : 0;
  const togglePanel = useReaderStore((s) => s.togglePanel);
  const scrollToBlock = useReaderStore((s) => s.scrollToBlock);

  const notesPanelRef = useRef<ImperativePanelHandle>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const [transitioning, setTransitioning] = useState(false);
  const lastActiveBlockRef = useRef<string | null>(null);

  useEffect(() => {
    setTransitioning(true);
    notesPanelRef.current?.resize(
      isPanelOpen ? panelSize : 0,
    );
    const t = setTimeout(() => setTransitioning(false), 350);
    return () => clearTimeout(t);
  }, [panelSize, isPanelOpen]);

  const openedArticleRef = useRef<string | null>(null);
  useEffect(() => {
    if (!isArticlePage || !isNce3Article) {
      openedArticleRef.current = null;
      return;
    }

    if (openedArticleRef.current === null) {
      useReaderStore.setState({ isPanelOpen: true });
    }
    openedArticleRef.current = article?.id ?? "nce3";
  }, [article?.id, isArticlePage, isNce3Article]);

  // 笔记面板：Tab+Q / top-nav 打开时，滚动到上次激活的 block
  useEffect(() => {
    if (!isPanelOpen) return;
    const timer = setTimeout(() => {
      const store = useReaderStore.getState();
      if (store.openedByBlockId) return;  // 已有关联 block（面板关闭时保留的），notebook-tab 负责恢复
      // 首次打开：优先面板内上次激活的 block，兜底语法高亮选中的句子
      const blockId = lastActiveBlockRef.current || store.activeBlockId;
      if (blockId) {
        useReaderStore.setState({ openedByBlockId: blockId });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [isPanelOpen]);

  // 跟踪上次激活的 block（仅在面板打开时记录，避免面板关闭时语法高亮切换污染）
  useEffect(() => {
    const unsub = useReaderStore.subscribe((state) => {
      if (state.activeBlockId && state.isPanelOpen) lastActiveBlockRef.current = state.activeBlockId;
    });
    return unsub;
  }, []);

  // Tab+Q 快捷键切换笔记面板
  const tabHeld = useRef(false);
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        tabHeld.current = true;
        return;
      }
      if (tabHeld.current && (e.key === 'q' || e.key === 'Q')) {
        e.preventDefault();
        togglePanel();
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        tabHeld.current = false;
      }
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [togglePanel]);

  return (
    <div className="h-screen w-full overflow-hidden flex">
      <AppSidebar />

      <div className="min-h-0 flex-1 min-w-0 overflow-hidden">
        <PanelGroup direction="horizontal" className="h-full min-h-0 overflow-hidden">
          <Panel defaultSize={55} minSize={40} className="min-h-0 overflow-hidden">
            <div className="relative flex h-full min-h-0 flex-col overflow-hidden">
              <TopNav />
              <ScrollProgress containerRef={mainRef} className="top-14 -mt-6 mb-0" inline />
              <main ref={mainRef} data-scroll-container data-section="main-content" className="relative min-h-0 flex-1 overflow-y-auto p-6">
                <div className="p-6 min-h-full">
                  {children}
                </div>
              </main>
              <FloatAction className="absolute bottom-6 right-6 z-50" />
            </div>
          </Panel>

          <PanelResizeHandle className={shouldShowNotesPanel ? pillHandle : "hidden"} />

          <Panel
            ref={notesPanelRef}
            defaultSize={45}
            minSize={0}
            maxSize={60}
            className={transitioning ? "min-h-0 overflow-hidden transition-[flex] duration-300 ease-out" : "min-h-0 overflow-hidden"}
          >
            <motion.aside
              initial={false}
              animate={{ opacity: shouldShowNotesPanel ? 1 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="h-full min-h-0 overflow-hidden bg-sidebar border-l border-border"
            >
              <ScrollArea className="h-full" chevron={false} scrollFade={false} viewportClassName="notes-panel-viewport [overflow-anchor:none]">
                {article ? (
                  <NotebookTab article={article} onScrollToBlock={scrollToBlock} />
                ) : (
                  <div className="p-4 text-xs text-muted-foreground">加载中…</div>
                )}
              </ScrollArea>
            </motion.aside>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}
