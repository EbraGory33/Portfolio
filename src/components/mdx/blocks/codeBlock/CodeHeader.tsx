"use client";
import { CopyButton } from "@/components/ui";
interface CodeHeaderProps {
  path?: string;
  code: string;
}

export function CodeHeader({ path, code }: CodeHeaderProps) {
  return (
    <>
      {path && (
        <span className="absolute top-2.5 left-4 z-10 rounded-md bg-neutral-200/80 px-2 py-0.5 font-mono text-[11px] text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
          {/* <span className="rounded-md bg-neutral-200 px-2 py-1 text-xs text-neutral-800 dark:bg-neutral-800 dark:text-neutral-400"> */}
          {path}
        </span>
      )}
      <CopyButton
        variant="code"
        size="med"
        value={code}
        className="absolute top-2 right-2 z-10 shrink-0 rounded-sm p-1.5 text-neutral-400 transition-opacity duration-200 ease-out active:scale-90"
      />
    </>
  );
}
