"use client";

import { useState, type ReactNode } from "react";
import {
  BookMarked,
  BookOpen,
  Braces,
  ChevronDown,
  FileText,
  Globe,
  Library,
  MousePointerClick,
  PanelLeft,
  Rows3,
  Sparkles,
  Table2,
  Play } from "lucide-react";
import { Sidebar, SidebarBody, SidebarLink, useSidebar } from "@/components/ui/sidebar";
import { motion } from "motion/react";

const courseItems = [
  {
    label: "NCE2",
    href: "/nec/nce2",
    icon: <BookOpen className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "NCE3",
    href: "/nec/nce3",
    icon: <BookMarked className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "NCE4",
    href: "/nec/nce4",
    icon: <Library className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
];

const ieltsItems = [
  {
    label: "IELTS 16",
    href: "/ielts",
    icon: <Globe className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "雅思词汇真经",
    href: "/words/ielts-all",
    icon: <Rows3 className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "538 考点词",
    href: "/words/ielts-538",
    icon: <Sparkles className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
];

const nceWordItems = [
  {
    label: "NCE2 单词",
    href: "/words/nce/nce2",
    icon: <BookOpen className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "NCE3 单词",
    href: "/words/nce/nce3",
    icon: <BookMarked className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "NCE4 单词",
    href: "/words/nce/nce4",
    icon: <Library className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
];


const tedItems = [
  {
    label: "TED · 学一门外语的秘密",
    href: "/ted/ted-demo",
    icon: <Play className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
];

const demoItems = [
  {
    label: "Demo · Table",
    href: "/demo/table",
    icon: <Table2 className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Grammar 语法解析",
    href: "/demo/grammar",
    icon: <FileText className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Markdown 演示",
    href: "/demo/markdown",
    icon: <FileText className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "NCE4 L48 · 课文",
    href: "/demo/nce4-l48",
    icon: <BookMarked className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Demo · Syntax 依存关系",
    href: "/demo/syntax",
    icon: <Braces className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Demo · Button",
    href: "/demo/button",
    icon: <MousePointerClick className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Demo · Select",
    href: "/demo/select",
    icon: <ChevronDown className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Demo · MacOS Sidebar",
    href: "/demo/macos-sidebar",
    icon: <PanelLeft className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Demo · Scroll Table",
    href: "/demo/scroll-table",
    icon: <Table2 className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Demo · Elevated",
    href: "/demo/elevated",
    icon: <Braces className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Demo · Elevated Role",
    href: "/demo/elevated-role",
    icon: <Braces className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Demo · Sidebar Resizable",
    href: "/demo/sidebar-resizable",
    icon: <PanelLeft className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Demo · Scroll Reveal",
    href: "/demo/scroll-reveal",
    icon: <Braces className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Demo · Sticky Scroll",
    href: "/demo/sticky-scroll",
    icon: <Braces className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
  {
    label: "Demo · React LRC",
    href: "/demo/react-lrc",
    icon: <Braces className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
  },
];

function SidebarSection({ title, children }: { title: string; children: ReactNode }) {
  const { open, animate } = useSidebar();

  return (
    <div className="flex flex-col gap-1">
      <motion.div
        animate={{
          display: animate ? (open ? "block" : "none") : "block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="px-2 pt-3 text-[11px] font-medium uppercase tracking-normal text-neutral-400"
      >
        {title}
      </motion.div>
      {children}
    </div>
  );
}

function CollapsibleSidebarGroup({
  label,
  icon,
  items,
}: {
  label: string;
  icon: ReactNode;
  items: typeof demoItems;
}) {
  const [expanded, setExpanded] = useState(false);
  const { open, animate } = useSidebar();

  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="group/sidebar flex items-center justify-start gap-2 py-2 text-left"
      >
        {icon}
        <motion.span
          animate={{
            display: animate ? (open ? "inline-block" : "none") : "inline-block",
            opacity: animate ? (open ? 1 : 0) : 1,
          }}
          className="min-w-0 flex-1 whitespace-pre text-sm text-neutral-700 transition duration-150 group-hover/sidebar:translate-x-1 dark:text-neutral-200"
        >
          {label}
        </motion.span>
        <motion.span
          animate={{
            display: animate ? (open ? "inline-flex" : "none") : "inline-flex",
            opacity: animate ? (open ? 1 : 0) : 1,
            rotate: expanded ? 180 : 0,
          }}
          className="items-center text-neutral-500"
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </button>

      {open && expanded ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="ml-7 flex flex-col gap-1 overflow-hidden"
        >
          {items.map((item) => (
            <SidebarLink key={item.href} link={item} className="py-1.5" />
          ))}
        </motion.div>
      ) : null}
    </div>
  );
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarBody className="sticky top-0 h-svh overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col gap-4">
          <SidebarLink
            link={{
              label: "NCE IELTS",
              href: "/",
              icon: <PanelLeft className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
            }}
            className="font-semibold"
          />

          <div className="scrollbar-ghost -mx-1 flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-1 pb-2">
            <SidebarSection title="Courses">
              {courseItems.map((item) => (
                <SidebarLink key={item.href} link={item} />
              ))}
            </SidebarSection>

            <SidebarSection title="TED">
              {tedItems.map((item) => (
                <SidebarLink key={item.href} link={item} />
              ))}
            </SidebarSection>

            <SidebarSection title="IELTS">
              {ieltsItems.map((item) => (
                <SidebarLink key={item.href} link={item} />
              ))}
            </SidebarSection>

            <SidebarSection title="Words">
              <CollapsibleSidebarGroup
                label="NCE"
                icon={<BookOpen className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />}
                items={nceWordItems}
              />
            </SidebarSection>

            <SidebarSection title="Demo">
              <CollapsibleSidebarGroup
                label="Demo pages"
                icon={<PanelLeft className="size-5 shrink-0 text-neutral-700 dark:text-neutral-200" />}
                items={demoItems}
              />
            </SidebarSection>
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}