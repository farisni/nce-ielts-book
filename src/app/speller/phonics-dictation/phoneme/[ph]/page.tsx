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
  const group = useMemo(() => getPhonemeGroups().find((g) => g.ph === ph), [ph]);

  const wordIdxRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [, setWaveTick] = useState(0);

  const onSentence = useCallback((courseIndex: number) => {
    wordIdxRef.current = courseIndex;
  }, []);

  // 播放当前词：Edge TTS 音频（en-GB-SoniaNeural），不用浏览器系统 TTS
  const playVoice = useCallback(() => {
    const w = group?.words[wordIdxRef.current];
    if (!w || !w.audio) return;
    if (!audioRef.current) audioRef.current = new Audio();
    const a = audioRef.current;
    if (a.src !== w.audio) a.src = w.audio;
    a.currentTime = 0;
    a.play().catch(() => {});
    setWaveTick((t) => t + 1);
  }, [group]);

  useMemo(() => () => audioRef.current?.pause(), []);

  if (!group || group.words.length === 0) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <p className="text-lg text-muted-foreground">音标不存在</p>
      </div>
    );
  }

  const course: Course = {
    id: `phonics-phoneme-${ph}`,
    name: `[${ph}] · 元音组合听写`,
    description: `音标 [${ph}] · ${group.words.length} 词`,
    sessionSize: group.words.length,
    sentences: group.words.map((w) => ({
      cn: w.meaning,
      en: w.word,
      phonetic: w.phonetic ? w.phonetic.replace(/'/g, "ˈ") : undefined,
      syllables: w.syllables,
      phoneticFocus: ph,
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
          onExit={() => router.push("/speller/phonics-dictation/phoneme")}
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
