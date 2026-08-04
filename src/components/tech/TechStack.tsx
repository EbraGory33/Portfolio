import { type TechName } from "@/lib/types/tech";

import { TechBadge } from ".";

interface TechStackProps {
  marginTop?: string;
  technologies: TechName[];
}

export function TechStack({ marginTop, technologies }: TechStackProps) {
  return (
    <div>
      {/* TODO: "mt-6"*/}
      <div className={`flex flex-wrap gap-1.5 sm:gap-2 ${marginTop || ""}`}>
        {technologies.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
}
