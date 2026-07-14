import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionBuilderProps {
  children: ReactNode;
  className: String;
}

export function SectionBuilder({ children, className }: SectionBuilderProps) {
  return (
    <section className={cn("py-pagebuilder relative w-full", className)}>
      {children}
    </section>
  );
}
