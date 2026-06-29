import fs from "fs";
import path from "path";
import { TableOfContents } from "@/app/_components/toc";
import { MarkdownClient } from "@/app/_components/md-markdown-client";

const rawContent = fs.readFileSync(
  path.join(process.cwd(), "doc/demo-md.md"),
  "utf-8"
);

const demoContent = rawContent.replace(/^---[\s\S]*?---\n*/, "");

export default function MarkdownDemoPage() {
  return (
    <main className="mx-auto w-[1022px] min-w-[1022px] flex-none rounded-md pl-16 pr-[40px] py-6">
      <div className="flex gap-24 items-start">
        <div className="w-full max-w-2xl">
          <article id="mdx-content" className="prose prose-gray max-w-none
            prose-headings:text-gray-900 prose-headings:font-semibold
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:scroll-mt-24
            prose-h3:scroll-mt-24
            prose-p:text-gray-500
            prose-strong:text-gray-600
            prose-code:before:content-none prose-code:after:content-none
            [&_table]:!border-0
            [&_th]:!border-0
            [&_td]:!border-0
            [&_thead]:!bg-transparent
          ">
            <MarkdownClient content={demoContent} />
          </article>
        </div>

        <TableOfContents contentSelector="#mdx-content" />
      </div>
    </main>
  );
}
