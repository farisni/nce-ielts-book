"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SESSION_SIZE } from "@/lib/speller/sentences";

/**
 * Speller · 听写打字练习
 * 欢迎页：点击「开始听写」跳转到独立练习路由 /speller/practice
 */
export default function SpellerPage() {
  const router = useRouter();

  return (
    <div className="flex h-full min-h-0 w-full flex-1 flex-col items-center justify-center text-center">
      <p className="mb-3 text-base font-medium uppercase tracking-[0.3em] text-primary">Sentence Dictation</p>
      <h1 className="mb-5 text-5xl font-bold tracking-tight text-foreground">听写句子</h1>
      <p className="mb-10 max-w-lg text-lg text-muted-foreground">
        看中文，听发音，用键盘打出英文句子。
        <br />
        Enter 提交，写对标绿、写错标红。共 {SESSION_SIZE} 句。
      </p>
      <Button onClick={() => router.push("/speller/practice")} size="lg" className="h-12 px-12 text-lg">
        开始听写
      </Button>
    </div>
  );
}
