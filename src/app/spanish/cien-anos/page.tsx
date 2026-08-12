"use client"

import { Fragment } from "react";
import { cn } from "@/lib/utils";

/** 《百年孤独》开篇 · Cien años de soledad — 加西亚·马尔克斯（Gabriel García Márquez） */

/** 句子成分 → 标注色（参照 NCE3 语法标注色板：谓语橙红 / 状语琥珀 / 名词与从句青色） */
const ROLE_COLORS: Record<string, string> = {
  predicate: "#c2410c",
  adjunct: "#d97706",
  nominal: "#418faf",
};

/** 按成分角色归类到 NCE3 色板 */
function roleKind(role: string): keyof typeof ROLE_COLORS {
  if (/谓语/.test(role)) return "predicate";
  if (/状语/.test(role)) return "adjunct";
  return "nominal";
}

/** 行间注角色名取简写（去掉括号说明） */
function shortRole(role: string): string {
  return role.split("（")[0];
}

type Segment = { text: string; role?: string; color?: string };

/** 按成分文本在原句中定位，把句子拆成「普通文本 / 着色成分」片段序列 */
function splitComponents(es: string, components: { role: string; text: string }[]): Segment[] {
  const segments: Segment[] = [];
  let cursor = 0;
  for (const c of components) {
    const idx = es.indexOf(c.text, cursor);
    if (idx === -1) continue;
    if (idx > cursor) segments.push({ text: es.slice(cursor, idx) });
    segments.push({ text: c.text, role: c.role, color: ROLE_COLORS[roleKind(c.role)] });
    cursor = idx + c.text.length;
  }
  if (cursor < es.length) segments.push({ text: es.slice(cursor) });
  return segments;
}

const ES_PARAGRAPH =
  "Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos. El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo.";

const ZH_PARAGRAPH =
  "多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。那时的马孔多是一个二十户人家的村落，泥巴和芦苇盖成的屋子沿河岸排开，湍急的河水清澈见底，河床里卵石洁白光滑宛如史前巨蛋。世界新生伊始，许多事物还没有名字，提到的时候尚需用手指指点点。";

/** 逐句对照：西语原句 + 范晔中译 + 句子成分 */
const SENTENCES: { es: string; zh: string; components: { role: string; text: string }[] }[] = [
  {
    es: "Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.",
    zh: "多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。",
    components: [
      { role: "时间状语", text: "Muchos años después" },
      { role: "地点状语", text: "frente al pelotón de fusilamiento" },
      { role: "主语", text: "el coronel Aureliano Buendía" },
      { role: "谓语", text: "había de recordar" },
      { role: "宾语", text: "aquella tarde remota" },
      { role: "定语从句（修饰 tarde）", text: "en que su padre lo llevó a conocer el hielo" },
    ],
  },
  {
    es: "Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos.",
    zh: "那时的马孔多是一个二十户人家的村落，泥巴和芦苇盖成的屋子沿河岸排开，湍急的河水清澈见底，河床里卵石洁白光滑宛如史前巨蛋。",
    components: [
      { role: "主语", text: "Macondo" },
      { role: "谓语（系动词）", text: "era" },
      { role: "时间状语", text: "entonces" },
      { role: "表语", text: "una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas" },
      { role: "定语从句（修饰 aguas diáfanas）", text: "que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos" },
    ],
  },
  {
    es: "El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo.",
    zh: "世界新生伊始，许多事物还没有名字，提到的时候尚需用手指指点点。",
    components: [
      { role: "主语", text: "El mundo" },
      { role: "谓语（系动词）", text: "era" },
      { role: "表语", text: "tan reciente" },
      { role: "结果从句（tan…que）", text: "que muchas cosas carecían de nombre" },
      { role: "并列分句（表目的）", text: "y para mencionarlas había que señalarlas con el dedo" },
    ],
  },
];

/**
 * 关键词汇（供学习参考）：补充音标、词性、完整释义与真人发音。
 * 数据源：西语助手 esdict.cn（词条由查询中心词得到，真人发音为 fs-gateway mp3）。
 */
