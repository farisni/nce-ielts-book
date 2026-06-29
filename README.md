This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Components

Shadcn/ui 组件通过以下 registry 安装：

| 组件 | 来源 | 路径 |
|------|------|------|
| button-19 | [watermelon.sh](https://registry.watermelon.sh/r/button-19.json) | `src/components/ui/button-19.tsx` |
| transport-badge | [8starlabs.com](https://ui.8starlabs.com/r/transport-badge.json) | `src/components/8starlabs-ui/transport-badge.tsx` |
| flip-clock | [8starlabs.com](https://ui.8starlabs.com) | `src/components/8starlabs-ui/flip-clock.tsx` |
| velocity-highlight | [unlumen.com](https://ui.unlumen.com) | `src/components/unlumen-ui/primitives/effects/velocity-highlight.tsx` |
| theme-toggle | [beui.dev](https://beui.dev) | `src/components/motion/theme-toggle.tsx` |

安装命令示例：
```bash
npx shadcn@latest add https://registry.watermelon.sh/r/button-19.json
npx shadcn@latest add https://ui.8starlabs.com/r/transport-badge.json
npx shadcn@latest add @beui/theme-toggle
```

## 静态化部署方案

### 数据架构

项目所有数据均为本地 mock 数据，零外部 API 依赖：

| 数据类型 | 来源 | 方式 | 体积 |
|---|---|---|---|
| 课文文章 | `src/app/mock/nce*.ts` | TS import | ~2MB |
| 词汇表 | `src/app/mock/nce*.ts` | TS import | 内含 |
| 相似单词 | `src/app/mock/similar-words-*.json` | API 读文件 | ~8MB |
| 词根图谱 | `src/app/mock/root-atlas.ts` | TS import | ~5KB |
| 538 考点词 | `src/app/mock/ielts-538-vocabulary.ts` | TS import | ~50KB |

### 静态导出可行性

**结论：完全可行**，总体数据约 30MB，GitHub Pages（1GB 仓库 / 100GB 月带宽）足够。

#### 唯一障碍：API Routes

3 个相似单词 API（`/api/similar-words`、`/api/similar-words-nce2`、`/api/similar-words-nce3`）在 `output: 'export'` 下无法运行。

#### 解决方案：拆分 + 静态托管

构建时将大 JSON 按首字母拆分为 26 个文件，放入 `public/data/`：

```
public/data/similar-nce4/
  a.json (~300KB)
  b.json (~400KB)
  ...
  z.json (~200KB)
```

前端调用替换：
```ts
// 现在（需要 server）
fetch('/api/similar-words?word=abandon')

// 改后（静态文件）
fetch('/data/similar-nce4/a.json')
  .then(res => res.json())
  .then(data => data['abandon'])
```

### 完整步骤

1. 编写拆分脚本 `scripts/split-sim-data.ts`
2. 运行脚本，输出到 `public/data/`
3. 修改前端 `fetch` 调用路径（3 处）
4. `next.config.ts` 添加 `output: 'export'`
5. `next build` 输出到 `out/`
6. 部署 `out/` 到 GitHub Pages / CDN / 任意静态托管

### 备选方案

如果暂不静态化，保持当前混合模式部署到 Vercel/Netlify 即可，无需任何修改。
