#!/usr/bin/env python3
"""ncego.com 课程解析器：HTML → JSON + 还原 HTML"""

import re, json, sys, os
from html import unescape

# ============ 配置 ============
COLORS = ['blue','yellow','green','purple','pink','brown','orange','teal']

# ============ 工具函数 ============
def clean(t):
    if not t: return ''
    t = unescape(t); t = t.replace('\u00a0',' '); t = re.sub(r'\s+',' ',t)
    return t.strip()

def get(pattern, text, group=1):
    m = re.search(pattern, text, re.DOTALL)
    return m.group(group) if m else ''

def split_title(title):
    m = re.match(r'^(.+?)\s+([\u4e00-\u9fff（(].+)$', title)
    return (m.group(1).strip(), m.group(2).strip()) if m else (title, '')

# ============ 解析 ============
def parse_html(content):
    """从 HTML 提取结构化数据"""
    # 元数据
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

    # 词汇表
    wl_m = re.search(r'<div class="word_list.*?</div>\s*</div>\s*</div>', content, re.DOTALL)
    vocabulary = []
    if wl_m:
        for w in re.findall(r'<h4[^>]*>(.*?)</h4>\s*(<small[^>]*>.*?</small>)?\s*(<small[^>]*>.*?</small>)?', wl_m.group(), re.DOTALL):
            vocabulary.append({
                'word': clean(re.sub(r'<[^>]+>','',w[0])),
                'phonetic': clean(re.sub(r'<[^>]+>','',w[1] or '')),
                'pos': clean(re.sub(r'<[^>]+>','',w[2] or ''))
            })

    # lesson-content
    lc_m = re.search(r'<div[^>]*class="[^"]*lesson-content[^"]*"[^>]*>(.*?)<div id="exercises"', content, re.DOTALL)
    body = lc_m.group(1) if lc_m else ''

    parts = re.split(r'<h3[^>]*>(.*?)</h3>', body)
    sections = []

    i = 1
    while i < len(parts) - 1:
        h3_html = parts[i]; h3_body = parts[i+1]
        h3_text = clean(re.sub(r'<[^>]+>','',h3_html))
        if not h3_text or '单词列表' in h3_text: i += 2; continue

        # 4 层标记
        predicates = [clean(re.sub(r'<[^>]+>','',m.group(1))) for m in re.finditer(r'<span style="color: #ba372a;">(.*?)</span>', h3_html)]
        predicates = [p for p in predicates if p]
        auxiliaries = [clean(re.sub(r'<[^>]+>','',m.group(1))) for m in re.finditer(r'<span style="color: #843fa1;">(.*?)</span>', h3_html)]
        auxiliaries = [a for a in auxiliaries if a]

        annotations = []
        for m in re.finditer(r'<abbr[^>]*title="([^"]+)"[^>]*>(.*?)</abbr>', h3_html):
            annotations.append({'text': clean(re.sub(r'<[^>]+>','',m.group(2))), 'tip': unescape(m.group(1)).strip()})

        bg_quotes = []
        for bgm in re.finditer(r'background-color: #ecf0f1', h3_html):
            span_start = h3_html.rfind('<span', 0, bgm.start())
            depth = 0; span_end = span_start
            for j in range(span_start, len(h3_html)):
                if h3_html[j:j+5]=='<span': depth += 1
                elif h3_html[j:j+7]=='</span>':
                    depth -= 1
                    if depth==0: span_end=j+7; break
            bg_text = clean(re.sub(r'<[^>]+>','',h3_html[span_start:span_end]))
            if bg_text and bg_text not in bg_quotes: bg_quotes.append(bg_text)

        # h4 详情
        h4_parts = re.split(r'<h4[^>]*>(.*?)</h4>', h3_body)
        preamble = clean(re.sub(r'<[^>]+>','',h4_parts[0])) if h4_parts else None

        details = []
        j = 1
        while j < len(h4_parts) - 1:
            h4_title = clean(re.sub(r'<[^>]+>','',h4_parts[j]))
            h4_body_text = h4_parts[j+1]

            # 例句
            examples = []
            for li in re.findall(r'<li[^>]*>(.*?)</li>', h4_body_text, re.DOTALL):
                en = clean(re.sub(r'<[^>]+>','',re.sub(r'<sup>.*?</sup>','',li)))
                cn_m = re.search(r'<sup>(.*?)</sup>', li)
                cn = clean(unescape(cn_m.group(1))) if cn_m else ''
                if en: examples.append({'en':en,'cn':cn})

            # 表格
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
                            main = clean(re.sub(r'<[^>]+>','',re.sub(r'<sup>.*?</sup>','',tds[0])))
                            sup_m = re.search(r'<sup>(.*?)</sup>', tds[0])
                            sup = clean(unescape(sup_m.group(1))) if sup_m else ''
                            ct = clean(unescape(re.sub(r'<[^>]+>','',tds[1])))
                            if main: rows.append({'main':main,'sup':sup,'content':ct})
                    if rows: tables.append(rows)
                else:
                    rows = [[clean(unescape(re.sub(r'<[^>]+>','',td))) for td in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', tr, re.DOTALL)] for tr in trs]
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

    # 练习题
    ex_m = re.search(r'<div id="exercises"[^>]*>(.*?)</section>', content, re.DOTALL)
    questions, answers = [], []
    if ex_m:
        ex_body = ex_m.group(1)
        for q in re.findall(r'<h6[^>]*>(.*?)</h6>', ex_body, re.DOTALL):
            questions.append(clean(re.sub(r'<sup>.*?</sup>','',q)))
        for a in re.findall(r'<div class="([^"]*answer[^"]*)">(.*?)</div>', ex_body, re.DOTALL):
            answers.append({'text':clean(re.sub(r'<[^>]+>','',a[1])), 'correct':'is_answer' in a[0]})

    return {
        'version':'2.0',
        'metadata':metadata,
        'content':{'vocabulary':vocabulary, 'sections':sections, 'exercises':{'questions':questions,'answers':answers}}
    }

# ============ HTML 渲染 ============
def render_html(data):
    m = data['metadata']; c = data['content']

    def apply_annotations(sentence, preds, auxs, annotations):
        result = sentence
        for a in sorted(annotations, key=lambda x: len(x['text']), reverse=True):
            result = re.sub(r'\b'+re.escape(a['text'])+r'\b', f'<abbr data-tooltip="{a["tip"].replace(chr(34),"&quot;")}">'+a['text']+'</abbr>', result, count=1)
        for p in sorted(preds, key=len, reverse=True):
            result = re.sub(r'\b'+re.escape(p)+r'\b', '<span class="pred">'+p+'</span>', result, count=1)
        for a in sorted(auxs, key=len, reverse=True):
            result = re.sub(r'\b'+re.escape(a)+r'\b', '<span class="aux">'+a+'</span>', result, count=1)
        return result

    html = '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">\n'
    html += f'<title>{m["title_en"]} — {m["title_cn"]}</title>\n'
    html += '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
    html += '<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..600&display=swap" rel="stylesheet">\n'
    html += '<style>'+''' 
  :root{--text-primary:#37352f;--text-secondary:#6b6966;--text-tertiary:#9b9a97;--bg-default:#ffffff;--bg-subtle:#fbfbfa;--bg-hover:#f1f1ef;--border-default:#e9e9e4;--border-subtle:#f0f0eb;--radius-sm:4px;--radius-md:6px;--radius-lg:8px;--shadow-card:0 0 0 1px rgba(15,15,15,0.04),0 1px 2px rgba(15,15,15,0.06);--ac-blue-bg:#e8f0fe;--ac-blue-fg:#1a6fb5;--ac-blue-border:#a8c7fa;--ac-yellow-bg:#fef3c7;--ac-yellow-fg:#b45309;--ac-yellow-border:#fcd34d;--ac-green-bg:#d1fae5;--ac-green-fg:#047857;--ac-green-border:#6ee7b7;--ac-purple-bg:#ede9fe;--ac-purple-fg:#7c3aed;--ac-purple-border:#c4b5fd;--ac-pink-bg:#fce7f3;--ac-pink-fg:#be185d;--ac-pink-border:#f9a8d4;--ac-brown-bg:#fef4e8;--ac-brown-fg:#92400e;--ac-brown-border:#fcd9b6;--ac-orange-bg:#fff7ed;--ac-orange-fg:#c2410c;--ac-orange-border:#fdba74;--ac-teal-bg:#ccfbf1;--ac-teal-fg:#0f766e;--ac-teal-border:#5eead4}
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',sans-serif;background:var(--bg-default);color:var(--text-primary);max-width:820px;margin:0 auto;padding:60px 24px 100px;line-height:1.7}
  .page-header{margin-bottom:48px;padding-bottom:24px;border-bottom:1px solid var(--border-default)}
  .page-header h1{font-size:32px;font-weight:700;letter-spacing:-0.5px;margin-bottom:4px}
  .page-header .subtitle{color:var(--text-tertiary);font-size:14px}
  .section-card{margin-bottom:32px;padding:28px 28px 24px;background:var(--bg-default);border:1px solid var(--border-subtle);border-left:4px solid var(--border-default);border-radius:var(--radius-lg);box-shadow:var(--shadow-card);transition:border-left-color .2s ease,box-shadow .15s ease}
  .section-card:hover{box-shadow:0 0 0 1px rgba(15,15,15,0.06),0 2px 8px rgba(15,15,15,0.08)}
  .section-card.ac-blue{border-left-color:var(--ac-blue-border)}.section-card.ac-yellow{border-left-color:var(--ac-yellow-border)}.section-card.ac-green{border-left-color:var(--ac-green-border)}.section-card.ac-purple{border-left-color:var(--ac-purple-border)}.section-card.ac-pink{border-left-color:var(--ac-pink-border)}.section-card.ac-brown{border-left-color:var(--ac-brown-border)}.section-card.ac-orange{border-left-color:var(--ac-orange-border)}.section-card.ac-teal{border-left-color:var(--ac-teal-border)}
  .sentence{font-size:15px;font-weight:500;line-height:1.85;margin-bottom:20px;padding:14px 18px;border-radius:var(--radius-md);border-left:3px solid var(--border-default)}
  .sentence.ac-blue{background:var(--ac-blue-bg);border-left-color:var(--ac-blue-fg)}.sentence.ac-yellow{background:var(--ac-yellow-bg);border-left-color:var(--ac-yellow-fg)}.sentence.ac-green{background:var(--ac-green-bg);border-left-color:var(--ac-green-fg)}.sentence.ac-purple{background:var(--ac-purple-bg);border-left-color:var(--ac-purple-fg)}.sentence.ac-pink{background:var(--ac-pink-bg);border-left-color:var(--ac-pink-fg)}.sentence.ac-brown{background:var(--ac-brown-bg);border-left-color:var(--ac-brown-fg)}.sentence.ac-orange{background:var(--ac-orange-bg);border-left-color:var(--ac-orange-fg)}.sentence.ac-teal{background:var(--ac-teal-bg);border-left-color:var(--ac-teal-fg)}
  .sentence abbr{text-decoration:none;border-bottom:1.5px dashed var(--text-tertiary);cursor:help;transition:border-color .15s}
  .sentence abbr:hover{border-bottom-color:var(--text-primary)}
  .sentence .pred{color:#d93025;font-weight:600}
  .sentence .aux{color:#9334e6;font-weight:600}
  .detail{margin-top:18px;padding:14px 0 0;border-top:1px solid var(--border-subtle)}
  .detail:first-child{margin-top:0;border-top:none;padding-top:0}
  .detail-title{font-weight:600;font-size:17px;display:inline-flex;align-items:baseline;gap:6px;margin-bottom:10px}
  .detail-title::before{content:'';display:inline-block;width:10px;height:10px;border-radius:2px;flex-shrink:0;margin-right:2px}
  .detail-title.blue::before{background:var(--ac-blue-fg)}.detail-title.yellow::before{background:var(--ac-yellow-fg)}.detail-title.green::before{background:var(--ac-green-fg)}.detail-title.purple::before{background:var(--ac-purple-fg)}.detail-title.pink::before{background:var(--ac-pink-fg)}.detail-title.brown::before{background:var(--ac-brown-fg)}.detail-title.orange::before{background:var(--ac-orange-fg)}.detail-title.teal::before{background:var(--ac-teal-fg)}
  .detail-title sup{font-weight:400;color:var(--text-secondary);font-size:14px}
  .example{margin:4px 0;padding:7px 10px;border-radius:var(--radius-sm);transition:background .12s ease}
  .example:hover{background:var(--bg-hover)}
  .en{font-size:14.5px;color:var(--text-primary);line-height:1.6}
  .en strong{color:var(--text-primary);font-weight:600}
  .cn{font-size:13px;color:var(--text-tertiary);margin-top:2px}
  .table-group{margin:16px 0;border:1px solid var(--border-default);border-radius:var(--radius-md);overflow:hidden;background:var(--bg-subtle)}
  table{width:100%;border-collapse:separate;border-spacing:0;font-size:14px}
  table+table{border-top:1px solid var(--border-default)}
  table tbody td{padding:12px 0;color:var(--text-primary);border-bottom:1px solid var(--border-subtle);line-height:1.6;vertical-align:top;transition:background .1s ease}
  table tbody tr:hover td{background:var(--bg-hover)}
  table tbody tr:last-child td{border-bottom:none}
  table tbody td:first-child{color:var(--text-primary);font-weight:600;font-size:13px;width:200px;min-width:160px;max-width:240px;padding-right:24px}
  table tbody td:last-child{padding-left:24px}
  table tbody td:first-child sup{font-weight:400;color:var(--text-tertiary);font-size:11.5px;margin-left:4px}
  [data-tooltip]{position:relative}
  [data-tooltip]:hover::after{content:attr(data-tooltip);position:absolute;bottom:calc(100%+8px);left:50%;transform:translateX(-50%);background:var(--text-primary);color:#fff;font-size:12px;font-weight:400;padding:5px 10px;border-radius:var(--radius-sm);white-space:nowrap;z-index:10;pointer-events:none;font-family:'PingFang SC','Hiragino Sans GB','Microsoft YaHei',sans-serif}
  @media print{body{padding:0}.section-card{box-shadow:none;border:1px solid #ddd;break-inside:avoid}}
</style>\n</head>\n<body>\n'''

    html += f'<div class="page-header"><h1>{m["title_en"]}</h1><div class="subtitle">{m["title_cn"]} — 语言点解析 · {m["book"]} Lesson {m["lesson_no"]}</div></div>\n'

    # 词汇卡
    if c['vocabulary']:
        html += f'<div style="margin-bottom:12px;font-size:13px;color:var(--text-tertiary)">📖 核心词汇（{len(c["vocabulary"])} 个）</div>\n'
        html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px;margin-bottom:32px">\n'
        for w in c['vocabulary']:
            html += f'<div style="background:var(--bg-subtle);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:8px 12px;font-size:14px">'
            html += f'<span style="font-weight:700;color:var(--text-primary)">{w["word"]}</span>'
            if w['phonetic']: html += f'<span style="font-size:12px;color:var(--text-tertiary);margin-left:6px">{w["phonetic"]}</span>'
            html += f'<div style="font-size:13px;color:var(--text-secondary)">{w["pos"]}</div></div>\n'
        html += '</div>\n'

    # 课文
    for i, s in enumerate(c['sections']):
        color = COLORS[i % len(COLORS)]
        highlighted = apply_annotations(s['sentence'], s.get('predicates',[]), s.get('auxiliaries',[]), s.get('annotations',[]))
        html += f'<div class="section-card ac-{color}"><div class="sentence ac-{color}">{highlighted}</div>\n'

        for di, d in enumerate(s.get('details', [])):
            d_color = COLORS[(i+di) % len(COLORS)]
            main_title, sup_cn = split_title(d['title'])
            title_html = main_title + (f' <sup>{sup_cn}</sup>' if sup_cn else '')
            html += f'<div class="detail"><div class="detail-title {d_color}">{title_html}</div>\n'
            for ex in d.get('examples', []):
                html += f'<div class="example"><div class="en">{ex["en"]}</div>'
                if ex.get('cn'): html += f'<div class="cn">{ex["cn"]}</div>'
                html += '</div>\n'
            for tb in d.get('tables', []):
                if tb and isinstance(tb[0], dict):
                    html += '<div class="table-group"><table><tbody>\n'
                    for r in tb:
                        sup_h = f' <sup>{r["sup"]}</sup>' if r.get('sup') else ''
                        html += f'<tr><td>{r["main"]}{sup_h}</td><td>{r["content"]}</td></tr>\n'
                    html += '</tbody></table></div>\n'
                elif tb:
                    html += '<div class="table-group"><table><tbody>\n'
                    for r in tb: html += '<tr>' + ''.join(f'<td>{c}</td>' for c in r) + '</tr>\n'
                    html += '</tbody></table></div>\n'
            html += '</div>\n'
        html += '</div>\n'

    # 练习
    if c['exercises']['questions']:
        html += '<div class="section-card ac-purple"><div class="detail"><div class="detail-title purple">课后练习</div>\n'
        for q in c['exercises']['questions']:
            html += f'<div class="example"><div class="en">{q}</div></div>\n'
        for a in c['exercises']['answers']:
            s = 'font-weight:600;color:#047857' if a['correct'] else 'color:var(--text-tertiary)'
            html += f'<div class="cn" style="{s}">{a["text"]}</div>\n'
        html += '</div></div>\n'

    html += '<div class="subtitle" style="text-align:center;margin-top:40px">数据来源: ncego.com · JSON 渲染</div>\n</body>\n</html>'
    return html

# ============ CLI ============
if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("用法: python3 parse_lesson.py <html文件> 或 <lesson_id>")
        print("  python3 parse_lesson.py lessons-234-pdf.html")
        print("  python3 parse_lesson.py 234          # 自动下载")
        sys.exit(1)

    arg = sys.argv[1]
    if arg.endswith('.html'):
        with open(arg, 'r', encoding='utf-8') as f:
            content = f.read()
        base = os.path.splitext(os.path.basename(arg))[0]
    else:
        import subprocess
        lesson_id = arg
        url = f'https://www.ncego.com/lessons/{lesson_id}?pdf'
        print(f'下载: {url}')
        result = subprocess.run(['curl', '-sL', url], capture_output=True, text=True)
        content = result.stdout
        base = f'lessons-{lesson_id}'

    data = parse_html(content)
    
    json_path = f'{base}-structured.json'
    html_path = f'{base}-render.html'
    
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(render_html(data))
    
    # 统计
    c = data['content']
    print(f'✅ {json_path}  ({len(c["vocabulary"])}词 {len(c["sections"])}段)')
    print(f'✅ {html_path}')
