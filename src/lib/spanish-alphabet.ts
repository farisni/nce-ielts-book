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
}

/** 现行 27 个字母 */
export const SPANISH_ALPHABET: SpanishLetter[] = [
  { letter: "a", name: "a", example: "amigo", meaning: "朋友", type: "vowel" },
  { letter: "e", name: "e", example: "español", meaning: "西班牙语", type: "vowel" },
  { letter: "i", name: "i", nameNote: "i latina", example: "iglesia", meaning: "教堂", type: "vowel" },
  { letter: "o", name: "o", example: "ojo", meaning: "眼睛", type: "vowel" },
  { letter: "u", name: "u", example: "uva", meaning: "葡萄", type: "vowel" },
  { letter: "b", name: "be", example: "bonita", meaning: "美丽的" },
  { letter: "c", name: "ce", example: "cereal", meaning: "麦片" },
  { letter: "d", name: "de", example: "dedo", meaning: "手指" },
  { letter: "f", name: "efe", example: "feo", meaning: "丑的" },
  { letter: "g", name: "ge", example: "gato", meaning: "猫" },
  { letter: "h", name: "hache", example: "hormiga", meaning: "蚂蚁" },
  { letter: "j", name: "jota", example: "José", meaning: "何塞（人名）" },
  { letter: "k", name: "ka", example: "kilo", meaning: "公斤" },
  { letter: "l", name: "ele", example: "lobo", meaning: "狼" },
  { letter: "m", name: "eme", example: "mamá", meaning: "妈妈" },
  { letter: "n", name: "ene", example: "no", meaning: "不" },
  { letter: "ñ", name: "eñe", example: "ñoño", meaning: "乖的" },
  { letter: "p", name: "pe", example: "pelo", meaning: "头发" },
  { letter: "q", name: "cu", example: "quemar", meaning: "燃烧" },
  { letter: "r", name: "erre", example: "ratón", meaning: "老鼠" },
  { letter: "s", name: "ese", example: "soso", meaning: "平淡的" },
  { letter: "t", name: "te", example: "tocar", meaning: "触摸" },
  { letter: "v", name: "uve", example: "vamos", meaning: "我们走" },
  { letter: "w", name: "uve doble", example: "whisky", meaning: "威士忌" },
  { letter: "x", name: "equis", example: "xilófono", meaning: "木琴" },
  { letter: "y", name: "i griega", nameNote: "ye", example: "yate", meaning: "游艇" },
  { letter: "z", name: "zeta", example: "zorro", meaning: "狐狸" },
]

/** 2014 年从字母表移除的字母组合（仍是常用拼写） */
export const SPANISH_OLD_LETTERS: SpanishLetter[] = [
  { letter: "ch", name: "ce hache", example: "chocolate", meaning: "巧克力" },
  { letter: "ll", name: "elle", example: "lluvia", meaning: "雨" },
]
