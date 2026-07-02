"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function SidebarResizableDemo() {
  return (
    <section className="mx-auto max-w-6xl rounded-xl border-2 border-dashed border-border px-6 py-16">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Resizable · Sidebar</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          官网最小演示 — 拖拽分隔线调整面板尺寸
        </p>
      </div>

      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[600px] w-full rounded-lg border border-border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold text-sm">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={35}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold text-sm">Header</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={65}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold text-sm">Content</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>
  );
}
