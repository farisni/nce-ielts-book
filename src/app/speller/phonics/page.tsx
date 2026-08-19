import { Fragment } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  VOWEL_GROUPS,
  CONSONANT_GROUPS,
  MIXED_GROUPS,
  type PhonicsGroup,
  type PhonicsRule,
} from "@/lib/speller/phonics";

/**
 * 自然拼读规则表
 * 表 1 元音组合（44）· 表 2 辅音组合（50）· 表 3 元辅组合（52）
 * 红 = 两元相遇（两个元音字母相遇，发第一个元音字母的字母音）；蓝 = 组合发音
 */
export default function PhonicsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl pb-16 pt-10">
      <header className="mb-8">
        <Link
          href="/speller"
          className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          返回 Speller
        </Link>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Phonics Rules
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">自然拼读规则表</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          元音组合 · 辅音组合 · 元辅组合。红色按「两元相遇」方法发音，蓝色按「组合发音」。
        </p>
      </header>

      {/* 图例 */}
      <div className="mb-8 flex flex-wrap items-center gap-x-8 gap-y-2 rounded-xl border border-border bg-card px-5 py-4 text-sm">
        <span className="flex items-center gap-2 text-foreground">
          <span className="font-semibold text-foreground">A</span>
          <span>
            主体元音 <span className="text-muted-foreground">（行元音字母，黑色）</span>
          </span>
        </span>
        <span className="flex items-center gap-2 text-foreground">
          <span className="font-semibold text-blue-500">r</span>
          <span>
            修饰字母 <span className="text-muted-foreground">（r y w l 或后续元音，蓝色）</span>
          </span>
        </span>
      </div>

      {/* 表 1 · 元音组合（二级巧记表：行 a e i o u × 列 r y w l | a e i o u | 其他） */}
      <VowelMnemonicTable />

      {/* 表 2 · 辅音组合 */}
      <PhonicsSection
        title="辅音组合"
        count={CONSONANT_GROUPS.reduce((n, g) => n + g.rules.length, 0)}
        groups={CONSONANT_GROUPS}
      />

      {/* 表 3 · 元辅组合 */}
      <PhonicsSection
        title="元辅组合"
        count={MIXED_GROUPS.reduce((n, g) => n + g.rules.length, 0)}
        groups={MIXED_GROUPS}
      />
    </div>
  );
}

/** 巧记表单元格：组合（首字母黑、修饰蓝）+ 多个音标（每个音标配示例单词） */
interface MnemonicEntry {
  pattern: string
  ipa: { ph: string; w: string }[]
  /** 位于元音列（a e i o u）：不区分颜色整体黑色；magic-e 结构用下划线 */
  plain?: boolean
}

/** 元音组合 · 二级巧记表数据（参照原版巧记表）：
 *  行 = 元音字母 a e i o u；列 = r y w l | a e i o u | 其他；
 *  e 列 magic-e（a_e/e_e/i_e/o_e/u_e）尾 e 不发音，下划线表示 */
