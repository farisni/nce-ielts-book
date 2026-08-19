"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import SentencePractice from "@/components/speller/SentencePractice";
import { WAXUE_CHAPTERS } from "@/lib/speller/phonetic";
import type { Course } from "@/lib/speller/courses";

/**
 * Speller · 英式音标听力听写页
 * 按音标类别整体学习（如「前元音」4 个音标单元全部单词一次练完），
 * 进度按类别记忆（phonetic-chapter-N）；每个单词带所属单元的音标（phoneticFocus），
 * 显示音标+释义，答对后对应音素字母红色突出
 */
export default function PhoneticDictationPage() {
  const router = useRouter();
  const params = useParams();
  const chapterSlug = (params.chapter as string) ?? "chapter-1";
  const chapter = WAXUE_CHAPTERS.find((c) => c.slug === chapterSlug);

  // 合并类别全部单词，每个词带所属单元的练习音标（phoneticFocus）
  const words = useMemo(() => {
    if (!chapter) return [];
    return chapter.tests.flatMap((t) => {
      const focus = (t.phonetics ?? "").replace(/\//g, "");
      return t.words.map((w) => ({ ...w, focus }));
    });
  }, [chapter]);

  // 当前词在合并单词列表中的索引（SentencePractice 回调更新，playVoice 读取）
  const wordIdxRef = useRef(0);
  // 复用的音频元素：切词自动停旧播新
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // 声波图刷新信号：audio 实例创建/切词后触发渲染，让 SentencePractice 重建 WaveSurfer
  const [, setWaveTick] = useState(0);

  const onSentence = useCallback((courseIndex: number) => {
    wordIdxRef.current = courseIndex;
  }, []);

  // 播放当前单词原声：无 mp3 用 TTS 兜底
  const playVoice = useCallback(() => {
    const w = words[wordIdxRef.current];
    if (!w) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(w.word);
    u.lang = "en-US";
    u.rate = 0.85;
    synth.speak(u);
  }, [words]);

  // 卸载时停止播放
  useEffect(
    () => () => {
      audioRef.current?.pause();
      window.speechSynthesis?.cancel();
    },
    [],
  );

  if (!chapter) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <p className="text-lg text-muted-foreground">类别不存在</p>
      </div>
    );
  }

  // 动态构造听写课程：单词 → 句子条目（en=单词, cn=释义, phonetic=音标）
  // sessionSize = 整个类别的词数：一次练完全部单词，进度条反映类别真实进度；
  // 进度记忆按类别（restoreKey = phonetic-${chapter}）
  const course: Course = {
    id: `phonetic-${chapterSlug}`,
    name: `${chapterSlug.replace("chapter-", "Chapter ")} · ${chapter.name}`,
    description: `英式音标 · ${chapter.tests.length} 个音标 · ${words.length} 词`,
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
      {/* 进度条固定槽位：练习中的进度/时间条通过 Portal 渲染到这里（页面顶部） */}
      <div id="progress-slot" className="w-full shrink-0" />

      {/* 主练习区：宽度撑满 + 内容上下左右居中（basic 样式） */}
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
          onExit={() => router.push("/speller/phonetic")}
        />
      </div>

      {/* 底部栏：左上一句 / 中快捷键按钮 / 右下一句 */}
      <footer className="shrink-0 border-t">
        <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-2.5">
          <div id="shortcut-slot" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2" />
        </div>
      </footer>
    </div>
  );
}
