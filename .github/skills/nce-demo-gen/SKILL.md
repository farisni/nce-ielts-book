---
name: nce-demo-gen
description: >
  Generate NCE grammar demo pages from scraped ncego.com HTML cache.
  Parses each passage sentence + expansion notes into Sentence + KnowledgePoint components,
  with color-coded highlights and table/ul-li KPs.
  Use when the user wants to "生成demo页", "新建demo", "语法笔记", "nce demo page",
  or "参照 /demo/faris 创建" a new lesson demo.
---

# NCE Demo Generator

从 ncego.com 爬虫缓存 HTML 直接解析生成语法教学 demo 页，一句一个 Sentence。

## 工作流

### Step 1: 确保已有 HTML 缓存

```bash
python3 .github/skills/nce-scraper/scripts/scrape_ncego.py "https://www.ncego.com/lessons/<ID>"
```

缓存位置：`.github/skills/nce-scraper/html_cache/lesson-<ID>.html`

### Step 2: 生成 demo 页

```bash
python3 .github/skills/nce-demo-gen/scripts/gen_demo.py <lesson-id> <output-path>
```

示例：
```bash
python3 .github/skills/nce-demo-gen/scripts/gen_demo.py 213 src/app/demo/n3-l41/page.tsx
```

### Step 3: 人工补充

生成后需要人工做以下工作：

1. **补充数据数组**：脚本会复用已有的 `*_DATA` / `*_LIST` 数组。对于新增的知识点（`NEW` 标记），需要手动创建数据数组。
2. **调整 KP 映射**：在 `KP_MAP` 中维护 `知识点名称 → (数据数组名, 'table'|'list')` 的映射。
3. **清理 `sup` 标签文本**：原文中 `开篇明义`、`虚拟语气` 等 sup 注释会混入引用句，需手动删除或调整。
4. **调整中文注解**：`<span>` 的 `text-[13px] text-gray-500` 中文提示行默认留空，按主题填入。
5. **Badge**：如需课程徽章（如 `N3-L41`），在 Sentence 1 的 quote 中手动添加。

## 页面结构约定

### Sentence 组件

每个原文句子一个 `<Sentence>`，包含：
- `quote`：带高亮的原文（`<span style={{ color: "#bd491e", fontWeight: 600 }}>` 标记动词 / 结构）
- 子组件：`<KnowledgePoint>` 若干

### KnowledgePoint 组件

- **表格型**（`_DATA` 数组）：左列「表达/结构」+ 右列「例句」，用 `<Table>` 组件
- **列表型**（`_LIST` 数组）：灰绿渐变圆点 + `en` `cn` 对，用 `<ul><li>`

### 高亮颜色系统

| 类型 | 颜色 | 用途 |
|---|---|---|
| 动词/结构 | `#bd491e` | 课文中的核心动词、搭配 |
| 情态动词 | `#d97706` | must, could, may 等 |
| mark 标签 | 蓝色渐变 `rgba(147,197,228,0.34)` + 文字 `#1f465b` | `HighlightText` 组件内部 mark |

### 页面容器

```tsx
<main className="mx-auto mt-16 w-[880px] min-w-[880px] min-h-[600px] rounded-md border border-dashed border-zinc-300 p-8">
```

CSS 样式：

```css
blockquote { font-family: "Lyon Text", Georgia, "LXGW WenKai Screen", serif; }
main mark {
  background: linear-gradient(to top, rgba(147, 197, 228, 0.34) 42%, transparent 42%);
  color: #1f465b;
  font-weight: 600;
  padding: 0 0.02em 0.02em;
}
```

### 数据数组格式

```ts
// 表格型
const FOO_DATA = [
  { expr: "expression", note: "说明", ex: "example sentence", hl: "highlight" },
];

// 列表型
const BAR_LIST = [
  { en: "English text", cn: "中文释义" },
];
```

### 页面 imports

```tsx
"use client";
import React from "react";
import { KnowledgePoint } from "@/app/_components/knowledge-point";
import { Sentence } from "@/app/_components/sentence";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
```

## 注意事项

- 每节课的第一个 h3（`本课重点词汇`）会被跳过
- 原文中 `&nbsp;` 会被转为普通空格
- 空白字符文本节点会被保留以保证单词间距
- 生成后务必检查 `sup` 标签文本混入引用句的问题
- KP 映射不完整的条目不会生成 KnowledgePoint（静默跳过）
