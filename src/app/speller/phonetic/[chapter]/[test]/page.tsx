"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import SentencePractice from "@/components/speller/SentencePractice";
import { getWaxueTest } from "@/lib/speller/phonetic";
import type { Course } from "@/lib/speller/courses";

/**
 * Speller · 英式音标轻松学音标听写页
 * basic 样式布局：看中文，听原声，用键盘打出单词
 * - 切词自动播放该词 mp3 原声（autoPlayVoice），Tab 重播
 * - 无独立 mp3 的单词用浏览器 TTS 兜底
 */
export default function WhaleDictationPage() {
  const router = useRouter();
  const params = useParams();
  const chapterSlug = (params.chapter as string) ?? "chapter-3";
  const testSlug = (params.test as string) ?? "test-1";
  const test = getWaxueTest(chapterSlug, testSlug);

  // 当前词在课程原始句子中的索引（SentencePractice 回调更新，playVoice 读取）
  const wordIdxRef = useRef(0);
  // 复用的音频元素：切词自动停旧播新
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // 声波图刷新信号：audio 实例创建/切词后触发渲染，让 SentencePractice 重建 WaveSurfer
  const [, setWaveTick] = useState(0);

  const onSentence = useCallback((courseIndex: number) => {
    wordIdxRef.current = courseIndex;
  }, []);

  // 播放当前单词原声：有 mp3 播 mp3，无则 TTS 兜底
  const playVoice = useCallback(() => {
    const w = test?.words[wordIdxRef.current];
    if (!w) return;
    if (w.audio) {
      if (!audioRef.current) audioRef.current = new Audio();
      const a = audioRef.current;
      if (a.src !== w.audio) a.src = w.audio; // 换 src 自动停止旧播放
      a.currentTime = 0;
      a.play().catch(() => {});
      setWaveTick((t) => t + 1);
    } else {
      const synth = window.speechSynthesis;
      synth.cancel();
      const u = new SpeechSynthesisUtterance(w.word);
      u.lang = "en-US";
      u.rate = 0.85;
      synth.speak(u);
    }
  }, [test]);

  // 卸载时停止播放
  useEffect(
    () => () => {
      audioRef.current?.pause();
      window.speechSynthesis?.cancel();
    },
    [],
  );

  if (!test) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <p className="text-lg text-muted-foreground">Test 不存在</p>
      </div>
    );
  }

  // 动态构造听写课程：单词 → 句子条目（en=单词, cn=释义, phonetic=音标）
  // sessionSize = 整个 Test 的词数：一次练完全部单词，进度条反映 Test 真实进度
  // 音标：部分源数据用 ASCII 撇号 ' 表重音，转标准 IPA ˈ；// 包围由 SentencePractice 统一处理
  const course: Course = {
    id: `phonetic-${chapterSlug}-${testSlug}`,
    name: `${chapterSlug.replace("chapter-", "Chapter ")} · ${test.name}`,
    description: `英式音标 · ${test.words.length} 词`,
    sessionSize: test.words.length,
    sentences: test.words.map((w) => ({
      cn: w.meaning,
      en: w.word,
      phonetic: w.phonetic ? w.phonetic.replace(/'/g, "ˈ") : undefined,
      syllables: w.syllables,
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