const MNEMONIC_COLS = ["r", "y", "w", "l", "a", "e", "i", "o", "u"] as const;
const MNEMONIC_DATA: Record<string, { plain?: MnemonicEntry[]; cols: Partial<Record<(typeof MNEMONIC_COLS)[number], MnemonicEntry[]>>; other: MnemonicEntry[] }> = {
  a: {
    cols: {
      r: [{ pattern: "ar", ipa: [{ ph: "ɑː", w: "are" }, { ph: "ɔː", w: "warm" }, { ph: "ə", w: "dollar" }] }],
      y: [{ pattern: "ay", ipa: [{ ph: "eɪ", w: "day" }] }],
      w: [{ pattern: "aw", ipa: [{ ph: "ɔː", w: "saw" }] }],
      l: [{ pattern: "al", ipa: [{ ph: "ɔː", w: "ball" }, { ph: "ɑː", w: "half" }] }],
      e: [{ pattern: "a_e", ipa: [{ ph: "eɪ", w: "make" }], plain: true }],
      i: [{ pattern: "ai", ipa: [{ ph: "eɪ", w: "rain" }], plain: true }],
      u: [{ pattern: "au", ipa: [{ ph: "ɔː", w: "sauce" }, { ph: "ɑː", w: "laugh" }], plain: true }],
    },
    other: [
      { pattern: "air", ipa: [{ ph: "eə", w: "chair" }] },
      { pattern: "are", ipa: [{ ph: "eə", w: "care" }] },
      { pattern: "augh", ipa: [{ ph: "ɔː", w: "caught" }] },
      { pattern: "an", ipa: [{ ph: "æn", w: "man" }, { ph: "ən", w: "organ" }] },
    ],
  },
  e: {
    cols: {
      r: [{ pattern: "er", ipa: [{ ph: "ɜː", w: "her" }] }],
      y: [{ pattern: "ey", ipa: [{ ph: "eɪ", w: "they" }] }],
      w: [{ pattern: "ew", ipa: [{ ph: "juː", w: "new" }] }],
      a: [{ pattern: "ea", ipa: [{ ph: "iː", w: "tea" }, { ph: "e", w: "bread" }], plain: true }],
      e: [{ pattern: "e_e", ipa: [{ ph: "iː", w: "these" }], plain: true }],
      i: [{ pattern: "ei", ipa: [{ ph: "iː", w: "receive" }, { ph: "eɪ", w: "vein" }], plain: true }],
    },
    other: [
      { pattern: "ear", ipa: [{ ph: "ɪə", w: "hear" }, { ph: "eə", w: "bear" }, { ph: "ɜː", w: "earth" }, { ph: "ɑː", w: "heart" }] },
      { pattern: "eer", ipa: [{ ph: "ɪə", w: "deer" }] },
      { pattern: "ere", ipa: [{ ph: "ɪə", w: "here" }, { ph: "eə", w: "there" }] },
      { pattern: "eigh", ipa: [{ ph: "eɪ", w: "eight" }] },
      { pattern: "en", ipa: [{ ph: "ən", w: "open" }, { ph: "en", w: "hen" }] },
    ],
  },
  i: {
    cols: {
      r: [{ pattern: "ir", ipa: [{ ph: "ɜː", w: "bird" }] }],
      a: [{ pattern: "ia", ipa: [{ ph: "aɪə", w: "piano" }], plain: true }],
      e: [{ pattern: "i_e", ipa: [{ ph: "aɪ", w: "like" }], plain: true }],
    },
    other: [
      { pattern: "ie", ipa: [{ ph: "aɪ", w: "pie" }] },
      { pattern: "igh", ipa: [{ ph: "aɪ", w: "light" }] },
      { pattern: "ire", ipa: [{ ph: "aɪə", w: "fire" }] },
      { pattern: "ign", ipa: [{ ph: "aɪn", w: "sign" }] },
      { pattern: "in", ipa: [{ ph: "ɪn", w: "pin" }] },
    ],
  },
  o: {
    cols: {
      r: [{ pattern: "or", ipa: [{ ph: "ɔː", w: "for" }] }],
      y: [{ pattern: "oy", ipa: [{ ph: "ɔɪ", w: "boy" }] }],
      w: [{ pattern: "ow", ipa: [{ ph: "aʊ", w: "cow" }, { ph: "əʊ", w: "snow" }] }],
      a: [{ pattern: "oa", ipa: [{ ph: "əʊ", w: "boat" }], plain: true }],
      e: [{ pattern: "o_e", ipa: [{ ph: "əʊ", w: "home" }], plain: true }],
      i: [{ pattern: "oi", ipa: [{ ph: "ɔɪ", w: "coin" }], plain: true }],
      o: [{ pattern: "oo", ipa: [{ ph: "uː", w: "moon" }, { ph: "ʊ", w: "book" }, { ph: "ʌ", w: "blood" }], plain: true }],
    },
    other: [
      { pattern: "ou", ipa: [{ ph: "aʊ", w: "house" }, { ph: "uː", w: "you" }] },
      { pattern: "oor", ipa: [{ ph: "ɔː", w: "door" }] },
      { pattern: "oar", ipa: [{ ph: "ɔː", w: "board" }] },
      { pattern: "oul", ipa: [{ ph: "ʊ", w: "could" }, { ph: "uː", w: "should" }] },
      { pattern: "our", ipa: [{ ph: "aʊə", w: "hour" }, { ph: "ɔː", w: "four" }, { ph: "ɜː", w: "journey" }] },
      { pattern: "ure", ipa: [{ ph: "jʊə", w: "cure" }] },
    ],
  },
  u: {
    cols: {
      r: [{ pattern: "ur", ipa: [{ ph: "ɜː", w: "fur" }] }],
      y: [{ pattern: "uy", ipa: [{ ph: "aɪ", w: "buy" }] }],
      e: [{ pattern: "u_e", ipa: [{ ph: "juː", w: "use" }, { ph: "uː", w: "rule" }], plain: true }],
      i: [{ pattern: "ui", ipa: [{ ph: "ɪ", w: "build" }, { ph: "uː", w: "fruit" }], plain: true }],
    },
    other: [
      { pattern: "ue", ipa: [{ ph: "juː", w: "cue" }, { ph: "uː", w: "blue" }] },
      { pattern: "ure", ipa: [{ ph: "jʊə", w: "sure" }] },
    ],
  },
};

