// TODO:
import { ProjectArrow } from "./ProjectArrow";

interface ProjectContentProps {
  description: string;
}

export function ProjectContent({ description }: ProjectContentProps) {
  return (
    <div className="relative z-10 flex w-full items-center justify-between gap-8 px-4 py-4 text-white/70 lg:px-10 lg:py-8">
      <h3 className="text-base lg:text-2xl">{description}</h3>
      {/* Todu: Use arrow from lucide  */}
      <ProjectArrow />
    </div>
  );
}
