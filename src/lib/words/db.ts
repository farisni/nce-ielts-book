import { DatabaseSync } from "node:sqlite"
import path from "node:path"
import fs from "node:fs"

/**
 * 单词学习记录数据库
 * - 数据文件：项目根 data/words.db
 * - 表：word_learning（按 wordbook_id + word_id 存每个单词的学习记录）
 * - 用 node:sqlite（Node 22+ 内置），无需额外依赖
 *
 * 设计类比（savor-reader）：App 端本地 SQLite 即时落库并标记 pending，
 * 后台端同样用 SQLite 做持久化，通过 /api/word-learning 批量接收同步记录，
 * 用 updated_at 时间戳保留最新版本。
 */

const DATA_DIR = path.join(process.cwd(), "data")
const DB_PATH = path.join(DATA_DIR, "words.db")

// 单例连接，避免 dev 下重复打开
let _db: DatabaseSync | null = null

export interface WordLearningRow {
  wordbook_id: string
  word_id: string
  text: string
  status: string | null
  known_count: number
  unknown_count: number
  last_score: number | null
  last_result: string | null
  updated_at: number
}

export function getDb(): DatabaseSync {
  if (_db) return _db
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
  const db = new DatabaseSync(DB_PATH)
  db.exec(`
    CREATE TABLE IF NOT EXISTS word_learning (
      wordbook_id TEXT NOT NULL,
      word_id     TEXT NOT NULL,
      text        TEXT NOT NULL,
      status      TEXT,
      known_count INTEGER NOT NULL DEFAULT 0,
      unknown_count INTEGER NOT NULL DEFAULT 0,
      last_score  INTEGER,
      last_result TEXT,
      updated_at  INTEGER NOT NULL,
      PRIMARY KEY (wordbook_id, word_id)
    )
  `)
  _db = db
  return db
}

/** 读取某单词本全部学习记录（按更新时间倒序） */
export function getWordLearningRows(wordbookId: string): WordLearningRow[] {
  const db = getDb()
  return db
    .prepare(
      "SELECT * FROM word_learning WHERE wordbook_id = ? ORDER BY updated_at DESC",
    )
    .all(wordbookId) as unknown as WordLearningRow[]
}

/**
 * 批量 upsert 学习记录
 * - 每个记录按 (wordbook_id, word_id) 主键冲突更新
 * - 只更新「更新时间不早于库中」的记录（updated_at 时间戳解决冲突，保留最新）
 */
export function upsertWordLearning(records: WordLearningRow[]) {
  const db = getDb()
  const stmt = db.prepare(`
    INSERT INTO word_learning
      (wordbook_id, word_id, text, status, known_count, unknown_count, last_score, last_result, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(wordbook_id, word_id) DO UPDATE SET
      text = excluded.text,
      status = excluded.status,
      known_count = excluded.known_count,
      unknown_count = excluded.unknown_count,
      last_score = excluded.last_score,
      last_result = excluded.last_result,
      updated_at = excluded.updated_at
    WHERE excluded.updated_at >= word_learning.updated_at
  `)
  for (const r of records) {
    stmt.run(
      r.wordbook_id,
      r.word_id,
      r.text,
      r.status,
      r.known_count,
      r.unknown_count,
      r.last_score,
      r.last_result,
      r.updated_at,
    )
  }
}
