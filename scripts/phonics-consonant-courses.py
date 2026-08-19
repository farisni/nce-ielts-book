#!/usr/bin/env python3
"""
为自然拼读辅音组合（CONSONANT_GROUPS）生成听写课程数据：
- 数据源：src/lib/speller/phonics.ts 的 CONSONANT_GROUPS（50 规则 + examples）
- 音标：lexicon-807 / zhenjing 本地库优先，有道 API 兜底
- 释义：MEANINGS 表逐词人工审定（拼读课程取最常用义项，统一「词性. 释义」短格式）
- 音节：syllables_ipa 算法
- 输出：src/lib/speller/phonics-consonant.ts（WhaleChapter[]：3 个分组 × 规则 Test）
用法：python3 scripts/phonics-consonant-courses.py
"""
import json
import re
import sys
import time
import urllib.parse
import urllib.request

sys.path.insert(0, "scripts")
from syllables_ipa import syllabify, spell_vowel_nuclei, split_word  # noqa: E402

OUT = "src/lib/speller/phonics-consonant.ts"

# ── 逐词人工审定释义（拼读课程：简短、最常用义项、统一「词性. 释义」）──
MEANINGS = {
    # 开头辅音群 bl-/br-/cl-/cr-/dr-/fl-/fr-/gl-/gr-/pl-/pr-/tr-/tw-/sm-/sn-/sp-/spr-/sw-/sk-/sc-/squ-/st-/str-
    "blue": "adj. 蓝色的", "black": "adj. 黑色的", "blow": "v. 吹",
    "bread": "n. 面包", "brown": "adj. 棕色的", "bridge": "n. 桥",
    "clock": "n. 时钟", "class": "n. 班级", "clean": "adj. 干净的",
    "cream": "n. 奶油", "cry": "v. 哭", "cross": "v. 穿过",
    "dream": "n. 梦", "drink": "v. 喝", "dress": "n. 连衣裙",
    "flower": "n. 花", "fly": "v. 飞", "floor": "n. 地板",
    "friend": "n. 朋友", "fruit": "n. 水果", "frog": "n. 青蛙",
    "glass": "n. 玻璃", "glad": "adj. 高兴的", "globe": "n. 地球仪",
    "green": "adj. 绿色的", "grass": "n. 草", "grow": "v. 生长",
    "play": "v. 玩", "plane": "n. 飞机", "please": "adv. 请",
    "price": "n. 价格", "present": "n. 礼物", "proud": "adj. 自豪的",
    "tree": "n. 树", "train": "n. 火车", "try": "v. 尝试",
    "two": "num. 二", "twelve": "num. 十二", "twin": "n. 双胞胎",
    "smile": "v. 微笑", "small": "adj. 小的", "smell": "v. 闻",
    "snow": "n. 雪", "snake": "n. 蛇", "snail": "n. 蜗牛",
    "speak": "v. 说话", "space": "n. 太空", "sport": "n. 运动",
    "spring": "n. 春天", "spray": "v. 喷洒", "spread": "v. 传播",
    "swim": "v. 游泳", "sweet": "adj. 甜的", "swing": "v. 摇摆",
    "sky": "n. 天空", "skip": "v. 跳过", "skate": "v. 滑冰",
    "school": "n. 学校", "scarf": "n. 围巾", "score": "n. 分数",
    "square": "n. 正方形", "squid": "n. 鱿鱼", "squirrel": "n. 松鼠",
    "star": "n. 星星", "stop": "v. 停止", "stand": "v. 站立",
    "street": "n. 街道", "strong": "adj. 强壮的", "string": "n. 绳子",
    # 双字母组合 sh/ch/th/ph/wh/wr-/kn-/-mb/-bt/gh/-dge/-tch/-ck/-ts/-ds/-ng
    "ship": "n. 轮船", "fish": "n. 鱼", "shoe": "n. 鞋",
    "chair": "n. 椅子", "chef": "n. 厨师",
    "three": "num. 三", "this": "pron. 这个", "think": "v. 思考",
    "phone": "n. 电话", "photo": "n. 照片", "elephant": "n. 大象",
    "what": "pron. 什么", "when": "adv. 什么时候", "who": "pron. 谁",
    "write": "v. 写", "wrong": "adj. 错误的", "wrist": "n. 手腕",
    "knife": "n. 刀", "knee": "n. 膝盖", "knock": "v. 敲",
    "lamb": "n. 羔羊", "comb": "n. 梳子", "climb": "v. 攀爬",
    "doubt": "v. 怀疑", "debt": "n. 债务", "subtle": "adj. 微妙的",
    "laugh": "v. 笑", "ghost": "n. 鬼", "enough": "adj. 足够的",
    "edge": "n. 边缘", "badge": "n. 徽章",
    "catch": "v. 抓住", "watch": "v. 观看", "kitchen": "n. 厨房",
    "duck": "n. 鸭子",
    "cats": "n. 猫（复数）", "hats": "n. 帽子（复数）", "boats": "n. 船（复数）",
    "birds": "n. 鸟（复数）", "hands": "n. 手（复数）", "words": "n. 单词（复数）",
    "sing": "v. 唱歌", "long": "adj. 长的", "ring": "n. 戒指",
    # 尾缀与双写 -ss/-ll/-ff/-zz/-nk/-mp/-nd/-nt/-ld/-lf/-lk
    "ball": "n. 球", "hill": "n. 小山",
    "off": "adv. 离开", "cliff": "n. 悬崖", "stuff": "n. 东西",
    "buzz": "v. 嗡嗡叫", "fizz": "v. 嘶嘶响", "jazz": "n. 爵士乐",
    "pink": "adj. 粉色的", "lamp": "n. 台灯", "jump": "v. 跳", "camp": "n. 营地",
    "hand": "n. 手", "find": "v. 找到", "wind": "n. 风",
    "ant": "n. 蚂蚁", "plant": "n. 植物", "paint": "v. 画画",
    "cold": "adj. 冷的", "old": "adj. 老的", "hold": "v. 握住",
    "shelf": "n. 架子", "wolf": "n. 狼", "half": "n. 一半",
    "milk": "n. 牛奶", "walk": "v. 走路", "talk": "v. 说话",
}


