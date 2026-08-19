"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import SentencePractice from "@/components/speller/SentencePractice";
import { PHONICS_CONSONANT_CHAPTERS } from "@/lib/speller/phonics-consonant";
import type { Course } from "@/lib/speller/courses";

/**
 * Speller · 辅音组合听写页
 * 按分组整体学习（开头辅音群 / 双字母组合 / 尾缀与双写），
 * 进度按分组记忆（phonics-consonant-*）；每个单词带所属组合的读音（phoneticFocus），
 * 显示音标+释义，答对后对应组合字母红色突出
 */
export default function MixedDictationPage() {
  const router = useRouter();
  const params = useParams();
  const chapterSlug = (params.chapter as string) ?? "consonant-begin";
  const chapter = PHONICS_CONSONANT_CHAPTERS.find((c) => c.slug === chapterSlug);

  // 合并分组全部单词，每个词带所属规则的练习音标（phoneticFocus）
  const words = useMemo(() => {
    if (!chapter) return [];
    return chapter.tests.flatMap((t) => {
      // 每个词带所属组合的读音（phonemeMap[0].ipa）作 phoneticFocus，答对后组合字母标红
      const focus = (w: (typeof t.words)[number]) => w.phonemeMap?.[0]?.ipa ?? "";
      return t.words.map((w) => ({ ...w, focus: focus(w) }));
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

  // 播放当前单词原声：一律用 Edge TTS 音频（en-GB-SoniaNeural），不用浏览器系统 TTS
  const playVoice = useCallback(() => {
    const w = words[wordIdxRef.current];
    if (!w || !w.audio) return;
    if (!audioRef.current) audioRef.current = new Audio();
    const a = audioRef.current;
    if (a.src !== w.audio) a.src = w.audio; // 换 src 自动停止旧播放
    a.currentTime = 0;
    a.play().catch(() => {});
    setWaveTick((t) => t + 1);
  }, [words]);

  // 卸载时停止播放
  useEffect(
    () => () => {
      audioRef.current?.pause();
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
  // sessionSize = 整个分组的词数：一次练完全部单词，进度条反映分组真实进度；
  // 进度记忆按分组（restoreKey = phonics-consonant-${chapter}）
  const course: Course = {
    id: `phonics-consonant-${chapterSlug}`,
    name: `${chapter.name} · 辅音组合听写`,
    description: `辅音组合 · ${chapter.tests.length} 个规则 · ${words.length} 词`,
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
          onNextGroup={() => {
            // 刷完一组 → 下一分组（a 特殊词形 → i 特殊词形 → c·g 变音 → o 特殊词形 → 常见词尾，最后一组回到第一个）
            const slugs = PHONICS_CONSONANT_CHAPTERS.map((c) => c.slug);
            const next = slugs[(slugs.indexOf(chapterSlug) + 1) % slugs.length];
            router.push(`/speller/phonics-consonant-dictation/${next}`);
          }}
          onExit={() => router.push("/speller/phonics")}
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
