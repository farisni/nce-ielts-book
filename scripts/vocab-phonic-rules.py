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

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from syllables_ipa import ipa_vowel_nuclei, spell_vowel_nuclei  # noqa: E402

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
            # 长音必须带 ː 完整匹配（如 iː/uː），双元音子串匹配
            if sound in ipa:
                note = "（需记）" if pair in ("ui", "ei", "ea", "ie") and pair not in ("ee", "ai", "ay", "oa", "oi", "oy") else ""
                return f"{pair}=/{sound}/{note}"
    return None


SUFFIXES = [
    ("-tion", "ʃən", "/ʃən/"), ("-sion", "ʃən", "/ʃən/"), ("-ous", "əs", "/əs/"),
    ("-ic", "ɪk", "/ɪk/"), ("-al", "əl", "/əl/"), ("-en", "ən", "/ən/（弱读）"),
    ("-er", "ə", "/ə(r)/"), ("-or", "ə", "/ə(r)/"),
    ("-ble", "l", "/l/（成音节）"), ("-dle", "l", "/l/（成音节）"), ("-cle", "l", "/l/（成音节）"),
    ("-gle", "l", "/l/（成音节）"), ("-kle", "l", "/l/（成音节）"), ("-ple", "l", "/l/（成音节）"),
    ("-tle", "l", "/l/（成音节）"), ("-zle", "l", "/l/（成音节）"), ("-fle", "l", "/l/（成音节）"),
    ("-ance", "əns", "/əns/"), ("-ence", "əns", "/əns/"), ("-ment", "mənt", "/mənt/"),
    ("-ful", "fl", "/fl/"), ("-ness", "nəs", "/nəs/"), ("-ture", "tʃə", "/tʃə(r)/"),
    ("-able", "əbl", "/əbl/"), ("-ible", "ɪbl", "/ɪbl/"), ("-ly", "li", "/li/"),
]


def probe_hit(probe: str, ipa: str) -> bool:
    """音标子串验证：支持 (ə) 括号变体与 ə 省略（-tion 读 ʃn 或 ʃən）"""
    ipa2 = ipa.replace("(", "").replace(")", "")
    if probe in ipa2:
        return True
    cand = probe.replace("ə", "")
    return len(cand) >= 2 and cand in ipa2


def suffix_label(w: str, ipa: str) -> str | None:
    low = w.lower()
    for suf, probe, label in SUFFIXES:
        if low.endswith(suf.lstrip("-")):
            if probe_hit(probe, ipa):
                return label
    return None


CONSONANTS = [
    ("sh", "ʃ", "sh=/ʃ/"), ("ch", "tʃ", "ch=/tʃ/"), ("th", "θ", "th=/θ/"), ("ph", "f", "ph=/f/"),
    ("wh", "w", "wh=/w/"), ("kn", "n", "kn- 不发音 k"), ("wr", "r", "wr- 不发音 w"),
    ("mb", "m", "-mb 不发音 b"), ("ck", "k", "-ck=/k/"), ("ng", "ŋ", "ng=/ŋ/"),
    ("qu", "kw", "qu=/kw/"), ("sc", "s", "sc=/s/（c 不发音）"), ("x", "ks", "x=/ks/"),
]


def consonant_labels(w: str, ipa: str) -> list[str]:
    """收集单词内所有辅音组合规律（音标验证），按词内出现顺序，最多 2 个"""
    low = w.lower()
    found = []
    for comb, probe, label in CONSONANTS:
        if comb in low:
            p = probe.replace("ː", "")
            if p in ipa.replace("ː", ""):
                found.append((low.index(comb), label))
    found.sort()
    return [l for _, l in found][:2]


def weak_label(w: str, ipa: str) -> str | None:
    """非重读弱化：多音节词中非重读音节元音发 /ə/（排除双元音 əʊ/ɪə/eə/ʊə 内的 ə）"""
    if "ˈ" not in ipa:
        return None
    rest = ipa.replace("əʊ", "").replace("ɪə", "").replace("eə", "").replace("ʊə", "").replace("(", "").replace(")", "")
    if "ə" in rest:
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
    m = re.search(r'([aiɪeɛæɑɔouʊəɜʌɐɒ](?:ː|[ɪəʊeɔæu])?(?:j?uː)?)', after)
    return m.group(1) if m else ""


def single_vowel_label(w: str, ipa: str, has_vce: bool) -> str | None:
    """重读单字母元音规律（闭音节短音 / 开音节字母音）：
    重音核序号 → 拼写对应元音字母 → 验证与读音匹配"""
    if "ˈ" not in ipa:
        return None
    # 元音组合已命中（重读多为组合音，如 rain/light/snow）→ 不再标单字母
    if vowel_pair_label(w, ipa):
        return None
    # 重读音节序号（重音符号前的核数）
    before = ipa[:ipa.index("ˈ")].replace("ˈ", "").replace("ˌ", "")
    stressed_idx = ipa_vowel_nuclei(before)
    nuclei = spell_vowel_nuclei(w)
    if stressed_idx >= len(nuclei):
        return None
    v_letter = w[nuclei[stressed_idx][0]].lower()
    after = ipa[ipa.index("ˈ") + 1:]
    sound = first_stress_sound(after)
    for s, label in STRESS_SOUNDS:
        if sound == s or sound.startswith(s.rstrip("ː") + "ː"):
            # 标签元音字母必须等于拼写重读元音字母
            if not label.startswith(v_letter + "="):
                continue
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
    for fn in (opaque_label, vce_label, vowel_pair_label, suffix_label):
        t = fn(w, ipa)
        if t and t not in tags:
            tags.append(t)
    for t in consonant_labels(w, ipa):
        if t not in tags:
            tags.append(t)
    sv = single_vowel_label(w, ipa, has_vce)
    if sv and sv not in tags:
        tags.append(sv)
    if weak_label(w, ipa) and len(tags) < 3:
        tags.append(weak_label(w, ipa))
    return tags[:3]


# ── 主流程 ──
def main():
    src = open(DATA, encoding="utf-8").read()
    m = re.search(r'("title": "自然地理",)(.*?)(\n\s*\{\s*\n\s*"title": "植物研究")', src, re.S)
    if not m:
        sys.exit("未找到自然地理章节")
    body = m.group(2)

    count = 0
    added = 0


    def fix_word(mw):
        nonlocal count, added
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


if __name__ == "__main__":
    main()
