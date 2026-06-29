/** Convert Obsidian-style callout blockquotes to data-attributed blockquotes */
import type { Root, Blockquote, Paragraph, Text } from "mdast";
import { visit } from "unist-util-visit";

export function remarkCallout() {
  return (tree: Root) => {
    visit(tree, "blockquote", (node: Blockquote) => {
      if (!node.children || node.children.length === 0) return;
      const firstChild = node.children[0];
      if (firstChild.type !== "paragraph") return;

      const firstTextChild = firstChild.children?.[0];
      if (!firstTextChild || firstTextChild.type !== "text") return;

      const match = (firstTextChild as Text).value.match(/^\[!(\w+)\][+-]?\s*(.*)/);
      if (!match) return;

      const type = match[1].toLowerCase();
      const title = match[2].trim() || "";

      // Remove the callout marker line from body content entirely
      if (firstChild.children.length === 1) {
        // Only the [!type] line in this paragraph — remove whole paragraph
        node.children.shift();
      } else {
        // Multiple children — just clear the first text node
        (firstTextChild as Text).value = "";
      }

      // Add data attributes
      node.data = {
        ...(node.data || {}),
        hProperties: {
          "data-callout": type,
          "data-title": title,
        },
      };
    });
  };
}
