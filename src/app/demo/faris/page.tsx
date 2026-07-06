"use client";

import React from "react";
import { SentenceQuote } from "@/app/_components/sentence-quote";
import { KnowledgePoint } from "@/app/_components/knowledge-point";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

// QUOTE_TEXT removed - see JSX below
const SECTION_TITLE_MAIN = "构词法";
const SECTION_TITLE_SUB = "名词-like";
const SECTION_TITLE_2_EN = "be found in ...";
const SECTION_TITLE_2_CN = "产于(生存于、生活于某地)";

const BADGE_LIST = [
  { term: "cat-like", desc: "↔ catlike 偷偷摸摸的" },
  { term: "dog-like", desc: "↔ doglike 忠实的" },
  { term: "bird-like", desc: "↔ birdlike 敏捷轻快的" },
  { term: "lady-like", desc: "↔ ladylike 风度雍容如贵妇的,温雅的" },
  { term: "childlike", desc: "↔ 天真烂漫的 、homelike、kinglike" },
  { term: "catty", desc: "↔ 辅元辅(汉堡结构)需要双写 、doggy" },
];

const FOUND_IN_LIST = [
  [
    "Many plant and animal species ",
    { hl: "are found" },
    " only ",
    { hl: "in" },
    " the rainforests.",
  ],
  [
    "Vitamin C ",
    { hl: "is found" },
    " ",
    { hl: "in" },
    " citrus fruit.",
  ],
];

function renderFoundIn(segments: (string | { hl: string })[], color: string) {
  return segments.map((seg, i) =>
    typeof seg === "string" ? seg : <mark key={i} style={{ background: `linear-gradient(to top, ${color}3d 42%, transparent 42%)`, color: "#333", fontWeight: 600, padding: "0 0.02em 0.02em" }}>{seg.hl}</mark>
  );
}

const AT_LARGE_TITLE_EN = "at large";
const AT_LARGE_TITLE_CN = "未被限制的；自由的；在逃的";
const AT_LARGE_LIST = [
  { en: "a prisoner / suspect at large", cn: "（通常做后置定语）" },
  { en: "The disease is still at large.", cn: "疾病仍在肆虐。" },
];

type Seg = string | { hl: string } | { hl2: string } | { dot: string } | { note: string };

const WULING_LIST: Seg[][] = [
  [
    "However, a new type of ",
    { hl: "humor" },
    ", which stems largely from the US, has recently ",
    { hl: "come into" },
    " ",
    { hl: "fashion" },
    ".",
  ],
  [
    "The dealer told him that ",
    { hl: "it" },
    " had just ",
    { hl: "come in" },
    ", but that he could not be bothered to open it.",
  ],
  ["I thought of a good idea. → ", { hl: "A good idea" }, " ", { hl2: "came / flashed" }, " into my mind."],
  ["He went to the town on business. → Business took him to the town."],
  ["A warm and sunny Sunday found my whole family going for an outing at the beach."],
  [
    "The sea bed was scoured with powerful nets and ",
    { hl: "there was tremendous" },
    " excitement on board when a chest was raised from the bottom.",
  ],
  ["He lost his confidence. → ", { dot: "Confidence" }, " deserted him."],
  ["I couldn't sleep that night. → That night sleep eluded me."],
  ["We only travelled half the distance at sunset. → Sunset met us halfway.", { note: "日落在中途与我们相遇。" }],
  ["The past few years witnessed the great influx of foreigners to China, for travelling, studies or business.", { note: "过去几年见证了大量外国人涌入中国旅游、学习或经商。" }],
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
      <SentenceQuote>
        Pumas{" "}
        <span style={{ color: "#bd491e", fontWeight: 600 }}>are</span>{" "}
        large, cat-like animals which{" "}
        <span className="border-b border-dotted border-gray-400"><span style={{ color: "#bd491e", fontWeight: 600 }}>are</span> found in</span>{" "}
        America.
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
          引出本文的"主人翁"（名字、体型、特征、产地），关系代词（which、that）+ Be动词 可省略（非谓语动词做后置定语）
        </span>
      </SentenceQuote>

      <KnowledgePoint titleEn={AT_LARGE_TITLE_EN} titleCn={AT_LARGE_TITLE_CN} underlineColor="decoration-purple-200">
        <ul className="space-y-1.5 mb-6">
          {AT_LARGE_LIST.map((item, i) => (
            <li key={i} className="flex items-start gap-1.5 text-black text-base">
              <span
                className="inline-block size-2 rounded-full shrink-0 self-center mt-0.5"
                style={{ background: DOT_COLORS[i % DOT_COLORS.length] }}
              />
              <span>
                <span className="text-base">{item.en}</span>
                {" "}
                <span className="text-sm text-gray-400">{item.cn}</span>
              </span>
            </li>
          ))}
        </ul>
      </KnowledgePoint>

      <KnowledgePoint titleEn={SECTION_TITLE_MAIN} titleCn={SECTION_TITLE_SUB} underlineColor="decoration-emerald-200">
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
      </KnowledgePoint>

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

      <KnowledgePoint titleEn={SECTION_TITLE_2_EN} titleCn={SECTION_TITLE_2_CN} underlineColor="decoration-blue-200">
        <ul className="space-y-1.5 mb-6">
          {FOUND_IN_LIST.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5 text-black text-base">
              <span
                className="inline-block size-2 rounded-full shrink-0 self-center mt-0.5"
                style={{ background: DOT_COLORS[i % DOT_COLORS.length] }}
              />
              <span className="text-base">{renderFoundIn(item, DOT_COLORS[i % DOT_COLORS.length])}</span>
            </li>
          ))}
        </ul>
      </KnowledgePoint>

      <SentenceQuote>
        <span style={{ color: "#6B6AD6" }}>When reports came into London Zoo</span>{" "}
        <span style={{ color: "#E85D7F", fontWeight: 600 }}>that</span>{" "}
        <span style={{ color: "#5BA4C6" }}>a wild puma had been spotted forty-five miles{" "}
        south of{" "}
        London, they were not taken seriously.</span>
      </SentenceQuote>

      <KnowledgePoint titleEn="无灵主语(inanimate subject)" titleCn="物称主语(拟人化)" underlineColor="decoration-pink-200">
        <table className="w-full border-separate border-spacing-y-2">
        <tbody>
          {WULING_LIST.map((item, i) => (
            <tr key={i} className="align-top">
              <td className="align-middle w-4"><span className="inline-block size-1.5 bg-gray-400 align-middle" /></td>
              <td className="text-base text-black align-top pt-1">
                {item.map((seg, j) => {
                  if (typeof seg === "string") return seg;
                  if ("hl" in seg) return <mark key={j} style={{ background: "linear-gradient(to top, rgba(34, 197, 94, 0.24) 42%, transparent 42%)", color: "#333", fontWeight: 600, padding: "0 0.02em 0.02em" }}>{seg.hl}</mark>;
                  if ("hl2" in seg) return <mark key={j} style={{ background: "none", color: "#bd491e", fontWeight: "normal" }}>{seg.hl2}</mark>;
                  if ("dot" in seg) return <span key={j} className="border-b border-dotted border-gray-400">{seg.dot}</span>;
                  if ("note" in seg) return <span key={j} className="text-sm text-gray-400">{seg.note}</span>;
                  return null;
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </KnowledgePoint>

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
