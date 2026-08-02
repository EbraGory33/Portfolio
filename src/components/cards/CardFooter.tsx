import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CardFooterProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function CardFooter({
  title,
  description,
  className,
  align = "left",
}: CardFooterProps) {
  return (
    <div
      className={cn(
        "pointer-events-none z-10 flex flex-col gap-1 p-5",
        align === "center" && "w-full text-center",
        //  className=" absolute top-0 left-0"
        className,
      )}
    >
      <p className="font-mono text-xs text-neutral-400 uppercase transition-colors duration-500 group-hover:text-indigo-500/80 dark:group-hover:text-indigo-300">
        {title}
      </p>

      <p className="font-bluu text-lg tracking-wide text-neutral-700 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
}
