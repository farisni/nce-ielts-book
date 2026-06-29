# 字体系统

## 英文字体

### Lyon Text（正文）
- **来源**: 用户本地下载 (`/Users/faris/Downloads/Fonts_Package_884bcd718e5f883633c7600f53d29bbb/`)
- **文件**: `public/fonts/LyonText-Regular.woff2` + `.woff`
- **声明**: `src/app/globals.css` — `@font-face`
- **字体栈**: `"Lyon Text", "IBM Plex Serif", "Georgia", "Times New Roman", serif`
- **应用**: TED 文章正文、NCE/IELTS 文章正文

### 英文标题/副标题
- **字体栈**: `"Inter", "SF Pro Display", system-ui, -apple-system, sans-serif`
- **应用**: TED 英文副标题、作者

## 中文字体

### 标题
- **字体栈**: `"PingFang SC", "Source Han Sans SC", "Noto Sans SC", sans-serif`
- **应用**: TED 中文标题、Top Nav 中文

### 正文/翻译
- **全局字体**: LXGW WenKai Screen（霞鹜文楷）
- **应用**: 中文翻译、NCE/IELTS 中文正文

## 排版规范（TED 页面）

| 元素 | 大小 | 字重 | 颜色 |
|------|------|------|------|
| 中文标题 | 24px (text-2xl) | 600 | foreground |
| 英文副标题 | 18px (text-lg) | 400 | muted/80 |
| 作者 | 12px (text-xs) | 400 | muted/50, uppercase |
| 英文正文 | 18px (text-lg) | 400 | foreground |
| 中文翻译 | ~14.4px | 400 | muted/80 |
