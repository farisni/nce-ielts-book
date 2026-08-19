#!/usr/bin/env python3
"""
为元辅组合听写课程（phonics-mixed.ts，144 词）抓取原声（哇学社 tts 接口，Edge TTS 合成），
下载到 public/audio/mixed/{chapter-slug}/{word}.mp3，并写入数据文件 audio 字段。

- POST api.waxueshe.com/api/v2/phonetic/tts  {text, voice}
- voice: uk_female（英式）
- 限速 0.3s，失败自动重试 3 次
用法：python3 scripts/waxue-mixed-audio.py [--token <TOKEN>]
"""
import json
import os
import re
import sys
import time
import urllib.request

TTS = "https://api.waxueshe.com/api/v2/phonetic/tts"
VOICE = "uk_female"
DATA = "src/lib/speller/phonics-mixed.ts"
AUDIO_DIR = "public/audio/mixed"


def get_token() -> str:
    if "--token" in sys.argv:
        return sys.argv[sys.argv.index("--token") + 1]
    try:
        return open("/tmp/waxue-token.txt", encoding="utf-8").read().strip().strip('"')
    except Exception:
        sys.exit("缺少 token：请传 --token <TOKEN>")


def unescape(s: str) -> str:
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=True)[1:-1]


def fetch_tts(word: str, token: str) -> str | None:
    body = json.dumps({"text": word, "voice": VOICE}).encode("utf-8")
    req = urllib.request.Request(TTS, data=body, method="POST", headers={
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}",
        "User-Agent": "Mozilla/5.0",
    })
    with urllib.request.urlopen(req, timeout=20) as r:
        data = json.loads(r.read().decode("utf-8"))
    if data.get("code") != 0:
        return None
    url = data.get("data", {}).get("url")
    return url if url else None


def download(url: str, path: str) -> bool:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        content = r.read()
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "wb") as f:
        f.write(content)
    return len(content) > 1000  # mp3 至少 1KB，过小视为失败


def main():
    token = get_token()
    src = open(DATA, encoding="utf-8").read()
    lines = src.split("\n")

    word_lines: list[tuple[int, str, str, str]] = []  # (行号, 原行, word, chapter-slug)
    cur_slug = ""
    for i, line in enumerate(lines):
        sm = re.search(r'slug: "(mixed-[a-z]+)"', line)
        if sm:
            cur_slug = sm.group(1)
        wm = re.search(r'\{\s*word: "([^"]+)"', line)
        if wm and cur_slug:
            word_lines.append((i, line, unescape(wm.group(1)), cur_slug))

    unique = {w for _, _, w, _ in word_lines}
    print(f"待爬 {len(word_lines)} 行（去重 {len(unique)} 词）")

    ok = skip = fail = 0
    for idx, (lineno, line, word, slug) in enumerate(word_lines):
        safe = re.sub(r"[^a-zA-Z0-9'\-]", "", word) or "word"
        path = os.path.join(AUDIO_DIR, slug, f"{safe}.mp3")
        if os.path.exists(path):
            skip += 1
        else:
            url = None
            for attempt in range(3):
                url = fetch_tts(word, token)
                if url:
                    break
                time.sleep(1.5)
            if not url:
                fail += 1
                print(f"  ✗ {word}（tts 失败）")
                continue
            if not download(url, path):
                fail += 1
                print(f"  ✗ {word}（下载失败）")
                continue
            ok += 1
        audio_url = f"/audio/mixed/{slug}/{safe}.mp3"
        if 'audio: ""' in line:
            pm = re.search(r'(phonetic: "[^"]*")', line)
            if pm:
                new_line = line.replace('audio: ""', f'audio: "{esc(audio_url)}"', 1)
                if new_line == line:
                    new_line = line.replace(pm.group(1), pm.group(1) + f', audio: "{esc(audio_url)}"', 1)
                lines[lineno] = new_line
        time.sleep(0.3)
        if (idx + 1) % 50 == 0:
            print(f"  … {idx + 1}/{len(word_lines)}")

    open(DATA, "w", encoding="utf-8").write("\n".join(lines))
    print(f"完成：新增 {ok}，已有 {skip}，失败 {fail}")


if __name__ == "__main__":
    main()
