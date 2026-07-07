#!/usr/bin/env python3
"""
Generate NCE demo page from scraped HTML cache.

Usage:
    python3 gen_demo.py <lesson-id> <output-path>
    python3 gen_demo.py 213 src/app/demo/n3-l41/page.tsx

Requires: beautifulsoup4, lxml
"""
import sys, re
from bs4 import BeautifulSoup

CACHE_DIR = '.github/skills/nce-scraper/html_cache'

# ═══ Config: extend this map for new lessons ═══
# 知识点标题 → (数据数组名, 类型: 'table' | 'list')
KP_MAP = {
    'the country': ('COUNTRY_LIST', 'list'),
    'appeal to sb': ('APPEAL_DATA', 'table'),
    'regard A as': ('APPEAL_DATA', 'table'),
    'go into raptures': ('RAPTURE_DATA', 'table'),
    'at the ... of ...': ('AT_THE_OF_DATA', 'table'),
    'extol the virtues / benefits of sth.': ('EXTOL_DATA', 'table'),
    'be / live under the illusion / delusion that...': ('ILLUSION_DATA', 'table'),
    'be superior to': ('SUPERIOR_DATA', 'table'),
    'be forever doing sth.': ('FOREVER_LIST', 'list'),
    'compare A with / to B': ('COMPARE_DATA', 'table'),
    'save sb. sth. / doing sth.': ('SAVE_DATA', 'table'),
    'rightly': ('RIGHTLY_LIST', 'list'),
    'do without sth.': ('DO_WITHOUT_DATA', 'table'),
    'provide sb. with sth.': ('PROVIDE_DATA', 'table'),
    'go up to the city': ('COME_UP_DATA', 'table'),
    'treat': ('TREAT_LIST', 'list'),
    'major': ('DRAW_DATA', 'table'),
    'operation': ('DRAW_DATA', 'table'),
    'draw to a close': ('DRAW_DATA', 'table'),
    'make do with ...': ('MAKE_DO_DATA', 'table'),
    'second best': ('MAKE_DO_DATA', 'table'),
    'run / go wild with delight': ('GO_WILD_LIST', 'list'),
    '双重否定 = 加强肯定': ('DOUBLE_NEG_LIST', 'list'),
    'shed': ('SHED_DATA', 'table'),
    '比较级表最高级': ('COMPARATIVE_DATA', 'table'),
    'tuck': ('TUCK_LIST', 'list'),
    'It has always been a mystery to me': ('MYSTERY_DATA', 'table'),
    # Partial match fallbacks (handles whitespace/extraneous text variations)
    'appeal to sb': ('APPEAL_DATA', 'table'),
    'go up to the city': ('COME_UP_DATA', 'table'),
    '... of this / that sort / kind': ('PROVIDE_DATA', 'table'),
    'be beyond sb': ('MYSTERY_DATA', 'table'),
    'be available for': ('PROVIDE_DATA', 'table'),
    'at dawn': ('AT_THE_OF_DATA', 'table'),
}

# ═══ Templates ═══
I = '        '  # 8 spaces

LIST_KP = [
    I + '<KnowledgePoint titleEn="{title}" titleCn="{note}">',
    I + '  <ul className="space-y-1.5 mb-7">',
    I + '    {' + '{ref}.map((item, i) => (',
    I + '      <li key={i} className="flex items-start gap-1.5 text-black text-base">',
    I + '        <span className="inline-block size-1.5 rounded-full shrink-0 self-center mt-0.5"',
    I + '          style={{ background: DOT_COLORS[i % DOT_COLORS.length] }} />',
    I + '        <span>',
    I + '          <span className="text-base">{item.en}</span>',
    I + '          {" "}',
    I + '          <span className="text-sm text-gray-400">{item.cn}</span>',
    I + '        </span>',
    I + '      </li>',
    I + '    )}</ul>',
    I + '</KnowledgePoint>',
]

