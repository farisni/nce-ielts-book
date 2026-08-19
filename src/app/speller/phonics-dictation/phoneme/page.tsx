"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPhonemeGroups } from "@/lib/speller/phonics-vowel";
import { getAllProgress } from "@/lib/speller/progress";

/**
 * 元音组合听写 · 音标模式（排版同 /speller/phonetic）
 * 按发音音标分组表格：第 1 列音标（跨行，点击播放音素发音），
 * 第 2-6 列示例单词（点击播放原声），单词中发该音的组合字母红紫交替高亮
 */
export default function PhonemeListPage() {
  // 各音标组的上次听写位置：{ ph: 单词序号（从 1 起） }
  const [lastPos, setLastPos] = useState<Record<string, number>>({});
  const groups = getPhonemeGroups().sort((a, b) => b.words.length - a.words.length);
  const totalWords = groups.reduce((s, g) => s + g.words.length, 0);

  useEffect(() => {
    getAllProgress()
      .then((map) => {
        const pos: Record<string, number> = {};
        for (const g of groups) {
          const last = map[`phonics-phoneme-${g.ph}`]?.lastPos ?? 0;
          if (last > 0) pos[g.ph] = last + 1;
        }
        setLastPos(pos);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 播放音素标准发音（/audio/phonetic/ipa/{音素}.aac）
  const playIpa = (ph: string) => {
    new Audio(`/audio/phonetic/ipa/${encodeURIComponent(ph)}.aac`).play().catch(() => {});
  };

  // 播放单词原声（Edge TTS mp3）
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
          {groups.length} 个音标 · {totalWords} 个单词。发同一音的词一起练，点击音标听发音、点击单词听原声。
        </p>
      </header>

      {/* 音标分组区块 */}
      <div className="space-y-3">
        {groups.map((g) => {
          const pos = lastPos[g.ph];
          const rows = Math.max(1, Math.ceil(g.words.length / 5));
          // 该音标对应的不同拼写组合（如 ɜː → er/ir/or/ur…）：红紫交替着色
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
            <div key={g.ph} className="grid grid-cols-6 gap-2">
              {/* 音标列：点击播放音素发音，跨 rows 行 */}
              <button
                type="button"
                onClick={() => playIpa(g.ph)}
                title={`播放 [${g.ph}] 发音`}
                className="group/ipa relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-border px-2 py-3 transition-colors hover:border-ring/60 hover:bg-muted/40"
                style={{ gridRow: `span ${rows}` }}
              >
                <span className="text-lg font-semibold leading-tight text-foreground group-hover/ipa:text-primary">
                  [{g.ph}]
                </span>
                {/* 该音标的全部拼写组合（红紫交替） */}
                {patterns.length > 0 && (
                  <span className="mt-1 grid grid-cols-2 items-start gap-x-2 gap-y-1 text-sm font-semibold leading-tight">
                    {patterns.map((pt) => (
                      <span key={pt} className={spellColors[pt]}>
                        {pt}
                      </span>
                    ))}
                  </span>
                )}
                <span className="mt-1 text-xs text-muted-foreground">{g.words.length} 词</span>
                {pos !== undefined && (
                  <span className="mt-1 text-[0.7rem] text-[#337ea9] dark:text-[#9cd8fc]">第 {pos} 词</span>
                )}
                {/* 进入听写链接 */}
                <Link
                  href={`/speller/phonics-dictation/phoneme/${encodeURIComponent(g.ph)}`}
                  className="mt-2 rounded-md border border-border px-2 py-0.5 text-xs font-medium text-[#337ea9] transition-colors hover:border-ring/60 dark:text-[#9cd8fc]"
                  onClick={(e) => e.stopPropagation()}
                >
                  听写 →
                </Link>
              </button>
              {/* 示例单词：点击播放原声；发该音的组合字母高亮 */}
              {g.words.map((w, wi) => (
                <button
                  key={`${w.word}-${wi}`}
                  type="button"
                  onClick={() => playWord(w.word, w.audio)}
                  title={`播放 ${w.word}`}
                  className="flex cursor-pointer items-center justify-center rounded-lg border border-border px-2 py-1 text-lg font-medium text-foreground transition-colors hover:border-ring/60 hover:bg-muted/40"
                >
                  {renderHighlightWord(w.word, w.phonemeMap, g.ph, spellColors)}
                </button>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** 单词中发该音（phonemeMap.ipa === ph）的组合字母标红（magic-e 拆首尾） */
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
