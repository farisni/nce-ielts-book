"use client"

/**
 * 听写练习进度存取（客户端封装，读写服务端 SQLite）
 * - 通过 /api/speller/progress 读写
 * - 首次使用迁移旧 localStorage 数据
 */

export interface CourseProgress {
  /** 课程 id */
  courseId: string
  /** 已通过（听写正确）句子数 */
  passed: number
  /** 已掌握句子数 */
  mastered: number
  /** 生词数 */
  newWords: number
  /** 错误提交次数 */
  errors: number
  /** 完成次数（一轮练完） */
  completed: number
  /** 上次练习时间（时间戳） */
  lastAt: number | null
}

const LEGACY_KEY = "speller-progress"

const EMPTY: Omit<CourseProgress, "courseId"> = {
  passed: 0,
  mastered: 0,
  newWords: 0,
  errors: 0,
  completed: 0,
  lastAt: null,
}

/** 从旧 localStorage 读取进度（迁移用） */
function readLegacy(): Record<string, CourseProgress> {
  if (typeof window === "undefined") return {}
  try {
    const raw = window.localStorage.getItem(LEGACY_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return typeof parsed === "object" && parsed !== null ? parsed : {}
  } catch {
    return {}
  }
}

/** 清理旧 localStorage 数据 */
function clearLegacy() {
  if (typeof window === "undefined") return
  try {
    window.localStorage.removeItem(LEGACY_KEY)
  } catch {
    // ignore
  }
}

function rowToProgress(courseId: string, row: Record<string, unknown>): CourseProgress {
  return {
    courseId,
    passed: Number(row.passed ?? 0) || 0,
    mastered: Number(row.mastered ?? 0) || 0,
    newWords: Number(row.new_words ?? row.newWords ?? 0) || 0,
    errors: Number(row.errors ?? 0) || 0,
    completed: Number(row.completed ?? 0) || 0,
    lastAt: typeof row.last_at === "number" ? row.last_at : null,
  }
}

/** 读取某课程进度 */
export async function getProgress(courseId: string): Promise<CourseProgress> {
  try {
    const res = await fetch(`/api/speller/progress?course=${encodeURIComponent(courseId)}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return rowToProgress(courseId, data)
  } catch {
    // 服务不可用（如离线）时回退到 localStorage 旧数据
    const legacy = readLegacy()
    return { ...EMPTY, ...(legacy[courseId] ?? {}), courseId }
  }
}

/** 读取全部课程进度 */
export async function getAllProgress(): Promise<Record<string, CourseProgress>> {
  try {
    const res = await fetch(`/api/speller/progress?all=1`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    const map: Record<string, CourseProgress> = {}
    for (const row of data.courses ?? []) {
      map[row.course_id] = rowToProgress(row.course_id, row)
    }
    return map
  } catch {
    const legacy = readLegacy()
    return legacy
  }
}

/** 更新某课程进度（数字字段按增量累加） */
export async function updateProgress(
  courseId: string,
  patch: Partial<Omit<CourseProgress, "courseId" | "lastAt">>,
): Promise<CourseProgress> {
  try {
    const res = await fetch("/api/speller/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        course: courseId,
        passed: patch.passed ?? 0,
        mastered: patch.mastered ?? 0,
        newWords: patch.newWords ?? 0,
        errors: patch.errors ?? 0,
        completed: patch.completed ?? 0,
      }),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return rowToProgress(courseId, data.row ?? {})
  } catch {
    // 服务不可用时回退到 localStorage 累加
    const legacy = readLegacy()
    const current: CourseProgress = { ...EMPTY, ...(legacy[courseId] ?? {}), courseId }
    const next: CourseProgress = {
      passed: (current.passed ?? 0) + (patch.passed ?? 0),
      mastered: (current.mastered ?? 0) + (patch.mastered ?? 0),
      newWords: (current.newWords ?? 0) + (patch.newWords ?? 0),
      errors: (current.errors ?? 0) + (patch.errors ?? 0),
      completed: (current.completed ?? 0) + (patch.completed ?? 0),
      courseId,
      lastAt: Date.now(),
    }
    legacy[courseId] = next
    try {
      window.localStorage.setItem(LEGACY_KEY, JSON.stringify(legacy))
    } catch {
      // ignore
    }
    return next
  }
}

/** 重置某课程进度 */
export async function resetProgress(courseId: string): Promise<void> {
  try {
    await fetch(`/api/speller/progress?course=${encodeURIComponent(courseId)}`, { method: "DELETE" })
  } catch {
    // ignore
  }
}

// ── 发音评测历史 ──

/** 读取某课程的全部发音评分历史（sentence → 评分结果对象） */
export async function getPronHistory(courseId: string): Promise<Record<string, unknown>> {
  try {
    const res = await fetch(`/api/speller/pron-history?course=${encodeURIComponent(courseId)}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    const history = data.history ?? {}
    // 反序列化：服务端存的是 JSON 字符串
    const map: Record<string, unknown> = {}
    for (const [sentence, raw] of Object.entries(history)) {
      if (typeof raw !== "string") continue
      try {
        map[sentence] = JSON.parse(raw)
      } catch {
        // 跳过损坏记录
      }
    }
    return map
  } catch {
    return {}
  }
}

/** 保存某句的发音评分结果 */
export async function savePronScore(courseId: string, sentence: string, result: unknown): Promise<void> {
  try {
    await fetch("/api/speller/pron-history", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ course: courseId, sentence, result }),
    })
  } catch {
    // 服务不可用则静默失败（下次进入不丢，仅本次不保存）
  }
}

/**
 * 迁移旧 localStorage 进度到服务端 SQLite。
 * 调用时机：客户端首次读取到 SQLite 为空、但 localStorage 有数据时。
 */
export async function migrateLegacyProgress(): Promise<void> {
  const legacy = readLegacy()
  const keys = Object.keys(legacy)
  if (keys.length === 0) return
  // 逐个课程累加到服务端
  for (const courseId of keys) {
    const p = legacy[courseId]
    if (!p || (p.passed === 0 && p.mastered === 0 && p.newWords === 0 && p.errors === 0 && p.completed === 0)) {
      continue
    }
    try {
      await updateProgress(courseId, {
        passed: p.passed ?? 0,
        mastered: p.mastered ?? 0,
        newWords: p.newWords ?? 0,
        errors: p.errors ?? 0,
        completed: p.completed ?? 0,
      })
    } catch {
      // ignore
    }
  }
  clearLegacy()
}
