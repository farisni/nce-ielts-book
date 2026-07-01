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

const notes = [
  {
    id: 1,
    title: "read of",
    body: "读到",
    examples: [
      { main: "speak of / talk of", explain: "谈到", en: "When she spoke of her childhood, her eyes lit up.", zh: "她一谈到童年，眼睛就发亮。" },
      { main: "hear of", explain: "听说", en: "I've never heard of that place before.", zh: "我以前从未听说过那个地方。" },
      { main: "know of", explain: "知道有", en: "Do you know of any good restaurants nearby?", zh: "你知道附近有什么好餐馆吗？" },
    ],
  },
  {
    id: 2,
    title: "no shortage of",
    body: "双重否定，不缺，翻译时常当作动词处理",
    examples: [
      { main: "a lack of", explain: "缺乏", en: "There is a lack of evidence to support this claim.", zh: "缺乏证据支持这一说法。" },
      { main: "plenty of", explain: "大量", en: "There are plenty of reasons to be optimistic.", zh: "有很多理由保持乐观。" },
    ],
  },
  {
    id: 3,
    title: "offering 'get-rich-quick' opportunities",
    body: "提供，现在分词做后置定语",
    examples: [],
  },
];

const palette = ["#c9b99a", "#9aabc9", "#a9c99a"];

export default function TimelineDemo() {
  return (
    <div className="mx-auto max-w-[720px] rounded-xl border-2 border-dashed border-border p-10 mt-10">
      <h2 className="text-lg font-semibold mb-8">Timeline · @reui/c-timeline-2</h2>

      <Timeline defaultValue={notes.length} className="w-full">
        {notes.map((note, ni) => (
          <TimelineItem
            key={note.id}
            step={note.id}
            className="group-data-[orientation=vertical]/timeline:ms-14"
          >
            <TimelineHeader>
              <TimelineSeparator className="!bg-border/70 !w-0.5" />
              <TimelineIndicator
                className="flex items-center justify-center border-0"
                style={{ background: palette[ni] + "1a" }}
              >
                <span
                  className="size-2.5 rounded-full"
                  style={{ background: palette[ni] }}
                />
              </TimelineIndicator>
              <TimelineTitle className="flex items-center gap-2">
                <span
                  className="inline-flex items-center rounded-md px-2.5 py-0.5 text-[13px] font-medium"
                  style={{ background: palette[ni] + "1a", color: palette[ni] }}
                >
                  {note.title}
                </span>
                <span className="text-[13px] text-muted-foreground">{note.body}</span>
              </TimelineTitle>
            </TimelineHeader>
            <TimelineContent>
              {note.examples.length > 0 && (
                <ul className="mt-2 space-y-2">
                  {note.examples.map((ex, ei) => (
                    <li key={ei} className="flex items-start gap-2.5">
                      <span
                        className="mt-[0.4rem] size-1.5 rounded-full shrink-0"
                        style={{ background: palette[ni] }}
                      />
                      <div className="min-w-0">
                        <span className="text-[13px] font-medium text-foreground/65">{ex.main}</span>
                        <span className="ml-1 text-[11px] text-muted-foreground/55">{ex.explain}</span>
                        <div className="text-[13px] mt-0.5">{ex.en}</div>
                        <div className="text-[11px] text-muted-foreground/55 mt-0.5">{ex.zh}</div>
                      </div>
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