TABLE_KP = [
    I + '<KnowledgePoint titleEn="{title}" titleCn="{note}">',
    I + '  <Table className="table-fixed text-black text-base" containerClassName="overflow-visible">',
    I + '    <TableHeader>',
    I + '      <TableRow className="border-b border-gray-200 hover:bg-transparent">',
    I + '        <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[35%]">表达</TableHead>',
    I + '        <TableHead className="px-3 py-2 h-auto text-xs font-medium text-gray-500 w-[65%]">例句</TableHead>',
    I + '      </TableRow>',
    I + '    </TableHeader>',
    I + '    <TableBody>',
    I + '      {' + '{ref}.map((r, i) => (',
    I + '        <TableRow key={i} className="border-b border-gray-200 hover:bg-transparent">',
    I + '          <TableCell className="px-3 py-2 whitespace-normal align-top w-[35%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">',
    I + '            <strong>{r.expr}</strong>{r.note && <><br /><span className="text-sm text-gray-400">{r.note}</span></>}',
    I + '          </TableCell>',
    I + '          <TableCell className="px-3 py-2 whitespace-normal align-top text-gray-600 w-[65%]">',
    I + '            <HighlightText text={r.ex} word={r.hl} />',
    I + '          </TableCell>',
    I + '        </TableRow>',
    I + '      )}</TableBody>',
    I + '  </Table>',
    I + '</KnowledgePoint>',
]


def parse(cache_path):
    """Parse HTML cache, return list of sentence dicts."""
    with open(cache_path) as f:
        html = f.read()
    soup = BeautifulSoup(html, 'lxml')
    content = soup.find('div', class_='col-md-9') or soup
    h3s = content.find_all('h3')

    sentences = []
    for h3 in h3s[1:]:  # skip first (vocabulary list)
        parts = []
        for child in h3.children:
            name = child.name if hasattr(child, 'name') else None
            if name is None:  # text node — keep whitespace!
                txt = str(child)
                if txt:
                    parts.append(('t', txt))
            elif name == 'span':
                style = child.get('style', '')
                txt = child.get_text()
                if '843fa1' in style:
                    parts.append(('m', txt))  # modal
                elif 'ba372a' in style or '186, 55, 42' in style or '224, 62, 45' in style:
                    parts.append(('v', txt))  # verb
                else:
                    parts.append(('t', txt))
            elif name in ('a', 'abbr', 'sup'):
                parts.append(('t', child.get_text()))
            else:
                t = child.get_text()
                if t:
                    parts.append(('t', t))

        kps = []
        next_h3 = h3.find_next('h3')
        curr = h3
        while True:
            curr = curr.find_next_sibling()
            if curr is None or curr == next_h3:
                break
            if curr.name == 'h4':
                sup = curr.find('sup')
                note = sup.get_text(strip=True) if sup else ''
                title = curr.get_text(' ', strip=True)
                if note:
                    title = title.replace(note, '').strip()
                kps.append(('h4', title, note))

        sentences.append({'parts': parts, 'kps': kps})

    return sentences


def gen_highlight_spans(parts):
    """Generate JSX spans with color highlights."""
    segs = []
    for typ, txt in parts:
        txt = txt.replace('\n', ' ')
        if not txt:
            continue
        if typ == 'v':
            segs.append(I + '<span style={{ color: "#bd491e", fontWeight: 600 }}>' + txt + '</span>')
        elif typ == 'm':
            segs.append(I + '<span style={{ color: "#d97706", fontWeight: 600 }}>' + txt + '</span>')
        else:
            segs.append(I + '<span>' + txt + '</span>')
    return '\n'.join(segs)


def gen_kp(kp_type, title, note, ref, kind):
    """Generate KnowledgePoint JSX."""
    tmpl = LIST_KP if kind == 'list' else TABLE_KP
    result = '\n'.join(tmpl)
    result = result.replace('{title}', title).replace('{note}', note).replace('{ref}', ref)
    return result


