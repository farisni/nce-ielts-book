#!/usr/bin/env python3
"""
ncego.com 课程抓取器 → Article TS 数据结构
用法: python3 scripts/scrape_ncego.py <URL> [--preview]

依赖: beautifulsoup4, lxml (自动安装)
"""
import re, sys, os, argparse
from urllib.request import urlopen, Request

# ── parse_html (BS4-based, zero external deps except bs4+lxml) ──
try:
    from bs4 import BeautifulSoup
except ImportError:
    import subprocess, sys
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'beautifulsoup4', 'lxml', '-q'])
    from bs4 import BeautifulSoup

def _clean(t):
    if not t: return ''
    return re.sub(r'\s+', ' ', str(t)).strip()

def parse_html(html):
    """BS4-based parser for ncego.com lesson pages"""
    soup = BeautifulSoup(html, 'lxml')
    
    # Metadata
    title_tag = soup.find('title')
    title_full = title_tag.text.strip() if title_tag else ''
    m = re.match(r'Lesson (\d+)\s+(.+?)\s+(.+?)\s', title_full)
    metadata = {
        'book': '新概念英语第四册',
        'lesson_no': int(m.group(1)) if m else 1,
        'title_en': m.group(2).strip() if m else '',
        'title_cn': m.group(3).strip() if m else '',
        'updated': ''
    }
    
    # Vocabulary
    vocabulary = []
    for wi in soup.find_all(class_='word-item'):
        h4 = wi.find('h4')
        smalls = wi.find_all('small')
        word = _clean(h4.text) if h4 else ''
        phonetic = _clean(smalls[0].text) if len(smalls) > 0 else ''
        pos_text = _clean(smalls[1].text) if len(smalls) > 1 else ''
        # Split pos+meaning (e.g. "n. 化石人" → "n.", "化石人")
        pos, meaning = split_cn(pos_text) if pos_text else ('', '')
        if not meaning:
            pos, meaning = pos_text, ''
        else:
            pos = pos.rstrip('.') + '.' if pos else ''
        vocabulary.append({'word': word, 'phonetic': phonetic, 'pos': pos, 'meaning': meaning})
    
    # Sentences + details
    sections = []
    for note in soup.find_all(class_='lesson-notes'):
        h3s = note.find_all('h3')
        h4s = note.find_all('h4')
        
        sentence_h3s = []
        for h3 in h3s:
            text = _clean(h3.get_text())
            if not text or not re.search(r'[A-Za-z]{3,}', text):
                continue  # skip Chinese-only headings
            
            preds = [_clean(s.text) for s in h3.find_all('span', style=re.compile(r'ba372a'))]
            preds = [p for p in preds if p]
            auxs = [_clean(s.text) for s in h3.find_all('span', style=re.compile(r'843fa1'))]
            auxs = [a for a in auxs if a]
            
            annotations = []
            for abbr in h3.find_all('abbr'):
                annotations.append({
                    'text': _clean(abbr.text),
                    'tip': abbr.get('title', '').strip()
                })
            
            bg_quotes = [_clean(s.text) for s in h3.find_all('span', style=re.compile(r'ecf0f1'))]
            bg_quotes = [b for b in bg_quotes if b]
            
            sentence_h3s.append({
                'sentence': text, 'predicates': preds, 'auxiliaries': auxs,
                'background_quotes': bg_quotes, 'annotations': annotations,
                'preamble': None, 'details': []
            })
        
        # h4 details → attach to last sentence in this note
        details = []
        for h4 in h4s:
            title = _clean(h4.text)
            if not title: continue
            
            examples = []
            tables = []
            next_el = h4.find_next_sibling()
            while next_el and next_el.name != 'h4':
                for li in next_el.find_all('li'):
                    sup = li.find('sup')
                    en = _clean(li.get_text())
                    cn = _clean(sup.text) if sup else ''
                    if en: examples.append({'en': en, 'cn': cn})
                
                for tbl in next_el.find_all('table'):
                    trs = tbl.find_all('tr')
                    if not trs: continue
                    first_td = trs[0].find('td')
                    has_strong = first_td and first_td.find('strong')
                    if has_strong:
                        rows = []
                        for tr in trs:
                            tds = tr.find_all('td')
                            if len(tds) >= 2:
                                main = _clean(re.sub(r'<sup>.*?</sup>', '', str(tds[0])))
                                sup_m = re.search(r'<sup>(.*?)</sup>', str(tds[0]))
                                sup = _clean(sup_m.group(1)) if sup_m else ''
                                ct = _clean(tds[1].get_text())
                                if main: rows.append({'main': main, 'sup': sup, 'content': ct})
                        if rows: tables.append(rows)
                    else:
                        rows = [[_clean(td.get_text()) for td in tr.find_all('td')] for tr in trs]
                        if rows: tables.append(rows)
                
                next_el = next_el.find_next_sibling()
            
            detail = {'title': title, 'examples': examples}
            if tables: detail['tables'] = tables
            details.append(detail)
        
        if sentence_h3s and details:
            sentence_h3s[-1]['details'] = details
        
        sections.extend(sentence_h3s)
    
    # Exercises
    exercises = {'questions': [], 'answers': []}
    ex_div = soup.find(id='exercises')
    if ex_div:
        for h6 in ex_div.find_all('h6'):
            q = _clean(re.sub(r'<sup>.*?</sup>', '', str(h6)))
            if q: exercises['questions'].append(q)
        for ans in ex_div.find_all(class_=re.compile(r'answer')):
            correct = 'is_answer' in ' '.join(ans.get('class', []))
            exercises['answers'].append({'text': _clean(ans.get_text()), 'correct': correct})
    
    return {'metadata': metadata, 'content': {'vocabulary': vocabulary, 'sections': sections, 'exercises': exercises}}
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
    
    # Save original HTML for debugging
    lesson_id = re.search(r'/lessons/(\d+)', args.url).group(1)
    cache_dir = os.path.join(os.path.dirname(__file__), 'html_cache')
    os.makedirs(cache_dir, exist_ok=True)
    with open(os.path.join(cache_dir, f'lesson-{lesson_id}.html'), 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'Cached: scripts/html_cache/lesson-{lesson_id}.html')
    
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
