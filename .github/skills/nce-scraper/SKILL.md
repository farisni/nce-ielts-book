---
name: nce-scraper
description: >
  Scrape NCE lesson data from ncego.com and safely merge annotations into article-notes.ts.
  Use when the user wants to scrape a lesson, update article annotations/notes from ncego.com,
  or merge scraped annotation data. Triggers on "爬取", "scrape ncego",
  "更新课文数据", "merge paragraphs", "nce4-l" URLs, or when working with .github/skills/nce-scraper/scripts/scrape_ncego.py.
---

# NCE Scraper

Scrape lesson data from ncego.com and safely merge annotations into `src/app/mock/data/`.

## 数据架构

- `src/app/mock/nce2.ts` / `src/app/mock/nce3.ts` / `src/app/mock/nce4.ts` — Article 定义 + `registerOriginals()` 提供正文和译文（**base**）
- `src/app/mock/data/nceX-lXX.json` — 每课独立 JSON，**存 annotations 数据**（predicates, inlineAnnotations, expansionNotes 等），text/translation 也可以带上但运行时 base 优先
- `src/app/mock/data/index.ts` — 聚合所有 JSON，通过 `registerAnnotations()` 注册到 `ARTICLE_ANNOTATIONS`
- `src/app/mock/article-notes.ts` — 两个 store + `getParagraphs()` 运行时合并

### Store 拆分

```
nceX.ts registerOriginals() → ARTICLE_BASES      (text + translation)
data/index.ts JSON imports   → ARTICLE_ANNOTATIONS (annotations, text/translation as fallback)

getParagraphs():
  base  = article.original?.paragraphs
       ?? ARTICLE_BASES[key]?.paragraphs       ← 正文优先来自 nceX.ts
       ?? ARTICLE_ANNOTATIONS[key]?.paragraphs  ← 兜底
  notes = ARTICLE_ANNOTATIONS[key]?.paragraphs  ← 注解来自 JSON
  → 合并返回 { text, translation, predicates, inlineAnnotations, ... }
```

这样 `registerOriginals` 和 JSON 不再互相覆盖——正文和注解各走各的 store。

## 新课文添加流程

### Step 1: 抓取

```bash
python3 .github/skills/nce-scraper/.github/skills/nce-scraper/scripts/scrape_ncego.py <URL>
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

## Demo 页面编码规范

编写 `src/app/demo/{level}-l{lesson}/` 下课文 demo 页面时遵守。参考实现：`src/app/demo/n3-l41/page.tsx`。

### 组件与间距

```tsx
<Sentence quote={...} quoteClassName="mt-12 mb-5">
  <KnowledgePoint titleEn="标题" titleCn="副标题">
    <Table>...</Table>  {/* 或 <ul> */}
  </KnowledgePoint>
</Sentence>
```

- 句子间距：`mt-12`（48px）/ `mb-5`（20px）
- 知识点底部：`mb-5`
- 列表条目：`space-y-1.5`
- Sentence 的 `children` 可选（允许无知识点的句子）

### 注释/解说样式

句末中文注释（如"开篇明义"、"雄狮句型"、"虚拟语气"）必须换行，用小字灰色：

```tsx
<span>. </span>
<br />
<span className="text-[13px] text-gray-500 font-normal">
  开篇明义
</span>
```

**不要**把中文注释内联在句子 `<span>` 中。

### 高亮约定

例句高亮词（`hl` 字段）对齐 ncego.com 原始页面的 `<strong>` 标签：

- 从缓存 HTML 提取 `<strong>` 内容作为 `hl`
- 若原始无 `<strong>`，取核心语法标记词
- 渲染用 `HighlightText` 组件
- 避免太短的 `hl`（如 `"it"`）导致误匹配

### 数据形状

目标统一为四字段 `{ term, gloss, example, highlight }`（未来入库）。过渡期暂用：

| 形态 | 字段 | 示例 |
|---|---|---|
| 表达+例句表 | `{ expr, note, ex, hl }` | APPEAL_DATA, BUS_RIDE_DATA |
| 简单词汇列表 | `{ en, cn }` | COUNTRY_LIST, TREAT_LIST |
| 对比表 | `{ expr, note, ex, hl }`（ex 作对比值） | EVERYDAY_DATA |

### Flat UI 美学

- 标题 16px semibold，正文 16px regular — 同级字号，层级靠字重和间距
- 颜色：zinc-950（标题）/ gray-600（正文）/ gray-400（副标题）/ #4980b1（关键词）
- 谓语标记：`<span style={{ color: "#bd491e", fontWeight: 600 }}>`
