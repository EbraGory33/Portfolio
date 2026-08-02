import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 border-y md:grid-cols-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
// mb-pagebuilder lg:my-pagebuilder
