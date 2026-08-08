"use client"

/**
 * 听写练习进度存储（localStorage）
 * - 按课程 id 保存：完成句子数、已掌握、生词、错误提交、总练习次数
 * - 所有读写在客户端，键名 speller-progress
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

const STORAGE_KEY = "speller-progress"

type ProgressMap = Record<string, CourseProgress>

const EMPTY: Omit<CourseProgress, "courseId"> = {
  passed: 0,
  mastered: 0,
  newWords: 0,
  errors: 0,
  completed: 0,
  lastAt: null,
}

function readAll(): ProgressMap {
  if (typeof window === "undefined") return {}
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return typeof parsed === "object" && parsed !== null ? parsed : {}
  } catch {
    return {}
  }
}

function writeAll(map: ProgressMap) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map))
  } catch {
    // localStorage 不可用时静默失败
  }
}

/** 读取某课程进度 */
export function getProgress(courseId: string): CourseProgress {
  const map = readAll()
  return { ...EMPTY, ...(map[courseId] ?? {}), courseId }
}

/** 更新某课程进度（数字字段按增量累加） */
export function updateProgress(
  courseId: string,
  patch: Partial<Omit<CourseProgress, "courseId" | "lastAt">>,
): CourseProgress {
  const map = readAll()
  const current: CourseProgress = { ...EMPTY, ...(map[courseId] ?? {}), courseId }
  const next: CourseProgress = {
    passed: (current.passed ?? 0) + (patch.passed ?? 0),
    mastered: (current.mastered ?? 0) + (patch.mastered ?? 0),
    newWords: (current.newWords ?? 0) + (patch.newWords ?? 0),
    errors: (current.errors ?? 0) + (patch.errors ?? 0),
    completed: (current.completed ?? 0) + (patch.completed ?? 0),
    courseId,
    lastAt: Date.now(),
  }
  map[courseId] = next
  writeAll(map)
  return next
}

/** 重置某课程进度 */
export function resetProgress(courseId: string) {
  const map = readAll()
  delete map[courseId]
  writeAll(map)
}
