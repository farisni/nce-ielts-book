/**
 * 自然拼读规则表（Phonics Rules）数据
 * 参考「趣味自然拼读规则全解表」：
 * - 红（two vowels together）= 两元相遇：两个元音字母相遇时，通常发第一个元音字母的字母音
 * - 蓝（vowel team）= 组合发音：字母组合整体的固定发音
 */

export interface PhonicsRule {
  /** 字母组合，如 "ea"、"bl-"、"c+a/o/u" */
  pattern: string
  /** 音标，如 "/iː/"（可为空） */
  ipa?: string
  /** red = 两元相遇规则；blue = 组合发音 */
  tone: "red" | "blue"
  /** 示例单词（开头辅音群等用：左右布局右侧展示） */
  examples?: string[]
}

export interface PhonicsGroup {
  /** 组名，如 "元音 Aa" / "开头辅音群" */
  name: string
  rules: PhonicsRule[]
}

/** 表 1 · 字母发音（Aa-Zz，在单词中的常见发音） */
export const PHONICS_LETTERS: { letter: string; ipa: string }[] = [
  { letter: "Aa", ipa: "/æ/" },
  { letter: "Bb", ipa: "/b/" },
  { letter: "Cc", ipa: "/k/" },
  { letter: "Dd", ipa: "/d/" },
  { letter: "Ee", ipa: "/e/" },
  { letter: "Ff", ipa: "/f/" },
  { letter: "Gg", ipa: "/ɡ/" },
  { letter: "Hh", ipa: "/h/" },
  { letter: "Ii", ipa: "/ɪ/" },
  { letter: "Jj", ipa: "/dʒ/" },
  { letter: "Kk", ipa: "/k/" },
  { letter: "Ll", ipa: "/l/" },
  { letter: "Mm", ipa: "/m/" },
  { letter: "Nn", ipa: "/n/" },
  { letter: "Oo", ipa: "/ɒ/" },
  { letter: "Pp", ipa: "/p/" },
  { letter: "Qq", ipa: "/kw/" },
  { letter: "Rr", ipa: "/r/" },
  { letter: "Ss", ipa: "/s/" },
  { letter: "Tt", ipa: "/t/" },
  { letter: "Uu", ipa: "/ʌ/" },
  { letter: "Vv", ipa: "/v/" },
  { letter: "Ww", ipa: "/w/" },
  { letter: "Xx", ipa: "/ks/" },
  { letter: "Yy", ipa: "/j/" },
  { letter: "Zz", ipa: "/z/" },
]

