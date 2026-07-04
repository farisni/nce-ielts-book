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

- `src/app/mock/nce2.ts` / `src/app/mock/nce3.ts` / `src/app/mock/nce4.ts` — Article 定义；旧课程可能还残留 `registerOriginals()` 正文注册
- `src/app/mock/data/nceX-lXX.json` — 每课独立 JSON，正文、译文、annotations 数据（predicates, inlineAnnotations, expansionNotes 等）
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

## 旧正文注册覆盖排查

如果 JSON 数据存在，但页面没有正文语法标注、句末三点、笔记面板内容，先检查运行时是否被旧注册覆盖：

```bash
rg -n "registerOriginals|nce3-l2|nce4-l2" src/app/mock
```

常见问题：

- `src/app/mock/data/nceX-lXX.json` 已经注册到 `data/index.ts`，但 `nce2.ts` / `nce3.ts` / `nce4.ts` 底部又有旧的 `registerOriginals({ "nceX-lXX": ... })`。
- 旧注册会后执行并覆盖 JSON 注册结果，导致页面读取到旧正文、空 `inlineAnnotations`、空 `expansionNotes`。
- 不要只删除旧注册就结束；如果 JSON 里 `translation` 为空，或抓取时把多句合并成坏 block，会导致原文结构和参考译文丢失。

正确修复顺序：

1. 以页面原有正文/参考译文为 base，恢复 `src/app/mock/data/nceX-lXX.json` 的 `paragraphs` 结构。
2. 把抓取来的 `predicates`、`inlineAnnotations`、`expansionNotes` 合并到对应句子。
3. 确认 JSON 已经包含完整 `text` 和 `translation` 后，再移除同一 lesson 的旧 `registerOriginals` 覆盖项（**只移除该项，不要删整个 registerOriginals 块**——其他没有独立 JSON 的 lesson 还依赖它）。
4. 刷新页面验证：句子数、参考译文、正文 tooltip 标注、句末三点和笔记面板都要同时存在。

## 例句显式高亮

笔记面板例句高亮默认会先用 `note.label` 做正则匹配；如果 label 表达的是语法结构、同义替换或非连续搭配，例句里常常不会出现完整 label。遇到这种情况，需要在对应 `examples` 条目上补充人工字段：

```json
{
  "enExample": "It's hard to tell the identical twins apart.",
  "zhExample": "很难分辨这对双胞胎。",
  "highlightTerms": ["tell", "apart"]
}
```

处理规则：

- `highlightTerms?: string[]` 只放例句中真实出现、需要额外高亮的英文片段。
- 保留 `label` 的完整表达，不要为了高亮把 label 改短或拆碎。
- 优先根据 label 语义补充字段，例如 `tell sb. / sth. apart` 可标 `["tell", "apart"]`，`be busy (in) doing sth.` 可标 `["busy eating"]`。
- 如果 label 能直接匹配例句，可以不加 `highlightTerms`。
- 如果例句只是语义相关、没有稳定可高亮的英文片段，放弃高亮，不要硬塞字段。
