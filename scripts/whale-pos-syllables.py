#!/usr/bin/env python3
"""
给雅思王听力（whale-chapter-*.ts）单词补充词性与音节拆分：
- 词性：ielts-all（ielts-vocabulary.ts）匹配（含 a/b 变体拆分）→ 后缀规则推断 → 默认 n.
- 词性加到 meaning 前（如 "能力" → "n. 能力"），与真经格式一致
- 音节：有音标 → IPA 发音音节；无音标 → 拼写元音核切分（近似）
- 词组（含空格）跳过（无词性无音节）
用法：python3 scripts/whale-pos-syllables.py
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

# ── ielts-all 词性表 ──
pos_map = {}
vocab_src = open("src/app/mock/ielts-vocabulary.ts", encoding="utf-8").read()
obj_re = re.compile(r'"word":\s*"([^"]+)",\s*"partOfSpeech":\s*"([^"]*)"')
for m in obj_re.finditer(vocab_src):
    for form in m.group(1).split("/"):
        pos_map[form.strip().lower()] = m.group(2)


def infer_pos(word: str) -> str:
    w = word.lower()
    if w.endswith(("tion", "sion", "ment", "ness", "ity", "er", "or", "ist", "ism", "ance", "ence", "hood", "ship", "dom", "age", "ure", "ture", "ics", "ology", "graphy")):
        return "n."
    if w.endswith(("ate", "ify", "ise", "ize", "en", "ish")):
        return "v."
    if w.endswith(("ous", "ive", "ful", "able", "ible", "al", "ic", "ical", "less", "ent", "ant", "ary", "like")):
        return "adj."
    if w.endswith("ly"):
        return "adv."
    return "n."


def pos_for(word: str) -> str:
    hit = pos_map.get(word.lower())
    if hit:
        return hit
    return infer_pos(word)


def unescape(s: str) -> str:
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s


def esc(s: str) -> str:
    """转义为文件内的 \\uXXXX 风格（ensure_ascii，转义引号/反斜杠）"""
    return json.dumps(s, ensure_ascii=True)[1:-1]


def main():
    total = pos_added = syll_added = phrases = 0
    for path in FILES:
        src = open(path, encoding="utf-8").read()
        lines = src.split("\n")
        out = []
        for line in lines:
            wm = re.search(r'word:\s*"([^"]+)"', line)
            if not wm:
                out.append(line)
                continue
            word = unescape(wm.group(1))
            # 词组（含空格）跳过
            if " " in word:
                phrases += 1
                out.append(line)
                continue
            pm = re.search(r'phonetic:\s*"([^"]*)"', line)
            mm = re.search(r'meaning:\s*"([^"]*)"', line)
            additions = []
            # 词性
            pos = pos_for(word)
            additions.append(f'pos: "{esc(pos)}"')
            pos_added += 1
            # 词性加到 meaning 前
            if mm:
                meaning = unescape(mm.group(1))
                if meaning and not re.match(r"^[a-z]+\.", meaning):
                    new_meaning = pos + " " + meaning
                    line = line[:mm.start(1)] + esc(new_meaning) + line[mm.end(1):]
            # 音节
            ipa = unescape(pm.group(1)) if pm else ""
            if ipa:
                syll = syllabify(word, ipa)
            else:
                # 无音标：按拼写元音核数切分（近似）
                nuclei = spell_vowel_nuclei(word)
                syll = split_word(word, len(nuclei)) if len(nuclei) > 1 else [word]
            if len(syll) > 1 and "".join(syll) == word.lower():
                additions.append("syllables: [" + ", ".join('"' + esc(s) + '"' for s in syll) + "]")
                syll_added += 1
            # 插入字段（在行尾 } 前）
            line = line.rstrip()
            if line.endswith("},"):
                line = line[:-2] + ", " + ", ".join(additions) + "},"
            elif line.endswith("}"):
                line = line[:-1] + ", " + ", ".join(additions) + "}"
            else:
                out.append(line)
                continue
            total += 1
            out.append(line)
        open(path, "w", encoding="utf-8").write("\n".join(out))
    print(f"处理 {total} 个单词：词性 {pos_added}，音节 {syll_added}，词组跳过 {phrases}")


if __name__ == "__main__":
    main()
