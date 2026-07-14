import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridItemProps {
  children?: ReactNode;
  className?: string;
}

export function BentoGridItem({ children, className }: BentoGridItemProps) {
  return <div className={cn(className)}>{children}</div>;
}
