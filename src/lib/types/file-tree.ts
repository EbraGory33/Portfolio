export type FileTreeNode = {
  type: "file" | "folder";
  name: string;
  description?: string;
  path: string;
  children: FileTreeNode[];
};

export type FileTreeProps = {
  children: string;
  defaultOpen?: string[];
  className?: string;
};
