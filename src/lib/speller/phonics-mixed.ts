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
          { word: "class", phonetic: "kl\u0251\u02d0s", meaning: "n.\u73ed\u7ea7;\u8bfe;\u7b49\u7ea7;\u9636\u7ea7;\u7c7b\u522b;", audio: "/audio/mixed/mixed-a/class.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0s/", spelling: "ass" }] },
        ],
      },
      {
        name: "-ass /\u0251\u02d0s/",
        slug: "-ass",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "glass", phonetic: "\u0261l\u0251\u02d0s", meaning: "n. \u73bb\u7483\u3001\u73bb\u7483\u676f", audio: "/audio/mixed/mixed-a/glass.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0s/", spelling: "ass" }] },
        ],
      },
      {
        name: "-ass /\u0251\u02d0s/",
        slug: "-ass",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "pass", phonetic: "p\u0251\u02d0s", meaning: "v. \u7ecf\u8fc7\uff0c\u7a7f\u8fc7\uff1b\u4f20\u9012\uff0c\u4f20\u9001\uff1b\u4f20\uff08\u7403\uff09\uff1b\uff08\u6240\u6709\u6743\uff09\u8f6c\u79fb\uff0c\u8f6c\u8ba9\uff1b\uff08\u72b6\u6001\uff09\u8f6c\u53d8\uff1b\uff08\u6570\u91cf\u4e0a\uff09\u8d85\u8fc7\uff0c\u7a81\u7834\uff1b\uff08\u65f6\u95f4\uff09\u6d41\u901d\uff1b\u5ea6\u8fc7\uff0c\u6d88\u78e8\uff1b\u901a\u8fc7\uff08\u8003\u8bd5\u3001\u8bfe\u7a0b\u7b49\uff09\uff1b\u6279\u51c6\uff08\u6cd5\u5f8b\u6216\u8bae\u6848\uff09\uff1b\u53d1\u751f\uff0c\u8bf4\u8fc7\uff1b\u7565\u8fc7\uff08\u95ee\u9898\uff09\uff1b\u6392\u6cc4\uff1b\u4f7f\uff08\u8d27\u5e01\u7b49\uff09\u6d41\u901a\uff1b\u7ed3\u675f\uff0c\u505c\u6b62\uff1b\u62d2\u7edd\u9080\u8bf7\uff08\u63d0\u8bae\uff09\uff1b\u5ba3\u5e03\uff0c\u58f0\u660e\uff1b\uff08\u7eb8\u724c\u7b49\u6e38\u620f\u4e2d\uff09\u4e0d\u53eb\uff0c\u8fc7\uff1bn. \u51fa\u5165\u8bc1\uff0c\u901a\u884c\u8bc1\uff1b\u53ca\u683c\uff0c\u5408\u683c\uff1b\u4f20\u7403\uff1b\u5c71\u9053\uff0c\u5c71\u53e3\uff1b\u9636\u6bb5\uff0c\u6b65\u9aa4\uff1b\uff08\u8ba1\u7b97\u673a\uff09\u4e00\u6b21\u6d4f\u89c8\uff0c\u4e00\u6b21\u626b\u63cf\uff1b\u8d8a\u8fc7\uff1b\u53d8\u620f\u6cd5\uff1b\uff08\u51fb\u5251\u4e2d\u7684\uff09\u6233\u523a\uff1b\uff08\u4e0d\u597d\u7684\uff09\u5883\u9047\uff0c\u5904\u5883\uff1b\uff08\u6865\u724c\uff09\u4e0d\u53eb", audio: "/audio/mixed/mixed-a/pass.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0s/", spelling: "ass" }] },
        ],
      },
      {
        name: "-ask /\u0251\u02d0sk/",
        slug: "-ask",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "ask", phonetic: "\u0251\u02d0sk", meaning: "v. \u8be2\u95ee\uff0c\u6253\u542c\uff1b\u8981\u6c42\uff0c\u8bf7\u6c42\uff1b\u9080\u8bf7\uff0c\u7ea6\u8bf7 \uff1b\u6307\u671b\uff0c\u671f\u5f85\uff1b\u3010\u540d\u3011 \uff08Ask\uff09\uff08\u82ac\u3001\u745e\u5178\uff09\u963f\u65af\u514b\uff08\u4eba\u540d\uff09", audio: "/audio/mixed/mixed-a/ask.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0sk/", spelling: "ask" }] },
        ],
      },
      {
        name: "-ask /\u0251\u02d0sk/",
        slug: "-ask",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "mask", phonetic: "m\u0251\u02d0sk", meaning: "\u9762\u5177", audio: "/audio/mixed/mixed-a/mask.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0sk/", spelling: "ask" }] },
        ],
      },
      {
        name: "-ask /\u0251\u02d0sk/",
        slug: "-ask",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "task", phonetic: "t\u0251\u02d0sk", meaning: "n. \uff08\u5c24\u6307\u56f0\u96be\u7684\u6216\u5fc5\u987b\u5b9a\u671f\u505a\u7684\uff09\u5de5\u4f5c\uff0c\u4efb\u52a1\uff1b\uff08\u5c24\u6307\u8bed\u8a00\u6559\u5b66\u4e2d\u65e8\u5728\u5e2e\u52a9\u8fbe\u5230\u67d0\u4e00\u5b66\u4e60\u76ee\u7684\u7684\uff09\u6d3b\u52a8\uff1bv. \u6d3e\u7ed9\u2026\u2026\u4efb\u52a1\uff1b\u5bf9\uff08\u624b\u6bb5\uff0c\u80fd\u529b\uff09\u8981\u6c42\u6781\u9ad8\uff0c\u8003\u9a8c", audio: "/audio/mixed/mixed-a/task.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0sk/", spelling: "ask" }] },
        ],
      },
      {
        name: "-ast /\u0251\u02d0st/",
        slug: "-ast",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "fast", phonetic: "f\u0251\u02d0st", meaning: "adj. \u5feb\u7684\uff0c\u8fc5\u901f\u7684\uff1b\u7cfb\u7262\u7684\uff0c\u7d27\u7f1a\u7684\uff1b\u5bfb\u6b22\u4f5c\u4e50\u7684\uff1b\u4e0d\u892a\u8272\u7684\uff1b\u5fe0\u5b9e\u7684\uff0c\u53ef\u9760\u7684\uff1badv. \u5feb\u901f\u5730\uff1b\u575a\u5b9a\u5730\uff0c\u7262\u56fa\u5730", audio: "/audio/mixed/mixed-a/fast.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0st/", spelling: "ast" }] },
        ],
      },
      {
        name: "-ast /\u0251\u02d0st/",
        slug: "-ast",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "last", phonetic: "l\u0251\u02d0st", meaning: "adj. \u6700\u540e\u7684\uff1b\u6700\u8fd1\u7684\uff0c\u4e0a\u4e00\u4e2a\u7684\uff1b\u6700\u540e\u5269\u4e0b\u7684\uff1b\u6700\u4e0d\u53ef\u80fd\u7684\uff1b\u6700\u672b\u7684\uff1b\u4ec5\u5b58\u7684\uff1b\u6700\u4e0d\u91cd\u8981\u7684\uff0c\u6700\u65e0\u5173\u7d27\u8981\u7684\uff1b\u6700\u540e\u9047\u89c1\u7684\uff1bv. \u6301\u7eed\uff1b\u6301\u4e45\uff1b\u7ef4\u6301\uff0c\u591f\u7528\uff1b\u575a\u6301\uff0c\u652f\u6491\u4e0b\u53bb", audio: "/audio/mixed/mixed-a/last.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0st/", spelling: "ast" }] },
        ],
      },
      {
        name: "-ast /\u0251\u02d0st/",
        slug: "-ast",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "past", phonetic: "p\u0251\u02d0st", meaning: "adj. \u8fc7\u53bb\u7684\uff0c\u6614\u65e5\u7684\uff1b\u521a\u8fc7\u53bb\u7684\uff0c\u521a\u7ed3\u675f\u7684\uff1b\u5b8c\u6210\u7684\uff0c\u7ed3\u675f\u7684\uff1b\uff08\u8bed\u6cd5\uff09\u8fc7\u53bb\u65f6\u7684\uff1bn. \u8fc7\u53bb\uff0c\u6614\u65e5\uff08the past\uff09\uff1b\u5f80\u4e8b\uff0c\u7ecf\u5386\uff1b\uff08\u8bed\u6cd5\uff09\u8fc7\u53bb\u65f6\uff0c\uff08\u52a8\u8bcd\u7684\uff09\u8fc7\u53bb\u5f0f\uff08the past\uff09", audio: "/audio/mixed/mixed-a/past.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0st/", spelling: "ast" }] },
        ],
      },
      {
        name: "-ath /\u0251\u02d0\u03b8/",
        slug: "-ath",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bath", phonetic: "b\u0251\u02d0\u03b8", meaning: "n. \u6d17\u6fa1\uff1b[\u82f1]\u6d74\u7f38", audio: "/audio/mixed/mixed-a/bath.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0\u03b8/", spelling: "ath" }] },
        ],
      },
      {
        name: "-ath /\u0251\u02d0\u03b8/",
        slug: "-ath",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "path", phonetic: "p\u0251\u02d0\u03b8", meaning: "n. \u5c0f\u8def", audio: "/audio/mixed/mixed-a/path.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0\u03b8/", spelling: "ath" }] },
        ],
      },
      {
        name: "-asp /\u0251\u02d0sp/",
        slug: "-asp",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "clasp", phonetic: "kl\u0251\u02d0sp", meaning: "n./v. \u642d\u6263\uff1b\u6263\u4f4f", audio: "/audio/mixed/mixed-a/clasp.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0sp/", spelling: "asp" }] },
        ],
      },
      {
        name: "-asp /\u0251\u02d0sp/",
        slug: "-asp",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "gasp", phonetic: "\u0261\u0251\u02d0sp", meaning: "v. \uff08\u56e0\u60ca\u8bb6\u6216\u75bc\u75db\uff09\u5598\u6c14\uff1bn. \u5598\u606f\uff0c\u5012\u62bd\u6c14", audio: "/audio/mixed/mixed-a/gasp.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0sp/", spelling: "asp" }] },
        ],
      },
      {
        name: "-asp /\u0251\u02d0sp/",
        slug: "-asp",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "grasp", phonetic: "\u0261r\u0251\u02d0sp", meaning: "v. \u6293\u7262 \uff0c\u63e1\u7d27\uff1b\u5b8c\u5168\u7406\u89e3\uff0c\u5168\u9762\u9886\u4f1a", audio: "/audio/mixed/mixed-a/grasp.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0sp/", spelling: "asp" }] },
        ],
      },
      {
        name: "-aff /\u0251\u02d0f/",
        slug: "-aff",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "staff", phonetic: "st\u0251\u02d0f", meaning: "n.\u804c\u5458;\u5168\u4f53\u804c\u5de5;\u68cd\u68d2;\u62d0\u6756v.\u4e3a\u2026\u914d\u5907\u804c\u5458;", audio: "/audio/mixed/mixed-a/staff.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "aff" }] },
        ],
      },
      {
        name: "-aff /\u0251\u02d0f/",
        slug: "-aff",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "chaff", phonetic: "t\u0283\u00e6f; t\u0283\u0251\u02d0f", meaning: "n. \u7ce0\uff1b\u8c37\u58f3\uff1b\u65e0\u4ef7\u503c\u7684\u4e1c\u897f\uff1bvi. \u5f00\u73a9\u7b11\uff1b\u6253\u8da3", audio: "/audio/mixed/mixed-a/chaff.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "aff" }] },
        ],
      },
      {
        name: "-aff /\u0251\u02d0f/",
        slug: "-aff",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "giraffe", phonetic: "d\u0292\u0259\u02c8r\u0251\u02d0f", meaning: "n. \u957f\u9888\u9e7f", audio: "/audio/mixed/mixed-a/giraffe.mp3", syllables: ["gi", "raffe"], phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "aff" }] },
        ],
      },
      {
        name: "-alf /\u0251\u02d0f/",
        slug: "-alf",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "half", phonetic: "h\u0251\u02d0f", meaning: "n. \u4e00\u534a\uff0c\u4e8c\u5206\u4e4b\u4e00\uff1b\u534a\u573a\uff0c\u534a\u5c40\uff1b\uff08\u8db3\u7403\u3001\u6a44\u6984\u7403\u7b49\u7684\uff09\u4e2d\u573a\u961f\u5458\uff1b<\u82f1\uff0c\u975e\u6b63\u5f0f>\u534a\u54c1\u8131\uff1b<\u82f1\uff0c\u975e\u6b63\u5f0f>\u513f\u7ae5\u534a\u7968\uff1b<\u82f1>\u534a\u5b66\u5e74\uff0c\u4e00\u5b66\u671f\uff1b\uff08\u9ad8\u5c14\u592b\uff09\u4e00\u7a74\u51fb\u7403\u5f97\u5206\u4e0e\u5bf9\u624b\u76f8\u7b49\uff1bpron. \u4e00\u534a\uff1b\uff08\u65f6\u95f4\uff09\u2026\u2026\u70b9\u534a\uff08=half past\uff09\uff1b\u5927\u91cf\uff0c\u8bb8\u591a", audio: "/audio/mixed/mixed-a/half.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "alf" }] },
        ],
      },
      {
        name: "-alf /\u0251\u02d0f/",
        slug: "-alf",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "calf", phonetic: "k\u0251\u02d0f", meaning: "n. \u5e7c\u517d\uff1b\u5c0f\u725b\ud83d\udc02", audio: "/audio/mixed/mixed-a/calf.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "alf" }] },
        ],
      },
      {
        name: "-alf /\u0251\u02d0f/",
        slug: "-alf",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "behalf", phonetic: "b\u026a\u02c8h\u0251\u02d0f", meaning: "n. [on ~ of sb.]\u4ee3\u8868\u67d0\u4eba", audio: "/audio/mixed/mixed-a/behalf.mp3", syllables: ["be", "half"], phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "alf" }] },
        ],
      },
      {
        name: "-ant /\u0251\u02d0nt/",
        slug: "-ant",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "plant", phonetic: "pl\u0251\u02d0nt", meaning: "n.\u690d\u7269;\u4f5c\u7269;\u8f66\u95f4;\u88c5\u7f6e;\u5de5\u5382;\u53d1\u7535\u5382v.\u79cd\u690d;\u683d\u57f9;\u5b89\u7f6e;\u653e\u7f6e;", audio: "/audio/mixed/mixed-a/plant.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0nt/", spelling: "ant" }] },
        ],
      },
      {
        name: "-ant /\u0251\u02d0nt/",
        slug: "-ant",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "can't", phonetic: "k\u0251\u02d0nt", meaning: "contr. \u4e0d\u80fd\uff08can not\uff09", audio: "/audio/mixed/mixed-a/can't.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0nt/", spelling: "ant" }] },
        ],
      },
      {
        name: "-ant /\u0251\u02d0nt/",
        slug: "-ant",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "grant", phonetic: "\u0261r\u0251\u02d0nt", meaning: "v. \u6388\u4e88\uff1b\u51c6\u4e88\uff1b\u627f\u8ba4", audio: "/audio/mixed/mixed-a/grant.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0nt/", spelling: "ant" }] },
        ],
      },
      {
        name: "-ance /\u0251\u02d0ns/",
        slug: "-ance",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "dance", phonetic: "d\u02c8\u00e6ns", meaning: "\u821e\u8e48", audio: "/audio/mixed/mixed-a/dance.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0ns/", spelling: "ance" }] },
        ],
      },
      {
        name: "-ance /\u0251\u02d0ns/",
        slug: "-ance",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "chance", phonetic: "t\u0283\u0251\u02d0ns", meaning: "n. \u673a\u4f1a\uff1b\u53ef\u80fd\u6027", audio: "/audio/mixed/mixed-a/chance.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0ns/", spelling: "ance" }] },
        ],
      },
      {
        name: "-ance /\u0251\u02d0ns/",
        slug: "-ance",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "France", phonetic: "fr\u0251\u02d0ns", meaning: "n. \u6cd5\u56fd", audio: "/audio/mixed/mixed-a/France.mp3", phonemeMap: [{ ipa: "/\u0251\u02d0ns/", spelling: "ance" }] },
        ],
      },
      {
        name: "-augh /\u0251\u02d0f/",
        slug: "-augh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "laugh", phonetic: "l\u0251\u02d0f", meaning: "v. \u7b11\uff0c\u53d1\u7b11\uff1b\u5632\u7b11\uff0c\u4e0d\u4ee5\u4e3a\u7136\uff1b\u6109\u60a6\u5730\u8bf4\uff1b\u7528\u5632\u7b11\u4f7f\uff08\u67d0\u4eba\uff09\u79bb\u5f00\uff1b\uff08\u7279\u522b\u8868\u793a\u56e0\u6210\u529f\u800c\uff09\u5904\u4e8e\u6709\u5229\u5730\u4f4d\uff1bn. \u7b11\uff0c\u7b11\u58f0\uff1b\u4ee4\u4eba\u5f00\u5fc3\u7684\u65f6\u523b\uff1b\u5f15\u4eba\u53d1\u7b11\u7684\u4eba\u6216\u4e8b\uff0c\u7b11\u6599", audio: "/audio/mixed/mixed-a/laugh.mp3", syllables: ["la", "ugh"], phonemeMap: [{ ipa: "/\u0251\u02d0f/", spelling: "augh" }] },
        ],
      },
      {
        name: "-aught /\u0254\u02d0t/",
        slug: "-aught",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "caught", phonetic: "k\u0254\u02d0t", meaning: "v. \u6355\u6349\uff08catch \u7684\u8fc7\u53bb\u5206\u8bcd\uff09", audio: "/audio/mixed/mixed-a/caught.mp3", syllables: ["ca", "ught"], phonemeMap: [{ ipa: "/\u0254\u02d0t/", spelling: "aught" }] },
        ],
      },
      {
        name: "-aught /\u0254\u02d0t/",
        slug: "-aught",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "taught", phonetic: "t\u0254\u02d0t", meaning: "v. \u6559\u6388\uff08teach \u7684\u8fc7\u53bb\u5206\u8bcd\uff09", audio: "/audio/mixed/mixed-a/taught.mp3", syllables: ["ta", "ught"], phonemeMap: [{ ipa: "/\u0254\u02d0t/", spelling: "aught" }] },
        ],
      },
      {
        name: "-aught /\u0254\u02d0t/",
        slug: "-aught",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "naughty", phonetic: "\u02c8n\u0254\u02d0ti", meaning: "adj. \u987d\u76ae\u7684;\u6dd8\u6c14\u7684", audio: "/audio/mixed/mixed-a/naughty.mp3", syllables: ["naugh", "ty"], phonemeMap: [{ ipa: "/\u0254\u02d0t/", spelling: "aught" }] },
        ],
      },
      {
        name: "-aunt /\u0251\u02d0nt/",
        slug: "-aunt",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "aunt", phonetic: "\u0251\u02d0nt", meaning: "n. \u59d1\u5988\uff0c\u4f2f\u6bcd\uff0c\u8205\u5988\uff0c\u963f\u59e8\uff0c\u5a76\u5a76", audio: "/audio/mixed/mixed-a/aunt.mp3", syllables: ["a", "unt"], phonemeMap: [{ ipa: "/\u0251\u02d0nt/", spelling: "aunt" }] },
        ],
      },
      {
        name: "-aunt /\u0251\u02d0nt/",
        slug: "-aunt",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "flaunt", phonetic: "fl\u0254\u02d0nt", meaning: "vt. \u70ab\u8000\uff0c\u5356\u5f04\uff1b\u65e0\u89c6\uff0c\u85d0\u89c6\uff1bvi. \u70ab\u8000\uff1b\u98d8\u626c", audio: "/audio/mixed/mixed-a/flaunt.mp3", syllables: ["fla", "unt"], phonemeMap: [{ ipa: "/\u0251\u02d0nt/", spelling: "aunt" }] },
        ],
      },
      {
        name: "-aunt /\u0251\u02d0nt/",
        slug: "-aunt",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "jaunt", phonetic: "d\u0292\u0254\u02d0nt", meaning: "n. \u8fdc\u8db3\uff1b\u77ed\u9014\u65c5\u6e38\uff1bvi. \u8fdc\u8db3\uff1b\u4f5c\u77ed\u9014\u65c5\u6e38", audio: "/audio/mixed/mixed-a/jaunt.mp3", syllables: ["ja", "unt"], phonemeMap: [{ ipa: "/\u0251\u02d0nt/", spelling: "aunt" }] },
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
          { word: "find", phonetic: "fa\u026and", meaning: "v. \u627e\u5230\uff0c\u627e\u56de\uff1b\u53d1\u73b0\uff0c\u53d1\u89c9\uff1b\uff08\u7ecf\u8fc7\u7814\u7a76\uff09\u627e\u51fa\uff0c\u67e5\u660e\uff1b\u611f\u5230\uff0c\u8ba4\u4e3a\uff1b\u751f\u957f\u5728\u67d0\u5904\uff0c\u5b58\u5728\u4e8e\u67d0\u5730\uff1b\u8bbe\u6cd5\u83b7\u5f97\uff1b\u5f00\u59cb\u6709\u2026\u2026\uff1b\u88c1\u51b3\uff0c\u5224\u51b3\uff1b\u81ea\u7136\u5230\u8fbe\uff0c\u8fbe\u5230\uff1b\u9f13\u8d77\uff08\u52c7\u6c14\uff09\uff0c\u632f\u4f5c\uff08\u7cbe\u795e\uff09\uff1b\uff08\u730e\u4eba\uff0c\u730e\u72ac\uff09\u53d1\u73b0\u730e\u7269\uff08\u5c24\u6307\u53d1\u73b0\u72d0\u72f8\uff09\uff1bn. \u88ab\u53d1\u73b0\u7684\u4eba\uff0c\u53d1\u73b0\u7269\uff08\u5c24\u6307\u6709\u4ef7\u503c\u7684\u4eba\u6216\u7269\uff09\uff1b\u53d1\u73b0\u72d0\u72f8", audio: "/audio/mixed/mixed-i/find.mp3", phonemeMap: [{ ipa: "/a\u026and/", spelling: "ind" }] },
        ],
      },
      {
        name: "-ind /a\u026and/",
        slug: "-ind",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "kind", phonetic: "ka\u026and", meaning: "n. \u79cd\u7c7b\uff1b\u540c\u7c7b\u7684\u4eba\uff1b\u7279\u5f81\uff0c\u6027\u8d28\uff1b\u5723\u9910\u7684\u5723\u4f53\uff08\u6307\u9762\u5305\u6216\u8461\u8404\u9152\uff09\uff1badj. \u5bbd\u5bb9\u7684\uff0c\u4f53\u8d34\u7684\uff0c\u4eb2\u5207\u53cb\u597d\u7684\uff1b\u6e29\u548c\u7684\uff0c\u65e0\u5bb3\u7684\uff1b\u5173\u7231\u7684\uff0c\u597d\u5fc3\u7684\uff08\u5c24\u7528\u4e8e\u7b54\u8c22\u8bed\u4e2d\uff09", audio: "/audio/mixed/mixed-i/kind.mp3", phonemeMap: [{ ipa: "/a\u026and/", spelling: "ind" }] },
        ],
      },
      {
        name: "-ind /a\u026and/",
        slug: "-ind",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "mind", phonetic: "ma\u026and", meaning: "n. \u5fc3;\u5934\u8111;\u601d\u8def;\u667a\u529b;\u610f\u5411;\u60c5\u7eea\nv. \u4ecb\u610f;\u4e13\u5fc3\u4e8e;\u6ce8\u610f;\u7167\u987e", audio: "/audio/mixed/mixed-i/mind.mp3", phonemeMap: [{ ipa: "/a\u026and/", spelling: "ind" }] },
        ],
      },
      {
        name: "-ild /a\u026ald/",
        slug: "-ild",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "child", phonetic: "t\u0283a\u026ald", meaning: "n.\u513f\u7ae5;\u5c0f\u5b69;", audio: "/audio/mixed/mixed-i/child.mp3", phonemeMap: [{ ipa: "/a\u026ald/", spelling: "ild" }] },
        ],
      },
      {
        name: "-ild /a\u026ald/",
        slug: "-ild",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "wild", phonetic: "w\u02c8a\u026ald", meaning: "\u91ce\u5916", audio: "/audio/mixed/mixed-i/wild.mp3", phonemeMap: [{ ipa: "/a\u026ald/", spelling: "ild" }] },
        ],
      },
      {
        name: "-ild /a\u026ald/",
        slug: "-ild",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "mild", phonetic: "ma\u026ald", meaning: "adj. \u6e29\u548c\u7684\uff1b\u4e0d\u4e25\u91cd\u7684", audio: "/audio/mixed/mixed-i/mild.mp3", phonemeMap: [{ ipa: "/a\u026ald/", spelling: "ild" }] },
        ],
      },
      {
        name: "-igh /a\u026a/",
        slug: "-igh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "light", phonetic: "la\u026at", meaning: "n.\u5149;\u706f;\u5149\u7ebfadj.\u8f7b\u7684;\u6d45\u7684;\u660e\u4eae\u7684;\u5c11\u91cf\u7684v.\u70b9\u71c3;\u7167\u4eae;", audio: "/audio/mixed/mixed-i/light.mp3", phonemeMap: [{ ipa: "/a\u026a/", spelling: "igh" }] },
        ],
      },
      {
        name: "-igh /a\u026a/",
        slug: "-igh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "high", phonetic: "ha\u026a", meaning: "adj. \u9ad8\u7684\uff1b\u5bcc\u542b\u2026\u2026\u7684\uff1b\u91cd\u8981\u7684\uff1b\u5148\u8fdb\u7684\uff0c\u9ad8\u7ea7\u7684\uff1b\u5d07\u9ad8\u7684\uff1b\u9ad8\u97f3\u7684\uff0c\u58f0\u97f3\u5c16\u9510\u7684\uff1b\u5174\u9ad8\u91c7\u70c8\u7684\uff1b\u559d\u9189\u4e86\u7684\uff0c\uff08\u5438\u6bd2\u540e\uff09\u6781\u5ea6\u5174\u594b\u7684\uff1b\u5341\u5206\u8d5e\u540c\u7684\uff0c\u975e\u5e38\u5c0a\u656c\u7684\uff1b\u4e2d\u95f4\u7684\uff0c\u5168\u76db\u7684\uff1b\u5f00\u59cb\u53d8\u8d28\u7684\uff0c\u5f00\u59cb\u53d1\u998a\u7684\uff1b\uff08\u5b97\u6559\u6216\u653f\u6cbb\u89c2\u70b9\uff09\u6781\u7aef\u7684\uff0c\u504f\u6fc0\u7684\uff1b\uff08\u5143\u97f3\uff09\u820c\u4f4d\u9ad8\u7684\uff1bn. \u6700\u9ad8\u6c34\u5e73\uff0c\u6700\u5927\u6570\u91cf\uff1b\u5174\u594b\uff0c\u9ad8\u5174\uff1b\u9ad8\u6c14\u538b\u533a\uff1b\uff08\u6bd2\u54c1\u5f15\u81f4\u7684\uff09\u5feb\u611f\uff1b\u9ad8\u4e2d\uff0c\u4e2d\u5b66\uff1b\u5f3a\u6863\uff1b\u9ad8\u97f3\uff0c\u9ad8\u97f3\u7b26", audio: "/audio/mixed/mixed-i/high.mp3", phonemeMap: [{ ipa: "/a\u026a/", spelling: "igh" }] },
        ],
      },
      {
        name: "-igh /a\u026a/",
        slug: "-igh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "night", phonetic: "na\u026at", meaning: "n. \u591c\u665a;\u665a\u4e0a", audio: "/audio/mixed/mixed-i/night.mp3", phonemeMap: [{ ipa: "/a\u026a/", spelling: "igh" }] },
        ],
      },
      {
        name: "-ign /a\u026an/",
        slug: "-ign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "sign", phonetic: "sa\u026an", meaning: "n./v. \u7b26\u53f7\uff1b\u5f81\u5146\uff1b\u8ff9\u8c61\uff1b\u624b\u52bf\uff1b\u7b7e\uff08\u540d\uff09", audio: "/audio/mixed/mixed-i/sign.mp3", phonemeMap: [{ ipa: "/a\u026an/", spelling: "ign" }] },
        ],
      },
      {
        name: "-ign /a\u026an/",
        slug: "-ign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "design", phonetic: "d\u026a\u02c8za\u026an", meaning: "v./n. \u8bbe\u8ba1\uff1b\u8ba1\u5212/\u8bbe\u8ba1", audio: "/audio/mixed/mixed-i/design.mp3", syllables: ["de", "sign"], phonemeMap: [{ ipa: "/a\u026an/", spelling: "ign" }] },
        ],
      },
      {
        name: "-ign /a\u026an/",
        slug: "-ign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "assign", phonetic: "\u0259\u02c8sa\u026an", meaning: "v. \u5e03\u7f6e\uff1b\u5206\u914d\uff1b\u6307\u5b9a\uff1b\u786e\u5b9a", audio: "/audio/mixed/mixed-i/assign.mp3", syllables: ["as", "sign"], phonemeMap: [{ ipa: "/a\u026an/", spelling: "ign" }] },
        ],
      },
      {
        name: "-aign /e\u026an/",
        slug: "-aign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "campaign", phonetic: "k\u00e6m\u02c8pe\u026an", meaning: "n./v. \u6218\u5f79\uff1b\uff08\u793e\u4f1a\u3001\u653f\u6cbb\uff09\u8fd0\u52a8/\u53c2\u52a0\uff08\u6216\u9886\u5bfc\uff09\u8fd0\u52a8", audio: "/audio/mixed/mixed-i/campaign.mp3", syllables: ["cam", "paign"], phonemeMap: [{ ipa: "/e\u026an/", spelling: "aign" }] },
        ],
      },
      {
        name: "-eigh /e\u026a/",
        slug: "-eigh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "eight", phonetic: "e\u026at", meaning: "num. \u516b\uff1b\u516b\u4e2a\uff1b\u7b2c\u516b\uff1b\u516b\u5c81\uff1b\u516b\u70b9\uff1badj. \u516b\u7684", audio: "/audio/mixed/mixed-i/eight.mp3", syllables: ["e", "ight"], phonemeMap: [{ ipa: "/e\u026a/", spelling: "eigh" }] },
        ],
      },
      {
        name: "-eigh /e\u026a/",
        slug: "-eigh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "weigh", phonetic: "we\u026a", meaning: "v. \u79f0\uff0c\u79f0\u2026\u2026\u7684\u91cd\u91cf\uff1b\u91cd\uff0c\u6709\u2026\u2026\u91cd\uff1b\u8ba4\u771f\u8003\u8651\uff0c\u6743\u8861\uff1b\u5177\u6709\u91cd\u8981\u6027\uff0c\u5f71\u54cd\uff1b\u8d77\uff08\u951a\uff09\uff0c\u542f\u822a\uff1b\u4f7f\u70e6\u607c\uff0c\u4f7f\u5fe7\u8651\uff1b\u659f\u914c\uff08\u5b57\u53e5\uff09\uff1bn. \uff08\u822a\u6d77\uff09\uff08\u8239\uff09\u5728\u822a\u884c\u4e2d", audio: "/audio/mixed/mixed-i/weigh.mp3", syllables: ["we", "igh"], phonemeMap: [{ ipa: "/e\u026a/", spelling: "eigh" }] },
        ],
      },
      {
        name: "-eigh /e\u026a/",
        slug: "-eigh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "neighbour", phonetic: "n\u02c8e\u026ab\u025c", meaning: "\u90bb\u5c45", audio: "/audio/mixed/mixed-i/neighbour.mp3", syllables: ["neigh", "bour"], phonemeMap: [{ ipa: "/e\u026a/", spelling: "eigh" }] },
        ],
      },
      {
        name: "-eign /e\u026an/",
        slug: "-eign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "reign", phonetic: "re\u026an", meaning: "n./v. \u541b\u4e3b\u7edf\u6cbb\u7684\u65f6\u671f/\u7edf\u6cbb", audio: "/audio/mixed/mixed-i/reign.mp3", syllables: ["re", "ign"], phonemeMap: [{ ipa: "/e\u026an/", spelling: "eign" }] },
        ],
      },
      {
        name: "-eign /e\u026an/",
        slug: "-eign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "foreign", phonetic: "\u02c8f\u0252r\u0259n", meaning: "adj. \u5916\u56fd\u7684\uff1b\u5916\u6765\u7684\uff1b\u5916\u4ea4\u7684", audio: "/audio/mixed/mixed-i/foreign.mp3", syllables: ["fo", "reign"], phonemeMap: [{ ipa: "/e\u026an/", spelling: "eign" }] },
        ],
      },
      {
        name: "-eign /e\u026an/",
        slug: "-eign",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "sovereign", phonetic: "\u02c8s\u0252vr\u026an", meaning: "n. \u541b\u4e3b\uff0c\u5143\u9996\uff1b\u91d1\u9551\uff08\u65e7\u65f6\u82f1\u56fd\u91d1\u5e01\uff0c\u9762\u503c\u4e00\u82f1\u9551\uff09\uff1b\u72ec\u7acb\u56fd\uff1badj. \uff08\u56fd\u5bb6\uff09\u6709\u4e3b\u6743\u7684\uff0c\u5b8c\u5168\u72ec\u7acb\u7684\uff1b\u638c\u63e1\u5168\u90e8\u6743\u529b\u7684\uff0c\u6709\u81f3\u9ad8\u65e0\u4e0a\u7684\u6743\u529b\u7684\uff1b\u9996\u8981\u7684\uff1b\u975e\u5e38\u597d\u7684\uff0c\u975e\u5e38\u6709\u6548\u7684\uff1b\u4e0d\u6298\u4e0d\u6263\u7684", audio: "/audio/mixed/mixed-i/sovereign.mp3", syllables: ["sove", "reign"], phonemeMap: [{ ipa: "/e\u026an/", spelling: "eign" }] },
        ],
      },
      {
        name: "-aigh /e\u026a/",
        slug: "-aigh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "straight", phonetic: "stre\u026at", meaning: "adj./adv. \u76f4\u7684\uff1b\u7b14\u76f4\u5730\uff1b\u76f4\u63a5", audio: "/audio/mixed/mixed-i/straight.mp3", syllables: ["stra", "ight"], phonemeMap: [{ ipa: "/e\u026a/", spelling: "aigh" }] },
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
          { word: "cat", phonetic: "k\u00e6t", meaning: "n. \u732b\uff0c\u732b\u79d1\u52a8\u7269", audio: "/audio/mixed/mixed-cg/cat.mp3", phonemeMap: [{ ipa: "/k/", spelling: "c" }] },
        ],
      },
      {
        name: "c+a/o/u /k/",
        slug: "c+a/o/u",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cold", phonetic: "k\u0259\u028ald", meaning: "adj. \u51b7\u7684\uff0c\u51c9\u7684\uff1b\u51b7\u6de1\u7684\uff0c\u51b7\u6f20\u7684\uff1b\u51b7\u8272\u8c03\u7684\uff1b\u5df2\u53d8\u6de1\u7684\uff1b\u5931\u53bb\u77e5\u89c9\u7684\uff1b\u771f\u5b9e\u7684\uff0c\u5ba2\u89c2\u7684\uff1b\u626b\u5174\u7684\uff0c\u7070\u8499\u8499\u7684\uff1b\u8fdc\u672a\u731c\u4e2d\u7684\uff1bn. \u611f\u5192\uff0c\u4f24\u98ce\uff1b\u5bd2\u51b7\uff0c\u4f4e\u6e29", audio: "/audio/mixed/mixed-cg/cold.mp3", phonemeMap: [{ ipa: "/k/", spelling: "c" }] },
        ],
      },
      {
        name: "c+a/o/u /k/",
        slug: "c+a/o/u",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cup", phonetic: "k\u028cp", meaning: "n.\u676f\u5b50;\u8336\u676f;", audio: "/audio/mixed/mixed-cg/cup.mp3", phonemeMap: [{ ipa: "/k/", spelling: "c" }] },
        ],
      },
      {
        name: "c+e/i/y /s/",
        slug: "c+e/i/y",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "city", phonetic: "\u02c8s\u026ati", meaning: "n.\u57ce\u5e02;", audio: "/audio/mixed/mixed-cg/city.mp3", syllables: ["ci", "ty"], phonemeMap: [{ ipa: "/s/", spelling: "c" }] },
        ],
      },
      {
        name: "c+e/i/y /s/",
        slug: "c+e/i/y",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cent", phonetic: "sent", meaning: "n. \u5206\uff08\u7f8e\u5143\u3001\u6b27\u5143\u7b49\u7684\u8d27\u5e01\u5355\u4f4d\uff09\uff1b<\u975e\u6b63\u5f0f>\u5c0f\u94b1\uff1b<\u975e\u6b63\u5f0f>\u5206\u6beb\uff08\u7528\u6765\u5f3a\u8c03\u6ca1\u94b1\uff09\uff1b\uff08\u4e50\uff09\u97f3\u5206\uff1b\u3010\u540d\u3011 \uff08Cent\uff09\uff08\u6cd5\uff09\u6851\uff08\u4eba\u540d\uff09", audio: "/audio/mixed/mixed-cg/cent.mp3", phonemeMap: [{ ipa: "/s/", spelling: "c" }] },
        ],
      },
      {
        name: "c+e/i/y /s/",
        slug: "c+e/i/y",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cycle", phonetic: "\u02c8sa\u026ak(\u0259)l", meaning: "v./n. \u9a91/\u5468\u671f\uff1b\u81ea\u884c\u8f66", audio: "/audio/mixed/mixed-cg/cycle.mp3", syllables: ["cyc", "le"], phonemeMap: [{ ipa: "/s/", spelling: "c" }] },
        ],
      },
      {
        name: "ce /s/",
        slug: "ce",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "face", phonetic: "fe\u026as", meaning: "n. \u8138\uff0c\u9762\u90e8\uff1b\u9762\u90e8\u8868\u60c5\uff0c\u8138\u8272\uff1b\u4eba\uff1b\u521d\u770b\uff0c\u521d\u542c\uff1b\u5c0a\u4e25\uff0c\u5a01\u4fe1\uff1b\u9762\u8c8c\uff1b\uff08\u7269\u4f53\u7684\uff09\u6b63\u9762\uff0c\u8868\u9762\uff1b\u659c\u5761\uff0c\u5c71\u5761\uff1b\u949f\u9762\uff0c\u8868\u76d8\uff1b\u91c7\u6398\u9762\uff0c\u5de5\u4f5c\u9762\uff1b\uff08\u7403\u62cd\u7684\uff09\u62cd\u9762\uff1b\uff08\u5c24\u6307\u8db3\u7403\u7684\uff09\u7403\u95e8\uff1bv. \u9762\u4e34\uff0c\u906d\u9047\uff1b\u6b63\u89c6\uff0c\u9762\u5bf9\uff1b\u4e0e\u2026\u2026\u4ea4\u5f80\uff0c\u4e0e\u2026\u2026\u4ea4\u8c08\uff1b\u9762\u5411\uff0c\u9762\u671d\uff1b\u8fce\u6218\uff0c\u5bf9\u9635\uff1b\u62b9\u76d6\uff0c\u8986\u76d6\uff1b\u63a5\u53d7\uff0c\u5bb9\u5fcd", audio: "/audio/mixed/mixed-cg/face.mp3", phonemeMap: [{ ipa: "/s/", spelling: "ce" }] },
        ],
      },
      {
        name: "ce /s/",
        slug: "ce",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "rice", phonetic: "ra\u026as", meaning: "n.\u7c73\u996d;", audio: "/audio/mixed/mixed-cg/rice.mp3", phonemeMap: [{ ipa: "/s/", spelling: "ce" }] },
        ],
      },
      {
        name: "ce /s/",
        slug: "ce",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "place", phonetic: "ple\u026as", meaning: "n.\u5730\u65b9;\u65b9\u4f4dv.\u5b89\u7f6e;\u5b89\u653e;", audio: "/audio/mixed/mixed-cg/place.mp3", phonemeMap: [{ ipa: "/s/", spelling: "ce" }] },
        ],
      },
      {
        name: "g+a/o/u /\u0261/",
        slug: "g+a/o/u",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "got", phonetic: "\u0261\u0252t", meaning: "v. \u5f97\u5230\uff0c\u660e\u767d\uff08get \u7684\u8fc7\u53bb\u5f0f\u548c\u8fc7\u53bb\u5206\u8bcd\uff09\uff1bn. \uff08Got\uff09\u4eba\u540d\uff1b\uff08\u6cd5\uff09\u6208\uff1b\uff08\u897f\u3001\u5308\u3001\u745e\u5178\uff09\u6208\u7279", audio: "/audio/mixed/mixed-cg/got.mp3", phonemeMap: [{ ipa: "/\u0261/", spelling: "g" }] },
        ],
      },
      {
        name: "g+a/o/u /\u0261/",
        slug: "g+a/o/u",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "garden", phonetic: "\u02c8\u0261\u0251\u02d0dn", meaning: "n.\u82b1\u56edv.\u4ece\u4e8b\u56ed\u827a;", audio: "/audio/mixed/mixed-cg/garden.mp3", syllables: ["gar", "den"], phonemeMap: [{ ipa: "/\u0261/", spelling: "g" }] },
        ],
      },
      {
        name: "g+a/o/u /\u0261/",
        slug: "g+a/o/u",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "gum", phonetic: "\u0261\u028cm", meaning: "n. \u53e3\u9999\u7cd6\u3001\u6811\u80f6", audio: "/audio/mixed/mixed-cg/gum.mp3", phonemeMap: [{ ipa: "/\u0261/", spelling: "g" }] },
        ],
      },
      {
        name: "g+e/i/y /d\u0292/",
        slug: "g+e/i/y",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "giant", phonetic: "\u02c8d\u0292a\u026a\u0259nt", meaning: "n. \uff08\u4f20\u8bf4\u4e2d\u7684\uff09\u5de8\u4eba\uff1b\u9ad8\u5927\u5065\u58ee\u7684\u4eba\uff1b\u5de8\u517d\uff0c\u5de8\u578b\u690d\u7269\uff1b\u5927\u516c\u53f8\uff0c\u5927\u56fd\uff1b\u5353\u8d8a\u4eba\u7269\uff0c\u4f1f\u4eba\uff1b\uff08\u5929\u6587\uff09\u5de8\u661f\uff1badj. \u5de8\u5927\u7684\uff0c\u4f1f\u5927\u7684", audio: "/audio/mixed/mixed-cg/giant.mp3", syllables: ["gi", "ant"], phonemeMap: [{ ipa: "/d\u0292/", spelling: "g" }] },
        ],
      },
      {
        name: "g+e/i/y /d\u0292/",
        slug: "g+e/i/y",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "gym", phonetic: "d\u0292\u026am", meaning: "n. \u4f53\u80b2\u9986\uff1b\u8fd0\u52a8\u573a", audio: "/audio/mixed/mixed-cg/gym.mp3", phonemeMap: [{ ipa: "/d\u0292/", spelling: "g" }] },
        ],
      },
      {
        name: "g+e/i/y /d\u0292/",
        slug: "g+e/i/y",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "giraffe", phonetic: "d\u0292\u0259\u02c8r\u0251\u02d0f", meaning: "n. \u957f\u9888\u9e7f", audio: "/audio/mixed/mixed-cg/giraffe.mp3", syllables: ["gi", "raffe"], phonemeMap: [{ ipa: "/d\u0292/", spelling: "g" }] },
        ],
      },
      {
        name: "ge /d\u0292/",
        slug: "ge",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "page", phonetic: "pe\u026ad\u0292", meaning: "n.\u7248;\u9875\u9762;", audio: "/audio/mixed/mixed-cg/page.mp3", phonemeMap: [{ ipa: "/d\u0292/", spelling: "ge" }] },
        ],
      },
      {
        name: "ge /d\u0292/",
        slug: "ge",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "large", phonetic: "l\u0251\u02d0d\u0292", meaning: "adj. \uff08\u5c3a\u5bf8\u3001\u8303\u56f4\u3001\u5bb9\u91cf\uff09\u5927\u7684\uff1b\u5e7f\u6cdb\u7684\uff0c\u91cd\u8981\u7684\uff1b\u8eab\u6750\u9ad8\u5927\u7684\uff1b\uff08\u516c\u53f8\u6216\u7ec4\u7ec7\uff09\u5927\u89c4\u6a21\u7684\uff1bn. \u5927\u53f7\uff0c\u540c\u7c7b\u4e2d\u6700\u5927\u8005", audio: "/audio/mixed/mixed-cg/large.mp3", phonemeMap: [{ ipa: "/d\u0292/", spelling: "ge" }] },
        ],
      },
      {
        name: "ge /d\u0292/",
        slug: "ge",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "orange", phonetic: "\u02c8\u0252r\u026and\u0292", meaning: "n. \u6a59\u5b50", audio: "/audio/mixed/mixed-cg/orange.mp3", syllables: ["o", "range"], phonemeMap: [{ ipa: "/d\u0292/", spelling: "ge" }] },
        ],
      },
      {
        name: "qu /kw/",
        slug: "qu",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "queen", phonetic: "kwi\u02d0n", meaning: "n. \u738b\u540e\uff1b\u5973\u738b", audio: "/audio/mixed/mixed-cg/queen.mp3", syllables: ["qu", "e", "en"], phonemeMap: [{ ipa: "/kw/", spelling: "qu" }] },
        ],
      },
      {
        name: "qu /kw/",
        slug: "qu",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "quick", phonetic: "kw\u02c8\u026ak", meaning: "\u5feb\u7684", audio: "/audio/mixed/mixed-cg/quick.mp3", syllables: ["qu", "ick"], phonemeMap: [{ ipa: "/kw/", spelling: "qu" }] },
        ],
      },
      {
        name: "qu /kw/",
        slug: "qu",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "quiet", phonetic: "\u02c8kwa\u026a\u0259t", meaning: "adj. \u5b89\u9759\u7684", audio: "/audio/mixed/mixed-cg/quiet.mp3", syllables: ["qu", "iet"], phonemeMap: [{ ipa: "/kw/", spelling: "qu" }] },
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
          { word: "post", phonetic: "p\u0259\u028ast", meaning: "\u804c\u4f4d\uff0c\u90ae\u653f", audio: "/audio/mixed/mixed-o/post.mp3", phonemeMap: [{ ipa: "/\u0259\u028ast/", spelling: "ost" }] },
        ],
      },
      {
        name: "-ost /\u0259\u028ast/",
        slug: "-ost",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "most", phonetic: "m\u0259\u028ast", meaning: "det. \uff08\u6570\u91cf\u4e0a\uff09\u6700\u591a\uff0c\u6700\u5927\uff08 much, a lot of, many \u7684\u6700\u9ad8\u7ea7\uff09\uff1b\u5927\u591a\u6570\uff1bpron. \uff08\u6570\u91cf\u4e0a\uff09\u6700\u591a\uff0c\u6700\u5927\uff08 much, a lot of, many \u7684\u6700\u9ad8\u7ea7\uff09\uff1b\u5927\u591a\u6570", audio: "/audio/mixed/mixed-o/most.mp3", phonemeMap: [{ ipa: "/\u0259\u028ast/", spelling: "ost" }] },
        ],
      },
      {
        name: "-ost /\u0259\u028ast/",
        slug: "-ost",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "host", phonetic: "h\u0259\u028ast", meaning: "n. \u4e3b\u4eba\uff0c\u4e1c\u9053\u4e3b", audio: "/audio/mixed/mixed-o/host.mp3", phonemeMap: [{ ipa: "/\u0259\u028ast/", spelling: "ost" }] },
        ],
      },
      {
        name: "-old /\u0259\u028ald/",
        slug: "-old",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "old", phonetic: "\u0259\u028ald", meaning: "adj. \uff08\u4eba\uff09\u2026\u2026\u5c81\u7684\uff0c\uff08\u4e8b\u7269\uff09\u5b58\u5728\u2026\u2026\u4e45\u7684\uff1b\u5e74\u8001\u7684\uff0c\u5e74\u7eaa\u5927\u7684\uff1b\u8870\u8001\u7684\uff1b\u53e4\u8001\u7684\uff0c\u5386\u53f2\u60a0\u4e45\u7684\uff1b\u9648\u65e7\u7684\uff1b\u8fc7\u53bb\u7684\uff0c\u4ece\u524d\u7684\uff1b\u539f\u6765\uff08\u5c5e\u4e8e\u81ea\u5df1\u7684\uff09\u7684\uff1b\u7ed3\u8bc6\u4e45\u7684\uff1b<\u975e\u6b63\u5f0f>\uff08\u8868\u793a\u4eb2\u6635\uff09\u8001\u2026\u2026\uff1b\uff08\u8bed\u8a00\u5f62\u5f0f\uff09\u53e4\u7684\uff0c\u65e9\u671f\u7684\uff1b\u8001\u6d3e\u7684\uff0c\u5b88\u65e7\u7684\uff1b\u8001\u4e00\u5957\u7684\uff0c\u7ecf\u5386\u591a\u6b21\u7684\uff1bn. \u8001\u5e74\u4eba\uff1b\u67d0\u4e2a\u5e74\u9f84\u6bb5\u7684\u4eba\uff1b\u53e4\u65f6", audio: "/audio/mixed/mixed-o/old.mp3", phonemeMap: [{ ipa: "/\u0259\u028ald/", spelling: "old" }] },
        ],
      },
      {
        name: "-old /\u0259\u028ald/",
        slug: "-old",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cold", phonetic: "k\u0259\u028ald", meaning: "adj. \u51b7\u7684\uff0c\u51c9\u7684\uff1b\u51b7\u6de1\u7684\uff0c\u51b7\u6f20\u7684\uff1b\u51b7\u8272\u8c03\u7684\uff1b\u5df2\u53d8\u6de1\u7684\uff1b\u5931\u53bb\u77e5\u89c9\u7684\uff1b\u771f\u5b9e\u7684\uff0c\u5ba2\u89c2\u7684\uff1b\u626b\u5174\u7684\uff0c\u7070\u8499\u8499\u7684\uff1b\u8fdc\u672a\u731c\u4e2d\u7684\uff1bn. \u611f\u5192\uff0c\u4f24\u98ce\uff1b\u5bd2\u51b7\uff0c\u4f4e\u6e29", audio: "/audio/mixed/mixed-o/cold.mp3", phonemeMap: [{ ipa: "/\u0259\u028ald/", spelling: "old" }] },
        ],
      },
      {
        name: "-old /\u0259\u028ald/",
        slug: "-old",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "gold", phonetic: "\u0261\u0259\u028ald", meaning: "n.\u91d1;\u91d1\u5e01;\u91d1\u9ec4\u8272adj.\u91d1\u8272\u7684;", audio: "/audio/mixed/mixed-o/gold.mp3", phonemeMap: [{ ipa: "/\u0259\u028ald/", spelling: "old" }] },
        ],
      },
      {
        name: "-oll /\u0259\u028al/",
        slug: "-oll",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "roll", phonetic: "r\u02c8o\u028al", meaning: "\u540d\u518c\uff0c\u6eda\u52a8", audio: "/audio/mixed/mixed-o/roll.mp3", phonemeMap: [{ ipa: "/\u0259\u028al/", spelling: "oll" }] },
        ],
      },
      {
        name: "-oll /\u0259\u028al/",
        slug: "-oll",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "toll", phonetic: "t\u0259\u028al", meaning: "n. \uff08\u9053\u8def\u3001\u6865\u6881\u7b49\u7684\uff09\u901a\u884c\u8d39\uff1b<\u7f8e>\u957f\u9014\u7535\u8bdd\u8d39\uff1b\uff08\u4e8b\u6545\u3001\u707e\u96be\u3001\u6218\u4e89\u7b49\u7684\uff09\u4f24\u4ea1\u4eba\u6570\uff1b\u4e25\u91cd\u7684\u4e0d\u826f\u5f71\u54cd\uff1b\uff08\u7f13\u6162\u7684\uff09\u949f\u58f0\uff1bv. \uff08\u7f13\u6162\u5730\uff09\u6572\uff08\u949f\uff09\uff0c\u9e23\uff08\u949f\uff09\uff1b\u9e23\u949f\u544a\u77e5\uff1b\u6536\u53d6\uff08\u6865\u6881\u6216\u9053\u8def\u7684\uff09\u901a\u884c\u8d39", audio: "/audio/mixed/mixed-o/toll.mp3", phonemeMap: [{ ipa: "/\u0259\u028al/", spelling: "oll" }] },
        ],
      },
      {
        name: "-oll /\u0259\u028al/",
        slug: "-oll",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "stroll", phonetic: "str\u0259\u028al", meaning: "v. \u6563\u6b65\uff0c\u95f2\u901b\uff1b\uff08\u4f53\u80b2\u6bd4\u8d5b\uff09\u8f7b\u800c\u6613\u4e3e\u5730\u83b7\u80dc\uff1bn. \u6563\u6b65\uff0c\u6e9c\u8fbe\uff1b\uff08\u7ade\u8d5b\u4e2d\uff09\u8f7b\u6613\u7684\u80dc\u5229", audio: "/audio/mixed/mixed-o/stroll.mp3", phonemeMap: [{ ipa: "/\u0259\u028al/", spelling: "oll" }] },
        ],
      },
      {
        name: "-ough /\u0252f/",
        slug: "-ough",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cough", phonetic: "k\u0252f", meaning: "n.\u54b3\u55fdv.\u54b3\u55fd;", audio: "/audio/mixed/mixed-o/cough.mp3", syllables: ["co", "ugh"], phonemeMap: [{ ipa: "/\u0252f/", spelling: "ough" }] },
        ],
      },
      {
        name: "-ough /\u0252f/",
        slug: "-ough",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "tough", phonetic: "t\u028cf", meaning: "adj. \u5f3a\u786c\u7684;\u8270\u82e6\u7684;\u4e25\u5389\u7684", audio: "/audio/mixed/mixed-o/tough.mp3", syllables: ["to", "ugh"], phonemeMap: [{ ipa: "/\u0252f/", spelling: "ough" }] },
        ],
      },
      {
        name: "-ough /\u0252f/",
        slug: "-ough",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "though", phonetic: "\u00f0\u0259\u028a", meaning: "conj.  \u867d\u7136\uff0c\u5c3d\u7ba1\uff1b\u53ef\u662f\uff0c\u4e0d\u8fc7\uff1badv. \u4e0d\u8fc7\uff0c\u53ef\u662f\uff0c\u7136\u800c", audio: "/audio/mixed/mixed-o/though.mp3", syllables: ["tho", "ugh"], phonemeMap: [{ ipa: "/\u0252f/", spelling: "ough" }] },
        ],
      },
      {
        name: "-ought /\u0254\u02d0t/",
        slug: "-ought",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "thought", phonetic: "\u03b8\u0254\u02d0t", meaning: "n.\u601d\u60f3;\u60f3\u6cd5v.\u60f3;\u601d\u8003;\u201cthink\u201d\u7684\u8fc7\u53bb\u5f0f\u548c\u8fc7\u53bb\u5206\u8bcd;", audio: "/audio/mixed/mixed-o/thought.mp3", syllables: ["tho", "ught"], phonemeMap: [{ ipa: "/\u0254\u02d0t/", spelling: "ought" }] },
        ],
      },
      {
        name: "-ought /\u0254\u02d0t/",
        slug: "-ought",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bought", phonetic: "b\u0254\u02d0t", meaning: "v. \u4e70\uff08buy \u7684\u8fc7\u53bb\u5f0f\u548c\u8fc7\u53bb\u5206\u8bcd\uff09\uff1badj. \u4ece\u5546\u5e97\u8d2d\u4e70\u7684", audio: "/audio/mixed/mixed-o/bought.mp3", syllables: ["bo", "ught"], phonemeMap: [{ ipa: "/\u0254\u02d0t/", spelling: "ought" }] },
        ],
      },
      {
        name: "-ought /\u0254\u02d0t/",
        slug: "-ought",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "brought", phonetic: "br\u0254\u02d0t", meaning: "v. \u5e26\u6765\uff08bring \u7684\u8fc7\u53bb\u5206\u8bcd\uff09", audio: "/audio/mixed/mixed-o/brought.mp3", syllables: ["bro", "ught"], phonemeMap: [{ ipa: "/\u0254\u02d0t/", spelling: "ought" }] },
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
          { word: "table", phonetic: "\u02c8te\u026ab(\u0259)l", meaning: "n. \u8868\u683c\uff1b\u684c\u5b50", audio: "/audio/mixed/mixed-ending/table.mp3", syllables: ["tab", "le"], phonemeMap: [{ ipa: "/bl/", spelling: "ble" }] },
        ],
      },
      {
        name: "-ble /bl/",
        slug: "-ble",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "able", phonetic: "\u02c8e\u026ab(\u0259)l", meaning: "adj. \u80fd\u591f\uff0c\u6709\u80fd\u529b\u7684\uff1b\u806a\u660e\u80fd\u5e72\u7684\uff0c\u7cbe\u901a\uff08\u67d0\u4e8b\uff09\u7684\uff1b\u3010\u540d\u3011 \uff08Able\uff09\uff08\u82f1\uff09\u57c3\u5e03\u5c14\uff0c\uff08\u4f0a\u6717\uff09\u963f\u5e03\u52d2\uff08\u4eba\u540d\uff09", audio: "/audio/mixed/mixed-ending/able.mp3", syllables: ["ab", "le"], phonemeMap: [{ ipa: "/bl/", spelling: "ble" }] },
        ],
      },
      {
        name: "-ble /bl/",
        slug: "-ble",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bubble", phonetic: "\u02c8b\u028cb(\u0259)l", meaning: "n. \u6c14\u6ce1\uff0c\u6ce1\u6cab\uff1b\u7ecf\u6d4e\u6ce1\u6cab\uff1b\uff08\u6b32\u8868\u8fbe\u7684\uff09\u4e00\u70b9\u611f\u60c5\uff1b\u6c14\u6ce1\u6846\uff1b\u6ce1\u72b6\u7269\uff1b\u5b89\u5168\u7684\u5730\u65b9\uff08\u6216\u4f4d\u7f6e\uff09\uff1b\u6ce1\u87ba\uff1bv. \u5192\u6ce1\uff0c\u6cb8\u817e\uff1b\u53d1\u51fa\u5192\u6ce1\u7684\u58f0\u97f3\uff1b\u5fd9\u788c\uff0c\u6d3b\u8dc3\uff1b\u5174\u594b\uff0c\u6fc0\u52a8\uff1b\uff08\u60c5\u7eea\u3001\u611f\u60c5\u7b49\uff09\u6d8c\u52a8", audio: "/audio/mixed/mixed-ending/bubble.mp3", syllables: ["bubb", "le"], phonemeMap: [{ ipa: "/bl/", spelling: "ble" }] },
        ],
      },
      {
        name: "-dle /dl/",
        slug: "-dle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "candle", phonetic: "\u02c8k\u00e6nd(\u0259)l", meaning: "n. \u8721\u70db", audio: "/audio/mixed/mixed-ending/candle.mp3", syllables: ["cand", "le"], phonemeMap: [{ ipa: "/dl/", spelling: "dle" }] },
        ],
      },
      {
        name: "-dle /dl/",
        slug: "-dle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "middle", phonetic: "\u02c8m\u026ad(\u0259)l", meaning: "adj. \u4e2d\u95f4\u7684\uff0c\u4e2d\u7b49\u7684\uff1b\u6298\u4e2d\u7684\uff0c\u4e2d\u5eb8\u4e4b\u9053\u7684\uff1b\uff08\u8bed\u8a00\uff09\u4e2d\u53e4\u7684\uff0c\u4ecb\u4e8e\u73b0\u4ee3\u4e0e\u53e4\u4ee3\u4e4b\u95f4\u7684\uff1b\u8bed\u6cd5\u4e2d\u52a8\u6001\u7684\uff0c\u4e2d\u95f4\u53cd\u8eab\u6001\u7684\uff1b\uff08\u82f1\u8bed\u53ca\u7269\u52a8\u8bcd\uff09\u65e0\u88ab\u52a8\u6001\u7684\uff1bn. \u4e2d\u95f4\uff0c\u4e2d\u90e8\uff0c\u4e2d\u7b49\uff1b\u8170\u90e8\uff1b\u8bed\u6cd5\u4e2d\u52a8\u6001\uff0c\u4e2d\u95f4\u53cd\u8eab\u6001", audio: "/audio/mixed/mixed-ending/middle.mp3", syllables: ["midd", "le"], phonemeMap: [{ ipa: "/dl/", spelling: "dle" }] },
        ],
      },
      {
        name: "-dle /dl/",
        slug: "-dle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "noodle", phonetic: "\u02c8nu\u02d0d(\u0259)l", meaning: "n. \u9762\u6761\uff1b<\u975e\u6b63\u5f0f>\u7b28\u86cb\uff0c\u8822\u4eba\uff1b<\u975e\u6b63\u5f0f>\u4eba\u5934\uff0c\u8111\u888b\uff1bv. <\u7f8e\uff0c\u975e\u6b63\u5f0f>\uff08\u968f\u610f\u5730\uff09\u62e8\u5f04\u4e50\u5668\uff1b<\u7f8e\uff0c\u975e\u6b63\u5f0f>\uff08\u968f\u610f\u5730\uff09\u601d\u8003\uff0c\u915d\u917f\uff1b<\u6fb3\uff0c\u975e\u6b63\u5f0f>\u641c\u5bfb\uff08\u86cb\u767d\u77f3\u7b49\uff09", audio: "/audio/mixed/mixed-ending/noodle.mp3", syllables: ["no", "odle"], phonemeMap: [{ ipa: "/dl/", spelling: "dle" }] },
        ],
      },
      {
        name: "-cle /kl/",
        slug: "-cle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "circle", phonetic: "\u02c8s\u025c\u02d0k(\u0259)l", meaning: "n. \u5706", audio: "/audio/mixed/mixed-ending/circle.mp3", syllables: ["circ", "le"], phonemeMap: [{ ipa: "/kl/", spelling: "cle" }] },
        ],
      },
      {
        name: "-cle /kl/",
        slug: "-cle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "uncle", phonetic: "\u02c8\u028c\u014bk(\u0259)l", meaning: "n. \u53d4\u53d4\uff1b\u4f2f\u7236\uff1b\u4f2f\u4f2f\uff1b\u8205\u7236\uff1b\u59e8\u4e08\uff1b\u59d1\u7236", audio: "/audio/mixed/mixed-ending/uncle.mp3", syllables: ["unc", "le"], phonemeMap: [{ ipa: "/kl/", spelling: "cle" }] },
        ],
      },
      {
        name: "-cle /kl/",
        slug: "-cle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bicycle", phonetic: "\u02c8ba\u026as\u026ak(\u0259)l", meaning: "n.\u81ea\u884c\u8f66;\u811a\u8e0f\u8f66;", audio: "/audio/mixed/mixed-ending/bicycle.mp3", syllables: ["bi", "cyc", "le"], phonemeMap: [{ ipa: "/kl/", spelling: "cle" }] },
        ],
      },
      {
        name: "-kle /kl/",
        slug: "-kle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "pickle", phonetic: "\u02c8p\u026akl", meaning: "n. \u6ce1\u83dc\uff0c\u814c\u83dc\uff1b\u83dc\u9171\uff0c\u6ce1\u83dc\u6c41\uff1b<\u7f8e>\u814c\u9ec4\u74dc\uff1b<\u975e\u6b63\u5f0f>\u56f0\u5883\uff1b<\u82f1\uff0c\u975e\u6b63\u5f0f\uff0c\u65e7>\u6363\u86cb\u9b3c\uff0c\u8ba8\u538c\u9b3c\uff1b\uff08\u7528\u6765\u6e05\u6d17\u91d1\u5c5e\u7269\u4f53\u7684\uff09\u6de1\u9178\u6c34\uff1bv. \u76d0\u814c\u5236\uff0c\u918b\u6e0d\uff1b\u9178\u6d17\uff08\u91d1\u5c5e\uff09", audio: "/audio/mixed/mixed-ending/pickle.mp3", phonemeMap: [{ ipa: "/kl/", spelling: "kle" }] },
        ],
      },
      {
        name: "-kle /kl/",
        slug: "-kle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "sprinkle", phonetic: "\u02c8spr\u026a\u014bk(\u0259)l", meaning: "v./n. \u6492\uff1b\u4e0b\u5c0f\u96e8/\u5c11\u91cf\uff1b\u5c0f\u96e8", audio: "/audio/mixed/mixed-ending/sprinkle.mp3", syllables: ["sprink", "le"], phonemeMap: [{ ipa: "/kl/", spelling: "kle" }] },
        ],
      },
      {
        name: "-kle /kl/",
        slug: "-kle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "ankle", phonetic: "\u02c8\u00e6\u014bk(\u0259)l", meaning: "n. \u8e1d;\u8e1d\u5173\u8282", audio: "/audio/mixed/mixed-ending/ankle.mp3", syllables: ["ank", "le"], phonemeMap: [{ ipa: "/kl/", spelling: "kle" }] },
        ],
      },
      {
        name: "-gle /\u0261l/",
        slug: "-gle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "eagle", phonetic: "\u02c8i\u02d0\u0261(\u0259)l", meaning: "n. \u96d5", audio: "/audio/mixed/mixed-ending/eagle.mp3", syllables: ["e", "agle"], phonemeMap: [{ ipa: "/\u0261l/", spelling: "gle" }] },
        ],
      },
      {
        name: "-gle /\u0261l/",
        slug: "-gle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "angle", phonetic: "\u02c8\u00e6\u014b\u0261(\u0259)l", meaning: "n. \u89d2\u5ea6\uff1b\u811a", audio: "/audio/mixed/mixed-ending/angle.mp3", syllables: ["ang", "le"], phonemeMap: [{ ipa: "/\u0261l/", spelling: "gle" }] },
        ],
      },
      {
        name: "-gle /\u0261l/",
        slug: "-gle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "single", phonetic: "\u02c8s\u026a\u014b\u0261(\u0259)l", meaning: "adj. \u5355\u4e00\u7684\uff1b\u5355\u8eab\u7684", audio: "/audio/mixed/mixed-ending/single.mp3", syllables: ["sing", "le"], phonemeMap: [{ ipa: "/\u0261l/", spelling: "gle" }] },
        ],
      },
      {
        name: "-ple /pl/",
        slug: "-ple",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "apple", phonetic: "\u02c8\u00e6p(\u0259)l", meaning: "n. \u82f9\u679c", audio: "/audio/mixed/mixed-ending/apple.mp3", syllables: ["app", "le"], phonemeMap: [{ ipa: "/pl/", spelling: "ple" }] },
        ],
      },
      {
        name: "-ple /pl/",
        slug: "-ple",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "people", phonetic: "\u02c8pi\u02d0p(\u0259)l", meaning: "n. \u4eba\uff0c\u4eba\u7c7b\uff1b\u4eba\u4eec\uff0c\u5927\u5bb6\uff08the people\uff09\uff1b\u5e73\u6c11\uff0c\u8001\u767e\u59d3\uff08the people\uff09\uff1b\u6c11\u65cf\uff0c\u79cd\u65cf\uff08peoples\uff09\uff1b\uff08\u5177\u6709\u5171\u540c\u54c1\u8d28\u3001\u5174\u8da3\u7b49\u7684\uff09\u4eba\u5458\uff0c\u56e2\u4f53\uff1b\u4e0e\u67d0\u4eba\u6709\u8054\u7cfb\u7684\u4eba\u4eec\uff08one's people\uff09\uff1b<\u7f8e\uff0c\u975e\u6b63\u5f0f>\u5404\u4f4d\uff0c\u8bf8\u4f4d\uff1b<\u7f8e>\uff08\u5ba1\u5224\u4e2d\u7684\uff09\u516c\u8bc9\u4eba\uff08the People\uff09\uff1bv. \u5c45\u4f4f\u5728\uff0c\u5b9a\u5c45\u4e8e\uff1b\u5145\u6ee1\uff0c\u5145\u65a5\u7740\uff08\u67d0\u79cd\u7c7b\u578b\u7684\u4eba\uff09", audio: "/audio/mixed/mixed-ending/people.mp3", syllables: ["pe", "ople"], phonemeMap: [{ ipa: "/pl/", spelling: "ple" }] },
        ],
      },
      {
        name: "-ple /pl/",
        slug: "-ple",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "simple", phonetic: "\u02c8s\u026amp(\u0259)l", meaning: "adj.\u7b80\u5355\u7684;\u6734\u7d20\u7684;\u5355\u7eaf\u7684;", audio: "/audio/mixed/mixed-ending/simple.mp3", syllables: ["simp", "le"], phonemeMap: [{ ipa: "/pl/", spelling: "ple" }] },
        ],
      },
      {
        name: "-tle /tl/",
        slug: "-tle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "little", phonetic: "\u02c8l\u026at(\u0259)l", meaning: "adj. \u5c0f\u7684\uff0c\u6bd4\u8f83\u5c0f\u7684\uff1b\u7528\u4e8e\u5f3a\u8c03\u5bf9\u67d0\u4eba\u6216\u67d0\u7269\u7684\u610f\u89c1\uff1b\u5e74\u5e7c\u7684\uff1b\u77ed\u6682\u7684\uff0c\u8fd1\u7684\uff1b\u5fae\u4e0d\u8db3\u9053\u7684\uff1b\u53ef\u7231\u7684\uff0c\u53ef\u601c\u7684\uff1bdet. \u4e00\u70b9\u513f\uff0c\u5c11\u5f97\u51e0\u4e4e\u6ca1\u6709\uff1b\u5c11\u91cf\u7684\uff0c\u4e00\u4e9b", audio: "/audio/mixed/mixed-ending/little.mp3", syllables: ["litt", "le"], phonemeMap: [{ ipa: "/tl/", spelling: "tle" }] },
        ],
      },
      {
        name: "-tle /tl/",
        slug: "-tle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bottle", phonetic: "\u02c8b\u0252t(\u0259)l", meaning: "n. \u74f6\u5b50\uff1b\u4e00\u74f6\uff08\u7684\u91cf\uff09\uff1b\u9152\uff1b\u5976\u74f6\uff0c\u4e73\u996e\u54c1\uff1b<\u82f1\uff0c\u975e\u6b63\u5f0f>\u4fe1\u5fc3\uff0c\u52c7\u6c14\uff1b<\u975e\u6b63\u5f0f>\u9152\u7656\uff0c\u55dc\u9152\uff1bv. \u88c5\u74f6\uff1b<\u975e\u6b63\u5f0f>\u7528\u73bb\u7483\u74f6\u7838\uff1b<\u82f1\uff0c\u975e\u6b63\u5f0f>\u4e27\u5931\u52c7\u6c14\uff0c\u6cc4\u6c14", audio: "/audio/mixed/mixed-ending/bottle.mp3", syllables: ["bott", "le"], phonemeMap: [{ ipa: "/tl/", spelling: "tle" }] },
        ],
      },
      {
        name: "-tle /tl/",
        slug: "-tle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "battle", phonetic: "\u02c8b\u00e6t(\u0259)l", meaning: "n./v. \u6218\u6597\uff0c\u6218\u5f79/\u4e0e...\u6218\u6597", audio: "/audio/mixed/mixed-ending/battle.mp3", syllables: ["batt", "le"], phonemeMap: [{ ipa: "/tl/", spelling: "tle" }] },
        ],
      },
      {
        name: "-zle /zl/",
        slug: "-zle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "puzzle", phonetic: "\u02c8p\u028cz(\u0259)l", meaning: "n./v. \u96be\u9898\uff1b\u8c1c\u3002\u4f7f\u8ff7\u60d1", audio: "/audio/mixed/mixed-ending/puzzle.mp3", syllables: ["puzz", "le"], phonemeMap: [{ ipa: "/zl/", spelling: "zle" }] },
        ],
      },
      {
        name: "-zle /zl/",
        slug: "-zle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "drizzle", phonetic: "\u02c8dr\u026az(\u0259)l", meaning: "v. \u4e0b\u6bdb\u6bdb\u96e8\uff0c\u4e0b\u8499\u8499\u7ec6\u96e8\uff1b \uff08\u6bdb\u6bdb\u96e8\u4f3c\u7684\uff09\u6d12\u843d\uff1b\uff08\u6bdb\u6bdb\u96e8\u4f3c\u7684\uff09\u6d12\u843d\uff1bn. \u6bdb\u6bdb\u7ec6\u96e8\uff0c\u8499\u8499\u7ec6\u96e8\uff1b\uff08\u70f9\uff09\uff08\u6d47\u5728\u98df\u54c1\u4e0a\u7684\uff09\u6db2\u6001\u8c03\u6599\u7ec6\u6d41", audio: "/audio/mixed/mixed-ending/drizzle.mp3", syllables: ["drizz", "le"], phonemeMap: [{ ipa: "/zl/", spelling: "zle" }] },
        ],
      },
      {
        name: "-zle /zl/",
        slug: "-zle",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "fizzle", phonetic: "\u02c8f\u026azl", meaning: "vi. \u5931\u8d25\uff1b\u53d1\u5636\u5636\u58f0\uff1b\u840e\u9761\uff1bn. \u5931\u8d25\uff1b\u5636\u5636\u58f0", audio: "/audio/mixed/mixed-ending/fizzle.mp3", phonemeMap: [{ ipa: "/zl/", spelling: "zle" }] },
        ],
      },
      {
        name: "-sure /\u0292\u0259/",
        slug: "-sure",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "measure", phonetic: "\u02c8me\u0292\u0259(r)", meaning: "v./n. \u6d4b\u91cf\uff1b\u8861\u91cf\uff1b\u63aa\u65bd", audio: "/audio/mixed/mixed-ending/measure.mp3", syllables: ["mea", "sure"], phonemeMap: [{ ipa: "/\u0292\u0259/", spelling: "sure" }] },
        ],
      },
      {
        name: "-sure /\u0292\u0259/",
        slug: "-sure",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "pleasure", phonetic: "\u02c8ple\u0292\u0259(r)", meaning: "n. \u5feb\u4e50;\u9ad8\u5174;\u6109\u5feb\nv. \u4f7f\u9ad8\u5174", audio: "/audio/mixed/mixed-ending/pleasure.mp3", syllables: ["plea", "sure"], phonemeMap: [{ ipa: "/\u0292\u0259/", spelling: "sure" }] },
        ],
      },
      {
        name: "-sure /\u0292\u0259/",
        slug: "-sure",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "treasure", phonetic: "\u02c8tre\u0292\u0259(r)", meaning: "n. \u91d1\u94f6\u8d22\u5b9d\uff1b\u5b9d\u7269\uff1b\u73cd\u54c1", audio: "/audio/mixed/mixed-ending/treasure.mp3", syllables: ["trea", "sure"], phonemeMap: [{ ipa: "/\u0292\u0259/", spelling: "sure" }] },
        ],
      },
      {
        name: "-sion /\u0283\u0259n/",
        slug: "-sion",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "television", phonetic: "\u02c8tel\u026av\u026a\u0292(\u0259)n", meaning: "n.\u7535\u89c6\u673a;\u7535\u89c6\u8282\u76ee;\u7535\u89c6\u884c\u4e1a;", audio: "/audio/mixed/mixed-ending/television.mp3", syllables: ["te", "le", "vi", "sion"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "sion" }] },
        ],
      },
      {
        name: "-sion /\u0283\u0259n/",
        slug: "-sion",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "decision", phonetic: "d\u026a\u02c8s\u026a\u0292(\u0259)n", meaning: "n.\u51b3\u5b9a;\u6289\u62e9;\u9009\u62e9;", audio: "/audio/mixed/mixed-ending/decision.mp3", syllables: ["de", "ci", "sion"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "sion" }] },
        ],
      },
      {
        name: "-sion /\u0283\u0259n/",
        slug: "-sion",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "vision", phonetic: "\u02c8v\u026a\u0292n", meaning: "n. \u89c6\u89c9\uff1b\u89c6\u529b", audio: "/audio/mixed/mixed-ending/vision.mp3", syllables: ["vi", "si", "on"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "sion" }] },
        ],
      },
      {
        name: "-tion /\u0283\u0259n/",
        slug: "-tion",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "nation", phonetic: "\u02c8ne\u026a\u0283(\u0259)n", meaning: "n. \u56fd\u5bb6\uff1b\u6c11\u65cf\uff1b\u56fd\u6c11", audio: "/audio/mixed/mixed-ending/nation.mp3", syllables: ["na", "tion"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "tion" }] },
        ],
      },
      {
        name: "-tion /\u0283\u0259n/",
        slug: "-tion",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "action", phonetic: "\u02c8\u00e6k\u0283(\u0259)n", meaning: "n.\u884c\u52a8;\u884c\u4e3a;", audio: "/audio/mixed/mixed-ending/action.mp3", syllables: ["ac", "tion"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "tion" }] },
        ],
      },
      {
        name: "-tion /\u0283\u0259n/",
        slug: "-tion",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "station", phonetic: "\u02c8ste\u026a\u0283(\u0259)n", meaning: "n.\u8f66\u7ad9;\u7ad9;", audio: "/audio/mixed/mixed-ending/station.mp3", syllables: ["sta", "tion"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "tion" }] },
        ],
      },
      {
        name: "-tian /\u0283\u0259n/",
        slug: "-tian",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "Christian", phonetic: "\u02c8kr\u026ast\u0283\u0259n", meaning: "n. \u57fa\u7763\u5f92\uff0c\u4fe1\u5f92\uff1badj. \u57fa\u7763\u6559\u7684\uff0c\u4fe1\u57fa\u7763\u6559\u7684\uff1b\u6709\u57fa\u7763\u6559\u5f92\u54c1\u683c\uff08\u5c24\u6307\u6b63\u6d3e\u3001\u4ec1\u6148\u548c\u516c\u6b63\uff09\u7684", audio: "/audio/mixed/mixed-ending/Christian.mp3", syllables: ["chri", "stian"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "tian" }] },
        ],
      },
      {
        name: "-tian /\u0283\u0259n/",
        slug: "-tian",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "Martian", phonetic: "\u02c8m\u0251\u02d0\u0283n", meaning: "n. \uff08\u5047\u60f3\u7684\uff09\u706b\u661f\u4eba\uff1badj. \u706b\u661f\u7684", audio: "/audio/mixed/mixed-ending/Martian.mp3", syllables: ["mar", "ti", "an"], phonemeMap: [{ ipa: "/\u0283\u0259n/", spelling: "tian" }] },
        ],
      },
      {
        name: "-sial /\u0283\u0259l/",
        slug: "-sial",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "controversial", phonetic: "\u02cck\u0252ntr\u0259\u02c8v\u025c\u02d0\u0283(\u0259)l", meaning: "adj. \u6709\u4e89\u8bae\u7684", audio: "/audio/mixed/mixed-ending/controversial.mp3", syllables: ["con", "tro", "ver", "sial"], phonemeMap: [{ ipa: "/\u0283\u0259l/", spelling: "sial" }] },
        ],
      },
      {
        name: "-sial /\u0283\u0259l/",
        slug: "-sial",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "racial", phonetic: "\u02c8re\u026a\u0283(\u0259)l", meaning: "adj. \u79cd\u65cf\u7684\uff1b\u4eba\u79cd\u7684", audio: "/audio/mixed/mixed-ending/racial.mp3", syllables: ["ra", "cial"], phonemeMap: [{ ipa: "/\u0283\u0259l/", spelling: "sial" }] },
        ],
      },
      {
        name: "-tial /\u0283\u0259l/",
        slug: "-tial",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "essential", phonetic: "\u026a\u02c8sen\u0283l", meaning: "adj.\u5fc5\u9700\u7684;\u57fa\u672c\u7684;\u672c\u8d28\u7684n.\u5fc5\u9700\u54c1;", audio: "/audio/mixed/mixed-ending/essential.mp3", syllables: ["essen", "tial"], phonemeMap: [{ ipa: "/\u0283\u0259l/", spelling: "tial" }] },
        ],
      },
      {
        name: "-tial /\u0283\u0259l/",
        slug: "-tial",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "initial", phonetic: "\u026a\u02c8n\u026a\u0283l", meaning: "adj.\u6700\u521d\u7684;\u5f00\u59cb\u7684n.\u9996\u5b57\u6bcdv.\u7528\u59d3\u540d\u7684\u9996\u5b57\u6bcd\u7b7e\u540d\u4e8e;", audio: "/audio/mixed/mixed-ending/initial.mp3", syllables: ["ini", "tial"], phonemeMap: [{ ipa: "/\u0283\u0259l/", spelling: "tial" }] },
        ],
      },
      {
        name: "-tial /\u0283\u0259l/",
        slug: "-tial",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "partial", phonetic: "\u02c8p\u0251\u02d0\u0283(\u0259)l", meaning: "adj. \u90e8\u5206\u7684\uff0c\u4e0d\u5b8c\u5168\u7684\uff1b\u504f\u8892\u7684\uff0c\u4e0d\u516c\u5e73\u7684\uff1b\u504f\u7231\u7684\uff1bn. \uff08\u4e50\uff09\u5206\u97f3\uff0c\u6cdb\u97f3", audio: "/audio/mixed/mixed-ending/partial.mp3", syllables: ["par", "tial"], phonemeMap: [{ ipa: "/\u0283\u0259l/", spelling: "tial" }] },
        ],
      },
      {
        name: "-tient /\u0283\u0259nt/",
        slug: "-tient",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "patient", phonetic: "\u02c8pe\u026a\u0283(\u0259)nt", meaning: "adj. \u6709\u8010\u5fc3\u7684\nn. \u75c5\u4eba", audio: "/audio/mixed/mixed-ending/patient.mp3", syllables: ["pa", "tient"], phonemeMap: [{ ipa: "/\u0283\u0259nt/", spelling: "tient" }] },
        ],
      },
      {
        name: "-tient /\u0283\u0259nt/",
        slug: "-tient",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "quotient", phonetic: "\u02c8kw\u0259\u028a\u0283(\u0259)nt", meaning: "n. \u7a0b\u5ea6\uff0c\u7cfb\u6570\uff1b\uff08\u6570\u5b66\u4e2d\u7684\uff09\u5546\uff1b\u4efd\u989d", audio: "/audio/mixed/mixed-ending/quotient.mp3", syllables: ["qu", "o", "tient"], phonemeMap: [{ ipa: "/\u0283\u0259nt/", spelling: "tient" }] },
        ],
      },
      {
        name: "-tience /\u0283\u0259ns/",
        slug: "-tience",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "patience", phonetic: "\u02c8pe\u026a\u0283(\u0259)ns", meaning: "n. \u8010\u5fc3\uff1b\u8010\u6027\uff1b\u5fcd\u8010\u529b\uff1b\u8003\u9a8c\u67d0\u4eba\u7684\u8010\u5fc3\uff1b<\u82f1>\u5355\u4eba\u7eb8\u724c\u6e38\u620f", audio: "/audio/mixed/mixed-ending/patience.mp3", syllables: ["pati", "ence"], phonemeMap: [{ ipa: "/\u0283\u0259ns/", spelling: "tience" }] },
        ],
      },
      {
        name: "-ture /t\u0283\u0259/",
        slug: "-ture",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "picture", phonetic: "\u02c8p\u026akt\u0283\u0259(r)", meaning: "n.\u56fe\u753b;\u7167\u7247v.\u60f3\u8c61;\u63cf\u8ff0;", audio: "/audio/mixed/mixed-ending/picture.mp3", syllables: ["pic", "ture"], phonemeMap: [{ ipa: "/t\u0283\u0259/", spelling: "ture" }] },
        ],
      },
      {
        name: "-ture /t\u0283\u0259/",
        slug: "-ture",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "nature", phonetic: "\u02c8ne\u026at\u0283\u0259(r)", meaning: "n. \u81ea\u7136", audio: "/audio/mixed/mixed-ending/nature.mp3", syllables: ["na", "ture"], phonemeMap: [{ ipa: "/t\u0283\u0259/", spelling: "ture" }] },
        ],
      },
      {
        name: "-ture /t\u0283\u0259/",
        slug: "-ture",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "future", phonetic: "\u02c8fju\u02d0t\u0283\u0259(r)", meaning: "n. \u672a\u6765\uff0c\u5c06\u6765\uff1b\u524d\u9014\uff0c\u524d\u666f\uff1b\u671f\u8d27\uff1b\uff08\u52a8\u8bcd\u7684\uff09\u5c06\u6765\u65f6\u6001\uff1badj. \u5c06\u6765\u7684\uff0c\u672a\u6765\u7684\uff1b\uff08\u52a8\u8bcd\uff09\u5c06\u6765\u65f6\u6001\u7684", audio: "/audio/mixed/mixed-ending/future.mp3", syllables: ["fu", "ture"], phonemeMap: [{ ipa: "/t\u0283\u0259/", spelling: "ture" }] },
        ],
      },
      {
        name: "-tual /t\u0283\u028a\u0259l/",
        slug: "-tual",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "actual", phonetic: "\u02c8\u00e6kt\u0283u\u0259l", meaning: "adj. \u771f\u5b9e\u7684\uff0c\u5b9e\u9645\u7684\uff0c\u73b0\u5b9e\u7684\uff1b\uff08\u7528\u4e8e\u5bf9\u6bd4\u4e3b\u6b21\u65b9\u9762\uff09\u771f\u6b63\u7684\uff1b\u73b0\u5b58\u7684\uff0c\u5f53\u524d\u7684", audio: "/audio/mixed/mixed-ending/actual.mp3", syllables: ["ac", "tu", "al"], phonemeMap: [{ ipa: "/t\u0283\u028a\u0259l/", spelling: "tual" }] },
        ],
      },
      {
        name: "-tual /t\u0283\u028a\u0259l/",
        slug: "-tual",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "ritual", phonetic: "\u02c8r\u026at\u0283u\u0259l", meaning: "n. \u4eea\u5f0f", audio: "/audio/mixed/mixed-ending/ritual.mp3", syllables: ["ri", "tu", "al"], phonemeMap: [{ ipa: "/t\u0283\u028a\u0259l/", spelling: "tual" }] },
        ],
      },
      {
        name: "-tual /t\u0283\u028a\u0259l/",
        slug: "-tual",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "habitual", phonetic: "h\u0259\u02c8b\u026at\u0283u\u0259l", meaning: "adj. \u4e60\u60ef\u6027\u7684\uff0c\u60ef\u5e38\u7684\uff1b\u4e0a\u763e\u7684", audio: "/audio/mixed/mixed-ending/habitual.mp3", syllables: ["ha", "bi", "tu", "al"], phonemeMap: [{ ipa: "/t\u0283\u028a\u0259l/", spelling: "tual" }] },
        ],
      },
      {
        name: "-tue /t\u0283u\u02d0/",
        slug: "-tue",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "virtue", phonetic: "\u02c8v\u025c\u02d0t\u0283u\u02d0", meaning: "n. \u7f8e\u5fb7;\u4f18\u70b9", audio: "/audio/mixed/mixed-ending/virtue.mp3", syllables: ["vir", "tue"], phonemeMap: [{ ipa: "/t\u0283u\u02d0/", spelling: "tue" }] },
        ],
      },
      {
        name: "-tue /t\u0283u\u02d0/",
        slug: "-tue",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "statue", phonetic: "\u02c8st\u00e6t\u0283u\u02d0", meaning: "n. \u96d5\u50cf\uff0c\u5851\u50cf", audio: "/audio/mixed/mixed-ending/statue.mp3", syllables: ["sta", "tue"], phonemeMap: [{ ipa: "/t\u0283u\u02d0/", spelling: "tue" }] },
        ],
      },
      {
        name: "-tue /t\u0283u\u02d0/",
        slug: "-tue",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "fortune", phonetic: "\u02c8f\u0254\u02d0t\u0283u\u02d0n", meaning: "n. \u547d\u8fd0;\u8d22\u4ea7;\u8fd0\u6c14", audio: "/audio/mixed/mixed-ending/fortune.mp3", syllables: ["for", "tune"], phonemeMap: [{ ipa: "/t\u0283u\u02d0/", spelling: "tue" }] },
        ],
      },
      {
        name: "-ous /\u0259s/",
        slug: "-ous",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "famous", phonetic: "\u02c8fe\u026am\u0259s", meaning: "adj. \u8457\u540d\u7684\uff1b\u51fa\u540d\u7684", audio: "/audio/mixed/mixed-ending/famous.mp3", syllables: ["fa", "mous"], phonemeMap: [{ ipa: "/\u0259s/", spelling: "ous" }] },
        ],
      },
      {
        name: "-ous /\u0259s/",
        slug: "-ous",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "dangerous", phonetic: "\u02c8de\u026and\u0292\u0259r\u0259s", meaning: "adj.\u5371\u9669\u7684;", audio: "/audio/mixed/mixed-ending/dangerous.mp3", syllables: ["dan", "ge", "rous"], phonemeMap: [{ ipa: "/\u0259s/", spelling: "ous" }] },
        ],
      },
      {
        name: "-ous /\u0259s/",
        slug: "-ous",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "serious", phonetic: "\u02c8s\u026a\u0259ri\u0259s", meaning: "adj.\u4e25\u8083\u7684;\u4e25\u91cd\u7684;\u5e84\u91cd\u7684;\u8ba4\u771f\u7684;", audio: "/audio/mixed/mixed-ending/serious.mp3", syllables: ["se", "ri", "ous"], phonemeMap: [{ ipa: "/\u0259s/", spelling: "ous" }] },
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

