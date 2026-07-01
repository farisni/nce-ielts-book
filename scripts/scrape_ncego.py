#!/usr/bin/env python3
"""
ncego.com 课程抓取器 → Article TS 数据结构
用法: python3 scripts/scrape_ncego.py <URL> [--preview]

依赖: 无（自包含）
"""
import re, sys, os, argparse
from urllib.request import urlopen, Request

# ── parse_html (from nce-export) ──
from html import unescape

def _clean(t):
    if not t: return ''
    t = unescape(t); t = t.replace('\u00a0',' '); t = re.sub(r'\s+',' ',t)
    return t.strip()

def parse_html(content):
    """从 HTML 提取结构化数据"""
    title_m = re.search(r'<title>(.*?)</title>', content)
    title_full = title_m.group(1) if title_m else ''
    en_cn = re.match(r'Lesson (\d+) (.+?) (.+?) ', title_full)
    lesson_no = int(en_cn.group(1)) if en_cn else 1
    title_en = en_cn.group(2) if en_cn else ''
    title_cn = en_cn.group(3) if en_cn else ''
    update_m = re.search(r'更新于:(\d{4}-\d{2}-\d{2})', content)
    updated = update_m.group(1) if update_m else ''

    metadata = {
        'book': '新概念英语第四册', 'lesson_no': lesson_no,
        'title_en': title_en, 'title_cn': title_cn, 'updated': updated
    }

    wl_m = re.search(r'<div class="word_list.*?</div>\s*</div>\s*</div>', content, re.DOTALL)
    vocabulary = []
    if wl_m:
        for w in re.findall(r'<h4[^>]*>(.*?)</h4>\s*(<small[^>]*>.*?</small>)?\s*(<small[^>]*>.*?</small>)?', wl_m.group(), re.DOTALL):
            vocabulary.append({
                'word': _clean(re.sub(r'<[^>]+>','',w[0])),
                'phonetic': _clean(re.sub(r'<[^>]+>','',w[1] or '')),
                'pos': _clean(re.sub(r'<[^>]+>','',w[2] or ''))
            })

    lc_m = re.search(r'<div[^>]*class="[^"]*lesson-content[^"]*"[^>]*>(.*?)<div id="exercises"', content, re.DOTALL)
    body = lc_m.group(1) if lc_m else ''

    parts = re.split(r'<h3[^>]*>(.*?)</h3>', body)
    sections = []

    i = 1
    while i < len(parts) - 1:
        h3_html = parts[i]; h3_body = parts[i+1]
        h3_text = _clean(re.sub(r'<[^>]+>','',h3_html))
        if not h3_text or '单词列表' in h3_text: i += 2; continue

        predicates = [_clean(re.sub(r'<[^>]+>','',m.group(1))) for m in re.finditer(r'<span style="color: #ba372a;">(.*?)</span>', h3_html)]
        predicates = [p for p in predicates if p]
        auxiliaries = [_clean(re.sub(r'<[^>]+>','',m.group(1))) for m in re.finditer(r'<span style="color: #843fa1;">(.*?)</span>', h3_html)]
        auxiliaries = [a for a in auxiliaries if a]

        annotations = []
        for m in re.finditer(r'<abbr[^>]*title="([^"]+)"[^>]*>(.*?)</abbr>', h3_html):
            annotations.append({'text': _clean(re.sub(r'<[^>]+>','',m.group(2))), 'tip': unescape(m.group(1)).strip()})

        bg_quotes = []
        for bgm in re.finditer(r'background-color: #ecf0f1', h3_html):
            span_start = h3_html.rfind('<span', 0, bgm.start())
            depth = 0; span_end = span_start
            for j in range(span_start, len(h3_html)):
                if h3_html[j:j+5]=='<span': depth += 1
                elif h3_html[j:j+7]=='</span>':
                    depth -= 1
                    if depth==0: span_end=j+7; break
            bg_text = _clean(re.sub(r'<[^>]+>','',h3_html[span_start:span_end]))
            if bg_text and bg_text not in bg_quotes: bg_quotes.append(bg_text)

        h4_parts = re.split(r'<h4[^>]*>(.*?)</h4>', h3_body)
        preamble = _clean(re.sub(r'<[^>]+>','',h4_parts[0])) if h4_parts else None

        details = []
        j = 1
        while j < len(h4_parts) - 1:
            h4_title = _clean(re.sub(r'<[^>]+>','',h4_parts[j]))
            h4_body_text = h4_parts[j+1]

            examples = []
            for li in re.findall(r'<li[^>]*>(.*?)</li>', h4_body_text, re.DOTALL):
                en = _clean(re.sub(r'<[^>]+>','',re.sub(r'<sup>.*?</sup>','',li)))
                cn_m = re.search(r'<sup>(.*?)</sup>', li)
                cn = _clean(unescape(cn_m.group(1))) if cn_m else ''
                if en: examples.append({'en':en,'cn':cn})

            tables = []
            for tm in re.finditer(r'<table[^>]*>(.*?)</table>', h4_body_text, re.DOTALL):
                tb = tm.group(1)
                trs = re.findall(r'<tr[^>]*>(.*?)</tr>', tb, re.DOTALL)
                if not trs: continue
                first_tds = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', trs[0], re.DOTALL)
                if len(first_tds)==2 and re.search(r'<strong>', first_tds[0]):
                    rows = []
                    for tr in trs:
                        tds = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', tr, re.DOTALL)
                        if len(tds)>=2:
                            main = _clean(re.sub(r'<[^>]+>','',re.sub(r'<sup>.*?</sup>','',tds[0])))
                            sup_m = re.search(r'<sup>(.*?)</sup>', tds[0])
                            sup = _clean(unescape(sup_m.group(1))) if sup_m else ''
                            ct = _clean(unescape(re.sub(r'<[^>]+>','',tds[1])))
                            if main: rows.append({'main':main,'sup':sup,'content':ct})
                    if rows: tables.append(rows)
                else:
                    rows = [[_clean(unescape(re.sub(r'<[^>]+>','',td))) for td in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', tr, re.DOTALL)] for tr in trs]
                    if rows: tables.append(rows)

            if h4_title:
                detail = {'title':h4_title, 'examples':examples}
                if tables: detail['tables'] = tables
                details.append(detail)
            j += 2

        sections.append({
            'sentence':h3_text, 'predicates':predicates, 'auxiliaries':auxiliaries,
            'background_quotes':bg_quotes, 'annotations':annotations,
            'preamble':preamble, 'details':details
        })
        i += 2

    ex_m = re.search(r'<div id="exercises"[^>]*>(.*?)</section>', content, re.DOTALL)
    questions, answers = [], []
    if ex_m:
        ex_body = ex_m.group(1)
        for q in re.findall(r'<h6[^>]*>(.*?)</h6>', ex_body, re.DOTALL):
            questions.append(_clean(re.sub(r'<sup>.*?</sup>','',q)))
        for a in re.findall(r'<div class="([^"]*answer[^"]*)">(.*?)</div>', ex_body, re.DOTALL):
            answers.append({'text':_clean(re.sub(r'<[^>]+>','',a[1])), 'correct':'is_answer' in a[0]})

    exercises = {'questions':questions, 'answers':answers}
    return {'metadata':metadata, 'content':{'vocabulary':vocabulary,'sections':sections,'exercises':exercises}}

def esc(s):
    if not s: return ''
    return s.replace('\\', '\\\\').replace('"', '\\"')

def split_cn(s):
    """Split at first CJK character: 'term meaning' → (term, meaning)"""
    if not s: return '', ''
    for i, c in enumerate(s):
        if '\u4e00' <= c <= '\u9fff' or '\uff00' <= c <= '\uffef' or '\u3000' <= c <= '\u303f':
            if i > 0:
                return s[:i].rstrip(), s[i:].lstrip()
            break
    return s.strip(), ''

def detail_to_panel(d):
    rows = []
    for ex in d.get('examples', []):
        en = esc(ex.get('en', ''))
        cn = esc(ex.get('cn', ''))
        if not cn and re.search(r'[\u4e00-\u9fff]', en):
            en_split, cn_split = split_cn(en)
            rows.append(f'{{ word: "", meaning: "", enExample: "{esc(en_split)}", zhExample: "{esc(cn_split)}" }}')
        else:
            rows.append(f'{{ word: "", meaning: "", enExample: "{en}", zhExample: "{cn}" }}')
    for tbl in d.get('tables', []):
        for row in tbl:
            if isinstance(row, dict):
                w, m = split_cn(row.get('main', ''))
                en, zh = split_cn(row.get('content', ''))
                rows.append(f'{{ word: "{esc(w)}", meaning: "{esc(m)}", enExample: "{esc(en)}", zhExample: "{esc(zh)}" }}')
            elif isinstance(row, list) and len(row) >= 2:
                w, m = split_cn(str(row[0]))
                en, zh = split_cn(str(row[1]))
                rows.append(f'{{ word: "{esc(w)}", meaning: "{esc(m)}", enExample: "{esc(en)}", zhExample: "{esc(zh)}" }}')
    if not rows:
        return None
    return f'{{ label: "{esc(d["title"])}", description: "", examples: [{", ".join(rows)}] }}' 

def anno_to_inline(a):
    return f'{{ label: "{esc(a["text"])}", description: "{esc(a["tip"])}" }}'

def generate_article(data):
    secs = data['content']['sections']
    
    pending_idx = 0
    for idx, s in enumerate(secs):
        txt = s['sentence']
        has_en = len(re.findall(r'[A-Za-z]{2,}', txt)) >= 3
        has_pred = len(s['predicates']) > 0 or len(s['auxiliaries']) > 0
        if (has_en and len(txt) > 60) or has_pred:
            break
        pending_idx = idx + 1
    
    preamble = secs[:pending_idx]
    content = secs[pending_idx:]
    
    pending_entries = []
    for s in preamble:
        for d in s['details']:
            pending_entries.append(f'{{ label: "{esc(d["title"])}", description: "" }}')
    
    sentences = []
    idx = 0
    while idx < len(content):
        sec = content[idx]
        msent = sec['sentence']
        msecs = [sec]
        while idx + 1 < len(content):
            nxt = content[idx + 1]
            if msent.rstrip().endswith(';') or not re.match(r'^[A-Z]', nxt['sentence']):
                msent = msent.rstrip() + ' ' + nxt['sentence'].lstrip()
                msecs.append(nxt)
                idx += 1
            else:
                break
        
        all_p, all_a, all_i, all_ep = [], [], [], []
        for ms in msecs:
            for p in ms['predicates']:
                if p not in all_p: all_p.append(p)
            for a in ms['auxiliaries']:
                if a not in all_a: all_a.append(a)
            for a in ms['annotations']:
                all_i.append(anno_to_inline(a))
            for d in ms['details']:
                pn = detail_to_panel(d)
                if pn: all_ep.append(pn)
        
        ps = '[' + ', '.join([f'"{p}"' for p in all_p]) + ']'
        ax = '[' + ', '.join([f'"{a}"' for a in all_a]) + ']'
        il = '[' + ', '.join(all_i) + ']'
        ep = '[' + ', '.join(all_ep) + ']' if all_ep else '[]'
        
        sentences.append(
            f'        {{ text: "{esc(msent)}", translation: "", '
            f'predicates: {ps}, clauseIntroducers: [], auxiliaries: {ax}, '
            f'inlineAnnotations: {il}, expansionNotes: {ep} }}'
        )
        idx += 1
    
    vocab = []
    for v in data['content']['vocabulary']:
        vocab.append(
            f'{{ word: "{esc(v.get("word",""))}", pos: "{esc(v.get("pos",""))}", '
            f'meaning: "{esc(v.get("meaning",""))}", phonetic: "{esc(v.get("phonetic",""))}" }}'
        )
    
    m = data['metadata']
    ln = m['lesson_no']
    en = esc(m['title_en'])
    cn = esc(m['title_cn'])
    
    nl = '\n'
    out = f'''const articleNce4L{ln}: Article = {{

  id: "nce4-l{ln}",
  lesson: {ln},
  tag: "C{ln}",
  title: "{en}",
  titleCn: "{cn}",
  level: "NCE4",
  keyArticle: true,
  heatmap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],

  attribution: "",
  notesOnText: [],
'''
    if pending_entries:
        out += f'\n  pendingNotes: [\n    {",".join([nl + "    " + e for e in pending_entries]).lstrip(",")}\n  ],\n'
    
    out += f'''
  original: {{
    paragraphs: [
      [
'''
    out += ',\n'.join(sentences)
    out += f'''
      ]
    ],
  }},

  vocabulary: [
    {", ".join(vocab)}
  ],
}};
'''
    return out

def main():
    parser = argparse.ArgumentParser(description='ncego.com → Article TS')
    parser.add_argument('url', help='Lesson URL e.g. https://www.ncego.com/lessons/235')
    parser.add_argument('--preview', action='store_true', help='Preview parsed data')
    args = parser.parse_args()
    
    m = re.search(r'/lessons/(\d+)', args.url)
    if not m:
        print('ERROR: cannot extract lesson ID from URL', file=sys.stderr)
        sys.exit(1)
    
    print(f'Fetching {args.url}')
    req = Request(args.url, headers={'User-Agent': 'Mozilla/5.0'})
    with urlopen(req) as resp:
        html = resp.read().decode('utf-8')
    
    print('Parsing...')
    data = parse_html(html)
    
    # Fix title extraction (parse_lesson.py splits on first space)
    tm = re.search(r'<title>(.*?)</title>', html)
    if tm:
        tf = tm.group(1)
        m = re.match(r'Lesson\s+(\d+)\s+(.+?)\s+([一-鿿].*?)\s*[《<]', tf)
        if not m:
            m = re.match(r'Lesson\s+(\d+)\s+(.+?)\s+([一-鿿].*)', tf)
        if m:
            data['metadata']['title_en'] = m.group(2).strip()
            data['metadata']['title_cn'] = m.group(3).strip()
    
    if args.preview:
        secs = data['content']['sections']
        print(f"\n{data['metadata']['title_en']} - {data['metadata']['title_cn']}")
        print(f"Vocabulary: {len(data['content']['vocabulary'])}  Sections: {len(secs)}")
        for i, s in enumerate(secs):
            dt = [d['title'][:25] for d in s['details']]
            print(f"  [{i}] {s['sentence'][:55]} | pred={s['predicates']} | {dt}")
        return
    
    ts = generate_article(data)
    outname = f'nce4-l{data["metadata"]["lesson_no"]}.ts'
    with open(outname, 'w', encoding='utf-8') as f:
        f.write(ts)
    print(f'\nDone: {outname}  sentences:{ts.count("text:")}  pendingNotes:{"yes" if "pendingNotes" in ts else "no"}  vocab:{len(data["content"]["vocabulary"])}')

if __name__ == '__main__':
    main()
