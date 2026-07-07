"use client";

import React from "react";
import { KnowledgePoint } from "@/app/_components/knowledge-point";
import { Sentence } from "@/app/_components/sentence";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const DOT_COLORS = ["#d4ddd9", "#C7D2CD", "#b4c1bb", "#a1b0a9", "#8e9f97", "#7b8e85"];

function HighlightText({ text, word }: { text: string; word: string }) {
  const idx = text.indexOf(word);
  if (idx === -1) return <>{text}</>;
  return <>{text.slice(0, idx)}<mark>{text.slice(idx, idx + word.length)}</mark>{text.slice(idx + word.length)}</>;
}

// ═══ Sentence 1: appeal to / regard as ═══
const APPEAL_DATA = [
  { expr: "appeal to sb.", note: "吸引某人", ex: "The idea never appealed to me very much.", hl: "appealed to" },
  { expr: "regard A as B", note: "把A看作B", ex: "We regard them as unnecessary creatures.", hl: "regard" },
  { expr: "regard A as B", note: "", ex: "…the Italians regarded him as a sort of hero.", hl: "regarded" },
];

// ═══ Sentence 2: 朋友幻想 ═══
const RAPTURE_DATA = [
  { expr: "go into raptures", note: "欣喜若狂", ex: "People go into raptures at the mere mention of shopping.", hl: "go into raptures" },
  { expr: "go into raptures", note: "", ex: "Many young people always go into raptures at the merely mention of buying fashion clothes.", hl: "go into raptures" },
];

const EXTOL_DATA = [
  { expr: "extol the virtues / benefits of sth.", note: "赞美…的优点/好处", ex: "He extolled the virtues of a plant-based diet.", hl: "extolled" },
  { expr: "extol the benefits of sth.", note: "", ex: "She extolled the benefits of regular exercise.", hl: "extolled" },
];

const ILLUSION_DATA = [
  { expr: "be / live under the illusion that...", note: "误以为…", ex: "He still lives under the illusion that country life is superior to town life.", hl: "under the illusion that" },
  { expr: "be / live under the delusion that...", note: "妄想…（更强烈）", ex: "Even men live under the delusion that they can assemble a kitchen.", hl: "under the delusion that" },
];

const SUPERIOR_DATA = [
  { expr: "be superior to", note: "优于（用 to 而非 than）", ex: "This model is superior to the previous one in terms of performance.", hl: "superior to" },
  { expr: "be inferior to", note: "劣于", ex: "The quality of this product is inferior to that of the competitor's.", hl: "inferior to" },
  { expr: "have an advantage over", note: "比…有优势", ex: "Our team has an advantage over theirs because of our experience.", hl: "advantage over" },
];

const COMPARE_DATA = [
  { expr: "compare A with / to B", note: "把A和B做比较", ex: "I hate the way you always compare me with your ex-boyfriend.", hl: "compare" },
  { expr: "in/by contrast to/with...", note: "与…对比", ex: "In contrast to her quiet brother, she is very outgoing.", hl: "In contrast to" },
  { expr: "by contrast with...", note: "", ex: "By contrast with the previous design, this one is more user-friendly.", hl: "By contrast with" },
];

// ═══ Sentence 3: 田园另一面 ═══
const FAIL_DATA = [
  { expr: "fail to do", note: "没能做成某事", ex: "My friend fails to mention the long and friendless winter evenings.", hl: "fails to mention" },
];

const MAKE_DO_DATA = [
  { expr: "make do with", note: "将就，凑合", ex: "John did not have a hammer, so he had to make do with a rock.", hl: "make do with" },
  { expr: "second best", note: "退而求其次", ex: "I couldn't afford the house I really wanted, so I had to settle for second best.", hl: "second best" },
];

const DO_WITHOUT_DATA = [
  { expr: "do without sth.", note: "没有…也行", ex: "If you need my car, I can do without it today.", hl: "do without" },
  { expr: "do without sth.", note: "", ex: "She can't do without candy.", hl: "do without" },
];

const SAVE_DATA = [
  { expr: "save sb. sth.", note: "省去某人某事", ex: "If you lend me some money, it will save me a trip to the bank.", hl: "save me" },
  { expr: "save sb. doing sth.", note: "省得某人做某事", ex: "If you tell her the news, it will save me calling her.", hl: "save me" },
];

// ═══ Sentence 4: 城市也有美好 ═══
const COMPARATIVE_DATA = [
  { expr: "比较级表最高级", note: "Few/Nothing + 比较级 = 最…", ex: "Few things could be more impressive than the peace that descends on deserted city streets.", hl: "Few things could be more" },
  { expr: "比较级表最高级", note: "", ex: "Few students could be more diligent than she (is).", hl: "Few students could be more" },
];

