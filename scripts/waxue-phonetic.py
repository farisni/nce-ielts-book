#!/usr/bin/env python3
"""
爬取哇学社「英式音标轻松学」（lesson 4）全部 48 个音标单元与单词数据，
生成 src/lib/speller/phonetic.ts（WhaleChapter[] 结构，按音标类别分 Chapter）。

- 数据源：api.waxueshe.com/api/v2/phonetic/lesson_details + chapter_details
- 需登录 token（从 /tmp/waxue-token.txt 读，或用 --token 传入）
- 音标去斜杠包裹；释义多行（n. xxx\\nv. xxx）保留；音节取 phonetic_split.syllable_split
用法：python3 scripts/waxue-phonetic.py
"""
import json
import re
import sys
import time
import urllib.parse
import urllib.request

API = "https://api.waxueshe.com/api/v2/phonetic/{}"
LESSON_ID = 4
OUT = "src/lib/speller/phonetic.ts"


def get_token() -> str:
    if "--token" in sys.argv:
        return sys.argv[sys.argv.index("--token") + 1]
    try:
        return open("/tmp/waxue-token.txt", encoding="utf-8").read().strip().strip('"')
    except Exception:
        sys.exit("缺少 token：请传 --token <TOKEN>")


def fetch(path: str, params: dict | None = None, token: str = "") -> dict:
    url = API.format(path)
    if params:
        url += "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}", "User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=20) as r:
        data = json.loads(r.read().decode("utf-8"))
    if data.get("code") != 0:
        raise RuntimeError(f"{path} 失败: {data}")
    return data["data"]


def esc(s: str) -> str:
    """TS 字符串转义（与数据文件风格一致：ensure_ascii 转义非 ASCII）"""
    return json.dumps(s, ensure_ascii=True)[1:-1]


def clean_ipa(ipa: str) -> str:
    """去 /…/ 包裹，去重音标签等"""
    if not ipa:
        return ""
    return ipa.strip().strip("/[]").strip()


def extract_pos(translation: str) -> str:
    """从释义提取词性（n. / v. / adj. / adv. / prep. / pron. / conj. / num. / int. / art. …）"""
    m = re.match(r"^\s*((?:[a-z]+\.\s*){1,3})", translation)
    return m.group(1).strip() if m else ""


def main():
    token = get_token()
    details = fetch("lesson_details", {"id": LESSON_ID}, token)
    lesson = details["phonetic_lesson_details"]
    courses = lesson["lesson_courses"]
    print(f"课程「{lesson['name']}」共 {len(courses)} 个音标单元")

    # 音标类别 → Chapter 分组（按 describe.type）
    chapters: dict[str, list] = {}

    def chapter_for(ctype: str) -> list:
        if ctype not in chapters:
            chapters[ctype] = []
        return chapters[ctype]

    total_words = 0
    for c in courses:
        ch = fetch("chapter_details", {"lesson_id": LESSON_ID, "lesson_course_id": c["id"]}, token)
        words = ch.get("words") or []
        entries = []
        for w in words:
            di = (w.get("dict_infos") or [{}])[0]
            word = di.get("word") or w.get("word") or ""
            ipa = clean_ipa(di.get("ipa_uk") or "")
            trans = (di.get("translation") or "").replace("\r\n", "\n").replace("\r", "\n").strip()
            syll = None
            ps = di.get("phonetic_split") or {}
            if isinstance(ps, dict):
                ss = ps.get("syllable_split")
                # 结构 {uk: [{ipa, spelling}...], us: [...]}，取 uk 的 spelling 序列
                if isinstance(ss, dict):
                    parts = ss.get("uk") or ss.get("us") or []
                    syll = [str(x.get("spelling", "")).strip() for x in parts if isinstance(x, dict)]
                    syll = [s for s in syll if s]
                elif isinstance(ss, list) and len(ss) > 1:
                    syll = [str(x) for x in ss if str(x).strip()]
            if not trans:
                print(f"  ⚠ {word} 无释义，跳过")
                continue
            entries.append({"word": word, "ipa": ipa, "trans": trans, "syll": syll})
        if not entries:
            print(f"  ⚠ 单元 {c['name']} 无单词，跳过")
            continue
        chapter_for(c["describe"]["type"]).append(
            {"id": c["id"], "name": c["name"], "phonetics": c["describe"].get("display_phonetics") or "",
             "method": c["describe"].get("learning_method") or [], "words": entries}
        )
        total_words += len(entries)
        print(f"  ✓ {c['name']}（{c['describe']['type']}）{len(entries)} 词")
        time.sleep(0.4)

    # 类别排序：元音在前，辅音在后
    order = ["前元音", "中元音", "后元音", "合口双元音", "集中双元音", "辅音"]
    ordered = [k for k in order if k in chapters] + [k for k in chapters if k not in order]
    print(f"\n分组: {[f'{k}×{len(chapters[k])}' for k in ordered]}，共 {total_words} 词")

    # 生成 TS
    lines = [
        '// 哇学社「英式音标轻松学」音标课程数据（waxueshe.com/phoneticCourse/detail/2663）',
        "// 按音标类别分 Chapter，每单元（如 前元音 /æ/）为 Test；音节取平台拆分数据",
        'import type { WhaleChapter, WhaleTest } from "./whale-king"',
        "",
        "const T: WhaleChapter[] = [",
    ]
    for ci, ctype in enumerate(ordered):
        tests = chapters[ctype]
        slug_base = f"waxue-{ci + 1}"
        lines.append(f"  {{")
        lines.append(f'    name: "{ctype}",')
        lines.append(f'    emoji: "🔤",')
        lines.append(f'    slug: "chapter-{ci + 1}",')
        lines.append(f'    description: "{len(tests)} 个音标单元",')
        lines.append(f"    tests: [")
        for t in tests:
            lines.append(f"      {{")
            lines.append(f'        name: "{esc(t["name"])}",')
            lines.append(f'        slug: "unit-{t["id"]}",')
            lines.append(f'        phonetics: "{esc(t["phonetics"])}",')
            lines.append(f"        wordCount: {len(t['words'])}, difficulty: 2,")
            lines.append(f"        words: [")
            for w in t["words"]:
                syll = f', syllables: [{", ".join(json.dumps(s, ensure_ascii=True) for s in w["syll"])}]' if w["syll"] else ""
                pos = extract_pos(w["trans"])
                pos_f = f', pos: "{esc(pos)}"' if pos else ""
                lines.append(
                    f'          {{ word: "{esc(w["word"])}", phonetic: "{esc(w["ipa"])}", '
                    f'meaning: "{esc(w["trans"])}", audio: ""{pos_f}{syll} }},'
                )
            lines.append(f"        ],")
            lines.append(f"      }},")
        lines.append(f"    ],")
        lines.append(f"  }},")
    lines.append("]")
    lines.append("")
    lines.append("export { T as WAXUE_CHAPTERS }")
    lines.append("")
    lines.append("/** 按 chapter slug + test slug 查找音标单元 */")
    lines.append("export function getWaxueTest(chapterSlug: string, testSlug: string): WhaleTest | undefined {")
    lines.append('  const ch = T.find((c) => c.slug === chapterSlug)')
    lines.append("  return ch?.tests.find((t) => t.slug === testSlug)")
    lines.append("}")
    lines.append("")

    open(OUT, "w", encoding="utf-8").write("\n".join(lines))
    print(f"\n已生成 {OUT}（{len(ordered)} Chapter，{total_words} 词）")


if __name__ == "__main__":
    main()
