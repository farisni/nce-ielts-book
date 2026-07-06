"use client";

import { useState, useCallback } from "react";
import { MarkdownClient } from "@/app/_components/md-markdown-client";
import { RootDataProvider, type RootData } from "@/app/_components/md-root-data-context";
import { Drawer } from "@/app/_components/drawer";
import { RootAtlasContent } from "@/app/_components/root-atlas-content";

export function Nce4L48ClientPage({
  content,
  rootData,
}: {
  content: string;
  rootData: Record<string, RootData>;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const onRootClick = useCallback(() => setDrawerOpen(true), []);

  return (
    <>
      <main className="mx-auto w-[880px] min-w-[880px] flex-none rounded-md pl-16 pr-[40px] py-6">
        <div className="w-full">
            <article id="mdx-content" className="prose-lg max-w-none text-black prose-headings:text-gray-900 prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:scroll-mt-24 prose-h3:scroll-mt-24 prose-p:text-black prose-strong:text-gray-600 prose-code:before:content-none prose-code:after:content-none [&_table]:!border-0 [&_th]:!border-0 [&_td]:!border-0 [&_thead]:!bg-transparent [&_tr]:border-b [&_tr]:border-gray-200 [&_tr:last-child]:border-b-0 [&_ul]:!pl-0 [&_li]:!pl-0 [&_.note-label]:!text-base [&_.note-label]:!font-semibold">
              <style jsx>{`
                article :global(mark) {
                  background: linear-gradient(to top, rgba(73, 128, 177, 0.24) 42%, transparent 42%);
                  color: #333;
                  font-weight: 600;
                  padding: 0 0.02em 0.02em;
                }
              `}</style>
              <RootDataProvider data={rootData} onRootClick={onRootClick}>
                <MarkdownClient content={content} handDrawnMarks={false} expandableTable={false} />
              </RootDataProvider>
            </article>
          </div>
      </main>

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} title="词根图谱">
        <RootAtlasContent />
      </Drawer>
    </>
  );
}
