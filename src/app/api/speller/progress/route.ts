import { NextRequest, NextResponse } from "next/server"
import {
  getProgressRow,
  upsertProgress,
  resetProgressRow,
  getAllProgressRows,
} from "@/lib/speller/db"

/**
 * 拼写进度 API
 * - GET  /api/speller/progress?course=basic → 单课程进度
 * - GET  /api/speller/progress?all=1          → 全部课程进度
 * - POST /api/speller/progress                 → 累加某课程进度
 * - DELETE /api/speller/progress?course=basic  → 重置某课程进度
 */

export async function GET(request: NextRequest) {
  const course = request.nextUrl.searchParams.get("course")
  if (!course) {
    const all = getAllProgressRows()
    return NextResponse.json({ courses: all })
  }
  const row = getProgressRow(course)
  return NextResponse.json({ course, row })
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "请求体不是有效 JSON" }, { status: 400 })
  }
  const { course, passed, mastered, newWords, errors, completed } = (body ?? {}) as Record<string, unknown>
  if (typeof course !== "string" || !course) {
    return NextResponse.json({ error: "缺少 course 字段" }, { status: 400 })
  }
  const toInt = (v: unknown): number => (typeof v === "number" && Number.isFinite(v) ? Math.max(0, Math.floor(v)) : 0)
  const row = upsertProgress(course, {
    passed: toInt(passed),
    mastered: toInt(mastered),
    new_words: toInt(newWords),
    errors: toInt(errors),
    completed: toInt(completed),
  })
  return NextResponse.json({ course, row })
}

export async function DELETE(request: NextRequest) {
  const course = request.nextUrl.searchParams.get("course")
  if (!course) {
    return NextResponse.json({ error: "缺少 course 字段" }, { status: 400 })
  }
  resetProgressRow(course)
  return NextResponse.json({ ok: true })
}
