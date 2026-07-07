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


const COUNTRY_LIST = [
  { en: "spend three days in the country!", cn: "在乡村（玩三天）" },
  { en: "buy a small house in the country.", cn: "在乡下（买房子）" },
  { en: "visiting all parts of the country.", cn: "全国各地" },
  { en: "living in a beautiful new house in the country.", cn: "在乡下（居住）" },
  { en: "people will be visiting the country", cn: "本国" },
  { en: "sold the house and left the country.", cn: "这个国家（离开）" },
  { en: "carried the news to everyone in the country.", cn: "全国" },
];


const CITY_BORN_LIST = [
  { en: "City born and city bred, I have always regarded…", cn: "非谓语动词（过去分词）做原因状语" },
  { en: "Tucked away in the country, the thousands…are never seen.", cn: "过去分词短语表伴随 / 原因" },
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


const AT_THE_OF_DATA = [
  { expr: "at the ... of ...", note: "一…就…", ex: "They always go into raptures at the mere mention of the country.", hl: "at the mere mention of" },
  { expr: "at the ... of ...", note: "", ex: "Your stomach would turn at the idea of frying potatoes in animal fat.", hl: "at the idea of" },
  { expr: "within + 时间", note: "不到…（时间内）", ex: "He was back in town within six months.", hl: "within six months" },
  { expr: "within + 时间", note: "", ex: "The bird covered the distance within three minutes.", hl: "within three minutes" },
  { expr: "at dawn", note: "在黎明（时刻）", ex: "Nothing can be compared with the first cockcrow, the twittering of birds at dawn.", hl: "at dawn" },
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


const PROVIDE_DATA = [
  { expr: "provide sb. with sth.", note: "为某人提供某物", ex: "Editors of newspapers often go to extremes to provide their readers with unimportant facts.", hl: "provide" },
  { expr: "be loaded with", note: "满载…", ex: "Country people stagger home loaded with exotic items.", hl: "loaded with" },
  { expr: "... of this sort / kind", note: "这种/那种（前面名词用复数）", ex: "The city dweller never experiences anxieties of this sort.", hl: "anxieties of this sort" },
  { expr: "be available for", note: "有空做某事", ex: "They invariably live nearby and are always available for an informal chat.", hl: "available for" },
];

// ═══ Sentence 5: 城市之美 ═══
const COMPARATIVE_DATA = [
  { expr: "比较级表最高级", note: "Few/Nothing + 比较级 = 最…", ex: "Few things could be more impressive than the peace that descends on deserted city streets.", hl: "Few things could be more" },
  { expr: "比较级表最高级", note: "", ex: "Few students could be more diligent than she (is).", hl: "Few students could be more" },
];

const DOUBLE_NEG_LIST = [
  { en: "Nothing can be compared with the first cockcrow, the twittering of birds at dawn.", cn: "双重否定 = 加强肯定（课文原句）" },
  { en: "Nothing is impossible to a willing mind.", cn: "世上无难事，只怕有心人。" },
  { en: "No one has nothing to offer to society.", cn: "每个人都可以为社会做贡献。" },
  { en: "Impossible is nothing.", cn: "一切皆有可能（双重否定 = 加强肯定）" },
  { en: "Anything is possible.", cn: "一切皆有可能（反例：单重肯定）" },
  { en: "Nor is the city without its moments of beauty.", cn: "城市也不乏属于它自己的良辰美景（Nor 部分倒装）" },
];

const FOREVER_LIST = [
  { en: "He is forever talking about the friendly people, the clean atmosphere…", cn: "总是做某事（抱怨/强调语气）" },
  { en: "She is forever complaining about the weather.", cn: "总是在抱怨" },
];

const RIGHTLY_LIST = [
  { en: "They could be saved so much misery and expense if they chose to live in the city where they rightly belong.", cn: "本来应该地（for a good reason）" },
  { en: "It was a vicious foul, and the referee rightly removed him from the game.", cn: "理应，理所当然地" },
];

const SUBJECT_CLAUSE_DATA = [
  { ex: "It is beyond me / a mystery to me / beats me why people are prepared to tolerate a four-hour journey each day for the dubious privilege of living in the country.", cn: "形式主语（孔雀句型）", hl: "beyond me" },
  { ex: "I cannot understand why people are prepared to tolerate a four-hour journey each day for the dubious privilege of living in the country.", cn: "人做主语符合中文思维", hl: "cannot understand" },
  { ex: "At one point, it seemed certain that their plane would crash.", cn: "形式主语 it", hl: "it seemed certain" },
  { ex: "Such is human nature, that a great many people are often willing to sacrifice higher pay for the privilege of becoming white-collar workers.", cn: "such...that 提前表强调", hl: "for the privilege of" },
];

const MYSTERY_DATA = [
  { expr: "It is a mystery to me + 从句", note: "我不明白…（形式主语）", ex: "It has always been a mystery to me why people enjoy horror movies.", hl: "mystery to me" },
  { expr: "be beyond sb. + 从句", note: "超出某人理解", ex: "It has always been beyond me why he chose to quit his job.", hl: "beyond me" },
  { expr: "It beats me + 从句", note: "真搞不懂…", ex: "It beats me why he always arrives late to meetings.", hl: "beats me" },
];


const SHED_DATA = [
  { expr: "shed", note: "洒下/发散（光）", ex: "There is something comforting about the warm glow shed by advertisements.", hl: "shed" },
  { expr: "shed tears / blood", note: "流泪 / 流血", ex: "She shed bitter tears when she heard the news.", hl: "shed" },
  { expr: "shed light on", note: "阐明，揭示", ex: "These discoveries may shed light on the origins of the universe.", hl: "shed light on" },
];
// ═══ Sentence 4: 城市便利 ═══
const COME_UP_DATA = [
  { expr: "come up to town", note: "上城里去（从次要→重要）", ex: "Some of my acquaintances in the country come up to town once or twice a year.", hl: "come up to town" },
  { expr: "go down to the country", note: "下乡去（从重要→次要）", ex: "go down to the country for the weekend", hl: "go down to" },
];

const DRAW_DATA = [
  { expr: "draw to a close", note: "接近尾声", ex: "As the day drew to a close, the sun set beautifully over the horizon.", hl: "drew to a close" },
  { expr: "a major operation", note: "一件大事（手术→隐喻）", ex: "For them, visiting the theatre is a major operation.", hl: "major operation" },
];

const TREAT_LIST = [
  { en: "When we were kids, a trip to the beach was a real treat.", cn: "特别的消遣/犒赏" },
  { en: "Her son's visits are a great treat for her.", cn: "难得的乐事" },
];

const GO_WILD_LIST = [
  { en: "The children ran wild with delight when they saw the ice cream truck.", cn: "变得欣喜若狂（系表结构：go/run wild）" },
  { en: "Fans went wild with delight when their team won the championship.", cn: "欣喜若狂" },
];

const BUS_RIDE_DATA = [
  { expr: "be only a short bus ride away", note: "公交车即可达", ex: "The town centre is only a short bus ride away.", hl: "a short bus ride away" },
  { expr: "be only a short bus ride away", note: "", ex: "The shopping mall is only a short bus ride away from my house.", hl: "a short bus ride away" },
];

const BUS_RIDE_DISTANCE_DATA = [
  { expr: "be within walking distance", note: "步行可达", ex: "The park is within walking distance from our hotel.", hl: "within walking distance" },
  { expr: "be within driving distance", note: "开车可达", ex: "The beach is within driving distance from the city center.", hl: "within driving distance" },
  { expr: "be within commuting distance", note: "通勤范围内", ex: "My new job is within commuting distance of my home.", hl: "within commuting distance" },
  { expr: "be only a stone's throw away", note: "只有一箭之遥", ex: "The library is only a stone's throw away from the university.", hl: "a stone's throw away" },
];

const EVERYDAY_DATA = [
  { expr: "everyday life", note: "adj. 每天的、日常的", ex: "nearly every day", hl: "every day" },
  { expr: "everyday work", note: "每天的工作（日常劳动）", ex: "work every day", hl: "every day" },
  { expr: "everyday necessities", note: "日常必需品", ex: "need every day", hl: "every day" },
];

const TUCK_LIST = [
  { en: "…the thousands … are tucked away in their homes in the country.", cn: "隐藏，藏匿" },
  { en: "He tried to tuck his flapping shirt inside his trousers.", cn: "把…塞进…" },
];

export default function Page() {
  return (
    <main className="mx-auto mt-16 w-[880px] min-w-[880px] min-h-[600px] rounded-md border border-dashed border-zinc-300 p-8">
      {/* === Sentence 1 === */}
      <Sentence quote={<div>
        <span>The quiet life of the country</span>
        <span> </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>has</span>
        <span> never </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>appealed</span>
        <span> to me. </span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
          开篇明义
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="the country" titleCn="表示乡村、本国要加定冠词">
          <ul className="space-y-1.5 mb-5">
            {COUNTRY_LIST.map((item, i) => (
              <li key={i} className="flex items-start gap-1.5 text-black text-base">
                <span className="inline-block size-1.5 rounded-full shrink-0 self-center mt-0.5"
                  style={{ background: DOT_COLORS[i % DOT_COLORS.length] }} />
                <span>
                  <span className="text-base">{item.en}</span>
                  {" "}
                  <span className="text-sm text-gray-400">{item.cn}</span>
                </span>
              </li>
            ))}
          </ul>
        </KnowledgePoint>
        <KnowledgePoint titleEn="appeal to sb ." titleCn="吸引某人（令某人产生兴趣）">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {APPEAL_DATA.map((r, i) => (
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

      {/* === Sentence 2 === */}
      <Sentence quote={<div>
        <span>City born and city bred</span>
        <span>, I </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>have</span>
        <span> always </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>regarded</span>
        <span> the country </span>
        <span>as</span>
        <span> something </span>
        <span>you look at through a train window</span>
        <span>, or something </span>
        <span>you occasionally visit during the weekend</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="regard A as" titleCn="B 把A看着B">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {APPEAL_DATA.map((r, i) => (
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

      {/* === Sentence 3 === */}
      <Sentence quote={<div>
        <span>Most of my friends</span>
        <span> </span>
        <span>live in</span>
        <span> the city, </span>
        <span>yet</span>
        <span> they always </span>
        <span>go into raptures</span>
        <span> </span>
        <span>at the mere mention of the country</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="go into raptures" titleCn="欣喜若狂">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {RAPTURE_DATA.map((r, i) => (
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
        <KnowledgePoint titleEn="at the ... of ..." titleCn="一...(马上)就...">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {AT_THE_OF_DATA.map((r, i) => (
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

      {/* === Sentence 4 === */}
      <Sentence quote={<div>
        <span>Though</span>
        <span> they </span>
        <span>extol the virtues of</span>
        <span> the peaceful life,</span>
        <span> only one of them</span>
        <span> </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>has</span>
        <span> ever </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>gone</span>
        <span> to </span>
        <span>live in the country</span>
        <span> and he </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>was</span>
        <span> </span>
        <span>back in town</span>
        <span> </span>
        <span>within six months</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="extol the virtues / benefits of sth." titleCn="盛赞...的好处">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {EXTOL_DATA.map((r, i) => (
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

      {/* === Sentence 5 === */}
      <Sentence quote={<div>
        <span>Even he still </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>lives</span>
        <span> under </span>
        <span>the illusion</span>
        <span> </span>
        <span>that country life is somehow superior to town life</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="be / live under the illusion / delusion that..." titleCn="有某种错觉">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
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
        <KnowledgePoint titleEn="be superior to" titleCn="天生比较级(搭配to而非than)">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
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
      </Sentence>

      {/* === Sentence 6 === */}
      <Sentence quote={<div>
        <span>He </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>is</span>
        <span> forever </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>talking</span>
        <span> about </span>
        <span>the friendly people</span>
        <span>, the </span>
        <span>clean atmosphere</span>
        <span>, the </span>
        <span>closeness to nature</span>
        <span> and the </span>
        <span>gentle pace of living</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="be forever doing sth." titleCn="老是做某事">
          <ul className="space-y-1.5 mb-5">
            {FOREVER_LIST.map((item, i) => (
              <li key={i} className="flex items-start gap-1.5 text-black text-base">
                <span className="inline-block size-1.5 rounded-full shrink-0 self-center mt-0.5"
                  style={{ background: DOT_COLORS[i % DOT_COLORS.length] }} />
                <span>
                  <span className="text-base">{item.en}</span>
                  {" "}
                  <span className="text-sm text-gray-400">{item.cn}</span>
                </span>
              </li>
            ))}
          </ul>
        </KnowledgePoint>
      </Sentence>

      {/* === Sentence 7 === */}
      <Sentence quote={<div>
        <span>Nothing </span>
        <span style={{ color: "#d97706", fontWeight: 600 }}>can</span>
        <span> </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>be compared</span>
        <span>, he </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>maintains</span>
        <span>, </span>
        <span>with</span>
        <span> </span>
        <span>the first cockcrow</span>
        <span>,</span>
        <span> the twittering of birds at dawn</span>
        <span>,</span>
        <span> the sight of the rising sun</span>
        <span> </span>
        <span>glinting on the trees and pastures</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="compare A with / to B" titleCn="把A和B做比较">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
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
        <KnowledgePoint titleEn="at dawn" titleCn="在黎明时刻">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {AT_THE_OF_DATA.map((r, i) => (
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

      {/* === Sentence 8 === */}
      <Sentence quote={<div>
        <span>This idyllic pastoral scene</span>
        <span> </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>is</span>
        <span> only </span>
        <span>part of</span>
        <span> the picture.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">

      </Sentence>

      {/* === Sentence 9 === */}
      <Sentence quote={<div>
        <span>My friend </span>
        <span>fails to</span>
        <span> mention </span>
        <span>the long and friendless winter evenings</span>
        <span> </span>
        <span>in front of the TV</span>
        <span> —</span>
        <span>virtually the only form of entertainment</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">

      </Sentence>

      {/* === Sentence 10 === */}
      <Sentence quote={<div>
        <span>He</span>
        <span> says nothing</span>
        <span> </span>
        <span>about the poor selection of goods in the shops</span>
        <span>, or </span>
        <span>about those unfortunate people</span>
        <span> </span>
        <span>who have to travel from the country to the city every day to get to work</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="everyday vs every day" titleCn="">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[40%]">everyday</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[60%]">every day</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {EVERYDAY_DATA.map((r, i) => (
                <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">
                  <TableCell className="px-3 py-2 whitespace-normal align-top w-[40%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                    <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}
                  </TableCell>
                  <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[60%]">
                    <HighlightText text={r.ex} word={r.hl} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </KnowledgePoint>
      </Sentence>

      {/* === Sentence 11 === */}
      <Sentence quote={<div>
        <span>Why people are prepared to tolerate a four-hour journey each day for the dubious privilege of living in the country</span>
        <span> </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>is</span>
        <span> beyond me. </span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
          雄狮句型（对比上下句）
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="主语从句" titleCn="形式主语 it / 主语从句">
          <ul className="space-y-1.5 mb-5">
            {SUBJECT_CLAUSE_DATA.map((item, i) => (
              <li key={i} className="flex items-start gap-1.5 text-black text-base">
                <span className="inline-block size-1.5 rounded-full shrink-0 self-center mt-0.5"
                  style={{ background: DOT_COLORS[i % DOT_COLORS.length] }} />
                <span>
                  <span className="text-base"><HighlightText text={item.ex} word={item.hl} /></span>
                  {item.cn && <>
                    {" "}
                    <span className="text-sm text-gray-400">{item.cn}</span>
                  </>}
                </span>
              </li>
            ))}
          </ul>
        </KnowledgePoint>
        <KnowledgePoint titleEn="be beyond sb." titleCn="使某人无法理解(难以置信)">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
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

      {/* === Sentence 12 === */}
      <Sentence quote={<div>
        <span>They </span>
        <span>could be saved</span>
        <span> </span>
        <span>so much misery</span>
        <span> and </span>
        <span>expense</span>
        <span> </span>
        <span>if</span>
        <span> they </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>chose</span>
        <span> to live in the city </span>
        <span>where they rightly belong</span>
        <span>. </span>
        <span>虚拟语气</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="save sb. sth. / doing sth." titleCn="某人节省某物/免于做某事">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SAVE_DATA.map((r, i) => (
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
        <KnowledgePoint titleEn="rightly" titleCn="adv. for a good reason 本来应该地">
          <ul className="space-y-1.5 mb-5">
            {RIGHTLY_LIST.map((item, i) => (
              <li key={i} className="flex items-start gap-1.5 text-black text-base">
                <span className="inline-block size-1.5 rounded-full shrink-0 self-center mt-0.5"
                  style={{ background: DOT_COLORS[i % DOT_COLORS.length] }} />
                <span>
                  <span className="text-base">{item.en}</span>
                  {" "}
                  <span className="text-sm text-gray-400">{item.cn}</span>
                </span>
              </li>
            ))}
          </ul>
        </KnowledgePoint>
      </Sentence>

      {/* === Sentence 13 === */}
      <Sentence quote={<div>
        <span>If</span>
        <span> you </span>
        <span>can</span>
        <span> </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>do</span>
        <span> without the </span>
        <span>few pastoral pleasures of the country</span>
        <span>, you </span>
        <span>will</span>
        <span> </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>find</span>
        <span> </span>
        <span>the city can provide you with the best that life can offer</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="do without sth." titleCn="没有...也行">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DO_WITHOUT_DATA.map((r, i) => (
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
        <KnowledgePoint titleEn="provide sb. with sth." titleCn="为某人提供某物（sb. 短 sth. 长）">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PROVIDE_DATA.map((r, i) => (
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

      {/* === Sentence 14 === */}
      <Sentence quote={<div>
        <span>They </span>
        <span>invariably</span>
        <span> </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>live</span>
        <span> nearby and </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>are</span>
        <span> always </span>
        <span>available for</span>
        <span> an </span>
        <span>informal chat</span>
        <span> or an </span>
        <span>evening's entertainment</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="be available for sth." titleCn="有空做某事">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PROVIDE_DATA.map((r, i) => (
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

      {/* === Sentence 15 === */}
      <Sentence quote={<div>
        <span>Some of my acquaintances</span>
        <span> </span>
        <span>in the country</span>
        <span> </span>
        <span>come up</span>
        <span> to town </span>
        <span>once or twice a year</span>
        <span> to </span>
        <span>visit the theatre</span>
        <span> </span>
        <span>as a special treat</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="go up to the city 上城市" titleCn="">
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
        <KnowledgePoint titleEn="treat" titleCn="n.难得的乐事">
          <ul className="space-y-1.5 mb-5">
            {TREAT_LIST.map((item, i) => (
              <li key={i} className="flex items-start gap-1.5 text-black text-base">
                <span className="inline-block size-1.5 rounded-full shrink-0 self-center mt-0.5"
                  style={{ background: DOT_COLORS[i % DOT_COLORS.length] }} />
                <span>
                  <span className="text-base">{item.en}</span>
                  {" "}
                  <span className="text-sm text-gray-400">{item.cn}</span>
                </span>
              </li>
            ))}
          </ul>
        </KnowledgePoint>
      </Sentence>

      {/* === Sentence 16 === */}
      <Sentence quote={<div>
        <span>For them</span>
        <span> this </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>is</span>
        <span> </span>
        <span>a major operation</span>
        <span> </span>
        <span>which involves considerable planning</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="major" titleCn="important; significant">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
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
      </Sentence>

      {/* === Sentence 17 === */}
      <Sentence quote={<div>
        <span>As</span>
        <span> the play </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>draws</span>
        <span> to its close, they </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>wonder</span>
        <span> </span>
        <span>whether they will ever catch that last train home</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="draw to a close" titleCn="接近尾声">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
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
      </Sentence>

      {/* === Sentence 18 === */}
      <Sentence quote={<div>
        <span>The city dweller</span>
        <span> never </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>experiences</span>
        <span> </span>
        <span>anxieties of this sort</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="... of this / that sort / kind 这种...、那种...(前面的名字用 复数 )" titleCn="这种...、那种...(前面的名字用复数)">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PROVIDE_DATA.map((r, i) => (
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

      {/* === Sentence 19 === */}
      <Sentence quote={<div>
        <span>The latest</span>
        <span> exhibitions, films, or plays </span>
        <span>are only a short bus ride away</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="be only a short bus ride away" titleCn="只有很短的公共汽车车程（公交车即可达）">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {BUS_RIDE_DATA.map((r, i) => (
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
        <KnowledgePoint titleEn="距离表达" titleCn="">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {BUS_RIDE_DISTANCE_DATA.map((r, i) => (
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

      {/* === Sentence 20 === */}
      <Sentence quote={<div>
        <span>There </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>is</span>
        <span> </span>
        <span>so</span>
        <span> much variety </span>
        <span>that</span>
        <span> you never </span>
        <span>have to</span>
        <span> </span>
        <span>make do with</span>
        <span> </span>
        <span>second best</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="make do with ..." titleCn="凑合用">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MAKE_DO_DATA.map((r, i) => (
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

      {/* === Sentence 21 === */}
      <Sentence quote={<div>
        <span>Country people </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>run</span>
        <span> </span>
        <span>wild</span>
        <span> </span>
        <span>when</span>
        <span> they </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>go</span>
        <span> shopping in the city </span>
        <span>and</span>
        <span> stagger home </span>
        <span>loaded with</span>
        <span> as many of the </span>
        <span>exotic items</span>
        <span> </span>
        <span>as they can carry</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="run / go wild with delight" titleCn="系表（变得...）欣喜若狂">
          <ul className="space-y-1.5 mb-5">
            {GO_WILD_LIST.map((item, i) => (
              <li key={i} className="flex items-start gap-1.5 text-black text-base">
                <span className="inline-block size-1.5 rounded-full shrink-0 self-center mt-0.5"
                  style={{ background: DOT_COLORS[i % DOT_COLORS.length] }} />
                <span>
                  <span className="text-base">{item.en}</span>
                  {" "}
                  <span className="text-sm text-gray-400">{item.cn}</span>
                </span>
              </li>
            ))}
          </ul>
        </KnowledgePoint>
      </Sentence>

      {/* === Sentence 22 === */}
      <Sentence quote={<div>
        <span>Nor</span>
        <span> </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>is</span>
        <span> the city </span>
        <span>without</span>
        <span> </span>
        <span>its moments of beauty</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="双重否定 = 加强肯定" titleCn="">
          <ul className="space-y-1.5 mb-5">
            {DOUBLE_NEG_LIST.map((item, i) => (
              <li key={i} className="flex items-start gap-1.5 text-black text-base">
                <span className="inline-block size-1.5 rounded-full shrink-0 self-center mt-0.5"
                  style={{ background: DOT_COLORS[i % DOT_COLORS.length] }} />
                <span>
                  <span className="text-base">{item.en}</span>
                  {" "}
                  <span className="text-sm text-gray-400">{item.cn}</span>
                </span>
              </li>
            ))}
          </ul>
        </KnowledgePoint>
      </Sentence>

      {/* === Sentence 23 === */}
      <Sentence quote={<div>
        <span>There </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>is</span>
        <span> something </span>
        <span>comforting about the warm glow</span>
        <span> </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>shed</span>
        <span> by </span>
        <span>advertisements</span>
        <span> </span>
        <span>on cold wet winter nights</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="shed" titleCn="v.流，洒，落（泪），射(发)出光，蜕皮、掉落（货物）">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SHED_DATA.map((r, i) => (
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

      {/* === Sentence 24 === */}
      <Sentence quote={<div>
        <span>Few things</span>
        <span> </span>
        <span>could</span>
        <span> </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>be</span>
        <span> </span>
        <span>more impressive</span>
        <span> </span>
        <span>than the peace</span>
        <span> </span>
        <span>that descends on deserted city streets at weekends when the thousands that travel to work every day are tucked away in their homes in the country</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="比较级表最高级" titleCn="">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
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
        <KnowledgePoint titleEn="tuck" titleCn="v.掖进，塞进">
          <ul className="space-y-1.5 mb-5">
            {TUCK_LIST.map((item, i) => (
              <li key={i} className="flex items-start gap-1.5 text-black text-base">
                <span className="inline-block size-1.5 rounded-full shrink-0 self-center mt-0.5"
                  style={{ background: DOT_COLORS[i % DOT_COLORS.length] }} />
                <span>
                  <span className="text-base">{item.en}</span>
                  {" "}
                  <span className="text-sm text-gray-400">{item.cn}</span>
                </span>
              </li>
            ))}
          </ul>
        </KnowledgePoint>
      </Sentence>

      {/* === Sentence 25 === */}
      <Sentence quote={<div>
        <span>It </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>has</span>
        <span> always </span>
        <span style={{ color: "#bd491e", fontWeight: 600 }}>been</span>
        <span> a mystery to me </span>
        <span>why city dwellers, who appreciate all these things, obstinately pretend that they would prefer to live in the country</span>
        <span>.</span>
        <br />
        <span className="text-[13px] text-gray-500 font-normal">
        </span>
      </div>} quoteClassName="mt-12 mb-5">
        <KnowledgePoint titleEn="It has always been a mystery to me" titleCn="这对我来说一直是个谜">
          <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">
            <TableHeader>
              <TableRow className="border-b border-gray-200 hover:bg-transparent">
                <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>
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
    </main>
  );
}
