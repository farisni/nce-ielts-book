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
