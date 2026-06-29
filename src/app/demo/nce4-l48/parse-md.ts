import fs from "fs";
import path from "path";
import type { RootData } from "@/app/_components/md-root-data-context";

interface Parsed {
  content: string;
  rootData: Record<string, RootData>;
}

export function parseNce4L48(): Parsed {
  const raw = fs.readFileSync(path.join(process.cwd(), "doc/nce4-l48.md"), "utf-8");
  let content = raw.replace(/^---[\s\S]*?---\n*/, "");

  let rootData: Record<string, RootData> = {};
  const m = content.match(/```root-data\n([\s\S]*?)\n```/);
  if (m) {
    try {
      rootData = new Function(`return (${m[1].replace(/;?\s*\}\s*;?\s*$/, "}")})`)();
    } catch { /* ignore */ }
    content = content.replace(/```root-data\n[\s\S]*?\n```\n?/, "");
  }

  return { content, rootData };
}
