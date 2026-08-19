// 自然拼读 · 辅音组合听写课程数据（CONSONANT_GROUPS 示例单词生成）
// 3 个分组各为一个 Chapter（开头辅音群 / 双字母组合 / 尾缀与双写），
// 每规则（bl- / sh / -ss…）为 Test；phonemeMap 使答对后组合字母标红
import type { WhaleChapter, WhaleTest, WhaleWord } from "./whale-king"

const T: WhaleChapter[] = [
  {
    name: "\u5f00\u5934\u8f85\u97f3\u7fa4",
    emoji: "🔠",
    slug: "consonant-begin",
    description: "\u5f00\u5934\u8f85\u97f3\u7fa4 · 69 规则 69 词",
    tests: [
      {
        name: "bl- /bl/",
        slug: "bl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "blue", phonetic: "blu\u02d0", meaning: "adj. \u84dd\u8272\u7684", audio: "/audio/consonant/consonant-begin/blue.mp3", phonemeMap: [{ ipa: "/bl/", spelling: "bl" }] },
        ],
      },
      {
        name: "bl- /bl/",
        slug: "bl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "black", phonetic: "bl\u00e6k", meaning: "adj. \u9ed1\u8272\u7684", audio: "/audio/consonant/consonant-begin/black.mp3", phonemeMap: [{ ipa: "/bl/", spelling: "bl" }] },
        ],
      },
      {
        name: "bl- /bl/",
        slug: "bl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "blow", phonetic: "bl\u0259\u028a", meaning: "v. \u5439", audio: "/audio/consonant/consonant-begin/blow.mp3", phonemeMap: [{ ipa: "/bl/", spelling: "bl" }] },
        ],
      },
      {
        name: "br- /br/",
        slug: "br-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bread", phonetic: "bred", meaning: "n. \u9762\u5305", audio: "/audio/consonant/consonant-begin/bread.mp3", syllables: ["bre", "ad"], phonemeMap: [{ ipa: "/br/", spelling: "br" }] },
        ],
      },
      {
        name: "br- /br/",
        slug: "br-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "brown", phonetic: "bra\u028an", meaning: "adj. \u68d5\u8272\u7684", audio: "/audio/consonant/consonant-begin/brown.mp3", phonemeMap: [{ ipa: "/br/", spelling: "br" }] },
        ],
      },
      {
        name: "br- /br/",
        slug: "br-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bridge", phonetic: "br\u026ad\u0292", meaning: "n. \u6865", audio: "/audio/consonant/consonant-begin/bridge.mp3", phonemeMap: [{ ipa: "/br/", spelling: "br" }] },
        ],
      },
      {
        name: "cl- /kl/",
        slug: "cl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "clock", phonetic: "kl\u0252k", meaning: "n. \u65f6\u949f", audio: "/audio/consonant/consonant-begin/clock.mp3", phonemeMap: [{ ipa: "/kl/", spelling: "cl" }] },
        ],
      },
      {
        name: "cl- /kl/",
        slug: "cl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "class", phonetic: "kl\u0251\u02d0s", meaning: "n. \u73ed\u7ea7", audio: "/audio/consonant/consonant-begin/class.mp3", phonemeMap: [{ ipa: "/kl/", spelling: "cl" }] },
        ],
      },
      {
        name: "cl- /kl/",
        slug: "cl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "clean", phonetic: "kli\u02d0n", meaning: "adj. \u5e72\u51c0\u7684", audio: "/audio/consonant/consonant-begin/clean.mp3", syllables: ["cle", "an"], phonemeMap: [{ ipa: "/kl/", spelling: "cl" }] },
        ],
      },
      {
        name: "cr- /kr/",
        slug: "cr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cream", phonetic: "kri\u02d0m", meaning: "n. \u5976\u6cb9", audio: "/audio/consonant/consonant-begin/cream.mp3", syllables: ["cre", "am"], phonemeMap: [{ ipa: "/kr/", spelling: "cr" }] },
        ],
      },
      {
        name: "cr- /kr/",
        slug: "cr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cry", phonetic: "kra\u026a", meaning: "v. \u54ed", audio: "/audio/consonant/consonant-begin/cry.mp3", phonemeMap: [{ ipa: "/kr/", spelling: "cr" }] },
        ],
      },
      {
        name: "cr- /kr/",
        slug: "cr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cross", phonetic: "kr\u0252s", meaning: "v. \u7a7f\u8fc7", audio: "/audio/consonant/consonant-begin/cross.mp3", phonemeMap: [{ ipa: "/kr/", spelling: "cr" }] },
        ],
      },
      {
        name: "dr- /dr/",
        slug: "dr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "dream", phonetic: "dri\u02d0m", meaning: "n. \u68a6", audio: "/audio/consonant/consonant-begin/dream.mp3", syllables: ["dre", "am"], phonemeMap: [{ ipa: "/dr/", spelling: "dr" }] },
        ],
      },
      {
        name: "dr- /dr/",
        slug: "dr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "drink", phonetic: "dr\u026a\u014bk", meaning: "v. \u559d", audio: "/audio/consonant/consonant-begin/drink.mp3", phonemeMap: [{ ipa: "/dr/", spelling: "dr" }] },
        ],
      },
      {
        name: "dr- /dr/",
        slug: "dr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "dress", phonetic: "dres", meaning: "n. \u8fde\u8863\u88d9", audio: "/audio/consonant/consonant-begin/dress.mp3", phonemeMap: [{ ipa: "/dr/", spelling: "dr" }] },
        ],
      },
      {
        name: "fl- /fl/",
        slug: "fl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "flower", phonetic: "\u02c8fla\u028a\u0259(r)", meaning: "n. \u82b1", audio: "/audio/consonant/consonant-begin/flower.mp3", syllables: ["flo", "wer"], phonemeMap: [{ ipa: "/fl/", spelling: "fl" }] },
        ],
      },
      {
        name: "fl- /fl/",
        slug: "fl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "fly", phonetic: "fla\u026a", meaning: "v. \u98de", audio: "/audio/consonant/consonant-begin/fly.mp3", phonemeMap: [{ ipa: "/fl/", spelling: "fl" }] },
        ],
      },
      {
        name: "fl- /fl/",
        slug: "fl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "floor", phonetic: "fl\u0254\u02d0(r)", meaning: "n. \u5730\u677f", audio: "/audio/consonant/consonant-begin/floor.mp3", syllables: ["flo", "or"], phonemeMap: [{ ipa: "/fl/", spelling: "fl" }] },
        ],
      },
      {
        name: "fr- /fr/",
        slug: "fr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "friend", phonetic: "frend", meaning: "n. \u670b\u53cb", audio: "/audio/consonant/consonant-begin/friend.mp3", syllables: ["fri", "end"], phonemeMap: [{ ipa: "/fr/", spelling: "fr" }] },
        ],
      },
      {
        name: "fr- /fr/",
        slug: "fr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "fruit", phonetic: "fru\u02d0t", meaning: "n. \u6c34\u679c", audio: "/audio/consonant/consonant-begin/fruit.mp3", syllables: ["fru", "it"], phonemeMap: [{ ipa: "/fr/", spelling: "fr" }] },
        ],
      },
      {
        name: "fr- /fr/",
        slug: "fr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "frog", phonetic: "fr\u0252\u0261", meaning: "n. \u9752\u86d9", audio: "/audio/consonant/consonant-begin/frog.mp3", phonemeMap: [{ ipa: "/fr/", spelling: "fr" }] },
        ],
      },
      {
        name: "gl- /\u0261l/",
        slug: "gl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "glass", phonetic: "\u0261l\u0251\u02d0s", meaning: "n. \u73bb\u7483", audio: "/audio/consonant/consonant-begin/glass.mp3", phonemeMap: [{ ipa: "/\u0261l/", spelling: "gl" }] },
        ],
      },
      {
        name: "gl- /\u0261l/",
        slug: "gl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "glad", phonetic: "\u0261l\u00e6d", meaning: "adj. \u9ad8\u5174\u7684", audio: "/audio/consonant/consonant-begin/glad.mp3", phonemeMap: [{ ipa: "/\u0261l/", spelling: "gl" }] },
        ],
      },
      {
        name: "gl- /\u0261l/",
        slug: "gl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "globe", phonetic: "\u0261l\u0259\u028ab", meaning: "n. \u5730\u7403\u4eea", audio: "/audio/consonant/consonant-begin/globe.mp3", syllables: ["glob", "e"], phonemeMap: [{ ipa: "/\u0261l/", spelling: "gl" }] },
        ],
      },
      {
        name: "gr- /\u0261r/",
        slug: "gr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "green", phonetic: "\u0261ri\u02d0n", meaning: "adj. \u7eff\u8272\u7684", audio: "/audio/consonant/consonant-begin/green.mp3", syllables: ["gre", "en"], phonemeMap: [{ ipa: "/\u0261r/", spelling: "gr" }] },
        ],
      },
      {
        name: "gr- /\u0261r/",
        slug: "gr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "grass", phonetic: "\u0261r\u0251\u02d0s", meaning: "n. \u8349", audio: "/audio/consonant/consonant-begin/grass.mp3", phonemeMap: [{ ipa: "/\u0261r/", spelling: "gr" }] },
        ],
      },
      {
        name: "gr- /\u0261r/",
        slug: "gr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "grow", phonetic: "\u0261r\u0259\u028a", meaning: "v. \u751f\u957f", audio: "/audio/consonant/consonant-begin/grow.mp3", phonemeMap: [{ ipa: "/\u0261r/", spelling: "gr" }] },
        ],
      },
      {
        name: "pl- /pl/",
        slug: "pl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "play", phonetic: "ple\u026a", meaning: "v. \u73a9", audio: "/audio/consonant/consonant-begin/play.mp3", syllables: ["pla", "y"], phonemeMap: [{ ipa: "/pl/", spelling: "pl" }] },
        ],
      },
      {
        name: "pl- /pl/",
        slug: "pl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "plane", phonetic: "ple\u026an", meaning: "n. \u98de\u673a", audio: "/audio/consonant/consonant-begin/plane.mp3", phonemeMap: [{ ipa: "/pl/", spelling: "pl" }] },
        ],
      },
      {
        name: "pl- /pl/",
        slug: "pl-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "please", phonetic: "pli\u02d0z", meaning: "adv. \u8bf7", audio: "/audio/consonant/consonant-begin/please.mp3", syllables: ["ple", "ase"], phonemeMap: [{ ipa: "/pl/", spelling: "pl" }] },
        ],
      },
      {
        name: "pr- /pr/",
        slug: "pr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "price", phonetic: "pra\u026as", meaning: "n. \u4ef7\u683c", audio: "/audio/consonant/consonant-begin/price.mp3", phonemeMap: [{ ipa: "/pr/", spelling: "pr" }] },
        ],
      },
      {
        name: "pr- /pr/",
        slug: "pr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "present", phonetic: "\u02c8prez(\u0259)nt; pr\u026a\u02c8zent", meaning: "n. \u793c\u7269", audio: "/audio/consonant/consonant-begin/present.mp3", syllables: ["pre", "sent"], phonemeMap: [{ ipa: "/pr/", spelling: "pr" }] },
        ],
      },
      {
        name: "pr- /pr/",
        slug: "pr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "proud", phonetic: "pra\u028ad", meaning: "adj. \u81ea\u8c6a\u7684", audio: "/audio/consonant/consonant-begin/proud.mp3", syllables: ["pro", "ud"], phonemeMap: [{ ipa: "/pr/", spelling: "pr" }] },
        ],
      },
      {
        name: "tr- /tr/",
        slug: "tr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "tree", phonetic: "tri\u02d0", meaning: "n. \u6811", audio: "/audio/consonant/consonant-begin/tree.mp3", phonemeMap: [{ ipa: "/tr/", spelling: "tr" }] },
        ],
      },
      {
        name: "tr- /tr/",
        slug: "tr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "train", phonetic: "tre\u026an", meaning: "n. \u706b\u8f66", audio: "/audio/consonant/consonant-begin/train.mp3", syllables: ["tra", "in"], phonemeMap: [{ ipa: "/tr/", spelling: "tr" }] },
        ],
      },
      {
        name: "tr- /tr/",
        slug: "tr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "try", phonetic: "tra\u026a", meaning: "v. \u5c1d\u8bd5", audio: "/audio/consonant/consonant-begin/try.mp3", phonemeMap: [{ ipa: "/tr/", spelling: "tr" }] },
        ],
      },
      {
        name: "tw- /tw/",
        slug: "tw-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "two", phonetic: "tu\u02d0", meaning: "num. \u4e8c", audio: "/audio/consonant/consonant-begin/two.mp3", phonemeMap: [{ ipa: "/tw/", spelling: "tw" }] },
        ],
      },
      {
        name: "tw- /tw/",
        slug: "tw-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "twelve", phonetic: "twelv", meaning: "num. \u5341\u4e8c", audio: "/audio/consonant/consonant-begin/twelve.mp3", phonemeMap: [{ ipa: "/tw/", spelling: "tw" }] },
        ],
      },
      {
        name: "tw- /tw/",
        slug: "tw-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "twin", phonetic: "tw\u026an", meaning: "n. \u53cc\u80de\u80ce", audio: "/audio/consonant/consonant-begin/twin.mp3", phonemeMap: [{ ipa: "/tw/", spelling: "tw" }] },
        ],
      },
      {
        name: "sm- /sm/",
        slug: "sm-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "smile", phonetic: "sma\u026al", meaning: "v. \u5fae\u7b11", audio: "/audio/consonant/consonant-begin/smile.mp3", phonemeMap: [{ ipa: "/sm/", spelling: "sm" }] },
        ],
      },
      {
        name: "sm- /sm/",
        slug: "sm-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "small", phonetic: "sm\u0254\u02d0l", meaning: "adj. \u5c0f\u7684", audio: "/audio/consonant/consonant-begin/small.mp3", phonemeMap: [{ ipa: "/sm/", spelling: "sm" }] },
        ],
      },
      {
        name: "sm- /sm/",
        slug: "sm-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "smell", phonetic: "smel", meaning: "v. \u95fb", audio: "/audio/consonant/consonant-begin/smell.mp3", phonemeMap: [{ ipa: "/sm/", spelling: "sm" }] },
        ],
      },
      {
        name: "sn- /sn/",
        slug: "sn-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "snow", phonetic: "sn\u0259\u028a", meaning: "n. \u96ea", audio: "/audio/consonant/consonant-begin/snow.mp3", phonemeMap: [{ ipa: "/sn/", spelling: "sn" }] },
        ],
      },
      {
        name: "sn- /sn/",
        slug: "sn-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "snake", phonetic: "sn\u02c8e\u026ak", meaning: "n. \u86c7", audio: "/audio/consonant/consonant-begin/snake.mp3", phonemeMap: [{ ipa: "/sn/", spelling: "sn" }] },
        ],
      },
      {
        name: "sn- /sn/",
        slug: "sn-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "snail", phonetic: "sne\u026al", meaning: "n. \u8717\u725b", audio: "/audio/consonant/consonant-begin/snail.mp3", syllables: ["sna", "il"], phonemeMap: [{ ipa: "/sn/", spelling: "sn" }] },
        ],
      },
      {
        name: "sp- /sp/",
        slug: "sp-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "speak", phonetic: "spi\u02d0k", meaning: "v. \u8bf4\u8bdd", audio: "/audio/consonant/consonant-begin/speak.mp3", syllables: ["spe", "ak"], phonemeMap: [{ ipa: "/sp/", spelling: "sp" }] },
        ],
      },
      {
        name: "sp- /sp/",
        slug: "sp-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "space", phonetic: "spe\u026as", meaning: "n. \u592a\u7a7a", audio: "/audio/consonant/consonant-begin/space.mp3", phonemeMap: [{ ipa: "/sp/", spelling: "sp" }] },
        ],
      },
      {
        name: "sp- /sp/",
        slug: "sp-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "sport", phonetic: "sp\u0254\u02d0t", meaning: "n. \u8fd0\u52a8", audio: "/audio/consonant/consonant-begin/sport.mp3", phonemeMap: [{ ipa: "/sp/", spelling: "sp" }] },
        ],
      },
      {
        name: "spr- /spr/",
        slug: "spr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "spring", phonetic: "spr\u026a\u014b", meaning: "n. \u6625\u5929", audio: "/audio/consonant/consonant-begin/spring.mp3", phonemeMap: [{ ipa: "/spr/", spelling: "spr" }] },
        ],
      },
      {
        name: "spr- /spr/",
        slug: "spr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "spray", phonetic: "spre\u026a", meaning: "v. \u55b7\u6d12", audio: "/audio/consonant/consonant-begin/spray.mp3", syllables: ["spra", "y"], phonemeMap: [{ ipa: "/spr/", spelling: "spr" }] },
        ],
      },
      {
        name: "spr- /spr/",
        slug: "spr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "spread", phonetic: "spred", meaning: "v. \u4f20\u64ad", audio: "/audio/consonant/consonant-begin/spread.mp3", syllables: ["spre", "ad"], phonemeMap: [{ ipa: "/spr/", spelling: "spr" }] },
        ],
      },
      {
        name: "sw- /sw/",
        slug: "sw-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "swim", phonetic: "sw\u02c8\u026am", meaning: "v. \u6e38\u6cf3", audio: "/audio/consonant/consonant-begin/swim.mp3", phonemeMap: [{ ipa: "/sw/", spelling: "sw" }] },
        ],
      },
      {
        name: "sw- /sw/",
        slug: "sw-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "sweet", phonetic: "swi\u02d0t", meaning: "adj. \u751c\u7684", audio: "/audio/consonant/consonant-begin/sweet.mp3", syllables: ["swe", "et"], phonemeMap: [{ ipa: "/sw/", spelling: "sw" }] },
        ],
      },
      {
        name: "sw- /sw/",
        slug: "sw-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "swing", phonetic: "sw\u026a\u014b", meaning: "v. \u6447\u6446", audio: "/audio/consonant/consonant-begin/swing.mp3", phonemeMap: [{ ipa: "/sw/", spelling: "sw" }] },
        ],
      },
      {
        name: "sk- /sk/",
        slug: "sk-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "sky", phonetic: "ska\u026a", meaning: "n. \u5929\u7a7a", audio: "/audio/consonant/consonant-begin/sky.mp3", phonemeMap: [{ ipa: "/sk/", spelling: "sk" }] },
        ],
      },
      {
        name: "sk- /sk/",
        slug: "sk-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "skip", phonetic: "sk\u026ap", meaning: "v. \u8df3\u8fc7", audio: "/audio/consonant/consonant-begin/skip.mp3", phonemeMap: [{ ipa: "/sk/", spelling: "sk" }] },
        ],
      },
      {
        name: "sk- /sk/",
        slug: "sk-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "skate", phonetic: "ske\u026at", meaning: "v. \u6ed1\u51b0", audio: "/audio/consonant/consonant-begin/skate.mp3", phonemeMap: [{ ipa: "/sk/", spelling: "sk" }] },
        ],
      },
      {
        name: "sc- /sk/",
        slug: "sc-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "school", phonetic: "sku\u02d0l", meaning: "n. \u5b66\u6821", audio: "/audio/consonant/consonant-begin/school.mp3", syllables: ["scho", "ol"], phonemeMap: [{ ipa: "/sk/", spelling: "sc" }] },
        ],
      },
      {
        name: "sc- /sk/",
        slug: "sc-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "scarf", phonetic: "sk\u0251\u02d0f", meaning: "n. \u56f4\u5dfe", audio: "/audio/consonant/consonant-begin/scarf.mp3", phonemeMap: [{ ipa: "/sk/", spelling: "sc" }] },
        ],
      },
      {
        name: "sc- /sk/",
        slug: "sc-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "score", phonetic: "sk\u0254\u02d0(r)", meaning: "n. \u5206\u6570", audio: "/audio/consonant/consonant-begin/score.mp3", phonemeMap: [{ ipa: "/sk/", spelling: "sc" }] },
        ],
      },
      {
        name: "squ- /skw/",
        slug: "squ-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "square", phonetic: "skw\u02c8\u025br", meaning: "n. \u6b63\u65b9\u5f62", audio: "/audio/consonant/consonant-begin/square.mp3", syllables: ["squ", "are"], phonemeMap: [{ ipa: "/skw/", spelling: "squ" }] },
        ],
      },
      {
        name: "squ- /skw/",
        slug: "squ-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "squid", phonetic: "skw\u026ad", meaning: "n. \u9c7f\u9c7c", audio: "/audio/consonant/consonant-begin/squid.mp3", syllables: ["squ", "id"], phonemeMap: [{ ipa: "/skw/", spelling: "squ" }] },
        ],
      },
      {
        name: "squ- /skw/",
        slug: "squ-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "squirrel", phonetic: "\u02c8skw\u026ar\u0259l", meaning: "n. \u677e\u9f20", audio: "/audio/consonant/consonant-begin/squirrel.mp3", syllables: ["squir", "rel"], phonemeMap: [{ ipa: "/skw/", spelling: "squ" }] },
        ],
      },
      {
        name: "st- /st/",
        slug: "st-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "star", phonetic: "st\u0251\u02d0(r)", meaning: "n. \u661f\u661f", audio: "/audio/consonant/consonant-begin/star.mp3", phonemeMap: [{ ipa: "/st/", spelling: "st" }] },
        ],
      },
      {
        name: "st- /st/",
        slug: "st-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "stop", phonetic: "st\u0252p", meaning: "v. \u505c\u6b62", audio: "/audio/consonant/consonant-begin/stop.mp3", phonemeMap: [{ ipa: "/st/", spelling: "st" }] },
        ],
      },
      {
        name: "st- /st/",
        slug: "st-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "stand", phonetic: "st\u00e6nd", meaning: "v. \u7ad9\u7acb", audio: "/audio/consonant/consonant-begin/stand.mp3", phonemeMap: [{ ipa: "/st/", spelling: "st" }] },
        ],
      },
      {
        name: "str- /str/",
        slug: "str-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "street", phonetic: "stri\u02d0t", meaning: "n. \u8857\u9053", audio: "/audio/consonant/consonant-begin/street.mp3", syllables: ["stre", "et"], phonemeMap: [{ ipa: "/str/", spelling: "str" }] },
        ],
      },
      {
        name: "str- /str/",
        slug: "str-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "strong", phonetic: "str\u0252\u014b", meaning: "adj. \u5f3a\u58ee\u7684", audio: "/audio/consonant/consonant-begin/strong.mp3", phonemeMap: [{ ipa: "/str/", spelling: "str" }] },
        ],
      },
      {
        name: "str- /str/",
        slug: "str-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "string", phonetic: "str\u026a\u014b", meaning: "n. \u7ef3\u5b50", audio: "/audio/consonant/consonant-begin/string.mp3", phonemeMap: [{ ipa: "/str/", spelling: "str" }] },
        ],
      },
    ],
  },
  {
    name: "\u53cc\u5b57\u6bcd\u7ec4\u5408",
    emoji: "🔠",
    slug: "consonant-pair",
    description: "\u53cc\u5b57\u6bcd\u7ec4\u5408 · 48 规则 48 词",
    tests: [
      {
        name: "sh /\u0283/",
        slug: "sh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "ship", phonetic: "\u0283\u026ap", meaning: "n. \u8f6e\u8239", audio: "/audio/consonant/consonant-pair/ship.mp3", phonemeMap: [{ ipa: "/\u0283/", spelling: "sh" }] },
        ],
      },
      {
        name: "sh /\u0283/",
        slug: "sh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "fish", phonetic: "f\u026a\u0283", meaning: "n. \u9c7c", audio: "/audio/consonant/consonant-pair/fish.mp3", phonemeMap: [{ ipa: "/\u0283/", spelling: "sh" }] },
        ],
      },
      {
        name: "sh /\u0283/",
        slug: "sh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "shoe", phonetic: "\u0283u\u02d0", meaning: "n. \u978b", audio: "/audio/consonant/consonant-pair/shoe.mp3", phonemeMap: [{ ipa: "/\u0283/", spelling: "sh" }] },
        ],
      },
      {
        name: "ch /t\u0283/",
        slug: "ch",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "chair", phonetic: "t\u0283e\u0259(r)", meaning: "n. \u6905\u5b50", audio: "/audio/consonant/consonant-pair/chair.mp3", syllables: ["cha", "ir"], phonemeMap: [{ ipa: "/t\u0283/", spelling: "ch" }] },
        ],
      },
      {
        name: "ch /t\u0283/",
        slug: "ch",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "school", phonetic: "sku\u02d0l", meaning: "n. \u5b66\u6821", audio: "/audio/consonant/consonant-pair/school.mp3", syllables: ["scho", "ol"], phonemeMap: [{ ipa: "/t\u0283/", spelling: "ch" }] },
        ],
      },
      {
        name: "ch /t\u0283/",
        slug: "ch",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "chef", phonetic: "\u0283ef", meaning: "n. \u53a8\u5e08", audio: "/audio/consonant/consonant-pair/chef.mp3", phonemeMap: [{ ipa: "/t\u0283/", spelling: "ch" }] },
        ],
      },
      {
        name: "th /\u03b8/",
        slug: "th",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "three", phonetic: "\u03b8ri\u02d0", meaning: "num. \u4e09", audio: "/audio/consonant/consonant-pair/three.mp3", phonemeMap: [{ ipa: "/\u03b8/", spelling: "th" }] },
        ],
      },
      {
        name: "th /\u03b8/",
        slug: "th",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "this", phonetic: "\u00f0\u026as", meaning: "pron. \u8fd9\u4e2a", audio: "/audio/consonant/consonant-pair/this.mp3", phonemeMap: [{ ipa: "/\u03b8/", spelling: "th" }] },
        ],
      },
      {
        name: "th /\u03b8/",
        slug: "th",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "think", phonetic: "\u03b8\u026a\u014bk", meaning: "v. \u601d\u8003", audio: "/audio/consonant/consonant-pair/think.mp3", phonemeMap: [{ ipa: "/\u03b8/", spelling: "th" }] },
        ],
      },
      {
        name: "ph /f/",
        slug: "ph",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "phone", phonetic: "f\u0259\u028an", meaning: "n. \u7535\u8bdd", audio: "/audio/consonant/consonant-pair/phone.mp3", syllables: ["phon", "e"], phonemeMap: [{ ipa: "/f/", spelling: "ph" }] },
        ],
      },
      {
        name: "ph /f/",
        slug: "ph",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "photo", phonetic: "\u02c8f\u0259\u028at\u0259\u028a", meaning: "n. \u7167\u7247", audio: "/audio/consonant/consonant-pair/photo.mp3", syllables: ["pho", "to"], phonemeMap: [{ ipa: "/f/", spelling: "ph" }] },
        ],
      },
      {
        name: "ph /f/",
        slug: "ph",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "elephant", phonetic: "\u02c8el\u026af\u0259nt", meaning: "n. \u5927\u8c61", audio: "/audio/consonant/consonant-pair/elephant.mp3", syllables: ["e", "le", "phant"], phonemeMap: [{ ipa: "/f/", spelling: "ph" }] },
        ],
      },
      {
        name: "wh /w/",
        slug: "wh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "what", phonetic: "w\u0252t", meaning: "pron. \u4ec0\u4e48", audio: "/audio/consonant/consonant-pair/what.mp3", phonemeMap: [{ ipa: "/w/", spelling: "wh" }] },
        ],
      },
      {
        name: "wh /w/",
        slug: "wh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "when", phonetic: "wen", meaning: "adv. \u4ec0\u4e48\u65f6\u5019", audio: "/audio/consonant/consonant-pair/when.mp3", phonemeMap: [{ ipa: "/w/", spelling: "wh" }] },
        ],
      },
      {
        name: "wh /w/",
        slug: "wh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "who", phonetic: "hu\u02d0", meaning: "pron. \u8c01", audio: "/audio/consonant/consonant-pair/who.mp3", phonemeMap: [{ ipa: "/w/", spelling: "wh" }] },
        ],
      },
      {
        name: "wr- /r/",
        slug: "wr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "write", phonetic: "ra\u026at", meaning: "v. \u5199", audio: "/audio/consonant/consonant-pair/write.mp3", phonemeMap: [{ ipa: "/r/", spelling: "wr" }] },
        ],
      },
      {
        name: "wr- /r/",
        slug: "wr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "wrong", phonetic: "r\u0252\u014b", meaning: "adj. \u9519\u8bef\u7684", audio: "/audio/consonant/consonant-pair/wrong.mp3", phonemeMap: [{ ipa: "/r/", spelling: "wr" }] },
        ],
      },
      {
        name: "wr- /r/",
        slug: "wr-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "wrist", phonetic: "r\u026ast", meaning: "n. \u624b\u8155", audio: "/audio/consonant/consonant-pair/wrist.mp3", phonemeMap: [{ ipa: "/r/", spelling: "wr" }] },
        ],
      },
      {
        name: "kn- /n/",
        slug: "kn-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "knife", phonetic: "na\u026af", meaning: "n. \u5200", audio: "/audio/consonant/consonant-pair/knife.mp3", phonemeMap: [{ ipa: "/n/", spelling: "kn" }] },
        ],
      },
      {
        name: "kn- /n/",
        slug: "kn-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "knee", phonetic: "ni\u02d0", meaning: "n. \u819d\u76d6", audio: "/audio/consonant/consonant-pair/knee.mp3", phonemeMap: [{ ipa: "/n/", spelling: "kn" }] },
        ],
      },
      {
        name: "kn- /n/",
        slug: "kn-",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "knock", phonetic: "n\u0252k", meaning: "v. \u6572", audio: "/audio/consonant/consonant-pair/knock.mp3", phonemeMap: [{ ipa: "/n/", spelling: "kn" }] },
        ],
      },
      {
        name: "-mb /m/",
        slug: "-mb",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "lamb", phonetic: "l\u00e6m", meaning: "n. \u7f94\u7f8a", audio: "/audio/consonant/consonant-pair/lamb.mp3", phonemeMap: [{ ipa: "/m/", spelling: "mb" }] },
        ],
      },
      {
        name: "-mb /m/",
        slug: "-mb",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "comb", phonetic: "k\u0259\u028am", meaning: "n. \u68b3\u5b50", audio: "/audio/consonant/consonant-pair/comb.mp3", phonemeMap: [{ ipa: "/m/", spelling: "mb" }] },
        ],
      },
      {
        name: "-mb /m/",
        slug: "-mb",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "climb", phonetic: "kla\u026am", meaning: "v. \u6500\u722c", audio: "/audio/consonant/consonant-pair/climb.mp3", phonemeMap: [{ ipa: "/m/", spelling: "mb" }] },
        ],
      },
      {
        name: "-bt /t/",
        slug: "-bt",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "doubt", phonetic: "da\u028at", meaning: "v. \u6000\u7591", audio: "/audio/consonant/consonant-pair/doubt.mp3", syllables: ["do", "ubt"], phonemeMap: [{ ipa: "/t/", spelling: "bt" }] },
        ],
      },
      {
        name: "-bt /t/",
        slug: "-bt",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "debt", phonetic: "det", meaning: "n. \u503a\u52a1", audio: "/audio/consonant/consonant-pair/debt.mp3", phonemeMap: [{ ipa: "/t/", spelling: "bt" }] },
        ],
      },
      {
        name: "-bt /t/",
        slug: "-bt",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "subtle", phonetic: "\u02c8s\u028ct(\u0259)l", meaning: "adj. \u5fae\u5999\u7684", audio: "/audio/consonant/consonant-pair/subtle.mp3", syllables: ["subt", "le"], phonemeMap: [{ ipa: "/t/", spelling: "bt" }] },
        ],
      },
      {
        name: "gh /f/",
        slug: "gh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "laugh", phonetic: "l\u0251\u02d0f", meaning: "v. \u7b11", audio: "/audio/consonant/consonant-pair/laugh.mp3", syllables: ["la", "ugh"], phonemeMap: [{ ipa: "/f/", spelling: "gh" }] },
        ],
      },
      {
        name: "gh /f/",
        slug: "gh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "ghost", phonetic: "\u0261\u0259\u028ast", meaning: "n. \u9b3c", audio: "/audio/consonant/consonant-pair/ghost.mp3", phonemeMap: [{ ipa: "/f/", spelling: "gh" }] },
        ],
      },
      {
        name: "gh /f/",
        slug: "gh",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "enough", phonetic: "\u026a\u02c8n\u028cf", meaning: "adj. \u8db3\u591f\u7684", audio: "/audio/consonant/consonant-pair/enough.mp3", syllables: ["e", "nough"], phonemeMap: [{ ipa: "/f/", spelling: "gh" }] },
        ],
      },
      {
        name: "-dge /d\u0292/",
        slug: "-dge",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "bridge", phonetic: "br\u026ad\u0292", meaning: "n. \u6865", audio: "/audio/consonant/consonant-pair/bridge.mp3", phonemeMap: [{ ipa: "/d\u0292/", spelling: "dge" }] },
        ],
      },
      {
        name: "-dge /d\u0292/",
        slug: "-dge",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "edge", phonetic: "ed\u0292", meaning: "n. \u8fb9\u7f18", audio: "/audio/consonant/consonant-pair/edge.mp3", phonemeMap: [{ ipa: "/d\u0292/", spelling: "dge" }] },
        ],
      },
      {
        name: "-dge /d\u0292/",
        slug: "-dge",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "badge", phonetic: "b\u00e6d\u0292", meaning: "n. \u5fbd\u7ae0", audio: "/audio/consonant/consonant-pair/badge.mp3", phonemeMap: [{ ipa: "/d\u0292/", spelling: "dge" }] },
        ],
      },
      {
        name: "-tch /t\u0283/",
        slug: "-tch",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "catch", phonetic: "k\u00e6t\u0283", meaning: "v. \u6293\u4f4f", audio: "/audio/consonant/consonant-pair/catch.mp3", phonemeMap: [{ ipa: "/t\u0283/", spelling: "tch" }] },
        ],
      },
      {
        name: "-tch /t\u0283/",
        slug: "-tch",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "watch", phonetic: "w\u0252t\u0283", meaning: "v. \u89c2\u770b", audio: "/audio/consonant/consonant-pair/watch.mp3", phonemeMap: [{ ipa: "/t\u0283/", spelling: "tch" }] },
        ],
      },
      {
        name: "-tch /t\u0283/",
        slug: "-tch",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "kitchen", phonetic: "\u02c8k\u026at\u0283\u026an", meaning: "n. \u53a8\u623f", audio: "/audio/consonant/consonant-pair/kitchen.mp3", syllables: ["kit", "chen"], phonemeMap: [{ ipa: "/t\u0283/", spelling: "tch" }] },
        ],
      },
      {
        name: "-ck /k/",
        slug: "-ck",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "duck", phonetic: "d\u028ck", meaning: "n. \u9e2d\u5b50", audio: "/audio/consonant/consonant-pair/duck.mp3", phonemeMap: [{ ipa: "/k/", spelling: "ck" }] },
        ],
      },
      {
        name: "-ck /k/",
        slug: "-ck",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "black", phonetic: "bl\u00e6k", meaning: "adj. \u9ed1\u8272\u7684", audio: "/audio/consonant/consonant-pair/black.mp3", phonemeMap: [{ ipa: "/k/", spelling: "ck" }] },
        ],
      },
      {
        name: "-ck /k/",
        slug: "-ck",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "clock", phonetic: "kl\u0252k", meaning: "n. \u65f6\u949f", audio: "/audio/consonant/consonant-pair/clock.mp3", phonemeMap: [{ ipa: "/k/", spelling: "ck" }] },
        ],
      },
      {
        name: "-ts /ts/",
        slug: "-ts",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cats", phonetic: "k\u00e6ts", meaning: "n. \u732b\uff08\u590d\u6570\uff09", audio: "/audio/consonant/consonant-pair/cats.mp3", phonemeMap: [{ ipa: "/ts/", spelling: "ts" }] },
        ],
      },
      {
        name: "-ts /ts/",
        slug: "-ts",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "hats", phonetic: "h\u00e6ts", meaning: "n. \u5e3d\u5b50\uff08\u590d\u6570\uff09", audio: "/audio/consonant/consonant-pair/hats.mp3", phonemeMap: [{ ipa: "/ts/", spelling: "ts" }] },
        ],
      },
      {
        name: "-ts /ts/",
        slug: "-ts",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "boats", phonetic: "bo\u028ats", meaning: "n. \u8239\uff08\u590d\u6570\uff09", audio: "/audio/consonant/consonant-pair/boats.mp3", syllables: ["bo", "ats"], phonemeMap: [{ ipa: "/ts/", spelling: "ts" }] },
        ],
      },
      {
        name: "-ds /dz/",
        slug: "-ds",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "birds", phonetic: "b\u025ddz", meaning: "n. \u9e1f\uff08\u590d\u6570\uff09", audio: "/audio/consonant/consonant-pair/birds.mp3", phonemeMap: [{ ipa: "/dz/", spelling: "ds" }] },
        ],
      },
      {
        name: "-ds /dz/",
        slug: "-ds",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "hands", phonetic: "h\u00e6ndz", meaning: "n. \u624b\uff08\u590d\u6570\uff09", audio: "/audio/consonant/consonant-pair/hands.mp3", phonemeMap: [{ ipa: "/dz/", spelling: "ds" }] },
        ],
      },
      {
        name: "-ds /dz/",
        slug: "-ds",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "words", phonetic: "w\u025c\u02d0dz", meaning: "n. \u5355\u8bcd\uff08\u590d\u6570\uff09", audio: "/audio/consonant/consonant-pair/words.mp3", phonemeMap: [{ ipa: "/dz/", spelling: "ds" }] },
        ],
      },
      {
        name: "-ng /\u014b/",
        slug: "-ng",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "sing", phonetic: "s\u02c8\u026a\u014b", meaning: "v. \u5531\u6b4c", audio: "/audio/consonant/consonant-pair/sing.mp3", phonemeMap: [{ ipa: "/\u014b/", spelling: "ng" }] },
        ],
      },
      {
        name: "-ng /\u014b/",
        slug: "-ng",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "long", phonetic: "l\u0252\u014b", meaning: "adj. \u957f\u7684", audio: "/audio/consonant/consonant-pair/long.mp3", phonemeMap: [{ ipa: "/\u014b/", spelling: "ng" }] },
        ],
      },
      {
        name: "-ng /\u014b/",
        slug: "-ng",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "ring", phonetic: "r\u026a\u014b", meaning: "n. \u6212\u6307", audio: "/audio/consonant/consonant-pair/ring.mp3", phonemeMap: [{ ipa: "/\u014b/", spelling: "ng" }] },
        ],
      },
    ],
  },
  {
    name: "\u5c3e\u7f00\u4e0e\u53cc\u5199",
    emoji: "🔠",
    slug: "consonant-ending",
    description: "\u5c3e\u7f00\u4e0e\u53cc\u5199 · 33 规则 33 词",
    tests: [
      {
        name: "-ss /s/",
        slug: "-ss",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "glass", phonetic: "\u0261l\u0251\u02d0s", meaning: "n. \u73bb\u7483", audio: "/audio/consonant/consonant-ending/glass.mp3", phonemeMap: [{ ipa: "/s/", spelling: "ss" }] },
        ],
      },
      {
        name: "-ss /s/",
        slug: "-ss",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "class", phonetic: "kl\u0251\u02d0s", meaning: "n. \u73ed\u7ea7", audio: "/audio/consonant/consonant-ending/class.mp3", phonemeMap: [{ ipa: "/s/", spelling: "ss" }] },
        ],
      },
      {
        name: "-ss /s/",
        slug: "-ss",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "dress", phonetic: "dres", meaning: "n. \u8fde\u8863\u88d9", audio: "/audio/consonant/consonant-ending/dress.mp3", phonemeMap: [{ ipa: "/s/", spelling: "ss" }] },
        ],
      },
      {
        name: "-ll /l/",
        slug: "-ll",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "ball", phonetic: "b\u02c8\u0254l", meaning: "n. \u7403", audio: "/audio/consonant/consonant-ending/ball.mp3", phonemeMap: [{ ipa: "/l/", spelling: "ll" }] },
        ],
      },
      {
        name: "-ll /l/",
        slug: "-ll",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "hill", phonetic: "h\u02c8\u026al", meaning: "n. \u5c0f\u5c71", audio: "/audio/consonant/consonant-ending/hill.mp3", phonemeMap: [{ ipa: "/l/", spelling: "ll" }] },
        ],
      },
      {
        name: "-ll /l/",
        slug: "-ll",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "small", phonetic: "sm\u0254\u02d0l", meaning: "adj. \u5c0f\u7684", audio: "/audio/consonant/consonant-ending/small.mp3", phonemeMap: [{ ipa: "/l/", spelling: "ll" }] },
        ],
      },
      {
        name: "-ff /f/",
        slug: "-ff",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "off", phonetic: "\u0252f", meaning: "adv. \u79bb\u5f00", audio: "/audio/consonant/consonant-ending/off.mp3", phonemeMap: [{ ipa: "/f/", spelling: "ff" }] },
        ],
      },
      {
        name: "-ff /f/",
        slug: "-ff",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cliff", phonetic: "kl\u026af", meaning: "n. \u60ac\u5d16", audio: "/audio/consonant/consonant-ending/cliff.mp3", phonemeMap: [{ ipa: "/f/", spelling: "ff" }] },
        ],
      },
      {
        name: "-ff /f/",
        slug: "-ff",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "stuff", phonetic: "st\u028cf", meaning: "n. \u4e1c\u897f", audio: "/audio/consonant/consonant-ending/stuff.mp3", phonemeMap: [{ ipa: "/f/", spelling: "ff" }] },
        ],
      },
      {
        name: "-zz /z/",
        slug: "-zz",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "buzz", phonetic: "b\u028cz", meaning: "v. \u55e1\u55e1\u53eb", audio: "/audio/consonant/consonant-ending/buzz.mp3", phonemeMap: [{ ipa: "/z/", spelling: "zz" }] },
        ],
      },
      {
        name: "-zz /z/",
        slug: "-zz",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "fizz", phonetic: "f\u026az", meaning: "v. \u5636\u5636\u54cd", audio: "/audio/consonant/consonant-ending/fizz.mp3", phonemeMap: [{ ipa: "/z/", spelling: "zz" }] },
        ],
      },
      {
        name: "-zz /z/",
        slug: "-zz",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "jazz", phonetic: "d\u0292\u00e6z", meaning: "n. \u7235\u58eb\u4e50", audio: "/audio/consonant/consonant-ending/jazz.mp3", phonemeMap: [{ ipa: "/z/", spelling: "zz" }] },
        ],
      },
      {
        name: "-nk /\u014bk/",
        slug: "-nk",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "pink", phonetic: "p\u026a\u014bk", meaning: "adj. \u7c89\u8272\u7684", audio: "/audio/consonant/consonant-ending/pink.mp3", phonemeMap: [{ ipa: "/\u014bk/", spelling: "nk" }] },
        ],
      },
      {
        name: "-nk /\u014bk/",
        slug: "-nk",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "drink", phonetic: "dr\u026a\u014bk", meaning: "v. \u559d", audio: "/audio/consonant/consonant-ending/drink.mp3", phonemeMap: [{ ipa: "/\u014bk/", spelling: "nk" }] },
        ],
      },
      {
        name: "-nk /\u014bk/",
        slug: "-nk",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "think", phonetic: "\u03b8\u026a\u014bk", meaning: "v. \u601d\u8003", audio: "/audio/consonant/consonant-ending/think.mp3", phonemeMap: [{ ipa: "/\u014bk/", spelling: "nk" }] },
        ],
      },
      {
        name: "-mp /mp/",
        slug: "-mp",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "lamp", phonetic: "l\u00e6mp", meaning: "n. \u53f0\u706f", audio: "/audio/consonant/consonant-ending/lamp.mp3", phonemeMap: [{ ipa: "/mp/", spelling: "mp" }] },
        ],
      },
      {
        name: "-mp /mp/",
        slug: "-mp",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "jump", phonetic: "d\u0292\u028cmp", meaning: "v. \u8df3", audio: "/audio/consonant/consonant-ending/jump.mp3", phonemeMap: [{ ipa: "/mp/", spelling: "mp" }] },
        ],
      },
      {
        name: "-mp /mp/",
        slug: "-mp",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "camp", phonetic: "k\u00e6mp", meaning: "n. \u8425\u5730", audio: "/audio/consonant/consonant-ending/camp.mp3", phonemeMap: [{ ipa: "/mp/", spelling: "mp" }] },
        ],
      },
      {
        name: "-nd /nd/",
        slug: "-nd",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "hand", phonetic: "h\u00e6nd", meaning: "n. \u624b", audio: "/audio/consonant/consonant-ending/hand.mp3", phonemeMap: [{ ipa: "/nd/", spelling: "nd" }] },
        ],
      },
      {
        name: "-nd /nd/",
        slug: "-nd",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "find", phonetic: "fa\u026and", meaning: "v. \u627e\u5230", audio: "/audio/consonant/consonant-ending/find.mp3", phonemeMap: [{ ipa: "/nd/", spelling: "nd" }] },
        ],
      },
      {
        name: "-nd /nd/",
        slug: "-nd",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "wind", phonetic: "w\u026and", meaning: "n. \u98ce", audio: "/audio/consonant/consonant-ending/wind.mp3", phonemeMap: [{ ipa: "/nd/", spelling: "nd" }] },
        ],
      },
      {
        name: "-nt /nt/",
        slug: "-nt",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "ant", phonetic: "\u00e6nt", meaning: "n. \u8682\u8681", audio: "/audio/consonant/consonant-ending/ant.mp3", phonemeMap: [{ ipa: "/nt/", spelling: "nt" }] },
        ],
      },
      {
        name: "-nt /nt/",
        slug: "-nt",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "plant", phonetic: "pl\u0251\u02d0nt", meaning: "n. \u690d\u7269", audio: "/audio/consonant/consonant-ending/plant.mp3", phonemeMap: [{ ipa: "/nt/", spelling: "nt" }] },
        ],
      },
      {
        name: "-nt /nt/",
        slug: "-nt",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "paint", phonetic: "pe\u026ant", meaning: "v. \u753b\u753b", audio: "/audio/consonant/consonant-ending/paint.mp3", syllables: ["pa", "int"], phonemeMap: [{ ipa: "/nt/", spelling: "nt" }] },
        ],
      },
      {
        name: "-ld /ld/",
        slug: "-ld",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "cold", phonetic: "k\u0259\u028ald", meaning: "adj. \u51b7\u7684", audio: "/audio/consonant/consonant-ending/cold.mp3", phonemeMap: [{ ipa: "/ld/", spelling: "ld" }] },
        ],
      },
      {
        name: "-ld /ld/",
        slug: "-ld",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "old", phonetic: "\u0259\u028ald", meaning: "adj. \u8001\u7684", audio: "/audio/consonant/consonant-ending/old.mp3", phonemeMap: [{ ipa: "/ld/", spelling: "ld" }] },
        ],
      },
      {
        name: "-ld /ld/",
        slug: "-ld",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "hold", phonetic: "h\u0259\u028ald", meaning: "v. \u63e1\u4f4f", audio: "/audio/consonant/consonant-ending/hold.mp3", phonemeMap: [{ ipa: "/ld/", spelling: "ld" }] },
        ],
      },
      {
        name: "-lf /lf/",
        slug: "-lf",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "shelf", phonetic: "\u0283elf", meaning: "n. \u67b6\u5b50", audio: "/audio/consonant/consonant-ending/shelf.mp3", phonemeMap: [{ ipa: "/lf/", spelling: "lf" }] },
        ],
      },
      {
        name: "-lf /lf/",
        slug: "-lf",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "wolf", phonetic: "w\u028alf", meaning: "n. \u72fc", audio: "/audio/consonant/consonant-ending/wolf.mp3", phonemeMap: [{ ipa: "/lf/", spelling: "lf" }] },
        ],
      },
      {
        name: "-lf /lf/",
        slug: "-lf",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "half", phonetic: "h\u0251\u02d0f", meaning: "n. \u4e00\u534a", audio: "/audio/consonant/consonant-ending/half.mp3", phonemeMap: [{ ipa: "/lf/", spelling: "lf" }] },
        ],
      },
      {
        name: "-lk /lk/",
        slug: "-lk",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "milk", phonetic: "m\u026alk", meaning: "n. \u725b\u5976", audio: "/audio/consonant/consonant-ending/milk.mp3", phonemeMap: [{ ipa: "/lk/", spelling: "lk" }] },
        ],
      },
      {
        name: "-lk /lk/",
        slug: "-lk",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "walk", phonetic: "w\u0254\u02d0k", meaning: "v. \u8d70\u8def", audio: "/audio/consonant/consonant-ending/walk.mp3", phonemeMap: [{ ipa: "/lk/", spelling: "lk" }] },
        ],
      },
      {
        name: "-lk /lk/",
        slug: "-lk",
        wordCount: 1, difficulty: 2,
        words: [
          { word: "talk", phonetic: "t\u0254\u02d0k", meaning: "v. \u8bf4\u8bdd", audio: "/audio/consonant/consonant-ending/talk.mp3", phonemeMap: [{ ipa: "/lk/", spelling: "lk" }] },
        ],
      },
    ],
  },
]

export { T as PHONICS_CONSONANT_CHAPTERS }

/** 按 chapter slug 查找分组 */
export function getPhonicsConsonantChapter(chapterSlug: string): WhaleChapter | undefined {
  return T.find((c) => c.slug === chapterSlug)
}

