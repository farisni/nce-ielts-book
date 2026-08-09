import { NextRequest, NextResponse } from "next/server"
import { getSpanishPronHistory, appendSpanishPronHistory, getAllSpanishPronHistory } from "@/lib/speller/db"

/**
 * 西语日常会话评分历史 API
 * 数据存在 speller_pron_history 表，course_id="西语基础"，result 存最近 5 次评分数组
 * - GET  → 全部例句的评分历史（sentence → results[]）
 * - POST → 追加一次评分（body: { sentence, result }）
 */

export async function GET() {
  const history = getAllSpanishPronHistory()
  return NextResponse.json({ history })
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "请求体不是有效 JSON" }, { status: 400 })
  }
  const { sentence, result } = (body ?? {}) as Record<string, unknown>
  if (typeof sentence !== "string" || !sentence.trim()) {
    return NextResponse.json({ error: "缺少 sentence 字段" }, { status: 400 })
  }
  if (typeof result !== "object" || result === null || Array.isArray(result)) {
    return NextResponse.json({ error: "缺少 result 字段" }, { status: 400 })
  }
  appendSpanishPronHistory(sentence, result)
  return NextResponse.json({ ok: true })
}