const DOUBLE_NEG_DATA = [
  { expr: "双重否定 = 加强肯定", note: "nothing / no one ... not / without", ex: "Nothing can be compared with the first cockcrow, the twittering of birds at dawn.", hl: "Nothing can be compared" },
  { expr: "双重否定", note: "", ex: "Nothing is impossible to a willing mind.", hl: "Nothing is impossible" },
  { expr: "双重否定", note: "", ex: "No one has nothing to offer to society.", hl: "No one has nothing" },
  { expr: "双重否定", note: "", ex: "Impossible is nothing.", hl: "Impossible is nothing" },
  { expr: "Nor 部分倒装", note: "也不…（= and not... either）", ex: "Nor is the city without its moments of beauty.", hl: "Nor is the city" },
];

const FOREVER_DATA = [
  { expr: "be forever doing sth.", note: "总是做某事（抱怨语气）", ex: "He is forever talking about the friendly people.", hl: "is forever talking" },
  { expr: "be forever doing sth.", note: "", ex: "She is forever complaining about the weather.", hl: "is forever complaining" },
];

const MYSTERY_DATA = [
  { expr: "It is a mystery to me + 从句", note: "我不明白…（形式主语）", ex: "It has always been a mystery to me why people enjoy horror movies.", hl: "mystery to me" },
  { expr: "be beyond sb. + 从句", note: "超出某人理解", ex: "It has always been beyond me why he chose to quit his job.", hl: "beyond me" },
  { expr: "It beats me + 从句", note: "真搞不懂…", ex: "It beats me why he always arrives late to meetings.", hl: "beats me" },
];

// ═══ Sentence 5: 城市居民 ═══
const COME_UP_DATA = [
  { expr: "come up to town", note: "上城里去（从次要→重要）", ex: "Some of my acquaintances in the country come up to town once or twice a year.", hl: "come up to town" },
  { expr: "go down to the country", note: "下乡去（从重要→次要）", ex: "go down to the country for the weekend", hl: "go down to" },
];

const DRAW_DATA = [
  { expr: "draw to a close", note: "接近尾声", ex: "As the day drew to a close, the sun set beautifully over the horizon.", hl: "drew to a close" },
  { expr: "a major operation", note: "一件大事（手术→隐喻）", ex: "For them, visiting the theatre is a major operation.", hl: "major operation" },
];

const TREAT_DATA = [
  { expr: "a special treat", note: "特别的消遣/犒赏", ex: "When we were kids, a trip to the beach was a real treat.", hl: "a real treat" },
  { expr: "a treat (for sb.)", note: "难得的乐事", ex: "Her son's visits are a great treat for her.", hl: "a great treat" },
];

const GO_WILD_DATA = [
  { expr: "run / go wild with delight", note: "变得欣喜若狂（系表结构）", ex: "The children ran wild with delight when they saw the ice cream truck.", hl: "ran wild with delight" },
  { expr: "go wild with delight", note: "", ex: "Fans went wild with delight when their team won the championship.", hl: "went wild with delight" },
];

const TUCK_DATA = [
  { expr: "tuck away", note: "藏匿，隐藏", ex: "…the thousands that travel to work every day are tucked away in their homes in the country.", hl: "tucked away" },
  { expr: "tuck … into …", note: "把…塞进…", ex: "He tried to tuck his flapping shirt inside his trousers.", hl: "tuck" },
];

