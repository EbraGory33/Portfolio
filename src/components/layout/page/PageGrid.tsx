import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageGridProps {
  children: ReactNode;
  className?: string;
}

export function PageGrid({ children, className }: PageGridProps) {
  return (
    <div
      className={cn(
        "grid flex-1 grid-cols-[12px_1fr_12px] lg:grid-cols-[32px_1fr_32px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
