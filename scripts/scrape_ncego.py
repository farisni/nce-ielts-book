#!/usr/bin/env python3
"""
ncego.com 课程抓取器 → Article TS 数据结构
用法: python3 scripts/scrape_ncego.py <URL> [--preview]

依赖: /Users/faris/Desktop/nce-export/scripts/parse_lesson.py
"""
import re, sys, os, argparse
from urllib.request import urlopen, Request

# Import parse_html from the nce-export project
sys.path.insert(0, '/Users/faris/Desktop/nce-export/scripts')
from parse_lesson import parse_html

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
