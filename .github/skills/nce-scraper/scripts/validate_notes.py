#!/usr/bin/env python3
"""
验证合并后的课文笔记数据完整性与合理性

用法:
  python3 validate_notes.py <lesson_id>           # 验证单课，如 nce4-l3
  python3 validate_notes.py --all                  # 验证全部
  python3 validate_notes.py --summary              # 汇总统计
"""
import json, os, sys, re

PROJECT_ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..', '..')
DATA_DIR = os.path.join(PROJECT_ROOT, 'src', 'app', 'mock', 'data')
NCE4_TS = os.path.join(PROJECT_ROOT, 'src', 'app', 'mock', 'nce4.ts')

def load_article(lesson_id):
    path = os.path.join(DATA_DIR, f'{lesson_id}.json')
    if not os.path.exists(path):
        return None
    with open(path) as f:
        return json.load(f)

def load_nce4_paragraphs(lesson_id):
    """从 nce4.ts 提取 original.paragraphs 的 text 用于对比"""
    with open(NCE4_TS) as f:
        content = f.read()
    # 找到对应 article 的 original.paragraphs
    pattern = rf'id: "{lesson_id}".*?original:\s*\{{\s*paragraphs:\s*(\[.*?\])\s*\}},?\s*\n'
    m = re.search(pattern, content, re.DOTALL)
    if not m:
        return None
    block = m.group(1)
    # 提取所有 text
    texts = re.findall(r'text:\s*"((?:[^"\\]|\\.)*)"', block)
    return texts

def validate(lesson_id, verbose=True):
    data = load_article(lesson_id)
    nce4_texts = load_nce4_paragraphs(lesson_id)
    
    issues = []
    warnings = []
    stats = {'sentences': 0, 'with_predicates': 0, 'with_inline': 0, 'with_expansion': 0, 'total_expansion_notes': 0}
    
    if not data:
        issues.append('JSON 文件不存在')
        return issues, warnings, stats
    
    paragraphs = data.get('paragraphs', [])
    note_texts = []
    
    for pi, para in enumerate(paragraphs):
        for si, sent in enumerate(para):
            stats['sentences'] += 1
            loc = f'P{pi}S{si}'
            
            # text
            t = sent.get('text', '')
            if not t:
                issues.append(f'{loc}: text 为空')
            note_texts.append(t)
            
            # translation 应为空（来自 nce4.ts）
            if sent.get('translation', ''):
                warnings.append(f'{loc}: translation 非空（应来自 nce4.ts）')
            
            # predicates
            preds = sent.get('predicates', [])
            if preds:
                stats['with_predicates'] += 1
            
            # inlineAnnotations
            inlines = sent.get('inlineAnnotations', [])
            if inlines:
                stats['with_inline'] += 1
                for ia in inlines:
                    if not ia.get('label'):
                        issues.append(f'{loc}: inlineAnnotation 缺 label')
            
            # expansionNotes
            expansions = sent.get('expansionNotes', [])
            if expansions:
                stats['with_expansion'] += 1
                for en in expansions:
                    stats['total_expansion_notes'] += 1
                    lbl = en.get('label', '')
                    
                    # 检查 HTML 残留
                    if re.search(r'<[^>]+>', lbl):
                        issues.append(f'{loc}: expansionNote label 含 HTML: "{lbl[:50]}"')
                    
                    # 检查示例重复
                    seen = set()
                    for ex in en.get('examples', []):
                        ee = ex.get('enExample', '')
                        ze = ex.get('zhExample', '')
                        if ee and ze and ee == ze:
                            issues.append(f'{loc}: enExample==zhExample: "{ee[:50]}"')
                        key = (ee, ze)
                        if key in seen and key != ('', ''):
                            issues.append(f'{loc}: expansionNote [{lbl}] 有重复示例')
                        seen.add(key)
                        
                        # 检查 enExample 混入中文（sup extract 失败的信号）
                        if ee and re.search(r'[\u4e00-\u9fff]', ee):
                            warnings.append(f'{loc}: enExample 含中文: "{ee[:50]}"')
    
    # 与 nce4.ts 对比句子数
    if nce4_texts:
        if len(note_texts) != len(nce4_texts):
            issues.append(f'句子数不匹配: notes={len(note_texts)} vs nce4.ts={len(nce4_texts)}')
    
    # otherNotes 检查
    other = data.get('otherNotes', [])
    if other:
        for i, n in enumerate(other):
            if not n.get('label'):
                issues.append(f'otherNotes[{i}]: 缺 label')
    
    return issues, warnings, stats

def print_result(lesson_id, issues, warnings, stats, verbose=True):
    icon = '✅' if not issues else '❌'
    print(f'{icon} {lesson_id}: {stats["sentences"]} 句, pred={stats["with_predicates"]}, inline={stats["with_inline"]}, expansion={stats["with_expansion"]}({stats["total_expansion_notes"]}条)')
    
    if verbose:
        for w in warnings:
            print(f'  ⚠️  {w}')
        for e in issues:
            print(f'  ❌ {e}')
    
    return len(issues) == 0

def main():
    if '--summary' in sys.argv:
        total = {'files': 0, 'issues': 0, 'ok': 0, 'sentences': 0}
        for f in sorted(os.listdir(DATA_DIR)):
            if not f.endswith('.json') or f == 'index.json':
                continue
            lid = f.replace('.json', '')
            issues, _, stats = validate(lid, verbose=False)
            total['files'] += 1
            total['sentences'] += stats['sentences']
            if issues:
                total['issues'] += 1
            else:
                total['ok'] += 1
        
        print(f'总计: {total["files"]} 课, {total["sentences"]} 句')
        print(f'通过: {total["ok"]}, 有问题: {total["issues"]}')
        return
    
    if '--all' in sys.argv:
        all_ok = True
        for f in sorted(os.listdir(DATA_DIR)):
            if not f.endswith('.json'):
                continue
            lid = f.replace('.json', '')
            issues, warnings, stats = validate(lid, verbose=False)
            ok = print_result(lid, issues, warnings, stats, verbose=bool(issues or warnings))
            if not ok:
                all_ok = False
        sys.exit(0 if all_ok else 1)
    
    # 单课验证
    lesson_id = sys.argv[1] if len(sys.argv) > 1 else None
    if not lesson_id:
        print('用法: validate_notes.py <nce4-lXX> | --all | --summary')
        sys.exit(1)
    
    issues, warnings, stats = validate(lesson_id)
    ok = print_result(lesson_id, issues, warnings, stats)
    sys.exit(0 if ok else 1)

if __name__ == '__main__':
    main()
