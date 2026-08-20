#!/usr/bin/env python3
"""
为 ielts-vocabulary.ts「自然地理」章节（237 词）补齐 phonetic（音标）与 stress（重音大写）字段。
- 音标：lexicon-807 / zhenjing 本地库优先，有道 API 兜底（英式）
- 重音大写：按音标主重音（ˈ）位置映射到拼写音节，该音节字母大写（atmosphere → ATMosphere）
- 词组/带符号词条（空格、/、-）跳过 stress 留空
用法：python3 scripts/vocab-phonetic-stress.py
"""
import json
import re
import sys
import time
import urllib.parse
import urllib.request

sys.path.insert(0, "scripts")
from syllables_ipa import syllabify, ipa_vowel_nuclei  # noqa: E402

DATA = "src/app/mock/ielts-vocabulary.ts"


def unescape(s: str) -> str:
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=True)[1:-1]


# ── 1. 本地音标库 ──
lib: dict[str, str] = {}
for lib_path in ["src/lib/speller/lexicon-807.ts", "src/lib/speller/zhenjing.ts"]:
    try:
        ls = open(lib_path, encoding="utf-8").read()
    except Exception:
        continue
    for wm in re.finditer(r'\{\s*word: "([^"]+)",\s*phonetic: "([^"]*)"', ls):
        w = unescape(wm.group(1)).lower()
        ph = unescape(wm.group(2))
        if ph and w not in lib:
            lib[w] = ph

# ── 2. 有道 API ──
API = "https://dict.youdao.com/jsonapi?q={}"


def youdao(word: str) -> str:
    url = API.format(urllib.parse.quote(word))
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read().decode("utf-8"))
        ec = (data.get("ec") or {}).get("word") or []
        if not ec:
            return ""
        entry = ec[0]
        uk = entry.get("ukphone") or ""
        us = entry.get("usphone") or ""
        return (uk or us).strip().strip("/[]")
    except Exception:
        return ""


# ── 3. 重音大写 ──
def stress_mark(word: str, ipa: str) -> str:
    """按主重音（ˈ 或 '）位置把对应拼写音节大写；失败返回原词（无重音不处理）。"""
    w = word.lower()
    # 词组/符号词条：无法可靠切分音节，跳过
    if re.search(r"[ \s/—–\-]", w) or "'" in w or "’" in w:
        return ""
    ipa_clean = ipa.replace("ˌ", "").replace("'", "ˈ")
    syll = syllabify(w, ipa_clean)
    if "ˈ" not in ipa_clean:
        # 无重音标记（单音节词）：返回单词本身
        return w if len(syll) == 1 else ""
    # 重音位置：数重音符号前的元音核数，即重音是第几个核（0-based）
    before = ipa_clean[:ipa_clean.index("ˈ")].replace("ˈ", "").replace("ˌ", "")
    before_n = ipa_vowel_nuclei(before)
    stressed_idx = before_n
    if len(syll) < 2 or stressed_idx >= len(syll):
        return ""
    out = []
    for i, s in enumerate(syll):
        out.append(s.upper() if i == stressed_idx else s)
    return " ".join(out)


# ── 4. 读取自然地理章节并逐词补全 ──
import os

def main():
    global DATA
    DATA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", DATA)
    src = open(DATA, encoding="utf-8").read()
    m = re.search(r'(export const vocabChapters: VocabChapter\[\] = \[)(.*?)(\n\];\s*$)', src, re.S)
    if not m:
        sys.exit("未找到词汇数据")

    def fix_word(mw):
        word = unescape(mw.group(1))
        # 幂等：词对象已含 phonetic 字段则跳过（防止重复运行污染）
        if "phonetic:" in mw.group(2):
            return mw.group(0)
        key = word.lower()
        ipa = lib.get(key) or youdao(word)
        if ipa:
            time.sleep(0.15)
        ipa = ipa.replace("'", "ˈ")
        ph = ipa
        stress = stress_mark(word, ipa)
        # 插入 phonetic + stress（chinese 之后）
        inner = mw.group(2)
        insert = f', phonetic: "{esc(ph)}", stress: "{esc(stress)}"' if stress else f', phonetic: "{esc(ph)}", stress: ""'
        return mw.group(0).replace(inner, inner + insert, 1)

    body = m.group(2)
    # 对象结尾：中间对象 `\n },`，组尾对象 `\n }`（后接 ] 或嵌套结构）——前瞻兼容两种情况
    fixed = re.sub(r'\{\s*"id": \d+,\s*"word": "((?:[^"\\]|\\.)*)"(.*?)(?=\n\s*\}(?:,|\n))', fix_word, body, flags=re.S)
    n = body.count('"id":')
    src = src[:m.start(2)] + fixed + src[m.end(2):]
    open(DATA, "w", encoding="utf-8").write(src)
    print(f"自然地理 {n} 词处理完成")

if __name__ == "__main__":
    main()
