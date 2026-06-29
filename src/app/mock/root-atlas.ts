export type WordEntry = {
  word: string;
  pos: string;
  meaning: string;
};

export type RootSection = {
  root: string;
  title: string;
  words: WordEntry[];
  total: number;
};

export const ROOT_DATA: RootSection[] = [
  {
    root: "-prim- / -prin- / -pri-",
    title: "第一（首要）",
    words: [
      { word: "premier", pos: "n.", meaning: "（加、澳）省长；总理" },
      { word: "primary", pos: "adj.", meaning: "首要的；初级的" },
      { word: "prime", pos: "adj.", meaning: "首要的；最好的" },
      { word: "primitive", pos: "adj.", meaning: "原始的；简单的" },
      { word: "primeval", pos: "adj.", meaning: "原始的；远古的" },
    ],
    total: 12,
  },
  {
    root: "-spect- / -spic-",
    title: "看（look, see）",
    words: [
      { word: "inspect", pos: "v.", meaning: "检查；视察" },
      { word: "prospect", pos: "n.", meaning: "前景；可能性" },
      { word: "spectacle", pos: "n.", meaning: "景象；眼镜" },
      { word: "spectator", pos: "n.", meaning: "观众；旁观者" },
      { word: "conspicuous", pos: "adj.", meaning: "显眼的；引人注目的" },
      { word: "perspective", pos: "n.", meaning: "视角；观点" },
      { word: "retrospect", pos: "n.", meaning: "回顾；追忆" },
    ],
    total: 15,
  },
  {
    root: "-dict-",
    title: "说（say, speak）",
    words: [
      { word: "predict", pos: "v.", meaning: "预言；预测" },
      { word: "dictate", pos: "v.", meaning: "口述；命令" },
      { word: "verdict", pos: "n.", meaning: "裁决；判断" },
      { word: "contradict", pos: "v.", meaning: "反驳；与…矛盾" },
      { word: "indicate", pos: "v.", meaning: "表明；指示" },
      { word: "dedicate", pos: "v.", meaning: "致力于；奉献" },
    ],
    total: 18,
  },
  {
    root: "-duct- / -duc-",
    title: "引导（lead, bring）",
    words: [
      { word: "conduct", pos: "v. / n.", meaning: "实施；行为" },
      { word: "deduce", pos: "v.", meaning: "推断；演绎" },
      { word: "induce", pos: "v.", meaning: "引起；诱导" },
      { word: "introduce", pos: "v.", meaning: "介绍；引入" },
      { word: "produce", pos: "v.", meaning: "生产；产生" },
      { word: "reduce", pos: "v.", meaning: "减少；降低" },
      { word: "seduce", pos: "v.", meaning: "引诱；诱惑" },
    ],
    total: 20,
  },
  {
    root: "-mit- / -miss-",
    title: "送（send）",
    words: [
      { word: "admit", pos: "v.", meaning: "承认；准许进入" },
      { word: "commit", pos: "v.", meaning: "承诺；犯罪" },
      { word: "emit", pos: "v.", meaning: "发出；排放" },
      { word: "permit", pos: "v.", meaning: "允许；许可" },
      { word: "submit", pos: "v.", meaning: "提交；服从" },
      { word: "transmit", pos: "v.", meaning: "传输；传播" },
    ],
    total: 16,
  },
];
