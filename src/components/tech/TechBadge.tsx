// import Image from "next/image";
import { Icon } from "@iconify/react";

import { type TechName, TECHS } from "@/lib/types/tech";

interface TechBadgeProps {
  tech: TechName;
}

export function TechBadge({ tech }: TechBadgeProps) {
  const icon = TECHS[tech].icon;
  return (
    <span className="bg-primary/5 shadow-border flex gap-0 rounded-md px-2 py-1 font-mono sm:px-2.5 sm:py-1.25">
      {icon ? (
        <Icon icon={TECHS[tech].icon} className="mr-1.5 size-3 sm:size-3.5" />
      ) : (
        <span aria-hidden="true" className="mr-1.5 size-3 sm:size-3.5" />
      )}

      <span className="text-[10px] font-medium tracking-wide text-neutral-600 uppercase sm:text-[11px] dark:text-neutral-300">
        {tech}
      </span>
    </span>
  );
}
