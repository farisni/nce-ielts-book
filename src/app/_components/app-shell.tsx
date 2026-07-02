"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { AppSidebar } from "@/app/_components/app-sidebar";
import TopNav from "@/app/_components/top-nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { InspectorPanel } from "@/app/_components/reader/inspector-panel";
import { useReaderStore } from "@/stores/reader-store";

const PANEL_MAX_WIDTH = 500;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isReaderPage = pathname.startsWith("/reader/");
  const isPanelOpen = useReaderStore((s) => s.isPanelOpen);
  const article = useReaderStore((s) => s.article);
  const scrollToBlock = useReaderStore((s) => s.scrollToBlock);

  return (
    <div data-section="app-shell" className="flex h-svh w-full">
      <AppSidebar />

      <div className="flex-1 min-w-0 flex h-full">
        <div className="flex-1 min-w-0 flex flex-col gap-6 pb-6 overflow-hidden">
          <TopNav />
          <ScrollProgress inline className="top-14 -mt-6 mb-0" />
          <main data-section="main-content" className="min-w-0 flex-1 px-6 overflow-hidden">
            {children}
          </main>
        </div>

        <AnimatePresence>
          {isReaderPage && isPanelOpen && article && (
            <motion.aside
              key="inspector-panel"
              initial={{ width: 0 }}
              animate={{ width: PANEL_MAX_WIDTH }}
              exit={{ width: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="overflow-hidden border-l border-border bg-background flex-shrink-0"
            >
              <div style={{ width: PANEL_MAX_WIDTH }} className="h-full">
                <InspectorPanel article={article} onScrollToBlock={scrollToBlock} />
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
