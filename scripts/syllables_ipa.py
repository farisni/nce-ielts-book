#!/usr/bin/env python3
"""
按发音（IPA 音标）划分单词音节，写入 zhenjing.ts 的 syllables 字段。

方法：
1. 从 IPA 音标提取元音核（vowel nuclei）→ 发音音节数
2. 把拼写切分成同样段数的音节段（每段含一个"元音字母核"）：
   - 复合元音（ai/ea/oo/ou…）与无声 e 不单独成核
   - -tion/-sion/-cious 等后缀整体一段
   - 段间辅音按"最大起始"归后段，两个以上辅音时前段留一个（闭合音节）
3. 段数无法对齐音标时回退按元音字母核切分

用法：python3 scripts/syllables_ipa.py
"""
import json
import re
import sys

# ── IPA 元音核识别 ──
# 元音字符（含变体），长音 ː 跟随
VOWELS = set("iɪeɛæɑɔouʊəɜʌɐɒ")
# 双元音/复合（两个字符一个核）——按最长匹配优先处理
DIPHTHONGS = ["aɪ", "aʊ", "eɪ", "oʊ", "ɔɪ", "ɪə", "eə", "ʊə", "ɜː", "iː", "uː", "ɔː", "ɑː", "ɐː", "ɒː", "eː", "oː", "æː"]


def ipa_vowel_nuclei(ipa: str) -> int:
    """从 IPA 字符串数出元音核（发音音节数）。重音符号 ˈ ˌ 与 ː 忽略。
    注意：相邻独立元音（如 riæk 的 i+æ）是两个音节，只有列表中的双元音/长元音算一个核。"""
    s = ipa.replace("ˈ", "").replace("ˌ", "").replace("'", "").replace("`", "")
    n = 0
    i = 0
    while i < len(s):
        two = s[i:i + 2]
        if two in DIPHTHONGS or two in ("ju", "jʊ"):
            n += 1
            i += 2
            continue
        ch = s[i]
        if ch in VOWELS:
            n += 1
            i += 1
            # 长音符号 ː 并入当前核；不吞相邻独立元音（那是另一个音节）
            if i < len(s) and s[i] == "ː":
                i += 1
            continue
        i += 1
    return n


# ── 拼写音节切分 ──
# 复合元音字母对（一个核）
VOWEL_PAIRS = ["ai", "ay", "ea", "ee", "ei", "ey", "ie", "oa", "oe", "oi", "oy", "oo", "ou", "ow", "ue", "ui", "au", "aw", "eu", "ew"]
VOWEL_LETTERS = set("aeiouy")
# 后缀整体一段（发音一个音节）——匹配词尾
SUFFIX_ONE = ["tion", "sion", "ssion", "cion", "cious", "tious", "scious", "ance", "ence", "able", "ible", "ment", "ness", "less", "fully", "ously", "ious", "eous", "uous", "ture", "sure"]


def spell_vowel_nuclei(word: str):
    """返回拼写中元音核（字母位置对）列表：[(start, end)…]，end 含。
    每个元音字母独立成核（复合元音如 ea 可能跨音节，如 reaction 的 e+a），
    词尾无声 e 并入前一核；最终核数与发音核数对齐靠合并循环完成。"""
    w = word.lower()
    nuclei = []
    for i, ch in enumerate(w):
        if ch in VOWEL_LETTERS:
            # 词尾无声 e：并入前一核
            if i == len(w) - 1 and ch == "e" and nuclei:
                prev = nuclei[-1]
                nuclei[-1] = (prev[0], i)
            else:
                nuclei.append((i, i))
    return nuclei


# 合法辅音起始簇（归后一个音节）：核间辅音从尾部匹配最长簇
ONSETS = {
    "sph", "spl", "spr", "str", "scr", "thr", "shr", "sch", "chr", "phr", "chl",
    "bl", "br", "cl", "cr", "dr", "fl", "fr", "gl", "gr", "pl", "pr",
    "sl", "sm", "sn", "sp", "st", "sw", "tr", "tw", "dw", "gw", "kw",
    "ch", "sh", "th", "ph", "wh", "wr", "kn", "gn", "ps", "pt", "ts",
    "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z",
}


