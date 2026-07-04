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

- `src/app/mock/nce2.ts` / `src/app/mock/nce3.ts` / `src/app/mock/nce4.ts` — Article 定义 + `registerOriginals()` 提供正文和译文（**base**）
- `src/app/mock/data/nceX-lXX.json` — 每课独立 JSON，**只存 annotations 数据**（predicates, inlineAnnotations, expansionNotes 等），text/translation 留空
- `src/app/mock/data/index.ts` — 聚合所有 JSON，通过 `registerAnnotations()` 注册到 `ARTICLE_ANNOTATIONS`
- `src/app/mock/article-notes.ts` — 两个 store + `getParagraphs()` 运行时合并

### Store 拆分

```
nceX.ts registerOriginals() → ARTICLE_BASES      (text + translation)
data/index.ts JSON imports   → ARTICLE_ANNOTATIONS (annotations only)

getParagraphs():
  base  = article.original?.paragraphs
       ?? ARTICLE_BASES[key]?.paragraphs       ← 正文来自 nceX.ts
       ?? ARTICLE_ANNOTATIONS[key]?.paragraphs  ← 兜底
  notes = ARTICLE_ANNOTATIONS[key]?.paragraphs  ← 注解来自 JSON
  → 合并返回 { text, translation, predicates, inlineAnnotations, ... }
```

这样 `registerOriginals` 和 JSON 不再互相覆盖——正文和注解各走各的 store。

## 新课文添加流程

### Step 1: 抓取

```bash
python3 scripts/scrape_ncego.py <URL>
```

输出 `nce4-lXX.ts`（临时文件），包含抓取的 annotations 数据。

### Step 2: 转换 annotations 到 JSON

从抓取输出中提取所有字段（text、translation、predicates、inlineAnnotations、expansionNotes 等），生成 JSON。text/translation 可以带着（方便查看），但**运行时不会被用到**——`getParagraphs` 优先从 `nceX.ts` 的 `registerOriginals` 拿 base 的正文和译文，不在 base 里的才会兜底用 JSON 的。

```json
{
  "paragraphs": [
    [
      {
        "text": "Some time ago, an interesting discovery was made...",
        "translation": "不久之前，在爱琴海的基亚岛上...",
        "predicates": ["was made"],
        "inlineAnnotations": [{"label": "Some time ago", "description": "..."}],
        "expansionNotes": []
      }
    ]
  ]
}
```

JSON 里的 `paragraphs` 结构（段落数、每段句子数）必须与 `nceX.ts` 中 `registerOriginals` 的对应 entry 严格一致，这样 `getParagraphs` 才能按索引正确合并 base 和 notes。

### Step 3: 注册 JSON

在 `src/app/mock/data/index.ts` 中添加 import 和注册项。

### Step 4: 确保课文在 registerOriginals 中

如果该课文还不在 `nceX.ts` 的 `registerOriginals` 里，需要添加。正文和译文从这里来。

### Step 5: 验证

```bash
rm -rf .next && npm run dev
```

打开页面检查：正文、译文、tooltip 标注、句末三点、语法摘要面板都要正常显示。

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
