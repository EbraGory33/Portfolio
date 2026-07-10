import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentProps {
  children: ReactNode;
  className: string;
}

export function Content({ children, className }: ContentProps) {
  return (
    <div className={cn("relative col-span-1 min-w-0", className)}>
      {children}
    </div>
  );
}
