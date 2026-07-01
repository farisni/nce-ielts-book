# 动画技术笔记

## 行间笔记面板展开/收起动画

### 问题背景

行间笔记面板（panel）使用 Framer Motion `AnimatePresence` 控制展开/收起。最初尝试用 `layout` + `height: "auto"` + spring 做丝滑的高度过渡，但遇到卡顿问题。

### 踩坑过程

| 尝试 | 方案 | 问题 |
|------|------|------|
| 1 | `layout` + `height: "auto"` + spring | `height: "auto"` 每帧都要重算布局，严重卡顿 |
| 2 | `layout` + 去掉 height，纯 spring | `layout` 和 `AnimatePresence` exit 冲突，收起末尾卡一下 |
| 3 ✅ | 去掉 `layout`，`opacity + y` 微滑动 + tween | 流畅，无卡顿 |

### 最终方案

```tsx
<AnimatePresence>
  {activePanelKey === key && sentence.panelNotes && (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* panel content */}
    </motion.div>
  )}
</AnimatePresence>
```

### 关键技术决策

- **不用 `layout`**：`layout` 和 `AnimatePresence` 的 exit 时机冲突——元素从 DOM 移除瞬间 layout 动画还在计算，产生卡顿
- **不用 spring，用 tween**：spring 收尾的弹性回弹恰好是"卡一下"的感觉来源；ease-out tween 保证干净收尾
- **不用 `height` 动画**：`height: "auto"` 在 Framer Motion 中性能极差，每帧 layout thrashing
- **父级 `flex flex-col gap-2` 自然处理布局**：面板淡出后，flex gap 自动闭合，无需手动动画

### 相关文件

- `src/app/_components/article-page.tsx` — 面板渲染（~L898-915）
- `src/lib/ease.ts` — `SPRING_PANEL`（当前 stiffness: 350, damping: 32, mass: 0.55，面板未使用，保留给其他场景）

### 参考

- Framer Motion `layout` prop 适合兄弟元素之间的位置过渡，不适合 `AnimatePresence` enter/exit
- `AnimatePresence` exit 动画应该短且确定（tween > spring）
- 高度动画用 `layout` 自动处理，不要手动 `height: "auto"`
