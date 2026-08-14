#!/usr/bin/env python3
"""
补全雅思王听力（whale-chapter-*.ts）缺失的音节拆分（增量，已有跳过）：
- 有音标 → IPA 发音音节（syllables_ipa.syllabify）
- 无音标 → 拼写元音核切分近似（spell_vowel_nuclei + split_word）
- 词组（含空格）不拆；单音节词不加
用法：python3 scripts/whale-syllables.py
"""
import json
import re
import sys

sys.path.insert(0, "scripts")
from syllables_ipa import syllabify, spell_vowel_nuclei, split_word

FILES = [
    "src/lib/speller/whale-chapter-3.ts",
    "src/lib/speller/whale-chapter-4.ts",
    "src/lib/speller/whale-chapter-5.ts",
    "src/lib/speller/whale-chapter-8.ts",
    "src/lib/speller/whale-chapter-11.ts",
]


def unescape(s: str) -> str:
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=True)[1:-1]


def main():
    total = ipa_filled = spell_filled = phrases = 0
    for path in FILES:
        src = open(path, encoding="utf-8").read()
        lines = src.split("\n")
        out = []
        for line in lines:
            wm = re.search(r'word:\s*"([^"]+)"', line)
            if not wm:
                out.append(line)
                continue
            if "syllables:" in line:  # 已有，跳过（增量）
                out.append(line)
                continue
            word = unescape(wm.group(1))
            # 词组（含空格）也拆：按整组发音音节连续切分（段内保留空格，与 zhenjing 格式一致）
            if " " in word:
                phrases += 1
            pm = re.search(r'phonetic:\s*"([^"]*)"', line)
            raw_ipa = pm.group(1) if pm else ""
            ipa = unescape(raw_ipa) if raw_ipa else ""
            if ipa:
                # 双读音音标（"ˈæbstrækt, æbˈstrækt" 逗号分隔）取第一部分，否则核数错乱拆不出
                syll = syllabify(word, ipa.split(",")[0].strip())
            else:
                nuclei = spell_vowel_nuclei(word)
                syll = split_word(word, len(nuclei)) if len(nuclei) > 1 else [word]
            if len(syll) > 1 and "".join(syll) == word.lower():
                line = line.rstrip()
                arr = ", ".join('"' + esc(s) + '"' for s in syll)
                if line.endswith("},"):
                    line = line[:-2] + ", syllables: [" + arr + "]},"
                elif line.endswith("}"):
                    line = line[:-1] + ", syllables: [" + arr + "]}"
                else:
                    out.append(line)
                    continue
                if ipa:
                    ipa_filled += 1
                else:
                    spell_filled += 1
                total += 1
            out.append(line)
        open(path, "w", encoding="utf-8").write("\n".join(out))
    print(f"补 {total} 个（IPA {ipa_filled}，拼写近似 {spell_filled}），词组跳过 {phrases}")


if __name__ == "__main__":
    main()
