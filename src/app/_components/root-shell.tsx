"use client";

import { usePathname } from "next/navigation";
import { AppShell } from "@/app/_components/app-shell";

export function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // reader-v2 路由使用独立布局，不包裹 AppShell
  if (pathname.startsWith("/v2")) {
    return <>{children}</>;
  }

  return <AppShell>{children}</AppShell>;
}