/** 表 2 · 元音组合（44 个）按元音字母分组；红 = 两元相遇，蓝 = 含 r 等组合发音 */
export const VOWEL_GROUPS: PhonicsGroup[] = [
  {
    name: "元音 Aa",
    rules: [
      { pattern: "ai", ipa: "/eɪ/", tone: "red" },
      { pattern: "au", ipa: "/ɔː/", tone: "red" },
      { pattern: "aw", ipa: "/ɔː/", tone: "red" },
      { pattern: "ay", ipa: "/eɪ/", tone: "red" },
      { pattern: "al", ipa: "/ɔːl/", tone: "red" },
      { pattern: "ar", ipa: "/ɑː/", tone: "blue" },
      { pattern: "are", ipa: "/eə/", tone: "blue" },
      { pattern: "air", ipa: "/eə/", tone: "blue" },
    ],
  },
  {
    name: "元音 Ee",
    rules: [
      { pattern: "ea", ipa: "/iː/", tone: "red" },
      { pattern: "ee", ipa: "/iː/", tone: "red" },
      { pattern: "ei", ipa: "/eɪ/", tone: "red" },
      { pattern: "eo", ipa: "/iː/", tone: "red" },
      { pattern: "eu", ipa: "/juː/", tone: "red" },
      { pattern: "ew", ipa: "/juː/", tone: "red" },
      { pattern: "ey", ipa: "/eɪ/", tone: "red" },
      { pattern: "er", ipa: "/ɜː/", tone: "blue" },
      { pattern: "ear", ipa: "/ɪə/", tone: "blue" },
      { pattern: "eer", ipa: "/ɪə/", tone: "blue" },
      { pattern: "ere", ipa: "/ɪə/", tone: "blue" },
      { pattern: "eir", ipa: "/eə/", tone: "blue" },
    ],
  },
  {
    name: "元音 Ii",
    rules: [
      { pattern: "ia", ipa: "/aɪə/", tone: "red" },
      { pattern: "ie", ipa: "/aɪ/", tone: "red" },
      { pattern: "io", ipa: "/aɪə/", tone: "red" },
      { pattern: "iu", ipa: "/ɪə/", tone: "red" },
      { pattern: "ir", ipa: "/ɜː/", tone: "blue" },
      { pattern: "ire", ipa: "/aɪə/", tone: "blue" },
      { pattern: "ior", ipa: "/ɪə/", tone: "blue" },
    ],
  },
  {
    name: "元音 Oo",
    rules: [
      { pattern: "oa", ipa: "/əʊ/", tone: "red" },
      { pattern: "oe", ipa: "/əʊ/", tone: "red" },
      { pattern: "oi", ipa: "/ɔɪ/", tone: "red" },
      { pattern: "oo", ipa: "/uː/", tone: "red" },
      { pattern: "ou", ipa: "/aʊ/", tone: "red" },
      { pattern: "ow", ipa: "/aʊ/", tone: "red" },
      { pattern: "oy", ipa: "/ɔɪ/", tone: "red" },
      { pattern: "or", ipa: "/ɔː/", tone: "blue" },
      { pattern: "ore", ipa: "/ɔː/", tone: "blue" },
      { pattern: "oar", ipa: "/ɔː/", tone: "blue" },
      { pattern: "oor", ipa: "/ɔː/", tone: "blue" },
      { pattern: "our", ipa: "/ɔː/", tone: "blue" },
    ],
  },
  {
    name: "元音 Uu",
    rules: [
      { pattern: "ue", ipa: "/juː/", tone: "red" },
      { pattern: "ui", ipa: "/juː/", tone: "red" },
      { pattern: "uy", ipa: "/aɪ/", tone: "red" },
      { pattern: "ur", ipa: "/ɜː/", tone: "blue" },
      { pattern: "ure", ipa: "/jʊə/", tone: "blue" },
    ],
  },
]

