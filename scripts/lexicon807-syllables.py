#!/usr/bin/env python3
"""给 807 词汇（lexicon-807.ts）补充音节拆分（复用 IPA 发音音节算法）。"""
import json
import re
import sys

sys.path.insert(0, "scripts")
from syllables_ipa import syllabify, spell_vowel_nuclei, split_word

PATH = "src/lib/speller/lexicon-807.ts"


def unescape(s: str) -> str:
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=True)[1:-1]


def main():
    src = open(PATH, encoding="utf-8").read()
    lines = src.split("\n")
    updated = skipped = phrases = 0
    out = []
    for line in lines:
        wm = re.search(r'word:\s*"([^"]+)"', line)
        if not wm:
            out.append(line)
            continue
        word = unescape(wm.group(1))
        if " " in word:
            phrases += 1
            out.append(line)
            continue
        pm = re.search(r'phonetic:\s*"([^"]*)"', line)
        line = re.sub(r",\s*syllables: \[[^\]]*\]", "", line)
        ipa = unescape(pm.group(1)) if pm else ""
        if ipa:
            syll = syllabify(word, ipa)
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
                skipped += 1
                out.append(line)
                continue
            updated += 1
        else:
            skipped += 1
        out.append(line)
    open(PATH, "w", encoding="utf-8").write("\n".join(out))
    print(f"807：更新 {updated} 个多音节词，跳过 {skipped}（单音节/无音标/失败），词组 {phrases}")


if __name__ == "__main__":
    main()
