#!/usr/bin/env python3
"""
补全雅思王听力（whale-chapter-*.ts）缺失的音标：
- 数据源：/Users/faris/Downloads/WhaleListen-雅思王听力-*/Test */Test *.json（ukphone 优先）
- 匹配不上的（原数据本身无音标）→ 尝试 lexicon-807 / zhenjing 本地音标库
用法：python3 scripts/whale-phonetic.py
"""
import json
import re
import glob
import os

FILES = [
    "src/lib/speller/whale-chapter-3.ts",
    "src/lib/speller/whale-chapter-4.ts",
    "src/lib/speller/whale-chapter-5.ts",
    "src/lib/speller/whale-chapter-8.ts",
    "src/lib/speller/whale-chapter-11.ts",
]

DOWNLOAD_DIR = os.path.expanduser("~/Downloads")


def unescape(s: str) -> str:
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=True)[1:-1]


# ── 1. 收集原始数据音标（word → ukphone 优先）──
raw_map = {}
for path in sorted(glob.glob(f"{DOWNLOAD_DIR}/WhaleListen-雅思王听力-*/Test */Test *.json")):
    try:
        data = json.load(open(path, encoding="utf-8"))
    except Exception:
        continue
    s = json.dumps(data, ensure_ascii=False)
    # 词条对象：content（部分文件是 word 字段）+ ukphone/usphone
    for m in re.finditer(r'"(?:content|word)":\s*"([^"]+)"[^{}]{0,2000}?"ukphone":\s*"([^"]*)"[^{}]{0,800}?"usphone":\s*"([^"]*)"', s):
        word, uk, us = m.group(1).lower(), m.group(2), m.group(3)
        ph = uk or us
        if ph and word not in raw_map:
            raw_map[word] = ph
print("原始数据音标:", len(raw_map))

# ── 2. 本地音标库（lexicon-807 / zhenjing 兜底）──
def collect_lib(path: str) -> dict:
    src = open(path, encoding="utf-8").read()
    mapping = {}
    for line in src.split("\n"):
        wm = re.search(r'word:\s*"([^"]+)"', line)
        pm = re.search(r'phonetic:\s*"([^"]*)"', line)
        if wm and pm and pm.group(1):
            w = unescape(wm.group(1)).lower()
            if w not in mapping:
                mapping[w] = unescape(pm.group(1))
    return mapping

lib_map = {}
for p in ["src/lib/speller/lexicon-807.ts", "src/lib/speller/zhenjing.ts"]:
    lib_map.update(collect_lib(p))
print("本地音标库:", len(lib_map))

# ── 3. 逐行补齐 ──
filled_raw = filled_lib = still_missing = 0
for path in FILES:
    src = open(path, encoding="utf-8").read()
    lines = src.split("\n")
    out = []
    for line in lines:
        wm = re.search(r'word:\s*"([^"]+)"', line)
        pm = re.search(r'phonetic:\s*""', line)
        if not wm or not pm:
            out.append(line)
            continue
        word = unescape(wm.group(1)).lower()
        ph = raw_map.get(word) or lib_map.get(word)
        if not ph:
            still_missing += 1
            out.append(line)
            continue
        if word in raw_map:
            filled_raw += 1
        else:
            filled_lib += 1
        line = line.replace('phonetic: ""', f'phonetic: "{esc(ph)}"', 1)
        out.append(line)
    open(path, "w", encoding="utf-8").write("\n".join(out))

print(f"原始数据补齐 {filled_raw}，本地库补齐 {filled_lib}，仍缺 {still_missing}")
