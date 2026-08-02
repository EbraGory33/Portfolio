import { SectionBuilder } from "@/components/layout";
import { cn } from "@/lib/utils";

import { AboutContent, AboutVisual } from ".";

type AboutProps = {
  className?: string;
};
export function About({ className }: AboutProps) {
  return (
    <section className={cn(className ?? "bg-black/5 dark:bg-[#18191B]/70")}>
      <SectionBuilder
        header={"The word about me"}
        headline={"SOFTWARE DEVELOPER Built on Persistence"}
        alignment="left"
        padding="med"
        className="py-pagebuilder"
      >
        <AboutContent />
      </SectionBuilder>
      {/* Make it able to be changed from props 1. for home page and 2. for about page */}
      <AboutVisual />
    </section>
  );
}
