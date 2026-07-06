"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

// QUOTE_TEXT removed - see JSX below
const SECTION_TITLE = "构词法 名词-like";
const SECTION_TITLE_2 = "be found in ... 产于(生存于、生活于某地)";

const BADGE_LIST = [
  { term: "cat-like", desc: "↔ catlike 偷偷摸摸的" },
  { term: "dog-like", desc: "↔ doglike 忠实的" },
  { term: "bird-like", desc: "↔ birdlike 敏捷轻快的" },
  { term: "lady-like", desc: "↔ ladylike 风度雍容如贵妇的,温雅的" },
  { term: "childlike", desc: "↔ 天真烂漫的 、homelike、kinglike" },
  { term: "catty", desc: "↔ 辅元辅(汉堡结构)需要双写 、doggy" },
];

const DOT_COLORS = ["#38bdf8", "#818cf8", "#f472b6", "#facc15", "#34d399", "#fb7185"];

const TABLE_DATA = [
  { expression: "bear-like animals", expressionCn: "像熊一样的动物", exampleEn: "Giant pandas are large, bear-like animals which are found in Sichuan province, China.", exampleCn: "熊猫是一种体形似熊的大动物，产于中国的四川。", highlight: "bear-like animals" },
  { expression: "lady-like behavior", expressionCn: "女性的行为", exampleEn: "The look was always lady-like and appropriately flaunty.", exampleCn: "这种装扮总是很淑女，奢华得恰到好处。", highlight: "lady-like" },
  { expression: "child-like simplicity", expressionCn: "童心般的简单", exampleEn: "Do you think you shall like Morton? She asked of me, with a direct and naive simplicity of tone and manner, pleasing, if child-like.", exampleCn: "\"你觉得会喜欢莫尔顿吗？\"她问我，语调和举止里带着一种直率而幼稚的单纯，虽然有些孩子气，但讨人喜欢。", highlight: "child-like" },
  { expression: "an angel-like girl", expressionCn: "天使般的女孩", exampleEn: "She is a lovely girl, with curl hair, baby skin, and smiles like an angel.", exampleCn: "她长得很可爱，卷卷的头发，婴儿的皮肤，天使的笑容(Like an Angel girl像天使的女孩)", highlight: "like an angel" },
  { expression: "dog-like animals", expressionCn: "像狗一样的动物", exampleEn: "Foxes and farmers have never got on well. These small dog-like animals have long been accused of killing farm animals.（CET-4）", exampleCn: "", highlight: "dog-like animals" },
  { expression: "crystal-like eyes", expressionCn: "明亮的双眸", exampleEn: "Few have got a pair of crystal eyes like his.", exampleCn: "很少有人像他那样生着一副水晶般的眼睛。", highlight: "crystal eyes like his" },
  { expression: "flu-like symptoms", expressionCn: "流感样症状", exampleEn: "Take them at the onset of cold or flu-like symptoms.", exampleCn: "出现感冒或类似流感症状时就服用。", highlight: "flu-like symptoms" },
  { expression: "cobweb-like", expressionCn: "蜘蛛网式的", exampleEn: "As is shown in the picture, there is a cobweb-like structure with separate compartments packed in it.", exampleCn: "", highlight: "cobweb-like structure" },
];

function HighlightText({ text, word }: { text: string; word: string }) {
  const idx = text.indexOf(word);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + word.length)}</mark>
      {text.slice(idx + word.length)}
    </>
  );
}

export default function FarisPage() {
  return (
    <main className="mx-auto mt-12 w-[880px] min-w-[880px] min-h-[600px] rounded-md border border-dashed border-zinc-300 p-8">
      <blockquote className="border-l-2 border-zinc-300 pl-4 my-4 text-black text-base font-semibold">
        Pumas{" "}
        <mark style={{ background: "none", color: "#bd491e", fontWeight: 600 }}>are</mark>{" "}
        large, cat-like animals which{" "}
        <mark style={{ background: "none", color: "#bd491e", fontWeight: 600 }}>are</mark>{" "}
        <span className="border-b border-dotted border-gray-400">found in</span>{" "}
        America.
      </blockquote>

      <div className="text-base font-semibold mb-5 pt-7 underline decoration-emerald-200 decoration-4 underline-offset-3">{SECTION_TITLE}</div>

      <ul className="space-y-1.5 mb-6">
        {BADGE_LIST.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span
              className="inline-block size-2 rounded-full shrink-0 self-center mt-0.5"
              style={{ background: DOT_COLORS[i % DOT_COLORS.length] }}
            />
            <span className="note-label shrink-0 !text-base !font-semibold !bg-transparent !inline !px-0">
              {item.term}
            </span>
            <span className="text-sm">{item.desc}</span>
          </li>
        ))}
      </ul>

      <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
        <TableHeader>
          <TableRow className="border-b border-gray-200 hover:bg-transparent">
            <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[30%]">表达</TableHead>
            <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[70%]">例句</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TABLE_DATA.map((row, i) => (
            <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
              <TableCell className="px-3 py-2 whitespace-normal align-top w-[30%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                <strong>{row.expression}</strong>
                {row.expressionCn && (
                  <>
                    <br />
                    <span className="text-sm text-gray-400">{row.expressionCn}</span>
                  </>
                )}
              </TableCell>
              <TableCell className="px-3 py-2 whitespace-normal align-top text-black w-[70%]">
                <HighlightText text={row.exampleEn} word={row.highlight} />
                {row.exampleCn && (
                  <>
                    <br />
                    <span className="text-sm text-gray-400">{row.exampleCn}</span>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="text-base font-semibold mb-5 pt-7 underline decoration-blue-200 decoration-4 underline-offset-3">{SECTION_TITLE_2}</div>

      <style>{`
        main mark {
          background: linear-gradient(to top, rgba(73, 128, 177, 0.24) 42%, transparent 42%);
          color: #333;
          font-weight: 600;
          padding: 0 0.02em 0.02em;
        }
      `}</style>
    </main>
  );
}
