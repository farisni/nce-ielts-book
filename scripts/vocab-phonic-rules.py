#!/usr/bin/env python3
"""
为 ielts-vocabulary.ts「自然地理」章节（237 词）生成自然拼读规律标签（phonicRule 字段）。
- 规律标签格式：「拼写=/音/（说明）」，一词 1-3 个核心规律，用「；」连接
- 匹配基于拼写特征 + 音标验证（重音、元音实际读音）
- 幂等：已含 phonicRule 的词跳过
用法：python3 scripts/vocab-phonic-rules.py
"""
import json
import os
import re
import sys

DATA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "src/app/mock/ielts-vocabulary.ts")


def unescape(s: str) -> str:
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=True)[1:-1]


# ── 规律标签库：pattern 检查 + 音标验证 + 标签文本 ──
# 每条：(名称, 拼写检查函数(词), 音标验证函数(ipa), 标签文本)
# 匹配顺序即优先级：magic-e > 元音组合 > 后缀 > 辅音组合 > 弱化

def vce_label(w: str, ipa: str) -> str | None:
    """V-Ce magic-e：元音+辅音+e 结尾，e 不发音，元音发字母音"""
    m = re.search(r'([aeiou])[a-z]+e$', w.lower())
    if not m:
        return None
    v = m.group(1)
    # e 不发音：音标不以 /ɪ/ /e/ /ə/ 结尾且无尾元音
    if re.search(r'[ieəʊuːɪ]$', ipa):
        return None
    # 元音发字母音：音标含该元音字母音
    letter_sound = {"a": "eɪ", "i": "aɪ", "o": "əʊ", "u": "juː"}
    if v not in letter_sound:
        return None
    if letter_sound[v] not in ipa.replace("ː", ""):
        return None
    return f"magic-e: {v}=/{letter_sound[v]}/"


VOWEL_PAIRS = [
    ("ai", "eɪ"), ("ay", "eɪ"), ("ei", "eɪ"), ("ey", "eɪ"), ("ea", "iː"), ("ee", "iː"),
    ("ie", "aɪ"), ("igh", "aɪ"), ("oa", "əʊ"), ("oe", "əʊ"), ("ow", "əʊ"), ("ou", "aʊ"),
    ("oo", "uː"), ("ui", "uː"), ("ue", "uː"), ("ew", "juː"), ("au", "ɔː"), ("aw", "ɔː"),
    ("oi", "ɔɪ"), ("oy", "ɔɪ"), ("are", "eə"), ("air", "eə"), ("ear", "ɪə"), ("ure", "ʊə"),
]


def vowel_pair_label(w: str, ipa: str) -> str | None:
    low = w.lower()
    for pair, sound in VOWEL_PAIRS:
        if pair in low:
            s = sound.replace("ː", "")
            # 音标验证：该读音出现在音标中（音标多为英式，长音带 ː）
            if s in ipa.replace("ː", ""):
                note = "（需记）" if pair in ("ui", "ei", "ea", "ie") and pair not in ("ee", "ai", "ay", "oa", "oi", "oy") else ""
                return f"{pair}=/{sound}/{note}"
    return None


SUFFIXES = [
    ("-tion", "ʃən", "/ʃən/"), ("-sion", "ʃən", "/ʃən/"), ("-ous", "əs", "/əs/"),
    ("-ic", "ɪk", "/ɪk/"), ("-al", "əl", "/əl/"), ("-en", "ən", "/ən/（弱读）"),
    ("-er", "ə", "/ə(r)/"), ("-or", "ə", "/ə(r)/"), ("-le", "l", "/l/（成音节）"),
    ("-ance", "əns", "/əns/"), ("-ence", "əns", "/əns/"), ("-ment", "mənt", "/mənt/"),
    ("-ful", "fl", "/fl/"), ("-ness", "nəs", "/nəs/"), ("-ture", "tʃə", "/tʃə(r)/"),
    ("-able", "əbl", "/əbl/"), ("-ible", "ɪbl", "/ɪbl/"), ("-ly", "li", "/li/"),
]


def suffix_label(w: str, ipa: str) -> str | None:
    low = w.lower()
    for suf, probe, label in SUFFIXES:
        if low.endswith(suf.lstrip("-")):
            p = probe.replace("ː", "")
            if p in ipa.replace("ː", ""):
                return label
    return None


CONSONANTS = [
    ("sh", "ʃ", "/ʃ/"), ("ch", "tʃ", "/tʃ/"), ("th", "θ", "/θ/"), ("ph", "f", "/f/"),
    ("wh", "w", "/w/"), ("kn", "n", "kn- 不发音 k"), ("wr", "r", "wr- 不发音 w"),
    ("mb", "m", "-mb 不发音 b"), ("ck", "k", "-ck=/k/"), ("ng", "ŋ", "/ŋ/"),
    ("qu", "kw", "qu=/kw/"), ("sc", "s", "sc=/s/（c 不发音）"), ("x", "ks", "x=/ks/"),
]


