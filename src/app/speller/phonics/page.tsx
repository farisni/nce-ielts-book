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

/** 巧记表单元格：组合（首字母黑、修饰蓝）+ 多个音标 */
interface MnemonicEntry {
  pattern: string
  ipa: string[]
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
      r: [{ pattern: "ar", ipa: ["ɑː", "ɔː", "ə"] }],
      y: [{ pattern: "ay", ipa: ["eɪ"] }],
      w: [{ pattern: "aw", ipa: ["ɔː"] }],
      l: [{ pattern: "al", ipa: ["ɔː", "ɑː"] }],
      e: [{ pattern: "a_e", ipa: ["eɪ"], plain: true }],
      i: [{ pattern: "ai", ipa: ["eɪ"], plain: true }],
      u: [{ pattern: "au", ipa: ["ɔː", "ɑː"], plain: true }],
    },
    other: [
      { pattern: "air", ipa: ["eə"] },
      { pattern: "are", ipa: ["eə"] },
      { pattern: "augh", ipa: ["ɔː"] },
      { pattern: "an", ipa: ["æn", "ən"] },
    ],
  },
  e: {
    cols: {
      r: [{ pattern: "er", ipa: ["ɜː"] }],
      y: [{ pattern: "ey", ipa: ["eɪ"] }],
      w: [{ pattern: "ew", ipa: ["juː"] }],
      a: [{ pattern: "ea", ipa: ["iː", "e"], plain: true }],
      e: [{ pattern: "e_e", ipa: ["iː"], plain: true }],
      i: [{ pattern: "ei", ipa: ["iː", "eɪ"], plain: true }],
    },
    other: [
      { pattern: "ear", ipa: ["ɪə", "eə", "ɜː", "ɑː"] },
      { pattern: "eer", ipa: ["ɪə"] },
      { pattern: "ere", ipa: ["ɪə", "eə"] },
      { pattern: "eigh", ipa: ["eɪ"] },
      { pattern: "en", ipa: ["ən", "en"] },
    ],
  },
  i: {
    cols: {
      r: [{ pattern: "ir", ipa: ["ɜː"] }],
      a: [{ pattern: "ia", ipa: ["aɪə"], plain: true }],
      e: [{ pattern: "i_e", ipa: ["aɪ"], plain: true }],
    },
    other: [
      { pattern: "ie", ipa: ["aɪ"] },
      { pattern: "igh", ipa: ["aɪ"] },
      { pattern: "ire", ipa: ["aɪə"] },
      { pattern: "ign", ipa: ["aɪn"] },
      { pattern: "in", ipa: ["ɪn"] },
    ],
  },
  o: {
    cols: {
      r: [{ pattern: "or", ipa: ["ɔː"] }],
      y: [{ pattern: "oy", ipa: ["ɔɪ"] }],
      w: [{ pattern: "ow", ipa: ["aʊ", "əʊ"] }],
      a: [{ pattern: "oa", ipa: ["əʊ"], plain: true }],
      e: [{ pattern: "o_e", ipa: ["əʊ"], plain: true }],
      i: [{ pattern: "oi", ipa: ["ɔɪ"], plain: true }],
      o: [{ pattern: "oo", ipa: ["uː", "ʊ", "ʌ"], plain: true }],
    },
    other: [
      { pattern: "ou", ipa: ["aʊ", "uː"] },
      { pattern: "oor", ipa: ["ɔː"] },
      { pattern: "oar", ipa: ["ɔː"] },
      { pattern: "oul", ipa: ["ʊ", "uː"] },
      { pattern: "our", ipa: ["aʊə", "ɔː", "ɜː"] },
      { pattern: "ure", ipa: ["jʊə"] },
    ],
  },
  u: {
    cols: {
      r: [{ pattern: "ur", ipa: ["ɜː"] }],
      y: [{ pattern: "uy", ipa: ["aɪ"] }],
      e: [{ pattern: "u_e", ipa: ["juː", "uː"], plain: true }],
      i: [{ pattern: "ui", ipa: ["ɪ", "uː"], plain: true }],
    },
    other: [
      { pattern: "ue", ipa: ["juː", "uː"] },
      { pattern: "ure", ipa: ["jʊə"] },
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
                <div key={c} className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-md border border-border px-1 py-1.5">
                  {entries && entries.length > 0 ? (
                    entries.map((e) => <MnemonicCell key={e.pattern} entry={e} />)
                  ) : (
                    <span className="text-muted-foreground/30">·</span>
                  )}
                </div>
              );
            })}
            <div className="flex min-h-14 flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-md border border-border px-1 py-1.5">
              {row.other.map((e) => (
                <MnemonicCell key={e.pattern} entry={e} small />
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

function MnemonicCell({ entry, small = false }: { entry: MnemonicEntry; small?: boolean }) {
  const p = entry.pattern;
  return (
    <span className={`inline-flex flex-col items-center leading-tight ${small ? "" : ""}`}>
      {/* 行元音字母黑色（主体），后续字母蓝色（修饰）；元音列（plain）整体黑色 */}
      <span className={`font-semibold ${small ? "text-sm" : "text-base"} text-foreground`}>
        {p[0]}
        {entry.plain ? (
          p.slice(1)
        ) : (
          <span className="text-blue-500 dark:text-blue-400">{p.slice(1)}</span>
        )}
      </span>
      <span className="text-[0.65rem] text-muted-foreground">
        {entry.ipa.map((ph, i) => (
          <span key={ph}>
            {i > 0 && " "}[{ph}]
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
