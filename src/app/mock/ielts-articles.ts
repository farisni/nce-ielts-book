import type { Article, GrammarRelatedExample, VocabItem, SentenceData } from '@/app/mock/types';

export const grammarRelatedExamples: Record<string, GrammarRelatedExample[]> = {
  asReason: [
    {
      source: 'NCE2',
      sentence: 'As a great many people will be visiting the country, the government will be building new hotels, an immense stadium, and a new Olympic-standard swimming pool.',
      note: 'As 引导原因状语从句，表示“由于将有大批人来这个国家”。',
    },
    {
      source: 'NCE3',
      sentence: 'As no pumas had been reported missing from any zoo in the country, this one must have been in the possession of a private collector and somehow managed to escape.',
      note: 'As 引导原因状语从句，表示“由于没有动物园报告丢失美洲狮”。',
    },
    {
      source: 'NCE4',
      sentence: 'As the time and cost of making a chip drop to a few days and a few hundred dollars, engineers may soon be free to let their imaginations soar without being penalized by expensive failures.',
      note: 'As 引导原因状语从句，表示“由于制造芯片的时间和成本下降”。',
    },
  ],
  asAccompanying: [
    {
      source: 'NCE2',
      sentence: 'Everybody will be watching anxiously as the new buildings go up.',
      note: 'As 引导伴随状语，表示“随着新建筑建起”。',
    },
    {
      source: 'NCE3',
      sentence: 'However, as the evidence began to accumulate, experts from the Zoo felt obliged to investigate, for the descriptions given by people who claimed to have seen the puma were extraordinarily similar.',
      note: 'As 引导伴随状语，表示“随着证据开始增多”。',
    },
    {
      source: 'NCE4',
      sentence: 'As administrative overheads rise, so the earnings of the business after meeting the expense of administration, will fall;',
      note: 'As 引导伴随状语，表示“随着行政管理费用上升”。',
    },
  ],
}

