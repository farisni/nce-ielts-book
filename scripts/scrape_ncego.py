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
        'book': '新概念英语',
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
            # Remove <sup> tags from sentence text and capture as annotations
            h3_sups = []
            for sup in h3.find_all('sup'):
                sup_text = _clean(sup.get_text())
                if sup_text:
                    h3_sups.append(sup_text)
                sup.decompose()  # remove from tree
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
            for sup_text in h3_sups:
                annotations.append({
                    'text': sup_text,
                    'tip': ''
                })
            
            bg_quotes = [_clean(s.text) for s in h3.find_all('span', style=re.compile(r'ecf0f1'))]
            bg_quotes = [b for b in bg_quotes if b]
            
            sentence_h3s.append({
                'sentence': text, 'predicates': preds, 'auxiliaries': auxs,
                'background_quotes': bg_quotes, 'annotations': annotations,
                'preamble': None, 'details': [], '_el': h3
            })
        
        # h4 details → attach to nearest preceding h3 sentence
        h3_map = {id(s['_el']): s for s in sentence_h3s}
        for h4 in h4s:
            # Extract sup as description
            h4_sup = h4.find('sup')
            h4_desc = _clean(h4_sup.get_text()) if h4_sup else ''
            if h4_sup:
                h4_sup.decompose()
            title = _clean(h4.get_text())
            if not title: continue
            
            examples = []
            tables = []
            next_el = h4.find_next_sibling()
            while next_el and next_el.name != 'h4':
                for li in next_el.find_all('li'):
                    sup = li.find('sup')
                    cn = _clean(sup.text) if sup else ""
                    if sup:
                        sup.extract()
                    en = _clean(li.get_text())
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
            
            detail = {'title': title, 'examples': examples, 'desc': h4_desc}
            if tables: detail['tables'] = tables
            # Find nearest preceding h3 and attach detail there
            prev_h3 = h4.find_previous('h3')
            if prev_h3 and id(prev_h3) in h3_map:
                h3_map[id(prev_h3)]['details'].append(detail)
        
        
        # Capture orphan tables directly after h3 (no h4 wrapper)
        for s in sentence_h3s:
            h3_el = s['_el']
            next_sib = h3_el.find_next_sibling()
            while next_sib and next_sib.name not in ('h3', 'h4'):
                for tbl in (next_sib.find_all('table') if next_sib.name != 'table' else [next_sib]):
                    trs = tbl.find_all('tr')
                    if not trs: continue
                    tds0 = trs[0].find_all('td')
                    if len(tds0) >= 2:
                        # Extract rows: first col is main keyword, second col is contrast
                        rows = []
                        for tr in trs:
                            tds = tr.find_all('td')
                            if len(tds) >= 2:
                                # Extract sup from first td, then get clean text
                                sup_el = tds[0].find('sup')
                                sup_text = _clean(sup_el.get_text()) if sup_el else ''
                                if sup_el: sup_el.extract()
                                c1 = _clean(tds[0].get_text())
                                c2 = _clean(tds[1].get_text())
                                if c1:
                                    rows.append({'main': c1, 'sup': sup_text, 'content': c2})
                        if rows:
                            sup0 = rows[0]['sup']
                            title = sup0 if sup0 else rows[0]['main'][:40]
                            s['details'].append({'title': title, 'examples': [], 'desc': '', 'tables': [rows]})
                next_sib = next_sib.find_next_sibling()

        # Clean up internal _el references before extending
        for s in sentence_h3s:
            if '_el' in s:
                del s['_el']
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
            rows.append(f'{{ kind: "example", word: "", meaning: "", enExample: "{esc(en_split)}", zhExample: "{esc(cn_split)}" }}')
        else:
            rows.append(f'{{ kind: "example", word: "", meaning: "", enExample: "{en}", zhExample: "{cn}" }}')
    for tbl in d.get('tables', []):
        for row in tbl:
            if isinstance(row, dict):
                w, m = split_cn(row.get('main', ''))
                en, zh = split_cn(row.get('content', ''))
                rows.append(f'{{ kind: "example", word: "{esc(w)}", meaning: "{esc(m)}", enExample: "{esc(en)}", zhExample: "{esc(zh)}" }}')
            elif isinstance(row, list) and len(row) >= 2:
                w, m = split_cn(str(row[0]))
                en, zh = split_cn(str(row[1]))
                rows.append(f'{{ kind: "example", word: "{esc(w)}", meaning: "{esc(m)}", enExample: "{esc(en)}", zhExample: "{esc(zh)}" }}')
    if not rows:
        return None
    desc = esc(d.get('desc', ''))
    return f'{{ label: "{esc(d["title"])}", description: "{desc}", examples: [{", ".join(rows)}] }}' 

