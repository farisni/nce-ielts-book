export interface SentenceEntry {
  /** 中文句子 */
  cn: string
  /** 英文句子（听写目标） */
  en: string
  /** 音标（单词听写课程使用，显示在中文提示下方） */
  phonetic?: string
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

import { IELTS09_COURSES } from "./data/ielts09";

/**
 * 听写课程库
 * - nce3-l1：新概念英语第三册第一课（视频课程）
 * - ielts19-27：剑桥雅思19真题听力第27期（音频课程）
 * - ielts09-*：剑桥雅思9真题听力 39 期（音频课程，脚本生成）
 */
export const COURSES: Course[] = [
  {
    id: "nce3-l1",
    name: "NCE3 L1 · A Puma at Large",
    description: "新概念英语第三册第一课 · 看视频，听真人朗读，打字拼写",
    sessionSize: 24,
    video: "/video/nce3-l1.mp4",
    subtitle: "/video/nce3-l1.srt",
    sentences: [
      { cn: "美洲狮是一种体形似猫的大动物，产于美洲。", en: "Pumas are large, cat-like animals which are found in America." },
      { cn: "当伦敦动物园接到报告说，发现一只野美洲狮", en: "When reports came into London Zoo that a wild puma" },
      { cn: "在伦敦以南45英里处发现一只美洲狮时，这些报告并没有受到重视。", en: "had been spotted forty-five miles south of London, they were not taken seriously." },
      { cn: "可是，随着证据越来越多，", en: "However, as the evidence began to accumulate," },
      { cn: "因为凡是声称见到过美洲狮的人们所描述的情况竟是出奇地相似。", en: "for the descriptions given by people who claimed to have seen the puma were extraordinarily similar." },
      { cn: "搜寻美洲狮的工作是从一座小村庄开始的，", en: "The hunt for the puma began in a small village" },
      { cn: "那里的一位妇女在采摘黑莓时看见“一只大猫”，离她仅5码远。", en: "where a woman picking blackberries saw a large cat only five yards away from her." },
      { cn: "她刚看见它，它就立刻逃走了，", en: "It immediately ran away when she saw it," },
      { cn: "专家证实，美洲狮非被逼得走投无路，是决不会伤人的。", en: "and experts confirmed that a puma will not attack a human being unless it is cornered." },
      { cn: "搜寻工作很困难，", en: "The search proved difficult," },
      { cn: "因为常常是早晨在一个地方发现那只美洲狮，", en: "for the puma was often observed at one place in the morning" },
      { cn: "晚上却在20英里外的另一个地方发现它的踪迹。", en: "and at another place twenty miles away in the evening." },
      { cn: "无论它走到哪儿，它总会留下痕迹，", en: "Wherever it went, it left behind it a trail" },
      { cn: "一串死鹿和死兔子之类的小动物。", en: "of dead deer and small animals like rabbits." },
      { cn: "在许多地方看见了爪印，", en: "Paw prints were seen in a number of places" },
      { cn: "灌木丛中发现了粘在上面的美洲狮毛。", en: "and puma fur was found clinging to bushes." },
      { cn: "有人抱怨说夜里听见“像猫一样的叫声”；", en: "Several people complained of cat-like noises at night" },
      { cn: "一位去钓鱼的商人看见那只美洲狮在树上。", en: "and a businessman on a fishing trip saw the puma up a tree." },
      { cn: "专家们如今已经完全肯定那只动物就是美洲狮，", en: "The experts were now fully convinced that the animal was a puma," },
      { cn: "但它是从哪儿来的呢？", en: "but where had it come from?" },
      { cn: "由于全国动物园没有一家报告丢了美洲狮，", en: "As no pumas had been reported missing from any zoo in the country," },
      { cn: "因此那只美洲狮一定是某位私人收藏家豢养的，不知怎么设法逃出来了。", en: "this one must have been in the possession of a private collector and somehow managed to escape." },
      { cn: "搜寻工作进行了好几个星期，但始终未能逮住那只美洲狮。", en: "The hunt went on for several weeks, but the puma was not caught." },
      { cn: "想到在宁静的乡村里有一头危险的野兽继续逍遥流窜，真令人担心。", en: "It is disturbing to think that a dangerous wild animal is still at large in the quiet countryside." },
    ],
  },
  {
    id: "ielts19-27",
    name: "IELTS19-27 · 听力第27期",
    description: "剑桥雅思19真题听力第27期 · 跑步教练播客 · 听原声，看中文，打字拼写",
    sessionSize: 10,
    video: "/video/ielts19-27.mp3",
    subtitle: "/video/ielts19-27.srt",
    sentences: [
      { cn: "我是莉兹·富勒，是康普顿公园跑步俱乐部的跑步教练。", en: "My name's Liz Fuller and I'm a running coach with Compton Park Runners Club." },
      { cn: "欢迎来到我的播客。", en: "Welcome to my podcast." },
      { cn: "如果你正在考虑开始跑步，那么我可以帮助你。", en: "If you're thinking about taking up running, I'm here to help." },
      { cn: "网上有许多训练计划，目标是帮助人们逐渐进步，最后能跑5公里。", en: "There are many training programmes available online which aim to help people build up to running 5 kilometres." },
      { cn: "其中一些计划很棒，全国各地成千上万的不同年龄段的人最后都在跑5公里。", en: "Some of them are great and thousands of people of all ages are taking part in 5-kilometre races across the country as a result." },
      { cn: "人们喜欢这种计划，因为很容易跟着跑下来，而且不会给他们太大压力。", en: "People like them because they're easy to follow and don't push them too hard." },
      { cn: "然而，这种计划并不适合所有人，尤其是如果你有心脏病、哮喘等疾病，因为这种计划的目标人群是具有平均健康水平和跑步能力的人。", en: "However, they don't work for everyone, especially if you suffer from something like a heart condition or asthma, because they're aimed at people with average fitness and running ability." },
      { cn: "另一个原因是每个人都是不同的，如果你有与你的需求相关的具体问题，没有人能给你提供任何答案。", en: "Another thing is that everyone is different, and if you have any specific questions related to your needs, there's no one to provide any answers." },
      { cn: "我总是会给新入门的跑步者提供几个小建议。", en: "I have a couple of simple tips I always give to new runners." },
      { cn: "我想你应该听说过，在你的体力有所改善之前要跑得非常慢，嗯，我发现这样做会阻碍你进步。", en: "I expect you've been told to run very slowly until your fitness increases -- well, I find that can prevent progress." },
      { cn: "你应该以一种感觉舒服的速度跑，但要给自己计时，并尝试每次都跑得更快一点。", en: "You should run at a speed that feels comfortable, but time yourself and try to run a bit faster each time." },
      { cn: "听音乐可能会很有帮助，能让你的思绪从其他事情上转移，帮助你的身体进入一种节奏。", en: "Listening to music can be very helpful -- it takes your mind off things and helps your body get into a rhythm." },
      { cn: "我想说，听音乐比和朋友一起跑步效果更好，尤其是因为大多数人都有竞争意识，而刚开始跑步的时候最好不要竞争。", en: "I'd say that is better than running with a friend -- especially as most people are competitive and that's not what you want when you're just starting." },
      { cn: "我认为跑步的时间并不是特别重要，有些人晚上状态更好，有些人早上状态更好，", en: "I don't think the time of day is especially important -- some people are better in the evening, while others are morning people --" },
      { cn: "但需要时间保持一致，所以争取做到定期训练，开始时每周跑两次就够了。", en: "but you need to be consistent, so aim to train regularly -- twice a week is enough to begin with." },
    ],
  },
  ...IELTS09_COURSES,
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
