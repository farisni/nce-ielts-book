/**
 * 西班牙语发音听读练习 · 元音 a
 * 复刻 studyspanish.com/pronunciation/listen-and-repeat/vowel_a
 * 完整 35 张卡片流程：引导卡 + 6 个核心单词（nada/cama/hasta/papa/mamá/papá）
 * 含西班牙/秘鲁不同说话人的跟读变体
 */

export interface ListenRepeatCard {
  /** 卡片大标题（单词或引导语） */
  word: string
  /** 释义 / 副标题 */
  meaning: string
  /** 中文释义 */
  zh?: string
  /** 是否单词卡（true 会朗读；false 为引导卡只显示文字） */
  isWord: boolean
}

/** 元音 a 的 6 个核心单词 */
const VOWEL_A_WORDS = [
  { word: "nada", meaning: "nothing", zh: "没什么" },
  { word: "cama", meaning: "bed", zh: "床" },
  { word: "hasta", meaning: "until", zh: "直到" },
  { word: "papa", meaning: "potato", zh: "土豆" },
  { word: "mamá", meaning: "mom", zh: "妈妈" },
  { word: "papá", meaning: "dad", zh: "爸爸" },
]

/** 完整 35 张卡片（忠实复刻原站顺序） */
export const VOWEL_A_CARDS: ListenRepeatCard[] = [
  // 第一轮：Listen（西班牙发音者）
  { word: "Listen.", meaning: "Listen.", isWord: false },
  ...VOWEL_A_WORDS.map((w) => ({ ...w, isWord: true })),
  // 第二轮：Listen and repeat（Spain）
  { word: "Listen and repeat.", meaning: "(Speaker is from Spain.)", isWord: false },
  ...VOWEL_A_WORDS.map((w) => ({ ...w, isWord: true })),
  // 第三轮：Listen and repeat（Peru）
  { word: "Listen and repeat.", meaning: "(Speaker is from Peru.)", isWord: false },
  ...VOWEL_A_WORDS.map((w) => ({ ...w, isWord: true })),
  // 第四轮：Listen（同第一轮）
  { word: "Listen.", meaning: "Listen.", isWord: false },
  ...VOWEL_A_WORDS.map((w) => ({ ...w, isWord: true })),
  // 第五轮：Listen and repeat（重复）
  { word: "Listen and repeat.", meaning: "Listen and repeat.", isWord: false },
  ...VOWEL_A_WORDS.map((w) => ({ ...w, isWord: true })),
]
