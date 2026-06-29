export interface Keyword {
  word: string
  pos: string
  meaning: string
  synonyms: string
  notes: string
}

export interface KeywordCategory {
  title: string
  description: string
  words: Keyword[]
}

export const keywordCategories: KeywordCategory[] = [
  {
    "title": "第一类考点词",
    "description": "滚瓜烂熟",
    "words": [
      {
        "word": "resemble",
        "pos": "v.",
        "meaning": "像，与……相似",
        "synonyms": "like,look,be similar to",
        "notes": ""
      },
      {
        "word": "recognize",
        "pos": "v.",
        "meaning": "认出，识别；承认",
        "synonyms": "perceive,acknowledge,realize,appreciate, admit ,identify, comprehend, understand, know",
        "notes": ""
      },
      {
        "word": "adjust",
        "pos": "v.",
        "meaning": "调整，使适合",
        "synonyms": "change, modify, shift, alter",
        "notes": ""
      },
      {
        "word": "approach",
        "pos": "n.",
        "meaning": "方法",
        "synonyms": "method, way",
        "notes": ""
      },
      {
        "word": "fundamental",
        "pos": "adj.",
        "meaning": "基本的，基础的",
        "synonyms": "rudimentary, preliminary, basic",
        "notes": ""
      },
      {
        "word": "rely on",
        "pos": "",
        "meaning": "依靠，依赖",
        "synonyms": "depend on",
        "notes": ""
      },
      {
        "word": "domestic",
        "pos": "adj.",
        "meaning": "家庭的；国内的",
        "synonyms": "home, local, national",
        "notes": ""
      },
      {
        "word": "measure",
        "pos": "v.",
        "meaning": "测量",
        "synonyms": "calculate, assess, evaluate",
        "notes": ""
      },
      {
        "word": "trait",
        "pos": "n.",
        "meaning": "特性，特征",
        "synonyms": "characteristic, feature, property",
        "notes": ""
      },
      {
        "word": "coin",
        "pos": "v.",
        "meaning": "创造",
        "synonyms": "first used, invent",
        "notes": ""
      },
      {
        "word": "artificial",
        "pos": "adj.",
        "meaning": "人造的，仿造的",
        "synonyms": "synthetic, man-made",
        "notes": ""
      },
      {
        "word": "prompt",
        "pos": "v.",
        "meaning": "促进，激起",
        "synonyms": "initiate, immediately",
        "notes": ""
      },
      {
        "word": "exchange",
        "pos": "v.",
        "meaning": "交换",
        "synonyms": "share, swap, trade",
        "notes": ""
      },
      {
        "word": "underlie",
        "pos": "v.",
        "meaning": "成为……基础",
        "synonyms": "based on, ground, root",
        "notes": ""
      },
      {
        "word": "ignore",
        "pos": "v.",
        "meaning": "忽视，不顾",
        "synonyms": "neglect, overlook, underestimate",
        "notes": ""
      },
      {
        "word": "fertiliser",
        "pos": "n.",
        "meaning": "化肥，肥料",
        "synonyms": "chemical, toxic, unnatural",
        "notes": ""
      },
      {
        "word": "that*",
        "pos": "pron.",
        "meaning": "那；那个",
        "synonyms": "this, it, they, those, these, such",
        "notes": "*指代是雅思阅读的重要考点"
      },
      {
        "word": "and*",
        "pos": "conj.",
        "meaning": "和，而且",
        "synonyms": "or, as well as, both…and, not only…but also…, other than, in addition, besides, on the one hand…on the other hand…, neither…nor…",
        "notes": "*并列结构是雅思阅读的重要考点"
      },
      {
        "word": "rather than*",
        "pos": "",
        "meaning": "而非，不是",
        "synonyms": "but, yet, however, whereas, nonetheless, nevertheless, although, notwithstanding, though, instead",
        "notes": "*转折结构是雅思阅读的重要考点"
      },
      {
        "word": "thanks to*",
        "pos": "",
        "meaning": "由于，幸亏",
        "synonyms": "stem from, derive, owing to, due to, according to, because of, on account of, as a result of, leading to, because, since, for, in that, as, therefore, hence",
        "notes": "*因果关系是雅思阅读重要考点"
      }
    ]
  },
  {
    "title": "第 2 类观点词",
    "description": "熟记 10 遍以上",
    "words": [
      {
        "word": "diversity",
        "pos": "n.",
        "meaning": "多样性，差异",
        "synonyms": "variety, difference",
        "notes": ""
      },
      {
        "word": "detect",
        "pos": "v.",
        "meaning": "查明，发现",
        "synonyms": "find, look for, seek, search",
        "notes": ""
      },
      {
        "word": "isolate",
        "pos": "v.",
        "meaning": "使隔离，使孤立",
        "synonyms": "inaccessible",
        "notes": ""
      },
      {
        "word": "avoid",
        "pos": "v.",
        "meaning": "避免",
        "synonyms": "escape, evitable",
        "notes": ""
      },
      {
        "word": "budget",
        "pos": "n.",
        "meaning": "预算",
        "synonyms": "fund, financial",
        "notes": ""
      },
      {
        "word": "adapt to",
        "pos": "",
        "meaning": "使适应",
        "synonyms": "fit, suit",
        "notes": ""
      },
      {
        "word": "alternative",
        "pos": "adj./n.",
        "meaning": "供替代的，供选择的/替代品",
        "synonyms": "substitute",
        "notes": ""
      },
      {
        "word": "compensate",
        "pos": "n.",
        "meaning": "补偿，赔偿",
        "synonyms": "make up, offset",
        "notes": ""
      },
      {
        "word": "component",
        "pos": "n.",
        "meaning": "成分，要素",
        "synonyms": "proportion",
        "notes": ""
      },
      {
        "word": "military",
        "pos": "adj.",
        "meaning": "军事的",
        "synonyms": "weapon, army",
        "notes": ""
      },
      {
        "word": "criteria",
        "pos": "n.",
        "meaning": "标准",
        "synonyms": "standard",
        "notes": ""
      },
      {
        "word": "curriculum",
        "pos": "n.",
        "meaning": "课程",
        "synonyms": "syllabus, course of study",
        "notes": ""
      },
      {
        "word": "feasible",
        "pos": "adj.",
        "meaning": "可行的",
        "synonyms": "realistic, viable",
        "notes": ""
      },
      {
        "word": "constrain",
        "pos": "v.",
        "meaning": "束缚，限制",
        "synonyms": "stop, control",
        "notes": ""
      },
      {
        "word": "deficiency",
        "pos": "n.",
        "meaning": "缺陷，缺点",
        "synonyms": "shortage, defect, weakness",
        "notes": ""
      },
      {
        "word": "supplement",
        "pos": "v.",
        "meaning": "补充",
        "synonyms": "provision",
        "notes": ""
      },
      {
        "word": "distinguish",
        "pos": "v.",
        "meaning": "区别，辨别",
        "synonyms": "separate, differentiate",
        "notes": ""
      },
      {
        "word": "analyze",
        "pos": "v.",
        "meaning": "分析，解释",
        "synonyms": "examine, diagnose",
        "notes": ""
      },
      {
        "word": "emphasize",
        "pos": "v.",
        "meaning": "强调，着重",
        "synonyms": "focus on, stress",
        "notes": ""
      },
      {
        "word": "enormous",
        "pos": "adj.",
        "meaning": "庞大的，巨大的",
        "synonyms": "massive, large",
        "notes": ""
      },
      {
        "word": "imitate",
        "pos": "v.",
        "meaning": "模仿",
        "synonyms": "mimic, copy",
        "notes": ""
      },
      {
        "word": "impair",
        "pos": "v.",
        "meaning": "削弱，减少",
        "synonyms": "damage, diminish, decrease",
        "notes": ""
      },
      {
        "word": "hinder",
        "pos": "v.",
        "meaning": "阻碍",
        "synonyms": "impede, prevent, deter, obstacle",
        "notes": ""
      },
      {
        "word": "legitimate",
        "pos": "adj.",
        "meaning": "合法的",
        "synonyms": "legal",
        "notes": ""
      },
      {
        "word": "limitation",
        "pos": "n.",
        "meaning": "限制",
        "synonyms": "restriction",
        "notes": ""
      },
      {
        "word": "convention",
        "pos": "n.",
        "meaning": "手法；习俗",
        "synonyms": "method; tradition",
        "notes": ""
      },
      {
        "word": "demanding",
        "pos": "adj.",
        "meaning": "苛求的",
        "synonyms": "troublesome",
        "notes": ""
      },
      {
        "word": "determine",
        "pos": "v.",
        "meaning": "决定",
        "synonyms": "decide",
        "notes": ""
      },
      {
        "word": "accelerate",
        "pos": "v.",
        "meaning": "加速，促进；强调",
        "synonyms": "speed up",
        "notes": ""
      },
      {
        "word": "ancient",
        "pos": "adj.",
        "meaning": "古代的;古老的",
        "synonyms": "aged, old",
        "notes": ""
      },
      {
        "word": "beneficial",
        "pos": "adj.",
        "meaning": "有益的",
        "synonyms": "helpful, advantageous, wholesome",
        "notes": ""
      },
      {
        "word": "chronic",
        "pos": "adj.",
        "meaning": "慢性的，长期性的",
        "synonyms": "lasting",
        "notes": ""
      },
      {
        "word": "conscious",
        "pos": "adj.",
        "meaning": "有意识的，神志清醒的",
        "synonyms": "aware, knowing",
        "notes": ""
      },
      {
        "word": "minimize",
        "pos": "v.",
        "meaning": "最小化，使……减少到最少",
        "synonyms": "reduce, lessen",
        "notes": ""
      },
      {
        "word": "immunity",
        "pos": "n.",
        "meaning": "免疫力",
        "synonyms": "resistance",
        "notes": ""
      },
      {
        "word": "Imperative",
        "pos": "adj.",
        "meaning": "必要的，紧急的",
        "synonyms": "compelling, necessary, urgent",
        "notes": ""
      },
      {
        "word": "secrete",
        "pos": "v.",
        "meaning": "分泌",
        "synonyms": "discharge, exude",
        "notes": ""
      },
      {
        "word": "exaggerate",
        "pos": "v.",
        "meaning": "夸大，夸张",
        "synonyms": "overstate",
        "notes": ""
      },
      {
        "word": "transmit",
        "pos": "v.",
        "meaning": "传达，传输",
        "synonyms": "pass, send ,transfer",
        "notes": ""
      },
      {
        "word": "extinct",
        "pos": "adj.",
        "meaning": "灭绝的",
        "synonyms": "die out, lost",
        "notes": ""
      },
      {
        "word": "exclusive",
        "pos": "adj.",
        "meaning": "独有的；排外的；专一的",
        "synonyms": "only",
        "notes": ""
      },
      {
        "word": "guarantee",
        "pos": "v.",
        "meaning": "保证，担保",
        "synonyms": "assure",
        "notes": ""
      },
      {
        "word": "inherit",
        "pos": "v.",
        "meaning": "继承",
        "synonyms": "receive",
        "notes": ""
      },
      {
        "word": "witness",
        "pos": "n.",
        "meaning": "见证，证据；目击者",
        "synonyms": "view, see",
        "notes": ""
      },
      {
        "word": "magnetic",
        "pos": "adj.",
        "meaning": "有磁性的",
        "synonyms": "attractive",
        "notes": ""
      },
      {
        "word": "loss",
        "pos": "n.",
        "meaning": "减少；亏损；失败；遗失的",
        "synonyms": "waste, gone",
        "notes": ""
      },
      {
        "word": "option",
        "pos": "n.",
        "meaning": "选择",
        "synonyms": "choice",
        "notes": ""
      },
      {
        "word": "prefer to",
        "pos": "",
        "meaning": "更喜欢",
        "synonyms": "rather",
        "notes": ""
      },
      {
        "word": "priority",
        "pos": "n.",
        "meaning": "优先权",
        "synonyms": "preference, preferential",
        "notes": ""
      },
      {
        "word": "primary",
        "pos": "adj.",
        "meaning": "主要的",
        "synonyms": "principle, main",
        "notes": ""
      },
      {
        "word": "principle",
        "pos": "n.",
        "meaning": "原理",
        "synonyms": "rule",
        "notes": ""
      },
      {
        "word": "potential",
        "pos": "n.",
        "meaning": "潜能/adj.潜在的",
        "synonyms": "possibility",
        "notes": ""
      },
      {
        "word": "quantity",
        "pos": "n.",
        "meaning": "量，数量",
        "synonyms": "number",
        "notes": ""
      },
      {
        "word": "settle",
        "pos": "v.",
        "meaning": "解决；定居，稳定",
        "synonyms": "fix, figure out",
        "notes": ""
      },
      {
        "word": "sophisticate",
        "pos": "v.",
        "meaning": "使复杂",
        "synonyms": "complicate",
        "notes": ""
      },
      {
        "word": "specific",
        "pos": "adj.",
        "meaning": "明确的；特殊的",
        "synonyms": "detailed, particular",
        "notes": ""
      },
      {
        "word": "survive",
        "pos": "v.",
        "meaning": "存活，幸存",
        "synonyms": "remain",
        "notes": ""
      },
      {
        "word": "swift",
        "pos": "adj.",
        "meaning": "迅速的，敏捷的，立刻的",
        "synonyms": "quick, rapid",
        "notes": ""
      },
      {
        "word": "unexpectedly",
        "pos": "adv.",
        "meaning": "出乎意料的",
        "synonyms": "surprising",
        "notes": ""
      },
      {
        "word": "surrounding",
        "pos": "n.",
        "meaning": "环境",
        "synonyms": "setting, environment",
        "notes": ""
      },
      {
        "word": "attempt",
        "pos": "n.",
        "meaning": "试图，尝试",
        "synonyms": "try, test",
        "notes": ""
      },
      {
        "word": "expertise",
        "pos": "n.",
        "meaning": "专门技术",
        "synonyms": "knowledge, skill",
        "notes": ""
      },
      {
        "word": "faculty",
        "pos": "n.",
        "meaning": "能力，才能；全体教员",
        "synonyms": "ability",
        "notes": ""
      },
      {
        "word": "donate",
        "pos": "v.",
        "meaning": "捐赠",
        "synonyms": "contribute",
        "notes": ""
      },
      {
        "word": "dynamics",
        "pos": "n.",
        "meaning": "动力学",
        "synonyms": "energy, force, move",
        "notes": ""
      },
      {
        "word": "incentive",
        "pos": "n.",
        "meaning": "刺激,鼓励;动机",
        "synonyms": "motive, stimulus",
        "notes": ""
      },
      {
        "word": "mortality",
        "pos": "n.",
        "meaning": "死亡率",
        "synonyms": "death",
        "notes": ""
      },
      {
        "word": "peripheral",
        "pos": "adj.",
        "meaning": "外围的，次要的",
        "synonyms": "unimportant, minor",
        "notes": ""
      },
      {
        "word": "vicinity",
        "pos": "n.",
        "meaning": "邻近，附近",
        "synonyms": "neighbourhood, nearby",
        "notes": ""
      },
      {
        "word": "threaten",
        "pos": "v.",
        "meaning": "威胁，危及",
        "synonyms": "endanger, jeopardize, risk, hazard",
        "notes": ""
      },
      {
        "word": "practice",
        "pos": "n.",
        "meaning": "行；练习",
        "synonyms": "method, exercise",
        "notes": ""
      },
      {
        "word": "bacteria",
        "pos": "n.",
        "meaning": "细菌",
        "synonyms": "virus, germ, microbe",
        "notes": ""
      },
      {
        "word": "be subject to",
        "pos": "",
        "meaning": "受…...支配",
        "synonyms": "face",
        "notes": ""
      },
      {
        "word": "be liable to",
        "pos": "",
        "meaning": "易于……",
        "synonyms": "potential",
        "notes": ""
      },
      {
        "word": "innate",
        "pos": "adj.",
        "meaning": "天生的；内在的，直觉的",
        "synonyms": "built-in, inborn",
        "notes": ""
      },
      {
        "word": "pattern",
        "pos": "n.",
        "meaning": "模式",
        "synonyms": "formation",
        "notes": ""
      },
      {
        "word": "therapy",
        "pos": "n.",
        "meaning": "治疗，理疗",
        "synonyms": "treatment",
        "notes": ""
      },
      {
        "word": "original",
        "pos": "adj.",
        "meaning": "原始的,最初的",
        "synonyms": "initial, first",
        "notes": ""
      },
      {
        "word": "confidential",
        "pos": "adj.",
        "meaning": "机密的,秘密的",
        "synonyms": "undisclosed, secret, hidden",
        "notes": ""
      },
      {
        "word": "cognitive",
        "pos": "adj.",
        "meaning": "认知的",
        "synonyms": "mental",
        "notes": ""
      },
      {
        "word": "comply with",
        "pos": "",
        "meaning": "照做，遵守",
        "synonyms": "obey",
        "notes": ""
      },
      {
        "word": "consult",
        "pos": "v",
        "meaning": ".查阅,商量,请教,咨询",
        "synonyms": "ask for advice",
        "notes": ""
      },
      {
        "word": "superior",
        "pos": "adj.",
        "meaning": "上级的;优秀的",
        "synonyms": "higher, upper",
        "notes": ""
      },
      {
        "word": "co-operation",
        "pos": "n.",
        "meaning": "合作，协作",
        "synonyms": "support, work together",
        "notes": ""
      },
      {
        "word": "co-ordinate",
        "pos": "v.",
        "meaning": "使……协调",
        "synonyms": "organize, harmonize",
        "notes": ""
      },
      {
        "word": "differ",
        "pos": "v.",
        "meaning": "使……相异；使……不同",
        "synonyms": "vary",
        "notes": ""
      },
      {
        "word": "cue",
        "pos": "n.",
        "meaning": "线索",
        "synonyms": "hint, clue",
        "notes": ""
      },
      {
        "word": "signal",
        "pos": "n.",
        "meaning": "信号",
        "synonyms": "symbol, mark, sign",
        "notes": ""
      },
      {
        "word": "abandon",
        "pos": "v.",
        "meaning": "放弃，遗弃",
        "synonyms": "quit, give up, forsake, derelict",
        "notes": ""
      },
      {
        "word": "halt",
        "pos": "n.",
        "meaning": "停止",
        "synonyms": "stop, quit",
        "notes": ""
      },
      {
        "word": "fragile",
        "pos": "adj.",
        "meaning": "脆弱的",
        "synonyms": "vulnerable",
        "notes": ""
      },
      {
        "word": "retain",
        "pos": "v.",
        "meaning": "记住",
        "synonyms": "maintain",
        "notes": ""
      },
      {
        "word": "vanish",
        "pos": "v.",
        "meaning": "消失，绝迹",
        "synonyms": "disappear",
        "notes": ""
      },
      {
        "word": "delivery",
        "pos": "n.",
        "meaning": "递送",
        "synonyms": "dispatch",
        "notes": ""
      },
      {
        "word": "erode",
        "pos": "v.",
        "meaning": "侵蚀",
        "synonyms": "wear away, corrode, degrade",
        "notes": ""
      },
      {
        "word": "induce",
        "pos": "v.",
        "meaning": "引起，引诱",
        "synonyms": "cause, lead to",
        "notes": ""
      },
      {
        "word": "stable",
        "pos": "adj.",
        "meaning": "稳定的",
        "synonyms": "constant, unchanged",
        "notes": ""
      },
      {
        "word": "integrate",
        "pos": "v.",
        "meaning": "使……成整体",
        "synonyms": "combine, incorporate",
        "notes": ""
      },
      {
        "word": "equal",
        "pos": "adj.",
        "meaning": "平等的; 相等的; 胜任的",
        "synonyms": "equivalent, matching, capable",
        "notes": ""
      },
      {
        "word": "grant",
        "pos": "v.",
        "meaning": "拨款；授予",
        "synonyms": "award, provide, approve funding",
        "notes": ""
      }
    ]
  },
  {
    "title": "第 3 类考点词",
    "description": "熟记 5 遍以上",
    "words": [
      {
        "word": "accumulate",
        "pos": "v.",
        "meaning": "积累，积聚",
        "synonyms": "gather",
        "notes": ""
      },
      {
        "word": "addictive",
        "pos": "adj.",
        "meaning": "上瘾的",
        "synonyms": "habit",
        "notes": ""
      },
      {
        "word": "adversity",
        "pos": "n.",
        "meaning": "逆境，不幸",
        "synonyms": "trouble",
        "notes": ""
      },
      {
        "word": "aggression",
        "pos": "n.",
        "meaning": "侵犯，侵害",
        "synonyms": "attack",
        "notes": ""
      },
      {
        "word": "agreeable",
        "pos": "adj.",
        "meaning": "令人愉快的；合适的；和蔼可亲的",
        "synonyms": "pleasant",
        "notes": ""
      },
      {
        "word": "aid",
        "pos": "n.",
        "meaning": "援助，帮助",
        "synonyms": "help",
        "notes": ""
      },
      {
        "word": "allergic",
        "pos": "adj.",
        "meaning": "过敏的；对……极讨厌的",
        "synonyms": "irritate",
        "notes": ""
      },
      {
        "word": "altitude",
        "pos": "n.",
        "meaning": "高度，海拔",
        "synonyms": "height",
        "notes": ""
      },
      {
        "word": "application",
        "pos": "n.",
        "meaning": "应用",
        "synonyms": "utilization",
        "notes": ""
      },
      {
        "word": "approve",
        "pos": "v.",
        "meaning": "批准",
        "synonyms": "agree",
        "notes": ""
      },
      {
        "word": "array",
        "pos": "n.",
        "meaning": "排列，大批",
        "synonyms": "order",
        "notes": ""
      },
      {
        "word": "assign",
        "pos": "v.",
        "meaning": "分配，指派",
        "synonyms": "allocate",
        "notes": ""
      },
      {
        "word": "association",
        "pos": "n.",
        "meaning": "协会，联盟；联系",
        "synonyms": "union",
        "notes": ""
      },
      {
        "word": "attitude",
        "pos": "n.",
        "meaning": "看法，态度",
        "synonyms": "opinion",
        "notes": ""
      },
      {
        "word": "authority",
        "pos": "n.",
        "meaning": "当局，权威",
        "synonyms": "government",
        "notes": ""
      },
      {
        "word": "be consistent with",
        "pos": "",
        "meaning": "与……一致",
        "synonyms": "compatible",
        "notes": ""
      },
      {
        "word": "bear",
        "pos": "v.",
        "meaning": "承担；忍受",
        "synonyms": "tolerate",
        "notes": ""
      },
      {
        "word": "blight",
        "pos": "v.",
        "meaning": "使衰败，破坏（尤指植物或前景）",
        "synonyms": "damage, ruin, wither",
        "notes": ""
      },
      {
        "word": "boundary",
        "pos": "n.",
        "meaning": "边界；底线",
        "synonyms": "barrier",
        "notes": ""
      },
      {
        "word": "bungle",
        "pos": "v.",
        "meaning": "搞糟，拙劣地工作",
        "synonyms": "mishandle",
        "notes": ""
      },
      {
        "word": "burden",
        "pos": "n.",
        "meaning": "负担",
        "synonyms": "load",
        "notes": ""
      },
      {
        "word": "calamity",
        "pos": "n.",
        "meaning": "灾难",
        "synonyms": "disaster",
        "notes": ""
      },
      {
        "word": "capacity",
        "pos": "n.",
        "meaning": "容量",
        "synonyms": "volume",
        "notes": ""
      },
      {
        "word": "catastrophic",
        "pos": "adj.",
        "meaning": "灾难的",
        "synonyms": "disastrous",
        "notes": ""
      },
      {
        "word": "cater",
        "pos": "v.",
        "meaning": "迎合；满足需求",
        "synonyms": "serve",
        "notes": ""
      },
      {
        "word": "certify",
        "pos": "v.",
        "meaning": "证明，保证",
        "synonyms": "verify",
        "notes": ""
      },
      {
        "word": "civic",
        "pos": "adj.",
        "meaning": "公民的，市政的",
        "synonyms": "municipal, civil",
        "notes": ""
      },
      {
        "word": "comment",
        "pos": "n./v.",
        "meaning": "评论；意见/评论",
        "synonyms": "remark",
        "notes": ""
      },
      {
        "word": "commitment",
        "pos": "n.",
        "meaning": "承诺，许诺，义务；致力",
        "synonyms": "engagement",
        "notes": ""
      },
      {
        "word": "communal",
        "pos": "adj.",
        "meaning": "公共的，公社的",
        "synonyms": "public",
        "notes": ""
      },
      {
        "word": "commute",
        "pos": "v.",
        "meaning": "通勤；用……交换",
        "synonyms": "travel",
        "notes": ""
      },
      {
        "word": "compare",
        "pos": "v.",
        "meaning": "与……相比较",
        "synonyms": "contrast",
        "notes": ""
      },
      {
        "word": "conceal",
        "pos": "v.",
        "meaning": "隐藏；隐瞒",
        "synonyms": "hide",
        "notes": ""
      },
      {
        "word": "concentrate",
        "pos": "v.",
        "meaning": "专心于；集中",
        "synonyms": "focus",
        "notes": ""
      },
      {
        "word": "concur",
        "pos": "v.",
        "meaning": "同意",
        "synonyms": "agree",
        "notes": ""
      },
      {
        "word": "confer",
        "pos": "v.",
        "meaning": "授予，给予",
        "synonyms": "grant",
        "notes": ""
      },
      {
        "word": "conflict",
        "pos": "n.",
        "meaning": "冲突，矛盾",
        "synonyms": "unharmonious",
        "notes": ""
      },
      {
        "word": "confuse",
        "pos": "v.",
        "meaning": "使混乱，使迷惑",
        "synonyms": "puzzle",
        "notes": ""
      },
      {
        "word": "conservative",
        "pos": "adj.",
        "meaning": "保守的",
        "synonyms": "traditional",
        "notes": ""
      },
      {
        "word": "considerable",
        "pos": "adj.",
        "meaning": "相当大的，重要的",
        "synonyms": "significant",
        "notes": ""
      },
      {
        "word": "contingent",
        "pos": "adj.",
        "meaning": "因情况而异的",
        "synonyms": "uncertain",
        "notes": ""
      },
      {
        "word": "controversial",
        "pos": "adj.",
        "meaning": "有争论的",
        "synonyms": "disputable",
        "notes": ""
      },
      {
        "word": "correlation",
        "pos": "n.",
        "meaning": "相关，关联",
        "synonyms": "link",
        "notes": ""
      },
      {
        "word": "courtship",
        "pos": "n.",
        "meaning": "求爱（时期）",
        "synonyms": "mate",
        "notes": ""
      },
      {
        "word": "crash",
        "pos": "n.",
        "meaning": "碰撞",
        "synonyms": "collapse",
        "notes": ""
      },
      {
        "word": "credibility",
        "pos": "n.",
        "meaning": "可信性",
        "synonyms": "reliance",
        "notes": ""
      },
      {
        "word": "criminal",
        "pos": "n.",
        "meaning": "罪犯，犯罪者",
        "synonyms": "offender, delinquent",
        "notes": ""
      },
      {
        "word": "crisis",
        "pos": "n.",
        "meaning": "危机",
        "synonyms": "risk",
        "notes": ""
      },
      {
        "word": "criticism",
        "pos": "n.",
        "meaning": "批评；指责",
        "synonyms": "critique, disapproval",
        "notes": ""
      },
      {
        "word": "curb",
        "pos": "v.",
        "meaning": "限制，抑制",
        "synonyms": "restrict",
        "notes": ""
      },
      {
        "word": "damp",
        "pos": "adj.",
        "meaning": "潮湿的",
        "synonyms": "wet",
        "notes": ""
      },
      {
        "word": "dazzle",
        "pos": "v.",
        "meaning": "使目眩；使……眼花",
        "synonyms": "flash",
        "notes": ""
      },
      {
        "word": "deadline",
        "pos": "n.",
        "meaning": "最后期限",
        "synonyms": "limit",
        "notes": ""
      },
      {
        "word": "delay",
        "pos": "n.",
        "meaning": "延期，耽搁",
        "synonyms": "postpone",
        "notes": ""
      },
      {
        "word": "democratic",
        "pos": "adj.",
        "meaning": "民主的",
        "synonyms": "participatory",
        "notes": ""
      },
      {
        "word": "demographic",
        "pos": "adj.",
        "meaning": "人口统计学的；人口学",
        "synonyms": "population statistic",
        "notes": ""
      },
      {
        "word": "dental",
        "pos": "adj.",
        "meaning": "牙科的，牙齿的",
        "synonyms": "teeth",
        "notes": ""
      },
      {
        "word": "depression",
        "pos": "n.",
        "meaning": "抑郁，沮丧",
        "synonyms": "frustration",
        "notes": ""
      },
      {
        "word": "designate",
        "pos": "v.",
        "meaning": "指定；指派，标出",
        "synonyms": "appoint, assign, mark",
        "notes": ""
      },
      {
        "word": "detain",
        "pos": "v.",
        "meaning": "留住",
        "synonyms": "hold",
        "notes": ""
      },
      {
        "word": "devastate",
        "pos": "v.",
        "meaning": "毁坏，毁灭",
        "synonyms": "wreck",
        "notes": ""
      },
      {
        "word": "disclose",
        "pos": "v.",
        "meaning": "公开；揭露",
        "synonyms": "expose",
        "notes": ""
      },
      {
        "word": "disparate",
        "pos": "adj.",
        "meaning": "不同的",
        "synonyms": "different",
        "notes": ""
      },
      {
        "word": "display",
        "pos": "n.",
        "meaning": "显示",
        "synonyms": "show",
        "notes": ""
      },
      {
        "word": "disrupt",
        "pos": "v.",
        "meaning": "破坏",
        "synonyms": "destroy",
        "notes": ""
      },
      {
        "word": "distract",
        "pos": "v.",
        "meaning": "转移，分心",
        "synonyms": "divert",
        "notes": ""
      },
      {
        "word": "distribute",
        "pos": "v.",
        "meaning": "分配，分发",
        "synonyms": "spread",
        "notes": ""
      },
      {
        "word": "documentation",
        "pos": "n.",
        "meaning": "文件；文献",
        "synonyms": "record",
        "notes": ""
      },
      {
        "word": "domain",
        "pos": "n.",
        "meaning": "领域",
        "synonyms": "field",
        "notes": ""
      },
      {
        "word": "dominant",
        "pos": "adj.",
        "meaning": "占优势的，占支配地位的",
        "synonyms": "overbearing",
        "notes": ""
      },
      {
        "word": "dramatic",
        "pos": "adj.",
        "meaning": "戏剧化的；激动人心的，引人注意的",
        "synonyms": "striking",
        "notes": ""
      },
      {
        "word": "drought",
        "pos": "n.",
        "meaning": "干旱",
        "synonyms": "dry",
        "notes": ""
      },
      {
        "word": "durable",
        "pos": "adj.",
        "meaning": "持久的",
        "synonyms": "lasting",
        "notes": ""
      },
      {
        "word": "eco-friendly",
        "pos": "adj.",
        "meaning": "生态友好的，环保的",
        "synonyms": "environmentally-friendly",
        "notes": ""
      },
      {
        "word": "elaborate",
        "pos": "v.",
        "meaning": "详细阐述，详细叙述",
        "synonyms": "illustrate",
        "notes": ""
      },
      {
        "word": "elderly",
        "pos": "adj.",
        "meaning": "高龄的",
        "synonyms": "aged",
        "notes": ""
      },
      {
        "word": "eliminate",
        "pos": "v.",
        "meaning": "消除，排除",
        "synonyms": "dispose",
        "notes": ""
      },
      {
        "word": "elusive",
        "pos": "adj.",
        "meaning": "难懂的，难捉摸的；行踪隐秘的",
        "synonyms": "hard",
        "notes": ""
      },
      {
        "word": "encyclopaedia",
        "pos": "n.",
        "meaning": "百科全书",
        "synonyms": "entire range of knowledge",
        "notes": ""
      },
      {
        "word": "entrepreneur",
        "pos": "n.",
        "meaning": "企业家",
        "synonyms": "boss",
        "notes": ""
      },
      {
        "word": "equator",
        "pos": "n.",
        "meaning": "赤道",
        "synonyms": "geography",
        "notes": ""
      },
      {
        "word": "erratically",
        "pos": "adv.",
        "meaning": "不定的，无视规律地",
        "synonyms": "unpredictably",
        "notes": ""
      },
      {
        "word": "established",
        "pos": "adj.",
        "meaning": "确定的；已制定的，已建立的",
        "synonyms": "built",
        "notes": ""
      },
      {
        "word": "estate",
        "pos": "n.",
        "meaning": "房地产",
        "synonyms": "property",
        "notes": ""
      },
      {
        "word": "ethical",
        "pos": "adj.",
        "meaning": "道德的",
        "synonyms": "moral",
        "notes": ""
      },
      {
        "word": "eventually",
        "pos": "adv.",
        "meaning": "最后，终于",
        "synonyms": "finally",
        "notes": ""
      },
      {
        "word": "evidence",
        "pos": "n.",
        "meaning": "迹象；证据",
        "synonyms": "proof",
        "notes": ""
      },
      {
        "word": "evolve",
        "pos": "v.",
        "meaning": "进化，发展；逐渐形成",
        "synonyms": "develop",
        "notes": ""
      },
      {
        "word": "exhausted",
        "pos": "adj.",
        "meaning": "疲惫的，耗尽的",
        "synonyms": "fatigue",
        "notes": ""
      },
      {
        "word": "experiment",
        "pos": "n.",
        "meaning": "试验，试验",
        "synonyms": "test",
        "notes": ""
      },
      {
        "word": "exceptional",
        "pos": "adj.",
        "meaning": "异常的，特别出色的",
        "synonyms": "extreme, utmost",
        "notes": ""
      },
      {
        "word": "explicit",
        "pos": "adj.",
        "meaning": "明确的",
        "synonyms": "clear",
        "notes": ""
      },
      {
        "word": "exploit",
        "pos": "v.",
        "meaning": "开发，利用",
        "synonyms": "use",
        "notes": ""
      },
      {
        "word": "extend",
        "pos": "v.",
        "meaning": "扩展，延伸，推广",
        "synonyms": "expand",
        "notes": ""
      },
      {
        "word": "extract",
        "pos": "n./v.",
        "meaning": "摘录/提取",
        "synonyms": "quotation",
        "notes": ""
      },
      {
        "word": "famine",
        "pos": "n.",
        "meaning": "饥荒",
        "synonyms": "hunger",
        "notes": ""
      },
      {
        "word": "finite",
        "pos": "adj.",
        "meaning": "有限的",
        "synonyms": "limited",
        "notes": ""
      },
      {
        "word": "fitness",
        "pos": "n.",
        "meaning": "健康状况，体能",
        "synonyms": "physical condition, health",
        "notes": ""
      },
      {
        "word": "foe",
        "pos": "n.",
        "meaning": "敌人，危害物",
        "synonyms": "enemy",
        "notes": ""
      },
      {
        "word": "format",
        "pos": "n.",
        "meaning": "格式",
        "synonyms": "structure",
        "notes": ""
      },
      {
        "word": "fragment",
        "pos": "n.",
        "meaning": "碎片",
        "synonyms": "piece",
        "notes": ""
      },
      {
        "word": "freeze",
        "pos": "n.",
        "meaning": "冰冻，冻结",
        "synonyms": "chill",
        "notes": ""
      },
      {
        "word": "fulfill",
        "pos": "v.",
        "meaning": "满足，实现",
        "synonyms": "execute",
        "notes": ""
      },
      {
        "word": "gene",
        "pos": "n.",
        "meaning": "基因",
        "synonyms": "factor",
        "notes": ""
      },
      {
        "word": "gifted",
        "pos": "adj.",
        "meaning": "有天赋的，有才华的",
        "synonyms": "talented",
        "notes": ""
      },
      {
        "word": "graphic",
        "pos": "adj.",
        "meaning": "形象的；图解的",
        "synonyms": "picture",
        "notes": ""
      },
      {
        "word": "habitat",
        "pos": "n.",
        "meaning": "栖息地，住所",
        "synonyms": "residence",
        "notes": ""
      },
      {
        "word": "harbor",
        "pos": "v./n.",
        "meaning": "怀有/海港",
        "synonyms": "hold",
        "notes": ""
      },
      {
        "word": "hardship",
        "pos": "n.",
        "meaning": "困苦；苦难",
        "synonyms": "difficult",
        "notes": ""
      },
      {
        "word": "harsh",
        "pos": "adj.",
        "meaning": "艰难的；严酷的",
        "synonyms": "rough",
        "notes": ""
      },
      {
        "word": "hypothesis",
        "pos": "n.",
        "meaning": "假设",
        "synonyms": "assumption",
        "notes": ""
      },
      {
        "word": "impact",
        "pos": "n.",
        "meaning": "影响",
        "synonyms": "influence",
        "notes": ""
      },
      {
        "word": "impressive",
        "pos": "adj.",
        "meaning": "感人的；给人深刻印象的",
        "synonyms": "touching",
        "notes": ""
      },
      {
        "word": "in accordance with",
        "pos": "",
        "meaning": "依照；与……一致",
        "synonyms": "conform",
        "notes": ""
      },
      {
        "word": "inaccurate",
        "pos": "adj.",
        "meaning": "错误的",
        "synonyms": "incorrect",
        "notes": ""
      },
      {
        "word": "inactive",
        "pos": "adj.",
        "meaning": "不活跃的，不活动的",
        "synonyms": "passive",
        "notes": ""
      },
      {
        "word": "inappropriate",
        "pos": "adj.",
        "meaning": "不适当的",
        "synonyms": "hard",
        "notes": ""
      },
      {
        "word": "indulge",
        "pos": "v.",
        "meaning": "沉溺（于）",
        "synonyms": "spoil",
        "notes": ""
      },
      {
        "word": "infest",
        "pos": "v.",
        "meaning": "侵害；寄生于",
        "synonyms": "plague",
        "notes": ""
      },
      {
        "word": "installment",
        "pos": "n.",
        "meaning": "分期付款",
        "synonyms": "regular/periodic payment",
        "notes": ""
      },
      {
        "word": "intelligence",
        "pos": "n.",
        "meaning": "智力",
        "synonyms": "mind",
        "notes": ""
      },
      {
        "word": "intense",
        "pos": "adj.",
        "meaning": "强烈的；紧张的；热情的",
        "synonyms": "strong",
        "notes": ""
      },
      {
        "word": "interaction",
        "pos": "n.",
        "meaning": "相互作用，交流互动",
        "synonyms": "social activities",
        "notes": ""
      },
      {
        "word": "interference",
        "pos": "n.",
        "meaning": "干涉，干扰",
        "synonyms": "interposition, disruption",
        "notes": ""
      },
      {
        "word": "interior",
        "pos": "n./adj.",
        "meaning": "内部/内部的",
        "synonyms": "inner",
        "notes": ""
      },
      {
        "word": "interrupt",
        "pos": "v.",
        "meaning": "中断",
        "synonyms": "stop",
        "notes": ""
      },
      {
        "word": "introverted",
        "pos": "adj.",
        "meaning": "内向的",
        "synonyms": "reserved, inward-looking",
        "notes": ""
      },
      {
        "word": "involve",
        "pos": "v.",
        "meaning": "包含，牵涉",
        "synonyms": "associate",
        "notes": ""
      },
      {
        "word": "keen",
        "pos": "adj.",
        "meaning": "热切的；强烈的",
        "synonyms": "eager, enthusiastic",
        "notes": ""
      },
      {
        "word": "label",
        "pos": "v.",
        "meaning": "打上标签",
        "synonyms": "display",
        "notes": ""
      },
      {
        "word": "lack",
        "pos": "v.",
        "meaning": "缺乏；不足",
        "synonyms": "shortage",
        "notes": ""
      },
      {
        "word": "landscape",
        "pos": "n.",
        "meaning": "风景",
        "synonyms": "scene",
        "notes": ""
      },
      {
        "word": "likelihood",
        "pos": "n.",
        "meaning": "可能性",
        "synonyms": "chance",
        "notes": ""
      },
      {
        "word": "limb",
        "pos": "n.",
        "meaning": "四肢",
        "synonyms": "arm or leg",
        "notes": ""
      },
      {
        "word": "linguistic",
        "pos": "adj.",
        "meaning": "语言(学)的",
        "synonyms": "language",
        "notes": ""
      },
      {
        "word": "log",
        "pos": "v./n.",
        "meaning": "记录；日志/原木",
        "synonyms": "record, logging",
        "notes": ""
      },
      {
        "word": "look-in",
        "pos": "n.",
        "meaning": "informal•British/成功的机会",
        "synonyms": "opportunity, chance",
        "notes": ""
      },
      {
        "word": "lopsided",
        "pos": "adj.",
        "meaning": "不平衡的",
        "synonyms": "uneven",
        "notes": ""
      },
      {
        "word": "mainly",
        "pos": "adv.",
        "meaning": "主要的，大体",
        "synonyms": "primarily",
        "notes": ""
      },
      {
        "word": "malfunction",
        "pos": "v.",
        "meaning": "发生故障;不起作用",
        "synonyms": "breakdown",
        "notes": ""
      },
      {
        "word": "mammal",
        "pos": "n.",
        "meaning": "哺乳动物",
        "synonyms": "creature",
        "notes": ""
      },
      {
        "word": "manage to do",
        "pos": "",
        "meaning": "设法完成某事",
        "synonyms": "success",
        "notes": ""
      },
      {
        "word": "manifest",
        "pos": "v.",
        "meaning": "出现，表现",
        "synonyms": "obvious",
        "notes": ""
      },
      {
        "word": "manufacture",
        "pos": "n.",
        "meaning": "生产",
        "synonyms": "produce",
        "notes": ""
      },
      {
        "word": "marine",
        "pos": "adj.",
        "meaning": "海产的；航海的；海运的",
        "synonyms": "sea",
        "notes": ""
      },
      {
        "word": "mate",
        "pos": "n.",
        "meaning": "配偶，伴侣",
        "synonyms": "partner, spouse",
        "notes": ""
      },
      {
        "word": "mechanism",
        "pos": "n.",
        "meaning": "机制，原理",
        "synonyms": "method",
        "notes": ""
      },
      {
        "word": "mental",
        "pos": "adj.",
        "meaning": "精神的，心理的",
        "synonyms": "psychological, cognitive",
        "notes": ""
      },
      {
        "word": "mercury",
        "pos": "n.",
        "meaning": "汞，水银",
        "synonyms": "liquid metal",
        "notes": ""
      },
      {
        "word": "meteorological",
        "pos": "adj.",
        "meaning": "气象学的",
        "synonyms": "weather",
        "notes": ""
      },
      {
        "word": "migrate",
        "pos": "v.",
        "meaning": "转移,迁移",
        "synonyms": "move",
        "notes": ""
      },
      {
        "word": "moisture",
        "pos": "n.",
        "meaning": "水分，湿度",
        "synonyms": "humidity",
        "notes": ""
      },
      {
        "word": "monitor",
        "pos": "v.",
        "meaning": "监控",
        "synonyms": "surveillance",
        "notes": ""
      },
      {
        "word": "motif",
        "pos": "n.",
        "meaning": "主题；图形",
        "synonyms": "theme",
        "notes": ""
      },
      {
        "word": "mould",
        "pos": "v.",
        "meaning": "模压，塑造；塑造成",
        "synonyms": "form",
        "notes": ""
      },
      {
        "word": "native",
        "pos": "adj.",
        "meaning": "本国的，土著的；天然的；天赋的",
        "synonyms": "original",
        "notes": ""
      },
      {
        "word": "nocturnal",
        "pos": "adj.",
        "meaning": "夜间的,夜间发生的",
        "synonyms": "night",
        "notes": ""
      },
      {
        "word": "norm",
        "pos": "n.",
        "meaning": "规范",
        "synonyms": "regulation",
        "notes": ""
      },
      {
        "word": "notoriety",
        "pos": "n.",
        "meaning": "名声",
        "synonyms": "famous",
        "notes": ""
      },
      {
        "word": "objective",
        "pos": "n./adj.",
        "meaning": "目标，目的/客观的",
        "synonyms": "goal",
        "notes": ""
      },
      {
        "word": "obligation",
        "pos": "n.",
        "meaning": "义务",
        "synonyms": "responsibility",
        "notes": ""
      },
      {
        "word": "obscure",
        "pos": "v.",
        "meaning": "使模糊不清，晦涩化",
        "synonyms": "blur, cloud, obscure",
        "notes": ""
      },
      {
        "word": "obtain",
        "pos": "v.",
        "meaning": "获得",
        "synonyms": "get",
        "notes": ""
      },
      {
        "word": "odd",
        "pos": "adj.",
        "meaning": "古怪的",
        "synonyms": "strange",
        "notes": ""
      },
      {
        "word": "odour",
        "pos": "n.",
        "meaning": "气味",
        "synonyms": "smell",
        "notes": ""
      },
      {
        "word": "offensive",
        "pos": "adj.",
        "meaning": "冒犯的，无礼的",
        "synonyms": "hostile",
        "notes": ""
      },
      {
        "word": "official",
        "pos": "n./adj.",
        "meaning": "官员/官方的",
        "synonyms": "authority",
        "notes": ""
      },
      {
        "word": "optimum",
        "pos": "n./adj.",
        "meaning": "最佳效果/最适宜的",
        "synonyms": "best",
        "notes": ""
      },
      {
        "word": "ordinary",
        "pos": "adj.",
        "meaning": "普通的；平凡的；平常的",
        "synonyms": "common",
        "notes": ""
      },
      {
        "word": "organ",
        "pos": "n.",
        "meaning": "器官；机构",
        "synonyms": "a part of a body",
        "notes": ""
      },
      {
        "word": "out of the question",
        "pos": "",
        "meaning": "不可能的事",
        "synonyms": "impossible, not an option",
        "notes": ""
      },
      {
        "word": "overcome",
        "pos": "v.",
        "meaning": "克服",
        "synonyms": "defeat",
        "notes": ""
      },
      {
        "word": "overtake",
        "pos": "v.",
        "meaning": "赶上",
        "synonyms": "surpass",
        "notes": ""
      },
      {
        "word": "paralyse",
        "pos": "v.",
        "meaning": "使麻痹，使瘫痪",
        "synonyms": "disable, incapacitate",
        "notes": ""
      },
      {
        "word": "paramount",
        "pos": "adj.",
        "meaning": "最重要的，主要的",
        "synonyms": "principal",
        "notes": ""
      },
      {
        "word": "participate",
        "pos": "v.",
        "meaning": "参加",
        "synonyms": "join",
        "notes": ""
      },
      {
        "word": "patient",
        "pos": "adj./n.",
        "meaning": "有耐心的，能容忍的/病人；患者",
        "synonyms": "tolerant, calm, ill person",
        "notes": ""
      },
      {
        "word": "peak",
        "pos": "n./v.",
        "meaning": "最高峰，顶点/使……达到顶峰",
        "synonyms": "top",
        "notes": ""
      },
      {
        "word": "permit",
        "pos": "n./v.",
        "meaning": "许可证，执照/许可",
        "synonyms": "allow",
        "notes": ""
      },
      {
        "word": "persuade",
        "pos": "v.",
        "meaning": "说服，劝说",
        "synonyms": "influence",
        "notes": ""
      },
      {
        "word": "pessimistic",
        "pos": "adj.",
        "meaning": "悲观的",
        "synonyms": "negative",
        "notes": ""
      },
      {
        "word": "phase",
        "pos": "n.",
        "meaning": "阶段",
        "synonyms": "process",
        "notes": ""
      },
      {
        "word": "physical",
        "pos": "adj.",
        "meaning": "身体上的；物质的",
        "synonyms": "body",
        "notes": ""
      },
      {
        "word": "plagiarise",
        "pos": "v.",
        "meaning": "抄袭",
        "synonyms": "copy",
        "notes": ""
      },
      {
        "word": "plenty of",
        "pos": "",
        "meaning": "大量的",
        "synonyms": "many",
        "notes": ""
      },
      {
        "word": "plot",
        "pos": "v.",
        "meaning": "密谋",
        "synonyms": "plan",
        "notes": ""
      },
      {
        "word": "pose",
        "pos": "v.",
        "meaning": "提出，造成，形成",
        "synonyms": "cause",
        "notes": ""
      },
      {
        "word": "portable",
        "pos": "adj.",
        "meaning": "可携带的",
        "synonyms": "conveyable",
        "notes": ""
      },
      {
        "word": "poverty",
        "pos": "n.",
        "meaning": "贫穷",
        "synonyms": "poor",
        "notes": ""
      },
      {
        "word": "praise",
        "pos": "n.",
        "meaning": "赞扬",
        "synonyms": "commend",
        "notes": ""
      },
      {
        "word": "predict",
        "pos": "v.",
        "meaning": "预测，预知",
        "synonyms": "expect",
        "notes": ""
      },
      {
        "word": "pressing",
        "pos": "adj.",
        "meaning": "迫切的",
        "synonyms": "urgent",
        "notes": ""
      },
      {
        "word": "private",
        "pos": "adj.",
        "meaning": "私人的；私有的；私下的",
        "synonyms": "personal",
        "notes": ""
      },
      {
        "word": "prohibit",
        "pos": "v.",
        "meaning": "禁止",
        "synonyms": "forbid, ban",
        "notes": ""
      },
      {
        "word": "prolong",
        "pos": "v.",
        "meaning": "拉长，延长",
        "synonyms": "extend",
        "notes": ""
      },
      {
        "word": "promote",
        "pos": "v.",
        "meaning": "促进，推销",
        "synonyms": "improve",
        "notes": ""
      },
      {
        "word": "prosper",
        "pos": "v.",
        "meaning": "使成功，使繁荣",
        "synonyms": "success",
        "notes": ""
      },
      {
        "word": "purify",
        "pos": "v.",
        "meaning": "净化",
        "synonyms": "clean",
        "notes": ""
      },
      {
        "word": "qualify",
        "pos": "v.",
        "meaning": "取得资格",
        "synonyms": "fulfill",
        "notes": ""
      },
      {
        "word": "radical",
        "pos": "adj.",
        "meaning": "彻底的，根本的",
        "synonyms": "utmost",
        "notes": ""
      },
      {
        "word": "range",
        "pos": "n.",
        "meaning": "范围；幅度",
        "synonyms": "scope",
        "notes": ""
      },
      {
        "word": "rare",
        "pos": "adj.",
        "meaning": "稀有的",
        "synonyms": "unusual",
        "notes": ""
      },
      {
        "word": "rate",
        "pos": "n./v.",
        "meaning": "等级/评估",
        "synonyms": "rank, measure",
        "notes": ""
      },
      {
        "word": "react",
        "pos": "v.",
        "meaning": "反应",
        "synonyms": "respond",
        "notes": ""
      },
      {
        "word": "recreation",
        "pos": "n.",
        "meaning": "娱乐，消遣",
        "synonyms": "entertainment",
        "notes": ""
      },
      {
        "word": "reduction",
        "pos": "n.",
        "meaning": "下降，减少",
        "synonyms": "decrease",
        "notes": ""
      },
      {
        "word": "refer to",
        "pos": "",
        "meaning": "指(的是)，涉及，提及",
        "synonyms": "talk about",
        "notes": ""
      },
      {
        "word": "rehearsal",
        "pos": "n.",
        "meaning": "排演；预演；练习",
        "synonyms": "preparation",
        "notes": ""
      },
      {
        "word": "reject",
        "pos": "v.",
        "meaning": "拒绝，排斥，丢弃",
        "synonyms": "exclude",
        "notes": ""
      },
      {
        "word": "relevant",
        "pos": "adj.",
        "meaning": "相关的",
        "synonyms": "relative",
        "notes": ""
      },
      {
        "word": "religious",
        "pos": "adj.",
        "meaning": "宗教的；虔诚的",
        "synonyms": "sacred",
        "notes": ""
      },
      {
        "word": "reluctant",
        "pos": "adj.",
        "meaning": "不情愿的",
        "synonyms": "unwilling",
        "notes": ""
      },
      {
        "word": "reproduce",
        "pos": "v.",
        "meaning": "繁殖",
        "synonyms": "breed",
        "notes": ""
      },
      {
        "word": "responsible",
        "pos": "adj.",
        "meaning": "负责的，可靠的；有责任的",
        "synonyms": "liable",
        "notes": ""
      },
      {
        "word": "revision",
        "pos": "n.",
        "meaning": "修正",
        "synonyms": "editing",
        "notes": ""
      },
      {
        "word": "revive",
        "pos": "v.",
        "meaning": "使复苏，恢复",
        "synonyms": "renaissance",
        "notes": ""
      },
      {
        "word": "ruin",
        "pos": "v.",
        "meaning": "毁灭",
        "synonyms": "destroy",
        "notes": ""
      },
      {
        "word": "scenic",
        "pos": "adj.",
        "meaning": "风景优美的",
        "synonyms": "beautiful",
        "notes": ""
      },
      {
        "word": "shade",
        "pos": "n.",
        "meaning": "遮阳；阴影",
        "synonyms": "shelter",
        "notes": ""
      },
      {
        "word": "skepticism",
        "pos": "n.",
        "meaning": "怀疑",
        "synonyms": "doubt",
        "notes": ""
      },
      {
        "word": "soar",
        "pos": "v.",
        "meaning": "激增",
        "synonyms": "increase",
        "notes": ""
      },
      {
        "word": "solely",
        "pos": "adv.",
        "meaning": "唯一地",
        "synonyms": "alone",
        "notes": ""
      },
      {
        "word": "solicitor",
        "pos": "n.",
        "meaning": "律师",
        "synonyms": "lawyer",
        "notes": ""
      },
      {
        "word": "steer",
        "pos": "v.",
        "meaning": "控制，引导",
        "synonyms": "manage",
        "notes": ""
      },
      {
        "word": "stimulate",
        "pos": "v.",
        "meaning": "刺激，激励",
        "synonyms": "motivate",
        "notes": ""
      },
      {
        "word": "stride",
        "pos": "n.",
        "meaning": "进展",
        "synonyms": "progress",
        "notes": ""
      },
      {
        "word": "succumb",
        "pos": "vi.",
        "meaning": "屈服",
        "synonyms": "yield",
        "notes": ""
      },
      {
        "word": "subdivide",
        "pos": "v.",
        "meaning": "把……细分",
        "synonyms": "break down",
        "notes": ""
      },
      {
        "word": "subtle",
        "pos": "adj.",
        "meaning": "微妙的",
        "synonyms": "delicate",
        "notes": ""
      },
      {
        "word": "substance",
        "pos": "n.",
        "meaning": "物质；实质",
        "synonyms": "matter",
        "notes": ""
      },
      {
        "word": "sufficiency",
        "pos": "n.",
        "meaning": "足量，充足",
        "synonyms": "enough",
        "notes": ""
      },
      {
        "word": "supersede",
        "pos": "v.",
        "meaning": "取代，代替",
        "synonyms": "replace",
        "notes": ""
      },
      {
        "word": "suppress",
        "pos": "v.",
        "meaning": "抑制，隐瞒",
        "synonyms": "hold",
        "notes": ""
      },
      {
        "word": "supremacy",
        "pos": "n.",
        "meaning": "至高无上，很高的地位",
        "synonyms": "priority",
        "notes": ""
      },
      {
        "word": "suspicious",
        "pos": "adj.",
        "meaning": "可疑的",
        "synonyms": "odd",
        "notes": ""
      },
      {
        "word": "sustainable",
        "pos": "adj.",
        "meaning": "可持续的",
        "synonyms": "long-term",
        "notes": ""
      },
      {
        "word": "symptom",
        "pos": "n.",
        "meaning": "症状，征兆",
        "synonyms": "sign",
        "notes": ""
      },
      {
        "word": "tension",
        "pos": "n.",
        "meaning": "紧张，不安",
        "synonyms": "upset",
        "notes": ""
      },
      {
        "word": "term",
        "pos": "n.",
        "meaning": "术语",
        "synonyms": "word",
        "notes": ""
      },
      {
        "word": "throughout",
        "pos": "adv.",
        "meaning": "自始至终，到处；全部",
        "synonyms": "anywhere",
        "notes": ""
      },
      {
        "word": "toll",
        "pos": "n./v.",
        "meaning": "通行费/征收",
        "synonyms": "charge",
        "notes": ""
      },
      {
        "word": "trace",
        "pos": "n.",
        "meaning": "追溯；痕迹",
        "synonyms": "track",
        "notes": ""
      },
      {
        "word": "transcend",
        "pos": "v.",
        "meaning": "胜过，超越",
        "synonyms": "excel",
        "notes": ""
      },
      {
        "word": "transit",
        "pos": "n./v.",
        "meaning": "运输；经过/运送",
        "synonyms": "send",
        "notes": ""
      },
      {
        "word": "tremendous",
        "pos": "adj.",
        "meaning": "巨大的，惊人的",
        "synonyms": "vast",
        "notes": ""
      },
      {
        "word": "trigger",
        "pos": "n.",
        "meaning": "触发，引发，引起",
        "synonyms": "begin",
        "notes": ""
      },
      {
        "word": "tropical",
        "pos": "adj.",
        "meaning": "热带的",
        "synonyms": "hot",
        "notes": ""
      },
      {
        "word": "unbiased",
        "pos": "adj.",
        "meaning": "公正的，无偏见的",
        "synonyms": "fair",
        "notes": ""
      },
      {
        "word": "uniform",
        "pos": "adj.",
        "meaning": "始终如一的",
        "synonyms": "consistent",
        "notes": ""
      },
      {
        "word": "valuable",
        "pos": "adj.",
        "meaning": "宝贵的，有价值的",
        "synonyms": "benefit",
        "notes": ""
      },
      {
        "word": "versatile",
        "pos": "adj.",
        "meaning": "多功能",
        "synonyms": "all-around",
        "notes": ""
      },
      {
        "word": "view",
        "pos": "v.",
        "meaning": "看",
        "synonyms": "overlook",
        "notes": ""
      },
      {
        "word": "violent",
        "pos": "adj.",
        "meaning": "暴力的；猛烈的",
        "synonyms": "fierce",
        "notes": ""
      },
      {
        "word": "visible",
        "pos": "adj.",
        "meaning": "明显的，看得见的",
        "synonyms": "see",
        "notes": ""
      },
      {
        "word": "visual",
        "pos": "adj.",
        "meaning": "视觉的",
        "synonyms": "image",
        "notes": ""
      },
      {
        "word": "well-being",
        "pos": "n.",
        "meaning": "健康，幸福，福祉",
        "synonyms": "health, happiness, welfare",
        "notes": ""
      }
    ]
  }
];
