"use client"

import { Fragment } from "react";
import { cn } from "@/lib/utils";

/** Despacito · Luis Fonsi (feat. Daddy Yankee) · 2017 — 歌词按演唱顺序逐句成分拆分 */

/** 句子成分 → 标注色（与《百年孤独》页一致，参照 NCE3 语法标注色板：谓语橙红 / 状语琥珀 / 名词与从句青色） */
const ROLE_COLORS: Record<string, string> = {
  predicate: "#c2410c",
  adjunct: "#d97706",
  nominal: "#418faf",
};

/** 按成分角色归类到色板 */
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

type Sentence = { es: string; zh: string; components: { role: string; text: string }[] };

/** 整首歌词，按实际演唱顺序排列 */
const SENTENCES: Sentence[] = [
  /* ── 主歌 1 ── */
  {
    es: "Sí, sabes que ya llevo un rato mirándote",
    zh: "是的，你知道我已经看了你一会儿了",
    components: [
      { role: "谓语", text: "sabes" },
      { role: "宾语从句", text: "que ya llevo un rato mirándote" },
    ],
  },
  {
    es: "Tengo que bailar contigo hoy",
    zh: "今天我得和你跳支舞",
    components: [
      { role: "谓语", text: "Tengo que bailar" },
      { role: "状语", text: "contigo" },
      { role: "时间状语", text: "hoy" },
    ],
  },
  {
    es: "Vi que tu mirada ya estaba llamándome",
    zh: "我看到你的目光已经在呼唤我",
    components: [
      { role: "谓语", text: "Vi" },
      { role: "宾语从句", text: "que tu mirada ya estaba llamándome" },
    ],
  },
  {
    es: "Muéstrame el camino que yo voy",
    zh: "给我指路，我跟着你走",
    components: [
      { role: "谓语", text: "Muéstrame" },
      { role: "宾语", text: "el camino" },
      { role: "定语从句", text: "que yo voy" },
    ],
  },
  /* ── 前副歌 1 ── */
  {
    es: "Tú, tú eres el imán y yo soy el metal",
    zh: "你是磁铁，我是金属",
    components: [
      { role: "主语", text: "Tú, tú" },
      { role: "谓语（系动词）", text: "eres" },
      { role: "表语", text: "el imán" },
      { role: "并列连词", text: "y" },
      { role: "主语", text: "yo" },
      { role: "谓语（系动词）", text: "soy" },
      { role: "表语", text: "el metal" },
    ],
  },
  {
    es: "Me voy acercando y voy armando el plan",
    zh: "我渐渐靠近，盘算着计划",
    components: [
      { role: "谓语（进行体 ir+副动词）", text: "Me voy acercando" },
      { role: "并列连词", text: "y" },
      { role: "谓语（进行体）", text: "voy armando" },
      { role: "宾语", text: "el plan" },
    ],
  },
  {
    es: "Solo con pensarlo se acelera el pulso",
    zh: "光是想想，心跳就加速了",
    components: [
      { role: "方式状语", text: "Solo con pensarlo" },
      { role: "谓语（自复被动）", text: "se acelera" },
      { role: "主语（无灵）", text: "el pulso" },
    ],
  },
  {
    es: "Ya, ya me está gustando más de lo normal",
    zh: "已经比平时更喜欢你了",
    components: [
      { role: "时间状语", text: "Ya" },
      { role: "谓语（进行体 estar+副动词）", text: "me está gustando" },
      { role: "比较状语", text: "más de lo normal" },
    ],
  },
  /* ── 副歌 1 ── */
  {
    es: "Todos mis sentidos van pidiendo más",
    zh: "我所有的感官都在渴求更多",
    components: [
      { role: "主语", text: "Todos mis sentidos" },
      { role: "谓语（进行体）", text: "van pidiendo" },
      { role: "宾语", text: "más" },
    ],
  },
  {
    es: "Esto hay que tomarlo sin ningún apuro",
    zh: "这得慢慢来，不用着急",
    components: [
      { role: "主语", text: "Esto" },
      { role: "谓语（无人称义务）", text: "hay que tomarlo" },
      { role: "方式状语", text: "sin ningún apuro" },
    ],
  },
  {
    es: "Despacito",
    zh: "慢慢地",
    components: [{ role: "状语", text: "Despacito" }],
  },
  {
    es: "Quiero respirar tu cuello despacito",
    zh: "我想慢慢地呼吸你的脖颈",
    components: [
      { role: "谓语", text: "Quiero" },
      { role: "宾语（不定式短语）", text: "respirar tu cuello" },
      { role: "状语", text: "despacito" },
    ],
  },
  {
    es: "Deja que te diga cosas al oído",
    zh: "让我在你耳边说些悄悄话",
    components: [
      { role: "谓语", text: "Deja" },
      { role: "宾语从句（虚拟式）", text: "que te diga cosas" },
      { role: "状语", text: "al oído" },
    ],
  },
  {
    es: "Para que te acuerdes si no estás conmigo",
    zh: "好让你不在我身边时也能记得",
    components: [
      { role: "目的状语从句（Para que+虚拟式）", text: "Para que te acuerdes" },
      { role: "条件状语从句", text: "si no estás conmigo" },
    ],
  },
  {
    es: "Despacito",
    zh: "慢慢地",
    components: [{ role: "状语", text: "Despacito" }],
  },
  {
    es: "Quiero desnudarte a besos despacito",
    zh: "我想慢慢地用亲吻为你褪去衣裳",
    components: [
      { role: "谓语", text: "Quiero" },
      { role: "宾语", text: "desnudarte" },
      { role: "方式状语", text: "a besos" },
      { role: "状语", text: "despacito" },
    ],
  },
  {
    es: "Firmo en las paredes de tu laberinto",
    zh: "我在你迷宫的墙上签下印记",
    components: [
      { role: "谓语", text: "Firmo" },
      { role: "地点状语", text: "en las paredes de tu laberinto" },
    ],
  },
  {
    es: "Y hacer de tu cuerpo todo un manuscrito",
    zh: "把你的身体写成一部手稿",
    components: [
      { role: "谓语", text: "hacer" },
      { role: "状语", text: "de tu cuerpo" },
      { role: "宾语", text: "todo un manuscrito" },
    ],
  },
  /* ── 主歌 2 ── */
  {
    es: "Quiero ver bailar tu pelo",
    zh: "我想看着你的头发舞动",
    components: [
      { role: "谓语", text: "Quiero" },
      { role: "宾语（不定式短语）", text: "ver bailar tu pelo" },
    ],
  },
  {
    es: "Quiero ser tu ritmo",
    zh: "我想成为你的节奏",
    components: [
      { role: "谓语", text: "Quiero" },
      { role: "宾语（不定式短语）", text: "ser tu ritmo" },
    ],
  },
  {
    es: "Que le enseñes a mi boca tus lugares favoritos",
    zh: "让你教会我的嘴你最喜欢的地方",
    components: [
      { role: "谓语（虚拟式）", text: "le enseñes" },
      { role: "间接宾语", text: "a mi boca" },
      { role: "直接宾语", text: "tus lugares favoritos" },
    ],
  },
  {
    es: "Déjame sobrepasar tus zonas de peligro",
    zh: "让我越过你的危险地带",
    components: [
      { role: "谓语", text: "Déjame" },
      { role: "宾语（不定式短语）", text: "sobrepasar tus zonas de peligro" },
    ],
  },
  {
    es: "Hasta provocar tus gritos",
    zh: "直到引出你的尖叫",
    components: [
      { role: "目的状语（不定式）", text: "Hasta provocar tus gritos" },
    ],
  },
  {
    es: "Y que olvides tu apellido",
    zh: "让你忘记自己的姓氏",
    components: [
      { role: "谓语（虚拟式）", text: "olvides" },
      { role: "宾语", text: "tu apellido" },
    ],
  },
  /* ── 前副歌 2 ── */
  {
    es: "Si te pido un beso, ven, dámelo",
    zh: "如果我向你要一个吻，来吧，给我",
    components: [
      { role: "条件状语从句", text: "Si te pido un beso" },
      { role: "谓语", text: "ven" },
      { role: "谓语", text: "dámelo" },
    ],
  },
  {
    es: "Yo sé que estás pensándolo",
    zh: "我知道你在想这件事",
    components: [
      { role: "主语", text: "Yo" },
      { role: "谓语", text: "sé" },
      { role: "宾语从句", text: "que estás pensándolo" },
    ],
  },
  {
    es: "Llevo tiempo intentándolo",
    zh: "我已经尝试很久了",
    components: [
      { role: "谓语", text: "Llevo" },
      { role: "宾语", text: "tiempo" },
      { role: "伴随状语", text: "intentándolo" },
    ],
  },
  {
    es: "Mami, esto es dando y dándolo",
    zh: "宝贝，这就是不断地给予",
    components: [
      { role: "主语", text: "esto" },
      { role: "谓语（系动词）", text: "es" },
      { role: "表语（副动词）", text: "dando y dándolo" },
    ],
  },
  {
    es: "Sabes que tu corazón conmigo te hace bom, bom",
    zh: "你知道你的心和我在一起就怦怦直跳",
    components: [
      { role: "谓语", text: "Sabes" },
      { role: "宾语从句", text: "que tu corazón conmigo te hace bom, bom" },
    ],
  },
  {
    es: "Sabes que esa beba está buscando de mi bom, bom",
    zh: "你知道那个女孩正在寻觅我的怦怦",
    components: [
      { role: "谓语", text: "Sabes" },
      { role: "宾语从句", text: "que esa beba está buscando de mi bom, bom" },
    ],
  },
  {
    es: "Ven, prueba de mi boca para ver cómo te sabe",
    zh: "来吧，尝尝我的嘴唇，看看味道如何",
    components: [
      { role: "谓语", text: "Ven" },
      { role: "谓语", text: "prueba" },
      { role: "状语", text: "de mi boca" },
      { role: "目的状语从句", text: "para ver cómo te sabe" },
    ],
  },
  {
    es: "Quiero, quiero, quiero ver cuánto amor a ti te cabe",
    zh: "我想，我想，我想看看你心里能装下多少爱",
    components: [
      { role: "谓语", text: "Quiero" },
      { role: "宾语从句", text: "ver cuánto amor a ti te cabe" },
    ],
  },
  {
    es: "Yo no tengo prisa, yo me quiero dar el viaje",
    zh: "我不着急，我想好好享受这段旅程",
    components: [
      { role: "主语", text: "Yo" },
      { role: "谓语", text: "no tengo" },
      { role: "宾语", text: "prisa" },
      { role: "主语", text: "yo" },
      { role: "谓语", text: "me quiero dar" },
      { role: "宾语", text: "el viaje" },
    ],
  },
  {
    es: "Empecemos lento, después salvaje",
    zh: "我们慢慢开始，之后再狂野",
    components: [
      { role: "谓语", text: "Empecemos" },
      { role: "方式状语", text: "lento" },
      { role: "时间状语", text: "después salvaje" },
    ],
  },
  /* ── 副歌 2 ── */
  {
    es: "Pasito a pasito, suave suavecito, nos vamos pegando poquito a poquito",
    zh: "一步一步，轻轻柔柔，我们越贴越近，一点一点",
    components: [
      { role: "方式状语", text: "Pasito a pasito, suave suavecito" },
      { role: "谓语（进行体）", text: "nos vamos pegando" },
      { role: "方式状语", text: "poquito a poquito" },
    ],
  },
  {
    es: "Cuando tú me besas con esa destreza",
    zh: "当你那么娴熟地吻我",
    components: [
      { role: "时间状语从句", text: "Cuando tú me besas" },
      { role: "方式状语", text: "con esa destreza" },
    ],
  },
  {
    es: "Veo que eres malicia con delicadeza",
    zh: "我看出你是带着温柔的淘气",
    components: [
      { role: "谓语", text: "Veo" },
      { role: "宾语从句", text: "que eres malicia con delicadeza" },
    ],
  },
  {
    es: "Pasito a pasito, suave suavecito, nos vamos pegando poquito a poquito",
    zh: "一步一步，轻轻柔柔，我们越贴越近，一点一点",
    components: [
      { role: "方式状语", text: "Pasito a pasito, suave suavecito" },
      { role: "谓语（进行体）", text: "nos vamos pegando" },
      { role: "方式状语", text: "poquito a poquito" },
    ],
  },
  {
    es: "Y es que esa belleza es un rompecabezas",
    zh: "而那美貌是个解不开的谜",
    components: [
      { role: "主语", text: "esa belleza" },
      { role: "谓语（系动词）", text: "es" },
      { role: "表语", text: "un rompecabezas" },
    ],
  },
  {
    es: "Pero pa' montarlo aquí tengo la pieza",
    zh: "但要把它拼起来，我这里正好有那一块",
    components: [
      { role: "目的状语", text: "pa' montarlo" },
      { role: "地点状语", text: "aquí" },
      { role: "谓语", text: "tengo" },
      { role: "宾语", text: "la pieza" },
    ],
  },
  /* ── 尾声（副歌再现） ── */
  {
    es: "Despacito",
    zh: "慢慢地",
    components: [{ role: "状语", text: "Despacito" }],
  },
  {
    es: "Quiero respirar tu cuello despacito",
    zh: "我想慢慢地呼吸你的脖颈",
    components: [
      { role: "谓语", text: "Quiero" },
      { role: "宾语（不定式短语）", text: "respirar tu cuello" },
      { role: "状语", text: "despacito" },
    ],
  },
  {
    es: "Deja que te diga cosas al oído",
    zh: "让我在你耳边说些悄悄话",
    components: [
      { role: "谓语", text: "Deja" },
      { role: "宾语从句（虚拟式）", text: "que te diga cosas" },
      { role: "状语", text: "al oído" },
    ],
  },
  {
    es: "Para que te acuerdes si no estás conmigo",
    zh: "好让你不在我身边时也能记得",
    components: [
      { role: "目的状语从句（Para que+虚拟式）", text: "Para que te acuerdes" },
      { role: "条件状语从句", text: "si no estás conmigo" },
    ],
  },
  {
    es: "Despacito",
    zh: "慢慢地",
    components: [{ role: "状语", text: "Despacito" }],
  },
  {
    es: "Quiero desnudarte a besos despacito",
    zh: "我想慢慢地用亲吻为你褪去衣裳",
    components: [
      { role: "谓语", text: "Quiero" },
      { role: "宾语", text: "desnudarte" },
      { role: "方式状语", text: "a besos" },
      { role: "状语", text: "despacito" },
    ],
  },
  {
    es: "Firmo en las paredes de tu laberinto",
    zh: "我在你迷宫的墙上签下印记",
    components: [
      { role: "谓语", text: "Firmo" },
      { role: "地点状语", text: "en las paredes de tu laberinto" },
    ],
  },
  {
    es: "Y hacer de tu cuerpo todo un manuscrito",
    zh: "把你的身体写成一部手稿",
    components: [
      { role: "谓语", text: "hacer" },
      { role: "状语", text: "de tu cuerpo" },
      { role: "宾语", text: "todo un manuscrito" },
    ],
  },
];

