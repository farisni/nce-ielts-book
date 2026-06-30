<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 项目设计风格

Flat UI / Minimalist SaaS — 扁平无渐变，靠间距层级区分内容。

参考审美：
- **Stripe / Vercel aesthetic** — 大量留白、微妙 border 分隔、低饱和度主题色
- **Linear / Notion style** — 极简企业级工具风

具体原则：
- 不用渐变、不用大阴影（卡片无 shadow 或极淡）
- 分隔靠 border（dashed / subtle solid）而不是色块
- 颜色使用 zinc/slate 中性色系，主题色低饱和度
- 字体：中文 霞鹜文楷（weikai），英文保持系统默认
- 列表条目保持呼吸感和留白：`space-y-3`、`leading-relaxed` 起步，避免拥挤

## 草图评估模式
- 「去掉虚线」/「去掉草图」：移除所有虚线边框（`border-dashed` + `border-border`），看无边框效果
- 「还原虚线」/「还原草图」：`git checkout bb685c5 -- <files>` 恢复 15 个文件的虚线边框
## 技术栈
- **框架**: Next.js 16.2.9 (App Router) + Turbopack
- **样式**: Tailwind CSS + shadcn/ui
- **端口**: 3006

## Turbopack 编译死循环处理
- **现象**：`next-server` CPU 持续 300%+ 不回落，修改 `globals.css` 后触发
- **原因**：`.next` 缓存损坏导致增量编译陷入循环
- **解决**：`rm -rf .next && npm run dev` 清除缓存重启
