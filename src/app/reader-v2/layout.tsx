"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { AppSidebar } from "@/app/_components/app-sidebar";

const pillHandle =
  "relative flex items-center justify-center bg-transparent cursor-col-resize flex-shrink-0 " +
  "before:pointer-events-none before:absolute before:top-1/2 before:left-1/2 before:z-10 " +
  "before:h-6 before:w-1 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full " +
  "before:bg-muted-foreground/25 before:transition-all before:duration-300 " +
  "before:ease-[cubic-bezier(0.32,0.72,0,1)] " +
  "hover:before:h-10 hover:before:bg-muted-foreground/40 " +
  "active:before:h-12 active:before:w-1.5 active:before:bg-primary";

export default function ReaderV2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full overflow-hidden flex">
      <AppSidebar />

      <PanelGroup direction="horizontal" className="h-full flex-1">
        <Panel defaultSize={70} minSize={60}>
          <main className="h-full overflow-y-auto p-6">
            <div className="max-w-[750px] mx-auto border border-dashed border-border rounded-xl p-6">
              {children}
            </div>
          </main>
        </Panel>

        <PanelResizeHandle className={pillHandle} />

        <Panel defaultSize={30} minSize={15} maxSize={40}>
          <aside className="h-full overflow-y-auto bg-background p-4">
            <h2 className="text-sm font-semibold mb-4">笔记</h2>
            <p className="text-xs text-muted-foreground">加载中…</p>
          </aside>
        </Panel>
      </PanelGroup>
    </div>
  );
}
