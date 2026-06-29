# 项目布局演进记录

本文记录本轮布局从初始状态到当前结构的主要变化，方便后续继续调整时快速理解上下文。

## 1. 初始布局

最开始的根布局在 `src/app/layout.tsx` 中大致是：

```tsx
<TopNav />

<div data-section="main-container" className="mx-auto flex max-w-[1440px] gap-6 px-6 py-8">
  <AppSidebar />

  <main data-section="main-content" className="min-w-[1022px] flex-1">
    {children}
  </main>
</div>

<footer>底部区域 -- 可放置版权、链接等</footer>
<FloatAction />
```

特点：

- `TopNav` 是全局顶部导航，使用 `fixed top-0 left-0 right-0`。
- `AppSidebar` 和 `main` 在顶部导航下方的居中容器中左右排列。
- 外层容器限制在 `max-w-[1440px]`，并有 `px-6 py-8`。
- 项目里有大量用于布局调试的虚线边框。
- 页面底部有占位 footer 文案。

## 2. 去掉草图边框和 footer

先清理了布局调试用的虚线边框，也约定：

- “去掉草图”表示移除这些临时布局边框。
- “还原草图”表示恢复这些边框。

同时删除了根布局里的 footer 占位文案：

```text
底部区域 -- 可放置版权、链接等
```

之后又按实际页面需求保留了部分表格外边框，例如 NCE 单词页和 `/words/ielts-all` 的表格外边框。

相关提交：

- `d3c8add chore: remove temporary layout borders`

## 3. 引入新的 Sidebar 组件

新增了 `src/components/ui/sidebar.tsx`，用于替换原来的 `Sidebar001`。

新 sidebar 的特点：

- 默认窄栏。
- hover 后展开。
- 桌面端使用 `motion/react` 控制宽度和文字显隐。
- 移动端提供全屏抽屉式菜单。
- 最初的 `SidebarLink` 使用原生 `<a href>`，后续改为 Next.js `<Link>`。

同时新增 demo 页面：

- `src/app/demo/macos-sidebar/page.tsx`

相关提交：

- `1ee18da feat: add macos sidebar demo`

## 4. 根布局改成左右壳层

随后将布局改为真正的左右关系：

```tsx
<div data-section="app-shell" className="flex min-h-svh w-full">
  <AppSidebar />

  <div data-section="right-shell" className="flex min-w-[1022px] flex-1 flex-col gap-6 pb-6">
    <TopNav />

    <main data-section="main-content" className="min-w-0 flex-1 px-6">
      {children}
    </main>
  </div>
</div>

<FloatAction />
```

变化点：

- `AppSidebar` 成为左侧独立列。
- `TopNav` 不再在 sidebar 上方，而是在右侧内容区域顶部。
- `main` 在 `TopNav` 下方。
- `app-shell` 从居中 `max-w-[1440px]` 改为 `w-full`，让 sidebar 能贴浏览器左边。
- `main` 自己保留 `px-6`，让页面主体有左右留白。

相关提交：

- `27f8836 refactor: update app shell layout`

## 5. Sidebar 贴边、全高、无边框

为了让 sidebar 像 demo 一样靠边，进行了几次调整：

- 去掉 `app-shell` 的左侧 padding。
- 去掉 `AppSidebar` 的外边框。
- 去掉覆盖默认底色的 `bg-background/95`，恢复组件默认背景：

```tsx
bg-neutral-100 dark:bg-neutral-800
```

- 将 sidebar 高度改为浏览器全高：

```tsx
h-svh
```

当前 sidebar 入口大致是：

```tsx
<Sidebar>
  <SidebarBody className="sticky top-0 h-svh overflow-hidden">
    ...
  </SidebarBody>
</Sidebar>
```

## 6. TopNav 贴顶、贴边和固定高度

TopNav 从原来的全局 fixed 导航改成右侧区域内 sticky 导航：

```tsx
<motion.header className="sticky top-0 z-50 h-14 border-b border-border bg-background/95 backdrop-blur-sm">
  ...
</motion.header>
```

关键变化：

- 从 `fixed top-0 left-0 right-0` 改为 `sticky top-0`。
- 去掉内部左右 padding，让 TopNav 内容贴右侧区域边缘。
- 去掉左侧 logo icon 和 `NCE` title。
- 去掉滚动时动态高度变化，固定为 `h-14`，避免滚动时内容抖动。
- 去掉写死的浅色滚动背景 `rgba(249,249,249,...)`，改为主题 token：

```tsx
bg-background/95
```

这样深色模式下滚动也不会变成浅色 TopNav。

## 7. 页面主体宽度统一

为了让不同页面在新布局下看起来对齐，统一将多个页面主体调整为文章页的宽度：

```tsx
mx-auto w-[1022px] min-w-[1022px] flex-none
```

