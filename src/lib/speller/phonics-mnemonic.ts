/** 元音组合 · 二级巧记表数据（参照原版巧记表）：
 *  行 = 元音字母 a e i o u；列 = r y w l | a e i o u | 其他；
 *  e 列 magic-e（a_e/e_e/i_e/o_e/u_e）尾 e 不发音，下划线表示 */
export interface MnemonicEntry {
  pattern: string
  ipa: { ph: string; w: string }[]
  /** 位于元音列（a e i o u）：不区分颜色整体黑色；magic-e 结构用下划线 */
  plain?: boolean
}

export const MNEMONIC_COLS = ["r", "y", "w", "l", "a", "e", "i", "o", "u"] as const;

export const MNEMONIC_DATA: Record<string, { plain?: MnemonicEntry[]; cols: Partial<Record<(typeof MNEMONIC_COLS)[number], MnemonicEntry[]>>; other: MnemonicEntry[] }> = {
  a: {
    cols: {
      r: [{ pattern: "ar", ipa: [{ ph: "ɑː", w: "are" }, { ph: "ɔː", w: "warm" }, { ph: "ə", w: "dollar" }] }],
      y: [{ pattern: "ay", ipa: [{ ph: "eɪ", w: "day" }] }],
      w: [{ pattern: "aw", ipa: [{ ph: "ɔː", w: "saw" }] }],
      l: [{ pattern: "al", ipa: [{ ph: "ɔː", w: "ball" }, { ph: "ɑː", w: "half" }] }],
      e: [{ pattern: "a_e", ipa: [{ ph: "eɪ", w: "make" }], plain: true }],
      i: [{ pattern: "ai", ipa: [{ ph: "eɪ", w: "rain" }], plain: true }],
      u: [{ pattern: "au", ipa: [{ ph: "ɔː", w: "sauce" }, { ph: "ɑː", w: "laugh" }], plain: true }],
    },
    other: [
      { pattern: "air", ipa: [{ ph: "eə", w: "chair" }] },
      { pattern: "are", ipa: [{ ph: "eə", w: "care" }] },
      { pattern: "augh", ipa: [{ ph: "ɔː", w: "caught" }] },
      { pattern: "an", ipa: [{ ph: "æn", w: "man" }, { ph: "ən", w: "organ" }] },
    ],
  },
  e: {
    cols: {
      r: [{ pattern: "er", ipa: [{ ph: "ɜː", w: "her" }, { ph: "ə", w: "teacher" }] }],
      y: [{ pattern: "ey", ipa: [{ ph: "eɪ", w: "they" }, { ph: "iː", w: "key" }] }],
      w: [{ pattern: "ew", ipa: [{ ph: "juː", w: "new" }, { ph: "uː", w: "blew" }] }],
      a: [{ pattern: "ea", ipa: [{ ph: "iː", w: "tea" }, { ph: "e", w: "bread" }, { ph: "eɪ", w: "break" }, { ph: "ɪə", w: "theatre" }], plain: true }],
      e: [
        { pattern: "e_e", ipa: [{ ph: "iː", w: "these" }], plain: true },
        { pattern: "ee", ipa: [{ ph: "iː", w: "see" }], plain: true },
      ],
      i: [{ pattern: "ei", ipa: [{ ph: "iː", w: "receive" }, { ph: "eɪ", w: "vein" }], plain: true }],
    },
    other: [
      { pattern: "ear", ipa: [{ ph: "ɪə", w: "hear" }, { ph: "eə", w: "bear" }, { ph: "ɜː", w: "earth" }, { ph: "ɑː", w: "heart" }] },
      { pattern: "eer", ipa: [{ ph: "ɪə", w: "deer" }] },
      { pattern: "ere", ipa: [{ ph: "ɪə", w: "here" }, { ph: "eə", w: "there" }] },
      { pattern: "eigh", ipa: [{ ph: "eɪ", w: "eight" }] },
      { pattern: "en", ipa: [{ ph: "ən", w: "open" }, { ph: "en", w: "hen" }] },
    ],
  },
  i: {
    cols: {
      r: [{ pattern: "ir", ipa: [{ ph: "ɜː", w: "bird" }] }],
      a: [{ pattern: "ia", ipa: [{ ph: "aɪə", w: "diamond" }], plain: true }],
      e: [{ pattern: "i_e", ipa: [{ ph: "aɪ", w: "like" }], plain: true }],
    },
    other: [
      { pattern: "ie", ipa: [{ ph: "aɪ", w: "pie" }, { ph: "iː", w: "field" }] },
      { pattern: "igh", ipa: [{ ph: "aɪ", w: "light" }] },
      { pattern: "ire", ipa: [{ ph: "aɪə", w: "fire" }] },
      { pattern: "ign", ipa: [{ ph: "aɪn", w: "sign" }] },
      { pattern: "in", ipa: [{ ph: "ɪn", w: "pin" }] },
    ],
  },
  o: {
    cols: {
      r: [{ pattern: "or", ipa: [{ ph: "ɔː", w: "for" }, { ph: "ɜː", w: "work" }, { ph: "ə", w: "doctor" }] }],
      y: [{ pattern: "oy", ipa: [{ ph: "ɔɪ", w: "boy" }] }],
      w: [{ pattern: "ow", ipa: [{ ph: "aʊ", w: "cow" }, { ph: "əʊ", w: "snow" }] }],
      a: [{ pattern: "oa", ipa: [{ ph: "əʊ", w: "boat" }], plain: true }],
      e: [{ pattern: "o_e", ipa: [{ ph: "əʊ", w: "home" }], plain: true }],
      i: [{ pattern: "oi", ipa: [{ ph: "ɔɪ", w: "coin" }], plain: true }],
      o: [{ pattern: "oo", ipa: [{ ph: "uː", w: "moon" }, { ph: "ʊ", w: "book" }, { ph: "ʌ", w: "blood" }], plain: true }],
      u: [{ pattern: "ou", ipa: [{ ph: "aʊ", w: "house" }, { ph: "uː", w: "you" }, { ph: "əʊ", w: "though" }], plain: true }],
    },
    other: [
      { pattern: "oor", ipa: [{ ph: "ɔː", w: "door" }] },
      { pattern: "oar", ipa: [{ ph: "ɔː", w: "board" }] },
      { pattern: "oul", ipa: [{ ph: "ʊ", w: "could" }, { ph: "ʊ", w: "should" }] },
      { pattern: "our", ipa: [{ ph: "aʊə", w: "hour" }, { ph: "ɔː", w: "four" }, { ph: "ɜː", w: "journey" }] },
      { pattern: "ure", ipa: [{ ph: "jʊə", w: "cure" }] },
    ],
  },
  u: {
    cols: {
      r: [{ pattern: "ur", ipa: [{ ph: "ɜː", w: "fur" }, { ph: "ə", w: "surprise" }] }],
      y: [{ pattern: "uy", ipa: [{ ph: "aɪ", w: "buy" }] }],
      e: [
        { pattern: "u_e", ipa: [{ ph: "juː", w: "use" }, { ph: "uː", w: "rule" }], plain: true },
        { pattern: "ue", ipa: [{ ph: "juː", w: "cue" }, { ph: "uː", w: "blue" }], plain: true },
      ],
      i: [{ pattern: "ui", ipa: [{ ph: "ɪ", w: "build" }, { ph: "uː", w: "fruit" }], plain: true }],
    },
    other: [
      { pattern: "ure", ipa: [{ ph: "jʊə", w: "sure" }] },
    ],
  },
};

/** 底部：元音字母开音节/闭音节发音规则 */
export const SYLLABLE_RULES: { vowel: string; open: string; closed: string }[] = [
  { vowel: "a", open: "eɪ", closed: "æ" },
  { vowel: "e", open: "iː", closed: "e" },
  { vowel: "i", open: "aɪ", closed: "ɪ" },
  { vowel: "o", open: "əʊ", closed: "ɒ" },
  { vowel: "u", open: "juː", closed: "ʌ" },
];

