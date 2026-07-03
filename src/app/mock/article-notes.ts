import type { ArticleOriginalContent, SentenceData } from "./types";

export const ARTICLE_ORIGINALS: Record<string, ArticleOriginalContent> = {};

export function registerOriginals(
  entries: Record<string, ArticleOriginalContent>
): Record<string, ArticleOriginalContent> {
  Object.assign(ARTICLE_ORIGINALS, entries);
  return entries;
}

registerOriginals({
  "nce4-l1": {
    paragraphs: [
      [
        {
          text: "We can read of things that happened 5,000 years ago in the Near East, where people first learned to write.", translation: "", predicates: ["read", "happened", "learned"], clauseIntroducers: ["that", "where"], auxiliaries: ["can"], inlineAnnotations: [
            { label: "that", description: "引导定语从句，修饰Things" },
            { label: "5,000 years ago", description: "时间状语" },
            { label: "in the Near East", description: "地点状语" },
            { label: "where", description: "非限定性定语从句，修饰Near East" }
          ], grammarNotes: undefined, expansionNotes: [
            {
              label: "read of 读到", description: "", examples: [
                { word: "", meaning: "", enExample: "I had read of such hideous incarnate demons.", zhExample: "我读过关于这类可怕的化身鬼怪的书。" },
                { word: "", meaning: "", enExample: "I read of the traffic accident in yesterday's paper.", zhExample: "我在昨天的报纸上知道了这起交通事故。" },
                { word: "", meaning: "", enExample: "Ye are our epistle written in our hearts, known and read of all men.", zhExample: "你们就是我们的荐信，写在我们心里，被众人所知道所念诵的。" },
                { word: "speak of / talk of", meaning: "谈到", enExample: "When she spoke of her childhood, her eyes lit up.", zhExample: "她一谈到童年，眼睛就发亮。" },
                { word: "hear of", meaning: "听说", enExample: "Have you ever heard of this author?", zhExample: "你听说过这个作家吗？" },
                { word: "learn of", meaning: "得知", enExample: "I just learned of his promotion yesterday.", zhExample: "我昨天才得知他升职了。" },
                { word: "know of", meaning: "听说过 / 知道", enExample: "I know of a good restaurant nearby.", zhExample: "我知道附近有一家不错的餐厅。" },
                { word: "think of", meaning: "想到", enExample: "I can't think of a better idea.", zhExample: "我想不到更好的主意了。" },
                { word: "dream of", meaning: "梦到 / 渴望", enExample: "She dreams of becoming a famous singer.", zhExample: "她梦想成为一名著名歌手。" }
              ]
            },
            {
              label: "of … 关于（相当于about）", description: "", examples: [
                { word: "", meaning: "", enExample: "This book is of great importance to scholars.", zhExample: "这本书对学者来说具有重要意义。" },
                { word: "", meaning: "", enExample: "It is a subject of study by many forgers.", zhExample: "这是许多伪造者研究的课题。" },
                { word: "", meaning: "", enExample: "The pursuit of sport is for national pride.", zhExample: "对体育的追求关系到国家荣誉。" },
                { word: "Of Truth", meaning: "关于真理", enExample: "Francis Bacon wrote an essay titled Of Truth.", zhExample: "弗朗西斯·培根写过一篇题为《论真理》的文章。" },
                { word: "Of Death", meaning: "关于死亡", enExample: "In his essay Of Death, Bacon explores human fear of dying.", zhExample: "在他的《论死亡》一文中，培根探讨了人类对死亡的恐惧。" },
                { word: "Of Love", meaning: "关于爱情", enExample: "The essay Of Love reveals the conflicts love can bring.", zhExample: "《论爱情》这篇文章揭示了爱情可能带来的冲突。" },
                { word: "Of Envy", meaning: "关于嫉妒", enExample: "He analyzed human behavior in Of Envy.", zhExample: "他在《论嫉妒》中分析了人类的行为。" },
                { word: "Of Human Bondage", meaning: "关于人性的枷锁", enExample: "Of Human Bondage is a novel by W. Somerset Maugham.", zhExample: "《人性的枷锁》是W·萨默塞特·毛姆的一部小说。" }
              ]
            },
            {
              label: "英语语序 事件+地点+时间", description: "", examples: [
                { word: "", meaning: "", enExample: "I saw him at the party yesterday.", zhExample: "事件+地点+时间" },
                { word: "", meaning: "", enExample: "Several cases have been reported in Russia recently of people who can read and detect colors with their fingers, and even see through solid doors and walls.", zhExample: "（Several cases of people）" },
                { word: "", meaning: "", enExample: "He maybe conceited, ill-mannered, presumptuous or fatuous, but I do not turn for protection to dreary clichés about respect of elders — as if mere age were a reason for respect.", zhExample: "" },
                { word: "", meaning: "", enExample: "Among them will be Debbie's mother, who swam the Channel herself when she was a girl.", zhExample: "" },
                { word: "", meaning: "", enExample: "If we glimpse the unutterable, it is unwise to try to utter it, nor should we seek to invest with significance that which we cannot grasp.", zhExample: "(invest A with B)" },
                { word: "We can read of things that happened", meaning: "5,000 years ago", enExample: "in the Near East, where people first learn to write.", zhExample: "" },
                { word: "事件", meaning: "时间(礼让弱小)", enExample: "地点（为了句式平衡，避免头重脚轻，改变了正常语序）", zhExample: "" }
              ]
            },
            { label: "考研英语（英译汉）", description: "" },
            {
              label: "the Near East", description: " 近东", examples: [
                { word: "the Middle East", meaning: "中东", enExample: "Oil is a major export product of the Middle East.", zhExample: "石油是中东的主要出口产品。" },
                { word: "the Far East", meaning: "远东", enExample: "Many Western companies have expanded into the Far East.", zhExample: "许多西方公司已扩展到远东市场。" }
              ]
            },
            {
              label: "定语从句充当原因状语(下面都是不够简洁改变了原句语法的句子)", description: "", examples: [
                { word: "", meaning: "", enExample: "We can read of things that happened 5,000 years ago in the Near East, because people first learned to write there.", zhExample: "" },
                { word: "", meaning: "", enExample: "We endeavour to avoid the old, romantic idea of a gusher, because it wastes oil and gas.", zhExample: "" },
                { word: "", meaning: "", enExample: "The small ship, Elkor, after she had been searching the Barents Sea for weeks, was on its way home.", zhExample: "" },
                { word: "", meaning: "", enExample: "Much to the aristocrat's amusement, the gaoler returned a few moments later with a pair of glasses and the usual copy of the letter and he proceeded to read it to the prisoner.", zhExample: "" }
              ]
            },
            {
              label: "状语从句 ⇒ 定语从句练习", description: "", examples: [
                { word: "", meaning: "状语从句", enExample: "定语从句", zhExample: "" },
                { word: "I have to be very careful not to offend the boss, because he could fire me at any time.", meaning: "", enExample: "I have to be very careful not to offend the boss, who could fire me at any time.", zhExample: "" },
                { word: "The action, although it has aroused universal disapproval, is nevertheless the only solution.", meaning: "", enExample: "The action, which has aroused universal disapproval, is nevertheless the only solution.", zhExample: "" }
              ]
            }
          ]
        },
        {
          text: "But there are some parts of the world where even now people cannot write.", translation: "", predicates: ["are"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [], grammarNotes: undefined, expansionNotes: [
            {
              label: "there be", description: "存在某物、某人", examples: [
                { word: "", meaning: "", enExample: "There seem to be more opportunities now.", zhExample: "现在好像有更多的机会。" },
                { word: "", meaning: "", enExample: "There appear to be some changes.", zhExample: "好像有一些变化。" },
                { word: "", meaning: "", enExample: "There seem / appear to be a misunderstanding.", zhExample: "好像有一个误会。" },
                { word: "", meaning: "", enExample: "There used to be a cinema here.", zhExample: "这里以前有一个电影院。" },
                { word: "", meaning: "", enExample: "There used to be fewer cars on the road.", zhExample: "路上以前车比较少。" },
                { word: "", meaning: "", enExample: "There used to be a different atmosphere.", zhExample: "以前有一种不同的氛围。" },
                { word: "", meaning: "", enExample: "There happen to be some extra chairs.", zhExample: "碰巧有一些额外的椅子。" },
                { word: "", meaning: "", enExample: "There happen to be a few solutions.", zhExample: "碰巧有几种解决方案。" },
                { word: "", meaning: "", enExample: "There happen to be someone who knows.", zhExample: "碰巧有人知道。" },
                { word: "", meaning: "", enExample: "There is going to be a party tonight.", zhExample: "今晚将有一个聚会。" },
                { word: "", meaning: "", enExample: "There are going to be some announcements.", zhExample: "将有一些公告。" },
                { word: "", meaning: "", enExample: "There is / are going to be a big change.", zhExample: "将有一个很大的变化。" },
                { word: "There seem / appear", meaning: "似乎有...", enExample: "There seem to be more opportunities now.", zhExample: "现在好像有更多的机会。There appear to be some changes. 好像有一些变化。There seem / appear to be a misunderstanding. 好像有一个误会。" },
                { word: "There used to be", meaning: "以前有...", enExample: "There used to be a cinema here.", zhExample: "这里以前有一个电影院。There used to be fewer cars on the road. 路上以前车比较少。There used to be a different atmosphere. 以前有一种不同的氛围。" },
                { word: "There happen to be", meaning: "碰巧有...", enExample: "There happen to be some extra chairs.", zhExample: "碰巧有一些额外的椅子。There happen to be a few solutions. 碰巧有几种解决方案。There happen to be someone who knows. 碰巧有人知道。" },
                { word: "There is going to be", meaning: "即将有...", enExample: "There is going to be a party tonight.", zhExample: "今晚将有一个聚会。There are going to be some announcements. 将有一些公告。There is / are going to be a big change. 将有一个很大的变化。" }
              ]
            }
          ]
        },
        {
          text: "The only way that they can preserve their history is to recount it as sagas — legends handed down from one generation of story tellers to another.", translation: "", predicates: ["preserve", "is"], clauseIntroducers: [], auxiliaries: ["can"], inlineAnnotations: [
            { label: "to recount it as sagas", description: "to do 不定式做表语(主+系+表)" },
            { label: "handed", description: "非谓语动词做后置定语" }
          ], grammarNotes: undefined, expansionNotes: [
            {
              label: "preserve", description: "保存、保护（状态）", examples: [
                { word: "", meaning: "", enExample: "The only way that they can preserve their history is to recount it as sagas.", zhExample: "他们保存历史的唯一方法是将历史像传说一样讲述。" },
                { word: "", meaning: "", enExample: "The museum works diligently to preserve historical records from the Civil War era, ensuring future generations can learn from primary sources.", zhExample: "博物馆努力保存南北战争时期的历史记录，确保后代能够从原始资料中学习。" },
                { word: "", meaning: "", enExample: "In rural communities, many families still preserve food through traditional methods like pickling and canning to enjoy seasonal produce year-round.", zhExample: "在农村社区，许多家庭仍然通过腌制和罐装等传统方法保存食物，以便全年享用季节性农产品。" },
                { word: "", meaning: "", enExample: "Doctors recommend regular breaks from screen time to preserve one's eyesight, especially for those who work with computers all day.", zhExample: "医生建议定期从屏幕前休息以保护视力，尤其是对那些整天使用电脑工作的人。" },
                { word: "conserve", meaning: "保存、保护（强调数量）", enExample: "We should conserve natural resources.", zhExample: "我们应该保护自然资源。" },
                { word: "reserve", meaning: "保存、保护（强调为了将来使用）", enExample: "I reserve the right to disagree.", zhExample: "我保留不同意的权利。" }
              ]
            },
            {
              label: "To do", description: "做表语时, 若前面出现了实义动词 “do”，则常去掉 “to”", examples: [
                { word: "", meaning: "", enExample: "All I have to do is （to）dream.", zhExample: "" },
                { word: "", meaning: "", enExample: "The best thing you can do now is （to）write her an apology.", zhExample: "" },
                { word: "", meaning: "", enExample: "All I wanted was to help him.", zhExample: "" },
                { word: "", meaning: "", enExample: "The only thing to do was ask them to come half an hour later than the other guests. Then they arrived just when we wanted them.", zhExample: "" }
              ]
            },
            {
              label: "动词不定式做“except / but”的宾语时", description: "表示“除了…之外”，若前面出现了实义动词 “do”, 则常去掉“to”", examples: [
                { word: "", meaning: "", enExample: "We have nothing to do but（to） wait here.", zhExample: "" },
                { word: "", meaning: "", enExample: "They did nothing but / except（to） complain.", zhExample: "" },
                { word: "", meaning: "", enExample: "I’ve done everything you wanted but / except （to）make the beds.", zhExample: "" },
                { word: "", meaning: "如果前面实义动词do，后面的to省略", enExample: "We have nothing to do but（to） wait here. They did nothing but / except（to） complain.I’ve done everything you wanted but / except （to）make the beds.", zhExample: "" },
                { word: "", meaning: "如果前面没有实义动词 do，后面必须是to do", enExample: "We have no choice but / except to wait here.", zhExample: "" }
              ]
            },
            {
              label: "hand sth. down pass sth. from older people to younger ones", description: "传下来", examples: [
                { word: "", meaning: "", enExample: "The recipe was handed down from an ancestor of the family.", zhExample: "" },
                { word: "", meaning: "", enExample: "This ring was handed down from my aunt.", zhExample: "这只戒指是我姑母传下来的。" },
                { word: "", meaning: "", enExample: "The verdict was handed down at the end of June.", zhExample: "法庭裁决于六月底下来了。" },
                { word: "", meaning: "", enExample: "This blood feud was handed down from generation to generation.", zhExample: "这血海深仇传了一代又一代。" }
              ]
            },
            {
              label: "xxx-teller", description: " 讲…的人", examples: [
                { word: "", meaning: "", enExample: "story-teller = tell stories", zhExample: "讲故事的人" },
                { word: "", meaning: "", enExample: "fortune-teller = tell one’s fortune", zhExample: "算命" }
              ]
            }
          ]
        },
        {
          text: "These legends are useful because they can tell us something about migrations of people who lived long ago, but none could write down what they did.", translation: "", predicates: ["are", "tell", "lived", "write", "did"], clauseIntroducers: [], auxiliaries: ["can", "could"], inlineAnnotations: [], grammarNotes: undefined, expansionNotes: []
        },
        {
          text: "Anthropologists wondered where the remote ancestors of the Polynesian peoples now living in the Pacific Islands came from.", translation: "", predicates: ["wondered", "came"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [
            { label: "now living in the Pacific Islands", description: "后置定语修饰前面的 peoples 民族" }
          ], grammarNotes: undefined, expansionNotes: [
            {
              label: "remote ancestors", description: "远祖", examples: [
                { word: "", meaning: "", enExample: "Anthropologists studied the origins of their remote ancestors.", zhExample: "人类学家研究了他们远祖的起源。" },
                { word: "", meaning: "", enExample: "The traditions were passed down from their remote ancestors.", zhExample: "这些传统是从他们的远祖那里传下来的。" },
                { word: "", meaning: "", enExample: "Understanding our remote ancestors helps us understand ourselves.", zhExample: "了解我们的远祖有助于我们了解自己。" },
                { word: "", meaning: "", enExample: "He met a distant relative at the family reunion.", zhExample: "他在家庭聚会上遇到了一位远亲。" },
                { word: "", meaning: "", enExample: "I received a letter from a distant relative living abroad.", zhExample: "我收到了一封来自居住在国外的远亲的信。" },
                { word: "", meaning: "", enExample: "She didn't recognize a distant relative at first.", zhExample: "她起初没有认出一位远亲。" },
                { word: "", meaning: "", enExample: "She is a close relative of mine.", zhExample: "她是我的一个近亲。" },
                { word: "", meaning: "", enExample: "We visited a near relative in the hospital.", zhExample: "我们去医院看望了一位近亲。" },
                { word: "", meaning: "", enExample: "The funeral was attended by many close relatives.", zhExample: "许多近亲参加了葬礼。" },
                { word: "a distant relative", meaning: "远亲", enExample: "He met a distant relative at the family reunion.", zhExample: "他在家庭聚会上遇到了一位远亲。I received a letter from a distant relative living abroad. 我收到了一封来自居住在国外的远亲的信。She didn't recognize a distant relative at first. 她起初没有认出一位远亲。" },
                { word: "a close / near relative", meaning: "近亲", enExample: "She is a close relative of mine.", zhExample: "她是我的一个近亲。We visited a near relative in the hospital. 我们去医院看望了一位近亲。The funeral was attended by many close relatives. 许多近亲参加了葬礼。" }
              ]
            }
          ]
        },
        {
          text: "The sagas of these people explain that some of them came from Indonesia about 2,000 years ago.", translation: "", predicates: ["explain", "came"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [], grammarNotes: undefined, expansionNotes: []
        }
      ],
      [
        {
          text: "But the first people who were like ourselves lived so long ago that even their sagas, if they had any, are forgotten.", translation: "", predicates: ["were", "lived", "had", "are"], clauseIntroducers: ["that"], auxiliaries: [], inlineAnnotations: [
            { label: "so long ago", description: "结果状语" },
            { label: "that", description: "结果状语" }
          ], grammarNotes: undefined, expansionNotes: [
            {
              label: "the first people who were like ourselves 远古人类 = fossil man（替换）", description: "", examples: [
                { word: "", meaning: "", enExample: "Scientists discovered a skull of a fossil man.", zhExample: "科学家发现了一块化石人类的头骨" },
                { word: "", meaning: "", enExample: "We know little about the people who lived long ago.", zhExample: "我们对远古人类了解甚少" },
                { word: "", meaning: "", enExample: "The first 'modern men' appeared in Africa.", zhExample: "最早的现代人出现在非洲" },
                { word: "", meaning: "", enExample: "Some tools used by ancient men were found in the cave.", zhExample: "在洞穴中发现了一些古代人类使用的工具" }
              ]
            },
            {
              label: "first people who were like ourselves 定语从句 = first people like ourselves 后置定语", description: "", examples: [
                { word: "", meaning: "", enExample: "... asked to see a dress that was in the window. = ... asked to see a dress in the window.", zhExample: "" },
                { word: "be similar to … 和…很类似", meaning: "… the first people who were similar to ourselves …", enExample: "… the first people similar to ourselves", zhExample: "" },
                { word: "resemble 类似", meaning: "... the first people who resembled ourselves …", enExample: "... the first people resembling ourselves …", zhExample: "" },
                { word: "bear a resemblance to 与...有相似之处", meaning: "... the first people who bore a resemblance to ourselves ...", enExample: "... the first people bearing a resemblance to ourselves ...", zhExample: "" }
              ]
            },
            {
              label: "if + 从句（让步用法） 即使", description: "", examples: [
                { word: "", meaning: "", enExample: "God’s reasons, if He has any, are opaque to us.", zhExample: "上帝的理由，即使他有，也是难以理解的" },
                { word: "", meaning: "", enExample: "There is every likelihood that the costs will outweigh revenue, if there is any.", zhExample: "成本极可能超过收入，即使收入存在" },
                { word: "", meaning: "", enExample: "His descendants, if any, never left the island.", zhExample: "他的后代，即使有，也从未离开这座岛屿" },
                { word: "", meaning: "", enExample: "He is seldom, if ever, absent from work.", zhExample: "" }
              ]
            }
          ]
        },
        {
          text: "So archaeologists have neither history nor legends to help them to find out where the first 'modern men' came from.", translation: "", predicates: ["have", "came"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [], grammarNotes: undefined, expansionNotes: [
            {
              label: "neither...nor...", description: "既不…也不…", examples: [
                { word: "", meaning: "", enExample: "Neither the teacher nor the students were in the classroom.", zhExample: "老师和学生都不在教室" },
                { word: "", meaning: "", enExample: "Neither the evidence nor the witnesses support his claim.", zhExample: "既没有证据也没有证人支持他的说法" },
                { word: "", meaning: "", enExample: "Neither John nor Mary likes sushi.", zhExample: "约翰和玛丽都不喜欢寿司" }
              ]
            },
            {
              label: "find out", description: "查明；弄清楚", examples: [
                { word: "", meaning: "", enExample: "Scientists are working hard to find out the cause of the disease.", zhExample: "科学家正努力查明这种疾病的原因" },
                { word: "", meaning: "", enExample: "She called the company to find out more information.", zhExample: "她打电话给公司了解更多信息" },
                { word: "", meaning: "", enExample: "We need to find out what happened last night.", zhExample: "我们需要弄清楚昨晚发生了什么" }
              ]
            }
          ]
        }
      ],
      [
        {
          text: "Fortunately, however, ancient men made tools of stone, especially flint, because this is easier to shape than other kinds.", translation: "", predicates: ["made", "is"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [], grammarNotes: undefined, expansionNotes: [
            {
              label: "shape", description: "使成形", examples: [
                { word: "", meaning: "", enExample: "He shaped the clay into a vase.", zhExample: "" },
                { word: "", meaning: "", enExample: "Like it or not, our experiences shape our personalities.", zhExample: "" },
                { word: "", meaning: "", enExample: "He shaped the clay into a bowl.", zhExample: "他把黏土捏成一个碗。" },
                { word: "", meaning: "", enExample: "Experiences can shape a person's character.", zhExample: "经历可以塑造一个人的性格。" },
                { word: "", meaning: "", enExample: "The sculptor carefully shaped the marble.", zhExample: "雕塑家仔细地塑造着大理石。" },
                { word: "", meaning: "", enExample: "He thundered at the door.", zhExample: "" },
                { word: "", meaning: "", enExample: "The street was veiled in darkness.", zhExample: "" },
                { word: "", meaning: "", enExample: "A gust of wind whipped the dust along the road.", zhExample: "" },
                { word: "", meaning: "", enExample: "Honey, I forgot to duck.", zhExample: "（里根）" },
                { word: "", meaning: "", enExample: "It rained cats and dogs.", zhExample: "下了倾盆大雨。（cats and dogs名词作副词）" },
                { word: "", meaning: "", enExample: "The wind whipped through the trees.", zhExample: "风呼啸着穿过树林。（whipped名词作动词）" },
                { word: "", meaning: "", enExample: "The city lights up at night.", zhExample: "夜晚城市灯火通明。（lights名词作动词）" },
                { word: "", meaning: "名词动用", enExample: "He thundered at the door.The street was veiled in darkness.A gust of wind whipped the dust along the road.Honey, I forgot to duck.", zhExample: "（里根）It rained cats and dogs. 下了倾盆大雨。（cats and dogs名词作副词）The wind whipped through the trees. 风呼啸着穿过树林。（whipped名词作动词）The city lights up at night. 夜晚城市灯火通明。（lights名词作动词）" }
              ]
            },
            {
              label: "… this is easier to shape… 形容词 + to do ", description: "形容词后加动词不定式作补语，用主动表被动的含义", examples: [
                { word: "", meaning: "", enExample: "He is easy to fool.", zhExample: "" },
                { word: "", meaning: "", enExample: "She is extremely difficult to please.", zhExample: "" },
                { word: "", meaning: "", enExample: "The machine is awkward to handle.", zhExample: "" },
                { word: "", meaning: "", enExample: "The man is hard to work with.", zhExample: "" },
                { word: "", meaning: "", enExample: "This book is easy to read.", zhExample: "这本书很容易读。" },
                { word: "", meaning: "", enExample: "The problem is difficult to solve.", zhExample: "这个问题很难解决。" },
                { word: "", meaning: "", enExample: "That song is lovely to listen to.", zhExample: "那首歌听起来很动听。" }
              ]
            }
          ]
        },
        {
          text: "They may also have used wood and skins, but these have rotted away.", translation: "", predicates: ["have used", "have rotted"], clauseIntroducers: [], auxiliaries: ["may"], inlineAnnotations: [], grammarNotes: undefined, expansionNotes: [
            {
              label: "情态动词 + have done", description: "对过去肯定/否定的推测", examples: [
                { word: "", meaning: "", enExample: "He must have left already.", zhExample: "他肯定已经离开了。" },
                { word: "", meaning: "", enExample: "She might have forgotten about the meeting.", zhExample: "她可能忘记了会议。" },
                { word: "", meaning: "", enExample: "They couldn't have known the answer.", zhExample: "他们不可能知道答案。" },
                { word: "may / might have done", meaning: "可能已经做了某事", enExample: "She may have forgotten our meeting.", zhExample: "她可能忘记了我们的会议。" },
                { word: "must have done", meaning: "一定已经做了某事", enExample: "He must have left early to catch the train.", zhExample: "他一定是早早离开去赶火车了。" },
                { word: "can not / could not have done", meaning: "不可能已经做了某事", enExample: "She can’t have seen him there — he was abroad.", zhExample: "她不可能在那里见过他——他当时在国外。" },
                { word: "should / ought to have done", meaning: "本应该做某事（责备语气）", enExample: "You should have told me the truth.", zhExample: "你本应该告诉我真相。" },
                { word: "should not / ought not to have done", meaning: "本不该做某事（责备语气）", enExample: "He ought not to have said that in public.", zhExample: "他本不该在公众场合那样说。" }
              ]
            },
            {
              label: "skin/hide/fur/feather", description: "表达“皮”", examples: [
                { word: "", meaning: "", enExample: "fur and feather", zhExample: "飞禽走兽（借代）" },
                { word: "", meaning: "", enExample: "fin, fur and feather", zhExample: "各种各样的动物（借代）" },
                { word: "skin", meaning: "皮肤/兽皮", enExample: "The hunter wore animal skins.", zhExample: "猎人穿着兽皮。" },
                { word: "hide", meaning: "兽皮（尤指大型动物的）", enExample: "They used buffalo hides to make tents.", zhExample: "他们用野牛皮做帐篷。" },
                { word: "fur", meaning: "裘皮", enExample: "She wore a coat with a fur collar.", zhExample: "她穿了一件带裘皮领子的外套。" },
                { word: "feather", meaning: "羽毛", enExample: "Birds are covered in feathers.", zhExample: "鸟类身上覆盖着羽毛。" }
              ]
            },
            {
              label: "metonymy", description: "借代", examples: [
                { word: "", meaning: "", enExample: "A bald slipped out of the house.", zhExample: "" },
                { word: "", meaning: "", enExample: "He has been messing around with several skirts（裙子，借代女性） of his class.", zhExample: "" },
                { word: "", meaning: "", enExample: "The crown should not yield to the cross.", zhExample: "" },
                { word: "", meaning: "", enExample: "The pen is mightier than the sword.", zhExample: "笔比剑更有力。（pen借代文字，sword借代武力）" },
                { word: "", meaning: "", enExample: "We need more hands on deck.", zhExample: "我们需要更多的人手。（hands借代工人）" },
                { word: "", meaning: "", enExample: "The White House announced a new policy.", zhExample: "白宫宣布了一项新政策。（White House借代美国政府）" }
              ]
            }
          ]
        },
        {
          text: "Stone does not decay, and so the tools of long ago have remained when even the bones of the men who made them have disappeared without trace.", translation: "", predicates: ["does not decay", "have remained", "made", "have disappeared"], clauseIntroducers: ["so", "when", "who"], auxiliaries: [], inlineAnnotations: [
            { label: "so", description: "so在这里是一个副词，and so是一个固定搭配，相当于 and therefore" },
            { label: "when", description: "引导让步状语从句" },
            { label: "who", description: "引导定语从句，修饰bones" },
            { label: "without trace", description: "方式状语" }
          ], grammarNotes: undefined, expansionNotes: [
            {
              label: "when", description: " 尽管,引导让步状语:一般放在主句之后", examples: [
                { word: "", meaning: "", enExample: "He walks when he might take a taxi.", zhExample: "" },
                { word: "", meaning: "", enExample: "Why do you walk when you have a car?", zhExample: "" },
                { word: "", meaning: "", enExample: "He smiled when he was feeling sad.", zhExample: "他尽管感到悲伤，还是笑了。" },
                { word: "", meaning: "", enExample: "She helped others when she herself was in need.", zhExample: "她尽管自己也需要帮助，还是帮助了别人。" },
                { word: "", meaning: "", enExample: "They continued to work when it started to rain.", zhExample: "尽管开始下雨，他们仍然继续工作。" }
              ]
            },
            {
              label: "disappear / vanish without trace ", description: "消失得无影无踪", examples: [
                { word: "", meaning: "", enExample: "The burglar slipped out of the house and then disappeared / vanished without trace.", zhExample: "" },
                { word: "", meaning: "", enExample: "The magician made the rabbit disappear without trace.", zhExample: "魔术师使兔子消失得无影无踪。" },
                { word: "", meaning: "", enExample: "After the heavy fog lifted, the ship had vanished without trace.", zhExample: "大雾散去后，那艘船已经消失得无影无踪。" },
                { word: "", meaning: "", enExample: "The missing documents seemed to have disappeared without trace from the office.", zhExample: "失踪的文件似乎已经从办公室消失得无影无踪。" }
              ]
            }
          ]
        }
      ]
    ],
    otherNotes: [
      { label: "英语标题的特点", description: "英语的标题通常不会用完整的句子，尽量追去简洁，一般使用音节比较少的词，避免使用大词，使用简洁且能鲜明的表达中心思想为宜。" },
      { label: "find = discover", description: "发现。例句：discover fossil man、ancient man、prehistoric man。" },
      { label: "标题词常用简洁的单词", description: "拼写与发音更容易的词。encourage → spur 激励；prohibit / forbid → ban 禁止；compete → vie 竞争；nominate → name 提名。" },
      { label: "alliteration 头韵", description: "叮当、咔嚓、哗啦、呱唧。例句：Spare that spider；Matterhorn man；The sporting spirit；Pride and Prejudice（傲慢与偏见）；Prince and Pauper（王子与乞丐）；World Wide Watch（世界观察）；A Delicious Dish A Day（甜甜饮食）；Beauty and Beast（美女与野兽）；WWW = The World Wide Web。" },
    ],
  },
  "nce4-l2": {
    paragraphs: [
      [
{ text: "Why, you may wonder, should spiders be our friends?", translation: "", predicates: ["wonder", "be"], clauseIntroducers: [], auxiliaries: ["may"], inlineAnnotations: [{ label: ", you may wonder,", description: "插入语(额外不重要的信息)" }], expansionNotes: [{ label: "插入语 先去掉再翻译或者先翻译（次要信息但会增加阅读难度）", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Why, you may wonder, should spiders be our friends?", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "Dogs, it seems, love to chew up money.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "Chickens slaughtered in the United States, claim officials in Brussels, are not fit to grace European tables.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "A man without an education, many of us believe, is an unfortunate victim of adverse circumstances, deprived of one of the greatest twentieth-century opportunities.", zhExample: "" }] }, { label: "should 怎么会", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "How should I know?", zhExample: "我怎么会知道？" }, { kind: "example", word: "", meaning: "", enExample: "Why should conservatives vote for Bush?", zhExample: "保守派怎么会投票给布什？" }, { kind: "example", word: "", meaning: "", enExample: "Why should they oppose this plan?", zhExample: "他们怎么会反对这个计划？" }, { kind: "synonym", word: "You may wonder", meaning: "", enExample: "why spiders are our friends?", zhExample: "" }, { kind: "synonym", word: "主要信息", meaning: "", enExample: "次要信息", zhExample: "" }] }, { label: "You may wonder... 设问句结构(重点突出wonder)", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "You may wonder why he left early.", zhExample: "你可能会想知道他为什么早退。" }, { kind: "example", word: "", meaning: "", enExample: "You may wonder, why should we care about climate change?", zhExample: "你可能想知道，我们为什么要关心气候变化？" }, { kind: "example", word: "", meaning: "", enExample: "You may wonder, why should education be a priority?", zhExample: "你可能会想，为什么教育应该优先？" }] }, { label: "【设问句】写作技巧 引起兴趣，避免说教", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Why should we learn from history?", zhExample: "我们为什么要学习历史？" }, { kind: "example", word: "", meaning: "", enExample: "Why must we rethink our lifestyles?", zhExample: "我们为什么必须重新思考我们的生活方式？" }, { kind: "example", word: "", meaning: "", enExample: "Why do small habits matter so much?", zhExample: "为什么小习惯如此重要？" }, { kind: "synonym", word: "Building harmonious personal relationships is very important in the modern society.", meaning: "", enExample: "Why, you may wonder, should some of us become experts in building and maintaining personal relationships?", zhExample: "" }, { kind: "synonym", word: "说教语气（容易让人产生不悦感）", meaning: "", enExample: "设问句开头，引起读者兴趣", zhExample: "" }] }] },
{ text: "Because they destroy so many insects, and insects include some of the greatest enemies of the human race.", translation: "", predicates: ["destroy", "include"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [], expansionNotes: [{ label: "because 因为，用于回答why句", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Because he was late, he missed the bus.", zhExample: "因为他迟到了，他错过了公交。" }, { kind: "example", word: "", meaning: "", enExample: "Because they work hard, they succeed.", zhExample: "因为他们努力工作，所以成功。" }, { kind: "example", word: "", meaning: "", enExample: "Because it rained, we canceled the picnic.", zhExample: "因为下雨了，我们取消了野餐。" }] }, { label: "kill off 杀死、屠杀、灭绝", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Disease wiped out the tribe.", zhExample: "疾病使这个部落灭绝。" }, { kind: "example", word: "", meaning: "", enExample: "What wiped out / exterminated dinosaurs from the earth?", zhExample: "" }, { kind: "synonym", word: "destroy", meaning: "毁灭", enExample: "The fire destroyed the whole building.", zhExample: "这场火烧毁了整栋楼。" }, { kind: "synonym", word: "kill off", meaning: "大量杀死", enExample: "Pollution killed off many marine species.", zhExample: "污染导致许多海洋生物大量死亡。" }, { kind: "synonym", word: "slaughter / massacre", meaning: "屠杀", enExample: "The army massacred civilians.", zhExample: "军队屠杀了平民。" }, { kind: "synonym", word: "wipe out / exterminate", meaning: "灭绝", enExample: "Disease wiped out the tribe.", zhExample: "疾病使这个部落灭绝。 What wiped out / exterminated dinosaurs from the earth?" }] }, { label: "human race 人类(人的总称)", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "We must protect the future of the human race.", zhExample: "我们必须保护人类的未来。" }, { kind: "example", word: "", meaning: "", enExample: "The human race has enough weapons to annihilate itself.", zhExample: "人类有足够的武器灭绝自己。" }, { kind: "example", word: "", meaning: "", enExample: "Can the human race carry on expanding and growing the same way that it is now?", zhExample: "人类能够像现在这样继续发展和增长吗？" }, { kind: "synonym", word: "human being", meaning: "可数", enExample: "...a puma will not attack a human being unless it is cornered.", zhExample: "" }, { kind: "synonym", word: "mankind / humankind", meaning: "不可数", enExample: "Technology benefits all mankind.", zhExample: "科技造福全人类。" }, { kind: "synonym", word: "humanity", meaning: "较正式", enExample: "It was a crime against humanity.", zhExample: "那是反人类罪行。" }] }] },
{ text: "Insects would make it impossible for us to live in the world; they would devour all our crops and kill our flocks and herds, if it were not for the protection we get from insect-eating animals.", translation: "", predicates: ["make", "devour", "kill", "were", "get"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [{ label: "to live in the world", description: "真正的主语" }, { label: "flocks and herds", description: "群羊和兽群：指一群羊或其他动物的集合，通常用于描述农场或牧场上的动物群。" }], expansionNotes: [{ label: "虚拟语气 § 与事实相反的假设", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "If I were rich, I would travel the world.", zhExample: "如果我有钱，我会环游世界。" }, { kind: "example", word: "", meaning: "", enExample: "Had I studied harder, I would have passed the exam.", zhExample: "如果我更努力学习，我本可以通过考试。" }, { kind: "example", word: "", meaning: "", enExample: "Should it rain, we would cancel the trip.", zhExample: "如果下雨，我们会取消旅行。" }] }, { label: "make it possible for sb. to do 使某人能做某事", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "They devise hundreds of competitions which will enable us to win huge sums of money. Radio and television have made it possible for advertisers to capture the attention of millions of people in this way.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "The device makes it possible for blind people to read.", zhExample: "这个设备使盲人能够阅读。" }, { kind: "example", word: "", meaning: "", enExample: "Radio makes it possible to reach millions.", zhExample: "广播使得能够接触到数百万人。" }, { kind: "example", word: "", meaning: "", enExample: "His injury rendered him unfit for work.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "Solar power could become a viable energy source, rendering fossil fuels obsolete.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "His promotion rendered him more confident.", zhExample: "他的升职使他更有自信。" }, { kind: "synonym", word: "enable sb. to do", meaning: "使某人能够做某事", enExample: "This would enable me to go to Canada.", zhExample: "这可以使我去加拿大了。" }, { kind: "synonym", word: "render sb. / sth. + adj. (fml.)", meaning: "使某人能做某事", enExample: "His injury rendered him unfit for work. Solar power could become a viable energy source, rendering fossil fuels obsolete. His promotion rendered him more confident.", zhExample: "他的升职使他更有自信。" }] }, { label: "flocks and herds 牛羊群", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "A flock of sheep grazed on the hill.", zhExample: "一群羊在山坡上吃草。" }, { kind: "example", word: "", meaning: "", enExample: "A herd of cattle crossed the road.", zhExample: "一群牛穿过马路。" }, { kind: "example", word: "", meaning: "", enExample: "They raised large herds of animals.", zhExample: "他们养了很多牲畜。" }, { kind: "synonym", word: "a flock of sheep / pigeons", meaning: "羊群 / 鸽群", enExample: "We saw a flock of sheep grazing on the hill.", zhExample: "我们看到一群羊在山上吃草。" }, { kind: "synonym", word: "a herd of cattle / deer / elephants", meaning: "牛群 / 鹿群 / 象群（多指牲畜）", enExample: "A herd of elephants was moving slowly through the forest.", zhExample: "一群大象正缓慢穿过森林。" }, { kind: "synonym", word: "a drove of horses / cattle / sheep", meaning: "被赶着走的一群马 / 牛 / 羊", enExample: "The farmer led a drove of cattle down the road.", zhExample: "农夫赶着一群牛沿着路走。" }, { kind: "synonym", word: "a pack of wolves / tigers / lions", meaning: "狼群 / 虎群 / 狮群（多指猛兽）", enExample: "They were surrounded by a pack of wolves in the forest.", zhExample: "他们在森林中被一群狼包围了。" }, { kind: "synonym", word: "a pride of lions", meaning: "一群狮子", enExample: "We spotted a pride of lions resting in the shade.", zhExample: "我们看到一群狮子在阴凉处休息。" }, { kind: "synonym", word: "a swarm of flies / bees", meaning: "一群苍蝇 / 蜜蜂（飞虫）", enExample: "A swarm of bees flew out of the hive.", zhExample: "一群蜜蜂从蜂巢飞出。" }, { kind: "synonym", word: "a colony of ants / termites", meaning: "蚁群 / 白蚁群", enExample: "We found a colony of ants under the rock.", zhExample: "我们在石头下发现了一群蚂蚁。" }, { kind: "synonym", word: "a school / shoal of fish", meaning: "一群鱼", enExample: "A diver swam through a school of fish.", zhExample: "一名潜水员穿过一群鱼。" }] }, { label: "if it were not for / but for / except for 要不是、若没有", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "If it were not for your help, I couldn’t succeed.", zhExample: "要不是你的帮助，我不会成功。" }, { kind: "example", word: "", meaning: "", enExample: "If it were not for your support, I would be in big trouble now.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "Were it not for your support, I would be in big trouble now.", zhExample: "（倒装）" }] }, { label: "圆周句（掉尾句）特殊结构强调句；一般用于书面语，制造悬念，一般文章不能大量使用", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "That all great art has this power of suggesting a world beyond is undeniable.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "Although Tchaikovsky himself thought of the Pathetic Symphony as his crowning masterpiece, the premiere on October 28th 1893 in St. Petersburg proved a disappointment.", zhExample: "" }] }, { label: "insect-eating animals 吃昆虫的动物 = animals which eat insects", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Insect-eating animals such as frogs help control pests.", zhExample: "吃昆虫的动物如青蛙有助于控制害虫。" }, { kind: "example", word: "", meaning: "", enExample: "Birds are insect-eating animals that maintain ecological balance.", zhExample: "鸟类是维护生态平衡的吃昆虫的动物。" }, { kind: "example", word: "", meaning: "", enExample: "Bats belong to insect-eating animals and reduce mosquito populations.", zhExample: "蝙蝠属于吃昆虫的动物，减少蚊子数量。" }, { kind: "example", word: "", meaning: "", enExample: "law-abiding citizens = citizens who abide by the law", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "hand-made silverware = silverware which is made by hands", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "stress-related diseases = diseases which are related to stress", zhExample: "" }, { kind: "synonym", word: "state-owned enterprises", meaning: "国有企业", enExample: "The government is reforming state-owned enterprises.", zhExample: "政府正在改革国有企业。" }, { kind: "synonym", word: "flower-selling girls", meaning: "卖花女孩", enExample: "We were approached by flower-selling girls on the street.", zhExample: "我们在街上遇到了卖花的女孩。" }, { kind: "synonym", word: "epoch-making masterpieces", meaning: "划时代的杰作", enExample: "It is one of the greatest epoch-making masterpieces in history.", zhExample: "这是一部划时代的杰作。" }, { kind: "synonym", word: "cancer-causing substances", meaning: "致癌物质", enExample: "Smoking contains many cancer-causing substances.", zhExample: "香烟中含有许多致癌物质。" }] }] },
{ text: "We owe a lot to the birds and beasts who eat insects but all of them put together kill only a fraction of the number destroyed by spiders.", translation: "", predicates: ["owe", "eat", "kill"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [{ label: "put together", description: "后置定语，put在这里是过去分词“被放到一块儿了的所有吃昆虫的所有”" }, { label: "destroyed by spiders", description: "后置定语修饰“被蜘蛛杀死的”" }], expansionNotes: [{ label: "owe 欠、感谢", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "How much do I owe you?", zhExample: "我欠你多少钱？" }, { kind: "example", word: "", meaning: "", enExample: "You owe him an apology.", zhExample: "你欠他一个道歉。" }, { kind: "example", word: "", meaning: "", enExample: "I owe you one.", zhExample: "我欠你一个人情（IOU）。" }, { kind: "example", word: "", meaning: "", enExample: "I owe you a lot / a great deal.", zhExample: "表达“感谢”" }, { kind: "synonym", word: "owe A to B", meaning: "把A归于B", enExample: "I owe my success to good luck.", zhExample: "我把我的成功归功于好运。" }, { kind: "synonym", word: "attribute A to B", meaning: "把A归于B", enExample: "He attributed his failure to bad weather.", zhExample: "他把失败归因于恶劣天气。" }, { kind: "synonym", word: "ascribe A to B", meaning: "把A归于B", enExample: "Scholars ascribe this text to Shakespeare.", zhExample: "学者们将此文归功于莎士比亚。" }, { kind: "synonym", word: "put A down to B", meaning: "把A归因于B（通常是原因解释）", enExample: "I put his success down to hard work.", zhExample: "我把他的成功归因于努力。" }, { kind: "synonym", word: "assign A to B", meaning: "把A分配/指定给B（强调分配责任、任务、角色）", enExample: "The teacher assigned the task to each student.", zhExample: "老师把任务分配给每个学生。" }, { kind: "synonym", word: "credit A to B", meaning: "把A归功于B（强调功劳或贡献）", enExample: "We credit the invention to Thomas Edison.", zhExample: "我们把这项发明归功于托马斯·爱迪生。" }] }, { label: "beasts who eat insects = insect-eating animals 上文中的同义词替换", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "The lorry was loaded with empty beer bottles and hundreds of them slid off the back of the vehicle and on to the road.", zhExample: "上义词；同义词不好替换，用上义词替换" }, { kind: "example", word: "", meaning: "", enExample: "There was also a great deal of machinery on display. The most wonderful piece of machinery on show was Nasmyth's steam hammer.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "Giant pandas are considered a national treasure and the Chinese government are doing their best to protect this endangered species.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "Moreover, in the past two years other nearby cities may have begun to build similar golf courses or resort hotels. Indeed, the fact that Ocean View has already built these facilities might actually portend failure for Hopewell, …", zhExample: "" }] }, { label: "fraction 一小部分 a small amount of sth. …的一小部分", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "His shares are now worth only a fraction of their former value.", zhExample: "他的股票现在只值原来价值的一小部分。" }, { kind: "example", word: "", meaning: "", enExample: "It's usually a small fraction of the total.", zhExample: "它通常只是总数的一小部分。" }, { kind: "example", word: "", meaning: "", enExample: "We are lucky in that only the lower fields, which make up a very small proportion of our farm, are effected by flooding, …", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "a high / large proportion / percentage of", zhExample: "… 一大部分" }, { kind: "example", word: "", meaning: "", enExample: "a small / tiny proportion / percentage of", zhExample: "… 一小部分" }] }] },
{ text: "Moreover, unlike some of the other insect eaters, spiders never do the least harm to us or our belongings.", translation: "", predicates: ["do"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [{ label: "Moreover", description: "表递进“此外”" }, { label: "unlike some of the other insect eaters", description: "介词短语做状语“不像那些其它吃昆虫的动物们...”" }, { label: "the least harm", description: "用最高级加强语气“没有一点损害”" }, { label: "to us or our belongings", description: "双宾语“对于我们或者我们的财产”" }], expansionNotes: [{ label: "insect eaters 吃昆虫的(再次被替换)", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "beasts who eat insects", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "insect-eating animals", zhExample: "" }] }, { label: "moreover 此外；递进", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Moreover, spiders never do harm to us.", zhExample: "此外，蜘蛛从不伤害我们。" }, { kind: "example", word: "", meaning: "", enExample: "Moreover, you're a social being.", zhExample: "而且，你是个社会人。" }, { kind: "example", word: "", meaning: "", enExample: "Moreover, there was no evidence of adaptability to the noise.", zhExample: "此外，没有证据表明我们对这种噪音有适应性。" }] }, { label: "to make things / matters worse 更糟的是… （有感情色彩）", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "The team has lost the last two games and, to make matters worse, two of its best players are injured.", zhExample: "非谓语动词如果是固定习语，不要考虑主语统一" }, { kind: "example", word: "", meaning: "", enExample: "To make matters worse, the room is rather small, so I have temporarily put my books on the floor.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "During these tests she was able to read a newspaper through an opaque screen and, stranger still, by moving her elbow over a child's game of Lotto she was able to describe the figures and colours printed on it; …", zhExample: "【扩展】stranger still 更奇怪的是" }] }, { label: "unlike 不像；与…不同(dislike 不喜欢)", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Unlike his brother, he is very outgoing.", zhExample: "与他哥哥不同，他很外向。" }, { kind: "example", word: "", meaning: "", enExample: "Unlike most birds, ostriches cannot fly.", zhExample: "与大多数鸟不同，鸵鸟不能飞。" }, { kind: "example", word: "", meaning: "", enExample: "Unlike other cars, this model is electric.", zhExample: "与其他汽车不同，这款车型是电动的。" }] }, { label: "do (no) harm to 对…有(无)害", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "These chemicals do harm to your health.", zhExample: "这些化学物质对你的健康有害。" }, { kind: "example", word: "", meaning: "", enExample: "Noise pollution can do harm to wildlife.", zhExample: "噪音污染会对野生动物有害。" }, { kind: "example", word: "", meaning: "", enExample: "Careless disposal of waste does harm to the environment.", zhExample: "乱扔垃圾对环境有害。" }] }, { label: "never do the least harm to 完全无害（Never + 最高级 = 完全...）", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "I have no idea what to do next. ⇒ I don’t have the foggiest idea what to do next.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "I have no interest in boxing. ⇒ I don’t have the slightest interest in boxing.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "This doesn't bear the slightest resemblance to anything in real life.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "Vaccines never do the least harm to patients.", zhExample: "疫苗对患者完全无害。" }, { kind: "example", word: "", meaning: "", enExample: "These shoes never do the least harm to hardwood floors.", zhExample: "这些鞋子对硬木地板完全无害。" }, { kind: "example", word: "", meaning: "", enExample: "The software never does the least harm to system performance.", zhExample: "该软件对系统性能完全无害。" }] }, { label: "双否=强肯", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "No one can avoid being influenced by advertisements.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "No one knows how long it will last.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "But this does not matter, for, as he has often remarked, one is never too old to learn.", zhExample: "" }, { kind: "synonym", word: "All of us are influenced by …", meaning: "所有人都受到影响", enExample: "All of us are influenced by social media.", zhExample: "我们所有人都受到社交媒体的影响。" }, { kind: "synonym", word: "No one can avoid being influenced by …", meaning: "无人能避免被影响（双重否定，加强语气）", enExample: "No one can avoid being influenced by the environment.", zhExample: "没有人能避免受到环境的影响。" }, { kind: "synonym", word: "All of us admit that …", meaning: "我们都承认", enExample: "All of us admit that technology changes our lives.", zhExample: "我们都承认科技改变了生活。" }, { kind: "synonym", word: "No one can deny that …", meaning: "没有人能否认（双重否定加强语气）", enExample: "No one can deny that education is important.", zhExample: "没有人能否认教育的重要性。" }, { kind: "synonym", word: "All of us are attracted by …", meaning: "我们所有人都被…吸引", enExample: "All of us are attracted by beauty and creativity.", zhExample: "我们都被美和创造力吸引。" }, { kind: "synonym", word: "No one can resist …", meaning: "没有人能抗拒（双重否定，加强语气）", enExample: "No one can resist the charm of freedom.", zhExample: "没有人能抗拒自由的魅力。" }] }] },
{ text: "Spiders are not insects, as many people think, nor even nearly related to them.", translation: "", predicates: ["are", "think", "related"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [{ label: ", as many people think,", description: "as 引导的非限定性定语从句，表正如...(修饰整个主句)" }], expansionNotes: [{ label: "as 正如", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "As a poet points out, life is but a dream.", zhExample: "正如一位诗人指出的那样，人生不过是一场梦。" }, { kind: "example", word: "", meaning: "", enExample: "Children, as is always the case, love their mother.", zhExample: "孩子们通常都爱他们的母亲。" }, { kind: "example", word: "", meaning: "", enExample: "She became angry, as many could see.", zhExample: "她生气了，正如许多人所见。" }] }, { label: "非限定性定语从句 补充说明主句内容", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Things can go wrong on a big scale, as a number of people recently discovered.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "As the Commanding Officer explained later, one half of the station did not know what the other half was doing.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "But this does not matter, for, as he has often remarked, one is never too old to learn.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "As is so often pointed out, knowledge is a two-edged weapon.", zhExample: "正如经常指出的，知识是一把双刃剑。" }, { kind: "example", word: "", meaning: "", enExample: "As has been said above, grammar is not a set of dead rules.", zhExample: "如果as引导的非限定性定语从句没有在句首(位于中间或尾部)指代肯定含义的主句（忽略否定词）" }, { kind: "example", word: "", meaning: "", enExample: "She did not open the box, as her friends feared.", zhExample: "她没有像她朋友担心那样打开盒子 She did not<span style=\"background-color: #ecf0f1;\">, as her friends feared</span>, open the box." }] }, { label: "as VS which 的区别", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "as:", zhExample: "更常用于“众所周知/正如预期/大家都清楚”的背景下，语气强烈" }, { kind: "example", word: "", meaning: "", enExample: "which:", zhExample: "常见于书面语中进行补充、解释、结果说明" }, { kind: "synonym", word: "as", meaning: "引导例句 ① 句首用法", enExample: "As a poet points out, life is but a dream.", zhExample: "正如一位诗人所说，人生不过一场梦。" }, { kind: "synonym", word: "as", meaning: "引导例句 ② 句中插入", enExample: "Children, as is always the case, love their mother.", zhExample: "正如常见，孩子都爱母亲。" }, { kind: "synonym", word: "as", meaning: "引导例句 ③ 句尾说明", enExample: "She became angry, as many could see.", zhExample: "她变得生气，正如许多人所见。" }, { kind: "synonym", word: "which", meaning: "引导例句 ① 补充说明", enExample: "The sun heats the earth, which makes it possible for plants to grow.", zhExample: "太阳加热地球，这使植物得以生长。" }, { kind: "synonym", word: "省略结构：as + be + done “as reported”结构", meaning: "", enExample: "As (is) reported, a foreign delegation will visit.", zhExample: "如报道所说，一个外国代表团将到访。" }, { kind: "synonym", word: "省略结构：which + be “which was at large”结构", meaning: "", enExample: "A puma (which was) at large was caught.", zhExample: "一只在逃的美洲狮被抓住了。" }, { kind: "synonym", word: "用法小结 语义与结构总结", meaning: "", enExample: "as:", zhExample: "更常用于“众所周知/正如预期/大家都清楚”的背景下，语气强烈 which: 常见于书面语中进行补充、解释、结果说明" }] }, { label: "nor 部分倒装", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Cuba cannot be conquered,nor (can she be) dominated.", zhExample: "nor 引导的并列句省略（倒装时be、情态动词放前面）" }, { kind: "example", word: "", meaning: "", enExample: "It tires not, nor does it boast of its power.", zhExample: "它不会疲倦，也不会夸耀自己的力量（不能省略的，因为不一样）。" }, { kind: "example", word: "", meaning: "", enExample: "If we glimpse the unutterable, it is unwise to try to utter it, nor should we seek to invest with significance that which we cannot grasp.", zhExample: "不能省略的倒装（主谓不同）" }] }] },
{ text: "One can tell the difference almost at a glance, for a spider always has eight legs and an insect never more than six.", translation: "", predicates: ["tell", "has"], clauseIntroducers: [], auxiliaries: ["can"], inlineAnnotations: [{ label: "One", description: "人们（One is never too old to learn.）" }, { label: "at a glance", description: "一眼就..." }], expansionNotes: [{ label: "tell the difference = tell sb. / sth. apart 分辨，区别", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "It's hard to tell the identical twins apart.", zhExample: "很难分辨这对双胞胎。" }, { kind: "example", word: "", meaning: "", enExample: "She can tell the difference between genuine and fake jewelry.", zhExample: "她能分辨真假珠宝。" }, { kind: "example", word: "", meaning: "", enExample: "You should learn to tell the difference between good and bad habits.", zhExample: "你应该学会分辨好习惯和坏习惯。" }] }, { label: "省略结构 并列句省略(重复的内容不引起歧义的情况下)", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Paul likes poetry, and Peter (likes) fiction.", zhExample: "Paul喜欢诗歌，Peter喜欢小说。" }, { kind: "example", word: "", meaning: "", enExample: "Paul likes poetry, and I know that Peter likes fiction.", zhExample: "不能省略：因为位置宾语从句内部" }, { kind: "example", word: "", meaning: "", enExample: "He enjoys swimming, and she (enjoys) diving.", zhExample: "他喜欢游泳，她喜欢跳水。" }] }] },
{ text: "How many spiders are engaged in this work on our behalf?", translation: "", predicates: ["are engaged"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [{ label: "on our behalf", description: "为了我们的利益、好处" }], expansionNotes: [{ label: "be engaged in 忙于（做）某事、从事", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "He is engaged in politics / business.", zhExample: "他忙于政治工作、生意。" }, { kind: "example", word: "", meaning: "", enExample: "He is engaged in searching for solutions.", zhExample: "他正忙于寻找解决办法。" }, { kind: "example", word: "", meaning: "", enExample: "Young people are engaged in seeking their identity.", zhExample: "年轻人正忙于寻找自我认同。" }, { kind: "example", word: "", meaning: "", enExample: "Some of the bigger firms are engaged in researches which are of such general and fundamental nature that it is a positive advantage to them not to keep them secret.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "For one thing, being a problem gives you a certain identity, and that is one of the things the young are busily engaged in seeking.", zhExample: "" }] }, { label: "on one’s behalf / on behalf of sb. 为了某人的利益 / 代表某人", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "We are raising a fund on behalf of orphans.", zhExample: "我们正在为孤儿募捐。" }, { kind: "example", word: "", meaning: "", enExample: "I beat you on your behalf.", zhExample: "我是为了你打的他。" }, { kind: "example", word: "", meaning: "", enExample: "He delivered a speech on behalf of the government.", zhExample: "他<strong>代表</strong>政府发表了演讲。" }, { kind: "example", word: "", meaning: "", enExample: "On behalf of the department I would like to thank you all.", zhExample: "我谨<strong>代表</strong>本部门感谢大家。" }, { kind: "synonym", word: "in one’s interest", meaning: "为了某人的利益", enExample: "Everything we did was in your interest.", zhExample: "我们所做的一切都是为了你的利益。" }, { kind: "synonym", word: "in the interest of sb.", meaning: "为了某人的利益", enExample: "This is in the interest of all parties.", zhExample: "这符合各方利益。" }] }] },
{ text: "One authority on spiders made a census of the spiders in a grass field in the south of England, and he estimated that there were more than 2,250,000 in one acre; that is something like 6 million spiders of different kinds on a football pitch.", translation: "", predicates: ["made", "estimated", "were", "is"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [{ label: "on spiders", description: "后置定语(on 某个方面的)" }, { label: "in a grass field", description: "地点状语" }, { label: "in the south of England", description: "后置定义" }, { label: "in one acre", description: "地点状语" }, { label: "something like", description: "大约" }, { label: "on a football pitch", description: "地点状语" }], expansionNotes: [{ label: "on 做后置定语", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Yuan Longping is a leading authority on hybrid rice.", zhExample: "袁隆平是杂交水稻方面的权威。" }, { kind: "example", word: "", meaning: "", enExample: "When he asked if Mr. Lane lived there, the policeman on duty told him that since his defeat, the ex-Prime Minister had gone abroad.", zhExample: "" }] }, { label: "that is (to say) 也就是说；确切地说", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Everybody admires him for his great sense of humour -- everybody, that is, except his six-year-old daughter, Jenny.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "The fare is reduced for children, that is anyone under 15 years old.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "Languages are taught by the direct method, that is to say, without using the student's own language.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "One solution would be to change the shape of the screen, that is, to make it wider.", zhExample: "一种解决方案是改变屏幕的形状，也就是说，把它做得更宽。" }, { kind: "example", word: "", meaning: "", enExample: "I'll meet you in the city, that is, if the trains are running.", zhExample: "我会在市里见你，也就是说，如果火车运行的话。" }, { kind: "example", word: "", meaning: "", enExample: "I loved him — that is, I thought I did.", zhExample: "我爱他——也就是说，我以为我爱他。" }] }, { label: "authority 权威；当局", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "When the fire had at last been put out, the forest authorities ordered several tons of a special type of grass seed which would grow quickly.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "The French authorities had the plane packaged and moved in parts back to France.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "There he was picked up by a policeman and sent back to England by the local authorities.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "It is all too easy to blame the railway authorities when something does go wrong.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "The authorities ordered the evacuation.", zhExample: "当局下令疏散。" }, { kind: "example", word: "", meaning: "", enExample: "The local authorities have imposed a curfew.", zhExample: "地方当局实行了宵禁。" }] }, { label: "something like 大约，大概", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Today we can see even his famous clash with the Inquisition in something like its proper perspective.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "The price is something like $300.", zhExample: "价格大约是300美元。" }, { kind: "example", word: "", meaning: "", enExample: "They reached something like an agreement.", zhExample: "他们达成了某种形式的协议。" }, { kind: "example", word: "", meaning: "", enExample: "It looked something like a bear.", zhExample: "它看起来像是一只熊。" }, { kind: "synonym", word: "some +", meaning: "数字 大约、大概（口语中常见）", enExample: "There were some 200 people at the concert.", zhExample: "音乐会上大约有 200 人。" }, { kind: "synonym", word: "something in the region of +", meaning: "数字 大约、差不多（书面语）", enExample: "He earns something in the region of $80,000 a year.", zhExample: "他年收入大约八万美元。" }, { kind: "synonym", word: "somewhere in the region of +", meaning: "数字 接近、将近（书面语/正式）", enExample: "The damage is somewhere in the region of £1 million.", zhExample: "损失大概在一百万英镑左右。" }, { kind: "synonym", word: "football pitch", meaning: "足球场", enExample: "They trained hard on the football pitch.", zhExample: "他们在足球场上刻苦训练。" }, { kind: "synonym", word: "boxing ring", meaning: "拳击场", enExample: "The champion entered the boxing ring to cheers.", zhExample: "冠军走进拳击场，观众欢呼。" }, { kind: "synonym", word: "skating rink", meaning: "滑冰场", enExample: "They skated all afternoon on the skating rink.", zhExample: "他们整个下午都在滑冰场滑冰。" }, { kind: "synonym", word: "baseball diamond / court", meaning: "棒球场", enExample: "Same thinghappened on the baseball diamond / court.", zhExample: "垒球场上也发生过同样的事。" }, { kind: "synonym", word: "golf course / links", meaning: "高尔夫球场", enExample: "The hotel also boasts two swimming pools and a golf course / links.", zhExample: "那家宾馆还拥有两个游泳池和一个高尔夫球场。" }, { kind: "synonym", word: "bowling alley", meaning: "保龄球馆", enExample: "There are restaurants, a library, a bowling alley.", zhExample: "这儿有餐厅，一间图书馆，一座保龄球场。" }] }] },
{ text: "Spiders are busy for at least half the year in killing insects.", translation: "", predicates: ["are"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [{ label: "for at least half the year", description: "时间状语" }], expansionNotes: [{ label: "be busy (in) doing sth. 忙于做某事", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Her eyes were fixed on her plate and in a short time, she was busy eating.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "Meanwhile, my tongue was busy searching out the hole where the tooth had been.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "In a short time, I was busy mixing butter and flour, and my hands were soon covered with sticky pastry.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "She is always busy preparing dinner.", zhExample: "她总是忙着准备晚餐。" }, { kind: "example", word: "", meaning: "", enExample: "The workers are busy repairing the road.", zhExample: "工人们正忙着修路。" }, { kind: "example", word: "", meaning: "", enExample: "He was busy writing a report when I called.", zhExample: "我打电话时，他正忙着写报告。" }] }] },
{ text: "It is impossible to make more than the wildest guess at how many they kill, but they are hungry creatures, not content with only three meals a day.", translation: "", predicates: ["is", "kill", "are"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [{ label: "It", description: "形式主语" }, { label: "wildest", description: "unreasonable; without careful thought 胡乱的、离奇的" }, { label: "content", description: "做表语形容词，前面的being被省略了。" }, { label: "three meals a day", description: "一日三餐" }], expansionNotes: [{ label: "guess 猜测（做名词、动词）", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "Guess what? I just won the lottery!", zhExample: "猜猜怎么了？我刚中彩票了！" }, { kind: "example", word: "", meaning: "", enExample: "Guess what? John got engaged to Susan!", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "Make a guess at who’s knocking the door.", zhExample: "猜猜是谁在敲门（guess做名词）。" }, { kind: "example", word: "", meaning: "", enExample: "Guess who I ran into yesterday?", zhExample: "猜猜我昨天遇见了谁？" }] }, { label: "wild 离奇的；不切实际的", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "She had a wild imagination.", zhExample: "她有丰富的想象力。" }, { kind: "example", word: "", meaning: "", enExample: "It’s just a wild guess.", zhExample: "这只是胡乱猜测。" }, { kind: "example", word: "", meaning: "", enExample: "He made some wild accusations.", zhExample: "他做出了一些毫无根据的指控。" }, { kind: "example", word: "", meaning: "", enExample: "The banks were in crisis due to wild speculation by the rich.", zhExample: "这些银行由于富人们的野蛮投机行为而陷入危机。" }, { kind: "example", word: "", meaning: "", enExample: "Working with you is beyond my wildest dreams.", zhExample: "做梦也想不到..." }] }, { label: "more than + n. 超过；不仅仅...", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "These days, it is differences in national regulations, far more than tariffs, that put sand in the wheels of trade between rich countries.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "The open sea was deep and mysterious, and anyone who gave more than a passing thought to the bottom confines of the oceans probably assumed that the sea bed was flat.", zhExample: "" }, { kind: "example", word: "", meaning: "", enExample: "This is more than a book — it’s a philosophy.", zhExample: "这不仅仅是一本书，而是一种哲学。" }, { kind: "example", word: "", meaning: "", enExample: "Peace is more than the absence of war.", zhExample: "和平<strong>不仅仅</strong>是没有战争。" }, { kind: "example", word: "", meaning: "", enExample: "The loss is more than we expected.", zhExample: "损失超出了我们的预期。" }] }, { label: "be not content with 不满足于", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "She is not content with being an average student.", zhExample: "她不满足于做一个普通的学生。" }, { kind: "example", word: "", meaning: "", enExample: "They are not content with local success — they want to go global.", zhExample: "他们不满足于地方上的成功，想要走向全球。" }, { kind: "example", word: "", meaning: "", enExample: "The company is not content with its current market share.", zhExample: "公司对现有市场份额不满意。" }] }] },
{ text: "It has been estimated that the weight of all the insects destroyed by spiders in Britain in one year would be greater than the total weight of all the human beings in the country.", translation: "", predicates: ["has been estimated", "be"], clauseIntroducers: [], auxiliaries: ["would"], inlineAnnotations: [{ label: "It has been estimated", description: "据估计" }, { label: "the weight of all the insects", description: "所有昆虫的重量" }, { label: "in Britain", description: "地点状语" }, { label: "in one year", description: "时间状语" }, { label: "the total weight of all the human beings", description: "所有人类的总体重" }, { label: "in the country", description: "地点状语" }], expansionNotes: [{ label: "be estimated (据)估计", description: "", examples: [{ kind: "example", word: "", meaning: "", enExample: "The loss is estimated to reach upwards of 30000 yuan.", zhExample: "据估计损失达30000元以上。" }, { kind: "example", word: "", meaning: "", enExample: "They are estimated to employ around 50, 000 gunmen.", zhExample: "他们估计雇用约50,000名枪手。" }, { kind: "example", word: "", meaning: "", enExample: "The cost to repair it was estimated at $800.", zhExample: "修复的成本估计为800美元。" }, { kind: "example", word: "", meaning: "", enExample: "Adjusted odds ratios were estimated with logistic regression.", zhExample: "用逻辑回归法评估了调整后比率。" }] }, { label: "鼻腔爆破 nasal explosion [t] / [d] + [n]", description: "", examples: [{ kind: "synonym", word: "Britain", meaning: "", enExample: "mutton", zhExample: "" }, { kind: "synonym", word: "mountain", meaning: "", enExample: "didn’t", zhExample: "" }] }] }
      ]
    ],
    otherNotes: [
      { label: "文章押韵", description: "" },
      { label: "Gre写作范文", description: "" },
      { label: "rhyme 尾韵", description: "" },
      { label: "Gre写作范文", description: "" },
      { label: "spare v. 节约，吝惜；饶恕；分出，分让", description: "" },
    ],
  },
  "nce4-l3": {
    paragraphs: [
      [
{ text: "Modern alpinists try to climb mountains by a route which will give them good sport, and the more difficult it is, the more highly it is regarded.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In the pioneering days, however, this was not the case at all.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The early climbers were looking for the easiest way to the top, because the summit was the prize they sought, especially if it had never been attained before.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is true that during their explorations they often faced difficulties and dangers of the most perilous nature, equipped in a manner which would make a modern climber shudder at the thought, but they did not go out of their way to court such excitement.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "They had a single aim, a solitary goal — the top!", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is hard for us to realize nowadays how difficult it was for the pioneers.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Except for one or two places such as Zermatt and Chamonix, which had rapidly become popular, Alpine villages tended to be impoverished settlements cut off from civilization by the high mountains.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Such inns as there were generally dirty and flea-ridden; the food simply local cheese accompanied by bread often twelve months old, all washed down with coarse wine.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Often a valley boasted no inn at all, and climbers found shelter wherever they could — sometimes with the local priest who was usually as poor as his parishioners, sometimes with shepherds or cheese-makers.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Invariably the background was the same: dirt and poverty, and very uncomfortable.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "For men accustomed to eating seven-course dinners and sleeping between fine linen sheets at home, the change to the Alps must have been very hard indeed.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l4": {
    paragraphs: [
      [
{ text: "Several cases have been reported in Russia recently of people who can read and detect colours with their fingers, and even see through solid doors and walls.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "One case concerns an eleven-year-old schoolgirl, Vera Petrova, who has normal vision but who can also perceive things with different parts of her skin, and through solid walls.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This ability was first noticed by her father.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "One day she came into his office and happened to put her hands on the door of a locked safe.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Suddenly she asked her father why he kept so many old newspapers locked away there, and even described the way they were done up in bundles.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Vera's curious talent was brought to the notice of a scientific research institute in the town of Ulyanovsk, near where she lives, and in April she was given a series of tests by a special commission of the Ministry of Health of the Russian Federal Republic.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "During these tests she was able to read a newspaper through an opaque screen and, stranger still, by moving her elbow over a child's game of Lotto she was able to describe the figures and colours printed on it; and, in another instance, wearing stockings and slippers, to make out with her foot the outlines and colours of a picture hidden under a carpet.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Other experiments showed that her knees and shoulders had a similar sensitivity.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "During all these tests Vera was blindfold; and, indeed, except when blindfold she lacked the ability to perceive things with her skin.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It was also found that although she could perceive things with her fingers this ability ceased the moment her hands were wet.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Another Russian girl, Rosa Kuleshova, reads blindfold.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l5": {
    paragraphs: [
      [
{ text: "People are always talking about 'the problem of youth'.", translation: "", predicates: ["are talking"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [{ label: "about 'the problem of youth'", description: "介词 + 名词 → 作状语" }] },
{ text: "If there is one—which I take leave to doubt—then it is older people who create it, not the young themselves.", translation: "", predicates: ["is", "take", "create"], clauseIntroducers: ["If", "which", "then"], auxiliaries: [], inlineAnnotations: [] },
{ text: "Let us get down to fundamentals and agree that the young are after all human beings—people just like their elders.", translation: "", predicates: ["get", "agree", "are"], clauseIntroducers: ["that"], auxiliaries: [], inlineAnnotations: [{ label: "get down to", description: "着手处理" }, { label: "fundamentals", description: "基本原则" }] },
{ text: "There is only one difference between an old man and a young one: the young man has a glorious future before him and the old one has a splendid future behind him: and maybe that is where the rub is.", translation: "", predicates: ["is", "has", "has", "is"], clauseIntroducers: ["where"], auxiliaries: [], inlineAnnotations: [{ label: "glorious", description: "辉煌的" }, { label: "splendid", description: "灿烂的" }, { label: "the rub", description: "症结所在" }] },
{ text: "When I was a teenager, I felt that I was just young and uncertain—that I was a new boy in a huge school, and I would have been very pleased to be regarded as something so interesting as a problem.", translation: "", predicates: ["felt", "was", "was", "would have been very pleased"], clauseIntroducers: ["When", "that", "that"], auxiliaries: [], inlineAnnotations: [{ label: "would have been very pleased", description: "过去一定会高兴" }] },
{ text: "For one thing, being a problem gives you a certain identity, and that is one of the things the young are busily engaged in seeking.", translation: "", predicates: ["gives", "are engaged"], clauseIntroducers: ["that"], auxiliaries: [], inlineAnnotations: [] },
{ text: "I find young people exciting.", translation: "", predicates: ["find"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "They have an air of freedom, and they have not a dreary commitment to mean ambitions or love of comfort.", translation: "", predicates: ["have", "have"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [{ label: "dreary", description: "沉闷的" }] },
{ text: "They are not anxious social climbers, and they have no devotion to material things.", translation: "", predicates: ["are", "have"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "All this seems to me to link them with life, and the origins of things.", translation: "", predicates: ["seems"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It's as if they were in some sense cosmic beings in violent and lovely contrast with us suburban creatures.", translation: "", predicates: ["were"], clauseIntroducers: ["as if"], auxiliaries: [], inlineAnnotations: [{ label: "cosmic", description: "宇宙的" }, { label: "suburban", description: "市郊的" }] },
{ text: "All that is in my mind when I meet a young person.", translation: "", predicates: ["is", "meet"], clauseIntroducers: ["when"], auxiliaries: [], inlineAnnotations: [] },
{ text: "He may be conceited, ill-mannered, presumptuous or fatuous, but I do not turn for protection to dreary clichés about respect for elders—as if mere age were a reason for respect.", translation: "", predicates: ["may be", "do turn"], clauseIntroducers: ["but"], auxiliaries: [], inlineAnnotations: [] },
{ text: "I accept that we are equals, and I will argue with him, as an equal, if I think he is wrong.", translation: "", predicates: ["accept", "are", "will argue", "think", "is"], clauseIntroducers: ["that", "if"], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l6": {
    paragraphs: [
      [
{ text: "I am always amazed when I hear people saying that sport creates goodwill between the nations, and that if only the common peoples of the world could meet one another at football or cricket, they would have no inclination to meet on the battlefield.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Even if one didn't know from concrete examples (the 1936 Olympic Games, for instance) that international sporting contests lead to orgies of hatred, one could deduce it from general principles.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Nearly all the sports practised nowadays are competitive.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "You play to win, and the game has little meaning unless you do your utmost to win.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "On the village green, where you pick up sides and no feeling of local patriotism is involved, it is possible to play simply for the fun and exercise: but as soon as the question of prestige arises, as soon as you feel that you and some larger unit will be disgraced if you lose, the most savage combative instincts are aroused.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Anyone who has played even in a school football match knows this.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "At the international level, sport is frankly mimic warfare.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But the significant thing is not the behaviour of the players but the attitude of the spectators: and, behind the spectators, (the attitude) of the nations.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But the significant thing is not the behaviour of the players but the attitude of the spectators: and, behind the spectators, of the nations who work themselves into furies over these absurd contests, and seriously believe — at any rate for short periods — that running, jumping and kicking a ball are tests of national virtue.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l7": {
    paragraphs: [
      [
{ text: "Not all sounds made by animals serve as language, and we have only to turn to that extraordinary discovery of echo-location in bats to see a case in which the voice plays a strictly utilitarian role.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "To get a full appreciation of what this means we must turn first to some recent human inventions.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Everyone knows that if he shouts in the vicinity of a wall or a mountainside, an echo will come back.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The further off this solid obstruction, the longer time will elapse for the return of the echo.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A sound made by tapping on the hull of a ship will be reflected from the sea bottom, and by measuring the time interval between the taps and the receipt of the echoes, the depth of the sea at that point can be calculated.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "So was born the echo-sounding apparatus, now in general use in ships.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Every solid object will reflect a sound, varying according to the size and nature of the object.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A shoal of fish will do this.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "So it is a comparatively simple step from locating the sea bottom to locating a shoal of fish.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "With experience, and with improved apparatus, it is now possible not only to locate a shoal but to tell if it is herring, cod, or other well-known fish, by the pattern of its echo.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It has been found that certain bats emit squeaks and by receiving the echoes, they can locate and steer clear of obstacles — or locate flying insects on which they feed.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This echo-location in bats is often compared with radar, the principle of which is similar.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l8": {
    paragraphs: [
      [
{ text: "Chickens slaughtered in the United States, claim officials in Brussels, are not fit to grace European tables.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "No, say the Americans: our fowl are fine, we simply clean them in a different way.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "These days, it is differences in national regulations, far more than tariffs, that put sand in the wheels of trade between rich countries.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is not just farmers who are complaining.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "An electric razor that meets the European Union's safety standards must be approved by American testers before it can be sold in the United States, and an American-made dialysis machine needs the EU's okay before it hits the market in Europe.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "As it happens, a razor that is safe in Europe is unlikely to electrocute Americans.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "So, ask businesses on both sides of the Atlantic, why have two lots of tests where one would do?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Politicians agree, in principle, so America and the EU have been trying to reach a deal which would eliminate the need to double-test many products.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "They hope to finish in time for a trade summit between America and the EU on May 28th.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Although negotiators are optimistic, the details are complex enough that they may be hard-pressed to get a deal at all.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Why?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "One difficulty is to construct the agreements.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The Americans would happily reach one accord on standards for medical devices and then hammer out different pacts covering, say, electronic goods and drug manufacturing.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The EU — following fine continental traditions — wants agreement on general principles, which could be applied to many types of products and perhaps extended to other countries.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l9": {
    paragraphs: [
      [
{ text: "Alfred the Great acted as his own spy, visiting Danish camps disguised as a minstrel.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In those days wandering minstrels were welcome everywhere.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "They were not fighting men, and their harp was their passport.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Alfred had learned many of their ballads in his youth, and could vary his programme with acrobatic tricks and simple conjuring.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "While Alfred's little army slowly began to gather at Athelney, the king himself set out to penetrate the camp of Guthrum, the commander of the Danish invaders.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "These had settled down for the winter at Chippenham: thither Alfred went.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He noticed at once that discipline was slack: the Danes had the self-confidence of conquerors, and their security precautions were casual.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "They lived well, on the proceeds of raids on neighbouring regions.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "There they collected women as well as food and drink, and a life of ease had made them soft.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Alfred stayed in the camp a week before he returned to Athelney.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The force there assembled was trivial compared with the Danish horde.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But Alfred had deduced that the Danes were no longer fit for prolonged battle: and that their commissariat had no organization, but depended on irregular raids.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "So, faced with the Danish advance, Alfred did not risk open battle but harried the enemy.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He was constantly on the move, drawing the Danes after him.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "His patrols halted the raiding parties: hunger assailed the Danish army.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Now Alfred began a long series of skirmishes — and within a month the Danes had surrendered.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The episode could reasonably serve as a unique epic of royal espionage!", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l10": {
    paragraphs: [
      [
{ text: "Technology trends may push Silicon Valley back to the future.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Carver Mead, a pioneer in integrated circuits and a professor of computer science at the California Institute of Technology, notes there are now work-stations that enable engineers to design, test and produce chips right on their desks, much the way an editor creates a newsletter on a Macintosh.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "As the time and cost of making a chip drop to a few days and a few hundred dollars, engineers may soon be free to let their imaginations soar without being penalized by expensive failures.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Mead predicts that inventors will be able to perfect powerful customized chips over a weekend at the office — spawning a new generation of garage start-ups and giving the U.S. a jump on its foreign rivals in getting new products to market fast.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "'We've got more garages with smart people,' Mead observes.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "'We really thrive on anarchy.'", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "And on Asians.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Already, orientals and Asian Americans constitute the majority of the engineering staffs at many Valley firms.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "And Chinese, Korean, Filipino and Indian engineers are graduating in droves from California's colleges.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "As the heads of next-generation start-ups, these Asian innovators can draw on customs and languages to forge tighter links with crucial Pacific Rim markets.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "For instance, Alex Au, a Stanford Ph.D. from Hong Kong, has set up a Taiwan factory to challenge Japan's near lock on the memory-chip market.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "India-born N.Damodar Reddy's tiny California company reopened an AT&T chip plant in Kansas City last spring with financing from the state of Missouri.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Before it becomes a retirement village, Silicon Valley may prove a classroom for building a global business.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l11": {
    paragraphs: [
      [
{ text: "Some old people are oppressed by the fear of death.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In the young there is a justification for this feeling.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Young men who have reason to fear that they will be killed in battle may justifiably feel bitter in the thought that they have been cheated of the best things that life has to offer.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But in an old man who has known human joys and sorrows, and has achieved whatever work it was in him to do, the fear of death is somewhat abject and ignoble.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The best way to overcome it — so at least it seems to me — is to make your interests gradually wider and more impersonal, until bit by bit the walls of the ego recede, and your life becomes increasingly merged in the universal life.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "An individual human existence should be like a river — small at first, narrowly contained within its banks, and rushing passionately past boulders and over waterfalls.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Gradually the river grows wider, the banks recede, the waters flow more quietly, and in the end, without any visible break, they become merged in the sea, and painlessly lose their individual being.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The man who, in old age, can see his life in this way, will not suffer from the fear of death, since the things he cares for will continue.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "And if, with the decay of vitality, weariness increases, the thought of rest will be not unwelcome.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "I should wish to die while still at work, knowing that others will carry on what I can no longer do, and content in the thought that what was possible has been done.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l12": {
    paragraphs: [
      [
{ text: "When anyone opens a current account at a bank, he is lending the bank money, repayment of which he may demand at any time, either in cash or by drawing a cheque in favour of another person.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Primarily, the banker-customer relationship is that of debtor and creditor — who is which depending on whether the customer's account is in credit or is overdrawn.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But, in addition to that basically simple concept, the bank and its customer owe a large number of obligations to one another.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Many of these obligations can give rise to problems and complications but a bank customer, unlike, say, a buyer of goods, cannot complain that the law is loaded against him.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The bank must obey its customer's instructions, and not those of anyone else.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "When, for example, a customer first opens an account, he instructs the bank to debit his account only in respect of cheques drawn by himself.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He gives the bank specimens of his signature, and there is a very firm rule that the bank has no right or authority to pay out a customer's money on a cheque on which its customer's signature has been forged.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It makes no difference that the forgery may have been a very skillful one: the bank must recognize its customer's signature.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "For this reason there is no risk to the customer in the practice, adopted by banks, of printing the customer's name on his cheques.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If this facilitates forgery, it is the bank which will lose, not the customer.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l13": {
    paragraphs: [
      [
{ text: "The deepest holes of all are made for oil, and they go down to as much as 25,000 feet.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But we do not need to send men down to get the oil out, as we must with other mineral deposits.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The holes are only borings, less than a foot in diameter.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "My particular experience is largely in oil, and the search for oil has done more to improve deep drilling than any other mining activity.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "When it has been decided where we are going to drill, we put up at the surface an oil derrick.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It has to be tall because it is like a giant block and tackle, and we have to lower into the ground and haul out of the ground great lengths of drill pipe which are rotated by an engine at the top and are fitted with a cutting bit at the bottom.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The geologist needs to know what rocks the drill has reached, so every so often a sample is obtained with a coring bit.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It cuts a clean cylinder of rock, from which can be seen the strata the drill has been cutting through.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Once we get down to the oil, it usually flows to the surface because great pressure, either from gas or water, is pushing it.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This pressure must be under control, and we control it by means of the mud which we circulate down the drill pipe.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "We endeavour to avoid the old, romantic idea of a gusher, which wastes oil and gas.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "We want it to stay down the hole until we can lead it off in a controlled manner.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l14": {
    paragraphs: [
      [
{ text: "Beyond two or three days, the world's best weather forecasts are speculative, and beyond six or seven they are worthless.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The Butterfly Effect is the reason.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "For small pieces of weather — and to a global forecaster, small can mean thunderstorms and blizzards — any prediction deteriorates rapidly.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Errors and uncertainties multiply, cascading upward through a chain of turbulent features, from dust devils and squalls up to continent-size eddies that only satellites can see.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The modern weather models work with a grid of points of the order of 60 miles apart, and even so, some starting data has to be guessed, since ground stations and satellites cannot see everywhere.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But suppose the earth could be covered with sensors spaced one foot apart, rising at one-foot intervals all the way to the top of the atmosphere.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Suppose every sensor gives perfectly accurate readings of temperature, pressure, humidity, and any other quantity a meteorologist would want.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Precisely at noon an infinitely powerful computer takes all the data and calculates what will happen at each point at 12.01, then 12.02, then 12.03...", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The computer will still be unable to predict whether Princeton, New Jersey, will have sun or rain on a day one month away.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "At noon the spaces between the sensors will hide fluctuations that the computer will not know about, tiny deviations from the average.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "By 12.01, those fluctuations will already have created small errors one foot away.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Soon the errors will have multiplied to the ten-foot scale, and so on up to the size of the globe.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l15": {
    paragraphs: [
      [
{ text: "Two factors weigh heavily against the effectiveness of scientific research in industry.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "One is the general atmosphere of secrecy in which it is carried out, the other the lack of freedom of the individual research worker.In so far as any inquiry is a secret one, it naturally limits all those engaged in carrying it out from effective contact with their fellow scientists either in other countries or in universities, or even, often enough, in other departments of the same firm.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In so far as any inquiry is a secret one, it naturally limits [all those engaged in carrying it out] from effective [contact with their fellow scientists] either in other countries or in universities, or even, often enough, in other departments of the same firm.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The degree of secrecy naturally varies considerably.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Some of the bigger firms are engaged in researches which are of such general and fundamental nature that it is a positive advantage to them not to keep them secret.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Yet a great many processes depending on such research are sought for with complete secrecy until the stage at which patents can be taken out.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Even more processes are never patented at all but kept as secret processes.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This applies particularly to chemical industries, where chance discoveries play a much larger part than they do in physical and mechanical industries.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Sometimes the secrecy goes to such an extent that the whole nature of the research cannot be mentioned.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Many firms, for instance, have great difficulty in obtaining technical or scientific books from libraries because they are unwilling to have their names entered as having taken out such and such a book, for fear the agents of other firms should be able to trace the kind of research they are likely to be undertaking.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l16": {
    paragraphs: [
      [
{ text: "In the organisation of industrial life the influence of the factory upon the physiological and mental state of the workers has been completely neglected.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Modern industry is based on the conception of the maximum production at lowest cost, in order that an individual or a group of individuals may earn as much money as possible.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It has expanded without any idea of the true nature of the human beings who run the machines, and without giving any consideration to the effects produced on the individuals and on their descendants by the artificial mode of existence imposed by the factory.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The great cities have been built with no regard for us.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The shape and dimensions of the skyscrapers depend entirely on the necessityn.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The shape and dimensions of the skyscrapers depend entirely on the necessity of obtaining the maximum income per square foot of ground, and of offering to the tenants offices and apartments that please them.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This caused the construction of gigantic buildings where too large masses of human beings are crowded together.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Civilised men like such a way of living.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "While they enjoy the comfort and banal luxury of their dwelling, they do not realise that they are deprived of the necessities of life.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The modern city consists of monstrous edifices and of dark, narrow streets full of petrol fumes and toxic gases, torn by the noise of the taxicabs, lorries and buses, and thronged ceaselessly by great crowds.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Obviously, it has not been planned for the good of its inhabitants.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l17": {
    paragraphs: [
      [
{ text: "In the early days of the settlement of Australia,enterprising settlers unwisely introduced the European rabbit.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This rabbit had no natural enemies in the Antipodes, so that it multiplied with that promiscuous abandon characteristic of rabbits.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It overran a whole continent.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It caused devastation by burrowing and by devouring the herbage which might have maintained millions of sheep and cattle.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Scientists discovered that this particular variety of rabbit (and apparently no other animal) was susceptible to a fatal virus disease, myxomatosis.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "By infecting animals and letting them loose in the burrows, local epidemics of this disease could be created.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Later it was found that there was a type of mosquito which acted as the carrier of this disease and passed it on to the rabbits.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "So while the rest of the world was trying to get rid of mosquitoes, Australia was encouraging this one.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It effectively spread the disease all over the continent and drastically reduced the rabbit population.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It later became apparent that rabbits were developing a degree of resistance to this disease, so that the rabbit population was unlikely to be completely exterminated.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "There were hopes, however, that the problem of the rabbit would become manageable.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Ironically, Europe, which had bequeathed the rabbit as a pest to Australia acquired this man-made disease as a pestilence.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A French physician decided to get rid of the wild rabbits on his own estate and introduced myxomatosis.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It did not, however, remain within the confines of his estate.It spread through France where wild rabbits are not generally regarded as a pest but as a sport and a useful food supply, and it spread to Britain where wild rabbits are regarded as a pest but where domesticated rabbits, equally susceptible to the disease, are the basis of a profitable fur industry.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The question became one of whether Man could control the disease he had invented.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l18": {
    paragraphs: [
      [
{ text: "There has long been a superstition among mariners that porpoises will save drowning men by pushing them to the surface, or protect them from sharks by surrounding them in defensive formation.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Marine Studio biologists have pointed out that, however intelligent they may be, it is probably a mistake to credit dolphins with any motive of lifesaving.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "On the occasions when they have pushed to shore an unconscious human being they have much more likely done it out of curiosity or for sport, as in riding the bow waves of a ship.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In 1928 some porpoises were photographed working like beavers to push ashore a waterlogged mattress.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If, as has been reported, they have protected humans from sharks, it may have been because curiosity attracted them and because the scent of a possible meal attracted the sharks.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Porpoises and sharks are natural enemies.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is possible that upon such an occasion a battle ensued, with the sharks being driven away or killed.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Whether it be bird, fish or beast, the porpoise is intrigued with anything that is alive.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "They are constantly after the turtles, who peacefully submit to all sorts of indignities.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "One young calf especially enjoyed raising a turtle to the surface with his snout and then shoving him across the tank like an aquaplane.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Almost any day a young porpoise may be seen trying to turn a 300-pound sea turtle over by sticking his snout under the edge of his shell and pushing up for dear life.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This is not easy, and may require two porpoises working together.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In another game, as the turtle swims across the oceanarium, the first porpoise swoops down from above and butts his shell with his belly.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This knocks the turtle down several feet.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He no sooner recovers his equilibrium than the next porpoise comes along and hits him another crack.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Eventually the turtle has been butted all the way down to the floor of the tank.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He is now satisfied merely to try to stand up, but as soon as he does so a porpoise knocks him flat.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The turtle at last gives up by pulling his feet under his shell and the game is over.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l19": {
    paragraphs: [
      [
{ text: "It is fairly clear that the sleeping period must have some function, and because there is so much of it the function would seem to be important.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Speculations about its nature have been going on for literally thousands of years, and one odd finding that makes the problem puzzling is that it looks very much as if sleeping is not simply a matter of giving the body a rest.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "'Rest', in terms of muscle relaxation and so on, can be achieved by a brief period of lying, or even sitting down.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The body's tissues are self-repairing and self-restoring to a degree, and function best when more or less continuously active.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In fact, a basic amount of movement occurs during sleep which is specifically concerned with preventing muscle inactivity.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If it is not a question of resting the body, then perhaps it is the brain that needs resting?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This might be a plausible hypothesis were it not for two factors.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "First, the electroencephalograph (which is simply a device for recording the electrical activity of the brain by attaching electrodes to the scalp) shows that while there is a change in the pattern of activity during sleep, there is no evidence that the total amount of activity is any less.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The second is more interesting, and more fundamental.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Some years ago, an American psychiatrist published a paper in which he reported the activity of the eyes during sleep.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He showed that the average individual's sleep cycle is punctuated with peculiar bursts of eye-movements, some drifting and slow, others jerky and rapid.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "People woken during these periods of eye-movements generally reported that they had been dreaming.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "When woken at other times they reported no dreams.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If one group of people were disturbed from their eye-movement sleep for several nights on end, and another group were disturbed for an equal period of time but when they were not exhibiting eye-movements, the first group began to show some personality disorders while the others seemed more or less unaffected.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The implications of all this are that it is not the disturbance of sleep that matters, but the disturbance of dreaming.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l20": {
    paragraphs: [
      [
{ text: "How it came about that snakes manufactured poison is a mystery.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Over the periods their saliva, a mild, digestive juice like our own, was converted into a poison that defies analysis even today.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It was not forced upon them by the survival competition; they could have caught and lived on prey without using poison, just as the thousands of non-poisonous snakes still do.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Poison to a snake is merely a luxury; it enables it to get its food with very little effort, no more effort than one bite.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "And why only snakes?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Cats, for instance, would be greatly helped; no running fights with large, fierce rats or tussles with grown rabbits — just a bite and no more effort needed.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In fact, it would be an assistance to all carnivores though it would be a two-edged weapon when they fought each other.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But, of the vertebrates, unpredictable Nature selected only snakes (and one lizard).", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "One wonders also why Nature, with some snakes, concocted poison of such extreme potency.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In the conversion of saliva into poison, one might suppose that a fixed process took place.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It did not; some snakes manufacture a poison different in every respect from that of others, as different as arsenic is from strychnine, and having different effects.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "One poison acts on the nerves, the other on the blood.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The makers of the nerve poison include the mambas and the cobras and their venom is called neurotoxic.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Vipers (adders) and rattlesnakes manufacture the blood poison, which is known as haemolytic.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Both poisons are unpleasant, but by far the more unpleasant is the blood poison.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is said that the nerve poison is the more primitive of the two, that the blood poison is, so to speak, a newer product from an improved formula.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Be that as it may, the nerve poison does its business with man far more quickly than the blood poison.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This, however, means nothing.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Snakes did not acquire their poison for use against man but for use against prey such as rats and mice, and the effects on these of viperine poison is almost immediate.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l21": {
    paragraphs: [
      [
{ text: "William S. Hart was, perhaps, the greatest of all Western stars, for unlike Gary Cooper and John Wayne he appeared in nothing but Westerns.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "From 1914 to 1924 he was supreme and unchallenged.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It was Hart who created the basic formula of the Western film, and devised the protagonist he played in every film he made, the good-bad man, the accidental-noble outlaw, or the honest-but-framed cowboy, or the sheriff made suspect by vicious gossip; in short, the individual in conflict with himself and his frontier environment.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Unlike most of his contemporaries in Hollywood, Hart actually knew something of the old West.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He had lived in it as a child when it was already disappearing, and his hero was firmly rooted in his memories and experiences, and in both the history and the mythology of the vanished frontier.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "And although no period or place in American history has been more absurdly romanticized, myth and reality did join hands in at least one arena, the conflict between the individual and encroaching civilization.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Men accustomed to struggling for survival against the elements and Indians were bewildered by politicians, bankers and businessmen, and unhorsed by fences, laws and alien taboos.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Hart's good-bad man was always an outsider, always one of the disinherited, and if he found it necessary to shoot a sheriff or rob a bank along the way, his early audiences found it easy to understand and forgive, especially when it was Hart who, in the end, overcame the attacking Indians.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Audiences in the second decade of the twentieth century found it pleasant to escape to a time when life, though hard, was relatively simple.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "We still do; living in a world in which undeclared aggression, war, hypocrisy, chicanery, anarchy and impending immolation are part of our daily lives, we all want a code to live by.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l22": {
    paragraphs: [
      [
{ text: "Why does the idea of progress loom so large in the modern world?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Surely because progress of a particular kind is actually taking place around us and is becoming more and more manifest.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Although mankind has undergone no general improvement in intelligence or morality, it has made extraordinary progress in the accumulation of knowledge.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Knowledge began to increase as soon as the thoughts of one individual could be communicated to another by means of speech.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "With the invention of writing, a great advance was made, for knowledge could then be not only communicated but also stored.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Libraries made education possible, and education in its turn added to libraries: the growth of knowledge followed a kind of compound interest law, which was greatly enhanced by the invention of printing.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "All this was comparatively slow until, with the coming of science, the tempo was suddenly raised.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Then knowledge began to be accumulated according to a systematic plan.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The trickle became a stream; the stream has now become a torrent.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Moreover, as soon as new knowledge is acquired, it is now turned to practical account.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "What is called 'modern civilization' is not the result of a balanced development of all man's nature, but of accumulated knowledge applied to practical life.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The problem now facing humanity is: What is going to be done with all this knowledge?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "As is so often pointed out, knowledge is a two-edged weapon which can be used equally for good or evil.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is now being used indifferently for both.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Could any spectacle, for instance, be more grimly whimsical than that of gunners using science to shatter men's bodies while, close at hand, surgeons use it to restore them?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "We have to ask ourselves very seriously what will happen if this twofold use of knowledge, with its ever-increasing power, continues.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l23": {
    paragraphs: [
      [
{ text: "No two sorts of birds practise quite the same sort of flight; the varieties are infinite; but two classes may be roughly seen.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Any ship that crosses the Pacific is accompanied for many days by the smaller albatross, which may keep company with the vessel for an hour without visible or more than occasional movement of wing.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The currents of air that the walls of the ship direct upwards, as well as in the line of its course, are enough to give the great bird with its immense wings sufficient sustenance and progress.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The albatross is the king of the gliders, the class of fliers which harness the air to their purpose, but must yield to its opposition.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In the contrary school, the duck is supreme.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It comes nearer to the engines with which man has 'conquered' the air, as he boasts.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Duck, and like them the pigeons, are endowed with steel-like muscles, that are a good part of the weight of the bird, and these will ply the short wings with such irresistible power that they can bore for long distances through an opposing gale before exhaustion follows.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Their humbler followers, such as partridges, have a like power of strong propulsion, but soon tire.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "You may pick them up in utter exhaustion, if wind over the sea has driven them to a long journey.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The swallow shares the virtues of both schools in highest measure.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It tires not, nor does it boast of its power; but belongs to the air,travelling it may be 6,000 miles to and from its northern nesting home, feeding its flown young as it flies, and slipping through a medium that seems to help its passage even when the wind is adverse.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Such birds do us good, though we no longer take omens from their flight on this side and that; and even the most superstitious villagers no longer take off their hats to the magpie and wish it good-morning.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l24": {
    paragraphs: [
      [
{ text: "A young man sees a sunset and, unable to understand or to express the emotion that it rouses in him, concludes that it must be the gateway to a world that lies beyond.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is difficult for any of us in moments of intense aesthetic experience to resist the suggestion that we are catching a glimpse of a light that shines down to us from a different realm of existence, different and, because the experience is intensely moving, in some way higher.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "And, though the gleams blind and dazzle, yet do they convey a hint of beauty and serenity greater than we have known or imagined.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Greater too than we can describe; for language, which was invented to convey the meanings of this world, cannot readily be fitted to the uses of another.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In some moods, Nature shares it.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "There is no sky in June so blue that it does not point forward to a bluer, no sunset so beautiful that it does not waken the vision of a greater beauty, a vision which passes before it is fully glimpsed, and in passing leaves an indefinable longing and regret.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But, if this world is not merely a bad joke, life a vulgar flare amid the cool radiance of the stars, and existence an empty laugh braying across the mysteries; if these intimations of a something behind and beyond are not evil humour born of indigestion, or whimsies sent by the devil to mock and madden us.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If, in a word, beauty means something, yet we must not seek to interpret the meaning.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If we glimpse the unutterable, it is unwise to try to utter it, nor should we seek to invest with significance that which we cannot grasp.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "That all great art has this power of suggesting a world beyond is undeniable.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l25": {
    paragraphs: [
      [
{ text: "Many people in industry and the Services, who have practical experience of noise, regard any investigation of this question as a waste of time; they are not prepared even to admit the possibility that noise affects people.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "On the other hand, those who dislike noise will sometimes use most inadequate evidence to support their pleas for a quieter society.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This is a pity, because noise abatement really is a good cause. and it is likely to be discredited if it gets to be associated with bad science.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "One allegation often made is that noise produces mental illness.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A recent article in a weekly newspaper, for instance, was headed with a striking illustration of a lady in a state of considerable distress, with the caption 'She was yet another victim, reduced to a screaming wreck '.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "On turning eagerly to the text, one learns that the lady was a typist who found the sound of office typewriters worried her more and more until eventually she had to go into a mental hospital.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Now the snag in this sort of anecdote is of course that one cannot distinguish cause and effect.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Was the noise a cause of the illness, or were the complaints about noise merely a symptom?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Another patient might equally well complain that her neighbours were combining to slander her and persecute her, and yet one might be cautious about believing this statement.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "What is needed in the case of noise is a study of large numbers of people living under noisy conditions, to discover whether they are mentally ill more often than other people are.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Some time ago the United States Navy, for instance, examined a very large number of men working on aircraft carriers: the study was known as Project Anehin.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It can be unpleasant to live even several miles from an aerodrome; if you think what it must be like to share the deck of a ship with several squadrons of jet aircraft, you will realize that a modern navy is a good place to study noise.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But neither psychiatric interviews nor objective tests were able to show any effects upon these American sailors.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This result merely confirms earlier American and British studies: if there is any effect of noise upon mental health it must be so small that present methods of psychiatric diagnosis cannot find it.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "That does not prove that it does not exist; but it does mean that noise is less dangerous than, say, being brought up in an orphanage — which really is a mental health hazard.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l26": {
    paragraphs: [
      [
{ text: "It is animals and plants which lived in or near water whose remains are most likely to be preserved, for one of the necessary conditions of preservation is quick burial, and it is only in the seas and rivers, and sometimes lakes, where mud and silt have been continuously deposited, that bodies and the like can be rapidly covered over and preserved.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But even in the most favourable circumstances only a small fraction of the creatures that die are preserved in this way before decay sets in or, even more likely, before scavengers eat them.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "After all, all living creatures live by feeding on something else, whether it be plant or animal, dead or alive, and it is only by chance that such a fate is avoided.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The remains of plants and animals that lived on land are much more rarely preserved, for there is seldom anything to cover them over.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "When you think of the innumerable birds that one sees flying about, not to mention the equally numerous small animals like field mice and voles which you do not see, it is very rarely that one comes across a dead body, except, of course, on the roads.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "They decompose and are quickly destroyed by the weather or eaten by some other creature.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is almost always due to some very special circumstances that traces of land animals survive, as by falling into inaccessible caves, or into an ice crevasse, like the Siberian mammoths, when the whole animal is sometimes preserved, as in a refrigerator.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This is what happened to the famous Beresovka mammoth which was found preserved and in good condition.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In his mouth were the remains of fir trees - the last meal that he had before he fell into the crevasse and broke his back.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The mammoth has now been restored in the Palaeontological Museum in St. Petersburg.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Other animals were trapped in tar pits, like the elephants, saber-toothed cats and numerous other creatures that are found at Racho La Brea, which is now just a suburb of Los Angeles.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Apparently what happened was that water collected on these tar pits, and the bigger animals like the elephants ventured out on to the apparently firm surface to drink, and were promptly bogged in the tar.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "And then, when they were dead, the carnivores, like the sabre-toothed cats and the giant wolves, came out to feed and suffered exactly the same fate.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "There are also endless numbers of birds in the tar as well.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l27": {
    paragraphs: [
      [

      ]
    ],
  },
  "nce4-l28": {
    paragraphs: [
      [
{ text: "This is a sceptical age, but although our faith in many of the things in which our forefathers fervently believed has weakened, our confidence in the curative properties of the bottle of medicine remains the same as theirs.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This modern faith in medicines is proved by the fact that the annual drug bill of the Health Services is mounting to astronomical figures and shows no signs at present of ceasing to rise.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The majority of the patients attending the medical out-patients departments of our hospitals feel that they have not received adequate treatment unless they are able to carry home with them some tangible remedy in the shape of a bottle of medicine, a box of pills, or a small jar of ointment, and the doctor in charge of the department is only too ready to provide them with these requirements.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "There is no quicker method of disposing of patients than by giving them what they are asking for, and since most medical men in the Health Services are overworked and have little time for offering time-consuming and little-appreciated advice on such subjects as diet, right living, and the need for abandoning bad habits etc., the bottle, the box, and the jar are almost always granted them.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Nor is it only the ignorant and ill-educated person who has such faith in the bottle of medicine.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is recounted of Thomas Carlyle that when he heard of the illness of his friend, Henry Taylor, he went off immediately to visit him, carrying with him in his pocket what remained of a bottle of medicine formerly prescribed for an indisposition of Mrs. Carlyle's.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Carlyle was entirely ignorant of what the bottle in his pocket contained, of the nature of the illness from which his friend was suffering, and of what had previously been wrong with his wife, but a medicine that had worked so well in one form of illness would surely be of equal benefit in another, and comforted by the thought of the help he was bringing to his friend, he hastened to Henry Taylor's house.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "History does not relate whether his friend accepted his medical help, but in all probability he did.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The great advantage of taking medicine is that it makes no demands on the taker beyond that of putting up for a moment with a disgusting taste, and that is what all patients demand of their doctors — to be cured at no inconvenience to themselves.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l29": {
    paragraphs: [
      [
{ text: "Many strange new means of transport have been developed in our century, the strangest of them being perhaps the hovercraft.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In 1953, a former electronics engineer in his fifties, Christopher Cockerell, who had turned to boat-building on the Norfolk Broads, suggested an idea on which he had been working for many years to the British Government and industrial circles.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It was the idea of supporting a craft on a 'pad', or cushion, of low-pressure air, ringed with a curtain of higher pressure air.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Ever since, people have had difficulty in deciding whether the craft should be ranged among ships, planes, or land vehicles — for it is something in between a boat and an aircraft.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "As a shipbuilder, Cockerell was trying to find a solution to the problem of the wave resistance which wastes a good deal of a surface ship's power and limits its speed.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "His answer was to lift the vessel out of the water by making it ride on a cushion of air, no more than one or two feet thick.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This is done by a great number of ring-shaped air jets on the bottom of the craft.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It 'flies', therefore, but it cannot fly higher — its action depends on the surface, water or ground, over which it rides.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The first tests on the Solent in 1959 caused a sensation.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The hovercraft travelled first over the water, then mounted the beach, climbed up the dunes, and sat down on a road.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Later it crossed the Channel, riding smoothly over the waves, which presented no problem.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Since that time, various types of hovercraft have appeared and taken up regular service.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The hovercraft is particularly useful in large areas with poor communications such as Africa or Australia;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "it can become a 'flying fruit-bowl', carrying bananas from the plantations to the ports;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "giant hovercraft liners could span the Atlantic;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "and the railway of the future may well be the 'hovertrain', riding on its air cushion over a single rail, which it never touches, at speeds up to 300 m.p.h. — the possibilities appear unlimited.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l30": {
    paragraphs: [
      [
{ text: "Our knowledge of the oceans a hundred years ago was confined to the two-dimensional shape of the sea surface and the hazards of navigation presented by the irregularities in depth of the shallow water close to the land.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The open sea was deep and mysterious, and anyone who gave more than a passing thought to the bottom confines of the oceans probably assumed that the sea bed was flat.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Sir James Clark Ross had obtained a sounding of over 2,400 fathoms in 1839, but it was not until 1869, when H.M.S. Porcupine was put at the disposal of the Royal Society for several cruises, that a series of deep soundings was obtained in the Atlantic and the first samples were collected by dredging the bottom.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Shortly after this the famous H. M. S. Challenger expedition established the study of the sea-floor as a subject worthy of the most qualified physicists and geologists.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A burst of activity associated with the laying of submarine cables soon confirmed the challenger's observation that many parts of the ocean were two to three miles deep, and the existence of underwater features of considerable magnitude.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Today, enough soundings are available to enable a relief map of the Atlantic to be drawn and we know something of the great variety of the sea bed's topography.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Since the sea covers the greater part of the earth's surface, it is quite reasonable to regard the sea floor as the basic form of the crust of the earth, with, superimposed upon it, the continents, together with the islands and other features of the oceans.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The continents form rugged tablelands which stand nearly three miles above the floor of the open ocean.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "From the shore line, out a distance which may be anywhere from a few miles to a few hundred miles, runs the gentle slope of the continental shelf, geologically part of the continents.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The real dividing line between continents and oceans occurs at the foot of a steeper slope.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This continental slope usually starts at a place somewhere near the 100-fatheom mark and in the course of a few hundred miles reaches the true ocean floor at 2,500-3,500 fathoms.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The slope averages about 1 in 30. but contains steep, probably vertical, cliffs, and gentle sediment-covered terraces, and near its lower reaches there is a long tailing-off which is almost certainly the result of material transported out to deep water after being eroded from the continental masses.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l31": {
    paragraphs: [
      [
{ text: "Appreciation of sculpture depends upon the ability to respond to form in three dimensions.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "That is perhaps why sculpture has been described as the most difficult of all arts;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "certainly it is more difficult than the arts which involve appreciation of flat forms, shape in only two dimensions.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Many more people are 'form-blind' than colour-blind.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The child learning to see, first distinguishes only two-dimensional shape;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "it cannot judge distances, depths.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Later, for its personal safety and practical needs, it has to develop (partly by means of touch) the ability to judge roughly three-dimensonal distances.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But having satisfied the requirements of practical necessity, most people go no further.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Though they may attain considerable accuracy in the perception of flat form, they do not make the further intellectual and emotional effort needed to comprehend form in its full spatial existence.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This is what the sculptor must do.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He must strive continually to think of, and use, form in its full spatial completeness.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He gets the solid shape, as it were, inside his head-he thinks of it, whatever its size, as if he were holding it completely enclosed in the hollow of his hand.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He mentally visualizes a complex form from all round itself;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "he knows while he looks at one side what the other side is like, he identifies himself with its centre of gravity, its mass, its weight;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "he realizes its volume, as the space that the shape displaces in the air.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "And the sensitive observer of sculpture must also learn to feel shape simply as shape, not as description or reminiscence.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He must, for example, perceive an egg as a simple single solid shape, quite apart from its significance as food, or from the literary idea that it will become a bird.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "And so with solids such as a shell, a nut, a plum, a pear, a tadpole, a mushroom, a mountain peak, a kidney, a carrot, a tree-trunk, a bird, a bud, a lark, a ladybird, a bulrush, a bone.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "From these he can go on to appreciate more complex forms or combinations of several forms.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l32": {
    paragraphs: [
      [
{ text: "In his own lifetime Galileo was the centre of violent controversy;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "but the scientific dust has long since settled, and today we can see even his famous clash with the Inquisition in something like its proper perspective.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But, in contrast, it is only in modern times that Galileo has become a problem child for historians of science.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The old view of Galileo was delightfully uncomplicated.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He was, above all, a man who experimented: who despised the prejudices and book learning of the Aristotelians, who put his questions to nature instead of to the ancients, and who drew his conclusions fearlessly.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He had been the first to turn a telescope to the sky, and he had seen their evidence enough to overthrow Aristotle and Ptolemy together.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He was the man who climbed the Leaning Tower of Pisa and dropped various weights from the top, who rolled balls down inclined planes, and then generalized the results of his many experiments into the famous law of free fall.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But a closer study of the evidence, supported by a deeper sense of the period, and particularly by a new consciousness of the philosophical undercurrents in the scientific revolution, has profoundly modified this view of Galileo.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Today, although the old Galileo lives on in many popular writings, among historians of science a new and more sophisticated picture has emerged.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "At the same time our sympathy for Galileo's opponents has grown somewhat.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "His telescopic observations are justly immortal;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "they aroused great interest at the time, they had important theoretical consequences, and they provided a striking demonstration of the potentialities hidden in instruments and apparatus.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But can we blame those who looked and failed to see what Galileo saw, if we remember that to use a telescope at the limit of its powers calls for long experience and intimate familiarity with one's instrument?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Was the philosopher who refused to look through Galileo's telescope more culpable than those who alleged that the spiral nebulae observed with Lord Rosse's great telescope in the 1840s were scratches left by the grinder?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "We can perhaps forgive those who said the moons of Jupiter were produced by Galileo's spyglass if we recall that in his day, as for centuries before, curved glass was the popular contrivance for producing not truth but illusion, untruth;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "and if a single curved glass would distort nature, how much more would a pair of them?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l33": {
    paragraphs: [
      [
{ text: "Education is one of the key words of our time.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A man without an education, many of us believe, is an unfortunate victim of adverse circumstances, deprived of one of the greatest twentieth-century opportunities.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Convinced of the importance of education, modern states 'invest' in institutions of learning to get back 'interest' in the form of a large group of enlightened young men and women who are potential leaders.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Education, with its cycles of instruction so carefully worked out, punctuated by textbooks — those purchasable wells of wisdom - what would civilization be like without its benefits?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "So much is certain: that we would have doctors and preachers, lawyers and defendants, marriages and births — but our spiritual outlook would be different.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "We would lay less stress on 'facts and figures' and more on a good memory, on applied psychology, and on the capacity of a man to get along with his fellow-citizens.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If our educational system were fashioned after its bookless past we would have the most democratic form of 'college' imaginable.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Among tribal people all knowledge inherited by tradition is shared by all;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "it is taught to every member of the tribe so that in this respect everybody is equally equipped for life.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is the ideal condition of the 'equal start' which only our most progressive forms of modern education try to regain.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In primitive cultures the obligation to seek and to receive the traditional instruction is binding to all.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "There are no 'illiterates' — if the term can be applied to peoples without a script — while our own compulsory school attendance became law in Germany in 1642, in France in 1806, and in England in 1876, and is still non-existent in a number of 'civilized' nations.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This shows how long it was before we deemed it necessary to make sure that all our children could share in the knowledge accumulated by the 'happy few' during the past centuries.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Education in the wilderness is not a matter of monetary means.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "All are entitled to an equal start.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "There is none of the hurry which, in our society, often hampers the full development of a growing personality.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "There, a child grows up under the ever-present attention of his parent;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "therefore the jungles and the savannahs know of no 'juvenile delinquency'.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "No necessity of making a living away from home results in neglect of children, and no father is confronted with his inability to 'buy' an education for his child.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l34": {
    paragraphs: [
      [
{ text: "Parents are often upset when their children praise the homes of their friends and regard it as a slur on their own cooking, or cleaning, or furniture, and often are foolish enough to let the adolescents see that they are annoyed.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "They may even accuse them of disloyalty, or make some spiteful remark about the friends' parents.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Such a loss of dignity and descent into childish behaviour on the part of the adults deeply shocks the adolescents, and make them resolve that in future they will not talk to their parents about the places or people they visit.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Before very long the parents will be complaining that the child is so secretive and never tells them anything, but they seldom realize that they have brought this on themselves.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Disillusionment with the parents, however good and adequate they may be both as parents and as individuals, is to some degree inevitable.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Most children have such a high ideal of their parents, unless the parents themselves have been unsatisfactory, that it can hardly hope to stand up to a realistic evaluation.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Parents would be greatly surprised and deeply touched if they realized how much belief their children usually have in their character and infallibility, and how much this faith means to a child.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If parents were prepared for this adolescent reaction, and realized that it was a sign that the child was growing up and developing valuable powers of observation and independent judgment, they would not be so hurt, and therefore would not drive the child into opposition by resenting and resisting it.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The adolescent, with his passion for sincerity, always respects a parent who admits that he is wrong, or ignorant, or even that he has been unfair or unjust.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "What the child cannot forgive is the parent's refusal to admit these charges if the child knows them to be true.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Victorian parents believed that they kept their dignity by retreating behind an unreasoning authoritarian attitude;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "in fact they did nothing of the kind, but children were then too cowed to let them know how they really felt.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Today we tend to go to the other extreme, but on the whole this is a healthier attitude both for the child and the parent.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is always wiser and safer to face up to reality, however painful it may be at the moment.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l35": {
    paragraphs: [
      [
{ text: "The Moon is likely to become the industrial hub of the Solar System, supplying the rocket fuels for its ships, easily obtainable from the lunar rocks in the form of liquid oxygen.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The reason lies in its gravity.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Because the Moon has only an eightieth of the Earth's mass, it requires 97 per cent less energy to travel the quarter of a million miles from the Moon to Earth-orbit than the 200 mile-journey from Earth's surface into orbit!", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This may sound fantastic, but it is easily calculated.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "To escape from the Earth in a rocket, one must travel at seven miles per second.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The comparable speed from the Moon is only 1.5 miles per second.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Because the gravity on the Moon's surface is only a sixth of Earth's (remember how easily the Apollo astronauts bounded along), it takes much less energy to accelerate to that 1.5 miles per second than it does on Earth.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Moon-dwellers will be able to fly in space at only three per cent of the cost of similar journeys by their terrestrial dwellers will be able to fly in space at only three per cent of the cost of similar journeys by their terrestrial cousins.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Arthur C. Clark once suggested a revolutionary idea passes through three phases:", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "1 'It's impossible — don't waste my time.'", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "2 'It's possible, but not worth doing.'", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "3 'I said it was a good idea all along.'", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The idea of colonising Mars — a world 160 times more distant time the Moon — will move decisively from the second phase to the third, when a significant number of people are living permanently in space.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Mars has an extraordinary fascination for would-be voyagers.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "America, Russia and Europe are filled with enthusiasts — many of them serious and senior scientists — who dream of sending people to it.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Their aim is understandable.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is the one world in the Solar System that is most like the Earth.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is a world of red sandy deserts (hence its name — the Red Planet), cloudless skies, savage sandstorms, chasms wider than the Grand Canyon and at least one mountain more than twice as tall as Everest.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It seems ideal for settlement.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l36": {
    paragraphs: [
      [
{ text: "If a nation is essentially disunited, it is left to the government to hold it together.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This increases the expense of government, and reduces correspondingly the amount of economic resources that could be used for developing the country.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "And it should not be forgotten how small those resources are in a poor and backward country.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Where the cost of government is high, resources for development are correspondingly low.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This may be illustrated by comparing the position of a nation with that of a private business enterprise.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "An enterprise has to incur certain costs and expenses in order to stay in business.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "For our purposes, we are concerned only with one kind of cost — the cost of managing and administering the business.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Such administrative overheads in a business are analogous to the cost of government in a nation.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The administrative overheads of a business are low to the extent that everyone working in the business can be trusted to behave in a way that best promotes the interests of the firm.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If they can each be trusted to take such responsibilities and to exercise such initiative as falls within their sphere, then administrative overheads will be low.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It will be low because it will be necessary to have only one man looking after each job, without having another man to check upon what he is doing, keep him in line, and report on him to someone else.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But if no one can be trusted to act in a loyal and responsible manner towards his job, then the business will require armies of administrators, checkers, and foremen and administrative overheads will rise correspondingly.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "As administrative overheads rise, so the earnings of the business after meeting the expense of administration, will fall;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "and the business will have less money to distribute as dividends or invest directly in its future progress and development.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is precisely the same with a nation.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "To the extent that the people can be relied upon to behave in a loyal and responsible manner, the government does not require armies of police and civil servants to keep them in order.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But if a nation is disunited, the government cannot be sure that the actions of the people will be in the interests of the nation;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "and it will have to watch, check, and control the people accordingly.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A disunited nation therefore has to incur unduly high costs of government.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l37": {
    paragraphs: [
      [
{ text: "At the age of 12 years, the human body is at its most vigorous.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It has yet to reach its full size and strength, and its owner his or her full intelligence;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "but at this age the likelihood of death is least.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Earlier, we were infants and young children, and consequently more vulnerable;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "later, we shall undergo a progressive loss of our vigour and resistance which, though imperceptible at first, will finally become so steep that we can live no longer, however well we look after ourselves, and however well society, and our doctors, look after us.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This decline in vigour with the passing of time is called ageing.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is one of the most unpleasant discoveries which we all make that we must decline in this way, that if we escape wars, accidents and diseases we shall eventually 'die of old age', and that this happens at a rate which differs little from person to person, so that there are heavy odds in favour of our dying between the ages of 65 and 80.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Some of us will die sooner, a few will live longer — on into a ninth or tenth decade.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But the chances are against it, and there is a virtual limit on how long we can hope to remain alive, however lucky and robust we are.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Normal people tend to forget this process unless and until they are reminded of it.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "We are so familiar with the fact that man ages, that people have for years assumed that the process of losing vigour with time, of becoming more likely to die the older we get, was something self-evident, like the cooling of a hot kettle or the wearing-out of a pair of shoes.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "They have also assumed that all animals, and probably other organisms such as trees, or even the universe itself, must in the nature of things 'wear out'.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Most animals we commonly observe do in fact age as we do, if given the chance to live long enough;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "and mechanical systems like a wound watch, or the sun, do in fact run out of energy in accordance with the second law of thermodynamics (whether the whole universe does so is a moot point at present).", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But these are not analogous to what happens when man ages.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A run-down watch is still a watch and can be rewound.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "An old watch, by contrast, becomes so worn and unreliable that it eventually is not worth mending.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But a watch could never repair itself — it does not consist of living parts, only of metal, which wears away by friction.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "We could, at one time, repair ourselves —well enough, at least, to overcome all but the most instantly fatal illnesses and accidents.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Between 12 and 80 years we gradually lose this power;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "an illness which at 12 would knock us over, at 80 can knock us out, and into our grave.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If we could stay as vigorous as we are at 12 , it would take about 700 years for half of us to die, and another 700 for the survivors to be reduced by half again.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l38": {
    paragraphs: [
      [
{ text: "Contamination of water supplies is usually due to poor sanitation close to water sources, sewage disposal into the sources themselves, leakage of sewage into distribution systems or contamination with industrial or farm waste.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Even if a piped water supply is safe at its source, it is not always safe by the time it reaches the tap.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Intermittent tap-water supplies should be regarded as particularly suspect.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Travellers on short trips to areas with water supplies of uncertain quality should avoid drinking tap-water, or untreated water from any other source.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is best to keep to hot drinks, bottled or canned drinks of well-known brand names — international standards of water treatment are usually followed at bottling plants.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Carbonated drinks are acidic, and slightly safer.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Make sure that all bottles are opened in your presence, and that their rims are clean and dry.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Boiling is always a good way of treating water.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Some hotels supply boiled water on request and this can be used for drinking, or for brushing teeth.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Portable boiling elements that can boil small quantities of water are useful when the right voltage of electricity is available.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Refuse politely any cold drink from an unknown source.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Ice is only as safe as the water from which it is made, and should not be put in drinks unless it is known to be safe.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Drinks can be cooled by placing them on ice rather than adding ice to them.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Alcohol may be a medical disinfectant, but should not be relied upon to sterilize water.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Ethanol is more effective at a concentration of 50-70 per cent;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "below 20 per cent, its bactericidal action is negligible.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Spirits labelled 95 proof contain only about 47 per cent alcohol.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Beware of methylated alcohol, which is very poisonous, and should never be added to drinking water.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If no other safe water supply can be obtained, tap water that is too hot to touch can be left to cool and is generally safe to drink.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Those planning a trip to remote areas, or intending to live in countries where drinking water is not readily available, should know about the various possible methods for making water safe.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l39": {
    paragraphs: [
      [
{ text: "I have known very few writers, but those I have known, and whom I respect, confess at once that they have little idea where they are going when they first set pen to paper.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "They have a character, perhaps two;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "they are in that condition of eager discomfort which passes for inspiration;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "all admit radical changes of destination once the journey has begun;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "one, to my certain knowledge, spent nine months on a novel about Kashmir, then reset the whole thing in the Scottish Highlands.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "I never heard of anyone making a 'skeleton', as we were taught at school.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In the breaking and remaking, in the timing, interweaving, beginning afresh, the writer comes to discern things in his material which were not consciously in his mind when he began.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This organic process, often leading to moments of extraordinary self-discovery, is of an indescribable fascination.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A blurred image appears;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "he adds a brushstroke and another, and it is gone;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "but something was there, and he will not rest till he has captured it.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Sometimes the yeast within a writer outlives a book he has written.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "I have heard of writers who read nothing but their own books;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "like adolescents they stand before the mirror, and still cannot fathom the exact outline of the vision before them.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "For the same reason, writers talk interminably about their own books, winkling out hidden meanings, super-imposing new ones, begging response from those around them.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Of course a writer doing this is misunderstood: he might as well try to explain a crime or a love affair.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He is also, incidentally, an unforgivable bore.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This temptation to cover the distance between himself and the reader, to study his image in the sight of those who do not know him, can be his undoing: he has begun to write to please.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A young English writer made the pertinent observation a year or two back that the talent goes into the first draft, and the art into the drafts that follow.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "For this reason also the writer, like any other artist, has no resting place, no crowd or movement in which he may take comfort, no judgment from outside which can replace the judgment from within.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A writer makes order out of the anarchy of his heart;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "he submits himself to a more ruthless discipline than any critic dreamed of, and when he flirts with fame, he is taking time off from living with himself, from the search for what his world contains at its inmost point.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l40": {
    paragraphs: [
      [
{ text: "Waves are the children of the struggle between ocean and atmosphere, the ongoing signatures of infinity.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Rays from the sun excite and energize the atmosphere of the earth, awakening it to flow, to movement, to rhythm, to life.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The wind then speaks the message of the sun to the sea and the sea transmits it on through waves — an ancient, exquisite, powerful message.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "These ocean waves are among the earth's most complicated natural phenomena.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The basic features include a crest (the highest point of the wave), a trough (the lowest point), a height (the vertical distance from the trough to the crest), a wave length (the horizontal distance between two wave crests), and a period (which is the time it takes a wave crest to travel one wave length).", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Although an ocean wave gives the impression of a wall of water moving in your direction, in actuality waves move through the water leaving the water about where it was.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If the water was moving with the wave, the ocean and everything on it would be racing in to the shore with obviously catastrophic results.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "An ocean wave passing through deep water causes a particle on the surface to move in a roughly circular orbit, drawing the particle first towards the advancing wave, then up into the wave, then forward with it and then — as the wave leaves the particles behind — back to its starting point again.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "From both maturity to death, a wave is subject to the same laws as any other 'living' thing.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "For a time it assumes a miraculous individuality that, in the end, is reabsorbed into the great ocean of life.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The undulating waves of the open sea are generated by three natural causes: wind, earth movements or tremors, and the gravitational pull of the moon and the sun.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Once waves have been generated, gravity is the force that drives them in a continual attempt to restore the ocean surface to a flat plain.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l41": {
    paragraphs: [
      [
{ text: "Two main techniques have been used for training elephants, which we may call respectively the tough and the gentle.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The former method simply consists of setting an elephant to work and beating him until he does what is expected of him.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Apart from any moral considerations this is a stupid method of training, for it produces a resentful animal who at a later stage may well turn man-killer.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The gentle method requires more patience in the early stages, but produces a cheerful, good-tempered elephant who will give many years of loyal service.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The first essential in elephant training is to assign to the animal a single mahout who will be entirely responsible for the job.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Elephants like to have one master just as dogs do, and are capable of a considerable degree of personal affection.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "There are even stories of half-trained elephant calves who have refused to feed and pined to death when by some unavoidable circumstance they have been deprived of their own trainer.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Such extreme cases must probably be taken with a grain of salt, but they do underline the general principle that the relationship between elephant and mahout is the key to successful training.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The most economical age to capture an elephant for training is between 15 and 20 years, for it is then almost ready to undertake heavy work and can begin to earn its keep straight away.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But animals of this age do not easily become subservient to man, and a very firm hand must be employed in the early stages.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The captive elephant, still roped to a tree, plunges and screams every time a man approaches, and for several days will probably refuse all food through anger and fear.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Sometimes a tame elephant is tethered nearby to give the wild one confidence, and in most cases the captive gradually quietens down and begins to accept its food.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The next stage is to get the elephant to the training establishment, a ticklish business which is achieved with the aid of two tame elephants roped to the captive on either side.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "When several elephants are being trained at one time, it is customary for the new arrival to be placed between the stalls of two captives whose training is already well advanced.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is then left completely undisturbed with plenty of food and water so that it can absorb the atmosphere of its new home and see that nothing particularly alarming is happening to its companions.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "When it is eating normally, its own training begins.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The trainer stands in front of the elephant holding a long stick with a sharp metal point.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Two assistants, mounted on tame elephants, control the captive from either side, while others rub their hands over his skin to the accompaniment of a monotonous and soothing chant.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This is supposed to induce pleasurable sensations in the elephant, and its effects are reinforced by the use of endearing epithets. such as 'ho! my son', or 'ho! my father', or 'my mother', according to the age and sex of the captive.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The elephant is not immediately susceptible to such blandishments, however, and usually lashes fiercely with its trunk in all directions.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "These movements are controlled by the trainer with the metal-pointed stick, and the trunk eventually becomes so sore that the elephant curls it up and seldom afterwards uses it for offensive purposes.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A wild Indian elephant is roped to two trained ones during the first few days of training.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l42": {
    paragraphs: [
      [
{ text: "An earthquake comes like a thief in the night, without warning.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It was necessary, therefore, to invent instruments that neither slumbered nor slept.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Some devices were quite simple.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "One, for instance, consisted of rods of various lengths and thicknesses which would stand up on end like ninepins.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "When a shock came, it shook the rigid table upon which these stood.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If it were gentle, only the more unstable rods fell.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If it were severe, they all fell.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Thus the rods, by falling, and by the direction in which they fell, recorded for the slumbering scientist the strength of a shock that was too weak to waken him, and the direction from which it came.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But instruments far more delicate than that were needed if any really serious advance was to be made.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The ideal to be aimed at was to devise an instrument that could record with a pen on paper, the movements of the ground or of the table as the quake passed by.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "While I write my pen moves, but the paper keeps still.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "With practice, no doubt, I could in time learn to write by holding the pen still while the paper moved.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "That sounds a silly suggestion, but that was precisely the idea adopted in some of the early instruments (seismometers) for recording earthquake waves.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But when table, penholder and paper are all moving, how is it possible to write legibly?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The key to a solution of that problem lay in an everyday observation.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Why does a person standing in a bus or train tend to fall when a sudden start is made?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is because his feet move on , but his head stays still.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A simple experiment will help us a little further.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Tie a heavy weight at the end of a long piece of string.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "With the hand held high in the air, hold the string so that the weight nearly touches the ground.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Now move the hand to and fro and around but not up and down.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It will be found that the weight moves but slightly or not at all.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Imagine a pen attached to the weight in such a way that its point rests upon a piece of paper on the floor.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Imagine an earthquake shock shaking the floor, the paper, you and your hand.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In the midst of all this movement, the weight and the pen would be still.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But as the paper moved from side to side under the pen point, its movement would be recorded in ink upon its surface.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It was upon this principle that the first instruments were made, but the paper was wrapped round a drum which rotated slowly.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "As long as all was still, the pen drew a straight line, but while the drum was being shaken, the line that the pen was drawing wriggled from side to side.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The apparatus thus described, however, records only the horizontal component of the wave movement, which is, in fact, much more complicated.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If we could actually see the path described by a particle, such as a sand grain in the rock, it would be more like that of a bluebottle buzzing round the room;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "it would be up and down, to and fro and from side to side.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Instruments have been devised and can be so placed that all three elements can be recorded in different graphs.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "When the instrument is situated at more than 700 miles from the earthquake centre, the graphic record shows three waves arriving one after the other at short intervals.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The first records the arrival of longitudinal vibrations.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The second marks the arrival of transverse vibrations which travel more slowly and arrive several minutes after the first.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "These two have travelled through the earth.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It was from the study of these that so much was learnt about the interior of the earth.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The third, or main wave, is the slowest and has travelled round the earth through the surface rocks.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l43": {
    paragraphs: [
      [
{ text: "We must conclude from the work of those who have studied the origin of life, that given a planet only approximately like our own, life is almost certain to start.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Of all the planets in our own solar system, we ware now pretty certain the Earth is the only one on which life can survive.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Mars is too dry and poor in oxygen, Venus far too hot, and so is Mercury, and the outer planets have temperatures near absolute zero and hydrogen-dominated atmospheres.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But other suns, stars as the astronomers call them, are bound to have planets like our own, and as is the number of stars in the universe is so vast, this possibility becomes virtual certainty.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "There are 100,000 million stars in our own Milky Way alone, and then there are 3,000 million other Milky Ways, or galaxies, in the universe.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "So the number of stars that we know exist is now estimated at about 300 million million million.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Although perhaps only 1% of the life that has started somewhere will develop into highly complex and intelligent patterns, so vast is the number of planets, that intelligent life is bound to be a natural part of the universe.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "If then we are so certain that other intelligent life exists in the universe, why have we had no visitors from outer space yet?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "First of all, they may have come to this planet of ours thousands or millions of years ago, and found our then prevailing primitive state completely uninteresting to their own advanced knowledge.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Professor Ronald Bracewell, a leading American radio astronomer, argued in Nature that such a superior civilization, on a visit to our own solar system, may have left an automatic messenger behind to await the possible awakening of an advanced civilization.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Such a messenger, receiving our radio and television signals, might well re-transmit them back to its home-planet, although what impression any other civilization would thus get from us is best left unsaid.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But here we come up against the most difficult of all obstacles to contact with people on other planets — the astronomical distances which separate us.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "As a reasonable guess, they might, on an average, be 100 light years away. (A light year is the distance which light travels at 186,000 miles per second in one year, namely 6 million million miles.) Radio waves also travel at the speed of light, and assuming such an automatic messenger picked up our first broadcasts of the 1920's, the message to its home planet is barely halfway there.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Similarly, our own present primitive chemical rockets, though good enough to orbit men, have no chance of transporting us to the nearest other star, four light years away, let alone distances of tens or hundreds of light years.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Fortunately, there is a 'uniquely rational way' for us to communicate with other intelligent beings, as Walter Sullivan has put it in his excellent book, We Are not Alone.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This depends on the precise radio frequency of the 21-cm wavelength, or 1420 megacycles per second.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is the natural frequency of emission of the hydrogen atoms in space and was discovered by us in 1951;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "it must be known to any kind of radio astronomer in the universe.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Once the existence of this wave-length had been discovered, it was not long before its use as the uniquely recognizable broadcasting frequency for interstellar communication was suggested.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Without something of this kind, searching for intelligences on other planets would be like trying to meet a friend in London without a pre-arranged rendezvous and absurdly wandering the streets in the hope of a chance encounter.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Simulation of a hypothetical sighting of a UFO(unidentified flying object) in the small town of Bellelille,Wisconsin,USA.For several months in 1986-1989,the town was plagued by UFO sightings.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l44": {
    paragraphs: [
      [
{ text: "Custom has not commonly been regarded as a subject of any great moment.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The inner workings of our own brains we feel to be uniquely worthy of investigation, but custom, we have a way of thinking, is behaviour at its most commonplace.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "As a matter of fact, it is the other way around.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Traditional custom, taken the world over, is a mass of detailed behaviour more astonishing than what any one person can ever evolve in individual actions, no matter how aberrant.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Yet that is a rather trivial aspect of the matter.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The fact of first-rate importance is the predominant role that custom plays in experience and in belief, and the very great varieties it may manifest.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "No man ever looks at the world with pristine eyes.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "He sees it edited by a definite set of customs and institutions and ways of thinking.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Even in his philosophical probings he cannot go behind these stereotypes;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "his very concepts of the true and the false will still have reference to his particular traditional customs.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "John Dewey has said in all seriousness that the part played by custom in shaping the behaviour of the individual, as against any way in which he can affect traditional custom, is as the proportion of the total vocabulary of his mother tongue against those words of his own baby talk that are taken up into the vernacular of his family.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "When one seriously studies the social orders that have had the opportunity to develop autonomously, the figure becomes no more than an exact and matter-of-fact observation.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The life history of the individual is first and foremost an accommodation to the patterns and standards traditionally handed down in his community.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "From the moment of his birth, the customs into which he is born shape his experience and behaviour.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "By the time he can talk, he is the little creature of his culture, and by the time he is grown and able to take part in its activities, its habits are his habits, its beliefs his beliefs, its impossibilities his impossibilities.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Every child that is born into his group will share them with him, and no child born into one on the opposite side of the globe can ever achieve the thousandth part.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "There is no social problem it is more incumbent upon us to understand than this of the role of custom.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Until we are intelligent as to its laws and varieties, the main complicating facts of human life must remain unintelligible.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The study of custom can be profitable only after certain preliminary propositions have been accepted, and some of these propositions have been violently opposed.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In the first place, any scientific study requires that there be no preferential weighting of one or another of the items in the series it selects for its consideration.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In all the less controversial fields, like the study of cacti or termites or the mature of nebulae, the necessary method of study is to group the relevant material and to take note of all possible variant forms and conditions.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In this way, we have learned all that we know of the laws of astronomy, or of the habits of the social insects, let us say.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is only in the study of man himself that the major social sciences have substituted the study of one local variation, that of Western civilization.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Anthropology was by definition impossible, as long as these distinctions between ourselves and the primitive, ourselves and the barbarian, ourselves and the pagan, held sway over people's minds.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It was necessary first to arrive at that degree of sophistication where we no longer set our own belief against our neighbour's superstition.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It was necessary to recognize that these institutions which are based on the same premises, let us say the supernatural, must be considered together, our own among the rest.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l45": {
    paragraphs: [
      [
{ text: "In man's early days, competition with other creatures must have been critical.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But this phase of our development is now finished.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Indeed, we lack practice and experience nowadays in dealing with primitive conditions.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "I am sure that, without modern weapons, I would make a very poor show of disputing the ownership of a cave with a bear, and in this I do not think that I stand alone.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The last creature to compete with man was the mosquito.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But even the mosquito has been subdued by attention to drainage and by chemical sprays.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Competition between ourselves, person against person, community against community, still persists, however;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "and it is as fierce as it ever was.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But the competition of man against man is not the simple process envisioned in biology.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is not a simple competition for a fixed amount of food determined by the physical environment, because the environment that determines our evolution is no longer essentially physical.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Our environment is chiefly conditioned by the things we believe.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Morocco and California are bits of the Earth in very similar latitudes, both on the west coasts of continents with similar climates, and probably with rather similar natural resources.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Yet their present development is wholly different, not so much because of different people even, but because of the different thoughts that exist in the minds of their inhabitants.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "This is the point I wish to emphasize.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The most important factor in our environment is the state of our own minds.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is well known that where the white man has invaded a primitive culture, the most destructive effects have come not from physical weapons but from ideas.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Ideas are dangerous.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The Holy Office knew this full well when it caused heretics to be burned in days gone by.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Indeed, the concept of free speech only exists in our modern society because when you are inside a community, you are conditioned by the conventions of the community to such a degree that it is very difficult to conceive of anything really destructive.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is only someone looking on from outside that can inject the dangerous thoughts.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "I do not doubt that it would be possible to inject ideas into the modern world that would utterly destroy us.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "I would like to give you an example, but fortunately I cannot do so.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Perhaps it will suffice to mention the nuclear bomb.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Imagine the effect on a reasonably advanced technological society, one that still does not possess the bomb, of making it aware of the possibility, of supplying sufficient details to enable the thing to be constructed.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Twenty or thirty pages of information handed to any of the major world powers around the year 1925 would have been sufficient to change the course of world history.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is a strange thought, but I believe a correct one, that twenty or thirty pages of ideas and information would be capable of turning the present-day world upside down, or even destroying it.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "I have often tried to conceive of what those pages might contain, but of course I cannot do so because I am a prisoner of the present-day world, just as all of you are.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "We cannot think outside the particular patterns that our brains are conditioned to, or, to be more accurate, we can think only a very little way outside, and then only if we are very original.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l46": {
    paragraphs: [
      [
{ text: "A gifted American psychologist has said, 'Worry is a spasm of the emotion;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "the mind catches hold of something and will not let it go.'", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is useless to argue with the mind in this condition.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The stronger the will, the more futile the task.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "One can only gently insinuate something else into its convulsive grasp.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "And if this something else is rightly chosen, if it is really attended by the illumination of another field of interest, gradually, and often quite swiftly, the old undue grip relaxes and the process of recuperation and repair begins.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The cultivation of a hobby and new forms of interest is therefore a policy of the first importance to a public man.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But this is not a business that can be undertaken in a day or swiftly improvised by a mere command of the will.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The growth of alternative mental interests is a long process.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The seeds must be carefully chosen;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "they must fall on good ground;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "they must be sedulously tended, if the vivifying fruits are to be at hand when needed.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "To be really happy and really safe, one ought to have at least two or three hobbies, and they must all be real.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is no use starting late in life to say: 'I will take an interest in this or that.'", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Such an attempt only aggravates the strain of mental effort.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "A man may acquire great knowledge of topics unconnected with his daily work, and yet get hardly any benefit or relief.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is no use doing what you like;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "you have got to like what you do.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Broadly speaking, human beings may be divided into three classes: those who are toiled to death, those who are worried to death, and those who are bored to death.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is no use offering the manual labourer, tired out with a hard week's sweat and effort, the chance of playing a game of football or baseball on Saturday afternoon.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It is no use inviting the politician or the professional or business man, who has been working or worrying about serious things for six days, to work or worry about trifling things at the weekend.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "As for the unfortunate people who can command everything they want, who can gratify every caprice and lay their hands on almost every object of desire — for them a new pleasure, a new excitement is only an additional satiation.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In vain they rush frantically round from place to place, trying to escape from avenging boredom by mere clatter and motion.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "For them discipline in one form or another is the most hopeful path.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It may also be said that rational, industrious, useful human beings are divided into two classes: first,those whose work is work and whose pleasure is pleasure;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "and secondly those whose work and pleasure are one.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Of these the former are the majority.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "They have their compensations.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The long hours in the office or the factory bring with them as their reward, not only the means of sustenance, but a keen appetite for pleasure even in its simplest and most modest forms.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But Fortune's favoured children belong to the second class.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Their life is a natural harmony.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "For them the working hours are never long enough.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Each day is a holiday, and ordinary holidays, when they come, are grudged as enforced interruptions in an absorbing vocation.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Yet to both classes, the need of an alternative outlook, of a change of atmosphere, of a diversion of effort, is essential.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Indeed, it may well be that those whose work is their pleasure are those who most need the means of banishing it at intervals from their minds.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l47": {
    paragraphs: [
      [
{ text: "Economy is one powerful motive for camping, since after the initial outlay upon equipment, or through hiring it, the total expense can be far less than the cost of hotels.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But, contrary to a popular assumption, it is far from being the only one, or even the greatest.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The man who manoeuvres carelessly into his 20 pounds' worth of space at one of Europe's myriad permanent sites may find himself bumping a Bentley.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "More likely, Ford Escort will be hub to hub with Renault or Mercedes, but rarely with bicycles made for two.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "That the equipment of modern camping becomes yearly more sophisticated is an entertaining paradox for the cynic, a brighter promise for the hopeful traveler who has sworn to get away from it all.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "It also provides and some student sociologist might care to base his thesis upon the phenomenon — an escape of another kind.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The modern traveller is often a man who dislikes the Splendide and the Bellavista, not because he cannot afford, or shuns their material comforts. but because he is afraid of them.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Affluent he may be, but he is by no means sure what to tip the doorman or the chambermaid.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Master in his own house, he has little idea of when to say boo to a maitre d'hotel.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "From all such fears camping releases him.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Granted, a snobbery of camping itself, based upon equipment and techniques, already exists;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "but it is of a kind that, if he meets it, he can readily understand and deal with.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "There is no superior 'they' in the shape of managements and hotel hierarchies to darken his holiday days.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "To such motives, yet another must be added.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The contemporary phenomenon of car worship is to be explained not least by the sense of independence and freedom that ownership entails.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "To this pleasure camping gives an exquisite refinement.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "From one's own front door to home or foreign hills or sands and back again, everything is to hand.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Not only are the means of arriving at the holiday paradise entirely within one's own command and keeping, but the means of escape from holiday hell (if the beach proves too crowded, the local weather too inclement) are there, outside — or, as likely, part of — the tent.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Idealists have objected to the practice of camping, as to the package tour, that the traveller abroad thereby denies himself the opportunity of getting to know the people of the country visited.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Insularity and self-containment, it is argued, go hand in hand.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The opinion does not survive experience of a popular Continental camping place.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Holiday hotels tend to cater for one nationality of visitors especially, sometimes exclusively.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Camping sites, by contrast, are highly cosmopolitan.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Granted, a preponderance of Germans is a characteristic that seems common to most Mediterranean sites;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "but as yet there is no overwhelmingly specialized patronage.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Notices forbidding the open-air drying of clothes, or the use of water points for car washing, or those inviting 'our camping friends' to a dance or a boat trip are printed not only in French or Italian or Spanish, but also in English, German and Dutch.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "At meal times the odour of sauerkraut vies with that of garlic.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "The Frenchman's breakfast coffee competes with the Englishman's bacon and eggs.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Whether the remarkable growth of organized camping means the eventual death of the more independent kind is hard to say.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Municipalities naturally want to secure the campers' site fees and other custom.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Police are wary of itinerants who cannot be traced to a recognized camp boundary or to four walls.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But most probably it will all depend upon campers themselves: how many heath fires they cause;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "how much litter they leave;", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "in short, whether or not they wholly alienate landowners and those who live in the countryside.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "Only good scouting is likely to preserve the freedoms so dear to the heart of the eternal Boy Scout.", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
  "nce4-l48": {
    paragraphs: [
      [
{ text: "But if you are a serious private investor, leave the Las Vegas mentality to those with money to fritter.", translation: "", predicates: ["are", "leave"], clauseIntroducers: ["But", "if"], auxiliaries: [], inlineAnnotations: [] },
{ text: "The serious investor needs a proper 'portfolio' — a well-planned selection of investments, with a definite structure and a clear aim.", translation: "", predicates: ["needs"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "But exactly how does a newcomer to the stock market go about achieving that?", translation: "", predicates: ["does go about"], clauseIntroducers: ["But", "how"], auxiliaries: [], inlineAnnotations: [] },
{ text: "Moral?", translation: "", predicates: [], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "There is no one 'right' way to structure a portfolio.", translation: "", predicates: ["is"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "However, there are undoubtedly some wrong ways, and you can be sure that none of our five advisers would have suggested sinking all (or perhaps any) of your money into Periwigs.", translation: "", predicates: ["are", "can be sure", "would have suggested"], clauseIntroducers: ["and", "that"], auxiliaries: [], inlineAnnotations: [] },
{ text: "So what should you do?", translation: "", predicates: ["should do"], clauseIntroducers: ["what"], auxiliaries: [], inlineAnnotations: [] },
{ text: "We'll assume that you have sorted out the basics — like mortgages, pensions, insurance and access to sufficient cash reserves.", translation: "", predicates: ["We'll assume", "have sorted out"], clauseIntroducers: ["that"], auxiliaries: [], inlineAnnotations: [] },
{ text: "You should then establish your own individual aims.", translation: "", predicates: ["should establish"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "These are partly a matter of personal circumstances, partly a matter of psychology.", translation: "", predicates: ["are"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "For instance, if you are older you have less time to recover from any major losses, and you may well wish to boost your pension income.", translation: "", predicates: ["are", "have", "may well wish"], clauseIntroducers: ["if", "and"], auxiliaries: [], inlineAnnotations: [] },
{ text: "So preserving your capital and generating extra income are your main priorities.", translation: "", predicates: ["are"], clauseIntroducers: [], auxiliaries: [], inlineAnnotations: [] },
{ text: "In this case, you'd probably construct a portfolio with some shares (but not high risk ones), along with gilts, cash deposits, and perhaps convertibles or the income shares of split capital investment trusts.", translation: "", predicates: ["you'd probably construct"], clauseIntroducers: ["but"], auxiliaries: [], inlineAnnotations: [] },
{ text: "If you are younger, and in a solid financial position, you may decide to take an aggressive approach — but only if you're blessed with a sanguine disposition and won't suffer sleepless nights over share prices.", translation: "", predicates: ["are", "may decide", "you're blessed", "won't suffer"], clauseIntroducers: ["If", "and", "but", "if", "and"], auxiliaries: [], inlineAnnotations: [] },
{ text: "If you recognize yourself in this description, you might include a couple of heady growth stocks in your portfolio, alongside your more pedestrian investments.", translation: "", predicates: ["recognize", "might include"], clauseIntroducers: ["If"], auxiliaries: [], inlineAnnotations: [] },
{ text: "Once you have decided on your investment aims, you can then decide where to put your money.", translation: "", predicates: ["have decided", "can decide"], clauseIntroducers: ["Once", "where"], auxiliaries: [], inlineAnnotations: [] },
{ text: "The golden rule here is spread your risk — if you put all of your money into Periwigs International, you're setting yourself up as a hostage to fortune.", translation: "", predicates: ["is", "spread", "put", "you're setting"], clauseIntroducers: ["if"], auxiliaries: [], inlineAnnotations: [] }
      ]
    ],
  },
});

export function getParagraphs(article: { originalId: string; original?: { paragraphs: { text: string; translation: string }[][] } }): ArticleOriginalContent["paragraphs"] {
  const base = article.original?.paragraphs ?? ARTICLE_ORIGINALS[article.originalId]?.paragraphs ?? [];
  const notes = ARTICLE_ORIGINALS[article.originalId]?.paragraphs ?? [];
  return base.map((para, pi) =>
    para.map((sent, si) => {
      const note = notes[pi]?.[si] as unknown as Record<string, unknown> | undefined;
      return {
        text: sent.text,
        translation: sent.translation,
        predicates: (note?.predicates as string[]) ?? [],
        clauseIntroducers: (note?.clauseIntroducers as string[]) ?? [],
        auxiliaries: (note?.auxiliaries as string[]) ?? [],
        inlineAnnotations: (note?.inlineAnnotations as SentenceData["inlineAnnotations"]) ?? [],
        grammarNotes: note?.grammarNotes as SentenceData["grammarNotes"],
        expansionNotes: (note?.expansionNotes as SentenceData["expansionNotes"]) ?? [],
      };
    })
  );
}
