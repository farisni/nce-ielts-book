"use client";

import { use, Fragment, useState, useMemo, useRef, useCallback, useEffect } from "react";
import { Search, ArrowUpDown, ChevronUp, ChevronDown, Shuffle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  createColumnHelper,
  type SortingState,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useSearchParams } from "next/navigation";
import { Drawer } from "@/app/_components/drawer";
import { ROOT_DATA } from "@/app/mock/root-atlas";
import { RootAtlasContent } from "@/app/_components/root-atlas-content";
import { RootAffixSections } from "@/app/_components/md-root-affix-sections";
import { RoughHighlight } from "@/components/rough-annotate";
import { InputGroup, InputField } from "@/components/ui/input-group";

import { articlesNce2, articlesNce3, articlesNce4, type VocabItem, type Article } from "@/app/mock";


const LEVEL_DATA: Record<string, { articles: Record<string, Article>; api: string; label: string }> = {
  nce2: { articles: articlesNce2 as unknown as Record<string, Article>, api: "/api/similar-words-nce2", label: "NCE2 单词" },
  nce3: { articles: articlesNce3 as unknown as Record<string, Article>, api: "/api/similar-words-nce3", label: "NCE3 单词" },
  nce4: { articles: articlesNce4 as unknown as Record<string, Article>, api: "/api/similar-words", label: "NCE4 单词" },
};

type VocabRow = VocabItem & {
  lessonId: string;
  lessonTitle: string;
  lessonNum: number;
  root?: string;
};

const ROW_HEIGHT = 44;
const EXPANDED_ESTIMATE = 300;
const SEARCH_HEADER_WIDTH = 156;
const TABLE_CONTENT_WIDTH = 940;

/* ─── Source sentence helpers ──────────────────────────────────── */
function normalizeText(v: string) {
  return v.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function getTermParts(word: string) {
  const without = word.replace(/\([^)]*\)/g, " ");
  const paren = Array.from(word.matchAll(/\(([^)]*)\)/g), (m) => m[1]);
  return [without, ...paren]
    .flatMap((p) => p.split(/[\/;,]+|\s+-\s+/))
    .map((p) => p.trim())
    .filter((p) => normalizeText(p).length > 2);
}

function getSourceSentences(article: Article, word: string) {
  const terms = getTermParts(word).map(normalizeText);
  if (!terms.length) return [];
  return article.original.paragraphs
    .flat()
    .filter((s) => terms.some((t) => normalizeText(s.text).includes(t)))
    .map(({ text, translation }) => ({ text, translation }));
}

