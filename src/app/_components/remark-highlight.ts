/** Convert Obsidian-style ==highlight== to <mark> elements — works in all block types (paragraphs, tables, lists, headings) */
import type { Root, Text } from "mdast";
import { visit, SKIP } from "unist-util-visit";

export function remarkHighlight() {
  return (tree: Root) => {
    visit(tree, "text", (node: Text, index, parent) => {
      if (!parent || index === undefined) return;
      const text = node.value;
      if (!text.includes("==")) return;
      const parts = text.split(/(==.+?==)/g);
      if (parts.length === 1) return;

      const replacements: Array<{ type: "text"; value: string } | { type: "html"; value: string }> = [];
      for (const part of parts) {
        if (part.startsWith("==") && part.endsWith("==")) {
          replacements.push({ type: "html", value: `<mark>${part.slice(2, -2)}</mark>` });
        } else if (part) {
          replacements.push({ type: "text", value: part });
        }
      }

      parent.children.splice(index, 1, ...replacements);
      return [SKIP, index + replacements.length];
    });
  };
}
