/**
 * 西班牙语发音听读练习 · 元音 a
 * 复刻 studyspanish.com/pronunciation/listen-and-repeat/vowel_a
 * 完整 35 张卡片流程：引导卡 + 6 个核心单词（nada/cama/hasta/papa/mamá/papá）
 * 含西班牙/秘鲁不同说话人的跟读变体
 * 音频为原网站 studyspanish.com 的原版 mp3（已本地化到 public/audio/spanish-listen-repeat/）
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
  /** 原版音频文件名 */
  audio?: string
}

/** 完整 35 张卡片（忠实复刻原站顺序与音频） */
export const VOWEL_A_CARDS: ListenRepeatCard[] = [
  // 第一轮：Listen（西班牙发音者）
  { word: "Listen.", meaning: "Listen.", isWord: false, audio: "01.mp3" },
  { word: "nada", meaning: "nothing", zh: "没什么", isWord: true, audio: "02.mp3" },
  { word: "cama", meaning: "bed", zh: "床", isWord: true, audio: "03.mp3" },
  { word: "hasta", meaning: "until", zh: "直到", isWord: true, audio: "04.mp3" },
  { word: "papa", meaning: "potato", zh: "土豆", isWord: true, audio: "05.mp3" },
  { word: "mamá", meaning: "mom", zh: "妈妈", isWord: true, audio: "06.mp3" },
  { word: "papá", meaning: "dad", zh: "爸爸", isWord: true, audio: "07.mp3" },
  // 第二轮：Listen and repeat（Spain）
  { word: "Listen and repeat.", meaning: "(Speaker is from Spain.)", isWord: false, audio: "08.mp3" },
  { word: "nada", meaning: "nothing", zh: "没什么", isWord: true, audio: "02.mp3" },
  { word: "cama", meaning: "bed", zh: "床", isWord: true, audio: "03.mp3" },
  { word: "hasta", meaning: "until", zh: "直到", isWord: true, audio: "04.mp3" },
  { word: "papa", meaning: "potato", zh: "土豆", isWord: true, audio: "09.mp3" },
  { word: "mamá", meaning: "mom", zh: "妈妈", isWord: true, audio: "10.mp3" },
  { word: "papá", meaning: "dad", zh: "爸爸", isWord: true, audio: "11.mp3" },
  // 第三轮：Listen and repeat（Peru）
  { word: "Listen and repeat.", meaning: "(Speaker is from Peru.)", isWord: false, audio: "12.mp3" },
  { word: "nada", meaning: "nothing", zh: "没什么", isWord: true, audio: "13.mp3" },
  { word: "cama", meaning: "bed", zh: "床", isWord: true, audio: "14.mp3" },
  { word: "hasta", meaning: "until", zh: "直到", isWord: true, audio: "15.mp3" },
  { word: "papa", meaning: "potato", zh: "土豆", isWord: true, audio: "05.mp3" },
  { word: "mamá", meaning: "mom", zh: "妈妈", isWord: true, audio: "06.mp3" },
  { word: "papá", meaning: "dad", zh: "爸爸", isWord: true, audio: "07.mp3" },
  // 第四轮：Listen（同第一轮）
  { word: "Listen.", meaning: "Listen.", isWord: false, audio: "16.mp3" },
  { word: "nada", meaning: "nothing", zh: "没什么", isWord: true, audio: "17.mp3" },
  { word: "cama", meaning: "bed", zh: "床", isWord: true, audio: "18.mp3" },
  { word: "hasta", meaning: "until", zh: "直到", isWord: true, audio: "19.mp3" },
  { word: "papa", meaning: "potato", zh: "土豆", isWord: true, audio: "20.mp3" },
  { word: "mamá", meaning: "mom", zh: "妈妈", isWord: true, audio: "21.mp3" },
  { word: "papá", meaning: "dad", zh: "爸爸", isWord: true, audio: "22.mp3" },
  // 第五轮：Listen and repeat（重复）
  { word: "Listen and repeat.", meaning: "Listen and repeat.", isWord: false, audio: "23.mp3" },
  { word: "nada", meaning: "nothing", zh: "没什么", isWord: true, audio: "02.mp3" },
  { word: "cama", meaning: "bed", zh: "床", isWord: true, audio: "03.mp3" },
  { word: "hasta", meaning: "until", zh: "直到", isWord: true, audio: "04.mp3" },
  { word: "papa", meaning: "potato", zh: "土豆", isWord: true, audio: "05.mp3" },
  { word: "mamá", meaning: "mom", zh: "妈妈", isWord: true, audio: "06.mp3" },
  { word: "papá", meaning: "dad", zh: "爸爸", isWord: true, audio: "07.mp3" },
]
