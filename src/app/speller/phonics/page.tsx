import { Fragment } from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { MNEMONIC_DATA, MNEMONIC_COLS, SYLLABLE_RULES, type MnemonicEntry } from "@/lib/speller/phonics-mnemonic";
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

function VowelMnemonicTable() {
  const colsRylw = MNEMONIC_COLS.slice(0, 4);
  const colsVowel = MNEMONIC_COLS.slice(4);

  return (
    <section className="mb-8 rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-lg font-semibold text-foreground">元音组合 · 二级巧记表</h2>
        <Link
          href="/speller/phonics-dictation/vowel-a"
          className="ml-1 text-sm font-medium text-[#337ea9] transition-transform hover:translate-x-0.5 dark:text-[#9cd8fc]"
        >
          进入拼写 →
        </Link>
        <span className="text-sm text-muted-foreground/60">模式：</span>
        <Link
          href="/speller/phonics-dictation/vowel-a"
          className="rounded-md border border-border px-2 py-0.5 text-xs font-medium text-foreground transition-colors hover:border-ring/60"
        >
          按组合
        </Link>
        <Link
          href="/speller/phonics-dictation/phoneme"
          className="rounded-md border border-border px-2 py-0.5 text-xs font-medium text-foreground transition-colors hover:border-ring/60"
        >
          按音标
        </Link>
      </div>
      <div className="grid grid-cols-[3.5rem_repeat(9,minmax(0,1fr))_minmax(0,1.8fr)] border-l border-t border-border">
        {/* 表头 */}
        <div />
        {colsRylw.map((c) => (
          <div key={c} className="flex items-center justify-center border-b border-r border-border bg-muted py-1 text-sm font-semibold text-blue-500 dark:text-blue-400">
            {c}
          </div>
        ))}
        {colsVowel.map((c) => (
          <div key={c} className="flex items-center justify-center border-b border-r border-border bg-muted/60 py-1 text-sm font-semibold text-foreground">
            {c}
          </div>
        ))}
        <div className="flex items-center justify-center border-b border-r border-border bg-muted/40 py-1 text-sm font-semibold text-muted-foreground">
          其他
        </div>

        {/* 数据行 */}
        {Object.entries(MNEMONIC_DATA).map(([v, row]) => (
          <Fragment key={v}>
            <div className="flex items-center justify-center border-b border-r border-border py-2 text-base font-bold text-foreground">
              {v}
            </div>
            {MNEMONIC_COLS.map((c) => {
              const entries = row.cols[c];
              // r y w l 列数据单元格：微黄色；a e i o u 列：淡绿色
              const bg = colsRylw.includes(c)
                ? "bg-yellow-50/60 dark:bg-yellow-900/15"
                : "bg-emerald-50/50 dark:bg-emerald-900/15";
              return (
                <div key={c} className={`flex min-h-14 flex-col items-start justify-start gap-1 border-b border-r border-border px-1 py-1.5 ${bg}`}>
                  {entries && entries.length > 0 ? (
                    entries.map((e) => <MnemonicCell key={e.pattern} entry={e} />)
                  ) : (
                    <span className="text-muted-foreground/30">·</span>
                  )}
                </div>
              );
            })}
            <div className="flex min-h-14 flex-col items-start justify-start gap-1 border-b border-r border-border bg-rose-50/50 px-1 py-1.5 dark:bg-rose-900/15">
              {row.other.map((e) => (
                <MnemonicInline key={e.pattern} entry={e} />
              ))}
            </div>
          </Fragment>
        ))}
      </div>

      {/* 底部：元音字母开音节/闭音节发音规则（三行表格：表头 aeiou / 开音节 / 闭音节） */}
      <div className="mt-4">
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">元音字母 · 发音规则（开音节 / 闭音节）</h3>
        <div className="grid grid-cols-[3.5rem_repeat(5,minmax(0,1fr))] border-l border-t border-border">
          <div className="flex items-center justify-center border-b border-r border-border bg-muted/40 py-1.5 text-sm font-semibold text-muted-foreground" />
          {SYLLABLE_RULES.map((s) => (
            <div key={s.vowel} className="flex items-center justify-center border-b border-r border-border bg-muted/60 py-1.5 text-sm font-semibold text-foreground">
              {s.vowel}
            </div>
          ))}
          <div className="flex items-center justify-center border-b border-r border-border bg-muted/40 py-2 text-xs font-medium text-muted-foreground">
            开音节
          </div>
          {SYLLABLE_RULES.map((s) => (
            <div key={s.vowel} className="flex items-center justify-center border-b border-r border-border py-2 text-sm text-foreground">
              {s.open}
            </div>
          ))}
          <div className="flex items-center justify-center border-b border-r border-border bg-muted/40 py-2 text-xs font-medium text-muted-foreground">
            闭音节
          </div>
          {SYLLABLE_RULES.map((s) => (
            <div key={s.vowel} className="flex items-center justify-center border-b border-r border-border py-2 text-sm text-muted-foreground">
              {s.closed}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 示例单词中对应组合的字母标红（magic-e 结构标首尾两个字母，如 a_e → make 的 a 和 e） */
function renderExampleWord(w: string, pattern: string) {
  if (pattern.includes("_")) {
    const [first, last] = pattern.split("_");
    const low = w.toLowerCase();
    const fi = low.indexOf(first);
    const li = low.lastIndexOf(last);
    if (fi < 0 || li < 0 || li <= fi) return w;
    return (
      <>
        {w.slice(0, fi)}
        <span className="text-rose-500">{w.slice(fi, fi + first.length)}</span>
        {w.slice(fi + first.length, li)}
        <span className="text-rose-500">{w.slice(li, li + last.length)}</span>
        {w.slice(li + last.length)}
      </>
    );
  }
  const idx = w.toLowerCase().indexOf(pattern.toLowerCase());
  if (idx < 0) return w;
  return (
    <>
      {w.slice(0, idx)}
      <span className="text-rose-500">{w.slice(idx, idx + pattern.length)}</span>
      {w.slice(idx + pattern.length)}
    </>
  );
}

/** 其他列条目：组合固定宽度左对齐 + 音标同行；
 *  多音标条目（ear 等）悬停 Tooltip 显示每个音标的示例单词 */
function MnemonicInline({ entry }: { entry: MnemonicEntry }) {
  const p = entry.pattern;
  const body = (
    <span className="inline-flex items-baseline leading-tight">
      <span className="w-10 shrink-0 text-left text-sm font-semibold text-foreground">{p}</span>
      <span className="ml-1 text-[0.65rem] text-muted-foreground">
        {entry.ipa.map((it, i) => (
          <span key={it.ph}>
            {i > 0 && " "}[{it.ph}]
            {/* 单音标条目直接显示单词 */}
            {entry.ipa.length <= 1 && <span className="text-foreground/80"> {renderExampleWord(it.w, p)}</span>}
          </span>
        ))}
      </span>
    </span>
  );
  if (entry.ipa.length > 1) {
    // 多音标条目：hover 显示自绘 tooltip（页面内渲染，无需 portal）
    return (
      <span className="group relative inline-flex items-baseline leading-tight">
        {body}
        <span className="pointer-events-none absolute bottom-full left-0 z-20 mb-1 hidden whitespace-nowrap rounded-md border border-border bg-background px-2 py-1.5 text-xs shadow-sm group-hover:block">
          {entry.ipa.map((it) => (
            <span key={it.ph} className="block text-muted-foreground">
              <span className="inline-block w-9 text-left">[{it.ph}]</span>
              <span className="font-medium text-foreground">{renderExampleWord(it.w, p)}</span>
            </span>
          ))}
        </span>
      </span>
    );
  }
  return body;
}

function MnemonicCell({ entry, small = false }: { entry: MnemonicEntry; small?: boolean }) {
  const p = entry.pattern;
  return (
    <div className={`flex w-full flex-col items-start leading-tight ${small ? "" : ""}`}>
      {/* 组合行：大 div，固定高度居中（音标行保持左对齐） */}
      <div className={`flex h-6 w-full items-center justify-center font-semibold ${small ? "text-sm" : "text-base"} text-foreground`}>
        {p[0]}
        {entry.plain ? (
          p.slice(1)
        ) : (
          <span className="text-blue-500 dark:text-blue-400">{p.slice(1)}</span>
        )}
      </div>
      {/* 音标区：每个音标一行 div，行内左右分（左 [音标] 右 单词） */}
      <div className="flex w-full flex-col items-start text-[0.65rem] text-muted-foreground">
        {entry.ipa.map((it) => (
          <div key={it.ph} className="flex h-4 w-full items-center justify-start leading-none">
            <div className="w-7 shrink-0 text-left">[{it.ph}]</div>
            <div className="text-left text-foreground/80">{renderExampleWord(it.w, entry.pattern)}</div>
          </div>
        ))}
      </div>
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
