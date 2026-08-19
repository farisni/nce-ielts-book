// 自然拼读 · 元辅组合听写课程数据（MIXED_GROUPS 示例单词生成）
// 5 个分组各为一个 Chapter（a 特殊词形 / i 特殊词形 / c·g 变音 / o 特殊词形 / 常见词尾），
// 每规则（-ass / c+a/o/u / -tion…）为 Test；phonemeMap 使答对后组合字母标红
import type { WhaleChapter, WhaleTest, WhaleWord } from "./whale-king"

const T: WhaleChapter[] = [
  {
    name: "a \u7279\u6b8a\u8bcd\u5f62",
    emoji: "🔠",
    slug: "mixed-a",
    description: "a \u7279\u6b8a\u8bcd\u5f62 · 33 规则 33 词",
    tests: [
      {
        name: "-ass /\u0251\u02d0s/",
        slug: "-ass",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "class", phonetic: "kl\u0251\u02d0s", meaning: "n. 班级", audio: "/audio/mixed/mixed-a/class.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0s/", spelling: "ass" }] },
        ],
      },
      {
        name: "-ass /\u0251\u02d0s/",
        slug: "-ass",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "glass", phonetic: "\u0261l\u0251\u02d0s", meaning: "n. 玻璃", audio: "/audio/mixed/mixed-a/glass.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0s/", spelling: "ass" }] },
        ],
      },
      {
        name: "-ass /\u0251\u02d0s/",
        slug: "-ass",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "pass", phonetic: "p\u0251\u02d0s", meaning: "v. 通过", audio: "/audio/mixed/mixed-a/pass.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0s/", spelling: "ass" }] },
        ],
      },
      {
        name: "-ask /\u0251\u02d0sk/",
        slug: "-ask",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "ask", phonetic: "\u0251\u02d0sk", meaning: "v. 询问", audio: "/audio/mixed/mixed-a/ask.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0sk/", spelling: "ask" }] },
        ],
      },
      {
        name: "-ask /\u0251\u02d0sk/",
        slug: "-ask",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "mask", phonetic: "m\u0251\u02d0sk", meaning: "n. 口罩", audio: "/audio/mixed/mixed-a/mask.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0sk/", spelling: "ask" }] },
        ],
      },
      {
        name: "-ask /\u0251\u02d0sk/",
        slug: "-ask",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "task", phonetic: "t\u0251\u02d0sk", meaning: "n. 任务", audio: "/audio/mixed/mixed-a/task.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0sk/", spelling: "ask" }] },
        ],
      },
      {
        name: "-ast /\u0251\u02d0st/",
        slug: "-ast",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "fast", phonetic: "f\u0251\u02d0st", meaning: "adj. 快的", audio: "/audio/mixed/mixed-a/fast.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0st/", spelling: "ast" }] },
        ],
      },
      {
        name: "-ast /\u0251\u02d0st/",
        slug: "-ast",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "last", phonetic: "l\u0251\u02d0st", meaning: "adj. 最后的", audio: "/audio/mixed/mixed-a/last.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0st/", spelling: "ast" }] },
        ],
      },
      {
        name: "-ast /\u0251\u02d0st/",
        slug: "-ast",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "past", phonetic: "p\u0251\u02d0st", meaning: "adj. 过去的", audio: "/audio/mixed/mixed-a/past.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0st/", spelling: "ast" }] },
        ],
      },
      {
        name: "-ath /\u0251\u02d0\u03b8/",
        slug: "-ath",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bath", phonetic: "b\u0251\u02d0\u03b8", meaning: "n. 洗澡", audio: "/audio/mixed/mixed-a/bath.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0\u03b8/", spelling: "ath" }] },
        ],
      },
      {
        name: "-ath /\u0251\u02d0\u03b8/",
        slug: "-ath",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "path", phonetic: "p\u0251\u02d0\u03b8", meaning: "n. 小路", audio: "/audio/mixed/mixed-a/path.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0\u03b8/", spelling: "ath" }] },
        ],
      },
      {
        name: "-asp /\u0251\u02d0sp/",
        slug: "-asp",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "clasp", phonetic: "kl\u0251\u02d0sp", meaning: "v. 扣住", audio: "/audio/mixed/mixed-a/clasp.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0sp/", spelling: "asp" }] },
        ],
      },
      {
        name: "-asp /\u0251\u02d0sp/",
        slug: "-asp",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "gasp", phonetic: "\u0261\u0251\u02d0sp", meaning: "v. 喘气", audio: "/audio/mixed/mixed-a/gasp.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0sp/", spelling: "asp" }] },
        ],
      },
      {
        name: "-asp /\u0251\u02d0sp/",
        slug: "-asp",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "grasp", phonetic: "\u0261r\u0251\u02d0sp", meaning: "v. 抓住", audio: "/audio/mixed/mixed-a/grasp.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0sp/", spelling: "asp" }] },
        ],
      },
      {
        name: "-aff /\u0251\u02d0f/",
        slug: "-aff",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "staff", phonetic: "st\u0251\u02d0f", meaning: "n. 职员", audio: "/audio/mixed/mixed-a/staff.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "aff" }] },
        ],
      },
      {
        name: "-aff /\u0251\u02d0f/",
        slug: "-aff",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "chaff", phonetic: "t\u0283\u00e6f; t\u0283\u0251\u02d0f", meaning: "n. 谷壳", audio: "/audio/mixed/mixed-a/chaff.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "aff" }] },
        ],
      },
      {
        name: "-aff /\u0251\u02d0f/",
        slug: "-aff",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "giraffe", phonetic: "d\u0292\u0259\u02c8r\u0251\u02d0f", meaning: "n. 长颈鹿", audio: "/audio/mixed/mixed-a/giraffe.mp3", syllables: ["gi", "raffe"], phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "aff" }] },
        ],
      },
      {
        name: "-alf /\u0251\u02d0f/",
        slug: "-alf",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "half", phonetic: "h\u0251\u02d0f", meaning: "n. 一半", audio: "/audio/mixed/mixed-a/half.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "alf" }] },
        ],
      },
      {
        name: "-alf /\u0251\u02d0f/",
        slug: "-alf",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "calf", phonetic: "k\u0251\u02d0f", meaning: "n. 小牛", audio: "/audio/mixed/mixed-a/calf.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "alf" }] },
        ],
      },
      {
        name: "-alf /\u0251\u02d0f/",
        slug: "-alf",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "behalf", phonetic: "b\u026a\u02c8h\u0251\u02d0f", meaning: "n. 代表", audio: "/audio/mixed/mixed-a/behalf.mp3", syllables: ["be", "half"], phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "alf" }] },
        ],
      },
      {
        name: "-ant /\u0251\u02d0nt/",
        slug: "-ant",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "plant", phonetic: "pl\u0251\u02d0nt", meaning: "n. 植物", audio: "/audio/mixed/mixed-a/plant.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0nt/", spelling: "ant" }] },
        ],
      },
      {
        name: "-ant /\u0251\u02d0nt/",
        slug: "-ant",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "can't", phonetic: "k\u0251\u02d0nt", meaning: "不能", audio: "/audio/mixed/mixed-a/can't.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0nt/", spelling: "ant" }] },
        ],
      },
      {
        name: "-ant /\u0251\u02d0nt/",
        slug: "-ant",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "grant", phonetic: "\u0261r\u0251\u02d0nt", meaning: "v. 授予", audio: "/audio/mixed/mixed-a/grant.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0nt/", spelling: "ant" }] },
        ],
      },
      {
        name: "-ance /\u0251\u02d0ns/",
        slug: "-ance",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "dance", phonetic: "d\u02c8\u00e6ns", meaning: "n. 舞蹈", audio: "/audio/mixed/mixed-a/dance.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0ns/", spelling: "ance" }] },
        ],
      },
      {
        name: "-ance /\u0251\u02d0ns/",
        slug: "-ance",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "chance", phonetic: "t\u0283\u0251\u02d0ns", meaning: "n. 机会", audio: "/audio/mixed/mixed-a/chance.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0ns/", spelling: "ance" }] },
        ],
      },
      {
        name: "-ance /\u0251\u02d0ns/",
        slug: "-ance",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "France", phonetic: "fr\u0251\u02d0ns", meaning: "n. 法国", audio: "/audio/mixed/mixed-a/France.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0ns/", spelling: "ance" }] },
        ],
      },
      {
        name: "-augh /\u0251\u02d0f/",
        slug: "-augh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "laugh", phonetic: "l\u0251\u02d0f", meaning: "v. 笑", audio: "/audio/mixed/mixed-a/laugh.mp3", syllables: ["la", "ugh"], phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "augh" }] },
        ],
      },
      {
        name: "-aught /\u0254\u02d0t/",
        slug: "-aught",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "caught", phonetic: "k\u0254\u02d0t", meaning: "v. 抓住", audio: "/audio/mixed/mixed-a/caught.mp3", syllables: ["ca", "ught"], phonemeMap: [{ ipa: "/\u0254\u02d0t/", spelling: "aught" }] },
        ],
      },
      {
        name: "-aught /\u0254\u02d0t/",
        slug: "-aught",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "taught", phonetic: "t\u0254\u02d0t", meaning: "v. 教", audio: "/audio/mixed/mixed-a/taught.mp3", syllables: ["ta", "ught"], phonemeMap: [{ ipa: "/\u0254\u02d0t/", spelling: "aught" }] },
        ],
      },
      {
        name: "-aught /\u0254\u02d0t/",
        slug: "-aught",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "naughty", phonetic: "\u02c8n\u0254\u02d0ti", meaning: "adj. 顽皮的", audio: "/audio/mixed/mixed-a/naughty.mp3", syllables: ["naugh", "ty"], phonemeMap: [{ ipa: "/\u0254\u02d0t/", spelling: "aught" }] },
        ],
      },
      {
        name: "-aunt /\u0251\u02d0nt/",
        slug: "-aunt",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "aunt", phonetic: "\u0251\u02d0nt", meaning: "n. 姑妈", audio: "/audio/mixed/mixed-a/aunt.mp3", syllables: ["a", "unt"], phonemeMap: [{ ipa: "/\u0251\u02d0nt/", spelling: "aunt" }] },
        ],
      },
      {
        name: "-aunt /\u0251\u02d0nt/",
        slug: "-aunt",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "flaunt", phonetic: "fl\u0254\u02d0nt", meaning: "v. 炫耀", audio: "/audio/mixed/mixed-a/flaunt.mp3", syllables: ["fla", "unt"], phonemeMap: [{ ipa: "/\u0251\u02d0nt/", spelling: "aunt" }] },
        ],
      },
      {
        name: "-aunt /\u0251\u02d0nt/",
        slug: "-aunt",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "jaunt", phonetic: "d\u0292\u0254\u02d0nt", meaning: "n. 短途旅行", audio: "/audio/mixed/mixed-a/jaunt.mp3", syllables: ["ja", "unt"], phonemeMap: [{ ipa: "/\u0251\u02d0nt/", spelling: "aunt" }] },
        ],
      },
    ],
  },
  {
    name: "i \u7279\u6b8a\u8bcd\u5f62",
    emoji: "🔠",
    slug: "mixed-i",
    description: "i \u7279\u6b8a\u8bcd\u5f62 · 20 规则 20 词",
    tests: [
      {
        name: "-ind /a\u026and/",
        slug: "-ind",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "find", phonetic: "fa\u026and", meaning: "v. 找到", audio: "/audio/mixed/mixed-i/find.mp3", phonemeMap: [{ ipa: "/a\u026and/", spelling: "ind" }] },
        ],
      },
      {
        name: "-ind /a\u026and/",
        slug: "-ind",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "kind", phonetic: "ka\u026and", meaning: "adj. 友善的", audio: "/audio/mixed/mixed-i/kind.mp3", phonemeMap: [{ ipa: "/a\u026and/", spelling: "ind" }] },
        ],
      },
      {
        name: "-ind /a\u026and/",
        slug: "-ind",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "mind", phonetic: "ma\u026and", meaning: "n. 头脑", audio: "/audio/mixed/mixed-i/mind.mp3", phonemeMap: [{ ipa: "/a\u026and/", spelling: "ind" }] },
        ],
      },
      {
        name: "-ild /a\u026ald/",
        slug: "-ild",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "child", phonetic: "t\u0283a\u026ald", meaning: "n. 孩子", audio: "/audio/mixed/mixed-i/child.mp3", phonemeMap: [{ ipa: "/a\u026ald/", spelling: "ild" }] },
        ],
      },
      {
        name: "-ild /a\u026ald/",
        slug: "-ild",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "wild", phonetic: "w\u02c8a\u026ald", meaning: "adj. 野生的", audio: "/audio/mixed/mixed-i/wild.mp3", phonemeMap: [{ ipa: "/a\u026ald/", spelling: "ild" }] },
        ],
      },
      {
        name: "-ild /a\u026ald/",
        slug: "-ild",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "mild", phonetic: "ma\u026ald", meaning: "adj. 温和的", audio: "/audio/mixed/mixed-i/mild.mp3", phonemeMap: [{ ipa: "/a\u026ald/", spelling: "ild" }] },
        ],
      },
      {
        name: "-igh /a\u026a/",
        slug: "-igh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "light", phonetic: "la\u026at", meaning: "n. 光", audio: "/audio/mixed/mixed-i/light.mp3", phonemeMap: [{ ipa: "/a\u026a/", spelling: "igh" }] },
        ],
      },
      {
        name: "-igh /a\u026a/",
        slug: "-igh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "high", phonetic: "ha\u026a", meaning: "adj. 高的", audio: "/audio/mixed/mixed-i/high.mp3", phonemeMap: [{ ipa: "/a\u026a/", spelling: "igh" }] },
        ],
      },
      {
        name: "-igh /a\u026a/",
        slug: "-igh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "night", phonetic: "na\u026at", meaning: "n. 夜晚", audio: "/audio/mixed/mixed-i/night.mp3", phonemeMap: [{ ipa: "/a\u026a/", spelling: "igh" }] },
        ],
      },
      {
        name: "-ign /a\u026an/",
        slug: "-ign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "sign", phonetic: "sa\u026an", meaning: "n. 标志", audio: "/audio/mixed/mixed-i/sign.mp3", phonemeMap: [{ ipa: "/a\u026an/", spelling: "ign" }] },
        ],
      },
      {
        name: "-ign /a\u026an/",
        slug: "-ign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "design", phonetic: "d\u026a\u02c8za\u026an", meaning: "n. 设计", audio: "/audio/mixed/mixed-i/design.mp3", syllables: ["de", "sign"], phonemeMap: [{ ipa: "/a\u026an/", spelling: "ign" }] },
        ],
      },
      {
        name: "-ign /a\u026an/",
        slug: "-ign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "assign", phonetic: "\u0259\u02c8sa\u026an", meaning: "v. 分配", audio: "/audio/mixed/mixed-i/assign.mp3", syllables: ["as", "sign"], phonemeMap: [{ ipa: "/a\u026an/", spelling: "ign" }] },
        ],
      },
      {
        name: "-aign /e\u026an/",
        slug: "-aign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "campaign", phonetic: "k\u00e6m\u02c8pe\u026an", meaning: "n. 运动", audio: "/audio/mixed/mixed-i/campaign.mp3", syllables: ["cam", "paign"], phonemeMap: [{ ipa: "/e\u026an/", spelling: "aign" }] },
        ],
      },
      {
        name: "-eigh /e\u026a/",
        slug: "-eigh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "eight", phonetic: "e\u026at", meaning: "num. 八", audio: "/audio/mixed/mixed-i/eight.mp3", syllables: ["e", "ight"], phonemeMap: [{ ipa: "/e\u026a/", spelling: "eigh" }] },
        ],
      },
      {
        name: "-eigh /e\u026a/",
        slug: "-eigh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "weigh", phonetic: "we\u026a", meaning: "v. 称重", audio: "/audio/mixed/mixed-i/weigh.mp3", syllables: ["we", "igh"], phonemeMap: [{ ipa: "/e\u026a/", spelling: "eigh" }] },
        ],
      },
      {
        name: "-eigh /e\u026a/",
        slug: "-eigh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "neighbour", phonetic: "n\u02c8e\u026ab\u025c", meaning: "n. 邻居", audio: "/audio/mixed/mixed-i/neighbour.mp3", syllables: ["neigh", "bour"], phonemeMap: [{ ipa: "/e\u026a/", spelling: "eigh" }] },
        ],
      },
      {
        name: "-eign /e\u026an/",
        slug: "-eign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "reign", phonetic: "re\u026an", meaning: "v. 统治", audio: "/audio/mixed/mixed-i/reign.mp3", syllables: ["re", "ign"], phonemeMap: [{ ipa: "/e\u026an/", spelling: "eign" }] },
        ],
      },
      {
        name: "-eign /e\u026an/",
        slug: "-eign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "foreign", phonetic: "\u02c8f\u0252r\u0259n", meaning: "adj. 外国的", audio: "/audio/mixed/mixed-i/foreign.mp3", syllables: ["fo", "reign"], phonemeMap: [{ ipa: "/e\u026an/", spelling: "eign" }] },
        ],
      },
      {
        name: "-eign /e\u026an/",
        slug: "-eign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "sovereign", phonetic: "\u02c8s\u0252vr\u026an", meaning: "n. 君主", audio: "/audio/mixed/mixed-i/sovereign.mp3", syllables: ["sove", "reign"], phonemeMap: [{ ipa: "/e\u026an/", spelling: "eign" }] },
        ],
      },
      {
        name: "-aigh /e\u026a/",
        slug: "-aigh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "straight", phonetic: "stre\u026at", meaning: "adj. 直的", audio: "/audio/mixed/mixed-i/straight.mp3", syllables: ["stra", "ight"], phonemeMap: [{ ipa: "/e\u026a/", spelling: "aigh" }] },
        ],
      },
    ],
  },
  {
    name: "c \u00b7 g \u53d8\u97f3",
    emoji: "🔠",
    slug: "mixed-cg",
    description: "c \u00b7 g \u53d8\u97f3 · 21 规则 21 词",
    tests: [
      {
        name: "c+a/o/u /k/",
        slug: "c+a/o/u",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cat", phonetic: "k\u00e6t", meaning: "n. 猫", audio: "/audio/mixed/mixed-cg/cat.mp3", phonemeMap: [{ ipa: "/k/", spelling: "c" }] },
        ],
      },
      {
        name: "c+a/o/u /k/",
        slug: "c+a/o/u",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cold", phonetic: "k\u0259\u028ald", meaning: "adj. 冷的", audio: "/audio/mixed/mixed-cg/cold.mp3", phonemeMap: [{ ipa: "/k/", spelling: "c" }] },
        ],
      },
      {
        name: "c+a/o/u /k/",
        slug: "c+a/o/u",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cup", phonetic: "k\u028cp", meaning: "n. 杯子", audio: "/audio/mixed/mixed-cg/cup.mp3", phonemeMap: [{ ipa: "/k/", spelling: "c" }] },
        ],
      },
      {
        name: "c+e/i/y /s/",
        slug: "c+e/i/y",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "city", phonetic: "\u02c8s\u026ati", meaning: "n. 城市", audio: "/audio/mixed/mixed-cg/city.mp3", syllables: ["ci", "ty"], phonemeMap: [{ ipa: "/s/", spelling: "c" }] },
        ],
      },
      {
        name: "c+e/i/y /s/",
        slug: "c+e/i/y",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cent", phonetic: "sent", meaning: "n. 分", audio: "/audio/mixed/mixed-cg/cent.mp3", phonemeMap: [{ ipa: "/s/", spelling: "c" }] },
        ],
      },
      {
        name: "c+e/i/y /s/",
        slug: "c+e/i/y",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cycle", phonetic: "\u02c8sa\u026ak(\u0259)l", meaning: "n. 自行车", audio: "/audio/mixed/mixed-cg/cycle.mp3", syllables: ["cyc", "le"], phonemeMap: [{ ipa: "/s/", spelling: "c" }] },
        ],
      },
      {
        name: "ce /s/",
        slug: "ce",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "face", phonetic: "fe\u026as", meaning: "n. 脸", audio: "/audio/mixed/mixed-cg/face.mp3", phonemeMap: [{ ipa: "/s/", spelling: "ce" }] },
        ],
      },
      {
        name: "ce /s/",
        slug: "ce",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "rice", phonetic: "ra\u026as", meaning: "n. 米饭", audio: "/audio/mixed/mixed-cg/rice.mp3", phonemeMap: [{ ipa: "/s/", spelling: "ce" }] },
        ],
      },
      {
        name: "ce /s/",
        slug: "ce",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "place", phonetic: "ple\u026as", meaning: "n. 地方", audio: "/audio/mixed/mixed-cg/place.mp3", phonemeMap: [{ ipa: "/s/", spelling: "ce" }] },
        ],
      },
      {
        name: "g+a/o/u /\u0261/",
        slug: "g+a/o/u",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "got", phonetic: "\u0261\u0252t", meaning: "v. 得到", audio: "/audio/mixed/mixed-cg/got.mp3", phonemeMap: [{ ipa: "/\u0261/", spelling: "g" }] },
        ],
      },
      {
        name: "g+a/o/u /\u0261/",
        slug: "g+a/o/u",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "garden", phonetic: "\u02c8\u0261\u0251\u02d0dn", meaning: "n. 花园", audio: "/audio/mixed/mixed-cg/garden.mp3", syllables: ["gar", "den"], phonemeMap: [{ ipa: "/\u0261/", spelling: "g" }] },
        ],
      },
      {
        name: "g+a/o/u /\u0261/",
        slug: "g+a/o/u",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "gum", phonetic: "\u0261\u028cm", meaning: "n. 口香糖", audio: "/audio/mixed/mixed-cg/gum.mp3", phonemeMap: [{ ipa: "/\u0261/", spelling: "g" }] },
        ],
      },
      {
        name: "g+e/i/y /d\u0292/",
        slug: "g+e/i/y",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "giant", phonetic: "\u02c8d\u0292a\u026a\u0259nt", meaning: "n. 巨人", audio: "/audio/mixed/mixed-cg/giant.mp3", syllables: ["gi", "ant"], phonemeMap: [{ ipa: "/d\u0292/", spelling: "g" }] },
        ],
      },
      {
        name: "g+e/i/y /d\u0292/",
        slug: "g+e/i/y",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "gym", phonetic: "d\u0292\u026am", meaning: "n. 体育馆", audio: "/audio/mixed/mixed-cg/gym.mp3", phonemeMap: [{ ipa: "/d\u0292/", spelling: "g" }] },
        ],
      },
      {
        name: "g+e/i/y /d\u0292/",
        slug: "g+e/i/y",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "giraffe", phonetic: "d\u0292\u0259\u02c8r\u0251\u02d0f", meaning: "n. 长颈鹿", audio: "/audio/mixed/mixed-cg/giraffe.mp3", syllables: ["gi", "raffe"], phonemeMap: [{ ipa: "/d\u0292/", spelling: "g" }] },
        ],
      },
      {
        name: "ge /d\u0292/",
        slug: "ge",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "page", phonetic: "pe\u026ad\u0292", meaning: "n. 页", audio: "/audio/mixed/mixed-cg/page.mp3", phonemeMap: [{ ipa: "/d\u0292/", spelling: "ge" }] },
        ],
      },
      {
        name: "ge /d\u0292/",
        slug: "ge",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "large", phonetic: "l\u0251\u02d0d\u0292", meaning: "adj. 大的", audio: "/audio/mixed/mixed-cg/large.mp3", phonemeMap: [{ ipa: "/d\u0292/", spelling: "ge" }] },
        ],
      },
      {
        name: "ge /d\u0292/",
        slug: "ge",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "orange", phonetic: "\u02c8\u0252r\u026and\u0292", meaning: "n. 橙子", audio: "/audio/mixed/mixed-cg/orange.mp3", syllables: ["o", "range"], phonemeMap: [{ ipa: "/d\u0292/", spelling: "ge" }] },
        ],
      },
      {
        name: "qu /kw/",
        slug: "qu",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "queen", phonetic: "kwi\u02d0n", meaning: "n. 女王", audio: "/audio/mixed/mixed-cg/queen.mp3", syllables: ["qu", "e", "en"], phonemeMap: [{ ipa: "/kw/", spelling: "qu" }] },
        ],
      },
      {
        name: "qu /kw/",
        slug: "qu",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "quick", phonetic: "kw\u02c8\u026ak", meaning: "adj. 快的", audio: "/audio/mixed/mixed-cg/quick.mp3", syllables: ["qu", "ick"], phonemeMap: [{ ipa: "/kw/", spelling: "qu" }] },
        ],
      },
      {
        name: "qu /kw/",
        slug: "qu",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "quiet", phonetic: "\u02c8kwa\u026a\u0259t", meaning: "adj. 安静的", audio: "/audio/mixed/mixed-cg/quiet.mp3", syllables: ["qu", "iet"], phonemeMap: [{ ipa: "/kw/", spelling: "qu" }] },
        ],
      },
    ],
  },
  {
    name: "o \u7279\u6b8a\u8bcd\u5f62",
    emoji: "🔠",
    slug: "mixed-o",
    description: "o \u7279\u6b8a\u8bcd\u5f62 · 15 规则 15 词",
    tests: [
      {
        name: "-ost /\u0259\u028ast/",
        slug: "-ost",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "post", phonetic: "p\u0259\u028ast", meaning: "v. 邮寄", audio: "/audio/mixed/mixed-o/post.mp3", phonemeMap: [{ ipa: "/\u0259\u028ast/", spelling: "ost" }] },
        ],
      },
      {
        name: "-ost /\u0259\u028ast/",
        slug: "-ost",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "most", phonetic: "m\u0259\u028ast", meaning: "adj. 最多的", audio: "/audio/mixed/mixed-o/most.mp3", phonemeMap: [{ ipa: "/\u0259\u028ast/", spelling: "ost" }] },
        ],
      },
      {
        name: "-ost /\u0259\u028ast/",
        slug: "-ost",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "host", phonetic: "h\u0259\u028ast", meaning: "n. 主人", audio: "/audio/mixed/mixed-o/host.mp3", phonemeMap: [{ ipa: "/\u0259\u028ast/", spelling: "ost" }] },
        ],
      },
      {
        name: "-old /\u0259\u028ald/",
        slug: "-old",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "old", phonetic: "\u0259\u028ald", meaning: "adj. 老的", audio: "/audio/mixed/mixed-o/old.mp3", phonemeMap: [{ ipa: "/\u0259\u028ald/", spelling: "old" }] },
        ],
      },
      {
        name: "-old /\u0259\u028ald/",
        slug: "-old",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cold", phonetic: "k\u0259\u028ald", meaning: "adj. 冷的", audio: "/audio/mixed/mixed-o/cold.mp3", phonemeMap: [{ ipa: "/\u0259\u028ald/", spelling: "old" }] },
        ],
      },
      {
        name: "-old /\u0259\u028ald/",
        slug: "-old",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "gold", phonetic: "\u0261\u0259\u028ald", meaning: "n. 金子", audio: "/audio/mixed/mixed-o/gold.mp3", phonemeMap: [{ ipa: "/\u0259\u028ald/", spelling: "old" }] },
        ],
      },
      {
        name: "-oll /\u0259\u028al/",
        slug: "-oll",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "roll", phonetic: "r\u02c8o\u028al", meaning: "v. 滚动", audio: "/audio/mixed/mixed-o/roll.mp3", phonemeMap: [{ ipa: "/\u0259\u028al/", spelling: "oll" }] },
        ],
      },
      {
        name: "-oll /\u0259\u028al/",
        slug: "-oll",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "toll", phonetic: "t\u0259\u028al", meaning: "n. 通行费", audio: "/audio/mixed/mixed-o/toll.mp3", phonemeMap: [{ ipa: "/\u0259\u028al/", spelling: "oll" }] },
        ],
      },
      {
        name: "-oll /\u0259\u028al/",
        slug: "-oll",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "stroll", phonetic: "str\u0259\u028al", meaning: "v. 散步", audio: "/audio/mixed/mixed-o/stroll.mp3", phonemeMap: [{ ipa: "/\u0259\u028al/", spelling: "oll" }] },
        ],
      },
      {
        name: "-ough /\u0252f/",
        slug: "-ough",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cough", phonetic: "k\u0252f", meaning: "v. 咳嗽", audio: "/audio/mixed/mixed-o/cough.mp3", syllables: ["co", "ugh"], phonemeMap: [{ ipa: "/\u0252f/", spelling: "ough" }] },
        ],
      },
      {
        name: "-ough /\u0252f/",
        slug: "-ough",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "tough", phonetic: "t\u028cf", meaning: "adj. 困难的", audio: "/audio/mixed/mixed-o/tough.mp3", syllables: ["to", "ugh"], phonemeMap: [{ ipa: "/\u0252f/", spelling: "ough" }] },
        ],
      },
      {
        name: "-ough /\u0252f/",
        slug: "-ough",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "though", phonetic: "\u00f0\u0259\u028a", meaning: "conj. 虽然", audio: "/audio/mixed/mixed-o/though.mp3", syllables: ["tho", "ugh"], phonemeMap: [{ ipa: "/\u0252f/", spelling: "ough" }] },
        ],
      },
      {
        name: "-ought /\u0254\u02d0t/",
        slug: "-ought",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "thought", phonetic: "\u03b8\u0254\u02d0t", meaning: "n. 想法", audio: "/audio/mixed/mixed-o/thought.mp3", syllables: ["tho", "ught"], phonemeMap: [{ ipa: "/\u0254\u02d0t/", spelling: "ought" }] },
        ],
      },
      {
        name: "-ought /\u0254\u02d0t/",
        slug: "-ought",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bought", phonetic: "b\u0254\u02d0t", meaning: "v. 买", audio: "/audio/mixed/mixed-o/bought.mp3", syllables: ["bo", "ught"], phonemeMap: [{ ipa: "/\u0254\u02d0t/", spelling: "ought" }] },
        ],
      },
      {
        name: "-ought /\u0254\u02d0t/",
        slug: "-ought",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "brought", phonetic: "br\u0254\u02d0t", meaning: "v. 带来", audio: "/audio/mixed/mixed-o/brought.mp3", syllables: ["bro", "ught"], phonemeMap: [{ ipa: "/\u0254\u02d0t/", spelling: "ought" }] },
        ],
      },
    ],
  },
  {
    name: "\u5e38\u89c1\u8bcd\u5c3e\u7ec4\u5408",
    emoji: "🔠",
    slug: "mixed-ending",
    description: "\u5e38\u89c1\u8bcd\u5c3e\u7ec4\u5408 · 55 规则 55 词",
    tests: [
      {
        name: "-ble /bl/",
        slug: "-ble",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "table", phonetic: "\u02c8te\u026ab(\u0259)l", meaning: "n. 桌子", audio: "/audio/mixed/mixed-ending/table.mp3", syllables: ["tab", "le"], phonemeMap: [{ ipa: "/bl/", spelling: "ble" }] },
        ],
      },
      {
        name: "-ble /bl/",
        slug: "-ble",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "able", phonetic: "\u02c8e\u026ab(\u0259)l", meaning: "adj. 能够", audio: "/audio/mixed/mixed-ending/able.mp3", syllables: ["ab", "le"], phonemeMap: [{ ipa: "/bl/", spelling: "ble" }] },
        ],
      },
      {
        name: "-ble /bl/",
        slug: "-ble",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bubble", phonetic: "\u02c8b\u028cb(\u0259)l", meaning: "n. 气泡", audio: "/audio/mixed/mixed-ending/bubble.mp3", syllables: ["bubb", "le"], phonemeMap: [{ ipa: "/bl/", spelling: "ble" }] },
        ],
      },
      {
        name: "-dle /dl/",
        slug: "-dle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "candle", phonetic: "\u02c8k\u00e6nd(\u0259)l", meaning: "n. 蜡烛", audio: "/audio/mixed/mixed-ending/candle.mp3", syllables: ["cand", "le"], phonemeMap: [{ ipa: "/dl/", spelling: "dle" }] },
        ],
      },
      {
        name: "-dle /dl/",
        slug: "-dle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "middle", phonetic: "\u02c8m\u026ad(\u0259)l", meaning: "n. 中间", audio: "/audio/mixed/mixed-ending/middle.mp3", syllables: ["midd", "le"], phonemeMap: [{ ipa: "/dl/", spelling: "dle" }] },
        ],
      },
      {
        name: "-dle /dl/",
        slug: "-dle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "noodle", phonetic: "\u02c8nu\u02d0d(\u0259)l", meaning: "n. 面条", audio: "/audio/mixed/mixed-ending/noodle.mp3", syllables: ["no", "odle"], phonemeMap: [{ ipa: "/dl/", spelling: "dle" }] },
        ],
      },
      {
        name: "-cle /kl/",
        slug: "-cle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "circle", phonetic: "\u02c8s\u025c\u02d0k(\u0259)l", meaning: "n. 圆圈", audio: "/audio/mixed/mixed-ending/circle.mp3", syllables: ["circ", "le"], phonemeMap: [{ ipa: "/kl/", spelling: "cle" }] },
        ],
      },
      {
        name: "-cle /kl/",
        slug: "-cle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "uncle", phonetic: "\u02c8\u028c\u014bk(\u0259)l", meaning: "n. 叔叔", audio: "/audio/mixed/mixed-ending/uncle.mp3", syllables: ["unc", "le"], phonemeMap: [{ ipa: "/kl/", spelling: "cle" }] },
        ],
      },
      {
        name: "-cle /kl/",
        slug: "-cle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bicycle", phonetic: "\u02c8ba\u026as\u026ak(\u0259)l", meaning: "n. 自行车", audio: "/audio/mixed/mixed-ending/bicycle.mp3", syllables: ["bi", "cyc", "le"], phonemeMap: [{ ipa: "/kl/", spelling: "cle" }] },
        ],
      },
      {
        name: "-kle /kl/",
        slug: "-kle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "pickle", phonetic: "\u02c8p\u026akl", meaning: "n. 泡菜", audio: "/audio/mixed/mixed-ending/pickle.mp3", phonemeMap: [{ ipa: "/kl/", spelling: "kle" }] },
        ],
      },
      {
        name: "-kle /kl/",
        slug: "-kle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "sprinkle", phonetic: "\u02c8spr\u026a\u014bk(\u0259)l", meaning: "v. 撒", audio: "/audio/mixed/mixed-ending/sprinkle.mp3", syllables: ["sprink", "le"], phonemeMap: [{ ipa: "/kl/", spelling: "kle" }] },
        ],
      },
      {
        name: "-kle /kl/",
        slug: "-kle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "ankle", phonetic: "\u02c8\u00e6\u014bk(\u0259)l", meaning: "n. 脚踝", audio: "/audio/mixed/mixed-ending/ankle.mp3", syllables: ["ank", "le"], phonemeMap: [{ ipa: "/kl/", spelling: "kle" }] },
        ],
      },
      {
        name: "-gle /\u0261l/",
        slug: "-gle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "eagle", phonetic: "\u02c8i\u02d0\u0261(\u0259)l", meaning: "n. 鹰", audio: "/audio/mixed/mixed-ending/eagle.mp3", syllables: ["e", "agle"], phonemeMap: [{ ipa: "/\u0261l/", spelling: "gle" }] },
        ],
      },
      {
        name: "-gle /\u0261l/",
        slug: "-gle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "angle", phonetic: "\u02c8\u00e6\u014b\u0261(\u0259)l", meaning: "n. 角度", audio: "/audio/mixed/mixed-ending/angle.mp3", syllables: ["ang", "le"], phonemeMap: [{ ipa: "/\u0261l/", spelling: "gle" }] },
        ],
      },
      {
        name: "-gle /\u0261l/",
        slug: "-gle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "single", phonetic: "\u02c8s\u026a\u014b\u0261(\u0259)l", meaning: "adj. 单一的", audio: "/audio/mixed/mixed-ending/single.mp3", syllables: ["sing", "le"], phonemeMap: [{ ipa: "/\u0261l/", spelling: "gle" }] },
        ],
      },
      {
        name: "-ple /pl/",
        slug: "-ple",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "apple", phonetic: "\u02c8\u00e6p(\u0259)l", meaning: "n. 苹果", audio: "/audio/mixed/mixed-ending/apple.mp3", syllables: ["app", "le"], phonemeMap: [{ ipa: "/pl/", spelling: "ple" }] },
        ],
      },
      {
        name: "-ple /pl/",
        slug: "-ple",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "people", phonetic: "\u02c8pi\u02d0p(\u0259)l", meaning: "n. 人们", audio: "/audio/mixed/mixed-ending/people.mp3", syllables: ["pe", "ople"], phonemeMap: [{ ipa: "/pl/", spelling: "ple" }] },
        ],
      },
      {
        name: "-ple /pl/",
        slug: "-ple",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "simple", phonetic: "\u02c8s\u026amp(\u0259)l", meaning: "adj. 简单的", audio: "/audio/mixed/mixed-ending/simple.mp3", syllables: ["simp", "le"], phonemeMap: [{ ipa: "/pl/", spelling: "ple" }] },
        ],
      },
      {
        name: "-tle /tl/",
        slug: "-tle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "little", phonetic: "\u02c8l\u026at(\u0259)l", meaning: "adj. 小的", audio: "/audio/mixed/mixed-ending/little.mp3", syllables: ["litt", "le"], phonemeMap: [{ ipa: "/tl/", spelling: "tle" }] },
        ],
      },
      {
        name: "-tle /tl/",
        slug: "-tle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bottle", phonetic: "\u02c8b\u0252t(\u0259)l", meaning: "n. 瓶子", audio: "/audio/mixed/mixed-ending/bottle.mp3", syllables: ["bott", "le"], phonemeMap: [{ ipa: "/tl/", spelling: "tle" }] },
        ],
      },
      {
        name: "-tle /tl/",
        slug: "-tle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "battle", phonetic: "\u02c8b\u00e6t(\u0259)l", meaning: "n. 战斗", audio: "/audio/mixed/mixed-ending/battle.mp3", syllables: ["batt", "le"], phonemeMap: [{ ipa: "/tl/", spelling: "tle" }] },
        ],
      },
      {
        name: "-zle /zl/",
        slug: "-zle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "puzzle", phonetic: "\u02c8p\u028cz(\u0259)l", meaning: "n. 谜题", audio: "/audio/mixed/mixed-ending/puzzle.mp3", syllables: ["puzz", "le"], phonemeMap: [{ ipa: "/zl/", spelling: "zle" }] },
        ],
      },
      {
        name: "-zle /zl/",
        slug: "-zle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "drizzle", phonetic: "\u02c8dr\u026az(\u0259)l", meaning: "n. 毛毛雨", audio: "/audio/mixed/mixed-ending/drizzle.mp3", syllables: ["drizz", "le"], phonemeMap: [{ ipa: "/zl/", spelling: "zle" }] },
        ],
      },
      {
        name: "-zle /zl/",
        slug: "-zle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "fizzle", phonetic: "\u02c8f\u026azl", meaning: "v. 失败", audio: "/audio/mixed/mixed-ending/fizzle.mp3", phonemeMap: [{ ipa: "/zl/", spelling: "zle" }] },
        ],
      },
      {
        name: "-sure /\u0292\u0259/",
        slug: "-sure",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "measure", phonetic: "\u02c8me\u0292\u0259(r)", meaning: "v. 测量", audio: "/audio/mixed/mixed-ending/measure.mp3", syllables: ["mea", "sure"], phonemeMap: [{ ipa: "/\u0292\u0259/", spelling: "sure" }] },
        ],
      },
      {
        name: "-sure /\u0292\u0259/",
        slug: "-sure",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "pleasure", phonetic: "\u02c8ple\u0292\u0259(r)", meaning: "n. 快乐", audio: "/audio/mixed/mixed-ending/pleasure.mp3", syllables: ["plea", "sure"], phonemeMap: [{ ipa: "/\u0292\u0259/", spelling: "sure" }] },
        ],
      },
      {
        name: "-sure /\u0292\u0259/",
        slug: "-sure",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "treasure", phonetic: "\u02c8tre\u0292\u0259(r)", meaning: "n. 财宝", audio: "/audio/mixed/mixed-ending/treasure.mp3", syllables: ["trea", "sure"], phonemeMap: [{ ipa: "/\u0292\u0259/", spelling: "sure" }] },
        ],
      },
      {
        name: "-sion /\u0283\u0259n/",
        slug: "-sion",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "television", phonetic: "\u02c8tel\u026av\u026a\u0292(\u0259)n", meaning: "n. 电视机", audio: "/audio/mixed/mixed-ending/television.mp3", syllables: ["te", "le", "vi", "sion"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "sion" }] },
        ],
      },
      {
        name: "-sion /\u0283\u0259n/",
        slug: "-sion",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "decision", phonetic: "d\u026a\u02c8s\u026a\u0292(\u0259)n", meaning: "n. 决定", audio: "/audio/mixed/mixed-ending/decision.mp3", syllables: ["de", "ci", "sion"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "sion" }] },
        ],
      },
      {
        name: "-sion /\u0283\u0259n/",
        slug: "-sion",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "vision", phonetic: "\u02c8v\u026a\u0292n", meaning: "n. 视觉", audio: "/audio/mixed/mixed-ending/vision.mp3", syllables: ["vi", "si", "on"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "sion" }] },
        ],
      },
      {
        name: "-tion /\u0283\u0259n/",
        slug: "-tion",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "nation", phonetic: "\u02c8ne\u026a\u0283(\u0259)n", meaning: "n. 国家", audio: "/audio/mixed/mixed-ending/nation.mp3", syllables: ["na", "tion"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "tion" }] },
        ],
      },
      {
        name: "-tion /\u0283\u0259n/",
        slug: "-tion",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "action", phonetic: "\u02c8\u00e6k\u0283(\u0259)n", meaning: "n. 行动", audio: "/audio/mixed/mixed-ending/action.mp3", syllables: ["ac", "tion"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "tion" }] },
        ],
      },
      {
        name: "-tion /\u0283\u0259n/",
        slug: "-tion",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "station", phonetic: "\u02c8ste\u026a\u0283(\u0259)n", meaning: "n. 车站", audio: "/audio/mixed/mixed-ending/station.mp3", syllables: ["sta", "tion"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "tion" }] },
        ],
      },
      {
        name: "-tian /\u0283\u0259n/",
        slug: "-tian",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "Christian", phonetic: "\u02c8kr\u026ast\u0283\u0259n", meaning: "n. 基督徒", audio: "/audio/mixed/mixed-ending/Christian.mp3", syllables: ["chri", "stian"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "tian" }] },
        ],
      },
      {
        name: "-tian /\u0283\u0259n/",
        slug: "-tian",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "Martian", phonetic: "\u02c8m\u0251\u02d0\u0283n", meaning: "n. 火星人", audio: "/audio/mixed/mixed-ending/Martian.mp3", syllables: ["mar", "ti", "an"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "tian" }] },
        ],
      },
      {
        name: "-sial /\u0283\u0259l/",
        slug: "-sial",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "controversial", phonetic: "\u02cck\u0252ntr\u0259\u02c8v\u025c\u02d0\u0283(\u0259)l", meaning: "adj. 有争议的", audio: "/audio/mixed/mixed-ending/controversial.mp3", syllables: ["con", "tro", "ver", "sial"], phonemeMap: [{ ipa: "/\u0283\u0259l/", spelling: "sial" }] },
        ],
      },
      {
        name: "-sial /\u0283\u0259l/",
        slug: "-sial",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "racial", phonetic: "\u02c8re\u026a\u0283(\u0259)l", meaning: "adj. 种族的", audio: "/audio/mixed/mixed-ending/racial.mp3", syllables: ["ra", "cial"], phonemeMap: [{ ipa: "/\u0283\u0259l/", spelling: "sial" }] },
        ],
      },
      {
        name: "-tial /\u0283\u0259l/",
        slug: "-tial",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "essential", phonetic: "\u026a\u02c8sen\u0283l", meaning: "adj. 必需的", audio: "/audio/mixed/mixed-ending/essential.mp3", syllables: ["essen", "tial"], phonemeMap: [{ ipa: "/\u0283\u0259l/", spelling: "tial" }] },
        ],
      },
      {
        name: "-tial /\u0283\u0259l/",
        slug: "-tial",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "initial", phonetic: "\u026a\u02c8n\u026a\u0283l", meaning: "adj. 最初的", audio: "/audio/mixed/mixed-ending/initial.mp3", syllables: ["ini", "tial"], phonemeMap: [{ ipa: "/\u0283\u0259l/", spelling: "tial" }] },
        ],
      },
      {
        name: "-tial /\u0283\u0259l/",
        slug: "-tial",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "partial", phonetic: "\u02c8p\u0251\u02d0\u0283(\u0259)l", meaning: "adj. 部分的", audio: "/audio/mixed/mixed-ending/partial.mp3", syllables: ["par", "tial"], phonemeMap: [{ ipa: "/\u0283\u0259l/", spelling: "tial" }] },
        ],
      },
      {
        name: "-tient /\u0283\u0259nt/",
        slug: "-tient",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "patient", phonetic: "\u02c8pe\u026a\u0283(\u0259)nt", meaning: "adj. 有耐心的", audio: "/audio/mixed/mixed-ending/patient.mp3", syllables: ["pa", "tient"], phonemeMap: [{ ipa: "/\u0283\u0259nt/", spelling: "tient" }] },
        ],
      },
      {
        name: "-tient /\u0283\u0259nt/",
        slug: "-tient",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "quotient", phonetic: "\u02c8kw\u0259\u028a\u0283(\u0259)nt", meaning: "n. 商数", audio: "/audio/mixed/mixed-ending/quotient.mp3", syllables: ["qu", "o", "tient"], phonemeMap: [{ ipa: "/\u0283\u0259nt/", spelling: "tient" }] },
        ],
      },
      {
        name: "-tience /\u0283\u0259ns/",
        slug: "-tience",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "patience", phonetic: "\u02c8pe\u026a\u0283(\u0259)ns", meaning: "n. 耐心", audio: "/audio/mixed/mixed-ending/patience.mp3", syllables: ["pati", "ence"], phonemeMap: [{ ipa: "/\u0283\u0259ns/", spelling: "tience" }] },
        ],
      },
      {
        name: "-ture /t\u0283\u0259/",
        slug: "-ture",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "picture", phonetic: "\u02c8p\u026akt\u0283\u0259(r)", meaning: "n. 图画", audio: "/audio/mixed/mixed-ending/picture.mp3", syllables: ["pic", "ture"], phonemeMap: [{ ipa: "/t\u0283\u0259/", spelling: "ture" }] },
        ],
      },
      {
        name: "-ture /t\u0283\u0259/",
        slug: "-ture",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "nature", phonetic: "\u02c8ne\u026at\u0283\u0259(r)", meaning: "n. 自然", audio: "/audio/mixed/mixed-ending/nature.mp3", syllables: ["na", "ture"], phonemeMap: [{ ipa: "/t\u0283\u0259/", spelling: "ture" }] },
        ],
      },
      {
        name: "-ture /t\u0283\u0259/",
        slug: "-ture",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "future", phonetic: "\u02c8fju\u02d0t\u0283\u0259(r)", meaning: "n. 未来", audio: "/audio/mixed/mixed-ending/future.mp3", syllables: ["fu", "ture"], phonemeMap: [{ ipa: "/t\u0283\u0259/", spelling: "ture" }] },
        ],
      },
      {
        name: "-tual /t\u0283\u028a\u0259l/",
        slug: "-tual",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "actual", phonetic: "\u02c8\u00e6kt\u0283u\u0259l", meaning: "adj. 真实的", audio: "/audio/mixed/mixed-ending/actual.mp3", syllables: ["ac", "tu", "al"], phonemeMap: [{ ipa: "/t\u0283\u028a\u0259l/", spelling: "tual" }] },
        ],
      },
      {
        name: "-tual /t\u0283\u028a\u0259l/",
        slug: "-tual",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "ritual", phonetic: "\u02c8r\u026at\u0283u\u0259l", meaning: "n. 仪式", audio: "/audio/mixed/mixed-ending/ritual.mp3", syllables: ["ri", "tu", "al"], phonemeMap: [{ ipa: "/t\u0283\u028a\u0259l/", spelling: "tual" }] },
        ],
      },
      {
        name: "-tual /t\u0283\u028a\u0259l/",
        slug: "-tual",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "habitual", phonetic: "h\u0259\u02c8b\u026at\u0283u\u0259l", meaning: "adj. 习惯性的", audio: "/audio/mixed/mixed-ending/habitual.mp3", syllables: ["ha", "bi", "tu", "al"], phonemeMap: [{ ipa: "/t\u0283\u028a\u0259l/", spelling: "tual" }] },
        ],
      },
      {
        name: "-tue /t\u0283u\u02d0/",
        slug: "-tue",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "virtue", phonetic: "\u02c8v\u025c\u02d0t\u0283u\u02d0", meaning: "n. 美德", audio: "/audio/mixed/mixed-ending/virtue.mp3", syllables: ["vir", "tue"], phonemeMap: [{ ipa: "/t\u0283u\u02d0/", spelling: "tue" }] },
        ],
      },
      {
        name: "-tue /t\u0283u\u02d0/",
        slug: "-tue",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "statue", phonetic: "\u02c8st\u00e6t\u0283u\u02d0", meaning: "n. 雕像", audio: "/audio/mixed/mixed-ending/statue.mp3", syllables: ["sta", "tue"], phonemeMap: [{ ipa: "/t\u0283u\u02d0/", spelling: "tue" }] },
        ],
      },
      {
        name: "-tue /t\u0283u\u02d0/",
        slug: "-tue",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "fortune", phonetic: "\u02c8f\u0254\u02d0t\u0283u\u02d0n", meaning: "n. 财富", audio: "/audio/mixed/mixed-ending/fortune.mp3", syllables: ["for", "tune"], phonemeMap: [{ ipa: "/t\u0283u\u02d0/", spelling: "tue" }] },
        ],
      },
      {
        name: "-ous /\u0259s/",
        slug: "-ous",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "famous", phonetic: "\u02c8fe\u026am\u0259s", meaning: "adj. 著名的", audio: "/audio/mixed/mixed-ending/famous.mp3", syllables: ["fa", "mous"], phonemeMap: [{ ipa: "/\u0259s/", spelling: "ous" }] },
        ],
      },
      {
        name: "-ous /\u0259s/",
        slug: "-ous",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "dangerous", phonetic: "\u02c8de\u026and\u0292\u0259r\u0259s", meaning: "adj. 危险的", audio: "/audio/mixed/mixed-ending/dangerous.mp3", syllables: ["dan", "ge", "rous"], phonemeMap: [{ ipa: "/\u0259s/", spelling: "ous" }] },
        ],
      },
      {
        name: "-ous /\u0259s/",
        slug: "-ous",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "serious", phonetic: "\u02c8s\u026a\u0259ri\u0259s", meaning: "adj. 严肃的", audio: "/audio/mixed/mixed-ending/serious.mp3", syllables: ["se", "ri", "ous"], phonemeMap: [{ ipa: "/\u0259s/", spelling: "ous" }] },
        ],
      },
    ],
  },
]

export { T as PHONICS_MIXED_CHAPTERS }

/** 按 chapter slug 查找分组 */
export function getPhonicsMixedChapter(chapterSlug: string): WhaleChapter | undefined {
  return T.find((c) => c.slug === chapterSlug)
}