export default function N3L41Page() {
  return (
    <main className="mx-auto mt-16 w-[880px] min-w-[880px] min-h-[600px] rounded-md border border-dashed border-zinc-300 p-8">

      {/* ═══ Sentence 1 ═══ */}
      <Sentence quote={<>
        <span>The quiet life of the country has never </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>appealed to</span>
        <span> me. City born and city bred, I have always </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>regarded</span>
        <span> the country </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>as</span>
        <span> something you look at through a train window, or something you occasionally visit during the weekend.</span>
        <span className="text-[11px] text-gray-400 font-normal ml-2"><Badge variant="info" size="sm" className="align-middle">N3-L41</Badge></span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
          开篇明义：城里出生城里长大的人对乡村的态度。
        </span>
      </>} quoteClassName="mb-7">
        <KnowledgePoint titleEn="appeal to / regard … as" titleCn="核心表达">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[30%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[70%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {APPEAL_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[30%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[70%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
      </Sentence>

      {/* ═══ Sentence 2 ═══ */}
      <Sentence quote={<>
        <span>Most of my friends live in the city, yet they always </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>go into raptures</span>
        <span> at the mere mention of the country. Though they </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>extol the virtues of</span>
        <span> the peaceful life, only one of them has ever gone to live in the country and he was back in town </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>within six months</span>
        <span>. Even he still lives </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>under the illusion that</span>
        <span> country life is somehow </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>superior to</span>
        <span> town life.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
          朋友的田园狂热 vs 现实的快速逃离——对比突出讽刺。
        </span>
      </>} quoteClassName="mt-16 mb-7">
        <KnowledgePoint titleEn="go into raptures" titleCn="欣喜若狂">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[30%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[70%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {RAPTURE_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[30%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[70%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
        <KnowledgePoint titleEn="extol the virtues of" titleCn="赞美…的优点">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[30%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[70%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {EXTOL_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[30%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[70%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
        <KnowledgePoint titleEn="be under the illusion that" titleCn="误以为…">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">结构</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ILLUSION_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[35%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[65%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
        <KnowledgePoint titleEn="be superior to" titleCn="天生比较级（to 而非 than）">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">结构</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SUPERIOR_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[35%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[65%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
        <KnowledgePoint titleEn="compare A with / to B" titleCn="对比表达">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">结构</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPARE_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[35%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[65%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
      </Sentence>

      {/* ═══ Sentence 3 ═══ */}
      <Sentence quote={<>
        <span>This idyllic pastoral scene is only part of the picture. My friend </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>fails to mention</span>
        <span> the long and friendless winter evenings in front of the TV — virtually the only form of entertainment. He says nothing about the poor selection of goods in the shops, or about those unfortunate people who have to travel from the country to the city every day and are prepared to </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>tolerate</span>
        <span> a four-hour journey for the dubious privilege of living in the country.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
          田园生活另一面：漫长冬夜、购物不便、通勤痛苦。
        </span>
      </>} quoteClassName="mt-16 mb-7">
        <KnowledgePoint titleEn="fail to do" titleCn="没能完成某事">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[30%]">结构</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[70%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {FAIL_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[30%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[70%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
        <KnowledgePoint titleEn="make do with / second best" titleCn="将就 / 退而求其次">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[30%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[70%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MAKE_DO_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[30%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[70%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
        <KnowledgePoint titleEn="do without / save sb. sth." titleCn="没有…也行 / 省去某人某事">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">结构</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...DO_WITHOUT_DATA, ...SAVE_DATA].map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[35%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[65%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
      </Sentence>

      {/* ═══ Sentence 4 ═══ */}
      <Sentence quote={<>
        <span>Few things could be more impressive than the peace that descends on deserted city streets at weekends, </span>
        <span style={{ color: "#E85D7F", fontWeight: 600 }}>when</span>
        <span> the thousands that travel to work every day are </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>tucked away</span>
        <span> in their homes in the country. </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>Nor</span>
        <span> is the city without its moments of beauty.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
          城市周末的宁静 + 双重否定/部分倒装，表达「城市也有美好」。
        </span>
      </>} quoteClassName="mt-16 mb-7">
        <KnowledgePoint titleEn="比较级表最高级" titleCn="Few ... could be more ...">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">结构</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPARATIVE_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[35%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[65%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
        <KnowledgePoint titleEn="双重否定 + Nor 倒装" titleCn="nothing / no one ... not / Nor ...">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">结构</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DOUBLE_NEG_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[35%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[65%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
        <KnowledgePoint titleEn="be forever doing" titleCn="总是做某事（抱怨语气）">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[30%]">结构</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[70%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {FOREVER_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[30%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[70%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
        <KnowledgePoint titleEn="It is a mystery to me / be beyond sb." titleCn="形式主语 → 我不明白…">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">结构</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MYSTERY_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[35%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[65%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
      </Sentence>

      {/* ═══ Sentence 5 ═══ */}
      <Sentence quote={<>
        <span>Some of my acquaintances in the country </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>come up</span>
        <span> to town once or twice a year to visit the theatre </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>as a special treat</span>
        <span>. For them this is </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>a major operation</span>
        <span> which involves considerable planning. </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>As the day drew to a close</span>
        <span>, the city dweller never experiences </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>anxieties of this sort</span>
        <span>. The latest exhibitions, films, or plays are only a short bus ride away. Shopping, too, is always a pleasure. There is so much variety that you never have to </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>make do with second best</span>
        <span>. Country people </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>run wild</span>
        <span> when they go shopping in the city and stagger home </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>loaded with</span>
        <span> exotic items.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
          城市居民 vs 乡村来客——对比城市便利与乡村匮乏。
        </span>
      </>} quoteClassName="mt-16 mb-7">
        <KnowledgePoint titleEn="come up to / go down to" titleCn="方向性表达（上城市 / 下乡）">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COME_UP_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[35%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[65%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
        <KnowledgePoint titleEn="a major operation / draw to a close" titleCn="隐喻表达 / 接近尾声">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">结构</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DRAW_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[35%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[65%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
        <KnowledgePoint titleEn="a special treat" titleCn="难得的乐事 / 犒赏">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[30%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[70%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {TREAT_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[30%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[70%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
        <KnowledgePoint titleEn="go wild with delight / tuck away" titleCn="系表结构 / 隐藏">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">结构</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...GO_WILD_DATA, ...TUCK_DATA].map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[35%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[65%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
      </Sentence>

      <style>{`
        blockquote { font-family: "Lyon Text", Georgia, "LXGW WenKai Screen", serif; }
        main mark {
          background: linear-gradient(to top, rgba(147, 197, 228, 0.34) 42%, transparent 42%);
          color: #1f465b;
          font-weight: 600;
          padding: 0 0.02em 0.02em;
        }
      `}</style>
    </main>
  );
}
