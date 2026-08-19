"use client"

import { useCallback, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import SentencePractice from "@/components/speller/SentencePractice";
import { getPhonemeGroups } from "@/lib/speller/phonics-vowel";
import type { Course } from "@/lib/speller/courses";

/**
 * 元音组合听写 · 音标模式
 * 发同一音标的词一起练（如 ɜː → work/bird/her/fur…），
 * 答对后该词中发此音的组合字母标红（phonemeMap 定位）
 */
export default function PhonemeDictationPage() {
  const router = useRouter();
  const params = useParams();
  const ph = decodeURIComponent((params.ph as string) ?? "");
  const allGroups = useMemo(() => getPhonemeGroups().sort((a, b) => b.words.length - a.words.length), []);
  const group = useMemo(() => allGroups.find((g) => g.ph === ph), [ph, allGroups]);

  // 单组合音标组（组合≤1）收拢为一个合集课：这些组的词合并一起练（每词带自己的 focus）
  const singleGroups = useMemo(
    () => allGroups.filter((g) => g.words.every((w) => (w.phonemeMap ?? []).filter((p) => p.ipa === g.ph).length <= 1)),
    [allGroups],
  );
  const isSingle = group ? singleGroups.includes(group) : false;

  const wordIdxRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [, setWaveTick] = useState(0);

  const onSentence = useCallback((courseIndex: number) => {
    wordIdxRef.current = courseIndex;
  }, []);

  // 合并词表：单组合组 → 全部单组合组的词；多组合组 → 本组词
  const words = useMemo(() => {
    if (isSingle) return singleGroups.flatMap((g) => g.words.map((w) => ({ ...w, focus: w.phonemeMap?.[0]?.ipa ?? "" })));
    return group?.words.map((w) => ({ ...w, focus: ph })) ?? [];
  }, [isSingle, singleGroups, group, ph]);

  // 播放当前词：Edge TTS 音频（en-GB-SoniaNeural），不用浏览器系统 TTS
  const playVoice = useCallback(() => {
    const w = words[wordIdxRef.current];
    if (!w || !w.audio) return;
    if (!audioRef.current) audioRef.current = new Audio();
    const a = audioRef.current;
    if (a.src !== w.audio) a.src = w.audio;
    a.currentTime = 0;
    a.play().catch(() => {});
    setWaveTick((t) => t + 1);
  }, [words]);

  useMemo(() => () => audioRef.current?.pause(), []);

  if (!group || group.words.length === 0) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <p className="text-lg text-muted-foreground">音标不存在</p>
      </div>
    );
  }

  const course: Course = {
    id: `phonics-phoneme-${isSingle ? "_single" : ph}`,
    name: isSingle ? `单组合合集 · 元音组合听写` : `/${ph}/ · 元音组合听写`,
    description: isSingle ? `单组合音标合集 · ${words.length} 词` : `音标 /${ph}/ · ${words.length} 词`,
    sessionSize: words.length,
    sentences: words.map((w) => ({
      cn: w.meaning,
      en: w.word,
      phonetic: w.phonetic ? w.phonetic.replace(/'/g, "ˈ") : undefined,
      syllables: w.syllables,
      phoneticFocus: w.focus || undefined,
      phonemeMap: w.phonemeMap,
    })),
  };

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <div id="progress-slot" className="w-full shrink-0" />
      <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center px-6 py-6">
        <SentencePractice
          course={course}
          autoStart
          showCn
          playVoice={playVoice}
          autoPlayVoice
          onCurrentSentence={onSentence}
          waveAudioRef={audioRef}
          confettiOrigin={{ x: 0.5, y: 0.6 }}
          restoreKey={course.id}
          alwaysShowInfo
          onNextGroup={() => {
            // 刷完一组 → 下一音标组（按词数排序循环）
            const idx = allGroups.findIndex((g) => g.ph === ph);
            const next = allGroups[(idx + 1) % allGroups.length];
            router.push(`/speller/phonics-dictation/phoneme/${encodeURIComponent(next.ph)}`);
          }}
          onExit={() => router.push("/speller/phonics")}
        />
      </div>
      <footer className="shrink-0 border-t">
        <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-2.5">
          <div id="shortcut-slot" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2" />
        </div>
      </footer>
    </div>
  );
}
