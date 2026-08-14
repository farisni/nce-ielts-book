#!/usr/bin/env python3
# 用 Free Dictionary API（dictionaryapi.dev，免费无 key）补雅思王听力缺失的单词音标：
# - 只处理缺音标的【单词】（词组无在线音标源，跳过）
# - 取 UK 音标（phonetics[].text，优先含 UK 标记的），清理 / 与 [] 包裹
# - 写入时保持 JSON 转义风格（与数据文件一致）
# 用法：python3 scripts/whale-phonetic-online.py
import json
import re
import time
import urllib.request

FILES = [
    "src/lib/speller/whale-chapter-3.ts",
    "src/lib/speller/whale-chapter-4.ts",
    "src/lib/speller/whale-chapter-5.ts",
    "src/lib/speller/whale-chapter-8.ts",
    "src/lib/speller/whale-chapter-11.ts",
]

# 有道词典公开接口（无需 key，返回 ukphone/usphone）
API = "https://dict.youdao.com/jsonapi?q={}"


def unescape(s: str) -> str:
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=True)[1:-1]


def clean_ipa(ipa: str) -> str:
    """去斜杠/方括号包裹，去掉 (UK) 等标记"""
    ipa = ipa.strip().strip("/[]").strip()
    ipa = re.sub(r"\s*\(UK\)\s*|\s*\(US\)\s*", "", ipa, flags=re.I)
    return ipa


def fetch_ipa(word: str) -> str | None:
    url = API.format(urllib.parse.quote(word))
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read().decode("utf-8"))
        word_entry = (data.get("ec") or {}).get("word") or []
        if not word_entry:
            return None
        uk = word_entry[0].get("ukphone") or ""
        us = word_entry[0].get("usphone") or ""
        ph = uk or us
        return clean_ipa(ph) if ph else None
    except Exception:
        return None


def main():
    import urllib.parse
    # 收集缺音标的单词
    missing = []
    for path in FILES:
        src = open(path, encoding="utf-8").read()
        for line in src.split("\n"):
            wm = re.search(r'word:\s*"([^"]+)"', line)
            if wm and 'phonetic: ""' in line:
                w = unescape(wm.group(1))
                if " " not in w and "/" not in w:
                    missing.append((path, line, w))
    print(f"待获取 {len(missing)} 个单词音标")

    ok = fail = 0
    for path, line, word in missing:
        ipa = fetch_ipa(word)
        # "=" 变体形式（archaeologist=archeologist）→ 依次尝试每个变体
        if not ipa and "=" in word:
            for variant in word.split("="):
                variant = variant.strip()
                if variant:
                    ipa = fetch_ipa(variant)
                    if ipa:
                        break
        # 连字符复合词（lactose-free）→ 拆分各部件查音标后拼接
        if not ipa and "-" in word:
            parts = word.split("-")
            part_ipa = [fetch_ipa(p) for p in parts]
            if all(part_ipa):
                ipa = "".join(part_ipa)
        if ipa:
            src = open(path, encoding="utf-8").read()
            new_line = line.replace('phonetic: ""', f'phonetic: "{esc(ipa)}"', 1)
            src = src.replace(line, new_line, 1)
            open(path, "w", encoding="utf-8").write(src)
            ok += 1
            print(f"  ✓ {word}: {ipa}")
        else:
            fail += 1
            print(f"  ✗ {word}")
        time.sleep(0.3)  # 限速，避免 API 限流
    print(f"完成：成功 {ok}，失败 {fail}")


if __name__ == "__main__":
    main()