function buildSentenceItems(text: string, translations: string[] = []): SentenceData[] {
  const trimmed = text.replace(/\s+/g, ' ').trim()
  const parts = trimmed
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean)

  return parts.map((part, index) => ({
    text: part.replace(/^['"“]+|['"”]+$/g, '').trim(),
    translation: translations[index] ?? '',
    predicates: [],
    clauseIntroducers: [],
    rubyNotes: [],
  }))
}

function buildArticle(
  id: string,
  title: string,
  titleCn: string,
  lesson: number,
  paragraphs: string[],
  vocabulary: VocabItem[],
  paragraphTranslations: string[][] = [],
): Article {
  return {
    id,
    title,
    titleCn,
    level: 'IELTS16',
    lesson,
    heatmap: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    attribution: 'Based on IELTS_16 Reading',
    original: {
      paragraphs: paragraphs.map((paragraph, index) => buildSentenceItems(paragraph, paragraphTranslations[index] ?? [])),
    },
    vocabulary,
  }
}

function assignPredicates(article: Article, predicates: string[][][]) {
  predicates.forEach((paragraph, paragraphIndex) => {
    paragraph.forEach((sentencePredicates, sentenceIndex) => {
      const sentence = article.original.paragraphs[paragraphIndex]?.[sentenceIndex]
      if (sentence) sentence.predicates = sentencePredicates
    })
  })
}

const polarBearsParagraphs = [
  'Polar bears are being increasingly threatened by the effects of climate change, but their disappearance could have far-reaching consequences. They are uniquely adapted to the extreme conditions of the Arctic Circle, where temperatures can reach −40°C. One reason for this is that they have up to 11 centimetres of fat underneath their skin. Humans with comparative levels of adipose tissue would be considered obese and would be likely to suffer from diabetes and heart disease. Yet the polar bear experiences no such consequences.',
  'A 2014 study by Shi Ping Liu and colleagues sheds light on this mystery. They compared the genetic structure of polar bears with that of their closest relatives from a warmer climate, the brown bears. This allowed them to determine the genes that have allowed polar bears to survive in one of the toughest environments on Earth. Liu and his colleagues found the polar bears had a gene known as ApoB, which reduces levels of low-density lipoproteins (LDLs) – a form of bad cholesterol. In humans, mutations of this gene are associated with increased risk of heart disease. Polar bears may therefore be an important study model to understand heart disease in humans.',
  'The genome of the polar bear may also provide the solution for another condition, one that particularly affects our older generation: osteoporosis. This is a disease where bones show reduced density, usually caused by insufficient exercise, reduced calcium intake or food starvation. Bone tissue is constantly being remodelled, meaning that bone is added or removed, depending on nutrient availability and the stress that the bone is under. Female polar bears, however, undergo extreme conditions during every pregnancy. Once autumn comes around, these females will dig maternity dens in the snow and will remain there throughout the winter, both before and after the birth of their cubs. This process results in about six months of fasting, where the female bears have to keep themselves and their cubs alive, depleting their own calcium and calorie reserves. Despite this, their bones remain strong and dense.',
  'Physiologists Alanda Lennox and Allen Goodship found an explanation for this paradox in 2008. They discovered that pregnant bears were able to increase the density of their bones before they started to build their dens. In addition, six months later, when they finally emerged from the den with their cubs, there was no evidence of significant loss of bone density. Hibernating brown bears do not have this capacity and must therefore resort to major bone reformation in the following spring. If the mechanism of bone remodelling in polar bears can be understood, many bedridden humans, and even astronauts, could potentially benefit.',
  'The medical benefits of the polar bear for humanity certainly have their importance in our conservation efforts, but these should not be the only factors taken into consideration. We tend to want to protect animals we think are intelligent and possess emotions, such as elephants and primates. Bears, on the other hand, seem to be perceived as stupid and in many cases violent. And yet anecdotal evidence from the field challenges those assumptions, suggesting for example that polar bears have good problem-solving abilities. A male bear called GoGo in Tennoji Zoo, Osaka, has even been observed making use of a tool to manipulate his environment. The bear used a tree branch on multiple occasions to dislodge a piece of meat hung out of his reach. Problem-solving ability has also been witnessed in wild polar bears, although not as obviously as with GoGo. A calculated move by a male bear involved running and jumping onto barrels in an attempt to get to a photographer standing on a platform four metres high.',
  'In other studies, such as one by Alison Ames in 2008, polar bears showed deliberate and focused manipulation. For example, Ames observed bears putting objects in piles and then knocking them over in what appeared to be a game. The study demonstrates that bears are capable of agile and thought-out behaviours. These examples suggest bears have greater creativity and problem-solving abilities than previously thought.',
  'As for emotions, while the evidence is once again anecdotal, many bears have been seen to hit out at ice and snow – seemingly out of frustration – when they have just missed out on a kill. Moreover, polar bears can form unusual relationships with other species, including playing with the dogs used to pull sleds in the Arctic. Remarkably, one hand-raised polar bear called Agee has formed a close relationship with her owner Mark Dumas to the point where they even swim together. This is even more astonishing since polar bears are known to actively hunt humans in the wild.',
  'If climate change were to lead to their extinction, this would mean the loss not only of potential breakthroughs in human medicine, but more importantly, the disappearance of an intelligent, majestic animal.',
]

const polarBearsParagraphTranslations = [
  [
    '北极熊正日益受到气候变化影响的威胁，但它们的消失可能会带来深远的后果。',
    '它们对北极圈极端环境有独特的适应能力，那里的温度可低至-40°C。',
    '原因之一是它们的皮下脂肪可厚达11厘米。',
    '如果人类拥有类似程度的脂肪组织，就会被认为肥胖，并很可能患糖尿病和心脏病。',
    '然而北极熊却不会出现这种后果。',
  ],
  [
    '2014年，石平柳及其同事的一项研究揭开了这一谜团。',
    '他们将北极熊的基因结构与其最亲近的、生活在较温暖气候中的近亲棕熊进行了比较。',
    '这使他们能够确定出那些使北极熊得以在地球上最恶劣环境之一中生存下来的基因。',
    '刘和他的同事发现，北极熊拥有一种名为ApoB的基因，它能降低低密度脂蛋白（LDL）——即一种“坏胆固醇”的水平。',
    '在人类中，这种基因的突变与心脏病风险增加有关。',
    '因此，北极熊可能是研究人类心脏病的重要模型。',
  ],
  [
    '北极熊的基因组也可能为另一种特别影响老年人的疾病——骨质疏松症——提供解决方案。',
    '这种疾病会导致骨密度降低，通常由运动不足、钙摄入减少或食物匮乏引起。',
    '骨组织会持续重塑，也就是说，骨骼会根据营养供应和所承受的压力而增减。',
    '然而，雌性北极熊在每次怀孕期间都要经历极端条件。',
    '一到秋天，这些雌性北极熊就会在雪地里挖出产房，并在整个冬季一直待在那里，直到幼崽出生前后。',
    '这一过程会导致雌熊长达约六个月的禁食，她们必须维持自己和幼崽的生存，从而消耗自身的钙和热量储备。',
    '尽管如此，它们的骨骼依然保持坚固且致密。',
  ],
  [
    '生理学家阿兰达·伦诺克斯和艾伦·古德希普在2008年找到了这一悖论的解释。',
    '他们发现，怀孕的北极熊在开始挖洞前，能够增加骨密度。',
    '此外，六个月后，当它们带着幼崽终于走出巢穴时，并没有出现明显的骨密度下降。',
    '冬眠的棕熊没有这种能力，因此只能在来年春天进行大规模骨重建。',
    '如果能够理解北极熊骨重塑的机制，许多长期卧床的人，甚至宇航员，都可能从中受益。',
  ],
  [
    '北极熊对人类医学上的益处当然在我们的保护工作中很重要，但这不应成为唯一需要考虑的因素。',
    '我们通常更愿意保护那些被认为聪明且有情感的动物，比如大象和灵长类。',
    '另一方面，熊却常被认为愚蠢，而且在很多情况下还具有暴力倾向。',
    '然而，田野中的零星证据却挑战了这些假设，例如表明北极熊具有很强的问题解决能力。',
    '大阪天王寺动物园里的雄性北极熊GoGo，甚至被观察到利用工具来改变环境。',
    '它多次用树枝把挂在自己够不到位置的肉块敲下来。',
    '在野生北极熊中也观察到了问题解决能力，虽然不如GoGo那样明显。',
    '一头雄性北极熊的一次精心计算的行动，是奔跑并跳上木桶，试图接近站在4米高平台上的摄影师。',
  ],
  [
    '在阿莉森·埃姆斯2008年的另一项研究中，北极熊表现出了有意识且专注的操控行为。',
    '例如，埃姆斯观察到北极熊会把物体堆起来，然后把它们推倒，这看起来像是在玩游戏。',
    '这项研究表明，熊具备灵活且经过思考的行为能力。',
    '这些例子表明，熊的创造力和问题解决能力比人们以前认为的更强。',
  ],
  [
    '至于情感，虽然证据再次只是零星的，但许多人看到熊在刚错过一次捕猎机会后，会对冰雪进行猛烈攻击——这看起来像是出于挫败感。',
    '此外，北极熊还能与其他物种建立不寻常的关系，包括与北极地区拉雪橇的狗玩耍。',
    '值得注意的是，一只名叫Agee的人工饲养北极熊，已经和主人马克·杜马斯建立了亲密关系，甚至会一起游泳。',
    '这更令人惊讶，因为众所周知，北极熊在野外会主动猎杀人类。',
  ],
  [
    '如果气候变化导致它们灭绝，这不仅意味着人类医学潜在突破的丧失，更重要的是，一种聪明而庄严的动物将从地球上消失。',
  ],
]

const futureOfWorkParagraphs = [
  'According to a leading business consultancy, 3–14% of the global workforce will need to switch to a different occupation within the next 10–15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation – or embodied artificial intelligence (AI) – is one aspect of the disruptive effects of technology on the labour market. Disembodied AI, like the algorithms running in our smartphones, is another.',
  'Dr Stella Pachidi from Cambridge Judge Business School believes that some of the most fundamental changes are happening as a result of the algorithmication of jobs that are dependent on data rather than on production – the so-called knowledge economy. Algorithms are capable of learning from data to undertake tasks that previously needed human judgement, such as reading legal contracts, analysing medical scans and gathering market intelligence.',
  'In many cases, they can outperform humans, says Pachidi. Organisations are attracted to using algorithms because they want to make choices based on what they consider is perfect information, as well as to reduce costs and enhance productivity. But these enhancements are not without consequences. If routine cognitive tasks are taken over by AI, how do professions develop their future experts? One way of learning about a job is legitimate peripheral participation – a novice stands next to experts and learns by observation. If this is not happening, then you need to find new ways to learn.',
  'Another issue is the extent to which the technology influences or even controls the workforce. For over two years, Pachidi monitored a telecommunications company. The way telecoms salespeople work is through personal and frequent contact with clients, using the benefit of experience to assess a situation and reach a decision. However, the company had started using an algorithm that defined when account managers should contact certain customers about which kinds of campaigns and what to offer them.',
  'The algorithm – usually built by external designers – often becomes the keeper of knowledge, she explains. In cases like this, Pachidi believes, a short-sighted view begins to creep into working practices whereby workers learn through the algorithm’s eyes and become dependent on its instructions. Alternative explorations – where experimentation and human instinct lead to progress and new ideas – are effectively discouraged.',
  'Pachidi and colleagues even observed people developing strategies to make the algorithm work to their own advantage. We are seeing cases where workers feed the algorithm with false data to reach their targets, she reports.',
  'It is scenarios like these that many researchers are working to avoid. Their objective is to make AI technologies more trustworthy and transparent, so that organisations and individuals understand how AI decisions are made. In the meantime, says Pachidi, we need to make sure we fully understand the dilemmas that this new world raises regarding expertise, occupational boundaries and control.',
  'Economist Professor Hamish Low believes that the future of work will involve major transitions across the whole life course for everyone. The traditional trajectory of full-time education followed by full-time work followed by a pensioned retirement is a thing of the past, says Low. Instead, he envisages a multistage employment life: one where retraining happens across the life course, and where multiple jobs and no job happen by choice at different stages.',
  'On the subject of job losses, Low believes the predictions are founded on a fallacy. It assumes that the number of jobs is fixed. If in 30 years, half of 100 jobs are being carried out by robots, that does not mean we are left with just 50 jobs for humans. The number of jobs will increase: we would expect there to be 150 jobs.',
  'Dr Ewan McGaughey, at Cambridge’s Centre for Business Research and King’s College London, agrees that apocalyptic views about the future of work are misguided. It is the laws that restrict the supply of capital to the job market, not the advent of new technologies that causes unemployment. His recently published research answers the question of whether automation, AI and robotics will mean a jobless future by looking at the causes of unemployment. History is clear that change can mean redundancies. But social policies can tackle this through retraining and redeployment.',
  'He adds that if there is going to be change to jobs as a result of AI and robotics then he would like to see governments seizing the opportunity to improve policy to enforce good job security. We can reprogramme the law to prepare for a fairer future of work and leisure. McGaughey’s findings are a call to arms to leaders of organisations, governments and banks to pre-empt the coming changes with bold new policies that guarantee full employment, fair incomes and a thriving economic democracy.',
]

const futureOfWorkParagraphTranslations = [
  [
    '据一家领先的商业咨询机构称，未来10到15年内，全球3%到14%的劳动力将需要转向不同职业，而所有工人都必须随职业随着日益强大的机器一起演变而调整。',
    '自动化——即具体化的人工智能（AI）——是技术对劳动力市场产生破坏性影响的一个方面。',
    '另一种是“非实体化”的人工智能，比如我们智能手机里运行的算法。',
  ],
  [
    '剑桥大学贾奇商学院的斯特拉·帕奇迪博士认为，一些最根本的变化正在发生，其原因是依赖数据而非生产的工作正在被算法化——也就是所谓的知识经济。',
    '算法能够从数据中学习，承担以前需要人类判断的任务，例如阅读法律合同、分析医学扫描和收集市场情报。',
  ],
  [
    '帕奇迪说，在很多情况下，它们的表现甚至优于人类。',
    '组织之所以被吸引去使用算法，是因为它们希望基于自己认为“完美”的信息做出决策，同时降低成本并提高生产率。',
    '但这些提升并非没有代价。',
    '如果日常认知任务被人工智能接管，那么各职业如何培养未来的专家？',
    '了解一项工作的一种方式是合法的边缘参与——新人站在专家旁边，通过观察来学习。',
    '如果这种情况没有发生，那么就需要寻找新的学习方式。',
  ],
  [
    '另一个问题是，这项技术在多大程度上影响甚至控制劳动力。',
    '帕奇迪对一家电信公司进行了两年多的跟踪观察。',
    '电信销售人员的工作方式是与客户进行频繁而亲密的接触，利用经验来评估情况并做出决定。',
    '然而，该公司已开始使用一种算法，规定客户经理应在何时联系哪些客户、推什么样的营销活动以及提供什么样的产品。',
  ],
  [
    '她解释说，这种通常由外部设计师构建的算法，往往成了知识的掌管者。',
    '在这种情况下，帕奇迪认为，一种短视的工作观开始渗入实践：员工通过算法的视角学习，进而依赖它的指令。',
    '而那些依靠实验和人类直觉推动进步和新想法的探索方式，则被有效地压制了。',
  ],
  [
    '帕奇迪和同事甚至观察到，一些人正在制定策略，让算法为自己谋利。',
    '她报告说，现在已经出现了一些员工向算法输入虚假数据以实现目标的情况。',
  ],
  [
    '许多研究人员正致力于避免出现这样的情形。',
    '他们的目标是让人工智能技术更值得信赖、更透明，从而让组织和个人都能理解人工智能的决策方式。',
    '与此同时，帕奇迪说，我们必须充分理解这个新世界带来的关于专业能力、职业边界和控制权的困境。',
  ],
  [
    '经济学家哈米什·洛教授认为，未来的工作将为每个人带来贯穿一生的重大转变。',
    '洛说，传统的“全日制教育—全日制工作—领取养老金退休”的人生轨迹已经一去不复返了。',
    '相反，他设想了一种多阶段的就业生活：在整个生命过程中不断再培训，并且在不同阶段可以选择拥有多个工作或暂时不工作。',
  ],
  [
    '关于失业问题，洛认为这些预测建立在一个谬误之上。',
    '它假设工作的数量是固定不变的。',
    '如果30年后，100份工作里有一半由机器人完成，这并不意味着人类只剩下50份工作。',
    '工作岗位的数量反而会增加：我们预计会有150份工作。',
  ],
  [
    '剑桥商业研究中心和伦敦国王学院的伊万·麦高希博士也认为，关于未来工作的末日式观点是错误的。',
    '造成失业的原因不是新技术的出现，而是限制资本流向就业市场的法律。',
    '他最近发表的研究通过分析失业成因，回答了自动化、人工智能和机器人是否会带来“无工作未来”的问题。',
    '历史清楚表明，变革可能意味着裁员。',
    '但社会政策可以通过再培训和重新安置来解决这一问题。',
  ],
  [
    '他补充说，如果人工智能和机器人会改变工作，那么他希望政府抓住这一机会，完善政策以保障良好的就业安全。',
    '我们可以重新编写法律，为更公平的工作和休闲未来做好准备。',
    '麦高希的研究结果向组织、政府和银行的领导者发出了号召：要通过大胆的新政策预先应对即将到来的变化，确保充分就业、公平收入和繁荣的经济民主。',
  ],
]

const polarBearsVocabulary: VocabItem[] = [
  { word: 'threatened', pos: 'adj.', meaning: '受到威胁的', phonetic: '/ˈθretnd/' },
  { word: 'consequences', pos: 'n.', meaning: '后果', phonetic: '/ˈkɒnsɪkwənsɪz/' },
  { word: 'adapted', pos: 'adj.', meaning: '适应的', phonetic: '/əˈdæptɪd/' },
  { word: 'fat', pos: 'n.', meaning: '脂肪', phonetic: '/fæt/' },
  { word: 'obese', pos: 'adj.', meaning: '肥胖的', phonetic: '/əʊˈbiːs/' },
  { word: 'genetic', pos: 'adj.', meaning: '基因的', phonetic: '/dʒəˈnetɪk/' },
  { word: 'mutation', pos: 'n.', meaning: '突变', phonetic: '/mjuːˈteɪʃən/' },
  { word: 'osteoporosis', pos: 'n.', meaning: '骨质疏松症', phonetic: '/ˌɒstiəʊpəˈrəʊsɪs/' },
  { word: 'remodelled', pos: 'adj.', meaning: '重塑的', phonetic: '/ˌriːˈmɒdəld/' },
  { word: 'hibernating', pos: 'adj.', meaning: '冬眠的', phonetic: '/ˈhaɪbərneɪtɪŋ/' },
]

const polarBearsArticle = buildArticle('ielts-1', 'Why we need to protect polar bears', '为什么我们需要保护北极熊', 1, polarBearsParagraphs, polarBearsVocabulary, polarBearsParagraphTranslations)

const futureOfWorkVocabulary: VocabItem[] = [
  { word: 'workforce', pos: 'n.', meaning: '劳动力', phonetic: '/ˈwɜːkfɔːs/' },
  { word: 'occupation', pos: 'n.', meaning: '职业', phonetic: '/ˌɒkjʊˈpeɪʃən/' },
  { word: 'alongside', pos: 'prep.', meaning: '与……一起；在……旁边', phonetic: '/əˌlɒŋˈsaɪd/' },
  { word: 'automation', pos: 'n.', meaning: '自动化', phonetic: '/ˌɔːtəˈmeɪʃən/' },
  { word: 'disembodied', pos: 'adj.', meaning: '非实体化的；无形的', phonetic: '/ˌdɪsɪmˈbɒdid/' },
  { word: 'disruptive', pos: 'adj.', meaning: '破坏性的；颠覆性的', phonetic: '/dɪsˈrʌptɪv/' },
  { word: 'algorithm', pos: 'n.', meaning: '算法', phonetic: '/ˈælgərɪðəm/' },
  { word: 'cognitive', pos: 'adj.', meaning: '认知的', phonetic: '/ˈkɒɡnətɪv/' },
  { word: 'outperform', pos: 'v.', meaning: '胜过；表现优于', phonetic: '/ˌaʊtpəˈfɔːm/' },
  { word: 'legitimate', pos: 'adj.', meaning: '合法的；合理的', phonetic: '/lɪˈdʒɪtɪmət/' },
  { word: 'peripheral', pos: 'adj.', meaning: '外围的；次要的', phonetic: '/pəˈrɪfərəl/' },
  { word: 'participation', pos: 'n.', meaning: '参与；参加', phonetic: '/pɑːˌtɪsɪˈpeɪʃən/' },
  { word: 'novice', pos: 'n.', meaning: '新手；初学者', phonetic: '/ˈnɒvɪs/' },
  { word: 'telecommunications', pos: 'n.', meaning: '电信', phonetic: '/ˌtelɪkəˌmjuːnɪˈkeɪʃənz/' },
  { word: 'redundancies', pos: 'n.', meaning: '裁员', phonetic: '/rɪˈdʌndənsiːz/' },
  { word: 'redeployment', pos: 'n.', meaning: '重新部署', phonetic: '/ˌriːdɪˈplɔɪmənt/' },
  { word: 'employment', pos: 'n.', meaning: '就业', phonetic: '/ɪmˈplɔɪmənt/' },
  { word: 'economic', pos: 'adj.', meaning: '经济的', phonetic: '/ˌiːkəˈnɒmɪk/' },
]

const futureOfWorkArticle = buildArticle('ielts-3', 'The future of work', '未来的工作', 3, futureOfWorkParagraphs, futureOfWorkVocabulary, futureOfWorkParagraphTranslations)
assignPredicates(polarBearsArticle, [
  [
    ['are being threatened', 'could have'],
    ['are adapted', 'can reach'],
    ['is', 'have'],
    ['would be considered', 'would be likely to suffer'],
    ['experiences'],
  ],
  [
    ['sheds'],
    ['compared'],
    ['allowed', 'have allowed'],
    ['found', 'had', 'reduces'],
    ['are associated'],
    ['may be'],
  ],
  [
    ['may provide'],
    ['is', 'show'],
    ['is being remodelled', 'is added', 'removed'],
    ['undergo'],
    ['comes', 'will dig', 'will remain'],
    ['results', 'have to keep'],
    ['remain'],
  ],
  [
    ['found'],
    ['discovered', 'were able', 'started'],
    ['emerged', 'was'],
    ['do not have', 'must resort'],
    ['can be understood', 'could benefit'],
  ],
  [
    ['have', 'should not be'],
    ['tend', 'want', 'protect', 'think', 'are', 'possess'],
    ['seem', 'be perceived'],
    ['challenges', 'have'],
    ['has been observed'],
    ['used'],
    ['has been witnessed'],
    ['involved'],
  ],
  [
    ['showed'],
    ['observed', 'putting', 'knocking', 'appeared'],
    ['demonstrates', 'are'],
    ['suggest', 'have'],
  ],
  [
    ['have been seen', 'hit out', 'have missed'],
    ['can form'],
    ['has formed', 'swim'],
    ['is', 'are known', 'hunt'],
  ],
  [
    ['were to lead', 'would mean'],
  ],
])
assignPredicates(futureOfWorkArticle, [
  [
    ['will need to switch', 'will need to adapt', 'evolve'],
    ['is'],
    ['is'],
  ],
  [
    ['believes', 'are happening'],
    ['are capable', 'learning', 'undertake', 'needed'],
  ],
  [
    ['can outperform', 'says'],
    ['are attracted', 'want', 'make', 'consider', 'is', 'reduce', 'enhance'],
    ['are'],
    ['are taken over', 'do develop'],
    ['is', 'stands', 'learns'],
    ['is happening', 'need', 'find'],
  ],
  [
    ['is', 'influences', 'controls'],
    ['monitored'],
    ['work', 'is', 'using', 'assess', 'reach'],
    ['had started', 'using', 'defined', 'should contact', 'offer'],
  ],
  [
    ['becomes', 'explains'],
    ['believes', 'begins', 'creep', 'learn', 'become'],
    ['are discouraged'],
  ],
  [
    ['observed', 'developing', 'make', 'work'],
    ['are seeing', 'feed', 'reach', 'reports'],
  ],
  [
    ['is', 'are working', 'avoid'],
    ['is', 'make', 'understand', 'are made'],
    ['need', 'make sure', 'understand', 'raises'],
  ],
  [
    ['believes', 'will involve'],
    ['is', 'says'],
    ['envisages', 'happens', 'happen'],
  ],
  [
    ['believes', 'are founded'],
    ['assumes'],
    ['are being carried out', 'does not mean', 'are left'],
    ['will increase', 'would expect', 'be'],
  ],
  [
    ['agrees', 'are misguided'],
    ['is', 'restrict', 'causes'],
    ['answers', 'will mean', 'looking'],
    ['is', 'can mean'],
    ['can tackle'],
  ],
  [
    ['adds', 'is going to be', 'would like', 'see', 'seizing', 'improve', 'enforce'],
    ['can reprogramme'],
    ['are', 'pre-empt', 'guarantee'],
  ],
])
futureOfWorkArticle.original.paragraphs[0][0].structureNotes = [
  { title: 'as their occupations evolve alongside increasingly capable machines', body: 'as 引导伴随状语。' },
]
futureOfWorkArticle.original.paragraphs[0][2].rubyNotes = [
  { title: 'Disembodied', body: '非实体化的' },
]
futureOfWorkArticle.original.paragraphs[1][0].structureNotes = [
  { title: 'as a result of the algorithmication of jobs', body: 'as 引导原因状语。' },
]
futureOfWorkArticle.original.paragraphs[1][1].structureNotes = [
  { title: 'to undertake tasks', body: 'to do 目的状语，去承担任务。' },
]
futureOfWorkArticle.original.paragraphs[2][0].rubyNotes = [
  { title: 'outperform', body: '胜过' },
]
futureOfWorkArticle.original.paragraphs[2][3].rubyNotes = [
  { title: 'cognitive', body: '认知的' },
]
futureOfWorkArticle.original.paragraphs[2][4].rubyNotes = [
  { title: 'legitimate', body: '合法的' },
  { title: 'peripheral', body: '外围的' },
  { title: 'participation', body: '参与' },
  { title: 'novice', body: '新手' },
]

export const articlesIelts: Record<string, Article> = {
  'ielts-1': polarBearsArticle,
  'ielts-3': futureOfWorkArticle,
}

export const articleIeltsList = Object.values(articlesIelts).map((article) => ({
  id: article.id,
  title: article.title,
  titleCn: article.titleCn,
  level: article.level,
  lesson: article.lesson,
  paragraphCount: article.original.paragraphs.length,
  vocabularyCount: article.vocabulary.length,
}))
