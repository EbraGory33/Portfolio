"use client";

import { ChevronRight, File, Folder, FolderOpen } from "lucide-react";
import { useMemo, useState } from "react";

import type { FileTreeNode, FileTreeProps } from "@/lib/types";
import { cn } from "@/lib/utils";

import { parseFileTree } from "./parseFileTree";

export function FileTree({
  children,
  defaultOpen = [],
  className,
}: FileTreeProps) {
  const nodes = useMemo(() => parseFileTree(children), [children]);
  const [openFolders, setOpenFolders] = useState(() => new Set(defaultOpen));

  function toggleFolder(path: string) {
    setOpenFolders((current) => {
      const next = new Set(current);

      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }

      return next;
    });
  }

  function renderNode(node: FileTreeNode) {
    if (node.type === "file") {
      return (
        <div
          className="flex w-fit items-center gap-1.5 rounded-md px-1.5 py-1 text-sm transition-colors hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40"
          key={node.path}
        >
          <File
            aria-hidden="true"
            className="size-4 shrink-0 text-neutral-400 dark:text-neutral-500"
          />
          <span className="text-neutral-600 dark:text-neutral-400">
            {node.name}
            {node.description ? ` — ${node.description}` : null}
          </span>
        </div>
      );
    }

    const isOpen = openFolders.has(node.path);

    return (
      <div className="relative" key={node.path}>
        <button
          aria-expanded={isOpen}
          className="group flex w-full cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-1 text-left text-sm transition-colors hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60"
          onClick={() => toggleFolder(node.path)}
          type="button"
        >
          <ChevronRight
            aria-hidden="true"
            className={cn(
              "size-3.5 shrink-0 text-neutral-400 transition-transform duration-200 dark:text-neutral-500",
              isOpen && "rotate-90",
            )}
          />
          {isOpen ? (
            <FolderOpen
              aria-hidden="true"
              className="size-4 shrink-0 text-neutral-500 dark:text-neutral-400"
            />
          ) : (
            <Folder
              aria-hidden="true"
              className="size-4 shrink-0 text-neutral-500 dark:text-neutral-400"
            />
          )}
          <span className="text-neutral-700 dark:text-neutral-300">
            {node.name}
          </span>
        </button>

        {isOpen ? (
          <div className="relative ml-[11px] border-l border-neutral-200/80 dark:border-neutral-700/60">
            <div className="ml-2 flex flex-col gap-0.5 py-0.5">
              {node.children.map(renderNode)}
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "not-prose my-6 rounded-2xl border border-neutral-200 bg-neutral-200/50 p-1 dark:border-neutral-800 dark:bg-neutral-900/50",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-xl border border-neutral-200/80 bg-[#F6F6F8] shadow-xs dark:border-neutral-800 dark:bg-transparent">
        <div className="flex flex-col gap-0.5 px-3 py-2.5">
          {nodes.map(renderNode)}
        </div>
      </div>
    </div>
  );
}
