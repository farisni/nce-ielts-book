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
          { word: "are", phonetic: "\u0251\u02d0(r); \u0259(r)", meaning: "v. \u662f\uff08be \u7684\u7b2c\u4e8c\u4eba\u79f0\u5355\u590d\u6570\u73b0\u5728\u5f0f\uff09\uff1bn. \u516c\u4ea9", audio: "/audio/phonics-vowel/vowel-a/are.mp3", syllables: ["ar", "e"], phonemeMap: [{ ipa: "\u0251\u02d0", spelling: "ar" }] },
          { word: "warm", phonetic: "w\u0254\u02d0m", meaning: "adj./v. \u6e29\u6696\u7684/\uff08\u4f7f\uff09\u53d8\u6696", audio: "/audio/phonics-vowel/vowel-a/warm.mp3", phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "ar" }] },
          { word: "dollar", phonetic: "\u02c8d\u0252l\u0259(r)", meaning: "n.\u7f8e\u5143;", audio: "/audio/phonics-vowel/vowel-a/dollar.mp3", syllables: ["dol", "lar"], phonemeMap: [{ ipa: "\u0259", spelling: "ar" }] },
        ],
      },
      {
        name: "ay",
        slug: "ay",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "day", phonetic: "de\u026a", meaning: "n. \u4e00\u5929\uff1b\u767d\u663c\uff0c\u767d\u5929\uff1b\u5de5\u4f5c\u65e5\uff0c\u4e00\u5929\u7684\u6d3b\u52a8\u65f6\u95f4\uff1b\u65f6\u671f\uff0c\u65f6\u4ee3\uff1b\u5982\u4eca\uff0c\u73b0\u5728\uff1b\uff08\u8fc7\u53bb\u6216\u5c06\u6765\u7684\uff09\u4e00\u5929\uff1b\u91cd\u5927\u65e5\u5b50\uff1b\u592a\u9633\u65e5\uff1b\u6052\u661f\u65e5\uff1b\uff08\u5929\u4f53\uff09\u767d\u663c\uff1b<\u53e4>\u65e5\u5149\uff1badj. \u767d\u663c\u7684\uff0c\u65e5\u95f4\u7684\uff1b\uff08\u4eba\uff09\u65e5\u95f4\u5de5\u4f5c\u7684\uff0c\u4e0a\u767d\u73ed\u7684", audio: "/audio/phonics-vowel/vowel-a/day.mp3", syllables: ["da", "y"], phonemeMap: [{ ipa: "e\u026a", spelling: "ay" }] },
        ],
      },
      {
        name: "aw",
        slug: "aw",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "saw", phonetic: "s\u0254\u02d0", meaning: "n. \u952f", audio: "/audio/phonics-vowel/vowel-a/saw.mp3", phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "aw" }] },
        ],
      },
      {
        name: "al",
        slug: "al",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "ball", phonetic: "b\u02c8\u0254l", meaning: "\u7403\uff0c\u821e\u4f1a", audio: "/audio/phonics-vowel/vowel-a/ball.mp3", phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "al" }] },
          { word: "half", phonetic: "h\u0251\u02d0f", meaning: "n. \u4e00\u534a\uff0c\u4e8c\u5206\u4e4b\u4e00\uff1b\u534a\u573a\uff0c\u534a\u5c40\uff1b\uff08\u8db3\u7403\u3001\u6a44\u6984\u7403\u7b49\u7684\uff09\u4e2d\u573a\u961f\u5458\uff1b<\u82f1\uff0c\u975e\u6b63\u5f0f>\u534a\u54c1\u8131\uff1b<\u82f1\uff0c\u975e\u6b63\u5f0f>\u513f\u7ae5\u534a\u7968\uff1b<\u82f1>\u534a\u5b66\u5e74\uff0c\u4e00\u5b66\u671f\uff1b\uff08\u9ad8\u5c14\u592b\uff09\u4e00\u7a74\u51fb\u7403\u5f97\u5206\u4e0e\u5bf9\u624b\u76f8\u7b49\uff1bpron. \u4e00\u534a\uff1b\uff08\u65f6\u95f4\uff09\u2026\u2026\u70b9\u534a\uff08=half past\uff09\uff1b\u5927\u91cf\uff0c\u8bb8\u591a", audio: "/audio/phonics-vowel/vowel-a/half.mp3", phonemeMap: [{ ipa: "\u0251\u02d0", spelling: "al" }] },
        ],
      },
      {
        name: "a_e",
        slug: "a_e",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "make", phonetic: "me\u026ak", meaning: "v. \u5236\u9020\uff1b\u5236\u5b9a\uff0c\u62df\u5b9a\uff1b\u4f7f\u53d8\u5f97\uff0c\u4f7f\u5904\u4e8e\uff1b\u9020\u6210\uff0c\u5f15\u8d77\uff1b\u6574\u7406\uff08\u5e8a\u94fa\uff09\uff1b\u505a\uff0c\u4f5c\u51fa\uff1b\u5f3a\u8feb\uff1b\u6311\u9009\uff0c\u4efb\u547d\uff1b\u6210\u4e3a\uff0c\u9002\u5408\uff1b\u5408\u8ba1\uff0c\u7b49\u4e8e\uff1b\u8ba1\u7b97\uff0c\u4f30\u7b97\uff1b\u5b89\u6392\uff0c\u7ec4\u7ec7\uff1b\u8868\u73b0\uff0c\u63cf\u7ed8\uff1b\u6323\u94b1\uff0c\u8d5a\u94b1\uff1b\uff08\u4f53\u80b2\u6bd4\u8d5b\uff09\u5f97\u5206\uff1b\uff08\u5c3d\u529b\uff09\u8d76\u5f80\uff0c\u5230\u8fbe\uff1b\u6392\u6210 \uff08\u67d0\u56fe\u6848\uff09\uff1b\u4f7f\u5f62\u6210\uff0c\u7559\u4e0b\uff08\u5370\u8bb0\u3001\u6d1e\u7b49\uff09\uff1b\u4f7f\u6210\u529f\uff0c\u4f7f\u5706\u6ee1\uff1b\u5728\u2026\u2026\u5360\u4e00\u5e2d\u4e4b\u5730\uff1b\u4f3c\u4e4e\u8981\u505a\uff1b\u671d\uff08\u7279\u5b9a\u65b9\u5411\uff09\u8d70\u53bb\uff1b<\u7f8e\uff0c\u975e\u6b63\u5f0f>\u6c42\u6b22\uff1b\uff08\u6865\u724c\u7b49\uff09\u8d62\u4e00\u58a9\u724c\uff1b\uff08\u6f6e\uff09\u6da8\uff0c\uff08\u6f6e\uff09\u9000\uff1bn. \uff08\u673a\u5668\u3001\u8bbe\u5907\u7b49\u7684\uff09\u54c1\u724c\uff0c\u578b\u53f7\uff1b\u7ed3\u6784\uff0c\u6784\u9020\uff1b\u901a\u7535\uff0c\u63a5\u7535", audio: "/audio/phonics-vowel/vowel-a/make.mp3", phonemeMap: [{ ipa: "e\u026a", spelling: "a" }, { ipa: "e\u026a", spelling: "e" }] },
        ],
      },
      {
        name: "ai",
        slug: "ai",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "rain", phonetic: "re\u026an", meaning: "n.\u96e8;\u96e8\u6c34v.\u4e0b\u96e8;", audio: "/audio/phonics-vowel/vowel-a/rain.mp3", syllables: ["ra", "in"], phonemeMap: [{ ipa: "e\u026a", spelling: "ai" }] },
        ],
      },
      {
        name: "au",
        slug: "au",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "sauce", phonetic: "s\u0254\u02d0s", meaning: "n. \u9171\u6c41", audio: "/audio/phonics-vowel/vowel-a/sauce.mp3", syllables: ["sa", "uce"], phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "au" }] },
          { word: "laugh", phonetic: "l\u0251\u02d0f", meaning: "v. \u7b11\uff0c\u53d1\u7b11\uff1b\u5632\u7b11\uff0c\u4e0d\u4ee5\u4e3a\u7136\uff1b\u6109\u60a6\u5730\u8bf4\uff1b\u7528\u5632\u7b11\u4f7f\uff08\u67d0\u4eba\uff09\u79bb\u5f00\uff1b\uff08\u7279\u522b\u8868\u793a\u56e0\u6210\u529f\u800c\uff09\u5904\u4e8e\u6709\u5229\u5730\u4f4d\uff1bn. \u7b11\uff0c\u7b11\u58f0\uff1b\u4ee4\u4eba\u5f00\u5fc3\u7684\u65f6\u523b\uff1b\u5f15\u4eba\u53d1\u7b11\u7684\u4eba\u6216\u4e8b\uff0c\u7b11\u6599", audio: "/audio/phonics-vowel/vowel-a/laugh.mp3", syllables: ["la", "ugh"], phonemeMap: [{ ipa: "\u0251\u02d0", spelling: "au" }] },
        ],
      },
      {
        name: "air / an / are / augh",
        slug: "air|an|are|augh",
        wordCount: 5, difficulty: 2,
        words: [
          { word: "chair", phonetic: "t\u0283e\u0259(r)", meaning: "n.\u6905\u5b50;\u4e3b\u5e2d;\u6559\u6388\u7684\u804c\u4f4dv.\u4f7f\u5c31\u4efb\u8981\u804c;\u4e3b\u6301;", audio: "/audio/phonics-vowel/vowel-a/chair.mp3", syllables: ["cha", "ir"], phonemeMap: [{ ipa: "e\u0259", spelling: "air" }] },
          { word: "care", phonetic: "ke\u0259(r)", meaning: "n.\u5173\u5fc3;\u5c0f\u5fc3v.\u5173\u5fc3;\u5173\u7167;\u5728\u4e4e;", audio: "/audio/phonics-vowel/vowel-a/care.mp3", phonemeMap: [{ ipa: "e\u0259", spelling: "are" }] },
          { word: "caught", phonetic: "k\u0254\u02d0t", meaning: "v. \u6355\u6349\uff08catch \u7684\u8fc7\u53bb\u5206\u8bcd\uff09", audio: "/audio/phonics-vowel/vowel-a/caught.mp3", syllables: ["ca", "ught"], phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "augh" }] },
          { word: "man", phonetic: "m\u00e6n", meaning: "n. \u6210\u5e74\u7537\u5b50\uff0c\u7537\u4eba\uff1b\u4eba\u7c7b\uff1b\uff08\u4e0d\u8bba\u6027\u522b\u7684\uff09\u4eba\uff1b\uff08\u6765\u81ea\u67d0\u5730\u3001\u4ece\u4e8b\u67d0\u79cd\u5de5\u4f5c\u7684\uff09\u4eba\uff1b\uff08\u559c\u6b22\u67d0\u4e8b\u7684\uff09\u4eba \uff1b \uff08\u652f\u6301\u67d0\u7ec4\u7ec7\u6216\u4e3a\u5176\u5de5\u4f5c\u7684\uff09\u4eba\uff1b\u58eb\u5175\uff0c\uff08\u7537\u6027\uff09\u5de5\u4eba \uff1b\u4e0a\u95e8\u670d\u52a1\u7684\u4eba\uff1b\u4f19\u8ba1\uff0c\u54e5\u513f\u4eec\uff1b\uff08\u8868\u793a\u4e0d\u8010\u70e6\u6216\u751f\u6c14\uff09\u4f60\u8fd9\u5bb6\u4f19\uff1b\u4e08\u592b\uff0c\u7537\u53cb\uff1b\u7537\u5b50\u6c49\uff0c\u5927\u4e08\u592b\uff1b\u68cb\u5b50\uff1b<\u975e\u6b63\u5f0f>\u5934\u5934\uff0c\u8001\u677f\uff0c\u8b66\u5bdf\uff08the Man\uff09\uff1bv. \u8d1f\u8d23\uff0c\u64cd\u63a7\uff08\u67d0\u7269\uff09", audio: "/audio/phonics-vowel/vowel-a/man.mp3", phonemeMap: [{ ipa: "\u00e6n", spelling: "an" }] },
          { word: "organ", phonetic: "\u02c8\u0254\u02d0\u0261\u0259n", meaning: "n. \u5668\u5b98;\u673a\u6784;\u98ce\u7434", audio: "/audio/phonics-vowel/vowel-a/organ.mp3", syllables: ["or", "gan"], phonemeMap: [{ ipa: "\u0259n", spelling: "an" }] },
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
          { word: "her", phonetic: "h\u025c\u02d0(r); h\u0259(r)", meaning: "pron. \u5979\uff08she\u7684\u5bbe\u683c\uff09\uff1b\u5979\u7684\uff08she\u7684\u6240\u6709\u683c\uff09\uff1b\u5979\uff08\u6307\u67d0\u4e2a\u56fd\u5bb6\uff1b\u4e00\u8258\u8239\uff09\uff1bn. \uff08\u6cd5\uff09\u57c3\u5c14\uff08\u4eba\u540d\uff09", audio: "/audio/phonics-vowel/vowel-e/her.mp3", phonemeMap: [{ ipa: "\u025c\u02d0", spelling: "er" }] },
          { word: "teacher", phonetic: "\u02c8ti\u02d0t\u0283\u0259(r)", meaning: "n.\u6559\u5e08;", audio: "/audio/phonics-vowel/vowel-e/teacher.mp3", syllables: ["tea", "cher"], phonemeMap: [{ ipa: "\u0259", spelling: "er" }] },
        ],
      },
      {
        name: "ey",
        slug: "ey",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "they", phonetic: "\u00f0e\u026a", meaning: "pron. \u4ed6\u4eec\uff1b\u5b83\u4eec\uff1b\u5979\u4eec", audio: "/audio/phonics-vowel/vowel-e/they.mp3", syllables: ["the", "y"], phonemeMap: [{ ipa: "e\u026a", spelling: "ey" }] },
          { word: "key", phonetic: "ki\u02d0", meaning: "n.\u94a5\u5319;\u5173\u952eadj.\u5173\u952e\u7684;", audio: "/audio/phonics-vowel/vowel-e/key.mp3", syllables: ["ke", "y"], phonemeMap: [{ ipa: "i\u02d0", spelling: "ey" }] },
        ],
      },
      {
        name: "ew",
        slug: "ew",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "new", phonetic: "nju\u02d0", meaning: "adj. \u65b0\u51fa\u73b0\u7684\uff0c\u65b0\u5174\u7684\uff1b\u65b0\u4e70\u7684\uff1b\u672a\u7528\u8fc7\u7684\uff0c\u5d2d\u65b0\u7684\uff1b\u6709\u522b\u4e8e\u4ece\u524d\u7684\uff0c\u65b0\u9896\u7684\uff1b\u65b0\u53d1\u73b0\u7684\uff0c\u65b0\u8fd1\u77e5\u9053\u7684\uff1b\u751f\u758f\u7684\uff0c\u672a\u4f53\u9a8c\u8fc7\u7684\uff1b\u73b0\u4ee3\u7684\uff0c\u6700\u65b0\u578b\u7684\uff1b\u65b0\u65f6\u671f\u7684\uff0c\u65b0\u5f00\u59cb\u7684\uff1b\u5bcc\u6709\u671d\u6c14\u7684\uff0c\u751f\u6c14\u52c3\u52c3\u7684\uff1b\u65f6\u9c9c\u7684\uff08\u852c\u83dc\uff09\uff1b\u66f4\u65b0\u7684\uff0c\u53d8\u6837\u7684\uff1badv. \uff08\u7528\u4e8e\u6784\u6210\u590d\u5408\u8bcd\uff09\u65b0\u7684\uff0c\u65b0\u8fd1\u7684", audio: "/audio/phonics-vowel/vowel-e/new.mp3", phonemeMap: [{ ipa: "ju\u02d0", spelling: "ew" }] },
          { word: "blew", phonetic: "blu\u02d0", meaning: "blow \u7684\u8fc7\u53bb\u5f0f", audio: "/audio/phonics-vowel/vowel-e/blew.mp3", phonemeMap: [{ ipa: "u\u02d0", spelling: "ew" }] },
        ],
      },
      {
        name: "ea",
        slug: "ea",
        wordCount: 4, difficulty: 2,
        words: [
          { word: "tea", phonetic: "ti\u02d0", meaning: "n.\u8336;\u8336\u53f6;\u8336\u6c34;", audio: "/audio/phonics-vowel/vowel-e/tea.mp3", syllables: ["te", "a"], phonemeMap: [{ ipa: "i\u02d0", spelling: "ea" }] },
          { word: "bread", phonetic: "bred", meaning: "n. \u9762\u5305\uff1b\uff08\u901a\u8fc7\u5de5\u4f5c\u7b49\u6323\u5f97\u7684\uff09\u94b1\u8d22\uff1bv. \u5728\u2026\u2026\u4e0a\u6492\u9762\u5305\u5c51", audio: "/audio/phonics-vowel/vowel-e/bread.mp3", syllables: ["bre", "ad"], phonemeMap: [{ ipa: "e", spelling: "ea" }] },
          { word: "break", phonetic: "bre\u026ak", meaning: "v.\u6253\u7834;\u6253\u65ad;\u4f11\u606fn.\u4e2d\u65ad;\u4f11\u606f;\u7834\u88c2;", audio: "/audio/phonics-vowel/vowel-e/break.mp3", syllables: ["bre", "ak"], phonemeMap: [{ ipa: "e\u026a", spelling: "ea" }] },
          { word: "theatre", phonetic: "\u02c8\u03b8\u026a\u0259t\u0259(r)", meaning: "n.\u5267\u573a;\u7535\u5f71\u9662;", audio: "/audio/phonics-vowel/vowel-e/theatre.mp3", syllables: ["the", "atre"], phonemeMap: [{ ipa: "\u026a\u0259", spelling: "ea" }] },
        ],
      },
      {
        name: "e_e / ee",
        slug: "e_e|ee",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "these", phonetic: "\u00f0i\u02d0z", meaning: "det. \u8fd9\u4e9b\uff08this \u7684\u590d\u6570\uff09\uff1bpron. \u8fd9\u4e9b\uff08this \u7684\u590d\u6570\uff09", audio: "/audio/phonics-vowel/vowel-e/these.mp3", phonemeMap: [{ ipa: "i\u02d0", spelling: "e" }, { ipa: "i\u02d0", spelling: "e" }] },
          { word: "see", phonetic: "si\u02d0", meaning: "v. \u770b\u89c1\uff0c\u770b\u5230\uff1b\u6709\u89c6\u529b\uff0c\u770b\u5f97\u89c1\uff1b\u770b\uff08\u7535\u5f71\u6216\u7535\u89c6\u8282\u76ee\uff09\uff1b\u6ce8\u610f\u5230\uff0c\u770b\u51fa\uff1b\u4e86\u89e3\uff0c\u53d1\u73b0\uff1b\u8bbe\u60f3\uff0c\u9884\u6d4b\uff1b\u8003\u8651\uff0c\u5b9a\u593a\uff1b\u7406\u89e3\uff0c\u8ba4\u8bc6\u5230\uff1b\u53c2\u9605\uff0c\u53c2\u89c1\uff1b\u9605\u8bfb\uff1b\u8ba4\u4e3a\uff0c\u770b\u5f85\uff1b\u770b\u671b\uff0c\u63a2\u8bbf\uff1b\u9047\u89c1\uff0c\u78b0\u89c1\uff1b\u4f1a\u89c1\uff0c\u4f1a\u6664\uff1b\u4ea4\u5f80\uff1b\u786e\u4fdd\uff0c\u67e5\u660e\uff1b\u7ecf\u5386\uff0c\u906d\u53d7\uff1b \uff08\u5730\u70b9\u6216\u65f6\u95f4\uff09\u76ee\u7779\uff0c\u89c1\u8bc1\uff1b\u5e2e\u52a9\uff08\u6216\u652f\u6301\uff09\u2026\u2026\u5ea6\u8fc7\uff1b\u9001\uff0c\u62a4\u9001\uff1b\u4e0e\uff08\u5bf9\u65b9\uff09\u4e0b\u540c\u6837\u8d4c\u6ce8\uff1b\u770b\uff08\u7528\u4e8e\u53e3\u8bed\uff0c\u5f15\u5bfc\u6ce8\u610f\u529b\uff09\uff1b\u770b\u4e0a\uff08see sth. in\uff09\uff1bn. \u4e3b\u6559\u6559\u533a", audio: "/audio/phonics-vowel/vowel-e/see.mp3", phonemeMap: [{ ipa: "i\u02d0", spelling: "ee" }] },
        ],
      },
      {
        name: "ei",
        slug: "ei",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "receive", phonetic: "r\u026a\u02c8si\u02d0v", meaning: "v. \u5f97\u5230\uff0c\u6536\u5230\uff1b\u906d\u53d7\uff0c\u7ecf\u53d7\uff08\u7279\u5b9a\u5f85\u9047\uff09\uff1b\u5bf9\u2026\u2026\u4f5c\u51fa\u53cd\u5e94\uff1b\u63a5\u5f85\uff0c\u62db\u5f85\uff1b\u63a5\u6536\uff08\u67d0\u4eba\u4e3a\u6210\u5458\uff09\uff1b\u63a5\u6536\uff0c\u6536\u542c\uff08\u4fe1\u53f7\uff09\uff1b\uff08\u901a\u8fc7\u65e0\u7ebf\u7535\uff09\u542c\u5230\uff1b\u8d2d\u4e70\uff0c\u7a9d\u85cf\uff08\u8d43\u7269\uff09\uff1b\u63a5\uff08\u7403\uff09\uff1b\u9886\u53d7\uff08\u5723\u9910\u9762\u5305\u6216\u8461\u8404\u9152\uff09\uff1b\u63a5\u53d7\uff08\u6cbb\u7597\uff09\uff1b\u5f62\u6210\uff08\u770b\u6cd5\uff0c\u5370\u8c61\uff09\uff1b\u5bb9\u7eb3\uff0c\u627f\u63a5", audio: "/audio/phonics-vowel/vowel-e/receive.mp3", syllables: ["rece", "ive"], phonemeMap: [{ ipa: "i\u02d0", spelling: "ei" }] },
          { word: "vein", phonetic: "ve\u026an", meaning: "n. \u9759\u8109\uff1b\uff08\u690d\u7269\u7684\uff09\u53f6\u8109\uff0c\uff08\u6606\u866b\u7684\uff09\u7fc5\u8109\uff1b\uff08\u5e72\u916a\u3001\u77f3\u5934\u7b49\u7684\uff09\u7eb9\u7406\uff0c\u7eb9\u8def\uff1b\u77ff\u8109\uff0c\u77ff\u5c42\uff0c\u5ca9\u8109\uff1b\uff08\u67d0\u79cd\u7279\u5b9a\u7684\uff09\u60c5\u7eea\uff0c\u98ce\u683c\uff0c\u4e3b\u9898\uff1b\u51e0\u5206\uff1b\uff08\u666e\u901a\u7528\u8bed\u6216\u6bd4\u55bb\u7528\u6cd5\uff09\u8840\u7ba1\uff1bv. \u4f7f\u6210\u8109\u7edc\uff1b\u50cf\u8109\u7edc\u822c\u5206\u5e03\u4e8e", audio: "/audio/phonics-vowel/vowel-e/vein.mp3", syllables: ["ve", "in"], phonemeMap: [{ ipa: "e\u026a", spelling: "ei" }] },
        ],
      },
      {
        name: "ear / eer / eigh / en / ere",
        slug: "ear|eer|eigh|en|ere",
        wordCount: 10, difficulty: 2,
        words: [
          { word: "hear", phonetic: "h\u026a\u0259(r)", meaning: "v. \u542c\u5230\uff0c\u542c\u89c1\uff1b\u8046\u542c\uff0c\u503e\u542c\uff1b\u542c\u8bf4\uff0c\u5f97\u77e5\uff1b\u5ba1\u7406\uff0c\u542c\u5ba1\uff1b\u8111\u9645\u54cd\u8d77\uff1b\u542c\u660e\u767d", audio: "/audio/phonics-vowel/vowel-e/hear.mp3", syllables: ["he", "ar"], phonemeMap: [{ ipa: "\u026a\u0259", spelling: "ear" }] },
          { word: "bear", phonetic: "be\u0259(r)", meaning: "n. \u718a", audio: "/audio/phonics-vowel/vowel-e/bear.mp3", syllables: ["be", "ar"], phonemeMap: [{ ipa: "e\u0259", spelling: "ear" }] },
          { word: "earth", phonetic: "\u02c8\u025c\u03b8", meaning: "\u5730\u7403", audio: "/audio/phonics-vowel/vowel-e/earth.mp3", syllables: ["e", "arth"], phonemeMap: [{ ipa: "\u025c\u02d0", spelling: "ear" }] },
          { word: "heart", phonetic: "h\u0251\u02d0t", meaning: "n.\u5fc3;\u5fc3\u810f;", audio: "/audio/phonics-vowel/vowel-e/heart.mp3", syllables: ["he", "art"], phonemeMap: [{ ipa: "\u0251\u02d0", spelling: "ear" }] },
          { word: "deer", phonetic: "d\u026a\u0259(r)", meaning: "n. \u9e7f\uff1bn. \uff08Deer\uff09\u4eba\u540d\uff1b\uff08\u82f1\uff09\u8fea\u5c14", audio: "/audio/phonics-vowel/vowel-e/deer.mp3", syllables: ["de", "er"], phonemeMap: [{ ipa: "\u026a\u0259", spelling: "eer" }] },
          { word: "here", phonetic: "h\u026a\u0259(r)", meaning: "adv. \u5728\u8fd9\u91cc\uff1b\u6b64\u65f6\uff1bint. \u563f\uff01\uff1b\u5582\uff01", audio: "/audio/phonics-vowel/vowel-e/here.mp3", phonemeMap: [{ ipa: "\u026a\u0259", spelling: "ere" }] },
          { word: "there", phonetic: "\u00f0e\u0259(r)", meaning: "adv. \u5728\u90a3\u91cc\uff1b\u5728\u90a3\u8fb9\uff1b\u5728\u90a3\u70b9\u4e0a\uff1bint. \u4f60\u77a7", audio: "/audio/phonics-vowel/vowel-e/there.mp3", phonemeMap: [{ ipa: "e\u0259", spelling: "ere" }] },
          { word: "eight", phonetic: "e\u026at", meaning: "num. \u516b\uff1b\u516b\u4e2a\uff1b\u7b2c\u516b\uff1b\u516b\u5c81\uff1b\u516b\u70b9\uff1badj. \u516b\u7684", audio: "/audio/phonics-vowel/vowel-e/eight.mp3", syllables: ["e", "ight"], phonemeMap: [{ ipa: "e\u026a", spelling: "eigh" }] },
          { word: "open", phonetic: "\u02c8\u0259\u028ap\u0259n", meaning: "adj. \u5f00\u653e\u7684\uff0c\u8425\u4e1a\u7684\uff1b\u5f00\u7740\u7684\uff0c\u655e\u5f00\u7684\uff1b\uff08\u8eab\u4f53\u90e8\u4f4d\uff09\u5f20\u5f00\u7684\uff1b\u9732\u5929\u7684\uff0c\u65e0\u906e\u76d6\u7684\uff1b\u5f00\u9614\u7684\uff0c\u672a\u56f4\u4e0a\u7684\uff1b\u53ef\u901a\u884c\u7684\uff0c\u7545\u901a\u7684\uff1b\u4f38\u5f00\u7684\uff0c\u5c55\u5f00\u7684\uff1b\u5766\u7387\u7684\uff1b\u4e0d\u4fdd\u5bc6\u7684\uff0c\u516c\u5f00\u7684\uff1b\u6613\u53d7\u5f71\u54cd\u7684\uff0c\u6613\u53d7\u653b\u51fb\u7684\uff1b\u4eba\u4eba\u53ef\u4ee5\u53c2\u52a0\u7684\uff1b\uff08\u5bf9\u7279\u5b9a\u7fa4\u4f53\uff09\u5f00\u653e\u7684 \uff1b\u53ef\u5f97\u5230\u7684\uff0c\u53ef\u4f7f\u7528\u7684\uff1b\u601d\u60f3\u5f00\u660e\u7684\uff1b\u5c1a\u672a\u51b3\u5b9a\u7684\uff1b\uff08\u6587\u4ef6\u5939\u3001\u6587\u6863\u7b49\uff09\u6b63\u5728\u4f7f\u7528\u4e2d\u7684\uff1b\uff08\u80dc\u5229\u8005\uff09\u8d62\u5f97\u516c\u5f00\u8d5b\u7684\uff1b\uff08\u7968\u5b50\uff09\u672a\u6ce8\u660e\u65c5\u884c\u65e5\u671f\u7684\uff1b<\u82f1>\uff08\u652f\u7968\uff09\u672a\u7b7e\u6ce8\u7684\uff1b\uff08\u6570\uff09\uff08\u96c6\u5408\uff09\u5f00\u7684\uff1b\uff08\u5143\u97f3\uff09\u5f00\u7684\uff1b\uff08\u4e50\uff09\u5f00\u653e\u7684 \uff1b\uff08\u7535\u8def\uff09\u5f00\u8def\u7684\uff0c\u65ad\u8def\u7684\uff1b\uff08\u7eba\u7ec7\u54c1\uff09\u677e\u6563\u7684\uff1bv. \u5f00\uff0c\u6253\u5f00\uff1b\u5f00\u5c01\uff0c\u5f00\u542f\uff1b\u7741\u5f00\uff08\u773c\u775b\uff09\uff0c\u5f20\u5f00\uff08\u5634\u5df4\uff09\uff1b\u7ffb\u5f00\uff0c\u5c55\u5f00\uff1b\u5f00\u901a\uff0c\u5f00\u653e\uff1b\u5f00\u95e8\uff0c\u8425\u4e1a \uff1b\u5f00\u4e1a\uff0c\u5f00\u5e55\uff1b\uff08\u80a1\u5e02\uff09\u5f00\u76d8\uff0c\u5f00\u5e02\uff1b\u7740\u624b\uff0c\u5f00\u59cb\uff1b\u542f\u52a8\uff08\u8ba1\u7b97\u673a\u7a0b\u5e8f\u6216\u6587\u4ef6\uff09\uff1b\u5f00\u7acb\u8d26\u6237\uff1b\u901a\u5f80\uff0c\u901a\u5411\uff1b\u5c55\u73b0\uff0c\u51fa\u73b0\uff1b\u4f7f\u67d0\u4eba\u66f4\u4e50\u610f\u8003\u8651\u67d0\u4e8b\uff1b\u65ad\u5f00\uff08\u7535\u8def\uff09\uff1b\u7545\u8c08", audio: "/audio/phonics-vowel/vowel-e/open.mp3", syllables: ["o", "pen"], phonemeMap: [{ ipa: "\u0259n", spelling: "en" }] },
          { word: "hen", phonetic: "hen", meaning: "n.\u6bcd\u9e21;", audio: "/audio/phonics-vowel/vowel-e/hen.mp3", phonemeMap: [{ ipa: "en", spelling: "en" }] },
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
          { word: "bird", phonetic: "b\u025c\u02d0d", meaning: "n. \u9e1f\uff1b\u5e74\u8f7b\u5973\u5b50\uff0c\u59d1\u5a18\uff1b\u4eba\uff0c\u5bb6\u4f19\uff1b\u98de\u673a\uff0c\u98de\u8239\uff0c\u536b\u661f\uff1b\u4f9b\u6355\u730e\uff08\u6216\u98df\u7528\uff09\u7684\u9e1f\uff1b\u7fbd\u6bdb\u7403\uff1b<\u82f1\uff0c\u975e\u6b63\u5f0f>\u76d1\u72f1\uff0c\u670d\u5211\u671f\uff08doing bird\uff09\uff1b\u559d\u5012\u5f69\uff0c\u8d77\u54c4\uff08give sb. the bird\uff09\uff1b\u3010\u540d\u3011 \uff08Bird\uff09\uff08\u82f1\u3001\u897f\uff09\u4f2f\u5fb7\uff08\u4eba\u540d\uff09", audio: "/audio/phonics-vowel/vowel-i/bird.mp3", phonemeMap: [{ ipa: "\u025c\u02d0", spelling: "ir" }] },
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
          { word: "like", phonetic: "la\u026ak", meaning: "prep. \u50cf\uff0c\u5982\u540c\uff1b\u7b26\u5408\u2026\u2026\u7684\u65b9\u5f0f\uff1b\uff08\u6307\u67d0\u4eba\u5e38\u505a\u7684\u4e8b\uff09\u7b26\u5408\u2026\u2026\u7684\u7279\u70b9\uff0c\u50cf\u2026\u2026\u624d\u4f1a\uff1b\uff08\u7528\u4e8e\u8be2\u95ee\uff09\u2026\u2026\u600e\u4e48\u6837\uff1b\u4f8b\u5982\uff0c\u597d\u6bd4\uff1b\uff08\u7528\u4e8e\u5426\u5b9a\u5f0f\u77ed\u8bed\u4e2d\uff09\u6bd4\u5f97\u4e0a\uff1b\u5927\u7ea6\uff0c\u5de6\u53f3\uff1bv. \u559c\u6b22\uff0c\u559c\u7231\uff1b\u5e0c\u671b\uff0c\u60f3\u8981\uff1b\uff08\u7528\u4e8e\u8bf7\u6c42\uff09\u60f3\u8981\uff0c\u5e0c\u671b\u5f97\u5230\uff1b\u559c\u6b22\uff08\u505a\u67d0\u4e8b\u3001\u4e60\u60ef\u67d0\u4e8b\uff09\uff1b\uff08\u7528\u4e8e\u8be2\u95ee\uff09\u4f60\u89c9\u5f97\u2026\u2026\u600e\u4e48\u6837\uff1b\u5bf9\u2026\u2026\u53cd\u611f\uff0c\u8ba8\u538c\uff1b\u559c\u597d\uff08\u67d0\u79cd\u73af\u5883\uff09", audio: "/audio/phonics-vowel/vowel-i/like.mp3", phonemeMap: [{ ipa: "a\u026a", spelling: "i" }, { ipa: "a\u026a", spelling: "e" }] },
          { word: "pie", phonetic: "pa\u026a", meaning: "n. \u9985\u997c\u3001\u6d3e", audio: "/audio/phonics-vowel/vowel-i/pie.mp3", phonemeMap: [{ ipa: "a\u026a", spelling: "ie" }] },
          { word: "field", phonetic: "fi\u02d0ld", meaning: "n. \u539f\u91ce\uff1b\u573a\u5730\uff1b\u91ce\u5916", audio: "/audio/phonics-vowel/vowel-i/field.mp3", syllables: ["fi", "eld"], phonemeMap: [{ ipa: "i\u02d0", spelling: "ie" }] },
        ],
      },
      {
        name: "igh / ign / in / ire",
        slug: "igh|ign|in|ire",
        wordCount: 4, difficulty: 2,
        words: [
          { word: "light", phonetic: "la\u026at", meaning: "n.\u5149;\u706f;\u5149\u7ebfadj.\u8f7b\u7684;\u6d45\u7684;\u660e\u4eae\u7684;\u5c11\u91cf\u7684v.\u70b9\u71c3;\u7167\u4eae;", audio: "/audio/phonics-vowel/vowel-i/light.mp3", phonemeMap: [{ ipa: "a\u026a", spelling: "igh" }] },
          { word: "fire", phonetic: "\u02c8fa\u026a\u0259(r)", meaning: "v./n. \u89e3\u96c7/\u706b", audio: "/audio/phonics-vowel/vowel-i/fire.mp3", syllables: ["fir", "e"], phonemeMap: [{ ipa: "a\u026a\u0259", spelling: "ire" }] },
          { word: "sign", phonetic: "sa\u026an", meaning: "n./v. \u7b26\u53f7\uff1b\u5f81\u5146\uff1b\u8ff9\u8c61\uff1b\u624b\u52bf\uff1b\u7b7e\uff08\u540d\uff09", audio: "/audio/phonics-vowel/vowel-i/sign.mp3", phonemeMap: [{ ipa: "a\u026an", spelling: "ign" }] },
          { word: "pin", phonetic: "p\u026an", meaning: "n./v. \u522b\u9488\uff1b\u5927\u5934\u9488\uff1b\u522b\u4f4f\uff0c\u9489\u4f4f", audio: "/audio/phonics-vowel/vowel-i/pin.mp3", phonemeMap: [{ ipa: "\u026an", spelling: "in" }] },
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
          { word: "for", phonetic: "f\u0254\u02d0(r); f\u0259(r)", meaning: "prep. \uff08\u8868\u793a\u5bf9\u8c61\u3001\u7528\u9014\u7b49\uff09\u7ed9\uff0c\u5bf9\uff1b\u4e3a\u4e86\uff0c\u4ee5\u5e2e\u52a9\uff1b\u4e3a\u4e86\uff08\u8868\u793a\u76ee\u7684\u3001\u7528\u9014\uff09\uff1b\uff08\u8868\u793a\u611f\u60c5\u7684\u5bf9\u8c61\uff09\u5bf9\u4e8e\uff1b\u4ee3\u8868\uff1b\u53d7\u96c7\u4e8e\uff1b\u610f\u601d\u662f\uff0c\u8868\u793a\uff1b\u652f\u6301\uff0c\u62e5\u62a4\uff1b\u56e0\u4e3a\uff0c\u7531\u4e8e\uff1b\u4e3a\u5f97\u5230\uff0c\u4e3a\u83b7\u53d6\uff1b\u6362\u53d6\uff1b\u5c31\u2026\u2026\u800c\u8a00\uff1b\u5bf9\uff08\u67d0\u4eba\uff09\u6765\u8bf4\uff1b\u2026\u2026\u540e\uff08\u66f4\u597d\u3001\u66f4\u5feb\u4e50\u7b49\uff09\uff1b\uff08\u8868\u793a\u53bb\u5411\uff09\u5f80\uff0c\u5411\uff1b\uff08\u7528\u6765\u8868\u793a\u65f6\u95f4\u6216\u8ddd\u79bb\uff09\u8fbe\uff0c\u8ba1\uff1b\uff08\u5b89\u6392\u6216\u9884\u5b9a\uff09\u5728\u2026\u2026\u65f6\uff1b\u4e3a \uff08\u67d0\u573a\u5408\u6216\u65f6\u95f4\uff09\uff1b\u7531\u2026\u2026\u8d1f\u8d23\uff1b\u8981\u4e0d\u662f\uff1b\u60f3\u8981\uff1b\u53d6\uff08\u67d0\u4eba\u7684\uff09\u540d\uff1b\u8868\u540d\u5355\u6216\u7cfb\u5217\u4e2d\u7684\u67d0\u4e9b\u90e8\u5206\uff1b\u8868\u6570\u5b57\u6216\u6570\u91cf\u95f4\u7684\u8054\u7cfb\uff1b\u8868\u4e00\u987f\u996d\u4e2d\u7684\u98df\u7269\uff1bconj. \u56e0\u4e3a\uff0c\u7531\u4e8e", audio: "/audio/phonics-vowel/vowel-o/for.mp3", phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "or" }] },
          { word: "work", phonetic: "w\u025c\u02d0k", meaning: "n. \u5de5\u4f5c\uff0c\u804c\u4e1a\uff1b\u52b3\u52a8\uff0c\u6d3b\u8ba1\uff1b\u804c\u8d23\uff0c\u5de5\u4f5c\u5185\u5bb9\uff1b\u4f5c\u54c1\uff0c\u8457\u4f5c\uff1b\u5de5\u4f5c\u6210\u679c\uff0c\u4f5c\u4e3a\uff1b\u5de5\u4f5c\u5730\u70b9\uff0c\u5de5\u4f5c\u65f6\u95f4\uff1b\u5de5\u4f5c\u6240\u9700\u7684\u6750\u6599\uff08\u6216\u6863\u6848\u7b49\uff09\uff1b\uff08\u673a\u5668\u7684\uff09\u6d3b\u52a8\u90e8\u4ef6\uff08the works\uff09\uff1b<\u975e\u6b63\u5f0f>\u6240\u6709\u4e1c\u897f\uff0c\u5168\u5957\u7269\u54c1\uff08the works\uff09\uff1b\u571f\u6728\u5de5\u7a0b\uff0c\u5efa\u7b51\uff08works\uff09\uff1b\u5de5\u5382\uff08works\uff09\uff1b\u5584\u884c\uff0c\u5fb7\u884c\uff08works\uff09\uff1b\u9632\u5fa1\u5de5\u4e8b\uff1b\uff08\u7269\u7406\u5b66\uff09\u529f\uff1b<\u975e\u6b63\u5f0f>\u6574\u5f62\u624b\u672f\uff1bv. \u5de5\u4f5c\uff0c\u5e72\u6d3b\u513f\uff1b\u4ece\u4e8b\u4f53\u529b\uff08\u6216\u8111\u529b\uff09\u52b3\u52a8\uff1b\u4ece\u4e8b\u2026\u2026\u5de5\u4f5c\uff0c\u5728\u2026\u2026\u5de5\u4f5c\uff1b\u52aa\u529b\u53d6\u5f97\uff0c\u529b\u4e89\uff1b\u8fd0\u8f6c\uff0c\u8fd0\u884c\uff1b\u5f00\u52a8\uff0c\u64cd\u4f5c\uff08\u673a\u5668\u3001\u88c5\u7f6e\u7b49\uff09\uff1b\u594f\u6548\uff0c\u6210\u529f\uff1b\u4ea7\u751f\u2026\u2026\u4f5c\u7528\uff1b\uff08\u4f7f\uff09\u53d8\u6210\uff0c\u9010\u6b65\u79fb\u52a8\uff1b\uff08\u4f7f\uff09\uff08\u8eab\u4f53\u67d0\u90e8\u4f4d\uff09\u62bd\u52a8\uff1b\uff08\u7528\u67d0\u79cd\u6750\u6599\uff09\u753b\u753b\uff0c\u521b\u4f5c\uff1b\u4f7f\u6210\u5f62\uff0c\u52a0\u5de5\uff1b\u535a\u5f97\uff0c\u8d62\u5f97\uff08\u4f17\u4eba\u7684\u652f\u6301\u6216\u6b22\u5fc3\uff09\uff1b<\u7f8e>\u8ba1\u7b97\uff0c\u7b97\u51fa\uff1b\u601d\u8003\uff0c\u52a8\u8111\u7b4b\uff1b\u4ee5\uff08\u67d0\u79cd\u5047\u5b9a\u6216\u601d\u60f3\uff09\u4e3a\u57fa\u7840\uff08\u6216\u524d\u63d0\uff09\uff1b<\u975e\u6b63\u5f0f>\u5b89\u6392\uff1b\u8015\u79cd\uff1b\u5f00\u91c7\uff08\u77ff\uff09", audio: "/audio/phonics-vowel/vowel-o/work.mp3", phonemeMap: [{ ipa: "\u025c\u02d0", spelling: "or" }] },
          { word: "doctor", phonetic: "\u02c8d\u0252kt\u0259(r)", meaning: "n. \u535a\u58eb\uff1b\u533b\u751f", audio: "/audio/phonics-vowel/vowel-o/doctor.mp3", syllables: ["doc", "tor"], phonemeMap: [{ ipa: "\u0259", spelling: "or" }] },
        ],
      },
      {
        name: "oy",
        slug: "oy",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "boy", phonetic: "b\u0254\u026a", meaning: "n. \u7537\u5b69\uff1b\u513f\u5b50\uff1b\u7537\u9752\u5e74\uff0c\u5c0f\u4f19\u5b50\uff1b\u7537\u6027\u670b\u53cb\u4eec\uff0c\u4e00\u7fa4\u7537\u4f19\u4f34\uff08the boys\uff09\uff1b\u4e00\u7fa4\u4ece\u4e8b\u540c\u4e00\u804c\u4e1a\u7684\u7537\u5b50\uff08boys\uff09\uff1b\uff08\u4ece\u4e8b\u67d0\u4e00\u804c\u4e1a\u7684\uff09\u7537\u5b50\uff1b\u5c0f\u5bb6\u4f19\uff08\u7528\u4e8e\u79f0\u547c\u96c4\u6027\u7684\u72d7\u6216\u9a6c\uff09\uff1b\u4f19\u8ba1\uff08\u5c24\u7528\u4e8e\u4eb2\u5207\u8c08\u8bba\u67d0\u4eba\u65f6\uff09\uff1b\uff08\u5c24\u6307\u5728\u6218\u573a\u4e0a\u4f5c\u6218\u7684\uff09\u58eb\u5175\uff0c\u6218\u53cb\uff1b\u6307\u79f0\u67d0\u5730\u7b49\u7684\u4eba\uff1b\u8fd0\u52a8\u961f\u961f\u5458\uff08the boys\uff09\uff1b\u5c0f\u5b50\uff08\u5bf9\u9ed1\u4eba\u7537\u6027\u7684\u5192\u72af\u8bed\uff09\uff1bint. \uff08\u5c24\u7528\u4e8e\u8868\u793a\u7fa1\u6155\u6216\u5174\u594b\uff09\u597d\u5bb6\u4f19\uff0c\u597d\u6837\u7684", audio: "/audio/phonics-vowel/vowel-o/boy.mp3", syllables: ["bo", "y"], phonemeMap: [{ ipa: "\u0254\u026a", spelling: "oy" }] },
        ],
      },
      {
        name: "ow",
        slug: "ow",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "cow", phonetic: "ka\u028a", meaning: "n. \u6bcd\u725b\uff0c\u5976\u725b\uff1b\u96cc\u6027\u52a8\u7269\uff1b<\u6fb3\u65b0>\u8ba8\u538c\u7684\u4eba\uff08\u6216\u4e8b\u7269\u3001\u60c5\u51b5\uff09\uff1bv. \u6050\u5413\uff0c\u5a01\u80c1", audio: "/audio/phonics-vowel/vowel-o/cow.mp3", phonemeMap: [{ ipa: "a\u028a", spelling: "ow" }] },
          { word: "snow", phonetic: "sn\u0259\u028a", meaning: "n. \u96ea\uff0c\u79ef\u96ea\uff1b\u964d\u96ea\uff0c\u4e00\u573a\u96ea\uff1b\u4e0b\u96ea\u5929\uff1b\uff08\u56e0\u4fe1\u53f7\u5dee\u51fa\u73b0\u5728\u7535\u89c6\u5c4f\u5e55\u7684\uff09\u201c\u96ea\u82b1\u201d\u5e72\u6270\uff1b\u4f3c\u96ea\u7684\u83dc\u80b4\uff1b\u4f3c\u96ea\u7684\u51b7\u51bb\u6c14\u4f53\uff1b<\u975e\u6b63\u5f0f>\u53ef\u5361\u56e0\uff1bv. \u4e0b\u96ea\uff0c\u98d8\u96ea\uff1b<\u7f8e\uff0c\u975e\u6b63\u5f0f>\uff08\u7528\u82b1\u8a00\u5de7\u8bed\uff09\u8499\u9a97\uff0c\u4f7f\u76f8\u4fe1\uff1b\u4f7f\u6d12\u843d\uff1b\u4f7f\u53d8\u767d", audio: "/audio/phonics-vowel/vowel-o/snow.mp3", phonemeMap: [{ ipa: "\u0259\u028a", spelling: "ow" }] },
        ],
      },
      {
        name: "oa",
        slug: "oa",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "boat", phonetic: "b\u0259\u028at", meaning: "n.\u5c0f\u8239v.\u5212\u8239;\u7528\u8239\u8fd0\u8f93;\u7528\u8239\u88c5\u8fd0;", audio: "/audio/phonics-vowel/vowel-o/boat.mp3", syllables: ["bo", "at"], phonemeMap: [{ ipa: "\u0259\u028a", spelling: "oa" }] },
        ],
      },
      {
        name: "o_e",
        slug: "o_e",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "home", phonetic: "h\u0259\u028am", meaning: "n. \u5bb6\uff0c\u4f4f\u5b85\uff1b\uff08\u53ef\u4e70\u5356\u7684\uff09\u623f\u5b50\uff0c\u5bd3\u6240\uff1b\u5bb6\u5ead\uff1b\u517b\u80b2\u9662\uff0c\u6536\u5bb9\u6240\uff1b\u9002\u4e8e\u5b58\u653e\u2026\u2026\u7684\u5730\u65b9\uff1b\u53d1\u6e90\u5730\uff0c\u53d1\u7965\u5730\uff1b\u6816\u606f\u5730\uff0c\u751f\u606f\u5730\uff1b\u5bb6\u4e61\uff0c\u7956\u56fd\uff1b\uff08\u7ec4\u7ec7\u3001\u516c\u53f8\u7b49\u7684\uff09\u672c\u90e8\uff0c\u57fa\u5730\uff1b\uff08\u6bd4\u8d5b\u7684\uff09\u4e3b\u573a\uff1badj. \u5bb6\u5ead\u7684\uff0c\u5bb6\u7528\u7684\uff1b\u5728\u5bb6\u91cc\u505a\uff08\u6216\u8fdb\u884c\uff09\u7684\uff1b\u672c\u56fd\u7684\uff0c\u56fd\u5185\u7684\uff1b\u5728\u4e3b\u573a\u8fdb\u884c\u7684\uff1b<\u7f8e>\u603b\u90e8\u7684", audio: "/audio/phonics-vowel/vowel-o/home.mp3", syllables: ["hom", "e"], phonemeMap: [{ ipa: "\u0259\u028a", spelling: "o" }, { ipa: "\u0259\u028a", spelling: "e" }] },
        ],
      },
      {
        name: "oi",
        slug: "oi",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "coin", phonetic: "k\u0254\u026an", meaning: "n./v. \u786c\u5e01/\u94f8\u5e01\uff1b\u521b\u9020\uff08\u65b0\u8bcd\u8bed\uff09", audio: "/audio/phonics-vowel/vowel-o/coin.mp3", syllables: ["co", "in"], phonemeMap: [{ ipa: "\u0254\u026a", spelling: "oi" }] },
        ],
      },
      {
        name: "oo",
        slug: "oo",
        wordCount: 3, difficulty: 2,
        words: [
          { word: "moon", phonetic: "mu\u02d0n", meaning: "n. \u6708\u4eae\uff0c\u6708\u7403\uff1b\u6708\u5149\uff1b\u536b\u661f\uff1b\u6708\u4efd\uff1b\u6e34\u671b\u4e4b\u7269\uff1b\u6708\u72b6\u7269\uff1bv. \u61d2\u6563\u5ea6\u65e5\uff0c\u6d6a\u8361\uff1b\u51fa\u795e\uff0c\u5446\u89c6\uff1b\uff08\u5411\u67d0\u4eba\uff09\u4eae\u5c41\u80a1\uff1b\u865a\u5ea6\uff08\u65f6\u95f4\uff09", audio: "/audio/phonics-vowel/vowel-o/moon.mp3", syllables: ["mo", "on"], phonemeMap: [{ ipa: "u\u02d0", spelling: "oo" }] },
          { word: "book", phonetic: "b\u028ak", meaning: "n.\u4e66;\u8d26\u7c3fv.\u9884\u8ba2;", audio: "/audio/phonics-vowel/vowel-o/book.mp3", syllables: ["bo", "ok"], phonemeMap: [{ ipa: "\u028a", spelling: "oo" }] },
          { word: "blood", phonetic: "bl\u028cd", meaning: "n.\u8840;\u8840\u6db2;\u8840\u7edf;", audio: "/audio/phonics-vowel/vowel-o/blood.mp3", syllables: ["blo", "od"], phonemeMap: [{ ipa: "\u028c", spelling: "oo" }] },
        ],
      },
      {
        name: "ou",
        slug: "ou",
        wordCount: 3, difficulty: 2,
        words: [
          { word: "house", phonetic: "ha\u028as", meaning: "n.\u623f\u5b50;\u623f\u5c4b;", audio: "/audio/phonics-vowel/vowel-o/house.mp3", syllables: ["ho", "use"], phonemeMap: [{ ipa: "a\u028a", spelling: "ou" }] },
          { word: "you", phonetic: "ju\u02d0; j\u028a", meaning: "pron. \u4f60\uff1b\u4f60\u4eec\uff1bn. \uff08You\uff09\u4eba\u540d\uff1b\uff08\u67ec\uff09\u5c24\uff1b\uff08\u4e1c\u5357\u4e9a\u56fd\u5bb6\u534e\u8bed\uff09\u7337", audio: "/audio/phonics-vowel/vowel-o/you.mp3", syllables: ["y", "ou"], phonemeMap: [{ ipa: "u\u02d0", spelling: "ou" }] },
          { word: "though", phonetic: "\u00f0\u0259\u028a", meaning: "conj.  \u867d\u7136\uff0c\u5c3d\u7ba1\uff1b\u53ef\u662f\uff0c\u4e0d\u8fc7\uff1badv. \u4e0d\u8fc7\uff0c\u53ef\u662f\uff0c\u7136\u800c", audio: "/audio/phonics-vowel/vowel-o/though.mp3", syllables: ["tho", "ugh"], phonemeMap: [{ ipa: "\u0259\u028a", spelling: "ou" }] },
        ],
      },
      {
        name: "oar / oor / oul / our / ure",
        slug: "oar|oor|oul|our|ure",
        wordCount: 8, difficulty: 2,
        words: [
          { word: "door", phonetic: "d\u0254\u02d0(r)", meaning: "n.\u95e8;", audio: "/audio/phonics-vowel/vowel-o/door.mp3", syllables: ["do", "or"], phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "oor" }] },
          { word: "board", phonetic: "b\u0254\u02d0d", meaning: "n.\u677f;\u8463\u4e8b\u4f1av.\u4e0a\u8239\uff08\u6216\u706b\u8f66\u3001\u98de\u673a\u7b49\uff09;", audio: "/audio/phonics-vowel/vowel-o/board.mp3", syllables: ["bo", "ard"], phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "oar" }] },
          { word: "could", phonetic: "k\u028ad; k\u0259d", meaning: "v. \uff08\u793c\u8c8c\u5730\u8bf7\u6c42\u8bb8\u53ef\uff09\u53ef\u4ee5\uff0c\u80fd\uff1b\uff08\u793c\u8c8c\u5730\u8bf7\u6c42\u522b\u4eba\u505a\u4e8b\uff09\u80fd\uff0c\u80fd\u5426\uff1b\uff08\u8868\u793a\u53ef\u80fd\uff09\u53ef\u80fd\uff0c\u4e5f\u8bb8\uff1b\uff08\u8868\u793a\u672a\u53d1\u751f\u7684\u4e8b\u60c5\uff09\u5dee\u70b9\u5c31\uff0c\u672c\u80fd\u591f\uff1b\uff08\u7528\u4e8e\u63d0\u51fa\u5efa\u8bae\uff09\u53ef\u4ee5\uff0c\u80fd\uff1b\u672c\u8be5\uff0c\u5e94\u8be5\uff08\u7528\u4e8e\u5bf9\u505a\u8fc7\u6216\u672a\u505a\u67d0\u4e8b\u8868\u793a\u607c\u6012\uff09\uff1b\uff08\u5f3a\u8c03\u611f\u89c9\uff09\u771f\u60f3\uff1b\u597d\u50cf\uff0c\u4eff\u4f5b\uff1bv.  \u80fd\uff08can\u7684\u8fc7\u53bb\u5f0f\uff09", audio: "/audio/phonics-vowel/vowel-o/could.mp3", syllables: ["co", "uld"], phonemeMap: [{ ipa: "\u028a", spelling: "oul" }] },
          { word: "should", phonetic: "\u0283\u028ad; \u0283\u0259d", meaning: "v. \uff08\u7528\u4e8e\u7ea0\u6b63\u522b\u4eba\uff09\u5e94\u8be5\uff1b\uff08\u7528\u4e8e\u5efa\u8bae\uff09\u8be5\uff0c\u53ef\u4ee5\uff1b\uff08\u8868\u793a\u9884\u671f\uff09\u5e94\u8be5\u4f1a\uff1b\uff08\u8868\u793a\u4e0e\u9884\u671f\u76f8\u53cd\uff09\u672c\u5e94\uff1b\uff08\u4e0e I \u6216 we \u8fde\u7528\u4ee3\u66ff would\uff0c\u8868\u793a\u865a\u62df\u7ed3\u679c\uff09\u5c31\u5c06\uff1b\uff08\u7528\u4e8e that \u4ece\u53e5\uff0c\u8868\u793a\u5efa\u8bae\u6216\u5b89\u6392\uff09\u53ef\u4ee5\uff1b\uff08\u7528\u4e8e that \u4ece\u53e5\uff0c\u8868\u793a\u611f\u60c5\uff09\u7adf\u7136\u4f1a\uff1b\uff08\u8868\u793a\u62d2\u7edd\u3001\u607c\u6012\u6216\u60ca\u5947\uff09\u7adf\u4f1a\uff1b\uff08\u8868\u793a\u53ef\u80fd\uff09\u5047\u5982\uff0c\u4e07\u4e00\uff1b\u5c06\uff08\u7528\u4f5c shall \u7684\u8fc7\u53bb\u5f0f\uff09\uff1b\uff08\u4e0e I \u548c we \u8fde\u7528\uff0c\u8868\u793a\u5ba2\u6c14\u5730\u8bf7\u6c42\uff09\u60f3\uff1b\u5f53\u7136\uff0c\u771f\u7684\uff08\u7528\u4e8e\u5f3a\u8c03\u81ea\u5df1\u6240\u76f8\u4fe1\u6216\u6240\u671f\u5f85\u7684\uff09\uff1b\uff08\u8868\u793a\u5f3a\u8c03\u6709\u8da3\u3001\u60ca\u8bb6\u6216\u5370\u8c61\u6df1\u523b\uff09\u771f\u8be5", audio: "/audio/phonics-vowel/vowel-o/should.mp3", syllables: ["sho", "uld"], phonemeMap: [{ ipa: "u\u02d0", spelling: "oul" }] },
          { word: "hour", phonetic: "\u02c8a\u028a\u0259(r)", meaning: "n. \u5c0f\u65f6\uff1b\u4e00\u5c0f\u65f6\u7684\u8def\u7a0b\uff1b\uff08\u5de5\u4f5c\uff0c\u529e\u516c\u7b49\u7684\uff09\u56fa\u5b9a\u65f6\u95f4\uff1b\u67d0\u4e2a\u65f6\u95f4\uff1b\u957f\u65f6\u95f4\uff1b\u6574\u70b9\uff0c\u6b63\u70b9\uff1b\uff08\u897f\u6d3e\u6559\u4f1a\u4e2d\uff09\u56fa\u5b9a\u65f6\u5206\u77ed\u793c\u62dc\uff1b\uff08\u5929\u6587\uff09\u9ec4\u7ecf\uff08\u6216\u8d64\u7ecf\uff0915\u00b0\uff1b\u3010\u540d\u3011 \uff08Hour\uff09\uff08\u6cd5\uff09\u4e4c\u5c14\uff0c\uff08\u67ec\uff09\u80e1\uff08\u4eba\u540d\uff09", audio: "/audio/phonics-vowel/vowel-o/hour.mp3", syllables: ["ho", "ur"], phonemeMap: [{ ipa: "a\u028a\u0259", spelling: "our" }] },
          { word: "four", phonetic: "f\u0254\u02d0(r)", meaning: "num. \u56db\uff0c\u56db\u4e2a\uff1bn. \u56db\u4e2a\u4eba\uff08\u6216\u4e8b\uff09\u7684\u4e00\u7ec4\uff1b\uff08\u677f\u7403\uff09\u56db\u5206\u7684\u4e00\u51fb\uff1b\uff08\u8863\u670d\u7b49\uff09\u56db\u53f7\uff1b\u56db\u70b9\u7684\u7eb8\u724c\uff1b\u56db\u6d46\u8d5b\u8247\uff0c\u56db\u4eba\u5212\u8239\u961f", audio: "/audio/phonics-vowel/vowel-o/four.mp3", syllables: ["fo", "ur"], phonemeMap: [{ ipa: "\u0254\u02d0", spelling: "our" }] },
          { word: "journey", phonetic: "\u02c8d\u0292\u025c\u02d0ni", meaning: "n. \u65c5\u884c\uff1b\u5386\u7a0b", audio: "/audio/phonics-vowel/vowel-o/journey.mp3", syllables: ["jour", "ney"], phonemeMap: [{ ipa: "\u025c\u02d0", spelling: "our" }] },
          { word: "cure", phonetic: "kj\u028a\u0259(r)", meaning: "n. \u6cbb\u7597;\u7597\u6cd5\nv. \u6cbb\u6108;\u6cbb\u7597", audio: "/audio/phonics-vowel/vowel-o/cure.mp3", syllables: ["cur", "e"], phonemeMap: [{ ipa: "j\u028a\u0259", spelling: "ure" }] },
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
          { word: "fur", phonetic: "f\u025c\u02d0(r)", meaning: "n. \u8f6f\u6bdb\uff1b\u6bdb\u76ae", audio: "/audio/phonics-vowel/vowel-u/fur.mp3", phonemeMap: [{ ipa: "\u025c\u02d0", spelling: "ur" }] },
          { word: "surprise", phonetic: "s\u0259\u02c8pra\u026az", meaning: "v.\u4f7f\u60ca\u5947;\u4f7f\u611f\u5230\u610f\u5916n.\u60ca\u8bb6;\u60ca\u559c;\u610f\u5916;", audio: "/audio/phonics-vowel/vowel-u/surprise.mp3", syllables: ["sur", "prise"], phonemeMap: [{ ipa: "\u0259", spelling: "ur" }] },
        ],
      },
      {
        name: "uy",
        slug: "uy",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "buy", phonetic: "ba\u026a", meaning: "v. \u8d2d\u4e70\uff0c\u80fd\u4e70\uff1b<\u975e\u6b63\u5f0f>\u76f8\u4fe1\uff0c\u63a5\u53d7\uff1b\uff08\u4ed8\u51fa\u4ee3\u4ef7\uff09\u83b7\u5f97\uff0c\u8d62\u5f97\uff1b\u6536\u4e70\uff0c\u8d3f\u8d42\uff1b\u4e70\uff0c\u8d2d\u4e70\uff1bn. \u5408\u7b97\u7684\u4e1c\u897f\uff0c\u4fbf\u5b9c\u8d27\uff1b\u8d2d\u4e70", audio: "/audio/phonics-vowel/vowel-u/buy.mp3", syllables: ["bu", "y"], phonemeMap: [{ ipa: "a\u026a", spelling: "uy" }] },
        ],
      },
      {
        name: "u_e / ue",
        slug: "u_e|ue",
        wordCount: 4, difficulty: 2,
        words: [
          { word: "use", phonetic: "ju\u02d0z", meaning: "v. \u7528\uff0c\u4f7f\u7528\uff1b\u4f7f\u7528\uff08\u8bcd\u8bed\uff09\uff1b\u8017\u8d39\uff0c\u6d88\u8d39\uff1b\u5229\u7528\uff08\u4ed6\u4eba\u6216\u67d0\u79cd\u60c5\u5f62\uff09\uff1b\u670d\uff08\u836f\uff0c\u5c24\u6307\u6bd2\u54c1\uff09\uff1b\u9700\u8981\uff1b\u7528\uff08\u540d\u5b57\uff09\uff0c\u81ea\u79f0\uff1b\u5bf9\u5f85\uff1b\u7528\uff08\u6d17\u624b\u95f4\u6216\u536b\u751f\u95f4\uff09\uff08\u793c\u8c8c\u8bf4\u6cd5\uff09\uff1bn. \u4f7f\u7528\uff1b\u7528\u9014\uff0c\u7528\u6cd5\uff1b\u8bcd\u4e49\uff0c\u8bf4\u6cd5\uff1b\u4f7f\u7528\u673a\u4f1a\uff0c\u4f7f\u7528\u6743\uff1b\uff08\u5c24\u6307\u601d\u60f3\uff0c\u4f53\u529b\uff09\u8fd0\u7528\u80fd\u529b\uff1b\u8017\u8d39\uff0c\u8017\u7528\uff1b\uff08\u7ecf\u5e38\uff09\u670d\u7528\uff08\u6bd2\u54c1\uff09\uff1b<\u6cd5\u5f8b\uff0c\u53f2>\uff08\u5c24\u6307\u53d7\u59d4\u6258\u4ee3\u7ba1\u4eba\u7684\uff09\u53d7\u76ca\uff1b\uff08\u6559\u5802\uff0c\u6559\u533a\uff09\u7279\u8272\u793c\u62dc\u4eea\u5f0f", audio: "/audio/phonics-vowel/vowel-u/use.mp3", phonemeMap: [{ ipa: "ju\u02d0", spelling: "u" }, { ipa: "ju\u02d0", spelling: "e" }] },
          { word: "rule", phonetic: "ru\u02d0l", meaning: "n./v. \u89c4\u5219/\u7edf\u6cbb", audio: "/audio/phonics-vowel/vowel-u/rule.mp3", phonemeMap: [{ ipa: "u\u02d0", spelling: "u" }, { ipa: "u\u02d0", spelling: "e" }] },
          { word: "cue", phonetic: "kju\u02d0", meaning: "n. \u6697\u793a\uff0c\u63d0\u793a\uff1b\uff08\u620f\u5267\u6216\u7535\u5f71\u4e2d\u7684\uff09\u5c3e\u767d\uff0c\u63d0\u793a\uff1b\uff08\u53f0\u7403\u7b49\u7684\uff09\u7403\u6746\uff1b\u7ebf\u7d22\uff1b\u9009\u542c\uff08\u6216\u9009\u770b\uff09\u952e\uff1bv. \u63d0\u793a\uff0c\u6697\u793a\uff1b\u7528\u7403\u6746\u51fb\u7403", audio: "/audio/phonics-vowel/vowel-u/cue.mp3", phonemeMap: [{ ipa: "ju\u02d0", spelling: "ue" }] },
          { word: "blue", phonetic: "blu\u02d0", meaning: "adj. \u84dd\u8272\u7684\uff1b\u5fe7\u90c1\u7684\uff0c\u6cae\u4e27\u7684\uff1b<\u82f1\uff0c\u975e\u6b63\u5f0f> \u4fdd\u5b88\u7684\uff0c\u5b88\u65e7\u7684\uff1b\uff08\u7b11\u8bdd\u3001\u6545\u4e8b\u7b49\uff09\u9ec4\u8272\u7684\uff0c\u8272\u60c5\u7684\uff1b\uff08\u7531\u4e8e\u51b7\u6216\u547c\u5438\u56f0\u96be\uff09\u53d1\u9752\u7684\uff0c\u9752\u7d2b\u7684\uff1bn. \u5929\u84dd\u8272\uff0c\u84dd\u8272\uff1b\u5929\u7a7a\uff0c\u5927\u6d77\uff1b<\u82f1>\uff08\u5251\u6865\u6216\u725b\u6d25\u5927\u5b66\u7684\uff09\u6821\u961f\u8fd0\u52a8\u5458\uff0c\u84dd\u8272\u8363\u8a89\u8005\uff1b<\u6fb3\u65b0>\u7ea2\u5934\u53d1\u8005\uff1b<\u6fb3\u65b0>\u9519\u8bef\uff0c\u7eb0\u6f0f\uff1b<\u6fb3\u65b0>\u4e89\u8bba\uff0c\u6bb4\u6253\uff1b\u8fd1\u751f\u7684\u725b\u6392", audio: "/audio/phonics-vowel/vowel-u/blue.mp3", phonemeMap: [{ ipa: "u\u02d0", spelling: "ue" }] },
        ],
      },
      {
        name: "ui",
        slug: "ui",
        wordCount: 2, difficulty: 2,
        words: [
          { word: "build", phonetic: "b\u026ald", meaning: "v. \u5efa\u9020\u3001\u5f00\u53d1", audio: "/audio/phonics-vowel/vowel-u/build.mp3", syllables: ["bu", "ild"], phonemeMap: [{ ipa: "\u026a", spelling: "ui" }] },
          { word: "fruit", phonetic: "fru\u02d0t", meaning: "v. \u7ed3\u679c\u5b9e", audio: "/audio/phonics-vowel/vowel-u/fruit.mp3", syllables: ["fru", "it"], phonemeMap: [{ ipa: "u\u02d0", spelling: "ui" }] },
        ],
      },
      {
        name: "ure",
        slug: "ure",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "sure", phonetic: "\u0283\u028a\u0259(r); \u0283\u0254\u02d0(r)", meaning: "adj. \u786e\u4fe1\u7684\uff0c\u6709\u628a\u63e1\u7684\uff1b\u80af\u5b9a\u7684\uff0c\u4e00\u5b9a\u7684\uff1b\u53ef\u9760\u7684\uff0c\u51c6\u786e\u7684\uff1b\u4e00\u5b9a\u4f1a\uff08\u53d1\u751f\u6216\u51fa\u73b0\u67d0\u79cd\u7ed3\u679c\uff09\u7684\uff1b\u7d27\u7d27\u7684\uff0c\u575a\u5b9a\u7684\uff1b\u6c89\u7740\u81ea\u4fe1\u7684\uff0c\u80f8\u6709\u6210\u7af9\u7684\uff1badv. \uff08\u8868\u793a\u540c\u610f\uff09\u5f53\u7136\uff1b\u786e\u5b9e\uff0c\u7684\u786e\uff0c\u8bda\u7136\uff08\u7528\u4e8e\u80af\u5b9a\u524d\u534a\u90e8\u5206\uff09\uff1b\uff08\u56de\u7b54\u4ed6\u4eba\u7684\u611f\u8c22\uff09\u4e0d\u7528\u5ba2\u6c14\uff0c\u5e94\u8be5\u7684\uff1b\u771f\u7684\uff0c\u80af\u5b9a\uff0c\u65e0\u7591\uff08\u7528\u4e8e\u5f3a\u8c03\uff09", audio: "/audio/phonics-vowel/vowel-u/sure.mp3", syllables: ["sur", "e"], phonemeMap: [{ ipa: "j\u028a\u0259", spelling: "ure" }] },
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