def consonant_label(w: str, ipa: str) -> str | None:
    low = w.lower()
    for comb, probe, label in CONSONANTS:
        if comb in low:
            p = probe.replace("ː", "")
            if p in ipa.replace("ː", ""):
                return label
    return None


def weak_label(w: str, ipa: str) -> str | None:
    """非重读弱化：多音节词中非重读音节元音发 /ə/（或 /ɪ/）"""
    if "ˈ" not in ipa or "ə" not in ipa:
        return None
    # 弱化元音在非重音位置：重音符号后出现 ə 或重音前出现 ə
    if "ə" in ipa:
        return "非重读弱化 /ə/"
    return None


def opaque_label(w: str, ipa: str) -> str | None:
    """不透明拼写（需记）：ough / 常见例外"""
    low = w.lower()
    if "ough" in low:
        return "ough（不透明，需记）"
    return None


# 重读单字母元音规律：重音符号后紧跟的读音 → 标签（magic-e 已覆盖的不重复标）
STRESS_SOUNDS = [
    ("æ", "a=/æ/"), ("ɒ", "o=/ɒ/（英式短 o）"), ("eɪ", "a=/eɪ/（开音节）"),
    ("aɪ", "i=/aɪ/（开音节倾向）"), ("ɪ", "i=/ɪ/"), ("e", "e=/e/"),
    ("ʌ", "u=/ʌ/"), ("əʊ", "o=/əʊ/（开音节）"), ("juː", "u=/juː/（开音节）"),
]


def first_stress_sound(after: str) -> str:
    """提取重音后第一个元音核（跳过开头辅音，含长音/双元音）"""
    m = re.search(r'([iɪeɛæɑɔouʊəɜʌɐɒ](?:ː|[ɪəʊeɔæu])?(?:j?uː)?)', after)
    return m.group(1) if m else ""


def single_vowel_label(w: str, ipa: str, has_vce: bool) -> str | None:
    """重读单字母元音规律（闭音节短音 / 开音节字母音），按重音后读音匹配"""
    if "ˈ" not in ipa:
        return None
    after = ipa[ipa.index("ˈ") + 1:]
    sound = first_stress_sound(after)
    for s, label in STRESS_SOUNDS:
        if sound == s or sound.startswith(s.rstrip("ː") + "ː"):
            # magic-e 已标过的元音字母不重复
            if has_vce:
                vce_v = re.search(r'([aeiou])[a-z]+e$', w.lower())
                if vce_v and label.startswith(vce_v.group(1) + "="):
                    return None
            return label
    return None


def build_tags(w: str, ipa: str) -> list[str]:
    tags = []
    # 优先级：不透明 > magic-e > 元音组合 > 后缀 > 辅音组合 > 单字母元音 > 弱化
    has_vce = bool(vce_label(w, ipa))
    for fn in (opaque_label, vce_label, vowel_pair_label, suffix_label, consonant_label):
        t = fn(w, ipa)
        if t and t not in tags:
            tags.append(t)
    sv = single_vowel_label(w, ipa, has_vce)
    if sv and sv not in tags:
        tags.append(sv)
    if weak_label(w, ipa) and len(tags) < 3:
        tags.append(weak_label(w, ipa))
    return tags[:3]


# ── 主流程 ──
src = open(DATA, encoding="utf-8").read()
m = re.search(r'("title": "自然地理",)(.*?)(\n\s*\{\s*\n\s*"title": "植物研究")', src, re.S)
if not m:
    sys.exit("未找到自然地理章节")
body = m.group(2)

count = 0
added = 0


def fix_word(mw):
    global count, added
    count += 1
    word = unescape(mw.group(1))
    if "phonicRule:" in mw.group(2):
        return mw.group(0)
    pm = re.search(r'phonetic: "((?:[^"\\]|\\.)*)"', mw.group(2))
    if not pm:
        return mw.group(0)
    ipa = unescape(pm.group(1)).replace("ˈ", "'").replace("'", "ˈ")
    tags = build_tags(word, ipa)
    rule = "；".join(tags)
    inner = mw.group(2)
    insert = f', phonicRule: "{esc(rule)}"'
    if rule:
        added += 1
    return mw.group(0).replace(inner, inner + insert, 1)


fixed = re.sub(r'\{\s*"id": \d+,\s*"word": "((?:[^"\\]|\\.)*)"(.*?)(?=\n\s*\}(?:,|\n))', fix_word, body, flags=re.S)
src = src[:m.start(2)] + fixed + src[m.end(2):]
open(DATA, "w", encoding="utf-8").write(src)
print(f"处理 {count} 词，{added} 词有规律标签")
