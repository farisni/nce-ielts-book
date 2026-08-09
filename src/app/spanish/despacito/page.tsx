"use client"

import { Fragment } from "react";
import { cn } from "@/lib/utils";

/** Despacito · Luis Fonsi (feat. Daddy Yankee) · 2017 — 歌词句子成分拆分 */

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

/** 歌词分组：副歌 / 主歌 / 桥段 */
const GROUPS: { title: string; desc: string; sentences: Sentence[] }[] = [
  {
    title: "副歌 · Coro",
    desc: "Quiero + 不定式 · Deja que + 虚拟式 · Para que 目的从句",
    sentences: [
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
        es: "Quiero desnudarte a besos despacito",
        zh: "我想慢慢地用亲吻为你褪去衣裳",
        components: [
          { role: "谓语", text: "Quiero" },
          { role: "宾语", text: "desnudarte" },
          { role: "方式状语", text: "a besos" },
          { role: "状语", text: "despacito" },
        ],
      },
    ],
  },
  {
    title: "主歌 · Verso",
    desc: "系动词并列 · 进行体 ir/estar + 副动词 · 无灵主语",
    sentences: [
      {
        es: "Tú, tú eres el imán y yo soy el metal",
        zh: "你是磁铁，而我是金属",
        components: [
          { role: "主语", text: "Tú" },
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
          { role: "谓语（进行体 estar+副动词，me 为间接宾语）", text: "me está gustando" },
          { role: "比较状语", text: "más de lo normal" },
        ],
      },
    ],
  },
  {
    title: "桥段 · Puente",
    desc: "无动词状语短语 · Cuando 时间从句",
    sentences: [
      {
        es: "Pasito a pasito, suave suavecito, nos vamos pegando, poquito a poquito",
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
          路易斯·冯西（Luis Fonsi）feat. Daddy Yankee · 2017。逐句拆解歌词的句子成分：谓语橙红、状语琥珀、主语/宾语/表语/从句青色，成分间用 / 分隔。
        </p>
      </header>

      {/* 逐句对照 */}
      <section className="mb-8">
        <h2 className="mb-1 text-sm font-medium text-foreground">
          逐句对照 <span className="ml-1 font-normal text-muted-foreground">Frase por frase</span>
        </h2>
        <p className="mb-3 text-xs leading-6 text-muted-foreground">
          例句中成分着色加粗，角色标签在成分下方行间隙，成分间用 / 分隔。
        </p>
        <div>
          {GROUPS.map((group) => (
            <Fragment key={group.title}>
              {/* 组标题行 */}
              <div className="border-t border-border bg-muted/30 px-6 py-2.5">
                <span className="text-sm font-semibold text-foreground">{group.title}</span>
                <span className="ml-2 text-xs text-muted-foreground">{group.desc}</span>
              </div>
              {group.sentences.map((s, i) => (
                <div key={i} className={cn("px-6 py-5", i > 0 && "border-t border-border")}>
                  {/* 西语例句：行间注——成分着色，角色标签紧贴成分下方，成分间用 / 分隔 */}
                  <p className="text-lg leading-[2.3] text-foreground">
                    {(() => {
                      const segs = splitComponents(s.es, s.components);
                      let compCount = 0;
                      return segs.map((seg, si) => {
                        if (seg.role) {
                          const isFirst = compCount === 0;
                          compCount++;
                          return (
                            <Fragment key={si}>
                              {!isFirst && <span className="align-top text-muted-foreground/40">/</span>}
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
            </Fragment>
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