def onset_len(c: str) -> int:
    """核间辅音串 c 中应归后一音节的长度：从尾部匹配最长合法起始簇，至少 1。"""
    for L in range(min(3, len(c)), 0, -1):
        if c[-L:] in ONSETS:
            return L
    return 1


def split_word(word: str, target_syllables: int) -> list:
    """把单词切分成 target_syllables 段（近似发音音节）。
    每段含一个元音核；核间辅音按最大起始归后段（匹配合法起始簇），
    其余辅音归前段（闭合）。"""
    w = word.lower()
    nuclei = spell_vowel_nuclei(w)
    if not nuclei:
        return [w]
    # 段数对齐：拼写核数可能 ≠ 发音核数
    # 1) 拼写核 > 发音核 → 合并相邻弱核对（优先跨度小的；从后往前，尾部弱化后缀更易合并）
    while len(nuclei) > target_syllables:
        k = min(range(len(nuclei) - 2, -1, -1), key=lambda k: nuclei[k + 1][1] - nuclei[k][0] + 1)
        nuclei[k] = (nuclei[k][0], nuclei[k + 1][1])
        del nuclei[k + 1]
    # 2) 拼写核 < 发音核 → 拆跨度最大的核（罕见）
    while len(nuclei) < target_syllables:
        widest = max(range(len(nuclei)), key=lambda k: nuclei[k][1] - nuclei[k][0])
        s, e = nuclei[widest]
        if e - s < 2:
            break
        mid = s + (e - s) // 2
        nuclei[widest] = (s, mid)
        nuclei.insert(widest + 1, (mid + 1, e))
    # 切分：段 k 范围 [start_k, end_k)；核间辅音按合法起始簇归后段，其余归前段
    parts = []
    for k, (s, e) in enumerate(nuclei):
        if k == 0:
            start = 0
        else:
            between = w[nuclei[k - 1][1] + 1:s]
            start = s - (onset_len(between) if between else 0)
        if k == len(nuclei) - 1:
            end = len(w)
        else:
            between_next = w[e + 1:nuclei[k + 1][0]]
            end = nuclei[k + 1][0] - (onset_len(between_next) if between_next else 0)
        parts.append(w[max(0, start):end])
    if len(parts) == target_syllables and "".join(parts) == w:
        return parts
    return [w]


def syllabify(word: str, ipa: str) -> list:
    n = ipa_vowel_nuclei(ipa)
    if n <= 1:
        return [word]
    parts = split_word(word, n)
    if len(parts) != n or "".join(parts) != word.lower():
        # 回退：按核数均分
        return [word]
    return parts


# ── 更新 zhenjing.ts ──
def main():
    path = "src/lib/speller/zhenjing.ts"
    src = open(path, encoding="utf-8").read()
    lines = src.split("\n")
    updated = 0
    skipped = 0
    pattern_word = re.compile(r'word:\s*"([^"]+)"')
    pattern_phonetic = re.compile(r'phonetic:\s*"([^"]*)"')
    out = []
    for line in lines:
        wm = pattern_word.search(line)
        pm = pattern_phonetic.search(line)
        if not wm or not pm:
            out.append(line)
            continue
        word = wm.group(1)
        raw_ipa = pm.group(1)
        # 反解 \uXXXX 转义（数据文件里的 IPA 是 JSON 转义存储的）
        try:
            ipa = json.loads('"' + raw_ipa + '"')
        except Exception:
            ipa = raw_ipa
        # 移除可能存在的旧 syllables（重新生成）
        line = re.sub(r",\s*syllables: \[[^\]]*\]", "", line)
        syll = syllabify(word, ipa)
        if len(syll) > 1:
            arr = ", ".join('"' + s + '"' for s in syll)
            # 在行尾 } 前插入 syllables（数据行以 }, 或 } 结尾）
            line = line.rstrip()
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
    open(path, "w", encoding="utf-8").write("\n".join(out))
    print(f"已更新 {updated} 个词的音节（多音节词），跳过 {skipped}（单音节/无音标/失败）")


if __name__ == "__main__":
    main()
