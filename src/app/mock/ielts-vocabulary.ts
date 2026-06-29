export interface VocabWord {
  id: number
  wordGroup: string
  word: string
  partOfSpeech: string
  chinese: string
  example: string
  colorIndex: number
}

export interface VocabChapter {
  title: string
  groups: VocabWord[][]
}

export const vocabChapters: VocabChapter[] = [
  {
    "title": "自然地理",
    "groups": [
      [
        {
          "id": 1,
          "word": "atmosphere",
          "partOfSpeech": "n.",
          "chinese": "大气层；氛围",
          "example": "The approaching examination created a tense atmosphere on the campus",
          "wordGroup": "group_0",
          "colorIndex": 0
        },
        {
          "id": 2,
          "word": "hydrosphere",
          "partOfSpeech": "n.",
          "chinese": "水圈；大气中的水汽",
          "example": "All the water of the earth's surface is included in the hydrosphere",
          "wordGroup": "group_0",
          "colorIndex": 0
        },
        {
          "id": 3,
          "word": "lithosphere",
          "partOfSpeech": "n.",
          "chinese": "岩石圈",
          "example": "The hydrosphere and the lithosphere together form the earth's surface",
          "wordGroup": "group_0",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 4,
          "word": "oxygen",
          "partOfSpeech": "n.",
          "chinese": "氧气",
          "example": "Hydrogen and Oxygen are gases",
          "wordGroup": "group_1",
          "colorIndex": 1
        },
        {
          "id": 5,
          "word": "oxide",
          "partOfSpeech": "n.",
          "chinese": "氧化物",
          "example": "Oxide is a part of our daily life",
          "wordGroup": "group_1",
          "colorIndex": 1
        },
        {
          "id": 6,
          "word": "carbon dioxide",
          "partOfSpeech": "n.",
          "chinese": "二氧化碳",
          "example": "Soft drinks usually contain carbon dioxide",
          "wordGroup": "group_1",
          "colorIndex": 1
        },
        {
          "id": 7,
          "word": "hydrogen",
          "partOfSpeech": "n.",
          "chinese": "氢气",
          "example": "Two parts hydrogen, one part oxygen, you'll get water everytime",
          "wordGroup": "group_1",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 8,
          "word": "core",
          "partOfSpeech": "n.",
          "chinese": "中心；核心；地核",
          "example": "He is the core of the working group",
          "wordGroup": "group_2",
          "colorIndex": 2
        },
        {
          "id": 9,
          "word": "crust",
          "partOfSpeech": "n.",
          "chinese": "地壳；外壳",
          "example": "The crust on the snow was thick enough for us to walk on it",
          "wordGroup": "group_2",
          "colorIndex": 2
        },
        {
          "id": 10,
          "word": "mantle",
          "partOfSpeech": "n./v.",
          "chinese": "地幔；斗篷；披风；覆盖",
          "example": "Parents often use mantles for their babies to keep warm",
          "wordGroup": "group_2",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 11,
          "word": "longitude",
          "partOfSpeech": "n.",
          "chinese": "经度",
          "example": "The captain determine the latitude and longitude of his ship",
          "wordGroup": "group_3",
          "colorIndex": 3
        },
        {
          "id": 12,
          "word": "latitude",
          "partOfSpeech": "n.",
          "chinese": "纬度",
          "example": "Our position is 40 degrees north latitude",
          "wordGroup": "group_3",
          "colorIndex": 3
        },
        {
          "id": 13,
          "word": "horizon",
          "partOfSpeech": "n.",
          "chinese": "地平线；[~s]眼界；见识",
          "example": "I could see a ship on the horizon",
          "wordGroup": "group_3",
          "colorIndex": 3
        },
        {
          "id": 14,
          "word": "altitude",
          "partOfSpeech": "n.",
          "chinese": "海拔；高度",
          "example": "We're currently flying at an altitude of 8,000 meters",
          "wordGroup": "group_3",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 15,
          "word": "disaster",
          "partOfSpeech": "n.",
          "chinese": "灾难",
          "example": "There was a great flood disaster in East China",
          "wordGroup": "group_4",
          "colorIndex": 4
        },
        {
          "id": 16,
          "word": "mishap",
          "partOfSpeech": "n.",
          "chinese": "小灾难",
          "example": "A mishap prevented him from attending the routine company meeting",
          "wordGroup": "group_4",
          "colorIndex": 4
        },
        {
          "id": 17,
          "word": "catastrophic",
          "partOfSpeech": "adj.",
          "chinese": "灾难性的",
          "example": "If the forecast had been wrong, the consequences could have been catastrophic",
          "wordGroup": "group_4",
          "colorIndex": 4
        },
        {
          "id": 18,
          "word": "calamity",
          "partOfSpeech": "n.",
          "chinese": "灾难；不幸的事",
          "example": "A hurricane would be a calamity for this low-lying coastal region",
          "wordGroup": "group_4",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 19,
          "word": "endanger",
          "partOfSpeech": "v.",
          "chinese": "使遭受危险；危及",
          "example": "If you are work hard without rest, you will endanger your health",
          "wordGroup": "group_5",
          "colorIndex": 5
        },
        {
          "id": 20,
          "word": "jeopardise/jeopardize",
          "partOfSpeech": "v.",
          "chinese": "危害；危及",
          "example": "If you are rude to the boss, your chances of success may be jeopardised",
          "wordGroup": "group_5",
          "colorIndex": 5
        },
        {
          "id": 21,
          "word": "destructive",
          "partOfSpeech": "adj.",
          "chinese": "破坏性的；有害的",
          "example": "Jealousy is an extremely destructive emotion",
          "wordGroup": "group_5",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 22,
          "word": "El Nino",
          "partOfSpeech": "n.",
          "chinese": "厄尔尼诺现象",
          "example": "What changed the equation that year was El Nino",
          "wordGroup": "group_6",
          "colorIndex": 0
        },
        {
          "id": 23,
          "word": "greenhouse",
          "partOfSpeech": "n.",
          "chinese": "温室；暖房",
          "example": "The flowers are grown in the greenhouse",
          "wordGroup": "group_6",
          "colorIndex": 0
        },
        {
          "id": 24,
          "word": "phenomenon",
          "partOfSpeech": "n.",
          "chinese": "现象",
          "example": "Snow is an almost unknown phenomenon in Egypt",
          "wordGroup": "group_6",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 25,
          "word": "pebble",
          "partOfSpeech": "n.",
          "chinese": "鹅卵石",
          "example": "The boy put his hand into the money bag and drew out a pebble",
          "wordGroup": "group_7",
          "colorIndex": 1
        },
        {
          "id": 26,
          "word": "magnet",
          "partOfSpeech": "n.",
          "chinese": "磁铁；吸铁石",
          "example": "He picked all the pins up with a magnet",
          "wordGroup": "group_7",
          "colorIndex": 1
        },
        {
          "id": 27,
          "word": "ore",
          "partOfSpeech": "n.",
          "chinese": "矿石；矿",
          "example": "This mountain area is rich in iron ore",
          "wordGroup": "group_7",
          "colorIndex": 1
        },
        {
          "id": 28,
          "word": "mineral",
          "partOfSpeech": "n.",
          "chinese": "矿物；矿物质；矿场",
          "example": "China is rich in mineral resources",
          "wordGroup": "group_7",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 29,
          "word": "marble",
          "partOfSpeech": "n.",
          "chinese": "大理石",
          "example": "They used marble to build the steps",
          "wordGroup": "group_8",
          "colorIndex": 2
        },
        {
          "id": 30,
          "word": "quartz",
          "partOfSpeech": "n.",
          "chinese": "石英",
          "example": "Have you bought the quartz clock?",
          "wordGroup": "group_8",
          "colorIndex": 2
        },
        {
          "id": 31,
          "word": "granite",
          "partOfSpeech": "n.",
          "chinese": "花岗岩",
          "example": "His grave is made of granite",
          "wordGroup": "group_8",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 32,
          "word": "gust",
          "partOfSpeech": "n.",
          "chinese": "一整狂风；（情感的）迸发",
          "example": "A gust of wind blew the leaves off the trees",
          "wordGroup": "group_9",
          "colorIndex": 3
        },
        {
          "id": 33,
          "word": "breeze",
          "partOfSpeech": "n.",
          "chinese": "微分；和风",
          "example": "We are enjoying the cool breeze that comes from the lake",
          "wordGroup": "group_9",
          "colorIndex": 3
        },
        {
          "id": 34,
          "word": "monsoon",
          "partOfSpeech": "n.",
          "chinese": "季风；雨季",
          "example": "The monsoon brings rain to us",
          "wordGroup": "group_9",
          "colorIndex": 3
        },
        {
          "id": 35,
          "word": "gale",
          "partOfSpeech": "n.",
          "chinese": "大风",
          "example": "We got our roof blown off in a gale last night",
          "wordGroup": "group_9",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 36,
          "word": "hurricane",
          "partOfSpeech": "n.",
          "chinese": "飓风；暴风",
          "example": "The hurricane flung their motorboat upon the rocks",
          "wordGroup": "group_10",
          "colorIndex": 4
        },
        {
          "id": 37,
          "word": "tornado",
          "partOfSpeech": "n.",
          "chinese": "龙卷风",
          "example": "When a tornado touches the ground, it does a lot of damage",
          "wordGroup": "group_10",
          "colorIndex": 4
        },
        {
          "id": 38,
          "word": "typhoon",
          "partOfSpeech": "n.",
          "chinese": "台风",
          "example": "The typhoon is gathering strength",
          "wordGroup": "group_10",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 39,
          "word": "volcano",
          "partOfSpeech": "n.",
          "chinese": "火山",
          "example": "The valcano erupted and two small towns were buried under meters of hot ash, mud and bits of molten rock",
          "wordGroup": "group_11",
          "colorIndex": 5
        },
        {
          "id": 40,
          "word": "erupt",
          "partOfSpeech": "v.",
          "chinese": "爆发；喷发；（斑疹等）突然出现",
          "example": "Hot lava erupted from the crust",
          "wordGroup": "group_11",
          "colorIndex": 5
        },
        {
          "id": 41,
          "word": "magma",
          "partOfSpeech": "n.",
          "chinese": "岩浆",
          "example": "Some types of minerals are made when magma cools and solidifies",
          "wordGroup": "group_11",
          "colorIndex": 5
        },
        {
          "id": 42,
          "word": "thermodynamic",
          "partOfSpeech": "adj.",
          "chinese": "热力的；热力学的",
          "example": "His theory violates current thermodynamic laws",
          "wordGroup": "group_11",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 43,
          "word": "smog",
          "partOfSpeech": "n.",
          "chinese": "烟雾；雾霾",
          "example": "The smog was so bad that school children were adviced to stay indoors",
          "wordGroup": "group_12",
          "colorIndex": 0
        },
        {
          "id": 44,
          "word": "fume",
          "partOfSpeech": "n./v.",
          "chinese": "（难闻有害的）烟，气体；发怒，愤怒",
          "example": "Petrol fumes from cars are poisoning the atmosphere",
          "wordGroup": "group_12",
          "colorIndex": 0
        },
        {
          "id": 45,
          "word": "mist",
          "partOfSpeech": "n.",
          "chinese": "薄雾；水汽；使视线模糊的东西",
          "example": "She could hardly recognize her son from her mist of tears",
          "wordGroup": "group_12",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 46,
          "word": "tsunami",
          "partOfSpeech": "n.",
          "chinese": "海啸",
          "example": "A terrible tsunami followed the earthquake",
          "wordGroup": "group_13",
          "colorIndex": 1
        },
        {
          "id": 47,
          "word": "drought",
          "partOfSpeech": "n.",
          "chinese": "干旱；旱灾",
          "example": "Many areas in Africa have suffered severe drought this year",
          "wordGroup": "group_13",
          "colorIndex": 1
        },
        {
          "id": 48,
          "word": "flooding",
          "partOfSpeech": "n.",
          "chinese": "洪水泛滥",
          "example": "Since the flooding began last month, seventeen people have died state wide",
          "wordGroup": "group_13",
          "colorIndex": 1
        },
        {
          "id": 49,
          "word": "torrent",
          "partOfSpeech": "n.",
          "chinese": "激流；洪流",
          "example": "A torrent of water poured down the mountain",
          "wordGroup": "group_13",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 50,
          "word": "earthquake",
          "partOfSpeech": "n.",
          "chinese": "地震",
          "example": "Several countries in Eastern Europe are counting the losses caused by yesterday's earthquake",
          "wordGroup": "group_14",
          "colorIndex": 2
        },
        {
          "id": 51,
          "word": "seismic",
          "partOfSpeech": "adj.",
          "chinese": "地震的；地震引起的",
          "example": "The discovery of seismic activity suggests geological activity could provide large amounts of heat and minerals",
          "wordGroup": "group_14",
          "colorIndex": 2
        },
        {
          "id": 52,
          "word": "avalanche",
          "partOfSpeech": "n.",
          "chinese": "雪崩",
          "example": "Yesterday's avalanche destroyed several trees",
          "wordGroup": "group_14",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 53,
          "word": "terrain",
          "partOfSpeech": "n.",
          "chinese": "地形",
          "example": "He climbed a tree to view the surrounding terrain",
          "wordGroup": "group_15",
          "colorIndex": 3
        },
        {
          "id": 54,
          "word": "landscape",
          "partOfSpeech": "n./v.",
          "chinese": "风景；地貌；对...进行景观美化",
          "example": "The trees and the mountains made the landscape very beautiful",
          "wordGroup": "group_15",
          "colorIndex": 3
        },
        {
          "id": 55,
          "word": "continent",
          "partOfSpeech": "n.",
          "chinese": "大陆；洲",
          "example": "It is generally thought that Columbus discovered the American continent",
          "wordGroup": "group_15",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 56,
          "word": "cave",
          "partOfSpeech": "n.",
          "chinese": "洞穴；山洞",
          "example": "The cave was used by smugglers in the 18th century",
          "wordGroup": "group_16",
          "colorIndex": 4
        },
        {
          "id": 57,
          "word": "cliff",
          "partOfSpeech": "n.",
          "chinese": "悬崖；峭壁",
          "example": "The narrow path leads to a wooden hut on the cliff",
          "wordGroup": "group_16",
          "colorIndex": 4
        },
        {
          "id": 58,
          "word": "glacier",
          "partOfSpeech": "n.",
          "chinese": "冰川；冰河",
          "example": "The glacier dislocated the great stones",
          "wordGroup": "group_16",
          "colorIndex": 4
        },
        {
          "id": 59,
          "word": "swamp",
          "partOfSpeech": "n.",
          "chinese": "沼泽；湿地",
          "example": "In the swamp we were beset by mosquitoes",
          "wordGroup": "group_16",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 60,
          "word": "delta",
          "partOfSpeech": "n.",
          "chinese": "三角洲",
          "example": "The Nile Delta used to be a fertile land",
          "wordGroup": "group_17",
          "colorIndex": 5
        },
        {
          "id": 61,
          "word": "plain",
          "partOfSpeech": "n./adj.",
          "chinese": "平原；简朴的；明白的",
          "example": "Once there were seventy million buffalo roaming in the great plains",
          "wordGroup": "group_17",
          "colorIndex": 5
        },
        {
          "id": 62,
          "word": "plateau",
          "partOfSpeech": "n.",
          "chinese": "高原",
          "example": "The atmosphere is thin on the plateau",
          "wordGroup": "group_17",
          "colorIndex": 5
        },
        {
          "id": 63,
          "word": "oasis",
          "partOfSpeech": "n.",
          "chinese": "绿洲；宜人之地",
          "example": "Oasis symbolizes a hope in desert areas",
          "wordGroup": "group_17",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 64,
          "word": "globe",
          "partOfSpeech": "n.",
          "chinese": "球体；地球仪",
          "example": "There are people in almost every habitable part of this globe",
          "wordGroup": "group_18",
          "colorIndex": 0
        },
        {
          "id": 65,
          "word": "hemisphere",
          "partOfSpeech": "n.",
          "chinese": "半球",
          "example": "In the northern hemisphere, you can hardly see the Magellanic Clouds",
          "wordGroup": "group_18",
          "colorIndex": 0
        },
        {
          "id": 66,
          "word": "equator",
          "partOfSpeech": "n.",
          "chinese": "赤道",
          "example": "The equator is an imaginary line around the middle of the earth",
          "wordGroup": "group_18",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 67,
          "word": "arctic",
          "partOfSpeech": "adj./n.",
          "chinese": "北极的；极冷的；北极地区；北极",
          "example": "The polar bears' habitat is the icy waters of the Arctic",
          "wordGroup": "group_19",
          "colorIndex": 1
        },
        {
          "id": 68,
          "word": "Antarctic",
          "partOfSpeech": "adj./n.",
          "chinese": "南极的；南极地区；南极洲",
          "example": "Because of the extreme cold, the environment in the Antarctic is uniquely fragile",
          "wordGroup": "group_19",
          "colorIndex": 1
        },
        {
          "id": 69,
          "word": "pole",
          "partOfSpeech": "n.",
          "chinese": "（地）极；截然相反的两极之一",
          "example": "English is spoken from pole to pole",
          "wordGroup": "group_19",
          "colorIndex": 1
        },
        {
          "id": 70,
          "word": "polar",
          "partOfSpeech": "adj.",
          "chinese": "极地的；近极地的；对立的",
          "example": "In these polar regions, the balance of nature has already been disrupted",
          "wordGroup": "group_19",
          "colorIndex": 1
        },
        {
          "id": 71,
          "word": "axis",
          "partOfSpeech": "n.",
          "chinese": "轴；轴线",
          "example": "The earth's axis is the line between the North and the South Poles",
          "wordGroup": "group_19",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 72,
          "word": "deteriorate",
          "partOfSpeech": "v.",
          "chinese": "恶化；变坏",
          "example": "Relations between the two countries have deteriorated sharply in recent weeks",
          "wordGroup": "group_20",
          "colorIndex": 2
        },
        {
          "id": 73,
          "word": "aggravate",
          "partOfSpeech": "v.",
          "chinese": "加重；加剧；使恶化",
          "example": "Grief aggravated her illness",
          "wordGroup": "group_20",
          "colorIndex": 2
        },
        {
          "id": 74,
          "word": "degrade",
          "partOfSpeech": "v.",
          "chinese": "降解；降低...身份；使恶化；使退化",
          "example": "A dishonest action like that will degrade you",
          "wordGroup": "group_20",
          "colorIndex": 2
        },
        {
          "id": 75,
          "word": "upgrade",
          "partOfSpeech": "v.",
          "chinese": "使升级；提高；改善",
          "example": "The anti-virus software should often be upgraded",
          "wordGroup": "group_20",
          "colorIndex": 2
        },
        {
          "id": 76,
          "word": "erode",
          "partOfSpeech": "v.",
          "chinese": "侵蚀；腐蚀",
          "example": "The waves erode the rocks on the shore",
          "wordGroup": "group_20",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 77,
          "word": "Mediterranean",
          "partOfSpeech": "adj./n.",
          "chinese": "地中海的；地中海地区的；地中海；地中海地区",
          "example": "This dish is a cross between Asian and Mediterranean food",
          "wordGroup": "group_21",
          "colorIndex": 3
        },
        {
          "id": 78,
          "word": "Atlantic",
          "partOfSpeech": "n.",
          "chinese": "大西洋",
          "example": "The Atlantic coast is within sight of the hotel",
          "wordGroup": "group_21",
          "colorIndex": 3
        },
        {
          "id": 79,
          "word": "pacific",
          "partOfSpeech": "adj./n.",
          "chinese": "平静的；平和的；太平洋的；太平洋",
          "example": "What a beautiful and pacific place this is",
          "wordGroup": "group_21",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 80,
          "word": "ocean",
          "partOfSpeech": "n.",
          "chinese": "海洋；洋",
          "example": "These creatures live in the depth of the Pacific Ocean",
          "wordGroup": "group_22",
          "colorIndex": 4
        },
        {
          "id": 81,
          "word": "marine",
          "partOfSpeech": "adj./n.",
          "chinese": "海洋的；海生的；海事的/水兵",
          "example": "It is true that a lot of people like marine plants as their food",
          "wordGroup": "group_22",
          "colorIndex": 4
        },
        {
          "id": 82,
          "word": "navigation",
          "partOfSpeech": "n.",
          "chinese": "航海；航行",
          "example": "Navigation is a game for brave people",
          "wordGroup": "group_22",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 83,
          "word": "gulf",
          "partOfSpeech": "n.",
          "chinese": "海湾",
          "example": "The gulf extends northward",
          "wordGroup": "group_23",
          "colorIndex": 5
        },
        {
          "id": 84,
          "word": "beach",
          "partOfSpeech": "n.",
          "chinese": "海滩；河滩",
          "example": "They walked along the beach, talking and laughing",
          "wordGroup": "group_23",
          "colorIndex": 5
        },
        {
          "id": 85,
          "word": "coast",
          "partOfSpeech": "n.",
          "chinese": "海岸；海滨",
          "example": "He is going to live by the coast for the sake of his health",
          "wordGroup": "group_23",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 86,
          "word": "shore",
          "partOfSpeech": "n.",
          "chinese": "（海、湖等大水域的）岸；滨",
          "example": "His ship pulled in to the shore at midnight",
          "wordGroup": "group_24",
          "colorIndex": 0
        },
        {
          "id": 87,
          "word": "tide",
          "partOfSpeech": "n.",
          "chinese": "趋势；潮流；潮汐",
          "example": "The gravitational attraction between the moon and the earth causes tides",
          "wordGroup": "group_24",
          "colorIndex": 0
        },
        {
          "id": 88,
          "word": "current",
          "partOfSpeech": "n.",
          "chinese": "水流；潮流；电流；气流",
          "example": "He was swept away by the current",
          "wordGroup": "group_24",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 89,
          "word": "brook",
          "partOfSpeech": "n.",
          "chinese": "小河；溪",
          "example": "Before we drink at a brook, it is good to know its source",
          "wordGroup": "group_25",
          "colorIndex": 1
        },
        {
          "id": 90,
          "word": "stream",
          "partOfSpeech": "n./v.",
          "chinese": "小河；溪；流；流动；流出",
          "example": "On either bank of the stream stand rows of willow trees",
          "wordGroup": "group_25",
          "colorIndex": 1
        },
        {
          "id": 91,
          "word": "source",
          "partOfSpeech": "n.",
          "chinese": "河的源头；根源",
          "example": "I have heard from reliable sources that the company is in trouble",
          "wordGroup": "group_25",
          "colorIndex": 1
        },
        {
          "id": 92,
          "word": "shallow",
          "partOfSpeech": "adj.",
          "chinese": "浅的；肤浅的；浅薄的",
          "example": "The sea is shallow here",
          "wordGroup": "group_25",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 93,
          "word": "superficial",
          "partOfSpeech": "adj.",
          "chinese": "表皮的；表层的",
          "example": "Superficial scratches can be easily removed",
          "wordGroup": "group_26",
          "colorIndex": 2
        },
        {
          "id": 94,
          "word": "flat",
          "partOfSpeech": "adj.",
          "chinese": "平躺的；扁平的；单调的",
          "example": "In flat open country, there is plenty of grass for the cattle to feed on",
          "wordGroup": "group_26",
          "colorIndex": 2
        },
        {
          "id": 95,
          "word": "smooth",
          "partOfSpeech": "adj.",
          "chinese": "光滑的；平稳的；流畅的",
          "example": "The process of negotiation was not entirely smooth",
          "wordGroup": "group_26",
          "colorIndex": 2
        },
        {
          "id": 96,
          "word": "rough",
          "partOfSpeech": "adj.",
          "chinese": "粗糙的；粗略的",
          "example": "You'd better give us a rough idea of your price",
          "wordGroup": "group_26",
          "colorIndex": 2
        },
        {
          "id": 97,
          "word": "sandy",
          "partOfSpeech": "adj.",
          "chinese": "含沙的；铺满沙的",
          "example": "We walked across the fields on the sandy path",
          "wordGroup": "group_26",
          "colorIndex": 2
        },
        {
          "id": 98,
          "word": "stony",
          "partOfSpeech": "adj.",
          "chinese": "石头的；多石的",
          "example": "The ground in this part of the country is poor and stony",
          "wordGroup": "group_26",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 99,
          "word": "vertical",
          "partOfSpeech": "adj.",
          "chinese": "垂直的；直立的",
          "example": "In some places, the cliff is almost vertical and too dangerous to climb",
          "wordGroup": "group_27",
          "colorIndex": 3
        },
        {
          "id": 100,
          "word": "steep",
          "partOfSpeech": "adj.",
          "chinese": "陡峭的",
          "example": "A long steep path leads to a tea house with a grand view of the sea",
          "wordGroup": "group_27",
          "colorIndex": 3
        },
        {
          "id": 101,
          "word": "parallel",
          "partOfSpeech": "n./adj./v.",
          "chinese": "平行线；相似之处/平行的/与...相似；比得上",
          "example": "There are few parallels between American football and European football",
          "wordGroup": "group_27",
          "colorIndex": 3
        },
        {
          "id": 102,
          "word": "narrow",
          "partOfSpeech": "adj./n.",
          "chinese": "狭窄的；有极限的",
          "example": "The only access to the garden is by a narrow path at the side of the house",
          "wordGroup": "group_27",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 103,
          "word": "Oceania",
          "partOfSpeech": "n.",
          "chinese": "大洋洲",
          "example": "Oceania is a separate landmass, but it is separated from Asia by very shallow water",
          "wordGroup": "group_28",
          "colorIndex": 4
        },
        {
          "id": 104,
          "word": "mainland",
          "partOfSpeech": "n.",
          "chinese": "大陆，本土",
          "example": "Hawaii and Alaska are not on the mainland of the United States",
          "wordGroup": "group_28",
          "colorIndex": 4
        },
        {
          "id": 105,
          "word": "peninsula",
          "partOfSpeech": "n.",
          "chinese": "半岛",
          "example": "His house is located on the tip of the peninsula",
          "wordGroup": "group_28",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 106,
          "word": "climate",
          "partOfSpeech": "n.",
          "chinese": "气候；风气，思潮，环境",
          "example": "The current political climate in that country is favorable for foreign investment",
          "wordGroup": "group_29",
          "colorIndex": 5
        },
        {
          "id": 107,
          "word": "weather",
          "partOfSpeech": "n.",
          "chinese": "天气，气象",
          "example": "In warm weather, you should wear clothing that is cool and comfortable",
          "wordGroup": "group_29",
          "colorIndex": 5
        },
        {
          "id": 108,
          "word": "meteorology",
          "partOfSpeech": "n.",
          "chinese": "气象学",
          "example": "Nowadays few people like to study meteorology",
          "wordGroup": "group_29",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 109,
          "word": "mild",
          "partOfSpeech": "adj.",
          "chinese": "温和的；不严重的",
          "example": "The weather is mild today. It is neither hot nor cold",
          "wordGroup": "group_30",
          "colorIndex": 0
        },
        {
          "id": 110,
          "word": "heating",
          "partOfSpeech": "n.",
          "chinese": "供暖；暖气装置",
          "example": "The workers are installing a heating system",
          "wordGroup": "group_30",
          "colorIndex": 0
        },
        {
          "id": 111,
          "word": "moderate",
          "partOfSpeech": "adj./v.",
          "chinese": "适度的；温和的；中等的/使缓和",
          "example": "The wind was strong all day, but it moderated in the evening",
          "wordGroup": "group_30",
          "colorIndex": 0
        },
        {
          "id": 112,
          "word": "warm",
          "partOfSpeech": "adj./v.",
          "chinese": "温暖的/（使）变暖",
          "example": "The blood of a warm-blooded animal remains around the same temperature both on warm and cold days",
          "wordGroup": "group_30",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 113,
          "word": "thermal",
          "partOfSpeech": "adj.",
          "chinese": "热量的",
          "example": "The thermal energy has become more and more important",
          "wordGroup": "group_31",
          "colorIndex": 1
        },
        {
          "id": 114,
          "word": "tropics",
          "partOfSpeech": "n.",
          "chinese": "热带地区",
          "example": "He lives in the tropics",
          "wordGroup": "group_31",
          "colorIndex": 1
        },
        {
          "id": 115,
          "word": "arid",
          "partOfSpeech": "adj.",
          "chinese": "干燥的；干旱的；枯燥的",
          "example": "It is difficult to grow food in arid dessert areas",
          "wordGroup": "group_31",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 116,
          "word": "moist",
          "partOfSpeech": "adj.",
          "chinese": "潮湿的；湿润的",
          "example": "His eyes were moist with tears",
          "wordGroup": "group_32",
          "colorIndex": 2
        },
        {
          "id": 117,
          "word": "damp",
          "partOfSpeech": "adj.",
          "chinese": "湿气重的；潮湿的",
          "example": "The damp match won't strike",
          "wordGroup": "group_32",
          "colorIndex": 2
        },
        {
          "id": 118,
          "word": "humid",
          "partOfSpeech": "adj.",
          "chinese": "潮湿的；湿热的",
          "example": "The milk powder has lumped together because my home is so humid",
          "wordGroup": "group_32",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 119,
          "word": "snowy",
          "partOfSpeech": "adj.",
          "chinese": "下雪多的；被雪覆盖的",
          "example": "The snowy weather lasted the whole time we were there",
          "wordGroup": "group_33",
          "colorIndex": 3
        },
        {
          "id": 120,
          "word": "frost",
          "partOfSpeech": "n.",
          "chinese": "霜；霜冻；严寒",
          "example": "Sweet potatoes decayed after the frost",
          "wordGroup": "group_33",
          "colorIndex": 3
        },
        {
          "id": 121,
          "word": "hail",
          "partOfSpeech": "n./v.",
          "chinese": "冰雹/赞扬；招呼；下冰雹",
          "example": "It hailed during the night",
          "wordGroup": "group_33",
          "colorIndex": 3
        },
        {
          "id": 122,
          "word": "thaw",
          "partOfSpeech": "v./n.",
          "chinese": "解冻；融解；融化/解冻时期",
          "example": "The sun thawed the ice and melted the snow",
          "wordGroup": "group_33",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 123,
          "word": "chill",
          "partOfSpeech": "v./n.",
          "chinese": "使变冷；使恐惧/寒冷；害怕",
          "example": "The bad news cast a chill over the whole family",
          "wordGroup": "group_34",
          "colorIndex": 4
        },
        {
          "id": 124,
          "word": "freeze",
          "partOfSpeech": "v./n.",
          "chinese": "结冰；霜冻；严寒期",
          "example": "The weatherman predicted a freeze for tonight",
          "wordGroup": "group_34",
          "colorIndex": 4
        },
        {
          "id": 125,
          "word": "frigid",
          "partOfSpeech": "adj.",
          "chinese": "寒冷的",
          "example": "Hohhot(呼和浩特) is a frigid city in winter",
          "wordGroup": "group_34",
          "colorIndex": 4
        },
        {
          "id": 126,
          "word": "tremble",
          "partOfSpeech": "v./n.",
          "chinese": "战栗；颤抖",
          "example": "There was a tremble in her voice",
          "wordGroup": "group_34",
          "colorIndex": 4
        },
        {
          "id": 127,
          "word": "shiver",
          "partOfSpeech": "v.",
          "chinese": "颤抖；哆嗦；发抖",
          "example": "She shivered because she was worried and afraid",
          "wordGroup": "group_34",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 128,
          "word": "thunder",
          "partOfSpeech": "n./v.",
          "chinese": "雷；雷声/打雷；轰隆隆的快速移动",
          "example": "An express train thundered through the station",
          "wordGroup": "group_35",
          "colorIndex": 5
        },
        {
          "id": 129,
          "word": "lightning",
          "partOfSpeech": "n./v.",
          "chinese": "闪电/闪电般的，极快的",
          "example": "During the storm, flashes of lightning appeared in the sky",
          "wordGroup": "group_35",
          "colorIndex": 5
        },
        {
          "id": 130,
          "word": "stormy",
          "partOfSpeech": "adj.",
          "chinese": "有暴风雨的；争吵激烈的；（大海）波涛汹涌的",
          "example": "Our ship was tossed about on the stormy sea",
          "wordGroup": "group_35",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 131,
          "word": "downpour",
          "partOfSpeech": "n.",
          "chinese": "倾盆大雨",
          "example": "For the past six hours, the downpour had been continuous",
          "wordGroup": "group_36",
          "colorIndex": 0
        },
        {
          "id": 132,
          "word": "rainfall",
          "partOfSpeech": "n.",
          "chinese": "降雨量",
          "example": "There have been four years of below-average rainfall",
          "wordGroup": "group_36",
          "colorIndex": 0
        },
        {
          "id": 133,
          "word": "sprinkle",
          "partOfSpeech": "v./n.",
          "chinese": "撒；下小雨/少量；小雨",
          "example": "We've only had a few sprinkles of rain recently",
          "wordGroup": "group_36",
          "colorIndex": 0
        },
        {
          "id": 134,
          "word": "rainbow",
          "partOfSpeech": "n.",
          "chinese": "彩虹",
          "example": "A rainbow is usually seen after a heavy rain",
          "wordGroup": "group_36",
          "colorIndex": 0
        },
        {
          "id": 135,
          "word": "shower",
          "partOfSpeech": "n.",
          "chinese": "阵；阵雨；淋浴",
          "example": "The weatherman predicts showers this afternoon",
          "wordGroup": "group_36",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 136,
          "word": "Celsius",
          "partOfSpeech": "adj./n.",
          "chinese": "摄氏的/摄氏温度",
          "example": "The maximum temperature in July may be 36 degrees Celsius",
          "wordGroup": "group_37",
          "colorIndex": 1
        },
        {
          "id": 137,
          "word": "temperature",
          "partOfSpeech": "n.",
          "chinese": "气温；体温；温度",
          "example": "After the storm, there will be a sharp drop in temperature",
          "wordGroup": "group_37",
          "colorIndex": 1
        },
        {
          "id": 138,
          "word": "forecast",
          "partOfSpeech": "n./v.",
          "chinese": "预测；预报/预测；预言",
          "example": "The recent statement of the president forecasts a change in the situation",
          "wordGroup": "group_37",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 139,
          "word": "peak",
          "partOfSpeech": "n./v.",
          "chinese": "山峰；顶点；达到最大值",
          "example": "The mountain peaks are covered with snow all year around",
          "wordGroup": "group_38",
          "colorIndex": 2
        },
        {
          "id": 140,
          "word": "mount",
          "partOfSpeech": "v./n.",
          "chinese": "渐渐增加；爬上；登上/山",
          "example": "The old lady can only mount the stairs with difficulty",
          "wordGroup": "group_38",
          "colorIndex": 2
        },
        {
          "id": 141,
          "word": "mountain",
          "partOfSpeech": "n.",
          "chinese": "山，山岳，高山",
          "example": "The northern side of the mountain is almost vertical",
          "wordGroup": "group_38",
          "colorIndex": 2
        },
        {
          "id": 142,
          "word": "range",
          "partOfSpeech": "n.",
          "chinese": "山脉；范围",
          "example": "A range of hills rose on our left",
          "wordGroup": "group_38",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 143,
          "word": "ridge",
          "partOfSpeech": "n./v.",
          "chinese": "山脊；山脉/使隆起",
          "example": "The sky above the ridges of the mountains brightened",
          "wordGroup": "group_39",
          "colorIndex": 3
        },
        {
          "id": 144,
          "word": "slope",
          "partOfSpeech": "v./n.",
          "chinese": "倾斜；有坡度；山坡；斜坡",
          "example": "He ran up the slope to the top of the hill",
          "wordGroup": "group_39",
          "colorIndex": 3
        },
        {
          "id": 145,
          "word": "valley",
          "partOfSpeech": "n.",
          "chinese": "山谷；溪谷",
          "example": "The valley was hidden from view in the mist",
          "wordGroup": "group_39",
          "colorIndex": 3
        },
        {
          "id": 146,
          "word": "hillside",
          "partOfSpeech": "n.",
          "chinese": "小山的山腰；山坡",
          "example": "The path steepened as they climed the hillside",
          "wordGroup": "group_39",
          "colorIndex": 3
        },
        {
          "id": 147,
          "word": "overlook",
          "partOfSpeech": "v.",
          "chinese": "远眺；俯瞰；未注意到",
          "example": "The house on the hill overlooks the village",
          "wordGroup": "group_39",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 148,
          "word": "southern",
          "partOfSpeech": "adj.",
          "chinese": "南方的",
          "example": "Only in the southern part of Taiwan have I seen such scenery",
          "wordGroup": "group_40",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 149,
          "word": "eastern",
          "partOfSpeech": "adj.",
          "chinese": "东方的",
          "example": "The eastern situation is similarly intense",
          "wordGroup": "group_41",
          "colorIndex": 5
        },
        {
          "id": 150,
          "word": "oriental",
          "partOfSpeech": "adj.",
          "chinese": "东方的（尤其指中日）",
          "example": "She has studied the cultures of oriental countries",
          "wordGroup": "group_41",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 151,
          "word": "inevitable",
          "partOfSpeech": "adj.",
          "chinese": "必然的；不可避免的",
          "example": "Such a difficult operation may not succeed, but it's an inevitable gamble",
          "wordGroup": "group_42",
          "colorIndex": 0
        },
        {
          "id": 152,
          "word": "irreversible",
          "partOfSpeech": "adj.",
          "chinese": "不可逆转的；不可挽回的",
          "example": "He suffered irreversible brain damage in the incident",
          "wordGroup": "group_42",
          "colorIndex": 0
        },
        {
          "id": 153,
          "word": "irregularly",
          "partOfSpeech": "adv.",
          "chinese": "不规则地；不合常规地",
          "example": "The patient is breathing irregularly",
          "wordGroup": "group_42",
          "colorIndex": 0
        },
        {
          "id": 154,
          "word": "inappropriate",
          "partOfSpeech": "adj.",
          "chinese": "不合适的",
          "example": "our bright red coat would be quite inappropriate for a funeral",
          "wordGroup": "group_42",
          "colorIndex": 0
        },
        {
          "id": 155,
          "word": "abnormal",
          "partOfSpeech": "adj.",
          "chinese": "不正常的；反常的；变态的",
          "example": "El Nino will result in the abnormal weather",
          "wordGroup": "group_42",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 156,
          "word": "sediment",
          "partOfSpeech": "n.",
          "chinese": "沉积物；沉淀物",
          "example": "The sediment of coffee will settle",
          "wordGroup": "group_43",
          "colorIndex": 1
        },
        {
          "id": 157,
          "word": "silt",
          "partOfSpeech": "n./v.",
          "chinese": "淤泥；泥沙；使淤塞",
          "example": "River sediments gradually silted up the harbor",
          "wordGroup": "group_43",
          "colorIndex": 1
        },
        {
          "id": 158,
          "word": "muddy",
          "partOfSpeech": "adj.",
          "chinese": "泥泞的；浑浊的",
          "example": "We left the car and struck out along the muddy track",
          "wordGroup": "group_43",
          "colorIndex": 1
        },
        {
          "id": 159,
          "word": "clay",
          "partOfSpeech": "n.",
          "chinese": "黏土；陶土",
          "example": "Bricks and dishes are made from various kinds of clay",
          "wordGroup": "group_43",
          "colorIndex": 1
        },
        {
          "id": 160,
          "word": "dirt",
          "partOfSpeech": "n.",
          "chinese": "污垢；灰尘；泥土",
          "example": "The children were outside, playing happily in the dirt",
          "wordGroup": "group_43",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 161,
          "word": "rural",
          "partOfSpeech": "adj.",
          "chinese": "农村的；乡村的；田园的",
          "example": "The disease occurs most frequently in rural areas",
          "wordGroup": "group_44",
          "colorIndex": 2
        },
        {
          "id": 162,
          "word": "suburb",
          "partOfSpeech": "n.",
          "chinese": "郊区；郊外；近郊",
          "example": "They proposed setting up a school in the suburbs",
          "wordGroup": "group_44",
          "colorIndex": 2
        },
        {
          "id": 163,
          "word": "outskirts",
          "partOfSpeech": "n.",
          "chinese": "郊区；市郊",
          "example": "We live on the outskirts of the city",
          "wordGroup": "group_44",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 164,
          "word": "remote",
          "partOfSpeech": "adj.",
          "chinese": "遥远的；偏僻的；疏远的",
          "example": "She came from a remote village",
          "wordGroup": "group_45",
          "colorIndex": 3
        },
        {
          "id": 165,
          "word": "desolate",
          "partOfSpeech": "adj.",
          "chinese": "荒凉的",
          "example": "So how should they escape from these desolate canyons?",
          "wordGroup": "group_45",
          "colorIndex": 3
        },
        {
          "id": 166,
          "word": "distant",
          "partOfSpeech": "adj.",
          "chinese": "疏远的；遥远的",
          "example": "It snows all year around in that distant little village",
          "wordGroup": "group_45",
          "colorIndex": 3
        },
        {
          "id": 167,
          "word": "adjacent",
          "partOfSpeech": "adj.",
          "chinese": "邻近的；毗连的",
          "example": "We stayed in adjacent rooms",
          "wordGroup": "group_45",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 168,
          "word": "toxic",
          "partOfSpeech": "adj.",
          "chinese": "有毒的",
          "example": "All medicines are toxic",
          "wordGroup": "group_46",
          "colorIndex": 4
        },
        {
          "id": 169,
          "word": "pollution",
          "partOfSpeech": "n.",
          "chinese": "污染",
          "example": "Wastewater from the factory is the main cause of pollution in local rivers",
          "wordGroup": "group_46",
          "colorIndex": 4
        },
        {
          "id": 170,
          "word": "pollutant",
          "partOfSpeech": "n.",
          "chinese": "污染物质",
          "example": "Coal is a heavy pollutant",
          "wordGroup": "group_46",
          "colorIndex": 4
        },
        {
          "id": 171,
          "word": "contaminate",
          "partOfSpeech": "v.",
          "chinese": "污染；弄脏",
          "example": "The river was contaminated with waste",
          "wordGroup": "group_46",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 172,
          "word": "geology",
          "partOfSpeech": "n.",
          "chinese": "地质学；地质状况",
          "example": "He devoted all his life to the research of agricultural geology",
          "wordGroup": "group_47",
          "colorIndex": 5
        },
        {
          "id": 173,
          "word": "border",
          "partOfSpeech": "n./v.",
          "chinese": "边界；边界地区；镶边；和...毗邻；形成...边界",
          "example": "The border incident led to the war between the two countries",
          "wordGroup": "group_47",
          "colorIndex": 5
        },
        {
          "id": 174,
          "word": "margin",
          "partOfSpeech": "n.",
          "chinese": "边缘；页边空白；余地",
          "example": "There is no margin for error in our plan",
          "wordGroup": "group_47",
          "colorIndex": 5
        },
        {
          "id": 175,
          "word": "fringe",
          "partOfSpeech": "n./adj.",
          "chinese": "边缘；刘海/非主要的；次要的；边缘的，附加的",
          "example": "We feel it's pretty good and we also offer some good fringe benefits",
          "wordGroup": "group_47",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 176,
          "word": "plate",
          "partOfSpeech": "n.",
          "chinese": "板块；盘",
          "example": "It is generally accepted that earthquakes are caused by two tectonic plates bumping into each other",
          "wordGroup": "group_48",
          "colorIndex": 0
        },
        {
          "id": 177,
          "word": "debris",
          "partOfSpeech": "n.",
          "chinese": "碎片；残骸",
          "example": "We are searching for his corpse among the debris after the explosion",
          "wordGroup": "group_48",
          "colorIndex": 0
        },
        {
          "id": 178,
          "word": "crack",
          "partOfSpeech": "v./n.",
          "chinese": "破裂；发出爆裂声/裂缝；缝隙",
          "example": "The door opened just a crack",
          "wordGroup": "group_48",
          "colorIndex": 0
        },
        {
          "id": 179,
          "word": "gap",
          "partOfSpeech": "n.",
          "chinese": "缺口；裂缝；差距；空白",
          "example": "There are wide gaps in my knowledge of history",
          "wordGroup": "group_48",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 180,
          "word": "splendid",
          "partOfSpeech": "adj.",
          "chinese": "极好的；壮观的",
          "example": "You're all doing a splendid job; keep up the good work",
          "wordGroup": "group_49",
          "colorIndex": 1
        },
        {
          "id": 181,
          "word": "grand",
          "partOfSpeech": "adj.",
          "chinese": "宏大的；豪华的；宏伟的；极好的",
          "example": "He was born in the purple and was brougt up in the grand palace",
          "wordGroup": "group_49",
          "colorIndex": 1
        },
        {
          "id": 182,
          "word": "magnificent",
          "partOfSpeech": "adj.",
          "chinese": "壮丽的；宏伟的；令人印象深刻的",
          "example": "The king lived in this magnificent palace",
          "wordGroup": "group_49",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 183,
          "word": "super",
          "partOfSpeech": "adj.",
          "chinese": "极好的；特级的",
          "example": "I've discoverd a super restaurant near here",
          "wordGroup": "group_50",
          "colorIndex": 2
        },
        {
          "id": 184,
          "word": "interesting",
          "partOfSpeech": "adj.",
          "chinese": "有意思的",
          "example": "There is an interesting program on television tonight",
          "wordGroup": "group_50",
          "colorIndex": 2
        },
        {
          "id": 185,
          "word": "dramatic",
          "partOfSpeech": "adj.",
          "chinese": "戏剧的；引人入胜的",
          "example": "She made a dramatic speech at the meeting",
          "wordGroup": "group_50",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 186,
          "word": "wilderness",
          "partOfSpeech": "n.",
          "chinese": "荒野",
          "example": "From his attic window, he looked out over a beautiful wildernes",
          "wordGroup": "group_51",
          "colorIndex": 3
        },
        {
          "id": 187,
          "word": "desert",
          "partOfSpeech": "n./v.",
          "chinese": "/ˈdez.ət/ 沙漠/ /dɪˈzɜːt/遗弃",
          "example": "The baby's mother deserted him soon after giving birth",
          "wordGroup": "group_51",
          "colorIndex": 3
        },
        {
          "id": 188,
          "word": "deforest",
          "partOfSpeech": "v.",
          "chinese": "毁掉...森林",
          "example": "The land is severely eroded as a result of widespread deforesting and intensive farming",
          "wordGroup": "group_51",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 189,
          "word": "barren",
          "partOfSpeech": "adj.",
          "chinese": "贫瘠的；荒芜的；不结果实的",
          "example": "That remote barren land has blossomed into rich granaries",
          "wordGroup": "group_52",
          "colorIndex": 4
        },
        {
          "id": 190,
          "word": "fertile",
          "partOfSpeech": "adj.",
          "chinese": "富饶的；肥沃的",
          "example": "There's enough to ransform barrel coral atolls into fertile groves",
          "wordGroup": "group_52",
          "colorIndex": 4
        },
        {
          "id": 191,
          "word": "fertilise/fertilize",
          "partOfSpeech": "v.",
          "chinese": "施肥于",
          "example": "I fertilized the lawn and pulled out the weeds",
          "wordGroup": "group_52",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 192,
          "word": "solar",
          "partOfSpeech": "adj.",
          "chinese": "太阳的；日光的",
          "example": "This toy is operated by solar energy",
          "wordGroup": "group_53",
          "colorIndex": 5
        },
        {
          "id": 193,
          "word": "lunar",
          "partOfSpeech": "adj.",
          "chinese": "月亮的；月球的",
          "example": "All traditional Chinese festivals are lunar callendar festivals",
          "wordGroup": "group_53",
          "colorIndex": 5
        },
        {
          "id": 194,
          "word": "calendar",
          "partOfSpeech": "n.",
          "chinese": "日历；历法",
          "example": "The Islamic calendar has fewer days than the Gregorian calendar",
          "wordGroup": "group_53",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 195,
          "word": "sunrise",
          "partOfSpeech": "n.",
          "chinese": "日出",
          "example": "The beauty of the sunrise is beyond description",
          "wordGroup": "group_54",
          "colorIndex": 0
        },
        {
          "id": 196,
          "word": "sunset",
          "partOfSpeech": "n.",
          "chinese": "日落",
          "example": "By sunset, we had covered 30 miles",
          "wordGroup": "group_54",
          "colorIndex": 0
        },
        {
          "id": 197,
          "word": "eclipse",
          "partOfSpeech": "n.",
          "chinese": "日食；月食；黯然失色",
          "example": "It will take about an hour to reach full eclipse stage",
          "wordGroup": "group_54",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 198,
          "word": "dusk",
          "partOfSpeech": "n.",
          "chinese": "黄昏",
          "example": "The street lights go on at dusk",
          "wordGroup": "group_55",
          "colorIndex": 1
        },
        {
          "id": 199,
          "word": "heaven",
          "partOfSpeech": "n.",
          "chinese": "天堂；极乐之地",
          "example": "A week on the tropical island was heaven",
          "wordGroup": "group_55",
          "colorIndex": 1
        },
        {
          "id": 200,
          "word": "paradise",
          "partOfSpeech": "n.",
          "chinese": "天堂；乐园；福地",
          "example": "This club is a sportsman's paradise",
          "wordGroup": "group_55",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 201,
          "word": "sunshine",
          "partOfSpeech": "n.",
          "chinese": "阳光；日光",
          "example": "I was sitting in the garden, enjoying the sunshine",
          "wordGroup": "group_56",
          "colorIndex": 2
        },
        {
          "id": 202,
          "word": "shade",
          "partOfSpeech": "n./v.",
          "chinese": "阴影部分；背阴处；给...遮挡（光线）",
          "example": "He tried the shade his house with thick trees",
          "wordGroup": "group_56",
          "colorIndex": 2
        },
        {
          "id": 203,
          "word": "shadow",
          "partOfSpeech": "n.",
          "chinese": "影子",
          "example": "The willow's shadow falls on the lake",
          "wordGroup": "group_56",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 204,
          "word": "vapour/vapor",
          "partOfSpeech": "n.",
          "chinese": "蒸汽；水汽",
          "example": "When water changes to water vapor, we say it evaporates",
          "wordGroup": "group_57",
          "colorIndex": 3
        },
        {
          "id": 205,
          "word": "evaporate",
          "partOfSpeech": "v.",
          "chinese": "使蒸发；消失",
          "example": "The pool of water on the playground evaporated in the sun",
          "wordGroup": "group_57",
          "colorIndex": 3
        },
        {
          "id": 206,
          "word": "circulate",
          "partOfSpeech": "v.",
          "chinese": "循环；流通；传播",
          "example": "Circulating blood helps transfer the body heat out to the air",
          "wordGroup": "group_57",
          "colorIndex": 3
        },
        {
          "id": 207,
          "word": "precipitate",
          "partOfSpeech": "v.",
          "chinese": "凝结；沉淀",
          "example": "Clouds usually precipitate as rain or snow",
          "wordGroup": "group_57",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 208,
          "word": "reservoir",
          "partOfSpeech": "n.",
          "chinese": "水库；蓄水池",
          "example": "This reservoir gives water to the whole city",
          "wordGroup": "group_58",
          "colorIndex": 4
        },
        {
          "id": 209,
          "word": "waterfall",
          "partOfSpeech": "n.",
          "chinese": "瀑布",
          "example": "They were filled with wonder at the new waterfall",
          "wordGroup": "group_58",
          "colorIndex": 4
        },
        {
          "id": 210,
          "word": "fountain",
          "partOfSpeech": "n.",
          "chinese": "喷泉；源泉",
          "example": "Social life is the fountain of wisdom for writers",
          "wordGroup": "group_58",
          "colorIndex": 4
        },
        {
          "id": 211,
          "word": "spring",
          "partOfSpeech": "n.",
          "chinese": "春天；泉水",
          "example": "It can be quite windy there, especially in spring",
          "wordGroup": "group_58",
          "colorIndex": 4
        },
        {
          "id": 212,
          "word": "dew",
          "partOfSpeech": "n.",
          "chinese": "露水",
          "example": "Dew dripped from the leaves",
          "wordGroup": "group_58",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 213,
          "word": "pour",
          "partOfSpeech": "v.",
          "chinese": "倾泻；倒；倾盆而下",
          "example": "Tears poured from her eyes",
          "wordGroup": "group_59",
          "colorIndex": 5
        },
        {
          "id": 214,
          "word": "drain",
          "partOfSpeech": "v./n.",
          "chinese": "排空；流出；耗竭",
          "example": "They drained the swamp and turn it into fertile land",
          "wordGroup": "group_59",
          "colorIndex": 5
        },
        {
          "id": 215,
          "word": "drip",
          "partOfSpeech": "v.",
          "chinese": "滴出（液体）；滴下",
          "example": "Be careful. Your paintbrush is dripping",
          "wordGroup": "group_59",
          "colorIndex": 5
        },
        {
          "id": 216,
          "word": "drown",
          "partOfSpeech": "v.",
          "chinese": "淹死；浸泡",
          "example": "She attempted to drown herself in the river",
          "wordGroup": "group_59",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 217,
          "word": "blow",
          "partOfSpeech": "v./n.",
          "chinese": "吹；打击；挫折",
          "example": "Now, Peter, make a wish and blow out the candles",
          "wordGroup": "group_60",
          "colorIndex": 0
        },
        {
          "id": 218,
          "word": "puff",
          "partOfSpeech": "v./n.",
          "chinese": "喷出；喘息；（吹出的）一股；一缕",
          "example": "Don't puff cigarette smoke in my face",
          "wordGroup": "group_60",
          "colorIndex": 0
        },
        {
          "id": 219,
          "word": "gush",
          "partOfSpeech": "v./n.",
          "chinese": "涌出",
          "example": "In a moment more, the crowd began to gush forth from the doors of the church",
          "wordGroup": "group_60",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 220,
          "word": "dense",
          "partOfSpeech": "adj.",
          "chinese": "密集的；稠密的",
          "example": "There will be dense fog in northern parts of the country tomorrow",
          "wordGroup": "group_61",
          "colorIndex": 1
        },
        {
          "id": 221,
          "word": "intensity",
          "partOfSpeech": "n.",
          "chinese": "强度；强烈",
          "example": "I was surprised by the intensity of his anxiety",
          "wordGroup": "group_61",
          "colorIndex": 1
        },
        {
          "id": 222,
          "word": "intensive",
          "partOfSpeech": "adj.",
          "chinese": "加强的；集中的；密集的",
          "example": "Intensive care in hospitals is given to the seriously ill",
          "wordGroup": "group_61",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 223,
          "word": "emerge",
          "partOfSpeech": "v.",
          "chinese": "浮现；露出；暴露；摆脱出来",
          "example": "The sun emerged from behind the clouds",
          "wordGroup": "group_62",
          "colorIndex": 2
        },
        {
          "id": 224,
          "word": "flash",
          "partOfSpeech": "v./n.",
          "chinese": "闪光；反射",
          "example": "The good news was flashed across the country",
          "wordGroup": "group_62",
          "colorIndex": 2
        },
        {
          "id": 225,
          "word": "float",
          "partOfSpeech": "v.",
          "chinese": "漂浮；浮动",
          "example": "The smell of roses floated around",
          "wordGroup": "group_62",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 226,
          "word": "environment",
          "partOfSpeech": "n.",
          "chinese": "环境",
          "example": "An incresing number of people are concerned about the pollution of the environment",
          "wordGroup": "group_63",
          "colorIndex": 3
        },
        {
          "id": 227,
          "word": "surrounding",
          "partOfSpeech": "adj.",
          "chinese": "周围的；附近的",
          "example": "The polluted waste is often dumped unceremoniously, making the surrounding land infertile",
          "wordGroup": "group_63",
          "colorIndex": 3
        },
        {
          "id": 228,
          "word": "condition",
          "partOfSpeech": "n.",
          "chinese": "条件；情况；状态",
          "example": "I had almost decided to accept their conditions at that time",
          "wordGroup": "group_63",
          "colorIndex": 3
        },
        {
          "id": 229,
          "word": "situation",
          "partOfSpeech": "n.",
          "chinese": "状况；形势",
          "example": "Due to poor management, they finally got into a difficult financial situation",
          "wordGroup": "group_63",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 230,
          "word": "nature",
          "partOfSpeech": "n.",
          "chinese": "自然",
          "example": "In fact, nature is much better at recycling than we humans are",
          "wordGroup": "group_64",
          "colorIndex": 4
        },
        {
          "id": 231,
          "word": "natural",
          "partOfSpeech": "adj.",
          "chinese": "自然的",
          "example": "It is natural that he should fall in love with such a beautiful girl",
          "wordGroup": "group_64",
          "colorIndex": 4
        },
        {
          "id": 232,
          "word": "artificial",
          "partOfSpeech": "adj.",
          "chinese": "人造的",
          "example": "This fruit joice contains absolutely no artificial flavorings or colorings",
          "wordGroup": "group_64",
          "colorIndex": 4
        },
        {
          "id": 233,
          "word": "synthetic",
          "partOfSpeech": "adj.",
          "chinese": "人造的；合成的",
          "example": "Nylon is a synthetic material; it is not from nature",
          "wordGroup": "group_64",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 234,
          "word": "petrol",
          "partOfSpeech": "n.",
          "chinese": "[英]汽油",
          "example": "My new car really eats up petrol",
          "wordGroup": "group_65",
          "colorIndex": 5
        },
        {
          "id": 235,
          "word": "gas",
          "partOfSpeech": "n.",
          "chinese": "气体；[美]汽油",
          "example": "There are reports that some gas stations have run out of gas",
          "wordGroup": "group_65",
          "colorIndex": 5
        },
        {
          "id": 236,
          "word": "gasoline",
          "partOfSpeech": "n.",
          "chinese": "[美]汽油",
          "example": "The price of gasoline is unstable",
          "wordGroup": "group_65",
          "colorIndex": 5
        },
        {
          "id": 237,
          "word": "petroleum",
          "partOfSpeech": "n.",
          "chinese": "石油",
          "example": "Petroleum is an important natural resource",
          "wordGroup": "group_65",
          "colorIndex": 5
        }
      ]
    ]
  },
  {
    "title": "植物研究",
    "groups": [
      [
        {
          "id": 238,
          "word": "photosynthesis",
          "partOfSpeech": "n.",
          "chinese": "光合作用",
          "example": "The algae capture the sun's energy by photosynthesis and store it in organic molecules",
          "wordGroup": "group_65",
          "colorIndex": 5
        },
        {
          "id": 239,
          "word": "respire",
          "partOfSpeech": "v.",
          "chinese": "呼吸",
          "example": "Plants respire in the same way as animals, taking in oxygen and giveing out carbon dioxide",
          "wordGroup": "group_65",
          "colorIndex": 5
        },
        {
          "id": 240,
          "word": "dioxide",
          "partOfSpeech": "n.",
          "chinese": "二氧化物",
          "example": "Plants can absorb carbon dioxide and release oxygen",
          "wordGroup": "group_65",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 241,
          "word": "vegetation",
          "partOfSpeech": "n.",
          "chinese": "植物；草木",
          "example": "There is not much vegetation in deserts",
          "wordGroup": "group_66",
          "colorIndex": 0
        },
        {
          "id": 242,
          "word": "herb",
          "partOfSpeech": "n.",
          "chinese": "药草；香草",
          "example": "There is herb garden behind the house",
          "wordGroup": "group_66",
          "colorIndex": 0
        },
        {
          "id": 243,
          "word": "perennial",
          "partOfSpeech": "n./adj.",
          "chinese": "多年生植物；长期的；持久的",
          "example": "These perennials should be planted where they can naturalize",
          "wordGroup": "group_66",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 244,
          "word": "botany",
          "partOfSpeech": "n.",
          "chinese": "植物学",
          "example": "He was involved in the structural botany",
          "wordGroup": "group_67",
          "colorIndex": 1
        },
        {
          "id": 245,
          "word": "ecology",
          "partOfSpeech": "n.",
          "chinese": "生态学；生态",
          "example": "I am interested in the ecology of desert",
          "wordGroup": "group_67",
          "colorIndex": 1
        },
        {
          "id": 246,
          "word": "ecosystem",
          "partOfSpeech": "n.",
          "chinese": "生态系统",
          "example": "Water is the core of a healthy ecosystem",
          "wordGroup": "group_67",
          "colorIndex": 1
        },
        {
          "id": 247,
          "word": "eco-friendly",
          "partOfSpeech": "adj.",
          "chinese": "对生态环境友好的",
          "example": "Attention to eco-friendly packaging is increasing",
          "wordGroup": "group_67",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 248,
          "word": "horticulture",
          "partOfSpeech": "n.",
          "chinese": "园艺学；园艺",
          "example": "Horticulture is the industry and science of plant cultivation",
          "wordGroup": "group_68",
          "colorIndex": 2
        },
        {
          "id": 249,
          "word": "organism",
          "partOfSpeech": "n.",
          "chinese": "有机体；生物",
          "example": "This insect behaves like a parasite, an organism that lives on or in another organism called a host",
          "wordGroup": "group_68",
          "colorIndex": 2
        },
        {
          "id": 250,
          "word": "genetics",
          "partOfSpeech": "n.",
          "chinese": "遗传学",
          "example": "In genetics, genes were formerly called factors",
          "wordGroup": "group_68",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 251,
          "word": "mutation",
          "partOfSpeech": "n.",
          "chinese": "突变；变异",
          "example": "The mutations in plants caused by radiation have been found in experiments",
          "wordGroup": "group_69",
          "colorIndex": 3
        },
        {
          "id": 252,
          "word": "variation",
          "partOfSpeech": "n.",
          "chinese": "变种；变异",
          "example": "Variation among dogs is limited to the possible permutations of their genes",
          "wordGroup": "group_69",
          "colorIndex": 3
        },
        {
          "id": 253,
          "word": "diversity",
          "partOfSpeech": "n.",
          "chinese": "多样性",
          "example": "This place used to a flourishing forest with regional diversity",
          "wordGroup": "group_69",
          "colorIndex": 3
        },
        {
          "id": 254,
          "word": "hybridisation/hybridization",
          "partOfSpeech": "n.",
          "chinese": "杂交",
          "example": "Somatic cell hybridization is a very useful technique",
          "wordGroup": "group_69",
          "colorIndex": 3
        },
        {
          "id": 255,
          "word": "classify",
          "partOfSpeech": "v.",
          "chinese": "分类",
          "example": "Librarians spend a lot of time classifying books",
          "wordGroup": "group_69",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 256,
          "word": "reproduce",
          "partOfSpeech": "v.",
          "chinese": "繁殖",
          "example": "When they can't reproduce, cancerous cells die off, instead of becoming dangerous",
          "wordGroup": "group_70",
          "colorIndex": 4
        },
        {
          "id": 257,
          "word": "evolve",
          "partOfSpeech": "v.",
          "chinese": "进化；发展",
          "example": "The developmental history of society tells us that man has evolved from some ancient primates",
          "wordGroup": "group_70",
          "colorIndex": 4
        },
        {
          "id": 258,
          "word": "fluctuate",
          "partOfSpeech": "v.",
          "chinese": "波动；起伏",
          "example": "The price of vegetables fluctuates seasonally",
          "wordGroup": "group_70",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 259,
          "word": "reclaim",
          "partOfSpeech": "v.",
          "chinese": "开垦；利用",
          "example": "This land was reclaimed from the sea",
          "wordGroup": "group_71",
          "colorIndex": 5
        },
        {
          "id": 260,
          "word": "cultivate",
          "partOfSpeech": "v.",
          "chinese": "耕作；培养",
          "example": "The farmer is cultivating his land",
          "wordGroup": "group_71",
          "colorIndex": 5
        },
        {
          "id": 261,
          "word": "sow",
          "partOfSpeech": "v.",
          "chinese": "播种",
          "example": "These seeds should be sown in April",
          "wordGroup": "group_71",
          "colorIndex": 5
        },
        {
          "id": 262,
          "word": "harvest",
          "partOfSpeech": "v./n.",
          "chinese": "收割；收获；收成",
          "example": "A good summer harvest is not easy to come by",
          "wordGroup": "group_71",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 263,
          "word": "pluck",
          "partOfSpeech": "v.",
          "chinese": "采；摘",
          "example": "The pluck a rose for his lover",
          "wordGroup": "group_72",
          "colorIndex": 0
        },
        {
          "id": 264,
          "word": "pick",
          "partOfSpeech": "v.",
          "chinese": "拾；摘",
          "example": "He picked the watch up from the carpet",
          "wordGroup": "group_72",
          "colorIndex": 0
        },
        {
          "id": 265,
          "word": "yield",
          "partOfSpeech": "v./n.",
          "chinese": "产出；屈服；服从；产量；投资收益",
          "example": "This land yields well",
          "wordGroup": "group_72",
          "colorIndex": 0
        },
        {
          "id": 266,
          "word": "rear",
          "partOfSpeech": "v./n.",
          "chinese": "培养；抚养；饲养；后部",
          "example": "Most farmers in this area rear sheep",
          "wordGroup": "group_72",
          "colorIndex": 0
        },
        {
          "id": 267,
          "word": "arable",
          "partOfSpeech": "adj.",
          "chinese": "适合耕种的",
          "example": "This area changed quickly from arable land to desert",
          "wordGroup": "group_72",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 268,
          "word": "plough/plow",
          "partOfSpeech": "n./v.",
          "chinese": "犁；耕",
          "example": "The ground was ploughed/plowed and planted with corn",
          "wordGroup": "group_73",
          "colorIndex": 1
        },
        {
          "id": 269,
          "word": "spade",
          "partOfSpeech": "n.",
          "chinese": "铲；锹",
          "example": "He bought a new spade",
          "wordGroup": "group_73",
          "colorIndex": 1
        },
        {
          "id": 270,
          "word": "rake",
          "partOfSpeech": "n./v.",
          "chinese": "耙子；耙；搜索",
          "example": "With an ancient rusty rake I went to work",
          "wordGroup": "group_73",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 271,
          "word": "stack",
          "partOfSpeech": "n./v.",
          "chinese": "堆；垛；堆积",
          "example": "I have a stack of homework to do；He placed the books in a neat stack",
          "wordGroup": "group_74",
          "colorIndex": 2
        },
        {
          "id": 272,
          "word": "heap",
          "partOfSpeech": "n.",
          "chinese": "（大而杂乱的）堆",
          "example": "A heap of clothes was lying in the corner",
          "wordGroup": "group_74",
          "colorIndex": 2
        },
        {
          "id": 273,
          "word": "bundle",
          "partOfSpeech": "n.",
          "chinese": "捆；包；束",
          "example": "He collected a bundle of sticks",
          "wordGroup": "group_74",
          "colorIndex": 2
        },
        {
          "id": 274,
          "word": "bunch",
          "partOfSpeech": "n.",
          "chinese": "一束（花）；一串（钥匙）",
          "example": "I bought a bunch of lilacs 我买了一束丁香花",
          "wordGroup": "group_74",
          "colorIndex": 2
        },
        {
          "id": 275,
          "word": "vase",
          "partOfSpeech": "n.",
          "chinese": "瓶；花瓶",
          "example": "This flaw makes the vase less valable",
          "wordGroup": "group_74",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 276,
          "word": "sunlight",
          "partOfSpeech": "n.",
          "chinese": "阳光",
          "example": "The sunlight was reflected by the water",
          "wordGroup": "group_75",
          "colorIndex": 3
        },
        {
          "id": 277,
          "word": "short-day",
          "partOfSpeech": "adj.",
          "chinese": "短日照的",
          "example": "Soybean is a typical short-day crop 大豆是典型的短日照作物",
          "wordGroup": "group_75",
          "colorIndex": 3
        },
        {
          "id": 278,
          "word": "shade-tolerant",
          "partOfSpeech": "adj.",
          "chinese": "耐阴的",
          "example": "He highlighted the importance of shade-tolerant plants in gardens",
          "wordGroup": "group_75",
          "colorIndex": 3
        },
        {
          "id": 279,
          "word": "fungus",
          "partOfSpeech": "n.",
          "chinese": "真菌",
          "example": "Don't eat that fungus. It might be poisonous.",
          "wordGroup": "group_75",
          "colorIndex": 3
        },
        {
          "id": 280,
          "word": "mould/mold",
          "partOfSpeech": "n./v.",
          "chinese": "霉菌/发霉",
          "example": "The walls were black with mould",
          "wordGroup": "group_75",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 281,
          "word": "pollen",
          "partOfSpeech": "n./v.",
          "chinese": "花粉；给...授粉",
          "example": "Each spring, pollen from nearby plants is blown into the water",
          "wordGroup": "group_76",
          "colorIndex": 4
        },
        {
          "id": 282,
          "word": "germinate",
          "partOfSpeech": "v.",
          "chinese": "发芽",
          "example": "Warmth is needed for the seeds to germinate",
          "wordGroup": "group_76",
          "colorIndex": 4
        },
        {
          "id": 283,
          "word": "seed",
          "partOfSpeech": "n.",
          "chinese": "种子",
          "example": "The farmers were scattering seeds over the fields",
          "wordGroup": "group_76",
          "colorIndex": 4
        },
        {
          "id": 284,
          "word": "burgeon",
          "partOfSpeech": "n./v.",
          "chinese": "嫩枝；新芽/极速生长；发芽；抽枝",
          "example": "The firm aimed at the burgeoning market for augmented reality games",
          "wordGroup": "group_76",
          "colorIndex": 4
        },
        {
          "id": 285,
          "word": "bud",
          "partOfSpeech": "n.",
          "chinese": "芽；苞；蓓蕾",
          "example": "The rose are in bud",
          "wordGroup": "group_76",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 286,
          "word": "flower",
          "partOfSpeech": "n./v.",
          "chinese": "花；开花植物/成熟；繁荣；开花",
          "example": "Cherry trees flower in the early spring",
          "wordGroup": "group_77",
          "colorIndex": 5
        },
        {
          "id": 287,
          "word": "blossom",
          "partOfSpeech": "v./n.",
          "chinese": "开花；花朵",
          "example": "The tree was covered with beautiful pink blossom",
          "wordGroup": "group_77",
          "colorIndex": 5
        },
        {
          "id": 288,
          "word": "bloom",
          "partOfSpeech": "n.",
          "chinese": "花朵",
          "example": "The apple trees are out of bloom",
          "wordGroup": "group_77",
          "colorIndex": 5
        },
        {
          "id": 289,
          "word": "scent",
          "partOfSpeech": "n./v.",
          "chinese": "气味；香味；使具有香味",
          "example": "The flower scents the air",
          "wordGroup": "group_77",
          "colorIndex": 5
        },
        {
          "id": 290,
          "word": "aromatic",
          "partOfSpeech": "adj.",
          "chinese": "芳香的",
          "example": "Aromatic plants are often used in cooking",
          "wordGroup": "group_77",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 291,
          "word": "ripen",
          "partOfSpeech": "v.",
          "chinese": "使成熟",
          "example": "The sun ripens the corn",
          "wordGroup": "group_78",
          "colorIndex": 0
        },
        {
          "id": 292,
          "word": "fruit",
          "partOfSpeech": "v.",
          "chinese": "结果实",
          "example": "The apple trees fruited early this year",
          "wordGroup": "group_78",
          "colorIndex": 0
        },
        {
          "id": 293,
          "word": "wither",
          "partOfSpeech": "v.",
          "chinese": "（使）枯萎",
          "example": "The grapes withered on the vine",
          "wordGroup": "group_78",
          "colorIndex": 0
        },
        {
          "id": 294,
          "word": "decompose",
          "partOfSpeech": "v.",
          "chinese": "分解；腐烂",
          "example": "You can apply heat to decompose organic compounds 你可以加热来分解有机化合物",
          "wordGroup": "group_78",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 295,
          "word": "rot",
          "partOfSpeech": "v./n.",
          "chinese": "使腐烂；使腐坏；腐烂",
          "example": "Rot in the tree trunk caused the tree to fall",
          "wordGroup": "group_79",
          "colorIndex": 1
        },
        {
          "id": 296,
          "word": "decay",
          "partOfSpeech": "v.",
          "chinese": "腐烂",
          "example": "The vegetables have begun to decay",
          "wordGroup": "group_79",
          "colorIndex": 1
        },
        {
          "id": 297,
          "word": "stale",
          "partOfSpeech": "adj.",
          "chinese": "不新鲜的；没有新意的；陈腐的",
          "example": "He always bought two loaves of stale bread",
          "wordGroup": "group_79",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 298,
          "word": "rainforest",
          "partOfSpeech": "n.",
          "chinese": "雨林",
          "example": "The rainforest is being systematically destroyed",
          "wordGroup": "group_80",
          "colorIndex": 2
        },
        {
          "id": 299,
          "word": "jungle",
          "partOfSpeech": "n.",
          "chinese": "丛林",
          "example": "Tigets are found in the jungle of Asia",
          "wordGroup": "group_80",
          "colorIndex": 2
        },
        {
          "id": 300,
          "word": "plantation",
          "partOfSpeech": "n.",
          "chinese": "种植园",
          "example": "They work on plantations",
          "wordGroup": "group_80",
          "colorIndex": 2
        },
        {
          "id": 301,
          "word": "field",
          "partOfSpeech": "n.",
          "chinese": "原野；场地；野外",
          "example": "The student of the geological class will be out on field exploration for the duration of the school year",
          "wordGroup": "group_80",
          "colorIndex": 2
        },
        {
          "id": 302,
          "word": "terrace",
          "partOfSpeech": "n.",
          "chinese": "梯田",
          "example": "The terrace channels are convenient for irrigation",
          "wordGroup": "group_80",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 303,
          "word": "timber",
          "partOfSpeech": "n.",
          "chinese": "木材；木料；林木",
          "example": "The farmer spent a day in the woods, hewing timber",
          "wordGroup": "group_81",
          "colorIndex": 3
        },
        {
          "id": 304,
          "word": "charcoal",
          "partOfSpeech": "n.",
          "chinese": "木炭",
          "example": "Preare a fire in a charcoal grill",
          "wordGroup": "group_81",
          "colorIndex": 3
        },
        {
          "id": 305,
          "word": "log",
          "partOfSpeech": "n.",
          "chinese": "原木；日志",
          "example": "A log got in his way as he drove",
          "wordGroup": "group_81",
          "colorIndex": 3
        },
        {
          "id": 306,
          "word": "logo",
          "partOfSpeech": "n.",
          "chinese": "标识；徽标",
          "example": "The letterhead was impressed with the company logo",
          "wordGroup": "group_81",
          "colorIndex": 3
        },
        {
          "id": 307,
          "word": "forestry",
          "partOfSpeech": "n.",
          "chinese": "林学；林业",
          "example": "Mountainous areas covered with forests are the very place for foresty development",
          "wordGroup": "group_81",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 308,
          "word": "branch",
          "partOfSpeech": "n.",
          "chinese": "树枝；分支机构；分店",
          "example": "The company's head office in is the city, but it has branches all over the country",
          "wordGroup": "group_82",
          "colorIndex": 4
        },
        {
          "id": 309,
          "word": "trunk",
          "partOfSpeech": "n.",
          "chinese": "树干；躯干；大箱子",
          "example": "Can she move that trunk by herself?",
          "wordGroup": "group_82",
          "colorIndex": 4
        },
        {
          "id": 310,
          "word": "bough",
          "partOfSpeech": "n.",
          "chinese": "大树枝",
          "example": "The window of her car was broken by a bough during last night's storm",
          "wordGroup": "group_82",
          "colorIndex": 4
        },
        {
          "id": 311,
          "word": "root",
          "partOfSpeech": "n./v.",
          "chinese": "根；使生根",
          "example": "The dog is snuffling about the root of a tree",
          "wordGroup": "group_82",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 312,
          "word": "hay",
          "partOfSpeech": "n.",
          "chinese": "干草",
          "example": "Make hay while sun shines 趁晴晒草，趁热打铁",
          "wordGroup": "group_83",
          "colorIndex": 5
        },
        {
          "id": 313,
          "word": "straw",
          "partOfSpeech": "n.",
          "chinese": "稻草；麦秆；吸管",
          "example": "This hat is made of straw",
          "wordGroup": "group_83",
          "colorIndex": 5
        },
        {
          "id": 314,
          "word": "reed",
          "partOfSpeech": "n.",
          "chinese": "芦苇",
          "example": "The roof is made of dried reeds",
          "wordGroup": "group_83",
          "colorIndex": 5
        },
        {
          "id": 315,
          "word": "thorn",
          "partOfSpeech": "n.",
          "chinese": "刺；荆棘",
          "example": "She got her finger pricked by a thorn",
          "wordGroup": "group_83",
          "colorIndex": 5
        },
        {
          "id": 316,
          "word": "weed",
          "partOfSpeech": "n.",
          "chinese": "杂草",
          "example": "The garden is choked with weeds",
          "wordGroup": "group_83",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 317,
          "word": "grass",
          "partOfSpeech": "n.",
          "chinese": "草；草地",
          "example": "The grass was wet with dew",
          "wordGroup": "group_84",
          "colorIndex": 0
        },
        {
          "id": 318,
          "word": "meadow",
          "partOfSpeech": "n.",
          "chinese": "草地；牧草",
          "example": "The children ran free across the meadow",
          "wordGroup": "group_84",
          "colorIndex": 0
        },
        {
          "id": 319,
          "word": "lawn",
          "partOfSpeech": "n.",
          "chinese": "草地；草坪",
          "example": "My mother asked me to mow the lawn",
          "wordGroup": "group_84",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 320,
          "word": "olive",
          "partOfSpeech": "n.",
          "chinese": "橄榄；橄榄树",
          "example": "The olive branch is the emblem of peace. 橄榄枝是和平的象征",
          "wordGroup": "group_85",
          "colorIndex": 1
        },
        {
          "id": 321,
          "word": "pine",
          "partOfSpeech": "n.",
          "chinese": "松树；松木",
          "example": "It's a place noted for its pine trees and springs",
          "wordGroup": "group_85",
          "colorIndex": 1
        },
        {
          "id": 322,
          "word": "vine",
          "partOfSpeech": "n.",
          "chinese": "葡萄藤",
          "example": "The grapes withered on the vine",
          "wordGroup": "group_85",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 323,
          "word": "violet",
          "partOfSpeech": "n.",
          "chinese": "紫罗兰",
          "example": "The violet is dainty spring flower",
          "wordGroup": "group_86",
          "colorIndex": 2
        },
        {
          "id": 324,
          "word": "tulip",
          "partOfSpeech": "n.",
          "chinese": "郁金香",
          "example": "She trimmed the stalks of the tulips before putting them in a vase",
          "wordGroup": "group_86",
          "colorIndex": 2
        },
        {
          "id": 325,
          "word": "mint",
          "partOfSpeech": "n./v.",
          "chinese": "薄荷；铸币厂/铸造（硬币）",
          "example": "We sat in the back row, sucking mints 我们坐在后排，嘴里咂着薄荷糖",
          "wordGroup": "group_86",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 326,
          "word": "reef",
          "partOfSpeech": "n.",
          "chinese": "暗礁",
          "example": "The ship was wrecked on a reef. 这船触礁失事了",
          "wordGroup": "group_87",
          "colorIndex": 3
        },
        {
          "id": 327,
          "word": "alga",
          "partOfSpeech": "n.",
          "chinese": "海藻",
          "example": "Some of the algae are edible",
          "wordGroup": "group_87",
          "colorIndex": 3
        },
        {
          "id": 328,
          "word": "enzyme",
          "partOfSpeech": "n.",
          "chinese": "酶",
          "example": "One enzyme can activate a thousand of these chemical reactions in a hour",
          "wordGroup": "group_87",
          "colorIndex": 3
        },
        {
          "id": 329,
          "word": "catalyst",
          "partOfSpeech": "n.",
          "chinese": "催化剂；促进因素",
          "example": "A catalyst is a substance which speeds up a chemical reaction",
          "wordGroup": "group_87",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 330,
          "word": "release",
          "partOfSpeech": "v./n.",
          "chinese": "释放；发布",
          "example": "I released the horse and it ran away",
          "wordGroup": "group_88",
          "colorIndex": 4
        },
        {
          "id": 331,
          "word": "emission",
          "partOfSpeech": "n.",
          "chinese": "排放；散发；排放物",
          "example": "This conference aims to reduce carbon emissions or greenhouse gas emissions around the world",
          "wordGroup": "group_88",
          "colorIndex": 4
        },
        {
          "id": 332,
          "word": "absorb",
          "partOfSpeech": "v.",
          "chinese": "吸收；吸引全部注意力",
          "example": "Dry sand absorbs water",
          "wordGroup": "group_88",
          "colorIndex": 4
        },
        {
          "id": 333,
          "word": "circulation",
          "partOfSpeech": "n.",
          "chinese": "流通；循环；流传",
          "example": "Sea surface temperature and atmospheric circulation are strongly coupled",
          "wordGroup": "group_88",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 334,
          "word": "exceed",
          "partOfSpeech": "v.",
          "chinese": "超出",
          "example": "The driver exceeds the speed limit",
          "wordGroup": "group_89",
          "colorIndex": 5
        },
        {
          "id": 335,
          "word": "uptake",
          "partOfSpeech": "n.",
          "chinese": "摄取；领会",
          "example": "The doctor advised me to reduce the salt uptake",
          "wordGroup": "group_89",
          "colorIndex": 5
        },
        {
          "id": 336,
          "word": "nutrient",
          "partOfSpeech": "n.",
          "chinese": "营养物质",
          "example": "The nutrient in the soil acts as a stimulus to growth in plants",
          "wordGroup": "group_89",
          "colorIndex": 5
        },
        {
          "id": 337,
          "word": "energy",
          "partOfSpeech": "n.",
          "chinese": "能源；精力",
          "example": "The majority of the energy we consume comes from fossil fuel energy sources",
          "wordGroup": "group_89",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 338,
          "word": "surroundings",
          "partOfSpeech": "n.",
          "chinese": "环境可与environment互换",
          "example": "The adaptability of the youth to new surroundings is one of they good qualities",
          "wordGroup": "group_90",
          "colorIndex": 0
        },
        {
          "id": 339,
          "word": "mechanism",
          "partOfSpeech": "n.",
          "chinese": "机制；构造",
          "example": "Bones and muscles are parts of the mechanism of the body骨骼和肌肉是身体构造的一部分",
          "wordGroup": "group_90",
          "colorIndex": 0
        },
        {
          "id": 340,
          "word": "counterbalance",
          "partOfSpeech": "n./v.",
          "chinese": "其平衡作用的事物；抵消；对...起平衡作用",
          "example": "Their strength in defense couterbalances our strength in attack",
          "wordGroup": "group_90",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 341,
          "word": "protect",
          "partOfSpeech": "v.",
          "chinese": "保护",
          "example": "We have to do what it takes to protect our parks and protect our planet for generations to come",
          "wordGroup": "group_91",
          "colorIndex": 1
        },
        {
          "id": 342,
          "word": "preserve",
          "partOfSpeech": "v.",
          "chinese": "保护；维持；保存",
          "example": "It is the duty of the police to preserve public order",
          "wordGroup": "group_91",
          "colorIndex": 1
        },
        {
          "id": 343,
          "word": "conservation",
          "partOfSpeech": "n.",
          "chinese": "（对自然环境的）保护；保存",
          "example": "Some accommodation between conservation and tourism is essential. 对自然环境的保护和旅游业之前的相互协调是至关重要的 —— accommodation 除了有住宿还有和解协调的意思",
          "wordGroup": "group_91",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 344,
          "word": "bush fire",
          "partOfSpeech": "n.",
          "chinese": "林区大火",
          "example": "The friendly fallow deer were trapped by a bush fire",
          "wordGroup": "group_92",
          "colorIndex": 2
        },
        {
          "id": 345,
          "word": "extinguish",
          "partOfSpeech": "v.",
          "chinese": "扑灭（火）；使（想法；感情等）破灭",
          "example": "They tried every means to extinguish the fire",
          "wordGroup": "group_92",
          "colorIndex": 2
        },
        {
          "id": 346,
          "word": "destruct",
          "partOfSpeech": "v.",
          "chinese": "（使）自毁",
          "example": "The tape would self-destruct in 20 minutes",
          "wordGroup": "group_92",
          "colorIndex": 2
        },
        {
          "id": 347,
          "word": "ruin",
          "partOfSpeech": "v./n.",
          "chinese": "毁坏；摧毁；毁灭；废墟",
          "example": "The stome ruinned the crops",
          "wordGroup": "group_92",
          "colorIndex": 2
        },
        {
          "id": 348,
          "word": "perish",
          "partOfSpeech": "v.",
          "chinese": "毁灭；消亡；腐烂",
          "example": "Flowers perish when frost comes",
          "wordGroup": "group_92",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 349,
          "word": "demolish",
          "partOfSpeech": "v.",
          "chinese": "毁坏；拆除；推翻",
          "example": "The fire demolished the town",
          "wordGroup": "group_93",
          "colorIndex": 3
        },
        {
          "id": 350,
          "word": "infringe",
          "partOfSpeech": "v.",
          "chinese": "侵犯；违反",
          "example": "The press infringed a copyright agreement",
          "wordGroup": "group_93",
          "colorIndex": 3
        },
        {
          "id": 351,
          "word": "undermine",
          "partOfSpeech": "v.",
          "chinese": "破坏；逐渐削弱",
          "example": "The constant criticism was beginning to undermine her confidence",
          "wordGroup": "group_93",
          "colorIndex": 3
        },
        {
          "id": 352,
          "word": "extinction",
          "partOfSpeech": "n.",
          "chinese": "灭绝",
          "example": "",
          "wordGroup": "group_93",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 353,
          "word": "pattern",
          "partOfSpeech": "n.",
          "chinese": "模式；样式；底样",
          "example": "Training and education follow different patterns in different regions",
          "wordGroup": "group_94",
          "colorIndex": 4
        },
        {
          "id": 354,
          "word": "outcome",
          "partOfSpeech": "n.",
          "chinese": "结果",
          "example": "We are anxiously awaiting the outcome of their discussion",
          "wordGroup": "group_94",
          "colorIndex": 4
        },
        {
          "id": 355,
          "word": "impact",
          "partOfSpeech": "n.",
          "chinese": "影响",
          "example": "We are a flash in time, but our impact is forever",
          "wordGroup": "group_94",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 356,
          "word": "seasonal",
          "partOfSpeech": "adj.",
          "chinese": "季节性的",
          "example": "The greatest seasonal change on our planet is now underway",
          "wordGroup": "group_95",
          "colorIndex": 5
        },
        {
          "id": 357,
          "word": "experimental",
          "partOfSpeech": "adj.",
          "chinese": "实验性的",
          "example": "There is no cure or vaccine, but some patients have been given experimental treatments",
          "wordGroup": "group_95",
          "colorIndex": 5
        },
        {
          "id": 358,
          "word": "favourable/favorable",
          "partOfSpeech": "adj.",
          "chinese": "有利的；赞成的；肯定的",
          "example": "It's encouraging to receive a favorable report on one study",
          "wordGroup": "group_95",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 359,
          "word": "productive",
          "partOfSpeech": "adj.",
          "chinese": "多产的",
          "example": "Once the plants have produced fruit, they become less productive",
          "wordGroup": "group_96",
          "colorIndex": 0
        },
        {
          "id": 360,
          "word": "effective",
          "partOfSpeech": "adj.",
          "chinese": "有效的",
          "example": "These are effective measures",
          "wordGroup": "group_96",
          "colorIndex": 0
        },
        {
          "id": 361,
          "word": "efficient",
          "partOfSpeech": "adj.",
          "chinese": "效率高的",
          "example": "These new coffee machine is more efficient than the old one",
          "wordGroup": "group_96",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 362,
          "word": "considerable",
          "partOfSpeech": "adj.",
          "chinese": "相当多的",
          "example": "It is a considerable sum of money",
          "wordGroup": "group_97",
          "colorIndex": 1
        },
        {
          "id": 363,
          "word": "massive",
          "partOfSpeech": "adj.",
          "chinese": "巨大的；大规模的；庞大的",
          "example": "There are massive mineral resources in the west part of China",
          "wordGroup": "group_97",
          "colorIndex": 1
        },
        {
          "id": 364,
          "word": "immense",
          "partOfSpeech": "adj.",
          "chinese": "巨大的；极好的",
          "example": "They plunged into their work with immense zeal",
          "wordGroup": "group_97",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 365,
          "word": "maximal",
          "partOfSpeech": "adj.",
          "chinese": "最大的",
          "example": "She obtained maximal benefit from the course",
          "wordGroup": "group_98",
          "colorIndex": 2
        },
        {
          "id": 366,
          "word": "minimal",
          "partOfSpeech": "adj.",
          "chinese": "最小的",
          "example": "I stayed with friends so my expenses were minimal",
          "wordGroup": "group_98",
          "colorIndex": 2
        },
        {
          "id": 367,
          "word": "optimal/optimum",
          "partOfSpeech": "adj.",
          "chinese": "最佳的；最理想的",
          "example": "This is the optimal season for the growth of plants",
          "wordGroup": "group_98",
          "colorIndex": 2
        }
      ]
    ]
  },
  {
    "title": "动物保护",
    "groups": [
      [
        {
          "id": 368,
          "word": "biologist",
          "partOfSpeech": "n.",
          "chinese": "生物学家",
          "example": "The biologist brought out a specimen box and showed the items one by one",
          "wordGroup": "group_98",
          "colorIndex": 2
        },
        {
          "id": 369,
          "word": "zoologist",
          "partOfSpeech": "n.",
          "chinese": "动物学家",
          "example": "The zoologist had spent a long time living with monkeys",
          "wordGroup": "group_98",
          "colorIndex": 2
        },
        {
          "id": 370,
          "word": "ecologist",
          "partOfSpeech": "n.",
          "chinese": "生态学家",
          "example": "A contemporary ecologist once said man lives on the earth as a guest of green plants",
          "wordGroup": "group_98",
          "colorIndex": 2
        },
        {
          "id": 371,
          "word": "botanist",
          "partOfSpeech": "n.",
          "chinese": "植物学家",
          "example": "The botanist discovered many rare plants",
          "wordGroup": "group_98",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 372,
          "word": "mammal",
          "partOfSpeech": "n.",
          "chinese": "哺乳动物",
          "example": "Human beings also belonged to the mammal species",
          "wordGroup": "group_99",
          "colorIndex": 3
        },
        {
          "id": 373,
          "word": "primate",
          "partOfSpeech": "n.",
          "chinese": "灵长动物",
          "example": "Compared to body size, the primate's brain is larger than that of other animals",
          "wordGroup": "group_99",
          "colorIndex": 3
        },
        {
          "id": 374,
          "word": "vertebrate",
          "partOfSpeech": "n.",
          "chinese": "脊椎动物",
          "example": "Fish, birds, and human beings are all vertebrates",
          "wordGroup": "group_99",
          "colorIndex": 3
        },
        {
          "id": 375,
          "word": "reptile",
          "partOfSpeech": "n.",
          "chinese": "爬行动物",
          "example": "It is said that he hates reptiles",
          "wordGroup": "group_99",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 376,
          "word": "amphibian",
          "partOfSpeech": "n./adj.",
          "chinese": "两栖动物/两栖的",
          "example": "Nobody knows why amphibians are disappearing. Dolphins are dying and coral is turning white",
          "wordGroup": "group_100",
          "colorIndex": 4
        },
        {
          "id": 377,
          "word": "carnivore",
          "partOfSpeech": "n.",
          "chinese": "肉食动物",
          "example": "Lions and tigers are carnivores",
          "wordGroup": "group_100",
          "colorIndex": 4
        },
        {
          "id": 378,
          "word": "herbivore",
          "partOfSpeech": "n.",
          "chinese": "食草动物",
          "example": "Pandas are classified as carnivores, but they mainly have a diet of an herbivore",
          "wordGroup": "group_100",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 379,
          "word": "creature",
          "partOfSpeech": "n.",
          "chinese": "生物；动物",
          "example": "The crocodile is a strange looking creature",
          "wordGroup": "group_101",
          "colorIndex": 5
        },
        {
          "id": 380,
          "word": "wildlife",
          "partOfSpeech": "n.",
          "chinese": "野生动物",
          "example": "Environmental pollution endangers wildlife",
          "wordGroup": "group_101",
          "colorIndex": 5
        },
        {
          "id": 381,
          "word": "fauna",
          "partOfSpeech": "n.",
          "chinese": "（尤指某一地区的）动物群",
          "example": "The park is also home to grizzly bears, and other Rocky Mountain faunas",
          "wordGroup": "group_101",
          "colorIndex": 5
        },
        {
          "id": 382,
          "word": "flora",
          "partOfSpeech": "n.",
          "chinese": "（尤指某一地区的）植物群",
          "example": "There they compiled precious documents on the manners, government, flora and fauna of the country",
          "wordGroup": "group_101",
          "colorIndex": 5
        },
        {
          "id": 383,
          "word": "species",
          "partOfSpeech": "n.",
          "chinese": "物种",
          "example": "Some species of animals have become extinct, because they could not adapt to a changing environment",
          "wordGroup": "group_101",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 384,
          "word": "flock",
          "partOfSpeech": "n./v.",
          "chinese": "（羊或鸟）群/聚集",
          "example": "Sheep usually flock together",
          "wordGroup": "group_102",
          "colorIndex": 0
        },
        {
          "id": 385,
          "word": "herd",
          "partOfSpeech": "n.",
          "chinese": "兽群；畜群",
          "example": "The herdsman looks after a herd of animals",
          "wordGroup": "group_102",
          "colorIndex": 0
        },
        {
          "id": 386,
          "word": "swarm",
          "partOfSpeech": "n.",
          "chinese": "（蜜蜂昆虫的）一大群；（快速移动的）人群",
          "example": "I saw a swarm of bees attacking the poor monkey",
          "wordGroup": "group_102",
          "colorIndex": 0
        },
        {
          "id": 387,
          "word": "throng",
          "partOfSpeech": "n./v.",
          "chinese": "人群/群集",
          "example": "He was met a throng of journalists and photographers",
          "wordGroup": "group_102",
          "colorIndex": 0
        },
        {
          "id": 388,
          "word": "crowd",
          "partOfSpeech": "n.",
          "chinese": "人群；观众；一群人",
          "example": "The crowd was very well behaved",
          "wordGroup": "group_102",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 389,
          "word": "beast",
          "partOfSpeech": "n.",
          "chinese": "野兽；凶残的人；畜生",
          "example": "The hunters blocked up the den of the beast",
          "wordGroup": "group_103",
          "colorIndex": 1
        },
        {
          "id": 390,
          "word": "brute",
          "partOfSpeech": "n.",
          "chinese": "粗野的人；残忍的人",
          "example": "We all want to punish the brute",
          "wordGroup": "group_103",
          "colorIndex": 1
        },
        {
          "id": 391,
          "word": "cruel",
          "partOfSpeech": "adj.",
          "chinese": "残忍的；残暴的",
          "example": "The death of their daughter was a cruel blow",
          "wordGroup": "group_103",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 392,
          "word": "originate",
          "partOfSpeech": "v.",
          "chinese": "发源；来自；创始",
          "example": "The use of the computer has originated many other societal reforms",
          "wordGroup": "group_104",
          "colorIndex": 2
        },
        {
          "id": 393,
          "word": "derive",
          "partOfSpeech": "v.",
          "chinese": "得到；（使）源自",
          "example": "I derived a lot of pleasure from meeting new people at college",
          "wordGroup": "group_104",
          "colorIndex": 2
        },
        {
          "id": 394,
          "word": "stem",
          "partOfSpeech": "v./n.",
          "chinese": "起源于；来自/茎；梗",
          "example": "Correct decisions stem from correct judgments",
          "wordGroup": "group_104",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 395,
          "word": "ancestor",
          "partOfSpeech": "n.",
          "chinese": "祖宗；祖先",
          "example": "Lions and house cats evolved from a common ancestor",
          "wordGroup": "group_105",
          "colorIndex": 3
        },
        {
          "id": 396,
          "word": "descendant",
          "partOfSpeech": "n./adj.",
          "chinese": "后裔；后代/下降的",
          "example": "He is a descendant of Queen Victoria",
          "wordGroup": "group_105",
          "colorIndex": 3
        },
        {
          "id": 397,
          "word": "offspring",
          "partOfSpeech": "n.",
          "chinese": "后代；子孙；产物",
          "example": "They have two offspring",
          "wordGroup": "group_105",
          "colorIndex": 3
        },
        {
          "id": 398,
          "word": "subgroup",
          "partOfSpeech": "n.",
          "chinese": "子群",
          "example": "According to a subgroup analysis, violence produce more violence",
          "wordGroup": "group_105",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 399,
          "word": "feed",
          "partOfSpeech": "v.",
          "chinese": "供养；喂养；进食",
          "example": "He has to work hard to feed and clothe his family",
          "wordGroup": "group_106",
          "colorIndex": 4
        },
        {
          "id": 400,
          "word": "breed",
          "partOfSpeech": "v./n.",
          "chinese": "饲养；繁殖/品种",
          "example": "She breeds orchids in her greenhouse",
          "wordGroup": "group_106",
          "colorIndex": 4
        },
        {
          "id": 401,
          "word": "interbreed",
          "partOfSpeech": "v.",
          "chinese": "（使）品种杂交",
          "example": "Fish of different shapes are difficult to interbreed",
          "wordGroup": "group_106",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 402,
          "word": "hybridize/hybridise",
          "partOfSpeech": "v.",
          "chinese": "（使）杂交",
          "example": "Immediately rose breeders began to hybridize it with other red roses",
          "wordGroup": "group_107",
          "colorIndex": 5
        },
        {
          "id": 403,
          "word": "proliferate",
          "partOfSpeech": "v.",
          "chinese": "迅速增殖；剧增",
          "example": "Microbes proliferate rapidly",
          "wordGroup": "group_107",
          "colorIndex": 5
        },
        {
          "id": 404,
          "word": "sterility",
          "partOfSpeech": "n.",
          "chinese": "不生育",
          "example": "This disease causes sterility in both males and females",
          "wordGroup": "group_107",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 405,
          "word": "mate",
          "partOfSpeech": "v./n.",
          "chinese": "交配/配偶",
          "example": "Many animals mate in the spring",
          "wordGroup": "group_108",
          "colorIndex": 0
        },
        {
          "id": 406,
          "word": "courtship",
          "partOfSpeech": "n.",
          "chinese": "求偶",
          "example": "They attract females with elaborate courtship rituals",
          "wordGroup": "group_108",
          "colorIndex": 0
        },
        {
          "id": 407,
          "word": "lay",
          "partOfSpeech": "v.",
          "chinese": "产；放置；铺设",
          "example": "They lay eggs from the beginning of July to the middle of August",
          "wordGroup": "group_108",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 408,
          "word": "hatch",
          "partOfSpeech": "v./n.",
          "chinese": "孵化",
          "example": "Don't count the chickens before they are hatched 不要过早打如意算盘",
          "wordGroup": "group_109",
          "colorIndex": 1
        },
        {
          "id": 409,
          "word": "brood",
          "partOfSpeech": "n./v.",
          "chinese": "一窝幼鸟；孵（蛋）",
          "example": "The bird was trying to find food for its brood",
          "wordGroup": "group_109",
          "colorIndex": 1
        },
        {
          "id": 410,
          "word": "spawn",
          "partOfSpeech": "n./v.",
          "chinese": "（鱼、蛙的）卵；产卵；引起",
          "example": "Many sea fishes spawn in rivers",
          "wordGroup": "group_109",
          "colorIndex": 1
        },
        {
          "id": 411,
          "word": "mature",
          "partOfSpeech": "adj./v.",
          "chinese": "成熟的；成熟",
          "example": "You are a mature man now, you are no longer a boy",
          "wordGroup": "group_109",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 412,
          "word": "skin",
          "partOfSpeech": "n.",
          "chinese": "皮肤",
          "example": "When he fell he just broke the skin",
          "wordGroup": "group_110",
          "colorIndex": 2
        },
        {
          "id": 413,
          "word": "claw",
          "partOfSpeech": "n./v.",
          "chinese": "爪；钳；鳌；爪状物/抓；挠；撕",
          "example": "A hen's claw has four toes",
          "wordGroup": "group_110",
          "colorIndex": 2
        },
        {
          "id": 414,
          "word": "paw",
          "partOfSpeech": "n.",
          "chinese": "（动物的）脚掌；爪子",
          "example": "This is a black cat with white paws",
          "wordGroup": "group_110",
          "colorIndex": 2
        },
        {
          "id": 415,
          "word": "beak",
          "partOfSpeech": "n.",
          "chinese": "鸟嘴；喙",
          "example": "The bird picked a hole in the ice with its beak",
          "wordGroup": "group_110",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 416,
          "word": "fin",
          "partOfSpeech": "n.",
          "chinese": "鳍",
          "example": "In the future, shark fin soup will be off the menu at a major resort in Singapore",
          "wordGroup": "group_111",
          "colorIndex": 3
        },
        {
          "id": 417,
          "word": "wing",
          "partOfSpeech": "n.",
          "chinese": "翅膀",
          "example": "A seagull fluttered down with an injured wing",
          "wordGroup": "group_111",
          "colorIndex": 3
        },
        {
          "id": 418,
          "word": "plume",
          "partOfSpeech": "n.",
          "chinese": "羽毛",
          "example": "This is the long plume of a heron in the breeding season",
          "wordGroup": "group_111",
          "colorIndex": 3
        },
        {
          "id": 419,
          "word": "feather",
          "partOfSpeech": "n.",
          "chinese": "羽毛",
          "example": "A feather is very light so that we say as light as a feather",
          "wordGroup": "group_111",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 420,
          "word": "fur",
          "partOfSpeech": "n.",
          "chinese": "软毛；毛皮",
          "example": "Alice is allergic to fur of cats",
          "wordGroup": "group_112",
          "colorIndex": 4
        },
        {
          "id": 421,
          "word": "bristle",
          "partOfSpeech": "n.",
          "chinese": "鬃毛；短而硬的毛，刚毛",
          "example": "The brush is made of animal bristles",
          "wordGroup": "group_112",
          "colorIndex": 4
        },
        {
          "id": 422,
          "word": "curl",
          "partOfSpeech": "n./v.",
          "chinese": "卷曲；螺旋状物/（使）卷曲",
          "example": "As he got older, his hair lost its curl",
          "wordGroup": "group_112",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 423,
          "word": "insect",
          "partOfSpeech": "n.",
          "chinese": "昆虫",
          "example": "The insect bit him and drew blood from his arm",
          "wordGroup": "group_113",
          "colorIndex": 5
        },
        {
          "id": 424,
          "word": "worm",
          "partOfSpeech": "n.",
          "chinese": "蠕虫",
          "example": "The worm was crushed under the feet",
          "wordGroup": "group_113",
          "colorIndex": 5
        },
        {
          "id": 425,
          "word": "pest",
          "partOfSpeech": "n.",
          "chinese": "害虫；有害动物",
          "example": "Insects which eat crops are pests",
          "wordGroup": "group_113",
          "colorIndex": 5
        },
        {
          "id": 426,
          "word": "parasite",
          "partOfSpeech": "n.",
          "chinese": "寄生虫",
          "example": "The life of the parasite is maintained by new blood-sucking mosquitoes",
          "wordGroup": "group_113",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 427,
          "word": "spider",
          "partOfSpeech": "n.",
          "chinese": "蜘蛛",
          "example": "The little girl thinks spiders are terrible creatures",
          "wordGroup": "group_114",
          "colorIndex": 0
        },
        {
          "id": 428,
          "word": "butterfly",
          "partOfSpeech": "n.",
          "chinese": "蝴蝶",
          "example": "A butterfly is flying up and down among the flowers",
          "wordGroup": "group_114",
          "colorIndex": 0
        },
        {
          "id": 429,
          "word": "mosquito",
          "partOfSpeech": "n.",
          "chinese": "蚊子",
          "example": "The mosquito is an annoying creature",
          "wordGroup": "group_114",
          "colorIndex": 0
        },
        {
          "id": 430,
          "word": "cricket",
          "partOfSpeech": "n.",
          "chinese": "蟋蟀",
          "example": "A cricket in the house is good luck",
          "wordGroup": "group_114",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 431,
          "word": "penguin",
          "partOfSpeech": "n.",
          "chinese": "企鹅",
          "example": "The penguin is polular with people",
          "wordGroup": "group_115",
          "colorIndex": 1
        },
        {
          "id": 432,
          "word": "seal",
          "partOfSpeech": "n./v.",
          "chinese": "海豹；封条；图章；密封",
          "example": "Polar bears set off in search of their favorite meal-seals",
          "wordGroup": "group_115",
          "colorIndex": 1
        },
        {
          "id": 433,
          "word": "tortoise",
          "partOfSpeech": "n.",
          "chinese": "龟；陆龟",
          "example": "Do you remember the story about a race between the tortoise and the hare?",
          "wordGroup": "group_115",
          "colorIndex": 1
        },
        {
          "id": 434,
          "word": "turtle",
          "partOfSpeech": "n.",
          "chinese": "海龟",
          "example": "If you turn over a turtle on its back, it will become helpless",
          "wordGroup": "group_115",
          "colorIndex": 1
        },
        {
          "id": 435,
          "word": "whale",
          "partOfSpeech": "n./v.",
          "chinese": "鲸；捕鲸",
          "example": "We may live to see the extinction of the whale",
          "wordGroup": "group_115",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 436,
          "word": "kangaroo",
          "partOfSpeech": "n.",
          "chinese": "袋鼠",
          "example": "The kangaroo is native to Australia",
          "wordGroup": "group_116",
          "colorIndex": 2
        },
        {
          "id": 437,
          "word": "camel",
          "partOfSpeech": "n.",
          "chinese": "骆驼",
          "example": "The merchant decided to use camels to carry his goods across the desert",
          "wordGroup": "group_116",
          "colorIndex": 2
        },
        {
          "id": 438,
          "word": "panda",
          "partOfSpeech": "n.",
          "chinese": "熊猫",
          "example": "Pandas are loved by people all over the world",
          "wordGroup": "group_116",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 439,
          "word": "elephant",
          "partOfSpeech": "n.",
          "chinese": "大象",
          "example": "A specific attribute of the elephant is its long trunk",
          "wordGroup": "group_117",
          "colorIndex": 3
        },
        {
          "id": 440,
          "word": "trunk",
          "partOfSpeech": "n.",
          "chinese": "象鼻",
          "example": "The elephant's trunk is powerful enough to uproot trees",
          "wordGroup": "group_117",
          "colorIndex": 3
        },
        {
          "id": 441,
          "word": "ivory",
          "partOfSpeech": "n.",
          "chinese": "象牙",
          "example": "The professor lived in an ivory tower",
          "wordGroup": "group_117",
          "colorIndex": 3
        },
        {
          "id": 442,
          "word": "horn",
          "partOfSpeech": "n.",
          "chinese": "（牛羊等动物的）角；（乐器的）号",
          "example": "The young goat is just beginning to grow horns",
          "wordGroup": "group_117",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 443,
          "word": "bear",
          "partOfSpeech": "n.",
          "chinese": "熊",
          "example": "The bear is a large heavy animal with thick fur",
          "wordGroup": "group_118",
          "colorIndex": 4
        },
        {
          "id": 444,
          "word": "wolf",
          "partOfSpeech": "n.",
          "chinese": "狼",
          "example": "The wolf snapped at the hunter's hand",
          "wordGroup": "group_118",
          "colorIndex": 4
        },
        {
          "id": 445,
          "word": "dragon",
          "partOfSpeech": "n.",
          "chinese": "龙；悍妇",
          "example": "Dragons are described as monsters in most western countries",
          "wordGroup": "group_118",
          "colorIndex": 4
        },
        {
          "id": 446,
          "word": "fox",
          "partOfSpeech": "n.",
          "chinese": "狐狸🦊；狡猾的人",
          "example": "Don't trust him. He is a sly old fox",
          "wordGroup": "group_118",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 447,
          "word": "cub",
          "partOfSpeech": "n.",
          "chinese": "幼兽",
          "example": "The cub licked the milk from its mother's breast",
          "wordGroup": "group_119",
          "colorIndex": 5
        },
        {
          "id": 448,
          "word": "calf",
          "partOfSpeech": "n.",
          "chinese": "幼兽；小牛🐂",
          "example": "Did you see the cow with her calf",
          "wordGroup": "group_119",
          "colorIndex": 5
        },
        {
          "id": 449,
          "word": "pup",
          "partOfSpeech": "n.",
          "chinese": "幼小动物",
          "example": "I'll get you an Alsatian pup for Christmas",
          "wordGroup": "group_119",
          "colorIndex": 5
        },
        {
          "id": 450,
          "word": "lamb",
          "partOfSpeech": "n.",
          "chinese": "羔羊",
          "example": "The little lamb was caught by the wolf",
          "wordGroup": "group_119",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 451,
          "word": "cattle",
          "partOfSpeech": "n.",
          "chinese": "牛",
          "example": "There are many herds of cattle in the meadow",
          "wordGroup": "group_120",
          "colorIndex": 0
        },
        {
          "id": 452,
          "word": "ox",
          "partOfSpeech": "n.",
          "chinese": "（阉割的）公牛",
          "example": "The frequent, unresonable whips angered the ox",
          "wordGroup": "group_120",
          "colorIndex": 0
        },
        {
          "id": 453,
          "word": "bull",
          "partOfSpeech": "n.",
          "chinese": "公牛",
          "example": "He was a great bull of a man 他以前是个大块头",
          "wordGroup": "group_120",
          "colorIndex": 0
        },
        {
          "id": 454,
          "word": "buffalo",
          "partOfSpeech": "n.",
          "chinese": "水牛；野牛",
          "example": "There were lots of buffaloes in North America a hundred years ago",
          "wordGroup": "group_120",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 455,
          "word": "horse",
          "partOfSpeech": "n.",
          "chinese": "马🐴",
          "example": "The horse became frightened and ran away",
          "wordGroup": "group_121",
          "colorIndex": 1
        },
        {
          "id": 456,
          "word": "zebra",
          "partOfSpeech": "n.",
          "chinese": "斑马🦓",
          "example": "There are several species of zebra",
          "wordGroup": "group_121",
          "colorIndex": 1
        },
        {
          "id": 457,
          "word": "donkey",
          "partOfSpeech": "n.",
          "chinese": "驴子",
          "example": "The donkey is eating grass on the field",
          "wordGroup": "group_121",
          "colorIndex": 1
        },
        {
          "id": 458,
          "word": "saddle",
          "partOfSpeech": "n.",
          "chinese": "鞍；马鞍；车座",
          "example": "He was putting a saddle on the horse",
          "wordGroup": "group_121",
          "colorIndex": 1
        },
        {
          "id": 459,
          "word": "harness",
          "partOfSpeech": "n.",
          "chinese": "马具；挽具",
          "example": "You cannot judge a horse by its harness",
          "wordGroup": "group_121",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 460,
          "word": "falcon",
          "partOfSpeech": "n.",
          "chinese": "隼；猎鹰",
          "example": "His falcon flew into a window of the empty castle and did not return",
          "wordGroup": "group_122",
          "colorIndex": 2
        },
        {
          "id": 461,
          "word": "hawk",
          "partOfSpeech": "n.",
          "chinese": "鹰；隼",
          "example": "A hawk hovered in the blue sky",
          "wordGroup": "group_122",
          "colorIndex": 2
        },
        {
          "id": 462,
          "word": "eagle",
          "partOfSpeech": "n.",
          "chinese": "雕",
          "example": "The eagle dive down on the rabbit",
          "wordGroup": "group_122",
          "colorIndex": 2
        },
        {
          "id": 463,
          "word": "owl",
          "partOfSpeech": "n.",
          "chinese": "猫头鹰",
          "example": "The owl is sacred for many Californian Indian people",
          "wordGroup": "group_122",
          "colorIndex": 2
        },
        {
          "id": 464,
          "word": "swallow",
          "partOfSpeech": "n.",
          "chinese": "燕子",
          "example": "There are many swallows flying in the sky",
          "wordGroup": "group_122",
          "colorIndex": 2
        },
        {
          "id": 465,
          "word": "sparrow",
          "partOfSpeech": "n.",
          "chinese": "麻雀",
          "example": "A sparrow is very alert in its movement",
          "wordGroup": "group_122",
          "colorIndex": 2
        },
        {
          "id": 466,
          "word": "pigeon",
          "partOfSpeech": "n.",
          "chinese": "鸽子",
          "example": "An old man sat on the park bench and fed the pigeons",
          "wordGroup": "group_122",
          "colorIndex": 2
        },
        {
          "id": 467,
          "word": "crow",
          "partOfSpeech": "n.",
          "chinese": "乌鸦",
          "example": "The farmers tried to fear the crows out of the cornfield by planting several men of straw",
          "wordGroup": "group_122",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 468,
          "word": "swan",
          "partOfSpeech": "n.",
          "chinese": "天鹅",
          "example": "The witch turns the princess into a swan",
          "wordGroup": "group_123",
          "colorIndex": 3
        },
        {
          "id": 469,
          "word": "goose",
          "partOfSpeech": "n.",
          "chinese": "鹅；鹅肉",
          "example": "They often have goose at Christmas time",
          "wordGroup": "group_123",
          "colorIndex": 3
        },
        {
          "id": 470,
          "word": "cock",
          "partOfSpeech": "n.",
          "chinese": "公鸡；雄禽",
          "example": "The cock has brighter colored feathers than the hen",
          "wordGroup": "group_123",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 471,
          "word": "mouse",
          "partOfSpeech": "n.",
          "chinese": "老鼠；鼠标",
          "example": "The cat was playing with a live mouse",
          "wordGroup": "group_124",
          "colorIndex": 4
        },
        {
          "id": 472,
          "word": "rat",
          "partOfSpeech": "n.",
          "chinese": "老鼠；卑鄙的人",
          "example": "Now I can see why people say he is such a rat",
          "wordGroup": "group_124",
          "colorIndex": 4
        },
        {
          "id": 473,
          "word": "squirrel",
          "partOfSpeech": "n.",
          "chinese": "松鼠",
          "example": "The squirrel ran up a tree and got out of my reach",
          "wordGroup": "group_124",
          "colorIndex": 4
        },
        {
          "id": 474,
          "word": "hare",
          "partOfSpeech": "n.",
          "chinese": "野兔",
          "example": "The hunter watched for the hare to come out of the burrow",
          "wordGroup": "group_124",
          "colorIndex": 4
        },
        {
          "id": 475,
          "word": "frog",
          "partOfSpeech": "n.",
          "chinese": "青蛙",
          "example": "A frog can live both on land and in water",
          "wordGroup": "group_124",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 476,
          "word": "behaviour/behavior",
          "partOfSpeech": "n.",
          "chinese": "行为；活动方式",
          "example": "They observed the behavior of their new pet",
          "wordGroup": "group_125",
          "colorIndex": 5
        },
        {
          "id": 477,
          "word": "bite",
          "partOfSpeech": "v./n.",
          "chinese": "咬；（昆虫）叮；吞饵",
          "example": "The mosquitoes are biting me",
          "wordGroup": "group_125",
          "colorIndex": 5
        },
        {
          "id": 478,
          "word": "sting",
          "partOfSpeech": "v./n.",
          "chinese": "刺；叮；（使）感觉刺痛；鳌针；蜇痛",
          "example": "It is the nature of the scorpion to sting",
          "wordGroup": "group_125",
          "colorIndex": 5
        },
        {
          "id": 479,
          "word": "bark",
          "partOfSpeech": "v./n.",
          "chinese": "吠；大声嚷；树皮",
          "example": "Barking dogs seldom bite",
          "wordGroup": "group_125",
          "colorIndex": 5
        },
        {
          "id": 480,
          "word": "roar",
          "partOfSpeech": "n./v.",
          "chinese": "吼叫；咆哮",
          "example": "The whole room rang with a roar",
          "wordGroup": "group_125",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 481,
          "word": "rub",
          "partOfSpeech": "v./n.",
          "chinese": "擦；摩擦/困难；障碍",
          "example": "It is an Eskimo custom to cub noses as a greeting",
          "wordGroup": "group_126",
          "colorIndex": 0
        },
        {
          "id": 482,
          "word": "creep",
          "partOfSpeech": "v.",
          "chinese": "爬行；悄悄地爬行",
          "example": "We take off our shoes and creep cautiously along the passage",
          "wordGroup": "group_126",
          "colorIndex": 0
        },
        {
          "id": 483,
          "word": "crawl",
          "partOfSpeech": "v.",
          "chinese": "爬；爬行；卑躬屈膝；巴结",
          "example": "Your must not crawl into the favor of your superior",
          "wordGroup": "group_126",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 484,
          "word": "habitat",
          "partOfSpeech": "n.",
          "chinese": "栖息地",
          "example": "The Arctic region is the habitat of the polar bear",
          "wordGroup": "group_127",
          "colorIndex": 1
        },
        {
          "id": 485,
          "word": "nest",
          "partOfSpeech": "n.",
          "chinese": "巢；窝；穴",
          "example": "The male hunts for food while his mate guards the nest",
          "wordGroup": "group_127",
          "colorIndex": 1
        },
        {
          "id": 486,
          "word": "hive",
          "partOfSpeech": "n./v.",
          "chinese": "蜂房；繁忙的场所；（使）入蜂箱；（像蜜蜂般）密集群居",
          "example": "This marketplace was once a hive of activity 一片繁忙景象",
          "wordGroup": "group_127",
          "colorIndex": 1
        },
        {
          "id": 487,
          "word": "cell",
          "partOfSpeech": "n.",
          "chinese": "蜂房巢室；细胞；单人牢房",
          "example": "The prisoner was locked in a cell",
          "wordGroup": "group_127",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 488,
          "word": "cage",
          "partOfSpeech": "n.",
          "chinese": "笼子",
          "example": "The lion paced the floor of his cage restlessly",
          "wordGroup": "group_128",
          "colorIndex": 2
        },
        {
          "id": 489,
          "word": "stable",
          "partOfSpeech": "n./adj.",
          "chinese": "马厩；牛棚；稳定的",
          "example": "The horse in the stable has broken out",
          "wordGroup": "group_128",
          "colorIndex": 2
        },
        {
          "id": 490,
          "word": "barn",
          "partOfSpeech": "n.",
          "chinese": "谷仓；牲口棚",
          "example": "The cows were feeding on hay in the barn",
          "wordGroup": "group_128",
          "colorIndex": 2
        },
        {
          "id": 491,
          "word": "hedge",
          "partOfSpeech": "n.",
          "chinese": "树篱；障碍物",
          "example": "There is a opening in the hedge",
          "wordGroup": "group_128",
          "colorIndex": 2
        },
        {
          "id": 492,
          "word": "barrier",
          "partOfSpeech": "n.",
          "chinese": "障碍",
          "example": "Lack of confidence is the biggest barrier to the improvement of your English",
          "wordGroup": "group_128",
          "colorIndex": 2
        },
        {
          "id": 493,
          "word": "bar",
          "partOfSpeech": "n.",
          "chinese": "栅；栏杆；条；长块",
          "example": "A bar of chocolate is enough to stop his crying",
          "wordGroup": "group_128",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 494,
          "word": "anatomy",
          "partOfSpeech": "n.",
          "chinese": "解剖学",
          "example": "We have to do anatomy next term",
          "wordGroup": "group_129",
          "colorIndex": 3
        },
        {
          "id": 495,
          "word": "epidemic",
          "partOfSpeech": "n./adj.",
          "chinese": "流行病；（坏事的）盛行；流行性的；极为盛行的",
          "example": "Violence is reaching epidemic levels in some of the films and TV shows",
          "wordGroup": "group_129",
          "colorIndex": 3
        },
        {
          "id": 496,
          "word": "gene",
          "partOfSpeech": "n.",
          "chinese": "基因",
          "example": "You have good genes from your parents, so you should live a long time",
          "wordGroup": "group_129",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 497,
          "word": "germ",
          "partOfSpeech": "n.",
          "chinese": "微生物；细菌",
          "example": "Disinfectants are used to kill germs",
          "wordGroup": "group_130",
          "colorIndex": 4
        },
        {
          "id": 498,
          "word": "bacteria",
          "partOfSpeech": "n.",
          "chinese": "细菌；bacterium 的复数形式",
          "example": "Bacteria in drinking water have spread the illness",
          "wordGroup": "group_130",
          "colorIndex": 4
        },
        {
          "id": 499,
          "word": "virus",
          "partOfSpeech": "n.",
          "chinese": "病毒",
          "example": "My computer was accidentally infected with a virus called Trojan Horse",
          "wordGroup": "group_130",
          "colorIndex": 4
        },
        {
          "id": 500,
          "word": "microbe",
          "partOfSpeech": "n.",
          "chinese": "微生物",
          "example": "Would the good microbes do battle with the bad microbes and help to restore their health?",
          "wordGroup": "group_130",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 501,
          "word": "metabolism",
          "partOfSpeech": "n.",
          "chinese": "新陈代谢",
          "example": "Some people's metabolism is more efficient than others",
          "wordGroup": "group_131",
          "colorIndex": 5
        },
        {
          "id": 502,
          "word": "protein",
          "partOfSpeech": "n.",
          "chinese": "蛋白质",
          "example": "You need more protein to build you up",
          "wordGroup": "group_131",
          "colorIndex": 5
        },
        {
          "id": 503,
          "word": "vitamin",
          "partOfSpeech": "n.",
          "chinese": "维生素",
          "example": "Fresh green foodstuffs contain rich vitamins",
          "wordGroup": "group_131",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 504,
          "word": "secrete",
          "partOfSpeech": "v.",
          "chinese": "分泌",
          "example": "The kidneys secrete urine",
          "wordGroup": "group_132",
          "colorIndex": 0
        },
        {
          "id": 505,
          "word": "excrete",
          "partOfSpeech": "v.",
          "chinese": "排泄；分泌",
          "example": "The function of kidneys is to excrete waste products",
          "wordGroup": "group_132",
          "colorIndex": 0
        },
        {
          "id": 506,
          "word": "devour",
          "partOfSpeech": "v.",
          "chinese": "吞食；狼吞虎咽的吃",
          "example": "The lion devoured the deer",
          "wordGroup": "group_132",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 507,
          "word": "instinct",
          "partOfSpeech": "n.",
          "chinese": "本能；天性；直觉",
          "example": "Don't trust anything except your instinct",
          "wordGroup": "group_133",
          "colorIndex": 1
        },
        {
          "id": 508,
          "word": "intuitive",
          "partOfSpeech": "adj.",
          "chinese": "直觉的",
          "example": "He seemed to have an intuitive knowledge of how I was feeling",
          "wordGroup": "group_133",
          "colorIndex": 1
        },
        {
          "id": 509,
          "word": "potential",
          "partOfSpeech": "n./adj.",
          "chinese": "潜力/潜在的",
          "example": "She showed great potential as an actress",
          "wordGroup": "group_133",
          "colorIndex": 1
        },
        {
          "id": 510,
          "word": "intelligence",
          "partOfSpeech": "n.",
          "chinese": "智慧；智力；情报；谍报",
          "example": "Use your intelligence, and you're sure to succeed some day",
          "wordGroup": "group_133",
          "colorIndex": 1
        },
        {
          "id": 511,
          "word": "functional",
          "partOfSpeech": "adj.",
          "chinese": "功能的；起作用的",
          "example": "What are the functional benefits of the brand?",
          "wordGroup": "group_133",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 512,
          "word": "sensitive",
          "partOfSpeech": "adj.",
          "chinese": "灵敏的；易担忧的；需谨慎对待的",
          "example": "She is sensitive to what people think of her",
          "wordGroup": "group_134",
          "colorIndex": 2
        },
        {
          "id": 513,
          "word": "flexible",
          "partOfSpeech": "adj.",
          "chinese": "灵活的；弹性的",
          "example": "We can visit your company on Monday or Tuesday. Our plans are fairly flexible",
          "wordGroup": "group_134",
          "colorIndex": 2
        },
        {
          "id": 514,
          "word": "acoustic",
          "partOfSpeech": "adj.",
          "chinese": "听觉的；声音的",
          "example": "Acoustic beauty is also very important to the modern gardens",
          "wordGroup": "group_134",
          "colorIndex": 2
        },
        {
          "id": 515,
          "word": "optical",
          "partOfSpeech": "adj.",
          "chinese": "视觉的；光学的",
          "example": "Microscopes and telescopes are optical instruments",
          "wordGroup": "group_134",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 516,
          "word": "nocturnal",
          "partOfSpeech": "adj.",
          "chinese": "夜间活动的",
          "example": "Hamsters are nocturnal creatures",
          "wordGroup": "group_135",
          "colorIndex": 3
        },
        {
          "id": 517,
          "word": "dormant",
          "partOfSpeech": "adj.",
          "chinese": "睡着的；休眠的；（动物等）冬眠的",
          "example": "Many living things are dormant in winter",
          "wordGroup": "group_135",
          "colorIndex": 3
        },
        {
          "id": 518,
          "word": "hibernation",
          "partOfSpeech": "n.",
          "chinese": "冬眠",
          "example": "Some animals can overwinter without the hibernation",
          "wordGroup": "group_135",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 519,
          "word": "track",
          "partOfSpeech": "v./n.",
          "chinese": "追踪；足迹；踪迹；轨道",
          "example": "The hunter followed the animal's tracks",
          "wordGroup": "group_136",
          "colorIndex": 4
        },
        {
          "id": 520,
          "word": "trace",
          "partOfSpeech": "v./n.",
          "chinese": "追踪；查出；追溯；痕迹；少许",
          "example": "They traced the criminal to a house in the city",
          "wordGroup": "group_136",
          "colorIndex": 4
        },
        {
          "id": 521,
          "word": "alternate",
          "partOfSpeech": "v.",
          "chinese": "（使）交替；（使）轮流",
          "example": "Sunny weather alternated with rain",
          "wordGroup": "group_136",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 522,
          "word": "prey",
          "partOfSpeech": "n./v.",
          "chinese": "猎物；捕食",
          "example": "snacks track their prey by its scent",
          "wordGroup": "group_137",
          "colorIndex": 5
        },
        {
          "id": 523,
          "word": "predator",
          "partOfSpeech": "n.",
          "chinese": "掠夺者；捕食性动物",
          "example": "These predators of the African grasslands live on mice and rabbits",
          "wordGroup": "group_137",
          "colorIndex": 5
        },
        {
          "id": 524,
          "word": "victim",
          "partOfSpeech": "n.",
          "chinese": "受害者",
          "example": "One of the booming victims was dead on arrival in hospital",
          "wordGroup": "group_137",
          "colorIndex": 5
        },
        {
          "id": 525,
          "word": "captive",
          "partOfSpeech": "n./adj.",
          "chinese": "俘虏；被关押的；收控制的",
          "example": "Armed gunmen broke into the church and took the priest captive",
          "wordGroup": "group_137",
          "colorIndex": 5
        },
        {
          "id": 526,
          "word": "defensive",
          "partOfSpeech": "adj.",
          "chinese": "防御性的",
          "example": "we took a defensive attitude in the negotiation",
          "wordGroup": "group_137",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 527,
          "word": "undergo",
          "partOfSpeech": "v.",
          "chinese": "经历；经受",
          "example": "I underwent so much suffering in early years that I am afraid of nothing today",
          "wordGroup": "group_138",
          "colorIndex": 0
        },
        {
          "id": 528,
          "word": "suffer",
          "partOfSpeech": "v.",
          "chinese": "遭受；受折磨；变糟",
          "example": "They suffered huge losses in the financial crisis",
          "wordGroup": "group_138",
          "colorIndex": 0
        },
        {
          "id": 529,
          "word": "vulnerable",
          "partOfSpeech": "adj.",
          "chinese": "易受伤的；脆弱的",
          "example": "The young girl looked very vulnerable",
          "wordGroup": "group_138",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 530,
          "word": "subsistence",
          "partOfSpeech": "n.",
          "chinese": "勉强维持生活",
          "example": "The standard of living at that time was on the edge of subsistence 当时的生活水平处于勉强维生边缘",
          "wordGroup": "group_139",
          "colorIndex": 1
        },
        {
          "id": 531,
          "word": "exist",
          "partOfSpeech": "v.",
          "chinese": "存在；生存",
          "example": "Most scientists believe that water doesn't exist on the surface of the Moon",
          "wordGroup": "group_139",
          "colorIndex": 1
        },
        {
          "id": 532,
          "word": "exterminate",
          "partOfSpeech": "v.",
          "chinese": "消灭；根除",
          "example": "We've made great efforts to exterminate mosquitoes and flies",
          "wordGroup": "group_139",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 533,
          "word": "tame",
          "partOfSpeech": "v./adj.",
          "chinese": "驯养；制服/驯服的；乏味的",
          "example": "The tame lions can communicate and dance together with the actors",
          "wordGroup": "group_140",
          "colorIndex": 2
        },
        {
          "id": 534,
          "word": "keeper",
          "partOfSpeech": "n.",
          "chinese": "看守人；饲养员",
          "example": "He turned his eyes towards the food, which the keeper had brought",
          "wordGroup": "group_140",
          "colorIndex": 2
        },
        {
          "id": 535,
          "word": "shepherd",
          "partOfSpeech": "n.",
          "chinese": "牧羊人，羊倌",
          "example": "The shepherd set out to look for the sheep that had wandered away",
          "wordGroup": "group_140",
          "colorIndex": 2
        }
      ]
    ]
  },
  {
    "title": "太空探索",
    "groups": [
      [
        {
          "id": 536,
          "word": "galaxy",
          "partOfSpeech": "n.",
          "chinese": "星系",
          "example": "The sun is only a very small start in the Galaxy",
          "wordGroup": "group_140",
          "colorIndex": 2
        },
        {
          "id": 537,
          "word": "cosmos",
          "partOfSpeech": "n.",
          "chinese": "宇宙",
          "example": "Our world is but a small part of the cosmos",
          "wordGroup": "group_140",
          "colorIndex": 2
        },
        {
          "id": 538,
          "word": "universe",
          "partOfSpeech": "n.",
          "chinese": "宇宙；万物；世界",
          "example": "The depth of the universe is immeasurable",
          "wordGroup": "group_140",
          "colorIndex": 2
        },
        {
          "id": 539,
          "word": "interstellar",
          "partOfSpeech": "adj.",
          "chinese": "星际的",
          "example": "These elements become a part of the interstellar gas and dust",
          "wordGroup": "group_140",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 540,
          "word": "terrestrial",
          "partOfSpeech": "adj.",
          "chinese": "地球的；陆地的",
          "example": "Forests are home to over 80% of terrestrial biodiversity",
          "wordGroup": "group_141",
          "colorIndex": 3
        },
        {
          "id": 541,
          "word": "celestial",
          "partOfSpeech": "adj.",
          "chinese": "天上的",
          "example": "The rosy light beamed like a celestial dawn",
          "wordGroup": "group_141",
          "colorIndex": 3
        },
        {
          "id": 542,
          "word": "astronomy",
          "partOfSpeech": "n.",
          "chinese": "天文学",
          "example": "Physics and astronomy are cognate sciences",
          "wordGroup": "group_141",
          "colorIndex": 3
        },
        {
          "id": 543,
          "word": "astrology",
          "partOfSpeech": "n.",
          "chinese": "占星术；占星学",
          "example": "Some who follow Chinese astrology, expect it to a good year",
          "wordGroup": "group_141",
          "colorIndex": 3
        },
        {
          "id": 544,
          "word": "astronaut",
          "partOfSpeech": "n.",
          "chinese": "宇航员",
          "example": "An american astronaut is begining a year-long trip in space",
          "wordGroup": "group_141",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 545,
          "word": "comet",
          "partOfSpeech": "n.",
          "chinese": "彗星",
          "example": "The probes will travel with the comet for a full year",
          "wordGroup": "group_142",
          "colorIndex": 4
        },
        {
          "id": 546,
          "word": "meteorite",
          "partOfSpeech": "n.",
          "chinese": "陨石",
          "example": "He discovered an unusual meteorite",
          "wordGroup": "group_142",
          "colorIndex": 4
        },
        {
          "id": 547,
          "word": "crater",
          "partOfSpeech": "n.",
          "chinese": "（撞击或爆炸形成的）坑",
          "example": "They came to the lip of a dead volcanic crater",
          "wordGroup": "group_142",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 548,
          "word": "dust",
          "partOfSpeech": "n.",
          "chinese": "尘土；灰尘",
          "example": "The mirror is covered with a film of dust",
          "wordGroup": "group_143",
          "colorIndex": 5
        },
        {
          "id": 549,
          "word": "ash",
          "partOfSpeech": "n.",
          "chinese": "灰烬",
          "example": "Don't drop your cigarette ash on the carpet. Use an ashtray",
          "wordGroup": "group_143",
          "colorIndex": 5
        },
        {
          "id": 550,
          "word": "envelope",
          "partOfSpeech": "n.",
          "chinese": "外裹物；外层",
          "example": "The surface of the sun is a glowing gas envelope",
          "wordGroup": "group_143",
          "colorIndex": 5
        },
        {
          "id": 551,
          "word": "chunk",
          "partOfSpeech": "n.",
          "chinese": "厚块",
          "example": "My mother bought a chunk of meat",
          "wordGroup": "group_143",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 552,
          "word": "spacecraft",
          "partOfSpeech": "n.",
          "chinese": "宇宙飞船",
          "example": "The spacecraft is orbiting the moon",
          "wordGroup": "group_144",
          "colorIndex": 0
        },
        {
          "id": 553,
          "word": "spaceship",
          "partOfSpeech": "n.",
          "chinese": "宇宙飞船",
          "example": "The scientists are able to calculate accurately when the spaceship will reach the moon",
          "wordGroup": "group_144",
          "colorIndex": 0
        },
        {
          "id": 554,
          "word": "probe",
          "partOfSpeech": "n.",
          "chinese": "太空探测器；详尽调查",
          "example": "Their probe into the cause of the fire proved futile",
          "wordGroup": "group_144",
          "colorIndex": 0
        },
        {
          "id": 555,
          "word": "module",
          "partOfSpeech": "n.",
          "chinese": "模块",
          "example": "A module is a part of a space vehicle that can work independently",
          "wordGroup": "group_144",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 556,
          "word": "propulsion",
          "partOfSpeech": "n.",
          "chinese": "推进力",
          "example": "This aircraft works by jet propulsion",
          "wordGroup": "group_145",
          "colorIndex": 1
        },
        {
          "id": 557,
          "word": "pressure",
          "partOfSpeech": "n.",
          "chinese": "压力",
          "example": "We will never capitulate to pressure from outside",
          "wordGroup": "group_145",
          "colorIndex": 1
        },
        {
          "id": 558,
          "word": "dynamics",
          "partOfSpeech": "n.",
          "chinese": "动力学；动态",
          "example": "And our goal is to find out the dynamics of this problem",
          "wordGroup": "group_145",
          "colorIndex": 1
        },
        {
          "id": 559,
          "word": "motion",
          "partOfSpeech": "n.",
          "chinese": "作物；移动",
          "example": "Parts of the film were shown again in slow motion",
          "wordGroup": "group_145",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 560,
          "word": "vent",
          "partOfSpeech": "n./v.",
          "chinese": "排气口；排放；发泄",
          "example": "When gases and steam can get vented from a valcano's cracks, it's probably not about to erupt",
          "wordGroup": "group_146",
          "colorIndex": 2
        },
        {
          "id": 561,
          "word": "tail",
          "partOfSpeech": "n.",
          "chinese": "尾部",
          "example": "He drove into the back of my truck and smashed the tail light",
          "wordGroup": "group_146",
          "colorIndex": 2
        },
        {
          "id": 562,
          "word": "curve",
          "partOfSpeech": "n.",
          "chinese": "曲线；弧线",
          "example": "The stairs ascended in a graceful curve",
          "wordGroup": "group_146",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 563,
          "word": "exploration",
          "partOfSpeech": "n.",
          "chinese": "探索",
          "example": "The Elizabethan age was an time of exploration and discovery",
          "wordGroup": "group_147",
          "colorIndex": 3
        },
        {
          "id": 564,
          "word": "expedition",
          "partOfSpeech": "n.",
          "chinese": "远征；探险",
          "example": "This is an expedition to find the beginning of the Yangtze River",
          "wordGroup": "group_147",
          "colorIndex": 3
        },
        {
          "id": 565,
          "word": "flyby",
          "partOfSpeech": "n.",
          "chinese": "（航天器对行星或卫星的）飞掠",
          "example": "Because of the flyby height, the plane resembles an increasingly big bird",
          "wordGroup": "group_147",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 566,
          "word": "observatory",
          "partOfSpeech": "n.",
          "chinese": "天文台",
          "example": "According to the observatory, there will be a total solar eclipse tomorrow",
          "wordGroup": "group_148",
          "colorIndex": 4
        },
        {
          "id": 567,
          "word": "telescope",
          "partOfSpeech": "n.",
          "chinese": "望远镜",
          "example": "What is the range of this telescope?",
          "wordGroup": "group_148",
          "colorIndex": 4
        },
        {
          "id": 568,
          "word": "spectacle",
          "partOfSpeech": "n.",
          "chinese": "壮观的景象；奇观",
          "example": "The sunrise was a splendid spectacle",
          "wordGroup": "group_148",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 569,
          "word": "orbit",
          "partOfSpeech": "n.",
          "chinese": "轨道",
          "example": "The earth moves in an approximately circular orbit around the sun",
          "wordGroup": "group_149",
          "colorIndex": 5
        },
        {
          "id": 570,
          "word": "ecliptic",
          "partOfSpeech": "n.",
          "chinese": "黄道",
          "example": "Five bright planets move among the stars nearly ecliptic",
          "wordGroup": "group_149",
          "colorIndex": 5
        },
        {
          "id": 571,
          "word": "diameter",
          "partOfSpeech": "n.",
          "chinese": "直径",
          "example": "The earth is slightly flat at the poles so that the polar diameter is slightly less than the equatorial diameter",
          "wordGroup": "group_149",
          "colorIndex": 5
        },
        {
          "id": 572,
          "word": "radius",
          "partOfSpeech": "n.",
          "chinese": "半径",
          "example": "They searched within one mile radius of the school",
          "wordGroup": "group_149",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 573,
          "word": "substance",
          "partOfSpeech": "n.",
          "chinese": "物质；实质；要旨",
          "example": "Is there a basic substance that everything else is made of?",
          "wordGroup": "group_150",
          "colorIndex": 0
        },
        {
          "id": 574,
          "word": "composition",
          "partOfSpeech": "n.",
          "chinese": "成分；构成；作品；创作",
          "example": "Scientists study the composition of the soil",
          "wordGroup": "group_150",
          "colorIndex": 0
        },
        {
          "id": 575,
          "word": "compound",
          "partOfSpeech": "n./adj./v.",
          "chinese": "混合物；化合物。复合的；组合的。混合",
          "example": "English loves compound words: \"washing machine\" and that sort of thing",
          "wordGroup": "group_150",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 576,
          "word": "fossil",
          "partOfSpeech": "n.",
          "chinese": "化石",
          "example": "I know that the majority of the energy we consume comes from fossil fuel energy sources",
          "wordGroup": "group_151",
          "colorIndex": 1
        },
        {
          "id": 577,
          "word": "sample",
          "partOfSpeech": "n.",
          "chinese": "样品；样本",
          "example": "I need nothing but a sample",
          "wordGroup": "group_151",
          "colorIndex": 1
        },
        {
          "id": 578,
          "word": "specimen",
          "partOfSpeech": "n.",
          "chinese": "样品；标本",
          "example": "The biologist brought out a specimen box and showed the items one by one",
          "wordGroup": "group_151",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 579,
          "word": "particle",
          "partOfSpeech": "n.",
          "chinese": "颗粒；微粒；极小量",
          "example": "There are particles of dust everywhere",
          "wordGroup": "group_152",
          "colorIndex": 2
        },
        {
          "id": 580,
          "word": "molecule",
          "partOfSpeech": "n.",
          "chinese": "分子",
          "example": "There is a molecule separator in the lab",
          "wordGroup": "group_152",
          "colorIndex": 2
        },
        {
          "id": 581,
          "word": "atom",
          "partOfSpeech": "n.",
          "chinese": "原子",
          "example": "An molecule of water is made up of two atoms of hydrogen and one atom of oxygen",
          "wordGroup": "group_152",
          "colorIndex": 2
        },
        {
          "id": 582,
          "word": "ion",
          "partOfSpeech": "n.",
          "chinese": "离子",
          "example": "Both of these partickes can produce ion pairs",
          "wordGroup": "group_152",
          "colorIndex": 2
        },
        {
          "id": 583,
          "word": "electron",
          "partOfSpeech": "n.",
          "chinese": "电子",
          "example": "Electrons are negatively charged with electricity",
          "wordGroup": "group_152",
          "colorIndex": 2
        },
        {
          "id": 584,
          "word": "quantum",
          "partOfSpeech": "n.",
          "chinese": "量子",
          "example": "In this example, we employed the quantum mechanics principle",
          "wordGroup": "group_152",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 585,
          "word": "liquid",
          "partOfSpeech": "n./adj.",
          "chinese": "液体；液体的",
          "example": "If you add too much liquid, the mixture will not be thick enough",
          "wordGroup": "group_153",
          "colorIndex": 3
        },
        {
          "id": 586,
          "word": "fluid",
          "partOfSpeech": "n./adj.",
          "chinese": "液体；流体。流动的",
          "example": "When you are sick, you should drink plenty of fluids",
          "wordGroup": "group_153",
          "colorIndex": 3
        },
        {
          "id": 587,
          "word": "solid",
          "partOfSpeech": "n./adj.",
          "chinese": "固体。固体的；牢固的",
          "example": "The new office has a very solid structure",
          "wordGroup": "group_153",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 588,
          "word": "synthesise/synthesize",
          "partOfSpeech": "v.",
          "chinese": "合成；综合",
          "example": "Darwinian theory has been synthesized with modern genetics",
          "wordGroup": "group_154",
          "colorIndex": 4
        },
        {
          "id": 589,
          "word": "formation",
          "partOfSpeech": "n.",
          "chinese": "形成",
          "example": "In planet formation, as in adolescence, you've got your late bloomers",
          "wordGroup": "group_154",
          "colorIndex": 4
        },
        {
          "id": 590,
          "word": "method",
          "partOfSpeech": "n.",
          "chinese": "方法",
          "example": "New methods of teaching foreign languages are adopted in this institute",
          "wordGroup": "group_154",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 591,
          "word": "spectrum",
          "partOfSpeech": "n.",
          "chinese": "光谱；范围",
          "example": "A spectrum is formed by a ray of light passing through a prism",
          "wordGroup": "group_155",
          "colorIndex": 5
        },
        {
          "id": 592,
          "word": "dimension",
          "partOfSpeech": "n.",
          "chinese": "维度",
          "example": "A line has one dimension and a square has two",
          "wordGroup": "group_155",
          "colorIndex": 5
        },
        {
          "id": 593,
          "word": "frequency",
          "partOfSpeech": "n.",
          "chinese": "频率；发生次数",
          "example": "This radio signal has a frequency of 800 kilohertz",
          "wordGroup": "group_155",
          "colorIndex": 5
        },
        {
          "id": 594,
          "word": "signal",
          "partOfSpeech": "n.",
          "chinese": "信号",
          "example": "Her speech yesterday was a signal that her her view has changed",
          "wordGroup": "group_155",
          "colorIndex": 5
        },
        {
          "id": 595,
          "word": "antenna",
          "partOfSpeech": "n.",
          "chinese": "天线",
          "example": "You should fix the televison antenna before receiving programs",
          "wordGroup": "group_155",
          "colorIndex": 5
        },
        {
          "id": 596,
          "word": "circuit",
          "partOfSpeech": "n.",
          "chinese": "线路；电路；巡回",
          "example": "For many years, He was top banana on the circuit 许多年来，他都是巡回剧团里的主角——top banana主要人物",
          "wordGroup": "group_155",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 597,
          "word": "refraction",
          "partOfSpeech": "n.",
          "chinese": "折射",
          "example": "Over water the diurnal change in refraction is likely to be small",
          "wordGroup": "group_156",
          "colorIndex": 0
        },
        {
          "id": 598,
          "word": "ultraviolet",
          "partOfSpeech": "n./adj.",
          "chinese": "紫外辐射。紫外线的",
          "example": "The ozone layer absorbs most of the sun's ultraviolet radiation",
          "wordGroup": "group_156",
          "colorIndex": 0
        },
        {
          "id": 599,
          "word": "radioactive",
          "partOfSpeech": "adj.",
          "chinese": "放射性的",
          "example": "Nuclear energy gives millions heat, light and power, just as it creates unwanted radioactive side effects",
          "wordGroup": "group_156",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 600,
          "word": "distinct",
          "partOfSpeech": "adj.",
          "chinese": "明显的；截然不同的",
          "example": "Those two ideas are quite distinct from each other",
          "wordGroup": "group_157",
          "colorIndex": 1
        },
        {
          "id": 601,
          "word": "discernible",
          "partOfSpeech": "adj.",
          "chinese": "可辨别的；看得清的",
          "example": "Night fell, but the outline of the factory buildings was still discernible",
          "wordGroup": "group_157",
          "colorIndex": 1
        },
        {
          "id": 602,
          "word": "invisible",
          "partOfSpeech": "adj.",
          "chinese": "看不见的",
          "example": "Some stars are invisible to the naked eye",
          "wordGroup": "group_157",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 603,
          "word": "collision",
          "partOfSpeech": "n.",
          "chinese": "碰撞事故；冲突",
          "example": "He is responsible for the rear-end collision",
          "wordGroup": "group_158",
          "colorIndex": 2
        },
        {
          "id": 604,
          "word": "squash",
          "partOfSpeech": "v./n.",
          "chinese": "压扁；壁球",
          "example": "I sat on my hat and squashed it",
          "wordGroup": "group_158",
          "colorIndex": 2
        },
        {
          "id": 605,
          "word": "fragment",
          "partOfSpeech": "n./v.",
          "chinese": "碎片；片段；（使）碎裂",
          "example": "He was still in bad condition and could give only a fragmented account of the accident",
          "wordGroup": "group_158",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 606,
          "word": "cataclysmic",
          "partOfSpeech": "adj.",
          "chinese": "剧变的；灾难的",
          "example": "One can readily trace the disappearance of dinosaurs to a cataclysmic event",
          "wordGroup": "group_159",
          "colorIndex": 3
        },
        {
          "id": 607,
          "word": "overwhelming",
          "partOfSpeech": "adj.",
          "chinese": "压倒性的",
          "example": "The flood was overwhelming and the city was soon flooded",
          "wordGroup": "group_159",
          "colorIndex": 3
        },
        {
          "id": 608,
          "word": "despair",
          "partOfSpeech": "v./n.",
          "chinese": "绝望",
          "example": "This boy is his mother's last despair",
          "wordGroup": "group_159",
          "colorIndex": 3
        },
        {
          "id": 609,
          "word": "desperate",
          "partOfSpeech": "adj.",
          "chinese": "绝望的；急需要的",
          "example": "The man lost in the desert was desperate for water",
          "wordGroup": "group_159",
          "colorIndex": 3
        },
        {
          "id": 610,
          "word": "hopeless",
          "partOfSpeech": "adj.",
          "chinese": "无望的；极差的",
          "example": "He feels that his chances of winning the contest are hopeless",
          "wordGroup": "group_159",
          "colorIndex": 3
        }
      ]
    ]
  },
  {
    "title": "学校教育",
    "groups": [
      [
        {
          "id": 611,
          "word": "education",
          "partOfSpeech": "n.",
          "chinese": "教育",
          "example": "A good education gives your child a good start in life",
          "wordGroup": "group_159",
          "colorIndex": 3
        },
        {
          "id": 612,
          "word": "primary",
          "partOfSpeech": "adj.",
          "chinese": "初级的；主要的",
          "example": "The primary cause of his failure was his underestimation of the enemy",
          "wordGroup": "group_159",
          "colorIndex": 3
        },
        {
          "id": 613,
          "word": "secondary",
          "partOfSpeech": "adj.",
          "chinese": "中级的；次要的",
          "example": "The most important factor is price. Location is a secondary issue",
          "wordGroup": "group_159",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 614,
          "word": "university",
          "partOfSpeech": "n.",
          "chinese": "大学",
          "example": "She is a student at Peking University",
          "wordGroup": "group_160",
          "colorIndex": 4
        },
        {
          "id": 615,
          "word": "college",
          "partOfSpeech": "n.",
          "chinese": "学院；大学",
          "example": "Their son will start college in the autumn",
          "wordGroup": "group_160",
          "colorIndex": 4
        },
        {
          "id": 616,
          "word": "institute",
          "partOfSpeech": "n.",
          "chinese": "研究所",
          "example": "The government set up an institute devoted to renewable energy sources",
          "wordGroup": "group_160",
          "colorIndex": 4
        },
        {
          "id": 617,
          "word": "academy",
          "partOfSpeech": "n.",
          "chinese": "专科院校；（美国的）私立学校；研究会；学会",
          "example": "This is an academy of music",
          "wordGroup": "group_160",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 618,
          "word": "learn",
          "partOfSpeech": "v.",
          "chinese": "学习；得知",
          "example": "It is more useful to learn modern languages, such as English and French, than Latin",
          "wordGroup": "group_161",
          "colorIndex": 5
        },
        {
          "id": 619,
          "word": "study",
          "partOfSpeech": "v./n.",
          "chinese": "学习；研究",
          "example": "This reference book is very useful to study from",
          "wordGroup": "group_161",
          "colorIndex": 5
        },
        {
          "id": 620,
          "word": "acquire",
          "partOfSpeech": "v.",
          "chinese": "获得；购得",
          "example": "We hope to acquire the knowledge within happiness",
          "wordGroup": "group_161",
          "colorIndex": 5
        },
        {
          "id": 621,
          "word": "knowledge",
          "partOfSpeech": "n.",
          "chinese": "知识",
          "example": "To the young boy, his big brother was the fountain of all knowledge",
          "wordGroup": "group_161",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 622,
          "word": "expertise",
          "partOfSpeech": "n.",
          "chinese": "专门技能",
          "example": "We were amazed at his expertise on herbs",
          "wordGroup": "group_162",
          "colorIndex": 0
        },
        {
          "id": 623,
          "word": "novice",
          "partOfSpeech": "n.",
          "chinese": "新手",
          "example": "I'm a complete novice at yoga",
          "wordGroup": "group_162",
          "colorIndex": 0
        },
        {
          "id": 624,
          "word": "recruit",
          "partOfSpeech": "v.",
          "chinese": "吸收（新成员）",
          "example": "The country's first act would be to recruit for the navy",
          "wordGroup": "group_162",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 625,
          "word": "literate",
          "partOfSpeech": "adj.",
          "chinese": "有读写能力的",
          "example": "Over one-quarter of the adult population are not fully literate",
          "wordGroup": "group_163",
          "colorIndex": 1
        },
        {
          "id": 626,
          "word": "illiteracy",
          "partOfSpeech": "n.",
          "chinese": "文盲",
          "example": "We must do our best to eliminate illiteracy",
          "wordGroup": "group_163",
          "colorIndex": 1
        },
        {
          "id": 627,
          "word": "numerate",
          "partOfSpeech": "adj.",
          "chinese": "识数的；有计算能力的",
          "example": "All students should be numerate and literate when they leave school",
          "wordGroup": "group_163",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 628,
          "word": "problem",
          "partOfSpeech": "n.",
          "chinese": "问题；习题",
          "example": "Heavy traffic poses a big problem in many big cities",
          "wordGroup": "group_164",
          "colorIndex": 2
        },
        {
          "id": 629,
          "word": "issue",
          "partOfSpeech": "n./v.",
          "chinese": "重要问题；发行。公布；发出",
          "example": "On this issue, they thought as one",
          "wordGroup": "group_164",
          "colorIndex": 2
        },
        {
          "id": 630,
          "word": "affair",
          "partOfSpeech": "n.",
          "chinese": "事件；公共事件",
          "example": "The minister is busy with important state affairs",
          "wordGroup": "group_164",
          "colorIndex": 2
        },
        {
          "id": 631,
          "word": "controversial",
          "partOfSpeech": "adj.",
          "chinese": "有争议的",
          "example": "They tried to stay away from controversial topics at the dinner party",
          "wordGroup": "group_164",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 632,
          "word": "puzzle",
          "partOfSpeech": "n./v.",
          "chinese": "难题；谜。使迷惑",
          "example": "He is puzzled about the matter",
          "wordGroup": "group_165",
          "colorIndex": 3
        },
        {
          "id": 633,
          "word": "riddle",
          "partOfSpeech": "n.",
          "chinese": "谜；谜语",
          "example": "He figured out the riddel at last",
          "wordGroup": "group_165",
          "colorIndex": 3
        },
        {
          "id": 634,
          "word": "obscure",
          "partOfSpeech": "adj.",
          "chinese": "难以理解的",
          "example": "Rules for the game are somewhat obscure",
          "wordGroup": "group_165",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 635,
          "word": "instil/instill",
          "partOfSpeech": "v.",
          "chinese": "逐渐灌输",
          "example": "A sense of duty must be instilled in our children",
          "wordGroup": "group_166",
          "colorIndex": 4
        },
        {
          "id": 636,
          "word": "cram",
          "partOfSpeech": "v.",
          "chinese": "把...塞进；（为应考）临时死记硬背",
          "example": "Lectures were all called off, so students can cram for the semester finals",
          "wordGroup": "group_166",
          "colorIndex": 4
        },
        {
          "id": 637,
          "word": "emphasise/emphasize",
          "partOfSpeech": "v.",
          "chinese": "强调；着重",
          "example": "I try to emphasize my strengths without sounding boastful",
          "wordGroup": "group_166",
          "colorIndex": 4
        },
        {
          "id": 638,
          "word": "enhance",
          "partOfSpeech": "v.",
          "chinese": "提高；增强",
          "example": "A good score of IELTS will enhance my change of getting the offer",
          "wordGroup": "group_166",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 639,
          "word": "enable",
          "partOfSpeech": "v.",
          "chinese": "使能够",
          "example": "This dictionary will enable you to understand English words",
          "wordGroup": "group_167",
          "colorIndex": 5
        },
        {
          "id": 640,
          "word": "inspire",
          "partOfSpeech": "v.",
          "chinese": "鼓舞；给...灵感",
          "example": "Our task is to motivate the voters and inspire them to join our cause",
          "wordGroup": "group_167",
          "colorIndex": 5
        },
        {
          "id": 641,
          "word": "motive",
          "partOfSpeech": "n.",
          "chinese": "动机；缘由",
          "example": "His motive for working so hard is that he needs money",
          "wordGroup": "group_167",
          "colorIndex": 5
        },
        {
          "id": 642,
          "word": "motivate",
          "partOfSpeech": "v.",
          "chinese": "激发；驱使",
          "example": "Good teachers are those who can motivate their students",
          "wordGroup": "group_167",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 643,
          "word": "stimulate",
          "partOfSpeech": "v.",
          "chinese": "刺激；激励",
          "example": "I'm trying to stimulate him to study harder",
          "wordGroup": "group_168",
          "colorIndex": 0
        },
        {
          "id": 644,
          "word": "spur",
          "partOfSpeech": "v./n.",
          "chinese": "鞭策；激发。马刺；刺激",
          "example": "Pride spur the man to fight",
          "wordGroup": "group_168",
          "colorIndex": 0
        },
        {
          "id": 645,
          "word": "impetus",
          "partOfSpeech": "n.",
          "chinese": "推动；促进；动量；惯性",
          "example": "The car ran down the bridge under it's own impetus",
          "wordGroup": "group_168",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 646,
          "word": "indulge",
          "partOfSpeech": "v.",
          "chinese": "迁就；放任；沉湎；让...享受一下",
          "example": "You can indulge yourself without spending a fortune",
          "wordGroup": "group_169",
          "colorIndex": 1
        },
        {
          "id": 647,
          "word": "spoil",
          "partOfSpeech": "v.",
          "chinese": "宠坏；溺爱；破坏；糟蹋",
          "example": "You should be careful because you make a mistake which will spoil your life",
          "wordGroup": "group_169",
          "colorIndex": 1
        },
        {
          "id": 648,
          "word": "abuse",
          "partOfSpeech": "v.",
          "chinese": "滥用；虐待",
          "example": "It's easy to abuse one's power",
          "wordGroup": "group_169",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 649,
          "word": "intelligent",
          "partOfSpeech": "adj.",
          "chinese": "聪明的",
          "example": "Clara is a highly intelligent girl",
          "wordGroup": "group_170",
          "colorIndex": 2
        },
        {
          "id": 650,
          "word": "clever",
          "partOfSpeech": "adj.",
          "chinese": "聪明的；精明的",
          "example": "Even clever people may do something stupid when put on the spot",
          "wordGroup": "group_170",
          "colorIndex": 2
        },
        {
          "id": 651,
          "word": "smart",
          "partOfSpeech": "adj.",
          "chinese": "聪明的；智能的",
          "example": "This boy is very smart. He may become another Stephen Hawking",
          "wordGroup": "group_170",
          "colorIndex": 2
        },
        {
          "id": 652,
          "word": "all-round/all-around",
          "partOfSpeech": "adj.",
          "chinese": "有多方面才能的；全面的",
          "example": "She is an all-round artist",
          "wordGroup": "group_170",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 653,
          "word": "genius",
          "partOfSpeech": "n.",
          "chinese": "天才人物；天赋",
          "example": "His genius is not confined to maths and physics",
          "wordGroup": "group_171",
          "colorIndex": 3
        },
        {
          "id": 654,
          "word": "elite",
          "partOfSpeech": "n.",
          "chinese": "精英",
          "example": "The army was controlled by a small ruling elite",
          "wordGroup": "group_171",
          "colorIndex": 3
        },
        {
          "id": 655,
          "word": "idiot",
          "partOfSpeech": "n.",
          "chinese": "白痴；傻瓜",
          "example": "He is behaving like an perfect idiot",
          "wordGroup": "group_171",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 656,
          "word": "wisdom",
          "partOfSpeech": "n.",
          "chinese": "智慧；学问",
          "example": "Confucius's words hold a great deal of wisdom",
          "wordGroup": "group_172",
          "colorIndex": 4
        },
        {
          "id": 657,
          "word": "wit",
          "partOfSpeech": "n.",
          "chinese": "风趣的人；机智；风趣；智慧",
          "example": "Holmes was a gregarious, a great wit, a man of wide interests",
          "wordGroup": "group_172",
          "colorIndex": 4
        },
        {
          "id": 658,
          "word": "aptitude",
          "partOfSpeech": "n.",
          "chinese": "天生的才能；资质",
          "example": "That student has an aptitude for music",
          "wordGroup": "group_172",
          "colorIndex": 4
        },
        {
          "id": 659,
          "word": "capable",
          "partOfSpeech": "adj.",
          "chinese": "有能力的；有才能的",
          "example": "Not everyone is capable of judging fine arts",
          "wordGroup": "group_172",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 660,
          "word": "excellent",
          "partOfSpeech": "adj.",
          "chinese": "杰出的；优秀的",
          "example": "She had a high reputation for her excellent detective novels",
          "wordGroup": "group_173",
          "colorIndex": 5
        },
        {
          "id": 661,
          "word": "outstanding",
          "partOfSpeech": "adj.",
          "chinese": "突出的；杰出的",
          "example": "He is an outstanding athelete and deserved to win",
          "wordGroup": "group_173",
          "colorIndex": 5
        },
        {
          "id": 662,
          "word": "brilliant",
          "partOfSpeech": "adj.",
          "chinese": "光辉的；聪明的；（光线等）明亮的",
          "example": "He drew the curtains and brilliant sunlight flooded into the room",
          "wordGroup": "group_173",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 663,
          "word": "prestige",
          "partOfSpeech": "n.",
          "chinese": "威望；声望",
          "example": "These new policies will affect the president's national and international prestige",
          "wordGroup": "group_174",
          "colorIndex": 0
        },
        {
          "id": 664,
          "word": "reputation",
          "partOfSpeech": "n.",
          "chinese": "名誉；声誉",
          "example": "If a company has a good reputation, investors will natually back it",
          "wordGroup": "group_174",
          "colorIndex": 0
        },
        {
          "id": 665,
          "word": "eminent",
          "partOfSpeech": "adj.",
          "chinese": "著名的；杰出的",
          "example": "The students are expecting the arrival of an eminent scientist",
          "wordGroup": "group_174",
          "colorIndex": 0
        },
        {
          "id": 666,
          "word": "notorious",
          "partOfSpeech": "adj.",
          "chinese": "名声狼藉的",
          "example": "The notorious thief was finally caught and put to prison",
          "wordGroup": "group_174",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 667,
          "word": "esteem",
          "partOfSpeech": "v.",
          "chinese": "尊重；尊敬",
          "example": "I esteem it as a privilege to attend this conference and give a report here",
          "wordGroup": "group_175",
          "colorIndex": 1
        },
        {
          "id": 668,
          "word": "respect",
          "partOfSpeech": "n./v.",
          "chinese": "尊敬；敬重",
          "example": "You should know how to respect to yourself before you can get respect from others",
          "wordGroup": "group_175",
          "colorIndex": 1
        },
        {
          "id": 669,
          "word": "diligent",
          "partOfSpeech": "adj.",
          "chinese": "勤勉的；勤奋的",
          "example": "She is diligent and busy with all kinds of experiments all the time",
          "wordGroup": "group_175",
          "colorIndex": 1
        },
        {
          "id": 670,
          "word": "painstaking",
          "partOfSpeech": "adj.",
          "chinese": "极其仔细的；辛苦的",
          "example": "The mastery of a language requires painstaking effort",
          "wordGroup": "group_175",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 671,
          "word": "skill",
          "partOfSpeech": "n.",
          "chinese": "技巧",
          "example": "It requires an athlete to have great skill, cool nerves and quick reflexes",
          "wordGroup": "group_176",
          "colorIndex": 2
        },
        {
          "id": 672,
          "word": "approach",
          "partOfSpeech": "n./v.",
          "chinese": "方法。接近",
          "example": "I like his approach to the problem",
          "wordGroup": "group_176",
          "colorIndex": 2
        },
        {
          "id": 673,
          "word": "scheme",
          "partOfSpeech": "n./v.",
          "chinese": "计划；方案；阴谋。谋划",
          "example": "All the schemes and intrigues are doomed to failure",
          "wordGroup": "group_176",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 674,
          "word": "headmaster",
          "partOfSpeech": "n.",
          "chinese": "[英]男校长",
          "example": "His track record as a headmaster was excellent",
          "wordGroup": "group_177",
          "colorIndex": 3
        },
        {
          "id": 675,
          "word": "principal",
          "partOfSpeech": "n./adj.",
          "chinese": "[美]（中小学）校长；[英]大学校长；学院院长。首要的",
          "example": "He is going to resign from the position of principal",
          "wordGroup": "group_177",
          "colorIndex": 3
        },
        {
          "id": 676,
          "word": "dean",
          "partOfSpeech": "n.",
          "chinese": "（大学的）学院院长；系主任",
          "example": "She is the dean of the Faculty of Social Sciences",
          "wordGroup": "group_177",
          "colorIndex": 3
        },
        {
          "id": 677,
          "word": "faculty",
          "partOfSpeech": "n.",
          "chinese": "（大学的）系、院；全体教员",
          "example": "Faculty members devote most of their time to scholarly research",
          "wordGroup": "group_177",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 678,
          "word": "professor",
          "partOfSpeech": "n.",
          "chinese": "教授",
          "example": "Our professor is learned man with great insight",
          "wordGroup": "group_178",
          "colorIndex": 4
        },
        {
          "id": 679,
          "word": "scholar",
          "partOfSpeech": "n.",
          "chinese": "学者",
          "example": "He is a serious scholar who is highly respected by his students",
          "wordGroup": "group_178",
          "colorIndex": 4
        },
        {
          "id": 680,
          "word": "scientist",
          "partOfSpeech": "n.",
          "chinese": "科学家",
          "example": "I admired him as a true scientist and a very moral man",
          "wordGroup": "group_178",
          "colorIndex": 4
        },
        {
          "id": 681,
          "word": "mentor",
          "partOfSpeech": "n.",
          "chinese": "导师；顾问",
          "example": "He fed on the great ideas of his mentor",
          "wordGroup": "group_178",
          "colorIndex": 4
        },
        {
          "id": 682,
          "word": "tutor",
          "partOfSpeech": "n.",
          "chinese": "家庭教师；（英国大学或者学院的）导师",
          "example": "She was my personal tutor at university",
          "wordGroup": "group_178",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 683,
          "word": "lecturer",
          "partOfSpeech": "n.",
          "chinese": "讲师",
          "example": "I have to submit this report to my lecturer",
          "wordGroup": "group_179",
          "colorIndex": 5
        },
        {
          "id": 684,
          "word": "assistant",
          "partOfSpeech": "n.",
          "chinese": "助理；助手",
          "example": "Her assistant was accused of theft and fraud by the police",
          "wordGroup": "group_179",
          "colorIndex": 5
        },
        {
          "id": 685,
          "word": "candidate",
          "partOfSpeech": "n.",
          "chinese": "候选人；求职者；考生",
          "example": "They are interviewing candidates for the positions of sales manager",
          "wordGroup": "group_179",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 686,
          "word": "degree",
          "partOfSpeech": "n.",
          "chinese": "学位；程度",
          "example": "He left without completing his degree",
          "wordGroup": "group_180",
          "colorIndex": 0
        },
        {
          "id": 687,
          "word": "qualify",
          "partOfSpeech": "v.",
          "chinese": "（使）有资格、有权",
          "example": "His knowledge and skill qualify him for the job",
          "wordGroup": "group_180",
          "colorIndex": 0
        },
        {
          "id": 688,
          "word": "certify",
          "partOfSpeech": "v.",
          "chinese": "证明；颁发专业合格证书",
          "example": "I certify on my honor that she is innocent",
          "wordGroup": "group_180",
          "colorIndex": 0
        },
        {
          "id": 689,
          "word": "license/licence",
          "partOfSpeech": "n.",
          "chinese": "执照；许可证",
          "example": "His driving license was suspended for three months",
          "wordGroup": "group_180",
          "colorIndex": 0
        },
        {
          "id": 690,
          "word": "permit",
          "partOfSpeech": "n.",
          "chinese": "许可证",
          "example": "You can't work here without a work permit",
          "wordGroup": "group_180",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 691,
          "word": "diploma",
          "partOfSpeech": "n.",
          "chinese": "毕业文凭",
          "example": "My cousin won her diploma in only three years",
          "wordGroup": "group_181",
          "colorIndex": 1
        },
        {
          "id": 692,
          "word": "diplomat",
          "partOfSpeech": "n.",
          "chinese": "外交官；善于交际的人",
          "example": "As a natural diplomat, he found it easy to get the two sides to reach an consensus",
          "wordGroup": "group_181",
          "colorIndex": 1
        },
        {
          "id": 693,
          "word": "ambassador",
          "partOfSpeech": "n.",
          "chinese": "大使",
          "example": "He was appointed ambassador to France",
          "wordGroup": "group_181",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 694,
          "word": "pupil",
          "partOfSpeech": "n.",
          "chinese": "小学生；瞳孔",
          "example": "As a girl, she had been a model pupil",
          "wordGroup": "group_182",
          "colorIndex": 2
        },
        {
          "id": 695,
          "word": "graduate",
          "partOfSpeech": "n./v.",
          "chinese": "毕业生；毕业",
          "example": "Preference will be given to graduates in journalism",
          "wordGroup": "group_182",
          "colorIndex": 2
        },
        {
          "id": 696,
          "word": "ceremony",
          "partOfSpeech": "n.",
          "chinese": "典礼；礼节",
          "example": "What the old headmaster said at the graduation ceremony dwells in my mind",
          "wordGroup": "group_182",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 697,
          "word": "bachelor",
          "partOfSpeech": "n.",
          "chinese": "学士；单身汉",
          "example": "To do the job you must have at least a bachelor's degree in engineering",
          "wordGroup": "group_183",
          "colorIndex": 3
        },
        {
          "id": 698,
          "word": "master",
          "partOfSpeech": "n./v.",
          "chinese": "硕士；大师。精通；控制",
          "example": "They are able to master the situation",
          "wordGroup": "group_183",
          "colorIndex": 3
        },
        {
          "id": 699,
          "word": "doctor",
          "partOfSpeech": "n.",
          "chinese": "博士；医生",
          "example": "He is a doctor of philosophy",
          "wordGroup": "group_183",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 700,
          "word": "fresher",
          "partOfSpeech": "n.",
          "chinese": "[英]（大学）一年级新生",
          "example": "Only a few months ago, the freshers started their exciting life at university",
          "wordGroup": "group_184",
          "colorIndex": 4
        },
        {
          "id": 701,
          "word": "sophomore",
          "partOfSpeech": "n.",
          "chinese": "[美]（大学或高中）二年级学士",
          "example": "My sophomore year at college was perhaps the most remarkable year of my life",
          "wordGroup": "group_184",
          "colorIndex": 4
        },
        {
          "id": 702,
          "word": "junior",
          "partOfSpeech": "n./adj.",
          "chinese": "[美]（大学或高中）三年级学生；较年幼者。青少年的；级别（或地位）较低的",
          "example": "At that time, I was a sophomore and Miss Yang was a junior",
          "wordGroup": "group_184",
          "colorIndex": 4
        },
        {
          "id": 703,
          "word": "senior",
          "partOfSpeech": "n./adj.",
          "chinese": "[美]（大学或高中）毕业班学士；较年长者。成人的；资深的",
          "example": "The seniors defeated the juniors by 4-2",
          "wordGroup": "group_184",
          "colorIndex": 4
        },
        {
          "id": 704,
          "word": "alumni",
          "partOfSpeech": "n.",
          "chinese": "[alumnus 的复数形式]毕业生；校友",
          "example": "My alumni and alumna are present at my birthday party",
          "wordGroup": "group_184",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 705,
          "word": "campus",
          "partOfSpeech": "n.",
          "chinese": "（大专院校的）校园",
          "example": "The campus covers an area of about 1.37 square kilometers",
          "wordGroup": "group_185",
          "colorIndex": 5
        },
        {
          "id": 706,
          "word": "orientation",
          "partOfSpeech": "n.",
          "chinese": "迎新会；方向",
          "example": "The university will hold a one day orientation session for freshmen",
          "wordGroup": "group_185",
          "colorIndex": 5
        },
        {
          "id": 707,
          "word": "platform",
          "partOfSpeech": "n.",
          "chinese": "平台；讲台",
          "example": "He spoke to us from a platform in the lecture hall",
          "wordGroup": "group_185",
          "colorIndex": 5
        },
        {
          "id": 708,
          "word": "coed/co-educational",
          "partOfSpeech": "adj./n.",
          "chinese": "男女同校的。（男女同校的大学生中的）女生",
          "example": "A nationwide research is under way for typical coeds",
          "wordGroup": "group_185",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 709,
          "word": "register",
          "partOfSpeech": "v./n.",
          "chinese": "登记；注册。登记表；注册簿",
          "example": "You must register for the tax",
          "wordGroup": "group_186",
          "colorIndex": 0
        },
        {
          "id": 710,
          "word": "roster",
          "partOfSpeech": "n.",
          "chinese": "花名册；登记表；执勤表",
          "example": "I am on the roster for tomorrow night",
          "wordGroup": "group_186",
          "colorIndex": 0
        },
        {
          "id": 711,
          "word": "enrol/enroll",
          "partOfSpeech": "v.",
          "chinese": "登记；注册；加入",
          "example": "They enrolled that freshman as a member of the club",
          "wordGroup": "group_186",
          "colorIndex": 0
        },
        {
          "id": 712,
          "word": "matriculation",
          "partOfSpeech": "n.",
          "chinese": "注册入大学",
          "example": "Matriculation was increasing in many universities in the 1990s",
          "wordGroup": "group_186",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 713,
          "word": "accommodation",
          "partOfSpeech": "n.",
          "chinese": "住处；食宿招待",
          "example": "The authorities must provide suitble accommodation for the family",
          "wordGroup": "group_187",
          "colorIndex": 1
        },
        {
          "id": 714,
          "word": "dorm",
          "partOfSpeech": "n.",
          "chinese": "宿舍",
          "example": "Are you going to live in the student dorm or at home?",
          "wordGroup": "group_187",
          "colorIndex": 1
        },
        {
          "id": 715,
          "word": "dining hall",
          "partOfSpeech": "n.",
          "chinese": "食堂",
          "example": "This is my first time to eat in your dining hall",
          "wordGroup": "group_187",
          "colorIndex": 1
        },
        {
          "id": 716,
          "word": "canteen",
          "partOfSpeech": "n.",
          "chinese": "水壶；[英]食堂",
          "example": "This canteen is much frequented by students",
          "wordGroup": "group_187",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 717,
          "word": "laboratory/lab",
          "partOfSpeech": "n.",
          "chinese": "实验室；研究室",
          "example": "It is important to check when the laboratory can do the tests",
          "wordGroup": "group_188",
          "colorIndex": 2
        },
        {
          "id": 718,
          "word": "experiment",
          "partOfSpeech": "n.",
          "chinese": "实验；试验",
          "example": "We will have an experiment in the laboratory this afternoon",
          "wordGroup": "group_188",
          "colorIndex": 2
        },
        {
          "id": 719,
          "word": "data",
          "partOfSpeech": "n.",
          "chinese": "[datum 的复数形式]数据",
          "example": "The data should updated once a week",
          "wordGroup": "group_188",
          "colorIndex": 2
        },
        {
          "id": 720,
          "word": "quantity",
          "partOfSpeech": "n.",
          "chinese": "数量",
          "example": "Our company is more concerned with quality than with quantity",
          "wordGroup": "group_188",
          "colorIndex": 2
        },
        {
          "id": 721,
          "word": "quality",
          "partOfSpeech": "n.",
          "chinese": "质量",
          "example": "It is a bad year for films in terms of quality rather than quantity",
          "wordGroup": "group_188",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 722,
          "word": "library",
          "partOfSpeech": "n.",
          "chinese": "图书馆；个人收藏",
          "example": "I went to the library and return your books for you",
          "wordGroup": "group_189",
          "colorIndex": 3
        },
        {
          "id": 723,
          "word": "literature",
          "partOfSpeech": "n.",
          "chinese": "文学；文学作品；文献",
          "example": "Literature stands related to men as science stands to nature",
          "wordGroup": "group_189",
          "colorIndex": 3
        },
        {
          "id": 724,
          "word": "article",
          "partOfSpeech": "n.",
          "chinese": "文章",
          "example": "The editor asked him to contribute a weekly article on european affairs",
          "wordGroup": "group_189",
          "colorIndex": 3
        },
        {
          "id": 725,
          "word": "author",
          "partOfSpeech": "n.",
          "chinese": "作者；作家",
          "example": "The author's style is subtle and elegant",
          "wordGroup": "group_189",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 726,
          "word": "tale",
          "partOfSpeech": "n.",
          "chinese": "故事；传说",
          "example": "She looks like a princess in a fairy tale",
          "wordGroup": "group_190",
          "colorIndex": 4
        },
        {
          "id": 727,
          "word": "fiction",
          "partOfSpeech": "n.",
          "chinese": "小说；虚构；杜撰",
          "example": "The writer poignantly described her own mothering experiences in her fiction",
          "wordGroup": "group_190",
          "colorIndex": 4
        },
        {
          "id": 728,
          "word": "story",
          "partOfSpeech": "n.",
          "chinese": "故事；小说；（尤指口头的）叙述",
          "example": "Her little sister often asks her to retell the story",
          "wordGroup": "group_190",
          "colorIndex": 4
        },
        {
          "id": 729,
          "word": "diary",
          "partOfSpeech": "n.",
          "chinese": "日记；日记簿",
          "example": "Her diary is full of entries about him",
          "wordGroup": "group_190",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 730,
          "word": "poetry",
          "partOfSpeech": "n.",
          "chinese": "诗",
          "example": "I myself enjoy cinema, drama, poetry and travelling",
          "wordGroup": "group_191",
          "colorIndex": 5
        },
        {
          "id": 731,
          "word": "magazine",
          "partOfSpeech": "n.",
          "chinese": "杂志；期刊；弹夹",
          "example": "This magazine has a large circulation",
          "wordGroup": "group_191",
          "colorIndex": 5
        },
        {
          "id": 732,
          "word": "journal",
          "partOfSpeech": "n.",
          "chinese": "日报；周报；（尤指专门科学的）杂志；日志",
          "example": "This study was published by two journals of repute",
          "wordGroup": "group_191",
          "colorIndex": 5
        },
        {
          "id": 733,
          "word": "coverage",
          "partOfSpeech": "n.",
          "chinese": "新闻报道；覆盖范围",
          "example": "The wedding of the two movie stars got massive media coverage",
          "wordGroup": "group_191",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 734,
          "word": "bibliography",
          "partOfSpeech": "n.",
          "chinese": "参考书目",
          "example": "The bibliography is a very important part of a paper",
          "wordGroup": "group_192",
          "colorIndex": 0
        },
        {
          "id": 735,
          "word": "encyclopedia/encyclopaedia",
          "partOfSpeech": "n.",
          "chinese": "百科全书",
          "example": "I know someone who is a walking encyclopedia. She knows about everything",
          "wordGroup": "group_192",
          "colorIndex": 0
        },
        {
          "id": 736,
          "word": "biography",
          "partOfSpeech": "n.",
          "chinese": "传记",
          "example": "One of my friends likes to read biographies of great men to enhance himself",
          "wordGroup": "group_192",
          "colorIndex": 0
        },
        {
          "id": 737,
          "word": "documentary",
          "partOfSpeech": "n./adj.",
          "chinese": "纪录片；记录的",
          "example": "The documentary left me in a state of shock",
          "wordGroup": "group_192",
          "colorIndex": 0
        },
        {
          "id": 738,
          "word": "series",
          "partOfSpeech": "n.",
          "chinese": "连续的；一系列；系列节目",
          "example": "She published a new book series for English learners",
          "wordGroup": "group_192",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 739,
          "word": "record",
          "partOfSpeech": "n.",
          "chinese": "记录；履历",
          "example": "The subjects in the research were asked to keep a record of everything they ate for a week",
          "wordGroup": "group_193",
          "colorIndex": 1
        },
        {
          "id": 740,
          "word": "file",
          "partOfSpeech": "n./v.",
          "chinese": "档案；把...归档",
          "example": "The police have a file on him",
          "wordGroup": "group_193",
          "colorIndex": 1
        },
        {
          "id": 741,
          "word": "profile",
          "partOfSpeech": "n.",
          "chinese": "概述；人物简介；侧面轮廓",
          "example": "Her beautiful profile impressed the judgers very much",
          "wordGroup": "group_193",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 742,
          "word": "draft",
          "partOfSpeech": "n.",
          "chinese": "草稿；汇票；起草",
          "example": "When the first draft was completed, she took a break",
          "wordGroup": "group_194",
          "colorIndex": 2
        },
        {
          "id": 743,
          "word": "sketch",
          "partOfSpeech": "n./v.",
          "chinese": "概略；概述",
          "example": "I have figured out a basic sketch of a plan",
          "wordGroup": "group_194",
          "colorIndex": 2
        },
        {
          "id": 744,
          "word": "brochure",
          "partOfSpeech": "n.",
          "chinese": "小册子",
          "example": "I'll send the company brochure right away",
          "wordGroup": "group_194",
          "colorIndex": 2
        },
        {
          "id": 745,
          "word": "manual",
          "partOfSpeech": "n.",
          "chinese": "使用手册；指南；手工的",
          "example": "The maintenance manual gives diagrams and instructions for repairing your car",
          "wordGroup": "group_194",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 746,
          "word": "frame",
          "partOfSpeech": "n.",
          "chinese": "框架；眼镜框；构架",
          "example": "The house has a wooden frame which is braced with bricks",
          "wordGroup": "group_195",
          "colorIndex": 3
        },
        {
          "id": 747,
          "word": "index",
          "partOfSpeech": "n./v.",
          "chinese": "指数；索引；为...编索引",
          "example": "The index is arranged in alphabetical order",
          "wordGroup": "group_195",
          "colorIndex": 3
        },
        {
          "id": 748,
          "word": "catalogue/catalog",
          "partOfSpeech": "n.",
          "chinese": "目录",
          "example": "You can look for the book in the library catalogue",
          "wordGroup": "group_195",
          "colorIndex": 3
        },
        {
          "id": 749,
          "word": "category",
          "partOfSpeech": "n.",
          "chinese": "种类；类别；范畴",
          "example": "There are different categories of books in the library",
          "wordGroup": "group_195",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 750,
          "word": "inventory",
          "partOfSpeech": "n.",
          "chinese": "库存；详细目录",
          "example": "We made an inventory of everything in the old museum",
          "wordGroup": "group_196",
          "colorIndex": 4
        },
        {
          "id": 751,
          "word": "content",
          "partOfSpeech": "n./adj.",
          "chinese": "内容；目录；含量。满足的",
          "example": "The calorie content in a regular coke is very high",
          "wordGroup": "group_196",
          "colorIndex": 4
        },
        {
          "id": 752,
          "word": "context",
          "partOfSpeech": "n.",
          "chinese": "上下文；语境；背景",
          "example": "We should judge the past in its historic context",
          "wordGroup": "group_196",
          "colorIndex": 4
        },
        {
          "id": 753,
          "word": "list",
          "partOfSpeech": "n./v.",
          "chinese": "一览表；目录。列举；把...列表",
          "example": "The results are listed in numerical order",
          "wordGroup": "group_196",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 754,
          "word": "chapter",
          "partOfSpeech": "n.",
          "chinese": "（书的）章；（人生或历史的）重要时刻",
          "example": "Steamboat travel opened a new chapter in America's exploration of the west",
          "wordGroup": "group_197",
          "colorIndex": 5
        },
        {
          "id": 755,
          "word": "volume",
          "partOfSpeech": "n.",
          "chinese": "卷；体积；容积；音量",
          "example": "The volume of this container is one cubic meter",
          "wordGroup": "group_197",
          "colorIndex": 5
        },
        {
          "id": 756,
          "word": "reel",
          "partOfSpeech": "n.",
          "chinese": "卷轴；卷筒；一卷胶卷",
          "example": "I put a new reel of film in my camera",
          "wordGroup": "group_197",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 757,
          "word": "subject",
          "partOfSpeech": "n.",
          "chinese": "科目；主题；实验对象",
          "example": "In the car, she reverted to the subject which is uppermost in her mind",
          "wordGroup": "group_198",
          "colorIndex": 0
        },
        {
          "id": 758,
          "word": "object",
          "partOfSpeech": "n./v.",
          "chinese": "物体；目标。反对",
          "example": "He strongly objects to getting up early",
          "wordGroup": "group_198",
          "colorIndex": 0
        },
        {
          "id": 759,
          "word": "major",
          "partOfSpeech": "n./v./adj.",
          "chinese": "[美]主修科目；专业。主修。主要的",
          "example": "She majored in international economy at university",
          "wordGroup": "group_198",
          "colorIndex": 0
        },
        {
          "id": 760,
          "word": "minor",
          "partOfSpeech": "n./adj.",
          "chinese": "[美]辅修科目。不严重的",
          "example": "My major is English, but I also have a minor in history.",
          "wordGroup": "group_198",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 761,
          "word": "sociology",
          "partOfSpeech": "n.",
          "chinese": "社会学",
          "example": "A few years ago, sociology was the most popular subject for undergraduates",
          "wordGroup": "group_199",
          "colorIndex": 1
        },
        {
          "id": 762,
          "word": "politics",
          "partOfSpeech": "n.",
          "chinese": "政治学；政治；政治事务",
          "example": "He closed down the business and went into politics",
          "wordGroup": "group_199",
          "colorIndex": 1
        },
        {
          "id": 763,
          "word": "economics",
          "partOfSpeech": "n.",
          "chinese": "经济学",
          "example": "Whenever they start talking about economics, I feel totally out of my depth",
          "wordGroup": "group_199",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 764,
          "word": "marketing",
          "partOfSpeech": "n.",
          "chinese": "市场营销",
          "example": "This company puts a high value on marketing",
          "wordGroup": "group_200",
          "colorIndex": 2
        },
        {
          "id": 765,
          "word": "accounting",
          "partOfSpeech": "n.",
          "chinese": "会计",
          "example": "A company's accounting records must be open for inspection at all times",
          "wordGroup": "group_200",
          "colorIndex": 2
        },
        {
          "id": 766,
          "word": "audit",
          "partOfSpeech": "n./v.",
          "chinese": "审计。旁听；审计",
          "example": "They worked all day without a break and finished the audit on time",
          "wordGroup": "group_200",
          "colorIndex": 2
        },
        {
          "id": 767,
          "word": "statistics",
          "partOfSpeech": "n.",
          "chinese": "统计学",
          "example": "There's a compulsory course in statistics",
          "wordGroup": "group_200",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 768,
          "word": "psychology",
          "partOfSpeech": "n.",
          "chinese": "心理学；心理特征",
          "example": "The professor has considerable expertise in studying a criminal's psychology",
          "wordGroup": "group_201",
          "colorIndex": 3
        },
        {
          "id": 769,
          "word": "philosophy",
          "partOfSpeech": "n.",
          "chinese": "哲学",
          "example": "He has a master degree in philosophy",
          "wordGroup": "group_201",
          "colorIndex": 3
        },
        {
          "id": 770,
          "word": "logic",
          "partOfSpeech": "n.",
          "chinese": "逻辑学；逻辑",
          "example": "Socrates laied the foundations of logic",
          "wordGroup": "group_201",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 771,
          "word": "biology",
          "partOfSpeech": "n.",
          "chinese": "生物学；生命机理",
          "example": "Biology is the study of living things",
          "wordGroup": "group_202",
          "colorIndex": 4
        },
        {
          "id": 772,
          "word": "physics",
          "partOfSpeech": "n.",
          "chinese": "物理学",
          "example": "He is one of top students in physics",
          "wordGroup": "group_202",
          "colorIndex": 4
        },
        {
          "id": 773,
          "word": "chemistry",
          "partOfSpeech": "n.",
          "chinese": "化学",
          "example": "I am not good at organic chemistry",
          "wordGroup": "group_202",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 774,
          "word": "agriculture",
          "partOfSpeech": "n.",
          "chinese": "农业；农学",
          "example": "In the past, agriculture located a family to a place",
          "wordGroup": "group_203",
          "colorIndex": 5
        },
        {
          "id": 775,
          "word": "logistics",
          "partOfSpeech": "n.",
          "chinese": "物流；后勤",
          "example": "I have a good command in the procedures of logistics",
          "wordGroup": "group_203",
          "colorIndex": 5
        },
        {
          "id": 776,
          "word": "geography",
          "partOfSpeech": "n.",
          "chinese": "地理学；地形；地势",
          "example": "I'd like to introduce you to my geography professor",
          "wordGroup": "group_203",
          "colorIndex": 5
        },
        {
          "id": 777,
          "word": "history",
          "partOfSpeech": "n.",
          "chinese": "历史；历史学",
          "example": "China is a oriental country with a long history",
          "wordGroup": "group_203",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 778,
          "word": "engineering",
          "partOfSpeech": "n.",
          "chinese": "工程；工程学",
          "example": "The percentage of girls in engineering has increased in recent years",
          "wordGroup": "group_204",
          "colorIndex": 0
        },
        {
          "id": 779,
          "word": "mechanics",
          "partOfSpeech": "n.",
          "chinese": "力学；机械学",
          "example": "He is studying the mechanics and now is learning all the parts of an engine",
          "wordGroup": "group_204",
          "colorIndex": 0
        },
        {
          "id": 780,
          "word": "electronics",
          "partOfSpeech": "n.",
          "chinese": "电子学；电子器件",
          "example": "That country wants to increase tariffs on items such as electronics",
          "wordGroup": "group_204",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 781,
          "word": "maths/mathematics",
          "partOfSpeech": "n.",
          "chinese": "数学",
          "example": "The teacher will test us in maths",
          "wordGroup": "group_205",
          "colorIndex": 1
        },
        {
          "id": 782,
          "word": "arithmetic",
          "partOfSpeech": "n.",
          "chinese": "算数",
          "example": "Arab brought arithmetic and algebra to the fore once again and placed it almost on a par with geometry",
          "wordGroup": "group_205",
          "colorIndex": 1
        },
        {
          "id": 783,
          "word": "geometry",
          "partOfSpeech": "n.",
          "chinese": "几何学",
          "example": "Geometry is a piece of cake for me, but a big headache for my friend Clare",
          "wordGroup": "group_205",
          "colorIndex": 1
        },
        {
          "id": 784,
          "word": "algebra",
          "partOfSpeech": "n.",
          "chinese": "代数",
          "example": "The young boy is good at algebra",
          "wordGroup": "group_205",
          "colorIndex": 1
        },
        {
          "id": 785,
          "word": "calculus",
          "partOfSpeech": "n.",
          "chinese": "微积分；结实",
          "example": "Calculus is a difficult course for most students",
          "wordGroup": "group_205",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 786,
          "word": "plus",
          "partOfSpeech": "prep./adj.",
          "chinese": "加上。正数的；在零以上的",
          "example": "Intelligence plus wit makes for an interesting person",
          "wordGroup": "group_206",
          "colorIndex": 2
        },
        {
          "id": 787,
          "word": "sum",
          "partOfSpeech": "n.",
          "chinese": "总和；总数；金额",
          "example": "The man has decided to give his son a huge sum of money for his independence from the family",
          "wordGroup": "group_206",
          "colorIndex": 2
        },
        {
          "id": 788,
          "word": "total",
          "partOfSpeech": "adj./n.",
          "chinese": "总的；全部的。总数",
          "example": "In total, over 100, 000 people were killed in the tsunami and a great many of people were homeless",
          "wordGroup": "group_206",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 789,
          "word": "merger",
          "partOfSpeech": "n.",
          "chinese": "合并；并归",
          "example": "The proposed merger between two of the largest software companies has been passed",
          "wordGroup": "group_207",
          "colorIndex": 3
        },
        {
          "id": 790,
          "word": "equation",
          "partOfSpeech": "n.",
          "chinese": "相等；平衡；综合体；方程式；等式",
          "example": "If you're trying to lose weight in a healthy way, exercise should be part of the equation",
          "wordGroup": "group_207",
          "colorIndex": 3
        },
        {
          "id": 791,
          "word": "identical",
          "partOfSpeech": "adj.",
          "chinese": "同一的",
          "example": "This is the identical hotel we stayed at last year",
          "wordGroup": "group_207",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 792,
          "word": "minus",
          "partOfSpeech": "adj./prep.",
          "chinese": "负的；零以下的；减去",
          "example": "The temperature is minus ten degrees now",
          "wordGroup": "group_208",
          "colorIndex": 4
        },
        {
          "id": 793,
          "word": "subtract",
          "partOfSpeech": "v.",
          "chinese": "减去；减",
          "example": "The littel girl has begun to learn to add and subtract",
          "wordGroup": "group_208",
          "colorIndex": 4
        },
        {
          "id": 794,
          "word": "multiply",
          "partOfSpeech": "v.",
          "chinese": "乘；使相乘；使成倍增加；繁殖",
          "example": "Friendships multiply joy and divide grievance",
          "wordGroup": "group_208",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 795,
          "word": "divide",
          "partOfSpeech": "v.",
          "chinese": "除以；除",
          "example": "Twelve divided by three is four",
          "wordGroup": "group_209",
          "colorIndex": 5
        },
        {
          "id": 796,
          "word": "dividend",
          "partOfSpeech": "n.",
          "chinese": "被除数",
          "example": "In twelve divided by two, twelve is the dividend",
          "wordGroup": "group_209",
          "colorIndex": 5
        },
        {
          "id": 797,
          "word": "remainder",
          "partOfSpeech": "n.",
          "chinese": "余数；剩余部分",
          "example": "Divide four into thirteen and the remainder is one",
          "wordGroup": "group_209",
          "colorIndex": 5
        },
        {
          "id": 798,
          "word": "rational",
          "partOfSpeech": "n./adj.",
          "chinese": "有理数；（数、式等）有理的",
          "example": "A rational number can be expressed as a ratio of two integers",
          "wordGroup": "group_209",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 799,
          "word": "parameter",
          "partOfSpeech": "n.",
          "chinese": "参数；起限定作用的因素",
          "example": "Political descent is a parameter of modern life",
          "wordGroup": "group_210",
          "colorIndex": 0
        },
        {
          "id": 800,
          "word": "variable",
          "partOfSpeech": "n./adj.",
          "chinese": "变量；可变因素。易变的",
          "example": "There are some variables that can change our plan",
          "wordGroup": "group_210",
          "colorIndex": 0
        },
        {
          "id": 801,
          "word": "even",
          "partOfSpeech": "adj./adv.",
          "chinese": "均匀的；偶数的；相等的。甚至",
          "example": "He won the first round and I won the second, so our scores are even now",
          "wordGroup": "group_210",
          "colorIndex": 0
        },
        {
          "id": 802,
          "word": "odd",
          "partOfSpeech": "adj.",
          "chinese": "奇数的；古怪的",
          "example": "One, three, five, and seven are odd numbers",
          "wordGroup": "group_210",
          "colorIndex": 0
        },
        {
          "id": 803,
          "word": "mean",
          "partOfSpeech": "n./adj.",
          "chinese": "平均数；平均值。平均的",
          "example": "The professor asked the students to take 200 values and calculate the mean",
          "wordGroup": "group_210",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 804,
          "word": "double",
          "partOfSpeech": "adj./n./v.",
          "chinese": "两倍的。两倍数；两倍量。使加倍",
          "example": "Many things now cost double what they did a couple of years ago",
          "wordGroup": "group_211",
          "colorIndex": 1
        },
        {
          "id": 805,
          "word": "triple",
          "partOfSpeech": "adj./n./v",
          "chinese": "三倍的；三重的。三倍数；三包两。使增至三倍",
          "example": "His income triped",
          "wordGroup": "group_211",
          "colorIndex": 1
        },
        {
          "id": 806,
          "word": "quadruple",
          "partOfSpeech": "adj./n./v.",
          "chinese": "四倍的。四倍",
          "example": "Our profits have quadrupled in the last decade",
          "wordGroup": "group_211",
          "colorIndex": 1
        },
        {
          "id": 807,
          "word": "multiple",
          "partOfSpeech": "n./adj.",
          "chinese": "倍数。多样的，数量多的",
          "example": "Eighteen is a multiple of six",
          "wordGroup": "group_211",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 808,
          "word": "maximum",
          "partOfSpeech": "n.",
          "chinese": "最大值；最大限度",
          "example": "The maximum load for this truck is ten tons",
          "wordGroup": "group_212",
          "colorIndex": 2
        },
        {
          "id": 809,
          "word": "minimum",
          "partOfSpeech": "n.",
          "chinese": "最小值；最小限度",
          "example": "You must get a minimum of 60 questions right to pass the test",
          "wordGroup": "group_212",
          "colorIndex": 2
        },
        {
          "id": 810,
          "word": "approximately",
          "partOfSpeech": "adv.",
          "chinese": "大约",
          "example": "The yelk contains all the fat and approximately half the protein of the egg",
          "wordGroup": "group_212",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 811,
          "word": "chart",
          "partOfSpeech": "n.",
          "chinese": "图；图表；海图",
          "example": "This chart displays the links connecting these groups",
          "wordGroup": "group_213",
          "colorIndex": 3
        },
        {
          "id": 812,
          "word": "graph",
          "partOfSpeech": "n.",
          "chinese": "图表；图",
          "example": "They made a graph of how cold the weather was everyday for a month",
          "wordGroup": "group_213",
          "colorIndex": 3
        },
        {
          "id": 813,
          "word": "diagram",
          "partOfSpeech": "n.",
          "chinese": "图表；示意图；图解",
          "example": "The teacher draws a diagram showing how the plant seedling bends towards the sunlight",
          "wordGroup": "group_213",
          "colorIndex": 3
        },
        {
          "id": 814,
          "word": "table",
          "partOfSpeech": "n.",
          "chinese": "表格；桌子",
          "example": "We should create a table for the sales data",
          "wordGroup": "group_213",
          "colorIndex": 3
        },
        {
          "id": 815,
          "word": "matrix",
          "partOfSpeech": "n.",
          "chinese": "矩阵；铸模",
          "example": "She can not find the matrix for the competition",
          "wordGroup": "group_213",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 816,
          "word": "rectangle",
          "partOfSpeech": "n.",
          "chinese": "长方形；矩形",
          "example": "the plate itself is a small rectangle made of gold",
          "wordGroup": "group_214",
          "colorIndex": 4
        },
        {
          "id": 817,
          "word": "cube",
          "partOfSpeech": "n.",
          "chinese": "立方体；立方；三次幂；立方的东西",
          "example": "She dropped a cube of sugar into her coffee and stirred it with a spoon",
          "wordGroup": "group_214",
          "colorIndex": 4
        },
        {
          "id": 818,
          "word": "angle",
          "partOfSpeech": "n.",
          "chinese": "角度；脚",
          "example": "The temple is especially beautiful to look at from this angle",
          "wordGroup": "group_214",
          "colorIndex": 4
        },
        {
          "id": 819,
          "word": "triangle",
          "partOfSpeech": "n.",
          "chinese": "三角形；三角关系",
          "example": "The three places form a triangle",
          "wordGroup": "group_214",
          "colorIndex": 4
        },
        {
          "id": 820,
          "word": "diagonal",
          "partOfSpeech": "adj./n.",
          "chinese": "斜纹的；对角线的。对角线；斜纹织物",
          "example": "The two diagonals of a square cross in the center",
          "wordGroup": "group_214",
          "colorIndex": 4
        },
        {
          "id": 821,
          "word": "straight",
          "partOfSpeech": "adj./adv.",
          "chinese": "直的；笔直地；直接",
          "example": "The old lady closed her book and looked straight at me",
          "wordGroup": "group_214",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 822,
          "word": "circle",
          "partOfSpeech": "n.",
          "chinese": "圆",
          "example": "The circle is ten centimeters in diameter",
          "wordGroup": "group_215",
          "colorIndex": 5
        },
        {
          "id": 823,
          "word": "round",
          "partOfSpeech": "adj./n./adv.",
          "chinese": "圆的。绕圈；一轮。环绕",
          "example": "He went round and round but could find no way to get out of the room",
          "wordGroup": "group_215",
          "colorIndex": 5
        },
        {
          "id": 824,
          "word": "dot",
          "partOfSpeech": "n./v.",
          "chinese": "点。在...打点",
          "example": "On the map, convenience stores are marked by a red dot",
          "wordGroup": "group_215",
          "colorIndex": 5
        },
        {
          "id": 825,
          "word": "sphere",
          "partOfSpeech": "n.",
          "chinese": "球体；球状物；范围；领域",
          "example": "We move in different social sphere",
          "wordGroup": "group_215",
          "colorIndex": 5
        },
        {
          "id": 826,
          "word": "cone",
          "partOfSpeech": "n.",
          "chinese": "圆锥体；锥形物",
          "example": "The police have sectioned off the road with traffic cones",
          "wordGroup": "group_215",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 827,
          "word": "extent",
          "partOfSpeech": "n.",
          "chinese": "广度；范围；程度",
          "example": "No one cares about the extent of his debts",
          "wordGroup": "group_216",
          "colorIndex": 0
        },
        {
          "id": 828,
          "word": "width",
          "partOfSpeech": "n.",
          "chinese": "宽度",
          "example": "In front of the mountain is a river of great width",
          "wordGroup": "group_216",
          "colorIndex": 0
        },
        {
          "id": 829,
          "word": "length",
          "partOfSpeech": "n.",
          "chinese": "长度",
          "example": "The room is 7 meters in length and 5 meters in breadth",
          "wordGroup": "group_216",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 830,
          "word": "decimal",
          "partOfSpeech": "adj./n.",
          "chinese": "小数的；十进制的。小数",
          "example": "The decimal system is widely used",
          "wordGroup": "group_217",
          "colorIndex": 1
        },
        {
          "id": 831,
          "word": "percent/per cent",
          "partOfSpeech": "n.",
          "chinese": "百分之...",
          "example": "I am 100 percent in agreement",
          "wordGroup": "group_217",
          "colorIndex": 1
        },
        {
          "id": 832,
          "word": "proportion",
          "partOfSpeech": "n.",
          "chinese": "比例",
          "example": "This door is very narrow in proportion to its height",
          "wordGroup": "group_217",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 833,
          "word": "rate",
          "partOfSpeech": "n.",
          "chinese": "比率；率；速度",
          "example": "The rate of inflation decreased to 5 percent last year",
          "wordGroup": "group_218",
          "colorIndex": 2
        },
        {
          "id": 834,
          "word": "ratio",
          "partOfSpeech": "n.",
          "chinese": "比",
          "example": "The ratio of 3 to 9 is the same as that of 9 to 27",
          "wordGroup": "group_218",
          "colorIndex": 2
        },
        {
          "id": 835,
          "word": "fraction",
          "partOfSpeech": "n.",
          "chinese": "分数；小部分；片段",
          "example": "She spends only a fraction of her earnings on clothes",
          "wordGroup": "group_218",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 836,
          "word": "scale",
          "partOfSpeech": "n./v.",
          "chinese": "刻度；规模。攀登 scales 天平；鳞",
          "example": "A machine for weighing people has a scale from one pound to 300 pounds on it",
          "wordGroup": "group_219",
          "colorIndex": 3
        },
        {
          "id": 837,
          "word": "ounce",
          "partOfSpeech": "n.",
          "chinese": "盎司；少量",
          "example": "An ounce of prevention is worth of a pound of cure 预防胜于治疗",
          "wordGroup": "group_219",
          "colorIndex": 3
        },
        {
          "id": 838,
          "word": "density",
          "partOfSpeech": "n.",
          "chinese": "密度；浓度",
          "example": "The population density of big cities is incresing year by year",
          "wordGroup": "group_219",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 839,
          "word": "Fahrenheit",
          "partOfSpeech": "adj.",
          "chinese": "华氏温标的",
          "example": "Water freezes at 32 degrees Fahrenheit",
          "wordGroup": "group_220",
          "colorIndex": 4
        },
        {
          "id": 840,
          "word": "mercury",
          "partOfSpeech": "n.",
          "chinese": "水银；水星",
          "example": "The mercury stood at nearly 40 degrees C",
          "wordGroup": "group_220",
          "colorIndex": 4
        },
        {
          "id": 841,
          "word": "battery",
          "partOfSpeech": "n.",
          "chinese": "电池；（物品的）一组",
          "example": "You can charge your car battery at this car park",
          "wordGroup": "group_220",
          "colorIndex": 4
        },
        {
          "id": 842,
          "word": "volt",
          "partOfSpeech": "n.",
          "chinese": "伏特",
          "example": "A child miraculously survived a 25, 000 volt electric shock",
          "wordGroup": "group_220",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 843,
          "word": "radiate",
          "partOfSpeech": "v.",
          "chinese": "辐射；发散；从中心向四周散开",
          "example": "Four avenues radiate from the square",
          "wordGroup": "group_221",
          "colorIndex": 5
        },
        {
          "id": 844,
          "word": "emit",
          "partOfSpeech": "v.",
          "chinese": "散发 (光、热、气等)；发出（声音）",
          "example": "The tail exhaust pipe of the car emitted poisonous smoke",
          "wordGroup": "group_221",
          "colorIndex": 5
        },
        {
          "id": 845,
          "word": "transparent",
          "partOfSpeech": "adj.",
          "chinese": "透明的；易看穿的",
          "example": "Not all glass is transparent",
          "wordGroup": "group_221",
          "colorIndex": 5
        },
        {
          "id": 846,
          "word": "hollow",
          "partOfSpeech": "adj.",
          "chinese": "中空的；空心的",
          "example": "The trunk of this tree looks solid, but in fact, it is hollow",
          "wordGroup": "group_221",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 847,
          "word": "ozone",
          "partOfSpeech": "n.",
          "chinese": "臭氧",
          "example": "The ozone layer protects the earth from most of the sun's ultraviolet radiation",
          "wordGroup": "group_222",
          "colorIndex": 0
        },
        {
          "id": 848,
          "word": "gravity",
          "partOfSpeech": "n.",
          "chinese": "地球引力；重力",
          "example": "Enormous energy is needed to launch a spacecraft against gravity",
          "wordGroup": "group_222",
          "colorIndex": 0
        },
        {
          "id": 849,
          "word": "friction",
          "partOfSpeech": "n.",
          "chinese": "摩擦力；摩擦；不和；矛盾",
          "example": "In designing this device, it is necessary to reduce friction as much as possible",
          "wordGroup": "group_222",
          "colorIndex": 0
        },
        {
          "id": 850,
          "word": "eccentric",
          "partOfSpeech": "adj.",
          "chinese": "不同心圆的；古怪的",
          "example": "The old lady has some eccentric habits",
          "wordGroup": "group_222",
          "colorIndex": 0
        },
        {
          "id": 851,
          "word": "displace",
          "partOfSpeech": "v.",
          "chinese": "移动...的位置；取代；代替",
          "example": "A bone in his knee was displaced when he crashed against another player",
          "wordGroup": "group_222",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 852,
          "word": "boil",
          "partOfSpeech": "v./n.",
          "chinese": "煮沸。沸点",
          "example": "The watched pot never boils 性急烧水不沸",
          "wordGroup": "group_223",
          "colorIndex": 1
        },
        {
          "id": 853,
          "word": "melt",
          "partOfSpeech": "v.",
          "chinese": "（使）融/熔化",
          "example": "Iron melts at a great heat",
          "wordGroup": "group_223",
          "colorIndex": 1
        },
        {
          "id": 854,
          "word": "dissolve",
          "partOfSpeech": "v.",
          "chinese": "（使）溶解；解散",
          "example": "Sugar dissolves in water",
          "wordGroup": "group_223",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 855,
          "word": "rust",
          "partOfSpeech": "v./n.",
          "chinese": "（使）生锈。锈；铁锈",
          "example": "If you leave your metal tools outside in the rain, they will rust",
          "wordGroup": "group_224",
          "colorIndex": 2
        },
        {
          "id": 856,
          "word": "ferment",
          "partOfSpeech": "v./n.",
          "chinese": "（使）发酵；骚动。酶；发酵；动乱",
          "example": "The whole country was in a state of ferment",
          "wordGroup": "group_224",
          "colorIndex": 2
        },
        {
          "id": 857,
          "word": "dilute",
          "partOfSpeech": "v./adj.",
          "chinese": "冲淡；稀释。稀释了的；减弱了的",
          "example": "The nurse diluted the drug with saline water",
          "wordGroup": "group_224",
          "colorIndex": 2
        },
        {
          "id": 858,
          "word": "acid",
          "partOfSpeech": "n./adj.",
          "chinese": "酸。酸的；讽刺的；尖刻的",
          "example": "When she spoke, her tone was like acid",
          "wordGroup": "group_224",
          "colorIndex": 2
        },
        {
          "id": 859,
          "word": "noxious",
          "partOfSpeech": "adj.",
          "chinese": "有害的",
          "example": "Increasing tax on petrol would encourage people to drive cars with fewer noxious emissions",
          "wordGroup": "group_224",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 860,
          "word": "static",
          "partOfSpeech": "adj.",
          "chinese": "静态的",
          "example": "This cloth material has static electricity",
          "wordGroup": "group_225",
          "colorIndex": 3
        },
        {
          "id": 861,
          "word": "inert",
          "partOfSpeech": "adj.",
          "chinese": "无生气的；惰性的；不活泼",
          "example": "Helium and neon are inert gases",
          "wordGroup": "group_225",
          "colorIndex": 3
        },
        {
          "id": 862,
          "word": "inherent",
          "partOfSpeech": "adj.",
          "chinese": "内在的；固有的",
          "example": "Polarity is inherent in a magent",
          "wordGroup": "group_225",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 863,
          "word": "formula",
          "partOfSpeech": "n.",
          "chinese": "公式；方程式；原则；配方；分子式",
          "example": "The formula for water is H2O",
          "wordGroup": "group_226",
          "colorIndex": 4
        },
        {
          "id": 864,
          "word": "component",
          "partOfSpeech": "n.",
          "chinese": "成分；组成",
          "example": "Regular exercise is one of the key components of a healthy lifestyle",
          "wordGroup": "group_226",
          "colorIndex": 4
        },
        {
          "id": 865,
          "word": "compose",
          "partOfSpeech": "v.",
          "chinese": "组成；构成；创作；写",
          "example": "Water is composed of hydrogen and oxygen",
          "wordGroup": "group_226",
          "colorIndex": 4
        },
        {
          "id": 866,
          "word": "mixture",
          "partOfSpeech": "n.",
          "chinese": "混合物",
          "example": "her new play is mixture of sadness and humour",
          "wordGroup": "group_226",
          "colorIndex": 4
        },
        {
          "id": 867,
          "word": "blend",
          "partOfSpeech": "n./v.",
          "chinese": "混合；（使）交融。混合物",
          "example": "His manner was a blend of friendliness and respect",
          "wordGroup": "group_226",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 868,
          "word": "theory",
          "partOfSpeech": "n.",
          "chinese": "理论；学说",
          "example": "There are many theories about the origin of the universe",
          "wordGroup": "group_227",
          "colorIndex": 5
        },
        {
          "id": 869,
          "word": "empirical",
          "partOfSpeech": "adj.",
          "chinese": "经验主义的；以实验为依据的",
          "example": "His thesis is not very convincing for lack of empirical evidence",
          "wordGroup": "group_227",
          "colorIndex": 5
        },
        {
          "id": 870,
          "word": "practical",
          "partOfSpeech": "adj.",
          "chinese": "实际的；有用的；务实的；心灵手巧的",
          "example": "He is very practical. He can make or mend almost anything",
          "wordGroup": "group_227",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 871,
          "word": "doctrine",
          "partOfSpeech": "n.",
          "chinese": "学说；教义；信条",
          "example": "The doctrine is unchangable",
          "wordGroup": "group_228",
          "colorIndex": 0
        },
        {
          "id": 872,
          "word": "principle",
          "partOfSpeech": "n.",
          "chinese": "原则；（科学）原理",
          "example": "A bicycle and a motorcycle are built on the same principle",
          "wordGroup": "group_228",
          "colorIndex": 0
        },
        {
          "id": 873,
          "word": "discipline",
          "partOfSpeech": "n.",
          "chinese": "纪律；训练",
          "example": "It takes years of discipline to become a ballerina",
          "wordGroup": "group_228",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 874,
          "word": "term",
          "partOfSpeech": "n.",
          "chinese": "期限；术语；[英]学期",
          "example": "The protocol would have many positive results in the long term",
          "wordGroup": "group_229",
          "colorIndex": 1
        },
        {
          "id": 875,
          "word": "semester",
          "partOfSpeech": "n.",
          "chinese": "学期",
          "example": "There are two semesters in a year",
          "wordGroup": "group_229",
          "colorIndex": 1
        },
        {
          "id": 876,
          "word": "timetable",
          "partOfSpeech": "n.",
          "chinese": "时间表；课程表",
          "example": "There are eight English classes listed on this term's timetable",
          "wordGroup": "group_229",
          "colorIndex": 1
        },
        {
          "id": 877,
          "word": "schedule",
          "partOfSpeech": "n.",
          "chinese": "日程安排；[美]时刻表",
          "example": "The next thing on my schedule is to buy some milk in the supermarket",
          "wordGroup": "group_229",
          "colorIndex": 1
        },
        {
          "id": 878,
          "word": "deadline",
          "partOfSpeech": "n.",
          "chinese": "截止日期",
          "example": "I hope we can finish this before the deadline",
          "wordGroup": "group_229",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 879,
          "word": "course",
          "partOfSpeech": "n.",
          "chinese": "课程",
          "example": "She is currently doing a business studies course at Leeds",
          "wordGroup": "group_230",
          "colorIndex": 2
        },
        {
          "id": 880,
          "word": "lesson",
          "partOfSpeech": "n.",
          "chinese": "一堂课；课程；教训",
          "example": "The lesson from your failure is perhaps a broader one",
          "wordGroup": "group_230",
          "colorIndex": 2
        },
        {
          "id": 881,
          "word": "curriculum",
          "partOfSpeech": "n.",
          "chinese": "课程；全部课程",
          "example": "The staff should work together to revise the school curriculum",
          "wordGroup": "group_230",
          "colorIndex": 2
        },
        {
          "id": 882,
          "word": "seminar",
          "partOfSpeech": "n.",
          "chinese": "研讨会；讨论课",
          "example": "Why didn't you come to yesterday's seminar?",
          "wordGroup": "group_230",
          "colorIndex": 2
        },
        {
          "id": 883,
          "word": "forum",
          "partOfSpeech": "n.",
          "chinese": "论坛；讨论会；公开讨论广场",
          "example": "The forum is now open to all small and medium-sized enterprises",
          "wordGroup": "group_230",
          "colorIndex": 2
        },
        {
          "id": 884,
          "word": "syllabus",
          "partOfSpeech": "n.",
          "chinese": "教学大纲",
          "example": "The syllabus changes every year",
          "wordGroup": "group_230",
          "colorIndex": 2
        },
        {
          "id": 885,
          "word": "system",
          "partOfSpeech": "n.",
          "chinese": "系统；体系；制度",
          "example": "The new system is still in the planning stage",
          "wordGroup": "group_230",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 886,
          "word": "rudimentary",
          "partOfSpeech": "adj.",
          "chinese": "基本的；粗浅的",
          "example": "He only has a rudimentary knowledge of the dinosaurs",
          "wordGroup": "group_231",
          "colorIndex": 3
        },
        {
          "id": 887,
          "word": "basic",
          "partOfSpeech": "adj.",
          "chinese": "基本的；基础的",
          "example": "The government increased prices on some basic commodities like meat and dairy products",
          "wordGroup": "group_231",
          "colorIndex": 3
        },
        {
          "id": 888,
          "word": "fundamental",
          "partOfSpeech": "adj.",
          "chinese": "基础的；基本的；根本的",
          "example": "Another fundamental consideration in the conception of a design is function",
          "wordGroup": "group_231",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 889,
          "word": "elementary",
          "partOfSpeech": "adj.",
          "chinese": "基本的；初级的",
          "example": "Their course of study includes elementary hygiene and medical theories",
          "wordGroup": "group_232",
          "colorIndex": 4
        },
        {
          "id": 890,
          "word": "profound",
          "partOfSpeech": "adj.",
          "chinese": "（影响）深刻的，深远的；见解深刻的",
          "example": "His brother's words have had a profound effect on him",
          "wordGroup": "group_232",
          "colorIndex": 4
        },
        {
          "id": 891,
          "word": "superficial",
          "partOfSpeech": "adj.",
          "chinese": "表面的；外表的；肤浅的",
          "example": "He is too superficial to appreciate great literature like this",
          "wordGroup": "group_232",
          "colorIndex": 4
        },
        {
          "id": 892,
          "word": "surface",
          "partOfSpeech": "n.",
          "chinese": "表面；地面；水面",
          "example": "The surface of the bamboo feels so smooth",
          "wordGroup": "group_232",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 893,
          "word": "compulsory",
          "partOfSpeech": "adj.",
          "chinese": "强制的",
          "example": "Britain did not introduce compulsory primary education until 1880",
          "wordGroup": "group_233",
          "colorIndex": 5
        },
        {
          "id": 894,
          "word": "prerequisite",
          "partOfSpeech": "n./adj.",
          "chinese": "必备条件。必备的",
          "example": "Training is a prerequisite for competence",
          "wordGroup": "group_233",
          "colorIndex": 5
        },
        {
          "id": 895,
          "word": "selective",
          "partOfSpeech": "adj.",
          "chinese": "选择性的",
          "example": "The man seem to have a very selective recall of past events",
          "wordGroup": "group_233",
          "colorIndex": 5
        },
        {
          "id": 896,
          "word": "elective",
          "partOfSpeech": "adj.",
          "chinese": "选择性的",
          "example": "Besides the required courses, I'm taking an elective in computer science",
          "wordGroup": "group_233",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 897,
          "word": "assignment",
          "partOfSpeech": "n.",
          "chinese": "作业；任务",
          "example": "A brave fighter never shrinks from danger when executing an assignment",
          "wordGroup": "group_234",
          "colorIndex": 0
        },
        {
          "id": 898,
          "word": "submit",
          "partOfSpeech": "v.",
          "chinese": "提交；服从",
          "example": "I hope you can submit your term papers before the deadline",
          "wordGroup": "group_234",
          "colorIndex": 0
        },
        {
          "id": 899,
          "word": "preview",
          "partOfSpeech": "n./v.",
          "chinese": "预习",
          "example": "Please do the preview and review work",
          "wordGroup": "group_234",
          "colorIndex": 0
        },
        {
          "id": 900,
          "word": "review",
          "partOfSpeech": "n./v.",
          "chinese": "回顾；复习",
          "example": "We must hold a careful review of historical events",
          "wordGroup": "group_234",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 901,
          "word": "revise",
          "partOfSpeech": "v.",
          "chinese": "修订；修改",
          "example": "The writer was revising what he had written",
          "wordGroup": "group_235",
          "colorIndex": 1
        },
        {
          "id": 902,
          "word": "inspect",
          "partOfSpeech": "v.",
          "chinese": "检查；检阅；视察",
          "example": "The mayor will inspect our school tomorrow",
          "wordGroup": "group_235",
          "colorIndex": 1
        },
        {
          "id": 903,
          "word": "consult",
          "partOfSpeech": "v.",
          "chinese": "请教；查阅",
          "example": "In this case, I recommended that you consult your doctor",
          "wordGroup": "group_235",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 904,
          "word": "skim",
          "partOfSpeech": "v.",
          "chinese": "掠过；擦过；略读",
          "example": "It's important for you to skim through this article",
          "wordGroup": "group_236",
          "colorIndex": 2
        },
        {
          "id": 905,
          "word": "scan",
          "partOfSpeech": "v./n.",
          "chinese": "细看；浏览；扫描",
          "example": "I just had a quick scan through your book again",
          "wordGroup": "group_236",
          "colorIndex": 2
        },
        {
          "id": 906,
          "word": "scrutinise/scrutinize",
          "partOfSpeech": "v.",
          "chinese": "仔细检查",
          "example": "The jeweler scrutinized the ruby for flaws",
          "wordGroup": "group_236",
          "colorIndex": 2
        },
        {
          "id": 907,
          "word": "recite",
          "partOfSpeech": "v.",
          "chinese": "背诵；朗诵",
          "example": "Each child had to recite a poem in class",
          "wordGroup": "group_236",
          "colorIndex": 2
        },
        {
          "id": 908,
          "word": "dictate",
          "partOfSpeech": "v.",
          "chinese": "让（某人）听写；命令；强行规定",
          "example": "The English teacher dictates to the class every other week",
          "wordGroup": "group_236",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 909,
          "word": "examination/exam",
          "partOfSpeech": "n.",
          "chinese": "考试；抽查",
          "example": "Did you have to get through an entrance examination",
          "wordGroup": "group_237",
          "colorIndex": 3
        },
        {
          "id": 910,
          "word": "test",
          "partOfSpeech": "v./n.",
          "chinese": "测试；检验",
          "example": "The scientist have already experimented at test sites",
          "wordGroup": "group_237",
          "colorIndex": 3
        },
        {
          "id": 911,
          "word": "quiz",
          "partOfSpeech": "n.",
          "chinese": "小测验",
          "example": "The quiz was a good opportunity for him to exhibit his knowledge",
          "wordGroup": "group_237",
          "colorIndex": 3
        },
        {
          "id": 912,
          "word": "presentation",
          "partOfSpeech": "n.",
          "chinese": "陈述；表演；演出",
          "example": "There is a presentation of our new play tonight",
          "wordGroup": "group_237",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 913,
          "word": "plagiarise/plagiarize",
          "partOfSpeech": "v.",
          "chinese": "抄袭",
          "example": "It is not a viable option to plagiarize someone's work",
          "wordGroup": "group_238",
          "colorIndex": 4
        },
        {
          "id": 914,
          "word": "copy",
          "partOfSpeech": "n./v.",
          "chinese": "复制品。抄写；复制",
          "example": "This painting is a copy of the one in the museum",
          "wordGroup": "group_238",
          "colorIndex": 4
        },
        {
          "id": 915,
          "word": "print",
          "partOfSpeech": "v./n.",
          "chinese": "打印。印刷品；照片",
          "example": "Print these words in Italics across the top of the page",
          "wordGroup": "group_238",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 916,
          "word": "thesis",
          "partOfSpeech": "n.",
          "chinese": "论文",
          "example": "To be specific, the argument in your graduation thesis is logical",
          "wordGroup": "group_239",
          "colorIndex": 5
        },
        {
          "id": 917,
          "word": "essay",
          "partOfSpeech": "n.",
          "chinese": "短文；小品文",
          "example": "This essay represents a considerable improvement on your recent work",
          "wordGroup": "group_239",
          "colorIndex": 5
        },
        {
          "id": 918,
          "word": "paper",
          "partOfSpeech": "n.",
          "chinese": "论文；纸",
          "example": "She is working hard at her term paper in the library",
          "wordGroup": "group_239",
          "colorIndex": 5
        },
        {
          "id": 919,
          "word": "dissertation",
          "partOfSpeech": "n.",
          "chinese": "专题论文；（尤指）学位论文",
          "example": "Each student will have a supervisor to advise on the writing of a dissertation",
          "wordGroup": "group_239",
          "colorIndex": 5
        },
        {
          "id": 920,
          "word": "project",
          "partOfSpeech": "n.",
          "chinese": "（大中学生的）专题研究；项目；方案",
          "example": "It is an elaborate project that applies to many purposes",
          "wordGroup": "group_239",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 921,
          "word": "heading",
          "partOfSpeech": "n.",
          "chinese": "标题；主题",
          "example": "The heading was in large print",
          "wordGroup": "group_240",
          "colorIndex": 0
        },
        {
          "id": 922,
          "word": "outset",
          "partOfSpeech": "n.",
          "chinese": "开端；开始",
          "example": "The science fiction fascinates the readers from the outset",
          "wordGroup": "group_240",
          "colorIndex": 0
        },
        {
          "id": 923,
          "word": "outline",
          "partOfSpeech": "n.",
          "chinese": "概要；轮廓",
          "example": "This document provided a broad outline of the country's development after the World War II",
          "wordGroup": "group_240",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 924,
          "word": "point",
          "partOfSpeech": "n.",
          "chinese": "点；要点",
          "example": "That is not the point in question",
          "wordGroup": "group_241",
          "colorIndex": 1
        },
        {
          "id": 925,
          "word": "gist",
          "partOfSpeech": "n.",
          "chinese": "主旨；要点",
          "example": "He cannot understand the gist of their argument",
          "wordGroup": "group_241",
          "colorIndex": 1
        },
        {
          "id": 926,
          "word": "opinion",
          "partOfSpeech": "n.",
          "chinese": "看法；评价",
          "example": "She asked her friends' opinions about her plans",
          "wordGroup": "group_241",
          "colorIndex": 1
        },
        {
          "id": 927,
          "word": "introduce",
          "partOfSpeech": "v.",
          "chinese": "介绍；引进",
          "example": "Britain did not introduce complusory primary education until 1880",
          "wordGroup": "group_241",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 928,
          "word": "reference",
          "partOfSpeech": "n.",
          "chinese": "参考；推荐函；提及；涉及",
          "example": "This book is for reference only",
          "wordGroup": "group_242",
          "colorIndex": 2
        },
        {
          "id": 929,
          "word": "cite",
          "partOfSpeech": "v.",
          "chinese": "引用",
          "example": "I'll just cite some figures for comparison",
          "wordGroup": "group_242",
          "colorIndex": 2
        },
        {
          "id": 930,
          "word": "elicit",
          "partOfSpeech": "v.",
          "chinese": "引出；探出；套出",
          "example": "At last, we elicited some important information from him",
          "wordGroup": "group_242",
          "colorIndex": 2
        },
        {
          "id": 931,
          "word": "quote",
          "partOfSpeech": "v.",
          "chinese": "引用；引述；报（价）",
          "example": "The author frequently quoted Shakespeare",
          "wordGroup": "group_242",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 932,
          "word": "extract",
          "partOfSpeech": "n.",
          "chinese": "摘录",
          "example": "The following extract is taken from his commentary on the movie",
          "wordGroup": "group_243",
          "colorIndex": 3
        },
        {
          "id": 933,
          "word": "abstract",
          "partOfSpeech": "n./adj./v.",
          "chinese": "摘要。抽象的。提取；把...抽象出",
          "example": "Iron is abstracted from ore",
          "wordGroup": "group_243",
          "colorIndex": 3
        },
        {
          "id": 934,
          "word": "summary",
          "partOfSpeech": "n.",
          "chinese": "摘要；概要",
          "example": "The professor asked the students to make a summary of the reading material",
          "wordGroup": "group_243",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 935,
          "word": "assume",
          "partOfSpeech": "v.",
          "chinese": "假定；设想；承担（责任）；取得（权力）",
          "example": "",
          "wordGroup": "group_244",
          "colorIndex": 4
        },
        {
          "id": 936,
          "word": "presume",
          "partOfSpeech": "v.",
          "chinese": "假定；假设；料想",
          "example": "From his words, I presumed that he had been in France for several years",
          "wordGroup": "group_244",
          "colorIndex": 4
        },
        {
          "id": 937,
          "word": "suppose",
          "partOfSpeech": "v.",
          "chinese": "假定；认为",
          "example": "Let us suppose another planet with conditions similar to those on the earth",
          "wordGroup": "group_244",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 938,
          "word": "hypothesis",
          "partOfSpeech": "n.",
          "chinese": "假说；假设",
          "example": "This is only a scientific hypothesis that has not been proved by experiments",
          "wordGroup": "group_245",
          "colorIndex": 5
        },
        {
          "id": 939,
          "word": "postulate",
          "partOfSpeech": "v./n.",
          "chinese": "假定；假设",
          "example": "The experts had postulated that this disease can be cured in a couple of decades",
          "wordGroup": "group_245",
          "colorIndex": 5
        },
        {
          "id": 940,
          "word": "speculate",
          "partOfSpeech": "v.",
          "chinese": "推测",
          "example": "The doctors could only speculate that he died of cancer",
          "wordGroup": "group_245",
          "colorIndex": 5
        },
        {
          "id": 941,
          "word": "predict",
          "partOfSpeech": "v.",
          "chinese": "预测",
          "example": "It is virtually impossible to predict the future accurately",
          "wordGroup": "group_245",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 942,
          "word": "perceive",
          "partOfSpeech": "v.",
          "chinese": "感知；察觉；意识到",
          "example": "I perceived that it was not possible to make her change her mind",
          "wordGroup": "group_246",
          "colorIndex": 0
        },
        {
          "id": 943,
          "word": "detect",
          "partOfSpeech": "v.",
          "chinese": "察觉；发觉；侦查出",
          "example": "The man is responsible for detecting some kind of weak signals",
          "wordGroup": "group_246",
          "colorIndex": 0
        },
        {
          "id": 944,
          "word": "discern",
          "partOfSpeech": "v.",
          "chinese": "察觉出；分辨出",
          "example": "The child find it hard to discern between red and green",
          "wordGroup": "group_246",
          "colorIndex": 0
        },
        {
          "id": 945,
          "word": "recognise/recognize",
          "partOfSpeech": "v.",
          "chinese": "认识；辨认出",
          "example": "I recoginized Peter at once, although I hadn't seen him for many years",
          "wordGroup": "group_246",
          "colorIndex": 0
        },
        {
          "id": 946,
          "word": "conscious",
          "partOfSpeech": "adj.",
          "chinese": "意识到的；有知觉的",
          "example": "He was conscious of his guilt",
          "wordGroup": "group_246",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 947,
          "word": "reckon",
          "partOfSpeech": "v.",
          "chinese": "估计；期望；认为",
          "example": "We had reckoned on your support",
          "wordGroup": "group_247",
          "colorIndex": 1
        },
        {
          "id": 948,
          "word": "deem",
          "partOfSpeech": "v.",
          "chinese": "认为；相信",
          "example": "The board deemed it urgent that these files be printed right away",
          "wordGroup": "group_247",
          "colorIndex": 1
        },
        {
          "id": 949,
          "word": "imply",
          "partOfSpeech": "v.",
          "chinese": "暗指；意味着",
          "example": "The way he talked implied that he was not willing to accept the agreement",
          "wordGroup": "group_247",
          "colorIndex": 1
        },
        {
          "id": 950,
          "word": "deliberate",
          "partOfSpeech": "v./adj.",
          "chinese": "深思熟虑；仔细考虑。审慎的",
          "example": "She deliberated the question before she made an answer",
          "wordGroup": "group_247",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 951,
          "word": "represent",
          "partOfSpeech": "v.",
          "chinese": "代表；象征",
          "example": "A committee has been elected to represent us",
          "wordGroup": "group_248",
          "colorIndex": 2
        },
        {
          "id": 952,
          "word": "insist",
          "partOfSpeech": "v.",
          "chinese": "坚持；坚决认为（主张或要求）",
          "example": "We insist on self-reliance",
          "wordGroup": "group_248",
          "colorIndex": 2
        },
        {
          "id": 953,
          "word": "persist",
          "partOfSpeech": "v.",
          "chinese": "坚持不懈；持续存在",
          "example": "On the top the massive mountains, snow persists throughout the year",
          "wordGroup": "group_248",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 954,
          "word": "understand",
          "partOfSpeech": "v.",
          "chinese": "懂得；理解",
          "example": "What human beings have understood is just the tip of the iceberg",
          "wordGroup": "group_249",
          "colorIndex": 3
        },
        {
          "id": 955,
          "word": "comprehend",
          "partOfSpeech": "v.",
          "chinese": "理解；领悟",
          "example": "You can say you have comprehended a word if you can use it correctly and effectively",
          "wordGroup": "group_249",
          "colorIndex": 3
        },
        {
          "id": 956,
          "word": "analyse/analyze",
          "partOfSpeech": "v.",
          "chinese": "分析",
          "example": "We should analyze the cause and the effect of this event",
          "wordGroup": "group_249",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 957,
          "word": "diagnose",
          "partOfSpeech": "v.",
          "chinese": "判断；诊断",
          "example": "We can use a test to diagnose a variety of diseases",
          "wordGroup": "group_250",
          "colorIndex": 4
        },
        {
          "id": 958,
          "word": "infer",
          "partOfSpeech": "v.",
          "chinese": "推断；推理",
          "example": "From your smile, I infer that you like this drink",
          "wordGroup": "group_250",
          "colorIndex": 4
        },
        {
          "id": 959,
          "word": "deduce",
          "partOfSpeech": "v.",
          "chinese": "演绎；推论",
          "example": "We can deduce a conclusion from this premise",
          "wordGroup": "group_250",
          "colorIndex": 4
        },
        {
          "id": 960,
          "word": "conclude",
          "partOfSpeech": "v.",
          "chinese": "推断出；得出结论；（使）结束",
          "example": "What do you conclude from his explanation?",
          "wordGroup": "group_250",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 961,
          "word": "analogy",
          "partOfSpeech": "n.",
          "chinese": "类比；类推",
          "example": "The man drew an analogy between the human skin and a brick wall",
          "wordGroup": "group_251",
          "colorIndex": 5
        },
        {
          "id": 962,
          "word": "compare",
          "partOfSpeech": "v.",
          "chinese": "比较；把...比作；比得上",
          "example": "Your knowledge cannot yet compare with his",
          "wordGroup": "group_251",
          "colorIndex": 5
        },
        {
          "id": 963,
          "word": "contrast",
          "partOfSpeech": "n.",
          "chinese": "对比；明显的差异",
          "example": "There is a great contrast between good and evil",
          "wordGroup": "group_251",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 964,
          "word": "overlap",
          "partOfSpeech": "v.",
          "chinese": "与...复叠；（与...）部分相同",
          "example": "The plots and descriptions in these two novels largely overlap",
          "wordGroup": "group_252",
          "colorIndex": 0
        },
        {
          "id": 965,
          "word": "contradiction",
          "partOfSpeech": "n.",
          "chinese": "矛盾；不一致；反驳",
          "example": "Your attitude is in contradiction to your character",
          "wordGroup": "group_252",
          "colorIndex": 0
        },
        {
          "id": 966,
          "word": "disagree",
          "partOfSpeech": "v.",
          "chinese": "有分歧；不同意",
          "example": "I strongly disagree with this immoral approach to science",
          "wordGroup": "group_252",
          "colorIndex": 0
        },
        {
          "id": 967,
          "word": "differ",
          "partOfSpeech": "v.",
          "chinese": "不同、相异",
          "example": "The two theories differ from each other in many ways",
          "wordGroup": "group_252",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 968,
          "word": "diverse",
          "partOfSpeech": "adj.",
          "chinese": "不一样的；多种多样的",
          "example": "The original meaning of this word has become more diverse over time",
          "wordGroup": "group_253",
          "colorIndex": 1
        },
        {
          "id": 969,
          "word": "nuance",
          "partOfSpeech": "n.",
          "chinese": "细微差别",
          "example": "The investigator watched the suspect's face intently to catch every nuance of expression",
          "wordGroup": "group_253",
          "colorIndex": 1
        },
        {
          "id": 970,
          "word": "inductive",
          "partOfSpeech": "adj.",
          "chinese": "归纳的；诱导的",
          "example": "You need to infer by inductive reasoning",
          "wordGroup": "group_253",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 971,
          "word": "detail",
          "partOfSpeech": "n.",
          "chinese": "细节；（画等的）细节",
          "example": "No detail was too small to escape the detective's attention",
          "wordGroup": "group_254",
          "colorIndex": 2
        },
        {
          "id": 972,
          "word": "thorough",
          "partOfSpeech": "adj.",
          "chinese": "彻底的；详尽的",
          "example": "A thorough brushing helps to protect your teeth and gums",
          "wordGroup": "group_254",
          "colorIndex": 2
        },
        {
          "id": 973,
          "word": "example",
          "partOfSpeech": "n.",
          "chinese": "例子；榜样",
          "example": "Her diligence has set an example to the others",
          "wordGroup": "group_254",
          "colorIndex": 2
        },
        {
          "id": 974,
          "word": "instance",
          "partOfSpeech": "n.",
          "chinese": "实例；情况；场合",
          "example": "Nowadays we can read many instances of good people and good deeds in the press",
          "wordGroup": "group_254",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 975,
          "word": "confirm",
          "partOfSpeech": "v.",
          "chinese": "证实；确保；巩固",
          "example": "Her new film confirmed her as one of our leading directors",
          "wordGroup": "group_255",
          "colorIndex": 3
        },
        {
          "id": 976,
          "word": "demonstrate",
          "partOfSpeech": "v.",
          "chinese": "示范；演示；证明",
          "example": "He demonstrated how to use the new machine",
          "wordGroup": "group_255",
          "colorIndex": 3
        },
        {
          "id": 977,
          "word": "illustrate",
          "partOfSpeech": "v.",
          "chinese": "（用图等）说明；给（书）加插图（或图表）",
          "example": "The book was illustrated with color photographs",
          "wordGroup": "group_255",
          "colorIndex": 3
        },
        {
          "id": 978,
          "word": "manifest",
          "partOfSpeech": "v.",
          "chinese": "显示；表明",
          "example": "Her bravery manifests itself in times of difficulty",
          "wordGroup": "group_255",
          "colorIndex": 3
        },
        {
          "id": 979,
          "word": "prove",
          "partOfSpeech": "v.",
          "chinese": "证明；结果是",
          "example": "He has proved his loyalty in the battle",
          "wordGroup": "group_255",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 980,
          "word": "determine",
          "partOfSpeech": "v.",
          "chinese": "决定；下定决心；查明",
          "example": "He determined to move to another city and start a new life",
          "wordGroup": "group_256",
          "colorIndex": 4
        },
        {
          "id": 981,
          "word": "decide",
          "partOfSpeech": "v.",
          "chinese": "决定",
          "example": "Don't decide on important matters too quickly",
          "wordGroup": "group_256",
          "colorIndex": 4
        },
        {
          "id": 982,
          "word": "resolve",
          "partOfSpeech": "v.",
          "chinese": "决心；决定；（使）分解为；解决",
          "example": "She resolves that she will never eat junk food",
          "wordGroup": "group_256",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 983,
          "word": "survey",
          "partOfSpeech": "n./v.",
          "chinese": "民意调查；对...进行民意调查",
          "example": "A recent survey of public opinions shows that many people are worried about the rising house prices",
          "wordGroup": "group_257",
          "colorIndex": 5
        },
        {
          "id": 984,
          "word": "research",
          "partOfSpeech": "n.",
          "chinese": "调查；探索",
          "example": "It is a good idea to do some research before you buy a house",
          "wordGroup": "group_257",
          "colorIndex": 5
        },
        {
          "id": 985,
          "word": "observe",
          "partOfSpeech": "v.",
          "chinese": "观察；观测；注意到",
          "example": "I observed a stranger enter my neighbor's home",
          "wordGroup": "group_257",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 986,
          "word": "inquire/enquire",
          "partOfSpeech": "v.",
          "chinese": "询问；调查",
          "example": "We must inquire into the matter",
          "wordGroup": "group_258",
          "colorIndex": 0
        },
        {
          "id": 987,
          "word": "query",
          "partOfSpeech": "n./v.",
          "chinese": "\u0010疑问；询问；怀疑；询问",
          "example": "I have serveral queries about the work you give me",
          "wordGroup": "group_258",
          "colorIndex": 0
        },
        {
          "id": 988,
          "word": "questionnaire",
          "partOfSpeech": "n.",
          "chinese": "调查表；调查问卷",
          "example": "We have sent out nealy 3000 questionnaires, but only a third of them were returned",
          "wordGroup": "group_258",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 989,
          "word": "achieve",
          "partOfSpeech": "v.",
          "chinese": "实现；到达",
          "example": "In many fields, women have yet to achieve the equal participation in policy making processes",
          "wordGroup": "group_259",
          "colorIndex": 1
        },
        {
          "id": 990,
          "word": "accomplish",
          "partOfSpeech": "v.",
          "chinese": "达到（目的）；完成",
          "example": "Though the task was challenging, we managed to accomplish it on time",
          "wordGroup": "group_259",
          "colorIndex": 1
        },
        {
          "id": 991,
          "word": "attain",
          "partOfSpeech": "v.",
          "chinese": "获得；达到",
          "example": "Great efforts are needed before we can attain our goal",
          "wordGroup": "group_259",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 992,
          "word": "credit",
          "partOfSpeech": "n.",
          "chinese": "赊购；学分；信任",
          "example": "I need three more credits to graduate",
          "wordGroup": "group_260",
          "colorIndex": 2
        },
        {
          "id": 993,
          "word": "score",
          "partOfSpeech": "n.",
          "chinese": "得分、成绩",
          "example": "Now the score in the football game is one one",
          "wordGroup": "group_260",
          "colorIndex": 2
        },
        {
          "id": 994,
          "word": "mark",
          "partOfSpeech": "n./v.",
          "chinese": "分数；标记；标志着；给...打分；在...上做记号",
          "example": "It is dangerous to swim beyond this mark",
          "wordGroup": "group_260",
          "colorIndex": 2
        },
        {
          "id": 995,
          "word": "grade",
          "partOfSpeech": "v./n.",
          "chinese": "给...分等级：等级；成绩等级",
          "example": "This grade of jade can be bought at a fairly low price",
          "wordGroup": "group_260",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 996,
          "word": "rank",
          "partOfSpeech": "n./v.",
          "chinese": "等级；排；列；给...评级；位列",
          "example": "There are people of all ranks and classes",
          "wordGroup": "group_261",
          "colorIndex": 3
        },
        {
          "id": 997,
          "word": "row",
          "partOfSpeech": "n.",
          "chinese": "一排；一行",
          "example": "A row of children are standing in front of a row of chairs1",
          "wordGroup": "group_261",
          "colorIndex": 3
        },
        {
          "id": 998,
          "word": "queue",
          "partOfSpeech": "n./v.",
          "chinese": "行列；队列；排队等候",
          "example": "We should join the queue inside the bank",
          "wordGroup": "group_261",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 999,
          "word": "grant",
          "partOfSpeech": "v.",
          "chinese": "授予；准予；承认",
          "example": "I grant that book gives us something insights into human nature, but generally speaking, it is boring",
          "wordGroup": "group_262",
          "colorIndex": 4
        },
        {
          "id": 1000,
          "word": "praise",
          "partOfSpeech": "n./v.",
          "chinese": "赞美；赞扬",
          "example": "American reviewers are lavish in their praise of this movie",
          "wordGroup": "group_262",
          "colorIndex": 4
        },
        {
          "id": 1001,
          "word": "appreciate",
          "partOfSpeech": "v.",
          "chinese": "赏识；感激；意识到",
          "example": "We appreciate your efforts for the development of the company",
          "wordGroup": "group_262",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1002,
          "word": "feedback",
          "partOfSpeech": "n.",
          "chinese": "反馈；反应",
          "example": "We'd appreciate it if you gave us some feedback on our new product",
          "wordGroup": "group_263",
          "colorIndex": 5
        },
        {
          "id": 1003,
          "word": "underestimate",
          "partOfSpeech": "v.",
          "chinese": "低估",
          "example": "Don't underestimate the difficulty of this job",
          "wordGroup": "group_263",
          "colorIndex": 5
        },
        {
          "id": 1004,
          "word": "overestimate",
          "partOfSpeech": "v.",
          "chinese": "高估",
          "example": "Most customers overestimated the price of the overcoat",
          "wordGroup": "group_263",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1005,
          "word": "apply",
          "partOfSpeech": "v.",
          "chinese": "申请",
          "example": "My cousin applied to four universities and was accepted by all of them",
          "wordGroup": "group_264",
          "colorIndex": 0
        },
        {
          "id": 1006,
          "word": "fellowship",
          "partOfSpeech": "n.",
          "chinese": "研究生奖学金",
          "example": "As a student, he was awarded the fellowship at Harvard",
          "wordGroup": "group_264",
          "colorIndex": 0
        },
        {
          "id": 1007,
          "word": "scholarship",
          "partOfSpeech": "n.",
          "chinese": "奖学金；学问；学识",
          "example": "For a few, scholarships were their main source of support",
          "wordGroup": "group_264",
          "colorIndex": 0
        },
        {
          "id": 1008,
          "word": "reward",
          "partOfSpeech": "n./v.",
          "chinese": "报答；赏金；报答",
          "example": "Virture is its own reward",
          "wordGroup": "group_264",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1009,
          "word": "award",
          "partOfSpeech": "n.",
          "chinese": "奖；奖品",
          "example": "The novice writer is especially thrilled with this award",
          "wordGroup": "group_265",
          "colorIndex": 1
        },
        {
          "id": 1010,
          "word": "prize",
          "partOfSpeech": "n./v.",
          "chinese": "奖赏；珍视",
          "example": "We prize honor above money",
          "wordGroup": "group_265",
          "colorIndex": 1
        },
        {
          "id": 1011,
          "word": "fee",
          "partOfSpeech": "n.",
          "chinese": "酬金；费用",
          "example": "A higher fee doesn't necessarily mean a better course",
          "wordGroup": "group_265",
          "colorIndex": 1
        }
      ]
    ]
  },
  {
    "title": "科技发明",
    "groups": [
      [
        {
          "id": 1012,
          "word": "technology",
          "partOfSpeech": "n.",
          "chinese": "技术",
          "example": "Life is made so much easier with modern science and technology",
          "wordGroup": "group_265",
          "colorIndex": 1
        },
        {
          "id": 1013,
          "word": "technique",
          "partOfSpeech": "n.",
          "chinese": "技巧；技术",
          "example": "I want to learn the latest technique in toy making",
          "wordGroup": "group_265",
          "colorIndex": 1
        },
        {
          "id": 1014,
          "word": "polytechnic",
          "partOfSpeech": "adj./n.",
          "chinese": "有关多种工艺的；理工学院",
          "example": "You trainees will acquire polytechnic training",
          "wordGroup": "group_265",
          "colorIndex": 1
        },
        {
          "id": 1015,
          "word": "engineer",
          "partOfSpeech": "n.",
          "chinese": "工程师；技师",
          "example": "Each engineer needs to be in touch with the entire engineering department",
          "wordGroup": "group_265",
          "colorIndex": 1
        },
        {
          "id": 1016,
          "word": "mechanic",
          "partOfSpeech": "n.",
          "chinese": "技工；机械师；机修工",
          "example": "This car has broken down again. I have to ring the mechanic",
          "wordGroup": "group_265",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1017,
          "word": "advance",
          "partOfSpeech": "n./v.",
          "chinese": "发展；前进",
          "example": "We have advanced greatly in our knowledge of the universe",
          "wordGroup": "group_266",
          "colorIndex": 2
        },
        {
          "id": 1018,
          "word": "innovate",
          "partOfSpeech": "v.",
          "chinese": "创新；改革",
          "example": "We must innovate in order to make progress",
          "wordGroup": "group_266",
          "colorIndex": 2
        },
        {
          "id": 1019,
          "word": "breakthrough",
          "partOfSpeech": "n.",
          "chinese": "突破",
          "example": "Surgeons have made a great breakthrough in kidney transplantation",
          "wordGroup": "group_266",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1020,
          "word": "gizmo",
          "partOfSpeech": "n.",
          "chinese": "小装置",
          "example": "The modern world is increasingly populated by intelligent gizmos, whose universal existence has removed much human labor",
          "wordGroup": "group_267",
          "colorIndex": 3
        },
        {
          "id": 1021,
          "word": "patent",
          "partOfSpeech": "n./v.",
          "chinese": "专利；专利权；得到...的专利权；给...专利证",
          "example": "The government patented this device to its inventor",
          "wordGroup": "group_267",
          "colorIndex": 3
        },
        {
          "id": 1022,
          "word": "devise",
          "partOfSpeech": "v.",
          "chinese": "设计；发明",
          "example": "The team is trying to devise a new system for handling mail order",
          "wordGroup": "group_267",
          "colorIndex": 3
        },
        {
          "id": 1023,
          "word": "invent",
          "partOfSpeech": "v.",
          "chinese": "发明，创造",
          "example": "Do you who invented the magnetic needle?",
          "wordGroup": "group_267",
          "colorIndex": 3
        },
        {
          "id": 1024,
          "word": "discover",
          "partOfSpeech": "v.",
          "chinese": "发现",
          "example": "He discovered his talent for fashion design when he was very young",
          "wordGroup": "group_267",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1025,
          "word": "disclose",
          "partOfSpeech": "v.",
          "chinese": "揭露；透露",
          "example": "The authority finally disclosed the truth to the press",
          "wordGroup": "group_268",
          "colorIndex": 4
        },
        {
          "id": 1026,
          "word": "reveal",
          "partOfSpeech": "v.",
          "chinese": "展现；显示；透露",
          "example": "His deed revealed him to be a kind man",
          "wordGroup": "group_268",
          "colorIndex": 4
        },
        {
          "id": 1027,
          "word": "uncover",
          "partOfSpeech": "v.",
          "chinese": "揭露；发现",
          "example": "The detective must uncover the murder by deduction of facts",
          "wordGroup": "group_268",
          "colorIndex": 4
        },
        {
          "id": 1028,
          "word": "expose",
          "partOfSpeech": "v.",
          "chinese": "使暴露；揭发；使曝光",
          "example": "The crime of the corrupt officials must be exposed without any reserve",
          "wordGroup": "group_268",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1029,
          "word": "domain",
          "partOfSpeech": "n.",
          "chinese": "（活动、学问等的）领域；领土；领地",
          "example": "This is out of my domain",
          "wordGroup": "group_269",
          "colorIndex": 5
        },
        {
          "id": 1030,
          "word": "field",
          "partOfSpeech": "n.",
          "chinese": "领域",
          "example": "He has become famous in his own field",
          "wordGroup": "group_269",
          "colorIndex": 5
        },
        {
          "id": 1031,
          "word": "realm",
          "partOfSpeech": "n.",
          "chinese": "领域",
          "example": "Such an idea only belongs in the realm of science fiction",
          "wordGroup": "group_269",
          "colorIndex": 5
        },
        {
          "id": 1032,
          "word": "foundation",
          "partOfSpeech": "n.",
          "chinese": "基础；地基；基金会",
          "example": "He laid the foundations his success by hard work",
          "wordGroup": "group_269",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1033,
          "word": "specialise/specialize",
          "partOfSpeech": "v.",
          "chinese": "专攻",
          "example": "Many students specialize in engineering",
          "wordGroup": "group_270",
          "colorIndex": 0
        },
        {
          "id": 1034,
          "word": "absorb",
          "partOfSpeech": "v.",
          "chinese": "吸收；理解；掌握",
          "example": "His ability to absorb bits of disconnected information was astonishing",
          "wordGroup": "group_270",
          "colorIndex": 0
        },
        {
          "id": 1035,
          "word": "concentrate",
          "partOfSpeech": "v.",
          "chinese": "（集中）心思；（使）浓缩",
          "example": "They will concentrate on teaching the basics of reading, writing, and arithmetic",
          "wordGroup": "group_270",
          "colorIndex": 0
        },
        {
          "id": 1036,
          "word": "focus",
          "partOfSpeech": "v./n.",
          "chinese": "集中于；焦点",
          "example": "Today he was able to focus his message exclusively on the economy",
          "wordGroup": "group_270",
          "colorIndex": 0
        },
        {
          "id": 1037,
          "word": "utilise/utilize",
          "partOfSpeech": "v.",
          "chinese": "利用",
          "example": "In order to utilize land more fully, they adopted close planting",
          "wordGroup": "group_270",
          "colorIndex": 0
        },
        {
          "id": 1038,
          "word": "usage",
          "partOfSpeech": "n.",
          "chinese": "使用；用法",
          "example": "The college board said what's on the new test will relate to usage",
          "wordGroup": "group_270",
          "colorIndex": 0
        },
        {
          "id": 1039,
          "word": "tester",
          "partOfSpeech": "n.",
          "chinese": "测试员；测试仪",
          "example": "The battery tester is in my garage",
          "wordGroup": "group_270",
          "colorIndex": 0
        },
        {
          "id": 1040,
          "word": "apply",
          "partOfSpeech": "v.",
          "chinese": "应用；适用",
          "example": "We should not only know the theory, but also how to apply it to practice",
          "wordGroup": "group_270",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1041,
          "word": "device",
          "partOfSpeech": "n.",
          "chinese": "装置；设备；手段；策略",
          "example": "These newly designed devices will appear in the exhibition next month",
          "wordGroup": "group_271",
          "colorIndex": 1
        },
        {
          "id": 1042,
          "word": "appliance",
          "partOfSpeech": "n.",
          "chinese": "应用；（家用）器具",
          "example": "The household appliances were just bought by him for his family",
          "wordGroup": "group_271",
          "colorIndex": 1
        },
        {
          "id": 1043,
          "word": "facility",
          "partOfSpeech": "n.",
          "chinese": "设备；便利",
          "example": "This facility is open to both new and existing borrowers",
          "wordGroup": "group_271",
          "colorIndex": 1
        },
        {
          "id": 1044,
          "word": "equipment",
          "partOfSpeech": "n.",
          "chinese": "设备",
          "example": "We should make better use of the existing equipment",
          "wordGroup": "group_271",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1045,
          "word": "instrument",
          "partOfSpeech": "n.",
          "chinese": "仪器；工具；乐器",
          "example": "A plow is an instrument used for farming",
          "wordGroup": "group_272",
          "colorIndex": 2
        },
        {
          "id": 1046,
          "word": "tool",
          "partOfSpeech": "n.",
          "chinese": "工具",
          "example": "Advertising is a tool that nearly every company is utilizing",
          "wordGroup": "group_272",
          "colorIndex": 2
        },
        {
          "id": 1047,
          "word": "gauge",
          "partOfSpeech": "n./v.",
          "chinese": "测量仪器；测量；判断",
          "example": "It was difficult to gauge how people would respond",
          "wordGroup": "group_272",
          "colorIndex": 2
        },
        {
          "id": 1048,
          "word": "measure",
          "partOfSpeech": "v./n.",
          "chinese": "测量；衡量；措施",
          "example": "Measure this impedance, and you can measure how much it has rained",
          "wordGroup": "group_272",
          "colorIndex": 2
        },
        {
          "id": 1049,
          "word": "calculate",
          "partOfSpeech": "v.",
          "chinese": "计算；考虑；打算",
          "example": "Our price has already been closely calculated. There is no room for reduction",
          "wordGroup": "group_272",
          "colorIndex": 2
        },
        {
          "id": 1050,
          "word": "compute",
          "partOfSpeech": "n.",
          "chinese": "计算；估计",
          "example": "I compute my loss at 500 dollars",
          "wordGroup": "group_272",
          "colorIndex": 2
        },
        {
          "id": 1051,
          "word": "count",
          "partOfSpeech": "v.",
          "chinese": "计算",
          "example": "It is impossible to count the stars in the sky",
          "wordGroup": "group_272",
          "colorIndex": 2
        },
        {
          "id": 1052,
          "word": "estimate",
          "partOfSpeech": "n./v.",
          "chinese": "估计；估价；评价",
          "example": "Now I've realized that my estimate of her character was one-sided",
          "wordGroup": "group_272",
          "colorIndex": 2
        },
        {
          "id": 1053,
          "word": "assess",
          "partOfSpeech": "v.",
          "chinese": "评估；估算",
          "example": "We will assess the damage caused by the flood",
          "wordGroup": "group_272",
          "colorIndex": 2
        },
        {
          "id": 1054,
          "word": "evaluate",
          "partOfSpeech": "v.",
          "chinese": "评价；评估",
          "example": "The research project has only been underway for three months, so it is too early to evaluate its success",
          "wordGroup": "group_272",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1055,
          "word": "accessory",
          "partOfSpeech": "n.",
          "chinese": "附件；配件",
          "example": "Car accessories include the roof rack and radio",
          "wordGroup": "group_273",
          "colorIndex": 3
        },
        {
          "id": 1056,
          "word": "byproduct",
          "partOfSpeech": "n.",
          "chinese": "副产品",
          "example": "Happiness is not a goal. It is a byproduct",
          "wordGroup": "group_273",
          "colorIndex": 3
        },
        {
          "id": 1057,
          "word": "auxiliary",
          "partOfSpeech": "adj.",
          "chinese": "辅助的；协助的；备用的",
          "example": "When there is a power shortage, they count on the auxiliary power supply",
          "wordGroup": "group_273",
          "colorIndex": 3
        },
        {
          "id": 1058,
          "word": "versatile",
          "partOfSpeech": "adj.",
          "chinese": "多功能的；多用途的",
          "example": "Plastic is a versatile material in industry",
          "wordGroup": "group_273",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1059,
          "word": "add",
          "partOfSpeech": "v.",
          "chinese": "添加；附加",
          "example": "He didn't add milk nor sugar to his coffee",
          "wordGroup": "group_274",
          "colorIndex": 4
        },
        {
          "id": 1060,
          "word": "accumulate",
          "partOfSpeech": "v.",
          "chinese": "累积；（数额）不断增加",
          "example": "Dust and dirt soon accumulate if you don't clean your house regularly",
          "wordGroup": "group_274",
          "colorIndex": 4
        },
        {
          "id": 1061,
          "word": "assemble",
          "partOfSpeech": "v.",
          "chinese": "集合；聚集",
          "example": "A large crowd had assembled outside the American Embassy",
          "wordGroup": "group_274",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1062,
          "word": "gather",
          "partOfSpeech": "v.",
          "chinese": "收集；采集",
          "example": "He took the trouble to gather the materials for me",
          "wordGroup": "group_275",
          "colorIndex": 5
        },
        {
          "id": 1063,
          "word": "attach",
          "partOfSpeech": "v.",
          "chinese": "使依附；附加；缚；系；贴",
          "example": "China will not attach itself to any big power",
          "wordGroup": "group_275",
          "colorIndex": 5
        },
        {
          "id": 1064,
          "word": "belong",
          "partOfSpeech": "v.",
          "chinese": "应在（某处）；适合（某种情形）",
          "example": "Russia a major oil exportor, but does not belong to OPEC",
          "wordGroup": "group_275",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1065,
          "word": "optics",
          "partOfSpeech": "n.",
          "chinese": "光学",
          "example": "Newton published his first work on optics",
          "wordGroup": "group_276",
          "colorIndex": 0
        },
        {
          "id": 1066,
          "word": "microscope",
          "partOfSpeech": "n.",
          "chinese": "显微镜",
          "example": "The optical microscope magnifies the object a thousand times",
          "wordGroup": "group_276",
          "colorIndex": 0
        },
        {
          "id": 1067,
          "word": "lens",
          "partOfSpeech": "n.",
          "chinese": "镜头；透镜",
          "example": "When viewing through a lens, we can see the thing clearer, larger or smaller",
          "wordGroup": "group_276",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1068,
          "word": "radar",
          "partOfSpeech": "n.",
          "chinese": "雷达",
          "example": "Officials want to scan the tomb with radar in the hope of unlocking the mystery",
          "wordGroup": "group_277",
          "colorIndex": 1
        },
        {
          "id": 1069,
          "word": "echo",
          "partOfSpeech": "n./v.",
          "chinese": "回声；发回声；模仿；重复",
          "example": "The cathedral is echoing with joynous hymns",
          "wordGroup": "group_277",
          "colorIndex": 1
        },
        {
          "id": 1070,
          "word": "sensor",
          "partOfSpeech": "n.",
          "chinese": "传感器",
          "example": "Place the sensor on a flat surface and rotate it slowly through 360 degress",
          "wordGroup": "group_277",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1071,
          "word": "multimedia",
          "partOfSpeech": "n.",
          "chinese": "多媒体",
          "example": "As part of the celebrations, they staged a big open-air multimedia event",
          "wordGroup": "group_278",
          "colorIndex": 2
        },
        {
          "id": 1072,
          "word": "network",
          "partOfSpeech": "n.",
          "chinese": "网络",
          "example": "President Bush's speech was broadcast on national television network",
          "wordGroup": "group_278",
          "colorIndex": 2
        },
        {
          "id": 1073,
          "word": "browser",
          "partOfSpeech": "n.",
          "chinese": "浏览器",
          "example": "In your web browser's cache are the most recent web files that you have downloaded",
          "wordGroup": "group_278",
          "colorIndex": 2
        },
        {
          "id": 1074,
          "word": "dial",
          "partOfSpeech": "v.",
          "chinese": "拨（电话号码）",
          "example": "She picked up the phone and began to dial his number",
          "wordGroup": "group_278",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1075,
          "word": "microcomputer",
          "partOfSpeech": "n.",
          "chinese": "微型计算机",
          "example": "A newly devised microcomputer can act as a guide for a blind person",
          "wordGroup": "group_279",
          "colorIndex": 3
        },
        {
          "id": 1076,
          "word": "laptop",
          "partOfSpeech": "n.",
          "chinese": "笔记本电脑",
          "example": "A laptop would be really useful when I'm working on the train",
          "wordGroup": "group_279",
          "colorIndex": 3
        },
        {
          "id": 1077,
          "word": "software",
          "partOfSpeech": "n.",
          "chinese": "软件",
          "example": "This is a computer software shop",
          "wordGroup": "group_279",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1078,
          "word": "keyboard",
          "partOfSpeech": "n.",
          "chinese": "键盘",
          "example": "The machine is operated through the keyboard",
          "wordGroup": "group_280",
          "colorIndex": 4
        },
        {
          "id": 1079,
          "word": "screen",
          "partOfSpeech": "n.",
          "chinese": "屏幕",
          "example": "A list of items is repeatedly flashed on the screen",
          "wordGroup": "group_280",
          "colorIndex": 4
        },
        {
          "id": 1080,
          "word": "loudspeaker",
          "partOfSpeech": "n.",
          "chinese": "扬声器；喇叭",
          "example": "The loudspeaker announced each airplane as it landed at the airport",
          "wordGroup": "group_280",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1081,
          "word": "microphone",
          "partOfSpeech": "n.",
          "chinese": "麦克风；话筒",
          "example": "Unfortunately, I didn't have a microphone at the time to record us.",
          "wordGroup": "group_281",
          "colorIndex": 5
        },
        {
          "id": 1082,
          "word": "cassette",
          "partOfSpeech": "n.",
          "chinese": "盒式磁带；底片盒",
          "example": "He inserted a cassette into the machine",
          "wordGroup": "group_281",
          "colorIndex": 5
        },
        {
          "id": 1083,
          "word": "tape",
          "partOfSpeech": "n.",
          "chinese": "磁带；录音带；胶带",
          "example": "A technician loads a video tape into one of the machines",
          "wordGroup": "group_281",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1084,
          "word": "binary",
          "partOfSpeech": "adj.",
          "chinese": "二进制的；二元的",
          "example": "The machine does binary calculations",
          "wordGroup": "group_282",
          "colorIndex": 0
        },
        {
          "id": 1085,
          "word": "digital",
          "partOfSpeech": "adj.",
          "chinese": "数字的",
          "example": "The BCC has just successfully demonstrated a new digital radio transmission system",
          "wordGroup": "group_282",
          "colorIndex": 0
        },
        {
          "id": 1086,
          "word": "wireless",
          "partOfSpeech": "adj.",
          "chinese": "无线的",
          "example": "We still don't have the wireless network",
          "wordGroup": "group_282",
          "colorIndex": 0
        },
        {
          "id": 1087,
          "word": "high-definition",
          "partOfSpeech": "adj.",
          "chinese": "高分辨率的",
          "example": "High-definition pictures can show details very clearly",
          "wordGroup": "group_282",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1088,
          "word": "audio",
          "partOfSpeech": "adj.",
          "chinese": "声音的",
          "example": "The reproductive quality of audio tapes has improved enormously",
          "wordGroup": "group_283",
          "colorIndex": 1
        },
        {
          "id": 1089,
          "word": "vision",
          "partOfSpeech": "n.",
          "chinese": "视觉；视力",
          "example": "I've had my eyes tested and the report says my vision is perfect",
          "wordGroup": "group_283",
          "colorIndex": 1
        },
        {
          "id": 1090,
          "word": "fantasy",
          "partOfSpeech": "n.",
          "chinese": "幻想",
          "example": "He is unable to divorce fantasy from reality",
          "wordGroup": "group_283",
          "colorIndex": 1
        },
        {
          "id": 1091,
          "word": "science fiction/sci-fi",
          "partOfSpeech": "n.",
          "chinese": "科幻作品",
          "example": "Science fiction films are very popular with youngsters",
          "wordGroup": "group_283",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1092,
          "word": "pump",
          "partOfSpeech": "n./v.",
          "chinese": "泵；（用泵）抽",
          "example": "At the farm, there was a old-fashioned pump for drawing water from a well",
          "wordGroup": "group_284",
          "colorIndex": 2
        },
        {
          "id": 1093,
          "word": "generator",
          "partOfSpeech": "n.",
          "chinese": "发电机",
          "example": "A new type of wind generator may offer an answer to that problem",
          "wordGroup": "group_284",
          "colorIndex": 2
        },
        {
          "id": 1094,
          "word": "gear",
          "partOfSpeech": "n./v.",
          "chinese": "齿轮；传动装置；使适合",
          "example": "Education should be geared to children's needs",
          "wordGroup": "group_284",
          "colorIndex": 2
        },
        {
          "id": 1095,
          "word": "pivot",
          "partOfSpeech": "n.",
          "chinese": "枢轴；支点；中心；重点",
          "example": "The mother is often the pivot of family life",
          "wordGroup": "group_284",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1096,
          "word": "hydraulic",
          "partOfSpeech": "adj.",
          "chinese": "水力的；液压的",
          "example": "The boat has no fewer than five hydraulic pumps",
          "wordGroup": "group_285",
          "colorIndex": 3
        },
        {
          "id": 1097,
          "word": "drainage",
          "partOfSpeech": "n.",
          "chinese": "排水系统；排水",
          "example": "The drainage of the city is poor. Some of the pipes are broken",
          "wordGroup": "group_285",
          "colorIndex": 3
        },
        {
          "id": 1098,
          "word": "sewage",
          "partOfSpeech": "n.",
          "chinese": "（下水道的）污水",
          "example": "Discharge of raw sewage into the sea is unsanitary and unsafe",
          "wordGroup": "group_285",
          "colorIndex": 3
        },
        {
          "id": 1099,
          "word": "ventilation",
          "partOfSpeech": "n.",
          "chinese": "通风设备；通风",
          "example": "Some people think that ventilation is the same thing as air conditioning",
          "wordGroup": "group_285",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1100,
          "word": "compress",
          "partOfSpeech": "v.",
          "chinese": "压缩；压紧",
          "example": "Reining in inflation can increase income inequality by compressing wages while allowing asset prices to soar",
          "wordGroup": "group_286",
          "colorIndex": 4
        },
        {
          "id": 1101,
          "word": "condense",
          "partOfSpeech": "v.",
          "chinese": "减缩；精简；（使气体）凝结",
          "example": "A long story may be condensed into a few sentences",
          "wordGroup": "group_286",
          "colorIndex": 4
        },
        {
          "id": 1102,
          "word": "refine",
          "partOfSpeech": "v.",
          "chinese": "精炼；提纯",
          "example": "The purpose of oil refinery is to refine crude petroleum",
          "wordGroup": "group_286",
          "colorIndex": 4
        },
        {
          "id": 1103,
          "word": "simplify",
          "partOfSpeech": "v.",
          "chinese": "简化；精简",
          "example": "Try to simplify your explanation for the children",
          "wordGroup": "group_286",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1104,
          "word": "purify",
          "partOfSpeech": "v.",
          "chinese": "净化；使纯净",
          "example": "They opened the windows to purify the air of the room",
          "wordGroup": "group_287",
          "colorIndex": 5
        },
        {
          "id": 1105,
          "word": "filter",
          "partOfSpeech": "v./n.",
          "chinese": "过滤；（光或声音）透过；过滤器",
          "example": "Sunlight filtered through the chinks of the shutters",
          "wordGroup": "group_287",
          "colorIndex": 5
        },
        {
          "id": 1106,
          "word": "distil/distill",
          "partOfSpeech": "v.",
          "chinese": "蒸馏；提取...的精华",
          "example": "You can distill the water from the lake and make it drinkable",
          "wordGroup": "group_287",
          "colorIndex": 5
        },
        {
          "id": 1107,
          "word": "mode",
          "partOfSpeech": "n.",
          "chinese": "模式；方式",
          "example": "This fever will return from time to time if it follows its usual mode",
          "wordGroup": "group_287",
          "colorIndex": 5
        },
        {
          "id": 1108,
          "word": "mould/mold",
          "partOfSpeech": "v./n.",
          "chinese": "浇铸；塑造/模子",
          "example": "It can be molded and shaped at will",
          "wordGroup": "group_287",
          "colorIndex": 5
        },
        {
          "id": 1109,
          "word": "prototype",
          "partOfSpeech": "n.",
          "chinese": "原型；雏形",
          "example": "The prototype for future school building was showed in the library",
          "wordGroup": "group_287",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1110,
          "word": "framework",
          "partOfSpeech": "n.",
          "chinese": "框架；体系；结构",
          "example": "This bridge over the river has a steel framework",
          "wordGroup": "group_288",
          "colorIndex": 0
        },
        {
          "id": 1111,
          "word": "aspect",
          "partOfSpeech": "n.",
          "chinese": "（问题、事务的）方面",
          "example": "We must consider a problem in its all aspects",
          "wordGroup": "group_288",
          "colorIndex": 0
        },
        {
          "id": 1112,
          "word": "phase",
          "partOfSpeech": "n.",
          "chinese": "阶段；时期",
          "example": "The first phase of the project has been completed",
          "wordGroup": "group_288",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1113,
          "word": "operate",
          "partOfSpeech": "v.",
          "chinese": "操作；运营；做手术",
          "example": "It's too difficult for him to operate this new sophisticated machine",
          "wordGroup": "group_289",
          "colorIndex": 1
        },
        {
          "id": 1114,
          "word": "facilitate",
          "partOfSpeech": "v.",
          "chinese": "使便利；促进",
          "example": "Many modern inventions facilitate housework",
          "wordGroup": "group_289",
          "colorIndex": 1
        },
        {
          "id": 1115,
          "word": "transform",
          "partOfSpeech": "v.",
          "chinese": "使改变形态；使改观",
          "example": "She transformed the room by painting it",
          "wordGroup": "group_289",
          "colorIndex": 1
        },
        {
          "id": 1116,
          "word": "convert",
          "partOfSpeech": "v./n.",
          "chinese": "（使）转变、改变（信仰、观点等）/皈依者",
          "example": "The solar cell can convert the energy of sunlight into electric energy",
          "wordGroup": "group_289",
          "colorIndex": 1
        },
        {
          "id": 1117,
          "word": "alter",
          "partOfSpeech": "v.",
          "chinese": "变更；改变",
          "example": "If it is not a convenient time, we can alter the date",
          "wordGroup": "group_289",
          "colorIndex": 1
        },
        {
          "id": 1118,
          "word": "shift",
          "partOfSpeech": "v./n.",
          "chinese": "转移；变换/轮班",
          "example": "The wind shifted to the north",
          "wordGroup": "group_289",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1119,
          "word": "turn",
          "partOfSpeech": "v./n.",
          "chinese": "转移；转变/（一次轮到的）机会",
          "example": "It was your turn last time. It's always your turn to be the boss",
          "wordGroup": "group_290",
          "colorIndex": 2
        },
        {
          "id": 1120,
          "word": "adapt",
          "partOfSpeech": "v.",
          "chinese": "适应；改编",
          "example": "There will be more than one person who can adapt to your personality",
          "wordGroup": "group_290",
          "colorIndex": 2
        },
        {
          "id": 1121,
          "word": "adjust",
          "partOfSpeech": "v.",
          "chinese": "调节；改变（行为或观点）以适应",
          "example": "He soon adjusted to army life",
          "wordGroup": "group_290",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1122,
          "word": "pinpoint",
          "partOfSpeech": "v./n.",
          "chinese": "精确指明...位置/针尖；极小的事物",
          "example": "With this device, we can pinpoint your exact location",
          "wordGroup": "group_291",
          "colorIndex": 3
        },
        {
          "id": 1123,
          "word": "accurate",
          "partOfSpeech": "adj.",
          "chinese": "准确的；正确无误的",
          "example": "Hearsay definitely can't be regarded as accurate information",
          "wordGroup": "group_291",
          "colorIndex": 3
        },
        {
          "id": 1124,
          "word": "precise",
          "partOfSpeech": "adj.",
          "chinese": "精确的；准确的；一丝不苟的",
          "example": "A lawyer needs a precise mind",
          "wordGroup": "group_291",
          "colorIndex": 3
        },
        {
          "id": 1125,
          "word": "correct",
          "partOfSpeech": "adj.",
          "chinese": "正确的",
          "example": "The correct answers can be found at the bottom of page eight",
          "wordGroup": "group_291",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1126,
          "word": "error",
          "partOfSpeech": "n.",
          "chinese": "错误；过失",
          "example": "The accident was caused by human error",
          "wordGroup": "group_292",
          "colorIndex": 4
        },
        {
          "id": 1127,
          "word": "mistake",
          "partOfSpeech": "n./v.",
          "chinese": "错误/误解",
          "example": "I may have made a mistake in that regard",
          "wordGroup": "group_292",
          "colorIndex": 4
        },
        {
          "id": 1128,
          "word": "flaw",
          "partOfSpeech": "n.",
          "chinese": "缺陷；错误",
          "example": "This flaw makes the vase less valuable",
          "wordGroup": "group_292",
          "colorIndex": 4
        },
        {
          "id": 1129,
          "word": "wrong",
          "partOfSpeech": "adj./adv.",
          "chinese": "错误的；错误地",
          "example": "Instead of complaining about what's wrong, be grateful for what's right",
          "wordGroup": "group_292",
          "colorIndex": 4
        },
        {
          "id": 1130,
          "word": "fault",
          "partOfSpeech": "n./v.",
          "chinese": "缺点；故障/找出缺点",
          "example": "It is hard to fault the way he runs his own operation",
          "wordGroup": "group_292",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1131,
          "word": "stumble",
          "partOfSpeech": "v.",
          "chinese": "犯错误；绊脚；跌跌撞撞的走",
          "example": "The sudden weakness in her legs made her stumble",
          "wordGroup": "group_293",
          "colorIndex": 5
        },
        {
          "id": 1132,
          "word": "contingency",
          "partOfSpeech": "n.",
          "chinese": "意外事件；可能发生的事",
          "example": "We must always be prepared for every contingency",
          "wordGroup": "group_293",
          "colorIndex": 5
        },
        {
          "id": 1133,
          "word": "circumstance",
          "partOfSpeech": "n.",
          "chinese": "情况；条件；环境；境遇",
          "example": "Circumtances are the ruler of the weak, the instrument of the wise",
          "wordGroup": "group_293",
          "colorIndex": 5
        }
      ]
    ]
  },
  {
    "title": "文化历史",
    "groups": [
      [
        {
          "id": 1134,
          "word": "culture",
          "partOfSpeech": "n.",
          "chinese": "文化；文明；教养",
          "example": "China plays an important role in promoting Asian culture",
          "wordGroup": "group_293",
          "colorIndex": 5
        },
        {
          "id": 1135,
          "word": "civilisation/civilization",
          "partOfSpeech": "n.",
          "chinese": "文明",
          "example": "Western civilization was cradled in Ancient Greece 古希腊滋养了西方文明",
          "wordGroup": "group_293",
          "colorIndex": 5
        },
        {
          "id": 1136,
          "word": "renaissance",
          "partOfSpeech": "n.",
          "chinese": "the Renaissance 文艺复兴时期",
          "example": "The Renaissance was an epoch of unparalleled cultural achievement 文艺复兴时期是一个在文化上取得空前成就的时代",
          "wordGroup": "group_293",
          "colorIndex": 5
        },
        {
          "id": 1137,
          "word": "epic",
          "partOfSpeech": "n./adj.",
          "chinese": "史诗；宏大的",
          "example": "Their epic fight is the subject of a new film",
          "wordGroup": "group_293",
          "colorIndex": 5
        },
        {
          "id": 1138,
          "word": "ideology",
          "partOfSpeech": "n.",
          "chinese": "意识形态；思想体系",
          "example": "An obsolete ideology can hamper an economy",
          "wordGroup": "group_293",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1139,
          "word": "tradition",
          "partOfSpeech": "n.",
          "chinese": "传统",
          "example": "Asia has a long tradition of tea drinking. China is of no exception",
          "wordGroup": "group_294",
          "colorIndex": 0
        },
        {
          "id": 1140,
          "word": "convention",
          "partOfSpeech": "n.",
          "chinese": "惯例；大型会议",
          "example": "The handshake is a social convention",
          "wordGroup": "group_294",
          "colorIndex": 0
        },
        {
          "id": 1141,
          "word": "custom",
          "partOfSpeech": "n.",
          "chinese": "习俗；（个人的）习惯",
          "example": "The custom prevails over the whole area 该风俗盛行于这整个地区",
          "wordGroup": "group_294",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1142,
          "word": "feudalism",
          "partOfSpeech": "n.",
          "chinese": "封建主义；封建制度",
          "example": "Feudalism was not abolished in England util 1660",
          "wordGroup": "group_295",
          "colorIndex": 1
        },
        {
          "id": 1143,
          "word": "slavery",
          "partOfSpeech": "n.",
          "chinese": "奴隶制",
          "example": "They thought slavery was morally wrong",
          "wordGroup": "group_295",
          "colorIndex": 1
        },
        {
          "id": 1144,
          "word": "ethical",
          "partOfSpeech": "adj.",
          "chinese": "伦理的；道德的",
          "example": "You can't divorce science from ethical questions",
          "wordGroup": "group_295",
          "colorIndex": 1
        },
        {
          "id": 1145,
          "word": "moral",
          "partOfSpeech": "adj./n.",
          "chinese": "道德上的；有道德的；morals 道德",
          "example": "The old gentleman claimed himself to be a moral man, who had never told a lie in his life",
          "wordGroup": "group_295",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1146,
          "word": "tribe",
          "partOfSpeech": "n.",
          "chinese": "部落",
          "example": "The tribe's development was more primitive than that of their neighbours/neighbors",
          "wordGroup": "group_296",
          "colorIndex": 2
        },
        {
          "id": 1147,
          "word": "aboriginal",
          "partOfSpeech": "n./adj.",
          "chinese": "Aboriginal 澳大利亚土人/本土原有的；土著的",
          "example": "Many Aboriginals do not like the idea of a day to celebrate the British landing. 许多澳大利亚土著并不喜欢庆祝英国人登陆的日子",
          "wordGroup": "group_296",
          "colorIndex": 2
        },
        {
          "id": 1148,
          "word": "inhabitant",
          "partOfSpeech": "n.",
          "chinese": "居民",
          "example": "The local inhabitants do not like the noisy tourists in summer",
          "wordGroup": "group_296",
          "colorIndex": 2
        },
        {
          "id": 1149,
          "word": "native",
          "partOfSpeech": "adj./n.",
          "chinese": "本土的；本地人",
          "example": "He is a native of Beijing",
          "wordGroup": "group_296",
          "colorIndex": 2
        },
        {
          "id": 1150,
          "word": "local",
          "partOfSpeech": "adj./n.",
          "chinese": "当地的；本地人",
          "example": "He provided local delicacies for his guests.他用当地的美味佳肴来招待客人",
          "wordGroup": "group_296",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1151,
          "word": "exotic",
          "partOfSpeech": "adj.",
          "chinese": "外来的；异国情调的",
          "example": "The exotic atmosphere will fascinate you",
          "wordGroup": "group_297",
          "colorIndex": 3
        },
        {
          "id": 1152,
          "word": "foreigner",
          "partOfSpeech": "n.",
          "chinese": "外国人",
          "example": "Some foreigners assimilate easily into our way of life",
          "wordGroup": "group_297",
          "colorIndex": 3
        },
        {
          "id": 1153,
          "word": "alien",
          "partOfSpeech": "n./adj.",
          "chinese": "外侨；外星人；外国的；陌生的",
          "example": "I ran into an old friend in the alien land. 他乡遇故知",
          "wordGroup": "group_297",
          "colorIndex": 3
        },
        {
          "id": 1154,
          "word": "anthropologist",
          "partOfSpeech": "n.",
          "chinese": "人类学家",
          "example": "The anthropologist contrasted two cultures in his lecture. 这位人类学家在讲座中将两种文化进行对比",
          "wordGroup": "group_297",
          "colorIndex": 3
        },
        {
          "id": 1155,
          "word": "humanitarian",
          "partOfSpeech": "n./adj.",
          "chinese": "人道主义者；人道主义的；博爱的",
          "example": "Hepburn is known as a great humanitarian",
          "wordGroup": "group_297",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1156,
          "word": "heritage",
          "partOfSpeech": "n.",
          "chinese": "（国家的）遗产",
          "example": "They take great pride in their cultural heritage",
          "wordGroup": "group_298",
          "colorIndex": 4
        },
        {
          "id": 1157,
          "word": "inherit",
          "partOfSpeech": "v.",
          "chinese": "继承（财产等）；经遗传获得",
          "example": "He inherited a house from his father",
          "wordGroup": "group_298",
          "colorIndex": 4
        },
        {
          "id": 1158,
          "word": "antique",
          "partOfSpeech": "n./adj.",
          "chinese": "古董；古董的",
          "example": "He wears designer clothes and drives an antique car",
          "wordGroup": "group_298",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1159,
          "word": "archaeology",
          "partOfSpeech": "n.",
          "chinese": "考古学",
          "example": "Archaeology is the study of ancient civilizations",
          "wordGroup": "group_299",
          "colorIndex": 5
        },
        {
          "id": 1160,
          "word": "excavate",
          "partOfSpeech": "v.",
          "chinese": "发掘；挖掘",
          "example": "It took a long time to excavate the ancient city of Troy",
          "wordGroup": "group_299",
          "colorIndex": 5
        },
        {
          "id": 1161,
          "word": "museum",
          "partOfSpeech": "n.",
          "chinese": "博物馆",
          "example": "A visit to the museum is an unforgetable experience",
          "wordGroup": "group_299",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1162,
          "word": "pottery",
          "partOfSpeech": "n.",
          "chinese": "陶瓷",
          "example": "Modern pottery is usually ornamental",
          "wordGroup": "group_300",
          "colorIndex": 0
        },
        {
          "id": 1163,
          "word": "engrave",
          "partOfSpeech": "v.",
          "chinese": "在...上雕刻",
          "example": "The jeweler will engrave the inside of the ring with her name",
          "wordGroup": "group_300",
          "colorIndex": 0
        },
        {
          "id": 1164,
          "word": "decorate",
          "partOfSpeech": "v.",
          "chinese": "装饰",
          "example": "Using extremely different decorating schemes in adjoining rooms may result in lack of unity in style. 相邻的房间用悬殊太大的装修方案会导致风格不统一",
          "wordGroup": "group_300",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1165,
          "word": "religion",
          "partOfSpeech": "n.",
          "chinese": "宗教；宗教信仰",
          "example": "There are many religions in the world",
          "wordGroup": "group_301",
          "colorIndex": 1
        },
        {
          "id": 1166,
          "word": "ritual",
          "partOfSpeech": "n.",
          "chinese": "仪式",
          "example": "The scientists found that personal involvement in a ritual is necessary",
          "wordGroup": "group_301",
          "colorIndex": 1
        },
        {
          "id": 1167,
          "word": "etiquette",
          "partOfSpeech": "n.",
          "chinese": "礼仪；礼节",
          "example": "He felt very sorry for his breach of etiquette. 他为他的失礼行为深感抱歉",
          "wordGroup": "group_301",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1168,
          "word": "belief",
          "partOfSpeech": "n.",
          "chinese": "信念；信仰",
          "example": "His firmness in his belief supported him through difficulties",
          "wordGroup": "group_302",
          "colorIndex": 2
        },
        {
          "id": 1169,
          "word": "soul",
          "partOfSpeech": "n.",
          "chinese": "灵魂；心灵；精神",
          "example": "No words can express the secret agony of my soul. 没有语言能够表达我心灵的隐痛",
          "wordGroup": "group_302",
          "colorIndex": 2
        },
        {
          "id": 1170,
          "word": "spirit",
          "partOfSpeech": "n.",
          "chinese": "精神；心灵",
          "example": "We need a spirit of enterprise if we are to overcome our difficulties. 如果要克服困难，我们就要有进取心",
          "wordGroup": "group_302",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1171,
          "word": "sacred",
          "partOfSpeech": "adj.",
          "chinese": "神圣的；宗教的",
          "example": "This area was hollowed by sacred memories",
          "wordGroup": "group_303",
          "colorIndex": 3
        },
        {
          "id": 1172,
          "word": "hallowed",
          "partOfSpeech": "adj.",
          "chinese": "神圣的；收尊崇的",
          "example": "The Ganges is hallowed as a sacred cleansing river",
          "wordGroup": "group_303",
          "colorIndex": 3
        },
        {
          "id": 1173,
          "word": "holy",
          "partOfSpeech": "adj.",
          "chinese": "神圣的；圣洁的；虔诚的",
          "example": "A holy person is spiritually pure",
          "wordGroup": "group_303",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1174,
          "word": "Pope",
          "partOfSpeech": "n.",
          "chinese": "教皇",
          "example": "The election of a new pope is coming",
          "wordGroup": "group_304",
          "colorIndex": 4
        },
        {
          "id": 1175,
          "word": "bishop",
          "partOfSpeech": "n.",
          "chinese": "主教",
          "example": "I've heard a whisper that the bishop intends to leave. 我听到谣传说主教打算离开",
          "wordGroup": "group_304",
          "colorIndex": 4
        },
        {
          "id": 1176,
          "word": "missionary",
          "partOfSpeech": "n.",
          "chinese": "传教士",
          "example": "The missionary was sent to India last year",
          "wordGroup": "group_304",
          "colorIndex": 4
        },
        {
          "id": 1177,
          "word": "priest",
          "partOfSpeech": "n.",
          "chinese": "牧师；神父；教士",
          "example": "The priest persuaded him to give up his bad habit",
          "wordGroup": "group_304",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1178,
          "word": "Bible",
          "partOfSpeech": "n.",
          "chinese": "（基督教）圣经",
          "example": "The Bible begins with the Genesis. 圣经的开篇是创世记",
          "wordGroup": "group_305",
          "colorIndex": 5
        },
        {
          "id": 1179,
          "word": "church",
          "partOfSpeech": "n.",
          "chinese": "教堂",
          "example": "I'm just going to the church to see the priest",
          "wordGroup": "group_305",
          "colorIndex": 5
        },
        {
          "id": 1180,
          "word": "cathedral",
          "partOfSpeech": "n.",
          "chinese": "大教堂",
          "example": "This cathedral was regarded as a miracle in architectual history",
          "wordGroup": "group_305",
          "colorIndex": 5
        },
        {
          "id": 1181,
          "word": "choir",
          "partOfSpeech": "n.",
          "chinese": "唱诗班",
          "example": "The choir sang the Amens beautifully. 唱诗班吟唱的“阿门”非常优美",
          "wordGroup": "group_305",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1182,
          "word": "monk",
          "partOfSpeech": "n.",
          "chinese": "僧侣",
          "example": "The man was a monk from Mount. MI",
          "wordGroup": "group_306",
          "colorIndex": 0
        },
        {
          "id": 1183,
          "word": "temple",
          "partOfSpeech": "n.",
          "chinese": "师院；庙宇",
          "example": "The temple has been considered an example of classic design",
          "wordGroup": "group_306",
          "colorIndex": 0
        },
        {
          "id": 1184,
          "word": "pagoda",
          "partOfSpeech": "n.",
          "chinese": "佛塔",
          "example": "The pagoda perches on the top of the hill. 佛塔立在山顶上",
          "wordGroup": "group_306",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1185,
          "word": "empire",
          "partOfSpeech": "n.",
          "chinese": "帝国",
          "example": "The empire had for years been falling into decadence",
          "wordGroup": "group_307",
          "colorIndex": 1
        },
        {
          "id": 1186,
          "word": "imperial",
          "partOfSpeech": "adj.",
          "chinese": "帝国的",
          "example": "They made an objection to the imperial system with resolution. 他们坚决反对这种帝国制度",
          "wordGroup": "group_307",
          "colorIndex": 1
        },
        {
          "id": 1187,
          "word": "royal",
          "partOfSpeech": "adj.",
          "chinese": "皇家的；高贵的",
          "example": "Britain has always had a large navy, called the Royal Navy",
          "wordGroup": "group_307",
          "colorIndex": 1
        },
        {
          "id": 1188,
          "word": "dynasty",
          "partOfSpeech": "n.",
          "chinese": "朝代",
          "example": "The Tang Dynasty is a period remarkable for its liberality",
          "wordGroup": "group_307",
          "colorIndex": 1
        },
        {
          "id": 1189,
          "word": "chronology",
          "partOfSpeech": "n.",
          "chinese": "年代学；年表；事件发生的顺序表",
          "example": "It seems that the paper has confused the chronology of these events",
          "wordGroup": "group_307",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1190,
          "word": "emperor",
          "partOfSpeech": "n.",
          "chinese": "皇帝",
          "example": "The emperor unified the country by the sword",
          "wordGroup": "group_308",
          "colorIndex": 2
        },
        {
          "id": 1191,
          "word": "king",
          "partOfSpeech": "n.",
          "chinese": "国王",
          "example": "The king is the most important person in a kingdom",
          "wordGroup": "group_308",
          "colorIndex": 2
        },
        {
          "id": 1192,
          "word": "queen",
          "partOfSpeech": "n.",
          "chinese": "王后；女王",
          "example": "They were bowing as the king and the queen walked in. 当国王和王后进来时，他们屈膝致敬",
          "wordGroup": "group_308",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1193,
          "word": "prince",
          "partOfSpeech": "n.",
          "chinese": "王子；亲王",
          "example": "The prince fell in love with a fair young maiden",
          "wordGroup": "group_309",
          "colorIndex": 3
        },
        {
          "id": 1194,
          "word": "princess",
          "partOfSpeech": "n.",
          "chinese": "公主；王妃",
          "example": "The princess was ostracised for marrying a rich bourgeois man. 公主因与一位富有的资本家结婚而遭到排挤",
          "wordGroup": "group_309",
          "colorIndex": 3
        },
        {
          "id": 1195,
          "word": "majesty",
          "partOfSpeech": "n.",
          "chinese": "威严；壮观；陛下",
          "example": "I enjoyed all the majesty of royal ceremonies",
          "wordGroup": "group_309",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1196,
          "word": "nobility",
          "partOfSpeech": "n.",
          "chinese": "高尚的品质；贵族",
          "example": "Virtue is the only true nobility. 万事不如美德高",
          "wordGroup": "group_310",
          "colorIndex": 4
        },
        {
          "id": 1197,
          "word": "lord",
          "partOfSpeech": "n.",
          "chinese": "（英国）贵族；Lord 阁下；大人；the Lord 上帝",
          "example": "The yound lord with the red gold hair bowed, \"As you command, Lord Edword.\"",
          "wordGroup": "group_310",
          "colorIndex": 4
        },
        {
          "id": 1198,
          "word": "knight",
          "partOfSpeech": "n./v.",
          "chinese": "骑士；封（某人）为爵士",
          "example": "He was knighted for his war services",
          "wordGroup": "group_310",
          "colorIndex": 4
        },
        {
          "id": 1199,
          "word": "guardian",
          "partOfSpeech": "n./adj.",
          "chinese": "保卫者；监护人；守护的",
          "example": "He became the legal guardian of his brother's daughter",
          "wordGroup": "group_310",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1200,
          "word": "nostalgia",
          "partOfSpeech": "n.",
          "chinese": "思乡之情；怀旧之情",
          "example": "The soldiers were filled with nostalgia",
          "wordGroup": "group_311",
          "colorIndex": 5
        },
        {
          "id": 1201,
          "word": "homesick",
          "partOfSpeech": "adj.",
          "chinese": "思乡的",
          "example": "My American friend tells me she is never as homesick as during this time of year around Thanksgiving",
          "wordGroup": "group_311",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1202,
          "word": "celebrity",
          "partOfSpeech": "n.",
          "chinese": "名人；名誉",
          "example": "Celebrity, money and possessions are too often the touchstones for teenagers. 名誉、金钱和财产常常成为青少年们衡量事物的标准",
          "wordGroup": "group_312",
          "colorIndex": 0
        },
        {
          "id": 1203,
          "word": "status",
          "partOfSpeech": "n.",
          "chinese": "地位；身份；尊重程度；仰慕程度；重视程度；（社交媒体上的）状态，近况",
          "example": "Being an engineer gives him a high status",
          "wordGroup": "group_312",
          "colorIndex": 0
        },
        {
          "id": 1204,
          "word": "background",
          "partOfSpeech": "n.",
          "chinese": "背景；（个人出身、受教育）经历",
          "example": "He is a man with a special cultural background",
          "wordGroup": "group_312",
          "colorIndex": 0
        },
        {
          "id": 1205,
          "word": "experience",
          "partOfSpeech": "n.",
          "chinese": "经验；（一次）经历、体验",
          "example": "It was a truly memorible experience",
          "wordGroup": "group_312",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1206,
          "word": "anecdote",
          "partOfSpeech": "n.",
          "chinese": "轶事；奇闻",
          "example": "He preceded his lecture with a humorous anecdote.",
          "wordGroup": "group_313",
          "colorIndex": 1
        },
        {
          "id": 1207,
          "word": "accident",
          "partOfSpeech": "n.",
          "chinese": "事故；意外；偶然事件",
          "example": "His left knee was hurt in a traffic accident",
          "wordGroup": "group_313",
          "colorIndex": 1
        },
        {
          "id": 1208,
          "word": "incident",
          "partOfSpeech": "n.",
          "chinese": "（尤指不寻常的、重要的或暴力的）事件；（两国之间的）冲突",
          "example": "A serious incident along the border increased our fears of war",
          "wordGroup": "group_313",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1209,
          "word": "thrive",
          "partOfSpeech": "v.",
          "chinese": "繁荣；兴旺发达；茁壮成长",
          "example": "First thrive and then wive. 先立业，后成家",
          "wordGroup": "group_314",
          "colorIndex": 2
        },
        {
          "id": 1210,
          "word": "prosperity",
          "partOfSpeech": "n.",
          "chinese": "繁荣；兴旺",
          "example": "The empire was on the wane after its period of prosperity. 帝国在经历繁盛之后逐渐衰落",
          "wordGroup": "group_314",
          "colorIndex": 2
        },
        {
          "id": 1211,
          "word": "setback",
          "partOfSpeech": "n.",
          "chinese": "挫折；阻碍",
          "example": "This setback has drained away my keenness",
          "wordGroup": "group_314",
          "colorIndex": 2
        },
        {
          "id": 1212,
          "word": "adversity",
          "partOfSpeech": "n.",
          "chinese": "逆境",
          "example": "Hardship disposes man to meet adversity. 困苦使人们愿意去客户困境",
          "wordGroup": "group_314",
          "colorIndex": 2
        }
      ]
    ]
  },
  {
    "title": "语言演化",
    "groups": [
      [
        {
          "id": 1213,
          "word": "language",
          "partOfSpeech": "n.",
          "chinese": "语言",
          "example": "His misunderstanding of language was the primary cause of his other problems",
          "wordGroup": "group_314",
          "colorIndex": 2
        },
        {
          "id": 1214,
          "word": "symbol",
          "partOfSpeech": "n.",
          "chinese": "象征；符号；记号",
          "example": "To them the monarchy is the special symbol of nationhood",
          "wordGroup": "group_314",
          "colorIndex": 2
        },
        {
          "id": 1215,
          "word": "sign",
          "partOfSpeech": "n./v.",
          "chinese": "符号；征兆；迹象；手势；签（名）",
          "example": "He made a sign for me to follow him",
          "wordGroup": "group_314",
          "colorIndex": 2
        },
        {
          "id": 1216,
          "word": "gesture",
          "partOfSpeech": "n.",
          "chinese": "手势；姿势",
          "example": "He put his arm around her in a protective gesture",
          "wordGroup": "group_314",
          "colorIndex": 2
        },
        {
          "id": 1217,
          "word": "handwriting",
          "partOfSpeech": "n.",
          "chinese": "笔记；书写",
          "example": "The address was in Anna's handwriting",
          "wordGroup": "group_314",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1218,
          "word": "pictograph",
          "partOfSpeech": "n.",
          "chinese": "象形文字",
          "example": "Generally speaking, the pictograph is the first text",
          "wordGroup": "group_315",
          "colorIndex": 3
        },
        {
          "id": 1219,
          "word": "wedge",
          "partOfSpeech": "n.",
          "chinese": "楔子；楔形物；楔形文字",
          "example": "Put a wedge under the door so that it will stay open",
          "wordGroup": "group_315",
          "colorIndex": 3
        },
        {
          "id": 1220,
          "word": "knot",
          "partOfSpeech": "n.",
          "chinese": "（绳、线的）结；（树枝上的）节子",
          "example": "He made a knot in the rope",
          "wordGroup": "group_315",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1221,
          "word": "linguistics",
          "partOfSpeech": "n.",
          "chinese": "语言学",
          "example": "He is engaged in the studies of linguistics",
          "wordGroup": "group_316",
          "colorIndex": 4
        },
        {
          "id": 1222,
          "word": "semantic",
          "partOfSpeech": "adj.",
          "chinese": "语义的",
          "example": "There are two kinds of puns, phonetic pun and semantic pun. 双关语分为谐音双关语和语义双关语",
          "wordGroup": "group_316",
          "colorIndex": 4
        },
        {
          "id": 1223,
          "word": "syntax",
          "partOfSpeech": "n.",
          "chinese": "句法",
          "example": "Let's investigate the syntax of Chinese",
          "wordGroup": "group_316",
          "colorIndex": 4
        },
        {
          "id": 1224,
          "word": "grammar",
          "partOfSpeech": "n.",
          "chinese": "语法；语法书",
          "example": "He was known for his poor grammar and punctuation",
          "wordGroup": "group_316",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1225,
          "word": "phonetics",
          "partOfSpeech": "n.",
          "chinese": "语音学",
          "example": "Daniel Jones is generally referred to be the foremost authority on phonetics",
          "wordGroup": "group_317",
          "colorIndex": 5
        },
        {
          "id": 1226,
          "word": "pronounce",
          "partOfSpeech": "v.",
          "chinese": "发...的音；宣布",
          "example": "Did I pronounce your name correctly?",
          "wordGroup": "group_317",
          "colorIndex": 5
        },
        {
          "id": 1227,
          "word": "intonation",
          "partOfSpeech": "n.",
          "chinese": "语调",
          "example": "Some question are spoken with a rising intonation",
          "wordGroup": "group_317",
          "colorIndex": 5
        },
        {
          "id": 1228,
          "word": "inflection",
          "partOfSpeech": "n.",
          "chinese": "语调的抑扬变化",
          "example": "She spoken in a low voice, always without inflection",
          "wordGroup": "group_317",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1229,
          "word": "dialect",
          "partOfSpeech": "n.",
          "chinese": "方言；地方话",
          "example": "The dialect is spoken principally in the southern areas",
          "wordGroup": "group_318",
          "colorIndex": 0
        },
        {
          "id": 1230,
          "word": "accent",
          "partOfSpeech": "n.",
          "chinese": "重音；口音；读音符号",
          "example": "He speaks with a strong southern accent",
          "wordGroup": "group_318",
          "colorIndex": 0
        },
        {
          "id": 1231,
          "word": "utterance",
          "partOfSpeech": "n.",
          "chinese": "说话；言论",
          "example": "His every utterance will be scrutinized 他说的每句话都会被仔细审查",
          "wordGroup": "group_318",
          "colorIndex": 0
        },
        {
          "id": 1232,
          "word": "oral",
          "partOfSpeech": "adj.",
          "chinese": "口头的",
          "example": "Students of English should have a lot of oral drills",
          "wordGroup": "group_318",
          "colorIndex": 0
        },
        {
          "id": 1233,
          "word": "verbal",
          "partOfSpeech": "adj.",
          "chinese": "口头的；言语的",
          "example": "Don't be afraid of verbal abuse or criticism.",
          "wordGroup": "group_318",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1234,
          "word": "syllable",
          "partOfSpeech": "n.",
          "chinese": "音节",
          "example": "The stress is on the last syllable.",
          "wordGroup": "group_319",
          "colorIndex": 1
        },
        {
          "id": 1235,
          "word": "phoneme",
          "partOfSpeech": "n.",
          "chinese": "音位",
          "example": "In actual speech, a phoneme is realized phonetically as a certain phone",
          "wordGroup": "group_319",
          "colorIndex": 1
        },
        {
          "id": 1236,
          "word": "vowel",
          "partOfSpeech": "n.",
          "chinese": "元音",
          "example": "Each language has a different vowel system",
          "wordGroup": "group_319",
          "colorIndex": 1
        },
        {
          "id": 1237,
          "word": "consonant",
          "partOfSpeech": "n.",
          "chinese": "辅音",
          "example": "These are common consonant clusters at the beginning of words/像crack中的cr就是consonant cluster",
          "wordGroup": "group_319",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1238,
          "word": "alphabet",
          "partOfSpeech": "n.",
          "chinese": "字母表；（一种语言的）全部字母",
          "example": "Q comes between P and R in the English alphabet",
          "wordGroup": "group_320",
          "colorIndex": 2
        },
        {
          "id": 1239,
          "word": "logogram",
          "partOfSpeech": "n.",
          "chinese": "语标，缩记符（如& 、@等） ;非字母语言的字符",
          "example": "ACP is the logogram of English of the African, Caribbean and Pacific states",
          "wordGroup": "group_320",
          "colorIndex": 2
        },
        {
          "id": 1240,
          "word": "vocabulary",
          "partOfSpeech": "n.",
          "chinese": "词汇",
          "example": "His vocabulary was sound and his grammer was excellent",
          "wordGroup": "group_320",
          "colorIndex": 2
        },
        {
          "id": 1241,
          "word": "dictionary",
          "partOfSpeech": "n.",
          "chinese": "词典；字典",
          "example": "The dictionary is a vast treasure trove of information",
          "wordGroup": "group_320",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1242,
          "word": "idiom",
          "partOfSpeech": "n.",
          "chinese": "习语",
          "example": "Never too old to learn is an idiom",
          "wordGroup": "group_321",
          "colorIndex": 3
        },
        {
          "id": 1243,
          "word": "phrase",
          "partOfSpeech": "n.",
          "chinese": "短语；习语",
          "example": "The phrase was not meant to be taken seriously",
          "wordGroup": "group_321",
          "colorIndex": 3
        },
        {
          "id": 1244,
          "word": "clause",
          "partOfSpeech": "n.",
          "chinese": "从句；分句；条款",
          "example": "A confidentiality clause was added to the contract",
          "wordGroup": "group_321",
          "colorIndex": 3
        },
        {
          "id": 1245,
          "word": "expression",
          "partOfSpeech": "n.",
          "chinese": "词语；表达；表情",
          "example": "Her expression of gratitude was simple and touching",
          "wordGroup": "group_321",
          "colorIndex": 3
        },
        {
          "id": 1246,
          "word": "tense",
          "partOfSpeech": "n./adj.",
          "chinese": "时态；紧张的",
          "example": "Dut, who had at first been very tense, at last relaxed",
          "wordGroup": "group_321",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1247,
          "word": "root",
          "partOfSpeech": "n.",
          "chinese": "根；词根",
          "example": "The word \"intoxicated\" comes from the same root as the word \"detoxify\"",
          "wordGroup": "group_322",
          "colorIndex": 4
        },
        {
          "id": 1248,
          "word": "prefix",
          "partOfSpeech": "n.",
          "chinese": "前置代号；词首；前缀",
          "example": "To make calls from Canada, use the prefix 01133 before the numbers given here",
          "wordGroup": "group_322",
          "colorIndex": 4
        },
        {
          "id": 1249,
          "word": "suffix",
          "partOfSpeech": "n.",
          "chinese": "后缀",
          "example": "These ships were all numbered with the same suffix",
          "wordGroup": "group_322",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1250,
          "word": "abbreviation",
          "partOfSpeech": "n.",
          "chinese": "缩写形式",
          "example": "BBC is an abbreviation for British Broadcasting Corporation",
          "wordGroup": "group_323",
          "colorIndex": 5
        },
        {
          "id": 1251,
          "word": "synonym",
          "partOfSpeech": "n.",
          "chinese": "同义词",
          "example": "Don't mix up this pair of synonyms",
          "wordGroup": "group_323",
          "colorIndex": 5
        },
        {
          "id": 1252,
          "word": "antonym",
          "partOfSpeech": "n.",
          "chinese": "反义词",
          "example": "Happy is an antonym of sad",
          "wordGroup": "group_323",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1253,
          "word": "noun",
          "partOfSpeech": "n.",
          "chinese": "名词",
          "example": "The word \"person\" is a countable noun",
          "wordGroup": "group_324",
          "colorIndex": 0
        },
        {
          "id": 1254,
          "word": "singular",
          "partOfSpeech": "n./adj.",
          "chinese": "单数；非凡的；单数的",
          "example": "The young man has a singular ear for music",
          "wordGroup": "group_324",
          "colorIndex": 0
        },
        {
          "id": 1255,
          "word": "plural",
          "partOfSpeech": "n./adj.",
          "chinese": "复数；复数的；多元的",
          "example": "A plural marriage is forbidden by many countries",
          "wordGroup": "group_324",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1256,
          "word": "pronoun",
          "partOfSpeech": "n.",
          "chinese": "代词",
          "example": "He always put stress on the pronoun",
          "wordGroup": "group_325",
          "colorIndex": 1
        },
        {
          "id": 1257,
          "word": "verb",
          "partOfSpeech": "n.",
          "chinese": "动词",
          "example": "A sentence usually contains a subject and a verb",
          "wordGroup": "group_325",
          "colorIndex": 1
        },
        {
          "id": 1258,
          "word": "adjective",
          "partOfSpeech": "n.",
          "chinese": "形容词",
          "example": "The function of an adjective is to describe or add to the meaning of a noun",
          "wordGroup": "group_325",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1259,
          "word": "adverb",
          "partOfSpeech": "n.",
          "chinese": "副词",
          "example": "Adverb is to describe a verb or an action",
          "wordGroup": "group_326",
          "colorIndex": 2
        },
        {
          "id": 1260,
          "word": "preposition",
          "partOfSpeech": "n.",
          "chinese": "介词",
          "example": "You should cross out this preposition in the sentence",
          "wordGroup": "group_326",
          "colorIndex": 2
        },
        {
          "id": 1261,
          "word": "conjunction",
          "partOfSpeech": "n.",
          "chinese": "连词",
          "example": "The word is a temporal conjunction",
          "wordGroup": "group_326",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1262,
          "word": "consistent",
          "partOfSpeech": "adj.",
          "chinese": "一致的；（观点或看法）连贯的",
          "example": "The policies, which will be put into place, are clear and consistent",
          "wordGroup": "group_327",
          "colorIndex": 3
        },
        {
          "id": 1263,
          "word": "complicated",
          "partOfSpeech": "adj.",
          "chinese": "复杂的",
          "example": "The business is a large, complicated organism",
          "wordGroup": "group_327",
          "colorIndex": 3
        },
        {
          "id": 1264,
          "word": "complex",
          "partOfSpeech": "adj.",
          "chinese": "复杂的",
          "example": "As tools have become more and more complex, we need more complex controls to control them",
          "wordGroup": "group_327",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1265,
          "word": "compile",
          "partOfSpeech": "v.",
          "chinese": "编撰",
          "example": "It takes years of hard work to compile a good dictionary",
          "wordGroup": "group_328",
          "colorIndex": 4
        },
        {
          "id": 1266,
          "word": "version",
          "partOfSpeech": "n.",
          "chinese": "版本",
          "example": "These books are Chinese versions of Shakespeare",
          "wordGroup": "group_328",
          "colorIndex": 4
        },
        {
          "id": 1267,
          "word": "translate",
          "partOfSpeech": "v.",
          "chinese": "翻译；（使）转变",
          "example": "No matter how well a poem is translated, something of the spirit of the original work is lost",
          "wordGroup": "group_328",
          "colorIndex": 4
        },
        {
          "id": 1268,
          "word": "paraphrase",
          "partOfSpeech": "v./n.",
          "chinese": "意译；改述",
          "example": "The teacher asked his students to paraphrase the long sentence",
          "wordGroup": "group_328",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1269,
          "word": "interpret",
          "partOfSpeech": "v.",
          "chinese": "口译；解释；说明；领会；理解",
          "example": "He interpreted the silence as contempt",
          "wordGroup": "group_329",
          "colorIndex": 5
        },
        {
          "id": 1270,
          "word": "narrate",
          "partOfSpeech": "v.",
          "chinese": "讲（故事）；叙述",
          "example": "The sailer narrated his life story to me in the tavern",
          "wordGroup": "group_329",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1271,
          "word": "illuminate",
          "partOfSpeech": "v.",
          "chinese": "阐释；说明；照亮",
          "example": "We use pictures and drawings to illuminate our subject",
          "wordGroup": "group_330",
          "colorIndex": 0
        },
        {
          "id": 1272,
          "word": "decipher",
          "partOfSpeech": "v.",
          "chinese": "译解；辨认",
          "example": "We can decipher the code intercepted by the broadcasting station",
          "wordGroup": "group_330",
          "colorIndex": 0
        },
        {
          "id": 1273,
          "word": "eloquence",
          "partOfSpeech": "n.",
          "chinese": "雄辩；流利的口才",
          "example": "The audience are struck by her simple, spellbinding eloquence",
          "wordGroup": "group_330",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1274,
          "word": "communicate",
          "partOfSpeech": "v.",
          "chinese": "沟通；交流；传达",
          "example": "We communicate mostly by e-mail",
          "wordGroup": "group_331",
          "colorIndex": 1
        },
        {
          "id": 1275,
          "word": "discussion",
          "partOfSpeech": "n.",
          "chinese": "讨论；谈论",
          "example": "After a lot of discussion among the directors, the matter was settled in the end",
          "wordGroup": "group_331",
          "colorIndex": 1
        },
        {
          "id": 1276,
          "word": "brainstorm",
          "partOfSpeech": "n./v.",
          "chinese": "集体自由讨论；头脑风暴；集思广益；进行头脑风暴",
          "example": "Managers get together and brainstorm a more permanent solution to the problem",
          "wordGroup": "group_331",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1277,
          "word": "debate",
          "partOfSpeech": "v./n.",
          "chinese": "辩论；争论；讨论",
          "example": "The government is debating about the education laws",
          "wordGroup": "group_332",
          "colorIndex": 2
        },
        {
          "id": 1278,
          "word": "commentary",
          "partOfSpeech": "n.",
          "chinese": "评论；批评；实况报道",
          "example": "The conclusion of the commentary really hit the bull's eye",
          "wordGroup": "group_332",
          "colorIndex": 2
        },
        {
          "id": 1279,
          "word": "negotiate",
          "partOfSpeech": "v.",
          "chinese": "协商；谈判",
          "example": "We are not about to negotiate with terrorists.",
          "wordGroup": "group_332",
          "colorIndex": 2
        },
        {
          "id": 1280,
          "word": "contention",
          "partOfSpeech": "n.",
          "chinese": "争论；争辩；观点",
          "example": "My contention is that the scheme will never work",
          "wordGroup": "group_332",
          "colorIndex": 2
        }
      ]
    ]
  },
  {
    "title": "娱乐运动",
    "groups": [
      [
        {
          "id": 1281,
          "word": "medium",
          "partOfSpeech": "n./adj.",
          "chinese": "媒介；中间的；中等的",
          "example": "The president's speech was broadcast through the medium of television",
          "wordGroup": "group_332",
          "colorIndex": 2
        },
        {
          "id": 1282,
          "word": "press",
          "partOfSpeech": "n.",
          "chinese": "新闻界；记者；报刊；出版社",
          "example": "The power of the press is very great",
          "wordGroup": "group_332",
          "colorIndex": 2
        },
        {
          "id": 1283,
          "word": "journalist",
          "partOfSpeech": "n.",
          "chinese": "记者；新闻工作者",
          "example": "No journalist was bold enough to challenge the prime minister",
          "wordGroup": "group_332",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1284,
          "word": "critic",
          "partOfSpeech": "n.",
          "chinese": "批评家；挑剔的人",
          "example": "The critic said the new movie would not do well at the box office",
          "wordGroup": "group_333",
          "colorIndex": 3
        },
        {
          "id": 1285,
          "word": "commentator",
          "partOfSpeech": "n.",
          "chinese": "评论员；实况解说员",
          "example": "I enjoy the sport's commentator's commentaries very much",
          "wordGroup": "group_333",
          "colorIndex": 3
        },
        {
          "id": 1286,
          "word": "exponent",
          "partOfSpeech": "n.",
          "chinese": "阐述者；倡导者；拥护者",
          "example": "He is an exponent of the opinions of Einstein",
          "wordGroup": "group_333",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1287,
          "word": "announcer",
          "partOfSpeech": "n.",
          "chinese": "广播员；播音员",
          "example": "The announcer started with the day's top stories",
          "wordGroup": "group_334",
          "colorIndex": 4
        },
        {
          "id": 1288,
          "word": "correspondent",
          "partOfSpeech": "n.",
          "chinese": "通信者；通讯员；记者",
          "example": "That war correspondent proudly outgunned the army sharp shooters",
          "wordGroup": "group_334",
          "colorIndex": 4
        },
        {
          "id": 1289,
          "word": "messenger",
          "partOfSpeech": "n.",
          "chinese": "邮递员；信使",
          "example": "The messenger brought you a note today",
          "wordGroup": "group_334",
          "colorIndex": 4
        },
        {
          "id": 1290,
          "word": "editor",
          "partOfSpeech": "n.",
          "chinese": "编辑；校订者",
          "example": "She gave the editor a dishonest account of this event",
          "wordGroup": "group_334",
          "colorIndex": 4
        },
        {
          "id": 1291,
          "word": "typist",
          "partOfSpeech": "n.",
          "chinese": "打字员",
          "example": "The two typists have already worked all day",
          "wordGroup": "group_334",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1292,
          "word": "handout",
          "partOfSpeech": "n.",
          "chinese": "传单；讲义",
          "example": "Please read the handout carefully",
          "wordGroup": "group_335",
          "colorIndex": 5
        },
        {
          "id": 1293,
          "word": "leaflet",
          "partOfSpeech": "n./v.",
          "chinese": "传单；散发传单",
          "example": "We were paid to leaflet advertisements in the shopping mall",
          "wordGroup": "group_335",
          "colorIndex": 5
        },
        {
          "id": 1294,
          "word": "propaganda",
          "partOfSpeech": "n.",
          "chinese": "宣传；鼓吹",
          "example": "This report clearly contains elements of propaganda",
          "wordGroup": "group_335",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1295,
          "word": "publish",
          "partOfSpeech": "v.",
          "chinese": "公布；出版；发行",
          "example": "News of the pop star's sudden death was not published for several days",
          "wordGroup": "group_336",
          "colorIndex": 0
        },
        {
          "id": 1296,
          "word": "disseminate",
          "partOfSpeech": "v.",
          "chinese": "散布；传播",
          "example": "The agency would collect and disseminate information",
          "wordGroup": "group_336",
          "colorIndex": 0
        },
        {
          "id": 1297,
          "word": "foresee",
          "partOfSpeech": "v.",
          "chinese": "预见；预知",
          "example": "They can not foresee how things will turn out",
          "wordGroup": "group_336",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1298,
          "word": "anticipate",
          "partOfSpeech": "v.",
          "chinese": "预期；预料",
          "example": "Sales are better than they have anticipated",
          "wordGroup": "group_337",
          "colorIndex": 1
        },
        {
          "id": 1299,
          "word": "expect",
          "partOfSpeech": "v.",
          "chinese": "预料；期待",
          "example": "The managers expect exceptional sales growth in the last quarter",
          "wordGroup": "group_337",
          "colorIndex": 1
        },
        {
          "id": 1300,
          "word": "await",
          "partOfSpeech": "v.",
          "chinese": "等候；期待；将降临到...身上",
          "example": "If you are lucky enough to vacation in the Alps, what delights will await you!",
          "wordGroup": "group_337",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1301,
          "word": "pastime",
          "partOfSpeech": "n.",
          "chinese": "娱乐；消遣",
          "example": "Listening to music is the favorite pastime of many people all over the world",
          "wordGroup": "group_338",
          "colorIndex": 2
        },
        {
          "id": 1302,
          "word": "entertain",
          "partOfSpeech": "v.",
          "chinese": "娱乐；招待；心存；怀有",
          "example": "This television program is designed to educate and to entertain as well",
          "wordGroup": "group_338",
          "colorIndex": 2
        },
        {
          "id": 1303,
          "word": "recreation",
          "partOfSpeech": "n.",
          "chinese": "休闲；娱乐",
          "example": "She is in charge of recreation",
          "wordGroup": "group_338",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1304,
          "word": "amuse",
          "partOfSpeech": "v.",
          "chinese": "逗乐；给...提供娱乐",
          "example": "Harry makes up funny stories to amuse his little brother",
          "wordGroup": "group_339",
          "colorIndex": 3
        },
        {
          "id": 1305,
          "word": "gossip",
          "partOfSpeech": "n.",
          "chinese": "闲聊；流言蜚语",
          "example": "I've read about it in the gossip column",
          "wordGroup": "group_339",
          "colorIndex": 3
        },
        {
          "id": 1306,
          "word": "rumour/rumor",
          "partOfSpeech": "n.",
          "chinese": "谣言；传闻",
          "example": "The rumor soon swept the entire company",
          "wordGroup": "group_339",
          "colorIndex": 3
        },
        {
          "id": 1307,
          "word": "consensus",
          "partOfSpeech": "n.",
          "chinese": "共识；一致的意见",
          "example": "Could we reach a consensus on this issue? Let's take a vote",
          "wordGroup": "group_339",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1308,
          "word": "festival",
          "partOfSpeech": "n.",
          "chinese": "节日",
          "example": "This music festival will feature fireworks, live music, and barbecue",
          "wordGroup": "group_340",
          "colorIndex": 4
        },
        {
          "id": 1309,
          "word": "feast",
          "partOfSpeech": "n.",
          "chinese": "盛宴；（宗教）节日",
          "example": "The feast was served by his mother and sisters",
          "wordGroup": "group_340",
          "colorIndex": 4
        },
        {
          "id": 1310,
          "word": "programme/program",
          "partOfSpeech": "n./v.",
          "chinese": "节目；方案；程序；为系统设置程序；计划",
          "example": "There was an interesting program on TV yesterday",
          "wordGroup": "group_340",
          "colorIndex": 4
        },
        {
          "id": 1311,
          "word": "rehearsal",
          "partOfSpeech": "n.",
          "chinese": "排练",
          "example": "The play is in rehearsal now",
          "wordGroup": "group_340",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1312,
          "word": "perform",
          "partOfSpeech": "v.",
          "chinese": "表演；演出",
          "example": "A jazz band will perform live at tommorrow's party",
          "wordGroup": "group_341",
          "colorIndex": 5
        },
        {
          "id": 1313,
          "word": "imitate",
          "partOfSpeech": "v.",
          "chinese": "模仿；效仿",
          "example": "He imitates other people to perfection",
          "wordGroup": "group_341",
          "colorIndex": 5
        },
        {
          "id": 1314,
          "word": "mimic",
          "partOfSpeech": "v.",
          "chinese": "模仿；戏仿",
          "example": "He mimicked the teacher's accent",
          "wordGroup": "group_341",
          "colorIndex": 5
        },
        {
          "id": 1315,
          "word": "simulate",
          "partOfSpeech": "v.",
          "chinese": "模拟；假装；冒充",
          "example": "We can use computers to simulate many situations",
          "wordGroup": "group_341",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1316,
          "word": "circus",
          "partOfSpeech": "n.",
          "chinese": "马戏团；圆形广场（常用于地名）",
          "example": "Last Christmas, the circus owner decided to take some presents to a children's hostipal",
          "wordGroup": "group_342",
          "colorIndex": 0
        },
        {
          "id": 1317,
          "word": "magic",
          "partOfSpeech": "n.",
          "chinese": "魔术；魔法",
          "example": "The magician thrilled his audience with his magic",
          "wordGroup": "group_342",
          "colorIndex": 0
        },
        {
          "id": 1318,
          "word": "drama",
          "partOfSpeech": "n.",
          "chinese": "戏；剧；戏剧艺术",
          "example": "My brother was studying a course in drama at university",
          "wordGroup": "group_342",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1319,
          "word": "concert",
          "partOfSpeech": "n.",
          "chinese": "音乐会",
          "example": "Various performers will present a concert to raise money for AIDS charities",
          "wordGroup": "group_343",
          "colorIndex": 1
        },
        {
          "id": 1320,
          "word": "symphony",
          "partOfSpeech": "n.",
          "chinese": "交响乐",
          "example": "The Royal Stockholm Philharmonic Orchestra played Beethoven's Ninth Symphony",
          "wordGroup": "group_343",
          "colorIndex": 1
        },
        {
          "id": 1321,
          "word": "orchestra",
          "partOfSpeech": "n.",
          "chinese": "管弦乐队",
          "example": "This orchestra has been established under the patronage of the government",
          "wordGroup": "group_343",
          "colorIndex": 1
        },
        {
          "id": 1322,
          "word": "ballet",
          "partOfSpeech": "n.",
          "chinese": "芭蕾舞；芭蕾舞剧",
          "example": "I wanted to be a ballet dancer when I was a child",
          "wordGroup": "group_343",
          "colorIndex": 1
        },
        {
          "id": 1323,
          "word": "opera",
          "partOfSpeech": "n.",
          "chinese": "歌剧",
          "example": "She joined the Royal Opera House the following year",
          "wordGroup": "group_343",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1324,
          "word": "comedy",
          "partOfSpeech": "n.",
          "chinese": "喜剧",
          "example": "Dwayne Johnson talked about his experiences of starring in comedies",
          "wordGroup": "group_344",
          "colorIndex": 2
        },
        {
          "id": 1325,
          "word": "tragedy",
          "partOfSpeech": "n.",
          "chinese": "悲剧；悲惨的事",
          "example": "She was too exhausted and distressed to talk about the tragedy",
          "wordGroup": "group_344",
          "colorIndex": 2
        },
        {
          "id": 1326,
          "word": "animation",
          "partOfSpeech": "n.",
          "chinese": "动画片；动画制作",
          "example": "It is this cartoon that brought the animation industry back from the dead",
          "wordGroup": "group_344",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1327,
          "word": "film",
          "partOfSpeech": "n.",
          "chinese": "影片；胶卷",
          "example": "A good film will be on this weekend",
          "wordGroup": "group_345",
          "colorIndex": 3
        },
        {
          "id": 1328,
          "word": "movie",
          "partOfSpeech": "n.",
          "chinese": "电影",
          "example": "This movie was hyped up in the media before it was screened",
          "wordGroup": "group_345",
          "colorIndex": 3
        },
        {
          "id": 1329,
          "word": "X-rated",
          "partOfSpeech": "adj.",
          "chinese": "X级的；青少年不宜的",
          "example": "When Logan was showed in cinema, it was X-rated",
          "wordGroup": "group_345",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1330,
          "word": "artist",
          "partOfSpeech": "n.",
          "chinese": "艺术家",
          "example": "He was not the kind of artist who could work collaboratively",
          "wordGroup": "group_346",
          "colorIndex": 4
        },
        {
          "id": 1331,
          "word": "craftsman",
          "partOfSpeech": "n.",
          "chinese": "工匠；工艺师",
          "example": "The original designes were made by highly skilled craftsmen",
          "wordGroup": "group_346",
          "colorIndex": 4
        },
        {
          "id": 1332,
          "word": "painter",
          "partOfSpeech": "n.",
          "chinese": "画家；油漆匠",
          "example": "This painter is not first class",
          "wordGroup": "group_346",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1333,
          "word": "role",
          "partOfSpeech": "n.",
          "chinese": "角色",
          "example": "I played the role of the mean aunt in the play",
          "wordGroup": "group_347",
          "colorIndex": 5
        },
        {
          "id": 1334,
          "word": "scene",
          "partOfSpeech": "n.",
          "chinese": "景色；现场；（戏剧的）场面",
          "example": "The scene is perfect when you see the sun rising slowly in the east",
          "wordGroup": "group_347",
          "colorIndex": 5
        },
        {
          "id": 1335,
          "word": "stage",
          "partOfSpeech": "n.",
          "chinese": "舞台；阶段",
          "example": "Each stage of the battle was carried off flawlessly",
          "wordGroup": "group_347",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1336,
          "word": "gallery",
          "partOfSpeech": "n.",
          "chinese": "美术馆",
          "example": "The pictures in the gallery were well spaced out",
          "wordGroup": "group_348",
          "colorIndex": 0
        },
        {
          "id": 1337,
          "word": "exhibition",
          "partOfSpeech": "n.",
          "chinese": "展览",
          "example": "They are coming to the exhibition as my guests",
          "wordGroup": "group_348",
          "colorIndex": 0
        },
        {
          "id": 1338,
          "word": "aesthetic/esthetic",
          "partOfSpeech": "adj./n.",
          "chinese": "审美的；审美观",
          "example": "His aesthetic standards are quite different from mine",
          "wordGroup": "group_348",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1339,
          "word": "collect",
          "partOfSpeech": "v.",
          "chinese": "收集；收藏",
          "example": "He used to collect stamps, but now he likes to collect coins",
          "wordGroup": "group_349",
          "colorIndex": 1
        },
        {
          "id": 1340,
          "word": "select",
          "partOfSpeech": "v./adj.",
          "chinese": "选择；挑选；精选的",
          "example": "They were selected from many applicants",
          "wordGroup": "group_349",
          "colorIndex": 1
        },
        {
          "id": 1341,
          "word": "opt",
          "partOfSpeech": "v.",
          "chinese": "选择",
          "example": "My aunt opted for early retirement",
          "wordGroup": "group_349",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1342,
          "word": "photograph",
          "partOfSpeech": "n.",
          "chinese": "照片；相片",
          "example": "His photograph showed how the plant turned out",
          "wordGroup": "group_350",
          "colorIndex": 2
        },
        {
          "id": 1343,
          "word": "portrait",
          "partOfSpeech": "n.",
          "chinese": "肖像；半身画像",
          "example": "Her portrait hangs in the lobby of the library",
          "wordGroup": "group_350",
          "colorIndex": 2
        },
        {
          "id": 1344,
          "word": "painting",
          "partOfSpeech": "n.",
          "chinese": "油画；会话；画作；涂漆",
          "example": "This painting is invaluable",
          "wordGroup": "group_350",
          "colorIndex": 2
        },
        {
          "id": 1345,
          "word": "sculpture",
          "partOfSpeech": "n.",
          "chinese": "雕塑",
          "example": "The smooth contour of the sculpture is wonderful",
          "wordGroup": "group_350",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1346,
          "word": "draw",
          "partOfSpeech": "v.",
          "chinese": "画；拉；拔出",
          "example": "Draw a line with the ruler",
          "wordGroup": "group_351",
          "colorIndex": 3
        },
        {
          "id": 1347,
          "word": "sketch",
          "partOfSpeech": "n./v.",
          "chinese": "素描；草图；速写；画素描；画速写",
          "example": "I sketched the cat sleeping in the yard",
          "wordGroup": "group_351",
          "colorIndex": 3
        },
        {
          "id": 1348,
          "word": "depict",
          "partOfSpeech": "v.",
          "chinese": "描述；描写；描绘",
          "example": "In this new biography, she is depicted as a lonely and unhappy woman",
          "wordGroup": "group_351",
          "colorIndex": 3
        },
        {
          "id": 1349,
          "word": "describe",
          "partOfSpeech": "v.",
          "chinese": "描述；形容",
          "example": "Words can not describe the beauty of the scene",
          "wordGroup": "group_351",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1350,
          "word": "carve",
          "partOfSpeech": "v.",
          "chinese": "雕刻；切下",
          "example": "The statue was carved out of mable",
          "wordGroup": "group_352",
          "colorIndex": 4
        },
        {
          "id": 1351,
          "word": "improvise",
          "partOfSpeech": "v.",
          "chinese": "临时做；即兴创作",
          "example": "If an actor forgets his lines on the stage, he has to improvise",
          "wordGroup": "group_352",
          "colorIndex": 4
        },
        {
          "id": 1352,
          "word": "musical",
          "partOfSpeech": "adj.",
          "chinese": "音乐的；悦耳的",
          "example": "The drum is one of the oldest musical instruments",
          "wordGroup": "group_352",
          "colorIndex": 4
        },
        {
          "id": 1353,
          "word": "classical",
          "partOfSpeech": "adj.",
          "chinese": "古典的；传统的",
          "example": "Beethoven is regarded as one of the immortals of classical music",
          "wordGroup": "group_352",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1354,
          "word": "jazz",
          "partOfSpeech": "n.",
          "chinese": "爵士乐",
          "example": "He is well versed in many styles of jazz",
          "wordGroup": "group_353",
          "colorIndex": 5
        },
        {
          "id": 1355,
          "word": "rock",
          "partOfSpeech": "n.",
          "chinese": "摇滚乐；岩石",
          "example": "Glam rock developed in the early 1970s and David Bowie was one of the most influential glam rock artists",
          "wordGroup": "group_353",
          "colorIndex": 5
        },
        {
          "id": 1356,
          "word": "hip-hop",
          "partOfSpeech": "n.",
          "chinese": "嘻哈文化",
          "example": "Hip-hop singers like to wear bling bling in their music videos to look fancy",
          "wordGroup": "group_353",
          "colorIndex": 5
        },
        {
          "id": 1357,
          "word": "pop",
          "partOfSpeech": "n.",
          "chinese": "流行音乐；流行乐曲",
          "example": "The radio has fed him a stream of pop songs",
          "wordGroup": "group_353",
          "colorIndex": 5
        },
        {
          "id": 1358,
          "word": "lyric",
          "partOfSpeech": "n./adj.",
          "chinese": "抒情诗；抒情的",
          "example": "I don't understand the lyrics, which are in French, but the song sounds peaceful",
          "wordGroup": "group_353",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1359,
          "word": "band",
          "partOfSpeech": "n.",
          "chinese": "乐队；带；波段",
          "example": "The band will play on request",
          "wordGroup": "group_354",
          "colorIndex": 0
        },
        {
          "id": 1360,
          "word": "solo",
          "partOfSpeech": "n./adj.",
          "chinese": "独奏；独唱；独奏的；独唱的",
          "example": "She has acquired a reputation as this country's premier solo voilinist",
          "wordGroup": "group_354",
          "colorIndex": 0
        },
        {
          "id": 1361,
          "word": "melody",
          "partOfSpeech": "n.",
          "chinese": "乐曲；旋律",
          "example": "I like that song, because its melody is really pleasant",
          "wordGroup": "group_354",
          "colorIndex": 0
        },
        {
          "id": 1362,
          "word": "rhythm",
          "partOfSpeech": "n.",
          "chinese": "节奏；韵律",
          "example": "I can't dance to music without a good rhythm",
          "wordGroup": "group_354",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1363,
          "word": "tone",
          "partOfSpeech": "n.",
          "chinese": "音色；声调；腔调",
          "example": "This violin has a very good tone",
          "wordGroup": "group_355",
          "colorIndex": 1
        },
        {
          "id": 1364,
          "word": "tune",
          "partOfSpeech": "n./v.",
          "chinese": "曲调；短乐曲；调试",
          "example": "The violin seems to be out of tune",
          "wordGroup": "group_355",
          "colorIndex": 1
        },
        {
          "id": 1365,
          "word": "disc/disk",
          "partOfSpeech": "n.",
          "chinese": "光碟；唱片；磁盘",
          "example": "There is no disc that interests me",
          "wordGroup": "group_355",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1366,
          "word": "piano",
          "partOfSpeech": "n.",
          "chinese": "钢琴",
          "example": "He started to learn the piano when he was very young",
          "wordGroup": "group_356",
          "colorIndex": 2
        },
        {
          "id": 1367,
          "word": "violin",
          "partOfSpeech": "n.",
          "chinese": "小提琴",
          "example": "The violin is not quite in tune with the piano",
          "wordGroup": "group_356",
          "colorIndex": 2
        },
        {
          "id": 1368,
          "word": "cello",
          "partOfSpeech": "n.",
          "chinese": "大提琴",
          "example": "She plays the cello in an orchestra",
          "wordGroup": "group_356",
          "colorIndex": 2
        },
        {
          "id": 1369,
          "word": "guitar",
          "partOfSpeech": "n.",
          "chinese": "吉他",
          "example": "She strummed her guitar, singing her own song",
          "wordGroup": "group_356",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1370,
          "word": "harmonica",
          "partOfSpeech": "n.",
          "chinese": "口琴",
          "example": "He played a tune on his harmonica",
          "wordGroup": "group_357",
          "colorIndex": 3
        },
        {
          "id": 1371,
          "word": "trumpet",
          "partOfSpeech": "n.",
          "chinese": "喇叭；小号",
          "example": "His performance as a trumpet player was quite revolutionary",
          "wordGroup": "group_357",
          "colorIndex": 3
        },
        {
          "id": 1372,
          "word": "drum",
          "partOfSpeech": "n.",
          "chinese": "鼓；鼓状物；大桶",
          "example": "The drum beats were steady and slow",
          "wordGroup": "group_357",
          "colorIndex": 3
        },
        {
          "id": 1373,
          "word": "flute",
          "partOfSpeech": "n.",
          "chinese": "长笛",
          "example": "The long drawn out sound of a flute is coming from far to near",
          "wordGroup": "group_357",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1374,
          "word": "competition",
          "partOfSpeech": "n.",
          "chinese": "竞争；比赛",
          "example": "There is a rise in unemployment, so the competition for jobs is very fierce",
          "wordGroup": "group_358",
          "colorIndex": 4
        },
        {
          "id": 1375,
          "word": "tournament",
          "partOfSpeech": "n.",
          "chinese": "锦标赛；联赛",
          "example": "He has 65 tournament wins to his name",
          "wordGroup": "group_358",
          "colorIndex": 4
        },
        {
          "id": 1376,
          "word": "Olympic",
          "partOfSpeech": "adj./n.",
          "chinese": "奥林匹克运动会",
          "example": "The most important part of the Olympics is to participate, rather than to win",
          "wordGroup": "group_358",
          "colorIndex": 4
        },
        {
          "id": 1377,
          "word": "sponsor",
          "partOfSpeech": "n./v.",
          "chinese": "发起人；主办人；赞助人。发起；主办；赞助",
          "example": "The company has sponsored the football match",
          "wordGroup": "group_358",
          "colorIndex": 4
        },
        {
          "id": 1378,
          "word": "patron",
          "partOfSpeech": "n.",
          "chinese": "赞助人；顾客；老主顾",
          "example": "A wealthy patron has promised to send him to study overseas",
          "wordGroup": "group_358",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1379,
          "word": "athlete",
          "partOfSpeech": "n.",
          "chinese": "运动员",
          "example": "The boy first showed promise as an athlete in primary school",
          "wordGroup": "group_359",
          "colorIndex": 5
        },
        {
          "id": 1380,
          "word": "champion",
          "partOfSpeech": "n./v.",
          "chinese": "冠军；第一名；拥护；支持",
          "example": "As the defending champion, she is expected to reach the final",
          "wordGroup": "group_359",
          "colorIndex": 5
        },
        {
          "id": 1381,
          "word": "spectator",
          "partOfSpeech": "n.",
          "chinese": "观众",
          "example": "The match attracted over 40, 000 spectators",
          "wordGroup": "group_359",
          "colorIndex": 5
        },
        {
          "id": 1382,
          "word": "volunteer",
          "partOfSpeech": "n./v.",
          "chinese": "志愿者；自愿做",
          "example": "Many people volunteer to work on the farms",
          "wordGroup": "group_359",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1383,
          "word": "famous",
          "partOfSpeech": "adj.",
          "chinese": "著名的；出名的",
          "example": "Weathering Heights in one of the most famous novels in the world",
          "wordGroup": "group_360",
          "colorIndex": 0
        },
        {
          "id": 1384,
          "word": "well-known",
          "partOfSpeech": "adj.",
          "chinese": "众所周知的；出名的",
          "example": "The writer is well-known for his prolific works",
          "wordGroup": "group_360",
          "colorIndex": 0
        },
        {
          "id": 1385,
          "word": "energetic",
          "partOfSpeech": "adj.",
          "chinese": "充满活力的；精力充沛的",
          "example": "He is an energetic basketball player",
          "wordGroup": "group_360",
          "colorIndex": 0
        },
        {
          "id": 1386,
          "word": "vigorous",
          "partOfSpeech": "adj.",
          "chinese": "充满活力的；活跃的；积极的",
          "example": "Our attack was very vigorous and the enemy retreated back to the riverbank",
          "wordGroup": "group_360",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1387,
          "word": "stadium",
          "partOfSpeech": "n.",
          "chinese": "体育场；运动场",
          "example": "The stadium has been fitted with seating for 100, 000 spectators",
          "wordGroup": "group_361",
          "colorIndex": 1
        },
        {
          "id": 1388,
          "word": "gym",
          "partOfSpeech": "n.",
          "chinese": "体育馆；运动场",
          "example": "Both able-bodied and disabled people can use this gym",
          "wordGroup": "group_361",
          "colorIndex": 1
        },
        {
          "id": 1389,
          "word": "training",
          "partOfSpeech": "n.",
          "chinese": "训练；锻炼；培训",
          "example": "Training a prerequisite for competence",
          "wordGroup": "group_361",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1390,
          "word": "exercise",
          "partOfSpeech": "n./v.",
          "chinese": "锻炼；运动；习题；练习。锻炼",
          "example": "Swimming is probably the best form of exercise you can get",
          "wordGroup": "group_362",
          "colorIndex": 2
        },
        {
          "id": 1391,
          "word": "indoor",
          "partOfSpeech": "adj.",
          "chinese": "室内的",
          "example": "Billiards is a good indoor game",
          "wordGroup": "group_362",
          "colorIndex": 2
        },
        {
          "id": 1392,
          "word": "outdoor",
          "partOfSpeech": "adj.",
          "chinese": "户外的；室外的",
          "example": "If you enjoy outdoor activities, this is the trip for you",
          "wordGroup": "group_362",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1393,
          "word": "motion",
          "partOfSpeech": "v.",
          "chinese": "做动作；示意",
          "example": "She motioned for us to hide ourselves",
          "wordGroup": "group_363",
          "colorIndex": 3
        },
        {
          "id": 1394,
          "word": "mobile",
          "partOfSpeech": "adj.",
          "chinese": "可移动的；流动的",
          "example": "The mobile phone business actually was the company's bread and butter",
          "wordGroup": "group_363",
          "colorIndex": 3
        },
        {
          "id": 1395,
          "word": "movement",
          "partOfSpeech": "n.",
          "chinese": "活动；运动；移动",
          "example": "Her every movement is very graceful",
          "wordGroup": "group_363",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1396,
          "word": "yoga",
          "partOfSpeech": "n.",
          "chinese": "瑜伽",
          "example": "Some people practice yoga to aid relaxation",
          "wordGroup": "group_364",
          "colorIndex": 4
        },
        {
          "id": 1397,
          "word": "sprawl",
          "partOfSpeech": "n./v.",
          "chinese": "延伸；蔓延。（城市）杂乱无序扩张的地区",
          "example": "He sprawled on the sofa",
          "wordGroup": "group_364",
          "colorIndex": 4
        },
        {
          "id": 1398,
          "word": "stretch",
          "partOfSpeech": "v.",
          "chinese": "延伸；伸长",
          "example": "He stretched out his hand, reaching for a book",
          "wordGroup": "group_364",
          "colorIndex": 4
        },
        {
          "id": 1399,
          "word": "strain",
          "partOfSpeech": "v./n.",
          "chinese": "拉紧；拉伤；扭伤。张力；拉力；（精神上）紧张",
          "example": "I strained my back when I lifted the box",
          "wordGroup": "group_364",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1400,
          "word": "chess",
          "partOfSpeech": "n.",
          "chinese": "国际象棋",
          "example": "Games like chess are intellectual pursuits",
          "wordGroup": "group_365",
          "colorIndex": 5
        },
        {
          "id": 1401,
          "word": "badminton",
          "partOfSpeech": "n.",
          "chinese": "羽毛球",
          "example": "Badminton can be played by two or four people",
          "wordGroup": "group_365",
          "colorIndex": 5
        },
        {
          "id": 1402,
          "word": "golf",
          "partOfSpeech": "n.",
          "chinese": "高尔夫球",
          "example": "Hundreds of private golf clubs took part in a recent study",
          "wordGroup": "group_365",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1403,
          "word": "billiards",
          "partOfSpeech": "n.",
          "chinese": "台球",
          "example": "He spent a whole afternoon playing billiards",
          "wordGroup": "group_366",
          "colorIndex": 0
        },
        {
          "id": 1404,
          "word": "soccer",
          "partOfSpeech": "n.",
          "chinese": "（英式）足球",
          "example": "In soccer, only the goalkeeper can play the ball with his hands",
          "wordGroup": "group_366",
          "colorIndex": 0
        },
        {
          "id": 1405,
          "word": "tennis",
          "partOfSpeech": "n.",
          "chinese": "网球",
          "example": "He is a professional tennis player",
          "wordGroup": "group_366",
          "colorIndex": 0
        },
        {
          "id": 1406,
          "word": "volleyball",
          "partOfSpeech": "n.",
          "chinese": "排球",
          "example": "They are watching a live TV broadcast of the volleyball match",
          "wordGroup": "group_366",
          "colorIndex": 0
        },
        {
          "id": 1407,
          "word": "hockey",
          "partOfSpeech": "n.",
          "chinese": "曲棍球；冰球",
          "example": "She played hockey for the national team",
          "wordGroup": "group_366",
          "colorIndex": 0
        },
        {
          "id": 1408,
          "word": "cricket",
          "partOfSpeech": "n.",
          "chinese": "板球",
          "example": "The cricket match was washed out my rain",
          "wordGroup": "group_366",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1409,
          "word": "goal",
          "partOfSpeech": "n.",
          "chinese": "球门；进球得分；目的",
          "example": "The home side rubbed in their superiority with a further goal",
          "wordGroup": "group_367",
          "colorIndex": 1
        },
        {
          "id": 1410,
          "word": "bat",
          "partOfSpeech": "n.",
          "chinese": "球拍；球棒；球板",
          "example": "I want to buy a new cricket bat",
          "wordGroup": "group_367",
          "colorIndex": 1
        },
        {
          "id": 1411,
          "word": "racket",
          "partOfSpeech": "n.",
          "chinese": "（网球、羽毛球）球拍",
          "example": "Can I borrow your tennis racket?",
          "wordGroup": "group_367",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1412,
          "word": "kick",
          "partOfSpeech": "n./v.",
          "chinese": "踢",
          "example": "Don't kick the ball into the road",
          "wordGroup": "group_368",
          "colorIndex": 2
        },
        {
          "id": 1413,
          "word": "knock",
          "partOfSpeech": "v.",
          "chinese": "敲；击；撞",
          "example": "I was so hurried that I knocked into my teacher",
          "wordGroup": "group_368",
          "colorIndex": 2
        },
        {
          "id": 1414,
          "word": "flip",
          "partOfSpeech": "v./n.",
          "chinese": "掷；快速翻转。随便的；宽泛的",
          "example": "Let's flip a coin to see who goes first",
          "wordGroup": "group_368",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1415,
          "word": "pitch",
          "partOfSpeech": "v./n.",
          "chinese": "投；掷；球场；（棒球中的）投球",
          "example": "She pitched the ball as far as she could",
          "wordGroup": "group_369",
          "colorIndex": 3
        },
        {
          "id": 1416,
          "word": "throw",
          "partOfSpeech": "v.",
          "chinese": "投；掷；抛；扔",
          "example": "Throw the stone in the air",
          "wordGroup": "group_369",
          "colorIndex": 3
        },
        {
          "id": 1417,
          "word": "toss",
          "partOfSpeech": "v.",
          "chinese": "扔；抛；掷；（使）颠簸",
          "example": "The canoe was tossed about among the eddies",
          "wordGroup": "group_369",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1418,
          "word": "slide",
          "partOfSpeech": "v./n.",
          "chinese": "滑动；逐渐降低；滑行；下跌",
          "example": "House values may begin to slide",
          "wordGroup": "group_370",
          "colorIndex": 4
        },
        {
          "id": 1419,
          "word": "slip",
          "partOfSpeech": "v./n.",
          "chinese": "滑跤；滑落；溜；滑到",
          "example": "She slipped and fell down the stairs",
          "wordGroup": "group_370",
          "colorIndex": 4
        },
        {
          "id": 1420,
          "word": "glide",
          "partOfSpeech": "v./n.",
          "chinese": "滑动；掠过；滑行",
          "example": "The beautiful swan glides gracefully on the pond",
          "wordGroup": "group_370",
          "colorIndex": 4
        },
        {
          "id": 1421,
          "word": "tumble",
          "partOfSpeech": "v.",
          "chinese": "摔倒；滚下",
          "example": "She tumbled on the slick, damp ground",
          "wordGroup": "group_370",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1422,
          "word": "ski",
          "partOfSpeech": "v./n.",
          "chinese": "滑雪；滑雪板",
          "example": "The students often go skiing during winter vacations",
          "wordGroup": "group_371",
          "colorIndex": 5
        },
        {
          "id": 1423,
          "word": "skate",
          "partOfSpeech": "v.",
          "chinese": "滑冰",
          "example": "What fun it is to throw snowballs and to skate on the ice",
          "wordGroup": "group_371",
          "colorIndex": 5
        },
        {
          "id": 1424,
          "word": "cycling",
          "partOfSpeech": "n.",
          "chinese": "骑自行车运动",
          "example": "He likes cycling very much and wants to a bicycle",
          "wordGroup": "group_371",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1425,
          "word": "dive",
          "partOfSpeech": "v.",
          "chinese": "跳水；潜水；俯冲",
          "example": "Diving is a part of this expedition",
          "wordGroup": "group_372",
          "colorIndex": 0
        },
        {
          "id": 1426,
          "word": "drift",
          "partOfSpeech": "v.",
          "chinese": "飘逸；漂流；流浪；漂泊",
          "example": "The dead body drifted ashore on the beach",
          "wordGroup": "group_372",
          "colorIndex": 0
        },
        {
          "id": 1427,
          "word": "jump",
          "partOfSpeech": "v.",
          "chinese": "跳；暴涨；跳过",
          "example": "He jumped when he heard the news",
          "wordGroup": "group_372",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1428,
          "word": "leap",
          "partOfSpeech": "v./n.",
          "chinese": "跳；跃；跳跃",
          "example": "The thief leaped over the wall and ran away",
          "wordGroup": "group_373",
          "colorIndex": 1
        },
        {
          "id": 1429,
          "word": "plunge",
          "partOfSpeech": "v./n.",
          "chinese": "纵身投入；猛跌；（使）投身。跳水；猛跌",
          "example": "He plunged into the water to save the child",
          "wordGroup": "group_373",
          "colorIndex": 1
        },
        {
          "id": 1430,
          "word": "spring",
          "partOfSpeech": "v./n.",
          "chinese": "跳；跃",
          "example": "The cat crouched, ready to spring",
          "wordGroup": "group_373",
          "colorIndex": 1
        },
        {
          "id": 1431,
          "word": "hop",
          "partOfSpeech": "v.",
          "chinese": "跳上/下；单脚跳行；齐足跳行",
          "example": "The robber hopped into his car and rushed off",
          "wordGroup": "group_373",
          "colorIndex": 1
        },
        {
          "id": 1432,
          "word": "bounce",
          "partOfSpeech": "v.",
          "chinese": "（使）反弹/弹起/跳动",
          "example": "The ball hit the wall and bounced off it",
          "wordGroup": "group_373",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1433,
          "word": "tent",
          "partOfSpeech": "n.",
          "chinese": "帐篷",
          "example": "He drew back the tent flap and strode out into the blizzard 他拉开帐篷门帘，大步走进暴风雪中",
          "wordGroup": "group_374",
          "colorIndex": 2
        },
        {
          "id": 1434,
          "word": "camp",
          "partOfSpeech": "n.",
          "chinese": "营地；阵营",
          "example": "At dusk, we pitched camp in the middle of nowhere",
          "wordGroup": "group_374",
          "colorIndex": 2
        },
        {
          "id": 1435,
          "word": "picnic",
          "partOfSpeech": "n./v.",
          "chinese": "野餐；野餐食物",
          "example": "Let's eat our picnic by the waterfall",
          "wordGroup": "group_374",
          "colorIndex": 2
        },
        {
          "id": 1436,
          "word": "hunt",
          "partOfSpeech": "v./n.",
          "chinese": "打猎；搜寻；猎取",
          "example": "Parent birds begin to hunt for food for their young",
          "wordGroup": "group_374",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1437,
          "word": "race",
          "partOfSpeech": "n.",
          "chinese": "赛跑；速度竞赛；人种；种族",
          "example": "The horse is racing against five others",
          "wordGroup": "group_375",
          "colorIndex": 3
        },
        {
          "id": 1438,
          "word": "marathon",
          "partOfSpeech": "n.",
          "chinese": "马拉松",
          "example": "Gallard completed the marathon in less than 3 hours",
          "wordGroup": "group_375",
          "colorIndex": 3
        },
        {
          "id": 1439,
          "word": "pedestrian",
          "partOfSpeech": "n.",
          "chinese": "步行者；行人",
          "example": "In the accident a pedestrian and a cyclist were injured",
          "wordGroup": "group_375",
          "colorIndex": 3
        },
        {
          "id": 1440,
          "word": "pace",
          "partOfSpeech": "n./v.",
          "chinese": "步速；速度；步调；节奏；来回踱步",
          "example": "Our wage's keeping pace with inflation",
          "wordGroup": "group_375",
          "colorIndex": 3
        },
        {
          "id": 1441,
          "word": "step",
          "partOfSpeech": "n.",
          "chinese": "步伐；步骤",
          "example": "One thing you can do is trying to solve it step by step",
          "wordGroup": "group_375",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1442,
          "word": "excursion",
          "partOfSpeech": "n.",
          "chinese": "远足；短程旅行",
          "example": "We went on an excursion to that town",
          "wordGroup": "group_376",
          "colorIndex": 4
        },
        {
          "id": 1443,
          "word": "cruise",
          "partOfSpeech": "v.",
          "chinese": "乘船游览；以平稳的速度行驶",
          "example": "The car was cruising along at 60 kilometers an hour",
          "wordGroup": "group_376",
          "colorIndex": 4
        },
        {
          "id": 1444,
          "word": "trip",
          "partOfSpeech": "v./n.",
          "chinese": "绊倒；旅行",
          "example": "The trip was expensive and uncomfortable",
          "wordGroup": "group_376",
          "colorIndex": 4
        },
        {
          "id": 1445,
          "word": "vacation",
          "partOfSpeech": "v./n.",
          "chinese": "休假；假期",
          "example": "I was too busy to spare time for a vacation",
          "wordGroup": "group_376",
          "colorIndex": 4
        },
        {
          "id": 1446,
          "word": "hike",
          "partOfSpeech": "n./v.",
          "chinese": "徒步旅行；远足",
          "example": "It may rain, in which case the hike will be cancelled",
          "wordGroup": "group_376",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1447,
          "word": "jog",
          "partOfSpeech": "v.",
          "chinese": "慢跑",
          "example": "The old bus jogs steadily down the road",
          "wordGroup": "group_377",
          "colorIndex": 5
        },
        {
          "id": 1448,
          "word": "stride",
          "partOfSpeech": "v.",
          "chinese": "大步走；阔步行走",
          "example": "They are strading forward both in English and in Mathematics",
          "wordGroup": "group_377",
          "colorIndex": 5
        },
        {
          "id": 1449,
          "word": "wander",
          "partOfSpeech": "v.",
          "chinese": "闲逛；漫步；走神；开小差",
          "example": "It is fun to wander the world",
          "wordGroup": "group_377",
          "colorIndex": 5
        },
        {
          "id": 1450,
          "word": "linger",
          "partOfSpeech": "v.",
          "chinese": "逗留；流连；继续存留",
          "example": "We linger at the beach the whole summer",
          "wordGroup": "group_377",
          "colorIndex": 5
        },
        {
          "id": 1451,
          "word": "lag",
          "partOfSpeech": "v./n.",
          "chinese": "落后；间隔；时间差",
          "example": "Let not a single classmate lag behind",
          "wordGroup": "group_377",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1452,
          "word": "climb",
          "partOfSpeech": "v.",
          "chinese": "攀登；爬",
          "example": "It is not easy to climb a steep mountain",
          "wordGroup": "group_378",
          "colorIndex": 0
        },
        {
          "id": 1453,
          "word": "pull",
          "partOfSpeech": "v.",
          "chinese": "拉；拖；扯；划（小船）",
          "example": "They pulled the boat towards the light house",
          "wordGroup": "group_378",
          "colorIndex": 0
        },
        {
          "id": 1454,
          "word": "drag",
          "partOfSpeech": "v.",
          "chinese": "拖；拉；拽",
          "example": "Use your mouse to drag the pictures into that folder",
          "wordGroup": "group_378",
          "colorIndex": 0
        },
        {
          "id": 1455,
          "word": "bend",
          "partOfSpeech": "v.",
          "chinese": "俯身；弯腰；使弯曲",
          "example": "He bent his walking direction toward me",
          "wordGroup": "group_378",
          "colorIndex": 0
        },
        {
          "id": 1456,
          "word": "bow",
          "partOfSpeech": "v./n.",
          "chinese": "鞠躬",
          "example": "He can't agree with her, but bowed to her greater experience and knowledge",
          "wordGroup": "group_378",
          "colorIndex": 0
        }
      ]
    ]
  },
  {
    "title": "物品材料",
    "groups": [
      [
        {
          "id": 1457,
          "word": "stuff",
          "partOfSpeech": "n.",
          "chinese": "东西；原料",
          "example": "I've got quite a lot of stuff to read",
          "wordGroup": "group_378",
          "colorIndex": 0
        },
        {
          "id": 1458,
          "word": "item",
          "partOfSpeech": "n.",
          "chinese": "一件物品；一件商品",
          "example": "She couldn't wedge another item into the suitcase",
          "wordGroup": "group_378",
          "colorIndex": 0
        },
        {
          "id": 1459,
          "word": "merchandise",
          "partOfSpeech": "n.",
          "chinese": "商品",
          "example": "We often call these goods merchandise",
          "wordGroup": "group_378",
          "colorIndex": 0
        },
        {
          "id": 1460,
          "word": "souvenir",
          "partOfSpeech": "n.",
          "chinese": "纪念品",
          "example": "These souvenirs were gathered from all parts of the world",
          "wordGroup": "group_378",
          "colorIndex": 0
        },
        {
          "id": 1461,
          "word": "artifact/artefact",
          "partOfSpeech": "n.",
          "chinese": "人造物品；手工艺品",
          "example": "Software is a cultural artifact of the modern world",
          "wordGroup": "group_378",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1462,
          "word": "material",
          "partOfSpeech": "n./adj.",
          "chinese": "材料；原料；人才；物质的",
          "example": "There is singer material among these young girls",
          "wordGroup": "group_379",
          "colorIndex": 1
        },
        {
          "id": 1463,
          "word": "raw",
          "partOfSpeech": "adj.",
          "chinese": "天然的；未经加工的；（感情）原始的",
          "example": "Today the main resources of raw cotton are China and India",
          "wordGroup": "group_379",
          "colorIndex": 1
        },
        {
          "id": 1464,
          "word": "crude",
          "partOfSpeech": "adj.",
          "chinese": "天然的；未经加工的；粗糙的",
          "example": "The price of crude oil has come down recently",
          "wordGroup": "group_379",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1465,
          "word": "necessity",
          "partOfSpeech": "n.",
          "chinese": "必需品；必要",
          "example": "Water is a necessity of life",
          "wordGroup": "group_380",
          "colorIndex": 2
        },
        {
          "id": 1466,
          "word": "outfit",
          "partOfSpeech": "adj./n.",
          "chinese": "全套服装；全套装备；配备；装备",
          "example": "The football team were wearing orange outfits",
          "wordGroup": "group_380",
          "colorIndex": 2
        },
        {
          "id": 1467,
          "word": "kit",
          "partOfSpeech": "n.",
          "chinese": "成套工具",
          "example": "There is a repair kit provided in the boot of each car",
          "wordGroup": "group_380",
          "colorIndex": 2
        },
        {
          "id": 1468,
          "word": "utensil",
          "partOfSpeech": "n.",
          "chinese": "（家庭）用具；器皿",
          "example": "He took a camping utensil that can serve as a knife, fork, and spoon to school",
          "wordGroup": "group_380",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1469,
          "word": "garbage",
          "partOfSpeech": "n.",
          "chinese": "（尤美）垃圾；废物",
          "example": "They fouled the water by throwing in garbage",
          "wordGroup": "group_381",
          "colorIndex": 3
        },
        {
          "id": 1470,
          "word": "rubbish",
          "partOfSpeech": "n.",
          "chinese": "（尤英）垃圾；废弃物；废话",
          "example": "The dustman comes once a week to collect the rubbish",
          "wordGroup": "group_381",
          "colorIndex": 3
        },
        {
          "id": 1471,
          "word": "trash",
          "partOfSpeech": "n.",
          "chinese": "（美）垃圾",
          "example": "Trash can do a great demage to the environment",
          "wordGroup": "group_381",
          "colorIndex": 3
        },
        {
          "id": 1472,
          "word": "recycle",
          "partOfSpeech": "v.",
          "chinese": "使再循环；回收利用",
          "example": "I plan on recycling old warehouses as condominiums",
          "wordGroup": "group_381",
          "colorIndex": 3
        },
        {
          "id": 1473,
          "word": "reuse",
          "partOfSpeech": "v.",
          "chinese": "再次使用",
          "example": "These bottles are designed to be reused up to twenty times",
          "wordGroup": "group_381",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1474,
          "word": "litter",
          "partOfSpeech": "n./v.",
          "chinese": "垃圾；废弃物；乱丢东西",
          "example": "Litter covered the cinema floor after the film",
          "wordGroup": "group_382",
          "colorIndex": 4
        },
        {
          "id": 1475,
          "word": "waste",
          "partOfSpeech": "n./v.",
          "chinese": "废物；浪费",
          "example": "It's a waste of time to speak to her",
          "wordGroup": "group_382",
          "colorIndex": 4
        },
        {
          "id": 1476,
          "word": "junk",
          "partOfSpeech": "n.",
          "chinese": "无用的东西；废物",
          "example": "What about junk food?",
          "wordGroup": "group_382",
          "colorIndex": 4
        },
        {
          "id": 1477,
          "word": "landfill",
          "partOfSpeech": "n.",
          "chinese": "垃圾填埋地；垃圾填埋",
          "example": "Americans send more than 30 million tons of food to the landfill every year",
          "wordGroup": "group_382",
          "colorIndex": 4
        },
        {
          "id": 1478,
          "word": "sewerage",
          "partOfSpeech": "n.",
          "chinese": "排水系统；污水处理系统；（=sewage）污水",
          "example": "Our town has a modern sewerage system",
          "wordGroup": "group_382",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1479,
          "word": "detergent",
          "partOfSpeech": "n.",
          "chinese": "洗涤剂",
          "example": "He recommended a new detergent to me",
          "wordGroup": "group_383",
          "colorIndex": 5
        },
        {
          "id": 1480,
          "word": "lotion",
          "partOfSpeech": "n.",
          "chinese": "洁肤乳；润肤乳",
          "example": "This lotion helps brighten and smooth your skin",
          "wordGroup": "group_383",
          "colorIndex": 5
        },
        {
          "id": 1481,
          "word": "shampoo",
          "partOfSpeech": "v./n.",
          "chinese": "用洗发剂（头发）；洗发剂",
          "example": "She weted her hair and then put shampoo on it",
          "wordGroup": "group_383",
          "colorIndex": 5
        },
        {
          "id": 1482,
          "word": "soap",
          "partOfSpeech": "n./v.",
          "chinese": "肥皂；用肥皂擦洗",
          "example": "Don't touch anything before you soap your hands",
          "wordGroup": "group_383",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1483,
          "word": "tub",
          "partOfSpeech": "n.",
          "chinese": "桶；盆；（美）鱼缸；浴盆",
          "example": "She comforted her husband by putting his feet in a tub of hot water",
          "wordGroup": "group_384",
          "colorIndex": 0
        },
        {
          "id": 1484,
          "word": "plug",
          "partOfSpeech": "n./v.",
          "chinese": "塞子；插头；把...塞住",
          "example": "You don't need to plug your ears since the music is not so loud",
          "wordGroup": "group_384",
          "colorIndex": 0
        },
        {
          "id": 1485,
          "word": "tap",
          "partOfSpeech": "n.",
          "chinese": "旋塞；龙头",
          "example": "He rigged a rubber hose to tap in kitchen",
          "wordGroup": "group_384",
          "colorIndex": 0
        },
        {
          "id": 1486,
          "word": "pipe",
          "partOfSpeech": "n.",
          "chinese": "管子；管道；烟斗",
          "example": "All through the afternoon and the evening, he went on thinking silently and smoking pipe after pipe",
          "wordGroup": "group_384",
          "colorIndex": 0
        },
        {
          "id": 1487,
          "word": "tube",
          "partOfSpeech": "n.",
          "chinese": "管；显像管；（英国/伦敦）地铁",
          "example": "She passed me a tube of toothpaste",
          "wordGroup": "group_384",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1488,
          "word": "mop",
          "partOfSpeech": "n./v.",
          "chinese": "拖把；用拖把擦",
          "example": "She mopped up the water",
          "wordGroup": "group_385",
          "colorIndex": 1
        },
        {
          "id": 1489,
          "word": "broom",
          "partOfSpeech": "n./v.",
          "chinese": "扫帚；用扫帚扫",
          "example": "She used a broom to sweep up the scraps of paper",
          "wordGroup": "group_385",
          "colorIndex": 1
        },
        {
          "id": 1490,
          "word": "sweep",
          "partOfSpeech": "v.",
          "chinese": "打扫；（迅猛的）吹走；掠过",
          "example": "I saw the tops of trees moving in circles and pieces of wood were swept up into the air",
          "wordGroup": "group_385",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1491,
          "word": "mattress",
          "partOfSpeech": "n.",
          "chinese": "床垫",
          "example": "A mattress is filled with feathers, cotton, or straw",
          "wordGroup": "group_386",
          "colorIndex": 2
        },
        {
          "id": 1492,
          "word": "carpet",
          "partOfSpeech": "n.",
          "chinese": "地毯",
          "example": "The armchair blends well with the color of the carpet",
          "wordGroup": "group_386",
          "colorIndex": 2
        },
        {
          "id": 1493,
          "word": "rug",
          "partOfSpeech": "n.",
          "chinese": "小地毯；（盖肩或腿的）小毛毯",
          "example": "He bargained with the merchant for an hour before he bought the rug",
          "wordGroup": "group_386",
          "colorIndex": 2
        },
        {
          "id": 1494,
          "word": "mat",
          "partOfSpeech": "n.",
          "chinese": "地垫",
          "example": "I wiped my shoes on the mat before I came in",
          "wordGroup": "group_386",
          "colorIndex": 2
        },
        {
          "id": 1495,
          "word": "cushion",
          "partOfSpeech": "n.",
          "chinese": "软垫",
          "example": "She plumps up the sofa cushion 她把沙发垫拍得鼓鼓的",
          "wordGroup": "group_386",
          "colorIndex": 2
        },
        {
          "id": 1496,
          "word": "pad",
          "partOfSpeech": "n./v.",
          "chinese": "衬垫；便签本；（用软材料）填塞",
          "example": "She always kept a pad and a pencil by the phone",
          "wordGroup": "group_386",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1497,
          "word": "blanket",
          "partOfSpeech": "n.",
          "chinese": "毛毯；毯子",
          "example": "She huddled herself in the blanket",
          "wordGroup": "group_387",
          "colorIndex": 3
        },
        {
          "id": 1498,
          "word": "quilt",
          "partOfSpeech": "n.",
          "chinese": "被子",
          "example": "If you air your quilt on such a wet day, it'll soak up the moisture",
          "wordGroup": "group_387",
          "colorIndex": 3
        },
        {
          "id": 1499,
          "word": "sheet",
          "partOfSpeech": "n.",
          "chinese": "被单；床单；一张（纸）；薄板",
          "example": "We changed the sheet every week",
          "wordGroup": "group_387",
          "colorIndex": 3
        },
        {
          "id": 1500,
          "word": "pillow",
          "partOfSpeech": "n.",
          "chinese": "枕头",
          "example": "My daughter asked me to buy her a pillow stuffed with feathers",
          "wordGroup": "group_387",
          "colorIndex": 3
        },
        {
          "id": 1501,
          "word": "sponge",
          "partOfSpeech": "n.",
          "chinese": "海绵",
          "example": "That child soaks up new facts like a sponge",
          "wordGroup": "group_387",
          "colorIndex": 3
        },
        {
          "id": 1502,
          "word": "towel",
          "partOfSpeech": "n.",
          "chinese": "毛巾",
          "example": "I dry my hands and face with the towel",
          "wordGroup": "group_387",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1503,
          "word": "staple",
          "partOfSpeech": "n.",
          "chinese": "订书钉；主要部分",
          "example": "He used a pair of scissors to take the staple out of the document",
          "wordGroup": "group_388",
          "colorIndex": 4
        },
        {
          "id": 1504,
          "word": "nail",
          "partOfSpeech": "n./v.",
          "chinese": "指甲；钉子；（用钉子）钉住",
          "example": "Please hammer a nail into the wall",
          "wordGroup": "group_388",
          "colorIndex": 4
        },
        {
          "id": 1505,
          "word": "razor",
          "partOfSpeech": "n.",
          "chinese": "剃刀；（用剃刀）剃",
          "example": "He razored his face, clean off the beard",
          "wordGroup": "group_388",
          "colorIndex": 4
        },
        {
          "id": 1506,
          "word": "shave",
          "partOfSpeech": "v.",
          "chinese": "剃须；刮脸",
          "example": "I lathered my face and started to shave",
          "wordGroup": "group_388",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1507,
          "word": "fuse",
          "partOfSpeech": "n./v.",
          "chinese": "保险丝；导火线；（使）融化、融合",
          "example": "We fuse copper and tin to make bronze",
          "wordGroup": "group_389",
          "colorIndex": 5
        },
        {
          "id": 1508,
          "word": "cable",
          "partOfSpeech": "n.",
          "chinese": "电缆；缆绳；电报；有线电视",
          "example": "This country has almost 15 milliion subscribers to satellite and cable television",
          "wordGroup": "group_389",
          "colorIndex": 5
        },
        {
          "id": 1509,
          "word": "cord",
          "partOfSpeech": "n.",
          "chinese": "细绳；粗线；（体内的）线、索、带",
          "example": "Our voices depend on our vocal cords",
          "wordGroup": "group_389",
          "colorIndex": 5
        },
        {
          "id": 1510,
          "word": "strand",
          "partOfSpeech": "n.",
          "chinese": "缕，股；滨，岸",
          "example": "One strand of silk doesn't make a thread; One tree doesn't make a forest 单丝不成线，独木不成林",
          "wordGroup": "group_389",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1511,
          "word": "match",
          "partOfSpeech": "n./v.",
          "chinese": "火柴；比赛；匹配的人或物；与...匹配",
          "example": "A high standard of play marked the match between the two teams",
          "wordGroup": "group_390",
          "colorIndex": 0
        },
        {
          "id": 1512,
          "word": "candle",
          "partOfSpeech": "n.",
          "chinese": "蜡烛",
          "example": "The candle was blown out by the wind",
          "wordGroup": "group_390",
          "colorIndex": 0
        },
        {
          "id": 1513,
          "word": "wax",
          "partOfSpeech": "n.",
          "chinese": "蜡；蜂蜡",
          "example": "The candle gutters when the melted wax runs down its sides",
          "wordGroup": "group_390",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1514,
          "word": "portfolio",
          "partOfSpeech": "n.",
          "chinese": "文件夹；公事包",
          "example": "She has left her portfolio in a chair",
          "wordGroup": "group_391",
          "colorIndex": 1
        },
        {
          "id": 1515,
          "word": "paperback",
          "partOfSpeech": "n.",
          "chinese": "简装书；平装书",
          "example": "This bookshop only sells paperbacks",
          "wordGroup": "group_391",
          "colorIndex": 1
        },
        {
          "id": 1516,
          "word": "pamphlet",
          "partOfSpeech": "n.",
          "chinese": "小册子",
          "example": "I took a few pamphlets from the travel agency",
          "wordGroup": "group_391",
          "colorIndex": 1
        },
        {
          "id": 1517,
          "word": "tissue",
          "partOfSpeech": "n.",
          "chinese": "面巾纸；（器官）组织",
          "example": "She wipes off the sweat from her face with a tissue",
          "wordGroup": "group_391",
          "colorIndex": 1
        },
        {
          "id": 1518,
          "word": "cover",
          "partOfSpeech": "n.",
          "chinese": "封面；盖子；套子",
          "example": "The front cover of the novel has been torn off",
          "wordGroup": "group_391",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1519,
          "word": "Xerox",
          "partOfSpeech": "n.",
          "chinese": "施乐复印机",
          "example": "He kept the original copy and gave her only a Xerox",
          "wordGroup": "group_392",
          "colorIndex": 2
        },
        {
          "id": 1520,
          "word": "duplicate",
          "partOfSpeech": "v./n.",
          "chinese": "重复；副本；复制品",
          "example": "Don't duplicate what you have already done",
          "wordGroup": "group_392",
          "colorIndex": 2
        },
        {
          "id": 1521,
          "word": "memorandum",
          "partOfSpeech": "n.",
          "chinese": "备忘录；建议书；=memo",
          "example": "They agreed on the memorandum",
          "wordGroup": "group_392",
          "colorIndex": 2
        },
        {
          "id": 1522,
          "word": "stationery",
          "partOfSpeech": "n.",
          "chinese": "文具；信纸",
          "example": "Stationery can be imprinted with your message or logo",
          "wordGroup": "group_392",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1523,
          "word": "glue",
          "partOfSpeech": "n.",
          "chinese": "胶水",
          "example": "Stick them on the card using a small amount of glue",
          "wordGroup": "group_393",
          "colorIndex": 3
        },
        {
          "id": 1524,
          "word": "ink",
          "partOfSpeech": "n.",
          "chinese": "墨水",
          "example": "If the ink sinks in, it would be hard to remove it",
          "wordGroup": "group_393",
          "colorIndex": 3
        },
        {
          "id": 1525,
          "word": "rubber",
          "partOfSpeech": "n.",
          "chinese": "（英）橡皮擦；橡胶",
          "example": "Rubber is the country's principal export",
          "wordGroup": "group_393",
          "colorIndex": 3
        },
        {
          "id": 1526,
          "word": "scissors",
          "partOfSpeech": "n.",
          "chinese": "剪刀",
          "example": "It is rumored that Leonardo da Vinci invented the scissors",
          "wordGroup": "group_393",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1527,
          "word": "shear",
          "partOfSpeech": "n./v.",
          "chinese": "shears（尤指修篱笆用的）大剪刀；剪",
          "example": "With a few quick snips of the shears, he pruned the bush",
          "wordGroup": "group_394",
          "colorIndex": 4
        },
        {
          "id": 1528,
          "word": "edge",
          "partOfSpeech": "n.",
          "chinese": "边；边缘；刀口",
          "example": "Look out! You could fall off the edge here",
          "wordGroup": "group_394",
          "colorIndex": 4
        },
        {
          "id": 1529,
          "word": "rim",
          "partOfSpeech": "n.",
          "chinese": "（圆形物品的）外缘、边缘",
          "example": "Mike liked very much the golden rims of his glasses",
          "wordGroup": "group_394",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1530,
          "word": "element",
          "partOfSpeech": "n.",
          "chinese": "元素；组成部分；基本部分",
          "example": "Both hydrogen and oxygen are elements",
          "wordGroup": "group_395",
          "colorIndex": 5
        },
        {
          "id": 1531,
          "word": "factor",
          "partOfSpeech": "n.",
          "chinese": "因素；要素",
          "example": "Her friendly manner is an important factor in her rapid success",
          "wordGroup": "group_395",
          "colorIndex": 5
        },
        {
          "id": 1532,
          "word": "section",
          "partOfSpeech": "n.",
          "chinese": "部分；章；节",
          "example": "One section of the class is reading and the other is writing",
          "wordGroup": "group_395",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1533,
          "word": "tag",
          "partOfSpeech": "n.",
          "chinese": "标签；称号",
          "example": "Don't forget to put tags with your name and address on your suitcases",
          "wordGroup": "group_396",
          "colorIndex": 0
        },
        {
          "id": 1534,
          "word": "label",
          "partOfSpeech": "n.",
          "chinese": "标签；标贴",
          "example": "I read the information on the labels before deciding which jam to buy",
          "wordGroup": "group_396",
          "colorIndex": 0
        },
        {
          "id": 1535,
          "word": "badge",
          "partOfSpeech": "n.",
          "chinese": "徽章；证章；标志；象征",
          "example": "Wisdom is the badge of maturity",
          "wordGroup": "group_396",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1536,
          "word": "bolt",
          "partOfSpeech": "n./v.",
          "chinese": "螺栓；插销；闩上（门、窗）",
          "example": "We need an eye bold to fit this valve",
          "wordGroup": "group_397",
          "colorIndex": 1
        },
        {
          "id": 1537,
          "word": "knob",
          "partOfSpeech": "n.",
          "chinese": "球形把手；旋钮",
          "example": "He twisted the knob of the door and went inside",
          "wordGroup": "group_397",
          "colorIndex": 1
        },
        {
          "id": 1538,
          "word": "handle",
          "partOfSpeech": "n./v.",
          "chinese": "柄；把手；拿；处理",
          "example": "You have to press on the handle to turn it. It's very stiff",
          "wordGroup": "group_397",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1539,
          "word": "shutter",
          "partOfSpeech": "n./v.",
          "chinese": "百叶窗；快门；停止（营业）",
          "example": "The company shuttered its Hong Kong investment banking business a year ago",
          "wordGroup": "group_398",
          "colorIndex": 2
        },
        {
          "id": 1540,
          "word": "curtain",
          "partOfSpeech": "n./v.",
          "chinese": "窗帘；幕布；给...装上帘子",
          "example": "I have enough material to curtain all the windows",
          "wordGroup": "group_398",
          "colorIndex": 2
        },
        {
          "id": 1541,
          "word": "pane",
          "partOfSpeech": "n.",
          "chinese": "（一块）玻璃窗",
          "example": "He suffered a lot of pain after he accidentally broke a pane of glass",
          "wordGroup": "group_398",
          "colorIndex": 2
        },
        {
          "id": 1542,
          "word": "opacity",
          "partOfSpeech": "n.",
          "chinese": "不透明性",
          "example": "They have chosen the frosted glass owing to its opacity",
          "wordGroup": "group_398",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1543,
          "word": "jar",
          "partOfSpeech": "n.",
          "chinese": "罐；广口瓶；猛烈震动",
          "example": "I can't get the lid off this jar",
          "wordGroup": "group_399",
          "colorIndex": 3
        },
        {
          "id": 1544,
          "word": "barrel",
          "partOfSpeech": "n.",
          "chinese": "桶",
          "example": "The wine is aged in oak barrels",
          "wordGroup": "group_399",
          "colorIndex": 3
        },
        {
          "id": 1545,
          "word": "bucket",
          "partOfSpeech": "n.",
          "chinese": "（有提手的）桶",
          "example": "One bucket of paint will be enough for the ceiling",
          "wordGroup": "group_399",
          "colorIndex": 3
        },
        {
          "id": 1546,
          "word": "pail",
          "partOfSpeech": "n.",
          "chinese": "（尤美-通常是金属或者木质的）桶；提桶",
          "example": "He tipped the slops out of the pail",
          "wordGroup": "group_399",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1547,
          "word": "phone",
          "partOfSpeech": "n.",
          "chinese": "电话",
          "example": "We swapped phone numbers",
          "wordGroup": "group_400",
          "colorIndex": 4
        },
        {
          "id": 1548,
          "word": "bell",
          "partOfSpeech": "n.",
          "chinese": "钟，铃",
          "example": "I was roused by the sound of the bell this morning",
          "wordGroup": "group_400",
          "colorIndex": 4
        },
        {
          "id": 1549,
          "word": "camera",
          "partOfSpeech": "n.",
          "chinese": "照相机",
          "example": "You'd better declare the camera to the official",
          "wordGroup": "group_400",
          "colorIndex": 4
        },
        {
          "id": 1550,
          "word": "portable",
          "partOfSpeech": "adj.",
          "chinese": "手提式的；便携的",
          "example": "The new portale computers are selling like hot cakes",
          "wordGroup": "group_400",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1551,
          "word": "spotlight",
          "partOfSpeech": "n.",
          "chinese": "聚光灯",
          "example": "The spotlight followed the dancer around the stage",
          "wordGroup": "group_401",
          "colorIndex": 5
        },
        {
          "id": 1552,
          "word": "lantern",
          "partOfSpeech": "n.",
          "chinese": "提灯；灯笼",
          "example": "The ice lantern festival, held in Harbin every winter, is fantastic",
          "wordGroup": "group_401",
          "colorIndex": 5
        },
        {
          "id": 1553,
          "word": "bulb",
          "partOfSpeech": "n.",
          "chinese": "电灯泡；球茎；球茎状物",
          "example": "An efficient bulb may lighten the load of power stations",
          "wordGroup": "group_401",
          "colorIndex": 5
        },
        {
          "id": 1554,
          "word": "flashlight",
          "partOfSpeech": "n.",
          "chinese": "闪光灯的闪光；手电筒",
          "example": "You can use the flashlight when you take a photo indoors",
          "wordGroup": "group_401",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1555,
          "word": "refrigerator",
          "partOfSpeech": "n.",
          "chinese": "冰箱",
          "example": "My refrigerator suddenly broke down yesterday evening",
          "wordGroup": "group_402",
          "colorIndex": 0
        },
        {
          "id": 1556,
          "word": "fridge",
          "partOfSpeech": "n.",
          "chinese": "冰箱",
          "example": "The butter will soften out of the fridge",
          "wordGroup": "group_402",
          "colorIndex": 0
        },
        {
          "id": 1557,
          "word": "vacuum",
          "partOfSpeech": "n./adj.",
          "chinese": "真空；真空吸尘器；真空的",
          "example": "The food is kept in a vacuum pack",
          "wordGroup": "group_402",
          "colorIndex": 0
        },
        {
          "id": 1558,
          "word": "fan",
          "partOfSpeech": "n./v.",
          "chinese": "扇子；风扇；狂热爱好者；扇",
          "example": "He has charmed most of them into membership of his fan club",
          "wordGroup": "group_402",
          "colorIndex": 0
        },
        {
          "id": 1559,
          "word": "switch",
          "partOfSpeech": "n./v.",
          "chinese": "开关；转换；",
          "example": "Press the switch to see if the light comes on",
          "wordGroup": "group_402",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1560,
          "word": "hurdle",
          "partOfSpeech": "n.",
          "chinese": "栏架；跨栏赛跑",
          "example": "With her speed and agility, she can beat all her competitors in the hurdle race",
          "wordGroup": "group_403",
          "colorIndex": 1
        },
        {
          "id": 1561,
          "word": "fence",
          "partOfSpeech": "n.",
          "chinese": "栅栏；围栏",
          "example": "That fence is the limit of the schoolyard",
          "wordGroup": "group_403",
          "colorIndex": 1
        },
        {
          "id": 1562,
          "word": "pedal",
          "partOfSpeech": "n./v.",
          "chinese": "踏板；踩踏板",
          "example": "One of the pedals has come off my bicycle",
          "wordGroup": "group_403",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1563,
          "word": "shelf",
          "partOfSpeech": "n.",
          "chinese": "架子；隔板",
          "example": "The shelf is too weak to hold all those books",
          "wordGroup": "group_404",
          "colorIndex": 2
        },
        {
          "id": 1564,
          "word": "ladder",
          "partOfSpeech": "n.",
          "chinese": "梯子；阶梯",
          "example": "Diligence is often a ladder to success",
          "wordGroup": "group_404",
          "colorIndex": 2
        },
        {
          "id": 1565,
          "word": "lift",
          "partOfSpeech": "v./n.",
          "chinese": "提；抬；提高；（英）电梯（美 elevator）",
          "example": "This box is too heavy for me to lift",
          "wordGroup": "group_404",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1566,
          "word": "stool",
          "partOfSpeech": "n.",
          "chinese": "凳子",
          "example": "Because of that stool and a pair of computers, I gained a best friend",
          "wordGroup": "group_405",
          "colorIndex": 3
        },
        {
          "id": 1567,
          "word": "drawer",
          "partOfSpeech": "n.",
          "chinese": "抽屉",
          "example": "The keys are in the back left hand corner of the drawer",
          "wordGroup": "group_405",
          "colorIndex": 3
        },
        {
          "id": 1568,
          "word": "umbrella",
          "partOfSpeech": "n.",
          "chinese": "伞",
          "example": "The wind blew my umbrella inside out",
          "wordGroup": "group_405",
          "colorIndex": 3
        },
        {
          "id": 1569,
          "word": "raincoat",
          "partOfSpeech": "n.",
          "chinese": "雨衣",
          "example": "He had no raincoat on when the rain started",
          "wordGroup": "group_405",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1570,
          "word": "dredge",
          "partOfSpeech": "n./v.",
          "chinese": "挖泥船；挖掘机/挖掘；撒（糖；面粉等）",
          "example": "She dredged a little sugar over the cake",
          "wordGroup": "group_406",
          "colorIndex": 4
        },
        {
          "id": 1571,
          "word": "can",
          "partOfSpeech": "v./n.",
          "chinese": "把（食品）罐装保存；罐头；听",
          "example": "She was carrying an armful of cat food cans and talking to herself",
          "wordGroup": "group_406",
          "colorIndex": 4
        },
        {
          "id": 1572,
          "word": "mill",
          "partOfSpeech": "n./v.",
          "chinese": "磨粉机；磨坊/碾碎；无目的地乱转",
          "example": "Corn is ground into flour in a mill",
          "wordGroup": "group_406",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1573,
          "word": "forge",
          "partOfSpeech": "n./v.",
          "chinese": "炼铁炉；锻造；伪造",
          "example": "These machine parts have been forged with the finest steel",
          "wordGroup": "group_407",
          "colorIndex": 5
        },
        {
          "id": 1574,
          "word": "alloy",
          "partOfSpeech": "n.",
          "chinese": "合金；（金属的）成色",
          "example": "Brass is an alloy of copper and zinc",
          "wordGroup": "group_407",
          "colorIndex": 5
        },
        {
          "id": 1575,
          "word": "metal",
          "partOfSpeech": "n.",
          "chinese": "金属",
          "example": "A gust of wind pried loose a section of sheet metal roofing",
          "wordGroup": "group_407",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1576,
          "word": "iron",
          "partOfSpeech": "n./v.",
          "chinese": "铁；熨斗；熨；烫",
          "example": "They analyzed the ore and found iron in it",
          "wordGroup": "group_408",
          "colorIndex": 0
        },
        {
          "id": 1577,
          "word": "lead",
          "partOfSpeech": "n.",
          "chinese": "铅",
          "example": "Lead is one of the softer metals",
          "wordGroup": "group_408",
          "colorIndex": 0
        },
        {
          "id": 1578,
          "word": "brass",
          "partOfSpeech": "n.",
          "chinese": "黄铜；黄铜制品",
          "example": "Brass is formed by the fusion of copper and zinc",
          "wordGroup": "group_408",
          "colorIndex": 0
        },
        {
          "id": 1579,
          "word": "bronze",
          "partOfSpeech": "n.",
          "chinese": "青铜；青铜艺术品",
          "example": "We fuse copper and tin to make bronze",
          "wordGroup": "group_408",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1580,
          "word": "cement",
          "partOfSpeech": "n./v.",
          "chinese": "水泥；胶结剂；使黏结",
          "example": "The mixed cement has been hoisted up the building",
          "wordGroup": "group_409",
          "colorIndex": 1
        },
        {
          "id": 1581,
          "word": "pitch",
          "partOfSpeech": "n.",
          "chinese": "沥青",
          "example": "They used pitch to cover roofs",
          "wordGroup": "group_409",
          "colorIndex": 1
        },
        {
          "id": 1582,
          "word": "lime",
          "partOfSpeech": "n.",
          "chinese": "石灰",
          "example": "Lime in the soil is detrimental to some plants",
          "wordGroup": "group_409",
          "colorIndex": 1
        },
        {
          "id": 1583,
          "word": "plaster",
          "partOfSpeech": "n.",
          "chinese": "灰泥；熟石膏",
          "example": "The plaster had started to come away from the wall",
          "wordGroup": "group_409",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1584,
          "word": "leather",
          "partOfSpeech": "n.",
          "chinese": "皮革；皮衣",
          "example": "Wax polish preserves wood and leather",
          "wordGroup": "group_410",
          "colorIndex": 2
        },
        {
          "id": 1585,
          "word": "plastic",
          "partOfSpeech": "n./adj.",
          "chinese": "塑料；有塑性的；塑料的",
          "example": "Many items in daily use are made out of plastic",
          "wordGroup": "group_410",
          "colorIndex": 2
        },
        {
          "id": 1586,
          "word": "fiber/fibre",
          "partOfSpeech": "n.",
          "chinese": "纤维；纤维素",
          "example": "Scientists are recommending that people eat more fiber",
          "wordGroup": "group_410",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1587,
          "word": "fabric",
          "partOfSpeech": "n.",
          "chinese": "织物；布料",
          "example": "The jacket is comfortable because the fabric breathes",
          "wordGroup": "group_411",
          "colorIndex": 3
        },
        {
          "id": 1588,
          "word": "knit",
          "partOfSpeech": "v.",
          "chinese": "编织；针织",
          "example": "My grandmother knited me some socks",
          "wordGroup": "group_411",
          "colorIndex": 3
        },
        {
          "id": 1589,
          "word": "weave",
          "partOfSpeech": "v.",
          "chinese": "编织；编造",
          "example": "We're weaving garlands of flowers for heros",
          "wordGroup": "group_411",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1590,
          "word": "canvas",
          "partOfSpeech": "n.",
          "chinese": "帆布；油画布",
          "example": "They carried canvas sacks over their shoulders",
          "wordGroup": "group_412",
          "colorIndex": 4
        },
        {
          "id": 1591,
          "word": "linen",
          "partOfSpeech": "n.",
          "chinese": "亚麻布；亚麻织品",
          "example": "Low elasticity, imparting a hard and smooth texture, makes linen subject to wrinkling",
          "wordGroup": "group_412",
          "colorIndex": 4
        },
        {
          "id": 1592,
          "word": "cotton",
          "partOfSpeech": "n.",
          "chinese": "棉；棉线；棉布",
          "example": "The cotton has been picked and weighed up",
          "wordGroup": "group_412",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1593,
          "word": "nylon",
          "partOfSpeech": "n.",
          "chinese": "尼龙",
          "example": "This dress is eighty percent nylon",
          "wordGroup": "group_413",
          "colorIndex": 5
        },
        {
          "id": 1594,
          "word": "lumber",
          "partOfSpeech": "n.",
          "chinese": "木材；木料",
          "example": "Forested areas have been expanding every year, with the amount of increase in standing timber greater than that of the felled lumber",
          "wordGroup": "group_413",
          "colorIndex": 5
        },
        {
          "id": 1595,
          "word": "wooden",
          "partOfSpeech": "adj.",
          "chinese": "木制的；呆板的",
          "example": "There is a wooden porch over the sidewalk",
          "wordGroup": "group_413",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1596,
          "word": "mine",
          "partOfSpeech": "n.",
          "chinese": "矿场；矿井；地雷",
          "example": "The mine was closed owing to exhaustion",
          "wordGroup": "group_414",
          "colorIndex": 0
        },
        {
          "id": 1597,
          "word": "pit",
          "partOfSpeech": "n.",
          "chinese": "深坑；煤矿；潜在危险",
          "example": "When you fall into a pit, you either die or get out",
          "wordGroup": "group_414",
          "colorIndex": 0
        },
        {
          "id": 1598,
          "word": "fuel",
          "partOfSpeech": "n./v.",
          "chinese": "燃料；给...加燃料",
          "example": "We aim for a ten percent saving in fuel",
          "wordGroup": "group_414",
          "colorIndex": 0
        },
        {
          "id": 1599,
          "word": "lubricate",
          "partOfSpeech": "v.",
          "chinese": "润滑；加润滑油于",
          "example": "We find it necessary to lubricate machines",
          "wordGroup": "group_414",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1600,
          "word": "diamond",
          "partOfSpeech": "n.",
          "chinese": "金刚石；钻石；菱形",
          "example": "The diamond ring on her finger glittered in the light",
          "wordGroup": "group_415",
          "colorIndex": 1
        },
        {
          "id": 1601,
          "word": "crystal",
          "partOfSpeech": "n.",
          "chinese": "水晶；结晶；晶体",
          "example": "People imitate diamond with crystal",
          "wordGroup": "group_415",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1602,
          "word": "inferior",
          "partOfSpeech": "adj./n.",
          "chinese": "差的；下级的；低等的；级别/地位低的人；次品",
          "example": "I grudge paying so much for such inferior goods",
          "wordGroup": "group_416",
          "colorIndex": 2
        },
        {
          "id": 1603,
          "word": "counterfeit",
          "partOfSpeech": "adj./v.",
          "chinese": "假冒的；伪造",
          "example": "It is against the law to counterfeit money",
          "wordGroup": "group_416",
          "colorIndex": 2
        },
        {
          "id": 1604,
          "word": "fake",
          "partOfSpeech": "adj./n.",
          "chinese": "假冒的；冒充者；假货",
          "example": "On closer examination, the painting was proved to be a fake",
          "wordGroup": "group_416",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1605,
          "word": "fragile",
          "partOfSpeech": "adj.",
          "chinese": "易碎的；脆弱的",
          "example": "Glass is fragile and must be handled with great care",
          "wordGroup": "group_417",
          "colorIndex": 3
        },
        {
          "id": 1606,
          "word": "miniature",
          "partOfSpeech": "adj./n.",
          "chinese": "微型的；很小的/微缩模型；微型画",
          "example": "The locket contained a miniature portrait of her late husband",
          "wordGroup": "group_417",
          "colorIndex": 3
        },
        {
          "id": 1607,
          "word": "available",
          "partOfSpeech": "adj.",
          "chinese": "可获得的",
          "example": "Water and electric hookups are available and facilities are good",
          "wordGroup": "group_417",
          "colorIndex": 3
        },
        {
          "id": 1608,
          "word": "durable",
          "partOfSpeech": "adj.",
          "chinese": "耐用的；持久的",
          "example": "Some parts of the machine have to be made from durable materials",
          "wordGroup": "group_417",
          "colorIndex": 3
        }
      ]
    ]
  },
  {
    "title": "时尚潮流",
    "groups": [
      [
        {
          "id": 1609,
          "word": "fashion",
          "partOfSpeech": "n./v.",
          "chinese": "时尚；制作；制成",
          "example": "Loose trousers are the latest fashion",
          "wordGroup": "group_417",
          "colorIndex": 3
        },
        {
          "id": 1610,
          "word": "style",
          "partOfSpeech": "n.",
          "chinese": "风格；样式；时尚",
          "example": "The style of this skirt is just in season",
          "wordGroup": "group_417",
          "colorIndex": 3
        },
        {
          "id": 1611,
          "word": "trend",
          "partOfSpeech": "n.",
          "chinese": "趋势；倾向",
          "example": "The youth like to follow the latest trend in fashion",
          "wordGroup": "group_417",
          "colorIndex": 3
        },
        {
          "id": 1612,
          "word": "tendency",
          "partOfSpeech": "n.",
          "chinese": "趋势；倾向；偏好",
          "example": "There is a growing tendency for people to work at home instead of in offices",
          "wordGroup": "group_417",
          "colorIndex": 3
        },
        {
          "id": 1613,
          "word": "current",
          "partOfSpeech": "n./adj.",
          "chinese": "潮流；趋势；当前的",
          "example": "Newspapers influenced the current of thought",
          "wordGroup": "group_417",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1614,
          "word": "popularity",
          "partOfSpeech": "n.",
          "chinese": "流行",
          "example": "That record made the singer's popularity boom 那张唱片捧红了这位歌手",
          "wordGroup": "group_418",
          "colorIndex": 4
        },
        {
          "id": 1615,
          "word": "vogue",
          "partOfSpeech": "n.",
          "chinese": "流行",
          "example": "Long hair for men and high boots for ladies are no longer in vogue",
          "wordGroup": "group_418",
          "colorIndex": 4
        },
        {
          "id": 1616,
          "word": "prevail",
          "partOfSpeech": "v.",
          "chinese": "盛行；获胜",
          "example": "Truth will ultimately prevail",
          "wordGroup": "group_418",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1617,
          "word": "model",
          "partOfSpeech": "n./v.",
          "chinese": "模型；模特/使模仿",
          "example": "After a brief spell as a model, she got into singing",
          "wordGroup": "group_419",
          "colorIndex": 5
        },
        {
          "id": 1618,
          "word": "icon",
          "partOfSpeech": "n.",
          "chinese": "偶像；图标",
          "example": "That singer is one of the pop culture icons of 1980s",
          "wordGroup": "group_419",
          "colorIndex": 5
        },
        {
          "id": 1619,
          "word": "idol",
          "partOfSpeech": "n.",
          "chinese": "偶像；受到崇拜的人或物；神像",
          "example": "That football player is the idol of many young people",
          "wordGroup": "group_419",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1620,
          "word": "luxury",
          "partOfSpeech": "n.",
          "chinese": "奢侈；奢侈品",
          "example": "The increasing sales of luxuries are an indication of the country's prosperity",
          "wordGroup": "group_420",
          "colorIndex": 0
        },
        {
          "id": 1621,
          "word": "extravagant",
          "partOfSpeech": "adj.",
          "chinese": "奢侈的；过分的",
          "example": "She's very extravagant. She spends all her money on clothes",
          "wordGroup": "group_420",
          "colorIndex": 0
        },
        {
          "id": 1622,
          "word": "jewelry/jewellery",
          "partOfSpeech": "n.",
          "chinese": "珠宝；手势",
          "example": "The piece of jewelry is priceless",
          "wordGroup": "group_420",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1623,
          "word": "jewel",
          "partOfSpeech": "n.",
          "chinese": "宝石",
          "example": "That jewel has a beautiful shimmer",
          "wordGroup": "group_421",
          "colorIndex": 1
        },
        {
          "id": 1624,
          "word": "gem",
          "partOfSpeech": "n.",
          "chinese": "宝石；珍品",
          "example": "This picture is the gem of the collection",
          "wordGroup": "group_421",
          "colorIndex": 1
        },
        {
          "id": 1625,
          "word": "jade",
          "partOfSpeech": "n.",
          "chinese": "玉石；翡翠",
          "example": "I have a pair of jade bracelets",
          "wordGroup": "group_421",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1626,
          "word": "adorn",
          "partOfSpeech": "v.",
          "chinese": "装饰；装扮",
          "example": "She likes to adorn herself with jewels",
          "wordGroup": "group_422",
          "colorIndex": 2
        },
        {
          "id": 1627,
          "word": "ornament",
          "partOfSpeech": "n./v.",
          "chinese": "装饰品；装饰",
          "example": "Clearness ornaments profound thought 清晰性能为深刻的思想增辉",
          "wordGroup": "group_422",
          "colorIndex": 2
        },
        {
          "id": 1628,
          "word": "embellish",
          "partOfSpeech": "v.",
          "chinese": "修饰",
          "example": "The door of the old church was embellished with intricate carvings",
          "wordGroup": "group_422",
          "colorIndex": 2
        },
        {
          "id": 1629,
          "word": "embroider",
          "partOfSpeech": "v.",
          "chinese": "对（故事等）加以渲染；在...上刺绣",
          "example": "Her shirt is embroidered with roses",
          "wordGroup": "group_422",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1630,
          "word": "hairdressing",
          "partOfSpeech": "n.",
          "chinese": "美发；理发",
          "example": "She has spent much money and time on hairdressing",
          "wordGroup": "group_423",
          "colorIndex": 3
        },
        {
          "id": 1631,
          "word": "pigment",
          "partOfSpeech": "n.",
          "chinese": "色素；颜料",
          "example": "This pigment is a good and common food additive",
          "wordGroup": "group_423",
          "colorIndex": 3
        },
        {
          "id": 1632,
          "word": "dye",
          "partOfSpeech": "n.",
          "chinese": "染料；（染上的）颜色；染",
          "example": "My roommate has dyed her hair red. It looks so unnatural",
          "wordGroup": "group_423",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1633,
          "word": "masquerade",
          "partOfSpeech": "n./v.",
          "chinese": "化装舞会；化妆；假扮",
          "example": "She masqueraded as a shepherdess",
          "wordGroup": "group_424",
          "colorIndex": 4
        },
        {
          "id": 1634,
          "word": "veil",
          "partOfSpeech": "n.",
          "chinese": "面纱；遮蔽物",
          "example": "The bride's face was covered with a white veil",
          "wordGroup": "group_424",
          "colorIndex": 4
        },
        {
          "id": 1635,
          "word": "costume",
          "partOfSpeech": "n.",
          "chinese": "戏服；（某历史时期或某地的）服装",
          "example": "Her national costume showed which country she came from",
          "wordGroup": "group_424",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1636,
          "word": "fascinate",
          "partOfSpeech": "v.",
          "chinese": "迷住",
          "example": "This city fascinates him",
          "wordGroup": "group_425",
          "colorIndex": 5
        },
        {
          "id": 1637,
          "word": "decent",
          "partOfSpeech": "adj.",
          "chinese": "得体的；尚好的",
          "example": "He made a decent record 他成绩善佳",
          "wordGroup": "group_425",
          "colorIndex": 5
        },
        {
          "id": 1638,
          "word": "exquisite",
          "partOfSpeech": "adj.",
          "chinese": "精致的；雅致的",
          "example": "He has exquisite taste and decent manners",
          "wordGroup": "group_425",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1639,
          "word": "grace",
          "partOfSpeech": "n.",
          "chinese": "优美；优雅",
          "example": "She was a beautiful girl with the grace and poise of a natural model 她是一个美丽的女孩，天生有着模特的那种优雅仪态",
          "wordGroup": "group_426",
          "colorIndex": 0
        },
        {
          "id": 1640,
          "word": "elegance",
          "partOfSpeech": "n.",
          "chinese": "文雅；典雅",
          "example": "He is admired for the elegance of this writing",
          "wordGroup": "group_426",
          "colorIndex": 0
        },
        {
          "id": 1641,
          "word": "perfect",
          "partOfSpeech": "adj.",
          "chinese": "完美的",
          "example": "No one expect you to be perfect, but we do expect you to do your best always",
          "wordGroup": "group_426",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1642,
          "word": "appearance",
          "partOfSpeech": "n.",
          "chinese": "外貌；出现",
          "example": "Don't judge by appearances",
          "wordGroup": "group_427",
          "colorIndex": 1
        },
        {
          "id": 1643,
          "word": "cosmetics",
          "partOfSpeech": "n.",
          "chinese": "化妆品",
          "example": "We have many types of cosmetics for sale",
          "wordGroup": "group_427",
          "colorIndex": 1
        },
        {
          "id": 1644,
          "word": "make-up",
          "partOfSpeech": "n.",
          "chinese": "化妆品；组成成分；性格",
          "example": "I cannot tell who's who when the women take off their their make-up",
          "wordGroup": "group_427",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1645,
          "word": "handsome",
          "partOfSpeech": "adj.",
          "chinese": "数量大的；英俊的",
          "example": "The waitress received a handsome tip",
          "wordGroup": "group_428",
          "colorIndex": 2
        },
        {
          "id": 1646,
          "word": "charming",
          "partOfSpeech": "adj.",
          "chinese": "迷人的",
          "example": "Her colorful character makes her very charming",
          "wordGroup": "group_428",
          "colorIndex": 2
        },
        {
          "id": 1647,
          "word": "pretty",
          "partOfSpeech": "adj./adv.",
          "chinese": "漂亮的；相当地",
          "example": "All the pretty mowen wore their smartest dresses",
          "wordGroup": "group_428",
          "colorIndex": 2
        },
        {
          "id": 1648,
          "word": "beautiful",
          "partOfSpeech": "adj.",
          "chinese": "美丽的",
          "example": "Looking at a beautiful painting always gives one satisfaction",
          "wordGroup": "group_428",
          "colorIndex": 2
        },
        {
          "id": 1649,
          "word": "ugly",
          "partOfSpeech": "adj.",
          "chinese": "丑陋的",
          "example": "You can't persuade me to buy this ugly vase",
          "wordGroup": "group_428",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1650,
          "word": "dress",
          "partOfSpeech": "n.",
          "chinese": "衣服；连衣裙",
          "example": "She wears a beautiful evening dress",
          "wordGroup": "group_429",
          "colorIndex": 3
        },
        {
          "id": 1651,
          "word": "clothe",
          "partOfSpeech": "v.",
          "chinese": "给...穿衣；为...提供衣服",
          "example": "He had to work hard to feed and clothe the large family",
          "wordGroup": "group_429",
          "colorIndex": 3
        },
        {
          "id": 1652,
          "word": "uniform",
          "partOfSpeech": "n./adj.",
          "chinese": "制服；一致的",
          "example": "Do you have to wear uniform if you work at McDonald's?",
          "wordGroup": "group_429",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1653,
          "word": "garment",
          "partOfSpeech": "n.",
          "chinese": "（一件）衣服",
          "example": "This garment should be washed carefully",
          "wordGroup": "group_430",
          "colorIndex": 4
        },
        {
          "id": 1654,
          "word": "laundry",
          "partOfSpeech": "n.",
          "chinese": "洗衣店；要（或正在）洗的衣服；刚洗好的衣服",
          "example": "There's a lot of laundry in the basket",
          "wordGroup": "group_430",
          "colorIndex": 4
        },
        {
          "id": 1655,
          "word": "wardrobe",
          "partOfSpeech": "n.",
          "chinese": "衣柜；（某人的）全部服装",
          "example": "Can you hang this in the wardrobe please?",
          "wordGroup": "group_430",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1656,
          "word": "overall",
          "partOfSpeech": "n./adj.",
          "chinese": "（英）（工作时穿的）罩衣；全面的",
          "example": "The shop assistant was wearing a white overall",
          "wordGroup": "group_431",
          "colorIndex": 5
        },
        {
          "id": 1657,
          "word": "overcoat",
          "partOfSpeech": "n.",
          "chinese": "大衣",
          "example": "He turned his overcoat collar up",
          "wordGroup": "group_431",
          "colorIndex": 5
        },
        {
          "id": 1658,
          "word": "robe",
          "partOfSpeech": "n.",
          "chinese": "长袍；浴袍",
          "example": "She was simply dressed in a plain white robe",
          "wordGroup": "group_431",
          "colorIndex": 5
        },
        {
          "id": 1659,
          "word": "gown",
          "partOfSpeech": "n.",
          "chinese": "长外衣；女礼服",
          "example": "She put on her silk gown and went to the ball",
          "wordGroup": "group_431",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1660,
          "word": "sweater",
          "partOfSpeech": "n.",
          "chinese": "毛衣；线衣",
          "example": "This woolen sweater may keep you warm in winter",
          "wordGroup": "group_432",
          "colorIndex": 0
        },
        {
          "id": 1661,
          "word": "jacket",
          "partOfSpeech": "n.",
          "chinese": "夹克衫",
          "example": "He wore a pair of dark glasses and a jacket all day long",
          "wordGroup": "group_432",
          "colorIndex": 0
        },
        {
          "id": 1662,
          "word": "skirt",
          "partOfSpeech": "n.",
          "chinese": "裙子",
          "example": "How many skirts do you have?",
          "wordGroup": "group_432",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1663,
          "word": "jeans",
          "partOfSpeech": "n.",
          "chinese": "牛仔裤",
          "example": "Jeans are made of jean, dynim or other durable fabrics",
          "wordGroup": "group_433",
          "colorIndex": 1
        },
        {
          "id": 1664,
          "word": "trousers",
          "partOfSpeech": "n.",
          "chinese": "（尤英）裤子",
          "example": "This pair of trousers is too tight for me",
          "wordGroup": "group_433",
          "colorIndex": 1
        },
        {
          "id": 1665,
          "word": "clasp",
          "partOfSpeech": "n./v.",
          "chinese": "搭扣；扣住",
          "example": "The button won't clasp 纽扣扣不上",
          "wordGroup": "group_433",
          "colorIndex": 1
        },
        {
          "id": 1666,
          "word": "button",
          "partOfSpeech": "n./v.",
          "chinese": "纽扣；按钮；扣上...的纽扣",
          "example": "One of the buttons has come off my coat",
          "wordGroup": "group_433",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1667,
          "word": "glove",
          "partOfSpeech": "n.",
          "chinese": "手套",
          "example": "It's getting cold and I have to take out my woolen gloves",
          "wordGroup": "group_434",
          "colorIndex": 2
        },
        {
          "id": 1668,
          "word": "hat",
          "partOfSpeech": "n.",
          "chinese": "（常指带帽檐的）帽子",
          "example": "She bought a hat yesterday",
          "wordGroup": "group_434",
          "colorIndex": 2
        },
        {
          "id": 1669,
          "word": "cap",
          "partOfSpeech": "n.",
          "chinese": "（有帽舌的）帽子；（经费等的）最高限额",
          "example": "The cap goes well with your suit",
          "wordGroup": "group_434",
          "colorIndex": 2
        },
        {
          "id": 1670,
          "word": "brim",
          "partOfSpeech": "n.",
          "chinese": "边缘；帽檐",
          "example": "He drank at the fountain's brim",
          "wordGroup": "group_434",
          "colorIndex": 2
        },
        {
          "id": 1671,
          "word": "scarf",
          "partOfSpeech": "n.",
          "chinese": "围巾；头巾",
          "example": "The price of this scarf is below ten dollars",
          "wordGroup": "group_434",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1672,
          "word": "handkerchief",
          "partOfSpeech": "n.",
          "chinese": "手帕",
          "example": "He was playing with his handkerchief all the while during his speech",
          "wordGroup": "group_435",
          "colorIndex": 3
        },
        {
          "id": 1673,
          "word": "purse",
          "partOfSpeech": "n.",
          "chinese": "（英）钱包；（美）小手提包",
          "example": "The lost of her purse caused her much inconvenience",
          "wordGroup": "group_435",
          "colorIndex": 3
        },
        {
          "id": 1674,
          "word": "wallet",
          "partOfSpeech": "n.",
          "chinese": "钱包；皮夹子",
          "example": "She placed the receipt in her wallet",
          "wordGroup": "group_435",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1675,
          "word": "vest",
          "partOfSpeech": "n.",
          "chinese": "英-汗衫；美-西装背心",
          "example": "One button on the vest is loose",
          "wordGroup": "group_436",
          "colorIndex": 4
        },
        {
          "id": 1676,
          "word": "wrap",
          "partOfSpeech": "n.",
          "chinese": "披肩",
          "example": "Over her shoulders was a much-mended wrap 她的肩上搭着一条被多次缝补的披肩",
          "wordGroup": "group_436",
          "colorIndex": 4
        },
        {
          "id": 1677,
          "word": "cloak",
          "partOfSpeech": "n.",
          "chinese": "斗篷；覆盖物",
          "example": "She picked up the old brown cloak and handed it to him",
          "wordGroup": "group_436",
          "colorIndex": 4
        },
        {
          "id": 1678,
          "word": "collar",
          "partOfSpeech": "n.",
          "chinese": "衣领；项圈",
          "example": "She turned up his coat collar against the chilly wind",
          "wordGroup": "group_436",
          "colorIndex": 4
        },
        {
          "id": 1679,
          "word": "sleeve",
          "partOfSpeech": "n.",
          "chinese": "袖子",
          "example": "A stranger pulled at my sleeve as I was leaving",
          "wordGroup": "group_436",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1680,
          "word": "sock",
          "partOfSpeech": "n.",
          "chinese": "短袜",
          "example": "There is a hole in my sock",
          "wordGroup": "group_437",
          "colorIndex": 5
        },
        {
          "id": 1681,
          "word": "stocking",
          "partOfSpeech": "n.",
          "chinese": "（女式）长筒袜",
          "example": "The thief musked his face with a stocking",
          "wordGroup": "group_437",
          "colorIndex": 5
        },
        {
          "id": 1682,
          "word": "slipper",
          "partOfSpeech": "n.",
          "chinese": "拖鞋",
          "example": "No slipper is allowed in the laboratory",
          "wordGroup": "group_437",
          "colorIndex": 5
        },
        {
          "id": 1683,
          "word": "boot",
          "partOfSpeech": "n.",
          "chinese": "靴子",
          "example": "My foot won't go into this boot",
          "wordGroup": "group_437",
          "colorIndex": 5
        },
        {
          "id": 1684,
          "word": "lace",
          "partOfSpeech": "n.",
          "chinese": "鞋带",
          "example": "He stopped to tie the laces of his sneakers",
          "wordGroup": "group_437",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1685,
          "word": "tailor",
          "partOfSpeech": "n./v.",
          "chinese": "裁缝；专门制作",
          "example": "The tailor can alter your new coat to fit you",
          "wordGroup": "group_438",
          "colorIndex": 0
        },
        {
          "id": 1686,
          "word": "sew",
          "partOfSpeech": "v.",
          "chinese": "缝补；缝制",
          "example": "The skirt is finished and I'm going to sew a pocket.",
          "wordGroup": "group_438",
          "colorIndex": 0
        },
        {
          "id": 1687,
          "word": "spin",
          "partOfSpeech": "v./n.",
          "chinese": "纺；（使）旋转；高速旋转；（乘车）兜风",
          "example": "We took a spin around the town",
          "wordGroup": "group_438",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1688,
          "word": "stitch",
          "partOfSpeech": "n./v.",
          "chinese": "针脚；缝",
          "example": "My mother is stitching a new dress",
          "wordGroup": "group_439",
          "colorIndex": 1
        },
        {
          "id": 1689,
          "word": "needle",
          "partOfSpeech": "n.",
          "chinese": "针",
          "example": "The needle pierced her finger",
          "wordGroup": "group_439",
          "colorIndex": 1
        },
        {
          "id": 1690,
          "word": "pin",
          "partOfSpeech": "n./v.",
          "chinese": "别针；大头针；别住，钉住",
          "example": "Pin the bills together so you won't lose them",
          "wordGroup": "group_439",
          "colorIndex": 1
        },
        {
          "id": 1691,
          "word": "string",
          "partOfSpeech": "n.",
          "chinese": "线；一串",
          "example": "We have had a string of complaints about the program",
          "wordGroup": "group_439",
          "colorIndex": 1
        },
        {
          "id": 1692,
          "word": "thread",
          "partOfSpeech": "n.",
          "chinese": "线；螺纹",
          "example": "She is looking for threads which match the cloth",
          "wordGroup": "group_439",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1693,
          "word": "strap",
          "partOfSpeech": "n./v.",
          "chinese": "带子；用带子系",
          "example": "A safety strap is used to prevent falling",
          "wordGroup": "group_440",
          "colorIndex": 2
        },
        {
          "id": 1694,
          "word": "stripe",
          "partOfSpeech": "n.",
          "chinese": "条纹",
          "example": "The body of a zebra is marked by black and white stripes",
          "wordGroup": "group_440",
          "colorIndex": 2
        },
        {
          "id": 1695,
          "word": "ribbon",
          "partOfSpeech": "n.",
          "chinese": "缎带；丝带",
          "example": "Her hair was tied up with a ribbon",
          "wordGroup": "group_440",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1696,
          "word": "belt",
          "partOfSpeech": "n.",
          "chinese": "腰带，皮带；地带，地区",
          "example": "A belt of trees grew between the two fields",
          "wordGroup": "group_441",
          "colorIndex": 3
        },
        {
          "id": 1697,
          "word": "chain",
          "partOfSpeech": "n.",
          "chinese": "链子；链条",
          "example": "She wore a silver chain around her neck",
          "wordGroup": "group_441",
          "colorIndex": 3
        },
        {
          "id": 1698,
          "word": "bracelet",
          "partOfSpeech": "n.",
          "chinese": "手镯",
          "example": "I'd like you to take this bracelet as a gift",
          "wordGroup": "group_441",
          "colorIndex": 3
        },
        {
          "id": 1699,
          "word": "necklace",
          "partOfSpeech": "n.",
          "chinese": "项链",
          "example": "I valued this necklace at five thousand dollars",
          "wordGroup": "group_441",
          "colorIndex": 3
        },
        {
          "id": 1700,
          "word": "bead",
          "partOfSpeech": "n./v.",
          "chinese": "珠子，（液体的）小滴；形成珠状",
          "example": "She wore a string of beads around her neck",
          "wordGroup": "group_441",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1701,
          "word": "textile",
          "partOfSpeech": "n./adj.",
          "chinese": "纺织品；纺织的",
          "example": "He intends to retail textile goods",
          "wordGroup": "group_442",
          "colorIndex": 4
        },
        {
          "id": 1702,
          "word": "velvet",
          "partOfSpeech": "n.",
          "chinese": "丝绒；天鹅绒",
          "example": "The lawn looks like green velvet",
          "wordGroup": "group_442",
          "colorIndex": 4
        },
        {
          "id": 1703,
          "word": "wool",
          "partOfSpeech": "n.",
          "chinese": "（羊等的）毛；毛线",
          "example": "He found a job of shearing wool from sheep",
          "wordGroup": "group_442",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1704,
          "word": "patch",
          "partOfSpeech": "n./v.",
          "chinese": "补丁，（与周围不同的）小片；补缀",
          "example": "She sewed a patch onto the knee of the trousers 她在裤子的膝部缝了个补丁",
          "wordGroup": "group_443",
          "colorIndex": 5
        },
        {
          "id": 1705,
          "word": "rag",
          "partOfSpeech": "n.",
          "chinese": "破布",
          "example": "She wrapped the box with an old rag",
          "wordGroup": "group_443",
          "colorIndex": 5
        },
        {
          "id": 1706,
          "word": "shabby",
          "partOfSpeech": "adj.",
          "chinese": "破旧的；衣衫褴褛的",
          "example": "His shabby appearance creates a bad impression",
          "wordGroup": "group_443",
          "colorIndex": 5
        },
        {
          "id": 1707,
          "word": "tight",
          "partOfSpeech": "adj.",
          "chinese": "紧的",
          "example": "This drawer is too tight for me to open it",
          "wordGroup": "group_443",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1708,
          "word": "colour/color",
          "partOfSpeech": "n.",
          "chinese": "颜色；颜料",
          "example": "Due to the use of natural pigments, these folk paintings retain their color well. 因为使用了天然颜料，这些民俗画的颜色很好地保留了下来",
          "wordGroup": "group_444",
          "colorIndex": 0
        },
        {
          "id": 1709,
          "word": "white",
          "partOfSpeech": "adj./n.",
          "chinese": "白的；白色",
          "example": "He was white with fury 他气的脸色发白",
          "wordGroup": "group_444",
          "colorIndex": 0
        },
        {
          "id": 1710,
          "word": "yellow",
          "partOfSpeech": "adj./n.",
          "chinese": "黄的；黄色",
          "example": "The leaves turn yellow in autumn",
          "wordGroup": "group_444",
          "colorIndex": 0
        },
        {
          "id": 1711,
          "word": "brown",
          "partOfSpeech": "adj./n.",
          "chinese": "褐色的；褐色",
          "example": "He had brown skin",
          "wordGroup": "group_444",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1712,
          "word": "grey/gray",
          "partOfSpeech": "adj./n.",
          "chinese": "灰色的；灰色",
          "example": "She dressed in grey",
          "wordGroup": "group_445",
          "colorIndex": 1
        },
        {
          "id": 1713,
          "word": "pink",
          "partOfSpeech": "adj./n.",
          "chinese": "粉色的；粉色",
          "example": "She carried a spray of pink roses",
          "wordGroup": "group_445",
          "colorIndex": 1
        },
        {
          "id": 1714,
          "word": "purple",
          "partOfSpeech": "adj./n.",
          "chinese": "紫色的；紫色",
          "example": "That girl liked to wear purple dresses",
          "wordGroup": "group_445",
          "colorIndex": 1
        },
        {
          "id": 1715,
          "word": "tan",
          "partOfSpeech": "adj./n.",
          "chinese": "棕黄色的；棕黄色；晒成的棕褐色",
          "example": "It took me all summer to get this tan",
          "wordGroup": "group_445",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1716,
          "word": "fade",
          "partOfSpeech": "v.",
          "chinese": "逐渐消失；（使）褪色",
          "example": "Beauty fades like a flower",
          "wordGroup": "group_446",
          "colorIndex": 2
        },
        {
          "id": 1717,
          "word": "stain",
          "partOfSpeech": "v./n.",
          "chinese": "污染；污渍",
          "example": "The coffe stained her shirt brown",
          "wordGroup": "group_446",
          "colorIndex": 2
        },
        {
          "id": 1718,
          "word": "blot",
          "partOfSpeech": "n.",
          "chinese": "污点",
          "example": "The new power station is a blot on the landscape",
          "wordGroup": "group_446",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1719,
          "word": "figure",
          "partOfSpeech": "n./v.",
          "chinese": "身材；身影；重要人物；数字；认为",
          "example": "I could see a tall figure near the door",
          "wordGroup": "group_447",
          "colorIndex": 3
        },
        {
          "id": 1720,
          "word": "slender",
          "partOfSpeech": "adj.",
          "chinese": "苗条的；微弱的",
          "example": "All of us admired her slender figure",
          "wordGroup": "group_447",
          "colorIndex": 3
        },
        {
          "id": 1721,
          "word": "slight",
          "partOfSpeech": "adj.",
          "chinese": "纤细的；轻微的",
          "example": "Our army suffered a slight reverse",
          "wordGroup": "group_447",
          "colorIndex": 3
        }
      ]
    ]
  },
  {
    "title": "饮食健康",
    "groups": [
      [
        {
          "id": 1722,
          "word": "food",
          "partOfSpeech": "n.",
          "chinese": "食物",
          "example": "I prefer vegetarian food",
          "wordGroup": "group_447",
          "colorIndex": 3
        },
        {
          "id": 1723,
          "word": "diet",
          "partOfSpeech": "n.",
          "chinese": "日常饮食；（医生指定的）特别饮食；节食",
          "example": "A sugar-free diet is recommended for diabetics",
          "wordGroup": "group_447",
          "colorIndex": 3
        },
        {
          "id": 1724,
          "word": "appetite",
          "partOfSpeech": "n.",
          "chinese": "食欲；强烈欲望",
          "example": "I lost my appetite",
          "wordGroup": "group_447",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1725,
          "word": "treat",
          "partOfSpeech": "v./n.",
          "chinese": "请客；对待；治疗/款待",
          "example": "It is my turn to treat us today",
          "wordGroup": "group_448",
          "colorIndex": 4
        },
        {
          "id": 1726,
          "word": "cater",
          "partOfSpeech": "v.",
          "chinese": "为...提供饮食；满足...的需要",
          "example": "Our hotel also caters for weddings and parties",
          "wordGroup": "group_448",
          "colorIndex": 4
        },
        {
          "id": 1727,
          "word": "provision",
          "partOfSpeech": "n.",
          "chinese": "供应、预备",
          "example": "Provision of shelter was the Red Cross's main concern for the disaster victims",
          "wordGroup": "group_448",
          "colorIndex": 4
        },
        {
          "id": 1728,
          "word": "edible",
          "partOfSpeech": "adj.",
          "chinese": "可以吃的",
          "example": "Take something edible with you when you go there",
          "wordGroup": "group_448",
          "colorIndex": 4
        },
        {
          "id": 1729,
          "word": "recipe",
          "partOfSpeech": "n.",
          "chinese": "食谱；秘诀",
          "example": "In the recipe, it says that I must use two eggs",
          "wordGroup": "group_448",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1730,
          "word": "restaurant",
          "partOfSpeech": "n.",
          "chinese": "餐馆",
          "example": "I had my breakfast in a small restaurant",
          "wordGroup": "group_449",
          "colorIndex": 5
        },
        {
          "id": 1731,
          "word": "refectory",
          "partOfSpeech": "n.",
          "chinese": "（学校或其他机构）食堂、餐厅",
          "example": "The meal of the school refectory is healthy and delicious",
          "wordGroup": "group_449",
          "colorIndex": 5
        },
        {
          "id": 1732,
          "word": "bar",
          "partOfSpeech": "n.",
          "chinese": "酒吧、吧台",
          "example": "There weren't any free tables, so I sat on a stool at the bar",
          "wordGroup": "group_449",
          "colorIndex": 5
        },
        {
          "id": 1733,
          "word": "cafeteria",
          "partOfSpeech": "n.",
          "chinese": "自助餐厅",
          "example": "In the cafeteria, we serve ourselves",
          "wordGroup": "group_449",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1734,
          "word": "buffet",
          "partOfSpeech": "n.",
          "chinese": "自助餐",
          "example": "We serve buffet during lunch time only",
          "wordGroup": "group_450",
          "colorIndex": 0
        },
        {
          "id": 1735,
          "word": "barbecue",
          "partOfSpeech": "n./v.",
          "chinese": "烧烤野餐、烤架/烧烤",
          "example": "I you're not busy Sunday, we'd love to have you both over for a barbecue",
          "wordGroup": "group_450",
          "colorIndex": 0
        },
        {
          "id": 1736,
          "word": "supper",
          "partOfSpeech": "n.",
          "chinese": "晚餐",
          "example": "His wife made some pumpkin pie for supper",
          "wordGroup": "group_450",
          "colorIndex": 0
        },
        {
          "id": 1737,
          "word": "banquet",
          "partOfSpeech": "n.",
          "chinese": "宴会",
          "example": "We met his foreign friends and gave a banquet in their honor",
          "wordGroup": "group_450",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1738,
          "word": "refreshment",
          "partOfSpeech": "n.",
          "chinese": "茶点、点心",
          "example": "We only serve drinks and light refreshments on this short flight",
          "wordGroup": "group_451",
          "colorIndex": 1
        },
        {
          "id": 1739,
          "word": "snack",
          "partOfSpeech": "n.",
          "chinese": "快餐、小吃、零食",
          "example": "Apples are a more nutritional snack than popcorn",
          "wordGroup": "group_451",
          "colorIndex": 1
        },
        {
          "id": 1740,
          "word": "appetiser/appetizer",
          "partOfSpeech": "n.",
          "chinese": "开胃饮料、开胃小菜",
          "example": "We served some crackers and cheese as an appetizer",
          "wordGroup": "group_451",
          "colorIndex": 1
        },
        {
          "id": 1741,
          "word": "cuisine",
          "partOfSpeech": "n.",
          "chinese": "菜肴、烹饪",
          "example": "Chinese cuisine is the perfect fusion of color, shape, appearance and flavor",
          "wordGroup": "group_451",
          "colorIndex": 1
        },
        {
          "id": 1742,
          "word": "menu",
          "partOfSpeech": "n.",
          "chinese": "菜单",
          "example": "He called the waiter to bring the menu",
          "wordGroup": "group_451",
          "colorIndex": 1
        },
        {
          "id": 1743,
          "word": "order",
          "partOfSpeech": "n./v.",
          "chinese": "订单、点的餐/点（酒菜等）",
          "example": "He gave his order to the waiter",
          "wordGroup": "group_451",
          "colorIndex": 1
        },
        {
          "id": 1744,
          "word": "takeaway",
          "partOfSpeech": "n.",
          "chinese": "[英]外卖餐馆、外卖食物",
          "example": "Eat in or takeaway?",
          "wordGroup": "group_451",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1745,
          "word": "chef",
          "partOfSpeech": "n.",
          "chinese": "厨师",
          "example": "There's only one chef in that grand hotel",
          "wordGroup": "group_452",
          "colorIndex": 2
        },
        {
          "id": 1746,
          "word": "gourmet",
          "partOfSpeech": "n./adj.",
          "chinese": "美食家/美味佳肴的",
          "example": "The gourmet is very particular about food",
          "wordGroup": "group_452",
          "colorIndex": 2
        },
        {
          "id": 1747,
          "word": "vegetarian",
          "partOfSpeech": "n./adj.",
          "chinese": "素食者/素食的、无肉的",
          "example": "I've become used to a vegetarian diet",
          "wordGroup": "group_452",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1748,
          "word": "cutlery",
          "partOfSpeech": "n.",
          "chinese": "餐具、刀具",
          "example": "Knife and fork are the main cutlery used by the European people",
          "wordGroup": "group_453",
          "colorIndex": 3
        },
        {
          "id": 1749,
          "word": "silver",
          "partOfSpeech": "n./adj.",
          "chinese": "银、银器/银的、银色的",
          "example": "She wore a silver chain around her neck",
          "wordGroup": "group_453",
          "colorIndex": 3
        },
        {
          "id": 1750,
          "word": "ceramic",
          "partOfSpeech": "adj./n.",
          "chinese": "陶瓷的/陶瓷制品",
          "example": "The ceramic industry dates from the ancient times",
          "wordGroup": "group_453",
          "colorIndex": 3
        },
        {
          "id": 1751,
          "word": "porcelain",
          "partOfSpeech": "n.",
          "chinese": "瓷器、瓷",
          "example": "The museum displays specimens of ancient Chinese porcelain",
          "wordGroup": "group_453",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1752,
          "word": "bowl",
          "partOfSpeech": "n.",
          "chinese": "碗",
          "example": "I have a bowl of cereal every morning",
          "wordGroup": "group_454",
          "colorIndex": 4
        },
        {
          "id": 1753,
          "word": "dish",
          "partOfSpeech": "n.",
          "chinese": "碟、菜肴",
          "example": "The careless waiter dropped the dish onto the ground",
          "wordGroup": "group_454",
          "colorIndex": 4
        },
        {
          "id": 1754,
          "word": "saucer",
          "partOfSpeech": "n.",
          "chinese": "茶托、茶碟",
          "example": "He is drinking with a cup and saucer",
          "wordGroup": "group_454",
          "colorIndex": 4
        },
        {
          "id": 1755,
          "word": "tray",
          "partOfSpeech": "n.",
          "chinese": "盘、托盘",
          "example": "He put the toast on the breakfast tray",
          "wordGroup": "group_454",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1756,
          "word": "fork",
          "partOfSpeech": "n.",
          "chinese": "餐叉、分岔处",
          "example": "They usually eat with a knife and fork",
          "wordGroup": "group_455",
          "colorIndex": 5
        },
        {
          "id": 1757,
          "word": "knife",
          "partOfSpeech": "n.",
          "chinese": "刀",
          "example": "He halved an apple with a knife",
          "wordGroup": "group_455",
          "colorIndex": 5
        },
        {
          "id": 1758,
          "word": "spoon",
          "partOfSpeech": "n.",
          "chinese": "匙、调羹",
          "example": "His soup spoon dropped onto the ground",
          "wordGroup": "group_455",
          "colorIndex": 5
        },
        {
          "id": 1759,
          "word": "glass",
          "partOfSpeech": "n.",
          "chinese": "玻璃、玻璃杯",
          "example": "I cut my hand on some broken glass",
          "wordGroup": "group_455",
          "colorIndex": 5
        },
        {
          "id": 1760,
          "word": "mug",
          "partOfSpeech": "n.",
          "chinese": "大杯、马克杯",
          "example": "He asked me to make him a mug of coffee",
          "wordGroup": "group_455",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1761,
          "word": "kettle",
          "partOfSpeech": "n.",
          "chinese": "水壶、[美]锅",
          "example": "The kettle is boiling",
          "wordGroup": "group_456",
          "colorIndex": 0
        },
        {
          "id": 1762,
          "word": "pan",
          "partOfSpeech": "n.",
          "chinese": "平底锅、[美]烤盘",
          "example": "I cracked two eggs into the frying pan",
          "wordGroup": "group_456",
          "colorIndex": 0
        },
        {
          "id": 1763,
          "word": "pot",
          "partOfSpeech": "n.",
          "chinese": "锅、壶",
          "example": "Will you help me wash up all these pots and pans?",
          "wordGroup": "group_456",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1764,
          "word": "stove",
          "partOfSpeech": "n.",
          "chinese": "炉子",
          "example": "Please warm up this milk over the stove",
          "wordGroup": "group_457",
          "colorIndex": 1
        },
        {
          "id": 1765,
          "word": "furnace",
          "partOfSpeech": "n.",
          "chinese": "熔炉；暖气炉",
          "example": "Would you please fire up the furnace?",
          "wordGroup": "group_457",
          "colorIndex": 1
        },
        {
          "id": 1766,
          "word": "oven",
          "partOfSpeech": "n.",
          "chinese": "烤炉、烤箱",
          "example": "The bread is fresh out of the oven 新鲜出炉的面包",
          "wordGroup": "group_457",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1767,
          "word": "tin",
          "partOfSpeech": "n.",
          "chinese": "锡、罐头",
          "example": "I never eat anything out of a tin",
          "wordGroup": "group_458",
          "colorIndex": 2
        },
        {
          "id": 1768,
          "word": "lid",
          "partOfSpeech": "n.",
          "chinese": "盖子；眼睑，眼皮",
          "example": "He slammed the lid down",
          "wordGroup": "group_458",
          "colorIndex": 2
        },
        {
          "id": 1769,
          "word": "drink",
          "partOfSpeech": "v./n.",
          "chinese": "饮、喝；喝酒/饮料",
          "example": "It is harmful to your health to drink too much",
          "wordGroup": "group_458",
          "colorIndex": 2
        },
        {
          "id": 1770,
          "word": "beverage",
          "partOfSpeech": "n.",
          "chinese": "（水以外的）饮料",
          "example": "He is our regular supplier of beverages",
          "wordGroup": "group_458",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1771,
          "word": "juice",
          "partOfSpeech": "n.",
          "chinese": "果汁、菜汁",
          "example": "She was drinking juice through a straw",
          "wordGroup": "group_459",
          "colorIndex": 3
        },
        {
          "id": 1772,
          "word": "soda",
          "partOfSpeech": "n.",
          "chinese": "无碳酸钠的；苏打水；[美]汽水",
          "example": "He gave me a bottle of orange soda",
          "wordGroup": "group_459",
          "colorIndex": 3
        },
        {
          "id": 1773,
          "word": "coffee",
          "partOfSpeech": "n.",
          "chinese": "咖啡",
          "example": "He put some sugar into his coffee",
          "wordGroup": "group_459",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1774,
          "word": "alcohol",
          "partOfSpeech": "n.",
          "chinese": "酒精、乙醇、酒",
          "example": "The doctor told me to keep off alcohol",
          "wordGroup": "group_460",
          "colorIndex": 4
        },
        {
          "id": 1775,
          "word": "liquor",
          "partOfSpeech": "n.",
          "chinese": "烈性酒",
          "example": "He appears to have drunk a lot of liquor",
          "wordGroup": "group_460",
          "colorIndex": 4
        },
        {
          "id": 1776,
          "word": "whisky/whiskey",
          "partOfSpeech": "n.",
          "chinese": "威士忌酒",
          "example": "A great deal of whisky is made in Scotland",
          "wordGroup": "group_460",
          "colorIndex": 4
        },
        {
          "id": 1777,
          "word": "brandy",
          "partOfSpeech": "n.",
          "chinese": "白兰地酒",
          "example": "I drank a miniature bottle of brandy last night",
          "wordGroup": "group_460",
          "colorIndex": 4
        },
        {
          "id": 1778,
          "word": "drunk",
          "partOfSpeech": "adj.",
          "chinese": "醉的",
          "example": "He was obviously drunk",
          "wordGroup": "group_460",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1779,
          "word": "tobacco",
          "partOfSpeech": "n.",
          "chinese": "烟草",
          "example": "A high amount of money is spent on tobacco every year",
          "wordGroup": "group_461",
          "colorIndex": 5
        },
        {
          "id": 1780,
          "word": "cigarette",
          "partOfSpeech": "n.",
          "chinese": "香烟",
          "example": "A cigarette set the dry grass on fire",
          "wordGroup": "group_461",
          "colorIndex": 5
        },
        {
          "id": 1781,
          "word": "sober",
          "partOfSpeech": "adj./v.",
          "chinese": "清醒的/（使）醒酒",
          "example": "He was tipsy yesterday, but now he is sober",
          "wordGroup": "group_461",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1782,
          "word": "vegetable",
          "partOfSpeech": "n.",
          "chinese": "蔬菜",
          "example": "Is a tomato a fruit or a vegetable?",
          "wordGroup": "group_462",
          "colorIndex": 0
        },
        {
          "id": 1783,
          "word": "tomato",
          "partOfSpeech": "n.",
          "chinese": "番茄",
          "example": "His shirt was stained with tomato juice",
          "wordGroup": "group_462",
          "colorIndex": 0
        },
        {
          "id": 1784,
          "word": "potato",
          "partOfSpeech": "n.",
          "chinese": "土豆",
          "example": "This salad is made up of apple, pear, potato and celery",
          "wordGroup": "group_462",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1785,
          "word": "pea",
          "partOfSpeech": "n.",
          "chinese": "豌豆",
          "example": "This kind of pea has a long pod（荚）",
          "wordGroup": "group_463",
          "colorIndex": 1
        },
        {
          "id": 1786,
          "word": "bean",
          "partOfSpeech": "n.",
          "chinese": "豆",
          "example": "A bean grows rapidly",
          "wordGroup": "group_463",
          "colorIndex": 1
        },
        {
          "id": 1787,
          "word": "cucumber",
          "partOfSpeech": "n.",
          "chinese": "黄瓜",
          "example": "I would like a cucumber salad for an appetizer",
          "wordGroup": "group_463",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1788,
          "word": "cabbage",
          "partOfSpeech": "n.",
          "chinese": "洋白菜、卷心菜、甘蓝",
          "example": "I'd like to cook dishes with cabbage",
          "wordGroup": "group_464",
          "colorIndex": 2
        },
        {
          "id": 1789,
          "word": "onion",
          "partOfSpeech": "n.",
          "chinese": "洋葱",
          "example": "I don't like the flavor of onion",
          "wordGroup": "group_464",
          "colorIndex": 2
        },
        {
          "id": 1790,
          "word": "mushroom",
          "partOfSpeech": "n./v.",
          "chinese": "蘑菇/呈蘑菇状扩散",
          "example": "The smoke mushroomed into the sky",
          "wordGroup": "group_464",
          "colorIndex": 2
        },
        {
          "id": 1791,
          "word": "eggplant",
          "partOfSpeech": "n.",
          "chinese": "茄子",
          "example": "We grow many different vegetables, including potatoes, eggplants, etc.",
          "wordGroup": "group_464",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1792,
          "word": "carrot",
          "partOfSpeech": "n.",
          "chinese": "胡萝卜",
          "example": "The dish of boiled beef and carrot tastes good",
          "wordGroup": "group_465",
          "colorIndex": 3
        },
        {
          "id": 1793,
          "word": "turnip",
          "partOfSpeech": "n.",
          "chinese": "萝卜、芜菁",
          "example": "My nephew loves to eat raw turnip",
          "wordGroup": "group_465",
          "colorIndex": 3
        },
        {
          "id": 1794,
          "word": "radish",
          "partOfSpeech": "n.",
          "chinese": "樱桃萝卜",
          "example": "Please help me pull up the radishes",
          "wordGroup": "group_465",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1795,
          "word": "fruit",
          "partOfSpeech": "n.",
          "chinese": "水果",
          "example": "Several baskets of fruit were eaten at the party",
          "wordGroup": "group_466",
          "colorIndex": 4
        },
        {
          "id": 1796,
          "word": "peel",
          "partOfSpeech": "v./n.",
          "chinese": "剥（水果、蔬菜的）皮/（水果）皮",
          "example": "She throwed the banana peel into the trash can",
          "wordGroup": "group_466",
          "colorIndex": 4
        },
        {
          "id": 1797,
          "word": "strip",
          "partOfSpeech": "v./n.",
          "chinese": "剥去、除去/条、带",
          "example": "Elephants strip the leaves from trees",
          "wordGroup": "group_466",
          "colorIndex": 4
        },
        {
          "id": 1798,
          "word": "core",
          "partOfSpeech": "n.",
          "chinese": "果核",
          "example": "He ate the plum and then threw the core away",
          "wordGroup": "group_466",
          "colorIndex": 4
        },
        {
          "id": 1799,
          "word": "hull",
          "partOfSpeech": "n./v.",
          "chinese": "（果实等的）外壳；船体/剥去（果实的）外壳",
          "example": "Rice is gathered, cleaned, and hulled before being sold",
          "wordGroup": "group_466",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1800,
          "word": "cherry",
          "partOfSpeech": "n.",
          "chinese": "樱桃；樱桃树",
          "example": "We have different pies, such as apple, cherry and strawberry pies",
          "wordGroup": "group_467",
          "colorIndex": 5
        },
        {
          "id": 1801,
          "word": "berry",
          "partOfSpeech": "n.",
          "chinese": "浆果",
          "example": "The berry is nutritious and has a sweetish taste",
          "wordGroup": "group_467",
          "colorIndex": 5
        },
        {
          "id": 1802,
          "word": "grape",
          "partOfSpeech": "n.",
          "chinese": "葡萄",
          "example": "Sour grapes can never make sweet wine",
          "wordGroup": "group_467",
          "colorIndex": 5
        },
        {
          "id": 1803,
          "word": "papaya",
          "partOfSpeech": "n.",
          "chinese": "番木瓜",
          "example": "I would be happy to share these bananas and papayas with you",
          "wordGroup": "group_467",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1804,
          "word": "peach",
          "partOfSpeech": "n.",
          "chinese": "桃子",
          "example": "The peach is a sweet and juicy fruit",
          "wordGroup": "group_468",
          "colorIndex": 0
        },
        {
          "id": 1805,
          "word": "pear",
          "partOfSpeech": "n.",
          "chinese": "梨",
          "example": "Would you like a pear",
          "wordGroup": "group_468",
          "colorIndex": 0
        },
        {
          "id": 1806,
          "word": "plum",
          "partOfSpeech": "n.",
          "chinese": "李子、梅子",
          "example": "Could I have some more sugar for my plum juice?",
          "wordGroup": "group_468",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1807,
          "word": "orange",
          "partOfSpeech": "n.",
          "chinese": "橙子",
          "example": "Would you peel me an orange?",
          "wordGroup": "group_469",
          "colorIndex": 1
        },
        {
          "id": 1808,
          "word": "melon",
          "partOfSpeech": "n.",
          "chinese": "瓜、甜瓜",
          "example": "We garnished the melon with strawberries",
          "wordGroup": "group_469",
          "colorIndex": 1
        },
        {
          "id": 1809,
          "word": "lemon",
          "partOfSpeech": "n.",
          "chinese": "柠檬",
          "example": "I like orange more than lemon",
          "wordGroup": "group_469",
          "colorIndex": 1
        },
        {
          "id": 1810,
          "word": "kiwi",
          "partOfSpeech": "n.",
          "chinese": "猕猴桃、奇异果",
          "example": "In Asia, the hardy kiwi grows well inside the shade",
          "wordGroup": "group_469",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1811,
          "word": "crop",
          "partOfSpeech": "n.",
          "chinese": "庄稼、收成、产量",
          "example": "We have had the biggest wheat crop ever this year",
          "wordGroup": "group_470",
          "colorIndex": 2
        },
        {
          "id": 1812,
          "word": "corn",
          "partOfSpeech": "n.",
          "chinese": "[英]谷物；[美]玉米",
          "example": "The corn is nearly ready for harvesting",
          "wordGroup": "group_470",
          "colorIndex": 2
        },
        {
          "id": 1813,
          "word": "grain",
          "partOfSpeech": "n.",
          "chinese": "谷物、颗粒",
          "example": "We ship grain to Africa",
          "wordGroup": "group_470",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1814,
          "word": "wheat",
          "partOfSpeech": "n.",
          "chinese": "小麦",
          "example": "This old man is a leading authority on wheat diseases",
          "wordGroup": "group_471",
          "colorIndex": 3
        },
        {
          "id": 1815,
          "word": "reap",
          "partOfSpeech": "v.",
          "chinese": "收割、收获",
          "example": "We reap what we sow",
          "wordGroup": "group_471",
          "colorIndex": 3
        },
        {
          "id": 1816,
          "word": "flour",
          "partOfSpeech": "n.",
          "chinese": "面粉",
          "example": "Bread is chiefly made of flour",
          "wordGroup": "group_471",
          "colorIndex": 3
        },
        {
          "id": 1817,
          "word": "porridge",
          "partOfSpeech": "n.",
          "chinese": "麦片粥",
          "example": "She spooned out bowls of porridge",
          "wordGroup": "group_471",
          "colorIndex": 3
        },
        {
          "id": 1818,
          "word": "paste",
          "partOfSpeech": "n.",
          "chinese": "糨糊、面团",
          "example": "We used paste to attach our designs to the poster",
          "wordGroup": "group_471",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1819,
          "word": "livestock",
          "partOfSpeech": "n.",
          "chinese": "家畜",
          "example": "He is good at breeding livestock",
          "wordGroup": "group_472",
          "colorIndex": 4
        },
        {
          "id": 1820,
          "word": "chicken",
          "partOfSpeech": "n.",
          "chinese": "鸡",
          "example": "He has a chicken farm",
          "wordGroup": "group_472",
          "colorIndex": 4
        },
        {
          "id": 1821,
          "word": "turkey",
          "partOfSpeech": "n.",
          "chinese": "火鸡",
          "example": "People often drink white wine with turkey",
          "wordGroup": "group_472",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1822,
          "word": "beef",
          "partOfSpeech": "n.",
          "chinese": "牛肉",
          "example": "Do you like stewed beef?",
          "wordGroup": "group_473",
          "colorIndex": 5
        },
        {
          "id": 1823,
          "word": "pork",
          "partOfSpeech": "n.",
          "chinese": "猪肉",
          "example": "The little girl only eats lean pork",
          "wordGroup": "group_473",
          "colorIndex": 5
        },
        {
          "id": 1824,
          "word": "mutton",
          "partOfSpeech": "n.",
          "chinese": "羊肉",
          "example": "People like to have mutton in the winter",
          "wordGroup": "group_473",
          "colorIndex": 5
        },
        {
          "id": 1825,
          "word": "sausage",
          "partOfSpeech": "n.",
          "chinese": "香肠",
          "example": "She loves sausage and mash",
          "wordGroup": "group_473",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1826,
          "word": "fish",
          "partOfSpeech": "n./v.",
          "chinese": "鱼/钓鱼",
          "example": "We caught three little fish",
          "wordGroup": "group_474",
          "colorIndex": 0
        },
        {
          "id": 1827,
          "word": "pond",
          "partOfSpeech": "n.",
          "chinese": "池塘",
          "example": "The dear lowered its head to drink from the pond",
          "wordGroup": "group_474",
          "colorIndex": 0
        },
        {
          "id": 1828,
          "word": "rod",
          "partOfSpeech": "n.",
          "chinese": "杆、竿",
          "example": "I bought a new fishing rod last Sunday",
          "wordGroup": "group_474",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1829,
          "word": "dairy",
          "partOfSpeech": "n./adj.",
          "chinese": "乳制品、乳品店/乳制的",
          "example": "We bought milk at the dairy",
          "wordGroup": "group_475",
          "colorIndex": 1
        },
        {
          "id": 1830,
          "word": "milk",
          "partOfSpeech": "n./v.",
          "chinese": "奶/挤奶",
          "example": "I am boiling the milk",
          "wordGroup": "group_475",
          "colorIndex": 1
        },
        {
          "id": 1831,
          "word": "yogurt",
          "partOfSpeech": "n.",
          "chinese": "酸奶",
          "example": "Do you have any low-fat yogurt?",
          "wordGroup": "group_475",
          "colorIndex": 1
        },
        {
          "id": 1832,
          "word": "cream",
          "partOfSpeech": "n.",
          "chinese": "奶油",
          "example": "He is whipping cream",
          "wordGroup": "group_475",
          "colorIndex": 1
        },
        {
          "id": 1833,
          "word": "cheese",
          "partOfSpeech": "n.",
          "chinese": "起司、奶酪",
          "example": "Cheese often upset her stomach",
          "wordGroup": "group_475",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1834,
          "word": "butter",
          "partOfSpeech": "n./v.",
          "chinese": "黄油/涂黄油",
          "example": "I'll butter the bread",
          "wordGroup": "group_476",
          "colorIndex": 2
        },
        {
          "id": 1835,
          "word": "salad",
          "partOfSpeech": "n.",
          "chinese": "色拉",
          "example": "It only takes a minute to make a salad",
          "wordGroup": "group_476",
          "colorIndex": 2
        },
        {
          "id": 1836,
          "word": "sandwich",
          "partOfSpeech": "v./n.",
          "chinese": "把...夹入/三明治",
          "example": "She was sandwiched between two fat men",
          "wordGroup": "group_476",
          "colorIndex": 2
        },
        {
          "id": 1837,
          "word": "hamburger",
          "partOfSpeech": "n.",
          "chinese": "汉堡包",
          "example": "I had a hamburger and a fried chicken leg",
          "wordGroup": "group_476",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1838,
          "word": "loaf",
          "partOfSpeech": "n./v.",
          "chinese": "一条（面包）/游荡、闲逛",
          "example": "Half a loaf is better than no bread 聊胜于无",
          "wordGroup": "group_477",
          "colorIndex": 3
        },
        {
          "id": 1839,
          "word": "pie",
          "partOfSpeech": "n.",
          "chinese": "馅饼、派",
          "example": "Would you like another piece of apple pie?",
          "wordGroup": "group_477",
          "colorIndex": 3
        },
        {
          "id": 1840,
          "word": "pizza",
          "partOfSpeech": "n.",
          "chinese": "披萨饼",
          "example": "I decided to go get a carryout pizza for dinner",
          "wordGroup": "group_477",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1841,
          "word": "pasta",
          "partOfSpeech": "n.",
          "chinese": "意大利面食",
          "example": "Do you want chicken or pasta for dinner?",
          "wordGroup": "group_478",
          "colorIndex": 4
        },
        {
          "id": 1842,
          "word": "spaghetti",
          "partOfSpeech": "n.",
          "chinese": "意大利细面",
          "example": "Spaghetti is one of my favorite foods",
          "wordGroup": "group_478",
          "colorIndex": 4
        },
        {
          "id": 1843,
          "word": "soup",
          "partOfSpeech": "n.",
          "chinese": "汤",
          "example": "He had spoiled the soup by putting in too much salt",
          "wordGroup": "group_478",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1844,
          "word": "pudding",
          "partOfSpeech": "n.",
          "chinese": "布丁",
          "example": "Let the pudding chill for an hour",
          "wordGroup": "group_479",
          "colorIndex": 5
        },
        {
          "id": 1845,
          "word": "biscuit",
          "partOfSpeech": "n.",
          "chinese": "[英]饼干，[美]烤饼、小圆面包",
          "example": "He had some biscuits before the dinner",
          "wordGroup": "group_479",
          "colorIndex": 5
        },
        {
          "id": 1846,
          "word": "jam",
          "partOfSpeech": "n.",
          "chinese": "果酱",
          "example": "He spread some apple jam on the bread",
          "wordGroup": "group_479",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1847,
          "word": "nut",
          "partOfSpeech": "n.",
          "chinese": "坚果、螺母",
          "example": "He carefully cracked a nut and then gave it to me",
          "wordGroup": "group_480",
          "colorIndex": 0
        },
        {
          "id": 1848,
          "word": "chocolate",
          "partOfSpeech": "n.",
          "chinese": "巧克力",
          "example": "Never eat chocolate before dinner",
          "wordGroup": "group_480",
          "colorIndex": 0
        },
        {
          "id": 1849,
          "word": "ice cream",
          "partOfSpeech": "n.",
          "chinese": "冰淇淋",
          "example": "Mother knows how to make ice cream",
          "wordGroup": "group_480",
          "colorIndex": 0
        },
        {
          "id": 1850,
          "word": "vanilla",
          "partOfSpeech": "n./adj.",
          "chinese": "香草/香草味的",
          "example": "Many children don't like vanilla-flavored ice cream",
          "wordGroup": "group_480",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1851,
          "word": "mustard",
          "partOfSpeech": "n.",
          "chinese": "芥末、芥菜",
          "example": "He put some mustard into the dish",
          "wordGroup": "group_481",
          "colorIndex": 1
        },
        {
          "id": 1852,
          "word": "wasabi",
          "partOfSpeech": "n.",
          "chinese": "山葵、山葵根",
          "example": "sashimi is usually served with soy sauce and wasabi paste",
          "wordGroup": "group_481",
          "colorIndex": 1
        },
        {
          "id": 1853,
          "word": "pepper",
          "partOfSpeech": "n.",
          "chinese": "胡椒粉、柿子树",
          "example": "The pepper in the food causes me to sneeze",
          "wordGroup": "group_481",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1854,
          "word": "ginger",
          "partOfSpeech": "n.",
          "chinese": "姜",
          "example": "The ginger should be crushed up before it is added to the boiling jam",
          "wordGroup": "group_482",
          "colorIndex": 2
        },
        {
          "id": 1855,
          "word": "garlic",
          "partOfSpeech": "n.",
          "chinese": "蒜",
          "example": "Your breath smelt of garlic",
          "wordGroup": "group_482",
          "colorIndex": 2
        },
        {
          "id": 1856,
          "word": "scallion",
          "partOfSpeech": "n.",
          "chinese": "大葱",
          "example": "Kimchi is a well-known Korean side dish（配菜） made from fermented（发酵的） cabbage, radish, scallion or cucumber",
          "wordGroup": "group_482",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1857,
          "word": "vinegar",
          "partOfSpeech": "n.",
          "chinese": "醋",
          "example": "Vinegar has a acid taste",
          "wordGroup": "group_483",
          "colorIndex": 3
        },
        {
          "id": 1858,
          "word": "salt",
          "partOfSpeech": "n.",
          "chinese": "盐",
          "example": "Salt lowers the freezing point of water",
          "wordGroup": "group_483",
          "colorIndex": 3
        },
        {
          "id": 1859,
          "word": "sugar",
          "partOfSpeech": "n.",
          "chinese": "糖",
          "example": "I bought him a packet of sugar",
          "wordGroup": "group_483",
          "colorIndex": 3
        },
        {
          "id": 1860,
          "word": "candy",
          "partOfSpeech": "n.",
          "chinese": "糖果",
          "example": "The greedy little boy ate all the candy at the party",
          "wordGroup": "group_483",
          "colorIndex": 3
        },
        {
          "id": 1861,
          "word": "honey",
          "partOfSpeech": "n.",
          "chinese": "蜂蜜",
          "example": "We can use honey as a substitute for sugar",
          "wordGroup": "group_483",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1862,
          "word": "flavor/flavour",
          "partOfSpeech": "n.",
          "chinese": "味道、口味、特色、风格",
          "example": "You may choose anyone from the six popular flavors",
          "wordGroup": "group_484",
          "colorIndex": 4
        },
        {
          "id": 1863,
          "word": "sour",
          "partOfSpeech": "adj.",
          "chinese": "酸的",
          "example": "Most green fruits are sour",
          "wordGroup": "group_484",
          "colorIndex": 4
        },
        {
          "id": 1864,
          "word": "sweet",
          "partOfSpeech": "adj.",
          "chinese": "甜的、愉快的",
          "example": "The dish tastes a bit sweet",
          "wordGroup": "group_484",
          "colorIndex": 4
        },
        {
          "id": 1865,
          "word": "bitter",
          "partOfSpeech": "adj.",
          "chinese": "苦的；痛苦的；严寒的",
          "example": "The medicine has a bitter taste",
          "wordGroup": "group_484",
          "colorIndex": 4
        },
        {
          "id": 1866,
          "word": "spicy",
          "partOfSpeech": "adj.",
          "chinese": "辣的",
          "example": "Which province is famous for its hot and spicy cuisine?",
          "wordGroup": "group_484",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1867,
          "word": "delicious",
          "partOfSpeech": "adj.",
          "chinese": "美味的",
          "example": "She can make a delicious meal from very simple ingredients",
          "wordGroup": "group_485",
          "colorIndex": 5
        },
        {
          "id": 1868,
          "word": "yummy",
          "partOfSpeech": "adj.",
          "chinese": "美味的",
          "example": "This cake is really yummy",
          "wordGroup": "group_485",
          "colorIndex": 5
        },
        {
          "id": 1869,
          "word": "tasty",
          "partOfSpeech": "adj.",
          "chinese": "美味的",
          "example": "I always get a double espresso, but their normal coffee is tasty too",
          "wordGroup": "group_485",
          "colorIndex": 5
        },
        {
          "id": 1870,
          "word": "hunger",
          "partOfSpeech": "n.",
          "chinese": "饥饿、渴望",
          "example": "His hunger was soon appeased 平息、和缓",
          "wordGroup": "group_485",
          "colorIndex": 5
        },
        {
          "id": 1871,
          "word": "thirsty",
          "partOfSpeech": "n.",
          "chinese": "渴的、渴望的",
          "example": "He was thirsty for power",
          "wordGroup": "group_485",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1872,
          "word": "spice",
          "partOfSpeech": "n.",
          "chinese": "香料、给生活添加情趣的事",
          "example": "Variety is the spice of life",
          "wordGroup": "group_486",
          "colorIndex": 0
        },
        {
          "id": 1873,
          "word": "sauce",
          "partOfSpeech": "n.",
          "chinese": "酱汁",
          "example": "Waiter, may I have some steak sauce, please?",
          "wordGroup": "group_486",
          "colorIndex": 0
        },
        {
          "id": 1874,
          "word": "ketchup",
          "partOfSpeech": "n.",
          "chinese": "番茄酱",
          "example": "I want to put some ketchup on the hamburger",
          "wordGroup": "group_486",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1875,
          "word": "perfume",
          "partOfSpeech": "n.",
          "chinese": "香味、芳香；香水",
          "example": "The smell of her perfume lingered in the empty house",
          "wordGroup": "group_487",
          "colorIndex": 1
        },
        {
          "id": 1876,
          "word": "ingredient",
          "partOfSpeech": "n.",
          "chinese": "成分；（烹调的）原料、因素",
          "example": "Chilli (红辣椒) is a crucial ingredient in Sichuan cuisine",
          "wordGroup": "group_487",
          "colorIndex": 1
        },
        {
          "id": 1877,
          "word": "supplement",
          "partOfSpeech": "n./v.",
          "chinese": "营养补给、补贴/增补、补充",
          "example": "John had to get a job to supplement the family income",
          "wordGroup": "group_487",
          "colorIndex": 1
        },
        {
          "id": 1878,
          "word": "digest",
          "partOfSpeech": "v.",
          "chinese": "消化、理解、领悟",
          "example": "Mary can't digest fat",
          "wordGroup": "group_487",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1879,
          "word": "cook",
          "partOfSpeech": "v./n.",
          "chinese": "烹调、烧、煮/厨师",
          "example": "Will she cook dinner this evening?",
          "wordGroup": "group_488",
          "colorIndex": 2
        },
        {
          "id": 1880,
          "word": "bake",
          "partOfSpeech": "v.",
          "chinese": "烘烤、烤熟",
          "example": "The bread is baking in the oven",
          "wordGroup": "group_488",
          "colorIndex": 2
        },
        {
          "id": 1881,
          "word": "fry",
          "partOfSpeech": "v.",
          "chinese": "油煎",
          "example": "The eggs are frying in the pan",
          "wordGroup": "group_488",
          "colorIndex": 2
        },
        {
          "id": 1882,
          "word": "roast",
          "partOfSpeech": "v./n.",
          "chinese": "烤/烤肉",
          "example": "Let's have a nice roast for Sunday dinner",
          "wordGroup": "group_488",
          "colorIndex": 2
        },
        {
          "id": 1883,
          "word": "toast",
          "partOfSpeech": "v./n.",
          "chinese": "向...祝酒；为...干杯；烤/烤面包片",
          "example": "We toasted the bride and bridegroom",
          "wordGroup": "group_488",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1884,
          "word": "suck",
          "partOfSpeech": "v.",
          "chinese": "吮吸",
          "example": "Don't suck your thumb. It's so dirty",
          "wordGroup": "group_489",
          "colorIndex": 3
        },
        {
          "id": 1885,
          "word": "swallow",
          "partOfSpeech": "v.",
          "chinese": "咽下、吞下",
          "example": "A boa swollowed its prey whole",
          "wordGroup": "group_489",
          "colorIndex": 3
        },
        {
          "id": 1886,
          "word": "lick",
          "partOfSpeech": "v.",
          "chinese": "舔",
          "example": "He licked his fingers",
          "wordGroup": "group_489",
          "colorIndex": 3
        },
        {
          "id": 1887,
          "word": "chew",
          "partOfSpeech": "v.",
          "chinese": "咀嚼",
          "example": "You must chew your food well before you swallow it",
          "wordGroup": "group_489",
          "colorIndex": 3
        },
        {
          "id": 1888,
          "word": "gum",
          "partOfSpeech": "n.",
          "chinese": "口香糖、树胶",
          "example": "Would you like some sugarless gum?",
          "wordGroup": "group_489",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1889,
          "word": "soak",
          "partOfSpeech": "v.",
          "chinese": "浸泡、使湿透",
          "example": "I have soaked the beans for eight hours",
          "wordGroup": "group_490",
          "colorIndex": 4
        },
        {
          "id": 1890,
          "word": "dip",
          "partOfSpeech": "v.",
          "chinese": "蘸、浸",
          "example": "She dipped her hand in the sea to find out how cold it was",
          "wordGroup": "group_490",
          "colorIndex": 4
        },
        {
          "id": 1891,
          "word": "squeeze",
          "partOfSpeech": "v.",
          "chinese": "挤压",
          "example": "He squeezed an orange to get the juice out",
          "wordGroup": "group_490",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1892,
          "word": "stir",
          "partOfSpeech": "v.",
          "chinese": "搅动",
          "example": "The oatmeal will become lumpy if you don't stir it well",
          "wordGroup": "group_491",
          "colorIndex": 5
        },
        {
          "id": 1893,
          "word": "grind",
          "partOfSpeech": "v./n.",
          "chinese": "碾碎/枯燥乏味的事情",
          "example": "The mill of god grinds slowly but it grinds exceedingly well",
          "wordGroup": "group_491",
          "colorIndex": 5
        },
        {
          "id": 1894,
          "word": "slice",
          "partOfSpeech": "v./n.",
          "chinese": "切成薄片、切、划/薄片",
          "example": "I sliced the bread",
          "wordGroup": "group_491",
          "colorIndex": 5
        }
      ]
    ]
  },
  {
    "title": "建筑场所",
    "groups": [
      [
        {
          "id": 1895,
          "word": "architecture",
          "partOfSpeech": "n.",
          "chinese": "建筑风格、建筑学",
          "example": "The forbidden city is one of the world's greatest works of architecture",
          "wordGroup": "group_491",
          "colorIndex": 5
        },
        {
          "id": 1896,
          "word": "erection",
          "partOfSpeech": "n.",
          "chinese": "建筑、建造",
          "example": "The erection of the building took several years",
          "wordGroup": "group_491",
          "colorIndex": 5
        },
        {
          "id": 1897,
          "word": "structure",
          "partOfSpeech": "n.",
          "chinese": "建筑物；结构",
          "example": "Most linguists would say they were concerned primarily with the grammatical structure of languages",
          "wordGroup": "group_491",
          "colorIndex": 5
        },
        {
          "id": 1898,
          "word": "construct",
          "partOfSpeech": "v.",
          "chinese": "建造",
          "example": "They are planning to construct a new highway",
          "wordGroup": "group_491",
          "colorIndex": 5
        },
        {
          "id": 1899,
          "word": "obstruct",
          "partOfSpeech": "v.",
          "chinese": "阻塞、妨碍",
          "example": "The road was obstructed by a fallen tree",
          "wordGroup": "group_491",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1900,
          "word": "establish",
          "partOfSpeech": "v.",
          "chinese": "建立；设立",
          "example": "The minister established a commission to suggest improments in the educational system",
          "wordGroup": "group_492",
          "colorIndex": 0
        },
        {
          "id": 1901,
          "word": "build",
          "partOfSpeech": "v.",
          "chinese": "建造、开发",
          "example": "We should study hard to build a better future for ourselves",
          "wordGroup": "group_492",
          "colorIndex": 0
        },
        {
          "id": 1902,
          "word": "found",
          "partOfSpeech": "v.",
          "chinese": "创建、创办",
          "example": "The rich businessman founded a hospital and a school in the town where he was born",
          "wordGroup": "group_492",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1903,
          "word": "concrete",
          "partOfSpeech": "n./adj.",
          "chinese": "混泥土/具体的、混凝土制的",
          "example": "The statue rests on a concrete base",
          "wordGroup": "group_493",
          "colorIndex": 1
        },
        {
          "id": 1904,
          "word": "steel",
          "partOfSpeech": "n.",
          "chinese": "钢铁",
          "example": "Hot steel is quenched to be hardened",
          "wordGroup": "group_493",
          "colorIndex": 1
        },
        {
          "id": 1905,
          "word": "stability",
          "partOfSpeech": "n.",
          "chinese": "稳定（性）",
          "example": "The government has taken measures to maintain the stability of prices",
          "wordGroup": "group_493",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1906,
          "word": "site",
          "partOfSpeech": "n.",
          "chinese": "地点",
          "example": "The construction site of a new shopping mall was a hive of activity 一片繁忙的景象",
          "wordGroup": "group_494",
          "colorIndex": 2
        },
        {
          "id": 1907,
          "word": "venue",
          "partOfSpeech": "n.",
          "chinese": "发生地点、举行场所",
          "example": "They have already told us the venue for tomorrow's match",
          "wordGroup": "group_494",
          "colorIndex": 2
        },
        {
          "id": 1908,
          "word": "landmark",
          "partOfSpeech": "n.",
          "chinese": "地标",
          "example": "He oriented himself by finding a familiar landmark",
          "wordGroup": "group_494",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1909,
          "word": "situated",
          "partOfSpeech": "adj.",
          "chinese": "位于...的",
          "example": "The zoo is situated in the suburbs",
          "wordGroup": "group_495",
          "colorIndex": 3
        },
        {
          "id": 1910,
          "word": "locate",
          "partOfSpeech": "v.",
          "chinese": "放置；建立；找到",
          "example": "The new hospital will be located near college",
          "wordGroup": "group_495",
          "colorIndex": 3
        },
        {
          "id": 1911,
          "word": "reside",
          "partOfSpeech": "v.",
          "chinese": "居住",
          "example": "The city in which I reside is very beautiful",
          "wordGroup": "group_495",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1912,
          "word": "inhabit",
          "partOfSpeech": "v.",
          "chinese": "居住于",
          "example": "Thoughts inhabit my mind",
          "wordGroup": "group_496",
          "colorIndex": 4
        },
        {
          "id": 1913,
          "word": "migrate",
          "partOfSpeech": "v.",
          "chinese": "迁徙；移居",
          "example": "More and more people migrate from one city to another to seek fortune",
          "wordGroup": "group_496",
          "colorIndex": 4
        },
        {
          "id": 1914,
          "word": "settle",
          "partOfSpeech": "v.",
          "chinese": "解决；在...定居；使定居",
          "example": "They moved the local people and settled them in another place",
          "wordGroup": "group_496",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1915,
          "word": "dwelling",
          "partOfSpeech": "n.",
          "chinese": "住所",
          "example": "He has changed his dwelling recently",
          "wordGroup": "group_497",
          "colorIndex": 5
        },
        {
          "id": 1916,
          "word": "skyscraper",
          "partOfSpeech": "n.",
          "chinese": "摩天大楼",
          "example": "The skyscraper towers into the sky",
          "wordGroup": "group_497",
          "colorIndex": 5
        },
        {
          "id": 1917,
          "word": "villa",
          "partOfSpeech": "n.",
          "chinese": "乡间别墅；[英]度假别墅",
          "example": "I want to buy a villa outside the city",
          "wordGroup": "group_497",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1918,
          "word": "mansion",
          "partOfSpeech": "n.",
          "chinese": "宅第；公馆",
          "example": "This old mansion became a hospital",
          "wordGroup": "group_498",
          "colorIndex": 0
        },
        {
          "id": 1919,
          "word": "apartment",
          "partOfSpeech": "n.",
          "chinese": "公寓",
          "example": "I have an apartment in downtown Manhattan",
          "wordGroup": "group_498",
          "colorIndex": 0
        },
        {
          "id": 1920,
          "word": "flat",
          "partOfSpeech": "n.",
          "chinese": "[尤英]单元房；公寓",
          "example": "She is buying a flat close to her office",
          "wordGroup": "group_498",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1921,
          "word": "hostel",
          "partOfSpeech": "n.",
          "chinese": "廉价招待所",
          "example": "We found a happy crew of foreign students in the youth hostel",
          "wordGroup": "group_499",
          "colorIndex": 1
        },
        {
          "id": 1922,
          "word": "lodge",
          "partOfSpeech": "v./n.",
          "chinese": "租住/小屋；度假屋",
          "example": "Where we lodge is the problem",
          "wordGroup": "group_499",
          "colorIndex": 1
        },
        {
          "id": 1923,
          "word": "hut",
          "partOfSpeech": "n.",
          "chinese": "小屋、棚屋",
          "example": "The hut was made out of pieces of wood",
          "wordGroup": "group_499",
          "colorIndex": 1
        },
        {
          "id": 1924,
          "word": "cabin",
          "partOfSpeech": "n.",
          "chinese": "小木屋、（船上的）小舱",
          "example": "They lived in a little log cabin in the mountains",
          "wordGroup": "group_499",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1925,
          "word": "cellar",
          "partOfSpeech": "n.",
          "chinese": "地窖、地下室",
          "example": "The celler floods whenever it rains heavily",
          "wordGroup": "group_500",
          "colorIndex": 2
        },
        {
          "id": 1926,
          "word": "shed",
          "partOfSpeech": "n./v.",
          "chinese": "简易房、棚/流、洒、摆脱",
          "example": "He built a bicycle shed",
          "wordGroup": "group_500",
          "colorIndex": 2
        },
        {
          "id": 1927,
          "word": "cottage",
          "partOfSpeech": "n.",
          "chinese": "村舍、小屋",
          "example": "The cottage could accommodate up to six people",
          "wordGroup": "group_500",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1928,
          "word": "nursery",
          "partOfSpeech": "n./adj.",
          "chinese": "托儿所、托儿所的",
          "example": "The nursery teacher made the children sit bold upright 笔直坐",
          "wordGroup": "group_501",
          "colorIndex": 3
        },
        {
          "id": 1929,
          "word": "cradle",
          "partOfSpeech": "n.",
          "chinese": "摇篮、发源地",
          "example": "Ancient Greece was the cradle of western civilization",
          "wordGroup": "group_501",
          "colorIndex": 3
        },
        {
          "id": 1930,
          "word": "shelter",
          "partOfSpeech": "n./v.",
          "chinese": "庇护所；掩蔽/庇护；遮蔽",
          "example": "These plants must be sheltered from direct sunlight",
          "wordGroup": "group_501",
          "colorIndex": 3
        },
        {
          "id": 1931,
          "word": "block",
          "partOfSpeech": "n.",
          "chinese": "街区、障碍、一块",
          "example": "Walk two blocks down the street and go pass the city hall",
          "wordGroup": "group_501",
          "colorIndex": 3
        },
        {
          "id": 1932,
          "word": "grid",
          "partOfSpeech": "n.",
          "chinese": "栅栏、网格、输电网",
          "example": "The city's streets form a grid",
          "wordGroup": "group_501",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1933,
          "word": "aisle",
          "partOfSpeech": "n.",
          "chinese": "走廊、过道",
          "example": "Don't stand in the aisle",
          "wordGroup": "group_502",
          "colorIndex": 4
        },
        {
          "id": 1934,
          "word": "porch",
          "partOfSpeech": "n.",
          "chinese": "门廊",
          "example": "A pigeon perched on our porch railing 一只鸽子栖息在我们门廊的栏杆上",
          "wordGroup": "group_502",
          "colorIndex": 4
        },
        {
          "id": 1935,
          "word": "corridor",
          "partOfSpeech": "n.",
          "chinese": "走廊、通道",
          "example": "The corridor leads to the headmaster's office",
          "wordGroup": "group_502",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1936,
          "word": "stair",
          "partOfSpeech": "n.",
          "chinese": "楼梯",
          "example": "The child was sitting on the bottom stair",
          "wordGroup": "group_503",
          "colorIndex": 5
        },
        {
          "id": 1937,
          "word": "staircase",
          "partOfSpeech": "n.",
          "chinese": "（建筑内的）楼梯",
          "example": "Only the staff members were allowed to use the staircase",
          "wordGroup": "group_503",
          "colorIndex": 5
        },
        {
          "id": 1938,
          "word": "storey/story",
          "partOfSpeech": "n.",
          "chinese": "楼层",
          "example": "There's a nice-story apartment building next to the park",
          "wordGroup": "group_503",
          "colorIndex": 5
        },
        {
          "id": 1939,
          "word": "layer",
          "partOfSpeech": "n.",
          "chinese": "层",
          "example": "There is a layer of dust on the table. Clean it before the guests arrive",
          "wordGroup": "group_503",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1940,
          "word": "elevator",
          "partOfSpeech": "n.",
          "chinese": "[美]电梯",
          "example": "Her job is to operate an elevator",
          "wordGroup": "group_504",
          "colorIndex": 0
        },
        {
          "id": 1941,
          "word": "escalator",
          "partOfSpeech": "n.",
          "chinese": "自动扶梯、滚梯",
          "example": "I could never find the escalators or the door I came in",
          "wordGroup": "group_504",
          "colorIndex": 0
        },
        {
          "id": 1942,
          "word": "handrail",
          "partOfSpeech": "n.",
          "chinese": "扶手、栏杆",
          "example": "Where necessary for safety, in alleyways and stairs for example, handrails should be fitted",
          "wordGroup": "group_504",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1943,
          "word": "pillar",
          "partOfSpeech": "n.",
          "chinese": "柱子、中坚、栋梁",
          "example": "The robber tied him to a pillar",
          "wordGroup": "group_505",
          "colorIndex": 1
        },
        {
          "id": 1944,
          "word": "column",
          "partOfSpeech": "n.",
          "chinese": "柱；（书、报纸的）栏；专栏",
          "example": "The dome was supported by white marble columns",
          "wordGroup": "group_505",
          "colorIndex": 1
        },
        {
          "id": 1945,
          "word": "beam",
          "partOfSpeech": "n.",
          "chinese": "（能量、放射线或粒子的）束；柱",
          "example": "The beam of the searchlights flooded the sky over the airport",
          "wordGroup": "group_505",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1946,
          "word": "vault",
          "partOfSpeech": "n.",
          "chinese": "拱顶；金库；保险库",
          "example": "The walls and vaults are decorated by marble",
          "wordGroup": "group_506",
          "colorIndex": 2
        },
        {
          "id": 1947,
          "word": "arch",
          "partOfSpeech": "n./v.",
          "chinese": "拱门/（使）弯成弓形",
          "example": "The cat arches its back when it sees the dog",
          "wordGroup": "group_506",
          "colorIndex": 2
        },
        {
          "id": 1948,
          "word": "ceiling",
          "partOfSpeech": "n.",
          "chinese": "天花板、顶棚",
          "example": "The traditional houses in that country have very low ceilings",
          "wordGroup": "group_506",
          "colorIndex": 2
        },
        {
          "id": 1949,
          "word": "eaves",
          "partOfSpeech": "n.",
          "chinese": "屋檐",
          "example": "Under the eaves, I have to lower my head",
          "wordGroup": "group_506",
          "colorIndex": 2
        },
        {
          "id": 1950,
          "word": "chimney",
          "partOfSpeech": "n.",
          "chinese": "烟囱",
          "example": "The chimney is choked up with soot and needs to be cleaned",
          "wordGroup": "group_506",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1951,
          "word": "reception",
          "partOfSpeech": "n.",
          "chinese": "接待处",
          "example": "You can leave your key at reception",
          "wordGroup": "group_507",
          "colorIndex": 3
        },
        {
          "id": 1952,
          "word": "lobby",
          "partOfSpeech": "n./v.",
          "chinese": "大厅；前厅；游说/游说",
          "example": "Please wait for me in the lobby of the hotel",
          "wordGroup": "group_507",
          "colorIndex": 3
        },
        {
          "id": 1953,
          "word": "bench",
          "partOfSpeech": "n.",
          "chinese": "长凳",
          "example": "An old man sat on the park bench and fed the pigeons",
          "wordGroup": "group_507",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1954,
          "word": "parlour/parlor",
          "partOfSpeech": "n.",
          "chinese": "客厅",
          "example": "The parlor has been decorated delicately",
          "wordGroup": "group_508",
          "colorIndex": 4
        },
        {
          "id": 1955,
          "word": "fireplace",
          "partOfSpeech": "n.",
          "chinese": "壁炉",
          "example": "She edged her chair closer to the fireplace",
          "wordGroup": "group_508",
          "colorIndex": 4
        },
        {
          "id": 1956,
          "word": "radiator",
          "partOfSpeech": "n.",
          "chinese": "暖气设备",
          "example": "He tossed his coat on the chair and warmed his hands at a radiator",
          "wordGroup": "group_508",
          "colorIndex": 4
        },
        {
          "id": 1957,
          "word": "living room",
          "partOfSpeech": "n.",
          "chinese": "客厅、起居室",
          "example": "The dining room is next to the living room",
          "wordGroup": "group_508",
          "colorIndex": 4
        },
        {
          "id": 1958,
          "word": "cabinet",
          "partOfSpeech": "n.",
          "chinese": "储藏柜、内阁",
          "example": "She needs a cherry cabinet in her room",
          "wordGroup": "group_508",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1959,
          "word": "balcony",
          "partOfSpeech": "n.",
          "chinese": "阳台；（剧院的）楼座",
          "example": "All bedrooms have private bathrooms and balconies",
          "wordGroup": "group_509",
          "colorIndex": 5
        },
        {
          "id": 1960,
          "word": "terrace",
          "partOfSpeech": "n.",
          "chinese": "露天平台、大阳台",
          "example": "Do you want to sit at a table on the terrace",
          "wordGroup": "group_509",
          "colorIndex": 5
        },
        {
          "id": 1961,
          "word": "kitchen",
          "partOfSpeech": "n.",
          "chinese": "厨房",
          "example": "I have to mop the kitchen floor at least once a day",
          "wordGroup": "group_509",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1962,
          "word": "lavatory",
          "partOfSpeech": "n.",
          "chinese": "盥洗室、厕所",
          "example": "The use of the lavatory is suspended during takeoff",
          "wordGroup": "group_510",
          "colorIndex": 0
        },
        {
          "id": 1963,
          "word": "toilet",
          "partOfSpeech": "n.",
          "chinese": "抽水马桶；[英]厕所",
          "example": "Every flat has its own toilet",
          "wordGroup": "group_510",
          "colorIndex": 0
        },
        {
          "id": 1964,
          "word": "bath",
          "partOfSpeech": "n.",
          "chinese": "洗澡；[英]浴缸",
          "example": "He has a cold bath every day",
          "wordGroup": "group_510",
          "colorIndex": 0
        },
        {
          "id": 1965,
          "word": "basin",
          "partOfSpeech": "n.",
          "chinese": "盆；盆地",
          "example": "This basin is made of iron",
          "wordGroup": "group_510",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1966,
          "word": "reserve",
          "partOfSpeech": "n./v.",
          "chinese": "储备；自然保护区/预订",
          "example": "I have reserved a room for you at the hotel",
          "wordGroup": "group_511",
          "colorIndex": 1
        },
        {
          "id": 1967,
          "word": "store",
          "partOfSpeech": "n./v.",
          "chinese": "商店；贮存物/贮存",
          "example": "When he got into the convenience store, he saw the long lines",
          "wordGroup": "group_511",
          "colorIndex": 1
        },
        {
          "id": 1968,
          "word": "mall",
          "partOfSpeech": "n.",
          "chinese": "购物中心",
          "example": "The local kids often hang out at the mall",
          "wordGroup": "group_511",
          "colorIndex": 1
        },
        {
          "id": 1969,
          "word": "complex",
          "partOfSpeech": "n.",
          "chinese": "综合建筑群",
          "example": "A new sports and leisure complex will open next month",
          "wordGroup": "group_511",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1970,
          "word": "supermarket",
          "partOfSpeech": "n.",
          "chinese": "超市",
          "example": "A variety of foods are sold at a supermarket",
          "wordGroup": "group_512",
          "colorIndex": 2
        },
        {
          "id": 1971,
          "word": "booth",
          "partOfSpeech": "n.",
          "chinese": "售货摊；电话亭；小隔间",
          "example": "Would you please watch over my booth?请照料一下我的摊位号码？",
          "wordGroup": "group_512",
          "colorIndex": 2
        },
        {
          "id": 1972,
          "word": "casino",
          "partOfSpeech": "n.",
          "chinese": "赌场",
          "example": "The city of dreams casino does not seem worried about the decline in tour groups",
          "wordGroup": "group_512",
          "colorIndex": 2
        },
        {
          "id": 1973,
          "word": "studio",
          "partOfSpeech": "n.",
          "chinese": "演播室；工作室；单间公寓",
          "example": "The studio was filled with the scent of wild flowers",
          "wordGroup": "group_512",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1974,
          "word": "downtown",
          "partOfSpeech": "n./adj.",
          "chinese": "市中心/市中心的",
          "example": "Most of the old buildings in the downtown were torn down",
          "wordGroup": "group_513",
          "colorIndex": 3
        },
        {
          "id": 1975,
          "word": "urban",
          "partOfSpeech": "adj.",
          "chinese": "城市的",
          "example": "Both urban and rural areas are more and more prosperous",
          "wordGroup": "group_513",
          "colorIndex": 3
        },
        {
          "id": 1976,
          "word": "peripheral",
          "partOfSpeech": "adj./n.",
          "chinese": "外围的/外围设备",
          "example": "The peripheral parts of the city are poor",
          "wordGroup": "group_513",
          "colorIndex": 3
        },
        {
          "id": 1977,
          "word": "vicinity",
          "partOfSpeech": "n.",
          "chinese": "附近；附近地区",
          "example": "The stolen car was found in the vicinity of the station",
          "wordGroup": "group_513",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 1978,
          "word": "room",
          "partOfSpeech": "n.",
          "chinese": "房间；空间",
          "example": "There is no room for a table in my bedroom",
          "wordGroup": "group_514",
          "colorIndex": 4
        },
        {
          "id": 1979,
          "word": "void",
          "partOfSpeech": "n./adj.",
          "chinese": "空间；空白；空虚/空的",
          "example": "The amusement park will fill a void in this town, which has little entertainment for children",
          "wordGroup": "group_514",
          "colorIndex": 4
        },
        {
          "id": 1980,
          "word": "spacious",
          "partOfSpeech": "adj.",
          "chinese": "宽敞的",
          "example": "The hotel room is neither spacious nor comfortable",
          "wordGroup": "group_514",
          "colorIndex": 4
        },
        {
          "id": 1981,
          "word": "airtight",
          "partOfSpeech": "adj.",
          "chinese": "密封的；不透气的",
          "example": "The whole room is airtight",
          "wordGroup": "group_514",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 1982,
          "word": "expanse",
          "partOfSpeech": "n.",
          "chinese": "广阔；辽阔",
          "example": "There was a vast expanse of desert before us",
          "wordGroup": "group_515",
          "colorIndex": 5
        },
        {
          "id": 1983,
          "word": "plaza",
          "partOfSpeech": "n.",
          "chinese": "广场；购物中心",
          "example": "The plaza is crammed with people",
          "wordGroup": "group_515",
          "colorIndex": 5
        },
        {
          "id": 1984,
          "word": "castle",
          "partOfSpeech": "n.",
          "chinese": "城堡",
          "example": "The ancient castle commands a fine view of the town",
          "wordGroup": "group_515",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 1985,
          "word": "carpenter",
          "partOfSpeech": "n.",
          "chinese": "木匠",
          "example": "The carpenter charged ninety dollars for the job",
          "wordGroup": "group_516",
          "colorIndex": 0
        },
        {
          "id": 1986,
          "word": "mason",
          "partOfSpeech": "n.",
          "chinese": "石匠；泥瓦匠",
          "example": "He asked the mason to make him a tombstone",
          "wordGroup": "group_516",
          "colorIndex": 0
        },
        {
          "id": 1987,
          "word": "tile",
          "partOfSpeech": "n.",
          "chinese": "瓦；瓷砖",
          "example": "Clay is used to make things like pots and tiles",
          "wordGroup": "group_516",
          "colorIndex": 0
        },
        {
          "id": 1988,
          "word": "brickwork",
          "partOfSpeech": "n.",
          "chinese": "砖结构",
          "example": "There is a weird crack in the brickwork",
          "wordGroup": "group_516",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 1989,
          "word": "suspension",
          "partOfSpeech": "n.",
          "chinese": "暂缓；暂令停职、停赛",
          "example": "I think her suspension from the team is a very harsh punishment",
          "wordGroup": "group_517",
          "colorIndex": 1
        },
        {
          "id": 1990,
          "word": "hook",
          "partOfSpeech": "n.",
          "chinese": "钩；钩状物；勾拳",
          "example": "Hang your coat on the hook",
          "wordGroup": "group_517",
          "colorIndex": 1
        },
        {
          "id": 1991,
          "word": "lever",
          "partOfSpeech": "n.",
          "chinese": "杠杆；操纵杆",
          "example": "Push the lever and the machine will start",
          "wordGroup": "group_517",
          "colorIndex": 1
        },
        {
          "id": 1992,
          "word": "pole",
          "partOfSpeech": "n.",
          "chinese": "竿；杆",
          "example": "The hut is made of poles covered with grass mats",
          "wordGroup": "group_517",
          "colorIndex": 1
        },
        {
          "id": 1993,
          "word": "scaffold",
          "partOfSpeech": "n.",
          "chinese": "脚手架；绞刑架",
          "example": "The worker fell down from the scaffold",
          "wordGroup": "group_517",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 1994,
          "word": "infrastructure",
          "partOfSpeech": "n.",
          "chinese": "基础设施",
          "example": "The local government is too poor to invest in social welfare programs, new infrastructure or anything else",
          "wordGroup": "group_518",
          "colorIndex": 2
        },
        {
          "id": 1995,
          "word": "apparatus",
          "partOfSpeech": "n.",
          "chinese": "机械；装置",
          "example": "A new piece of apparatus was used in the experiment",
          "wordGroup": "group_518",
          "colorIndex": 2
        },
        {
          "id": 1996,
          "word": "crane",
          "partOfSpeech": "n.",
          "chinese": "起重机；鹤",
          "example": "We used a crane to lift a slab of concrete",
          "wordGroup": "group_518",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 1997,
          "word": "malfunction",
          "partOfSpeech": "v.",
          "chinese": "发生故障",
          "example": "The computer malfunctioned and printed out wrong words",
          "wordGroup": "group_519",
          "colorIndex": 3
        },
        {
          "id": 1998,
          "word": "maintain",
          "partOfSpeech": "v.",
          "chinese": "维持；维修；坚称",
          "example": "It is absolutely vital that food supplies should be maintained",
          "wordGroup": "group_519",
          "colorIndex": 3
        },
        {
          "id": 1999,
          "word": "fix",
          "partOfSpeech": "v.",
          "chinese": "修理；使固定",
          "example": "My watch has stopped. Can you fix it?",
          "wordGroup": "group_519",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2000,
          "word": "mend",
          "partOfSpeech": "v.",
          "chinese": "修理；（使）康复",
          "example": "It won't take long to mend the car",
          "wordGroup": "group_520",
          "colorIndex": 4
        },
        {
          "id": 2001,
          "word": "modify",
          "partOfSpeech": "v.",
          "chinese": "稍作修改",
          "example": "We have to modify our plan a little bit",
          "wordGroup": "group_520",
          "colorIndex": 4
        },
        {
          "id": 2002,
          "word": "trim",
          "partOfSpeech": "v./adj.",
          "chinese": "修剪；装饰/整齐的、整洁的",
          "example": "They trimmed their Christmas tree and put strings of color lights on it",
          "wordGroup": "group_520",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2003,
          "word": "weld",
          "partOfSpeech": "v.",
          "chinese": "焊接；使紧密结合",
          "example": "His job is to weld all those parts together",
          "wordGroup": "group_521",
          "colorIndex": 5
        },
        {
          "id": 2004,
          "word": "saw",
          "partOfSpeech": "n.",
          "chinese": "锯",
          "example": "The electric saw winds when my uncle uses it to cut the fallen tree",
          "wordGroup": "group_521",
          "colorIndex": 5
        },
        {
          "id": 2005,
          "word": "screw",
          "partOfSpeech": "n.",
          "chinese": "螺丝钉；螺旋架",
          "example": "Turn the screw to the right to tighten it",
          "wordGroup": "group_521",
          "colorIndex": 5
        },
        {
          "id": 2006,
          "word": "drill",
          "partOfSpeech": "n./v.",
          "chinese": "钻机；反复练习/钻孔；训练",
          "example": "The Saudi government has announced plans to drill for water in the desert",
          "wordGroup": "group_521",
          "colorIndex": 5
        },
        {
          "id": 2007,
          "word": "plumb",
          "partOfSpeech": "n./v.",
          "chinese": "（表示垂直度的）铅锤/用铅锤线校正",
          "example": "We need to plumb the line",
          "wordGroup": "group_521",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2008,
          "word": "viaduct",
          "partOfSpeech": "n.",
          "chinese": "高架桥",
          "example": "An overhead road for cars or trains is called a viaduct",
          "wordGroup": "group_522",
          "colorIndex": 0
        },
        {
          "id": 2009,
          "word": "span",
          "partOfSpeech": "n.",
          "chinese": "跨距；跨度；持续时间",
          "example": "The bridge has a clear span of 40 meters",
          "wordGroup": "group_522",
          "colorIndex": 0
        },
        {
          "id": 2010,
          "word": "dam",
          "partOfSpeech": "n./v.",
          "chinese": "水坝/控制、抑制",
          "example": "A new dam is under construction at the valley",
          "wordGroup": "group_522",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2011,
          "word": "assemble",
          "partOfSpeech": "v.",
          "chinese": "组装；装配",
          "example": "She assembled the bookshelf all by herself",
          "wordGroup": "group_523",
          "colorIndex": 1
        },
        {
          "id": 2012,
          "word": "install",
          "partOfSpeech": "v.",
          "chinese": "安装",
          "example": "We're installing a new heating system",
          "wordGroup": "group_523",
          "colorIndex": 1
        },
        {
          "id": 2013,
          "word": "furnish",
          "partOfSpeech": "v.",
          "chinese": "为...配备家具陈设",
          "example": "The house is well furnished",
          "wordGroup": "group_523",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2014,
          "word": "placement",
          "partOfSpeech": "n.",
          "chinese": "放置、布置",
          "example": "The placement of the buttons and knobs in the car is well thought out",
          "wordGroup": "group_524",
          "colorIndex": 2
        },
        {
          "id": 2015,
          "word": "layout",
          "partOfSpeech": "n.",
          "chinese": "设计；布局",
          "example": "The new page layout is appealing to teenagers",
          "wordGroup": "group_524",
          "colorIndex": 2
        },
        {
          "id": 2016,
          "word": "design",
          "partOfSpeech": "v./n.",
          "chinese": "设计；计划/设计",
          "example": "He has already designed a good excuse for not attending the conference",
          "wordGroup": "group_524",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2017,
          "word": "entrance",
          "partOfSpeech": "n.",
          "chinese": "入口；进入权",
          "example": "I'll meet you at the entrance of the zoo tomorrow",
          "wordGroup": "group_525",
          "colorIndex": 3
        },
        {
          "id": 2018,
          "word": "entry",
          "partOfSpeech": "n.",
          "chinese": "进入；进入权",
          "example": "He pretended not to observe our entry",
          "wordGroup": "group_525",
          "colorIndex": 3
        },
        {
          "id": 2019,
          "word": "enter",
          "partOfSpeech": "v.",
          "chinese": "进入",
          "example": "Please knock on the door before you enter",
          "wordGroup": "group_525",
          "colorIndex": 3
        },
        {
          "id": 2020,
          "word": "exit",
          "partOfSpeech": "n./v.",
          "chinese": "出口；退场；离去/离去",
          "example": "I was eventually granted an exit visa",
          "wordGroup": "group_525",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2021,
          "word": "outside",
          "partOfSpeech": "adj./n.",
          "chinese": "外部的/外表",
          "example": "He had a tough outside but a kind heart",
          "wordGroup": "group_526",
          "colorIndex": 4
        },
        {
          "id": 2022,
          "word": "outward",
          "partOfSpeech": "adj./adv.",
          "chinese": "向外的/向外",
          "example": "Frost consists of tiny crystals of ice, which grow outward from a solid surface",
          "wordGroup": "group_526",
          "colorIndex": 4
        },
        {
          "id": 2023,
          "word": "exterior",
          "partOfSpeech": "n./adj.",
          "chinese": "外部；外观/外部的",
          "example": "The designer gives a design for the exterior of the container",
          "wordGroup": "group_526",
          "colorIndex": 4
        },
        {
          "id": 2024,
          "word": "external",
          "partOfSpeech": "adj.",
          "chinese": "外来的；外面的；对外的",
          "example": "The external sector has improved performance significantly during the period",
          "wordGroup": "group_526",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2025,
          "word": "inner",
          "partOfSpeech": "adj.",
          "chinese": "内部的；内心的",
          "example": "I can feel the inner peace again",
          "wordGroup": "group_527",
          "colorIndex": 5
        },
        {
          "id": 2026,
          "word": "interior",
          "partOfSpeech": "n./adj.",
          "chinese": "内部/内部的",
          "example": "Interior design is a very promising industry nowadays",
          "wordGroup": "group_527",
          "colorIndex": 5
        },
        {
          "id": 2027,
          "word": "inward",
          "partOfSpeech": "adj./adv.",
          "chinese": "向内的；内心的/向内",
          "example": "The expedition discovered an inward passage",
          "wordGroup": "group_527",
          "colorIndex": 5
        },
        {
          "id": 2028,
          "word": "internal",
          "partOfSpeech": "adj.",
          "chinese": "内部的；自身的；国内的",
          "example": "Every theory has its internal logic",
          "wordGroup": "group_527",
          "colorIndex": 5
        }
      ]
    ]
  },
  {
    "title": "交通旅行",
    "groups": [
      [
        {
          "id": 2029,
          "word": "navigate",
          "partOfSpeech": "v.",
          "chinese": "航行；横渡",
          "example": "He was the first man who navigated the Atlantic alone",
          "wordGroup": "group_527",
          "colorIndex": 5
        },
        {
          "id": 2030,
          "word": "voyage",
          "partOfSpeech": "n.",
          "chinese": "航海，航行；旅行",
          "example": "He goes on a voyage on a warship in the name of the government",
          "wordGroup": "group_527",
          "colorIndex": 5
        },
        {
          "id": 2031,
          "word": "aviation",
          "partOfSpeech": "n.",
          "chinese": "航空；航空学；航空工业",
          "example": "He was a pilot in the early days of aviation",
          "wordGroup": "group_527",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2032,
          "word": "journey",
          "partOfSpeech": "n.",
          "chinese": "旅行；历程",
          "example": "I wish a pleasant journey to you",
          "wordGroup": "group_528",
          "colorIndex": 0
        },
        {
          "id": 2033,
          "word": "travel",
          "partOfSpeech": "n./v.",
          "chinese": "旅行/旅行",
          "example": "During his travels, he met many interesting people",
          "wordGroup": "group_528",
          "colorIndex": 0
        },
        {
          "id": 2034,
          "word": "safari",
          "partOfSpeech": "n.",
          "chinese": "观兽旅行",
          "example": "We'll go on safari in Africa after the wedding",
          "wordGroup": "group_528",
          "colorIndex": 0
        },
        {
          "id": 2035,
          "word": "parade",
          "partOfSpeech": "v./n.",
          "chinese": "游行；炫耀/庆祝游行；列队进行；炫耀",
          "example": "The sports meeting began with a parade for all the competing teams",
          "wordGroup": "group_528",
          "colorIndex": 0
        },
        {
          "id": 2036,
          "word": "haunt",
          "partOfSpeech": "v./n.",
          "chinese": "（鬼魂等）常出没于/常去的地方",
          "example": "This cafe used to be my favorite haunt",
          "wordGroup": "group_528",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2037,
          "word": "attraction",
          "partOfSpeech": "n.",
          "chinese": "吸引；具有吸引力的事物",
          "example": "The main attraction in this amusement park is a large swimming pool with salt water",
          "wordGroup": "group_529",
          "colorIndex": 1
        },
        {
          "id": 2038,
          "word": "memorial",
          "partOfSpeech": "n./adj.",
          "chinese": "纪念碑/纪念的；悼念的",
          "example": "A memorial for victims of the blast was built",
          "wordGroup": "group_529",
          "colorIndex": 1
        },
        {
          "id": 2039,
          "word": "pyramid",
          "partOfSpeech": "n.",
          "chinese": "金字塔；棱锥体",
          "example": "The ancient pyramid in Egypt is one of the wonders of the world",
          "wordGroup": "group_529",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2040,
          "word": "port",
          "partOfSpeech": "n.",
          "chinese": "港口；左舷",
          "example": "The boy often watched the boats return to port in the late afternoon",
          "wordGroup": "group_530",
          "colorIndex": 2
        },
        {
          "id": 2041,
          "word": "visa",
          "partOfSpeech": "n.",
          "chinese": "签证",
          "example": "You need a visa to enter that country",
          "wordGroup": "group_530",
          "colorIndex": 2
        },
        {
          "id": 2042,
          "word": "traffic",
          "partOfSpeech": "n.",
          "chinese": "交通；车流",
          "example": "Traffic reaches a peak between 8 and 9 in the morning",
          "wordGroup": "group_530",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2043,
          "word": "airline",
          "partOfSpeech": "n.",
          "chinese": "航空公司",
          "example": "The airline launched a European route for the first time",
          "wordGroup": "group_531",
          "colorIndex": 3
        },
        {
          "id": 2044,
          "word": "airplane",
          "partOfSpeech": "n.",
          "chinese": "飞机",
          "example": "An airplane engine is a complex machanism",
          "wordGroup": "group_531",
          "colorIndex": 3
        },
        {
          "id": 2045,
          "word": "helicopter",
          "partOfSpeech": "n.",
          "chinese": "直升机",
          "example": "The president helicoptered to that city yesterday",
          "wordGroup": "group_531",
          "colorIndex": 3
        },
        {
          "id": 2046,
          "word": "jet",
          "partOfSpeech": "n.",
          "chinese": "喷气式飞机；喷气口",
          "example": "Developing the supersonic jet was quite an accomplishment",
          "wordGroup": "group_531",
          "colorIndex": 3
        },
        {
          "id": 2047,
          "word": "parachute",
          "partOfSpeech": "n.",
          "chinese": "降落伞",
          "example": "The parachutes in the air look like colorful mushrooms",
          "wordGroup": "group_531",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2048,
          "word": "flight",
          "partOfSpeech": "n.",
          "chinese": "飞行；航班",
          "example": "I'll book a direct flight to Shanghai for you",
          "wordGroup": "group_532",
          "colorIndex": 4
        },
        {
          "id": 2049,
          "word": "pilot",
          "partOfSpeech": "n.",
          "chinese": "飞行员",
          "example": "A pilot must stay alert for the changes in weather",
          "wordGroup": "group_532",
          "colorIndex": 4
        },
        {
          "id": 2050,
          "word": "passenger",
          "partOfSpeech": "n.",
          "chinese": "乘客",
          "example": "The baggage allowance per passenger is 25 kilograms",
          "wordGroup": "group_532",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2051,
          "word": "baggage",
          "partOfSpeech": "n.",
          "chinese": "（尤美）行李",
          "example": "We may have lost some pieces of baggage, so we want to make a lost-baggage report",
          "wordGroup": "group_533",
          "colorIndex": 5
        },
        {
          "id": 2052,
          "word": "luggage",
          "partOfSpeech": "n.",
          "chinese": "行李",
          "example": "I've just been informed that my luggage had already arrived",
          "wordGroup": "group_533",
          "colorIndex": 5
        },
        {
          "id": 2053,
          "word": "suitcase",
          "partOfSpeech": "n.",
          "chinese": "手提箱",
          "example": "Her suitcase is stuffed with her clothes",
          "wordGroup": "group_533",
          "colorIndex": 5
        },
        {
          "id": 2054,
          "word": "carry-on",
          "partOfSpeech": "n./adj.",
          "chinese": "（可随身携带上飞机的）小包/随身携带上飞机的",
          "example": "I have two carry-on bags with me",
          "wordGroup": "group_533",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2055,
          "word": "rack",
          "partOfSpeech": "n.",
          "chinese": "挂物架；置物架",
          "example": "He put his bag on the luggage rack",
          "wordGroup": "group_534",
          "colorIndex": 0
        },
        {
          "id": 2056,
          "word": "freight",
          "partOfSpeech": "n./v.",
          "chinese": "货运；货物/运送（货物）",
          "example": "We can send these goods by air freight or by sea freight",
          "wordGroup": "group_534",
          "colorIndex": 0
        },
        {
          "id": 2057,
          "word": "fare",
          "partOfSpeech": "n.",
          "chinese": "车费；路费",
          "example": "He didn't have enough money for the railway fare",
          "wordGroup": "group_534",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2058,
          "word": "atlas",
          "partOfSpeech": "n.",
          "chinese": "地图册；地图集",
          "example": "Check where Sydney is on your atlas",
          "wordGroup": "group_535",
          "colorIndex": 1
        },
        {
          "id": 2059,
          "word": "route",
          "partOfSpeech": "n.",
          "chinese": "路线",
          "example": "We came by a longer route than usual",
          "wordGroup": "group_535",
          "colorIndex": 1
        },
        {
          "id": 2060,
          "word": "itinerary",
          "partOfSpeech": "n.",
          "chinese": "路线；行程",
          "example": "We have some more places to visit on our itinerary",
          "wordGroup": "group_535",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2061,
          "word": "passage",
          "partOfSpeech": "n.",
          "chinese": "通过；通道；走廊",
          "example": "The bridge is not strong enough to allow for the passage of vehicles",
          "wordGroup": "group_536",
          "colorIndex": 2
        },
        {
          "id": 2062,
          "word": "intersection",
          "partOfSpeech": "n.",
          "chinese": "十字路口；交叉路口",
          "example": "The town lies at the intersection of three motorways",
          "wordGroup": "group_536",
          "colorIndex": 2
        },
        {
          "id": 2063,
          "word": "cross",
          "partOfSpeech": "n./v.",
          "chinese": "十字形；十字架/穿过",
          "example": "It's very dangerous for children to cross a busy road",
          "wordGroup": "group_536",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2064,
          "word": "way",
          "partOfSpeech": "n.",
          "chinese": "路；方式",
          "example": "I'm on my way to the grocery",
          "wordGroup": "group_537",
          "colorIndex": 3
        },
        {
          "id": 2065,
          "word": "path",
          "partOfSpeech": "n.",
          "chinese": "小路",
          "example": "We bumped up and down along the gravel path",
          "wordGroup": "group_537",
          "colorIndex": 3
        },
        {
          "id": 2066,
          "word": "lane",
          "partOfSpeech": "n.",
          "chinese": "小巷；车道",
          "example": "There are many small lanes in the quiant town",
          "wordGroup": "group_537",
          "colorIndex": 3
        },
        {
          "id": 2067,
          "word": "avenue",
          "partOfSpeech": "n.",
          "chinese": "大街；途径",
          "example": "One of the world's most beautiful avenues is the Champs-Élysées in Paris",
          "wordGroup": "group_537",
          "colorIndex": 3
        },
        {
          "id": 2068,
          "word": "highway",
          "partOfSpeech": "n.",
          "chinese": "[尤美]公路",
          "example": "A four-lane highway connects the two towns",
          "wordGroup": "group_537",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2069,
          "word": "curb",
          "partOfSpeech": "n.",
          "chinese": "路缘；起控制作用的事物",
          "example": "I stopped and stood at the curb, trying to breathe",
          "wordGroup": "group_538",
          "colorIndex": 4
        },
        {
          "id": 2070,
          "word": "signpost",
          "partOfSpeech": "n.",
          "chinese": "路标",
          "example": "The signpost showed us the right road to follow",
          "wordGroup": "group_538",
          "colorIndex": 4
        },
        {
          "id": 2071,
          "word": "pave",
          "partOfSpeech": "v.",
          "chinese": "铺（路或地面）",
          "example": "The road was paved with cobblestones",
          "wordGroup": "group_538",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2072,
          "word": "vehicle",
          "partOfSpeech": "n.",
          "chinese": "车辆；交通工具；手段；工具",
          "example": "Subway is a convenient vehicle for white-collar workers",
          "wordGroup": "group_539",
          "colorIndex": 5
        },
        {
          "id": 2073,
          "word": "auto",
          "partOfSpeech": "n.",
          "chinese": "汽车",
          "example": "The auto industry has brought many people to Detroit",
          "wordGroup": "group_539",
          "colorIndex": 5
        },
        {
          "id": 2074,
          "word": "express",
          "partOfSpeech": "n./v./adj.",
          "chinese": "特快列车；快递服务/表示/特快的",
          "example": "We have to change here for the express train",
          "wordGroup": "group_539",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2075,
          "word": "tram",
          "partOfSpeech": "n.",
          "chinese": "[尤英]有轨电车",
          "example": "If you want to go to that place, you can travel by tram",
          "wordGroup": "group_540",
          "colorIndex": 0
        },
        {
          "id": 2076,
          "word": "coach",
          "partOfSpeech": "n./v.",
          "chinese": "[英]长途汽车；教练；私人教师/训练",
          "example": "We went to New York City by coach",
          "wordGroup": "group_540",
          "colorIndex": 0
        },
        {
          "id": 2077,
          "word": "ambulance",
          "partOfSpeech": "n.",
          "chinese": "救护车",
          "example": "An ambulance was racing by with its siren wailing",
          "wordGroup": "group_540",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2078,
          "word": "truck",
          "partOfSpeech": "n.",
          "chinese": "卡车；敞篷火车",
          "example": "They transported the goods by truck",
          "wordGroup": "group_541",
          "colorIndex": 1
        },
        {
          "id": 2079,
          "word": "lorry",
          "partOfSpeech": "n.",
          "chinese": "[英]卡车",
          "example": "A heavy lorry is floundering in deep snow",
          "wordGroup": "group_541",
          "colorIndex": 1
        },
        {
          "id": 2080,
          "word": "van",
          "partOfSpeech": "n.",
          "chinese": "厢式货车；客货车",
          "example": "As the car turned the corner, it collided with a van",
          "wordGroup": "group_541",
          "colorIndex": 1
        },
        {
          "id": 2081,
          "word": "wagon",
          "partOfSpeech": "n.",
          "chinese": "四轮运货马车（或牛车）；[英]（火车的）火车车厢",
          "example": "An ox pulls a wagon into the village",
          "wordGroup": "group_541",
          "colorIndex": 1
        },
        {
          "id": 2082,
          "word": "carriage",
          "partOfSpeech": "n.",
          "chinese": "四轮马车；[英]（客运火车的）车厢",
          "example": "The carriage, which he had ordered, arrived, and we drove off",
          "wordGroup": "group_541",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2083,
          "word": "tractor",
          "partOfSpeech": "n.",
          "chinese": "拖拉机；牵引力",
          "example": "The tractor has been demaged owing to rough usage",
          "wordGroup": "group_542",
          "colorIndex": 2
        },
        {
          "id": 2084,
          "word": "cart",
          "partOfSpeech": "n.",
          "chinese": "货运马车；手推车；购物车",
          "example": "A heavy cart rumbled down the street",
          "wordGroup": "group_542",
          "colorIndex": 2
        },
        {
          "id": 2085,
          "word": "pedicab",
          "partOfSpeech": "n.",
          "chinese": "（人力）三轮车",
          "example": "They hopped on a pedicab and toured the park",
          "wordGroup": "group_542",
          "colorIndex": 2
        },
        {
          "id": 2086,
          "word": "cycle",
          "partOfSpeech": "v./n.",
          "chinese": "骑/周期；自行车",
          "example": "In many universities, students cycle from their dorms to the classroom or library",
          "wordGroup": "group_542",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2087,
          "word": "garage",
          "partOfSpeech": "n.",
          "chinese": "汽车修理厂；车库",
          "example": "My car broke down, and it has been towed to a garage",
          "wordGroup": "group_543",
          "colorIndex": 3
        },
        {
          "id": 2088,
          "word": "motor",
          "partOfSpeech": "n./adj.",
          "chinese": "发动机/机动的",
          "example": "If the battery is dead, the motor won't be started",
          "wordGroup": "group_543",
          "colorIndex": 3
        },
        {
          "id": 2089,
          "word": "horsepower",
          "partOfSpeech": "n.",
          "chinese": "马力",
          "example": "The horsepower of the engine is not very impressive",
          "wordGroup": "group_543",
          "colorIndex": 3
        },
        {
          "id": 2090,
          "word": "wheel",
          "partOfSpeech": "n.",
          "chinese": "方向盘；车轮",
          "example": "The driver slumped over the steering wheel",
          "wordGroup": "group_543",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2091,
          "word": "brake",
          "partOfSpeech": "n./v.",
          "chinese": "车闸；刹车/刹车",
          "example": "The car in front of me stopped suddenly, and I had to brake sharply",
          "wordGroup": "group_544",
          "colorIndex": 4
        },
        {
          "id": 2092,
          "word": "tire/tyre",
          "partOfSpeech": "n.",
          "chinese": "轮胎",
          "example": "My uncle jacked up his car to fix a flat tire",
          "wordGroup": "group_544",
          "colorIndex": 4
        },
        {
          "id": 2093,
          "word": "honk",
          "partOfSpeech": "n./v.",
          "chinese": "汽车喇叭声；鹅叫声/按（汽车喇叭）",
          "example": "The drivers honked their horns, hoping to disperse the crowd in the streets",
          "wordGroup": "group_544",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2094,
          "word": "crew",
          "partOfSpeech": "n.",
          "chinese": "全体工作人员；一组工作人员",
          "example": "I'd like to thank you on your behalf of the crew",
          "wordGroup": "group_545",
          "colorIndex": 5
        },
        {
          "id": 2095,
          "word": "captain",
          "partOfSpeech": "n.",
          "chinese": "船长；队长",
          "example": "The captain of the sinking ship used flares to attract the attention of the coast guard",
          "wordGroup": "group_545",
          "colorIndex": 5
        },
        {
          "id": 2096,
          "word": "steward",
          "partOfSpeech": "n.",
          "chinese": "男乘务员；管家",
          "example": "He is a steward of that great mansion",
          "wordGroup": "group_545",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2097,
          "word": "emergency",
          "partOfSpeech": "n./adj.",
          "chinese": "紧急事件/应急的",
          "example": "He has the ability to keep calm in emergencies",
          "wordGroup": "group_546",
          "colorIndex": 0
        },
        {
          "id": 2098,
          "word": "wreck",
          "partOfSpeech": "v./n.",
          "chinese": "使失事；破坏/失事的船只；残破的东西",
          "example": "Because of the tsunami, the coast was a wreck",
          "wordGroup": "group_546",
          "colorIndex": 0
        },
        {
          "id": 2099,
          "word": "crash",
          "partOfSpeech": "v.",
          "chinese": "撞击；崩溃；破产",
          "example": "The rocks crash down onto the car",
          "wordGroup": "group_546",
          "colorIndex": 0
        },
        {
          "id": 2100,
          "word": "crush",
          "partOfSpeech": "v./n.",
          "chinese": "压碎、压坏/拥挤的人群；迷恋；迷恋对象",
          "example": "There was such a crush on the bus that I could hardly breathe",
          "wordGroup": "group_546",
          "colorIndex": 0
        },
        {
          "id": 2101,
          "word": "dash",
          "partOfSpeech": "v.",
          "chinese": "猛冲；猛摔",
          "example": "He dashed the bowl to bits against the ground",
          "wordGroup": "group_546",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2102,
          "word": "vanish",
          "partOfSpeech": "v.",
          "chinese": "突然消失；绝迹",
          "example": "He seemed to vanish into thin air",
          "wordGroup": "group_547",
          "colorIndex": 1
        },
        {
          "id": 2103,
          "word": "disappear",
          "partOfSpeech": "v.",
          "chinese": "失踪；消失",
          "example": "He has disappeared for three years",
          "wordGroup": "group_547",
          "colorIndex": 1
        },
        {
          "id": 2104,
          "word": "hazard",
          "partOfSpeech": "n./v.",
          "chinese": "危险/使冒风险",
          "example": "There are many hazards in a journey across the Arctic",
          "wordGroup": "group_547",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2105,
          "word": "harbour/harbor",
          "partOfSpeech": "n.",
          "chinese": "港口",
          "example": "Our hotel room overlooked a pretty little harbour",
          "wordGroup": "group_548",
          "colorIndex": 2
        },
        {
          "id": 2106,
          "word": "dock",
          "partOfSpeech": "n.",
          "chinese": "码头；船坞",
          "example": "The ship's hull scraped along the side of the dock",
          "wordGroup": "group_548",
          "colorIndex": 2
        },
        {
          "id": 2107,
          "word": "anchor",
          "partOfSpeech": "n.",
          "chinese": "锚",
          "example": "We raised the anchor and set sail during the night",
          "wordGroup": "group_548",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2108,
          "word": "submerge",
          "partOfSpeech": "v.",
          "chinese": "（使）浸没；掩盖",
          "example": "I watched the submarine submerge",
          "wordGroup": "group_549",
          "colorIndex": 3
        },
        {
          "id": 2109,
          "word": "sailor",
          "partOfSpeech": "n.",
          "chinese": "水手；海员",
          "example": "A sailor is at the mercy of the weather",
          "wordGroup": "group_549",
          "colorIndex": 3
        },
        {
          "id": 2110,
          "word": "seaman",
          "partOfSpeech": "n.",
          "chinese": "海员；水手",
          "example": "There are many skilled seamen on our ship",
          "wordGroup": "group_549",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2111,
          "word": "carrier",
          "partOfSpeech": "n.",
          "chinese": "航空母舰；运输工具",
          "example": "The missile is launched from the aircraft carrier",
          "wordGroup": "group_550",
          "colorIndex": 4
        },
        {
          "id": 2112,
          "word": "steamer",
          "partOfSpeech": "n.",
          "chinese": "汽船；轮船",
          "example": "The steamer arrived at the harbor this morning",
          "wordGroup": "group_550",
          "colorIndex": 4
        },
        {
          "id": 2113,
          "word": "liner",
          "partOfSpeech": "n.",
          "chinese": "邮轮；客轮",
          "example": "The liner has been refitted from stern to stern 从头到尾整修",
          "wordGroup": "group_550",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2114,
          "word": "vessel",
          "partOfSpeech": "n.",
          "chinese": "大船；舰；容器；器皿；血管",
          "example": "We haved cited the vessel and are following it",
          "wordGroup": "group_551",
          "colorIndex": 5
        },
        {
          "id": 2115,
          "word": "ferry",
          "partOfSpeech": "n./v.",
          "chinese": "渡船/渡运",
          "example": "We can take the ferry that crosses the river every hour",
          "wordGroup": "group_551",
          "colorIndex": 5
        },
        {
          "id": 2116,
          "word": "sail",
          "partOfSpeech": "v.",
          "chinese": "航行；驾驶（帆船）",
          "example": "His ship has been given the all-clear to sail",
          "wordGroup": "group_551",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2117,
          "word": "raft",
          "partOfSpeech": "n.",
          "chinese": "木筏；木排",
          "example": "After a series of adventures alone on a raft, he eventually reached the village",
          "wordGroup": "group_552",
          "colorIndex": 0
        },
        {
          "id": 2118,
          "word": "canoe",
          "partOfSpeech": "n.",
          "chinese": "独木舟",
          "example": "We crossed the lake in a canoe",
          "wordGroup": "group_552",
          "colorIndex": 0
        },
        {
          "id": 2119,
          "word": "oar",
          "partOfSpeech": "n./v.",
          "chinese": "桨/用桨划",
          "example": "In dragon boat rowing, each paddler has one oar",
          "wordGroup": "group_552",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2120,
          "word": "deck",
          "partOfSpeech": "n./v.",
          "chinese": "甲板/装饰",
          "example": "The deck of the sailing ship was made of thick planks",
          "wordGroup": "group_553",
          "colorIndex": 1
        },
        {
          "id": 2121,
          "word": "turbine",
          "partOfSpeech": "n.",
          "chinese": "涡轮机",
          "example": "The turbine is spun by the high pressure gases",
          "wordGroup": "group_553",
          "colorIndex": 1
        },
        {
          "id": 2122,
          "word": "propeller",
          "partOfSpeech": "n.",
          "chinese": "螺旋桨，推进器",
          "example": "The propeller starts to spin around",
          "wordGroup": "group_553",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2123,
          "word": "stern",
          "partOfSpeech": "n./adj.",
          "chinese": "船尾/严厉的，苛刻的；严峻的，棘手的",
          "example": "She seated herself in the stern",
          "wordGroup": "group_554",
          "colorIndex": 2
        },
        {
          "id": 2124,
          "word": "aboard",
          "partOfSpeech": "adv.",
          "chinese": "在（船、飞机等）上",
          "example": "All passengers aboard fell into the river",
          "wordGroup": "group_554",
          "colorIndex": 2
        },
        {
          "id": 2125,
          "word": "embark",
          "partOfSpeech": "v.",
          "chinese": "上船、飞机等；开始做",
          "example": "They embarked at Liverpool for New York",
          "wordGroup": "group_554",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2126,
          "word": "channel",
          "partOfSpeech": "n.",
          "chinese": "频道；航道；海峡",
          "example": "The English Channel is between France and England",
          "wordGroup": "group_555",
          "colorIndex": 3
        },
        {
          "id": 2127,
          "word": "canal",
          "partOfSpeech": "n.",
          "chinese": "运河；（人体内输送食物、气体等的）管",
          "example": "The canal is now open to shipping",
          "wordGroup": "group_555",
          "colorIndex": 3
        },
        {
          "id": 2128,
          "word": "ditch",
          "partOfSpeech": "n./v.",
          "chinese": "沟、渠/抛弃",
          "example": "When the road became impassable, they ditched their car and walked",
          "wordGroup": "group_555",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2129,
          "word": "railroad",
          "partOfSpeech": "n.",
          "chinese": "[美]铁路；铁路公司",
          "example": "The building of the railroad is progressing",
          "wordGroup": "group_556",
          "colorIndex": 4
        },
        {
          "id": 2130,
          "word": "railway",
          "partOfSpeech": "n.",
          "chinese": "[英]铁路；铁路系统",
          "example": "The goods were sent to you by railway",
          "wordGroup": "group_556",
          "colorIndex": 4
        },
        {
          "id": 2131,
          "word": "locomotive",
          "partOfSpeech": "n.",
          "chinese": "火车头；机车",
          "example": "The locomotive is detached from the train",
          "wordGroup": "group_556",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2132,
          "word": "subway",
          "partOfSpeech": "n.",
          "chinese": "[英]地下通道；[美]地铁",
          "example": "There is a new subway being built",
          "wordGroup": "group_557",
          "colorIndex": 5
        },
        {
          "id": 2133,
          "word": "underground",
          "partOfSpeech": "adj./n.",
          "chinese": "地下的；秘密的/[英]地铁",
          "example": "There is an underground passage leading to the old house",
          "wordGroup": "group_557",
          "colorIndex": 5
        },
        {
          "id": 2134,
          "word": "tunnel",
          "partOfSpeech": "n.",
          "chinese": "隧道、地道",
          "example": "The train rolled into a tunnel and everything went black",
          "wordGroup": "group_557",
          "colorIndex": 5
        },
        {
          "id": 2135,
          "word": "rail",
          "partOfSpeech": "n.",
          "chinese": "栏杆；铁路系统",
          "example": "The man was holding onto the rail as he walked down the stairs",
          "wordGroup": "group_557",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2136,
          "word": "depart",
          "partOfSpeech": "v.",
          "chinese": "离开；启程",
          "example": "When does the next train depart?",
          "wordGroup": "group_558",
          "colorIndex": 0
        },
        {
          "id": 2137,
          "word": "arrive",
          "partOfSpeech": "v.",
          "chinese": "到达；取得成功",
          "example": "You must arrive at the airport at least two hours in advance",
          "wordGroup": "group_558",
          "colorIndex": 0
        },
        {
          "id": 2138,
          "word": "destination",
          "partOfSpeech": "n.",
          "chinese": "目的地；终点",
          "example": "We eventually arrived at our destination",
          "wordGroup": "group_558",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2139,
          "word": "delay",
          "partOfSpeech": "n./v.",
          "chinese": "耽搁；延期/使耽搁；使延期",
          "example": "We have decided to delay our holiday until September",
          "wordGroup": "group_559",
          "colorIndex": 1
        },
        {
          "id": 2140,
          "word": "postpone",
          "partOfSpeech": "v.",
          "chinese": "推迟；使延期",
          "example": "The match was postponed from March the 5th to March the 19th",
          "wordGroup": "group_559",
          "colorIndex": 1
        },
        {
          "id": 2141,
          "word": "defer",
          "partOfSpeech": "v.",
          "chinese": "推迟；延期",
          "example": "We have to defer our departure because of the snowstorm",
          "wordGroup": "group_559",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2142,
          "word": "lull",
          "partOfSpeech": "n./v.",
          "chinese": "暂停；暂时平静期/使昏昏欲睡",
          "example": "The monotonous sound of the train's movement lulled me to sleep",
          "wordGroup": "group_560",
          "colorIndex": 2
        },
        {
          "id": 2143,
          "word": "expire",
          "partOfSpeech": "v.",
          "chinese": "期满；气绝；死亡",
          "example": "My passport is about to expire",
          "wordGroup": "group_560",
          "colorIndex": 2
        },
        {
          "id": 2144,
          "word": "due",
          "partOfSpeech": "adj.",
          "chinese": "到期的；预期的",
          "example": "If you are going to the library, would you mind returning this book for me? It's due today",
          "wordGroup": "group_560",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2145,
          "word": "postage",
          "partOfSpeech": "n.",
          "chinese": "邮费；邮资",
          "example": "What is the postage for an airmail letter",
          "wordGroup": "group_561",
          "colorIndex": 3
        },
        {
          "id": 2146,
          "word": "stamp",
          "partOfSpeech": "n./v.",
          "chinese": "邮票；印章/贴邮票；盖章",
          "example": "You can buy a stamp over there and affix it to the postcard",
          "wordGroup": "group_561",
          "colorIndex": 3
        },
        {
          "id": 2147,
          "word": "envelope",
          "partOfSpeech": "n.",
          "chinese": "信封",
          "example": "He glued a stamp onto the envelope",
          "wordGroup": "group_561",
          "colorIndex": 3
        },
        {
          "id": 2148,
          "word": "mail",
          "partOfSpeech": "n./v.",
          "chinese": "邮件；邮包；邮政/邮寄",
          "example": "She opened her mail and took out a vase carefully",
          "wordGroup": "group_561",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2149,
          "word": "packet",
          "partOfSpeech": "n.",
          "chinese": "包装盒；小件包裹",
          "example": "The government has imposed an additional tax on a packet of cigarettes",
          "wordGroup": "group_562",
          "colorIndex": 4
        },
        {
          "id": 2150,
          "word": "package",
          "partOfSpeech": "n./v.",
          "chinese": "包裹；盒；包/包装",
          "example": "The old town was packaged to attract tourists",
          "wordGroup": "group_562",
          "colorIndex": 4
        },
        {
          "id": 2151,
          "word": "bind",
          "partOfSpeech": "v.",
          "chinese": "捆；绑",
          "example": "Love rules without a sword and binds without a chord",
          "wordGroup": "group_562",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2152,
          "word": "parcel",
          "partOfSpeech": "v./n.",
          "chinese": "打包；包/土地的一块；包裹",
          "example": "He parcelled up the books",
          "wordGroup": "group_563",
          "colorIndex": 5
        },
        {
          "id": 2153,
          "word": "load",
          "partOfSpeech": "v./n.",
          "chinese": "装载；装满/负荷；大量",
          "example": "The lorry was carrying a load of pineapples",
          "wordGroup": "group_563",
          "colorIndex": 5
        },
        {
          "id": 2154,
          "word": "burden",
          "partOfSpeech": "v./n.",
          "chinese": "使负担/重担；负担",
          "example": "It's a burden I have been carrying for a long time",
          "wordGroup": "group_563",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2155,
          "word": "transfer",
          "partOfSpeech": "v.",
          "chinese": "迁移；转移；调动",
          "example": "The cat has transferred her affection to her new master",
          "wordGroup": "group_564",
          "colorIndex": 0
        },
        {
          "id": 2156,
          "word": "transmit",
          "partOfSpeech": "v.",
          "chinese": "传送；传染；传播；传输",
          "example": "Parents transmit some of their values and ideas to their children",
          "wordGroup": "group_564",
          "colorIndex": 0
        },
        {
          "id": 2157,
          "word": "transit",
          "partOfSpeech": "v./n.",
          "chinese": "通过；运送/运输；通行；过境；中转",
          "example": "Transit passengers, please go to the transit lounge",
          "wordGroup": "group_564",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2158,
          "word": "deliver",
          "partOfSpeech": "v.",
          "chinese": "传送；递送",
          "example": "You don't have to go out into the rain since the store delivers for free",
          "wordGroup": "group_565",
          "colorIndex": 1
        },
        {
          "id": 2159,
          "word": "convey",
          "partOfSpeech": "v.",
          "chinese": "运送；输送；表达；传递",
          "example": "It's hard to convey my feelings in words",
          "wordGroup": "group_565",
          "colorIndex": 1
        },
        {
          "id": 2160,
          "word": "speed",
          "partOfSpeech": "n.",
          "chinese": "速度；迅速",
          "example": "The police advised motorists to reduce their speed because of the fog",
          "wordGroup": "group_565",
          "colorIndex": 1
        },
        {
          "id": 2161,
          "word": "velocity",
          "partOfSpeech": "n.",
          "chinese": "速度",
          "example": "The velocity of light is about 300,000 kilometers per second",
          "wordGroup": "group_565",
          "colorIndex": 1
        },
        {
          "id": 2162,
          "word": "swift",
          "partOfSpeech": "adj.",
          "chinese": "迅速的；敏捷的",
          "example": "With the failure of the peace talks, all hopes of a swift end to the war have flown out the window",
          "wordGroup": "group_565",
          "colorIndex": 1
        }
      ]
    ]
  },
  {
    "title": "国家政府",
    "groups": [
      [
        {
          "id": 2163,
          "word": "republic",
          "partOfSpeech": "n.",
          "chinese": "共和国；共和政体",
          "example": "He was one of the architects of the republic",
          "wordGroup": "group_565",
          "colorIndex": 1
        },
        {
          "id": 2164,
          "word": "Marxism",
          "partOfSpeech": "n.",
          "chinese": "马克思主义",
          "example": "The essence of Marxism is seeking truth from facts",
          "wordGroup": "group_565",
          "colorIndex": 1
        },
        {
          "id": 2165,
          "word": "socialism",
          "partOfSpeech": "n.",
          "chinese": "社会主义",
          "example": "Let us do our best to build socialism",
          "wordGroup": "group_565",
          "colorIndex": 1
        },
        {
          "id": 2166,
          "word": "communism",
          "partOfSpeech": "n.",
          "chinese": "共产主义",
          "example": "Communism is based on Marxism",
          "wordGroup": "group_565",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2167,
          "word": "regime",
          "partOfSpeech": "n.",
          "chinese": "统治制度；政权、政体",
          "example": "The regime got rid of most of its opponents",
          "wordGroup": "group_566",
          "colorIndex": 2
        },
        {
          "id": 2168,
          "word": "government",
          "partOfSpeech": "n.",
          "chinese": "政府、政体、统治",
          "example": "He is a man of some influence in the government",
          "wordGroup": "group_566",
          "colorIndex": 2
        },
        {
          "id": 2169,
          "word": "authority",
          "partOfSpeech": "n.",
          "chinese": "权力；权威人士",
          "example": "The government is the highest authority in a country",
          "wordGroup": "group_566",
          "colorIndex": 2
        },
        {
          "id": 2170,
          "word": "political",
          "partOfSpeech": "adj.",
          "chinese": "政治的；政党的",
          "example": "The British political system has evolved over several centuries",
          "wordGroup": "group_566",
          "colorIndex": 2
        },
        {
          "id": 2171,
          "word": "hierarchy",
          "partOfSpeech": "n.",
          "chinese": "等级制度；统治集团",
          "example": "There is a rigid hierarchy of power in that country",
          "wordGroup": "group_566",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2172,
          "word": "democracy",
          "partOfSpeech": "n.",
          "chinese": "民主、民主制度；民主国家",
          "example": "The military government promised to restore democracy within one year",
          "wordGroup": "group_567",
          "colorIndex": 3
        },
        {
          "id": 2173,
          "word": "bureaucracy",
          "partOfSpeech": "n.",
          "chinese": "官僚机构；官僚主义；官僚作风",
          "example": "The government promised to reorganize the bureaucracy",
          "wordGroup": "group_567",
          "colorIndex": 3
        },
        {
          "id": 2174,
          "word": "egalitarian",
          "partOfSpeech": "adj./n.",
          "chinese": "平等主义的/平等主义者",
          "example": "Clearly, the egalitarian society remains a dream",
          "wordGroup": "group_567",
          "colorIndex": 3
        },
        {
          "id": 2175,
          "word": "materialism",
          "partOfSpeech": "n.",
          "chinese": "唯物主义；唯物论",
          "example": "Both of them believed in Marxism and materialism",
          "wordGroup": "group_567",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2176,
          "word": "revolution",
          "partOfSpeech": "n.",
          "chinese": "革命；巨大变化",
          "example": "The invention of aircraft caused a revolution in our ways of traveling",
          "wordGroup": "group_568",
          "colorIndex": 4
        },
        {
          "id": 2177,
          "word": "reform",
          "partOfSpeech": "v./n.",
          "chinese": "改革、改良；改过自新/改革、改良",
          "example": "He promised to reform if given another chance",
          "wordGroup": "group_568",
          "colorIndex": 4
        },
        {
          "id": 2178,
          "word": "process",
          "partOfSpeech": "n./v.",
          "chinese": "过程；进程/处理；加工；列队前进",
          "example": "They went over every process again, but couldn't find the cause of the problem",
          "wordGroup": "group_568",
          "colorIndex": 4
        },
        {
          "id": 2179,
          "word": "conservative",
          "partOfSpeech": "adj./n.",
          "chinese": "保守的/保守党员",
          "example": "The researchers made a conservative estimation of the population of New Delhi",
          "wordGroup": "group_568",
          "colorIndex": 4
        },
        {
          "id": 2180,
          "word": "meltdown",
          "partOfSpeech": "n.",
          "chinese": "堆芯熔毁；崩溃",
          "example": "The commentator sees a bright side to the financial meltdown",
          "wordGroup": "group_568",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2181,
          "word": "municipal",
          "partOfSpeech": "adj.",
          "chinese": "市政的，地方政府的",
          "example": "He went to a municipal university",
          "wordGroup": "group_569",
          "colorIndex": 5
        },
        {
          "id": 2182,
          "word": "neutral",
          "partOfSpeech": "adj.",
          "chinese": "中立的；中立国的",
          "example": "He is neutral in this argument and doesn't care who wins",
          "wordGroup": "group_569",
          "colorIndex": 5
        },
        {
          "id": 2183,
          "word": "bilateral",
          "partOfSpeech": "adj.",
          "chinese": "双边的",
          "example": "They have signed a bilateral peace treaty",
          "wordGroup": "group_569",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2184,
          "word": "arena",
          "partOfSpeech": "n.",
          "chinese": "竞技场、运动场；舞台、活动领域",
          "example": "He withdrew from the political arena",
          "wordGroup": "group_570",
          "colorIndex": 0
        },
        {
          "id": 2185,
          "word": "flag",
          "partOfSpeech": "n.",
          "chinese": "旗",
          "example": "Flags were fluttering in the wind",
          "wordGroup": "group_570",
          "colorIndex": 0
        },
        {
          "id": 2186,
          "word": "banner",
          "partOfSpeech": "n.",
          "chinese": "横幅、标语",
          "example": "Banners demanding an immediate ceasefire are flying in the city's main square",
          "wordGroup": "group_570",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2187,
          "word": "president",
          "partOfSpeech": "n.",
          "chinese": "总统；校长；董事长",
          "example": "When the president of the country retired, the vice-president was elevated to his position",
          "wordGroup": "group_571",
          "colorIndex": 1
        },
        {
          "id": 2188,
          "word": "premier",
          "partOfSpeech": "n./adj.",
          "chinese": "总理、首相/首要的，第一的",
          "example": "The premier deals with important state affairs",
          "wordGroup": "group_571",
          "colorIndex": 1
        },
        {
          "id": 2189,
          "word": "minister",
          "partOfSpeech": "n.",
          "chinese": "部长；大臣；公使",
          "example": "The minister can only act in this matter with the sanction of parliament",
          "wordGroup": "group_571",
          "colorIndex": 1
        },
        {
          "id": 2190,
          "word": "secretary",
          "partOfSpeech": "n.",
          "chinese": "秘书、书记员、大臣",
          "example": "The new secretary is being lectured for the poor quality of her work",
          "wordGroup": "group_571",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2191,
          "word": "parliament",
          "partOfSpeech": "n.",
          "chinese": "议会、国会",
          "example": "He lost his seat in the parliament at the election",
          "wordGroup": "group_572",
          "colorIndex": 2
        },
        {
          "id": 2192,
          "word": "senate",
          "partOfSpeech": "n.",
          "chinese": "大学理事会",
          "example": "The bill was approved by both the House and the Senate",
          "wordGroup": "group_572",
          "colorIndex": 2
        },
        {
          "id": 2193,
          "word": "conference",
          "partOfSpeech": "n.",
          "chinese": "（常持续数日的大型正式）会议；正式商谈",
          "example": "The world's conference on human rights discussed the common problems of mankind and advanced human rights work around the world",
          "wordGroup": "group_572",
          "colorIndex": 2
        },
        {
          "id": 2194,
          "word": "meeting",
          "partOfSpeech": "n.",
          "chinese": "会议；会面",
          "example": "I have written down the date of the next meeting in my diary",
          "wordGroup": "group_572",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2195,
          "word": "headquarters",
          "partOfSpeech": "n.",
          "chinese": "总部，总公司；司令部",
          "example": "The company's headquarters is in Paris",
          "wordGroup": "group_573",
          "colorIndex": 3
        },
        {
          "id": 2196,
          "word": "delegation",
          "partOfSpeech": "n.",
          "chinese": "代表团；委派",
          "example": "The delegation ended their visit to China on March the 30th",
          "wordGroup": "group_573",
          "colorIndex": 3
        },
        {
          "id": 2197,
          "word": "behalf",
          "partOfSpeech": "n.",
          "chinese": "[on ~ of sb.]代表某人",
          "example": "The president signed the document on behalf of the school",
          "wordGroup": "group_573",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2198,
          "word": "police",
          "partOfSpeech": "n.",
          "chinese": "警察",
          "example": "His strange behavior made the police suspicious",
          "wordGroup": "group_574",
          "colorIndex": 4
        },
        {
          "id": 2199,
          "word": "statesman",
          "partOfSpeech": "n.",
          "chinese": "政治家",
          "example": "He will go down in history as a great statesman",
          "wordGroup": "group_574",
          "colorIndex": 4
        },
        {
          "id": 2200,
          "word": "mayor",
          "partOfSpeech": "n.",
          "chinese": "市长",
          "example": "The mayor is determined to clean up the city",
          "wordGroup": "group_574",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2201,
          "word": "service",
          "partOfSpeech": "n.",
          "chinese": "服务",
          "example": "The volunteers for community service are doing a good job",
          "wordGroup": "group_575",
          "colorIndex": 5
        },
        {
          "id": 2202,
          "word": "office",
          "partOfSpeech": "n.",
          "chinese": "办公室；要职；官职；[Office]部、局、厅",
          "example": "Now he holds office in the foreign ministry",
          "wordGroup": "group_575",
          "colorIndex": 5
        },
        {
          "id": 2203,
          "word": "bureau",
          "partOfSpeech": "n.",
          "chinese": "局、处、科；办事处",
          "example": "The Bureau of Land Management is not so far from here",
          "wordGroup": "group_575",
          "colorIndex": 5
        },
        {
          "id": 2204,
          "word": "department",
          "partOfSpeech": "n.",
          "chinese": "（政府的）部门；（大学的）系、所",
          "example": "He worked in the community welfare department",
          "wordGroup": "group_575",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2205,
          "word": "harness",
          "partOfSpeech": "v.",
          "chinese": "利用；控制",
          "example": "Some scientists are working hard at how tide can be harnessed to produce electricity",
          "wordGroup": "group_576",
          "colorIndex": 0
        },
        {
          "id": 2206,
          "word": "administration",
          "partOfSpeech": "n.",
          "chinese": "管理；行政",
          "example": "You will need some experience in administration before you can run the department",
          "wordGroup": "group_576",
          "colorIndex": 0
        },
        {
          "id": 2207,
          "word": "dominate",
          "partOfSpeech": "v.",
          "chinese": "支配；控制；占优势",
          "example": "A great man can dominate others by force of character",
          "wordGroup": "group_576",
          "colorIndex": 0
        },
        {
          "id": 2208,
          "word": "power",
          "partOfSpeech": "n.",
          "chinese": "能源；权力；政权；能力",
          "example": "A person should rely upon his or her own power",
          "wordGroup": "group_576",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2209,
          "word": "influence",
          "partOfSpeech": "n./v.",
          "chinese": "影响；作用/影响",
          "example": "I was influenced by my teacher and chose to study science at college",
          "wordGroup": "group_577",
          "colorIndex": 1
        },
        {
          "id": 2210,
          "word": "affect",
          "partOfSpeech": "v.",
          "chinese": "影响；打动；使悲伤",
          "example": "The disease affects the central nervous system",
          "wordGroup": "group_577",
          "colorIndex": 1
        },
        {
          "id": 2211,
          "word": "importance",
          "partOfSpeech": "n.",
          "chinese": "重要，重要性",
          "example": "The police officer emphasised the importance of careful driving",
          "wordGroup": "group_577",
          "colorIndex": 1
        },
        {
          "id": 2212,
          "word": "significance",
          "partOfSpeech": "n.",
          "chinese": "重要性；意义",
          "example": "The fact has little significance for us",
          "wordGroup": "group_577",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2213,
          "word": "organization/organisation",
          "partOfSpeech": "n.",
          "chinese": "组织；团体；机构",
          "example": "They have established a student organization",
          "wordGroup": "group_578",
          "colorIndex": 2
        },
        {
          "id": 2214,
          "word": "association",
          "partOfSpeech": "n.",
          "chinese": "协会；团体；关联",
          "example": "Have you ever joined the parent teacher association?",
          "wordGroup": "group_578",
          "colorIndex": 2
        },
        {
          "id": 2215,
          "word": "union",
          "partOfSpeech": "n.",
          "chinese": "联合；联盟；工会",
          "example": "The largest teachers' union supports the education reforms",
          "wordGroup": "group_578",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2216,
          "word": "community",
          "partOfSpeech": "n.",
          "chinese": "社区；群体；（生物的）群落",
          "example": "To host the Olympics Games, Beijing expanded its English speaking community",
          "wordGroup": "group_579",
          "colorIndex": 3
        },
        {
          "id": 2217,
          "word": "consortium",
          "partOfSpeech": "n.",
          "chinese": "财团；联营企业",
          "example": "Several big companies have formed a consortium",
          "wordGroup": "group_579",
          "colorIndex": 3
        },
        {
          "id": 2218,
          "word": "league",
          "partOfSpeech": "n.",
          "chinese": "联赛；联盟；同盟",
          "example": "Our club is a member of the football league",
          "wordGroup": "group_579",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2219,
          "word": "institution",
          "partOfSpeech": "n.",
          "chinese": "机构",
          "example": "Universities are educational institutions",
          "wordGroup": "group_580",
          "colorIndex": 4
        },
        {
          "id": 2220,
          "word": "unite",
          "partOfSpeech": "v.",
          "chinese": "联合；团结",
          "example": "All parties should unite their efforts to bring peace",
          "wordGroup": "group_580",
          "colorIndex": 4
        },
        {
          "id": 2221,
          "word": "unique",
          "partOfSpeech": "adj.",
          "chinese": "独一无二的；唯一的；独特的",
          "example": "Each person's fingerprints are unique",
          "wordGroup": "group_580",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2222,
          "word": "nation",
          "partOfSpeech": "n.",
          "chinese": "国家；民族；国民",
          "example": "My judgment may be faulty, but my loyalty to the nation could not be questioned",
          "wordGroup": "group_581",
          "colorIndex": 5
        },
        {
          "id": 2223,
          "word": "global",
          "partOfSpeech": "adj.",
          "chinese": "全球的；全世界的",
          "example": "In the coming decades, the pacific rim will become the main impetus of the global economy",
          "wordGroup": "group_581",
          "colorIndex": 5
        },
        {
          "id": 2224,
          "word": "worldwide",
          "partOfSpeech": "adj.",
          "chinese": "世界范围的；遍及全球的",
          "example": "The money came from worldwide contribution",
          "wordGroup": "group_581",
          "colorIndex": 5
        },
        {
          "id": 2225,
          "word": "federal",
          "partOfSpeech": "adj.",
          "chinese": "联邦的；联合的",
          "example": "Switzerland is a federal state in Europe",
          "wordGroup": "group_581",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2226,
          "word": "foreign",
          "partOfSpeech": "adj.",
          "chinese": "外国的；外来的；外交的",
          "example": "The new policy helped us to attract a lot of foreign investment",
          "wordGroup": "group_582",
          "colorIndex": 0
        },
        {
          "id": 2227,
          "word": "overseas",
          "partOfSpeech": "adj./adv.",
          "chinese": "海外的；外国的/向海外；在海外",
          "example": "The overseas students were concerned about the destiny of their motherland",
          "wordGroup": "group_582",
          "colorIndex": 0
        },
        {
          "id": 2228,
          "word": "abroad",
          "partOfSpeech": "adv.",
          "chinese": "到国外；在国外；广为流传",
          "example": "The news spread abroad",
          "wordGroup": "group_582",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2229,
          "word": "civil",
          "partOfSpeech": "adj.",
          "chinese": "公民的；国内的；民用的；斯文的",
          "example": "Gone With the Wind, a film about American Civil War, is still regarded as one of the best Hollywood films",
          "wordGroup": "group_583",
          "colorIndex": 1
        },
        {
          "id": 2230,
          "word": "emigrate",
          "partOfSpeech": "v.",
          "chinese": "移居国外",
          "example": "They did not receive the permission to emigrate to the United States",
          "wordGroup": "group_583",
          "colorIndex": 1
        },
        {
          "id": 2231,
          "word": "immigrate",
          "partOfSpeech": "v.",
          "chinese": "（从外地）移居；移入",
          "example": "Many British colonists immigrated to the new world",
          "wordGroup": "group_583",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2232,
          "word": "reign",
          "partOfSpeech": "n./v.",
          "chinese": "君主统治的时期/统治",
          "example": "The reign of Queen Victoria lasted more than 60 years",
          "wordGroup": "group_584",
          "colorIndex": 2
        },
        {
          "id": 2233,
          "word": "puppet",
          "partOfSpeech": "n.",
          "chinese": "玩偶；傀儡",
          "example": "Are we the puppets of fate?",
          "wordGroup": "group_584",
          "colorIndex": 2
        },
        {
          "id": 2234,
          "word": "throne",
          "partOfSpeech": "n.",
          "chinese": "王位；宝座",
          "example": "He was only eight when he ascended the throne",
          "wordGroup": "group_584",
          "colorIndex": 2
        },
        {
          "id": 2235,
          "word": "crown",
          "partOfSpeech": "n./v.",
          "chinese": "王冠/为...加冕",
          "example": "They crowned him shortly after the old king's death",
          "wordGroup": "group_584",
          "colorIndex": 2
        },
        {
          "id": 2236,
          "word": "wreath",
          "partOfSpeech": "n.",
          "chinese": "花环；花冠；花圈",
          "example": "A group of students placed a wreath at the tomb of the national hero",
          "wordGroup": "group_584",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2237,
          "word": "colony",
          "partOfSpeech": "n.",
          "chinese": "殖民地",
          "example": "Britain lost its American colonies in a revolution",
          "wordGroup": "group_585",
          "colorIndex": 3
        },
        {
          "id": 2238,
          "word": "liberty",
          "partOfSpeech": "n.",
          "chinese": "自由",
          "example": "Those prisoners are dreaming of liberty",
          "wordGroup": "group_585",
          "colorIndex": 3
        },
        {
          "id": 2239,
          "word": "independence",
          "partOfSpeech": "n.",
          "chinese": "独立；自立",
          "example": "The country attained its independence in 1972",
          "wordGroup": "group_585",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2240,
          "word": "slum",
          "partOfSpeech": "n.",
          "chinese": "贫民窟",
          "example": "I grew up in the East London slums",
          "wordGroup": "group_586",
          "colorIndex": 4
        },
        {
          "id": 2241,
          "word": "refuge",
          "partOfSpeech": "n.",
          "chinese": "避难；庇护；避难所",
          "example": "A small cave was the only refuge from the cold",
          "wordGroup": "group_586",
          "colorIndex": 4
        },
        {
          "id": 2242,
          "word": "asylum",
          "partOfSpeech": "n.",
          "chinese": "庇护；精神病院",
          "example": "The terrorist tried to seek political asylum in that country",
          "wordGroup": "group_586",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2243,
          "word": "population",
          "partOfSpeech": "n.",
          "chinese": "人口；人口数量",
          "example": "There is a stable increase in population of this city",
          "wordGroup": "group_587",
          "colorIndex": 5
        },
        {
          "id": 2244,
          "word": "demographic",
          "partOfSpeech": "adj.",
          "chinese": "人口的，人口统计的",
          "example": "I have no knowledge of demographic theory",
          "wordGroup": "group_587",
          "colorIndex": 5
        },
        {
          "id": 2245,
          "word": "citizen",
          "partOfSpeech": "n.",
          "chinese": "公民；市民",
          "example": "She a lawful citizen",
          "wordGroup": "group_587",
          "colorIndex": 5
        },
        {
          "id": 2246,
          "word": "resident",
          "partOfSpeech": "n./adj.",
          "chinese": "居民；居住的",
          "example": "The residents of the town are proud of its new library",
          "wordGroup": "group_587",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2247,
          "word": "ethnic",
          "partOfSpeech": "adj.",
          "chinese": "民族的；种族的",
          "example": "She is keen on ethnic dance",
          "wordGroup": "group_588",
          "colorIndex": 0
        },
        {
          "id": 2248,
          "word": "racial",
          "partOfSpeech": "adj.",
          "chinese": "种族的；人种的",
          "example": "A new law has been brought in to eliminate racial discrimination",
          "wordGroup": "group_588",
          "colorIndex": 0
        },
        {
          "id": 2249,
          "word": "clan",
          "partOfSpeech": "n.",
          "chinese": "宗族；家族；帮派",
          "example": "The whole clan will be here over Christmas",
          "wordGroup": "group_588",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2250,
          "word": "franchise",
          "partOfSpeech": "v./n.",
          "chinese": "向…授予（或出售）特许经销权/特许权",
          "example": "In Britain, women were given the franchise in 1918",
          "wordGroup": "group_589",
          "colorIndex": 1
        },
        {
          "id": 2251,
          "word": "entitle",
          "partOfSpeech": "v.",
          "chinese": "给...权力（或资格）；给...题名",
          "example": "This ticket entitles you to one-day admission to all three parks",
          "wordGroup": "group_589",
          "colorIndex": 1
        },
        {
          "id": 2252,
          "word": "preference",
          "partOfSpeech": "n.",
          "chinese": "偏爱；优先权",
          "example": "A teacher should not show preference for any one of his or her students",
          "wordGroup": "group_589",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2253,
          "word": "vote",
          "partOfSpeech": "n./v.",
          "chinese": "选举权；投票/表决、投票",
          "example": "The vote will be held next month",
          "wordGroup": "group_590",
          "colorIndex": 2
        },
        {
          "id": 2254,
          "word": "elect",
          "partOfSpeech": "v.",
          "chinese": "选举；选择",
          "example": "They organized a poll to elect a president",
          "wordGroup": "group_590",
          "colorIndex": 2
        },
        {
          "id": 2255,
          "word": "respondent",
          "partOfSpeech": "n.",
          "chinese": "（民意测验的）调查对象",
          "example": "Only 34 percent of respondents said they were satisfied",
          "wordGroup": "group_590",
          "colorIndex": 2
        },
        {
          "id": 2256,
          "word": "poll",
          "partOfSpeech": "n.",
          "chinese": "民意调查；选举投票；投票数",
          "example": "A public opinion poll shows that most people see the protectionist policies negatively",
          "wordGroup": "group_590",
          "colorIndex": 2
        },
        {
          "id": 2257,
          "word": "ambition",
          "partOfSpeech": "n.",
          "chinese": "雄心；抱负",
          "example": "Her ambition was to be a famous politician",
          "wordGroup": "group_590",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2258,
          "word": "nominate",
          "partOfSpeech": "v.",
          "chinese": "报名；任命",
          "example": "He has been nominated as minister of education",
          "wordGroup": "group_591",
          "colorIndex": 3
        },
        {
          "id": 2259,
          "word": "checklist",
          "partOfSpeech": "n.",
          "chinese": "清单；选民花名册",
          "example": "The guide contains a useful checklist of points to consider when buying a car",
          "wordGroup": "group_591",
          "colorIndex": 3
        },
        {
          "id": 2260,
          "word": "succession",
          "partOfSpeech": "n.",
          "chinese": "连续；继承权；继位",
          "example": "He has been late for school three times in succession",
          "wordGroup": "group_591",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2261,
          "word": "safety",
          "partOfSpeech": "n.",
          "chinese": "安全；安全场所",
          "example": "They ran to safety, away from the fire",
          "wordGroup": "group_592",
          "colorIndex": 4
        },
        {
          "id": 2262,
          "word": "welfare",
          "partOfSpeech": "n.",
          "chinese": "健康；幸福",
          "example": "In making this decision, the court's main concern is for the welfare of the children",
          "wordGroup": "group_592",
          "colorIndex": 4
        },
        {
          "id": 2263,
          "word": "well-being",
          "partOfSpeech": "n.",
          "chinese": "康乐；安宁",
          "example": "To reduce public spending on the well-being of the citizens is an act of sheer folly",
          "wordGroup": "group_592",
          "colorIndex": 4
        },
        {
          "id": 2264,
          "word": "harmony",
          "partOfSpeech": "n.",
          "chinese": "协调；和谐；融洽；和声",
          "example": "They worked in perfect harmony",
          "wordGroup": "group_592",
          "colorIndex": 4
        },
        {
          "id": 2265,
          "word": "steady",
          "partOfSpeech": "adj.",
          "chinese": "稳定的；不摇晃的",
          "example": "That ladder doesn't look very steady",
          "wordGroup": "group_592",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2266,
          "word": "flourish",
          "partOfSpeech": "v.",
          "chinese": "繁荣；兴旺；茁壮成长",
          "example": "Plants will not flurish without water",
          "wordGroup": "group_593",
          "colorIndex": 5
        },
        {
          "id": 2267,
          "word": "succeed",
          "partOfSpeech": "v.",
          "chinese": "成功",
          "example": "If you work hard, you will succeed",
          "wordGroup": "group_593",
          "colorIndex": 5
        },
        {
          "id": 2268,
          "word": "prospect",
          "partOfSpeech": "n.",
          "chinese": "希望；可能性；风景",
          "example": "There is not much prospect of his being elected as a congressman",
          "wordGroup": "group_593",
          "colorIndex": 5
        },
        {
          "id": 2269,
          "word": "perspective",
          "partOfSpeech": "n.",
          "chinese": "景观；观点",
          "example": "We all have confidence in this new technology from a developmental perspective",
          "wordGroup": "group_593",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2270,
          "word": "viewpoint",
          "partOfSpeech": "n.",
          "chinese": "观点；看法；视角",
          "example": "I look at this problem from a different viewpoint",
          "wordGroup": "group_594",
          "colorIndex": 0
        },
        {
          "id": 2271,
          "word": "standpoint",
          "partOfSpeech": "n.",
          "chinese": "立场；立足点",
          "example": "We all look at things from a certain standpoint",
          "wordGroup": "group_594",
          "colorIndex": 0
        },
        {
          "id": 2272,
          "word": "outlook",
          "partOfSpeech": "n.",
          "chinese": "观点；展望；前景",
          "example": "The economic outlook is not very bright",
          "wordGroup": "group_594",
          "colorIndex": 0
        },
        {
          "id": 2273,
          "word": "guideline",
          "partOfSpeech": "n.",
          "chinese": "指导方针",
          "example": "The hospital has issued new guidelines on the treatment of mentally ill patients",
          "wordGroup": "group_594",
          "colorIndex": 0
        },
        {
          "id": 2274,
          "word": "ethic",
          "partOfSpeech": "n.",
          "chinese": "行为准则；ethics 道德规范，伦理标准",
          "example": "Merchants must observe their code of ethics",
          "wordGroup": "group_594",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2275,
          "word": "suggest",
          "partOfSpeech": "v.",
          "chinese": "建议；暗示",
          "example": "I suggested him tackle the problem in another way",
          "wordGroup": "group_595",
          "colorIndex": 1
        },
        {
          "id": 2276,
          "word": "advise",
          "partOfSpeech": "v.",
          "chinese": "劝告；建议；通知",
          "example": "She advised the government on economic affairs",
          "wordGroup": "group_595",
          "colorIndex": 1
        },
        {
          "id": 2277,
          "word": "proposal",
          "partOfSpeech": "n.",
          "chinese": "提议；建议",
          "example": "The proposal of new terms for a peace treaty has been put forward",
          "wordGroup": "group_595",
          "colorIndex": 1
        },
        {
          "id": 2278,
          "word": "hint",
          "partOfSpeech": "v./n.",
          "chinese": "暗示，提示",
          "example": "When she said she was tired, it was a hint that she wanted us to leave",
          "wordGroup": "group_595",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2279,
          "word": "declare",
          "partOfSpeech": "v.",
          "chinese": "宣布，宣告，宣称，声称",
          "example": "He declared that he would never come back again",
          "wordGroup": "group_596",
          "colorIndex": 2
        },
        {
          "id": 2280,
          "word": "affirm",
          "partOfSpeech": "v.",
          "chinese": "断言，坚持声称，证实",
          "example": "The suspect affirmed that he had been at home all day",
          "wordGroup": "group_596",
          "colorIndex": 2
        },
        {
          "id": 2281,
          "word": "claim",
          "partOfSpeech": "n./v.",
          "chinese": "声称；主张；索赔/声称；要求（拥有）",
          "example": "Every citizen may claim the protection of the law",
          "wordGroup": "group_596",
          "colorIndex": 2
        },
        {
          "id": 2282,
          "word": "proclaim",
          "partOfSpeech": "v.",
          "chinese": "声明；清楚的表明",
          "example": "His accent proclaimed that he was an American",
          "wordGroup": "group_596",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2283,
          "word": "state",
          "partOfSpeech": "v./n.",
          "chinese": "陈述；说明/国家，州，状况",
          "example": "Railways in Britain belong to the state",
          "wordGroup": "group_597",
          "colorIndex": 3
        },
        {
          "id": 2284,
          "word": "announce",
          "partOfSpeech": "v.",
          "chinese": "宣布，通知",
          "example": "The government announced that they would build a new highway to that area",
          "wordGroup": "group_597",
          "colorIndex": 3
        },
        {
          "id": 2285,
          "word": "clarify",
          "partOfSpeech": "v.",
          "chinese": "澄清，阐明",
          "example": "The government has clarified its position on equal pay for women",
          "wordGroup": "group_597",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2286,
          "word": "assist",
          "partOfSpeech": "v.",
          "chinese": "帮助；协助",
          "example": "A team of nurses assisted the doctor in performing the operation",
          "wordGroup": "group_598",
          "colorIndex": 4
        },
        {
          "id": 2287,
          "word": "aid",
          "partOfSpeech": "n.",
          "chinese": "救助；救援物资；辅助物",
          "example": "An English-Chinese dictionary is an important aid in learning English",
          "wordGroup": "group_598",
          "colorIndex": 4
        },
        {
          "id": 2288,
          "word": "encourage",
          "partOfSpeech": "v.",
          "chinese": "鼓励，激励，怂恿",
          "example": "Her success encouraged me to try the same thing",
          "wordGroup": "group_598",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2289,
          "word": "implement",
          "partOfSpeech": "v./n.",
          "chinese": "实施；执行/工具；器具",
          "example": "The new policy on housing will be implemented next month",
          "wordGroup": "group_599",
          "colorIndex": 5
        },
        {
          "id": 2290,
          "word": "monitor",
          "partOfSpeech": "v./n.",
          "chinese": "监视；监听/监控器，监视器，班长",
          "example": "The agents are monitoring the enemy's radio broadcasts to try to find out their secret plans",
          "wordGroup": "group_599",
          "colorIndex": 5
        },
        {
          "id": 2291,
          "word": "admit",
          "partOfSpeech": "v.",
          "chinese": "供认，承认",
          "example": "He admitted to his father that he had failed his driving test",
          "wordGroup": "group_599",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2292,
          "word": "African",
          "partOfSpeech": "adj./n.",
          "chinese": "非洲的/非洲人",
          "example": "Many African people are very energetic and outgoing",
          "wordGroup": "group_600",
          "colorIndex": 0
        },
        {
          "id": 2293,
          "word": "European",
          "partOfSpeech": "adj./n.",
          "chinese": "欧洲的/欧洲人",
          "example": "The Japanese have taken in many European ways of life",
          "wordGroup": "group_600",
          "colorIndex": 0
        },
        {
          "id": 2294,
          "word": "Latin",
          "partOfSpeech": "adj./n.",
          "chinese": "拉丁语的，拉丁人的/拉丁人，拉丁语",
          "example": "Many languages have Latin as their origin",
          "wordGroup": "group_600",
          "colorIndex": 0
        },
        {
          "id": 2295,
          "word": "Jewish",
          "partOfSpeech": "adj.",
          "chinese": "犹太教的，犹太人的",
          "example": "Jewish people are scattered around the world",
          "wordGroup": "group_600",
          "colorIndex": 0
        },
        {
          "id": 2296,
          "word": "Arabian",
          "partOfSpeech": "adj.",
          "chinese": "阿拉伯的",
          "example": "Arabian Nights and Treasure Island are famous romances",
          "wordGroup": "group_600",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2297,
          "word": "Portuguese",
          "partOfSpeech": "adj./n.",
          "chinese": "葡萄牙的/葡萄牙人，葡萄牙语",
          "example": "The Portuguese power in the East was on the wane",
          "wordGroup": "group_601",
          "colorIndex": 1
        },
        {
          "id": 2298,
          "word": "Roman",
          "partOfSpeech": "adj./n.",
          "chinese": "罗马的/罗马人",
          "example": "The wrote a storybook about ancient Roman",
          "wordGroup": "group_601",
          "colorIndex": 1
        },
        {
          "id": 2299,
          "word": "Russian",
          "partOfSpeech": "adj./n.",
          "chinese": "俄国的/俄国人",
          "example": "The limit of Russian endurance was reached",
          "wordGroup": "group_601",
          "colorIndex": 1
        },
        {
          "id": 2300,
          "word": "Spanish",
          "partOfSpeech": "adj./n.",
          "chinese": "西班牙的/西班牙人",
          "example": "French is a sister language of Spanish",
          "wordGroup": "group_601",
          "colorIndex": 1
        },
        {
          "id": 2301,
          "word": "Swiss",
          "partOfSpeech": "adj./n.",
          "chinese": "瑞士的/瑞士人",
          "example": "The Swiss standard of living is very high",
          "wordGroup": "group_601",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2302,
          "word": "Greek",
          "partOfSpeech": "adj./n.",
          "chinese": "希腊的/希腊人",
          "example": "The chef is not interested in Greek food",
          "wordGroup": "group_602",
          "colorIndex": 2
        },
        {
          "id": 2303,
          "word": "Italian",
          "partOfSpeech": "adj./n.",
          "chinese": "意大利的/意大利人",
          "example": "Italian pizza is very popular in China",
          "wordGroup": "group_602",
          "colorIndex": 2
        },
        {
          "id": 2304,
          "word": "soviet",
          "partOfSpeech": "adj./n.",
          "chinese": "苏联的/苏维埃",
          "example": "The Soviet Union was a major power on the Eurasian continent",
          "wordGroup": "group_602",
          "colorIndex": 2
        },
        {
          "id": 2305,
          "word": "Indian",
          "partOfSpeech": "adj./n.",
          "chinese": "印度的/印度人",
          "example": "To an Indian, the owl is a symbol of bad luck",
          "wordGroup": "group_602",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2306,
          "word": "Australia",
          "partOfSpeech": "n.",
          "chinese": "澳大利亚",
          "example": "Australia is the hometown of kangaroos",
          "wordGroup": "group_603",
          "colorIndex": 3
        },
        {
          "id": 2307,
          "word": "New Zealand",
          "partOfSpeech": "n.",
          "chinese": "新西兰",
          "example": "Oceania is mainly made up of Australia and New Zealand",
          "wordGroup": "group_603",
          "colorIndex": 3
        },
        {
          "id": 2308,
          "word": "Canada",
          "partOfSpeech": "n.",
          "chinese": "加拿大",
          "example": "The maple leaf is the emblem of Canada",
          "wordGroup": "group_603",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2309,
          "word": "Britain",
          "partOfSpeech": "n.",
          "chinese": "英国",
          "example": "The United Kingdom consists of Great Britain and Northern Ireland",
          "wordGroup": "group_604",
          "colorIndex": 4
        },
        {
          "id": 2310,
          "word": "France",
          "partOfSpeech": "n.",
          "chinese": "法国",
          "example": "The English channel divides England from France",
          "wordGroup": "group_604",
          "colorIndex": 4
        },
        {
          "id": 2311,
          "word": "Germany",
          "partOfSpeech": "n.",
          "chinese": "德国",
          "example": "I need to buy a round-trip ticket to Germany",
          "wordGroup": "group_604",
          "colorIndex": 4
        }
      ]
    ]
  },
  {
    "title": "社会经济",
    "groups": [
      [
        {
          "id": 2312,
          "word": "economy",
          "partOfSpeech": "n.",
          "chinese": "经济；节约",
          "example": "As the war debt lightened, the economy of the country developed quickly",
          "wordGroup": "group_604",
          "colorIndex": 4
        },
        {
          "id": 2313,
          "word": "trade",
          "partOfSpeech": "n./v.",
          "chinese": "贸易/交换",
          "example": "China does a lot of trade with many countries",
          "wordGroup": "group_604",
          "colorIndex": 4
        },
        {
          "id": 2314,
          "word": "market",
          "partOfSpeech": "n.",
          "chinese": "市场；市场需求",
          "example": "The market is experiencing depression at the moment",
          "wordGroup": "group_604",
          "colorIndex": 4
        },
        {
          "id": 2315,
          "word": "industry",
          "partOfSpeech": "n.",
          "chinese": "工业；产业；勤劳",
          "example": "The conference underscored the importance of modern industry",
          "wordGroup": "group_604",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2316,
          "word": "merchant",
          "partOfSpeech": "n./adj.",
          "chinese": "商人/商业的",
          "example": "The merchant decided to use camels to carry his goods across the desert",
          "wordGroup": "group_605",
          "colorIndex": 5
        },
        {
          "id": 2317,
          "word": "financial",
          "partOfSpeech": "adj.",
          "chinese": "财政的；金融的",
          "example": "Southeast Asia's financial crisis taught an important lesson",
          "wordGroup": "group_605",
          "colorIndex": 5
        },
        {
          "id": 2318,
          "word": "fund",
          "partOfSpeech": "v./n.",
          "chinese": "资助/基金；资金",
          "example": "The research is funded the government",
          "wordGroup": "group_605",
          "colorIndex": 5
        },
        {
          "id": 2319,
          "word": "donate",
          "partOfSpeech": "v.",
          "chinese": "捐款；捐献",
          "example": "The government calls on the youth to donate their blood voluntarily",
          "wordGroup": "group_605",
          "colorIndex": 5
        },
        {
          "id": 2320,
          "word": "endow",
          "partOfSpeech": "v.",
          "chinese": "捐赠；赋予",
          "example": "She is endowed with great writing ability",
          "wordGroup": "group_605",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2321,
          "word": "commercial",
          "partOfSpeech": "adj./n.",
          "chinese": "商业的/商业广告",
          "example": "The downtown area is zoned for commercial use",
          "wordGroup": "group_606",
          "colorIndex": 0
        },
        {
          "id": 2322,
          "word": "advertise",
          "partOfSpeech": "v.",
          "chinese": "做广告",
          "example": "We advertised in the local press",
          "wordGroup": "group_606",
          "colorIndex": 0
        },
        {
          "id": 2323,
          "word": "slogan",
          "partOfSpeech": "n.",
          "chinese": "标语；口号",
          "example": "The advertising slogan is play on words",
          "wordGroup": "group_606",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2324,
          "word": "purchase",
          "partOfSpeech": "n./v.",
          "chinese": "购买",
          "example": "The new couple spent some money for the purchase of the furniture necessary for their new house",
          "wordGroup": "group_607",
          "colorIndex": 1
        },
        {
          "id": 2325,
          "word": "lease",
          "partOfSpeech": "n./v.",
          "chinese": "租约/出租；租用",
          "example": "We'll lease you the house for one year",
          "wordGroup": "group_607",
          "colorIndex": 1
        },
        {
          "id": 2326,
          "word": "afford",
          "partOfSpeech": "v.",
          "chinese": "负担得起；提供；给予",
          "example": "I couldn't afford the rent on my own",
          "wordGroup": "group_607",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2327,
          "word": "retail",
          "partOfSpeech": "n./v.",
          "chinese": "零售/以...价格零售",
          "example": "These slippers retail at ten dollars per pair",
          "wordGroup": "group_608",
          "colorIndex": 2
        },
        {
          "id": 2328,
          "word": "chain",
          "partOfSpeech": "n.",
          "chinese": "一连串；连锁店",
          "example": "The strike may produce a chain reaction in other industries",
          "wordGroup": "group_608",
          "colorIndex": 2
        },
        {
          "id": 2329,
          "word": "grocery",
          "partOfSpeech": "n.",
          "chinese": "食品杂货店",
          "example": "Her mother began to operate a small grocery",
          "wordGroup": "group_608",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2330,
          "word": "discount",
          "partOfSpeech": "n./v.",
          "chinese": "折扣/打折出售",
          "example": "I'll sell at the discount in return for a speedy sale",
          "wordGroup": "group_609",
          "colorIndex": 3
        },
        {
          "id": 2331,
          "word": "promotion",
          "partOfSpeech": "n.",
          "chinese": "促销活动；晋升",
          "example": "Last year's sales promotions were quite successful",
          "wordGroup": "group_609",
          "colorIndex": 3
        },
        {
          "id": 2332,
          "word": "voucher",
          "partOfSpeech": "n.",
          "chinese": "代金券",
          "example": "The voucher can be used at most major cinemas",
          "wordGroup": "group_609",
          "colorIndex": 3
        },
        {
          "id": 2333,
          "word": "coupon",
          "partOfSpeech": "n.",
          "chinese": "优惠券",
          "example": "I have a coupon for thirty percent off any dairy product in this supermarket",
          "wordGroup": "group_609",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2334,
          "word": "currency",
          "partOfSpeech": "n.",
          "chinese": "货币；通用，流行",
          "example": "Our currency will not depreciate",
          "wordGroup": "group_610",
          "colorIndex": 4
        },
        {
          "id": 2335,
          "word": "exchange",
          "partOfSpeech": "n.",
          "chinese": "交换；兑换",
          "example": "It seems the exchange rate fluctuates almost daily",
          "wordGroup": "group_610",
          "colorIndex": 4
        },
        {
          "id": 2336,
          "word": "swap/swop",
          "partOfSpeech": "v./n.",
          "chinese": "交换",
          "example": "She swapped her watch for an antique locket",
          "wordGroup": "group_610",
          "colorIndex": 4
        },
        {
          "id": 2337,
          "word": "receipt",
          "partOfSpeech": "n.",
          "chinese": "收据；收到",
          "example": "When you have paied for something, a receipt is given to you",
          "wordGroup": "group_610",
          "colorIndex": 4
        },
        {
          "id": 2338,
          "word": "invoice",
          "partOfSpeech": "n./v.",
          "chinese": "发票/开发票给",
          "example": "The seller issued an invoice for the goods",
          "wordGroup": "group_610",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2339,
          "word": "tax",
          "partOfSpeech": "n./v.",
          "chinese": "税/对...征税",
          "example": "Governments don't tax children",
          "wordGroup": "group_611",
          "colorIndex": 5
        },
        {
          "id": 2340,
          "word": "levy",
          "partOfSpeech": "n./v.",
          "chinese": "税款/征收",
          "example": "The government has decided to levy a tax on imported cars",
          "wordGroup": "group_611",
          "colorIndex": 5
        },
        {
          "id": 2341,
          "word": "tariff",
          "partOfSpeech": "n.",
          "chinese": "关税；（公共服务的）收费",
          "example": "There is a very high tariff on alcohol",
          "wordGroup": "group_611",
          "colorIndex": 5
        },
        {
          "id": 2342,
          "word": "duty",
          "partOfSpeech": "n.",
          "chinese": "职责；义务；关税",
          "example": "I feel it my duty to speak frankly to you",
          "wordGroup": "group_611",
          "colorIndex": 5
        },
        {
          "id": 2343,
          "word": "impose",
          "partOfSpeech": "v.",
          "chinese": "强加；征收（书款）",
          "example": "She often imposed her values on her daughter",
          "wordGroup": "group_611",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2344,
          "word": "consume",
          "partOfSpeech": "v.",
          "chinese": "消耗，吃，喝",
          "example": "Chinese people consume huge amounts of rice every year",
          "wordGroup": "group_612",
          "colorIndex": 0
        },
        {
          "id": 2345,
          "word": "spend",
          "partOfSpeech": "v./n.",
          "chinese": "花费/开支",
          "example": "The time I spend in commuting everyday adds up to two hours",
          "wordGroup": "group_612",
          "colorIndex": 0
        },
        {
          "id": 2346,
          "word": "cost",
          "partOfSpeech": "v./n.",
          "chinese": "需付费/费用；代价；成本",
          "example": "I'm determined to attain my purpose at any cost",
          "wordGroup": "group_612",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2347,
          "word": "expense",
          "partOfSpeech": "n.",
          "chinese": "费用；花费",
          "example": "Society should try to save every plant and animal species regardless of the expense",
          "wordGroup": "group_613",
          "colorIndex": 1
        },
        {
          "id": 2348,
          "word": "revenue",
          "partOfSpeech": "n.",
          "chinese": "（公司、组织的）收入；（政府的）税收",
          "example": "State universities in the US get most of their revenue from taxes",
          "wordGroup": "group_613",
          "colorIndex": 1
        },
        {
          "id": 2349,
          "word": "gross",
          "partOfSpeech": "adj.",
          "chinese": "总的；毛的",
          "example": "GDP stands for Gross Domestic Product",
          "wordGroup": "group_613",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2350,
          "word": "recession",
          "partOfSpeech": "n.",
          "chinese": "经济衰退",
          "example": "This country was in a deep economic recession",
          "wordGroup": "group_614",
          "colorIndex": 2
        },
        {
          "id": 2351,
          "word": "depression",
          "partOfSpeech": "n.",
          "chinese": "沮丧；消沉；萧条期；不景气",
          "example": "A holiday may help him cope with feelings of depression",
          "wordGroup": "group_614",
          "colorIndex": 2
        },
        {
          "id": 2352,
          "word": "crisis",
          "partOfSpeech": "n.",
          "chinese": "危机",
          "example": "They suffered huge losses in the financial crisis",
          "wordGroup": "group_614",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2353,
          "word": "security",
          "partOfSpeech": "n.",
          "chinese": "安全工作；安全；[securities]证券",
          "example": "The government looks after the security of the country",
          "wordGroup": "group_615",
          "colorIndex": 3
        },
        {
          "id": 2354,
          "word": "bond",
          "partOfSpeech": "n.",
          "chinese": "债券",
          "example": "A company issues a bond to collect money and will pay back with interest",
          "wordGroup": "group_615",
          "colorIndex": 3
        },
        {
          "id": 2355,
          "word": "debt",
          "partOfSpeech": "n.",
          "chinese": "债务",
          "example": "Liabilities are the debt or obligation that a businessman must pay in money or services at some time in the future",
          "wordGroup": "group_615",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2356,
          "word": "deficit",
          "partOfSpeech": "n.",
          "chinese": "赤字；逆差",
          "example": "The current trade deficit indicates a serious inbalance between our imports and exports",
          "wordGroup": "group_616",
          "colorIndex": 4
        },
        {
          "id": 2357,
          "word": "inflation",
          "partOfSpeech": "n.",
          "chinese": "通货膨胀",
          "example": "An inflation erodes the purchasing power of the families with lower income",
          "wordGroup": "group_616",
          "colorIndex": 4
        },
        {
          "id": 2358,
          "word": "deflation",
          "partOfSpeech": "n.",
          "chinese": "通货紧缩",
          "example": "Deflation and financial distress stifled economic growth",
          "wordGroup": "group_616",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2359,
          "word": "dwindle",
          "partOfSpeech": "v.",
          "chinese": "缩小；减少",
          "example": "The number of people going to the bookstores seems to dwindle steadily",
          "wordGroup": "group_617",
          "colorIndex": 5
        },
        {
          "id": 2360,
          "word": "decrease",
          "partOfSpeech": "n./v.",
          "chinese": "减少；减小/（使）减少；（使）减小",
          "example": "Her interest in the subject gradually decreases",
          "wordGroup": "group_617",
          "colorIndex": 5
        },
        {
          "id": 2361,
          "word": "downsize",
          "partOfSpeech": "v.",
          "chinese": "使精简；裁员",
          "example": "The factory has to downsize and more fully utilize the remaining workers",
          "wordGroup": "group_617",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2362,
          "word": "decline",
          "partOfSpeech": "v./n.",
          "chinese": "下降",
          "example": "There is a sharp decline in unemployment",
          "wordGroup": "group_618",
          "colorIndex": 0
        },
        {
          "id": 2363,
          "word": "diminish",
          "partOfSpeech": "v.",
          "chinese": "减少；贬低",
          "example": "We should try to diminish the cost of production",
          "wordGroup": "group_618",
          "colorIndex": 0
        },
        {
          "id": 2364,
          "word": "reduce",
          "partOfSpeech": "v.",
          "chinese": "减少，减小",
          "example": "The prices in the shop have been reduced, so it's a good time to buy",
          "wordGroup": "group_618",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2365,
          "word": "increase",
          "partOfSpeech": "n./v.",
          "chinese": "增加，增长/（使）增加，（使）增长",
          "example": "His employer has increased his salary",
          "wordGroup": "group_619",
          "colorIndex": 1
        },
        {
          "id": 2366,
          "word": "increment",
          "partOfSpeech": "n.",
          "chinese": "增加量；定期加薪",
          "example": "Your salary will be 12, 000 a year with annual increments of five hundred dollars",
          "wordGroup": "group_619",
          "colorIndex": 1
        },
        {
          "id": 2367,
          "word": "growth",
          "partOfSpeech": "n.",
          "chinese": "增长；生长",
          "example": "Cold weather constrained the plant's growth",
          "wordGroup": "group_619",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2368,
          "word": "escalate",
          "partOfSpeech": "v.",
          "chinese": "（使）逐步升级；（使）不断恶化",
          "example": "The cost of living is escalating in the country",
          "wordGroup": "group_620",
          "colorIndex": 2
        },
        {
          "id": 2369,
          "word": "expand",
          "partOfSpeech": "v.",
          "chinese": "扩充；扩大；扩展",
          "example": "Metals expand when they are heated",
          "wordGroup": "group_620",
          "colorIndex": 2
        },
        {
          "id": 2370,
          "word": "influx",
          "partOfSpeech": "n.",
          "chinese": "流入，涌进",
          "example": "The country simply can not handle this influx of refugees",
          "wordGroup": "group_620",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2371,
          "word": "affluent",
          "partOfSpeech": "adj.",
          "chinese": "富裕的；富足的",
          "example": "We live in an affluent society",
          "wordGroup": "group_621",
          "colorIndex": 3
        },
        {
          "id": 2372,
          "word": "enrich",
          "partOfSpeech": "v.",
          "chinese": "使富有；充实",
          "example": "Giving much to the poor will enrich a man's store",
          "wordGroup": "group_621",
          "colorIndex": 3
        },
        {
          "id": 2373,
          "word": "sufficient",
          "partOfSpeech": "adj.",
          "chinese": "足够的",
          "example": "We must work hard, but equally, we must get sufficient rest",
          "wordGroup": "group_621",
          "colorIndex": 3
        },
        {
          "id": 2374,
          "word": "adequate",
          "partOfSpeech": "adj.",
          "chinese": "足够的；合格的",
          "example": "We had adequate food for a week's journey",
          "wordGroup": "group_621",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2375,
          "word": "spare",
          "partOfSpeech": "adj./v.",
          "chinese": "多余的；空闲的/剩余",
          "example": "If you have a spare bed, may I stay tonight?",
          "wordGroup": "group_622",
          "colorIndex": 4
        },
        {
          "id": 2376,
          "word": "saving",
          "partOfSpeech": "n.",
          "chinese": "节约；节省",
          "example": "A saving of twenty percent is obtainable under this scheme",
          "wordGroup": "group_622",
          "colorIndex": 4
        },
        {
          "id": 2377,
          "word": "redundant",
          "partOfSpeech": "adj.",
          "chinese": "多余的；被裁减的",
          "example": "During the financial crisis, many workers were made redundant",
          "wordGroup": "group_622",
          "colorIndex": 4
        },
        {
          "id": 2378,
          "word": "lack",
          "partOfSpeech": "n./v.",
          "chinese": "缺乏；不足/缺少；没有",
          "example": "Serious lack of circulating funds forced the closure of the company",
          "wordGroup": "group_622",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2379,
          "word": "company",
          "partOfSpeech": "n.",
          "chinese": "公司；陪伴；剧团",
          "example": "The company has connections with a number of Canadian firms",
          "wordGroup": "group_623",
          "colorIndex": 5
        },
        {
          "id": 2380,
          "word": "firm",
          "partOfSpeech": "n./adj.",
          "chinese": "公司/坚定的；坚固的",
          "example": "Because of their common values, they soon formed a firm friendship",
          "wordGroup": "group_623",
          "colorIndex": 5
        },
        {
          "id": 2381,
          "word": "enterprise",
          "partOfSpeech": "n.",
          "chinese": "企业；事业",
          "example": "They are involved in an exciting scientific enterprise",
          "wordGroup": "group_623",
          "colorIndex": 5
        },
        {
          "id": 2382,
          "word": "agent",
          "partOfSpeech": "n.",
          "chinese": "代理人，代理商",
          "example": "The travel agent has made all their reservations for my journey",
          "wordGroup": "group_623",
          "colorIndex": 5
        },
        {
          "id": 2383,
          "word": "entity",
          "partOfSpeech": "n.",
          "chinese": "实体，独立存在物",
          "example": "The country is no longer a sovereign entity",
          "wordGroup": "group_623",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2384,
          "word": "invest",
          "partOfSpeech": "v.",
          "chinese": "投资；投入",
          "example": "The state has planned to invest 2 million in the dam",
          "wordGroup": "group_624",
          "colorIndex": 0
        },
        {
          "id": 2385,
          "word": "input",
          "partOfSpeech": "n.",
          "chinese": "输入信息；投入物",
          "example": "We must increase the output with less labor input",
          "wordGroup": "group_624",
          "colorIndex": 0
        },
        {
          "id": 2386,
          "word": "product",
          "partOfSpeech": "n.",
          "chinese": "产品；产物",
          "example": "A series of technical issues delayed the launch of the new product",
          "wordGroup": "group_624",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2387,
          "word": "acquisition",
          "partOfSpeech": "n.",
          "chinese": "获得；（对公司的）并购",
          "example": "The acquisition of knowledge is a social activity",
          "wordGroup": "group_625",
          "colorIndex": 1
        },
        {
          "id": 2388,
          "word": "goods",
          "partOfSpeech": "n.",
          "chinese": "商品；货物",
          "example": "You give me the money and I'll give you the goods",
          "wordGroup": "group_625",
          "colorIndex": 1
        },
        {
          "id": 2389,
          "word": "cargo",
          "partOfSpeech": "n.",
          "chinese": "货物",
          "example": "The ship is discharging cargo",
          "wordGroup": "group_625",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2390,
          "word": "insure",
          "partOfSpeech": "v.",
          "chinese": "确保；给...上保险",
          "example": "His talent and commitment will insure his success",
          "wordGroup": "group_626",
          "colorIndex": 2
        },
        {
          "id": 2391,
          "word": "guarantee",
          "partOfSpeech": "v./n.",
          "chinese": "担保；确保/保证；保修单；担保金；担保物",
          "example": "They offer a two-year guarantee on all their household appliances",
          "wordGroup": "group_626",
          "colorIndex": 2
        },
        {
          "id": 2392,
          "word": "reliable",
          "partOfSpeech": "adj.",
          "chinese": "可靠的，可信赖的",
          "example": "It's reliable to judge a man only by his looks",
          "wordGroup": "group_626",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2393,
          "word": "negotiation",
          "partOfSpeech": "n.",
          "chinese": "谈判，协商",
          "example": "We are statisfied with the smoothness of the negotiation",
          "wordGroup": "group_627",
          "colorIndex": 3
        },
        {
          "id": 2394,
          "word": "attend",
          "partOfSpeech": "v.",
          "chinese": "参加，出席",
          "example": "A large number of people attended her birthday party",
          "wordGroup": "group_627",
          "colorIndex": 3
        },
        {
          "id": 2395,
          "word": "absent",
          "partOfSpeech": "adj.",
          "chinese": "缺席的；不在场的；心不在焉的",
          "example": "Daniel was absent from the house all the next day",
          "wordGroup": "group_627",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2396,
          "word": "sale",
          "partOfSpeech": "n.",
          "chinese": "买；销售；销售额",
          "example": "The store discounted all air conditioners for sale",
          "wordGroup": "group_628",
          "colorIndex": 4
        },
        {
          "id": 2397,
          "word": "wholesale",
          "partOfSpeech": "n.",
          "chinese": "批发",
          "example": "These wholesale dealers earned a large sum of money",
          "wordGroup": "group_628",
          "colorIndex": 4
        },
        {
          "id": 2398,
          "word": "auction",
          "partOfSpeech": "v./n.",
          "chinese": "拍卖",
          "example": "His house was sold at an auction",
          "wordGroup": "group_628",
          "colorIndex": 4
        },
        {
          "id": 2399,
          "word": "bid",
          "partOfSpeech": "v./n.",
          "chinese": "出价；投标",
          "example": "They lost the contract because their bid was too high",
          "wordGroup": "group_628",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2400,
          "word": "deal",
          "partOfSpeech": "v./n.",
          "chinese": "买卖；[~ with]处理；应付/协议；交易；大量",
          "example": "I'll deal with the children later",
          "wordGroup": "group_629",
          "colorIndex": 5
        },
        {
          "id": 2401,
          "word": "transaction",
          "partOfSpeech": "n.",
          "chinese": "（一笔）交易；业务",
          "example": "Because sellers and buyers manage business transactions, it leads companies to keeping in touch with customers",
          "wordGroup": "group_629",
          "colorIndex": 5
        },
        {
          "id": 2402,
          "word": "turnover",
          "partOfSpeech": "n.",
          "chinese": "（人员的）流动率；营业额",
          "example": "Annual turnover is about 800 million pounds",
          "wordGroup": "group_629",
          "colorIndex": 5
        },
        {
          "id": 2403,
          "word": "dump",
          "partOfSpeech": "v.",
          "chinese": "丢弃；倾倒；倾销",
          "example": "Some people just dumped their rubbish in the river",
          "wordGroup": "group_629",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2404,
          "word": "export",
          "partOfSpeech": "v./n.",
          "chinese": "出口/出口；出口商品",
          "example": "Oil has supplanted coffee as our main export",
          "wordGroup": "group_630",
          "colorIndex": 0
        },
        {
          "id": 2405,
          "word": "import",
          "partOfSpeech": "v./n.",
          "chinese": "进口/进口；进口商品",
          "example": "We import a huge amount of produce from other countries every year",
          "wordGroup": "group_630",
          "colorIndex": 0
        },
        {
          "id": 2406,
          "word": "quota",
          "partOfSpeech": "n.",
          "chinese": "限额；配额；定额",
          "example": "The committee reversed its decision on the import quota",
          "wordGroup": "group_630",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2407,
          "word": "share",
          "partOfSpeech": "n./v.",
          "chinese": "股份，股票；一份/分享；共享；分担",
          "example": "He has put all his money in stocks and shares",
          "wordGroup": "group_631",
          "colorIndex": 1
        },
        {
          "id": 2408,
          "word": "benefit",
          "partOfSpeech": "n./v.",
          "chinese": "益处/有利于；获益",
          "example": "A large number of students will benefit from the new teaching method",
          "wordGroup": "group_631",
          "colorIndex": 1
        },
        {
          "id": 2409,
          "word": "interest",
          "partOfSpeech": "n./v.",
          "chinese": "兴趣；利益；利息/使感兴趣",
          "example": "You must pay interest on that loan",
          "wordGroup": "group_631",
          "colorIndex": 1
        },
        {
          "id": 2410,
          "word": "dividend",
          "partOfSpeech": "n.",
          "chinese": "股息；红利",
          "example": "The company declared a large dividend at the end of the year",
          "wordGroup": "group_631",
          "colorIndex": 1
        },
        {
          "id": 2411,
          "word": "stock",
          "partOfSpeech": "n.",
          "chinese": "股本；股票；库存",
          "example": "All stock prices have jumped up this month",
          "wordGroup": "group_631",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2412,
          "word": "account",
          "partOfSpeech": "n.",
          "chinese": "账户；解释",
          "example": "Have you got a bank account?",
          "wordGroup": "group_632",
          "colorIndex": 2
        },
        {
          "id": 2413,
          "word": "deposit",
          "partOfSpeech": "n.",
          "chinese": "存款；押金",
          "example": "The interest of the current account is lower than that of the deposit account",
          "wordGroup": "group_632",
          "colorIndex": 2
        },
        {
          "id": 2414,
          "word": "instalment/installment",
          "partOfSpeech": "n.",
          "chinese": "（分期付款的）一期付款",
          "example": "Buying goods in installments has become an epidemic in recent years",
          "wordGroup": "group_632",
          "colorIndex": 2
        },
        {
          "id": 2415,
          "word": "cheque/check",
          "partOfSpeech": "n.",
          "chinese": "支票",
          "example": "The bank cashed my check",
          "wordGroup": "group_632",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2416,
          "word": "cash",
          "partOfSpeech": "n./v.",
          "chinese": "现金/兑现（支票）",
          "example": "He paied for the meal in cash",
          "wordGroup": "group_633",
          "colorIndex": 3
        },
        {
          "id": 2417,
          "word": "coin",
          "partOfSpeech": "n./v.",
          "chinese": "硬币/铸币；创造（新词语）",
          "example": "We'd better not coin terms which are not intelligible",
          "wordGroup": "group_633",
          "colorIndex": 3
        },
        {
          "id": 2418,
          "word": "shilling",
          "partOfSpeech": "n.",
          "chinese": "先令",
          "example": "Five pence was equal to a shilling",
          "wordGroup": "group_633",
          "colorIndex": 3
        },
        {
          "id": 2419,
          "word": "copper",
          "partOfSpeech": "n.",
          "chinese": "铜；[~s]铜币；警察",
          "example": "He polished up the old copper coins",
          "wordGroup": "group_633",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2420,
          "word": "treasure",
          "partOfSpeech": "n.",
          "chinese": "金银财宝；宝物；珍品",
          "example": "This museum has many art treasures",
          "wordGroup": "group_634",
          "colorIndex": 4
        },
        {
          "id": 2421,
          "word": "wealth",
          "partOfSpeech": "n.",
          "chinese": "财富；丰富",
          "example": "Health is better than wealth",
          "wordGroup": "group_634",
          "colorIndex": 4
        },
        {
          "id": 2422,
          "word": "estate",
          "partOfSpeech": "n.",
          "chinese": "地产；遗产",
          "example": "The old lady left an estate of 3 million pounds when she died",
          "wordGroup": "group_634",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2423,
          "word": "possess",
          "partOfSpeech": "v.",
          "chinese": "占用；拥有；影响；控制",
          "example": "She was possessed by the desire to be rich",
          "wordGroup": "group_635",
          "colorIndex": 5
        },
        {
          "id": 2424,
          "word": "legacy",
          "partOfSpeech": "n.",
          "chinese": "遗赠；遗产",
          "example": "The girl received a small legacy from her aunt",
          "wordGroup": "group_635",
          "colorIndex": 5
        },
        {
          "id": 2425,
          "word": "descend",
          "partOfSpeech": "v.",
          "chinese": "下降，下来",
          "example": "She is said to be descended from a French aristocratic family",
          "wordGroup": "group_635",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2426,
          "word": "worthy",
          "partOfSpeech": "adj.",
          "chinese": "有价值的",
          "example": "This book is worthy of reading",
          "wordGroup": "group_636",
          "colorIndex": 0
        },
        {
          "id": 2427,
          "word": "valuable",
          "partOfSpeech": "adj.",
          "chinese": "很值钱的；贵重的；很重要的",
          "example": "His wife put on her valuable ring and necklace",
          "wordGroup": "group_636",
          "colorIndex": 0
        },
        {
          "id": 2428,
          "word": "cheap",
          "partOfSpeech": "adj.",
          "chinese": "廉价的；质劣价低的",
          "example": "Cheap shoes soon wear out",
          "wordGroup": "group_636",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2429,
          "word": "incentive",
          "partOfSpeech": "n.",
          "chinese": "刺激；激励",
          "example": "Incentives differ from country to country and region to region",
          "wordGroup": "group_637",
          "colorIndex": 1
        },
        {
          "id": 2430,
          "word": "accelerate",
          "partOfSpeech": "v.",
          "chinese": "加速",
          "example": "Good economic policies can accelerate the economic growth of a society",
          "wordGroup": "group_637",
          "colorIndex": 1
        },
        {
          "id": 2431,
          "word": "prompt",
          "partOfSpeech": "v./adj.",
          "chinese": "促使/迅速的",
          "example": "What prompted you to do such a thing?",
          "wordGroup": "group_637",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2432,
          "word": "salary",
          "partOfSpeech": "n.",
          "chinese": "工资；（按月领的）薪水",
          "example": "She was employed with a salary of three thousand dollars a month",
          "wordGroup": "group_638",
          "colorIndex": 2
        },
        {
          "id": 2433,
          "word": "income",
          "partOfSpeech": "n.",
          "chinese": "收入",
          "example": "Many staff members made an accusation that the earned incomes were not distributed upon the principle of equality",
          "wordGroup": "group_638",
          "colorIndex": 2
        },
        {
          "id": 2434,
          "word": "wage",
          "partOfSpeech": "n.",
          "chinese": "（通常指按周领的）工钱",
          "example": "These workers demanded a wage rise of 5 percent",
          "wordGroup": "group_638",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2435,
          "word": "payment",
          "partOfSpeech": "n.",
          "chinese": "支付；支付的款项；付款额",
          "example": "You may defer payment until next week",
          "wordGroup": "group_639",
          "colorIndex": 3
        },
        {
          "id": 2436,
          "word": "refund",
          "partOfSpeech": "n./v.",
          "chinese": "退款",
          "example": "We can refund the price difference",
          "wordGroup": "group_639",
          "colorIndex": 3
        },
        {
          "id": 2437,
          "word": "reimburse",
          "partOfSpeech": "v.",
          "chinese": "赔偿；补偿",
          "example": "We will reimburse the customer for any loss or damage",
          "wordGroup": "group_639",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2438,
          "word": "payroll",
          "partOfSpeech": "n.",
          "chinese": "工资名单",
          "example": "Every month she has to make a payroll of the staff",
          "wordGroup": "group_640",
          "colorIndex": 4
        },
        {
          "id": 2439,
          "word": "remuneration",
          "partOfSpeech": "n.",
          "chinese": "报酬",
          "example": "He received a small remuneration",
          "wordGroup": "group_640",
          "colorIndex": 4
        },
        {
          "id": 2440,
          "word": "subsidy",
          "partOfSpeech": "n.",
          "chinese": "津贴，补贴",
          "example": "The government has decided to increase subsidies on farm produce",
          "wordGroup": "group_640",
          "colorIndex": 4
        },
        {
          "id": 2441,
          "word": "earn",
          "partOfSpeech": "v.",
          "chinese": "赚得；赢得；获得",
          "example": "He has earned a lot of money this month",
          "wordGroup": "group_640",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2442,
          "word": "undertaking",
          "partOfSpeech": "n.",
          "chinese": "任务；事业；许诺；保证",
          "example": "I give an undertaking that we shall proceed with the legislation",
          "wordGroup": "group_641",
          "colorIndex": 5
        },
        {
          "id": 2443,
          "word": "career",
          "partOfSpeech": "n.",
          "chinese": "职业；事业；职业生涯",
          "example": "After the accident, she realized that her acting career was over",
          "wordGroup": "group_641",
          "colorIndex": 5
        },
        {
          "id": 2444,
          "word": "profession",
          "partOfSpeech": "n.",
          "chinese": "职业",
          "example": "The medical profession requires a strong sense of responsibility",
          "wordGroup": "group_641",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2445,
          "word": "occupation",
          "partOfSpeech": "n.",
          "chinese": "占领，占据；职业",
          "example": "I regard being a teacher as a decent occupation and I love being a teacher",
          "wordGroup": "group_642",
          "colorIndex": 0
        },
        {
          "id": 2446,
          "word": "job",
          "partOfSpeech": "n.",
          "chinese": "职业；工作",
          "example": "The job is not yet finished",
          "wordGroup": "group_642",
          "colorIndex": 0
        },
        {
          "id": 2447,
          "word": "vocation",
          "partOfSpeech": "n.",
          "chinese": "（认为特别适合自己的）职业；使命感",
          "example": "She struggled for years to find her true vocation",
          "wordGroup": "group_642",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2448,
          "word": "labour/labor",
          "partOfSpeech": "n.",
          "chinese": "劳动；体力劳动",
          "example": "Many women do hard manual labour",
          "wordGroup": "group_643",
          "colorIndex": 1
        },
        {
          "id": 2449,
          "word": "workforce",
          "partOfSpeech": "n.",
          "chinese": "劳动力；全体员工",
          "example": "This year 5 percent of the workforce will be made redundant",
          "wordGroup": "group_643",
          "colorIndex": 1
        },
        {
          "id": 2450,
          "word": "workaholic",
          "partOfSpeech": "n.",
          "chinese": "工作狂",
          "example": "I do not want to become a workaholic",
          "wordGroup": "group_643",
          "colorIndex": 1
        },
        {
          "id": 2451,
          "word": "personnel",
          "partOfSpeech": "n.",
          "chinese": "人员，职员；人事部门",
          "example": "The next project needs new personnel",
          "wordGroup": "group_643",
          "colorIndex": 1
        },
        {
          "id": 2452,
          "word": "clerk",
          "partOfSpeech": "n.",
          "chinese": "店员，办事员，接待员",
          "example": "The clerk was elevated to a managerial position",
          "wordGroup": "group_643",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2453,
          "word": "interview",
          "partOfSpeech": "n./v.",
          "chinese": "面试；采访/对...进行面试；采访",
          "example": "The interview has drawn considerable attention to the profession",
          "wordGroup": "group_644",
          "colorIndex": 2
        },
        {
          "id": 2454,
          "word": "résumé/resume",
          "partOfSpeech": "n.",
          "chinese": "UK /ˈrez.juː.meɪ/ US /ˈrez.ə.meɪ/ 履历；简历；摘要",
          "example": "Please email your personal resume to us before setting a writing test",
          "wordGroup": "group_644",
          "colorIndex": 2
        },
        {
          "id": 2455,
          "word": "recommend",
          "partOfSpeech": "v.",
          "chinese": "推荐；劝告；介绍",
          "example": "I recommend you to reserve a table in advance",
          "wordGroup": "group_644",
          "colorIndex": 2
        },
        {
          "id": 2456,
          "word": "employ",
          "partOfSpeech": "v.",
          "chinese": "雇用；采用",
          "example": "They employ casual labor to pick the fruit",
          "wordGroup": "group_644",
          "colorIndex": 2
        },
        {
          "id": 2457,
          "word": "hire",
          "partOfSpeech": "v./n.",
          "chinese": "雇用；租用/租赁（业）",
          "example": "They hired an advertising company to help sell a new product",
          "wordGroup": "group_644",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2458,
          "word": "fire",
          "partOfSpeech": "v./n.",
          "chinese": "解雇/火",
          "example": "He was fired by his boss",
          "wordGroup": "group_645",
          "colorIndex": 3
        },
        {
          "id": 2459,
          "word": "lay-off",
          "partOfSpeech": "n.",
          "chinese": "（因岗位不足的）解雇；裁员；歇工期",
          "example": "There are more layoffs in the IT industry this year",
          "wordGroup": "group_645",
          "colorIndex": 3
        },
        {
          "id": 2460,
          "word": "dismiss",
          "partOfSpeech": "v.",
          "chinese": "解雇；解散；驳回",
          "example": "If you are late again, you will be dismissed",
          "wordGroup": "group_645",
          "colorIndex": 3
        },
        {
          "id": 2461,
          "word": "discharge",
          "partOfSpeech": "v./n.",
          "chinese": "解雇/卸货",
          "example": "How long will the discharge of the cargo take?",
          "wordGroup": "group_645",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2462,
          "word": "resign",
          "partOfSpeech": "v.",
          "chinese": "辞去；辞职",
          "example": "Catherine was forced to resign from the board of directors",
          "wordGroup": "group_646",
          "colorIndex": 4
        },
        {
          "id": 2463,
          "word": "sack",
          "partOfSpeech": "n./v.",
          "chinese": "大口袋，麻布袋/开除",
          "example": "The poor guy got sacked yesterday",
          "wordGroup": "group_646",
          "colorIndex": 4
        },
        {
          "id": 2464,
          "word": "retire",
          "partOfSpeech": "v.",
          "chinese": "退休",
          "example": "If they prove incompetent, they should be demoted or asked to retire",
          "wordGroup": "group_646",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2465,
          "word": "result",
          "partOfSpeech": "n./v.",
          "chinese": "结果，后果/导致",
          "example": "As a result, there is often trouble in American families",
          "wordGroup": "group_647",
          "colorIndex": 5
        },
        {
          "id": 2466,
          "word": "failure",
          "partOfSpeech": "n.",
          "chinese": "失败；失败的人；失败的事",
          "example": "His failure may lead to the bankruptcy of the company",
          "wordGroup": "group_647",
          "colorIndex": 5
        },
        {
          "id": 2467,
          "word": "abortion",
          "partOfSpeech": "n.",
          "chinese": "人工流产；中途失败",
          "example": "His attempt proved an abortion",
          "wordGroup": "group_647",
          "colorIndex": 5
        },
        {
          "id": 2468,
          "word": "loss",
          "partOfSpeech": "n.",
          "chinese": "遗失；损失；亏损",
          "example": "They forfeited the business after only two months and with great loss",
          "wordGroup": "group_647",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2469,
          "word": "opportunity",
          "partOfSpeech": "n.",
          "chinese": "机会；时机",
          "example": "I'd like to take this opportunity to thank everyone for their hard work on this project",
          "wordGroup": "group_648",
          "colorIndex": 0
        },
        {
          "id": 2470,
          "word": "chance",
          "partOfSpeech": "n.",
          "chinese": "机会；可能性",
          "example": "Her testimony works against his chance of winning the case",
          "wordGroup": "group_648",
          "colorIndex": 0
        },
        {
          "id": 2471,
          "word": "choose",
          "partOfSpeech": "v.",
          "chinese": "选择",
          "example": "We have many patterns in stock for you to choose from",
          "wordGroup": "group_648",
          "colorIndex": 0
        },
        {
          "id": 2472,
          "word": "change",
          "partOfSpeech": "n.",
          "chinese": "改变",
          "example": "All our previous ideas are now in the melting pot, which means our jobs are bound to change radically",
          "wordGroup": "group_648",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2473,
          "word": "solve",
          "partOfSpeech": "v.",
          "chinese": "解答，解决",
          "example": "I must alert him to the needs to solve the problem",
          "wordGroup": "group_649",
          "colorIndex": 1
        },
        {
          "id": 2474,
          "word": "develop",
          "partOfSpeech": "v.",
          "chinese": "发展，开发",
          "example": "The United States can't develop in isolation from the rest of world",
          "wordGroup": "group_649",
          "colorIndex": 1
        },
        {
          "id": 2475,
          "word": "sustainable",
          "partOfSpeech": "adj.",
          "chinese": "可持续的",
          "example": "Sustainable development is the common target of the human beings",
          "wordGroup": "group_649",
          "colorIndex": 1
        },
        {
          "id": 2476,
          "word": "improve",
          "partOfSpeech": "v.",
          "chinese": "改善；改进",
          "example": "The offered a suggestion to improve the plan",
          "wordGroup": "group_649",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2477,
          "word": "manage",
          "partOfSpeech": "v.",
          "chinese": "管理；设法做到",
          "example": "From this day on, I will manage all my affairs on my own",
          "wordGroup": "group_650",
          "colorIndex": 2
        },
        {
          "id": 2478,
          "word": "regulate",
          "partOfSpeech": "v.",
          "chinese": "管理；调整",
          "example": "You watch is slow. It needs to be regulated",
          "wordGroup": "group_650",
          "colorIndex": 2
        },
        {
          "id": 2479,
          "word": "sanction",
          "partOfSpeech": "n./v.",
          "chinese": "批准；制裁/批准；对...制裁",
          "example": "The minister can only act in this matter with the sanction of parliament",
          "wordGroup": "group_650",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2480,
          "word": "coordinate",
          "partOfSpeech": "v./n.",
          "chinese": "调和；协调/坐标",
          "example": "Our efforts need to be further coordinated for higher efficiency",
          "wordGroup": "group_651",
          "colorIndex": 3
        },
        {
          "id": 2481,
          "word": "cooperate",
          "partOfSpeech": "v.",
          "chinese": "合作；协作",
          "example": "If they cooperate with each other, everyone will run smoothly",
          "wordGroup": "group_651",
          "colorIndex": 3
        },
        {
          "id": 2482,
          "word": "collaborate",
          "partOfSpeech": "v.",
          "chinese": "合作",
          "example": "We would like to ask you to collaborate with us",
          "wordGroup": "group_651",
          "colorIndex": 3
        }
      ]
    ]
  },
  {
    "title": "法律法规",
    "groups": [
      [
        {
          "id": 2483,
          "word": "law",
          "partOfSpeech": "n.",
          "chinese": "法律；规律；定理",
          "example": "Those who break the law are subjected to justice. 违法者要受到法律的制裁",
          "wordGroup": "group_651",
          "colorIndex": 3
        },
        {
          "id": 2484,
          "word": "legal",
          "partOfSpeech": "adj.",
          "chinese": "法律的；合法的",
          "example": "When you are eighteen, you are a legal voter",
          "wordGroup": "group_651",
          "colorIndex": 3
        },
        {
          "id": 2485,
          "word": "rule",
          "partOfSpeech": "n./v.",
          "chinese": "规则/统治",
          "example": "It's against the rules to pick up the ball",
          "wordGroup": "group_651",
          "colorIndex": 3
        },
        {
          "id": 2486,
          "word": "regulation",
          "partOfSpeech": "n.",
          "chinese": "规则；规定；管理",
          "example": "The rules and regulations should be made clear to all employees",
          "wordGroup": "group_651",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2487,
          "word": "item",
          "partOfSpeech": "n.",
          "chinese": "条目",
          "example": "This is the next item on the agenda",
          "wordGroup": "group_652",
          "colorIndex": 4
        },
        {
          "id": 2488,
          "word": "treaty",
          "partOfSpeech": "n.",
          "chinese": "条约；协议",
          "example": "In the treaty, both sides pledged to respect human rights",
          "wordGroup": "group_652",
          "colorIndex": 4
        },
        {
          "id": 2489,
          "word": "agreement",
          "partOfSpeech": "n.",
          "chinese": "同意；协定",
          "example": "The agreement has raised hopes that the war may end soon",
          "wordGroup": "group_652",
          "colorIndex": 4
        },
        {
          "id": 2490,
          "word": "charter",
          "partOfSpeech": "n./v.",
          "chinese": "宪章/租；包（船、车、飞机等）",
          "example": "The rights of our citizens are granted by the Charter",
          "wordGroup": "group_652",
          "colorIndex": 4
        },
        {
          "id": 2491,
          "word": "protocol",
          "partOfSpeech": "n.",
          "chinese": "协定书；协议；礼仪",
          "example": "Do we need sign a contract or follow any protocol?",
          "wordGroup": "group_652",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2492,
          "word": "norm",
          "partOfSpeech": "n.",
          "chinese": "标准；[~s]行为准则；规范",
          "example": "You must adapt to the norms of the society you live in",
          "wordGroup": "group_653",
          "colorIndex": 5
        },
        {
          "id": 2493,
          "word": "benchmark",
          "partOfSpeech": "n.",
          "chinese": "基准，水准点",
          "example": "Her performances set a new benchmark for dancers throughout the world",
          "wordGroup": "group_653",
          "colorIndex": 5
        },
        {
          "id": 2494,
          "word": "criteria",
          "partOfSpeech": "n.",
          "chinese": "[criterion 的复数形式]标准；准则",
          "example": "We each have our own criteria for success",
          "wordGroup": "group_653",
          "colorIndex": 5
        },
        {
          "id": 2495,
          "word": "standard",
          "partOfSpeech": "n.",
          "chinese": "标准",
          "example": "This piece of work does not come up to your usual standard",
          "wordGroup": "group_653",
          "colorIndex": 5
        },
        {
          "id": 2496,
          "word": "permit",
          "partOfSpeech": "v.",
          "chinese": "允许；准许",
          "example": "Those words hardly permit doubt",
          "wordGroup": "group_653",
          "colorIndex": 5
        },
        {
          "id": 2497,
          "word": "allow",
          "partOfSpeech": "v.",
          "chinese": "允许；准许",
          "example": "They did not allow the slaves any freedom",
          "wordGroup": "group_653",
          "colorIndex": 5
        },
        {
          "id": 2498,
          "word": "admission",
          "partOfSpeech": "n.",
          "chinese": "承认；入场费；准许入场",
          "example": "He gained admission into the association",
          "wordGroup": "group_653",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2499,
          "word": "perform",
          "partOfSpeech": "v.",
          "chinese": "履行；执行",
          "example": "They always perform their duties faithfully",
          "wordGroup": "group_654",
          "colorIndex": 0
        },
        {
          "id": 2500,
          "word": "enforce",
          "partOfSpeech": "v.",
          "chinese": "强制执行；强行实施；迫使",
          "example": "The police are there to enforce the law",
          "wordGroup": "group_654",
          "colorIndex": 0
        },
        {
          "id": 2501,
          "word": "default",
          "partOfSpeech": "v./n.",
          "chinese": "不支付、不履行/违约；默认值",
          "example": "The company has already been in default on its loan",
          "wordGroup": "group_654",
          "colorIndex": 0
        },
        {
          "id": 2502,
          "word": "reject",
          "partOfSpeech": "v.",
          "chinese": "拒绝接受；摒弃",
          "example": "The board of directors rejected the proposal as a non-starter",
          "wordGroup": "group_654",
          "colorIndex": 0
        },
        {
          "id": 2503,
          "word": "constraint",
          "partOfSpeech": "n.",
          "chinese": "约束；限制，克制",
          "example": "He felt constraint when in her presence",
          "wordGroup": "group_654",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2504,
          "word": "official",
          "partOfSpeech": "adj.",
          "chinese": "正式的；官方的",
          "example": "The mass media demanded that all the official documents concerning the product in question be made public",
          "wordGroup": "group_655",
          "colorIndex": 1
        },
        {
          "id": 2505,
          "word": "mandatory",
          "partOfSpeech": "adj.",
          "chinese": "法定的；强制的",
          "example": "A reply to this letter is mandatory",
          "wordGroup": "group_655",
          "colorIndex": 1
        },
        {
          "id": 2506,
          "word": "potent",
          "partOfSpeech": "adj.",
          "chinese": "很有效的；强有力的",
          "example": "The medicine had a potent effect on your disease",
          "wordGroup": "group_655",
          "colorIndex": 1
        },
        {
          "id": 2507,
          "word": "bound",
          "partOfSpeech": "adj.",
          "chinese": "[be ~ to]一定会；很可能会；有义务",
          "example": "You are not legally bound to answer these questions",
          "wordGroup": "group_655",
          "colorIndex": 1
        },
        {
          "id": 2508,
          "word": "obligation",
          "partOfSpeech": "n.",
          "chinese": "义务；责任",
          "example": "We are under an obligation to help",
          "wordGroup": "group_655",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2509,
          "word": "court",
          "partOfSpeech": "n.",
          "chinese": "法院；庭院",
          "example": "The company is anxious to keep the whole case out of court",
          "wordGroup": "group_656",
          "colorIndex": 2
        },
        {
          "id": 2510,
          "word": "supreme",
          "partOfSpeech": "adj.",
          "chinese": "最高的；最大的",
          "example": "He was supreme leader of that fascist dictatorship",
          "wordGroup": "group_656",
          "colorIndex": 2
        },
        {
          "id": 2511,
          "word": "enact",
          "partOfSpeech": "v.",
          "chinese": "通过（法律）；表演",
          "example": "This country has just enacted a law allowing same-sex marriage",
          "wordGroup": "group_656",
          "colorIndex": 2
        },
        {
          "id": 2512,
          "word": "legislate",
          "partOfSpeech": "v.",
          "chinese": "立法，制定（或通过）法律",
          "example": "The government will legislate against discrimination in the workplace",
          "wordGroup": "group_656",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2513,
          "word": "equity",
          "partOfSpeech": "n.",
          "chinese": "公平",
          "example": "They call for laws to promote gender equity",
          "wordGroup": "group_657",
          "colorIndex": 3
        },
        {
          "id": 2514,
          "word": "fair",
          "partOfSpeech": "adj.",
          "chinese": "公平的；公章的",
          "example": "He won the game, fair and square",
          "wordGroup": "group_657",
          "colorIndex": 3
        },
        {
          "id": 2515,
          "word": "just",
          "partOfSpeech": "adj./adv.",
          "chinese": "公证的；正义的/刚刚；仅仅",
          "example": "Our aim is a just and lasting peace",
          "wordGroup": "group_657",
          "colorIndex": 3
        },
        {
          "id": 2516,
          "word": "prejudice",
          "partOfSpeech": "n.",
          "chinese": "偏见；成见",
          "example": "A judge must be free from prejudice",
          "wordGroup": "group_657",
          "colorIndex": 3
        },
        {
          "id": 2517,
          "word": "discrimination",
          "partOfSpeech": "n.",
          "chinese": "歧视",
          "example": "He is opposed to racial discrimination",
          "wordGroup": "group_657",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2518,
          "word": "accuse",
          "partOfSpeech": "v.",
          "chinese": "控告；指责",
          "example": "The police accused him of murder",
          "wordGroup": "group_658",
          "colorIndex": 4
        },
        {
          "id": 2519,
          "word": "sue",
          "partOfSpeech": "v.",
          "chinese": "控告，提起诉讼；提出请求",
          "example": "The company is suing the formal president",
          "wordGroup": "group_658",
          "colorIndex": 4
        },
        {
          "id": 2520,
          "word": "prosecute",
          "partOfSpeech": "v.",
          "chinese": "检举；起诉",
          "example": "He was prosecuted for robbery",
          "wordGroup": "group_658",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2521,
          "word": "condemn",
          "partOfSpeech": "v.",
          "chinese": "谴责；指责",
          "example": "Most people would condemn violence of any sort as evil",
          "wordGroup": "group_659",
          "colorIndex": 5
        },
        {
          "id": 2522,
          "word": "complain",
          "partOfSpeech": "v.",
          "chinese": "抱怨；投诉",
          "example": "She complained that the room is too cold",
          "wordGroup": "group_659",
          "colorIndex": 5
        },
        {
          "id": 2523,
          "word": "boycott",
          "partOfSpeech": "n./v.",
          "chinese": "抵制；拒绝购买",
          "example": "They boycott all products tested on animals",
          "wordGroup": "group_659",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2524,
          "word": "session",
          "partOfSpeech": "n.",
          "chinese": "会议；会期",
          "example": "The general sesion approved the report of the investigation committee",
          "wordGroup": "group_660",
          "colorIndex": 0
        },
        {
          "id": 2525,
          "word": "mediate",
          "partOfSpeech": "v.",
          "chinese": "斡旋；调解",
          "example": "He mediated a settlement between labor and management",
          "wordGroup": "group_660",
          "colorIndex": 0
        },
        {
          "id": 2526,
          "word": "plea",
          "partOfSpeech": "n.",
          "chinese": "辩解理由；借口；请求",
          "example": "His plea was that he did not see the stop signal",
          "wordGroup": "group_660",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2527,
          "word": "appeal",
          "partOfSpeech": "v./n.",
          "chinese": "呼吁；申述",
          "example": "The response to our appeal was encouraging",
          "wordGroup": "group_661",
          "colorIndex": 1
        },
        {
          "id": 2528,
          "word": "contradict",
          "partOfSpeech": "v.",
          "chinese": "反驳；与...矛盾",
          "example": "Your actions contradict your belief",
          "wordGroup": "group_661",
          "colorIndex": 1
        },
        {
          "id": 2529,
          "word": "persuade",
          "partOfSpeech": "v.",
          "chinese": "说服；使相信",
          "example": "The woman persuaded the robber to turn himself in",
          "wordGroup": "group_661",
          "colorIndex": 1
        },
        {
          "id": 2530,
          "word": "controversy",
          "partOfSpeech": "n.",
          "chinese": "争议；辩论",
          "example": "The new traffic regulations caused much controversy among drivers",
          "wordGroup": "group_661",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2531,
          "word": "whisper",
          "partOfSpeech": "v.",
          "chinese": "低声说；私下谈论",
          "example": "The children were whispering in the corner",
          "wordGroup": "group_662",
          "colorIndex": 2
        },
        {
          "id": 2532,
          "word": "mutter",
          "partOfSpeech": "v.",
          "chinese": "低声低语；小声抱怨",
          "example": "That man muttered his dissatisfaction",
          "wordGroup": "group_662",
          "colorIndex": 2
        },
        {
          "id": 2533,
          "word": "murmur",
          "partOfSpeech": "n./v.",
          "chinese": "低声说/咕哝；低语",
          "example": "There was a low murmur of conversation in the hall",
          "wordGroup": "group_662",
          "colorIndex": 2
        },
        {
          "id": 2534,
          "word": "silent",
          "partOfSpeech": "adj.",
          "chinese": "沉默的；寂静无声的",
          "example": "He couldn't speak English and was completely silent during the visit",
          "wordGroup": "group_662",
          "colorIndex": 2
        },
        {
          "id": 2535,
          "word": "mute",
          "partOfSpeech": "adj./n.",
          "chinese": "缄默的；哑的；无声的/哑巴",
          "example": "She kept herself mute during the meeting",
          "wordGroup": "group_662",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2536,
          "word": "investigate",
          "partOfSpeech": "v.",
          "chinese": "调查",
          "example": "To investigate a problem is indeed to solve it",
          "wordGroup": "group_663",
          "colorIndex": 3
        },
        {
          "id": 2537,
          "word": "witness",
          "partOfSpeech": "n./v.",
          "chinese": "目击者；见证人/见证",
          "example": "Children in regions of chaos and bloodshed are witnessing a disturbing amount of violence",
          "wordGroup": "group_663",
          "colorIndex": 3
        },
        {
          "id": 2538,
          "word": "justify",
          "partOfSpeech": "v.",
          "chinese": "为...辩护；证明...正当",
          "example": "Don't try to justify your mistakes",
          "wordGroup": "group_663",
          "colorIndex": 3
        },
        {
          "id": 2539,
          "word": "reasonable",
          "partOfSpeech": "adj.",
          "chinese": "合理的；理智的",
          "example": "At first sight, their reaction was reasonable",
          "wordGroup": "group_663",
          "colorIndex": 3
        },
        {
          "id": 2540,
          "word": "suitable",
          "partOfSpeech": "adj.",
          "chinese": "合适的，适宜的",
          "example": "The authorities must provide suitable accommodation for the family",
          "wordGroup": "group_663",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2541,
          "word": "judge",
          "partOfSpeech": "n.",
          "chinese": "法官；裁判员",
          "example": "TGhe defence counsel said his client was too tired, so the judge called a recess",
          "wordGroup": "group_664",
          "colorIndex": 4
        },
        {
          "id": 2542,
          "word": "jury",
          "partOfSpeech": "n.",
          "chinese": "陪审团；评判委员会",
          "example": "The jury will retire to consider its verdict today. 陪审团今天将退庭商议其e决",
          "wordGroup": "group_664",
          "colorIndex": 4
        },
        {
          "id": 2543,
          "word": "trial",
          "partOfSpeech": "n.",
          "chinese": "试验；审判",
          "example": "I noticed that his report was highly critical of the trial judge of this case",
          "wordGroup": "group_664",
          "colorIndex": 4
        },
        {
          "id": 2544,
          "word": "suspect",
          "partOfSpeech": "n./v.",
          "chinese": "嫌疑犯/怀疑",
          "example": "The police couldn't prove that the suspect was guilty",
          "wordGroup": "group_664",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2545,
          "word": "sentence",
          "partOfSpeech": "n./v.",
          "chinese": "判决/宣判",
          "example": "He stood emtionless as he heard the judge sentence him to twenty years in prison",
          "wordGroup": "group_665",
          "colorIndex": 5
        },
        {
          "id": 2546,
          "word": "arrest",
          "partOfSpeech": "v./n.",
          "chinese": "逮捕；吸引（注意）/逮捕",
          "example": "You shouldn't arrest him without an arrest warrant",
          "wordGroup": "group_665",
          "colorIndex": 5
        },
        {
          "id": 2547,
          "word": "jail",
          "partOfSpeech": "n./v.",
          "chinese": "监狱/监禁",
          "example": "A bunch of prisoners broke loose from jail",
          "wordGroup": "group_665",
          "colorIndex": 5
        },
        {
          "id": 2548,
          "word": "prison",
          "partOfSpeech": "n.",
          "chinese": "监狱，监禁",
          "example": "Many people believe that prison isn't a cure for crime",
          "wordGroup": "group_665",
          "colorIndex": 5
        },
        {
          "id": 2549,
          "word": "confine",
          "partOfSpeech": "n./v.",
          "chinese": "[~s]边界；范围/限制；监禁",
          "example": "this is outside the confines of human knowledge",
          "wordGroup": "group_665",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2550,
          "word": "oversee",
          "partOfSpeech": "v.",
          "chinese": "监督；监管",
          "example": "You must employ someone to oversee the project",
          "wordGroup": "group_666",
          "colorIndex": 0
        },
        {
          "id": 2551,
          "word": "supervise",
          "partOfSpeech": "v.",
          "chinese": "监督；管理；指导",
          "example": "This kind of project ought to be supervised by management",
          "wordGroup": "group_666",
          "colorIndex": 0
        },
        {
          "id": 2552,
          "word": "restrict",
          "partOfSpeech": "v.",
          "chinese": "限制；限定；约束",
          "example": "Don't restrict their proper activities",
          "wordGroup": "group_666",
          "colorIndex": 0
        },
        {
          "id": 2553,
          "word": "restrain",
          "partOfSpeech": "v.",
          "chinese": "抑制；制止",
          "example": "I can't restrain my anger when I hear someone being cruel to animals",
          "wordGroup": "group_666",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2554,
          "word": "commit",
          "partOfSpeech": "v.",
          "chinese": "犯（罪）；做（坏事）",
          "example": "He, who commits a fault, thinks everyone speaks of it",
          "wordGroup": "group_667",
          "colorIndex": 1
        },
        {
          "id": 2555,
          "word": "sin",
          "partOfSpeech": "n./s.",
          "chinese": "罪孽/犯戒律",
          "example": "She was baptized and she was pure and clean of sin",
          "wordGroup": "group_667",
          "colorIndex": 1
        },
        {
          "id": 2556,
          "word": "crime",
          "partOfSpeech": "n.",
          "chinese": "罪行；犯罪活动",
          "example": "There is no proof that he was on the crime scene",
          "wordGroup": "group_667",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2557,
          "word": "vice",
          "partOfSpeech": "n.",
          "chinese": "恶行；缺点",
          "example": "Virtue and vise are two different things: the former leads to peace, the latter to misery",
          "wordGroup": "group_668",
          "colorIndex": 2
        },
        {
          "id": 2558,
          "word": "bribe",
          "partOfSpeech": "n./v.",
          "chinese": "贿赂/向...行贿",
          "example": "The counterfeiter bribed the police officer to let him go free",
          "wordGroup": "group_668",
          "colorIndex": 2
        },
        {
          "id": 2559,
          "word": "rob",
          "partOfSpeech": "v.",
          "chinese": "抢劫；夺走",
          "example": "They were scheming to rob the bank",
          "wordGroup": "group_668",
          "colorIndex": 2
        },
        {
          "id": 2560,
          "word": "pirate",
          "partOfSpeech": "n./v.",
          "chinese": "海盗；盗版者/盗印，窃用",
          "example": "The terrible pirates attacked a merchant ship",
          "wordGroup": "group_668",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2561,
          "word": "steal",
          "partOfSpeech": "n.",
          "chinese": "偷，窃取；剽窃",
          "example": "The young man was sent to prison for stealing",
          "wordGroup": "group_669",
          "colorIndex": 3
        },
        {
          "id": 2562,
          "word": "thief",
          "partOfSpeech": "n.",
          "chinese": "窃贼；偷窃犯",
          "example": "The thief got in through the open window",
          "wordGroup": "group_669",
          "colorIndex": 3
        },
        {
          "id": 2563,
          "word": "murder",
          "partOfSpeech": "n./v.",
          "chinese": "谋杀",
          "example": "There have been serveral murder cases this year",
          "wordGroup": "group_669",
          "colorIndex": 3
        },
        {
          "id": 2564,
          "word": "suicide",
          "partOfSpeech": "n.",
          "chinese": "自杀",
          "example": "He attempted to commit suicide after his firm had gone bankrupt",
          "wordGroup": "group_669",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2565,
          "word": "deceive",
          "partOfSpeech": "v.",
          "chinese": "欺骗；蒙蔽；误导",
          "example": "Nobody can deceive me",
          "wordGroup": "group_670",
          "colorIndex": 4
        },
        {
          "id": 2566,
          "word": "cheat",
          "partOfSpeech": "v./n.",
          "chinese": "欺骗；作弊/作弊者",
          "example": "She always cheats at cards",
          "wordGroup": "group_670",
          "colorIndex": 4
        },
        {
          "id": 2567,
          "word": "fraud",
          "partOfSpeech": "n.",
          "chinese": "骗子；赝品；欺诈",
          "example": "People who try to sell you something that can treat all diseases are frauds",
          "wordGroup": "group_670",
          "colorIndex": 4
        },
        {
          "id": 2568,
          "word": "liar",
          "partOfSpeech": "n.",
          "chinese": "说谎的人",
          "example": "Why did they call him a liar",
          "wordGroup": "group_670",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2569,
          "word": "trap",
          "partOfSpeech": "n./v.",
          "chinese": "陷阱；诡计/诱骗",
          "example": "The police set a trap for the thieves",
          "wordGroup": "group_671",
          "colorIndex": 5
        },
        {
          "id": 2570,
          "word": "trick",
          "partOfSpeech": "n./v.",
          "chinese": "诡计/哄骗",
          "example": "The children played a trick on their teacher",
          "wordGroup": "group_671",
          "colorIndex": 5
        },
        {
          "id": 2571,
          "word": "pretend",
          "partOfSpeech": "v.",
          "chinese": "假装，假扮",
          "example": "The children pretended to be different animals and danced to the music",
          "wordGroup": "group_671",
          "colorIndex": 5
        },
        {
          "id": 2572,
          "word": "fool",
          "partOfSpeech": "n./v.",
          "chinese": "蠢人；傻子/欺骗",
          "example": "A fool's haste is no speed. 欲速则不达",
          "wordGroup": "group_671",
          "colorIndex": 5
        },
        {
          "id": 2573,
          "word": "stigma",
          "partOfSpeech": "n.",
          "chinese": "耻辱；污名",
          "example": "It's a stigma to ask for money",
          "wordGroup": "group_671",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2574,
          "word": "confess",
          "partOfSpeech": "v.",
          "chinese": "供认；忏悔",
          "example": "The suspect confessed to the armed robbery",
          "wordGroup": "group_672",
          "colorIndex": 0
        },
        {
          "id": 2575,
          "word": "conform",
          "partOfSpeech": "v.",
          "chinese": "遵守；顺从；相符合",
          "example": "A coat must conform to the figure of the wearer",
          "wordGroup": "group_672",
          "colorIndex": 0
        },
        {
          "id": 2576,
          "word": "reconcile",
          "partOfSpeech": "v.",
          "chinese": "使和解；调和",
          "example": "The estranged couple were reconciled after a year",
          "wordGroup": "group_672",
          "colorIndex": 0
        },
        {
          "id": 2577,
          "word": "obey",
          "partOfSpeech": "v.",
          "chinese": "服从；顺从",
          "example": "The students obeyed the new teacher without hesitation",
          "wordGroup": "group_672",
          "colorIndex": 0
        },
        {
          "id": 2578,
          "word": "succumb",
          "partOfSpeech": "v.",
          "chinese": "屈服；屈从",
          "example": "The president said his country would never succumb to pressure from other countries",
          "wordGroup": "group_672",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2579,
          "word": "penalty",
          "partOfSpeech": "n.",
          "chinese": "惩罚；处罚",
          "example": "What is the penalty for dangerous driving?",
          "wordGroup": "group_673",
          "colorIndex": 1
        },
        {
          "id": 2580,
          "word": "fine",
          "partOfSpeech": "n./adj.",
          "chinese": "罚款/美好的",
          "example": "The judge imposed a fine of twenty pounds on him",
          "wordGroup": "group_673",
          "colorIndex": 1
        },
        {
          "id": 2581,
          "word": "mortgage",
          "partOfSpeech": "v./n.",
          "chinese": "抵押（房屋、土地）借款/房贷",
          "example": "It is easy to get a mortgage on a house",
          "wordGroup": "group_673",
          "colorIndex": 1
        },
        {
          "id": 2582,
          "word": "ownership",
          "partOfSpeech": "n.",
          "chinese": "所有权；物主身份",
          "example": "The equity ownership ought to be protected",
          "wordGroup": "group_673",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2583,
          "word": "copyright",
          "partOfSpeech": "n.",
          "chinese": "版权",
          "example": "He retained the copyright of his book",
          "wordGroup": "group_674",
          "colorIndex": 2
        },
        {
          "id": 2584,
          "word": "privilege",
          "partOfSpeech": "n.",
          "chinese": "特权",
          "example": "The privilege was abused",
          "wordGroup": "group_674",
          "colorIndex": 2
        },
        {
          "id": 2585,
          "word": "accredit",
          "partOfSpeech": "v.",
          "chinese": "把...归于；委任",
          "example": "The invention of the electric light is accredited to Edison",
          "wordGroup": "group_674",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2586,
          "word": "clue",
          "partOfSpeech": "n.",
          "chinese": "线索；提示",
          "example": "The police found a clue which helped them catch the robber",
          "wordGroup": "group_675",
          "colorIndex": 3
        },
        {
          "id": 2587,
          "word": "access",
          "partOfSpeech": "n.",
          "chinese": "通路；查阅（或使用、接近）的机会（或权利）",
          "example": "Citizens have free access to the library",
          "wordGroup": "group_675",
          "colorIndex": 3
        },
        {
          "id": 2588,
          "word": "anonymous",
          "partOfSpeech": "adj.",
          "chinese": "匿名的",
          "example": "He received an anonymous letter",
          "wordGroup": "group_675",
          "colorIndex": 3
        },
        {
          "id": 2589,
          "word": "false",
          "partOfSpeech": "adj.",
          "chinese": "不正确的；虚假的；伪造的",
          "example": "Cutting down on libraries seems a false economy to me",
          "wordGroup": "group_675",
          "colorIndex": 3
        },
        {
          "id": 2590,
          "word": "genuine",
          "partOfSpeech": "adj.",
          "chinese": "真诚的；真正的",
          "example": "This metal is made of genuine gold",
          "wordGroup": "group_675",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2591,
          "word": "procedure",
          "partOfSpeech": "n.",
          "chinese": "手续；程序",
          "example": "The new work procedure is a great improvement on the old one",
          "wordGroup": "group_676",
          "colorIndex": 4
        },
        {
          "id": 2592,
          "word": "routine",
          "partOfSpeech": "n./adj.",
          "chinese": "例行公事；常规/惯例的",
          "example": "Our department holds a routine meeting every month",
          "wordGroup": "group_676",
          "colorIndex": 4
        },
        {
          "id": 2593,
          "word": "consequence",
          "partOfSpeech": "n.",
          "chinese": "后果",
          "example": "Your behavior is of no great consequence",
          "wordGroup": "group_676",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2594,
          "word": "demand",
          "partOfSpeech": "v./n.",
          "chinese": "要求；需要/需求；需求量",
          "example": "This work demands your patience",
          "wordGroup": "group_677",
          "colorIndex": 5
        },
        {
          "id": 2595,
          "word": "request",
          "partOfSpeech": "n./v.",
          "chinese": "要求；请求",
          "example": "We shall give your request our careful consideration",
          "wordGroup": "group_677",
          "colorIndex": 5
        },
        {
          "id": 2596,
          "word": "require",
          "partOfSpeech": "v.",
          "chinese": "需要；命令；规定",
          "example": "You are requried by law to wear a seat belt",
          "wordGroup": "group_677",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2597,
          "word": "petition",
          "partOfSpeech": "v./n.",
          "chinese": "请求/请愿书；上诉",
          "example": "The villagers all signed a petition for a hospital to be built",
          "wordGroup": "group_678",
          "colorIndex": 0
        },
        {
          "id": 2598,
          "word": "command",
          "partOfSpeech": "v./n.",
          "chinese": "命令；指挥；统率/命令；指挥；控制；运用能力",
          "example": "The army is under the King's command",
          "wordGroup": "group_678",
          "colorIndex": 0
        },
        {
          "id": 2599,
          "word": "instruct",
          "partOfSpeech": "v.",
          "chinese": "指导；讲授；通知；命令",
          "example": "The tour guide instructed the tourists in customs regulations",
          "wordGroup": "group_678",
          "colorIndex": 0
        }
      ]
    ]
  },
  {
    "title": "沙场争锋",
    "groups": [
      [
        {
          "id": 2600,
          "word": "violence",
          "partOfSpeech": "n.",
          "chinese": "暴力",
          "example": "The French government today called for an end to the violence",
          "wordGroup": "group_678",
          "colorIndex": 0
        },
        {
          "id": 2601,
          "word": "conflict",
          "partOfSpeech": "n./v.",
          "chinese": "斗争，冲突/冲突",
          "example": "Many people feel that religion conflicts with science",
          "wordGroup": "group_678",
          "colorIndex": 0
        },
        {
          "id": 2602,
          "word": "raid",
          "partOfSpeech": "n./v.",
          "chinese": "突袭；突然搜查",
          "example": "We launched a bombing raid on enemy bases.",
          "wordGroup": "group_678",
          "colorIndex": 0
        },
        {
          "id": 2603,
          "word": "enormity",
          "partOfSpeech": "n.",
          "chinese": "巨大；滔天大罪",
          "example": "The enormity of the crime has shocked even experienced policeman",
          "wordGroup": "group_678",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2604,
          "word": "campaign",
          "partOfSpeech": "n./v.",
          "chinese": "战役；（社会、政治）运动/参加（或领导）运动",
          "example": "Those people are campaigning for equal rights for women",
          "wordGroup": "group_679",
          "colorIndex": 1
        },
        {
          "id": 2605,
          "word": "battle",
          "partOfSpeech": "n./v.",
          "chinese": "战斗，战役/与...战斗",
          "example": "Life is a battle from cradle to grave",
          "wordGroup": "group_679",
          "colorIndex": 1
        },
        {
          "id": 2606,
          "word": "struggle",
          "partOfSpeech": "v./n.",
          "chinese": "挣扎；奋力；奋斗",
          "example": "His father struggled to control his temper",
          "wordGroup": "group_679",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2607,
          "word": "explosion",
          "partOfSpeech": "n.",
          "chinese": "爆发；迸发；爆炸；激增",
          "example": "The explosion was caused by a burst gas pipe",
          "wordGroup": "group_680",
          "colorIndex": 2
        },
        {
          "id": 2608,
          "word": "bombard",
          "partOfSpeech": "v.",
          "chinese": "轰击，轰炸；连珠炮般质问（或批评）",
          "example": "The speaker was bombarded with questions",
          "wordGroup": "group_680",
          "colorIndex": 2
        },
        {
          "id": 2609,
          "word": "bomb",
          "partOfSpeech": "n./v.",
          "chinese": "炸弹/轰炸",
          "example": "The terrorist planted a bomb in the post office",
          "wordGroup": "group_680",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2610,
          "word": "blast",
          "partOfSpeech": "n./v.",
          "chinese": "爆炸/爆炸，炸毁",
          "example": "It's thought that the blast occurred when volatile chemicals exploded.",
          "wordGroup": "group_681",
          "colorIndex": 3
        },
        {
          "id": 2611,
          "word": "burst",
          "partOfSpeech": "v./n.",
          "chinese": "爆裂，展开/迸发，爆裂",
          "example": "Prices went up and up in those years before the housing bubble burst",
          "wordGroup": "group_681",
          "colorIndex": 3
        },
        {
          "id": 2612,
          "word": "spark",
          "partOfSpeech": "n.",
          "chinese": "火花，火星",
          "example": "A single spark can start a prairie fire. 星星之火可以燎原",
          "wordGroup": "group_681",
          "colorIndex": 3
        },
        {
          "id": 2613,
          "word": "twinkle",
          "partOfSpeech": "n./v.",
          "chinese": "闪烁，闪耀",
          "example": "We could see the distant twinkle of the harbor lights",
          "wordGroup": "group_681",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2614,
          "word": "gunpowder",
          "partOfSpeech": "n.",
          "chinese": "火药",
          "example": "Gunpowder was used for military purposes in China as far back as the 10th Century",
          "wordGroup": "group_682",
          "colorIndex": 4
        },
        {
          "id": 2615,
          "word": "tank",
          "partOfSpeech": "n.",
          "chinese": "坦克；罐，槽，缸",
          "example": "The tank got bogged down in the mud",
          "wordGroup": "group_682",
          "colorIndex": 4
        },
        {
          "id": 2616,
          "word": "cannon",
          "partOfSpeech": "n.",
          "chinese": "大炮，加农炮",
          "example": "The fighter planes are all armed with cannons",
          "wordGroup": "group_682",
          "colorIndex": 4
        },
        {
          "id": 2617,
          "word": "missile",
          "partOfSpeech": "n.",
          "chinese": "导弹；投掷物",
          "example": "A hand-grenade is a missile weapon 手榴弹是一种投掷武器",
          "wordGroup": "group_682",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2618,
          "word": "weapon",
          "partOfSpeech": "n.",
          "chinese": "武器；兵器；手段",
          "example": "Their ultimate weapon was the threat of an all-out strike",
          "wordGroup": "group_683",
          "colorIndex": 5
        },
        {
          "id": 2619,
          "word": "pistol",
          "partOfSpeech": "n.",
          "chinese": "手枪",
          "example": "The robber took a pistol out of his pocket and pointed it at the shopkeeper",
          "wordGroup": "group_683",
          "colorIndex": 5
        },
        {
          "id": 2620,
          "word": "rifle",
          "partOfSpeech": "n.",
          "chinese": "步枪",
          "example": "He accidentally triggered his rifle",
          "wordGroup": "group_683",
          "colorIndex": 5
        },
        {
          "id": 2621,
          "word": "bullet",
          "partOfSpeech": "n.",
          "chinese": "子弹",
          "example": "The bullet hit him in the leg",
          "wordGroup": "group_683",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2622,
          "word": "target",
          "partOfSpeech": "n.",
          "chinese": "靶子；目标",
          "example": "The hunter's target was a wild beast",
          "wordGroup": "group_684",
          "colorIndex": 0
        },
        {
          "id": 2623,
          "word": "deflect",
          "partOfSpeech": "v.",
          "chinese": "（使）偏斜，（使）偏转；转移",
          "example": "The bullet struck a wall and was deflected from its course",
          "wordGroup": "group_684",
          "colorIndex": 0
        },
        {
          "id": 2624,
          "word": "mission",
          "partOfSpeech": "n.",
          "chinese": "使命；重要任务；传教团",
          "example": "He has been on confidential missions to Berlin",
          "wordGroup": "group_684",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2625,
          "word": "flame",
          "partOfSpeech": "n.",
          "chinese": "火焰；强烈的情感",
          "example": "It's been dry for so long that the forest could burst into flames at any moment",
          "wordGroup": "group_685",
          "colorIndex": 1
        },
        {
          "id": 2626,
          "word": "flare",
          "partOfSpeech": "n./v.",
          "chinese": "（闪耀的）火光；闪光信号灯/闪耀",
          "example": "The flare of the match lit up the little girl's face",
          "wordGroup": "group_685",
          "colorIndex": 1
        },
        {
          "id": 2627,
          "word": "glitter",
          "partOfSpeech": "v./n.",
          "chinese": "闪烁；闪现/发光小物",
          "example": "The diamond ring on her finger glittered in the moonlight",
          "wordGroup": "group_685",
          "colorIndex": 1
        },
        {
          "id": 2628,
          "word": "glow",
          "partOfSpeech": "v./n.",
          "chinese": "发出微弱稳定的光/微弱稳定的光",
          "example": "Maple leaves glowed red in the sunlight 枫叶在阳光里闪耀着红光",
          "wordGroup": "group_685",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2629,
          "word": "blade",
          "partOfSpeech": "n.",
          "chinese": "刃；锋；（螺旋桨的）叶片",
          "example": "The blades of the electric fan are covered with dust",
          "wordGroup": "group_686",
          "colorIndex": 2
        },
        {
          "id": 2630,
          "word": "sword",
          "partOfSpeech": "n.",
          "chinese": "刀；剑",
          "example": "Fame can be a double-edged sword",
          "wordGroup": "group_686",
          "colorIndex": 2
        },
        {
          "id": 2631,
          "word": "ax",
          "partOfSpeech": "n.",
          "chinese": "斧头",
          "example": "He cut a hole through the wall with an ax",
          "wordGroup": "group_686",
          "colorIndex": 2
        },
        {
          "id": 2632,
          "word": "hammer",
          "partOfSpeech": "n./v.",
          "chinese": "锤，榔头/用锤击",
          "example": "He hammered the nail into the wall with a hammer",
          "wordGroup": "group_686",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2633,
          "word": "bow",
          "partOfSpeech": "n.",
          "chinese": "弓；蝴蝶结",
          "example": "At that time, people hunted with bows and arrows",
          "wordGroup": "group_687",
          "colorIndex": 3
        },
        {
          "id": 2634,
          "word": "arrow",
          "partOfSpeech": "n.",
          "chinese": "箭头，箭",
          "example": "The arrow pierced her shoulder",
          "wordGroup": "group_687",
          "colorIndex": 3
        },
        {
          "id": 2635,
          "word": "spear",
          "partOfSpeech": "n./v.",
          "chinese": "矛；标枪/用尖物刺穿",
          "example": "The athlete is trying to launch a spear",
          "wordGroup": "group_687",
          "colorIndex": 3
        },
        {
          "id": 2636,
          "word": "helmet",
          "partOfSpeech": "n.",
          "chinese": "头盔",
          "example": "All visitors to the site must wear a safety helmet",
          "wordGroup": "group_687",
          "colorIndex": 3
        },
        {
          "id": 2637,
          "word": "shield",
          "partOfSpeech": "n./v.",
          "chinese": "盾；防护物/保护",
          "example": "The shield protected the warrior from the blows of his enemies",
          "wordGroup": "group_687",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2638,
          "word": "equip",
          "partOfSpeech": "v.",
          "chinese": "配备，装备",
          "example": "He equipped himself for an expedition to the jungle",
          "wordGroup": "group_688",
          "colorIndex": 4
        },
        {
          "id": 2639,
          "word": "prepare",
          "partOfSpeech": "v.",
          "chinese": "使预备好，为...做准备",
          "example": "The defence lawyer asked for another week to prepare for their case",
          "wordGroup": "group_688",
          "colorIndex": 4
        },
        {
          "id": 2640,
          "word": "provide",
          "partOfSpeech": "v.",
          "chinese": "供给；提供",
          "example": "The hotel provides a reservation of tickets for its residents",
          "wordGroup": "group_688",
          "colorIndex": 4
        },
        {
          "id": 2641,
          "word": "deploy",
          "partOfSpeech": "v.",
          "chinese": "部署",
          "example": "The general ordered his men to deploy in order to meet the offensive of the enemy",
          "wordGroup": "group_688",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2642,
          "word": "hit",
          "partOfSpeech": "v./n.",
          "chinese": "打，击，碰撞/打，击中",
          "example": "They insisted that food and medical supplis should be given to the worst hit areas",
          "wordGroup": "group_689",
          "colorIndex": 5
        },
        {
          "id": 2643,
          "word": "beat",
          "partOfSpeech": "v./n.",
          "chinese": "打；打败；（心脏等）跳动/节拍；击鼓声",
          "example": "If we don't prepare for the debate, they will beat us",
          "wordGroup": "group_689",
          "colorIndex": 5
        },
        {
          "id": 2644,
          "word": "strike",
          "partOfSpeech": "v./n.",
          "chinese": "打，击，突击；罢工/罢工；打击",
          "example": "The strike has delivered a heavy blow to the management 这场罢工给了资方一个沉重的打击",
          "wordGroup": "group_689",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2645,
          "word": "punch",
          "partOfSpeech": "n./v.",
          "chinese": "打孔机；重拳打击/给...打孔；拳打",
          "example": "Spectators cheered at his knockout punch 观众为他击倒对手的一拳而喝彩",
          "wordGroup": "group_690",
          "colorIndex": 0
        },
        {
          "id": 2646,
          "word": "chop",
          "partOfSpeech": "v.",
          "chinese": "切碎（食物）；劈（木头）",
          "example": "onions must be chopped up to make a salad",
          "wordGroup": "group_690",
          "colorIndex": 0
        },
        {
          "id": 2647,
          "word": "stab",
          "partOfSpeech": "v./n.",
          "chinese": "刺；戳",
          "example": "She stabbled him in the leg with a knife",
          "wordGroup": "group_690",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2648,
          "word": "dilemma",
          "partOfSpeech": "n.",
          "chinese": "/daɪˈlem.ə/ /dɪˈlem.ə/（进退两难的）困境",
          "example": "The man has a scheduling conflict, so now he is in a dilemma",
          "wordGroup": "group_691",
          "colorIndex": 1
        },
        {
          "id": 2649,
          "word": "plight",
          "partOfSpeech": "n.",
          "chinese": "困境；誓约",
          "example": "This article drew attention to the plight of the unemployed",
          "wordGroup": "group_691",
          "colorIndex": 1
        },
        {
          "id": 2650,
          "word": "pitfall",
          "partOfSpeech": "n.",
          "chinese": "陷阱；危险；困难",
          "example": "The lawer gave me advice on how to avoid the pitfall of the legal process",
          "wordGroup": "group_691",
          "colorIndex": 1
        },
        {
          "id": 2651,
          "word": "conspiracy",
          "partOfSpeech": "n.",
          "chinese": "阴谋；密谋；合谋",
          "example": "The conspiracy of the assassination of the president was brought to light in time",
          "wordGroup": "group_691",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2652,
          "word": "destitute",
          "partOfSpeech": "adj.",
          "chinese": "赤贫的；一无所有的，缺乏",
          "example": "The floods left many people destitute 水灾使很多人一无所有",
          "wordGroup": "group_692",
          "colorIndex": 2
        },
        {
          "id": 2653,
          "word": "famine",
          "partOfSpeech": "n.",
          "chinese": "饥荒",
          "example": "Many people died of famine that year",
          "wordGroup": "group_692",
          "colorIndex": 2
        },
        {
          "id": 2654,
          "word": "starve",
          "partOfSpeech": "v.",
          "chinese": "使挨饿；饿死",
          "example": "They besieged the town and tried to starve the army into surrender",
          "wordGroup": "group_692",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2655,
          "word": "deprive",
          "partOfSpeech": "v.",
          "chinese": "剥夺",
          "example": "Sickness deprived me of the pleasure of traveling overseas",
          "wordGroup": "group_693",
          "colorIndex": 3
        },
        {
          "id": 2656,
          "word": "seize",
          "partOfSpeech": "v.",
          "chinese": "抓住；夺取",
          "example": "Uncontrollable laughter seized us up",
          "wordGroup": "group_693",
          "colorIndex": 3
        },
        {
          "id": 2657,
          "word": "pursue",
          "partOfSpeech": "v.",
          "chinese": "追赶",
          "example": "Why should we even have to decide whether to pursue truth",
          "wordGroup": "group_693",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2658,
          "word": "threat",
          "partOfSpeech": "n.",
          "chinese": "威胁；恐吓",
          "example": "The United Nations is trying to free the world from the threat of war",
          "wordGroup": "group_694",
          "colorIndex": 4
        },
        {
          "id": 2659,
          "word": "offend",
          "partOfSpeech": "v.",
          "chinese": "冒犯；犯罪；违反",
          "example": "We mustn't offend the local customs",
          "wordGroup": "group_694",
          "colorIndex": 4
        },
        {
          "id": 2660,
          "word": "aggressive",
          "partOfSpeech": "adj.",
          "chinese": "侵略的；好斗的",
          "example": "The world dooms itself to war because man is aggressive at heart",
          "wordGroup": "group_694",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2661,
          "word": "invade",
          "partOfSpeech": "v.",
          "chinese": "入侵；侵略；侵扰",
          "example": "They are determined to resist the invading armies",
          "wordGroup": "group_695",
          "colorIndex": 5
        },
        {
          "id": 2662,
          "word": "trespass",
          "partOfSpeech": "v./n.",
          "chinese": "非法入侵/罪过，非法入侵",
          "example": "The farmer saied we were trespassing on private land",
          "wordGroup": "group_695",
          "colorIndex": 5
        },
        {
          "id": 2663,
          "word": "intrude",
          "partOfSpeech": "v.",
          "chinese": "闯入，侵入，侵扰",
          "example": "Employers should not intrude into the private lives of their employees",
          "wordGroup": "group_695",
          "colorIndex": 5
        },
        {
          "id": 2664,
          "word": "violate",
          "partOfSpeech": "v.",
          "chinese": "违反；违背；侵犯；搅扰",
          "example": "The sound of guns violated the usual calm of a Sunday morning",
          "wordGroup": "group_695",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2665,
          "word": "attack",
          "partOfSpeech": "v./n.",
          "chinese": "攻击；进攻",
          "example": "The police are launching a major attack on drug dealers",
          "wordGroup": "group_696",
          "colorIndex": 0
        },
        {
          "id": 2666,
          "word": "assault",
          "partOfSpeech": "n./v.",
          "chinese": "猛攻；（身体）侵犯/袭击",
          "example": "He was accused of sexual assault",
          "wordGroup": "group_696",
          "colorIndex": 0
        },
        {
          "id": 2667,
          "word": "challenge",
          "partOfSpeech": "n./v.",
          "chinese": "挑战/向...挑战",
          "example": "He challenged me to play another tennis game",
          "wordGroup": "group_696",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2668,
          "word": "siege",
          "partOfSpeech": "n.",
          "chinese": "包围，围攻",
          "example": "The TV station has been under siege from irate viewers phoning in to complain 电视被愤怒的观众围攻，一直打电话来抱怨",
          "wordGroup": "group_697",
          "colorIndex": 1
        },
        {
          "id": 2669,
          "word": "surround",
          "partOfSpeech": "v.",
          "chinese": "包围；环绕",
          "example": "They have surrounded the town with troops",
          "wordGroup": "group_697",
          "colorIndex": 1
        },
        {
          "id": 2670,
          "word": "enclose",
          "partOfSpeech": "v.",
          "chinese": "围住；包围；把...封入信封；随信附上",
          "example": "The writer's house is enclosed by a wall",
          "wordGroup": "group_697",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2671,
          "word": "pause",
          "partOfSpeech": "n./v.",
          "chinese": "暂停，停顿",
          "example": "After she ran up the hill, she paused for a minute to rest",
          "wordGroup": "group_698",
          "colorIndex": 2
        },
        {
          "id": 2672,
          "word": "halt",
          "partOfSpeech": "v./n.",
          "chinese": "（使）停止/停止",
          "example": "The cab rolled to a halt before the hotel 计程车缓缓地停在了酒店前",
          "wordGroup": "group_698",
          "colorIndex": 2
        },
        {
          "id": 2673,
          "word": "cease",
          "partOfSpeech": "v.",
          "chinese": "终止；停止",
          "example": "At last, they ceased working for lack of capital 他们最终由于缺乏资金停工了",
          "wordGroup": "group_698",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2674,
          "word": "oppose",
          "partOfSpeech": "v.",
          "chinese": "反对，抵制",
          "example": "The employees opposed their company's new policies",
          "wordGroup": "group_699",
          "colorIndex": 3
        },
        {
          "id": 2675,
          "word": "oppress",
          "partOfSpeech": "v.",
          "chinese": "压迫；压制；使压抑",
          "example": "The king oppressed his people with terrible taxes and punishments",
          "wordGroup": "group_699",
          "colorIndex": 3
        },
        {
          "id": 2676,
          "word": "counter",
          "partOfSpeech": "v./adv./n.",
          "chinese": "抵消；反击；反驳/相反的/柜台；工作台",
          "example": "My colleague countered my proposal with one of his own",
          "wordGroup": "group_699",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2677,
          "word": "deter",
          "partOfSpeech": "v.",
          "chinese": "阻止；威慑住",
          "example": "The security camera was installed to deter people from stealing",
          "wordGroup": "group_700",
          "colorIndex": 4
        },
        {
          "id": 2678,
          "word": "forbid",
          "partOfSpeech": "v.",
          "chinese": "禁止；阻止",
          "example": "Lack of time forbids any further discussion on this issue",
          "wordGroup": "group_700",
          "colorIndex": 4
        },
        {
          "id": 2679,
          "word": "prohibit",
          "partOfSpeech": "v.",
          "chinese": "禁止；不允许",
          "example": "Smoking is strictly prohibited in the process of handling explosive materials",
          "wordGroup": "group_700",
          "colorIndex": 4
        },
        {
          "id": 2680,
          "word": "prevent",
          "partOfSpeech": "v.",
          "chinese": "预防，防止；阻止，阻碍",
          "example": "Scientists are trying to find ways to prevent the disease from spreading",
          "wordGroup": "group_700",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2681,
          "word": "revolt",
          "partOfSpeech": "n./v.",
          "chinese": "叛乱；反抗",
          "example": "Autocracy often causes the people to revolt 独裁统治常常引起人民的反抗",
          "wordGroup": "group_701",
          "colorIndex": 5
        },
        {
          "id": 2682,
          "word": "betray",
          "partOfSpeech": "v.",
          "chinese": "背叛；出卖；（无意中）泄露；流露出",
          "example": "They have promised never to betray the organization",
          "wordGroup": "group_701",
          "colorIndex": 5
        },
        {
          "id": 2683,
          "word": "treason",
          "partOfSpeech": "n.",
          "chinese": "叛国罪；通敌罪",
          "example": "They have committed treason against the state",
          "wordGroup": "group_701",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2684,
          "word": "rebel",
          "partOfSpeech": "n./v.",
          "chinese": "反叛者；叛逆者/造反；反抗；反对",
          "example": "The rebels made regular attacks on the railways",
          "wordGroup": "group_702",
          "colorIndex": 0
        },
        {
          "id": 2685,
          "word": "traitor",
          "partOfSpeech": "n.",
          "chinese": "叛徒，卖国贼",
          "example": "He stuck a knife into the traitor's heart",
          "wordGroup": "group_702",
          "colorIndex": 0
        },
        {
          "id": 2686,
          "word": "patriot",
          "partOfSpeech": "n.",
          "chinese": "爱国者",
          "example": "A true patriot will never betray his country",
          "wordGroup": "group_702",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2687,
          "word": "blame",
          "partOfSpeech": "v./n.",
          "chinese": "责备，指责/（对坏事应负的）责任",
          "example": "Bad workmen often blame their tools",
          "wordGroup": "group_703",
          "colorIndex": 1
        },
        {
          "id": 2688,
          "word": "reproach",
          "partOfSpeech": "n./v.",
          "chinese": "责备；指责",
          "example": "His manners are beyond reproach 他的举止无可指摘",
          "wordGroup": "group_703",
          "colorIndex": 1
        },
        {
          "id": 2689,
          "word": "evidence",
          "partOfSpeech": "n.",
          "chinese": "证据；根据",
          "example": "Can you show me any evidence for your statement?",
          "wordGroup": "group_703",
          "colorIndex": 1
        },
        {
          "id": 2690,
          "word": "proof",
          "partOfSpeech": "n.",
          "chinese": "证明，证据",
          "example": "Have you got any proof that you own his handbag?",
          "wordGroup": "group_703",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2691,
          "word": "terror",
          "partOfSpeech": "n.",
          "chinese": "恐惧；恐慌",
          "example": "His terror is so intense that he can't do anything",
          "wordGroup": "group_704",
          "colorIndex": 2
        },
        {
          "id": 2692,
          "word": "terrible",
          "partOfSpeech": "adj.",
          "chinese": "可怕的；糟糕的；极严重的",
          "example": "The earthquake was a terrible catastrophe",
          "wordGroup": "group_704",
          "colorIndex": 2
        },
        {
          "id": 2693,
          "word": "terrific",
          "partOfSpeech": "adj.",
          "chinese": "极好的；很大的；很强的",
          "example": "The ceiling came down with a terrific crash",
          "wordGroup": "group_704",
          "colorIndex": 2
        },
        {
          "id": 2694,
          "word": "horrible",
          "partOfSpeech": "adj.",
          "chinese": "可怕的；恐怖的",
          "example": "There was a horrible accident here yesterday",
          "wordGroup": "group_704",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2695,
          "word": "alarm",
          "partOfSpeech": "n.",
          "chinese": "惊恐；犹豫；报警；报警器",
          "example": "The instant they heard the alarm, they fell in for action",
          "wordGroup": "group_705",
          "colorIndex": 3
        },
        {
          "id": 2696,
          "word": "dread",
          "partOfSpeech": "v./n.",
          "chinese": "极为害怕；非常担心/恐惧忧愁",
          "example": "I dread to think what will happen if she finds out the truth",
          "wordGroup": "group_705",
          "colorIndex": 3
        },
        {
          "id": 2697,
          "word": "frighten",
          "partOfSpeech": "v.",
          "chinese": "使害怕；使惊恐",
          "example": "He frightened the old man into giving him all the money",
          "wordGroup": "group_705",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2698,
          "word": "tension",
          "partOfSpeech": "n.",
          "chinese": "紧张；拉紧状态",
          "example": "Tension mounted as we waited for the exam results to be published 在我们等待公布考试成绩时，气氛越来越紧张",
          "wordGroup": "group_706",
          "colorIndex": 4
        },
        {
          "id": 2699,
          "word": "turbulent",
          "partOfSpeech": "adj.",
          "chinese": "动荡的；混乱的；汹涌的",
          "example": "The sea was to turbulent for us to set sail",
          "wordGroup": "group_706",
          "colorIndex": 4
        },
        {
          "id": 2700,
          "word": "turmoil",
          "partOfSpeech": "n.",
          "chinese": "混乱，骚乱",
          "example": "The demostration turned into turmoil 示威演变成了骚乱",
          "wordGroup": "group_706",
          "colorIndex": 4
        },
        {
          "id": 2701,
          "word": "scenario",
          "partOfSpeech": "n.",
          "chinese": "可能发生的情况；剧情梗概；脚本",
          "example": "Imagine a scenario where only 20 percent of people have a job",
          "wordGroup": "group_706",
          "colorIndex": 4
        },
        {
          "id": 2702,
          "word": "occasion",
          "partOfSpeech": "n.",
          "chinese": "场合；时机；机会",
          "example": "A wedding is a very happy occasion",
          "wordGroup": "group_706",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2703,
          "word": "limit",
          "partOfSpeech": "n./v.",
          "chinese": "限度；界限/限制，限定",
          "example": "I'll help as much as I can, but there is a limit to what I can do",
          "wordGroup": "group_707",
          "colorIndex": 5
        },
        {
          "id": 2704,
          "word": "boundary",
          "partOfSpeech": "n.",
          "chinese": "分界线，边界；界限",
          "example": "The river is the boundary between the two countries",
          "wordGroup": "group_707",
          "colorIndex": 5
        },
        {
          "id": 2705,
          "word": "rein",
          "partOfSpeech": "n./v.",
          "chinese": "缰绳；控制权/用缰绳勒马；管束",
          "example": "The hourse responds to the slightest pull on the rein",
          "wordGroup": "group_707",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2706,
          "word": "compete",
          "partOfSpeech": "v.",
          "chinese": "竞争；参加（比赛）",
          "example": "Our products must be able to compete in marketplace",
          "wordGroup": "group_708",
          "colorIndex": 0
        },
        {
          "id": 2707,
          "word": "contest",
          "partOfSpeech": "v./n.",
          "chinese": "争取赢得；争辩/竞争；比赛",
          "example": "If the election is one-sided, it is really no contest",
          "wordGroup": "group_708",
          "colorIndex": 0
        },
        {
          "id": 2708,
          "word": "contend",
          "partOfSpeech": "v.",
          "chinese": "竞争；争辩；主张",
          "example": "He contended that it was not his fault",
          "wordGroup": "group_708",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2709,
          "word": "rival",
          "partOfSpeech": "n./v.",
          "chinese": "竞争者；对手/与...匹敌",
          "example": "She and I are rivals for the swimming prize",
          "wordGroup": "group_709",
          "colorIndex": 1
        },
        {
          "id": 2710,
          "word": "competitor",
          "partOfSpeech": "n.",
          "chinese": "竞争者；对手",
          "example": "That company is a strong competitor of us",
          "wordGroup": "group_709",
          "colorIndex": 1
        },
        {
          "id": 2711,
          "word": "enemy",
          "partOfSpeech": "n.",
          "chinese": "敌人；仇敌；敌军",
          "example": "Disease is an enemy of mankind",
          "wordGroup": "group_709",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2712,
          "word": "strategy",
          "partOfSpeech": "n.",
          "chinese": "策略；战略",
          "example": "Maozedong was a great strategist and skilled in developing military strategies",
          "wordGroup": "group_710",
          "colorIndex": 2
        },
        {
          "id": 2713,
          "word": "tactic",
          "partOfSpeech": "n.",
          "chinese": "策略，战术",
          "example": "Reducing prices is a common sales tactic",
          "wordGroup": "group_710",
          "colorIndex": 2
        },
        {
          "id": 2714,
          "word": "maneuver/manoeuvre",
          "partOfSpeech": "n.",
          "chinese": "策略；技巧；[~s]军事演习",
          "example": "The army is doing maneuvers at sea",
          "wordGroup": "group_710",
          "colorIndex": 2
        },
        {
          "id": 2715,
          "word": "blueprint",
          "partOfSpeech": "n.",
          "chinese": "蓝图；行动计划",
          "example": "The construction of a concert hall is still in the blueprint stage",
          "wordGroup": "group_710",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2716,
          "word": "warn",
          "partOfSpeech": "v.",
          "chinese": "警告；告诫",
          "example": "They warned her that if she did it again, she would be sent to prison",
          "wordGroup": "group_711",
          "colorIndex": 3
        },
        {
          "id": 2717,
          "word": "compel",
          "partOfSpeech": "v.",
          "chinese": "强迫；迫使",
          "example": "I was compelled to find a part-time job because I needed money",
          "wordGroup": "group_711",
          "colorIndex": 3
        },
        {
          "id": 2718,
          "word": "oblige",
          "partOfSpeech": "v.",
          "chinese": "迫使；强迫；帮忙",
          "example": "The law obliges parents to send their children to school",
          "wordGroup": "group_711",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2719,
          "word": "order",
          "partOfSpeech": "n./v.",
          "chinese": "次序；整齐/命令",
          "example": "Some teachers find it difficult to keep order in class",
          "wordGroup": "group_712",
          "colorIndex": 4
        },
        {
          "id": 2720,
          "word": "protest",
          "partOfSpeech": "n./v.",
          "chinese": "抗议；申明/抗议；申辩",
          "example": "The diners protested about the bad service at the restaurant",
          "wordGroup": "group_712",
          "colorIndex": 4
        },
        {
          "id": 2721,
          "word": "refute",
          "partOfSpeech": "v.",
          "chinese": "反驳；驳斥；否认",
          "example": "He had hardly finished when someone rose to refute his points 他还没有说完，就有人起来驳斥他的观点",
          "wordGroup": "group_712",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2722,
          "word": "might",
          "partOfSpeech": "n.",
          "chinese": "力量，威力",
          "example": "We fear the military might of the enemy",
          "wordGroup": "group_713",
          "colorIndex": 5
        },
        {
          "id": 2723,
          "word": "force",
          "partOfSpeech": "n./v.",
          "chinese": "力量；武力/强迫；迫使",
          "example": "We'll settle the problem by force if necessary",
          "wordGroup": "group_713",
          "colorIndex": 5
        },
        {
          "id": 2724,
          "word": "reinforce",
          "partOfSpeech": "v.",
          "chinese": "增援；增强；加强；加固",
          "example": "If concrete has steel bars inside it, it is known as reinforced concrete",
          "wordGroup": "group_713",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2725,
          "word": "impair",
          "partOfSpeech": "v.",
          "chinese": "削弱；妨碍",
          "example": "If a witness is allowed to withhold information, it impairs the legal process 如果允许证人知情不报，会妨碍法律程序",
          "wordGroup": "group_714",
          "colorIndex": 0
        },
        {
          "id": 2726,
          "word": "mitigate",
          "partOfSpeech": "v.",
          "chinese": "减轻；缓和",
          "example": "Nothing could mitigate the cruelty with which she had treated him 她对他太残暴了，没有什么能为她开脱",
          "wordGroup": "group_714",
          "colorIndex": 0
        },
        {
          "id": 2727,
          "word": "comfort",
          "partOfSpeech": "n./v.",
          "chinese": "安慰；舒适/缓和抚慰",
          "example": "A father is a treasure, a brother is a comfort, but a friend is both",
          "wordGroup": "group_714",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2728,
          "word": "event",
          "partOfSpeech": "n.",
          "chinese": "事件；大事；公开活动",
          "example": "There will be a fundraising event in the library tomorrow",
          "wordGroup": "group_715",
          "colorIndex": 1
        },
        {
          "id": 2729,
          "word": "matter",
          "partOfSpeech": "n./v.",
          "chinese": "事情；物质/要紧",
          "example": "He reconsidered his decision on the matter because something unexpected happened",
          "wordGroup": "group_715",
          "colorIndex": 1
        },
        {
          "id": 2730,
          "word": "happen",
          "partOfSpeech": "v.",
          "chinese": "发生；出现；碰巧",
          "example": "It is important to anticipate when it will happen",
          "wordGroup": "group_715",
          "colorIndex": 1
        },
        {
          "id": 2731,
          "word": "occur",
          "partOfSpeech": "v.",
          "chinese": "发生，出现",
          "example": "The accident occurred at six o'clock in the morning",
          "wordGroup": "group_715",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2732,
          "word": "savage",
          "partOfSpeech": "adj./v./n.",
          "chinese": "野蛮的；凶狠的/凶狠的攻击/野蛮人",
          "example": "Elephants are tame most of the time, but they can be very savage",
          "wordGroup": "group_716",
          "colorIndex": 2
        },
        {
          "id": 2733,
          "word": "reckless",
          "partOfSpeech": "adj.",
          "chinese": "鲁莽的；不计后果的",
          "example": "He is very reckless when he is drunk",
          "wordGroup": "group_716",
          "colorIndex": 2
        },
        {
          "id": 2734,
          "word": "fierce",
          "partOfSpeech": "adj.",
          "chinese": "凶猛的；猛烈的；（天气或温度）恶劣的",
          "example": "They launched a fierce attack against the enemy position 他们向敌人的阵地发起了猛烈的进攻",
          "wordGroup": "group_716",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2735,
          "word": "foul",
          "partOfSpeech": "adj./v.",
          "chinese": "恶臭的；恶劣的；邪恶的/弄脏；对...犯规",
          "example": "The foul weather spoiled our vacation 恶劣的天气毁了我们的假期",
          "wordGroup": "group_717",
          "colorIndex": 3
        },
        {
          "id": 2736,
          "word": "evil",
          "partOfSpeech": "n./adj.",
          "chinese": "邪恶；祸害/邪恶的",
          "example": "Money is thought to be the root cause of all evil",
          "wordGroup": "group_717",
          "colorIndex": 3
        },
        {
          "id": 2737,
          "word": "devil",
          "partOfSpeech": "n.",
          "chinese": "魔鬼；恶棍",
          "example": "That enemy officer is the devil incarnate 他是魔鬼的化身",
          "wordGroup": "group_717",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2738,
          "word": "punishment",
          "partOfSpeech": "n.",
          "chinese": "惩罚；处罚",
          "example": "Punishment had very little effect on him",
          "wordGroup": "group_718",
          "colorIndex": 4
        },
        {
          "id": 2739,
          "word": "execute",
          "partOfSpeech": "v.",
          "chinese": "实行，执行；处死",
          "example": "We can execute the big volume of orders in 20 days",
          "wordGroup": "group_718",
          "colorIndex": 4
        },
        {
          "id": 2740,
          "word": "hang",
          "partOfSpeech": "n.",
          "chinese": "悬挂；悬浮；（被）绞死",
          "example": "He was hanged for murder",
          "wordGroup": "group_718",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2741,
          "word": "sacrifice",
          "partOfSpeech": "n./v.",
          "chinese": "牺牲；献祭/牺牲；以...为祭品",
          "example": "I would never dream of asking you to make such a sacrifice",
          "wordGroup": "group_719",
          "colorIndex": 5
        },
        {
          "id": 2742,
          "word": "casualty",
          "partOfSpeech": "n.",
          "chinese": "伤亡人员",
          "example": "In the Iran-Iraq war, both sides incurred heavy casualties",
          "wordGroup": "group_719",
          "colorIndex": 5
        },
        {
          "id": 2743,
          "word": "bury",
          "partOfSpeech": "v.",
          "chinese": "埋葬",
          "example": "He felt lonely after he buried his good friend",
          "wordGroup": "group_719",
          "colorIndex": 5
        },
        {
          "id": 2744,
          "word": "funeral",
          "partOfSpeech": "n.",
          "chinese": "葬礼",
          "example": "Funeral customs vary with different religions",
          "wordGroup": "group_719",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2745,
          "word": "grave",
          "partOfSpeech": "n./adj.",
          "chinese": "坟墓；死亡/庄重的；严肃的",
          "example": "The lady's grave is made of granite",
          "wordGroup": "group_720",
          "colorIndex": 0
        },
        {
          "id": 2746,
          "word": "tomb",
          "partOfSpeech": "n.",
          "chinese": "坟墓；塚",
          "example": "Many things left by the ancient people in tombs haven't been brought to light",
          "wordGroup": "group_720",
          "colorIndex": 0
        },
        {
          "id": 2747,
          "word": "hell",
          "partOfSpeech": "n.",
          "chinese": "地狱；苦境",
          "example": "The priest said they would go to hell for their sins",
          "wordGroup": "group_720",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2748,
          "word": "maritime",
          "partOfSpeech": "adj.",
          "chinese": "海的，海上的，海事的",
          "example": "That maritime peril happened at night",
          "wordGroup": "group_721",
          "colorIndex": 1
        },
        {
          "id": 2749,
          "word": "naval",
          "partOfSpeech": "adj.",
          "chinese": "海军的",
          "example": "He took part in a great naval battle",
          "wordGroup": "group_721",
          "colorIndex": 1
        },
        {
          "id": 2750,
          "word": "fleet",
          "partOfSpeech": "n.",
          "chinese": "舰队，船队；机群，车队",
          "example": "The general ordered the fleet to remain where they were and wait for further instructions",
          "wordGroup": "group_721",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2751,
          "word": "troop",
          "partOfSpeech": "n./v.",
          "chinese": "一群，一对；[~s]军队/结队前行",
          "example": "The troops made good their retreat from the occupied city",
          "wordGroup": "group_722",
          "colorIndex": 2
        },
        {
          "id": 2752,
          "word": "landing",
          "partOfSpeech": "n.",
          "chinese": "着陆；登陆",
          "example": "The plane circled over the airport before landing",
          "wordGroup": "group_722",
          "colorIndex": 2
        },
        {
          "id": 2753,
          "word": "hover",
          "partOfSpeech": "v.",
          "chinese": "盘旋，悬浮；徘徊；处于不确定状态",
          "example": "The helicopter is hovering over the cloud",
          "wordGroup": "group_722",
          "colorIndex": 2
        },
        {
          "id": 2754,
          "word": "proceed",
          "partOfSpeech": "v.",
          "chinese": "接下来做；继续进行；行进",
          "example": "The conference proceeded in a very friendly atmosphere",
          "wordGroup": "group_722",
          "colorIndex": 2
        },
        {
          "id": 2755,
          "word": "progress",
          "partOfSpeech": "n./v.",
          "chinese": "前进；进步；进程/前进；进步",
          "example": "The building of the largest bridge across a river in that country is in progress",
          "wordGroup": "group_722",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2756,
          "word": "military",
          "partOfSpeech": "adj.",
          "chinese": "军事的，军用的",
          "example": "According to the constitution of the country, all the young men should do a year's military service",
          "wordGroup": "group_723",
          "colorIndex": 3
        },
        {
          "id": 2757,
          "word": "nuclear",
          "partOfSpeech": "adj.",
          "chinese": "原子核的；核能的；核武器的",
          "example": "Nowadays, more and more people prefer a nuclear family to a standard family",
          "wordGroup": "group_723",
          "colorIndex": 3
        },
        {
          "id": 2758,
          "word": "poison",
          "partOfSpeech": "n./v.",
          "chinese": "毒物，毒药/毒害",
          "example": "Spiritual rubbish can poison the children's pure minds",
          "wordGroup": "group_723",
          "colorIndex": 3
        },
        {
          "id": 2759,
          "word": "devastate",
          "partOfSpeech": "v.",
          "chinese": "毁坏，摧毁",
          "example": "They intended to devastate the town at a stroke",
          "wordGroup": "group_723",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2760,
          "word": "risk",
          "partOfSpeech": "n./v.",
          "chinese": "危险，风险/冒着...的危险",
          "example": "If you don't warm up before taking exercise, you risk injuring yourself",
          "wordGroup": "group_724",
          "colorIndex": 4
        },
        {
          "id": 2761,
          "word": "adventure",
          "partOfSpeech": "n./v.",
          "chinese": "冒险，冒险尽量/去（某地）探险",
          "example": "All the children were listening to her adventures with eager attention",
          "wordGroup": "group_724",
          "colorIndex": 4
        },
        {
          "id": 2762,
          "word": "peril",
          "partOfSpeech": "n.",
          "chinese": "重大危险，险情，危险",
          "example": "Preparedness averts peril",
          "wordGroup": "group_724",
          "colorIndex": 4
        },
        {
          "id": 2763,
          "word": "catastrophe",
          "partOfSpeech": "n.",
          "chinese": "重大灾难，大祸",
          "example": "Their party turned out to be a catastrophe",
          "wordGroup": "group_724",
          "colorIndex": 4
        },
        {
          "id": 2764,
          "word": "collapse",
          "partOfSpeech": "n./v.",
          "chinese": "倒塌，崩溃",
          "example": "The man lost all his money in the collapse of the stock market",
          "wordGroup": "group_724",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2765,
          "word": "torture",
          "partOfSpeech": "n./v.",
          "chinese": "拷问，痛苦，折磨/拷问，使痛苦",
          "example": "She suffered the torture of toothache",
          "wordGroup": "group_725",
          "colorIndex": 5
        },
        {
          "id": 2766,
          "word": "humiliate",
          "partOfSpeech": "v.",
          "chinese": "羞辱；使蒙羞",
          "example": "The team was humiliated in the recent game",
          "wordGroup": "group_725",
          "colorIndex": 5
        },
        {
          "id": 2767,
          "word": "damage",
          "partOfSpeech": "n./v.",
          "chinese": "损害；伤害",
          "example": "An earthquake sometimes causes extensive damage to a town",
          "wordGroup": "group_725",
          "colorIndex": 5
        },
        {
          "id": 2768,
          "word": "harmful",
          "partOfSpeech": "adj.",
          "chinese": "有害的",
          "example": "A freezing winter is harmful to orange trees",
          "wordGroup": "group_725",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2769,
          "word": "mislead",
          "partOfSpeech": "v.",
          "chinese": "误导，欺骗，使误入歧途",
          "example": "A description about a product should not mislead the consumers",
          "wordGroup": "group_726",
          "colorIndex": 0
        },
        {
          "id": 2770,
          "word": "disturb",
          "partOfSpeech": "v.",
          "chinese": "打扰，使焦虑，弄乱",
          "example": "A soft breeze gently disturbed the surface of the pool",
          "wordGroup": "group_726",
          "colorIndex": 0
        },
        {
          "id": 2771,
          "word": "interfere",
          "partOfSpeech": "v.",
          "chinese": "干涉；妨碍",
          "example": "Don't allow pleasure to interfere with duty",
          "wordGroup": "group_726",
          "colorIndex": 0
        },
        {
          "id": 2772,
          "word": "interrupt",
          "partOfSpeech": "v.",
          "chinese": "打断；中断",
          "example": "Execuse me, I wonder if I could interrupt you",
          "wordGroup": "group_726",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2773,
          "word": "retreat",
          "partOfSpeech": "n./v.",
          "chinese": "撤退；退避",
          "example": "He immediately sounded a retreat",
          "wordGroup": "group_727",
          "colorIndex": 1
        },
        {
          "id": 2774,
          "word": "shrink",
          "partOfSpeech": "v.",
          "chinese": "退缩；缩水；（使）减少",
          "example": "The dress shrank when I washed it",
          "wordGroup": "group_727",
          "colorIndex": 1
        },
        {
          "id": 2775,
          "word": "withdraw",
          "partOfSpeech": "v.",
          "chinese": "回收；（使）撤退；提（款）",
          "example": "She withdrew all her savings from the bank",
          "wordGroup": "group_727",
          "colorIndex": 1
        },
        {
          "id": 2776,
          "word": "withstand",
          "partOfSpeech": "v.",
          "chinese": "承受；顶住；经受住",
          "example": "The bridge is built to withstand an earthquake of 8.0 magnitude 这座桥可以经受 8 级地震",
          "wordGroup": "group_727",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2777,
          "word": "compromise",
          "partOfSpeech": "v.",
          "chinese": "妥协",
          "example": "They cannot compromise with the terrorists on such terms",
          "wordGroup": "group_728",
          "colorIndex": 2
        },
        {
          "id": 2778,
          "word": "surrender",
          "partOfSpeech": "n./v.",
          "chinese": "投降；（被迫）放弃",
          "example": "Thousands of illegal immigrants have surrendered to police",
          "wordGroup": "group_728",
          "colorIndex": 2
        },
        {
          "id": 2779,
          "word": "escape",
          "partOfSpeech": "n./v.",
          "chinese": "逃跑；逃脱；逃避",
          "example": "To my suprise, he managed to escape from that big fire",
          "wordGroup": "group_728",
          "colorIndex": 2
        },
        {
          "id": 2780,
          "word": "avoid",
          "partOfSpeech": "v.",
          "chinese": "避免；躲开",
          "example": "He'll look for any excuse to avoid doing the dishes",
          "wordGroup": "group_728",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2781,
          "word": "quit",
          "partOfSpeech": "v.",
          "chinese": "放弃，停止；辞去，离开",
          "example": "She has not quit smoking, but is holding down to three cigarettes a day",
          "wordGroup": "group_729",
          "colorIndex": 3
        },
        {
          "id": 2782,
          "word": "abandon",
          "partOfSpeech": "v.",
          "chinese": "放弃，抛弃，丢弃",
          "example": "Do not abandon yourself to despair",
          "wordGroup": "group_729",
          "colorIndex": 3
        },
        {
          "id": 2783,
          "word": "forgo/forego",
          "partOfSpeech": "v.",
          "chinese": "放弃",
          "example": "We'll have to forgo our rest hour to gather in the wheat before the storm begins",
          "wordGroup": "group_729",
          "colorIndex": 3
        },
        {
          "id": 2784,
          "word": "discard",
          "partOfSpeech": "v.",
          "chinese": "丢弃，抛弃",
          "example": "Outdated theory should be discarded",
          "wordGroup": "group_729",
          "colorIndex": 3
        },
        {
          "id": 2785,
          "word": "rid",
          "partOfSpeech": "adj.",
          "chinese": "[get ~ of]摆脱，丢弃",
          "example": "If you get rid of the water, you get rid of the mosquitoes",
          "wordGroup": "group_729",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2786,
          "word": "defend",
          "partOfSpeech": "v.",
          "chinese": "防御，保护；为...辩护",
          "example": "She demonstrated the best way to defend oneself",
          "wordGroup": "group_730",
          "colorIndex": 4
        },
        {
          "id": 2787,
          "word": "safeguard",
          "partOfSpeech": "v./n.",
          "chinese": "保护，保卫/保护措施",
          "example": "To safeguard the peace is one of the most important tasks of the army",
          "wordGroup": "group_730",
          "colorIndex": 4
        },
        {
          "id": 2788,
          "word": "defeat",
          "partOfSpeech": "v./n.",
          "chinese": "战胜，击败/失败",
          "example": "They were defeated in the football match",
          "wordGroup": "group_730",
          "colorIndex": 4
        },
        {
          "id": 2789,
          "word": "resist",
          "partOfSpeech": "v.",
          "chinese": "抵制，反对；抵御，忍住",
          "example": "She could hardly resist laughing",
          "wordGroup": "group_730",
          "colorIndex": 4
        },
        {
          "id": 2790,
          "word": "capture",
          "partOfSpeech": "n./v.",
          "chinese": "战利品/捕获，夺得",
          "example": "The fraudster was captured when trying to escape from the city",
          "wordGroup": "group_730",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2791,
          "word": "victory",
          "partOfSpeech": "n.",
          "chinese": "胜利，成功",
          "example": "The school football team has had three victories this month against other schools",
          "wordGroup": "group_731",
          "colorIndex": 5
        },
        {
          "id": 2792,
          "word": "triumph",
          "partOfSpeech": "n./v.",
          "chinese": "伟大胜利，非凡的成功/获得胜利",
          "example": "It was a great triumph when our team won the race",
          "wordGroup": "group_731",
          "colorIndex": 5
        },
        {
          "id": 2793,
          "word": "conquer",
          "partOfSpeech": "v.",
          "chinese": "征服，克服，战胜",
          "example": "To conquer or to die",
          "wordGroup": "group_731",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2794,
          "word": "monument",
          "partOfSpeech": "n.",
          "chinese": "纪念碑，历史古迹，典范",
          "example": "This work is one of the great monuments of French literature",
          "wordGroup": "group_732",
          "colorIndex": 0
        },
        {
          "id": 2795,
          "word": "tablet",
          "partOfSpeech": "n.",
          "chinese": "碑，匾，药片",
          "example": "The doctor told him to take two tablets before every meal",
          "wordGroup": "group_732",
          "colorIndex": 0
        },
        {
          "id": 2796,
          "word": "statue",
          "partOfSpeech": "n.",
          "chinese": "雕像，塑像",
          "example": "The statue of liberty was presented to the United States of America in the 19th century by the people from France",
          "wordGroup": "group_732",
          "colorIndex": 0
        },
        {
          "id": 2797,
          "word": "medal",
          "partOfSpeech": "n.",
          "chinese": "勋章，奖章",
          "example": "It was an unbelievable moment when Victoria won the gold medal",
          "wordGroup": "group_732",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2798,
          "word": "honor/honour",
          "partOfSpeech": "n./v.",
          "chinese": "尊敬，敬意，冗余/尊敬，给予表扬",
          "example": "He's won an academy award and a host of other honors",
          "wordGroup": "group_733",
          "colorIndex": 1
        },
        {
          "id": 2799,
          "word": "glorious",
          "partOfSpeech": "adj.",
          "chinese": "光荣的，荣耀的",
          "example": "Our country has a glorious past",
          "wordGroup": "group_733",
          "colorIndex": 1
        },
        {
          "id": 2800,
          "word": "contribute",
          "partOfSpeech": "v.",
          "chinese": "捐献，做贡献，撰稿",
          "example": "She seldom contributes to the discussion",
          "wordGroup": "group_733",
          "colorIndex": 1
        },
        {
          "id": 2801,
          "word": "devote",
          "partOfSpeech": "v.",
          "chinese": "献身，投入",
          "example": "After she graduated, she continuted to devote herself to research",
          "wordGroup": "group_733",
          "colorIndex": 1
        },
        {
          "id": 2802,
          "word": "owe",
          "partOfSpeech": "v.",
          "chinese": "欠；应把...归功于；欠，感激",
          "example": "I owe a lot to my wife and children",
          "wordGroup": "group_733",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2803,
          "word": "patrol",
          "partOfSpeech": "n./v.",
          "chinese": "巡逻，巡查",
          "example": "Every hour, a policeman patrolled our street",
          "wordGroup": "group_734",
          "colorIndex": 2
        },
        {
          "id": 2804,
          "word": "guard",
          "partOfSpeech": "n./v.",
          "chinese": "卫兵，警卫员/看守，守卫，保卫",
          "example": "The dog guarded the house against strangers",
          "wordGroup": "group_734",
          "colorIndex": 2
        },
        {
          "id": 2805,
          "word": "camouflage",
          "partOfSpeech": "v./n.",
          "chinese": "伪装",
          "example": "Many animals have natural camouflage, which hides them from the preditors",
          "wordGroup": "group_734",
          "colorIndex": 2
        },
        {
          "id": 2806,
          "word": "obstacle",
          "partOfSpeech": "n.",
          "chinese": "障碍；障碍物",
          "example": "Her father's disapproval remains their obstacle",
          "wordGroup": "group_734",
          "colorIndex": 2
        },
        {
          "id": 2807,
          "word": "burrow",
          "partOfSpeech": "n./v.",
          "chinese": "地洞，地道/掘地洞",
          "example": "The prairie dog stores food in its burrow",
          "wordGroup": "group_734",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2808,
          "word": "spy",
          "partOfSpeech": "n./v.",
          "chinese": "间谍，特务/收集情报，从事间谍活动",
          "example": "She hired a detective to spy on her husband",
          "wordGroup": "group_735",
          "colorIndex": 3
        },
        {
          "id": 2809,
          "word": "scout",
          "partOfSpeech": "n./v.",
          "chinese": "侦查员，侦察机/侦查，搜寻",
          "example": "The scout was searching through the woods",
          "wordGroup": "group_735",
          "colorIndex": 3
        },
        {
          "id": 2810,
          "word": "general",
          "partOfSpeech": "n./adj.",
          "chinese": "将军/总的，一般性的",
          "example": "As a general rule, prices follow demands",
          "wordGroup": "group_735",
          "colorIndex": 3
        },
        {
          "id": 2811,
          "word": "soldier",
          "partOfSpeech": "n.",
          "chinese": "战士，士兵",
          "example": "The soldier received a serious wound on the chest",
          "wordGroup": "group_735",
          "colorIndex": 3
        },
        {
          "id": 2812,
          "word": "veteran",
          "partOfSpeech": "n.",
          "chinese": "老兵，老手",
          "example": "The baseball veteran loved to coach young players",
          "wordGroup": "group_735",
          "colorIndex": 3
        }
      ]
    ]
  },
  {
    "title": "社会角色",
    "groups": [
      [
        {
          "id": 2813,
          "word": "pioneer",
          "partOfSpeech": "n.",
          "chinese": "先驱，开创者",
          "example": "Napoleon was a pioneer and a symbol",
          "wordGroup": "group_735",
          "colorIndex": 3
        },
        {
          "id": 2814,
          "word": "prophet",
          "partOfSpeech": "n.",
          "chinese": "先知；预言家",
          "example": "A prophet made a prophecy that the tyrant would be killed by a young man",
          "wordGroup": "group_735",
          "colorIndex": 3
        },
        {
          "id": 2815,
          "word": "herald",
          "partOfSpeech": "n./v.",
          "chinese": "使者，传令官，先驱；预兆/预告；宣布",
          "example": "Early green birds are heralds of spring",
          "wordGroup": "group_735",
          "colorIndex": 3
        },
        {
          "id": 2816,
          "word": "heir",
          "partOfSpeech": "n.",
          "chinese": "后嗣；继承人",
          "example": "In the UK, it is customary for the next heir to the throne to be regent",
          "wordGroup": "group_735",
          "colorIndex": 3
        },
        {
          "id": 2817,
          "word": "successor",
          "partOfSpeech": "n.",
          "chinese": "接替者；继任者；后继的事物",
          "example": "He is the successor to the throne",
          "wordGroup": "group_735",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2818,
          "word": "generation",
          "partOfSpeech": "n.",
          "chinese": "一代，一代人",
          "example": "A mother and her daughters represent two generations",
          "wordGroup": "group_736",
          "colorIndex": 4
        },
        {
          "id": 2819,
          "word": "surname",
          "partOfSpeech": "n./v.",
          "chinese": "姓/给...起别名",
          "example": "To make a nickname from someone's surname can sometimes be bad",
          "wordGroup": "group_736",
          "colorIndex": 4
        },
        {
          "id": 2820,
          "word": "gender",
          "partOfSpeech": "n.",
          "chinese": "性别",
          "example": "Please fill in your name, address, age and gender",
          "wordGroup": "group_736",
          "colorIndex": 4
        },
        {
          "id": 2821,
          "word": "sex",
          "partOfSpeech": "n.",
          "chinese": "性别 ；性行为",
          "example": "What sex is your cat",
          "wordGroup": "group_736",
          "colorIndex": 4
        },
        {
          "id": 2822,
          "word": "female",
          "partOfSpeech": "n./adj.",
          "chinese": "女子 ；雌性生物/女的；雌性的",
          "example": "We've got three cats, two females and a male",
          "wordGroup": "group_736",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2823,
          "word": "couple",
          "partOfSpeech": "n.",
          "chinese": "夫妻 ，情侣；两个；几个",
          "example": "I waited a couple of hours",
          "wordGroup": "group_737",
          "colorIndex": 5
        },
        {
          "id": 2824,
          "word": "spouse",
          "partOfSpeech": "n.",
          "chinese": "配偶（指夫或妻）",
          "example": "They get free tickets for their spouses",
          "wordGroup": "group_737",
          "colorIndex": 5
        },
        {
          "id": 2825,
          "word": "husband",
          "partOfSpeech": "n.",
          "chinese": "丈夫",
          "example": "He is a model husband and father",
          "wordGroup": "group_737",
          "colorIndex": 5
        },
        {
          "id": 2826,
          "word": "gay",
          "partOfSpeech": "n./adj.",
          "chinese": "同性恋者（尤指男性）/同性恋的；快乐的；艳丽的",
          "example": "The children were all gay at the thought of the coming holidays",
          "wordGroup": "group_737",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2827,
          "word": "grandfather",
          "partOfSpeech": "n.",
          "chinese": "（外）祖父",
          "example": "The kid was named after his grandfather",
          "wordGroup": "group_738",
          "colorIndex": 0
        },
        {
          "id": 2828,
          "word": "father-in-law",
          "partOfSpeech": "n.",
          "chinese": "岳父，公公",
          "example": "He has paid a formal visit to his father-in-law",
          "wordGroup": "group_738",
          "colorIndex": 0
        },
        {
          "id": 2829,
          "word": "sibling",
          "partOfSpeech": "n.",
          "chinese": "兄，弟，姐，妹",
          "example": "Some young smokers are influenced by their sibling's smoking habit",
          "wordGroup": "group_738",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2830,
          "word": "cousin",
          "partOfSpeech": "n.",
          "chinese": "堂（或表）兄（或弟、姐、妹）",
          "example": "For our first anniversary, he's taking me to his cousin's cabi",
          "wordGroup": "group_739",
          "colorIndex": 1
        },
        {
          "id": 2831,
          "word": "nephew",
          "partOfSpeech": "n.",
          "chinese": "侄子；外甥",
          "example": "I'm going to have a nephew soon",
          "wordGroup": "group_739",
          "colorIndex": 1
        },
        {
          "id": 2832,
          "word": "niece",
          "partOfSpeech": "n.",
          "chinese": "侄女；外甥女",
          "example": "My niece drew a picture of my family when she was four",
          "wordGroup": "group_739",
          "colorIndex": 1
        },
        {
          "id": 2833,
          "word": "twin",
          "partOfSpeech": "adj./n.",
          "chinese": "成双的/双胞胎之一",
          "example": "You should know that this plan has a twin purpose",
          "wordGroup": "group_739",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2834,
          "word": "embryo",
          "partOfSpeech": "n./adj.",
          "chinese": "胚胎/胚胎的，初期的",
          "example": "Our plans are still in embryo",
          "wordGroup": "group_740",
          "colorIndex": 2
        },
        {
          "id": 2835,
          "word": "infant",
          "partOfSpeech": "n./adj.",
          "chinese": "供婴儿用的；婴儿的",
          "example": "The infant mortality rate is highly sensitive barometer of social-economic conditions",
          "wordGroup": "group_740",
          "colorIndex": 2
        },
        {
          "id": 2836,
          "word": "orphan",
          "partOfSpeech": "n./v.",
          "chinese": "孤儿/使成为孤儿",
          "example": "The three children were orphaned when their parents died in the plane crash",
          "wordGroup": "group_740",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2837,
          "word": "juvenile",
          "partOfSpeech": "adj./n.",
          "chinese": "少年的/少年",
          "example": "The problem of juvenile delinquency calls for the attention of the whole society",
          "wordGroup": "group_741",
          "colorIndex": 3
        },
        {
          "id": 2838,
          "word": "youngster",
          "partOfSpeech": "n.",
          "chinese": "年轻人；少年",
          "example": "These youngsters yarn for an adventure in the wild",
          "wordGroup": "group_741",
          "colorIndex": 3
        },
        {
          "id": 2839,
          "word": "youth",
          "partOfSpeech": "n.",
          "chinese": "青年时期；青春；青年",
          "example": "We shouldn't blame youth crime simply on unemployment",
          "wordGroup": "group_741",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2840,
          "word": "gang",
          "partOfSpeech": "n.",
          "chinese": "一帮，一伙（常聚在一起闹事、打斗的年轻人）",
          "example": "Have you seen any of the gang lately?",
          "wordGroup": "group_742",
          "colorIndex": 4
        },
        {
          "id": 2841,
          "word": "teenager",
          "partOfSpeech": "n.",
          "chinese": "（13 至 19 岁之间的）青少年",
          "example": "The survey shows that four out of five teenagers in this area have experimented with illegal drugs",
          "wordGroup": "group_742",
          "colorIndex": 4
        },
        {
          "id": 2842,
          "word": "adolescence",
          "partOfSpeech": "n.",
          "chinese": "青春期",
          "example": "His adolescence was not a happy time for him",
          "wordGroup": "group_742",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2843,
          "word": "kin",
          "partOfSpeech": "n./adj.",
          "chinese": "（统称）家属，亲戚/有血缘关系的；类似的",
          "example": "All his kin were at the wedding",
          "wordGroup": "group_743",
          "colorIndex": 5
        },
        {
          "id": 2844,
          "word": "folk",
          "partOfSpeech": "n.",
          "chinese": "人们；[~s]家属，亲属",
          "example": "You're on the list of folds I'm indebted to",
          "wordGroup": "group_743",
          "colorIndex": 5
        },
        {
          "id": 2845,
          "word": "relative",
          "partOfSpeech": "n./adj.",
          "chinese": "相对的；有关的",
          "example": "We do not abandon our relatives when times get tough",
          "wordGroup": "group_743",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2846,
          "word": "intimate",
          "partOfSpeech": "adj./n.",
          "chinese": "亲密的；个人隐私的/密友，至交",
          "example": "Do you believe these two intimates friends used to be mutual sworn enemies?",
          "wordGroup": "group_744",
          "colorIndex": 0
        },
        {
          "id": 2847,
          "word": "dear",
          "partOfSpeech": "adj./int.",
          "chinese": "亲爱的/啊呀",
          "example": "Dear John, thanks for asking me to help you with the class trip",
          "wordGroup": "group_744",
          "colorIndex": 0
        },
        {
          "id": 2848,
          "word": "darling",
          "partOfSpeech": "n.",
          "chinese": "亲爱的；宠儿",
          "example": "Oh darling, I couldn't be more pleased for you",
          "wordGroup": "group_744",
          "colorIndex": 0
        },
        {
          "id": 2849,
          "word": "lover",
          "partOfSpeech": "n.",
          "chinese": "爱好者；（婚外的）情人",
          "example": "He and his wife are both great lovers of drama",
          "wordGroup": "group_744",
          "colorIndex": 0
        },
        {
          "id": 2850,
          "word": "beloved",
          "partOfSpeech": "n./adj.",
          "chinese": "爱人/深受喜爱的",
          "example": "This safari park is beloved by tourists from all parts of the globe",
          "wordGroup": "group_744",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2851,
          "word": "madam",
          "partOfSpeech": "n.",
          "chinese": "夫人；女士；[英]自以为是的小姑娘",
          "example": "That poor madam has lost all contact with reality",
          "wordGroup": "group_745",
          "colorIndex": 1
        },
        {
          "id": 2852,
          "word": "hostess",
          "partOfSpeech": "n.",
          "chinese": "女主人",
          "example": "It's polite to bring flowers, chocolates or a bottle of wine to the hostess",
          "wordGroup": "group_745",
          "colorIndex": 1
        },
        {
          "id": 2853,
          "word": "landlady",
          "partOfSpeech": "n.",
          "chinese": "女房东；女地主",
          "example": "The landlady has prepared some coffee for us",
          "wordGroup": "group_745",
          "colorIndex": 1
        },
        {
          "id": 2854,
          "word": "mistress",
          "partOfSpeech": "n.",
          "chinese": "女主人；情妇",
          "example": "Our wife is duty; our mistress is honor",
          "wordGroup": "group_745",
          "colorIndex": 1
        },
        {
          "id": 2855,
          "word": "housewife",
          "partOfSpeech": "n.",
          "chinese": "家庭主妇",
          "example": "The cleverest housewife can't cook a meal without rice",
          "wordGroup": "group_745",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2856,
          "word": "widow",
          "partOfSpeech": "n.",
          "chinese": "寡妇，遗孀",
          "example": "He left a widow and children totally unprovided for",
          "wordGroup": "group_746",
          "colorIndex": 2
        },
        {
          "id": 2857,
          "word": "maid",
          "partOfSpeech": "n.",
          "chinese": "女佣，女仆，少女",
          "example": "Those people looked at me like I was just a maid",
          "wordGroup": "group_746",
          "colorIndex": 2
        },
        {
          "id": 2858,
          "word": "maiden",
          "partOfSpeech": "n.",
          "chinese": "少女，姑娘",
          "example": "She was a tender, watchful maiden",
          "wordGroup": "group_746",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2859,
          "word": "household",
          "partOfSpeech": "n.",
          "chinese": "家庭，一户，家务",
          "example": "The appliance of electricity to household makes the housework much easier",
          "wordGroup": "group_747",
          "colorIndex": 3
        },
        {
          "id": 2860,
          "word": "chore",
          "partOfSpeech": "n.",
          "chinese": "家庭杂物；乏味无聊的工作",
          "example": "It's such a chore to do the shopping everyday",
          "wordGroup": "group_747",
          "colorIndex": 3
        },
        {
          "id": 2861,
          "word": "host",
          "partOfSpeech": "n.",
          "chinese": "主人，东道主",
          "example": "Do not bring alcoholic beverages in case your host or hostess doesn't drink alcohol",
          "wordGroup": "group_747",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2862,
          "word": "landlord",
          "partOfSpeech": "n.",
          "chinese": "地主；房东；（酒吧）店主",
          "example": "He is the landlord of this house",
          "wordGroup": "group_748",
          "colorIndex": 4
        },
        {
          "id": 2863,
          "word": "tenant",
          "partOfSpeech": "n.",
          "chinese": "客房；租户",
          "example": "He threatened to take the tenant to court or to have the tenant evicted",
          "wordGroup": "group_748",
          "colorIndex": 4
        },
        {
          "id": 2864,
          "word": "guest",
          "partOfSpeech": "n.",
          "chinese": "客人，宾客，旅客",
          "example": "The guest who arrives half an hour earlier is the greatest nuisance",
          "wordGroup": "group_748",
          "colorIndex": 4
        },
        {
          "id": 2865,
          "word": "customer",
          "partOfSpeech": "n.",
          "chinese": "顾客，主顾，客户",
          "example": "If that doesn't work, ask them if they really think customer is King",
          "wordGroup": "group_748",
          "colorIndex": 4
        },
        {
          "id": 2866,
          "word": "client",
          "partOfSpeech": "n.",
          "chinese": "顾客；客户；委托人",
          "example": "He proves to be a successful lawyer with lots of clients",
          "wordGroup": "group_748",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2867,
          "word": "encounter",
          "partOfSpeech": "v./n.",
          "chinese": "遭遇；偶遇；邂逅",
          "example": "The more dangerous we encounter, the harder should we push forward",
          "wordGroup": "group_749",
          "colorIndex": 5
        },
        {
          "id": 2868,
          "word": "chase",
          "partOfSpeech": "v./n.",
          "chinese": "追逐；追求",
          "example": "Please chased the speeding car",
          "wordGroup": "group_749",
          "colorIndex": 5
        },
        {
          "id": 2869,
          "word": "miss",
          "partOfSpeech": "v.",
          "chinese": "想念；未注意到",
          "example": "The woman missed her baby dreadfully",
          "wordGroup": "group_749",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2870,
          "word": "appointment",
          "partOfSpeech": "n.",
          "chinese": "约会；指派",
          "example": "I made an appointment to see the doctor",
          "wordGroup": "group_750",
          "colorIndex": 0
        },
        {
          "id": 2871,
          "word": "accompany",
          "partOfSpeech": "v.",
          "chinese": "陪伴；伴随",
          "example": "She accompanied me to the doctors",
          "wordGroup": "group_750",
          "colorIndex": 0
        },
        {
          "id": 2872,
          "word": "dependent",
          "partOfSpeech": "adj.",
          "chinese": "依靠的；依赖的",
          "example": "She was unemployed for several years and almost totally dependent on welfare to survive",
          "wordGroup": "group_750",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2873,
          "word": "propose",
          "partOfSpeech": "v.",
          "chinese": "提议；向...求婚",
          "example": "They proposed that a new school should be set up in the suburbs",
          "wordGroup": "group_751",
          "colorIndex": 1
        },
        {
          "id": 2874,
          "word": "engagement",
          "partOfSpeech": "n.",
          "chinese": "婚约；约定",
          "example": "My younger brother has just told me about his engagement to Anne",
          "wordGroup": "group_751",
          "colorIndex": 1
        },
        {
          "id": 2875,
          "word": "marry",
          "partOfSpeech": "v.",
          "chinese": "娶，嫁，结婚",
          "example": "It is easier to marry than to divorce",
          "wordGroup": "group_751",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2876,
          "word": "wedding",
          "partOfSpeech": "n.",
          "chinese": "婚礼",
          "example": "They went out to a fancy restaurant to celebrate their wedding anniversary",
          "wordGroup": "group_752",
          "colorIndex": 2
        },
        {
          "id": 2877,
          "word": "honeymoon",
          "partOfSpeech": "n.",
          "chinese": "蜜月",
          "example": "While on honeymoon in Bali, she learned to surf",
          "wordGroup": "group_752",
          "colorIndex": 2
        },
        {
          "id": 2878,
          "word": "kiss",
          "partOfSpeech": "v./n.",
          "chinese": "吻，接吻/吻",
          "example": "The singer blew a kiss to the audience",
          "wordGroup": "group_752",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2879,
          "word": "divorce",
          "partOfSpeech": "n./v.",
          "chinese": "离婚；脱离/（与...）离婚；使脱离",
          "example": "Never be divorced from real life",
          "wordGroup": "group_753",
          "colorIndex": 3
        },
        {
          "id": 2880,
          "word": "separate",
          "partOfSpeech": "adj./v.",
          "chinese": "分开的，单独的/（使）分开；分局",
          "example": "The children sleep in separate beds",
          "wordGroup": "group_753",
          "colorIndex": 3
        },
        {
          "id": 2881,
          "word": "single",
          "partOfSpeech": "adj.",
          "chinese": "单一的；单身的",
          "example": "Not a single detail can escape his notice",
          "wordGroup": "group_753",
          "colorIndex": 3
        },
        {
          "id": 2882,
          "word": "sole",
          "partOfSpeech": "adj.",
          "chinese": "仅有的；唯一的",
          "example": "My sole aim was to discover what had happened during that period",
          "wordGroup": "group_753",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2883,
          "word": "respective",
          "partOfSpeech": "adj.",
          "chinese": "各自的；分别的",
          "example": "We went back to school and visited our respective teachers",
          "wordGroup": "group_754",
          "colorIndex": 4
        },
        {
          "id": 2884,
          "word": "each",
          "partOfSpeech": "pron./det.",
          "chinese": "各个，各自",
          "example": "They each have their own dream",
          "wordGroup": "group_754",
          "colorIndex": 4
        },
        {
          "id": 2885,
          "word": "individual",
          "partOfSpeech": "n./adj.",
          "chinese": "个人；个体/个别的，单独的",
          "example": "The rights of the individual are considered to be very important",
          "wordGroup": "group_754",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2886,
          "word": "commuter",
          "partOfSpeech": "n.",
          "chinese": "上下班，往返者",
          "example": "The train was packed with sweaty complaining commuters",
          "wordGroup": "group_755",
          "colorIndex": 5
        },
        {
          "id": 2887,
          "word": "neighborhood/neighbourhood",
          "partOfSpeech": "n.",
          "chinese": "街坊；居住区；周边地区",
          "example": "She was reluctant to leave the neighborhood of Paris",
          "wordGroup": "group_755",
          "colorIndex": 5
        },
        {
          "id": 2888,
          "word": "member",
          "partOfSpeech": "n.",
          "chinese": "成员；会员",
          "example": "Yesterday, there was a meeting between OPEC member Saudi Arabia and non-member Russia",
          "wordGroup": "group_755",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2889,
          "word": "boss",
          "partOfSpeech": "n./v.",
          "chinese": "老板，上司/对...指手画脚",
          "example": "The boss always makes them work overtime without pay",
          "wordGroup": "group_756",
          "colorIndex": 0
        },
        {
          "id": 2890,
          "word": "manager",
          "partOfSpeech": "n.",
          "chinese": "经理，管理人",
          "example": "She has been promoted to a middle manager",
          "wordGroup": "group_756",
          "colorIndex": 0
        },
        {
          "id": 2891,
          "word": "supervisor",
          "partOfSpeech": "n.",
          "chinese": "管理者，监督者",
          "example": "This special supervisor inspected this examination",
          "wordGroup": "group_756",
          "colorIndex": 0
        },
        {
          "id": 2892,
          "word": "subordinate",
          "partOfSpeech": "n./adj.",
          "chinese": "部署，下级/次要的；下级的",
          "example": "The minority is subordinate to the majority",
          "wordGroup": "group_756",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2893,
          "word": "partner",
          "partOfSpeech": "n.",
          "chinese": "伙伴，盟友；合伙人；搭档",
          "example": "He was considered as a partner in the crime",
          "wordGroup": "group_757",
          "colorIndex": 1
        },
        {
          "id": 2894,
          "word": "mate",
          "partOfSpeech": "n.",
          "chinese": "伙伴；[构成复合词]同伴",
          "example": "The people we work with are called workmates and our friends at school are called classmates",
          "wordGroup": "group_757",
          "colorIndex": 1
        },
        {
          "id": 2895,
          "word": "colleague",
          "partOfSpeech": "n.",
          "chinese": "同事；同僚",
          "example": "He is getting along well with his colleagues",
          "wordGroup": "group_757",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2896,
          "word": "comrade",
          "partOfSpeech": "n.",
          "chinese": "同志；（尤指共患难的）同伴",
          "example": "The medic saved a comrade's life and helped evacuate many other wounded soldiers",
          "wordGroup": "group_758",
          "colorIndex": 2
        },
        {
          "id": 2897,
          "word": "acquaintance",
          "partOfSpeech": "n.",
          "chinese": "相识之人，泛泛之交；认识；了解",
          "example": "I have some acquaintance with French but don't speak it well",
          "wordGroup": "group_758",
          "colorIndex": 2
        },
        {
          "id": 2898,
          "word": "friendship",
          "partOfSpeech": "n.",
          "chinese": "友谊；有情；友好",
          "example": "No one can wreck the friendship between them",
          "wordGroup": "group_758",
          "colorIndex": 2
        },
        {
          "id": 2899,
          "word": "affection",
          "partOfSpeech": "n.",
          "chinese": "喜爱，喜欢；[~s]爱情",
          "example": "I can not believe that you are unaware of my growing affection for you",
          "wordGroup": "group_758",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2900,
          "word": "stranger",
          "partOfSpeech": "n.",
          "chinese": "陌生人；新来者",
          "example": "The region is no stranger to armed conflict",
          "wordGroup": "group_759",
          "colorIndex": 3
        },
        {
          "id": 2901,
          "word": "apprentice",
          "partOfSpeech": "n./v.",
          "chinese": "学徒，徒弟/使当...的学徒",
          "example": "His father apprenticed him to a barber",
          "wordGroup": "group_759",
          "colorIndex": 3
        },
        {
          "id": 2902,
          "word": "deputy",
          "partOfSpeech": "n.",
          "chinese": "代理人，副手",
          "example": "John will be my deputy while I'm away",
          "wordGroup": "group_759",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2903,
          "word": "hero",
          "partOfSpeech": "n.",
          "chinese": "男主角；男主；英雄；勇士",
          "example": "The hero of the novel is Bilbo",
          "wordGroup": "group_760",
          "colorIndex": 4
        },
        {
          "id": 2904,
          "word": "heroine",
          "partOfSpeech": "n.",
          "chinese": "女主角；女主；女英雄",
          "example": "The fairy godmother waves her magic wand and grants the heroine's wishes",
          "wordGroup": "group_760",
          "colorIndex": 4
        },
        {
          "id": 2905,
          "word": "actress",
          "partOfSpeech": "n.",
          "chinese": "女演员",
          "example": "This actress was perfect for the part",
          "wordGroup": "group_760",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2906,
          "word": "chancellor",
          "partOfSpeech": "n.",
          "chinese": "（德国或奥地利的）总理；（英国）财政大臣",
          "example": "In Britain, the chancelllor of the exchequer deals with the taxes and government spending",
          "wordGroup": "group_761",
          "colorIndex": 5
        },
        {
          "id": 2907,
          "word": "commander",
          "partOfSpeech": "n.",
          "chinese": "司令官；指挥官",
          "example": "You must follow the commander's order",
          "wordGroup": "group_761",
          "colorIndex": 5
        },
        {
          "id": 2908,
          "word": "director",
          "partOfSpeech": "n.",
          "chinese": "主管；理事；导演",
          "example": "The director cast him as a deaf and dumb man",
          "wordGroup": "group_761",
          "colorIndex": 5
        },
        {
          "id": 2909,
          "word": "proponent",
          "partOfSpeech": "n.",
          "chinese": "拥护者；支持者",
          "example": "He is one of the leading proponents of the project",
          "wordGroup": "group_761",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2910,
          "word": "committee",
          "partOfSpeech": "n.",
          "chinese": "委员会",
          "example": "They have set up a committee to inspect the park facilities",
          "wordGroup": "group_762",
          "colorIndex": 0
        },
        {
          "id": 2911,
          "word": "council",
          "partOfSpeech": "n.",
          "chinese": "委员会；市政委员会",
          "example": "The city council will decide the fate of the building",
          "wordGroup": "group_762",
          "colorIndex": 0
        },
        {
          "id": 2912,
          "word": "delegate",
          "partOfSpeech": "n./v.",
          "chinese": "代表/授权，委派",
          "example": "I was delegated to approach the local press",
          "wordGroup": "group_762",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2913,
          "word": "specialist",
          "partOfSpeech": "n.",
          "chinese": "专家；专科医生",
          "example": "She is a specialist in E-business",
          "wordGroup": "group_763",
          "colorIndex": 1
        },
        {
          "id": 2914,
          "word": "consultant",
          "partOfSpeech": "n.",
          "chinese": "顾问；[英]会诊医师",
          "example": "The consultant committee met at the call of the chairman",
          "wordGroup": "group_763",
          "colorIndex": 1
        },
        {
          "id": 2915,
          "word": "veterinary",
          "partOfSpeech": "adj.",
          "chinese": "兽医的",
          "example": "Sectioning the nerves in the hoof of a limping horse is a common practice in a veterinary procedure",
          "wordGroup": "group_763",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2916,
          "word": "counsellor/counselor",
          "partOfSpeech": "n.",
          "chinese": "顾问，辅导顾问；（美国的）律师",
          "example": "I'd like to talk to my counselor before I answer any of your questions",
          "wordGroup": "group_764",
          "colorIndex": 2
        },
        {
          "id": 2917,
          "word": "solicitor",
          "partOfSpeech": "n.",
          "chinese": "（英国的）诉状律师，事务律师；（美国的）法务官",
          "example": "We asked a solicitor for advice",
          "wordGroup": "group_764",
          "colorIndex": 2
        },
        {
          "id": 2918,
          "word": "attorney",
          "partOfSpeech": "n.",
          "chinese": "（美国的）律师",
          "example": "The defense attorney's objection was overruled by the judge",
          "wordGroup": "group_764",
          "colorIndex": 2
        },
        {
          "id": 2919,
          "word": "umpire",
          "partOfSpeech": "n.",
          "chinese": "裁判员",
          "example": "Mike was thrown out of the game for hitting an umpire",
          "wordGroup": "group_764",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2920,
          "word": "cashier",
          "partOfSpeech": "n.",
          "chinese": "出纳员，收银员",
          "example": "A cashier takes and gives money in a bank or shop",
          "wordGroup": "group_765",
          "colorIndex": 3
        },
        {
          "id": 2921,
          "word": "fireman",
          "partOfSpeech": "n.",
          "chinese": "消防队员",
          "example": "I saw a fireman racing into the burning house",
          "wordGroup": "group_765",
          "colorIndex": 3
        },
        {
          "id": 2922,
          "word": "nurse",
          "partOfSpeech": "n.",
          "chinese": "护士；保姆/狐狸",
          "example": "She is waiting for the nurse to give her a injection",
          "wordGroup": "group_765",
          "colorIndex": 3
        },
        {
          "id": 2923,
          "word": "gardener",
          "partOfSpeech": "n.",
          "chinese": "园丁，花匠",
          "example": "The old gardener had rough hands",
          "wordGroup": "group_765",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2924,
          "word": "barber",
          "partOfSpeech": "n.",
          "chinese": "理发师",
          "example": "He asked the barber to crop his hair short",
          "wordGroup": "group_766",
          "colorIndex": 4
        },
        {
          "id": 2925,
          "word": "haircut",
          "partOfSpeech": "n.",
          "chinese": "理发",
          "example": "He was unshaven and badly needed a haircut",
          "wordGroup": "group_766",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2926,
          "word": "fisherman",
          "partOfSpeech": "n.",
          "chinese": "渔民，渔夫，垂钓者",
          "example": "What is it like to be a tuna fisherman",
          "wordGroup": "group_767",
          "colorIndex": 5
        },
        {
          "id": 2927,
          "word": "butcher",
          "partOfSpeech": "n.",
          "chinese": "屠夫；杀人狂",
          "example": "Tom is a friendly butcher in our neighborhood",
          "wordGroup": "group_767",
          "colorIndex": 5
        },
        {
          "id": 2928,
          "word": "groom",
          "partOfSpeech": "n./v.",
          "chinese": "马夫；新郎/（给动物）刷洗；理毛；梳毛",
          "example": "The head groom is responsible for seeing that his stable mates have safe journeys",
          "wordGroup": "group_767",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2929,
          "word": "hostage",
          "partOfSpeech": "n.",
          "chinese": "人质",
          "example": "A British hostage was held hostage for over two years",
          "wordGroup": "group_768",
          "colorIndex": 0
        },
        {
          "id": 2930,
          "word": "toil",
          "partOfSpeech": "n./v.",
          "chinese": "苦工，苦活，网，圈套/辛勤劳作，苦干",
          "example": "They spent months of toil on the water conservation project",
          "wordGroup": "group_768",
          "colorIndex": 0
        },
        {
          "id": 2931,
          "word": "beggar",
          "partOfSpeech": "n.",
          "chinese": "乞丐",
          "example": "He tossed the beggar a handful of coins",
          "wordGroup": "group_768",
          "colorIndex": 0
        },
        {
          "id": 2932,
          "word": "slave",
          "partOfSpeech": "n.",
          "chinese": "奴隶",
          "example": "Slaves were mercilessly ground down by slave owners",
          "wordGroup": "group_768",
          "colorIndex": 0
        },
        {
          "id": 2933,
          "word": "coward",
          "partOfSpeech": "n.",
          "chinese": "懦夫，胆小鬼",
          "example": "He is a liar and a coward to boot",
          "wordGroup": "group_768",
          "colorIndex": 0
        }
      ]
    ]
  },
  {
    "title": "行为动作",
    "groups": [
      [
        {
          "id": 2934,
          "word": "act",
          "partOfSpeech": "v./n.",
          "chinese": "行动/行为",
          "example": "Dreaming is one thing, but acting is another",
          "wordGroup": "group_768",
          "colorIndex": 0
        },
        {
          "id": 2935,
          "word": "behave",
          "partOfSpeech": "v.",
          "chinese": "表现；运转",
          "example": "The children must behave in a way which would be socially acceptable",
          "wordGroup": "group_768",
          "colorIndex": 0
        },
        {
          "id": 2936,
          "word": "deed",
          "partOfSpeech": "n.",
          "chinese": "行为；功绩；契约",
          "example": "The primacy of the deed is over word and thought",
          "wordGroup": "group_768",
          "colorIndex": 0
        },
        {
          "id": 2937,
          "word": "accustom",
          "partOfSpeech": "v.",
          "chinese": "使习惯于",
          "example": "They have to accustom themselves to the hot weather",
          "wordGroup": "group_768",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2938,
          "word": "react",
          "partOfSpeech": "v.",
          "chinese": "作出反应，反应",
          "example": "An acid can react with an alkali to form a salt",
          "wordGroup": "group_769",
          "colorIndex": 1
        },
        {
          "id": 2939,
          "word": "respond",
          "partOfSpeech": "v.",
          "chinese": "回答；响应，作出反应",
          "example": "I offered him a drink, but he didn't respond",
          "wordGroup": "group_769",
          "colorIndex": 1
        },
        {
          "id": 2940,
          "word": "reflect",
          "partOfSpeech": "v.",
          "chinese": "反应；反射",
          "example": "Her look reflected the thought passing though her mind",
          "wordGroup": "group_769",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2941,
          "word": "bear",
          "partOfSpeech": "v.",
          "chinese": "生（孩子）；容忍；承担（责任）",
          "example": "They must bear most of the blame",
          "wordGroup": "group_770",
          "colorIndex": 2
        },
        {
          "id": 2942,
          "word": "adopt",
          "partOfSpeech": "v.",
          "chinese": "收养；采取；采纳",
          "example": "They adopted our effective methods",
          "wordGroup": "group_770",
          "colorIndex": 2
        },
        {
          "id": 2943,
          "word": "nourish",
          "partOfSpeech": "v.",
          "chinese": "滋养；给...提供营养",
          "example": "Milk could nourish a baby",
          "wordGroup": "group_770",
          "colorIndex": 2
        },
        {
          "id": 2944,
          "word": "mow",
          "partOfSpeech": "v./n.",
          "chinese": "割，修剪/干草堆",
          "example": "I want to have my garden mowed",
          "wordGroup": "group_770",
          "colorIndex": 2
        },
        {
          "id": 2945,
          "word": "support",
          "partOfSpeech": "v./n.",
          "chinese": "支撑；支持；供养/支持；帮助",
          "example": "We should encourage and support them to participate in collective activities with friends, family, colleagues and support groups",
          "wordGroup": "group_770",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2946,
          "word": "exhale",
          "partOfSpeech": "v.",
          "chinese": "呼气；呼出",
          "example": "Take a deep breath then exhale slowly",
          "wordGroup": "group_771",
          "colorIndex": 3
        },
        {
          "id": 2947,
          "word": "intake",
          "partOfSpeech": "n.",
          "chinese": "吸入；摄取量；新招收者",
          "example": "He heard a sharp intake of breath",
          "wordGroup": "group_771",
          "colorIndex": 3
        },
        {
          "id": 2948,
          "word": "revive",
          "partOfSpeech": "v.",
          "chinese": "（使）苏醒；（使）复兴；（使）复活",
          "example": "The fresh air soon revived him",
          "wordGroup": "group_771",
          "colorIndex": 3
        },
        {
          "id": 2949,
          "word": "survive",
          "partOfSpeech": "v.",
          "chinese": "幸存；生存",
          "example": "The man was very ill, but he survived",
          "wordGroup": "group_771",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2950,
          "word": "glare",
          "partOfSpeech": "v./n.",
          "chinese": "怒目而视；发出强光/刺眼的光；怒视",
          "example": "The glare of the oncoming headlights temporarily blinded me",
          "wordGroup": "group_772",
          "colorIndex": 4
        },
        {
          "id": 2951,
          "word": "glimpse",
          "partOfSpeech": "v./n.",
          "chinese": "瞥见/一瞥",
          "example": "I caught a glimpse of our new neighbor",
          "wordGroup": "group_772",
          "colorIndex": 4
        },
        {
          "id": 2952,
          "word": "glance",
          "partOfSpeech": "v./n.",
          "chinese": "瞥，迅速看一眼/一瞥",
          "example": "The man glanced at the burglar climbing out of the window",
          "wordGroup": "group_772",
          "colorIndex": 4
        },
        {
          "id": 2953,
          "word": "peep",
          "partOfSpeech": "v./n.",
          "chinese": "窥视，偷看/偷偷一瞥",
          "example": "I peeped through the window to see if she was there",
          "wordGroup": "group_772",
          "colorIndex": 4
        },
        {
          "id": 2954,
          "word": "gaze",
          "partOfSpeech": "v.",
          "chinese": "凝视，注视",
          "example": "The child gazed at the toys in the shop window",
          "wordGroup": "group_772",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2955,
          "word": "peer",
          "partOfSpeech": "v./n.",
          "chinese": "凝视；盯着看/同等地位的人，同辈",
          "example": "The new postman peered through the mist, trying to find the right house",
          "wordGroup": "group_773",
          "colorIndex": 5
        },
        {
          "id": 2956,
          "word": "stare",
          "partOfSpeech": "v.",
          "chinese": "凝视，盯着看",
          "example": "He stared at the word, trying to remember what it meant",
          "wordGroup": "group_773",
          "colorIndex": 5
        },
        {
          "id": 2957,
          "word": "contemplate",
          "partOfSpeech": "v.",
          "chinese": "凝视；沉思；考虑",
          "example": "The young surgeon contemplated the difficult operation of kidney transplant",
          "wordGroup": "group_773",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2958,
          "word": "vow",
          "partOfSpeech": "n./v.",
          "chinese": "誓约/发誓",
          "example": "The couple made their wedding vows at Saint Paul's church",
          "wordGroup": "group_774",
          "colorIndex": 0
        },
        {
          "id": 2959,
          "word": "oath",
          "partOfSpeech": "n.",
          "chinese": "誓言；宣誓",
          "example": "He swore an oath to support and protect the king",
          "wordGroup": "group_774",
          "colorIndex": 0
        },
        {
          "id": 2960,
          "word": "pledge",
          "partOfSpeech": "v./n.",
          "chinese": "保证/保证；誓言",
          "example": "The conflicts continued in spite of a no strike pledge by the unions",
          "wordGroup": "group_774",
          "colorIndex": 0
        },
        {
          "id": 2961,
          "word": "whistle",
          "partOfSpeech": "n./v.",
          "chinese": "口哨；哨子；汽笛声/吹口哨；吹哨子",
          "example": "The referee blew the whistle at the end of the game",
          "wordGroup": "group_774",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2962,
          "word": "reply",
          "partOfSpeech": "v./n.",
          "chinese": "回答，答复",
          "example": "He tried to reply and then stopped",
          "wordGroup": "group_775",
          "colorIndex": 1
        },
        {
          "id": 2963,
          "word": "notify",
          "partOfSpeech": "v.",
          "chinese": "通知，告知",
          "example": "I notified him that the meeting had been postponed",
          "wordGroup": "group_775",
          "colorIndex": 1
        },
        {
          "id": 2964,
          "word": "assert",
          "partOfSpeech": "v.",
          "chinese": "断言，坚称；坚持（自己的）主张",
          "example": "Justice will assert itself",
          "wordGroup": "group_775",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2965,
          "word": "explain",
          "partOfSpeech": "v.",
          "chinese": "说明；解释",
          "example": "He explained his plan in detail",
          "wordGroup": "group_776",
          "colorIndex": 2
        },
        {
          "id": 2966,
          "word": "quarrel",
          "partOfSpeech": "v./n.",
          "chinese": "吵架，争论",
          "example": "We had a quarrel about the price",
          "wordGroup": "group_776",
          "colorIndex": 2
        },
        {
          "id": 2967,
          "word": "dispute",
          "partOfSpeech": "v./n.",
          "chinese": "争论，辩论",
          "example": "A long dispute means that both parties are wrong",
          "wordGroup": "group_776",
          "colorIndex": 2
        },
        {
          "id": 2968,
          "word": "argument",
          "partOfSpeech": "n.",
          "chinese": "辩论，争论；论点，论据",
          "example": "We accepted the agreement without argument",
          "wordGroup": "group_776",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2969,
          "word": "mention",
          "partOfSpeech": "v./n.",
          "chinese": "提及；说起",
          "example": "As for that film you mentioned, not my scene",
          "wordGroup": "group_777",
          "colorIndex": 3
        },
        {
          "id": 2970,
          "word": "hurry",
          "partOfSpeech": "v./n.",
          "chinese": "赶紧；催促/匆忙",
          "example": "I'm in no hurry to get back to school",
          "wordGroup": "group_777",
          "colorIndex": 3
        },
        {
          "id": 2971,
          "word": "hasten",
          "partOfSpeech": "v.",
          "chinese": "赶紧；促进",
          "example": "It was now obvious that she was hastening to restore the car to its owner",
          "wordGroup": "group_777",
          "colorIndex": 3
        },
        {
          "id": 2972,
          "word": "urge",
          "partOfSpeech": "v.",
          "chinese": "催促，敦促/冲动",
          "example": "They urged Washington to reconsider its decision",
          "wordGroup": "group_777",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2973,
          "word": "scold",
          "partOfSpeech": "v.",
          "chinese": "责骂，斥责",
          "example": "Don't scold the children without reason",
          "wordGroup": "group_778",
          "colorIndex": 4
        },
        {
          "id": 2974,
          "word": "curse",
          "partOfSpeech": "v./n.",
          "chinese": "诅咒；咒骂/咒语",
          "example": "A light purse is a heavy curse 贫穷是沉重的诅咒",
          "wordGroup": "group_778",
          "colorIndex": 4
        },
        {
          "id": 2975,
          "word": "swear",
          "partOfSpeech": "v.",
          "chinese": "诅咒；咒骂；发誓；保证",
          "example": "He had to swear that his story was true",
          "wordGroup": "group_778",
          "colorIndex": 4
        },
        {
          "id": 2976,
          "word": "provoke",
          "partOfSpeech": "v.",
          "chinese": "激怒，挑拨；引起",
          "example": "Mind you, that dog is very dangerous when provoked",
          "wordGroup": "group_778",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 2977,
          "word": "preach",
          "partOfSpeech": "v.",
          "chinese": "宣扬",
          "example": "He was always preaching about the benefits of exercise and fresh air",
          "wordGroup": "group_779",
          "colorIndex": 5
        },
        {
          "id": 2978,
          "word": "boast",
          "partOfSpeech": "v./n.",
          "chinese": "自夸，吹嘘",
          "example": "Nobody should boast of his knowledge",
          "wordGroup": "group_779",
          "colorIndex": 5
        },
        {
          "id": 2979,
          "word": "tease",
          "partOfSpeech": "v.",
          "chinese": "取笑；嘲弄",
          "example": "If you always tease others like that, you'll forfeit the good opinions of your friends",
          "wordGroup": "group_779",
          "colorIndex": 5
        },
        {
          "id": 2980,
          "word": "mock",
          "partOfSpeech": "v./adj.",
          "chinese": "嘲笑；嘲弄/模拟的；假装的",
          "example": "They mocked at my timidity",
          "wordGroup": "group_779",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 2981,
          "word": "touch",
          "partOfSpeech": "v./n.",
          "chinese": "触摸；触动/触觉，接触",
          "example": "By the way, you don't want to touch the onion and then touch your eyes",
          "wordGroup": "group_780",
          "colorIndex": 0
        },
        {
          "id": 2982,
          "word": "hug",
          "partOfSpeech": "v./n.",
          "chinese": "拥抱",
          "example": "He hugged his daughter tightly",
          "wordGroup": "group_780",
          "colorIndex": 0
        },
        {
          "id": 2983,
          "word": "tap",
          "partOfSpeech": "v.",
          "chinese": "轻拍，轻扣，开发",
          "example": "My father tapped me on the shoulder",
          "wordGroup": "group_780",
          "colorIndex": 0
        },
        {
          "id": 2984,
          "word": "clap",
          "partOfSpeech": "v./n.",
          "chinese": "拍手；轻拍/鼓掌",
          "example": "Let's give the children a big clap",
          "wordGroup": "group_780",
          "colorIndex": 0
        },
        {
          "id": 2985,
          "word": "applaud",
          "partOfSpeech": "v.",
          "chinese": "鼓掌；称赞；赞许",
          "example": "Everyone applauded when the play ended",
          "wordGroup": "group_780",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 2986,
          "word": "kneel",
          "partOfSpeech": "v.",
          "chinese": "跪下，跪",
          "example": "The man knelt down to say his pray",
          "wordGroup": "group_781",
          "colorIndex": 1
        },
        {
          "id": 2987,
          "word": "catch",
          "partOfSpeech": "v.",
          "chinese": "捉住；赶上；领会",
          "example": "It is natural for a cat to catch mice",
          "wordGroup": "group_781",
          "colorIndex": 1
        },
        {
          "id": 2988,
          "word": "snatch",
          "partOfSpeech": "v.",
          "chinese": "一把抓住；迅速夺取",
          "example": "The snatched the book from my hands",
          "wordGroup": "group_781",
          "colorIndex": 1
        },
        {
          "id": 2989,
          "word": "grab",
          "partOfSpeech": "v.",
          "chinese": "抓住，攫取；（匆忙的）取",
          "example": "She grabbed the seat near the fire before I could",
          "wordGroup": "group_781",
          "colorIndex": 1
        },
        {
          "id": 2990,
          "word": "grasp",
          "partOfSpeech": "v.",
          "chinese": "抓牢 ，握紧；完全理解，全面领会",
          "example": "A man who grasps at too much may lose everything",
          "wordGroup": "group_781",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 2991,
          "word": "overtake",
          "partOfSpeech": "v.",
          "chinese": "追上，超过；（情感）压倒",
          "example": "I had to drive very fast to overtake you",
          "wordGroup": "group_782",
          "colorIndex": 2
        },
        {
          "id": 2992,
          "word": "follow",
          "partOfSpeech": "v.",
          "chinese": "跟随；是...的必然结果；遵循",
          "example": "You are to follow his advice",
          "wordGroup": "group_782",
          "colorIndex": 2
        },
        {
          "id": 2993,
          "word": "grip",
          "partOfSpeech": "v./n.",
          "chinese": "紧握，抓牢/紧握，抓牢；理解，了解",
          "example": "She has a fragile grip on reality",
          "wordGroup": "group_782",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 2994,
          "word": "mess",
          "partOfSpeech": "n./v.",
          "chinese": "混乱，脏乱/弄乱",
          "example": "Your books and magazines are all in a mess; go and put them in order.",
          "wordGroup": "group_783",
          "colorIndex": 3
        },
        {
          "id": 2995,
          "word": "twist",
          "partOfSpeech": "v./n.",
          "chinese": "拧，扭；使缠绕/拧，扭动",
          "example": "Twist the lid to open it",
          "wordGroup": "group_783",
          "colorIndex": 3
        },
        {
          "id": 2996,
          "word": "scatter",
          "partOfSpeech": "v.",
          "chinese": "撒；（使）散开",
          "example": "The crowd scattered when a dustbin suddenly exploded",
          "wordGroup": "group_783",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 2997,
          "word": "fold",
          "partOfSpeech": "v.",
          "chinese": "折叠，对折",
          "example": "She folded the letter so that it would fit into her bag",
          "wordGroup": "group_784",
          "colorIndex": 4
        },
        {
          "id": 2998,
          "word": "fasten",
          "partOfSpeech": "v.",
          "chinese": "扣牢，系紧",
          "example": "Please fasten your seatbelts while the plane is taking off",
          "wordGroup": "group_784",
          "colorIndex": 4
        },
        {
          "id": 2999,
          "word": "loosen",
          "partOfSpeech": "v.",
          "chinese": "解开，松开，放宽",
          "example": "My belt is too tight. I must loosen it",
          "wordGroup": "group_784",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 3000,
          "word": "smash",
          "partOfSpeech": "v.",
          "chinese": "打碎；（使）猛烈撞击；（打球时）扣球",
          "example": "Although the bed was smashed to pieces, the man was miraculously unhurt",
          "wordGroup": "group_785",
          "colorIndex": 5
        },
        {
          "id": 3001,
          "word": "scratch",
          "partOfSpeech": "v./n.",
          "chinese": "擦破，刮坏；搔/乱涂；划痕，擦伤",
          "example": "He scratched the insect bite on his arm",
          "wordGroup": "group_785",
          "colorIndex": 5
        },
        {
          "id": 3002,
          "word": "wipe",
          "partOfSpeech": "v.",
          "chinese": "揩，擦",
          "example": "She wiped off dust with a rag",
          "wordGroup": "group_785",
          "colorIndex": 5
        },
        {
          "id": 3003,
          "word": "scrape",
          "partOfSpeech": "v./n.",
          "chinese": "刮掉；擦坏；勉强获得/刮；擦伤",
          "example": "The family has to scrape by on social security",
          "wordGroup": "group_785",
          "colorIndex": 5
        },
        {
          "id": 3004,
          "word": "polish",
          "partOfSpeech": "v.",
          "chinese": "擦光，擦亮；使完美，改进",
          "example": "Silver can be easily polished with this special cloth",
          "wordGroup": "group_785",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 3005,
          "word": "peel",
          "partOfSpeech": "v.",
          "chinese": "剥落；掉漆；脱皮",
          "example": "My skin always peels when I've been in the sun",
          "wordGroup": "group_786",
          "colorIndex": 0
        },
        {
          "id": 3006,
          "word": "split",
          "partOfSpeech": "v.",
          "chinese": "（使）开裂、分开",
          "example": "The crowd split into several groups",
          "wordGroup": "group_786",
          "colorIndex": 0
        },
        {
          "id": 3007,
          "word": "sway",
          "partOfSpeech": "v.",
          "chinese": "（使）摇摆、摆动、摇晃",
          "example": "Swaying hips properly is the basis of the heel-and-toe walking race",
          "wordGroup": "group_786",
          "colorIndex": 0
        },
        {
          "id": 3008,
          "word": "shake",
          "partOfSpeech": "v./n.",
          "chinese": "摇动；（使）颤动/摇动；颤动",
          "example": "The movie didn't give me any kind of shake",
          "wordGroup": "group_786",
          "colorIndex": 0
        },
        {
          "id": 3009,
          "word": "vibrate",
          "partOfSpeech": "v.",
          "chinese": "（使）震动、摇摆",
          "example": "Some insects' wings vibrate so fast that the movement is invisible to human eyes",
          "wordGroup": "group_786",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 3010,
          "word": "whirl",
          "partOfSpeech": "v./n.",
          "chinese": "（使）回旋/回旋",
          "example": "He whirled about in the yard",
          "wordGroup": "group_787",
          "colorIndex": 1
        },
        {
          "id": 3011,
          "word": "rotate",
          "partOfSpeech": "v.",
          "chinese": "（使）旋转、转动",
          "example": "You can rotate the wheel with your hand",
          "wordGroup": "group_787",
          "colorIndex": 1
        },
        {
          "id": 3012,
          "word": "reel",
          "partOfSpeech": "v.",
          "chinese": "眩晕；混乱",
          "example": "My head reeled with the facts and figures",
          "wordGroup": "group_787",
          "colorIndex": 1
        },
        {
          "id": 3013,
          "word": "shuffle",
          "partOfSpeech": "v.",
          "chinese": "洗（牌）；拖着脚走；搅乱...的次序/洗牌",
          "example": "With sore legs and aching chest, he shuffled over to the bathroom",
          "wordGroup": "group_787",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 3014,
          "word": "collide",
          "partOfSpeech": "v.",
          "chinese": "碰撞；抵触",
          "example": "In running around the corner, he collided with another man",
          "wordGroup": "group_788",
          "colorIndex": 2
        },
        {
          "id": 3015,
          "word": "contact",
          "partOfSpeech": "n./v.",
          "chinese": "接触，联系",
          "example": "This remote tribe had little contact with the outside world",
          "wordGroup": "group_788",
          "colorIndex": 2
        },
        {
          "id": 3016,
          "word": "connect",
          "partOfSpeech": "v.",
          "chinese": "（使）连接；（使）接通（电源等）",
          "example": "Has the phone been connected yet?",
          "wordGroup": "group_788",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 3017,
          "word": "combine",
          "partOfSpeech": "v.",
          "chinese": "（使）联合、结合",
          "example": "Carbon, hydrogen, and oxygen can combine to form carbohydrates and fats",
          "wordGroup": "group_789",
          "colorIndex": 3
        },
        {
          "id": 3018,
          "word": "bond",
          "partOfSpeech": "v./n.",
          "chinese": "与...黏合（或连接）/黏合；（情感的）纽带",
          "example": "These two different materials weren't bond together",
          "wordGroup": "group_789",
          "colorIndex": 3
        },
        {
          "id": 3019,
          "word": "integrate",
          "partOfSpeech": "v.",
          "chinese": "（使）成为一体、合并",
          "example": "Little attempt was made to integrate the parts into a coherent whole",
          "wordGroup": "group_789",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 3020,
          "word": "wrap",
          "partOfSpeech": "v.",
          "chinese": "包；裹；用...缠绕",
          "example": "Wrapped up in this shawl, you look more pretty",
          "wordGroup": "group_790",
          "colorIndex": 4
        },
        {
          "id": 3021,
          "word": "penetrate",
          "partOfSpeech": "v.",
          "chinese": "刺入；穿透；渗透；洞察",
          "example": "Western ideas penetrate slowly through the east",
          "wordGroup": "group_790",
          "colorIndex": 4
        },
        {
          "id": 3022,
          "word": "pierce",
          "partOfSpeech": "v.",
          "chinese": "刺穿，刺破，穿透；使心如刀割",
          "example": "The needle pierced the material",
          "wordGroup": "group_790",
          "colorIndex": 4
        },
        {
          "id": 3023,
          "word": "insert",
          "partOfSpeech": "v./n.",
          "chinese": "插入；嵌入/插入物",
          "example": "He inserted the key into the lock but could not open the door",
          "wordGroup": "group_790",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 3024,
          "word": "tilt",
          "partOfSpeech": "v.",
          "chinese": "（使）倾斜、歪斜",
          "example": "I tilted the cup to drink out of it",
          "wordGroup": "group_791",
          "colorIndex": 5
        },
        {
          "id": 3025,
          "word": "tow",
          "partOfSpeech": "v./n.",
          "chinese": "拖、拉；牵引/牵引",
          "example": "We towed the car to the garage",
          "wordGroup": "group_791",
          "colorIndex": 5
        },
        {
          "id": 3026,
          "word": "trail",
          "partOfSpeech": "v./n.",
          "chinese": "（使）拖在后面/踪迹",
          "example": "The carriage drove along a dirt road and left a trail of dust",
          "wordGroup": "group_791",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 3027,
          "word": "arrange",
          "partOfSpeech": "v.",
          "chinese": "安排，整理，使有条理",
          "example": "Contact your local branch to arrange an appointment",
          "wordGroup": "group_792",
          "colorIndex": 0
        },
        {
          "id": 3028,
          "word": "manipulate",
          "partOfSpeech": "v.",
          "chinese": "（熟练的）操作；操纵",
          "example": "He uses his credit to manipulate his supporters",
          "wordGroup": "group_792",
          "colorIndex": 0
        },
        {
          "id": 3029,
          "word": "steer",
          "partOfSpeech": "v.",
          "chinese": "掌舵；驾驶；操纵",
          "example": "He steered the ship carefully among the reefs",
          "wordGroup": "group_792",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 3030,
          "word": "baptize/baptise",
          "partOfSpeech": "v.",
          "chinese": "给...施行洗礼",
          "example": "It transpired that Mark had been baptized a catholic",
          "wordGroup": "group_793",
          "colorIndex": 1
        },
        {
          "id": 3031,
          "word": "bet",
          "partOfSpeech": "v./n.",
          "chinese": "下注；打赌；敢说/打赌；赌注",
          "example": "I bet our team will win",
          "wordGroup": "group_793",
          "colorIndex": 1
        },
        {
          "id": 3032,
          "word": "stake",
          "partOfSpeech": "n./v.",
          "chinese": "赌注；桩/以...打赌",
          "example": "I'd stake my all on it",
          "wordGroup": "group_793",
          "colorIndex": 1
        },
        {
          "id": 3033,
          "word": "gamble",
          "partOfSpeech": "v./n.",
          "chinese": "赌博；冒险",
          "example": "Don't gamble with your future",
          "wordGroup": "group_793",
          "colorIndex": 1
        },
        {
          "id": 3034,
          "word": "promise",
          "partOfSpeech": "n./v.",
          "chinese": "诺言/承诺",
          "example": "I hope you'll keep your promise to come for a long visit",
          "wordGroup": "group_793",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 3035,
          "word": "attract",
          "partOfSpeech": "v.",
          "chinese": "吸引；引起",
          "example": "She was attracted by the novel advertisement",
          "wordGroup": "group_794",
          "colorIndex": 2
        },
        {
          "id": 3036,
          "word": "obsess",
          "partOfSpeech": "v.",
          "chinese": "（是）痴迷、心神不宁",
          "example": "He became absolutely obsessed with the girl in red",
          "wordGroup": "group_794",
          "colorIndex": 2
        },
        {
          "id": 3037,
          "word": "mesmerize/mesmerise",
          "partOfSpeech": "v.",
          "chinese": "吸引；迷住",
          "example": "I stood by the lake, mesmerized by the flashing colors of the fish",
          "wordGroup": "group_794",
          "colorIndex": 2
        },
        {
          "id": 3038,
          "word": "nightmare",
          "partOfSpeech": "n.",
          "chinese": "噩梦，梦魇",
          "example": "This mid-term exam is a nightmare",
          "wordGroup": "group_794",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 3039,
          "word": "amaze",
          "partOfSpeech": "v.",
          "chinese": "使惊奇，使惊愕",
          "example": "John amazed his friends by suddenly getting married",
          "wordGroup": "group_795",
          "colorIndex": 3
        },
        {
          "id": 3040,
          "word": "marvel",
          "partOfSpeech": "v./n.",
          "chinese": "感到惊讶，大为赞叹/奇迹",
          "example": "I marvel at how it can be so",
          "wordGroup": "group_795",
          "colorIndex": 3
        },
        {
          "id": 3041,
          "word": "astonish",
          "partOfSpeech": "v.",
          "chinese": "使惊讶",
          "example": "We were astonished to hear that their football team had won the championship",
          "wordGroup": "group_795",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 3042,
          "word": "involve",
          "partOfSpeech": "v.",
          "chinese": "参加；牵涉",
          "example": "This forum will involve people with specialist knowledge",
          "wordGroup": "group_796",
          "colorIndex": 4
        },
        {
          "id": 3043,
          "word": "annoy",
          "partOfSpeech": "v.",
          "chinese": "使恼怒；打扰",
          "example": "Sometimes we annoy or upset others unintentionally",
          "wordGroup": "group_796",
          "colorIndex": 4
        },
        {
          "id": 3044,
          "word": "upset",
          "partOfSpeech": "v.",
          "chinese": "使心烦意乱；使生气；搅乱；打翻",
          "example": "I hope I haven't said anything to upset you",
          "wordGroup": "group_796",
          "colorIndex": 4
        },
        {
          "id": 3045,
          "word": "bewilder",
          "partOfSpeech": "v.",
          "chinese": "使迷惑，使不知所措",
          "example": "A new environment can bewilder and frighten a child",
          "wordGroup": "group_796",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 3046,
          "word": "irony",
          "partOfSpeech": "n.",
          "chinese": "反话；有讽刺意味的情形",
          "example": "The irony is that some of the poorest countries have the richest natural resources",
          "wordGroup": "group_797",
          "colorIndex": 5
        },
        {
          "id": 3047,
          "word": "indignity",
          "partOfSpeech": "n.",
          "chinese": "侮辱；轻蔑",
          "example": "The soldiers who were captured had to endure many indignities at the hands of the enemy",
          "wordGroup": "group_797",
          "colorIndex": 5
        },
        {
          "id": 3048,
          "word": "contempt",
          "partOfSpeech": "n.",
          "chinese": "轻视，藐视",
          "example": "A liar is held in contempt 说谎者为人所轻视",
          "wordGroup": "group_797",
          "colorIndex": 5
        },
        {
          "id": 3049,
          "word": "neglect",
          "partOfSpeech": "v./n.",
          "chinese": "忽视；忽略",
          "example": "In course of time, old customs and observances tend to fall into neglect",
          "wordGroup": "group_797",
          "colorIndex": 5
        },
        {
          "id": 3050,
          "word": "disregard",
          "partOfSpeech": "v./n.",
          "chinese": "不顾，漠视/忽视，漠视",
          "example": "Disregarding all difficulties, we succeeded in bringing them around in the end",
          "wordGroup": "group_797",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 3051,
          "word": "ignorance",
          "partOfSpeech": "n.",
          "chinese": "无知，愚昧",
          "example": "Where ignorance is bliss, 'tis folly to be wise",
          "wordGroup": "group_798",
          "colorIndex": 0
        },
        {
          "id": 3052,
          "word": "bias",
          "partOfSpeech": "v./n.",
          "chinese": "使有偏见；使偏心/偏见；偏心",
          "example": "His experiences bias him against businessmen",
          "wordGroup": "group_798",
          "colorIndex": 0
        },
        {
          "id": 3053,
          "word": "deviate",
          "partOfSpeech": "v.",
          "chinese": "偏离；背离",
          "example": "His statement deviates from the truth",
          "wordGroup": "group_798",
          "colorIndex": 0
        },
        {
          "id": 3054,
          "word": "expel",
          "partOfSpeech": "V.",
          "chinese": "驱逐；开除；排出",
          "example": "The pupil was expelled for stealing",
          "wordGroup": "group_798",
          "colorIndex": 0
        },
        {
          "id": 3055,
          "word": "flee",
          "partOfSpeech": "v.",
          "chinese": "逃避，逃离",
          "example": "Follow love and it will flee, flee love and it will follow thee",
          "wordGroup": "group_798",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 3056,
          "word": "bully",
          "partOfSpeech": "v./n.",
          "chinese": "恐吓，欺凌/恃强凌弱者",
          "example": "He's always bullying smaller boys",
          "wordGroup": "group_799",
          "colorIndex": 1
        },
        {
          "id": 3057,
          "word": "panic",
          "partOfSpeech": "n./v.",
          "chinese": "惊慌，惊恐/（使）惊恐、惊慌",
          "example": "When the theater caught fire, there was a panic",
          "wordGroup": "group_799",
          "colorIndex": 1
        },
        {
          "id": 3058,
          "word": "terrify",
          "partOfSpeech": "v.",
          "chinese": "使恐惧，使非常害怕",
          "example": "Her husband's violence terrified her",
          "wordGroup": "group_799",
          "colorIndex": 1
        },
        {
          "id": 3059,
          "word": "revenge",
          "partOfSpeech": "n./v.",
          "chinese": "报仇，复仇/为...报仇",
          "example": "Hamlet took revenge for his father's murder",
          "wordGroup": "group_799",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 3060,
          "word": "kidnap",
          "partOfSpeech": "v.",
          "chinese": "绑架；劫持",
          "example": "A businessman has been kidnapped",
          "wordGroup": "group_800",
          "colorIndex": 2
        },
        {
          "id": 3061,
          "word": "hijack",
          "partOfSpeech": "v.",
          "chinese": "劫持（飞机或其他交通工具）",
          "example": "The terrorists hijacked the plane and held all the passengers hostage",
          "wordGroup": "group_800",
          "colorIndex": 2
        },
        {
          "id": 3062,
          "word": "smuggle",
          "partOfSpeech": "v.",
          "chinese": "走私，投运",
          "example": "He was caught smuggling cameras into the country",
          "wordGroup": "group_800",
          "colorIndex": 2
        },
        {
          "id": 3063,
          "word": "convict",
          "partOfSpeech": "v./n.",
          "chinese": "定罪；宣判...有罪/已决犯",
          "example": "He was convicted of murder",
          "wordGroup": "group_800",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 3064,
          "word": "strangle",
          "partOfSpeech": "v.",
          "chinese": "扼杀，压制，勒死，扼死",
          "example": "The economist argues that high taxation strangles the economy",
          "wordGroup": "group_801",
          "colorIndex": 3
        },
        {
          "id": 3065,
          "word": "massacre",
          "partOfSpeech": "n./v.",
          "chinese": "残杀。屠杀",
          "example": "The massacre of Jews by Nazi in World War II was appalling",
          "wordGroup": "group_801",
          "colorIndex": 3
        },
        {
          "id": 3066,
          "word": "decimation",
          "partOfSpeech": "n.",
          "chinese": "大批杀死，大量毁灭；大大削弱",
          "example": "Those policies resulted in a decimation of essential services used by the poor",
          "wordGroup": "group_801",
          "colorIndex": 3
        },
        {
          "id": 3067,
          "word": "intervene",
          "partOfSpeech": "v.",
          "chinese": "插话；干扰；干涉",
          "example": "I shall leave on Sunday if nothing intervenes",
          "wordGroup": "group_801",
          "colorIndex": 3
        },
        {
          "id": 3068,
          "word": "impede",
          "partOfSpeech": "v.",
          "chinese": "妨碍，阻止",
          "example": "Nothing can impede his progress",
          "wordGroup": "group_801",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 3069,
          "word": "allure",
          "partOfSpeech": "v.",
          "chinese": "吸引，引诱",
          "example": "Those unwary investors are allured by promises of quick profits",
          "wordGroup": "group_802",
          "colorIndex": 4
        },
        {
          "id": 3070,
          "word": "bait",
          "partOfSpeech": "v./n.",
          "chinese": "使上当发火/诱饵，诱惑物",
          "example": "He is known for baiting his opponents. 众所周知，他善于激怒对手",
          "wordGroup": "group_802",
          "colorIndex": 4
        },
        {
          "id": 3071,
          "word": "induce",
          "partOfSpeech": "v.",
          "chinese": "引诱，劝说",
          "example": "Nothing shall induce me to join their club",
          "wordGroup": "group_802",
          "colorIndex": 4
        },
        {
          "id": 3072,
          "word": "tempt",
          "partOfSpeech": "v.",
          "chinese": "引诱，诱惑，怂恿",
          "example": "Apply generous amounts of sunscreen 15 minutes before you go out. Don't allow impatience to tempt you into sunburn",
          "wordGroup": "group_802",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 3073,
          "word": "designate",
          "partOfSpeech": "v.",
          "chinese": "指明；选派；指派",
          "example": "He designated Smith as his successor",
          "wordGroup": "group_803",
          "colorIndex": 5
        },
        {
          "id": 3074,
          "word": "assign",
          "partOfSpeech": "v.",
          "chinese": "布置；分配；指定；确定",
          "example": "It is not possible to assign this building an exact date",
          "wordGroup": "group_803",
          "colorIndex": 5
        },
        {
          "id": 3075,
          "word": "distribute",
          "partOfSpeech": "v.",
          "chinese": "分发，分配",
          "example": "His part-time job on Sunday was to distribute leaflets on the street",
          "wordGroup": "group_803",
          "colorIndex": 5
        },
        {
          "id": 3076,
          "word": "despatch/dispatch",
          "partOfSpeech": "v.",
          "chinese": "派遣；调派；迅速处理",
          "example": "He dispatched his breakfast and left",
          "wordGroup": "group_803",
          "colorIndex": 5
        },
        {
          "id": 3077,
          "word": "detach",
          "partOfSpeech": "v.",
          "chinese": "（使）分开，（使）分离；派遣",
          "example": "He had to detach himself from social activities for the time being in order to concentrate on his studies",
          "wordGroup": "group_803",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 3078,
          "word": "undo",
          "partOfSpeech": "v.",
          "chinese": "解开，打开，取笑",
          "example": "He finally managed to undo this knot",
          "wordGroup": "group_804",
          "colorIndex": 0
        },
        {
          "id": 3079,
          "word": "disguise",
          "partOfSpeech": "v./n.",
          "chinese": "掩饰；假扮；伪装/假扮；伪装物",
          "example": "The spy disguised himself as a nurse",
          "wordGroup": "group_804",
          "colorIndex": 0
        },
        {
          "id": 3080,
          "word": "conceal",
          "partOfSpeech": "v.",
          "chinese": "掩盖",
          "example": "He was unable to conceal his surprise",
          "wordGroup": "group_804",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 3081,
          "word": "refuse",
          "partOfSpeech": "v.",
          "chinese": "拒绝；回绝",
          "example": "Jonah's mother refused to let him go abroad",
          "wordGroup": "group_805",
          "colorIndex": 1
        },
        {
          "id": 3082,
          "word": "exclude",
          "partOfSpeech": "v.",
          "chinese": "把...排除在外；拒绝",
          "example": "They excluded people under 18 to join the club",
          "wordGroup": "group_805",
          "colorIndex": 1
        },
        {
          "id": 3083,
          "word": "reverse",
          "partOfSpeech": "v./n./adj.",
          "chinese": "颠倒；彻底改变；撤销/相反的情况；反面/相反的",
          "example": "He reversed the judgement and set the prisoner free",
          "wordGroup": "group_805",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 3084,
          "word": "assure",
          "partOfSpeech": "v.",
          "chinese": "向...保证；保证；保险",
          "example": "I can assure you of the reliability of the news",
          "wordGroup": "group_806",
          "colorIndex": 2
        },
        {
          "id": 3085,
          "word": "undertake",
          "partOfSpeech": "v.",
          "chinese": "承担；许诺；保证",
          "example": "The developed countries should undertake the main responsibilities of global warming",
          "wordGroup": "group_806",
          "colorIndex": 2
        },
        {
          "id": 3086,
          "word": "stipulate",
          "partOfSpeech": "v.",
          "chinese": "规定；明确要求；保证",
          "example": "We have stipulated a date of payment and a price",
          "wordGroup": "group_806",
          "colorIndex": 2
        },
        {
          "id": 3087,
          "word": "convince",
          "partOfSpeech": "v.",
          "chinese": "使确信，使信服，说服",
          "example": "He finally convinced us of his innocence",
          "wordGroup": "group_806",
          "colorIndex": 2
        },
        {
          "id": 3088,
          "word": "reassure",
          "partOfSpeech": "v.",
          "chinese": "使安心；使放心",
          "example": "When the child was afraid in the storm, his parents reassured him",
          "wordGroup": "group_806",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 3089,
          "word": "wish",
          "partOfSpeech": "v./n.",
          "chinese": "想要（某事发生）/希望",
          "example": "I wish it to be clearly understood",
          "wordGroup": "group_807",
          "colorIndex": 3
        },
        {
          "id": 3090,
          "word": "aspire",
          "partOfSpeech": "v.",
          "chinese": "有志于；渴望",
          "example": "These college graduates aspire to careers in finance",
          "wordGroup": "group_807",
          "colorIndex": 3
        },
        {
          "id": 3091,
          "word": "desire",
          "partOfSpeech": "n./v.",
          "chinese": "愿望；欲望/渴望，期望",
          "example": "He desired a college education",
          "wordGroup": "group_807",
          "colorIndex": 3
        },
        {
          "id": 3092,
          "word": "yearn",
          "partOfSpeech": "v.",
          "chinese": "渴望；向往",
          "example": "The children who had been abducted and sold yearned to return to their homes",
          "wordGroup": "group_807",
          "colorIndex": 3
        },
        {
          "id": 3093,
          "word": "invoke",
          "partOfSpeech": "v.",
          "chinese": "唤起（情感等）；向...祈求帮助；恳求",
          "example": "The man despaired and invoked to gods",
          "wordGroup": "group_807",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 3094,
          "word": "itch",
          "partOfSpeech": "v./n.",
          "chinese": "发痒；渴望/痒；渴望",
          "example": "I've gotten itch on my back",
          "wordGroup": "group_808",
          "colorIndex": 4
        },
        {
          "id": 3095,
          "word": "attempt",
          "partOfSpeech": "v./n.",
          "chinese": "尝试；试图/尝试；企图",
          "example": "He studied hard in an attempt to pass the exam",
          "wordGroup": "group_808",
          "colorIndex": 4
        },
        {
          "id": 3096,
          "word": "strive",
          "partOfSpeech": "v.",
          "chinese": "努力；奋斗",
          "example": "",
          "wordGroup": "group_808",
          "colorIndex": 4
        },
        {
          "id": 3097,
          "word": "effort",
          "partOfSpeech": "n.",
          "chinese": "努力；努力的成果",
          "example": "Our effects were unveiling",
          "wordGroup": "group_808",
          "colorIndex": 4
        },
        {
          "id": 3098,
          "word": "fulfil/fulfill",
          "partOfSpeech": "v.",
          "chinese": "履行；实现；完成；满足",
          "example": "We're determined to fulfill the task",
          "wordGroup": "group_808",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 3099,
          "word": "range",
          "partOfSpeech": "v.",
          "chinese": "（在一定幅度内的）变动",
          "example": "The price is ranged from 10 pounds to 20 pounds",
          "wordGroup": "group_809",
          "colorIndex": 5
        },
        {
          "id": 3100,
          "word": "sort",
          "partOfSpeech": "n./v.",
          "chinese": "种类，类别/把...分类",
          "example": "We must sort out the good apples from the bad ones",
          "wordGroup": "group_809",
          "colorIndex": 5
        },
        {
          "id": 3101,
          "word": "loom",
          "partOfSpeech": "v./n.",
          "chinese": "（庞然大物或形状模糊之物）隐现；逼近/织布机",
          "example": "A hard struggle looms ahead",
          "wordGroup": "group_809",
          "colorIndex": 5
        },
        {
          "id": 3102,
          "word": "launch",
          "partOfSpeech": "v.",
          "chinese": "发射；发布；推出；发起",
          "example": "Full market research is needed before a new proudct is launched",
          "wordGroup": "group_809",
          "colorIndex": 5
        },
        {
          "id": 3103,
          "word": "commence",
          "partOfSpeech": "v.",
          "chinese": "开始；着手",
          "example": "I will commence around a visit",
          "wordGroup": "group_809",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 3104,
          "word": "exploit",
          "partOfSpeech": "v.",
          "chinese": "开发；开采；开拓",
          "example": "They plan to exploit oil under the sea",
          "wordGroup": "group_810",
          "colorIndex": 0
        },
        {
          "id": 3105,
          "word": "explore",
          "partOfSpeech": "v.",
          "chinese": "勘察；考察；探讨",
          "example": "We explore all the possibilities to find the solution",
          "wordGroup": "group_810",
          "colorIndex": 0
        },
        {
          "id": 3106,
          "word": "exert",
          "partOfSpeech": "v.",
          "chinese": "运用，行驶；施加",
          "example": "For college students to do a part-time job, we'll exert a profound influence on their personality and life",
          "wordGroup": "group_810",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 3107,
          "word": "tackle",
          "partOfSpeech": "v./n.",
          "chinese": "处理；应对；处理/用具；器材",
          "example": "Everyone has their own problems to tackle",
          "wordGroup": "group_811",
          "colorIndex": 1
        },
        {
          "id": 3108,
          "word": "cope",
          "partOfSpeech": "v.",
          "chinese": "处理；应付",
          "example": "I'm afraid I can't cope with these troubles",
          "wordGroup": "group_811",
          "colorIndex": 1
        },
        {
          "id": 3109,
          "word": "dispose",
          "partOfSpeech": "v.",
          "chinese": "布置；安排",
          "example": "I have to dispose of this pile of old papers and magazines",
          "wordGroup": "group_811",
          "colorIndex": 1
        },
        {
          "id": 3110,
          "word": "conduct",
          "partOfSpeech": "v./n.",
          "chinese": "进行；实施/举止；行为",
          "example": "His conduct contradicts his words",
          "wordGroup": "group_811",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 3111,
          "word": "omit",
          "partOfSpeech": "v.",
          "chinese": "遗漏 ；省略；删去",
          "example": "The secretary omitted the date when typing the contract",
          "wordGroup": "group_812",
          "colorIndex": 2
        },
        {
          "id": 3112,
          "word": "delete",
          "partOfSpeech": "v.",
          "chinese": "删除；删掉",
          "example": "References to places of battle were deleted from soldiers' letters during the war",
          "wordGroup": "group_812",
          "colorIndex": 2
        },
        {
          "id": 3113,
          "word": "cancel",
          "partOfSpeech": "v.",
          "chinese": "取消；废除",
          "example": "The match had to be canceled due to the bad whether",
          "wordGroup": "group_812",
          "colorIndex": 2
        },
        {
          "id": 3114,
          "word": "clear",
          "partOfSpeech": "adj./v.",
          "chinese": "清晰的；明显的/清除",
          "example": "It seems clear that he has no reasonable alternative",
          "wordGroup": "group_812",
          "colorIndex": 2
        },
        {
          "id": 3115,
          "word": "erase",
          "partOfSpeech": "v.",
          "chinese": "清除；抹去",
          "example": "Jim tried to erase the idea from his mind",
          "wordGroup": "group_812",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 3116,
          "word": "rescue",
          "partOfSpeech": "v./n.",
          "chinese": "营救；救援",
          "example": "They rescued the boy who fell into the river",
          "wordGroup": "group_813",
          "colorIndex": 3
        },
        {
          "id": 3117,
          "word": "resort",
          "partOfSpeech": "v./n.",
          "chinese": "求助于；采取；诉诸/（度假）胜地",
          "example": "I'm sorry you have resorted to deception",
          "wordGroup": "group_813",
          "colorIndex": 3
        },
        {
          "id": 3118,
          "word": "recover",
          "partOfSpeech": "v.",
          "chinese": "重新拿回；恢复健康；复原",
          "example": "She soon recovered and stopped crying",
          "wordGroup": "group_813",
          "colorIndex": 3
        },
        {
          "id": 3119,
          "word": "restore",
          "partOfSpeech": "v.",
          "chinese": "恢复；归还；修复",
          "example": "It's hard to restore a broken mirror",
          "wordGroup": "group_813",
          "colorIndex": 3
        },
        {
          "id": 3120,
          "word": "rectify",
          "partOfSpeech": "v.",
          "chinese": "纠正；矫正；改正",
          "example": "I hope I can find a way to rectify your opinion of my behavior",
          "wordGroup": "group_813",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 3121,
          "word": "redeem",
          "partOfSpeech": "v.",
          "chinese": "赎回；挽回；补偿；兑现",
          "example": "You botched the last job, but can redeem yourself on this one",
          "wordGroup": "group_814",
          "colorIndex": 4
        },
        {
          "id": 3122,
          "word": "offset",
          "partOfSpeech": "v./n.",
          "chinese": "补偿；抵消",
          "example": "He offset his small salary by living economically",
          "wordGroup": "group_814",
          "colorIndex": 4
        },
        {
          "id": 3123,
          "word": "replenish",
          "partOfSpeech": "v.",
          "chinese": "重新装满；补充",
          "example": "Your body is in survival mode and needs food to replenish its energy",
          "wordGroup": "group_814",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 3124,
          "word": "obtain",
          "partOfSpeech": "v.",
          "chinese": "获得；得到",
          "example": "It is wise to obtain an independent valuation",
          "wordGroup": "group_815",
          "colorIndex": 5
        },
        {
          "id": 3125,
          "word": "gain",
          "partOfSpeech": "v./n.",
          "chinese": "获得；增加/增加；改进",
          "example": "every time they reap gains from their investment, more people wish to join them",
          "wordGroup": "group_815",
          "colorIndex": 5
        },
        {
          "id": 3126,
          "word": "supply",
          "partOfSpeech": "v./n.",
          "chinese": "供给；供应；提供/供应量；[supplies]补给品",
          "example": "Domestic consumers were supplied enough necessities by those companies",
          "wordGroup": "group_815",
          "colorIndex": 5
        },
        {
          "id": 3127,
          "word": "offer",
          "partOfSpeech": "n./v.",
          "chinese": "给予（物）；提议/提供；出（价）",
          "example": "They reject all our offers to help",
          "wordGroup": "group_815",
          "colorIndex": 5
        },
        {
          "id": 3128,
          "word": "render",
          "partOfSpeech": "v.",
          "chinese": "给予，提供；翻译",
          "example": "You have rendered great service",
          "wordGroup": "group_815",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 3129,
          "word": "enlarge",
          "partOfSpeech": "v.",
          "chinese": "扩大，扩展；放大",
          "example": "This photograph probably won't enlarge well",
          "wordGroup": "group_816",
          "colorIndex": 0
        },
        {
          "id": 3130,
          "word": "augment",
          "partOfSpeech": "v.",
          "chinese": "扩大；增加；加强；提高",
          "example": "With the birth of his third son, he found it necessary to do something to augment his income",
          "wordGroup": "group_816",
          "colorIndex": 0
        },
        {
          "id": 3131,
          "word": "magnify",
          "partOfSpeech": "v.",
          "chinese": "放大；夸大",
          "example": "Fame is a magnifying glass",
          "wordGroup": "group_816",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 3132,
          "word": "amplify",
          "partOfSpeech": "v.",
          "chinese": "增强；扩大（声音）；充实（陈述）",
          "example": "The student amplified his new findings with drawings and figures",
          "wordGroup": "group_817",
          "colorIndex": 1
        },
        {
          "id": 3133,
          "word": "exaggerate",
          "partOfSpeech": "v.",
          "chinese": "夸张；夸大",
          "example": "A painter may exaggerate or distort shapes and forms",
          "wordGroup": "group_817",
          "colorIndex": 1
        },
        {
          "id": 3134,
          "word": "prolong",
          "partOfSpeech": "v.",
          "chinese": "延长",
          "example": "We must prolong the runway of the airfield",
          "wordGroup": "group_817",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 3135,
          "word": "uphold",
          "partOfSpeech": "v.",
          "chinese": "支持；维护；维持",
          "example": "The appeal court upheld the sentence",
          "wordGroup": "group_818",
          "colorIndex": 2
        },
        {
          "id": 3136,
          "word": "backup",
          "partOfSpeech": "n./adj.",
          "chinese": "后援；支持（文件等的）备份/备用的",
          "example": "Make a backup of any work you do on the computer",
          "wordGroup": "group_818",
          "colorIndex": 2
        },
        {
          "id": 3137,
          "word": "propel",
          "partOfSpeech": "v.",
          "chinese": "推动；驱使；推进",
          "example": "",
          "wordGroup": "group_818",
          "colorIndex": 2
        },
        {
          "id": 3138,
          "word": "update",
          "partOfSpeech": "v.",
          "chinese": "更新；使现代化",
          "example": "Our email addresses are unlikely to be updated everyday",
          "wordGroup": "group_818",
          "colorIndex": 2
        },
        {
          "id": 3139,
          "word": "raise",
          "partOfSpeech": "v.",
          "chinese": "举起；引起；抚养；提高；筹募",
          "example": "Please raise your hand if you've been told you're too aggressive at work",
          "wordGroup": "group_818",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 3140,
          "word": "leak",
          "partOfSpeech": "v./n.",
          "chinese": "泄露/漏洞，裂缝",
          "example": "A small leak will sink a great ship",
          "wordGroup": "group_819",
          "colorIndex": 3
        },
        {
          "id": 3141,
          "word": "spill",
          "partOfSpeech": "v.",
          "chinese": "（使）溢出",
          "example": "The teacup is so full that the tea might spill over",
          "wordGroup": "group_819",
          "colorIndex": 3
        },
        {
          "id": 3142,
          "word": "seep",
          "partOfSpeech": "v.",
          "chinese": "渗出；渗透",
          "example": "Rain seeped through the roof",
          "wordGroup": "group_819",
          "colorIndex": 3
        },
        {
          "id": 3143,
          "word": "ooze",
          "partOfSpeech": "v.",
          "chinese": "(浓液等)渗出；洋溢着",
          "example": "Blood oozed from his wound",
          "wordGroup": "group_819",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 3144,
          "word": "evacuate",
          "partOfSpeech": "v.",
          "chinese": "疏散；撤离",
          "example": "The village was evacuated because of the threat of a flood",
          "wordGroup": "group_820",
          "colorIndex": 4
        },
        {
          "id": 3145,
          "word": "trench",
          "partOfSpeech": "v./n.",
          "chinese": "掘沟于；砍除/沟，渠，壕沟",
          "example": "The fireman's successfully trenched the roof, preventing the fire spreading further down the block",
          "wordGroup": "group_820",
          "colorIndex": 4
        },
        {
          "id": 3146,
          "word": "saturate",
          "partOfSpeech": "v.",
          "chinese": "使饱和；使充满；浸透",
          "example": "The air was saturated with the perfume of flowers",
          "wordGroup": "group_820",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 3147,
          "word": "excuse",
          "partOfSpeech": "v./n.",
          "chinese": "原谅；同意免除/理由；借口",
          "example": "There is no excuse for treapassing on private property",
          "wordGroup": "group_821",
          "colorIndex": 5
        },
        {
          "id": 3148,
          "word": "forgive",
          "partOfSpeech": "v.",
          "chinese": "原谅，宽恕，饶恕",
          "example": "I'll never forgive you for what have done wrong to my friend",
          "wordGroup": "group_821",
          "colorIndex": 5
        },
        {
          "id": 3149,
          "word": "contain",
          "partOfSpeech": "v.",
          "chinese": "包含，容纳；抑制（感情）",
          "example": "The speech contained some interesting ideas",
          "wordGroup": "group_821",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 3150,
          "word": "regard",
          "partOfSpeech": "n./v.",
          "chinese": "尊重；问候/看待",
          "example": "You can't regard him as a friend but a business associate",
          "wordGroup": "group_822",
          "colorIndex": 0
        },
        {
          "id": 3151,
          "word": "flatter",
          "partOfSpeech": "v.",
          "chinese": "奉承，讨好，向...谄媚",
          "example": "He flattered her on her cooking",
          "wordGroup": "group_822",
          "colorIndex": 0
        },
        {
          "id": 3152,
          "word": "worship",
          "partOfSpeech": "n./v.",
          "chinese": "崇拜，礼拜，爱慕/做礼拜",
          "example": "She gazed at the famous singer with worship in her eyes",
          "wordGroup": "group_822",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 3153,
          "word": "cause",
          "partOfSpeech": "n./v.",
          "chinese": "原因，理由，事业/引起；导致",
          "example": "Police are investigating the likely cause of the explosion",
          "wordGroup": "group_823",
          "colorIndex": 1
        },
        {
          "id": 3154,
          "word": "sake",
          "partOfSpeech": "n.",
          "chinese": "理由，目的",
          "example": "You should take care of your niece for the sake of your sister",
          "wordGroup": "group_823",
          "colorIndex": 1
        },
        {
          "id": 3155,
          "word": "purpose",
          "partOfSpeech": "n.",
          "chinese": "目的",
          "example": "Their purpose is to build a fair society and a strong economy",
          "wordGroup": "group_823",
          "colorIndex": 1
        },
        {
          "id": 3156,
          "word": "objective",
          "partOfSpeech": "n./adj.",
          "chinese": "宗旨；目标/客观的",
          "example": "My objective this summer is to learn to swim",
          "wordGroup": "group_823",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 3157,
          "word": "arouse",
          "partOfSpeech": "v.",
          "chinese": "唤起；激起；引起",
          "example": "The young man's behavior aroused the suspicions of the police",
          "wordGroup": "group_824",
          "colorIndex": 2
        },
        {
          "id": 3158,
          "word": "trigger",
          "partOfSpeech": "v./n.",
          "chinese": "引发；触发/扳机",
          "example": "He accidentally triggered his revolver",
          "wordGroup": "group_824",
          "colorIndex": 2
        },
        {
          "id": 3159,
          "word": "seek",
          "partOfSpeech": "v.",
          "chinese": "寻找；寻求",
          "example": "They are seeking the most reasonable diet, which will do good to their health",
          "wordGroup": "group_824",
          "colorIndex": 2
        },
        {
          "id": 3160,
          "word": "retrieve",
          "partOfSpeech": "v.",
          "chinese": "取回；挽回",
          "example": "Henry did his best to retrieve the situation",
          "wordGroup": "group_824",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 3161,
          "word": "testify",
          "partOfSpeech": "v.",
          "chinese": "作证；证明",
          "example": "I won't testify aginst my friend",
          "wordGroup": "group_825",
          "colorIndex": 3
        },
        {
          "id": 3162,
          "word": "verify",
          "partOfSpeech": "v.",
          "chinese": "证实；核实；查清",
          "example": "He tried in every way to verify this theory",
          "wordGroup": "group_825",
          "colorIndex": 3
        },
        {
          "id": 3163,
          "word": "specify",
          "partOfSpeech": "v.",
          "chinese": "具体指定；详细说明",
          "example": "Can you specify the reasons",
          "wordGroup": "group_825",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 3164,
          "word": "enlighten",
          "partOfSpeech": "v.",
          "chinese": "启发；开导；启迪",
          "example": "For all my effort to enlighten her, she was still all adrift",
          "wordGroup": "group_826",
          "colorIndex": 4
        },
        {
          "id": 3165,
          "word": "impart",
          "partOfSpeech": "v.",
          "chinese": "传授；透露",
          "example": "She imparted the secret to her boyfriend",
          "wordGroup": "group_826",
          "colorIndex": 4
        },
        {
          "id": 3166,
          "word": "deserve",
          "partOfSpeech": "v.",
          "chinese": "应得；应受",
          "example": "You deserve a reward for being so helpful",
          "wordGroup": "group_826",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 3167,
          "word": "drop",
          "partOfSpeech": "v./n.",
          "chinese": "（使）落下；（使）降低；断绝关系/滴",
          "example": "In the winter, the temperature often drops below freezing",
          "wordGroup": "group_827",
          "colorIndex": 5
        },
        {
          "id": 3168,
          "word": "sink",
          "partOfSpeech": "v.",
          "chinese": "（使）下沉；下降",
          "example": "The captain of the sinking ship used flares to attract the attention of the coast guard",
          "wordGroup": "group_827",
          "colorIndex": 5
        },
        {
          "id": 3169,
          "word": "plummet",
          "partOfSpeech": "v.",
          "chinese": "垂直掉下；（价格、水平等）骤然下跌",
          "example": "The damaged aircraft plummeted down to earth",
          "wordGroup": "group_827",
          "colorIndex": 5
        },
        {
          "id": 3170,
          "word": "muffle",
          "partOfSpeech": "v.",
          "chinese": "使（声音）减弱",
          "example": "The sound of the bell was muffled by the curtains",
          "wordGroup": "group_827",
          "colorIndex": 5
        },
        {
          "id": 3171,
          "word": "overshadow",
          "partOfSpeech": "v.",
          "chinese": "隐蔽；使黯然失色",
          "example": "He overshadowed all his competitors",
          "wordGroup": "group_827",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 3172,
          "word": "invite",
          "partOfSpeech": "v.",
          "chinese": "邀请",
          "example": "She invited us to her party",
          "wordGroup": "group_828",
          "colorIndex": 0
        },
        {
          "id": 3173,
          "word": "welcome",
          "partOfSpeech": "int./n./v.",
          "chinese": "欢迎",
          "example": "We welcome constructive criticism",
          "wordGroup": "group_828",
          "colorIndex": 0
        },
        {
          "id": 3174,
          "word": "greet",
          "partOfSpeech": "v.",
          "chinese": "向...问好；迎接；对...做出反应",
          "example": "The audiences greeted his speech with a great cheer",
          "wordGroup": "group_828",
          "colorIndex": 0
        },
        {
          "id": 3175,
          "word": "salute",
          "partOfSpeech": "v./n.",
          "chinese": "（向...）行礼；致敬/行礼；致敬",
          "example": "They saluted each other by raising their hats",
          "wordGroup": "group_828",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 3176,
          "word": "celebrate",
          "partOfSpeech": "v.",
          "chinese": "庆祝（节日、事件等）",
          "example": "They all passed the exam and celebrated with a party",
          "wordGroup": "group_829",
          "colorIndex": 1
        },
        {
          "id": 3177,
          "word": "congratulate",
          "partOfSpeech": "v.",
          "chinese": "祝贺；向...道贺",
          "example": "My must congratulate you on your engagement",
          "wordGroup": "group_829",
          "colorIndex": 1
        },
        {
          "id": 3178,
          "word": "bless",
          "partOfSpeech": "v.",
          "chinese": "祝福；为...祈求上帝保佑",
          "example": "It is more blessed to give than to receive",
          "wordGroup": "group_829",
          "colorIndex": 1
        },
        {
          "id": 3179,
          "word": "participate",
          "partOfSpeech": "v.",
          "chinese": "参加；参与",
          "example": "If only I could participate in your good fortune",
          "wordGroup": "group_829",
          "colorIndex": 1
        },
        {
          "id": 3180,
          "word": "farewell",
          "partOfSpeech": "int./n.",
          "chinese": "再会/告别",
          "example": "The girl had come on the pretext of bidding him farewell",
          "wordGroup": "group_829",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 3181,
          "word": "assort",
          "partOfSpeech": "v.",
          "chinese": "把...分类；相配，协调",
          "example": "His actions do not assort with his promises",
          "wordGroup": "group_830",
          "colorIndex": 2
        },
        {
          "id": 3182,
          "word": "correspond",
          "partOfSpeech": "v.",
          "chinese": "符合；相一致；通信",
          "example": "These goods don't correspond with my order",
          "wordGroup": "group_830",
          "colorIndex": 2
        },
        {
          "id": 3183,
          "word": "accord",
          "partOfSpeech": "v./n.",
          "chinese": "与...一致；给予/协议",
          "example": "The government and the rebels are in accord on one point",
          "wordGroup": "group_830",
          "colorIndex": 2
        },
        {
          "id": 3184,
          "word": "attribute",
          "partOfSpeech": "v./n.",
          "chinese": "把...归因于/属性，特性",
          "example": "David attributed his company success to the unity of the staff and their persevering hard word",
          "wordGroup": "group_830",
          "colorIndex": 2
        }
      ],
      [
        {
          "id": 3185,
          "word": "recall",
          "partOfSpeech": "v.",
          "chinese": "回忆，回想起",
          "example": "Recall the misery of the past and contrast it with the happiness of today",
          "wordGroup": "group_831",
          "colorIndex": 3
        },
        {
          "id": 3186,
          "word": "recollect",
          "partOfSpeech": "v.",
          "chinese": "记忆，想起",
          "example": "I can recollect hearing his speech",
          "wordGroup": "group_831",
          "colorIndex": 3
        },
        {
          "id": 3187,
          "word": "remind",
          "partOfSpeech": "v.",
          "chinese": "提醒；使想起",
          "example": "This photos remind me of my childhood",
          "wordGroup": "group_831",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 3188,
          "word": "retell",
          "partOfSpeech": "v.",
          "chinese": "重新讲述；复述",
          "example": "The student was asked to retell the story in his own words",
          "wordGroup": "group_832",
          "colorIndex": 4
        },
        {
          "id": 3189,
          "word": "repeat",
          "partOfSpeech": "v./adj.",
          "chinese": "重复/再次光顾的",
          "example": "A large proportion of our bookings come from repeat business and personal recommendation",
          "wordGroup": "group_832",
          "colorIndex": 4
        },
        {
          "id": 3190,
          "word": "retrospect",
          "partOfSpeech": "n.",
          "chinese": "[in ~]回顾",
          "example": "It was in retrospect the happiest day of her life",
          "wordGroup": "group_832",
          "colorIndex": 4
        },
        {
          "id": 3191,
          "word": "impress",
          "partOfSpeech": "v.",
          "chinese": "给...深刻的印象；使铭记",
          "example": "His courage and determination impressed his rivals",
          "wordGroup": "group_832",
          "colorIndex": 4
        }
      ],
      [
        {
          "id": 3192,
          "word": "surmount",
          "partOfSpeech": "v.",
          "chinese": "克服；置于...的顶端",
          "example": "The hill is surmounted by a church",
          "wordGroup": "group_833",
          "colorIndex": 5
        },
        {
          "id": 3193,
          "word": "mortify",
          "partOfSpeech": "v.",
          "chinese": "使难堪；使羞愧",
          "example": "He was mortified by his inability to answer the question",
          "wordGroup": "group_833",
          "colorIndex": 5
        },
        {
          "id": 3194,
          "word": "pervade",
          "partOfSpeech": "v.",
          "chinese": "弥漫；渗透；遍及",
          "example": "The smell of cooking pervaded the entire house",
          "wordGroup": "group_833",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 3195,
          "word": "replace",
          "partOfSpeech": "v.",
          "chinese": "代替；取代",
          "example": "We'll get someone or other to replace him",
          "wordGroup": "group_834",
          "colorIndex": 0
        },
        {
          "id": 3196,
          "word": "substitute",
          "partOfSpeech": "v./n.",
          "chinese": "替换/替代品，替补",
          "example": "We recommended this brand as a substitute",
          "wordGroup": "group_834",
          "colorIndex": 0
        },
        {
          "id": 3197,
          "word": "distinguish",
          "partOfSpeech": "v.",
          "chinese": "区别，辨别；使出众；使著名",
          "example": "Some people cannot distinguished between some colors",
          "wordGroup": "group_834",
          "colorIndex": 0
        },
        {
          "id": 3198,
          "word": "differentiate",
          "partOfSpeech": "v.",
          "chinese": "区分；区别；差别对待",
          "example": "This company does not differentiate between men and women. They employ and pay both equally",
          "wordGroup": "group_834",
          "colorIndex": 0
        }
      ],
      [
        {
          "id": 3199,
          "word": "incline",
          "partOfSpeech": "v./n.",
          "chinese": "（使）倾向于、倾斜/斜坡；倾斜",
          "example": "What he said inclines me to think that he will agree to our plan",
          "wordGroup": "group_835",
          "colorIndex": 1
        },
        {
          "id": 3200,
          "word": "lean",
          "partOfSpeech": "v./adj.",
          "chinese": "（使）倚靠；倾斜/瘦的；贫乏的",
          "example": "She leaned against his shoulder",
          "wordGroup": "group_835",
          "colorIndex": 1
        },
        {
          "id": 3201,
          "word": "sideways",
          "partOfSpeech": "adv.",
          "chinese": "向（或从、往）一侧",
          "example": "The dog swatted the hedgehog sideways",
          "wordGroup": "group_835",
          "colorIndex": 1
        }
      ]
    ]
  },
  {
    "title": "身心健康",
    "groups": [
      [
        {
          "id": 3202,
          "word": "feel",
          "partOfSpeech": "v.",
          "chinese": "感觉到，感知；触碰",
          "example": "Can you feel the tension in this room?",
          "wordGroup": "group_835",
          "colorIndex": 1
        }
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [
        {
          "id": 3203,
          "word": "lip",
          "partOfSpeech": "n.",
          "chinese": "嘴唇；（洞口、伤口等的）边缘",
          "example": "",
          "wordGroup": "group_843",
          "colorIndex": 3
        }
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [
        {
          "id": 3204,
          "word": "heel",
          "partOfSpeech": "n.",
          "chinese": "足跟",
          "example": "",
          "wordGroup": "group_851",
          "colorIndex": 5
        }
      ],
      [],
      [
        {
          "id": 3205,
          "word": "stimulus",
          "partOfSpeech": "n.",
          "chinese": "刺激物；促进因素",
          "example": "",
          "wordGroup": "group_853",
          "colorIndex": 1
        }
      ],
      [
        {
          "id": 3206,
          "word": "biorhythm",
          "partOfSpeech": "n.",
          "chinese": "生物节律",
          "example": "",
          "wordGroup": "group_854",
          "colorIndex": 2
        }
      ],
      [],
      [],
      [
        {
          "id": 3207,
          "word": "dumb",
          "partOfSpeech": "adj.",
          "chinese": "哑的；不肯开口的",
          "example": "",
          "wordGroup": "group_857",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 3208,
          "word": "doze",
          "partOfSpeech": "v.",
          "chinese": "小睡；打盹儿",
          "example": "",
          "wordGroup": "group_858",
          "colorIndex": 0
        }
      ],
      [],
      [
        {
          "id": 3209,
          "word": "born",
          "partOfSpeech": "adj./v.",
          "chinese": "天生的；与生俱来的/[be ~]出生",
          "example": "",
          "wordGroup": "group_860",
          "colorIndex": 2
        }
      ],
      [],
      [],
      [],
      [],
      [
        {
          "id": 3210,
          "word": "insane",
          "partOfSpeech": "adj.",
          "chinese": "患精神病的；疯狂的",
          "example": "His must insane to drive his car so fast",
          "wordGroup": "group_865",
          "colorIndex": 1
        }
      ],
      [],
      [
        {
          "id": 3211,
          "word": "plague",
          "partOfSpeech": "n.",
          "chinese": "瘟疫",
          "example": "Plague came in the wake of earthquake",
          "wordGroup": "group_867",
          "colorIndex": 3
        }
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [
        {
          "id": 3212,
          "word": "delicate",
          "partOfSpeech": "adj.",
          "chinese": "精致的；微妙的；脆弱的",
          "example": "Delicate plants must be protected from cold wind and frost",
          "wordGroup": "group_910",
          "colorIndex": 4
        }
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [
        {
          "id": 3213,
          "word": "fancy",
          "partOfSpeech": "n./v.",
          "chinese": "想象（力）；爱好/认为；想象",
          "example": "",
          "wordGroup": "group_917",
          "colorIndex": 5
        }
      ],
      [],
      [],
      [],
      [],
      [],
      [
        {
          "id": 3214,
          "word": "rage",
          "partOfSpeech": "n.",
          "chinese": "盛怒；狂怒",
          "example": "My father was in a rage last night",
          "wordGroup": "group_923",
          "colorIndex": 5
        },
        {
          "id": 3215,
          "word": "hatred",
          "partOfSpeech": "n.",
          "chinese": "憎恶；憎恨；仇恨",
          "example": "His words stirred up my hatred. 他的话激起了我的仇恨",
          "wordGroup": "group_923",
          "colorIndex": 5
        }
      ],
      [
        {
          "id": 3216,
          "word": "nuisance",
          "partOfSpeech": "n.",
          "chinese": "讨厌或麻烦的人或物",
          "example": "",
          "wordGroup": "group_924",
          "colorIndex": 0
        },
        {
          "id": 3217,
          "word": "vex",
          "partOfSpeech": "v.",
          "chinese": "使烦恼；使恼火",
          "example": "She was vexed at her failure. 她因失败而恼火",
          "wordGroup": "group_924",
          "colorIndex": 0
        }
      ]
    ]
  },
  {
    "title": "时间日期",
    "groups": [
      [],
      [],
      [
        {
          "id": 3218,
          "word": "contemporary",
          "partOfSpeech": "adj.",
          "chinese": "当代的；同时代的",
          "example": "These clothes are more contemporary and wearable",
          "wordGroup": "group_946",
          "colorIndex": 4
        }
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [
        {
          "id": 3219,
          "word": "precedent",
          "partOfSpeech": "n.",
          "chinese": "先例；常规",
          "example": "They were determined to break with precedent",
          "wordGroup": "group_954",
          "colorIndex": 0
        }
      ],
      [],
      [],
      [
        {
          "id": 3220,
          "word": "everlasting",
          "partOfSpeech": "adj.",
          "chinese": "永恒的",
          "example": "The man told the women that he loved her with an everlasting love",
          "wordGroup": "group_957",
          "colorIndex": 3
        }
      ],
      [
        {
          "id": 3221,
          "word": "periodically",
          "partOfSpeech": "adv.",
          "chinese": "周期性地；定期地",
          "example": "Sea mammals must emerge periodically to breath",
          "wordGroup": "group_958",
          "colorIndex": 4
        },
        {
          "id": 3222,
          "word": "imminent",
          "partOfSpeech": "adj.",
          "chinese": "（尤指不愉快的事）即将发生的；逼近的",
          "example": "They are unaware of the imminent danger.",
          "wordGroup": "group_958",
          "colorIndex": 4
        },
        {
          "id": 3223,
          "word": "incidentally",
          "partOfSpeech": "adv.",
          "chinese": "偶然地；顺便提一句",
          "example": "Incidentally, here's good news for you",
          "wordGroup": "group_958",
          "colorIndex": 4
        }
      ]
    ]
  }
];
