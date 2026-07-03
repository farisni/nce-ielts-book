#!/usr/bin/env python3
"""
安全合并脚本：将抓取的 annotations 数据合并到 article-notes.ts（nce4.ts 的 text/translation 不受影响）。

用法:
  python3 merge_paragraphs.py <scraped_file> <lesson_no>
"""
import re, sys, os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.join(SCRIPT_DIR, '..', '..', '..', '..')
ARTICLE_NOTES = os.path.join(PROJECT_ROOT, 'src', 'app', 'mock', 'article-notes.ts')

def normalize(text):
    return re.sub(r'\s+', ' ', text).strip().lower()

def extract_sentence_objects(block):
    """用括号计数精确提取每个句子对象字符串"""
    sentences = []
    pos = 0
    while True:
        idx = block.find('{ text: "', pos)
        if idx == -1:
            break
        depth = 0
        end = idx
        for i in range(idx, len(block)):
            if block[i] == '{':
                depth += 1
            elif block[i] == '}':
                depth -= 1
                if depth == 0:
                    end = i + 1
                    break
        sentences.append(block[idx:end])
        pos = end
    return sentences

def parse_sentence_fields(sent_str):
    """从句子字符串中提取各个字段"""
    result = {}
    
    # text
    m = re.search(r'text:\s*"((?:[^"\\]|\\.)*)"', sent_str)
    result['text'] = m.group(1) if m else ''
    
    # translation
    m = re.search(r'translation:\s*"((?:[^"\\]|\\.)*)"', sent_str)
    result['translation'] = m.group(1) if m else ''
    
    # Extract array/bracket fields by name
    for field in ['predicates', 'clauseIntroducers', 'auxiliaries', 'inlineAnnotations', 'expansionNotes']:
        fpos = sent_str.find(field + ':')
        if fpos == -1:
            result[field] = '[]'
            continue
        # Find the opening bracket
        bpos = sent_str.find('[', fpos)
        if bpos == -1:
            result[field] = '[]'
            continue
        # Count brackets to find matching close
        depth = 0
        for i in range(bpos, len(sent_str)):
            if sent_str[i] == '[':
                depth += 1
            elif sent_str[i] == ']':
                depth -= 1
                if depth == 0:
                    result[field] = sent_str[bpos:i+1]
                    break
    
    # grammarNotes
    m = re.search(r'grammarNotes:\s*(\S+?)\s*[,}]', sent_str)
    result['grammarNotes'] = m.group(1) if m else 'undefined'
    
    return result

def main():
    if len(sys.argv) < 3:
        print("Usage: python3 merge_paragraphs.py <scraped_file> <lesson_no>")
        sys.exit(1)
    
    scraped_file = sys.argv[1]
    lesson_no = sys.argv[2]
    entry_key = f'nce4-l{lesson_no}'
    
    # 1. Read scraped file
    with open(scraped_file, 'r') as f:
        scraped = f.read()
    
    # Extract registerOriginals block using brace counting
    idx = scraped.find('registerOriginals({')
    if idx == -1:
        # Try to find the nce4-lX entry directly
        idx = scraped.find(f'"{entry_key}":')
    if idx == -1:
        print(f"ERROR: Could not find {entry_key} in {scraped_file}")
        sys.exit(1)
    
    brace_start = scraped.find('{', idx)
    depth = 0
    for i in range(brace_start, len(scraped)):
        if scraped[i] == '{': depth += 1
        elif scraped[i] == '}':
            depth -= 1
            if depth == 0:
                scraped_block = scraped[idx:i+1]
                break
    
    new_sent_strs = extract_sentence_objects(scraped_block)
    new_sentences = [parse_sentence_fields(s) for s in new_sent_strs]
    print(f"Scraped: {len(new_sentences)} sentences")
    
    # 2. Read existing article-notes.ts
    if not os.path.exists(ARTICLE_NOTES):
        print(f"ERROR: {ARTICLE_NOTES} not found")
        sys.exit(1)
    
    with open(ARTICLE_NOTES, 'r') as f:
        notes = f.read()
    
    # 3. Find existing entry
    eidx = notes.find(f'"{entry_key}":')
    if eidx == -1:
        print(f"No existing entry for {entry_key}")
        sys.exit(0)
    
    ebs = notes.find('{', eidx)
    depth = 0
    for i in range(ebs, len(notes)):
        if notes[i] == '{': depth += 1
        elif notes[i] == '}':
            depth -= 1
            if depth == 0:
                eend = i + 1
                break
    
    old_block = notes[eidx:eend]
    old_sent_strs = extract_sentence_objects(old_block)
    old_sentences = [parse_sentence_fields(s) for s in old_sent_strs]
    print(f"Existing: {len(old_sentences)} sentences")
    
    # 4. Merge: match by text, preserve translations
    merged = []
    used_old = set()
    
    for new_s in new_sentences:
        new_norm = normalize(new_s['text'])
        best_idx = -1
        best_score = 0
        
        for j, old_s in enumerate(old_sentences):
            if j in used_old:
                continue
            old_norm = normalize(old_s['text'])
            if new_norm in old_norm or old_norm in new_norm:
                score = min(len(new_norm), len(old_norm)) / max(len(new_norm), len(old_norm))
                if score > best_score:
                    best_score = score
                    best_idx = j
        
        if best_idx >= 0 and best_score > 0.5:
            old_s = old_sentences[best_idx]
            used_old.add(best_idx)
            merged.append({
                'text': new_s['text'],
                'translation': old_s['translation'],
                'predicates': new_s['predicates'],
                'clauseIntroducers': new_s['clauseIntroducers'],
                'auxiliaries': new_s['auxiliaries'],
                'inlineAnnotations': new_s['inlineAnnotations'],
                'grammarNotes': old_s.get('grammarNotes', 'undefined') or 'undefined',
                'expansionNotes': new_s['expansionNotes'],
            })
        else:
            merged.append({**new_s, 'translation': ''})
    
    matched = sum(1 for s in merged if s['translation'])
    print(f"Matched: {matched}, Translations preserved: {matched}")
    
    # 5. Format and write
    sent_lines = []
    for s in merged:
        line = (
            f'{{ text: "{s["text"]}", translation: "{s["translation"]}", '
            f'predicates: {s["predicates"]}, clauseIntroducers: {s["clauseIntroducers"]}, '
            f'auxiliaries: {s["auxiliaries"]}, inlineAnnotations: {s["inlineAnnotations"]}, '
            f'grammarNotes: {s["grammarNotes"]}, expansionNotes: {s["expansionNotes"]} }}'
        )
        # Verify balance
        if line.count('{') != line.count('}'):
            print(f"WARNING: unbalanced braces in sentence, fixing...")
            diff = line.count('{') - line.count('}')
            if diff > 0:
                line = line.rstrip(',') + ('}' * diff)
        sent_lines.append(line)
    
    new_entry = f'"{entry_key}": {{\n    paragraphs: [\n      [\n' + ',\n'.join(sent_lines) + '\n      ]\n    ],\n  }}'
    
    # Backup
    with open(ARTICLE_NOTES + '.bak', 'w') as f:
        f.write(notes)
    
    new_notes = notes[:eidx] + new_entry + notes[eend:]
    with open(ARTICLE_NOTES, 'w') as f:
        f.write(new_notes)
    
    # Verify
    total_open = new_notes.count('{')
    total_close = new_notes.count('}')
    print(f"\nDone! File braces: {{{total_open} }}{total_close} (balanced: {total_open == total_close})")
    print(f"Backup: {ARTICLE_NOTES}.bak")

if __name__ == '__main__':
    main()
