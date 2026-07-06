"use client";

import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import type { Components } from "react-markdown";
import { remarkCallout } from "@/app/_components/remark-callout";
import { remarkBlockId } from "@/app/_components/remark-block-id";
import { remarkHighlight } from "@/app/_components/remark-highlight";
import { HandDrawnMark } from "@/app/_components/handdrawn-mark";
import { CalloutBlock } from "@/app/_components/md-callout";
import { CodeBlock } from "@/app/_components/md-code-block";
import { SimpleTable } from "@/app/_components/md-simple-table";
import { ExpandableTable } from "@/app/_components/md-expandable-table";

interface Props {
  expandableTable?: boolean;
  content: string;
  handDrawnMarks?: boolean;
}

export function MarkdownClient({ content, handDrawnMarks = true, expandableTable = true }: Props) {
  const components: Components = {
    blockquote: CalloutBlock,
    pre: ({ children }) => <>{children}</>,
    code: CodeBlock,
    table: expandableTable ? ExpandableTable : SimpleTable,
  };

  const markdown = (
    <Markdown
      remarkPlugins={[remarkGfm, remarkMath, remarkHighlight, remarkBlockId, remarkCallout]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}
      components={components}
    >
      {content}
    </Markdown>
  );

  return handDrawnMarks ? <HandDrawnMark>{markdown}</HandDrawnMark> : markdown;
}
