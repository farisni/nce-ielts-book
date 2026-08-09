/**
 * 西班牙语 IPA 音标表
 * 复刻 speechgen.io/en/node/spanish-ipa/
 * - 5 个元音 + 19 个辅音音素，每个带例词与音标
 * - 音素总表、转录示例、西班牙/拉美方言对比
 */

export interface IpaRow {
  /** IPA 符号 */
  ipa: string
  /** 对应字母/拼写 */
  spelling: string
  /** 例词（Listen 按钮朗读） */
  example: string
  /** 音标转录 */
  transcription: string
  /** 例词中文 */
  zh?: string
  /** 备注 */
  note?: string
  /** 原版音频文件名（public/audio/spanish-ipa/） */
  audio?: string
}

export const SPANISH_VOWELS: IpaRow[] = [
  { ipa: "a", spelling: "a", example: "pata", transcription: "[ˈpa.ta]", zh: "爪", audio: "vow-pata.mp3" },
  { ipa: "e", spelling: "e", example: "mesa", transcription: "[ˈme.sa]", zh: "桌子", audio: "vow-mesa.mp3" },
  { ipa: "i", spelling: "i", example: "vino", transcription: "[ˈbi.no]", zh: "酒", audio: "vow-vino.mp3" },
  { ipa: "o", spelling: "o", example: "oso", transcription: "[ˈo.so]", zh: "熊", audio: "vow-oso.mp3" },
  { ipa: "u", spelling: "u", example: "luna", transcription: "[ˈlu.na]", zh: "月亮", audio: "vow-luna.mp3" },
]

export const SPANISH_CONSONANTS: IpaRow[] = [
  { ipa: "b", spelling: "b, v", example: "bobo", transcription: "[ˈbo.βo]", zh: "傻的", note: "两元音间弱化为 [β]", audio: "cons-bobo.mp3" },
  { ipa: "d", spelling: "d", example: "dedo", transcription: "[ˈde.ðo]", zh: "手指", note: "两元音间弱化为 [ð]", audio: "cons-dedo.mp3" },
  { ipa: "f", spelling: "f", example: "foca", transcription: "[ˈfo.ka]", zh: "海豹", audio: "cons-foca.mp3" },
  { ipa: "ɡ", spelling: "g, gu", example: "gato", transcription: "[ˈɡa.to]", zh: "猫", note: "两元音间弱化为 [ɣ]", audio: "cons-gato.mp3" },
  { ipa: "x", spelling: "j, g(e/i)", example: "jota", transcription: "[ˈxo.ta]", zh: "字母 j 名", audio: "cons-jota.mp3" },
  { ipa: "k", spelling: "c, qu, k", example: "casa", transcription: "[ˈka.sa]", zh: "房子", audio: "cons-casa.mp3" },
  { ipa: "l", spelling: "l", example: "lento", transcription: "[ˈlen.to]", zh: "慢的", audio: "cons-lento.mp3" },
  { ipa: "ʎ", spelling: "ll", example: "lluvia", transcription: "[ˈʎu.βja]", zh: "雨", note: "西班牙标准读音；拉美多并入 [ʝ]", audio: "cons-lluvia.mp3" },
  { ipa: "m", spelling: "m", example: "mano", transcription: "[ˈma.no]", zh: "手", audio: "cons-mano.mp3" },
  { ipa: "n", spelling: "n", example: "nido", transcription: "[ˈni.ðo]", zh: "巢", audio: "cons-nido.mp3" },
  { ipa: "ɲ", spelling: "ñ", example: "ñoño", transcription: "[ˈɲo.ɲo]", zh: "乖的", audio: "cons-nono.mp3" },
  { ipa: "p", spelling: "p", example: "pelo", transcription: "[ˈpe.lo]", zh: "头发", audio: "cons-pelo.mp3" },
  { ipa: "ɾ", spelling: "r (soft)", example: "pero", transcription: "[ˈpe.ɾo]", zh: "但是", note: "单颤音，如美式 butter 的 t", audio: "cons-pero.mp3" },
  { ipa: "r", spelling: "rr, r-", example: "perro", transcription: "[ˈpe.ro]", zh: "狗", note: "多击颤音，词首也发此音", audio: "cons-perro.mp3" },
  { ipa: "s", spelling: "s, c/z (LatAm)", example: "soso", transcription: "[ˈso.so]", zh: "平淡的", audio: "cons-soso.mp3" },
  { ipa: "t", spelling: "t", example: "tela", transcription: "[ˈte.la]", zh: "布", audio: "cons-tela.mp3" },
  { ipa: "θ", spelling: "c/z (Spain)", example: "cielo", transcription: "[ˈθje.lo]", zh: "天空", note: "卡斯蒂利亚标准读音", audio: "cons-cielo.mp3" },
  { ipa: "ʝ", spelling: "y, ll (LatAm)", example: "yo", transcription: "[ʝo]", zh: "我", note: "拉美 ll/y 合流", audio: "cons-yo.mp3" },
  { ipa: "tʃ", spelling: "ch", example: "churro", transcription: "[ˈtʃu.ro]", zh: "油条", audio: "aff-churro.mp3" },
]

/** 音素总表：24 个音素（5 元音 + 19 辅音） */
export const SPANISH_PHONEME_GROUPS = [
  { group: "Vowels", phonemes: "a · e · i · o · u", count: 5, zh: "元音" },
  { group: "Stops", phonemes: "p · b · t · d · k · ɡ", count: 6, zh: "塞音" },
  { group: "Fricatives", phonemes: "f · θ · s · x · ʝ", count: 5, zh: "擦音" },
  { group: "Affricate", phonemes: "tʃ", count: 1, zh: "塞擦音" },
  { group: "Nasals", phonemes: "m · n · ɲ", count: 3, zh: "鼻音" },
  { group: "Liquids", phonemes: "l · ʎ · ɾ · r", count: 4, zh: "流音" },
]

/** 转录示例 */
export const SPANISH_TRANSCRIPTIONS = [
  { spelling: "hola", transcription: "/ˈo.la/", note: "h 不发音" },
  { spelling: "queso", transcription: "/ˈke.so/", note: "qu = [k]" },
  { spelling: "gente", transcription: "/ˈxen.te/", note: "g 在 e 前 = [x]" },
  { spelling: "cielo", transcription: "/ˈθje.lo/ (西班牙) · /ˈsje.lo/ (拉美)", note: "c 在 e/i 前" },
]

/** 方言对比 */
export const SPANISH_DIALECTS = [
  {
    spain: { label: "distinción", example: "caza", transcription: "[ˈka.θa]", audio: "dia-caza-es.mp3" },
    latam: { label: "seseo", example: "caza", transcription: "[ˈka.sa]", audio: "dia-caza-la.mp3" },
    note: "西班牙 c/z 读 [θ]，拉美读 [s]，casa 与 caza 同音",
  },
  {
    spain: { label: "ll 读 [ʎ]", example: "llave", transcription: "[ˈʎa.βe]", audio: "dia-llave-es.mp3" },
    latam: { label: "yeísmo", example: "llave", transcription: "[ˈʝa.βe]", audio: "dia-llave-la.mp3" },
    note: "多数拉美把 ll[ʎ] 并入 y[ʝ]；阿根廷/乌拉圭更发 [ʒ]/[ʃ]",
  },
]