已对齐的页面类型：

- 文章页：`/ielts?article=...`、`/nec/...`
- NCE 单词页：`/words/nce/...`
- IELTS 单词页：`/words/ielts-all`、`/words/ielts-538`
- Demo 页面：`/demo/...`

首页本身有自己的 grid 居中布局，所以没有按同样方式强行改外层。

相关提交：

- `86eaa2c refactor: align content widths`

## 8. TopNav 搜索增强

TopNav 的搜索不再只是跳转入口，还增加了单词搜索结果展示。

搜索索引来源：

- `vocabChapters`，雅思词汇真经。
- `keywordCategories`，538 考点词。
- `allArticles` 中每篇文章的 vocabulary。

搜索结果展示内容：

- 单词。
- 词性。
- 中文释义。
- 来源。

点击搜索结果会跳转到对应词汇页或文章页。

相关提交：

- `dff9994 feat: enhance top nav search`

## 9. Sidebar 分组整理

Sidebar 当前分组结构：

```text
Courses
  NCE2
  NCE3
  NCE4

IELTS
  IELTS 16
  雅思词汇真经
  538 考点词

Words
  NCE
    NCE2 单词
    NCE3 单词
    NCE4 单词

Demo
  Demo pages
    Demo · Table
    Grammar 语法解析
    Markdown 演示
    NCE4 L48 · 课文
    Demo · Syntax 依存关系
    Demo · Button
    Demo · Select
    Demo · MacOS Sidebar
```

其中 `NCE` 和 `Demo pages` 是折叠组。

相关提交：

- `d79b70a refactor: group sidebar links`

## 10. Sidebar 点击闪浅色背景修复

发现点击 sidebar item 时会短暂闪浅色背景。

原因：

- `SidebarLink` 最初使用原生 `<a href>`，点击时可能触发整页导航。
- 深色模式下整页重绘期间容易露出浏览器默认浅色背景。

修复：

- 将 `SidebarLink` 改成 Next.js `Link`。
- 给根 `body` 增加主题背景兜底：

```tsx
<body className="antialiased min-h-svh min-w-[1440px] bg-background text-foreground">
```

这部分随本次布局修复一起提交。

## 11. TopNav 去掉雅思词汇真经入口

后续将 TopNav 里的“雅思词汇真经”快捷入口移除：

- 顶部横向导航不再显示“雅思词汇真经”。
- Command 搜索弹窗的 `Navigate` 分组里也去掉该快捷入口。
- 单词搜索结果中的来源文案仍保留 `雅思词汇真经 · ...`，因为它描述的是词汇来源，不是导航入口。

Sidebar 的 IELTS 分组仍保留“雅思词汇真经”和 `538 考点词`，所以词汇页仍可从侧边栏进入。

## 12. 文章 Rough Highlight 随 Sidebar 过渡校准

文章正文高亮和标题下划线使用 `rough-notation` 绘制。Sidebar hover 展开/缩起后，页面内容的水平位置会变化，但已绘制的 rough SVG 不会自动跟着重新计算，所以会出现 highlight 错位。

修复分两步：

- `src/components/ui/sidebar.tsx` 在 sidebar 宽度过渡开始和结束时广播 `app-sidebar-layout-change` 事件。
- `src/components/rough-annotate.tsx` 监听该事件，并在过渡结束后刷新已显示的 rough 标注。

为了避免刷新过程看起来生硬，最终策略改为：

- Sidebar 开始展开/缩起时，在 `html` 上设置 `data-sidebar-transitioning="true"`。
- `src/app/globals.css` 中让 `.rough-annotation` 在过渡期间淡出。
- Sidebar 宽度动画结束后刷新标注位置，再让标注淡入。

这样 highlight 不会在 sidebar 过渡过程中硬跳，也能在过渡结束后保持对齐。

## 13. 当前布局总结

当前整体结构是：

```tsx
<body className="bg-background text-foreground">
  <ThemeProvider>
    <div data-section="app-shell" className="flex min-h-svh w-full">
      <AppSidebar />

      <div data-section="right-shell" className="flex min-w-[1022px] flex-1 flex-col gap-6 pb-6">
        <TopNav />

        <main data-section="main-content" className="min-w-0 flex-1 px-6">
          {children}
        </main>
      </div>
    </div>

    <FloatAction />
  </ThemeProvider>
</body>
```

视觉规则：

- Sidebar 贴浏览器左边，占满上下高度。
- TopNav 位于右侧区域顶部，贴顶、贴边。
- Main 内容区保留左右 `px-6`。
- 主要内容页在 main 内使用 `1022px` 固定宽度并居中。
- 深色模式下 TopNav 和 body 都使用主题背景色。
- 文章 rough highlight 会在 sidebar 过渡时淡出，过渡结束后重新校准并淡入。