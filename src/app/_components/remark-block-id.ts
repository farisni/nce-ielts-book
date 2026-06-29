/** Convert Obsidian ^block-id at end of headings into visible footnote-style anchor tags */
import type { Root } from "mdast";
import { visit } from "unist-util-visit";

export function remarkBlockId() {
  return (tree: Root) => {
    visit(tree, "heading", (node) => {
      const lastChild = node.children[node.children.length - 1];
      if (!lastChild || lastChild.type !== "text") return;

      const match = lastChild.value.match(/^(.*?)\s*\^([a-zA-Z0-9_-]+)$/);
      if (!match) return;

      const [, headingText, blockId] = match;

      // Replace the heading text (without ^block-id)
      lastChild.value = headingText || lastChild.value.replace(/\s*\^[a-zA-Z0-9_-]+$/, "");

      // Add an inline html anchor as footnote marker
      node.children.push({
        type: "html",
        value: ` <sup class="block-id-tag" id="${blockId}" title="Block ID: ${blockId}">${blockId}</sup>`,
      });
    });
  };
}