def unescape(s: str) -> str:
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=True)[1:-1]


# ── 1. 读取 CONSONANT_GROUPS ──
src = open("src/lib/speller/phonics.ts", encoding="utf-8").read()
m = re.search(r'CONSONANT_GROUPS.*?= \[(.*?)\n\]', src, re.S)
body = m.group(1)

groups: list[dict] = []
for gm in re.finditer(r'\{\s*name: "([^"]+)",\s*rules: \[(.*?)\]\s*,', body, re.S):
    rules = []
    for rm in re.finditer(r'\{ pattern: "([^"]+)", ipa: "([^"]*)", tone: "[^"]*", examples: \[(.*?)\] \}', gm.group(2)):
        pat, ipa = unescape(rm.group(1)), unescape(rm.group(2))
        ws = [unescape(x) for x in re.findall(r'"([^"]+)"', rm.group(3))]
        # 多音规则（sc /sk/ /s/、ch /tʃ/ /k/ /ʃ/…）：取第一个音标作 phonemeMap.ipa
        first_ipa = "/" + ipa.split("/")[1] + "/" if ipa.startswith("/") else ipa
        rules.append({"pattern": pat, "ipa": first_ipa, "words": ws})
    groups.append({"name": gm.group(1), "rules": rules})

total_words = sum(len(r["words"]) for g in groups for r in g["rules"])
print(f"CONSONANT_GROUPS：{len(groups)} 组 {sum(len(g['rules']) for g in groups)} 规则 {total_words} 词")

# ── 2. 本地音标/释义库 ──
lib: dict[str, dict] = {}
for lib_path in ["src/lib/speller/lexicon-807.ts", "src/lib/speller/zhenjing.ts"]:
    try:
        ls = open(lib_path, encoding="utf-8").read()
    except Exception:
        continue
    for wm in re.finditer(r'\{\s*word: "([^"]+)",\s*phonetic: "([^"]*)"(?:,\s*meaning: "([^"]*)")?', ls):
        w = unescape(wm.group(1)).lower()
        lib[w] = {"phonetic": unescape(wm.group(2)), "meaning": unescape(wm.group(3) or "")}

# ── 3. 有道 API ──
API = "https://dict.youdao.com/jsonapi?q={}"


