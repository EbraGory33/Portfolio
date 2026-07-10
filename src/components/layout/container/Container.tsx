import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn("relative container flex flex-col max-sm:px-1", className)}
    >
      {children}
    </div>
  );
}
