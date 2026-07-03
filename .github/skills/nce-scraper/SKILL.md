---
name: nce-scraper
description: >
  Scrape NCE lesson data from ncego.com and safely merge annotations into article-notes.ts.
  Use when the user wants to scrape a lesson, update article annotations/notes from ncego.com,
  or merge scraped annotation data. Triggers on "爬取", "scrape ncego",
  "更新课文数据", "merge paragraphs", "nce4-l" URLs, or when working with scripts/scrape_ncego.py.
---

# NCE Scraper

Scrape lesson data from ncego.com and safely merge annotations into `article-notes.ts`.

## 数据架构

- `src/app/mock/nce4.ts` — Article 定义 + `original.paragraphs`（只有 `{ text, translation }`，只读不动）
- `src/app/mock/article-notes.ts` — annotations 数据（predicates, inlineAnnotations, expansionNotes 等），通过 `registerOriginals` 注册
- `getParagraphs()` — 运行时合并两者：text/translation 来自 nce4.ts，annotations 来自 article-notes.ts

## Workflow

### Step 1: Scrape

```bash
python3 scripts/scrape_ncego.py <URL>
```

### Step 2: Merge Annotations

```bash
python3 .github/skills/nce-scraper/scripts/merge_paragraphs.py <scraped.ts> <lesson_no>
```

合并脚本只写 `article-notes.ts`，**不动 nce4.ts**，**不动 translation**。

## Key Rules

- 只更新 article-notes.ts（annotations），绝不碰 nce4.ts
- translation 永远保留，不会被覆盖