/** 关键词汇（歌词里的高频词与短语） */
const VOCAB: { es: string; zh: string }[] = [
  { es: "despacito", zh: "慢慢地（-ito 昵称小称）" },
  { es: "el cuello", zh: "脖颈" },
  { es: "al oído", zh: "在耳边" },
  { es: "acordarse", zh: "记得" },
  { es: "desnudar", zh: "脱去衣裳" },
  { es: "el imán", zh: "磁铁" },
  { es: "el metal", zh: "金属" },
  { es: "el pulso", zh: "心跳；脉搏" },
  { es: "acercarse", zh: "靠近" },
  { es: "armar el plan", zh: "盘算计划" },
  { es: "pegarse", zh: "贴近；黏在一起" },
  { es: "poquito a poquito", zh: "一点一点" },
  { es: "pasito a pasito", zh: "一步一步" },
  { es: "suavecito", zh: "轻轻柔柔" },
  { es: "la destreza", zh: "娴熟；技巧" },
  { es: "el camino", zh: "路；方向" },
  { es: "la mirada", zh: "目光" },
  { es: "el laberinto", zh: "迷宫" },
  { es: "el manuscrito", zh: "手稿" },
  { es: "el ritmo", zh: "节奏" },
  { es: "el apellido", zh: "姓氏" },
  { es: "el apuro", zh: "着急；匆忙" },
  { es: "los sentidos", zh: "感官" },
  { es: "la prisa", zh: "匆忙" },
  { es: "el viaje", zh: "旅程" },
  { es: "la pieza", zh: "拼图块；零件" },
  { es: "el rompecabezas", zh: "拼图；谜" },
  { es: "sobrepasar", zh: "越过；超过" },
  { es: "provocar", zh: "引发；激起" },
  { es: "dámelo", zh: "把它给我" },
];

