// lib/mdx/remark-code-meta.ts
import { visit } from "unist-util-visit";
import type { Root } from "mdast";

export function remarkCodeMeta() {
  return (tree: Root) => {
    console.log("[remarkCodeMeta] Plugin running");

    visit(tree, "code", (node) => {
      console.log("[remarkCodeMeta] Found code fence:", {
        node: node,
        lang: node.lang,
        meta: node.meta,
        value: node.value,
      });

      if (!node.meta && !node.lang) {
        console.log("[remarkCodeMeta] No metadata found; skipping.");
        return;
      }

      node.data ??= {};
      node.data.hProperties = {
        ...node.data.hProperties,
        path: node.meta ?? undefined,
        lang: node.lang ?? undefined,
      };

      console.log("[remarkCodeMeta] Added metastring:", {
        path: node.data.hProperties.path,
        lang: node.data.hProperties.lang,
        hProperties: node.data.hProperties,
      });
    });
  };
}
