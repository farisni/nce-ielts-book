#!/usr/bin/env python3
"""
用 Edge TTS 的 SSML phoneme 直接合成 48 个英语音素的标准发音，
存到 public/audio/phonetic/ipa/{音素}.mp3（如 æ.mp3、iː.mp3、tʃ.mp3）。

- 音素列表从 src/lib/speller/phonetic.ts 的 phonetics 字段解析（去重）
- 使用与哇学社相同的 en-GB-SoniaNeural 声音
- 已有文件跳过（增量）
用法：uv run --with edge-tts python3 scripts/waxue-ipa-audio.py
"""
import asyncio
import json
import os
import re
import sys

sys.path.insert(0, ".")
import edge_tts  # noqa: E402

VOICE = "en-GB-SoniaNeural"
DATA = "src/lib/speller/phonetic.ts"
OUT_DIR = "public/audio/phonetic/ipa"


def unescape(s: str) -> str:
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s


def collect_phonemes() -> list[str]:
    src = open(DATA, encoding="utf-8").read()
    phonemes: list[str] = []
    for m in re.finditer(r'phonetics: "([^"]+)"', src):
        ph = unescape(m.group(1)).strip().strip("/")
        if ph and ph not in phonemes:
            phonemes.append(ph)
    return phonemes


async def synth(phoneme: str, path: str) -> bool:
    ssml = (
        '<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-GB">'
        f'<voice name="{VOICE}"><phoneme alphabet="ipa" ph="{phoneme}">a</phoneme></voice></speak>'
    )
    try:
        c = edge_tts.Communicate(ssml, VOICE)
        await c.save(path)
        return os.path.getsize(path) > 500
    except Exception:
        return False


async def main():
    phonemes = collect_phonemes()
    print(f"共 {len(phonemes)} 个音素: {' '.join(phonemes)}")
    os.makedirs(OUT_DIR, exist_ok=True)
    ok = skip = fail = 0
    for ph in phonemes:
        path = os.path.join(OUT_DIR, f"{ph}.mp3")
        if os.path.exists(path):
            skip += 1
            continue
        if await synth(ph, path):
            ok += 1
            print(f"  ✓ {ph}")
        else:
            fail += 1
            print(f"  ✗ {ph}")
    print(f"完成：新增 {ok}，已有 {skip}，失败 {fail}")


if __name__ == "__main__":
    asyncio.run(main())