/** 表 3 · 辅音组合（50 个）：辅音字母群的整体发音 */
export const CONSONANT_GROUPS: PhonicsGroup[] = [
  {
    name: "开头辅音群",
    rules: [
      { pattern: "bl-", ipa: "/bl/", tone: "blue", examples: ["blue", "black", "blow"] },
      { pattern: "br-", ipa: "/br/", tone: "blue", examples: ["bread", "brown", "bridge"] },
      { pattern: "cl-", ipa: "/kl/", tone: "blue", examples: ["clock", "class", "clean"] },
      { pattern: "cr-", ipa: "/kr/", tone: "blue", examples: ["cream", "cry", "cross"] },
      { pattern: "dr-", ipa: "/dr/", tone: "blue", examples: ["dream", "drink", "dress"] },
      { pattern: "fl-", ipa: "/fl/", tone: "blue", examples: ["flower", "fly", "floor"] },
      { pattern: "fr-", ipa: "/fr/", tone: "blue", examples: ["friend", "fruit", "frog"] },
      { pattern: "gl-", ipa: "/ɡl/", tone: "blue", examples: ["glass", "glad", "globe"] },
      { pattern: "gr-", ipa: "/ɡr/", tone: "blue", examples: ["green", "grass", "grow"] },
      { pattern: "pl-", ipa: "/pl/", tone: "blue", examples: ["play", "plane", "please"] },
      { pattern: "pr-", ipa: "/pr/", tone: "blue", examples: ["price", "present", "proud"] },
      { pattern: "tr-", ipa: "/tr/", tone: "blue", examples: ["tree", "train", "try"] },
      { pattern: "tw-", ipa: "/tw/", tone: "blue", examples: ["two", "twelve", "twin"] },
      { pattern: "sm-", ipa: "/sm/", tone: "blue", examples: ["smile", "small", "smell"] },
      { pattern: "sn-", ipa: "/sn/", tone: "blue", examples: ["snow", "snake", "snail"] },
      { pattern: "sp-", ipa: "/sp/", tone: "blue", examples: ["speak", "space", "sport"] },
      { pattern: "spr-", ipa: "/spr/", tone: "blue", examples: ["spring", "spray", "spread"] },
      { pattern: "sw-", ipa: "/sw/", tone: "blue", examples: ["swim", "sweet", "swing"] },
      { pattern: "sk-", ipa: "/sk/", tone: "blue", examples: ["sky", "skip", "skate"] },
      { pattern: "sc-", ipa: "/sk/ /s/", tone: "blue", examples: ["school", "scarf", "score"] },
      { pattern: "squ-", ipa: "/skw/", tone: "blue", examples: ["square", "squid", "squirrel"] },
      { pattern: "st-", ipa: "/st/", tone: "blue", examples: ["star", "stop", "stand"] },
      { pattern: "str-", ipa: "/str/", tone: "blue", examples: ["street", "strong", "string"] },
    ],
  },
  {
    name: "双字母组合",
    rules: [
      { pattern: "sh", ipa: "/ʃ/", tone: "blue", examples: ["ship", "fish", "shoe"] },
      { pattern: "ch", ipa: "/tʃ/ /k/ /ʃ/", tone: "blue", examples: ["chair", "school", "chef"] },
      { pattern: "th", ipa: "/θ/ /ð/", tone: "blue", examples: ["three", "this", "think"] },
      { pattern: "ph", ipa: "/f/", tone: "blue", examples: ["phone", "photo", "elephant"] },
      { pattern: "wh", ipa: "/w/ /h/", tone: "blue", examples: ["what", "when", "who"] },
      { pattern: "wr-", ipa: "/r/", tone: "blue", examples: ["write", "wrong", "wrist"] },
      { pattern: "kn-", ipa: "/n/", tone: "blue", examples: ["knife", "knee", "knock"] },
      { pattern: "-mb", ipa: "/m/", tone: "blue", examples: ["lamb", "comb", "climb"] },
      { pattern: "-bt", ipa: "/t/", tone: "blue", examples: ["doubt", "debt", "subtle"] },
      { pattern: "gh", ipa: "/f/ /ɡ/", tone: "blue", examples: ["laugh", "ghost", "enough"] },
      { pattern: "-dge", ipa: "/dʒ/", tone: "blue", examples: ["bridge", "edge", "badge"] },
      { pattern: "-tch", ipa: "/tʃ/", tone: "blue", examples: ["catch", "watch", "kitchen"] },
      { pattern: "-ck", ipa: "/k/", tone: "blue", examples: ["duck", "black", "clock"] },
      { pattern: "-ts", ipa: "/ts/", tone: "blue", examples: ["cats", "hats", "boats"] },
      { pattern: "-ds", ipa: "/dz/", tone: "blue", examples: ["birds", "hands", "words"] },
      { pattern: "-ng", ipa: "/ŋ/", tone: "blue", examples: ["sing", "long", "ring"] },
    ],
  },
  {
    name: "尾缀与双写",
    rules: [
      { pattern: "-ss", ipa: "/s/", tone: "blue", examples: ["glass", "class", "dress"] },
      { pattern: "-ll", ipa: "/l/", tone: "blue", examples: ["ball", "hill", "small"] },
      { pattern: "-ff", ipa: "/f/", tone: "blue", examples: ["off", "cliff", "stuff"] },
      { pattern: "-zz", ipa: "/z/", tone: "blue", examples: ["buzz", "fizz", "jazz"] },
      { pattern: "-nk", ipa: "/ŋk/", tone: "blue", examples: ["pink", "drink", "think"] },
      { pattern: "-mp", ipa: "/mp/", tone: "blue", examples: ["lamp", "jump", "camp"] },
      { pattern: "-nd", ipa: "/nd/", tone: "blue", examples: ["hand", "find", "wind"] },
      { pattern: "-nt", ipa: "/nt/", tone: "blue", examples: ["ant", "plant", "paint"] },
      { pattern: "-ld", ipa: "/ld/", tone: "blue", examples: ["cold", "old", "hold"] },
      { pattern: "-lf", ipa: "/lf/", tone: "blue", examples: ["shelf", "wolf", "half"] },
      { pattern: "-lk", ipa: "/lk/", tone: "blue", examples: ["milk", "walk", "talk"] },
    ],
  },
]

