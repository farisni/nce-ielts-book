"use client";

import { Suspense, type ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function OutlineContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hide = pathname === "/ielts" && !searchParams.get("article");

  if (hide) {
    return (
      <aside className="w-[260px] shrink-0 rounded-md p-4 flex items-center justify-center">
        <span className="text-xs text-muted-foreground">Outline 占位</span>
      </aside>
    );
  }

  return <>{children}</>;
}

export function OutlineWrapper({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <OutlineContent>{children}</OutlineContent>
    </Suspense>
  );
}
