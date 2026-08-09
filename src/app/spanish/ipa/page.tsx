"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SPANISH_VOWELS,
  SPANISH_CONSONANTS,
  SPANISH_PHONEME_GROUPS,
  SPANISH_TRANSCRIPTIONS,
  SPANISH_DIALECTS,
  type IpaRow,
} from "@/lib/spanish-ipa";

/**
 * 西班牙语 IPA 音标表
 * 复刻 speechgen.io/en/node/spanish-ipa/
 * - 5 元音 + 19 辅音音素表，每个带例词与音标
 * - Listen 播放原网站 speechgen 的原版音频（已本地化到 public/audio/spanish-ipa）
 * - 附带音素总表、转录示例、西班牙/拉美方言对比
 */

export default function SpanishIpaPage() {
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  /** 播放本地音频：同一时刻只播一个 */
  const play = useCallback((audio: string, id: string) => {
    const prev = audioRef.current;
    if (prev) {
      prev.pause();
      prev.currentTime = 0;
    }
    setPlaying(id);
    const next = new Audio(`/audio/spanish-ipa/${audio}`);
    next.onended = () => setPlaying(null);
    next.onerror = () => setPlaying(null);
    next.play().catch(() => setPlaying(null));
    audioRef.current = next;
  }, []);

  /** 播放按钮：播放中高亮 */
  const ListenBtn = ({ audio, id }: { audio: string; id: string }) => (
    <button
      type="button"
      onClick={() => play(audio, id)}
      title="播放原版发音"
      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      <Volume2 className={cn("size-3.5", playing === id && "text-primary")} />
      Listen
    </button>
  );

  /** 音素行：IPA | 拼写 | 例词 | 音标 | Listen */
  const IpaTable = ({ title, desc, rows, idPrefix }: { title: string; desc: string; rows: IpaRow[]; idPrefix: string }) => (
    <section className="mb-8">
      <h2 className="mb-1 text-lg font-semibold text-foreground">{title}</h2>
      <p className="mb-3 text-sm text-muted-foreground">{desc}</p>
      <div className="overflow-hidden rounded-lg border border-border bg-background">
        {/* 表头 */}
        <div className="grid grid-cols-[3.5rem_1fr_1fr_1.4fr_auto] items-center gap-2 border-b border-border bg-muted/40 px-3 py-2 text-xs font-medium text-muted-foreground sm:grid-cols-[4rem_6rem_5rem_1fr_auto]">
          <div>IPA</div>
          <div>拼写</div>
          <div>例词</div>
          <div>音标</div>
          <div className="text-right">Listen</div>
        </div>
        {rows.map((row) => (
          <div
            key={row.ipa}
            className="grid grid-cols-[3.5rem_1fr_1fr_1.4fr_auto] items-center gap-2 border-b border-border px-3 py-2.5 last:border-b-0 sm:grid-cols-[4rem_6rem_5rem_1fr_auto]"
          >
            {/* IPA 符号 */}
            <span className="text-lg font-semibold text-primary">{row.ipa}</span>
            {/* 拼写 */}
            <span className="text-sm text-foreground">{row.spelling}</span>
            {/* 例词 */}
            <span className="text-sm">
              <span className="text-foreground">{row.example}</span>
              {row.zh && <span className="ml-1 text-xs text-muted-foreground">{row.zh}</span>}
            </span>
            {/* 音标 */}
            <span className="font-mono text-sm text-muted-foreground">{row.transcription}</span>
            {/* Listen（原版音频） */}
            <div className="text-right">
              {row.audio ? (
                <ListenBtn audio={row.audio} id={`${idPrefix}-${row.ipa}`} />
              ) : (
                <span className="text-xs text-muted-foreground/50">—</span>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* 底部备注 */}
      {rows.some((r) => r.note) && (
        <ul className="mt-2 space-y-0.5 text-xs text-muted-foreground/80">
          {rows.filter((r) => r.note).map((r) => (
            <li key={r.ipa}>
              <span className="font-medium text-foreground/70">[{r.ipa}]</span> {r.note}
            </li>
          ))}
        </ul>
      )}
    </section>
  );

  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-16 pt-6">
      {/* 页头 */}
      <header className="mb-6">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Spanish · IPA Chart
        </p>
        <h1 className="mb-3 text-2xl font-semibold tracking-wide text-foreground">
          西班牙语 IPA 音标表
        </h1>
        <p className="mb-1 max-w-2xl leading-7 text-muted-foreground">
          国际音标（IPA）为每个音素配备唯一符号。西班牙语拼写与发音高度对应，比英语规则得多。
          全表共 <span className="font-medium text-foreground">24 个音素</span>：5 元音 + 19 辅音。点击每行的 Listen 播放原版发音。
        </p>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground/80">
          发音为原网站 speechgen.io 的原版录音（卡斯蒂利亚人声 Enrique / Lucía），已本地化，无需联网。
        </p>
      </header>

      {/* 元音 */}
      <IpaTable
        title="元音 Vowels"
        desc="西班牙语只有 5 个纯元音，且每个永远发同样的音——没有长短元音、没有英语式弱化。"
        rows={SPANISH_VOWELS}
        idPrefix="vowel"
      />

      {/* 辅音 */}
      <IpaTable
        title="辅音 Consonants"
        desc="19 个辅音音素。[ɲ] 是 ñ，[x] 是 j/g，[θ] 是卡斯蒂利亚的 c/z，[ʎ] 是 ll；b/d/g 在元音间弱化为 [β ð ɣ]。"
        rows={SPANISH_CONSONANTS}
        idPrefix="cons"
      />

      {/* 双 R 说明 */}
      <section className="mb-8">
        <h2 className="mb-1 text-lg font-semibold text-foreground">双 R：[r] 与 [ɾ]</h2>
        <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
          单颤音 <span className="font-mono font-medium text-foreground">[ɾ]</span> 像美式 butter 的 t（pero 但是）；
          多击颤音 <span className="font-mono font-medium text-foreground">[r]</span> 是著名的大舌颤音（perro 狗）。
          <span className="font-medium text-foreground"> rr</span> 或词首 <span className="font-medium text-foreground">r-</span> 发 [r]，其余位置发 [ɾ]。
        </p>
      </section>

      {/* 音素总表 */}
      <section className="mb-8">
        <h2 className="mb-1 text-lg font-semibold text-foreground">西班牙语音素总表</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          音素是能区分意义的声音单位，不是字母。h 不发音、c 对应两个音、b/v 是同一个音素。
        </p>
        <div className="overflow-hidden rounded-lg border border-border bg-background">
          <div className="grid grid-cols-[1fr_auto] items-center gap-2 border-b border-border bg-muted/40 px-4 py-2 text-xs font-medium text-muted-foreground">
            <div>组</div>
            <div className="text-right">音素数</div>
          </div>
          {SPANISH_PHONEME_GROUPS.map((g) => (
            <div key={g.group} className="grid grid-cols-[1fr_auto] items-center gap-2 border-b border-border px-4 py-2.5 last:border-b-0">
              <div className="flex items-baseline gap-2">
                <span className="font-medium text-foreground">{g.group}</span>
                <span className="text-xs text-muted-foreground">{g.zh}</span>
                <span className="font-mono text-sm text-primary">{g.phonemes}</span>
              </div>
              <span className="tabular-nums text-sm text-foreground">{g.count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 转录示例 */}
      <section className="mb-8">
        <h2 className="mb-1 text-lg font-semibold text-foreground">音标转录示例</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          斜线 / / 表示音素转录（区分意义的声音），方括号 [ ] 表示带变体的语音转录（如 [β ð ɣ]）。
        </p>
        <div className="overflow-hidden rounded-lg border border-border bg-background">
          {SPANISH_TRANSCRIPTIONS.map((t) => (
            <div key={t.spelling} className="grid grid-cols-[6rem_1fr] items-center gap-3 border-b border-border px-4 py-2.5 last:border-b-0 sm:grid-cols-[6rem_10rem_1fr]">
              <span className="text-base font-medium text-foreground">{t.spelling}</span>
              <span className="font-mono text-sm text-primary">{t.transcription}</span>
              <span className="text-xs text-muted-foreground">{t.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 方言对比 */}
      <section className="mb-8">
        <h2 className="mb-1 text-lg font-semibold text-foreground">西班牙 vs 拉丁美洲</h2>
        <p className="mb-3 text-sm text-muted-foreground">同一个词，先是卡斯蒂利亚（西班牙）口音，再是拉美口音。点击 Listen 听两者区别。</p>
        <div className="overflow-hidden rounded-lg border border-border bg-background">
          {SPANISH_DIALECTS.map((d) => (
            <div key={d.note} className="border-b border-border px-4 py-3 last:border-b-0">
              <div className="grid gap-2 sm:grid-cols-2">
                {/* 西班牙 */}
                <div className="rounded-lg border border-border bg-muted/20 px-3 py-2">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">西班牙 · {d.spain.label}</span>
                    {d.spain.audio && <ListenBtn audio={d.spain.audio} id={`sp-${d.spain.example}`} />}
                  </div>
                  <span className="text-base font-medium text-foreground">{d.spain.example}</span>
                  <span className="ml-2 font-mono text-sm text-primary">{d.spain.transcription}</span>
                </div>
                {/* 拉美 */}
                <div className="rounded-lg border border-border bg-muted/20 px-3 py-2">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">拉丁美洲 · {d.latam.label}</span>
                    {d.latam.audio && <ListenBtn audio={d.latam.audio} id={`la-${d.latam.example}`} />}
                  </div>
                  <span className="text-base font-medium text-foreground">{d.latam.example}</span>
                  <span className="ml-2 font-mono text-sm text-primary">{d.latam.transcription}</span>
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground/80">{d.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
