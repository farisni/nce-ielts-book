"use client";

import { useEffect, useRef } from "react";
import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import python from "highlight.js/lib/languages/python";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import markdown from "highlight.js/lib/languages/markdown";
import sql from "highlight.js/lib/languages/sql";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("json", json);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("sql", sql);

interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

function MacDots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="size-2.5 rounded-full bg-[#ff5f57]" />
      <span className="size-2.5 rounded-full bg-[#febc2e]" />
      <span className="size-2.5 rounded-full bg-[#28c840]" />
    </div>
  );
}

export function CodeBlock({ className, children }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const match = /language-(\w+)/.exec(className || "");

  useEffect(() => {
    if (codeRef.current && match && hljs.getLanguage(match[1])) {
      hljs.highlightElement(codeRef.current);
    }
  }, [match]);

  if (!match) {
    return (
      <code className="bg-zinc-50 text-zinc-600 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    );
  }

  const code = String(children).replace(/\n$/, "");
  const lang = match[1];
  const isRegisteredLang = hljs.getLanguage(lang);

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-gray-700/40 bg-[#282c34]">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#282c34]">
        <MacDots />
        <span className="text-xs text-gray-400 font-mono">{lang}</span>
      </div>
      <code
        ref={isRegisteredLang ? codeRef : null}
        className={`language-${lang} block m-2 p-6 text-sm overflow-x-auto leading-relaxed code-scrollbar font-mono whitespace-pre text-[#abb2bf]`}
      >
        {code}
      </code>
    </div>
  );
}
