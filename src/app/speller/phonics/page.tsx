"use client"

import { Fragment, useState } from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { MNEMONIC_DATA, MNEMONIC_COLS, SYLLABLE_RULES, type MnemonicEntry } from "@/lib/speller/phonics-mnemonic";
import { getPhonemeGroups } from "@/lib/speller/phonics-vowel";
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
  // tab：按组合（巧记表）/ 按音标（音标模式表格）
  const [tab, setTab] = useState<"group" | "phoneme">("group");

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

      {/* 表 1 · 元音组合：tab 切换（按组合巧记表 / 按音标表格） */}
      <div className="mb-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setTab("group")}
          className={`rounded-md border px-3 py-1 text-sm font-medium transition-colors ${
            tab === "group" ? "border-ring/60 bg-muted text-foreground" : "border-border text-muted-foreground hover:border-ring/60"
          }`}
        >
          按组合
        </button>
        <button
          type="button"
          onClick={() => setTab("phoneme")}
          className={`rounded-md border px-3 py-1 text-sm font-medium transition-colors ${
            tab === "phoneme" ? "border-ring/60 bg-muted text-foreground" : "border-border text-muted-foreground hover:border-ring/60"
          }`}
        >
          按音标
        </button>
      </div>
      {tab === "group" ? <VowelMnemonicTable /> : <PhonemeMnemonicTable />}

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

/** 音标模式表格（内嵌于自然拼读页，同巧记表比例缩小）：
 *  第 1 列音标（跨行，点击播放音素发音），第 2-6 列示例单词（点击播放原声），
 *  单词中发该音的组合字母红紫交替；「听写 →」进入音标听写 */
function PhonemeMnemonicTable() {
  const groups = getPhonemeGroups().sort((a, b) => b.words.length - a.words.length);
  const groupRows = groups.map((g) => Math.max(1, Math.ceil(g.words.length / 5)));
  const groupStarts: number[] = [];
  let acc = 1;
  for (const r of groupRows) {
    groupStarts.push(acc);
    acc += r;
  }

  const playIpa = (ph: string) => {
    new Audio(`/audio/phonetic/ipa/${encodeURIComponent(ph)}.aac`).play().catch(() => {});
  };
  const playWord = (word: string, audio?: string) => {
    if (audio) {
      new Audio(audio).play().catch(() => {});
      return;
    }
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = "en-US";
    u.rate = 0.85;
    synth.speak(u);
  };

  return (
    <section className="mb-8 rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-lg font-semibold text-foreground">元音组合 · 音标模式</h2>
        <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
          发同一音的词一起练 · {groups.length} 个音标
        </span>
      </div>
      <div className="grid grid-cols-6 border-l border-t border-border">
        {groups.map((g, gi) => {
          const rows = groupRows[gi];
          const startRow = groupStarts[gi];
          const patterns: string[] = [];
          for (const w of g.words) {
            for (const p of w.phonemeMap ?? []) {
              if (p.ipa === g.ph && !patterns.includes(p.spelling)) patterns.push(p.spelling);
            }
          }
          const spellColors: Record<string, string> = {};
          patterns.forEach((pt, i) => {
            spellColors[pt] = i % 2 === 0 ? "text-rose-500" : "text-violet-500";
          });
          return (
            <Fragment key={g.ph}>
              {/* 音标列：点击播放音素发音，跨 rows 行 */}
              <button
                type="button"
                onClick={() => playIpa(g.ph)}
                title={`播放 /${g.ph}/ 发音`}
                className="group/ipa relative flex cursor-pointer flex-col items-center justify-center border-b border-r border-border px-1.5 py-2 transition-colors hover:bg-muted/40"
                style={{ gridColumn: 1, gridRow: `${startRow} / span ${rows}` }}
              >
                <span className="text-base font-semibold leading-tight text-foreground group-hover/ipa:text-primary">
                  /{g.ph}/
                </span>
                {patterns.length > 0 && (
                  <span className="mt-1 grid grid-cols-3 items-start gap-x-1.5 gap-y-0.5 text-xs font-semibold leading-tight">
                    {patterns.map((pt) => (
                      <span key={pt} className={spellColors[pt]}>
                        {pt}
                      </span>
                    ))}
                  </span>
                )}
                <Link
                  href={`/speller/phonics-dictation/phoneme/${encodeURIComponent(g.ph)}`}
                  className="mt-1.5 rounded-md border border-border px-1.5 py-0.5 text-[0.7rem] font-medium text-[#337ea9] transition-colors hover:border-ring/60 dark:text-[#9cd8fc]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {g.words.length} 词 · 听写 →
                </Link>
              </button>
              {/* 示例单词：每行固定 5 格（行尾空格留空占位）；点击播放原声 */}
              {Array.from({ length: rows * 5 }).map((_, k) => {
                const w = g.words[k];
                if (!w) return <div key={`${g.ph}-empty-${k}`} className="border-b border-r border-border" />;
                return (
                  <button
                    key={`${w.word}-${k}`}
                    type="button"
                    onClick={() => playWord(w.word, w.audio)}
                    title={`播放 ${w.word}`}
                    className="flex cursor-pointer items-center justify-center border-b border-r border-border px-1.5 py-0.5 text-base font-medium text-foreground transition-colors hover:bg-muted/40"
                  >
                    {renderHighlightWord(w.word, w.phonemeMap, g.ph, spellColors)}
                  </button>
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}

/** 单词中发该音（phonemeMap.ipa === ph）的组合字母标红（红紫交替按组合） */
function renderHighlightWord(
  word: string,
  map: { ipa: string; spelling: string }[] | undefined,
  ph: string,
  spellColors: Record<string, string>,
) {
  if (!map) return word;
  const letterColors: (string | null)[] = [];
  for (let i = 0; i < word.length; i++) letterColors.push(null);
  for (const p of map) {
    if (p.ipa !== ph) continue;
    const idx = word.toLowerCase().indexOf(p.spelling.toLowerCase());
    if (idx < 0) continue;
    const color = spellColors[p.spelling] ?? "text-rose-500";
    for (let k = 0; k < p.spelling.length; k++) letterColors[idx + k] = color;
  }
  if (letterColors.every((c) => c === null)) return word;
  return (
    <>
      {word.split("").map((c, i) =>
        letterColors[i] ? (
          <span key={i} className={letterColors[i]!}>
            {c}
          </span>
        ) : (
          c
        ),
      )}
    </>
  );
}
