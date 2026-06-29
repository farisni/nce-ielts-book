"use client";

import {
  IconBrandTabler,
  IconCommand,
  IconHome,
  IconMessage,
  IconSearch,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";

const links = [
  {
    label: "Dashboard",
    href: "#dashboard",
    icon: <IconHome className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Search",
    href: "#search",
    icon: <IconSearch className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Messages",
    href: "#messages",
    icon: <IconMessage className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Profile",
    href: "#profile",
    icon: <IconUser className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Settings",
    href: "#settings",
    icon: <IconSettings className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
];

export default function DemoMacosSidebarPage() {
  return (
    <main className="mx-auto min-h-[900px] w-[1022px] min-w-[1022px] flex-none rounded-md p-6">
      <h1 className="mb-6 text-xl font-semibold">Demo · MacOS Sidebar</h1>

      <div className="flex min-h-[560px] overflow-hidden rounded-xl border border-border bg-background">
        <Sidebar>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-hidden">
              <SidebarLink
                link={{
                  label: "Acet Labs",
                  href: "#home",
                  icon: <IconBrandTabler className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
                }}
                className="mb-8"
              />
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <SidebarLink key={link.href} link={link} />
                ))}
              </div>
            </div>

            <SidebarLink
              link={{
                label: "Command Center",
                href: "#command",
                icon: <IconCommand className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
              }}
            />
          </SidebarBody>
        </Sidebar>

        <section className="flex min-w-0 flex-1 flex-col gap-6 bg-muted/30 p-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-xs text-muted-foreground">Revenue</p>
              <p className="mt-2 text-2xl font-semibold">$42.8k</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-xs text-muted-foreground">Active users</p>
              <p className="mt-2 text-2xl font-semibold">12,480</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-xs text-muted-foreground">Tasks</p>
              <p className="mt-2 text-2xl font-semibold">86</p>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-[1.4fr_0.8fr] gap-4">
            <div className="rounded-lg border border-border bg-background p-5">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-sm font-medium">Activity</h2>
                <span className="text-xs text-muted-foreground">Today</span>
              </div>
              <div className="flex h-[300px] items-end gap-3">
                {[42, 70, 48, 86, 64, 92, 74, 56, 78, 88, 62, 96].map((height, index) => (
                  <div key={index} className="flex flex-1 items-end rounded-full bg-muted">
                    <div className="w-full rounded-full bg-foreground/80" style={{ height: `${height}%` }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-background p-5">
              <h2 className="mb-5 text-sm font-medium">Inbox</h2>
              <div className="flex flex-col gap-3">
                {["Design review", "Weekly sync", "Launch checklist", "Customer notes"].map((item) => (
                  <div key={item} className="rounded-md bg-muted/70 px-3 py-2 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}