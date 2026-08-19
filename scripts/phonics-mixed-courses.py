#!/usr/bin/env python3
"""
为自然拼读元辅组合（MIXED_GROUPS）生成听写课程数据：
- 数据源：src/lib/speller/phonics.ts 的 MIXED_GROUPS（52 规则 + examples，142 词）
- 音标/释义：lexicon-807 / zhenjing 本地库优先，有道 API 兜底
- 音节：syllables_ipa 算法
- 输出：src/lib/speller/phonics-mixed.ts（WhaleChapter[]：5 个分组 × 规则 Test）
用法：python3 scripts/phonics-mixed-courses.py
"""
import json
import re
import sys
import time
import urllib.parse
import urllib.request

sys.path.insert(0, "scripts")
from syllables_ipa import syllabify, spell_vowel_nuclei, split_word  # noqa: E402

OUT = "src/lib/speller/phonics-mixed.ts"


def unescape(s: str) -> str:
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=True)[1:-1]


def shorten_meaning(m: str) -> str:
    """精简释义：拼读课程关注拼读，释义取第一个义项即可"""
    if not m:
        return m
    first = re.split(r"[；;]", m)[0].strip()
    first = first.split("，")[0].strip()
    first = re.sub(r"[（(][^）)]*[）)]", "", first).strip()
    return first


# ── 1. 读取 MIXED_GROUPS ──
src = open("src/lib/speller/phonics.ts", encoding="utf-8").read()
m = re.search(r'MIXED_GROUPS.*?= \[(.*?)\n\]', src, re.S)
body = m.group(1)

groups: list[dict] = []  # {name, rules: [{pattern, ipa, examples[]}]}
for gm in re.finditer(r'\{\s*name: "([^"]+)",\s*rules: \[(.*?)\]\s*,', body, re.S):
    rules = []
    for rm in re.finditer(r'\{ pattern: "([^"]+)", ipa: "([^"]*)", tone: "[^"]*", examples: \[(.*?)\] \}', gm.group(2)):
        pat, ipa = unescape(rm.group(1)), unescape(rm.group(2))
        ws = [unescape(x) for x in re.findall(r'"([^"]+)"', rm.group(3))]
        # 多音规则：取第一个音标作 phonemeMap.ipa（如 "/ɒf/ /ʌf/ /əʊ/" → "/ɒf/"）
        first_ipa = "/" + ipa.split("/")[1] + "/" if ipa.startswith("/") else ipa
        rules.append({"pattern": pat, "ipa": first_ipa, "words": ws})
    groups.append({"name": gm.group(1), "rules": rules})

total_words = sum(len(r["words"]) for g in groups for r in g["rules"])
print(f"MIXED_GROUPS：{len(groups)} 组 {sum(len(g['rules']) for g in groups)} 规则 {total_words} 词")

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
        trs = []
        for t in (entry.get("trs") or []):
            for t2 in (t.get("tr") or []):
                l = t2.get("l") or {}
                for t3 in (l.get("i") or []):
                    if t3:
                        trs.append(t3)
        return {"phonetic": ph.strip().strip("/[]"), "meaning": "；".join(trs[:2]) or ""}
    except Exception:
        return None


# ── 4. 逐词补全 ──
# spelling：组合字母（去横线；c+a/o/u 等变音取核心字母 c/g/qu/ce/ge）
def spelling_of(pattern: str) -> str:
    p = re.sub(r"^\-|\-$", "", pattern)
    if "+" in p:
        return p.split("+")[0]
    return p


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
            meaning = shorten_meaning(info.get("meaning") or "")
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
    print("缺释义:", fail)
print(f"成功 {len(rows)} / {total_words}")

# ── 5. 生成 TS（WhaleChapter[]：5 组 × 规则 Test）──
lines = [
    '// 自然拼读 · 元辅组合听写课程数据（MIXED_GROUPS 示例单词生成）',
    '// 5 个分组各为一个 Chapter（a 特殊词形 / i 特殊词形 / c·g 变音 / o 特殊词形 / 常见词尾），',
    '// 每规则（-ass / c+a/o/u / -tion…）为 Test；phonemeMap 使答对后组合字母标红',
    'import type { WhaleChapter, WhaleTest, WhaleWord } from "./whale-king"',
    "",
    "const T: WhaleChapter[] = [",
]
for g in groups:
    g_rules = [r for r in rows if r["group"] == g["name"]]
    if not g_rules:
        continue
    slug_map = {
        "a 特殊词形": "mixed-a", "i 特殊词形": "mixed-i",
        "c · g 变音": "mixed-cg", "o 特殊词形": "mixed-o",
        "常见词尾组合": "mixed-ending",
    }
    lines.append("  {")
    lines.append(f'    name: "{esc(g["name"])}",')
    lines.append('    emoji: "🔠",')
    lines.append(f'    slug: "{slug_map.get(g["name"], "mixed")}",')
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
lines.append("export { T as PHONICS_MIXED_CHAPTERS }")
lines.append("")
lines.append("/** 按 chapter slug 查找分组 */")
lines.append("export function getPhonicsMixedChapter(chapterSlug: string): WhaleChapter | undefined {")
lines.append("  return T.find((c) => c.slug === chapterSlug)")
lines.append("}")
lines.append("")
open(OUT, "w", encoding="utf-8").write("\n".join(lines) + "\n")
print(f"已输出 {OUT}")
