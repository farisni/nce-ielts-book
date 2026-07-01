"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface TableRow {
  main: string;
  explain: string;
  enExample: string;
  zhExample: string;
}

interface Note {
  title: string;
  body: string;
  table?: TableRow[];
}

const sampleNotes: Note[] = [
  {
    title: "read of",
    body: "读到",
    table: [
      { main: "speak of / talk of", explain: "谈到", enExample: "When she spoke of her childhood, her eyes lit up.", zhExample: "她一谈到童年，眼睛就发亮。" },
      { main: "hear of", explain: "听说", enExample: "I've never heard of that place before.", zhExample: "我以前从未听说过那个地方。" },
      { main: "know of", explain: "知道有", enExample: "Do you know of any good restaurants nearby?", zhExample: "你知道附近有什么好餐馆吗？" },
    ],
  },
  {
    title: "no shortage of",
    body: "双重否定，不缺，翻译时常当作动词处理",
    table: [
      { main: "a lack of", explain: "缺乏", enExample: "There is a lack of evidence to support this claim.", zhExample: "缺乏证据支持这一说法。" },
      { main: "plenty of", explain: "大量", enExample: "There are plenty of reasons to be optimistic.", zhExample: "有很多理由保持乐观。" },
    ],
  },
  { title: "offering 'get-rich-quick' opportunities", body: "提供，现在分词做后置定语" },
];

export default function PanelNotesDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto w-[1022px] min-w-[1022px] flex-none rounded-xl border-2 border-dashed border-border p-10">
      <h2 className="text-lg font-semibold mb-6">行间笔记面板 · 排版预览</h2>

      <div className="flex flex-col gap-6">
        <div className="text-lg leading-loose text-foreground [text-indent:2em]">
          This is a sentence with some inline notes.
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex size-5 items-center justify-center rounded transition-colors align-middle mx-0.5 text-muted-foreground/50 hover:bg-muted hover:text-foreground"
          >
            ···
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="panel-demo"
              data-selection-offset-excluded="true"
              className="rounded-lg px-4 py-3 relative z-[21] [text-indent:0]"
              style={{ background: "#f2f7f2" }}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-2 text-left">
                {sampleNotes.map((note, ni) => (
                  <div key={ni}>
                    <div className="flex items-start gap-3">
                      <span
                        className="shrink-0 flex items-center rounded px-2 py-0.5 text-sm font-semibold text-foreground/80"
                        style={{ background: ["#ede8e3", "#e3e8ed", "#e8ede3", "#ede3e8", "#e8e3ed"][ni % 5] }}
                      >
                        {note.title}
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{note.body}</p>
                    </div>
                    {note.table && (
                      <table className="mt-2 text-sm text-muted-foreground border-collapse w-full">
                        <tbody>
                          {note.table.map((row, ri) => (
                            <tr key={ri} className="border-b border-border/40 last:border-0">
                              <td className="pr-1 py-1.5 whitespace-nowrap align-middle">
                                <span className="font-medium text-foreground/65">{row.main}</span>
                                <span className="ml-1 text-xs font-normal">{row.explain}</span>
                              </td>
                              <td className="pl-0 py-1.5 leading-relaxed align-middle">
                                <div>{row.enExample}</div>
                                <div className="text-xs">{row.zhExample}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
