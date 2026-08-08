// 从 https://syntheticphonics.com/the-english-alphabetic-code-with-audio/ 爬取
// English Alphabetic Code 音素代码表（Debbie Hepplewhite / Phonics International）
// 音频与图片已本地化到 /phonics/audio /phonics/img。

export interface GraphemeCell {
  /** 拼写替代（- 前缀/后缀表示位置占位） */
  g: string
  /** 拼写中不发音的字母（silent） */
  silent: string[]
  /** 例词 */
  ex: string
  /** 例词中该拼写对应的字母 */
  hl: string[]
  /** 例词配图 */
  img: string | null
  /** 色块编码 */
  color: string | null
  /** 发音音频 */
  audio: string | null
}

export interface PhonemeRow {
  /** 音素（IPA 记法） */
  phoneme: string
  /** 音素本身的发音 */
  audio: string | null
  /** 该音素的所有拼写替代 */
  cells: GraphemeCell[]
}

export const PHONICS_ROWS: PhonemeRow[] = [
 {
  "phoneme": "/s/",
  "audio": "/phonics/audio/s.mp3",
  "cells": [
   {
    "g": "s",
    "silent": [],
    "ex": "snake",
    "hl": [
     "s"
    ],
    "img": "/phonics/img/snake.png",
    "color": "#94dbce",
    "audio": "/phonics/audio/s_asin_snake.mp3"
   },
   {
    "g": "-ce",
    "silent": [],
    "ex": "palace",
    "hl": [
     "ce"
    ],
    "img": "/phonics/img/palace.jpg",
    "color": "#4a64b7",
    "audio": "/phonics/audio/s_asin_palace.mp3"
   },
   {
    "g": "ce",
    "silent": [
     "e"
    ],
    "ex": "cents",
    "hl": [
     "c"
    ],
    "img": "/phonics/img/cents.png",
    "color": "#e7b09c",
    "audio": "/phonics/audio/s_asin_cents.mp3"
   },
   {
    "g": "ci",
    "silent": [
     "i"
    ],
    "ex": "city",
    "hl": [
     "c"
    ],
    "img": "/phonics/img/city.png",
    "color": "#e7b09c",
    "audio": "/phonics/audio/s_asin_city.mp3"
   },
   {
    "g": "cy",
    "silent": [
     "y"
    ],
    "ex": "bicycle",
    "hl": [
     "c"
    ],
    "img": "/phonics/img/bicycle.jpg",
    "color": "#e7b09c",
    "audio": "/phonics/audio/s_asin_bicycle.mp3"
   },
   {
    "g": "sc e i y",
    "silent": [
     " e i y"
    ],
    "ex": "scissors",
    "hl": [],
    "img": "/phonics/img/scissors_col450.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/s_asin_scissors.mp3"
   },
   {
    "g": "-ss",
    "silent": [],
    "ex": "glass",
    "hl": [
     "ss"
    ],
    "img": "/phonics/img/glass.png",
    "color": "#c6e670",
    "audio": "/phonics/audio/s_asin_glass.mp3"
   },
   {
    "g": "-se",
    "silent": [],
    "ex": "house",
    "hl": [
     "se"
    ],
    "img": "/phonics/img/house.jpg",
    "color": "#4a64b7",
    "audio": "/phonics/audio/s_asin_house.mp3"
   },
   {
    "g": "-st-",
    "silent": [],
    "ex": "castle",
    "hl": [
     "st"
    ],
    "img": "/phonics/img/castle_col460.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/s_asin_castle.mp3"
   },
   {
    "g": "ps",
    "silent": [],
    "ex": "pseudonym",
    "hl": [
     "ps"
    ],
    "img": "/phonics/img/pseudonym_col480-Copy.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/s_asin_pseudonym.mp3"
   }
  ]
 },
 {
  "phoneme": "/a/",
  "audio": "/phonics/audio/a.mp3",
  "cells": [
   {
    "g": "a",
    "silent": [],
    "ex": "apple",
    "hl": [
     "a"
    ],
    "img": "/phonics/img/apple.png",
    "color": "#94dbce",
    "audio": "/phonics/audio/a_asin_apple.mp3"
   }
  ]
 },
 {
  "phoneme": "/t/",
  "audio": "/phonics/audio/t.mp3",
  "cells": [
   {
    "g": "t",
    "silent": [],
    "ex": "teddy",
    "hl": [
     "t"
    ],
    "img": "/phonics/img/teddy.png",
    "color": "#94dbce",
    "audio": "/phonics/audio/t_asin_teddy.mp3"
   },
   {
    "g": "-tt",
    "silent": [],
    "ex": "letter",
    "hl": [
     "tt"
    ],
    "img": "/phonics/img/letter_col_big.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/t_asin_letter.mp3"
   },
   {
    "g": "-ed",
    "silent": [],
    "ex": "ripped",
    "hl": [
     "ed"
    ],
    "img": "/phonics/img/rip.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/t_asin_ripped.mp3"
   },
   {
    "g": "-bt",
    "silent": [],
    "ex": "debt",
    "hl": [
     "bt"
    ],
    "img": "/phonics/img/money_wallet_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/t_asin_debt.mp3"
   },
   {
    "g": "pt",
    "silent": [],
    "ex": "pterodactyl",
    "hl": [
     "pt"
    ],
    "img": "/phonics/img/pterodactyl.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/t_asin_pterodactyl.mp3"
   }
  ]
 },
 {
  "phoneme": "/i/",
  "audio": "/phonics/audio/i.mp3",
  "cells": [
   {
    "g": "i",
    "silent": [],
    "ex": "insect",
    "hl": [
     "i"
    ],
    "img": "/phonics/img/insect.png",
    "color": "#94dbce",
    "audio": "/phonics/audio/i_asin_insect.mp3"
   },
   {
    "g": "-y",
    "silent": [],
    "ex": "cymbals",
    "hl": [
     "y"
    ],
    "img": "/phonics/img/cymbals.png",
    "color": "#ffffff",
    "audio": "/phonics/audio/i_asin_cymbals.mp3"
   }
  ]
 },
 {
  "phoneme": "/p/",
  "audio": "/phonics/audio/p.mp3",
  "cells": [
   {
    "g": "p",
    "silent": [],
    "ex": "pan",
    "hl": [
     "p"
    ],
    "img": "/phonics/img/pan.png",
    "color": "#94dbce",
    "audio": "/phonics/audio/p_asin_pan.mp3"
   },
   {
    "g": "-pp",
    "silent": [],
    "ex": "puppet",
    "hl": [
     "pp"
    ],
    "img": "/phonics/img/puppet_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/p_asin_puppet.mp3"
   }
  ]
 },
 {
  "phoneme": "/n/",
  "audio": "/phonics/audio/n.mp3",
  "cells": [
   {
    "g": "n",
    "silent": [],
    "ex": "net",
    "hl": [
     "n"
    ],
    "img": "/phonics/img/net.png",
    "color": "#94dbce",
    "audio": "/phonics/audio/n_asin_net.mp3"
   },
   {
    "g": "-nn",
    "silent": [],
    "ex": "bonnet",
    "hl": [
     "nn"
    ],
    "img": "/phonics/img/bonnet_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/n_asin_bonnet.mp3"
   },
   {
    "g": "kn",
    "silent": [],
    "ex": "knot",
    "hl": [
     "kn"
    ],
    "img": "/phonics/img/knot_col.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/n_asin_knot.mp3"
   },
   {
    "g": "gn",
    "silent": [],
    "ex": "gnome",
    "hl": [
     "gn"
    ],
    "img": "/phonics/img/gnome_col460.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/n_asin_gnome.mp3"
   },
   {
    "g": "-ne",
    "silent": [],
    "ex": "engine",
    "hl": [
     "ne"
    ],
    "img": "/phonics/img/engine_col480-Copy.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/n_asin_engine.mp3"
   }
  ]
 },
 {
  "phoneme": "/k/",
  "audio": "/phonics/audio/k.mp3",
  "cells": [
   {
    "g": "c",
    "silent": [],
    "ex": "cat",
    "hl": [
     "c"
    ],
    "img": "/phonics/img/cat.jpg",
    "color": "#94dbce",
    "audio": "/phonics/audio/k_asin_cat.mp3"
   },
   {
    "g": "k",
    "silent": [],
    "ex": "kit",
    "hl": [
     "k"
    ],
    "img": "/phonics/img/kit.png",
    "color": "#94dbce",
    "audio": "/phonics/audio/k_asin_kit.mp3"
   },
   {
    "g": "-ck",
    "silent": [],
    "ex": "duck",
    "hl": [
     "ck"
    ],
    "img": "/phonics/img/duck.jpg",
    "color": "#94dbce",
    "audio": "/phonics/audio/k_asin_duck.mp3"
   },
   {
    "g": "ch",
    "silent": [],
    "ex": "chameleon",
    "hl": [
     "ch"
    ],
    "img": "/phonics/img/chameleon_col450.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/k_asin_chameleon.mp3"
   },
   {
    "g": "qu",
    "silent": [],
    "ex": "bouquet",
    "hl": [
     "qu"
    ],
    "img": "/phonics/img/bouquet_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/k_asin_bouquet.mp3"
   },
   {
    "g": "que",
    "silent": [],
    "ex": "plaque",
    "hl": [
     "que"
    ],
    "img": "/phonics/img/plaque_col480.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/k_asin_plaque.mp3"
   }
  ]
 },
 {
  "phoneme": "/e/",
  "audio": "/phonics/audio/e.mp3",
  "cells": [
   {
    "g": "e",
    "silent": [],
    "ex": "egg",
    "hl": [
     "e"
    ],
    "img": "/phonics/img/egg.jpg",
    "color": "#94dbce",
    "audio": "/phonics/audio/e_asin_egg.mp3"
   },
   {
    "g": "-ea",
    "silent": [],
    "ex": "head",
    "hl": [
     "ea"
    ],
    "img": "/phonics/img/head.jpg",
    "color": "#d1c0cc",
    "audio": "/phonics/audio/e_asin_head.mp3"
   },
   {
    "g": "-ai",
    "silent": [],
    "ex": "said again against",
    "hl": [
     "ai",
     "ai",
     "ai"
    ],
    "img": "/phonics/img/said_again.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/e_asin_said_again_against.mp3"
   },
   {
    "g": "a",
    "silent": [],
    "ex": "any many",
    "hl": [
     "a",
     "a"
    ],
    "img": "/phonics/img/many.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/e_asin_any_many.mp3"
   }
  ]
 },
 {
  "phoneme": "/h/",
  "audio": "/phonics/audio/h.mp3",
  "cells": [
   {
    "g": "h",
    "silent": [],
    "ex": "hat",
    "hl": [
     "h"
    ],
    "img": "/phonics/img/hat.jpg",
    "color": "#94dbce",
    "audio": "/phonics/audio/h_asin_hat.mp3"
   },
   {
    "g": "wh",
    "silent": [],
    "ex": "who",
    "hl": [
     "wh"
    ],
    "img": "/phonics/img/7.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/h_asin_who.mp3"
   }
  ]
 },
 {
  "phoneme": "/r/",
  "audio": "/phonics/audio/r.mp3",
  "cells": [
   {
    "g": "r",
    "silent": [],
    "ex": "rat",
    "hl": [
     "r"
    ],
    "img": "/phonics/img/rat.jpg",
    "color": "#94dbce",
    "audio": "/phonics/audio/r_asin_rat.mp3"
   },
   {
    "g": "-rr",
    "silent": [],
    "ex": "arrow",
    "hl": [
     "rr"
    ],
    "img": "/phonics/img/arrow_col_big.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/r_asin_arrow.mp3"
   },
   {
    "g": "wr",
    "silent": [],
    "ex": "write",
    "hl": [
     "wr"
    ],
    "img": "/phonics/img/write_col450.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/r_asin_write.mp3"
   },
   {
    "g": "rh",
    "silent": [],
    "ex": "rhinoceros",
    "hl": [
     "rh"
    ],
    "img": "/phonics/img/rhinoceros_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/r_asin_rhinoceros.mp3"
   }
  ]
 },
 {
  "phoneme": "/m/",
  "audio": "/phonics/audio/m.mp3",
  "cells": [
   {
    "g": "m",
    "silent": [],
    "ex": "map",
    "hl": [
     "m"
    ],
    "img": "/phonics/img/map.jpg",
    "color": "#cce189",
    "audio": "/phonics/audio/m_asin_map.mp3"
   },
   {
    "g": "-mm",
    "silent": [],
    "ex": "hammer",
    "hl": [
     "mm"
    ],
    "img": "/phonics/img/hammer_col_big.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/m_asin_hammer.mp3"
   },
   {
    "g": "-me",
    "silent": [],
    "ex": "welcome",
    "hl": [
     "me"
    ],
    "img": "/phonics/img/welcome.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/m_asin_welcome.mp3"
   },
   {
    "g": "-mb",
    "silent": [],
    "ex": "thumb",
    "hl": [
     "mb"
    ],
    "img": "/phonics/img/thumb_col.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/m_asin_thumb.mp3"
   },
   {
    "g": "-mn",
    "silent": [],
    "ex": "columns",
    "hl": [
     "mn"
    ],
    "img": "/phonics/img/columns_col-Copy.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/m_asin_columns.mp3"
   }
  ]
 },
 {
  "phoneme": "/d/",
  "audio": "/phonics/audio/d.mp3",
  "cells": [
   {
    "g": "d",
    "silent": [],
    "ex": "dig",
    "hl": [
     "d"
    ],
    "img": "/phonics/img/dig_spade_col-2.jpg",
    "color": "#cce189",
    "audio": "/phonics/audio/d_asin_dig.mp3"
   },
   {
    "g": "-dd",
    "silent": [],
    "ex": "puddle",
    "hl": [
     "dd"
    ],
    "img": "/phonics/img/muddy_puddle_big.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/d_asin_puddle.mp3"
   },
   {
    "g": "-ed",
    "silent": [],
    "ex": "rained",
    "hl": [
     "ed"
    ],
    "img": "/phonics/img/rain450.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/d_asin_rained.mp3"
   }
  ]
 },
 {
  "phoneme": "/g/",
  "audio": "/phonics/audio/g-1.mp3",
  "cells": [
   {
    "g": "g",
    "silent": [],
    "ex": "girl",
    "hl": [
     "g"
    ],
    "img": "/phonics/img/girl.jpg",
    "color": "#cce189",
    "audio": "/phonics/audio/g_asin_girl-1.mp3"
   },
   {
    "g": "-gg",
    "silent": [],
    "ex": "juggle",
    "hl": [
     "gg"
    ],
    "img": "/phonics/img/juggle_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/g_asin_juggle-1.mp3"
   },
   {
    "g": "gu",
    "silent": [],
    "ex": "guitar",
    "hl": [
     "gu"
    ],
    "img": "/phonics/img/guitar_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/g_asin_guitar-1.mp3"
   },
   {
    "g": "gh",
    "silent": [],
    "ex": "gherkin",
    "hl": [
     "gh"
    ],
    "img": "/phonics/img/Gherkin.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/g_asin_gherkin-1.mp3"
   },
   {
    "g": "-gue",
    "silent": [],
    "ex": "catalogue",
    "hl": [
     "gue"
    ],
    "img": "/phonics/img/catalogue_col-Copy.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/g_asin_catalogue-1.mp3"
   }
  ]
 },
 {
  "phoneme": "/o/",
  "audio": "/phonics/audio/o.mp3",
  "cells": [
   {
    "g": "o",
    "silent": [],
    "ex": "octopus",
    "hl": [
     "o"
    ],
    "img": "/phonics/img/octopus.png",
    "color": "#cce189",
    "audio": "/phonics/audio/o_asin_octopus.mp3"
   },
   {
    "g": "wa",
    "silent": [
     "w"
    ],
    "ex": "was watch",
    "hl": [
     "a",
     "a"
    ],
    "img": "/phonics/img/wa_watch.png",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/o_asin_was_watch.mp3"
   },
   {
    "g": "qua",
    "silent": [
     "qu"
    ],
    "ex": "qualify",
    "hl": [
     "a"
    ],
    "img": "/phonics/img/qualify_col.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/o_asin_qualify.mp3"
   },
   {
    "g": "alt",
    "silent": [
     "lt"
    ],
    "ex": "salt",
    "hl": [
     "a"
    ],
    "img": "/phonics/img/salt.png",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/o_asin_salt.mp3"
   }
  ]
 },
 {
  "phoneme": "/u/",
  "audio": "/phonics/audio/u.mp3",
  "cells": [
   {
    "g": "u",
    "silent": [],
    "ex": "umbrella",
    "hl": [
     "u"
    ],
    "img": "/phonics/img/umbrella.jpg",
    "color": "#cce189",
    "audio": "/phonics/audio/u_asin_umbrella.mp3"
   },
   {
    "g": "o",
    "silent": [],
    "ex": "son",
    "hl": [
     "o"
    ],
    "img": "/phonics/img/son_new.jpg",
    "color": "#2aa458",
    "audio": "/phonics/audio/u_asin_sun.mp3"
   },
   {
    "g": "-ou",
    "silent": [],
    "ex": "touch",
    "hl": [
     "ou"
    ],
    "img": "/phonics/img/touch_col.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/u_asin_touch.mp3"
   },
   {
    "g": "-ough",
    "silent": [],
    "ex": "thoroughfare",
    "hl": [
     "ough"
    ],
    "img": "/phonics/img/thoroughfare_col480.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/u_asin_thoroughfare.mp3"
   }
  ]
 },
 {
  "phoneme": "/l/",
  "audio": "/phonics/audio/l_01.mp3",
  "cells": [
   {
    "g": "l",
    "silent": [],
    "ex": "ladder",
    "hl": [
     "l"
    ],
    "img": "/phonics/img/ladder.jpg",
    "color": "#cce189",
    "audio": "/phonics/audio/l_asin_ladder.mp3"
   },
   {
    "g": "-ll",
    "silent": [],
    "ex": "shell",
    "hl": [
     "ll"
    ],
    "img": "/phonics/img/shell.jpg",
    "color": "#cce189",
    "audio": "/phonics/audio/l_asin_shell.mp3"
   }
  ]
 },
 {
  "phoneme": "/ul/",
  "audio": "/phonics/audio/ul_01_01.mp3",
  "cells": [
   {
    "g": "-le",
    "silent": [],
    "ex": "kettle",
    "hl": [
     "le"
    ],
    "img": "/phonics/img/kettle.jpg",
    "color": "#2aa458",
    "audio": "/phonics/audio/ul_asin_kettle.mp3"
   },
   {
    "g": "-il",
    "silent": [],
    "ex": "pencil",
    "hl": [
     "il"
    ],
    "img": "/phonics/img/pencil_col.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/ul_asin_pencil.mp3"
   },
   {
    "g": "-al",
    "silent": [],
    "ex": "hospital",
    "hl": [
     "al"
    ],
    "img": "/phonics/img/hospital_col.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/ul_asin_hospital.mp3"
   },
   {
    "g": "-el",
    "silent": [],
    "ex": "camel",
    "hl": [
     "el"
    ],
    "img": "/phonics/img/camel_col.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/ul_asin_camel.mp3"
   }
  ]
 },
 {
  "phoneme": "/f/",
  "audio": "/phonics/audio/f_01.mp3",
  "cells": [
   {
    "g": "f",
    "silent": [],
    "ex": "feathers",
    "hl": [
     "f"
    ],
    "img": "/phonics/img/feathers.jpg",
    "color": "#cce189",
    "audio": "/phonics/audio/f_asin_feathers.mp3"
   },
   {
    "g": "-ff",
    "silent": [],
    "ex": "cliff",
    "hl": [
     "ff"
    ],
    "img": "/phonics/img/cliff.jpg",
    "color": "#cce189",
    "audio": "/phonics/audio/f_asin_cliff.mp3"
   },
   {
    "g": "ph",
    "silent": [],
    "ex": "photograph",
    "hl": [
     "ph"
    ],
    "img": "/phonics/img/photograph_col.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/f_asin_photograph.mp3"
   },
   {
    "g": "-gh",
    "silent": [],
    "ex": "laugh",
    "hl": [
     "gh"
    ],
    "img": "/phonics/img/laugh_col.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/f_asin_laugh.mp3"
   }
  ]
 },
 {
  "phoneme": "/b/",
  "audio": "/phonics/audio/b_01.mp3",
  "cells": [
   {
    "g": "b",
    "silent": [],
    "ex": "bat",
    "hl": [
     "b"
    ],
    "img": "/phonics/img/bat.jpg",
    "color": "#cce189",
    "audio": "/phonics/audio/b_asin_bat.mp3"
   },
   {
    "g": "-bb",
    "silent": [],
    "ex": "rabbit",
    "hl": [
     "bb"
    ],
    "img": "/phonics/img/rabbit_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/b_asin_rabbit.mp3"
   },
   {
    "g": "bu",
    "silent": [],
    "ex": "building",
    "hl": [
     "bu"
    ],
    "img": "/phonics/img/98_the_builder_and_the_buyer.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/b_asin_building.mp3"
   }
  ]
 },
 {
  "phoneme": "/j/",
  "audio": "/phonics/audio/j_01.mp3",
  "cells": [
   {
    "g": "j",
    "silent": [],
    "ex": "jug",
    "hl": [
     "j"
    ],
    "img": "/phonics/img/jug.jpg",
    "color": "#cce189",
    "audio": "/phonics/audio/j_j_asin_jug.mp3"
   },
   {
    "g": "-ge",
    "silent": [],
    "ex": "cabbage",
    "hl": [
     "ge"
    ],
    "img": "/phonics/img/cabbage-1.jpg",
    "color": "#436bb2",
    "audio": "/phonics/audio/j_asin_cabbage.mp3"
   },
   {
    "g": "-dge",
    "silent": [],
    "ex": "fridge",
    "hl": [
     "dge"
    ],
    "img": "/phonics/img/fridge_col.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/j_asin_fridge.mp3"
   },
   {
    "g": "ge",
    "silent": [
     "e"
    ],
    "ex": "gerbil",
    "hl": [
     "g"
    ],
    "img": "/phonics/img/gerbil.png",
    "color": "#e7b09c",
    "audio": "/phonics/audio/j_asin_gerbil.mp3"
   },
   {
    "g": "gi",
    "silent": [
     "i"
    ],
    "ex": "giraffe",
    "hl": [
     "g"
    ],
    "img": "/phonics/img/giraffe.png",
    "color": "#e7b09c",
    "audio": "/phonics/audio/j_asin_giraffe.mp3"
   },
   {
    "g": "gy",
    "silent": [
     "y"
    ],
    "ex": "gymnast",
    "hl": [
     "g"
    ],
    "img": "/phonics/img/gymnast.png",
    "color": "#e7b09c",
    "audio": "/phonics/audio/j_asin_gymnast.mp3"
   }
  ]
 },
 {
  "phoneme": "/y/",
  "audio": "/phonics/audio/y_01.mp3",
  "cells": [
   {
    "g": "y",
    "silent": [],
    "ex": "yawn",
    "hl": [
     "y"
    ],
    "img": "/phonics/img/yawn.jpg",
    "color": "#cce189",
    "audio": "/phonics/audio/y_asin_yawn.mp3"
   }
  ]
 },
 {
  "phoneme": "/ai/",
  "audio": "/phonics/audio/ai_01.mp3",
  "cells": [
   {
    "g": "ai",
    "silent": [],
    "ex": "first aid",
    "hl": [
     "ai"
    ],
    "img": "/phonics/img/first_aid.png",
    "color": "#37a850",
    "audio": "/phonics/audio/ai_first_aid.mp3"
   },
   {
    "g": "-ay",
    "silent": [],
    "ex": "tray",
    "hl": [
     "ay"
    ],
    "img": "/phonics/img/tray.jpg",
    "color": "#37a850",
    "audio": "/phonics/audio/ai_asin_tray.mp3"
   },
   {
    "g": "a",
    "silent": [],
    "ex": "table",
    "hl": [
     "a"
    ],
    "img": "/phonics/img/table.png",
    "color": "#37a850",
    "audio": "/phonics/audio/ai_asin_table.mp3"
   },
   {
    "g": "a-e",
    "silent": [],
    "ex": "cake",
    "hl": [
     "a",
     "e"
    ],
    "img": "/phonics/img/cakes.jpg",
    "color": "#e7b09c",
    "audio": "/phonics/audio/ai_asin_cake.mp3"
   },
   {
    "g": "-ae",
    "silent": [],
    "ex": "sundae",
    "hl": [
     "ae"
    ],
    "img": "/phonics/img/sundae.png",
    "color": "#ffffff",
    "audio": "/phonics/audio/ai_asin_sundae.mp3"
   },
   {
    "g": "-aigh",
    "silent": [],
    "ex": "straight",
    "hl": [
     "aigh"
    ],
    "img": "/phonics/img/straight.png",
    "color": "#ffffff",
    "audio": "/phonics/audio/ai_asin_straight.mp3"
   },
   {
    "g": "-ey",
    "silent": [],
    "ex": "they osprey prey",
    "hl": [
     "ey",
     "ey",
     "ey"
    ],
    "img": "/phonics/img/prey_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ai_asin_prey.mp3"
   },
   {
    "g": "-ea",
    "silent": [],
    "ex": "break",
    "hl": [
     "ea"
    ],
    "img": "/phonics/img/break_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ai_asin_break.mp3"
   },
   {
    "g": "-et",
    "silent": [],
    "ex": "bouquet",
    "hl": [
     "et"
    ],
    "img": "/phonics/img/bouquet_col-1.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ai_asin_bouquet.mp3"
   },
   {
    "g": "eigh",
    "silent": [],
    "ex": "eight",
    "hl": [
     "eigh"
    ],
    "img": "/phonics/img/eight_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ai_asin_eight.mp3"
   }
  ]
 },
 {
  "phoneme": "/w/",
  "audio": "/phonics/audio/w_01.mp3",
  "cells": [
   {
    "g": "w",
    "silent": [],
    "ex": "web",
    "hl": [
     "w"
    ],
    "img": "/phonics/img/web.png",
    "color": "#37a850",
    "audio": "/phonics/audio/w_asin_web.mp3"
   },
   {
    "g": "wh",
    "silent": [],
    "ex": "wheel",
    "hl": [
     "wh"
    ],
    "img": "/phonics/img/wheel.jpg",
    "color": "#d4bccc",
    "audio": "/phonics/audio/w_asin_wheel.mp3"
   },
   {
    "g": "-u",
    "silent": [],
    "ex": "penguin",
    "hl": [
     "u"
    ],
    "img": "/phonics/img/penguin.png",
    "color": "#ffffff",
    "audio": "/phonics/audio/w_asin_penguin.mp3"
   }
  ]
 },
 {
  "phoneme": "/oa/",
  "audio": "/phonics/audio/oa_01.mp3",
  "cells": [
   {
    "g": "oa",
    "silent": [],
    "ex": "oak",
    "hl": [
     "oa"
    ],
    "img": "/phonics/img/oak.png",
    "color": "#37a850",
    "audio": "/phonics/audio/oa_asin_oak.mp3"
   },
   {
    "g": "ow",
    "silent": [],
    "ex": "bow",
    "hl": [
     "ow"
    ],
    "img": "/phonics/img/bow.jpg",
    "color": "#37a850",
    "audio": "/phonics/audio/oa_asin_bow.mp3"
   },
   {
    "g": "-oe",
    "silent": [],
    "ex": "oboe",
    "hl": [
     "oe"
    ],
    "img": "/phonics/img/oboe.jpg",
    "color": "#e7b09c",
    "audio": "/phonics/audio/oa_asin_oboe.mp3"
   },
   {
    "g": "o-e",
    "silent": [],
    "ex": "rope",
    "hl": [
     "o",
     "e"
    ],
    "img": "/phonics/img/rope.jpg",
    "color": "#e7b09c",
    "audio": "/phonics/audio/oa_asin_rope.mp3"
   },
   {
    "g": "o",
    "silent": [],
    "ex": "yo-yo",
    "hl": [
     "o"
    ],
    "img": "/phonics/img/yo-yo.jpg",
    "color": "#37a850",
    "audio": "/phonics/audio/oa_asin_yoyo.mp3"
   },
   {
    "g": "-ough",
    "silent": [],
    "ex": "dough",
    "hl": [
     "ough"
    ],
    "img": "/phonics/img/dough_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/oa_asin_dough.mp3"
   },
   {
    "g": "-eau",
    "silent": [],
    "ex": "plateau",
    "hl": [
     "eau"
    ],
    "img": "/phonics/img/plateau_col-Copy.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/oa_asin_plateau.mp3"
   },
   {
    "g": "-ou",
    "silent": [],
    "ex": "shoulder",
    "hl": [
     "ou"
    ],
    "img": "/phonics/img/shoulder_arrow.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/oa_asin_shoulder.mp3"
   }
  ]
 },
 {
  "phoneme": "/igh/",
  "audio": "/phonics/audio/igh_01.mp3",
  "cells": [
   {
    "g": "-ie",
    "silent": [],
    "ex": "tie",
    "hl": [
     "ie"
    ],
    "img": "/phonics/img/tie.jpg",
    "color": "#37a850",
    "audio": "/phonics/audio/igh_asin_tie.mp3"
   },
   {
    "g": "-igh",
    "silent": [],
    "ex": "night",
    "hl": [
     "igh"
    ],
    "img": "/phonics/img/night.jpg",
    "color": "#37a850",
    "audio": "/phonics/audio/igh_asin_night.mp3"
   },
   {
    "g": "i",
    "silent": [],
    "ex": "behind",
    "hl": [
     "i"
    ],
    "img": "/phonics/img/behind_col_big.jpg",
    "color": "#37a850",
    "audio": "/phonics/audio/igh_asin_behind.mp3"
   },
   {
    "g": "-y",
    "silent": [],
    "ex": "fly",
    "hl": [
     "y"
    ],
    "img": "/phonics/img/flying.jpg",
    "color": "#37a850",
    "audio": "/phonics/audio/igh_asin_fly.mp3"
   },
   {
    "g": "i-e",
    "silent": [],
    "ex": "bike",
    "hl": [
     "i",
     "e"
    ],
    "img": "/phonics/img/bike.jpg",
    "color": "#e7b09c",
    "audio": "/phonics/audio/igh_asin_bike.mp3"
   },
   {
    "g": "ei",
    "silent": [],
    "ex": "eider duck",
    "hl": [
     "ei"
    ],
    "img": "/phonics/img/eider_col490.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/igh_asin_eider_duck.mp3"
   }
  ]
 },
 {
  "phoneme": "/yoo/",
  "audio": "/phonics/audio/yoo_01.mp3",
  "cells": [
   {
    "g": "u",
    "silent": [],
    "ex": "unicorn",
    "hl": [
     "u"
    ],
    "img": "/phonics/img/unicorn_col.jpg",
    "color": "#37a850",
    "audio": "/phonics/audio/yoo_asin_unicorn.mp3"
   },
   {
    "g": "-ue",
    "silent": [],
    "ex": "statue",
    "hl": [
     "ue"
    ],
    "img": "/phonics/img/statue.jpg",
    "color": "#436bb2",
    "audio": "/phonics/audio/yoo_asin_statue.mp3"
   },
   {
    "g": "u-e",
    "silent": [],
    "ex": "tube",
    "hl": [
     "u",
     "e"
    ],
    "img": "/phonics/img/tube.jpg",
    "color": "#e7b09c",
    "audio": "/phonics/audio/yoo_asin_tube.mp3"
   },
   {
    "g": "ew",
    "silent": [],
    "ex": "new",
    "hl": [
     "ew"
    ],
    "img": "/phonics/img/new_col490.jpg",
    "color": "#1c8b8e",
    "audio": "/phonics/audio/yoo_asin_new.mp3"
   },
   {
    "g": "eu",
    "silent": [],
    "ex": "pneumatic drill",
    "hl": [
     "eu"
    ],
    "img": "/phonics/img/pneumatic_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/yoo_asin_pneumatic_drill.mp3"
   }
  ]
 },
 {
  "phoneme": "/ee/",
  "audio": "/phonics/audio/ee_01.mp3",
  "cells": [
   {
    "g": "e",
    "silent": [],
    "ex": "emu",
    "hl": [
     "e"
    ],
    "img": "/phonics/img/emu140.jpg",
    "color": "#37a850",
    "audio": "/phonics/audio/ee_asin_emu.mp3"
   },
   {
    "g": "ee",
    "silent": [],
    "ex": "eel",
    "hl": [
     "ee"
    ],
    "img": "/phonics/img/eel.jpg",
    "color": "#d1c0cc",
    "audio": "/phonics/audio/ee_asin_eel.mp3"
   },
   {
    "g": "e-e",
    "silent": [],
    "ex": "concrete",
    "hl": [
     "e",
     "e"
    ],
    "img": "/phonics/img/concrete.jpg",
    "color": "#e7b9a5",
    "audio": "/phonics/audio/ee_asin_concrete.mp3"
   },
   {
    "g": "-ey",
    "silent": [],
    "ex": "key",
    "hl": [
     "ey"
    ],
    "img": "/phonics/img/key.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/ee_asin_key.mp3"
   },
   {
    "g": "-ie",
    "silent": [],
    "ex": "briefcase",
    "hl": [
     "ie"
    ],
    "img": "/phonics/img/shadow_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/ee_asin_briefcase.mp3"
   },
   {
    "g": "-ine",
    "silent": [
     "ne"
    ],
    "ex": "sardines",
    "hl": [
     "i"
    ],
    "img": "/phonics/img/sardines_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/e_asin_sardines.mp3"
   },
   {
    "g": "ea",
    "silent": [],
    "ex": "eat",
    "hl": [
     "ea"
    ],
    "img": "/phonics/img/eat.jpg",
    "color": "#d1c0cc",
    "audio": "/phonics/audio/ee_asin_eat.mp3"
   },
   {
    "g": "-y",
    "silent": [],
    "ex": "sunny",
    "hl": [
     "y"
    ],
    "img": "/phonics/img/sunny.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/ee_asin_sunny.mp3"
   },
   {
    "g": "-ey",
    "silent": [],
    "ex": "monkey",
    "hl": [
     "ey"
    ],
    "img": "/phonics/img/monkey_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ee_asin_monkey.mp3"
   },
   {
    "g": "-ie",
    "silent": [],
    "ex": "movie",
    "hl": [
     "ie"
    ],
    "img": "/phonics/img/movie_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ee_asin_movie.mp3"
   }
  ]
 },
 {
  "phoneme": "/or/ or similar sound",
  "audio": "/phonics/audio/or_01.mp3",
  "cells": [
   {
    "g": "or",
    "silent": [],
    "ex": "fork",
    "hl": [
     "or"
    ],
    "img": "/phonics/img/fork.jpg",
    "color": "#d1c0cc",
    "audio": "/phonics/audio/or_asin_fork.mp3"
   },
   {
    "g": "ore",
    "silent": [],
    "ex": "snore",
    "hl": [
     "ore"
    ],
    "img": "/phonics/img/snore_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/or_asin_snore.mp3"
   },
   {
    "g": "-our",
    "silent": [],
    "ex": "four",
    "hl": [
     "our"
    ],
    "img": "/phonics/img/four_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/or_asin_four.mp3"
   },
   {
    "g": "-oor",
    "silent": [],
    "ex": "door",
    "hl": [
     "oor"
    ],
    "img": "/phonics/img/door_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/or_asin_door.mp3"
   },
   {
    "g": "oar",
    "silent": [],
    "ex": "oars",
    "hl": [
     "oar"
    ],
    "img": "/phonics/img/oars_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/or_asin_oars.mp3"
   },
   {
    "g": "war",
    "silent": [
     "w"
    ],
    "ex": "wardrobe",
    "hl": [
     "ar"
    ],
    "img": "/phonics/img/wardrobe_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/or_asin_wardrobe.mp3"
   },
   {
    "g": "aw",
    "silent": [],
    "ex": "dawn",
    "hl": [
     "aw"
    ],
    "img": "/phonics/img/dawn_col_450.jpg",
    "color": "#d1c0cc",
    "audio": "/phonics/audio/or_asin_dawn.mp3"
   },
   {
    "g": "au",
    "silent": [],
    "ex": "sauce",
    "hl": [
     "au"
    ],
    "img": "/phonics/img/sauce_col450.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/or_asin_sauce.mp3"
   },
   {
    "g": "-al",
    "silent": [],
    "ex": "chalk",
    "hl": [
     "al"
    ],
    "img": "/phonics/img/chalk_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/or_asin_chalk.mp3"
   },
   {
    "g": "augh",
    "silent": [],
    "ex": "caught",
    "hl": [
     "augh"
    ],
    "img": "/phonics/img/caught_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/or_asin_caught.mp3"
   },
   {
    "g": "ough",
    "silent": [],
    "ex": "thought",
    "hl": [
     "ough"
    ],
    "img": "/phonics/img/thought_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/or_asin_thought.mp3"
   },
   {
    "g": "quar",
    "silent": [
     "qu"
    ],
    "ex": "quarter",
    "hl": [
     "ar"
    ],
    "img": "/phonics/img/quarter_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/or_asin_quarter.mp3"
   }
  ]
 },
 {
  "phoneme": "/z/",
  "audio": "/phonics/audio/z_01.mp3",
  "cells": [
   {
    "g": "z",
    "silent": [],
    "ex": "zebra",
    "hl": [
     "z"
    ],
    "img": "/phonics/img/zebra.jpg",
    "color": "#d1c0cc",
    "audio": "/phonics/audio/z_asin_zebra.mp3"
   },
   {
    "g": "-zz",
    "silent": [],
    "ex": "jazz",
    "hl": [
     "zz"
    ],
    "img": "/phonics/img/jazz.jpg",
    "color": "#d1c0cc",
    "audio": "/phonics/audio/z_asin_jazz.mp3"
   },
   {
    "g": "-s",
    "silent": [],
    "ex": "fries",
    "hl": [
     "s"
    ],
    "img": "/phonics/img/fries.jpg",
    "color": "#d1c0cc",
    "audio": "/phonics/audio/z_asin_fries.mp3"
   },
   {
    "g": "-se",
    "silent": [],
    "ex": "cheese",
    "hl": [
     "se"
    ],
    "img": "/phonics/img/cheese.jpg",
    "color": "#d1c0cc",
    "audio": "/phonics/audio/z_asin_cheese.mp3"
   },
   {
    "g": "-ze",
    "silent": [],
    "ex": "breeze",
    "hl": [
     "ze"
    ],
    "img": "/phonics/img/wind.jpg",
    "color": "#d1c0cc",
    "audio": "/phonics/audio/z_asin_breeze.mp3"
   }
  ]
 },
 {
  "phoneme": "/ng/",
  "audio": "/phonics/audio/ng_01.mp3",
  "cells": [
   {
    "g": "-ng",
    "silent": [],
    "ex": "gong",
    "hl": [
     "ng"
    ],
    "img": "/phonics/img/gong.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/ng_asin_gong.mp3"
   },
   {
    "g": "-n",
    "silent": [],
    "ex": "jungle",
    "hl": [
     "n"
    ],
    "img": "/phonics/img/jungle_col-Copy.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ng_asin_jungle.mp3"
   }
  ]
 },
 {
  "phoneme": "/ngk/",
  "audio": "/phonics/audio/ngk.mp3",
  "cells": [
   {
    "g": "-nk",
    "silent": [],
    "ex": "ink",
    "hl": [
     "nk"
    ],
    "img": "/phonics/img/ink.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/ngk_asin_ink.mp3"
   },
   {
    "g": "-nc",
    "silent": [],
    "ex": "uncle",
    "hl": [
     "nc"
    ],
    "img": "/phonics/img/sad_face_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ngk_asin_uncle.mp3"
   }
  ]
 },
 {
  "phoneme": "/v/",
  "audio": "/phonics/audio/v_01.mp3",
  "cells": [
   {
    "g": "v",
    "silent": [],
    "ex": "violin",
    "hl": [
     "v"
    ],
    "img": "/phonics/img/violin.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/v_asin_violin.mp3"
   },
   {
    "g": "-ve",
    "silent": [],
    "ex": "dove",
    "hl": [
     "ve"
    ],
    "img": "/phonics/img/dove.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/v_asin_dove.mp3"
   }
  ]
 },
 {
  "phoneme": "/oo/ short",
  "audio": "/phonics/audio/short-oo_01.mp3",
  "cells": [
   {
    "g": "-oo",
    "silent": [],
    "ex": "book",
    "hl": [
     "oo"
    ],
    "img": "/phonics/img/book.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/short-oo_asin_book.mp3"
   },
   {
    "g": "-oul",
    "silent": [],
    "ex": "would could should",
    "hl": [
     "oul",
     "oul",
     "oul"
    ],
    "img": "/phonics/img/should_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/short-oo_asin_would_could_should.mp3"
   },
   {
    "g": "-u",
    "silent": [],
    "ex": "put push pull",
    "hl": [
     "u",
     "u",
     "u"
    ],
    "img": "/phonics/img/father_son_swing_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/short-oo_asin_put_push_pull.mp3"
   }
  ]
 },
 {
  "phoneme": "/oo/ long",
  "audio": "/phonics/audio/long-oo_01.mp3",
  "cells": [
   {
    "g": "oo",
    "silent": [],
    "ex": "moon",
    "hl": [
     "oo"
    ],
    "img": "/phonics/img/moon.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/long-oo_asin_moon.mp3"
   },
   {
    "g": "-ue",
    "silent": [],
    "ex": "blue",
    "hl": [
     "ue"
    ],
    "img": "/phonics/img/blue.jpg",
    "color": "#436bb2",
    "audio": "/phonics/audio/long-oo_asin_blue.mp3"
   },
   {
    "g": "u-e",
    "silent": [],
    "ex": "flute",
    "hl": [
     "u",
     "e"
    ],
    "img": "/phonics/img/flute3.jpg",
    "color": "#e7b9a5",
    "audio": "/phonics/audio/long-oo_asin_flute.mp3"
   },
   {
    "g": "u",
    "silent": [],
    "ex": "superb pearl",
    "hl": [
     "u"
    ],
    "img": "/phonics/img/superb-pearl.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/oo_asin_superb_pearl.mp3"
   },
   {
    "g": "-ui",
    "silent": [],
    "ex": "fruit",
    "hl": [
     "ui"
    ],
    "img": "/phonics/img/fruit_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/long-oo_asin_fruit.mp3"
   },
   {
    "g": "-ew",
    "silent": [],
    "ex": "crew",
    "hl": [
     "ew"
    ],
    "img": "/phonics/img/crew_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/long-oo_asin_crew.mp3"
   },
   {
    "g": "-ou",
    "silent": [],
    "ex": "soup",
    "hl": [
     "ou"
    ],
    "img": "/phonics/img/soup_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/long-oo_asin_soup.mp3"
   },
   {
    "g": "-o",
    "silent": [],
    "ex": "move",
    "hl": [
     "o"
    ],
    "img": "/phonics/img/move_col480.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/long-oo_asin_move.mp3"
   },
   {
    "g": "-ough",
    "silent": [],
    "ex": "through",
    "hl": [
     "ough"
    ],
    "img": "/phonics/img/through_col480.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/long-oo_asin_through.mp3"
   }
  ]
 },
 {
  "phoneme": "/ks/",
  "audio": "/phonics/audio/ks_01.mp3",
  "cells": [
   {
    "g": "-x",
    "silent": [],
    "ex": "fox",
    "hl": [
     "x"
    ],
    "img": "/phonics/img/fox.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/ks_asin_fox.mp3"
   },
   {
    "g": "-ks",
    "silent": [],
    "ex": "books",
    "hl": [
     "ks"
    ],
    "img": "/phonics/img/books.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ks_asin_books.mp3"
   },
   {
    "g": "-cks",
    "silent": [],
    "ex": "ducks",
    "hl": [
     "cks"
    ],
    "img": "/phonics/img/ducks.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ks_asin_ducks.mp3"
   },
   {
    "g": "-kes",
    "silent": [],
    "ex": "cakes",
    "hl": [
     "kes"
    ],
    "img": "/phonics/img/cakes-1.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ks_asin_cakes.mp3"
   }
  ]
 },
 {
  "phoneme": "/gz/",
  "audio": "/phonics/audio/gz.mp3",
  "cells": [
   {
    "g": "-x",
    "silent": [],
    "ex": "exam",
    "hl": [
     "x"
    ],
    "img": "/phonics/img/exam_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/gz_asin_exam-1.mp3"
   }
  ]
 },
 {
  "phoneme": "/ch/",
  "audio": "/phonics/audio/ch_01.mp3",
  "cells": [
   {
    "g": "ch",
    "silent": [],
    "ex": "chair",
    "hl": [
     "ch"
    ],
    "img": "/phonics/img/chair.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/ch_asin_chair.mp3"
   },
   {
    "g": "-tch",
    "silent": [],
    "ex": "patch",
    "hl": [
     "tch"
    ],
    "img": "/phonics/img/patch_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/ch_asin_patch.mp3"
   }
  ]
 },
 {
  "phoneme": "/chuh/ or / cher/",
  "audio": "/phonics/audio/chuh.mp3",
  "cells": [
   {
    "g": "-ture",
    "silent": [],
    "ex": "picture",
    "hl": [
     "ture"
    ],
    "img": "/phonics/img/picture_cropped.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/chuh_asin_picture.mp3"
   }
  ]
 },
 {
  "phoneme": "/sh/",
  "audio": "/phonics/audio/sh_01.mp3",
  "cells": [
   {
    "g": "sh",
    "silent": [],
    "ex": "sheep",
    "hl": [
     "sh"
    ],
    "img": "/phonics/img/sheep.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/sh_asin_sheep.mp3"
   },
   {
    "g": "ch",
    "silent": [],
    "ex": "chef",
    "hl": [
     "ch"
    ],
    "img": "/phonics/img/chef_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/sh_asin_chef.mp3"
   },
   {
    "g": "-ti",
    "silent": [],
    "ex": "station",
    "hl": [
     "ti"
    ],
    "img": "/phonics/img/station_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/sh_asin_station.mp3"
   },
   {
    "g": "-ci",
    "silent": [],
    "ex": "musician",
    "hl": [
     "ci"
    ],
    "img": "/phonics/img/oboe-1.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/sh_asin_musician.mp3"
   },
   {
    "g": "-ssi",
    "silent": [],
    "ex": "admission",
    "hl": [
     "ssi"
    ],
    "img": "/phonics/img/admission_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/sh_asin_admission.mp3"
   }
  ]
 },
 {
  "phoneme": "/th/ unvoiced",
  "audio": "/phonics/audio/th.mp3",
  "cells": [
   {
    "g": "th",
    "silent": [],
    "ex": "thistle",
    "hl": [
     "th"
    ],
    "img": "/phonics/img/thistle.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/th_asin_thistle.mp3"
   }
  ]
 },
 {
  "phoneme": "/th/ voiced",
  "audio": "/phonics/audio/th_voiced.mp3",
  "cells": [
   {
    "g": "th",
    "silent": [],
    "ex": "over there",
    "hl": [
     "th"
    ],
    "img": "/phonics/img/there_col.jpg",
    "color": "#fcd556",
    "audio": "/phonics/audio/th_asin_there.mp3"
   }
  ]
 },
 {
  "phoneme": "/kw/",
  "audio": "/phonics/audio/kw_01.mp3",
  "cells": [
   {
    "g": "qu",
    "silent": [],
    "ex": "queen",
    "hl": [
     "qu"
    ],
    "img": "/phonics/img/queen.jpg",
    "color": "#456bb2",
    "audio": "/phonics/audio/kw_asin_queen.mp3"
   },
   {
    "g": "kw",
    "silent": [],
    "ex": "awkward",
    "hl": [
     "kw"
    ],
    "img": "/phonics/img/awkward.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/kw_asin_awkward.mp3"
   }
  ]
 },
 {
  "phoneme": "/ou/",
  "audio": "/phonics/audio/ou_01.mp3",
  "cells": [
   {
    "g": "ou",
    "silent": [],
    "ex": "ouch",
    "hl": [
     "ou"
    ],
    "img": "/phonics/img/ouch.jpg",
    "color": "#456bb2",
    "audio": "/phonics/audio/ou_asin_ouch.mp3"
   },
   {
    "g": "ow",
    "silent": [],
    "ex": "owl",
    "hl": [
     "ow"
    ],
    "img": "/phonics/img/owl.jpg",
    "color": "#456bb2",
    "audio": "/phonics/audio/ou_asin_owl.mp3"
   },
   {
    "g": "-ough",
    "silent": [],
    "ex": "plough",
    "hl": [
     "ough"
    ],
    "img": "/phonics/img/plough_col.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ou_asin_plough.mp3"
   }
  ]
 },
 {
  "phoneme": "/oi/",
  "audio": "/phonics/audio/oi_01.mp3",
  "cells": [
   {
    "g": "oi",
    "silent": [],
    "ex": "ointment",
    "hl": [
     "oi"
    ],
    "img": "/phonics/img/ointment.jpg",
    "color": "#456bb2",
    "audio": "/phonics/audio/oi_asin_ointment.mp3"
   },
   {
    "g": "oy",
    "silent": [],
    "ex": "toy",
    "hl": [
     "oy"
    ],
    "img": "/phonics/img/toy.jpg",
    "color": "#456bb2",
    "audio": "/phonics/audio/oi_asin_toy.mp3"
   }
  ]
 },
 {
  "phoneme": "/er/",
  "audio": "/phonics/audio/er_01.mp3",
  "cells": [
   {
    "g": "er",
    "silent": [],
    "ex": "herbs",
    "hl": [
     "er"
    ],
    "img": "/phonics/img/herbs.jpg",
    "color": "#456bb2",
    "audio": "/phonics/audio/er_asin_herbs.mp3"
   },
   {
    "g": "ir",
    "silent": [],
    "ex": "birthday",
    "hl": [
     "ir"
    ],
    "img": "/phonics/img/birthday140.jpg",
    "color": "#b257a1",
    "audio": "/phonics/audio/er_asin_birthday.mp3"
   },
   {
    "g": "ur",
    "silent": [],
    "ex": "nurse",
    "hl": [
     "ur"
    ],
    "img": "/phonics/img/nurse.jpg",
    "color": "#b257a1",
    "audio": "/phonics/audio/er_asin_nurse.mp3"
   },
   {
    "g": "ear",
    "silent": [],
    "ex": "earth",
    "hl": [
     "ear"
    ],
    "img": "/phonics/img/earth.jpg",
    "color": "#b257a1",
    "audio": "/phonics/audio/er_asin_earth.mp3"
   },
   {
    "g": "wor",
    "silent": [
     "w"
    ],
    "ex": "world",
    "hl": [
     "or"
    ],
    "img": "/phonics/img/world.jpg",
    "color": "#b257a1",
    "audio": "/phonics/audio/er_asin_world.mp3"
   }
  ]
 },
 {
  "phoneme": "/uh/ schwa",
  "audio": "/phonics/audio/uh_01.mp3",
  "cells": [
   {
    "g": "-er",
    "silent": [],
    "ex": "mixer",
    "hl": [
     "er"
    ],
    "img": "/phonics/img/mixer.jpg",
    "color": "#456bb2",
    "audio": "/phonics/audio/uh_asin_mixer.mp3"
   },
   {
    "g": "-our",
    "silent": [],
    "ex": "humour",
    "hl": [
     "our"
    ],
    "img": "/phonics/img/humour.jpg",
    "color": "#b257a1",
    "audio": "/phonics/audio/uh_asin_humour.mp3"
   },
   {
    "g": "-re",
    "silent": [],
    "ex": "theatre",
    "hl": [
     "re"
    ],
    "img": "/phonics/img/act2.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/uh_asin_theatre.mp3"
   },
   {
    "g": "-ar",
    "silent": [],
    "ex": "collar",
    "hl": [
     "ar"
    ],
    "img": "/phonics/img/collar.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/uh_asin_collar.mp3"
   },
   {
    "g": "-or",
    "silent": [],
    "ex": "sailor",
    "hl": [
     "or"
    ],
    "img": null,
    "color": "#ffffff",
    "audio": "/phonics/audio/uh_asin_sailor.mp3"
   },
   {
    "g": "a",
    "silent": [],
    "ex": "lava",
    "hl": [
     "a"
    ],
    "img": "/phonics/img/lava.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/uh_asin_lava.mp3"
   }
  ]
 },
 {
  "phoneme": "/ar/",
  "audio": "/phonics/audio/ar_01.mp3",
  "cells": [
   {
    "g": "ar",
    "silent": [],
    "ex": "artist",
    "hl": [
     "ar"
    ],
    "img": "/phonics/img/artist.jpg",
    "color": "#456bb2",
    "audio": "/phonics/audio/ar_asin_artist.mp3"
   },
   {
    "g": "a",
    "silent": [],
    "ex": "father",
    "hl": [
     "a"
    ],
    "img": "/phonics/img/father.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/ar_asin_father.mp3"
   },
   {
    "g": "alm",
    "silent": [
     "m"
    ],
    "ex": "palm",
    "hl": [
     "al"
    ],
    "img": "/phonics/img/palm_col480-Copy.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ar_asin_palm.mp3"
   },
   {
    "g": "-alf",
    "silent": [
     "f"
    ],
    "ex": "half",
    "hl": [
     "al"
    ],
    "img": "/phonics/img/half_col-Copy.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ar_asin_half.mp3"
   },
   {
    "g": "-alves",
    "silent": [
     "ves"
    ],
    "ex": "(calf) calves",
    "hl": [
     "al",
     "al"
    ],
    "img": "/phonics/img/calves_col-Copy.jpg",
    "color": "#ffffff",
    "audio": "/phonics/audio/ar_asin_calves.mp3"
   }
  ]
 },
 {
  "phoneme": "/air/",
  "audio": "/phonics/audio/air_01.mp3",
  "cells": [
   {
    "g": "air",
    "silent": [],
    "ex": "hair",
    "hl": [
     "air"
    ],
    "img": "/phonics/img/curly.jpg",
    "color": "#e7b9a5",
    "audio": "/phonics/audio/air_asin_hair-1.mp3"
   },
   {
    "g": "-are",
    "silent": [],
    "ex": "square",
    "hl": [
     "are"
    ],
    "img": "/phonics/img/square3.jpg",
    "color": "#e7b9a5",
    "audio": "/phonics/audio/air_asin_square.mp3"
   },
   {
    "g": "-ear",
    "silent": [],
    "ex": "bear",
    "hl": [
     "ear"
    ],
    "img": "/phonics/img/bear.jpg",
    "color": "#e7b9a5",
    "audio": "/phonics/audio/air_asin_bear.mp3"
   },
   {
    "g": "-ere",
    "silent": [],
    "ex": "where",
    "hl": [
     "ere"
    ],
    "img": "/phonics/img/where_col.jpg",
    "color": "#e7b9a5",
    "audio": "/phonics/audio/air_asin_where.mp3"
   }
  ]
 },
 {
  "phoneme": "/eer/",
  "audio": "/phonics/audio/eer_01.mp3",
  "cells": [
   {
    "g": "eer",
    "silent": [],
    "ex": "deer",
    "hl": [
     "eer"
    ],
    "img": "/phonics/img/deer.jpg",
    "color": "#b257a1",
    "audio": "/phonics/audio/eer_asin_deer.mp3"
   },
   {
    "g": "ear",
    "silent": [],
    "ex": "ears",
    "hl": [
     "ear"
    ],
    "img": "/phonics/img/ears.jpg",
    "color": "#b257a1",
    "audio": "/phonics/audio/eer_asin_ears.mp3"
   },
   {
    "g": "-ere",
    "silent": [],
    "ex": "adhere",
    "hl": [
     "ere"
    ],
    "img": "/phonics/img/adhere.jpg",
    "color": "#b257a1",
    "audio": "/phonics/audio/eer_asin_adhere.mp3"
   },
   {
    "g": "-ier",
    "silent": [],
    "ex": "cashier",
    "hl": [
     "ier"
    ],
    "img": "/phonics/img/cashier.jpg",
    "color": "#b257a1",
    "audio": "/phonics/audio/eer_asin_cashier.mp3"
   }
  ]
 },
 {
  "phoneme": "/zh/",
  "audio": "/phonics/audio/zh_01.mp3",
  "cells": [
   {
    "g": "-si",
    "silent": [],
    "ex": "television",
    "hl": [
     "si"
    ],
    "img": "/phonics/img/television_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/zh_asin_television.mp3"
   },
   {
    "g": "-s",
    "silent": [],
    "ex": "treasure",
    "hl": [
     "s"
    ],
    "img": "/phonics/img/treasure_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/zh_asin_treasure.mp3"
   },
   {
    "g": "-ge",
    "silent": [],
    "ex": "collage",
    "hl": [
     "ge"
    ],
    "img": "/phonics/img/collage_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/zh_asin_collage.mp3"
   },
   {
    "g": "-z",
    "silent": [],
    "ex": "azure",
    "hl": [
     "z"
    ],
    "img": "/phonics/img/azure_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/zh_asin_azure.mp3"
   },
   {
    "g": "g",
    "silent": [],
    "ex": "courgette",
    "hl": [
     "g"
    ],
    "img": "/phonics/img/courgette_col.jpg",
    "color": "#018b8b",
    "audio": "/phonics/audio/zh_asin_courgette.mp3"
   }
  ]
 }
]
