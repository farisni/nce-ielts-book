// 自然拼读 · 元音组合听写课程数据（巧记表示例单词生成）
// 行 a e i o u 各为一个 Chapter，每组合（ar/ay/ea…）为 Test；phonemeMap 使答对后组合字母标红
import type { WhaleChapter, WhaleTest, WhaleWord } from "./whale-king"

const T: WhaleChapter[] = [
  {
    name: "元音 A",
    emoji: "🔤",
    slug: "vowel-a",
    description: "a 行元音组合 · 16 词",
    tests: [
      {
        name: "ar",
        slug: "ar",
        wordCount: 3, difficulty: 2,
        words: [
          { word: "are", phonetic: "\u0251\u02d0(r); \u0259(r)", meaning: "v. \u662f\uff08be \u7684\u590d\u6570\u5f62\u5f0f\uff09", audio: "/audio/phonics-vowel/vowel-a/are.mp3", syllables: ["ar", "e"], phonemeMap: [{ ipa: "\u0251\u02d0", spelling: "ar" }] },
          { word: "warm", phonetic: "w\u0254\u02d0m", meaning: "adj. \u6e29\u6696\u7684", audio: "/audio/phonics-vowel/vowel-a/warm.mp3", phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "ar" }] },
          { word: "dollar", phonetic: "\u02c8d\u0252l\u0259(r)", meaning: "n. \u7f8e\u5143", audio: "/audio/phonics-vowel/vowel-a/dollar.mp3", syllables: ["dol", "lar"], phonemeMap: [{ ipa: "\u0259", spelling: "ar" }] },
        ],
      },
      {
        name: "ay",
        slug: "ay",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "day", phonetic: "de\u026a", meaning: "n. \u5929", audio: "/audio/phonics-vowel/vowel-a/day.mp3", syllables: ["da", "y"], phonemeMap: [{ ipa: "e\u026a", spelling: "ay" }] },
        ],
      },
      {
        name: "aw",
        slug: "aw",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "saw", phonetic: "s\u0254\u02d0", meaning: "v. \u770b\u89c1\uff08see \u7684\u8fc7\u53bb\u5f0f\uff09", audio: "/audio/phonics-vowel/vowel-a/saw.mp3", phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "aw" }] },
        ],
      },
      {
        name: "al",
        slug: "al",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "ball", phonetic: "b\u02c8\u0254l", meaning: "n. \u7403", audio: "/audio/phonics-vowel/vowel-a/ball.mp3", phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "al" }] },
          { word: "half", phonetic: "h\u0251\u02d0f", meaning: "n. \u4e00\u534a", audio: "/audio/phonics-vowel/vowel-a/half.mp3", phonemeMap: [{ ipa: "\u0251\u02d0", spelling: "al" }] },
        ],
      },
      {
        name: "a_e",
        slug: "a_e",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "make", phonetic: "me\u026ak", meaning: "v. \u5236\u4f5c", audio: "/audio/phonics-vowel/vowel-a/make.mp3", phonemeMap: [{ ipa: "e\u026a", spelling: "a" }, { ipa: "e\u026a", spelling: "e" }] },
        ],
      },
      {
        name: "ai",
        slug: "ai",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "rain", phonetic: "re\u026an", meaning: "n. \u96e8", audio: "/audio/phonics-vowel/vowel-a/rain.mp3", syllables: ["ra", "in"], phonemeMap: [{ ipa: "e\u026a", spelling: "ai" }] },
        ],
      },
      {
        name: "au",
        slug: "au",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "sauce", phonetic: "s\u0254\u02d0s", meaning: "n. \u9171", audio: "/audio/phonics-vowel/vowel-a/sauce.mp3", syllables: ["sa", "uce"], phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "au" }] },
          { word: "laugh", phonetic: "l\u0251\u02d0f", meaning: "v. \u7b11", audio: "/audio/phonics-vowel/vowel-a/laugh.mp3", syllables: ["la", "ugh"], phonemeMap: [{ ipa: "\u0251\u02d0", spelling: "au" }] },
        ],
      },
      {
        name: "air / an / are / augh",
        slug: "air|an|are|augh",
        wordCount: 5, difficulty: 2,
        words: [
          { word: "chair", phonetic: "t\u0283e\u0259(r)", meaning: "n. \u6905\u5b50", audio: "/audio/phonics-vowel/vowel-a/chair.mp3", syllables: ["cha", "ir"], phonemeMap: [{ ipa: "e\u0259", spelling: "air" }] },
          { word: "care", phonetic: "ke\u0259(r)", meaning: "v. \u5173\u5fc3", audio: "/audio/phonics-vowel/vowel-a/care.mp3", phonemeMap: [{ ipa: "e\u0259", spelling: "are" }] },
          { word: "caught", phonetic: "k\u0254\u02d0t", meaning: "v. \u6293\u4f4f\uff08catch \u7684\u8fc7\u53bb\u5f0f\uff09", audio: "/audio/phonics-vowel/vowel-a/caught.mp3", syllables: ["ca", "ught"], phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "augh" }] },
          { word: "man", phonetic: "m\u00e6n", meaning: "n. \u7537\u4eba", audio: "/audio/phonics-vowel/vowel-a/man.mp3", phonemeMap: [{ ipa: "\u00e6n", spelling: "an" }] },
          { word: "organ", phonetic: "\u02c8\u0254\u02d0\u0261\u0259n", meaning: "n. \u5668\u5b98", audio: "/audio/phonics-vowel/vowel-a/organ.mp3", syllables: ["or", "gan"], phonemeMap: [{ ipa: "\u0259n", spelling: "an" }] },
        ],
      },
    ],
  },
  {
    name: "元音 E",
    emoji: "🔤",
    slug: "vowel-e",
    description: "e 行元音组合 · 24 词",
    tests: [
      {
        name: "er",
        slug: "er",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "her", phonetic: "h\u025c\u02d0(r); h\u0259(r)", meaning: "pron. \u5979", audio: "/audio/phonics-vowel/vowel-e/her.mp3", phonemeMap: [{ ipa: "\u025c\u02d0", spelling: "er" }] },
          { word: "teacher", phonetic: "\u02c8ti\u02d0t\u0283\u0259(r)", meaning: "n. \u8001\u5e08", audio: "/audio/phonics-vowel/vowel-e/teacher.mp3", syllables: ["tea", "cher"], phonemeMap: [{ ipa: "\u0259", spelling: "er" }] },
        ],
      },
      {
        name: "ey",
        slug: "ey",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "they", phonetic: "\u00f0e\u026a", meaning: "pron. \u4ed6\u4eec", audio: "/audio/phonics-vowel/vowel-e/they.mp3", syllables: ["the", "y"], phonemeMap: [{ ipa: "e\u026a", spelling: "ey" }] },
          { word: "key", phonetic: "ki\u02d0", meaning: "n. \u94a5\u5319", audio: "/audio/phonics-vowel/vowel-e/key.mp3", syllables: ["ke", "y"], phonemeMap: [{ ipa: "i\u02d0", spelling: "ey" }] },
        ],
      },
      {
        name: "ew",
        slug: "ew",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "new", phonetic: "nju\u02d0", meaning: "adj. \u65b0\u7684", audio: "/audio/phonics-vowel/vowel-e/new.mp3", phonemeMap: [{ ipa: "ju\u02d0", spelling: "ew" }] },
          { word: "blew", phonetic: "blu\u02d0", meaning: "v. \u5439\uff08blow \u7684\u8fc7\u53bb\u5f0f\uff09", audio: "/audio/phonics-vowel/vowel-e/blew.mp3", phonemeMap: [{ ipa: "u\u02d0", spelling: "ew" }] },
        ],
      },
      {
        name: "ea",
        slug: "ea",
        wordCount: 4, difficulty: 2,
        words: [
          { word: "tea", phonetic: "ti\u02d0", meaning: "n. \u8336", audio: "/audio/phonics-vowel/vowel-e/tea.mp3", syllables: ["te", "a"], phonemeMap: [{ ipa: "i\u02d0", spelling: "ea" }] },
          { word: "bread", phonetic: "bred", meaning: "n. \u9762\u5305", audio: "/audio/phonics-vowel/vowel-e/bread.mp3", syllables: ["bre", "ad"], phonemeMap: [{ ipa: "e", spelling: "ea" }] },
          { word: "break", phonetic: "bre\u026ak", meaning: "v. \u6253\u7834", audio: "/audio/phonics-vowel/vowel-e/break.mp3", syllables: ["bre", "ak"], phonemeMap: [{ ipa: "e\u026a", spelling: "ea" }] },
          { word: "theatre", phonetic: "\u02c8\u03b8\u026a\u0259t\u0259(r)", meaning: "n. \u5267\u9662", audio: "/audio/phonics-vowel/vowel-e/theatre.mp3", syllables: ["the", "atre"], phonemeMap: [{ ipa: "\u026a\u0259", spelling: "ea" }] },
        ],
      },
      {
        name: "e_e / ee",
        slug: "e_e|ee",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "these", phonetic: "\u00f0i\u02d0z", meaning: "pron. \u8fd9\u4e9b", audio: "/audio/phonics-vowel/vowel-e/these.mp3", phonemeMap: [{ ipa: "i\u02d0", spelling: "e" }, { ipa: "i\u02d0", spelling: "e" }] },
          { word: "see", phonetic: "si\u02d0", meaning: "v. \u770b\u89c1", audio: "/audio/phonics-vowel/vowel-e/see.mp3", phonemeMap: [{ ipa: "i\u02d0", spelling: "ee" }] },
        ],
      },
      {
        name: "ei",
        slug: "ei",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "receive", phonetic: "r\u026a\u02c8si\u02d0v", meaning: "v. \u6536\u5230", audio: "/audio/phonics-vowel/vowel-e/receive.mp3", syllables: ["rece", "ive"], phonemeMap: [{ ipa: "i\u02d0", spelling: "ei" }] },
          { word: "vein", phonetic: "ve\u026an", meaning: "n. \u9759\u8109", audio: "/audio/phonics-vowel/vowel-e/vein.mp3", syllables: ["ve", "in"], phonemeMap: [{ ipa: "e\u026a", spelling: "ei" }] },
        ],
      },
      {
        name: "ear / eer / eigh / en / ere",
        slug: "ear|eer|eigh|en|ere",
        wordCount: 10, difficulty: 2,
        words: [
          { word: "hear", phonetic: "h\u026a\u0259(r)", meaning: "v. \u542c\u89c1", audio: "/audio/phonics-vowel/vowel-e/hear.mp3", syllables: ["he", "ar"], phonemeMap: [{ ipa: "\u026a\u0259", spelling: "ear" }] },
          { word: "bear", phonetic: "be\u0259(r)", meaning: "n. \u718a", audio: "/audio/phonics-vowel/vowel-e/bear.mp3", syllables: ["be", "ar"], phonemeMap: [{ ipa: "e\u0259", spelling: "ear" }] },
          { word: "earth", phonetic: "\u02c8\u025c\u03b8", meaning: "n. \u5730\u7403", audio: "/audio/phonics-vowel/vowel-e/earth.mp3", syllables: ["e", "arth"], phonemeMap: [{ ipa: "\u025c\u02d0", spelling: "ear" }] },
          { word: "heart", phonetic: "h\u0251\u02d0t", meaning: "n. \u5fc3\u810f", audio: "/audio/phonics-vowel/vowel-e/heart.mp3", syllables: ["he", "art"], phonemeMap: [{ ipa: "\u0251\u02d0", spelling: "ear" }] },
          { word: "deer", phonetic: "d\u026a\u0259(r)", meaning: "n. \u9e7f", audio: "/audio/phonics-vowel/vowel-e/deer.mp3", syllables: ["de", "er"], phonemeMap: [{ ipa: "\u026a\u0259", spelling: "eer" }] },
          { word: "here", phonetic: "h\u026a\u0259(r)", meaning: "adv. \u8fd9\u91cc", audio: "/audio/phonics-vowel/vowel-e/here.mp3", phonemeMap: [{ ipa: "\u026a\u0259", spelling: "ere" }] },
          { word: "there", phonetic: "\u00f0e\u0259(r)", meaning: "adv. \u90a3\u91cc", audio: "/audio/phonics-vowel/vowel-e/there.mp3", phonemeMap: [{ ipa: "e\u0259", spelling: "ere" }] },
          { word: "eight", phonetic: "e\u026at", meaning: "num. \u516b", audio: "/audio/phonics-vowel/vowel-e/eight.mp3", syllables: ["e", "ight"], phonemeMap: [{ ipa: "e\u026a", spelling: "eigh" }] },
          { word: "open", phonetic: "\u02c8\u0259\u028ap\u0259n", meaning: "v. \u6253\u5f00", audio: "/audio/phonics-vowel/vowel-e/open.mp3", syllables: ["o", "pen"], phonemeMap: [{ ipa: "\u0259n", spelling: "en" }] },
          { word: "hen", phonetic: "hen", meaning: "n. \u6bcd\u9e21", audio: "/audio/phonics-vowel/vowel-e/hen.mp3", phonemeMap: [{ ipa: "en", spelling: "en" }] },
        ],
      },
    ],
  },
  {
    name: "元音 I",
    emoji: "🔤",
    slug: "vowel-i",
    description: "i 行元音组合 · 9 词",
    tests: [
      {
        name: "ir",
        slug: "ir",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bird", phonetic: "b\u025c\u02d0d", meaning: "n. \u9e1f", audio: "/audio/phonics-vowel/vowel-i/bird.mp3", phonemeMap: [{ ipa: "\u025c\u02d0", spelling: "ir" }] },
        ],
      },
      {
        name: "ia",
        slug: "ia",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "piano", phonetic: "pi\u02c8\u00e6n\u0259\u028a", meaning: "n. \u94a2\u7434", audio: "/audio/phonics-vowel/vowel-i/piano.mp3", syllables: ["pi", "a", "no"], phonemeMap: [{ ipa: "a\u026a\u0259", spelling: "ia" }] },
        ],
      },
      {
        name: "i_e / ie",
        slug: "i_e|ie",
        wordCount: 3, difficulty: 2,
        words: [
          { word: "like", phonetic: "la\u026ak", meaning: "v. \u559c\u6b22", audio: "/audio/phonics-vowel/vowel-i/like.mp3", phonemeMap: [{ ipa: "a\u026a", spelling: "i" }, { ipa: "a\u026a", spelling: "e" }] },
          { word: "pie", phonetic: "pa\u026a", meaning: "n. \u9985\u997c", audio: "/audio/phonics-vowel/vowel-i/pie.mp3", phonemeMap: [{ ipa: "a\u026a", spelling: "ie" }] },
          { word: "field", phonetic: "fi\u02d0ld", meaning: "n. \u7530\u91ce", audio: "/audio/phonics-vowel/vowel-i/field.mp3", syllables: ["fi", "eld"], phonemeMap: [{ ipa: "i\u02d0", spelling: "ie" }] },
        ],
      },
      {
        name: "igh / ign / in / ire",
        slug: "igh|ign|in|ire",
        wordCount: 4, difficulty: 2,
        words: [
          { word: "light", phonetic: "la\u026at", meaning: "n. \u5149", audio: "/audio/phonics-vowel/vowel-i/light.mp3", phonemeMap: [{ ipa: "a\u026a", spelling: "igh" }] },
          { word: "fire", phonetic: "\u02c8fa\u026a\u0259(r)", meaning: "n. \u706b", audio: "/audio/phonics-vowel/vowel-i/fire.mp3", syllables: ["fir", "e"], phonemeMap: [{ ipa: "a\u026a\u0259", spelling: "ire" }] },
          { word: "sign", phonetic: "sa\u026an", meaning: "n. \u6807\u5fd7", audio: "/audio/phonics-vowel/vowel-i/sign.mp3", phonemeMap: [{ ipa: "a\u026an", spelling: "ign" }] },
          { word: "pin", phonetic: "p\u026an", meaning: "n. \u522b\u9488", audio: "/audio/phonics-vowel/vowel-i/pin.mp3", phonemeMap: [{ ipa: "\u026an", spelling: "in" }] },
        ],
      },
    ],
  },
  {
    name: "元音 O",
    emoji: "🔤",
    slug: "vowel-o",
    description: "o 行元音组合 · 23 词",
    tests: [
      {
        name: "or",
        slug: "or",
        wordCount: 3, difficulty: 2,
        words: [
          { word: "for", phonetic: "f\u0254\u02d0(r); f\u0259(r)", meaning: "prep. \u4e3a\u4e86", audio: "/audio/phonics-vowel/vowel-o/for.mp3", phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "or" }] },
          { word: "work", phonetic: "w\u025c\u02d0k", meaning: "v. \u5de5\u4f5c", audio: "/audio/phonics-vowel/vowel-o/work.mp3", phonemeMap: [{ ipa: "\u025c\u02d0", spelling: "or" }] },
          { word: "doctor", phonetic: "\u02c8d\u0252kt\u0259(r)", meaning: "n. \u533b\u751f", audio: "/audio/phonics-vowel/vowel-o/doctor.mp3", syllables: ["doc", "tor"], phonemeMap: [{ ipa: "\u0259", spelling: "or" }] },
        ],
      },
      {
        name: "oy",
        slug: "oy",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "boy", phonetic: "b\u0254\u026a", meaning: "n. \u7537\u5b69", audio: "/audio/phonics-vowel/vowel-o/boy.mp3", syllables: ["bo", "y"], phonemeMap: [{ ipa: "\u0254\u026a", spelling: "oy" }] },
        ],
      },
      {
        name: "ow",
        slug: "ow",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "cow", phonetic: "ka\u028a", meaning: "n. \u5976\u725b", audio: "/audio/phonics-vowel/vowel-o/cow.mp3", phonemeMap: [{ ipa: "a\u028a", spelling: "ow" }] },
          { word: "snow", phonetic: "sn\u0259\u028a", meaning: "n. \u96ea", audio: "/audio/phonics-vowel/vowel-o/snow.mp3", phonemeMap: [{ ipa: "\u0259\u028a", spelling: "ow" }] },
        ],
      },
      {
        name: "oa",
        slug: "oa",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "boat", phonetic: "b\u0259\u028at", meaning: "n. \u5c0f\u8239", audio: "/audio/phonics-vowel/vowel-o/boat.mp3", syllables: ["bo", "at"], phonemeMap: [{ ipa: "\u0259\u028a", spelling: "oa" }] },
        ],
      },
      {
        name: "o_e",
        slug: "o_e",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "home", phonetic: "h\u0259\u028am", meaning: "n. \u5bb6", audio: "/audio/phonics-vowel/vowel-o/home.mp3", syllables: ["hom", "e"], phonemeMap: [{ ipa: "\u0259\u028a", spelling: "o" }, { ipa: "\u0259\u028a", spelling: "e" }] },
        ],
      },
      {
        name: "oi",
        slug: "oi",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "coin", phonetic: "k\u0254\u026an", meaning: "n. \u786c\u5e01", audio: "/audio/phonics-vowel/vowel-o/coin.mp3", syllables: ["co", "in"], phonemeMap: [{ ipa: "\u0254\u026a", spelling: "oi" }] },
        ],
      },
      {
        name: "oo",
        slug: "oo",
        wordCount: 3, difficulty: 2,
        words: [
          { word: "moon", phonetic: "mu\u02d0n", meaning: "n. \u6708\u4eae", audio: "/audio/phonics-vowel/vowel-o/moon.mp3", syllables: ["mo", "on"], phonemeMap: [{ ipa: "u\u02d0", spelling: "oo" }] },
          { word: "book", phonetic: "b\u028ak", meaning: "n. \u4e66", audio: "/audio/phonics-vowel/vowel-o/book.mp3", syllables: ["bo", "ok"], phonemeMap: [{ ipa: "\u028a", spelling: "oo" }] },
          { word: "blood", phonetic: "bl\u028cd", meaning: "n. \u8840", audio: "/audio/phonics-vowel/vowel-o/blood.mp3", syllables: ["blo", "od"], phonemeMap: [{ ipa: "\u028c", spelling: "oo" }] },
        ],
      },
      {
        name: "ou",
        slug: "ou",
        wordCount: 3, difficulty: 2,
        words: [
          { word: "house", phonetic: "ha\u028as", meaning: "n. \u623f\u5b50", audio: "/audio/phonics-vowel/vowel-o/house.mp3", syllables: ["ho", "use"], phonemeMap: [{ ipa: "a\u028a", spelling: "ou" }] },
          { word: "you", phonetic: "ju\u02d0; j\u028a", meaning: "pron. \u4f60", audio: "/audio/phonics-vowel/vowel-o/you.mp3", syllables: ["y", "ou"], phonemeMap: [{ ipa: "u\u02d0", spelling: "ou" }] },
          { word: "though", phonetic: "\u00f0\u0259\u028a", meaning: "conj. \u867d\u7136", audio: "/audio/phonics-vowel/vowel-o/though.mp3", syllables: ["tho", "ugh"], phonemeMap: [{ ipa: "\u0259\u028a", spelling: "ou" }] },
        ],
      },
      {
        name: "oar / oor / oul / our / ure",
        slug: "oar|oor|oul|our|ure",
        wordCount: 8, difficulty: 2,
        words: [
          { word: "door", phonetic: "d\u0254\u02d0(r)", meaning: "n. \u95e8", audio: "/audio/phonics-vowel/vowel-o/door.mp3", syllables: ["do", "or"], phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "oor" }] },
          { word: "board", phonetic: "b\u0254\u02d0d", meaning: "n. \u6728\u677f", audio: "/audio/phonics-vowel/vowel-o/board.mp3", syllables: ["bo", "ard"], phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "oar" }] },
          { word: "could", phonetic: "k\u028ad; k\u0259d", meaning: "aux. \u80fd\uff08can \u7684\u8fc7\u53bb\u5f0f\uff09", audio: "/audio/phonics-vowel/vowel-o/could.mp3", syllables: ["co", "uld"], phonemeMap: [{ ipa: "\u028a", spelling: "oul" }] },
          { word: "should", phonetic: "\u0283\u028ad; \u0283\u0259d", meaning: "aux. \u5e94\u8be5", audio: "/audio/phonics-vowel/vowel-o/should.mp3", syllables: ["sho", "uld"], phonemeMap: [{ ipa: "u\u02d0", spelling: "oul" }] },
          { word: "hour", phonetic: "\u02c8a\u028a\u0259(r)", meaning: "n. \u5c0f\u65f6", audio: "/audio/phonics-vowel/vowel-o/hour.mp3", syllables: ["ho", "ur"], phonemeMap: [{ ipa: "a\u028a\u0259", spelling: "our" }] },
          { word: "four", phonetic: "f\u0254\u02d0(r)", meaning: "num. \u56db", audio: "/audio/phonics-vowel/vowel-o/four.mp3", syllables: ["fo", "ur"], phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "our" }] },
          { word: "journey", phonetic: "\u02c8d\u0292\u025c\u02d0ni", meaning: "n. \u65c5\u884c", audio: "/audio/phonics-vowel/vowel-o/journey.mp3", syllables: ["jour", "ney"], phonemeMap: [{ ipa: "\u025c\u02d0", spelling: "our" }] },
          { word: "cure", phonetic: "kj\u028a\u0259(r)", meaning: "v. \u6cbb\u6108", audio: "/audio/phonics-vowel/vowel-o/cure.mp3", syllables: ["cur", "e"], phonemeMap: [{ ipa: "j\u028a\u0259", spelling: "ure" }] },
        ],
      },
    ],
  },
  {
    name: "元音 U",
    emoji: "🔤",
    slug: "vowel-u",
    description: "u 行元音组合 · 10 词",
    tests: [
      {
        name: "ur",
        slug: "ur",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "fur", phonetic: "f\u025c\u02d0(r)", meaning: "n. \u6bdb\u76ae", audio: "/audio/phonics-vowel/vowel-u/fur.mp3", phonemeMap: [{ ipa: "\u025c\u02d0", spelling: "ur" }] },
          { word: "surprise", phonetic: "s\u0259\u02c8pra\u026az", meaning: "n. \u60ca\u8bb6", audio: "/audio/phonics-vowel/vowel-u/surprise.mp3", syllables: ["sur", "prise"], phonemeMap: [{ ipa: "\u0259", spelling: "ur" }] },
        ],
      },
      {
        name: "uy",
        slug: "uy",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "buy", phonetic: "ba\u026a", meaning: "v. \u4e70", audio: "/audio/phonics-vowel/vowel-u/buy.mp3", syllables: ["bu", "y"], phonemeMap: [{ ipa: "a\u026a", spelling: "uy" }] },
        ],
      },
      {
        name: "u_e / ue",
        slug: "u_e|ue",
        wordCount: 4, difficulty: 2,
        words: [
          { word: "use", phonetic: "ju\u02d0z", meaning: "v. \u4f7f\u7528", audio: "/audio/phonics-vowel/vowel-u/use.mp3", phonemeMap: [{ ipa: "ju\u02d0", spelling: "u" }, { ipa: "ju\u02d0", spelling: "e" }] },
          { word: "rule", phonetic: "ru\u02d0l", meaning: "n. \u89c4\u5219", audio: "/audio/phonics-vowel/vowel-u/rule.mp3", phonemeMap: [{ ipa: "u\u02d0", spelling: "u" }, { ipa: "u\u02d0", spelling: "e" }] },
          { word: "cue", phonetic: "kju\u02d0", meaning: "n. \u63d0\u793a", audio: "/audio/phonics-vowel/vowel-u/cue.mp3", phonemeMap: [{ ipa: "ju\u02d0", spelling: "ue" }] },
          { word: "blue", phonetic: "blu\u02d0", meaning: "adj. \u84dd\u8272\u7684", audio: "/audio/phonics-vowel/vowel-u/blue.mp3", phonemeMap: [{ ipa: "u\u02d0", spelling: "ue" }] },
        ],
      },
      {
        name: "ui",
        slug: "ui",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "build", phonetic: "b\u026ald", meaning: "v. \u5efa\u9020", audio: "/audio/phonics-vowel/vowel-u/build.mp3", syllables: ["bu", "ild"], phonemeMap: [{ ipa: "\u026a", spelling: "ui" }] },
          { word: "fruit", phonetic: "fru\u02d0t", meaning: "n. \u6c34\u679c", audio: "/audio/phonics-vowel/vowel-u/fruit.mp3", syllables: ["fru", "it"], phonemeMap: [{ ipa: "u\u02d0", spelling: "ui" }] },
        ],
      },
      {
        name: "ure",
        slug: "ure",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "sure", phonetic: "\u0283\u028a\u0259(r); \u0283\u0254\u02d0(r)", meaning: "adj. \u786e\u4fe1\u7684", audio: "/audio/phonics-vowel/vowel-u/sure.mp3", syllables: ["sur", "e"], phonemeMap: [{ ipa: "j\u028a\u0259", spelling: "ure" }] },
        ],
      },
    ],
  },
]

export { T as PHONICS_VOWEL_CHAPTERS }

/** 按 chapter slug + test slug 查找组合单元 */
export function getPhonicsVowelTest(chapterSlug: string, testSlug: string): WhaleTest | undefined {
  const ch = T.find((c) => c.slug === chapterSlug)
  return ch?.tests.find((t) => t.slug === testSlug)
}
