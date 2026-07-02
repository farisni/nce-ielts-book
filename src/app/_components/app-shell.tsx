"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { usePanelRef } from "react-resizable-panels";
import { AppSidebar } from "@/app/_components/app-sidebar";
import TopNav from "@/app/_components/top-nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { InspectorPanel } from "@/app/_components/reader/inspector-panel";
import { useReaderStore } from "@/stores/reader-store";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isReaderPage = pathname.startsWith("/reader/");
  const isPanelOpen = useReaderStore((s) => s.isPanelOpen);
  const article = useReaderStore((s) => s.article);
  const scrollToBlock = useReaderStore((s) => s.scrollToBlock);
  const panelRef = usePanelRef();
  const collapseTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || !isReaderPage) return;

    if (collapseTimer.current) {
      clearTimeout(collapseTimer.current);
      collapseTimer.current = null;
    }

    if (isPanelOpen) {
      panel.expand();
    } else {
      // Delay collapse to let exit animation play
      collapseTimer.current = setTimeout(() => {
        panel.collapse();
      }, 250);
    }

    return () => {
      if (collapseTimer.current) {
        clearTimeout(collapseTimer.current);
      }
    };
  }, [isPanelOpen, isReaderPage]);

  const showPanel = isReaderPage;

  return (
    <div data-section="app-shell" className="flex h-svh w-full">
      <AppSidebar />

      <ResizablePanelGroup orientation="horizontal" className="flex-1 min-w-0">
        <ResizablePanel defaultSize={70} minSize={35} className="relative">
          <div
            data-section="right-shell"
            className="absolute inset-0 flex min-w-0 flex-col gap-6 pb-6 overflow-hidden"
          >
            <TopNav />
            <ScrollProgress inline className="top-14 -mt-6 mb-0" />
            <main
              data-section="main-content"
              className="min-w-0 flex-1 px-6 overflow-hidden"
            >
              {children}
            </main>
          </div>
        </ResizablePanel>

        {showPanel ? (
          <>
            <ResizableHandle withHandle />
            <ResizablePanel
              panelRef={panelRef}
              defaultSize={38}
              minSize={20}
              maxSize="500px"
              collapsible
              collapsedSize={0}
              className="relative"
            >
              <div className="absolute inset-0 overflow-hidden">
                <AnimatePresence>
                  {isPanelOpen && article ? (
                    <motion.div
                      key="inspector-content"
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 60, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="h-full"
                    >
                      <InspectorPanel
                        article={article}
                        onScrollToBlock={scrollToBlock}
                      />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </ResizablePanel>
          </>
        ) : null}
      </ResizablePanelGroup>
    </div>
  );
}
