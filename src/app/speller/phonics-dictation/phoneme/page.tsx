"use client"

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPhonemeGroups } from "@/lib/speller/phonics-vowel";

/**
 * 元音组合听写 · 音标模式
 * 按发音音标分组：发同一音标的词一起练（如 [ɜː] → work/bird/her/fur…）
 */
export default function PhonemeListPage() {
  const groups = getPhonemeGroups().sort((a, b) => b.words.length - a.words.length);

  return (
    <div className="mx-auto w-full max-w-4xl pb-16 pt-10">
      <header className="mb-8">
        <Link
          href="/speller/phonics"
          className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          返回自然拼读
        </Link>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Phoneme Dictation
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">音标模式 · 元音组合听写</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          按发音音标分组，发同一音的词一起练习。共 {groups.length} 个音标组。
        </p>
      </header>

      <div className="space-y-3">
        {groups.map((g) => (
          <Link
            key={g.ph}
            href={`/speller/phonics-dictation/phoneme/${encodeURIComponent(g.ph)}`}
            className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-6 py-5 transition-colors hover:border-ring/60 hover:bg-muted/40"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border text-xl font-semibold text-foreground">
                {g.ph}
              </span>
              <div>
                <h2 className="text-lg font-semibold text-foreground">[{g.ph}]</h2>
                <p className="mt-1 text-sm text-muted-foreground">{g.words.map((w) => w.word).join(" · ")}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{g.words.length} 词</span>
              <span className="text-sm font-medium text-[#337ea9] transition-transform group-hover:translate-x-1 dark:text-[#9cd8fc]">
                进入听写 →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
