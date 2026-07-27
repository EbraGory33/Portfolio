import { TECHS, type TechName } from "@/lib/types/tech";
import Image from "next/image";

interface TechBadgeProps {
  tech: TechName;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="bg-primary/5 shadow-border flex gap-0 rounded-md px-2 py-1 font-mono sm:px-2.5 sm:py-1.25">
      <Image
        alt=""
        aria-hidden="true"
        className="mr-1.5 size-3 sm:size-3.5"
        height="14"
        loading="lazy"
        width="14"
        src={TECHS[tech].icon}
      />
      <span className="text-[10px] font-medium tracking-wide text-neutral-600 uppercase sm:text-[11px] dark:text-neutral-300">
        {tech}
      </span>
    </span>
  );
}
