---
name: nce-scraper
description: >
  Scrape NCE lesson data from ncego.com and safely merge annotations into article-notes.ts.
  Use when the user wants to scrape a lesson, update article annotations/notes from ncego.com,
  or merge scraped annotation data. Triggers on "爬取", "scrape ncego",
  "更新课文数据", "merge paragraphs", "nce4-l" URLs, or when working with scripts/scrape_ncego.py.
---

# NCE Scraper

Scrape lesson data from ncego.com and safely merge annotations into `src/app/mock/data/`.

## 数据架构

- `src/app/mock/nce4.ts` — Article 定义 + `original.paragraphs`（只有 `{ text, translation }`，**只读不动**）
- `src/app/mock/data/nce4-lXX.json` — 每课独立 JSON，annotations 数据（predicates, inlineAnnotations, expansionNotes 等）
- `src/app/mock/data/index.ts` — 聚合所有 JSON，注册到 `ARTICLE_ORIGINALS`
- `src/app/mock/article-notes.ts` — `getParagraphs()` 运行时合并 text/translation + annotations

## Workflow

### Step 1: Scrape

```bash
python3 scripts/scrape_ncego.py <URL>
```

输出 `nce4-lXX.ts`（临时文件），包含抓取的 annotations 数据。

### Step 2: Merge

```bash
python3 .github/skills/nce-scraper/scripts/merge_paragraphs.py <scraped.ts> <lesson_no>
```

合并脚本只写 `article-notes.ts`，**不动 nce4.ts**，**不动 translation**。

### Step 3: Validate ⭐

```bash
python3 .github/skills/nce-scraper/scripts/validate_notes.py nce4-l3
```

检查项：

| 类别 | 检查项 |
|------|--------|
| 完整性 | 句子数是否与 nce4.ts 匹配 |
| 完整性 | 每句 text 非空 |
| 合理性 | translation 为空（应来自 nce4.ts） |
| 合理性 | enExample ≠ zhExample（无重复翻译） |
| 合理性 | enExample 不含中文（sup extract 正常） |
| 合理性 | expansionNote label 无 HTML 残留 |
| 合理性 | inlineAnnotation 有 label |
| 合理性 | otherNotes 有 label |

批量验证：

```bash
python3 .github/skills/nce-scraper/scripts/validate_notes.py --all     # 全部
python3 .github/skills/nce-scraper/scripts/validate_notes.py --summary # 汇总
```

## Key Rules

- 只更新 `src/app/mock/data/`（annotations），绝不碰 nce4.ts
- translation 永远保留，不会被覆盖
- 合并后**必须运行 validate_notes.py** 验证
