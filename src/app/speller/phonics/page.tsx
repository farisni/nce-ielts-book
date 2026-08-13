import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  PHONICS_LETTERS,
  VOWEL_GROUPS,
  CONSONANT_GROUPS,
  MIXED_GROUPS,
  type PhonicsGroup,
  type PhonicsRule,
} from "@/lib/speller/phonics";

/**
 * 自然拼读规则表
 * 表 1 字母发音 · 表 2 元音组合（44）· 表 3 辅音组合（50）· 表 4 元辅组合（52）
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
          字母发音 · 元音组合 · 辅音组合 · 元辅组合。红色按「两元相遇」方法发音，蓝色按「组合发音」。
        </p>
      </header>

      {/* 图例 */}
      <div className="mb-8 flex flex-wrap items-center gap-x-8 gap-y-2 rounded-xl border border-border bg-card px-5 py-4 text-sm">
        <span className="flex items-center gap-2 text-foreground">
          <span className="inline-block size-2.5 rounded-full bg-red-500" />
          <span>
            两元相遇 <span className="text-muted-foreground">（两个元音字母相遇，发第一个字母的字母音）</span>
          </span>
        </span>
        <span className="flex items-center gap-2 text-foreground">
          <span className="inline-block size-2.5 rounded-full bg-blue-500" />
          <span>
            组合发音 <span className="text-muted-foreground">（字母组合整体的固定发音）</span>
          </span>
        </span>
      </div>

      {/* 表 1 · 字母发音 */}
      <section className="mb-8 rounded-xl border border-border bg-card p-6">
        <div className="mb-4 flex items-center gap-2">
          <h2 className="text-lg font-semibold text-foreground">字母发音</h2>
          <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">26 个</span>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
          {PHONICS_LETTERS.map(({ letter, ipa }) => (
            <div
              key={letter}
              className="flex flex-col items-center justify-center rounded-lg border border-border px-2 py-3"
            >
              <span className="text-lg font-semibold leading-tight text-foreground">{letter}</span>
              <span className="mt-0.5 text-xs text-muted-foreground">{ipa}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 表 2 · 元音组合 */}
      <PhonicsSection
        title="元音组合"
        count={VOWEL_GROUPS.reduce((n, g) => n + g.rules.length, 0)}
        groups={VOWEL_GROUPS}
      />

      {/* 表 3 · 辅音组合 */}
      <PhonicsSection
        title="辅音组合"
        count={CONSONANT_GROUPS.reduce((n, g) => n + g.rules.length, 0)}
        groups={CONSONANT_GROUPS}
      />

      {/* 表 4 · 元辅组合 */}
      <PhonicsSection
        title="元辅组合"
        count={MIXED_GROUPS.reduce((n, g) => n + g.rules.length, 0)}
        groups={MIXED_GROUPS}
      />
    </div>
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
