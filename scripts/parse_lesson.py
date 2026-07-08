from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen
import ssl

from bs4 import BeautifulSoup
import argparse
import json
import re


def clean(text):
    return re.sub(r"\s+", " ", text).strip()


def extract_title(html_path):
    """Extract the lesson title from a cached HTML file."""
    with open(html_path, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")
    tag = soup.find("title")
    if not tag:
        return None
    raw = clean(tag.get_text())

    # Map Chinese book numbers: 一→1, 二→2, 三→3, 四→4
    cn_to_num = {"一": "1", "二": "2", "三": "3", "四": "4"}

    # Detect "新概念英语第X册" → NCE{book}_L{lesson}
    nce_match = re.search(r"《新概念英语第([一二三四])册》", raw)
    lesson_match = re.search(r"Lesson\s*(\d+)", raw, re.IGNORECASE)

    if nce_match and lesson_match:
        book_num = cn_to_num.get(nce_match.group(1), "?")
        lesson_num = int(lesson_match.group(1))
        # Strip " 《新概念英语第X册》..." suffix to get the pure title
        title_body = re.sub(r"\s*《[^》]*》.*$", "", raw).strip()
        # Remove the "Lesson N" prefix since we already have L{NN}
        title_body = re.sub(r"^Lesson\s*\d+\s*", "", title_body, flags=re.IGNORECASE).strip()
        # Remove trailing asterisk
        title_body = re.sub(r"\*+$", "", title_body).strip()
        # Sanitize for filename
        safe_title = re.sub(r"[/\\?%*:|\"<>]", "", title_body)
        safe_title = re.sub(r"\s+", "-", safe_title)
        return f"NCE{book_num}_L{lesson_num:02d}-{safe_title}"

    # Remove trailing site suffix like " 《新概念英语第三册》_夸克英语笔记"
    raw = re.sub(r"[  ]*《[^》]*》.*$", "", raw)
    # Sanitize for filename: replace spaces, remove unsafe chars
    safe = re.sub(r"[/\\?%*:|\"<>]", "", raw)
    safe = re.sub(r"\s+", "-", safe)
    return safe


def fetch_url_to_cache(url, cache_dir=None, filename=None):
    """Fetch a web page and save it into a cache directory."""
    if cache_dir is None:
        cache_dir = Path(__file__).resolve().parent / "_cache"
    cache_path = Path(cache_dir)
    if not cache_path.is_absolute():
        cache_path = Path.cwd() / cache_path
    cache_path.mkdir(parents=True, exist_ok=True)

    if filename is None:
        parsed_url = urlparse(url)
        stem = Path(parsed_url.path).stem or "downloaded"
        suffix = Path(parsed_url.path).suffix or ".html"
        filename = f"{stem}{suffix}" if suffix else f"{stem}.html"

    target_path = cache_path / filename
    req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    try:
        with urlopen(req, context=ctx) as response:
            html = response.read().decode("utf-8", errors="replace")
    except Exception as e:
        hint = "网络连接失败" if isinstance(e, OSError) else str(e)
        print(f"无法访问: {url}\n{hint}")
        exit(1)

    target_path.write_text(html, encoding="utf-8")
    return target_path


def parse(html_file):
    with open(html_file, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")

    result = []
    current_sentence = None
    knowledge = []

    nodes = soup.select(".lesson-notes h3, .lesson-notes h4, .lesson-notes .table-responsive, .lesson-notes ul:not(.table-responsive ul)")

    def _parse_table(table):
        rows = []
        for tr in table.find_all("tr"):
            th, td = tr.find("th"), tr.find("td")
            if not th or not td:
                continue
            th_sup = th.find("sup")
            th_desc = clean(th_sup.get_text(" ", strip=True)) if th_sup else ""
            if th_sup:
                th_sup.extract()
            th_title = clean(th.get_text(" ", strip=True))

            td_sup = td.find("sup")
            td_cn = clean(td_sup.get_text(" ", strip=True)) if td_sup else ""
            if td_sup:
                td_sup.extract()
            td_text = clean(td.get_text(" ", strip=True))

            rows.append({"title": th_title, "desc": th_desc, "example": td_text, "example_cn": td_cn})
        return {"rows": rows}

    def _parse_list(ul):
        items = []
        for li in ul.find_all("li", recursive=False):
            sup = li.find("sup")
            note = clean(sup.get_text(" ", strip=True)) if sup else ""
            if sup:
                sup.extract()
            text = clean(li.get_text(" ", strip=True))
            items.append({"text": text, "note": note})
        return {"items": items}

    def _merge_or_standalone(view_type, node):
        """紧跟 h4 则合并到其 view，否则独立节点"""
        parsed = _parse_table(node.find("table")) if view_type == "table" else _parse_list(node)
        if knowledge and "view" not in knowledge[-1]:
            knowledge[-1]["view"] = [view_type]
            knowledge[-1]["data"] = parsed
        elif knowledge and "view" in knowledge[-1]:
            prev = knowledge[-1]
            prev["view"].append(view_type)
            # 同类型追加到已有数组，不同类型新增 key
            if view_type == "table":
                prev["data"].setdefault("rows", []).extend(parsed["rows"])
            else:
                prev["data"].setdefault("items", []).extend(parsed["items"])
        else:
            knowledge.append({"view": [view_type], "data": parsed})

    for node in nodes:
        # h3 句子
        if node.name == "h3":
            if current_sentence:
                result.append({
                    "index": len(result) + 1,
                    "sentence": current_sentence,
                    "knowledgePoint": knowledge,
                })

            current_sentence = clean(node.get_text(" ", strip=True))
            knowledge = []

        # h4 知识点
        elif node.name == "h4":
            if current_sentence:
                sup = node.find("sup")
                desc = ""
                if sup:
                    desc = clean(sup.get_text(" ", strip=True))
                    sup.extract()  # 删除 sup，剩下 title

                title = clean(node.get_text(" ", strip=True))
                knowledge.append({
                    "title": title,
                    "desc": desc,
                })

        # table
        elif node.name == "div":
            table = node.find("table")
            if table and current_sentence:
                _merge_or_standalone("table", node)

        # ul/ol list
        elif node.name == "ul":
            if current_sentence:
                _merge_or_standalone("list", node)

    if current_sentence:
        result.append({
            "index": len(result) + 1,
            "sentence": current_sentence,
            "knowledgePoint": knowledge,
        })

    return result


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Parse lesson HTML or fetch a page into the local cache")
    parser.add_argument("html_file", nargs="?", help="Path to an HTML file")
    parser.add_argument("--url", help="Remote URL to download into the cache directory")
    parser.add_argument("--cache-dir", default=None, help="Directory for downloaded HTML files (default: _cache/ under script directory)")
    parser.add_argument("--output", help="Optional output file for parsed JSON")
    args = parser.parse_args()

    if args.url:
        cached_path = fetch_url_to_cache(args.url, cache_dir=args.cache_dir)
        print(f"Cached: {cached_path}")
        input_path = cached_path
    elif args.html_file:
        input_path = Path(args.html_file)
    else:
        parser.print_help()
        exit(1)

    data = parse(str(input_path))
    payload = json.dumps(data, ensure_ascii=False, indent=2)

    if args.output:
        output_path = Path(args.output)
    else:
        output_dir = Path(__file__).resolve().parent / "_output"
        output_dir.mkdir(parents=True, exist_ok=True)
        title = extract_title(str(input_path))
        if title:
            output_path = output_dir / f"{title}.json"
        else:
            output_path = output_dir / f"{input_path.stem}.json"

    output_path.write_text(payload, encoding="utf-8")
    print(f"Saved: {output_path}")