function escapeRegExp(v: string) {
  return v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function HighlightSentence({ text, word }: { text: string; word: string }) {
  const terms = getTermParts(word).sort((a, b) => b.length - a.length);
  if (!terms.length) return <>{text}</>;
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");
  return (
    <>
      {text.split(pattern).map((part, i) =>
        terms.some((t) => normalizeText(part) === normalizeText(t)) ? (
          <RoughHighlight key={i} trigger="always" color="#fde68a">
            {part}
          </RoughHighlight>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

/* ─── Similar words API types ─────────────────────────────────── */
interface SimRef {
  word: string;
  meaning?: string;
  reason?: string;
  file?: string;
  pronunciation?: string;
  phrase?: string;
}
interface RootRef {
  word: string;
  meaning: string;
  file: string;
  line: number;
  root_form: string;
}
type SimData = Record<string, unknown> | undefined;

function flattenSim(items: SimRef[] | Record<string, SimRef[]> | undefined): SimRef[] {
  if (!items) return [];
  if (Array.isArray(items)) return items;
  return Object.values(items).flat();
}
function SimCard({ title, items }: { title: string; items: SimRef[] }) {
  if (!items.length) return null;
  return (
    <div className="rounded-md bg-background/70 p-3">
      <p className="mb-2 text-sm font-medium text-muted-foreground">{title}</p>
      <div className="flex flex-wrap gap-1">
        {items.slice(0, 8).map((item, i) => (
          <span
            key={`${item.word}-${i}`}
            className="inline-flex items-center rounded-md border border-border/50 bg-background px-1.5 py-0.5 text-xs leading-tight text-foreground/80"
            title={item.reason ?? item.meaning ?? ""}
          >
            {item.word}
            {item.meaning ? <span className="ml-0.5 text-muted-foreground">{item.meaning}</span> : null}
          </span>
        ))}
      </div>
    </div>
  );
}


function SimilarWords({ word, api, onRootClick }: { word: string; api: string; onRootClick?: () => void }) {
  const [data, setData] = useState<SimData>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(`${api}?word=${encodeURIComponent(word)}`)
      .then((r) => r.json())
      .then((d) => { if (!cancelled) { setData(d?.similar); setLoading(false); } })
      .catch(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [word]);

  if (loading) return <div className="mt-3 text-xs text-muted-foreground animate-pulse">Loading similar words...</div>;
  if (!data) return null;

  const ra = data.root_affix as { roots?: Record<string, RootRef[]> } | undefined;
  const spelling = flattenSim(data.spelling as SimRef[] | Record<string, SimRef[]> | undefined);
  const semantic = flattenSim(data.semantic as SimRef[] | Record<string, SimRef[]> | undefined);
  const coll = flattenSim(data.collocations as SimRef[] | Record<string, SimRef[]> | undefined);

  return (
    <div className="mt-4 grid grid-cols-3 gap-3">
      <RootAffixSections data={ra} onRootClick={onRootClick} />

      {spelling.length > 0 && (
        <div className="rounded-md bg-background/70 p-5">
          <p className="text-sm font-medium text-muted-foreground mb-4">拼写相似</p>
          <div className="ml-1 pl-4 border-l border-border/70 space-y-3">
            {spelling.slice(0, 8).map((item, i) => (
              <p key={i} className="text-base leading-relaxed">
                <span className="text-foreground">{item.word}</span>
                {item.meaning && <span className="text-muted-foreground ml-1.5 text-xs">{item.meaning}</span>}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {[{ title: "语义相关", items: semantic }, { title: "常用搭配", items: coll }]
          .filter((c) => c.items.length > 0)
          .map((c) => <SimCard key={c.title} title={c.title} items={c.items} />)}
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────── */

const columnHelper = createColumnHelper<VocabRow>();

export default function Page({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = use(params);
  const levelCfg = LEVEL_DATA[level] || LEVEL_DATA.nce4;

  const rootMap = useMemo(() => {
    return new Map<string, string>([
      ["inspect", "-spect- 看"],
      ["prospect", "-spect- 看"],
      ["perspective", "-spect- 看"],
      ["spectacle", "-spect- 看"],
      ["conspicuous", "-spic- 看"],
      ["retrospect", "-spect- 看"],
      ["predict", "-dict- 说"],
      ["dictate", "-dict- 说"],
      ["contradict", "-dict- 说"],
      ["verdict", "-dict- 说"],
      ["indicate", "-dic- 说"],
      ["dedicate", "-dic- 说"],
      ["conduct", "-duct- 引导"],
      ["deduce", "-duc- 引导"],
      ["induce", "-duc- 引导"],
      ["introduce", "-duc- 引导"],
      ["produce", "-duc- 引导"],
      ["reduce", "-duc- 引导"],
      ["transmit", "-mit- 送"],
      ["submit", "-mit- 送"],
      ["permit", "-mit- 送"],
      ["commit", "-mit- 送"],
      ["mission", "-miss- 送"],
      ["dismiss", "-miss- 送"],
      ["primary", "-prim- 第一"],
      ["prime", "-prim- 第一"],
      ["primitive", "-prim- 第一"],
      ["migration", "-migr- 迁移"],
      ["immigrant", "-migr- 迁移"],
      ["anthropologist", "-anthrop- 人类"],
      ["archaeologist", "-archae- 古老"],
      ["ancestor", "-cess- 走"],
      ["exceed", "-ceed- 走"],
      ["proceed", "-ceed- 走"],
      ["solitary", "-sol- 单独"],
      ["isolate", "-sol- 单独"],
      ["compel", "-pel- 驱动"],
      ["construct", "-struct- 建造"],
      ["instruct", "-struct- 建造"],
      ["depend", "-pend- 悬挂"],
      ["suspend", "-pend- 悬挂"],
      ["accelerate", "celer- 快速"],
      ["accommodate", "mod- 方式"],
      ["accord", "cord- 心"],
      ["administer", "minist- 服务"],
      ["adopt", "opt- 选择"],
      ["adverse", "vers- 转"],
      ["aesthetic", "aesthet- 感觉"],
      ["affluent", "flu- 流"],
      ["agent", "ag- 做"],
      ["aggravate", "grav- 重"],
      ["alien", "ali- 其他"],
      ["analysis", "lys- 解开"],
      ["artificial", "fic- 做"],
      ["assemble", "sembl- 一起"],
      ["assign", "sign- 标记"],
      ["assume", "sum- 拿"],
      ["attain", "tain- 拿"],
      ["auditory", "aud- 听"],
      ["avenge", "venge- 报复"],
      ["biology", "bio- 生命"],
      ["capable", "cap- 拿"],
      ["capture", "cap- 拿"],
      ["collapse", "laps- 滑"],
      ["comment", "ment- 心智"],
      ["compact", "pact- 固定"],
      ["compensate", "pens- 称量"],
      ["compile", "pil- 堆"],
      ["compose", "pos- 放"],
      ["conceive", "ceiv- 拿"],
      ["condense", "dens- 浓"],
      ["confess", "fess- 说"],
      ["confine", "fin- 界限"],
      ["confirm", "firm- 坚固"],
      ["conform", "form- 形状"],
      ["congest", "gest- 运"],
      ["conscious", "sci- 知道"],
      ["conserve", "serv- 保存"],
      ["consist", "sist- 站"],
      ["constant", "st- 站"],
      ["consult", "sult- 跳"],
      ["consume", "sum- 拿"],
      ["contain", "tain- 拿"],
      ["contest", "test- 见证"],
      ["contract", "tract- 拉"],
      ["convert", "vert- 转"],
      ["convince", "vinc- 征服"],
      ["cooperate", "oper- 工作"],
      ["credit", "cred- 相信"],
      ["cultivate", "cult- 耕种"],
      ["declare", "clar- 清楚"],
      ["decline", "clin- 倾"],
      ["define", "fin- 界限"],
      ["deliberate", "liber- 自由"],
      ["democracy", "cracy 统治"],
      ["demonstrate", "monstr- 展示"],
      ["deposit", "posit- 放"],
      ["describe", "scrib- 写"],
      ["desert", "sert- 连接"],
      ["design", "sign- 标记"],
      ["desperate", "sper- 希望"],
      ["destroy", "struct- 建造"],
      ["detect", "tect- 盖"],
      ["determine", "termin- 界限"],
      ["develop", "velop- 裹"],
      ["device", "vic- 看"],
      ["differ", "fer- 带"],
      ["digest", "gest- 运"],
      ["diminish", "min- 小"],
      ["discipline", "cip- 拿"],
      ["display", "play 展示"],
      ["dispose", "pos- 放"],
      ["dispute", "put- 想"],
      ["dissolve", "solv- 解开"],
      ["distinct", "stinct- 刺"],
      ["distort", "tort- 扭"],
      ["distribute", "tribut- 给"],
      ["disturb", "turb- 混乱"],
      ["diverse", "vers- 转"],
      ["domestic", "dom- 家"],
      ["dominate", "domin- 主人"],
      ["donate", "don- 给"],
      ["dramatic", "drama- 戏剧"],
      ["durable", "dur- 持续"],
      ["dynamic", "dynam- 力量"],
      ["economy", "nomy 管理"],
      ["educate", "duc- 引导"],
      ["effect", "fect- 做"],
      ["efficient", "fic- 做"],
      ["elaborate", "labor- 劳动"],
      ["elect", "lect- 选"],
      ["elegant", "leg- 选"],
      ["eliminate", "limin- 门槛"],
      ["emerge", "merg- 沉"],
      ["emotion", "mot- 动"],
      ["employ", "ploy- 折叠"],
      ["enable", "able 能"],
      ["encounter", "counter 对面"],
      ["encourage", "cour 心"],
      ["enforce", "force 力量"],
      ["engage", "gage 抵押"],
      ["enormous", "norm- 标准"],
      ["ensure", "sure 确定"],
      ["enterprise", "pris- 拿"],
      ["entertain", "tain- 拿"],
      ["enthusiasm", "thus- 神"],
      ["equip", "equip- 装备"],
      ["equivalent", "val- 价值"],
      ["erosion", "ros- 啃"],
      ["essential", "essent- 存在"],
      ["establish", "stabl- 站"],
      ["estimate", "estim- 估价"],
      ["evaluate", "valu- 价值"],
      ["evidence", "vid- 看"],
      ["evolve", "volv- 卷"],
      ["exact", "act- 做"],
      ["exaggerate", "agger- 堆"],
      ["examine", "amin- 称量"],
      ["exceed", "ceed- 走"],
      ["excel", "cel- 高"],
      ["exception", "cept- 拿"],
      ["exchange", "change 变化"],
      ["exclude", "clud- 关"],
      ["excuse", "cus- 原因"],
      ["execute", "secut- 跟随"],
      ["exercise", "erc- 约束"],
      ["exhaust", "haust- 抽"],
      ["exhibit", "hibit- 拿"],
      ["exist", "sist- 站"],
      ["expand", "pand- 展开"],
      ["expect", "spect- 看"],
      ["expel", "pel- 驱动"],
      ["expense", "pens- 称量"],
      ["experiment", "peri- 试"],
      ["expert", "pert- 试"],
      ["explain", "plain- 平"],
      ["explode", "plod- 拍"],
      ["exploit", "ploit- 折叠"],
      ["explore", "plor- 哭喊"],
      ["export", "port- 带"],
      ["expose", "pos- 放"],
      ["express", "press- 压"],
      ["extend", "tend- 伸展"],
      ["external", "extern- 外部"],
      ["extinct", "stinct- 刺"],
      ["extract", "tract- 拉"],
      ["extreme", "extr- 超出"],
      ["fabricate", "fabric- 制作"],
      ["facilitate", "facil- 容易"],
      ["faculty", "facul- 能力"],
      ["familiar", "famil- 家庭"],
      ["fascinate", "fascin- 魔力"],
      ["fatal", "fat- 命运"],
      ["fatigue", "fatig- 疲劳"],
      ["feature", "feat- 做"],
      ["fertile", "fert- 携带"],
      ["fiction", "fict- 虚构"],
      ["finance", "fin- 结束"],
      ["flexible", "flex- 弯曲"],
      ["fluctuate", "fluct- 流动"],
      ["focus", "foc- 焦点"],
      ["forecast", "fore- 前"],
      ["foresee", "fore- 前"],
      ["formal", "form- 形状"],
      ["formula", "form- 形状"],
      ["fortune", "fort- 机会"],
      ["fragile", "frag- 破碎"],
      ["frequent", "frequ- 频繁"],
      ["friction", "frict- 摩擦"],
      ["function", "funct- 执行"],
      ["fundamental", "fund- 基础"],
      ["generate", "gener- 产生"],
      ["generous", "gener- 出生"],
      ["genius", "gen- 出生"],
      ["genuine", "genu- 出生"],
      ["geology", "geo- 地球"],
      ["gesture", "gest- 运"],
      ["glorious", "glori- 荣耀"],
      ["govern", "govern- 统治"],
      ["gradual", "grad- 步"],
      ["grateful", "grat- 感谢"],
      ["gravity", "grav- 重"],
      ["guarantee", "guarant- 保证"],
      ["habit", "habit- 居住"],
      ["harmony", "harmon- 和谐"],
      ["hesitate", "hesit- 粘"],
      ["horizon", "horiz- 界限"],
      ["hostile", "host- 敌人"],
      ["humanity", "human- 人类"],
      ["humiliate", "humil- 谦卑"],
      ["humorous", "humor- 幽默"],
      ["identical", "ident- 相同"],
      ["identify", "ident- 相同"],
      ["ignore", "gnor- 知道"],
      ["illegal", "legal 合法"],
      ["illuminate", "lumin- 光"],
      ["illustrate", "lustr- 照亮"],
      ["imagine", "imagin- 想象"],
      ["imitate", "imit- 模仿"],
      ["immense", "mens- 测量"],
      ["impact", "pact- 固定"],
      ["implement", "ple- 填充"],
      ["imply", "ply- 折叠"],
      ["import", "port- 带"],
      ["impose", "pos- 放"],
      ["impress", "press- 压"],
      ["impulse", "puls- 推"],
      ["incident", "cid- 落"],
      ["incline", "clin- 倾"],
      ["include", "clud- 关"],
      ["income", "come 来"],
      ["increase", "creas- 生长"],
      ["incredible", "cred- 相信"],
      ["independent", "pend- 悬挂"],
      ["individual", "divid- 分开"],
      ["industry", "stru- 建造"],
      ["inevitable", "evit- 避免"],
      ["infect", "fect- 做"],
      ["infer", "fer- 带"],
      ["infinite", "fin- 界限"],
      ["influence", "flu- 流"],
      ["inform", "form- 形状"],
      ["ingredient", "gredi- 步"],
      ["inhabit", "habit- 居住"],
      ["inherit", "herit- 继承"],
      ["initial", "it- 走"],
      ["initiate", "it- 走"],
      ["injure", "jur- 法律"],
      ["innocent", "noc- 伤害"],
      ["innovate", "nov- 新"],
      ["inquire", "quir- 寻求"],
      ["insect", "sect- 切"],
      ["insert", "sert- 连接"],
      ["insist", "sist- 站"],
      ["inspect", "spect- 看"],
      ["inspire", "spir- 呼吸"],
      ["install", "stall- 放置"],
      ["instance", "st- 站"],
      ["instinct", "stinct- 刺"],
      ["institute", "stitut- 站"],
      ["insult", "sult- 跳"],
      ["insurance", "sur- 确定"],
      ["intend", "tend- 伸展"],
      ["intense", "tens- 伸展"],
      ["interact", "act- 做"],
      ["interest", "est 存在"],
      ["interfere", "fer- 打"],
      ["internal", "intern- 内部"],
      ["interpret", "pret- 说明"],
      ["interrupt", "rupt- 破"],
      ["interval", "val- 墙"],
      ["intimate", "intim- 最内"],
      ["invade", "vad- 走"],
      ["invent", "vent- 来"],
      ["invest", "vest- 穿衣"],
      ["investigate", "vestig- 足迹"],
      ["invite", "vit- 渴望"],
      ["involve", "volv- 卷"],
      ["isolate", "isol- 岛"],
      ["journey", "journ- 日"],
      ["judgment", "judg- 判断"],
      ["justice", "just- 公正"],
      ["justify", "just- 公正"],
      ["laboratory", "labor- 劳动"],
      ["landscape", "scape 形状"],
      ["launch", "launch- 投掷"],
      ["lecture", "lect- 读"],
      ["liberal", "liber- 自由"],
      ["liberty", "liber- 自由"],
      ["license", "lic- 允许"],
      ["linguistic", "lingu- 语言"],
      ["literary", "liter- 文字"],
      ["locate", "loc- 地方"],
      ["logical", "log- 说话"],
      ["luxury", "lux- 奢侈"],
      ["magnetic", "magnet- 磁"],
      ["magnificent", "magn- 大"],
      ["maintain", "tain- 拿"],
      ["majority", "major- 较大"],
      ["manage", "man- 手"],
      ["manifest", "fest- 打"],
      ["manipulate", "pul- 填充"],
      ["manufacture", "fact- 做"],
      ["margin", "margin- 边缘"],
      ["maximum", "maxim- 最大"],
      ["mechanic", "mechan- 机器"],
      ["medium", "medi- 中间"],
      ["memorial", "memor- 记忆"],
      ["mental", "ment- 心智"],
      ["mercy", "merc- 报酬"],
      ["migrate", "migr- 迁移"],
      ["military", "milit- 士兵"],
      ["minimum", "minim- 最小"],
      ["minister", "minist- 服务"],
      ["minority", "minor- 较小"],
      ["miracle", "mir- 惊奇"],
      ["miserable", "miser- 悲惨"],
      ["mission", "miss- 送"],
      ["mobile", "mob- 移动"],
      ["moderate", "moder- 适度"],
      ["modest", "mod- 方式"],
      ["modify", "mod- 方式"],
      ["monitor", "mon- 警告"],
      ["monopoly", "mono- 单独"],
      ["monster", "monstr- 展示"],
      ["moral", "mor- 习惯"],
      ["mortal", "mort- 死亡"],
      ["motion", "mot- 动"],
      ["motivate", "mot- 动"],
      ["multiply", "multi- 多"],
      ["mutual", "mut- 改变"],
      ["mystery", "myster- 秘密"],
      ["navigate", "nav- 船"],
      ["negative", "neg- 否定"],
      ["neglect", "lect- 选"],
      ["negotiate", "oti- 闲"],
      ["neutral", "neutr- 都不"],
      ["nominate", "nomin- 名字"],
      ["normal", "norm- 标准"],
      ["notable", "not- 知道"],
      ["notify", "not- 知道"],
      ["notion", "not- 知道"],
      ["nourish", "nour- 滋养"],
      ["novel", "nov- 新"],
      ["numerous", "numer- 数"],
      ["object", "ject- 投"],
      ["oblige", "lig- 绑"],
      ["observe", "serv- 保存"],
      ["obstacle", "sta- 站"],
      ["obtain", "tain- 拿"],
      ["obvious", "vi- 路"],
      ["occasion", "cas- 落"],
      ["occupy", "cup- 拿"],
      ["offend", "fend- 打"],
      ["offer", "fer- 带"],
      ["operate", "oper- 工作"],
      ["opponent", "pon- 放"],
      ["opportunity", "port- 门"],
      ["oppose", "pos- 放"],
      ["option", "opt- 选择"],
      ["orbit", "orb- 圆圈"],
      ["organize", "organ- 器官"],
      ["orient", "ori- 升起"],
      ["origin", "ori- 升起"],
      ["outline", "out- 外"],
      ["output", "out- 外"],
      ["overcome", "over- 越过"],
      ["overlook", "over- 在上"],
      ["overtake", "over- 越过"],
      ["parallel", "allel- 彼此"],
      ["participate", "cip- 拿"],
      ["particular", "part- 部分"],
      ["partner", "part- 部分"],
      ["passion", "pass- 忍受"],
      ["passive", "pass- 忍受"],
      ["patience", "pati- 忍受"],
      ["peculiar", "pecul- 独特"],
      ["penalty", "pen- 惩罚"],
      ["penetrate", "penetr- 进入"],
      ["perceive", "ceiv- 拿"],
      ["perfect", "fect- 做"],
      ["perform", "form- 形状"],
      ["period", "peri- 周围"],
      ["permanent", "man- 停留"],
      ["permit", "mit- 送"],
      ["persist", "sist- 站"],
      ["personality", "person- 人"],
      ["persuade", "suad- 建议"],
      ["phenomenon", "phen- 出现"],
      ["philosophy", "soph- 智慧"],
      ["physical", "phys- 自然"],
      ["pioneer", "pion- 脚"],
      ["plastic", "plast- 塑造"],
      ["plausible", "plaus- 拍"],
      ["pleasure", "pleas- 高兴"],
      ["politics", "polit- 城市"],
      ["pollute", "lut- 泥"],
      ["popular", "popul- 人民"],
      ["portion", "port- 部分"],
      ["portrait", "trait- 拉"],
      ["possess", "sess- 坐"],
      ["potential", "potent- 能力"],
      ["poverty", "pover- 贫穷"],
      ["practical", "pract- 做"],
      ["precede", "ced- 走"],
      ["precious", "preci- 价值"],
      ["precise", "cis- 切"],
      ["predict", "dict- 说"],
      ["prefer", "fer- 带"],
      ["prejudice", "jud- 判断"],
      ["preliminary", "limin- 门槛"],
      ["prepare", "par- 准备"],
      ["prescribe", "scrib- 写"],
      ["preserve", "serv- 保存"],
      ["preside", "sid- 坐"],
      ["pressure", "press- 压"],
      ["presume", "sum- 拿"],
      ["pretend", "tend- 伸展"],
      ["prevail", "vail- 强"],
      ["previous", "vi- 路"],
      ["principle", "cip- 拿"],
      ["privilege", "leg- 法律"],
      ["procedure", "ced- 走"],
      ["process", "cess- 走"],
      ["proclaim", "claim- 喊"],
      ["profession", "fess- 说"],
      ["profit", "fit- 做"],
      ["profound", "found- 底"],
      ["progress", "gress- 走"],
      ["prohibit", "hibit- 拿"],
      ["project", "ject- 投"],
      ["prominent", "min- 突出"],
      ["promise", "mis- 送"],
      ["promote", "mot- 动"],
      ["pronounce", "nounce- 说"],
      ["proper", "proper- 自己的"],
      ["property", "proper- 自己的"],
      ["propose", "pos- 放"],
      ["prosecute", "secut- 跟随"],
      ["prospect", "spect- 看"],
      ["protect", "tect- 盖"],
      ["protest", "test- 见证"],
      ["provide", "vid- 看"],
      ["provoke", "vok- 喊"],
      ["psychology", "psycho- 心灵"],
      ["public", "publ- 人民"],
      ["publish", "publ- 人民"],
      ["purchase", "chas- 追逐"],
      ["pursue", "su- 跟随"],
      ["qualify", "qual- 种类"],
      ["quantity", "quant- 多少"],
      ["radical", "radic- 根"],
      ["random", "rand- 跑"],
      ["range", "rang- 排列"],
      ["rapid", "rap- 抓"],
      ["rational", "ration- 理性"],
      ["reaction", "act- 做"],
      ["realistic", "real- 真实"],
      ["rebel", "bel- 战争"],
      ["recall", "call 喊"],
      ["recede", "ced- 走"],
      ["receive", "ceiv- 拿"],
      ["recent", "recent- 新近"],
      ["recognize", "cogn- 知道"],
      ["recommend", "mend 委托"],
      ["record", "cord- 心"],
      ["recover", "cover 盖"],
      ["recruit", "cruit- 生长"],
      ["reduce", "duc- 引导"],
      ["refer", "fer- 带"],
      ["reflect", "flect- 弯"],
      ["reform", "form- 形状"],
      ["refresh", "fresh 新鲜"],
      ["refuge", "fug- 逃"],
      ["refuse", "fus- 倒"],
      ["regard", "gard- 看"],
      ["region", "reg- 统治"],
      ["register", "gist- 运"],
      ["regulate", "regul- 规则"],
      ["reject", "ject- 投"],
      ["relate", "lat- 带"],
      ["release", "leas- 松"],
      ["relevant", "lev- 升"],
      ["reliable", "reli- 依赖"],
      ["relief", "lief- 升"],
      ["religion", "lig- 绑"],
      ["reluctant", "luct- 挣扎"],
      ["rely", "ly- 绑"],
      ["remain", "main- 停留"],
      ["remark", "mark- 标记"],
      ["remedy", "med- 治愈"],
      ["remote", "mot- 移动"],
      ["remove", "mov- 移动"],
      ["render", "rend- 给"],
      ["renew", "new 新"],
      ["repair", "pair- 准备"],
      ["repeat", "peat- 寻求"],
      ["replace", "place 放"],
      ["represent", "present 呈现"],
      ["reproduce", "produce 生产"],
      ["reputation", "put- 想"],
      ["request", "quest- 寻求"],
      ["require", "quir- 寻求"],
      ["rescue", "scu- 摇"],
      ["research", "search 搜索"],
      ["resemble", "sembl- 相似"],
      ["reserve", "serv- 保存"],
      ["resign", "sign- 标记"],
      ["resist", "sist- 站"],
      ["resolve", "solv- 解开"],
      ["resort", "sort- 出去"],
      ["resource", "source 来源"],
      ["respect", "spect- 看"],
      ["respond", "spond- 承诺"],
      ["responsible", "spons- 承诺"],
      ["restore", "stor- 建立"],
      ["restrain", "strain- 拉"],
      ["restrict", "strict- 拉"],
      ["result", "sult- 跳"],
      ["retain", "tain- 拿"],
      ["retire", "tir- 拉"],
      ["retreat", "treat- 拉"],
      ["reveal", "veal- 面纱"],
      ["revenue", "ven- 来"],
      ["reverse", "vers- 转"],
      ["review", "view 看"],
      ["revise", "vis- 看"],
      ["revolution", "volut- 卷"],
      ["reward", "ward- 看"],
      ["ridiculous", "ridic- 笑"],
      ["rigid", "rig- 僵硬"],
      ["rival", "riv- 溪流"],
      ["routine", "rout- 路"],
      ["sacrifice", "sacr- 神圣"],
      ["satisfy", "satis- 足够"],
      ["schedule", "sched- 叶子"],
      ["scheme", "schem- 形状"],
      ["scholar", "schol- 学校"],
      ["scope", "scop- 看"],
      ["secure", "cur- 关心"],
      ["select", "lect- 选"],
      ["senior", "sen- 老"],
      ["sensation", "sens- 感觉"],
      ["sensitive", "sens- 感觉"],
      ["separate", "par- 准备"],
      ["sequence", "sequ- 跟随"],
      ["series", "ser- 连接"],
      ["severe", "sever- 严肃"],
      ["shield", "shield- 盾"],
      ["signal", "sign- 标记"],
      ["significance", "sign- 标记"],
      ["similar", "simil- 相似"],
      ["simplify", "simpl- 简单"],
      ["sincere", "sincer- 真诚"],
      ["situation", "situ- 位置"],
      ["skeptical", "skept- 看"],
      ["social", "soci- 同伴"],
      ["solar", "sol- 太阳"],
      ["sophisticated", "soph- 智慧"],
      ["source", "sour- 升起"],
      ["special", "spec- 种类"],
      ["specific", "spec- 种类"],
      ["speculate", "specul- 看"],
      ["spiritual", "spirit- 精神"],
      ["splendid", "splend- 闪耀"],
      ["sponsor", "spons- 承诺"],
      ["stable", "st- 站"],
      ["standard", "stand- 站"],
      ["statistics", "stat- 站"],
      ["status", "stat- 站"],
      ["stimulate", "stimul- 刺"],
      ["strategy", "strateg- 将军"],
      ["structure", "struct- 建造"],
      ["struggle", "strugg- 努力"],
      ["submit", "mit- 送"],
      ["subsequent", "sequ- 跟随"],
      ["substance", "st- 站"],
      ["substitute", "stitut- 站"],
      ["succeed", "ceed- 走"],
      ["sufficient", "fic- 做"],
      ["suggest", "gest- 运"],
      ["summarize", "summ- 总和"],
      ["superficial", "fic- 做"],
      ["superior", "super- 上"],
      ["supplement", "ple- 填充"],
      ["support", "port- 带"],
      ["suppose", "pos- 放"],
      ["suppress", "press- 压"],
      ["supreme", "suprem- 最高"],
      ["surface", "sur- 上"],
      ["surgery", "surg- 手"],
      ["surplus", "plus 更多"],
      ["surrender", "rend- 给"],
      ["survey", "vey- 看"],
      ["survive", "viv- 活"],
      ["suspect", "spect- 看"],
      ["suspend", "pend- 悬挂"],
      ["sustain", "tain- 拿"],
      ["symbol", "bol- 投"],
      ["sympathy", "path- 感觉"],
      ["symptom", "ptom- 落"],
      ["synthetic", "thet- 放"],
      ["system", "stem- 站"],
      ["technique", "techn- 技艺"],
      ["technology", "techn- 技艺"],
      ["temporary", "tempor- 时间"],
      ["tendency", "tend- 伸展"],
      ["tension", "tens- 伸展"],
      ["terminal", "termin- 界限"],
      ["territory", "terr- 土地"],
      ["terror", "terr- 害怕"],
      ["textile", "text- 编织"],
      ["therapy", "therap- 治疗"],
      ["thorough", "thor- 穿过"],
      ["threaten", "threat- 威胁"],
      ["tolerate", "toler- 忍受"],
      ["tradition", "dit- 给"],
      ["transfer", "fer- 带"],
      ["transform", "form- 形状"],
      ["transmit", "mit- 送"],
      ["transparent", "par- 出现"],
      ["transport", "port- 带"],
      ["tremendous", "trem- 颤抖"],
      ["trend", "trend- 转"],
      ["tribute", "tribut- 给"],
      ["triumph", "triumph- 胜利"],
      ["trivial", "vi- 路"],
      ["typical", "typ- 类型"],
      ["ultimate", "ultim- 最后"],
      ["undergo", "under- 下"],
      ["underline", "under- 下"],
      ["undertake", "under- 下"],
      ["unique", "uni- 一"],
      ["universal", "vers- 转"],
      ["update", "up- 向上"],
      ["upgrade", "up- 向上"],
      ["urban", "urb- 城市"],
      ["urgent", "urg- 驱动"],
      ["utilize", "util- 使用"],
      ["vacant", "vac- 空"],
      ["vague", "vag- 漫游"],
      ["valid", "val- 强"],
      ["variety", "vari- 变化"],
      ["vehicle", "veh- 带"],
      ["venture", "vent- 来"],
      ["verify", "ver- 真实"],
      ["version", "vers- 转"],
      ["vertical", "vert- 转"],
      ["victim", "vict- 征服"],
      ["vigorous", "vig- 活力"],
      ["violate", "viol- 力量"],
      ["violent", "viol- 力量"],
      ["virtual", "virt- 男人"],
      ["virtue", "virt- 男人"],
      ["visible", "vis- 看"],
      ["vision", "vis- 看"],
      ["visual", "vis- 看"],
      ["vital", "vit- 生命"],
      ["vivid", "viv- 活"],
      ["volume", "volv- 卷"],
      ["voluntary", "volunt- 意愿"],
      ["vulnerable", "vulner- 伤口"],
      ["warrant", "warrant- 保证"],
      ["withdraw", "draw 拉"],
      ["witness", "wit- 知道"],
      ["worship", "worth- 价值"],
    ]);
  }, []);

  const getWordRoot = useCallback((word: string) => {
    return rootMap.get(word) || rootMap.get(word.toLowerCase());
  }, [rootMap]);

  const allWords: VocabRow[] = Object.values(levelCfg.articles).flatMap((article) =>
    article.vocabulary.map((v) => ({
      ...v,
      lessonId: article.id,
      lessonTitle: article.title,
      lessonNum: article.lesson,
      root: getWordRoot(v.word),
    }))
  );
  const searchParams = useSearchParams();
  const initialLesson = searchParams.get("lesson") ?? Object.values(levelCfg.articles).sort((a, b) => a.lesson - b.lesson)[0]?.id ?? "";

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [lesson, setLesson] = useState(initialLesson);
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleRow = useCallback((id: number) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const handleRootClick = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const lessonList = useMemo(
    () =>
      Object.values(levelCfg.articles)
        .sort((a, b) => a.lesson - b.lesson)
        .map((a) => ({ id: a.id, lesson: a.lesson, title: a.titleCn ?? a.title })),
    []
  );

  const words = useMemo(() => {
    if (!lesson) return allWords;
    const article = levelCfg.articles[lesson];
    if (!article) return allWords;
    return article.vocabulary.map((v) => ({
      root: getWordRoot(v.word),
      ...v,
      lessonId: article.id,
      lessonTitle: article.titleCn ?? article.title,
      lessonNum: article.lesson,
    }));
  }, [lesson, getWordRoot]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("lessonNum", {
        header: "",
        cell: (info) => <span className="text-muted-foreground/50 text-xs">{info.row.index + 1}</span>,
        size: 48,
        enableSorting: false,
      }),
      columnHelper.accessor("word", {
        header: "单词",
        cell: (info) => <span className="font-medium text-[17px]">{info.getValue()}</span>,
        size: 172,
      }),
      columnHelper.accessor("phonetic", {
        header: "音标",
        cell: (info) => {
          const v = info.getValue();
          if (!v || v === "//") return null;
          return <span className="text-muted-foreground text-xs">{v}</span>;
        },
        size: 132,
        enableSorting: false,
      }),
      columnHelper.accessor("meaning", {
        header: "释义",
        cell: (info) => (
          <span className="text-muted-foreground">
            <span className="text-muted-foreground/60">{info.row.original.pos}</span> {info.getValue()}
          </span>
        ),
        size: 252,
        enableSorting: false,
      }),
      columnHelper.accessor("root", {
        header: "词根词缀",
        cell: (info) => {
          const v = info.getValue();
          if (!v) return <span className="text-muted-foreground/30">—</span>;
          const parts = v.split(/ (.+)/); return <span><span className="tracking-wide text-gray-900 font-mono font-normal text-[15px]">{parts[0]}</span> <span className="text-xs text-muted-foreground">{parts[1]}</span></span>;
        },
        size: 180,
        enableSorting: false,
      }),
    ],
    []
  );

  const table = useReactTable({
    data: words,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const rows = table.getRowModel().rows;
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      el.classList.add("is-scrolling");
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        el.classList.remove("is-scrolling");
      }, 600);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  const estimateSize = useCallback(
    (index: number) => {
      const row = rows[index];
      return row && expandedRows.has(row.index) ? EXPANDED_ESTIMATE : ROW_HEIGHT;
    },
    [rows, expandedRows]
  );

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize,
    overscan: 8,
  });

  /* lookup source sentences for each word once */
  const sentenceMap = useMemo(() => {
    const map = new Map<string, { text: string; translation: string }[]>();
    if (lesson) {
      const article = levelCfg.articles[lesson];
      if (article) {
        for (const v of article.vocabulary) {
          map.set(v.word, getSourceSentences(article, v.word));
        }
      }
    }
    return map;
  }, [lesson, getWordRoot]);

  return (
    <>
      <Drawer isOpen={drawerOpen} onClose={handleCloseDrawer} title="词根图谱">
        <RootAtlasContent />
      </Drawer>
      <section className="mx-auto flex w-[1022px] min-w-[1022px] flex-none flex-col min-h-0 rounded-md p-6">
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-2xl font-bold">{levelCfg.label}</h1>
        <span className="text-sm text-muted-foreground">{words.length} words</span>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-[#f0f0f0]"
          onClick={() => {
            const ids = lessonList.map(l => l.id);
            const randomId = ids[Math.floor(Math.random() * ids.length)];
            setLesson(randomId);
          }}
        >
          <Shuffle />
        </Button>
        <Select value={lesson || "all"} onValueChange={(v) => setLesson(v === "all" ? "" : v)}>
          <SelectTrigger className="w-56 text-sm bg-transparent border border-border rounded-xl px-3 py-1.5 h-auto min-h-0 text-muted-foreground [&_svg]:size-3">
            <span className="truncate flex-1 text-left">
              {lesson
                ? (() => { const l = lessonList.find(x => x.id === lesson); return l ? `L${l.lesson} · ${l.title}` : ""; })()
                : `全部 (${allWords.length})`}
            </span>
          </SelectTrigger>
          <SelectContent className="min-w-0" scrollFade={true}>
            <SelectItem value="all" className="truncate min-w-0 [&>span]:!shrink [&>span]:truncate">全部 ({allWords.length})</SelectItem>
            {lessonList.map((l) => (
              <SelectItem key={l.id} value={l.id} className="truncate min-w-0 [&>span]:!shrink [&>span]:truncate">
                L{l.lesson} · {l.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div ref={scrollRef} className="scrollbar-ghost rounded-md border border-border" style={{ height: "calc(100vh - 320px)" }}>
        <div style={{ minWidth: TABLE_CONTENT_WIDTH }}>
          <div className="sticky top-0 z-40 flex bg-background border-b border-border/50" style={{ height: 44 }}>
            <div className="flex min-w-0 flex-none" style={{ width: TABLE_CONTENT_WIDTH - SEARCH_HEADER_WIDTH }}>
              {table.getHeaderGroups().map((hg) =>
                hg.headers.map((header) => (
                  <div
                    key={header.id}
                    className="px-2 flex items-center text-sm font-medium text-muted-foreground tracking-wide uppercase truncate"
                    style={{ width: header.getSize(), minWidth: header.getSize() }}
                  >
                    {header.column.getCanSort() ? (
                      <button onClick={header.column.getToggleSortingHandler()} className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getIsSorted() === "asc" ? <ChevronUp className="size-3" /> : header.column.getIsSorted() === "desc" ? <ChevronDown className="size-3" /> : <ArrowUpDown className="size-3 opacity-30" />}
                      </button>
                    ) : (
                      flexRender(header.column.columnDef.header, header.getContext())
                    )}
                  </div>
                ))
              )}
            </div>
            <div className="flex w-[156px] flex-none items-center justify-end pr-2 pl-2">
              <InputGroup className="h-7 w-full rounded-md border-0 bg-transparent transition-all focus-within:border focus-within:border-border/60 focus-within:bg-[#ffffff] focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-border/60">
                <InputField
                  icon={Search}
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  placeholder="搜索..."
                  className="text-[11px] placeholder:text-muted-foreground/30"
                />
              </InputGroup>
            </div>

          </div>

          <div style={{ height: rowVirtualizer.getTotalSize(), position: "relative" }}>
            {rowVirtualizer.getVirtualItems().map((vRow) => {
              const row = rows[vRow.index];
              if (!row) return null;
              const word = row.original;
              const isExpanded = expandedRows.has(row.index);
              const sentences = sentenceMap.get(word.word) ?? [];

              return (
                <div
                  key={row.id}
                  ref={rowVirtualizer.measureElement}
                  data-index={vRow.index}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", transform: `translateY(${vRow.start}px)`, boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.06)" }}
                >
                  <div
                    onDoubleClick={() => toggleRow(row.index)}
                    className={`flex cursor-pointer transition-colors ${isExpanded ? "bg-muted/30" : "hover:bg-muted/30"}`}
                    style={{ height: ROW_HEIGHT, minHeight: ROW_HEIGHT }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <div key={cell.id} className="px-2 truncate flex items-center text-sm" style={{ width: cell.column.getSize(), minWidth: cell.column.getSize() }}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </div>
                    ))}
                  </div>

                  {isExpanded && (
                    <div className="bg-muted/10 px-4 py-3">
                      {sentences.length > 0 && (
                        <div className="mt-3">
                          <div className="flex flex-col gap-2">
                            {sentences.slice(0, 1).map((s, i) => (
                              <div key={i} className="rounded-md bg-background/70 p-3">
                                <p className="text-lg leading-7"><HighlightSentence text={s.text} word={word.word} /></p>
                                <p className="mt-1 text-base leading-6 text-muted-foreground">{s.translation}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <SimilarWords api={levelCfg.api} word={word.word} onRootClick={handleRootClick} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
