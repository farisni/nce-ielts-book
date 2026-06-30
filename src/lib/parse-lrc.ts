export interface LrcLine {
  startMs: number;
  text: string;
}

/** Parse LRC text into timestamped lines, skipping metadata tags */
export function parseLrc(lrcText: string): LrcLine[] {
  const lines: LrcLine[] = [];
  const timestampRe = /^\[(\d{1,3}):(\d{2})\.(\d{2,3})\]/;

  for (const raw of lrcText.split("\n")) {
    const line = raw.trim();
    if (!line) continue;

    // Skip metadata tags
    if (
      line.startsWith("[al:") ||
      line.startsWith("[ar:") ||
      line.startsWith("[ti:") ||
      line.startsWith("[by:")
    ) {
      continue;
    }

    const match = line.match(timestampRe);
    if (!match) continue;

    const minutes = parseInt(match[1], 10);
    const seconds = parseInt(match[2], 10);
    const centis = match[3].length === 2
      ? parseInt(match[3], 10) * 10
      : parseInt(match[3], 10);

    const startMs = minutes * 60000 + seconds * 1000 + centis;
    const text = line.slice(match[0].length).trim();

    lines.push({ startMs, text });
  }

  return lines;
}