export default function SpanishDespacitoPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 pb-20 pt-8">
      {/* 页头 */}
      <header className="mb-8 text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Spanish · Música · Luis Fonsi
        </p>
        <h1 className="mb-2 text-2xl font-semibold tracking-wide text-foreground">
          Despacito · 歌词语法分析
        </h1>
        <p className="mx-auto max-w-lg text-sm leading-7 text-muted-foreground">
          路易斯·冯西（Luis Fonsi）feat. Daddy Yankee · 2017。整首歌词按演唱顺序逐句拆解句子成分：谓语橙红、状语琥珀、主语/宾语/表语/从句青色，成分间用 / 分隔。
        </p>
      </header>

      {/* 逐句对照（按演唱顺序） */}
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

      {/* 关键词汇 */}
      <section>
        <h2 className="mb-1 text-sm font-medium text-foreground">
          关键词汇 <span className="ml-1 font-normal text-muted-foreground">Vocabulario clave</span>
        </h2>
        <p className="mb-3 text-xs leading-6 text-muted-foreground">
          歌词里值得留意的高频词与短语。
        </p>
        <div>
          {VOCAB.map((v, i) => (
            <div
              key={i}
              className={cn(
                "grid grid-cols-1 items-center gap-1 px-6 py-3 sm:grid-cols-2",
                i > 0 && "border-t border-border",
              )}
            >
              <span className="truncate text-[15px] font-medium text-foreground">{v.es}</span>
              <span className="text-sm text-muted-foreground sm:text-right">{v.zh}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
