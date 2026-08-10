import { NextRequest, NextResponse } from "next/server"
import { getWordLearningRows, upsertWordLearning } from "@/lib/words/db"

/**
 * 单词学习记录同步 API
 * - GET  /api/word-learning?wordbookId=xxx → 该单词本全部学习记录
 * - POST /api/word-learning                 → 批量接收 App 端学习记录（熟悉度 + 评分）
 *   body: { records: [{ wordbookId, wordId, text, status, knownCount,
 *                       unknownCount, lastScore, lastResult, updatedAt }] }
 *
 * 设计类比（Java Web DAO）：路由只做入参校验与序列化，落库细节由
 * lib/words/db.ts 的 upsertWordLearning 处理（时间戳冲突保留最新）。
 */

/** 校验一条 App 端同步记录，合法则返回可落库的 DAO 行，否则返回 null */
function toRow(record: Record<string, unknown>) {
  const wordbookId = typeof record.wordbookId === "string" ? record.wordbookId : ""
  const wordId = typeof record.wordId === "string" ? record.wordId : ""
  const text = typeof record.text === "string" ? record.text : ""
  if (!wordbookId || !wordId || !text) return null
  const toInt = (v: unknown): number =>
    typeof v === "number" && Number.isFinite(v) ? Math.max(0, Math.floor(v)) : 0
  return {
    wordbook_id: wordbookId,
    word_id: wordId,
    text,
    status: typeof record.status === "string" && (record.status === "known" || record.status === "unknown")
      ? record.status
      : null,
    known_count: toInt(record.knownCount),
    unknown_count: toInt(record.unknownCount),
    last_score: typeof record.lastScore === "number" && Number.isFinite(record.lastScore) ? record.lastScore : null,
    last_result: typeof record.lastResult === "string" ? record.lastResult : null,
    updated_at: typeof record.updatedAt === "number" && Number.isFinite(record.updatedAt) ? record.updatedAt : Date.now(),
  }
}

export async function GET(request: NextRequest) {
  const wordbookId = request.nextUrl.searchParams.get("wordbookId")
  if (!wordbookId) {
    return NextResponse.json({ error: "缺少 wordbookId 字段" }, { status: 400 })
  }
  const records = getWordLearningRows(wordbookId)
  // snake_case 行 → camelCase 输出，与 App 端字段契约一致
  return NextResponse.json({
    records: records.map((r) => ({
      wordbookId: r.wordbook_id,
      wordId: r.word_id,
      text: r.text,
      status: r.status,
      knownCount: r.known_count,
      unknownCount: r.unknown_count,
      lastScore: r.last_score,
      lastResult: r.last_result,
      updatedAt: r.updated_at,
    })),
  })
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "请求体不是有效 JSON" }, { status: 400 })
  }
  const { records } = (body ?? {}) as Record<string, unknown>
  if (!Array.isArray(records) || records.length === 0) {
    return NextResponse.json({ error: "缺少 records 数组" }, { status: 400 })
  }
  const rows = records
    .map((r) => toRow((r ?? {}) as Record<string, unknown>))
    .filter((row): row is NonNullable<typeof row> => row != null)
  if (rows.length === 0) {
    return NextResponse.json({ error: "records 中没有合法记录" }, { status: 400 })
  }
  upsertWordLearning(rows)
  return NextResponse.json({ ok: true, count: rows.length })
}