type VocabEntry = {
  /** 原文短语/词组 */
  es: string;
  /** 中文释义（本文语境） */
  zh: string;
  /** 查询用的中心词（esdict 词条） */
  headword?: string;
  /** 音标 */
  phonetic?: string;
  /** 词性 */
  pos?: string;
  /** 完整释义 */
  defs?: string[];
  /** 真人发音 mp3（可能为空） */
  audio?: string;
};

const VOCAB: VocabEntry[] = [
  {
    es: "el pelotón de fusilamiento",
    zh: "行刑队",
    headword: "pelotón",
    phonetic: "/pelo'ton/",
    pos: "m.",
    defs: ["1.（毛、发、线等）团", "2.（径赛）组", "3.【转】人群", "4.【军】小队；排"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/54aa4d3c-319f-416f-a6f6-70cf17f8d939.mp3",
  },
  {
    es: "recordar",
    zh: "回想起，记起",
    headword: "recordar",
    phonetic: "/rekoɾ'ðaɾ/",
    pos: "tr.",
    defs: ["1. 记住", "2. 记起，想起，回忆起", "3. 像，联想到"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/73d18c42-7ceb-40c3-80d3-98a2125e5db3.mp3",
  },
  {
    es: "el hielo",
    zh: "冰",
    headword: "hielo",
    phonetic: "/'jelo/",
    pos: "m.",
    defs: ["1. 冰", "2. 结冰，冰冻", "3.【转】冷漠，冷淡", "4.【转】惊愕，惊呆"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/3aaf5d5b-b39c-45c2-848d-df59999ff5b0.mp3",
  },
  {
    es: "la aldea",
    zh: "村落，小村庄",
    headword: "aldea",
    phonetic: "/al'dea/",
    pos: "f.",
    defs: ["村，村庄"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/16b2b14d-1617-4087-9304-e00c5e76fbde.mp3",
  },
  {
    es: "el barro",
    zh: "泥巴，黏土",
    headword: "barro",
    phonetic: "/'baro/",
    pos: "m.",
    defs: ["1. 泥巴，稀泥，烂泥", "2.（烧制器皿用的）黏土", "3.【转】价值不大之物", "4.【转】耻辱"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/61be2821-b910-4cb5-a1a2-f00f66a85871.mp3",
  },
  {
    es: "la cañabrava",
    zh: "芦苇（大叶芦竹）",
    headword: "cañabrava",
    pos: "f.",
    defs: ["（拉丁美洲）芦苇，芦竹"],
  },
  {
    es: "a la orilla de",
    zh: "在……岸边",
    headword: "orilla",
    phonetic: "/o'ɾiʎa/",
    pos: "f.",
    defs: ["1. 边，边缘，边沿", "2. 岸边", "3.【口】靠近，挨近"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/fc2f92a7-1fcf-4b2e-96da-c347e582bbc9.mp3",
  },
  {
    es: "aguas diáfanas",
    zh: "清澈见底的水",
    headword: "diáfano",
    phonetic: "/'djafano/",
    pos: "adj.",
    defs: ["1. 透明的", "2. 清澈的，洁净的", "3.【转】光明磊落的"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/2f153d14-9972-418f-8135-ddb410d9861b.mp3",
  },
  {
    es: "el lecho",
    zh: "河床；床",
    headword: "lecho",
    phonetic: "/'leʧo/",
    pos: "m.",
    defs: ["1. 床，榻，铺", "2. 河床", "3. 湖底，海底", "4. 层；地层，岩层"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/7636c09e-cc24-4967-bd06-c6a37f57f5a1.mp3",
  },
  {
    es: "piedras pulidas",
    zh: "光滑的卵石",
    headword: "pulido",
    phonetic: "/pu'liðo/",
    pos: "adj.",
    defs: ["光滑的，光洁的，漂亮的"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/759a0064-a4bc-4175-8fb1-8048bcff446f.mp3",
  },
  {
    es: "huevos prehistóricos",
    zh: "史前巨蛋",
    headword: "prehistórico",
    phonetic: "/pɾejs̺'toɾiko/",
    pos: "adj.",
    defs: ["史前的"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/1e12b091-acf1-425d-a68b-e68e24ccf1db.mp3",
  },
  {
    es: "carecer de nombre",
    zh: "没有名字",
    headword: "carecer",
    pos: "intr.",
    defs: ["«de» 欠缺，缺少，缺乏"],
  },
  {
    es: "señalar con el dedo",
    zh: "用手指指点点",
    headword: "señalar",
    phonetic: "/s̺eɲa'laɾ/",
    pos: "tr.",
    defs: ["1. 标明，指出", "2.（在某处）做记号，做标记", "3. 确定，规定"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/bdc1ee3d-ce72-43b5-8fb8-1a393f2ee938.mp3",
  },
];

/**
 * 开篇第一句的实词解析（虚词与专有名词略）。
 * 与 VOCAB 重复的词（pelotón / recordar / hielo）不重复列出。
 */
const SENTENCE_VOCAB: VocabEntry[] = [
  {
    es: "mucho",
    zh: "很多的，大量的",
    phonetic: "/'muʧo/",
    pos: "adj.",
    defs: ["1. 很多的，大量的；巨大的，非常的", "2.【副】很，大量；更为，更加"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/c730b97e-fc19-43f7-b1a7-4726db7d3a80.mp3",
  },
  {
    es: "año",
    zh: "年",
    phonetic: "/'aɲo/",
    pos: "m.",
    defs: ["1. 年", "2. 年度", "3. pl. 岁数，年纪"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/da6c8b40-f07c-47c0-b7b9-1da3a24c5cde.mp3",
  },
  {
    es: "después",
    zh: "之后，后来",
    phonetic: "/des̺pu'es̺/",
    pos: "adv.",
    defs: ["1. 之后，后来，以后", "2. 在后面"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/7ab2daaf-317a-4734-81e6-d545ea7a215a.mp3",
  },
  {
    es: "frente",
    zh: "前面；面对",
    phonetic: "/'fɾente/",
    pos: "f.",
    defs: ["1. 前面，前线", "2. 前额（f.）", "3. frente a 面对，面向"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/f296917d-99b7-47b9-860d-6d10b94d5a44.mp3",
  },
  {
    es: "fusilamiento",
    zh: "枪决，行刑",
    phonetic: "/fus̺ila'mjento/",
    pos: "m.",
    defs: ["1. 枪毙，枪决"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/90d7cfe7-1d1a-4b2c-95a8-7f2eba56418f.mp3",
  },
  {
    es: "coronel",
    zh: "上校",
    pos: "m.",
    defs: ["1.【军】上校"],
  },
  {
    es: "aquel",
    zh: "那个（远指）",
    phonetic: "/a'kel/",
    pos: "adj.dem.",
    defs: ["1. 那个，那些（指离说话双方都较远的人或物）"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/3a7b7e95-904a-432e-a367-403ffe723975.mp3",
  },
  {
    es: "tarde",
    zh: "下午，午后",
    phonetic: "/'taɾðe/",
    pos: "f.",
    defs: ["1. 下午，午后", "2.【副】晚，迟"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/504520f4-6506-492f-91aa-fdcda2fbd3b1.mp3",
  },
  {
    es: "remoto",
    zh: "遥远的",
    phonetic: "/re'moto/",
    pos: "adj.",
    defs: ["1. 遥远的", "2.【转】不太可能的"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/56454dfd-e91c-4860-af6f-aad2c1be5979.mp3",
  },
  {
    es: "padre",
    zh: "父亲",
    phonetic: "/'paðɾe/",
    pos: "m.",
    defs: ["1. 父亲", "2. pl. 父母，双亲"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/21d72869-53bb-4c87-9671-7fd572c0efdf.mp3",
  },
  {
    es: "llevar",
    zh: "带，带去",
    phonetic: "/ʎe'βaɾ/",
    pos: "tr.",
    defs: ["1. 带，带去，携带", "2. 运送，运载"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/0e3ad7d4-f3b7-4295-b757-f319bd53159a.mp3",
  },
  {
    es: "conocer",
    zh: "认识，知道",
    phonetic: "/kono'θeɾ/",
    pos: "tr.",
    defs: ["1. 认识，了解，熟悉", "2. 知道"],
    audio: "https://fs-gateway.frdic.com/buckets/main/wordmp3/534cb24a-128f-479d-ab2e-d4cb9055820d.mp3",
  },
];

export default function SpanishCienAnosPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 pb-20 pt-8">
      {/* 页头 */}
      <header className="mb-8 text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Spanish · Literatura · García Márquez
        </p>
        <h1 className="mb-2 text-2xl font-semibold tracking-wide text-foreground">
          《百年孤独》开篇 · Cien años de soledad
        </h1>
        <p className="mx-auto max-w-lg text-sm leading-7 text-muted-foreground">
          加西亚·马尔克斯（Gabriel García Márquez）· 1967。全文第一段，西语原版开篇被誉为当代西班牙语文学最著名的段落之一。
        </p>
      </header>

      {/* 西语原文 */}
      <section className="mb-8">
        <h2 className="mb-3 text-sm font-medium text-foreground">
          西语原文 <span className="ml-1 font-normal text-muted-foreground">El texto original</span>
        </h2>
        <div className="px-7 py-7">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Cien años de soledad</p>
          <p className="text-xl leading-[2.05] text-foreground [font-family:'Lyon_Text',Georgia,'LXGW_Wenkai_Screen',serif]">
            {ES_PARAGRAPH}
          </p>
        </div>
      </section>

      {/* 中文译文 */}
      <section className="mb-8">
        <h2 className="mb-3 text-sm font-medium text-foreground">
          中文译文 <span className="ml-1 font-normal text-muted-foreground">Traducción china · 范晔 译</span>
        </h2>
        <div className="px-7 py-6">
          <p className="text-base leading-[2.1] text-foreground/90">{ZH_PARAGRAPH}</p>
        </div>
      </section>

      {/* 逐句对照 */}
      <section className="mb-8">
        <h2 className="mb-1 text-sm font-medium text-foreground">
          逐句对照 <span className="ml-1 font-normal text-muted-foreground">Frase por frase</span>
        </h2>
        <p className="mb-3 text-xs leading-6 text-muted-foreground">
          例句中成分着色加粗，角色标签在成分下方行间隙，成分间用 / 分隔。
        </p>
        <div>
          {SENTENCES.map((s, i) => (
            <div key={i} className={cn("px-6 py-5", i > 0 && "border-t border-border")}>
              {/* 西语例句：行间注——成分着色，角色标签紧贴成分下方，成分间用 / 分隔 */}
              <p className="text-lg leading-[2.3] text-foreground">
                <span className="mr-2 align-top text-xs font-medium text-muted-foreground">〔{i + 1}〕</span>
                {(() => {
                  const segs = splitComponents(s.es, s.components);
                  let compCount = 0;
                  return segs.map((seg, si) => {
                    if (seg.role) {
                      const isFirst = compCount === 0;
                      compCount++;
                      return (
                        <Fragment key={si}>
                          {!isFirst && (
                            <span className="mx-0.5 inline-flex flex-col items-center align-top">
                              <span className="leading-tight text-muted-foreground/40">/</span>
                              <span className="mt-0.5 text-[10px] leading-[1.3]">&nbsp;</span>
                            </span>
                          )}
                          <span className="mx-0.5 inline-flex flex-col items-center align-top">
                            <span className="font-semibold leading-tight" style={{ color: seg.color }}>
                              {seg.text}
                            </span>
                            <span className="mt-0.5 text-[10px] leading-[1.3] text-muted-foreground/70">
                              {shortRole(seg.role)}
                            </span>
                          </span>
                        </Fragment>
                      );
                    }
                    return <span key={si}>{seg.text}</span>;
                  });
                })()}
              </p>
              {/* 中文译文 */}
              <p className="mt-2 text-sm leading-[2] text-muted-foreground">{s.zh}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 开篇句词汇 */}
      <section className="mb-8">
        <h2 className="mb-1 text-sm font-medium text-foreground">
          开篇句词汇 <span className="ml-1 font-normal text-muted-foreground">Vocabulario de la primera frase</span>
        </h2>
        <p className="mb-3 text-xs leading-6 text-muted-foreground">
          第一句里的实词（虚词略）。音标、词性与释义来自西语助手，点 🔊 听真人发音。
        </p>
        <div>
          {SENTENCE_VOCAB.map((v, i) => (
            <div
              key={i}
              className={cn(
                "px-6 py-3.5",
                i > 0 && "border-t border-border",
              )}
            >
              {/* 第一行：西语 + 音标 + 词性 + 发音 */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <button
                  type="button"
                  aria-label={v.audio ? `播放 ${v.es} 的发音` : `${v.es} 暂无音频`}
                  disabled={!v.audio}
                  onClick={() => {
                    if (v.audio) {
                      const el = document.getElementById(`saudio-${i}`) as HTMLAudioElement | null;
                      if (el) {
                        if (el.paused) void el.play();
                        else el.pause();
                      }
                    }
                  }}
                  className={cn(
                    "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm",
                    v.audio
                      ? "cursor-pointer bg-primary/10 text-primary hover:bg-primary/20"
                      : "cursor-not-allowed text-muted-foreground/30",
                  )}
                >
                  🔊
                </button>
                <span className="text-[15px] font-medium text-foreground">{v.es}</span>
                {v.phonetic && (
                  <span className="text-[13px] text-muted-foreground/80">{v.phonetic}</span>
                )}
                {v.pos && (
                  <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs text-muted-foreground">
                    {v.pos}
                  </span>
                )}
                {v.audio && (
                  <audio id={`saudio-${i}`} src={v.audio} preload="none" className="hidden" />
                )}
              </div>
              {/* 第二行：中文 */}
              <p className="mt-1 text-sm font-medium text-foreground/90">{v.zh}</p>
              {/* 第三行：完整释义 */}
              {v.defs && v.defs.length > 0 && (
                <ul className="mt-1 list-none space-y-0.5">
                  {v.defs.map((d, di) => (
                    <li key={di} className="text-[13px] leading-6 text-muted-foreground">
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 关键词汇 */}
      <section>
        <h2 className="mb-1 text-sm font-medium text-foreground">
          关键词汇 <span className="ml-1 font-normal text-muted-foreground">Vocabulario clave</span>
        </h2>
        <p className="mb-3 text-xs leading-6 text-muted-foreground">
          开篇里值得留意的高频词与短语。音标、词性与释义来自西语助手，点 🔊 听真人发音。
        </p>
        <div>
          {VOCAB.map((v, i) => (
            <div
              key={i}
              className={cn(
                "px-6 py-3.5",
                i > 0 && "border-t border-border",
              )}
            >
              {/* 第一行：西语 + 音标 + 词性 + 发音 */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <button
                  type="button"
                  aria-label={v.audio ? `播放 ${v.es} 的发音` : `${v.es} 暂无音频`}
                  disabled={!v.audio}
                  onClick={() => {
                    if (v.audio) {
                      const el = document.getElementById(`audio-${i}`) as HTMLAudioElement | null;
                      if (el) {
                        if (el.paused) void el.play();
                        else el.pause();
                      }
                    }
                  }}
                  className={cn(
                    "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm",
                    v.audio
                      ? "cursor-pointer bg-primary/10 text-primary hover:bg-primary/20"
                      : "cursor-not-allowed text-muted-foreground/30",
                  )}
                >
                  🔊
                </button>
                <span className="text-[15px] font-medium text-foreground">{v.es}</span>
                {v.phonetic && (
                  <span className="text-[13px] text-muted-foreground/80">{v.phonetic}</span>
                )}
                {v.pos && (
                  <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs text-muted-foreground">
                    {v.pos}
                  </span>
                )}
                {v.audio && (
                  <audio id={`audio-${i}`} src={v.audio} preload="none" className="hidden" />
                )}
              </div>
              {/* 第二行：中文 */}
              <p className="mt-1 text-sm font-medium text-foreground/90">{v.zh}</p>
              {/* 第三行：完整释义 */}
              {v.defs && v.defs.length > 0 && (
                <ul className="mt-1 list-none space-y-0.5">
                  {v.defs.map((d, di) => (
                    <li key={di} className="text-[13px] leading-6 text-muted-foreground">
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
