#!/usr/bin/env python3
"""
为自然拼读元音组合巧记表生成听写课程数据：
- 数据源：src/lib/speller/phonics-mnemonic.ts 的示例单词（82 个）
- 音标/释义：lexicon-807 / zhenjing 本地库优先，有道 API 兜底
- 音节：syllables_ipa 算法
- 输出：src/lib/speller/phonics-vowel.ts（WhaleChapter[]：行 a e i o u × 组合 Test）
用法：python3 scripts/phonics-vowel-courses.py
"""
import json
import re
import sys
import time
import urllib.parse
import urllib.request

sys.path.insert(0, "scripts")
from syllables_ipa import syllabify, spell_vowel_nuclei, split_word  # noqa: E402

OUT = "src/lib/speller/phonics-vowel.ts"


def unescape(s: str) -> str:
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=True)[1:-1]


# ── 1. 读取巧记表数据 ──
src = open("src/lib/speller/phonics-mnemonic.ts", encoding="utf-8").read()
# {word: [{pattern, ph}]}
word_map: dict[str, list[dict]] = {}
order: list[tuple[str, str, dict]] = []  # (行元音, pattern, {ph, w})
for row_m in re.finditer(r'(\w): \{[\s\S]*?other: \[(.*?)\]\s*\},', src):
    pass  # 简化：直接正则抓 pattern/ipa/w
cur_row = ""
for line in src.split("\n"):
    rm = re.match(r'^\s*(\w): \{', line)
    if rm:
        cur_row = rm.group(1)
    for m in re.finditer(r'pattern: "([^"]+)", ipa: \[(.*?)\]', line):
        pattern = unescape(m.group(1))
        for im in re.finditer(r'\{ ph: "([^"]+)", w: "([^"]+)" \}', m.group(2)):
            ph, w = unescape(im.group(1)), unescape(im.group(2))
            order.append((cur_row, pattern, {"ph": ph, "w": w}))
            word_map.setdefault(w.lower(), []).append({"pattern": pattern, "ph": ph})

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
rows: dict[str, list] = {}
fail = []
for row_vowel, pattern, item in order:
    w = item["w"]
    key = w.lower()
    rows.setdefault(row_vowel, [])
    info = lib.get(key)
    if not info or not info.get("phonetic"):
        info = youdao(w)
        if info:
            time.sleep(0.25)
    if not info or not info.get("phonetic"):
        fail.append(w)
        continue
    ipa = info["phonetic"].replace("'", "ˈ")
    meaning = info.get("meaning") or ""
    # 音节
    syll = syllabify(w.lower(), ipa)
    if len(syll) <= 1:
        nuclei = spell_vowel_nuclei(w)
        if len(nuclei) > 1:
            syll = split_word(w, len(nuclei))
    syll_list = [s for s in syll if s] if len(syll) > 1 else None
    # phonemeMap：组合 → 拼写字母（magic-e 拆首尾）
    pmap = []
    if "_" in pattern:
        for ch in pattern.split("_"):
            if ch:
                pmap.append({"ipa": item["ph"], "spelling": ch})
    else:
        pmap.append({"ipa": item["ph"], "spelling": pattern})
    rows[row_vowel].append({
        "pattern": pattern, "ph": item["ph"], "word": w, "ipa": ipa,
        "meaning": meaning, "syll": syll_list, "pmap": pmap,
    })

# ── 5. 生成 TS（WhaleChapter[]：行 a e i o u）──
# 组合顺序：按 r y w l | a e i o u | 其他 的列序分组为 Test
COL_ORDER = ["r", "y", "w", "l", "a", "e", "i", "o", "u", "other"]


def col_of(pattern: str, ph: str) -> str:
    if len(pattern) == 2 and pattern[1] in "rywl":
        return pattern[1]
    if len(pattern) == 2 and pattern[1] in "aeiou":
        return pattern[1]
    if "_" in pattern:
        return "e"
    return "other"


lines = [
    '// 自然拼读 · 元音组合听写课程数据（巧记表示例单词生成）',
    '// 行 a e i o u 各为一个 Chapter，每组合（ar/ay/ea…）为 Test；phonemeMap 使答对后组合字母标红',
    'import type { WhaleChapter, WhaleTest, WhaleWord } from "./whale-king"',
    "",
    "const T: WhaleChapter[] = [",
]
for vowel in "aeiou":
    items = rows.get(vowel, [])
    if not items:
        continue
    tests: dict[str, list] = {}
    for it in items:
        col = col_of(it["pattern"], it["ph"])
        tests.setdefault(col, []).append(it)
    lines.append("  {")
    lines.append(f'    name: "元音 {vowel.upper()}",')
    lines.append('    emoji: "🔤",')
    lines.append(f'    slug: "vowel-{vowel}",')
    lines.append(f'    description: "{vowel} 行元音组合 · {len(items)} 词",')
    lines.append("    tests: [")
    for col in COL_ORDER:
        col_items = tests.get(col)
        if not col_items:
            continue
        lines.append("      {")
        patterns = sorted({it["pattern"] for it in col_items})
        lines.append(f'        name: "{esc(" / ".join(patterns))}",')
        lines.append(f'        slug: "{esc("|".join(patterns))}",')
        lines.append(f"        wordCount: {len(col_items)}, difficulty: 2,")
        lines.append("        words: [")
        for it in col_items:
            syll = f', syllables: [{", ".join(json.dumps(s, ensure_ascii=True) for s in it["syll"])}]' if it["syll"] else ""
            if it["pmap"]:
                inner = ", ".join(
                    '{{ ipa: "{0}", spelling: "{1}" }}'.format(esc(m["ipa"]), esc(m["spelling"]))
                    for m in it["pmap"]
                )
                pmap = f", phonemeMap: [{inner}]"
            else:
                pmap = ""
            lines.append(
                f'          {{ word: "{esc(it["word"])}", phonetic: "{esc(it["ipa"])}", '
                f'meaning: "{esc(it["meaning"])}", audio: ""{syll}{pmap} }},'
            )
        lines.append("        ],")
        lines.append("      },")
    lines.append("    ],")
    lines.append("  },")
lines.append("]")
lines.append("")
lines.append("export { T as PHONICS_VOWEL_CHAPTERS }")
lines.append("")
lines.append("/** 按 chapter slug + test slug 查找组合单元 */")
lines.append("export function getPhonicsVowelTest(chapterSlug: string, testSlug: string): WhaleTest | undefined {")
lines.append("  const ch = T.find((c) => c.slug === chapterSlug)")
lines.append("  return ch?.tests.find((t) => t.slug === testSlug)")
lines.append("}")
lines.append("")

open(OUT, "w", encoding="utf-8").write("\n".join(lines))
total = sum(len(v) for v in rows.values())
print(f"生成 {OUT}：{len(rows)} Chapter，{total} 词；失败 {len(fail)}：{fail[:10]}")
