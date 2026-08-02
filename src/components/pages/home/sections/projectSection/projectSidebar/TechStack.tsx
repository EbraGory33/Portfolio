import { type TechName } from "@/lib/types/tech";

import { TechBadge } from ".";

interface TechStackProps {
  technologies: TechName[];
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <div>
      <div className="mt-6 flex flex-wrap gap-1.5 sm:gap-2">
        {technologies.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
}
