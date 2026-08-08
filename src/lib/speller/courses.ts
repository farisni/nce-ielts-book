export interface SentenceEntry {
  /** 中文句子 */
  cn: string
  /** 英文句子（听写目标） */
  en: string
}

export interface Course {
  /** 课程 id（路由参数） */
  id: string
  /** 课程名 */
  name: string
  /** 课程描述 */
  description: string
  /** 课程句子 */
  sentences: SentenceEntry[]
  /** 每组练习的句子数量 */
  sessionSize: number
  /** 视频路径（可选）：视频听写课程，播放发音时从视频句段播放 */
  video?: string
  /** SRT 字幕路径（可选）：与 sentences 逐句对齐，提供句段起止时间 */
  subtitle?: string
}

/**
 * 听写课程库
 * - basic：日常常用英语句子（中英对照）
 */
export const COURSES: Course[] = [
  {
    id: "basic",
    name: "Basic",
    description: "日常常用英语句子 · 看中文，听发音，用键盘打出英文句子",
    sessionSize: 10,
    sentences: [
      { cn: "我可以玩一会电脑游戏吗？", en: "can i play computer games for little bit ?" },
      { cn: "你今天过得怎么样？", en: "how was your day ?" },
      { cn: "我想喝一杯咖啡。", en: "i would like a cup of coffee ." },
      { cn: "明天天气怎么样？", en: "what is the weather tomorrow ?" },
      { cn: "我下午要去图书馆。", en: "i am going to the library this afternoon ." },
      { cn: "你能帮我一下吗？", en: "can you help me ?" },
      { cn: "我很喜欢这首音乐。", en: "i really like this music ." },
      { cn: "他每天七点起床。", en: "he gets up at seven every day ." },
      { cn: "你周末有什么计划？", en: "what are your plans for the weekend ?" },
      { cn: "我昨天看了一部电影。", en: "i watched a movie yesterday ." },
      { cn: "请问洗手间在哪里？", en: "excuse me , where is the restroom ?" },
      { cn: "这家餐厅的食物很美味。", en: "the food in this restaurant is delicious ." },
      { cn: "我今天感觉很累。", en: "i feel very tired today ." },
      { cn: "请再说一遍好吗？", en: "could you say that again ?" },
      { cn: "我每天早上都去跑步。", en: "i go running every morning ." },
      { cn: "你多大了？", en: "how old are you ?" },
      { cn: "我住在北京。", en: "i live in beijing ." },
      { cn: "这是我第一次来这里。", en: "this is my first time here ." },
      { cn: "请把窗户打开。", en: "please open the window ." },
      { cn: "我要去超市买些东西。", en: "i am going to the supermarket to buy some things ." },
      { cn: "你会说英语吗？", en: "do you speak english ?" },
      { cn: "我昨天和朋友去了公园。", en: "i went to the park with my friend yesterday ." },
      { cn: "这本书非常有趣。", en: "this book is very interesting ." },
      { cn: "我晚饭吃得很早。", en: "i had dinner very early ." },
      { cn: "请稍等一下。", en: "please wait a moment ." },
      { cn: "我特别喜欢这个城市。", en: "i really love this city ." },
      { cn: "你坐地铁上班吗？", en: "do you take the subway to work ?" },
      { cn: "我不知道答案。", en: "i do not know the answer ." },
      { cn: "这家店下午五点关门。", en: "this shop closes at five in the afternoon ." },
      { cn: "我想买一件新外套。", en: "i want to buy a new coat ." },
      { cn: "明天见！", en: "see you tomorrow !" },
      { cn: "祝你生日快乐！", en: "happy birthday to you !" },
      { cn: "我们在哪儿见面？", en: "where shall we meet ?" },
      { cn: "最近工作忙吗？", en: "have you been busy with work lately ?" },
      { cn: "外面的雨下得很大。", en: "it is raining heavily outside ." },
      { cn: "我喜欢一边听音乐一边学习。", en: "i like to study while listening to music ." },
      { cn: "这个周末你有什么安排？", en: "do you have any plans this weekend ?" },
      { cn: "请把门关上。", en: "please close the door ." },
      { cn: "我要去车站接我的朋友。", en: "i am going to the station to pick up my friend ." },
      { cn: "你有空吗？", en: "are you free ?" },
      { cn: "我从来没有去过那里。", en: "i have never been there ." },
      { cn: "这个多少钱？", en: "how much is this ?" },
      { cn: "我们走吧。", en: "let us go ." },
      { cn: "我同意你的看法。", en: "i agree with you ." },
      { cn: "你的英语说得很好。", en: "you speak english very well ." },
    ],
  },
  {
    id: "nce3-l1",
    name: "NCE3 L1 · A Puma at Large",
    description: "新概念英语第三册第一课 · 看视频，听真人朗读，打字拼写",
    sessionSize: 13,
    video: "/video/nce3-l1.mp4",
    subtitle: "/video/nce3-l1.srt",
    sentences: [
      { cn: "美洲狮是一种体形似猫的大动物，产于美洲。", en: "Pumas are large, cat-like animals which are found in America." },
      { cn: "当伦敦动物园接到报告说，在伦敦以南45英里处发现一只美洲狮时，这些报告并没有受到重视。", en: "When reports came into London Zoo that a wild puma had been spotted forty-five miles south of London, they were not taken seriously." },
      { cn: "可是，随着证据越来越多，动物园的专家们感到有必要进行一番调查，因为凡是声称见到过美洲狮的人们所描述的情况竟是出奇地相似。", en: "However, as the evidence began to accumulate, experts from the Zoo felt obliged to investigate, for the descriptions given by people who claimed to have seen the puma were extraordinarily similar." },
      { cn: "搜寻美洲狮的工作是从一座小村庄开始的，那里的一位妇女在采摘黑莓时看见“一只大猫”，离她仅5码远。", en: "The hunt for the puma began in a small village where a woman picking blackberries saw 'a large cat' only five yards away from her." },
      { cn: "她刚看见它，它就立刻逃走了。专家证实，美洲狮非被逼得走投无路，是决不会伤人的。", en: "It immediately ran away when she saw it, and experts confirmed that a puma will not attack a human being unless it is cornered." },
      { cn: "事实上，在发现美洲狮的地区留下的爪印与一只美洲狮的完全一致，但（美洲狮）是夜行性动物，白天是见不到的。", en: "As no pumas had been reported missing from any zoo in the country, this one must have been in the possession of a private collector and somehow managed to escape." },
      { cn: "搜寻工作在许多地方进行了一番。", en: "The search proved difficult, for the puma was often observed at one place in the morning and at another place twenty miles away in the evening." },
      { cn: "虽然专家们尽了最大努力，但是他们的努力没有得到回报。", en: "Wherever it went, it left behind it a trail of dead deer and small animals like rabbits." },
      { cn: "在某些地区，美洲狮的脚印被发现了，在另外一些地区，有人声称亲眼看到过美洲狮。", en: "Paw prints were seen in a number of places and puma fur was found clinging to bushes." },
      { cn: "几年后，这只美洲狮的踪迹在一次大搜捕中被发现。", en: "Several people complained of 'cat-like noises' at night and a businessman on a fishing trip saw the puma up a tree." },
      { cn: "专家们最终确信，这只动物确实是一只美洲狮，而不是别的什么动物。", en: "The experts were now fully convinced that the animal was a puma, but where had it come from?" },
      { cn: "由于没有报告说全国有哪家动物园丢失过美洲狮，因此这只美洲狮一定是一位私人收藏家饲养的，不知怎么逃了出来。", en: "As no pumas had been reported missing from any zoo in the country, this one must have been in the possession of a private collector and somehow managed to escape." },
      { cn: "搜寻工作开始了，但事实证明它并不容易，因为美洲狮常常在早晨在一个地方被观察到，晚上又在20英里外的另一个地方被观察到。", en: "The hunt went on for several weeks, but the puma was not caught." },
    ],
  },
]

/** 按 id 查找课程 */
export function getCourse(id: string): Course | undefined {
  return COURSES.find((c) => c.id === id)
}

/** Fisher-Yates 洗牌，返回新数组 */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
