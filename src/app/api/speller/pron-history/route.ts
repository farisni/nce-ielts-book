import { NextRequest, NextResponse } from "next/server"
import { getPronHistory, upsertPronHistory } from "@/lib/speller/db"

/**
 * 发音评测历史 API
 * - GET  /api/speller/pron-history?course=basic → 该课程全部评分历史（sentence → result JSON）
 * - POST /api/speller/pron-history              → 保存某句评分结果
 *   body: { course, sentence, result }
 */

export async function GET(request: NextRequest) {
  const course = request.nextUrl.searchParams.get("course")
  if (!course) {
    return NextResponse.json({ error: "缺少 course 字段" }, { status: 400 })
  }
  const history = getPronHistory(course)
  return NextResponse.json({ course, history })
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "请求体不是有效 JSON" }, { status: 400 })
  }
  const { course, sentence, result } = (body ?? {}) as Record<string, unknown>
  if (typeof course !== "string" || !course) {
    return NextResponse.json({ error: "缺少 course 字段" }, { status: 400 })
  }
  if (typeof sentence !== "string" || !sentence.trim()) {
    return NextResponse.json({ error: "缺少 sentence 字段" }, { status: 400 })
  }
  if (typeof result !== "object" || result === null || Array.isArray(result)) {
    return NextResponse.json({ error: "缺少 result 字段" }, { status: 400 })
  }
  upsertPronHistory(course, sentence, JSON.stringify(result))
  return NextResponse.json({ ok: true })
}
