export interface SrtCue {
  /** 起始时间（毫秒） */
  startMs: number
  /** 结束时间（毫秒） */
  endMs: number
  /** 字幕文本 */
  text: string
}

/**
 * 解析标准 SRT 字幕为带起止时间的条目。
 *
 * SRT 格式：
 *   1
 *   00:00:01,200 --> 00:00:07,500
 *   Pumas are large, cat-like animals...
 *
 *   (空行分隔条目)
 */
export function parseSrt(srtText: string): SrtCue[] {
  const cues: SrtCue[] = []
  const blocks = srtText.replace(/\r\n/g, "\n").split(/\n\s*\n/)

  for (const block of blocks) {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean)
    if (lines.length < 2) continue

    // 找时间行（含 -->）
    const timeIdx = lines.findIndex((l) => l.includes("-->"))
    if (timeIdx < 0) continue

    const timeMatch = lines[timeIdx].match(
      /(\d{1,2}):(\d{2}):(\d{2})[,.](\d{1,3})\s*-->\s*(\d{1,2}):(\d{2}):(\d{2})[,.](\d{1,3})/,
    )
    if (!timeMatch) continue

    const toMs = (h: string, m: string, s: string, ms: string) => {
      let frac = parseInt(ms, 10)
      // 毫秒段可能是 1~3 位，规范化到 3 位
      while (frac < 100 && ms.length < 3) {
        frac *= 10
        ms = ms + "0"
      }
      return (
        parseInt(h, 10) * 3600000 +
        parseInt(m, 10) * 60000 +
        parseInt(s, 10) * 1000 +
        frac
      )
    }

    const startMs = toMs(timeMatch[1], timeMatch[2], timeMatch[3], timeMatch[4])
    const endMs = toMs(timeMatch[5], timeMatch[6], timeMatch[7], timeMatch[8])

    const text = lines.slice(timeIdx + 1).join(" ").trim()
    if (!text) continue

    cues.push({ startMs, endMs, text })
  }

  return cues
}
