from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen

from bs4 import BeautifulSoup
import argparse
import json
import re


def clean(text):
    return re.sub(r"\s+", " ", text).strip()


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
    with urlopen(req) as response:
        html = response.read().decode("utf-8", errors="replace")

    target_path.write_text(html, encoding="utf-8")
    return target_path


def parse(html_file):
    with open(html_file, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")

    result = []
    current_sentence = None
    knowledge = []

    nodes = soup.select(".lesson-notes h3, .lesson-notes h4")

    for node in nodes:
        # h3 句子
        if node.name == "h3":
            if current_sentence:
                result.append({
                    "index": len(result) + 1,
                    "sentence": current_sentence,
                    "knowledge": knowledge,
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

    if current_sentence:
        result.append({
            "index": len(result) + 1,
            "sentence": current_sentence,
            "knowledge": knowledge,
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
        output_path.write_text(payload, encoding="utf-8")
        print(f"Saved: {output_path}")
    else:
        print(payload)
