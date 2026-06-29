"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Tooltip } from "@/components/ui/tooltip";

interface TocHeading {
  id: string;
  text: string;
  level: number;
}

function TocItem({ heading, activeId }: { heading: TocHeading; activeId: string }) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [overflowing, setOverflowing] = useState(false);

  const checkOverflow = useCallback(() => {
    if (spanRef.current) {
      setOverflowing(spanRef.current.scrollWidth > spanRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [checkOverflow, heading.text]);

  const link = (
    <a
      href={`#${heading.id}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
      }}
      className={`block text-sm leading-relaxed truncate pl-2 transition-colors hover:text-gray-900
        ${heading.level === 3 ? "pl-5" : ""}
        ${activeId === heading.id
          ? "text-gray-900 font-medium border-l-2 border-gray-400 -ml-px"
          : "text-gray-400"
        }`}
    >
      <span ref={spanRef}>{heading.text}</span>
    </a>
  );

  if (!overflowing) return <li key={heading.id}>{link}</li>;

  return (
    <li key={heading.id}>
      <Tooltip content={heading.text} side="right">
        {link}
      </Tooltip>
    </li>
  );
}

export function TableOfContents({ contentSelector }: { contentSelector: string }) {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const container = document.querySelector(contentSelector);
    if (!container) return;

    const elements = container.querySelectorAll("h2, h3");
    const items: TocHeading[] = [];

    elements.forEach((el, index) => {
      const raw = el.textContent || "";
      const base = raw
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\u4e00-\u9fff-]/gi, "")
        .toLowerCase();
      const id = base ? `h-${base}` : `heading-${index}`;
      el.id = id;
      items.push({ id, text: raw, level: el.tagName === "H2" ? 2 : 3 });
    });

    setHeadings(items);

    const initCollapsed = new Set<string>();
    let lastH2 = "";
    for (const it of items) {
      if (it.level === 2) lastH2 = it.id;
      else if (lastH2) initCollapsed.add(lastH2);
    }
    setCollapsed(initCollapsed);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [contentSelector]);

  const toggle = (id: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (headings.length === 0) return null;

  // Group H3 items under their nearest preceding H2
  const grouped: { h2: TocHeading; h3s: TocHeading[] }[] = [];
  let current: { h2: TocHeading; h3s: TocHeading[] } | null = null;
  for (const h of headings) {
    if (h.level === 2) {
      current = { h2: h, h3s: [] };
      grouped.push(current);
    } else if (current) {
      current.h3s.push(h);
    }
  }

  return (
    <nav className="sticky top-[88px] w-64 shrink-0 mt-12 rounded-md p-3">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
        On this page
      </p>
      <ul className="space-y-1 border-l border-gray-100">
        {grouped.map(({ h2, h3s }) => (
          <li key={h2.id}>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); toggle(h2.id); }}
              className="flex items-center justify-between gap-1 w-full text-left pl-2"
            >
              <a
                href={`#${h2.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  document.getElementById(h2.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`block text-sm leading-relaxed truncate transition-colors hover:text-gray-900
                  ${activeId === h2.id
                    ? "text-gray-900 font-medium"
                    : "text-gray-400"
                  }`}
              >
                {h2.text}
              </a>
              {h3s.length > 0 && (
                <svg
                  className={`size-3 shrink-0 text-gray-400 transition-transform cursor-pointer ${collapsed.has(h2.id) ? "" : "rotate-90"}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
            {h3s.length > 0 && !collapsed.has(h2.id) && (
              <ul className="mt-0.5 space-y-1">
                {h3s.map((h3) => (
                  <TocItem key={h3.id || `toc-h3-${h3.text}`} heading={h3} activeId={activeId} />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
