/**
 * 雅思王听力 · 听力词汇（WhaleListen 数据）
 * 层级：课程 → Chapter → Test/Section → 单词
 * 数据来源：/Users/faris/Downloads/WhaleListen-雅思王听力-*（已精简）
 * audio 为空表示该词无独立 mp3，播放时用 TTS 兜底
 */

export interface WhaleWord {
  /** 单词 */
  word: string
  /** 音标（ukphone 优先，已清理标签） */
  phonetic: string
  /** 中文释义 */
  meaning: string
  /** 词性（如 "n."、"n./v."；雅思王数据补充用） */
  pos?: string
  /** 单词原声 mp3 地址（可为空，播放时用 TTS 兜底） */
  audio: string
  /** 音节划分（如 ["in","ter","stel","lar"]），答对撒花后按音节着色用 */
  syllables?: string[]
}

export interface WhaleTest {
  /** 单元名，如 "Test 1" / "Section 1" */
  name: string
  /** URL slug，如 "test-1" */
  slug: string
  wordCount: number
  /** 难度 1~5 */
  difficulty: number
  words: WhaleWord[]
}

export interface WhaleChapter {
  /** Chapter 名，如 "Chapter 3" */
  name: string
  /** 主题 emoji */
  emoji: string
  /** URL slug，如 "chapter-3" */
  slug: string
  description: string
  tests: WhaleTest[]
}

/** 各章节数据（按 Chapter 拆分，便于维护与追加） */
import { WHALE_CHAPTER_3 } from './whale-chapter-3'
import { WHALE_CHAPTER_4 } from './whale-chapter-4'
import { WHALE_CHAPTER_5 } from './whale-chapter-5'
import { WHALE_CHAPTER_8 } from './whale-chapter-8'
import { WHALE_CHAPTER_11 } from './whale-chapter-11'

/** 雅思王听力课程：按 Chapter 数字顺序排列（3 → 4 → 5 → 8 → 11） */
export const WHALE_CHAPTERS: WhaleChapter[] = [
  WHALE_CHAPTER_3,
  WHALE_CHAPTER_4,
  WHALE_CHAPTER_5,
  WHALE_CHAPTER_8,
  WHALE_CHAPTER_11,
]

/** 按 chapter slug + test slug 查找单元 */
export function getWhaleTest(chapterSlug: string, testSlug: string): WhaleTest | undefined {
  const ch = WHALE_CHAPTERS.find((c) => c.slug === chapterSlug)
  return ch?.tests.find((t) => t.slug === testSlug)
}
