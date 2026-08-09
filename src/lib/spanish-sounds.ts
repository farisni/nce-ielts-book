/**
 * 西班牙语辅音发音对照表
 * 常见易混字母组的读音对照（b/v/w、d/t、h/j、g/gu、c/qu/k/ce）
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
      { letter: "b", name: "be", phoneme: "/b/", syllables: ["ba", "be", "bi", "bo", "bu"] },
      { letter: "p", name: "pe", phoneme: "/p/", syllables: ["pa", "pe", "pi", "po", "pu"] },
      { letter: "V", name: "uve", phoneme: "/b/", syllables: ["va", "ve", "vi", "vo", "vu"] },
      { letter: "W", name: "uve doble", phoneme: "/w/", syllables: ["wa", "we", "wi", "wo", "wu"] },
    ],
  },
  {
    title: "齿音 · d / t",
    desc: "d 为浊音，t 为清音；舌尖抵上齿发音",
    letters: [
      { letter: "d", name: "de", phoneme: "/d/", syllables: ["da", "de", "di", "do", "du"] },
      { letter: "t", name: "te", phoneme: "/t/", syllables: ["ta", "te", "ti", "to", "tu"] },
    ],
  },
  {
    title: "喉音 · h / j",
    desc: "h 本身不发音（静音）；j 发 /x/（类似英语 hot 的 h 音）",
    letters: [
      { letter: "h", name: "hache", phoneme: "不发音", syllables: ["ha", "he", "hi", "ho", "hu"], note: "h 不发音" },
      { letter: "j", name: "jota", phoneme: "/x/", syllables: ["ja", "je", "ji", "jo", "ju"] },
    ],
  },
  {
    title: "舌后音 · g / gu",
    desc: "g 在 a/o/u 前发 /g/；在 e/i 前写 gue/gui（u 不发音）",
    letters: [
      { letter: "g", name: "ge", phoneme: "/g/", syllables: ["ga", "gue", "gui", "go", "gu"], note: "gue/gui 中 u 不发音" },
      { letter: "gu", name: "ge + u", phoneme: "/g/", syllables: ["gua", "güe", "güi", "guo", "gu"], note: "güe/güi 中 ü 发音" },
    ],
  },
  {
    title: "舌前音 · c / qu / k / ce",
    desc: "c 在 a/o/u 前发 /k/（ca co cu）；e/i 前发 /θ/（ce ci），拉美多读 /s/",
    letters: [
      { letter: "ca", name: "ca", phoneme: "/k/", syllables: ["ca", "co", "cu"] },
      { letter: "qu", name: "cu", phoneme: "/k/", syllables: ["que", "qui"], note: "qu 只用于 e/i 前" },
      { letter: "k", name: "ka", phoneme: "/k/", syllables: ["ka", "ke", "ki", "ko", "ku"] },
      { letter: "ce", name: "ce", phoneme: "/θ/", syllables: ["ce", "ci"], note: "c 在 e/i 前发 /θ/" },
    ],
  },
]
