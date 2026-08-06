import type { FileTreeNode } from "@/lib/types";

const DESCRIPTION_SEPARATOR = " — ";

export function parseFileTree(source: string): FileTreeNode[] {
  const root: FileTreeNode[] = [];
  const stack: Array<{
    indent: number;
    path: string;
    children: FileTreeNode[];
  }> = [{ indent: -1, path: "", children: root }];

  for (const rawLine of source.split("\n")) {
    if (!rawLine.trim()) continue;

    const leadingWhitespace = rawLine.match(/^\s*/)?.[0] ?? "";
    const indent = Math.floor(
      leadingWhitespace.replace(/\t/g, "  ").length / 2,
    );

    const line = rawLine.trim();
    const separatorIndex = line.indexOf(DESCRIPTION_SEPARATOR);
    const label = separatorIndex === -1 ? line : line.slice(0, separatorIndex);
    const description =
      separatorIndex === -1
        ? undefined
        : line.slice(separatorIndex + DESCRIPTION_SEPARATOR.length);

    const isFolder = label.endsWith("/");
    const name = isFolder ? label.slice(0, -1) : label;

    while (stack.at(-1)!.indent >= indent) {
      stack.pop();
    }

    const parent = stack.at(-1)!;
    const path = parent.path ? `${parent.path}/${name}` : name;

    const node: FileTreeNode = {
      type: isFolder ? "folder" : "file",
      name,
      description,
      path,
      children: [],
    };

    parent.children.push(node);

    if (isFolder) {
      stack.push({
        indent,
        path,
        children: node.children,
      });
    }
  }

  return root;
}
