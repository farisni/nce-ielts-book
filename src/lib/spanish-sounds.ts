/**
 * 西班牙语辅音发音对照表
 * 常见易混字母组的读音对照（b/v/w、d/t、h/j、g/gu、c/qu/k/ce）
 * 每个字母配一个原网站 studyspanish.com 的原版单词示例音频
 * （本地化到 public/audio/spanish-sounds/）
 */

export interface SpanishSoundLetter {
  /** 字母 / 字母组合 */
  letter: string
  /** 字母西语名称 */
  name: string
  /** 音标 */
  phoneme: string
  /** 音节例词（点击可发音） */
  syllables: string[]
  /** 备注 */
  note?: string
  /** 原版单词示例 */
  example?: string
  /** 示例中文意思 */
  exampleMeaning?: string
  /** 示例音节拆分（如 bueno → bue-no） */
  exampleSyllables?: string
  /** 原版单词音频文件名（public/audio/spanish-sounds/） */
  audio?: string
}

export interface SpanishSoundGroup {
  /** 组名 */
  title: string
  /** 组说明 */
  desc: string
  letters: SpanishSoundLetter[]
}

export const SPANISH_SOUND_GROUPS: SpanishSoundGroup[] = [
  {
    title: "唇音 · b / p / v / w",
    desc: "西语中 b 与 v 读音相同，均为 /b/；w 多用于外来词",
    letters: [
      { letter: "b", name: "be", phoneme: "/b/", syllables: ["ba", "be", "bi", "bo", "bu"], example: "bueno", exampleMeaning: "好的", exampleSyllables: "bue-no", audio: "b.mp3" },
      { letter: "p", name: "pe", phoneme: "/p/", syllables: ["pa", "pe", "pi", "po", "pu"], example: "papá", exampleMeaning: "爸爸", exampleSyllables: "pa-pá", audio: "p.mp3" },
      { letter: "V", name: "uve", phoneme: "/b/", syllables: ["va", "ve", "vi", "vo", "vu"], example: "vino", exampleMeaning: "酒", exampleSyllables: "vi-no", audio: "v.mp3" },
      { letter: "W", name: "uve doble", phoneme: "/w/", syllables: ["wa", "we", "wi", "wo", "wu"], example: "whisky", exampleMeaning: "威士忌", exampleSyllables: "whis-ky", audio: "w.mp3" },
    ],
  },
  {
    title: "齿音 · d / t",
    desc: "d 为浊音，t 为清音；舌尖抵上齿发音",
    letters: [
      { letter: "d", name: "de", phoneme: "/d/", syllables: ["da", "de", "di", "do", "du"], example: "dos", exampleMeaning: "二", exampleSyllables: "dos", audio: "d.mp3" },
      { letter: "t", name: "te", phoneme: "/t/", syllables: ["ta", "te", "ti", "to", "tu"], example: "total", exampleMeaning: "总共", exampleSyllables: "to-tal", audio: "t.mp3" },
    ],
  },
  {
    title: "喉音 · h / j",
    desc: "h 本身不发音（静音）；j 发 /x/（类似英语 hot 的 h 音）",
    letters: [
      { letter: "h", name: "hache", phoneme: "不发音", syllables: ["ha", "he", "hi", "ho", "hu"], note: "h 不发音", example: "hora", exampleMeaning: "小时", exampleSyllables: "ho-ra", audio: "h.mp3" },
      { letter: "j", name: "jota", phoneme: "/x/", syllables: ["ja", "je", "ji", "jo", "ju"], example: "jamás", exampleMeaning: "从不", exampleSyllables: "ja-más", audio: "j.mp3" },
    ],
  },
  {
    title: "舌后音 · g / gu",
    desc: "g 在 a/o/u 前发 /g/；在 e/i 前写 gue/gui（u 不发音）",
    letters: [
      { letter: "g", name: "ge", phoneme: "/g/", syllables: ["ga", "gue", "gui", "go", "gu"], note: "gue/gui 中 u 不发音", example: "gato", exampleMeaning: "猫", exampleSyllables: "ga-to", audio: "g.mp3" },
      { letter: "gu", name: "ge + u", phoneme: "/g/", syllables: ["gua", "güe", "güi", "guo", "gu"], note: "güe/güi 中 ü 发音", example: "guapo", exampleMeaning: "英俊的", exampleSyllables: "gua-po", audio: "gu.mp3" },
    ],
  },
  {
    title: "舌前音 · c / qu / k / ce",
    desc: "c 在 a/o/u 前发 /k/（ca co cu）；e/i 前发 /θ/（ce ci），拉美多读 /s/",
    letters: [
      { letter: "ca", name: "ca", phoneme: "/k/", syllables: ["ca", "", "", "co", "cu"], example: "casa", exampleMeaning: "房子", exampleSyllables: "ca-sa", audio: "ca.mp3" },
      { letter: "qu", name: "cu", phoneme: "/k/", syllables: ["", "que", "qui", "", ""], note: "qu 只用于 e/i 前", example: "que", exampleMeaning: "那个", exampleSyllables: "que", audio: "qu.mp3" },
      { letter: "k", name: "ka", phoneme: "/k/", syllables: ["ka", "ke", "ki", "ko", "ku"], example: "kiosko", exampleMeaning: "报刊亭", exampleSyllables: "kios-ko", audio: "k.mp3" },
      { letter: "ce", name: "ce", phoneme: "/θ/", syllables: ["", "ce", "ci", "", ""], note: "c 在 e/i 前发 /θ/", example: "cinco", exampleMeaning: "五", exampleSyllables: "cin-co", audio: "ce.mp3" },
    ],
  },
]
