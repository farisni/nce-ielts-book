"use client";

import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline";

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

const dotColors = ["#c9b99a", "#9aabc9", "#a9c99a", "#c9aac9", "#aac99a"];
const pillBg = ["#ede8e3", "#e3e8ed", "#e8ede3", "#ede3e8", "#e8e3ed"];

export default function PanelNotesDemo() {
  return (
    <div className="mx-auto max-w-[720px] rounded-xl border-2 border-dashed border-border p-10 mt-10">
      <h2 className="text-lg font-medium mb-8">行间笔记 · Timeline</h2>

      <Timeline className="mt-1 w-full" defaultValue={sampleNotes.length}>
        {sampleNotes.map((note, ni) => (
          <TimelineItem
            key={ni}
            step={ni + 1}
            className="group-data-[orientation=vertical]/timeline:ms-14"
          >
            <TimelineHeader>
              <TimelineSeparator className="!bg-border/70 !w-0.5" />
              <TimelineIndicator
                className="flex items-center justify-center border-0"
                style={{ background: dotColors[ni % dotColors.length] + "1a" }}
              >
                <span
                  className="size-1.5 rounded-full"
                  style={{ background: dotColors[ni % dotColors.length] }}
                />
              </TimelineIndicator>
              <TimelineTitle className="flex items-start gap-2">
                <span
                  className="shrink-0 inline-flex items-center rounded px-2 py-0.5 text-sm font-semibold text-foreground/80"
                  style={{ background: pillBg[ni % pillBg.length] }}
                >
                  {note.title}
                </span>
                <span className="text-[13px] text-muted-foreground">{note.body}</span>
              </TimelineTitle>
            </TimelineHeader>
            <TimelineContent>
              {note.table && note.table.length > 0 && (
                <ul className="space-y-2 text-[13px] text-muted-foreground">
                  {note.table.map((row, ri) => (
                    <li key={ri} className={ri === 0 ? "min-w-0 mt-1" : "min-w-0"}>
                      <span className="font-medium text-foreground/65">{row.main}</span>
                      <span className="ml-1 text-[11px]">{row.explain}</span>
                      <div className="mt-0.5">{row.enExample}</div>
                      <div className="text-[11px] mt-0.5">{row.zhExample}</div>
                    </li>
                  ))}
                </ul>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
