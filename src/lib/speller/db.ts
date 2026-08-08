import { DatabaseSync } from "node:sqlite"
import path from "node:path"
import fs from "node:fs"

/**
 * 拼写进度 SQLite 数据库
 * - 数据文件：项目根 data/speller.db
 * - 表：speller_progress（按 course_id 存每课程进度）
 * - 用 node:sqlite（Node 22+ 内置），无需额外依赖
 */

const DATA_DIR = path.join(process.cwd(), "data")
const DB_PATH = path.join(DATA_DIR, "speller.db")

// 单例连接，避免 dev 下重复打开
let _db: DatabaseSync | null = null

export interface ProgressRow {
  course_id: string
  passed: number
  mastered: number
  new_words: number
  errors: number
  completed: number
  last_at: number | null
}

export function getDb(): DatabaseSync {
  if (_db) return _db
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
  const db = new DatabaseSync(DB_PATH)
  db.exec(`
    CREATE TABLE IF NOT EXISTS speller_progress (
      course_id TEXT PRIMARY KEY,
      passed INTEGER NOT NULL DEFAULT 0,
      mastered INTEGER NOT NULL DEFAULT 0,
      new_words INTEGER NOT NULL DEFAULT 0,
      errors INTEGER NOT NULL DEFAULT 0,
      completed INTEGER NOT NULL DEFAULT 0,
      last_at INTEGER
    )
  `)
  _db = db
  return db
}

/** 读取某课程进度（不存在返回空行） */
export function getProgressRow(courseId: string): ProgressRow {
  const db = getDb()
  const row = db
    .prepare("SELECT * FROM speller_progress WHERE course_id = ?")
    .get(courseId) as unknown as ProgressRow | undefined
  if (row) return row
  return {
    course_id: courseId,
    passed: 0,
    mastered: 0,
    new_words: 0,
    errors: 0,
    completed: 0,
    last_at: null,
  }
}

/** 累加某课程进度（数字字段按增量相加），不存在则插入 */
export function upsertProgress(
  courseId: string,
  patch: Partial<Pick<ProgressRow, "passed" | "mastered" | "new_words" | "errors" | "completed">>,
): ProgressRow {
  const db = getDb()
  const current = getProgressRow(courseId)
  const next: ProgressRow = {
    course_id: courseId,
    passed: current.passed + (patch.passed ?? 0),
    mastered: current.mastered + (patch.mastered ?? 0),
    new_words: current.new_words + (patch.new_words ?? 0),
    errors: current.errors + (patch.errors ?? 0),
    completed: current.completed + (patch.completed ?? 0),
    last_at: Date.now(),
  }
  db.prepare(`
    INSERT INTO speller_progress (course_id, passed, mastered, new_words, errors, completed, last_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(course_id) DO UPDATE SET
      passed = excluded.passed,
      mastered = excluded.mastered,
      new_words = excluded.new_words,
      errors = excluded.errors,
      completed = excluded.completed,
      last_at = excluded.last_at
  `).run(
    next.course_id,
    next.passed,
    next.mastered,
    next.new_words,
    next.errors,
    next.completed,
    next.last_at,
  )
  return next
}

/** 重置某课程进度（删除行） */
export function resetProgressRow(courseId: string) {
  const db = getDb()
  db.prepare("DELETE FROM speller_progress WHERE course_id = ?").run(courseId)
}

/** 读取全部课程进度 */
export function getAllProgressRows(): ProgressRow[] {
  const db = getDb()
  const rows = db
    .prepare("SELECT * FROM speller_progress ORDER BY course_id")
    .all() as unknown as ProgressRow[]
  return rows
}