/** 表 4 · 元辅组合（52 个）：元音特殊词形 + c/g 变音 + 常见词尾组合 */
export const MIXED_GROUPS: PhonicsGroup[] = [
  {
    name: "a 特殊词形",
    rules: [
      { pattern: "-ass", ipa: "/ɑːs/", tone: "blue", examples: ["class", "glass", "pass"] },
      { pattern: "-ask", ipa: "/ɑːsk/", tone: "blue", examples: ["ask", "mask", "task"] },
      { pattern: "-ast", ipa: "/ɑːst/", tone: "blue", examples: ["fast", "last", "past"] },
      { pattern: "-ath", ipa: "/ɑːθ/", tone: "blue", examples: ["bath", "path"] },
      { pattern: "-asp", ipa: "/ɑːsp/", tone: "blue", examples: ["clasp", "gasp", "grasp"] },
      { pattern: "-aff", ipa: "/ɑːf/", tone: "blue", examples: ["staff", "chaff", "giraffe"] },
      { pattern: "-alf", ipa: "/ɑːf/", tone: "blue", examples: ["half", "calf", "behalf"] },
      { pattern: "-ant", ipa: "/ɑːnt/", tone: "blue", examples: ["plant", "can't", "grant"] },
      { pattern: "-ance", ipa: "/ɑːns/", tone: "blue", examples: ["dance", "chance", "France"] },
      { pattern: "-augh", ipa: "/ɑːf/", tone: "blue", examples: ["laugh"] },
      { pattern: "-aught", ipa: "/ɔːt/", tone: "blue", examples: ["caught", "taught", "naughty"] },
      { pattern: "-aunt", ipa: "/ɑːnt/ /ɔːnt/", tone: "blue", examples: ["aunt", "flaunt", "jaunt"] },
    ],
  },
  {
    name: "i 特殊词形",
    rules: [
      { pattern: "-ind", ipa: "/aɪnd/", tone: "blue", examples: ["find", "kind", "mind"] },
      { pattern: "-ild", ipa: "/aɪld/", tone: "blue", examples: ["child", "wild", "mild"] },
      { pattern: "-igh", ipa: "/aɪ/", tone: "blue", examples: ["light", "high", "night"] },
      { pattern: "-ign", ipa: "/aɪn/", tone: "blue", examples: ["sign", "design", "assign"] },
      { pattern: "-aign", ipa: "/eɪn/", tone: "blue", examples: ["campaign"] },
      { pattern: "-eigh", ipa: "/eɪ/", tone: "blue", examples: ["eight", "weigh", "neighbour"] },
      { pattern: "-eign", ipa: "/eɪn/ /ən/", tone: "blue", examples: ["reign", "foreign", "sovereign"] },
      { pattern: "-aigh", ipa: "/eɪ/", tone: "blue", examples: ["straight"] },
    ],
  },
  {
    name: "c · g 变音",
    rules: [
      { pattern: "c+a/o/u", ipa: "/k/", tone: "red", examples: ["cat", "cold", "cup"] },
      { pattern: "c+e/i/y", ipa: "/s/", tone: "red", examples: ["city", "cent", "cycle"] },
      { pattern: "ce", ipa: "/s/", tone: "red", examples: ["face", "rice", "place"] },
      { pattern: "g+a/o/u", ipa: "/ɡ/", tone: "red", examples: ["got", "garden", "gum"] },
      { pattern: "g+e/i/y", ipa: "/dʒ/", tone: "red", examples: ["giant", "gym", "giraffe"] },
      { pattern: "ge", ipa: "/dʒ/", tone: "red", examples: ["page", "large", "orange"] },
      { pattern: "qu", ipa: "/kw/", tone: "red", examples: ["queen", "quick", "quiet"] },
    ],
  },
  {
    name: "o 特殊词形",
    rules: [
      { pattern: "-ost", ipa: "/əʊst/", tone: "blue", examples: ["post", "most", "host"] },
      { pattern: "-old", ipa: "/əʊld/", tone: "blue", examples: ["old", "cold", "gold"] },
      { pattern: "-oll", ipa: "/əʊl/", tone: "blue", examples: ["roll", "toll", "stroll"] },
      { pattern: "-ough", ipa: "/ɒf/ /ʌf/ /əʊ/", tone: "blue", examples: ["cough", "tough", "though"] },
      { pattern: "-ought", ipa: "/ɔːt/", tone: "blue", examples: ["thought", "bought", "brought"] },
    ],
  },
  {
    name: "常见词尾组合",
    rules: [
      { pattern: "-ble", ipa: "/bl/", tone: "blue", examples: ["table", "able", "bubble"] },
      { pattern: "-dle", ipa: "/dl/", tone: "blue", examples: ["candle", "middle", "noodle"] },
      { pattern: "-cle", ipa: "/kl/", tone: "blue", examples: ["circle", "uncle", "bicycle"] },
      { pattern: "-kle", ipa: "/kl/", tone: "blue", examples: ["pickle", "sprinkle", "ankle"] },
      { pattern: "-gle", ipa: "/ɡl/", tone: "blue", examples: ["eagle", "angle", "single"] },
      { pattern: "-ple", ipa: "/pl/", tone: "blue", examples: ["apple", "people", "simple"] },
      { pattern: "-tle", ipa: "/tl/", tone: "blue", examples: ["little", "bottle", "battle"] },
      { pattern: "-zle", ipa: "/zl/", tone: "blue", examples: ["puzzle", "drizzle", "fizzle"] },
      { pattern: "-sure", ipa: "/ʒə/", tone: "blue", examples: ["measure", "pleasure", "treasure"] },
      { pattern: "-sion", ipa: "/ʃən/ /ʒən/", tone: "blue", examples: ["television", "decision", "vision"] },
      { pattern: "-tion", ipa: "/ʃən/", tone: "blue", examples: ["nation", "action", "station"] },
      { pattern: "-tian", ipa: "/ʃən/ /tʃən/", tone: "blue", examples: ["Christian", "Martian"] },
      { pattern: "-sial", ipa: "/ʃəl/", tone: "blue", examples: ["controversial", "racial"] },
      { pattern: "-tial", ipa: "/ʃəl/", tone: "blue", examples: ["essential", "initial", "partial"] },
      { pattern: "-tient", ipa: "/ʃənt/", tone: "blue", examples: ["patient", "quotient"] },
      { pattern: "-tience", ipa: "/ʃəns/", tone: "blue", examples: ["patience"] },
      { pattern: "-ture", ipa: "/tʃə/", tone: "blue", examples: ["picture", "nature", "future"] },
      { pattern: "-tual", ipa: "/tʃʊəl/", tone: "blue", examples: ["actual", "ritual", "habitual"] },
      { pattern: "-tue", ipa: "/tʃuː/", tone: "blue", examples: ["virtue", "statue", "fortune"] },
      { pattern: "-ous", ipa: "/əs/", tone: "blue", examples: ["famous", "dangerous", "serious"] },
    ],
  },
]
