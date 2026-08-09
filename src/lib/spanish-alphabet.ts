/**
 * 西班牙语字母表（27 个字母）+ 2014 年移除的 ch/ll
 * 复刻 studyspanish.com/pronunciation/lessons/spanish-alphabet
 */

export interface SpanishLetter {
  /** 字母（小写） */
  letter: string
  /** 西班牙语名称 */
  name: string
  /** 中文名称注释（i latina / ye 等别名的说明） */
  nameNote?: string
  /** 例词 */
  example: string
  /** 例词中文意思 */
  meaning?: string
  /** 分类：元音 / 辅音（默认辅音） */
  type?: "vowel" | "consonant"
  /** 例词音节拆分（如 amigo → a-mi-go） */
  syllables?: string
}

/** 现行 27 个字母 */
export const SPANISH_ALPHABET: SpanishLetter[] = [
  { letter: "a", name: "a", example: "amigo", meaning: "朋友", type: "vowel", syllables: "a-mi-go" },
  { letter: "e", name: "e", example: "español", meaning: "西班牙语", type: "vowel", syllables: "es-pa-ñol" },
  { letter: "i", name: "i", nameNote: "i latina", example: "iglesia", meaning: "教堂", type: "vowel", syllables: "i-gle-sia" },
  { letter: "o", name: "o", example: "ojo", meaning: "眼睛", type: "vowel", syllables: "o-jo" },
  { letter: "u", name: "u", example: "uva", meaning: "葡萄", type: "vowel", syllables: "u-va" },
  { letter: "b", name: "be", example: "bonita", meaning: "美丽的", syllables: "bo-ni-ta" },
  { letter: "c", name: "ce", example: "cereal", meaning: "麦片", syllables: "ce-re-al" },
  { letter: "d", name: "de", example: "dedo", meaning: "手指", syllables: "de-do" },
  { letter: "f", name: "efe", example: "feo", meaning: "丑的", syllables: "fe-o" },
  { letter: "g", name: "ge", example: "gato", meaning: "猫", syllables: "ga-to" },
  { letter: "h", name: "hache", example: "hormiga", meaning: "蚂蚁", syllables: "hor-mi-ga" },
  { letter: "j", name: "jota", example: "José", meaning: "何塞（人名）", syllables: "Jo-sé" },
  { letter: "k", name: "ka", example: "kilo", meaning: "公斤", syllables: "ki-lo" },
  { letter: "l", name: "ele", example: "lobo", meaning: "狼", syllables: "lo-bo" },
  { letter: "m", name: "eme", example: "mamá", meaning: "妈妈", syllables: "ma-má" },
  { letter: "n", name: "ene", example: "no", meaning: "不", syllables: "no" },
  { letter: "ñ", name: "eñe", example: "ñoño", meaning: "乖的", syllables: "ño-ño" },
  { letter: "p", name: "pe", example: "pelo", meaning: "头发", syllables: "pe-lo" },
  { letter: "q", name: "cu", example: "quemar", meaning: "燃烧", syllables: "que-mar" },
  { letter: "r", name: "erre", example: "ratón", meaning: "老鼠", syllables: "ra-tón" },
  { letter: "s", name: "ese", example: "soso", meaning: "平淡的", syllables: "so-so" },
  { letter: "t", name: "te", example: "tocar", meaning: "触摸", syllables: "to-car" },
  { letter: "v", name: "uve", example: "vamos", meaning: "我们走", syllables: "va-mos" },
  { letter: "w", name: "uve doble", example: "whisky", meaning: "威士忌", syllables: "whis-ky" },
  { letter: "x", name: "equis", example: "xilófono", meaning: "木琴", syllables: "xi-ló-fo-no" },
  { letter: "y", name: "i griega", nameNote: "ye", example: "yate", meaning: "游艇", syllables: "ya-te" },
  { letter: "z", name: "zeta", example: "zorro", meaning: "狐狸", syllables: "zo-rro" },
]

/** 2014 年从字母表移除的字母组合（仍是常用拼写） */
export const SPANISH_OLD_LETTERS: SpanishLetter[] = [
  { letter: "ch", name: "ce hache", example: "chocolate", meaning: "巧克力", syllables: "cho-co-la-te" },
  { letter: "ll", name: "elle", example: "lluvia", meaning: "雨", syllables: "llu-via" },
]