/** 底部：元音字母开音节/闭音节发音规则 */
const SYLLABLE_RULES: { vowel: string; open: string; closed: string }[] = [
  { vowel: "a", open: "eɪ", closed: "æ" },
  { vowel: "e", open: "iː", closed: "e" },
  { vowel: "i", open: "aɪ", closed: "ɪ" },
  { vowel: "o", open: "əʊ", closed: "ɒ" },
  { vowel: "u", open: "juː", closed: "ʌ" },
];

function VowelMnemonicTable() {
  const colsRylw = MNEMONIC_COLS.slice(0, 4);
  const colsVowel = MNEMONIC_COLS.slice(4);

  return (
    <section className="mb-8 rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-lg font-semibold text-foreground">元音组合 · 二级巧记表</h2>
        <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
          巧记（不要死记硬背）· 行 a e i o u × 列 r y w l | a e i o u | 其他
        </span>
      </div>
      <div className="grid grid-cols-[3.5rem_repeat(9,minmax(0,1fr))_minmax(0,1.8fr)] gap-1">
        {/* 表头 */}
        <div />
        {colsRylw.map((c) => (
          <div key={c} className="flex items-center justify-center rounded-md bg-muted py-1 text-sm font-semibold text-blue-500 dark:text-blue-400">
            {c}
          </div>
        ))}
        {colsVowel.map((c) => (
          <div key={c} className="flex items-center justify-center rounded-md bg-muted/60 py-1 text-sm font-semibold text-foreground">
            {c}
          </div>
        ))}
        <div className="flex items-center justify-center rounded-md bg-muted/40 py-1 text-sm font-semibold text-muted-foreground">
          其他
        </div>

        {/* 数据行 */}
        {Object.entries(MNEMONIC_DATA).map(([v, row]) => (
          <Fragment key={v}>
            <div className="flex items-center justify-center rounded-md border border-border py-2 text-base font-bold text-foreground">
              {v}
            </div>
            {MNEMONIC_COLS.map((c) => {
              const entries = row.cols[c];
              return (
                <div key={c} className="flex min-h-14 flex-col items-center justify-start gap-1 rounded-md border border-border px-1 py-1.5">
                  {entries && entries.length > 0 ? (
                    entries.map((e) => <MnemonicCell key={e.pattern} entry={e} />)
                  ) : (
                    <span className="text-muted-foreground/30">·</span>
                  )}
                </div>
              );
            })}
            <div className="flex min-h-14 flex-col items-start justify-start gap-1 rounded-md border border-border px-1 py-1.5">
              {row.other.map((e) => (
                <MnemonicInline key={e.pattern} entry={e} />
              ))}
            </div>
          </Fragment>
        ))}
      </div>

      {/* 底部：元音字母开音节/闭音节发音规则 */}
      <div className="mt-4 rounded-lg border border-border p-4">
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">元音字母 · 发音规则（开音节 / 闭音节）</h3>
        <div className="grid grid-cols-5 gap-2">
          {SYLLABLE_RULES.map((s) => (
            <div key={s.vowel} className="flex flex-col items-center rounded-md border border-border px-2 py-2">
              <span className="text-lg font-bold text-foreground">{s.vowel}</span>
              <span className="mt-1 text-xs text-muted-foreground">
                开 {s.open} · 闭 {s.closed}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 其他列条目：组合固定宽度左对齐 + 音标同行 */
function MnemonicInline({ entry }: { entry: MnemonicEntry }) {
  const p = entry.pattern;
  return (
    <span className="inline-flex items-baseline leading-tight">
      <span className="w-10 shrink-0 text-left text-sm font-semibold text-foreground">
        {p[0]}
        <span className="text-blue-500 dark:text-blue-400">{p.slice(1)}</span>
      </span>
      <span className="ml-1 text-[0.65rem] text-muted-foreground">
        {entry.ipa.map((it, i) => (
          <span key={it.ph}>
            {i > 0 && " "}[{it.ph}]
            {/* 多音标条目不显示示例单词（避免拥挤），单音标保留 */}
            {entry.ipa.length <= 1 && <span className="text-foreground/80"> {it.w}</span>}
          </span>
        ))}
      </span>
    </span>
  );
}

function MnemonicCell({ entry, small = false }: { entry: MnemonicEntry; small?: boolean }) {
  const p = entry.pattern;
  return (
    <span className={`inline-flex flex-col items-center leading-tight ${small ? "" : ""}`}>
      {/* 行元音字母黑色（主体），后续字母蓝色（修饰）；元音列（plain）整体黑色。
          组合行固定高度，音标从同一位置开始对齐 */}
      <span className={`flex h-6 items-center justify-center font-semibold ${small ? "text-sm" : "text-base"} text-foreground`}>
        {p[0]}
        {entry.plain ? (
          p.slice(1)
        ) : (
          <span className="text-blue-500 dark:text-blue-400">{p.slice(1)}</span>
        )}
      </span>
      {/* 多音标：一行一个，竖排；每行固定高度；音标同行紧跟示例单词 */}
      <span className="flex flex-col items-center text-[0.65rem] text-muted-foreground">
        {entry.ipa.map((it) => (
          <span key={it.ph} className="flex h-4 items-center leading-none">
            [{it.ph}] <span className="ml-0.5 text-foreground/80">{it.w}</span>
          </span>
        ))}
      </span>
    </span>
  );
}

function PhonicsSection({
  title,
  count,
  groups,
}: {
  title: string
  count: number
  groups: PhonicsGroup[]
}) {
  return (
    <section className="mb-8 rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{count} 个</span>
      </div>
      <div className="space-y-3">
        {groups.map((g) => (
          <div key={g.name} className="rounded-lg border border-border p-4">
            <h3 className="mb-3 text-sm font-semibold text-muted-foreground">{g.name}</h3>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
              {g.rules.map((r) => (
                <RuleCell key={r.pattern} rule={r} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RuleCell({ rule }: { rule: PhonicsRule }) {
  const { pattern, ipa, tone } = rule;
  const color =
    tone === "red"
      ? "text-red-500 dark:text-red-400"
      : "text-blue-500 dark:text-blue-400";
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-border px-2 py-3">
      <span className={`text-base font-semibold leading-tight ${color}`}>{pattern}</span>
      {ipa && <span className="mt-0.5 text-xs text-muted-foreground">{ipa}</span>}
    </div>
  );
}
