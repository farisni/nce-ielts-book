from bs4 import BeautifulSoup
import json
import re


def clean(text):
    return re.sub(r"\s+", " ", text).strip()


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
    data = parse(
        "/Users/faris/Code/Personal/nce-ielts/.github/skills/nce-scraper/html_cache/lesson-213.html"
    )
    print(json.dumps(data, ensure_ascii=False, indent=2))