def anno_to_inline(a):
    return f'{{ label: "{esc(a["text"])}", description: "{esc(a["tip"])}" }}'

def generate_article(data, level_prefix):
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
            f'        {{ text: "{esc(msent)}", translation: "", predicates: {ps}, clauseIntroducers: [], auxiliaries: {ax}, inlineAnnotations: {il}, grammarNotes: undefined, expansionNotes: {ep} }}'
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
    # --- Article stub (paste into nce4.ts) ---
    article_stub = f'''const articleNce{level_prefix[-1].upper()}L{ln}: Article = {{

  id: "{level_prefix.lower()}",
  lesson: {ln},
  tag: "C{ln}",
  title: "{en}",
  titleCn: "{cn}",
  level: level,
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
        article_stub += f'\n  pendingNotes: [\n    {",".join([nl + "    " + e for e in pending_entries]).lstrip(",")}\n  ],\n'
    

    article_stub += f'''
  originalId: "{level_prefix.lower()}",

  vocabulary: [
    {", ".join(vocab)}
  ],
}};
'''

    # --- registerOriginals entry (paste into article-notes.ts) ---
    reg_paragraphs = ',\n'.join(sentences)
    reg_entry = f'''registerOriginals({{
  "{level_prefix.lower()}": {{
    paragraphs: [
      [
{reg_paragraphs}
      ]
    ],
  }},
}});
'''

    out = f'''/* ================================================================ */
/*  ⚠️  抓取数据仅供参考，请手动合并，不要直接覆盖原有内容！            */
/*  - 参考译文 (translation) 留空，请务必保留已有译文                 */
/*  - 词汇 (vocabulary) 仅作参考，请核对已有释义                      */
/*  - 课文注释 (notesOnText) 留空，请保留已有注释                     */
/*  - annotations / expansionNotes 仅作参考                           */
/* ================================================================ */

/* === Article data === */
{article_stub}

/* === article-notes.ts === */
{reg_entry}
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
    cache_dir = os.path.join(os.path.dirname(__file__), '..', 'html_cache')
    os.makedirs(cache_dir, exist_ok=True)
    with open(os.path.join(cache_dir, f'lesson-{lesson_id}.html'), 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'Cached: .github/skills/nce-scraper/html_cache/lesson-{lesson_id}.html')
    
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
    
    # Match by title against known articles
    import glob as _glob
    scraped_title = data['metadata']['title_en'].strip()
    level_prefix = None
    for fname in _glob.glob('src/app/mock/nce?.ts'):
        with open(fname) as _f:
            _c = _f.read()
        for _id, _t in __import__('re').findall(r'id:\s*"(nce\d+-l\d+)".*?\btitle:\s*"([^"]+)"', _c, __import__('re').DOTALL):
            if _t.lower().strip() == scraped_title.lower():
                level_prefix = _id
                break
        if level_prefix:
            break
    if not level_prefix:
        level_prefix = 'unknown'
        print(f'WARNING: title "{scraped_title}" not found in local articles, using unknown')
    else:
        print(f'Matched: {level_prefix} = "{_t}"')
    
    ts = generate_article(data, level_prefix)  # will be overridden below
    outname = f'out-{data["metadata"]["lesson_no"]}.ts'
    with open(outname, 'w', encoding='utf-8') as f:
        f.write(ts)
    print(f'\nDone: {outname}  sentences:{ts.count("text:")}  pendingNotes:{"yes" if "pendingNotes" in ts else "no"}  vocab:{len(data["content"]["vocabulary"])}')

if __name__ == '__main__':
    main()