def youdao(word: str) -> dict | None:
    url = API.format(urllib.parse.quote(word))
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read().decode("utf-8"))
        ec = (data.get("ec") or {}).get("word") or []
        if not ec:
            return None
        entry = ec[0]
        uk = entry.get("ukphone") or ""
        us = entry.get("usphone") or ""
        ph = uk or us
        return {"phonetic": ph.strip().strip("/[]"), "meaning": ""}
    except Exception:
        return None


# ── 4. 逐词补全 ──
def spelling_of(pattern: str) -> str:
    return re.sub(r"^\-|\-$", "", pattern)


rows: list[dict] = []
fail: list[tuple[str, str]] = []
for g in groups:
    for r in g["rules"]:
        spelling = spelling_of(r["pattern"])
        for w in r["words"]:
            key = w.lower()
            info = lib.get(key)
            if not info or not info.get("phonetic"):
                info = youdao(w)
                if info:
                    time.sleep(0.25)
            if not info or not info.get("phonetic"):
                fail.append((w, r["pattern"]))
                continue
            ipa = info["phonetic"].replace("'", "ˈ")
            meaning = MEANINGS.get(key, "")
            if not meaning:
                fail.append((w, "缺释义"))
                continue
            syll = syllabify(key, ipa)
            if len(syll) <= 1:
                nuclei = spell_vowel_nuclei(w)
                if len(nuclei) > 1:
                    syll = split_word(w, len(nuclei))
            syll_list = [s for s in syll if s] if len(syll) > 1 else None
            rows.append({
                "group": g["name"], "pattern": r["pattern"], "ph": r["ipa"],
                "spelling": spelling, "word": w, "ipa": ipa,
                "meaning": meaning, "syll": syll_list,
            })

if fail:
    print("缺失:", fail)
print(f"成功 {len(rows)} / {total_words}")

# ── 5. 生成 TS（WhaleChapter[]：3 组 × 规则 Test）──
slug_map = {"开头辅音群": "consonant-begin", "双字母组合": "consonant-pair", "尾缀与双写": "consonant-ending"}
lines = [
    '// 自然拼读 · 辅音组合听写课程数据（CONSONANT_GROUPS 示例单词生成）',
    '// 3 个分组各为一个 Chapter（开头辅音群 / 双字母组合 / 尾缀与双写），',
    '// 每规则（bl- / sh / -ss…）为 Test；phonemeMap 使答对后组合字母标红',
    'import type { WhaleChapter, WhaleTest, WhaleWord } from "./whale-king"',
    "",
    "const T: WhaleChapter[] = [",
]
for g in groups:
    g_rules = [r for r in rows if r["group"] == g["name"]]
    if not g_rules:
        continue
    lines.append("  {")
    lines.append(f'    name: "{esc(g["name"])}",')
    lines.append('    emoji: "🔠",')
    lines.append(f'    slug: "{slug_map.get(g["name"], "consonant")}",')
    lines.append(f'    description: "{esc(g["name"])} · {len(g_rules)} 规则 {len(g_rules)} 词",')
    lines.append("    tests: [")
    for r in g_rules:
        lines.append("      {")
        lines.append(f'        name: "{esc(r["pattern"])} {esc(r["ph"])}",')
        lines.append(f'        slug: "{esc(r["pattern"])}",')
        lines.append("        wordCount: 1, difficulty: 2,")
        lines.append("        words: [")
        syll = f', syllables: [{", ".join(json.dumps(s, ensure_ascii=True) for s in r["syll"])}]' if r["syll"] else ""
        pmap = ', phonemeMap: [{ ipa: "%s", spelling: "%s" }]' % (esc(r["ph"]), esc(r["spelling"]))
        lines.append(
            f'          {{ word: "{esc(r["word"])}", phonetic: "{esc(r["ipa"])}", '
            f'meaning: "{esc(r["meaning"])}", audio: ""{syll}{pmap} }},'
        )
        lines.append("        ],")
        lines.append("      },")
    lines.append("    ],")
    lines.append("  },")
lines.append("]")
lines.append("")
lines.append("export { T as PHONICS_CONSONANT_CHAPTERS }")
lines.append("")
lines.append("/** 按 chapter slug 查找分组 */")
lines.append("export function getPhonicsConsonantChapter(chapterSlug: string): WhaleChapter | undefined {")
lines.append("  return T.find((c) => c.slug === chapterSlug)")
lines.append("}")
lines.append("")
open(OUT, "w", encoding="utf-8").write("\n".join(lines) + "\n")
print(f"已输出 {OUT}")
