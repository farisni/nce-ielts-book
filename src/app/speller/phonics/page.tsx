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

/**
 * 元音组合 · 二级巧记表
 * 行 = 元音字母 a e i o u，列 = r y w l | a e i o u | 其他；
 * 单元格 = 该组合的发音（红 = 两元相遇，蓝 = 组合发音），数据取自 VOWEL_GROUPS
 */
function VowelMnemonicTable() {
  // 组合 → 规则映射（保持红蓝 tone）
  const ruleMap = new Map<string, PhonicsRule>();
  for (const g of VOWEL_GROUPS) {
    for (const r of g.rules) {
      if (!ruleMap.has(r.pattern)) ruleMap.set(r.pattern, r);
    }
  }
  const allRules = VOWEL_GROUPS.flatMap((g) => g.rules);
  const colsRylw = ["r", "y", "w", "l"];
  const colsVowel = ["a", "e", "i", "o", "u"];
  const cols = [...colsRylw, ...colsVowel];
  const vowelRows = ["a", "e", "i", "o", "u"];

  return (
    <section className="mb-8 rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-lg font-semibold text-foreground">元音组合 · 二级巧记表</h2>
        <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
          行 a e i o u × 列 r y w l | a e i o u | 其他
        </span>
      </div>
      <div className="grid grid-cols-[3.5rem_repeat(9,minmax(0,1fr))_minmax(0,1.6fr)] gap-1">
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
        {vowelRows.map((v) => {
          const used = new Set(cols.map((c) => v + c));
          const others = allRules.filter((r) => r.pattern.startsWith(v) && !used.has(r.pattern));
          return (
            <Fragment key={v}>
              <div className="flex items-center justify-center rounded-md border border-border py-2 text-base font-bold text-foreground">
                {v}
              </div>
              {cols.map((c) => {
                const r = ruleMap.get(v + c);
                // 两元相遇列（a e i o u）：不区分颜色，整体黑色
                const plain = colsVowel.includes(c);
                return (
                  <div key={c} className="flex min-h-12 items-center justify-center rounded-md border border-border px-1 py-1.5">
                    {r ? <MnemonicCell rule={r} plain={plain} /> : <span className="text-muted-foreground/30">·</span>}
                  </div>
                );
              })}
              <div className="flex min-h-12 flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-md border border-border px-1 py-1.5">
                {others.length > 0 ? (
                  others.map((r) => <MnemonicCell key={r.pattern} rule={r} small />)
                ) : (
                  <span className="text-muted-foreground/30">·</span>
                )}
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}

function MnemonicCell({ rule, small = false, plain = false }: { rule: PhonicsRule; small?: boolean; plain?: boolean }) {
  // e 列同字母组合 ee：显示为 e_e（下划线分隔）；其他列保持原样
  const p = rule.pattern;
  const display = p === "ee" ? "e_e" : p;
  return (
    <span className={`inline-flex flex-col items-center leading-tight ${small ? "" : ""}`}>
      {/* 行元音字母黑色（主体），后续字母蓝色（修饰）；两元相遇列（plain）整体黑色 */}
      <span className={`font-semibold ${small ? "text-sm" : "text-base"} text-foreground`}>
        {display[0]}
        {plain ? (
          display.slice(1)
        ) : (
          <span className="text-blue-500 dark:text-blue-400">{display.slice(1)}</span>
        )}
      </span>
      <span className="text-[0.65rem] text-muted-foreground">{rule.ipa}</span>
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
