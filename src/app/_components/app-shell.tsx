"use client";

import React from "react";
import { AppSidebar } from "@/app/_components/app-sidebar";
import TopNav from "@/app/_components/top-nav";
import { ScrollProgress } from "@/components/scroll-progress";

export function AppShell({ children }: { children: React.ReactNode }) {
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
      </div>
    </div>
  );
}
