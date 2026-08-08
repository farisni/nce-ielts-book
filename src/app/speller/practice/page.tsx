"use client"

import { useRouter } from "next/navigation";
import SentencePractice from "@/components/speller/SentencePractice";

/**
 * Speller · 听写练习页
 * 挂载即自动开始；顶部进度条与底部上一句/下一句按钮通过 Portal 渲染到本页槽位
 */
export default function SpellerPracticePage() {
  const router = useRouter();

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      {/* 进度条固定槽位：练习中的进度/时间条通过 Portal 渲染到这里（页面顶部） */}
      <div id="progress-slot" className="w-full shrink-0" />

      {/* 主练习区：宽度撑满 + 内容上下左右居中 */}
      <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center px-6 py-6">
        <SentencePractice autoStart onExit={() => router.push("/speller")} />
      </div>

      {/* 底部栏：左上一句 / 中快捷键 / 右下一句 */}
      <footer className="shrink-0 border-t">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-2.5">
          {/* 左：上一句（Portal 槽位） */}
          <div id="prev-slot" className="flex w-28 flex-none items-center justify-start" />

          {/* 中：快捷键提示 */}
          <div className="flex flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <kbd className="rounded border bg-muted px-2 py-1 font-mono text-xs text-foreground">`</kbd>
              播放发音
            </span>
            <span className="flex items-center gap-2">
              <kbd className="flex items-center gap-1 rounded border bg-muted px-2 py-1 font-mono text-xs text-foreground">
                <span className="flex h-4 items-center overflow-hidden text-[15px] leading-none">⌘</span> M
              </kbd>
              掌握
            </span>
            <span className="flex items-center gap-2">
              <kbd className="flex items-center gap-1 rounded border bg-muted px-2 py-1 font-mono text-xs text-foreground">
                <span className="flex h-4 items-center overflow-hidden text-[15px] leading-none">⌘</span> N
              </kbd>
              生词
            </span>
            <span className="flex items-center gap-2">
              <kbd className="rounded border bg-muted px-2 py-1 font-mono text-xs text-foreground">Enter</kbd>
              提交
            </span>
            <span className="flex items-center gap-2">
              <kbd className="flex items-center gap-1 rounded border bg-muted px-2 py-1 font-mono text-xs text-foreground">
                右 <span className="flex h-4 items-center overflow-hidden text-[15px] leading-none">⌘</span>
              </kbd>
              显示答案
            </span>
          </div>

          {/* 右：下一句（Portal 槽位） */}
          <div id="next-slot" className="flex w-28 flex-none items-center justify-end" />
        </div>
      </footer>
    </div>
  );
}
