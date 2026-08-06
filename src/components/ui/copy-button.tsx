"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  value: string;
  className?: string;
  size?: "big" | "med";
  variant?: "default" | "code";
  children?: (copied: boolean) => React.ReactNode;
}

export function CopyButton({
  value,
  className,
  size,
  variant,
  children,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(value);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  const iconSize = variant === "code" ? "size-3.5" : "size-4";

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        className,
        variant === "code" &&
          (copied
            ? "bg-emerald-500/15"
            : "opacity-0 group-hover:opacity-100 hover:bg-neutral-200/80 hover:text-neutral-600 dark:text-neutral-500 dark:hover:bg-neutral-700/60 dark:hover:text-neutral-300"),
      )}
    >
      {copied ? (
        <Check
          // className={iconSize}
          className={cn(
            iconSize,
            variant === "code" && "bg-emerald-500/20 text-emerald-500",
          )}
          //   className={` ${size === "big" ? "size-4" : size === "med" ? "size-3.5" : "size-3"} `}
        />
      ) : (
        <Copy
          //   className={` ${size === "big" ? "size-4" : size === "med" ? "size-3.5" : "size-3"} `}
          className={iconSize}
        />
      )}
      {children?.(copied)}
    </button>
  );
}