def build_page(sentences, output_path):
    """Read existing page template (or copy from template), replace JSX body."""
    import os, shutil
    template = os.path.join(os.path.dirname(__file__), '_template.tsx')
    if not os.path.exists(output_path):
        os.makedirs(os.path.dirname(output_path) or '.', exist_ok=True)
        shutil.copy(template, output_path)
        print(f'Created from template: {output_path}')
    with open(output_path) as f:
        old = f.read()

    main_start = old.index('    <main')
    main_end = old.index('    </main>') + len('    </main>')

    blocks = []
    for idx, s in enumerate(sentences):
        hl = gen_highlight_spans(s['parts'])
        rendered = set()

        kp_parts = []
        for kp_type, title, note in s['kps']:
            if kp_type != 'h4':
                continue
            # Try exact match first, then fuzzy (strip whitespace, ignore trailing Chinese)
            entry = KP_MAP.get(title)
            if not entry:
                # Try normalized: strip spaces, extract first line
                norm = ' '.join(title.split())
                entry = KP_MAP.get(norm)
            if not entry:
                # Try prefix match for titles with Chinese suffixes
                for k, v in KP_MAP.items():
                    if title.startswith(k) or norm.startswith(k):
                        entry = v
                        break
            if entry:
                ref, kind = entry
                if ref not in rendered:
                    rendered.add(ref)
                    kp_parts.append(gen_kp('h4', title, note, ref, kind))

        kps_block = '\n'.join(kp_parts)

        block = '      {/* === Sentence ' + str(idx + 1) + ' === */}\n' + \
            '      <Sentence quote={<>\n' + hl + '\n' + \
            '        <br />\n' + \
            '        <span className="text-[13px] text-gray-500 font-normal">\n' + \
            '        </span>\n' + \
            '      </>} quoteClassName="mt-16 mb-7">\n' + \
            kps_block + '\n      </Sentence>'
        blocks.append(block)

    jsx_body = '\n\n'.join(blocks)

    style = '      <style>{`\n' + \
        '          blockquote { font-family: "Lyon Text", Georgia, "LXGW WenKai Screen", serif; }\n' + \
        '          main mark {\n' + \
        '            background: linear-gradient(to top, rgba(147, 197, 228, 0.34) 42%, transparent 42%);\n' + \
        '            color: #1f465b;\n' + \
        '            font-weight: 600;\n' + \
        '            padding: 0 0.02em 0.02em;\n' + \
        '          }\n' + \
        '      `}</style>\n' + \
        '    </main>\n'

    new_main = '    <main className="mx-auto mt-16 w-[880px] min-w-[880px] min-h-[600px] rounded-md border border-dashed border-zinc-300 p-8">\n' + \
        jsx_body + '\n' + style

    new_file = old[:main_start] + new_main + old[main_end:]
    with open(output_path, 'w') as f:
        f.write(new_file)


def main():
    if len(sys.argv) != 3:
        print(f"Usage: {sys.argv[0]} <lesson-id> <output-path>")
        print(f"  e.g.: {sys.argv[0]} 213 src/app/demo/n3-l41/page.tsx")
        sys.exit(1)

    lesson_id = sys.argv[1]
    output_path = sys.argv[2]
    cache_path = f'{CACHE_DIR}/lesson-{lesson_id}.html'

    try:
        sentences = parse(cache_path)
    except FileNotFoundError:
        print(f'ERROR: cache not found: {cache_path}')
        print(f'  Run first: python3 .github/skills/nce-scraper/scripts/scrape_ncego.py "https://www.ncego.com/lessons/{lesson_id}"')
        sys.exit(1)

    print(f'Found {len(sentences)} sentences, {sum(len(s["kps"]) for s in sentences)} KPs')

    build_page(sentences, output_path)
    print(f'Written: {output_path}')


if __name__ == '__main__':
    main()
