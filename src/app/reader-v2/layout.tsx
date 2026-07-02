"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

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
    <div className="h-screen w-full overflow-hidden">
      <PanelGroup direction="horizontal" className="h-full w-full">
        <Panel defaultSize={20} minSize={10}>
          <aside className="h-full overflow-y-auto border-r border-border bg-muted/20 px-4 py-6">
            <h2 className="text-sm font-semibold mb-4">课文导航</h2>
            <p className="text-xs text-muted-foreground">加载中…</p>
          </aside>
        </Panel>

        <PanelResizeHandle className={pillHandle} />

        <Panel defaultSize={50} minSize={20}>
          <main className="h-full overflow-y-auto">
            {children}
          </main>
        </Panel>

        <PanelResizeHandle className={pillHandle} />

        <Panel defaultSize={30} minSize={15} maxSize={60}>
          <aside className="h-full overflow-y-auto bg-background p-4">
            <h2 className="text-sm font-semibold mb-4">笔记</h2>
            <p className="text-xs text-muted-foreground">加载中…</p>
          </aside>
        </Panel>
      </PanelGroup>
    </div>
  );
}
