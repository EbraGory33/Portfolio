// TODO:
import { ProjectArrow } from "./ProjectArrow";

interface ProjectContentProps {
  description: string;
  layout: "mobile" | "desktop";
}

export function ProjectContent({ description, layout }: ProjectContentProps) {
  return (
    <div
      className={`z-10 flex w-full flex-row items-center justify-between gap-8 px-4 py-2 text-white/70 md:px-6 md:py-4 ${layout === "mobile" ? "lg:px-5 lg:py-5" : layout === "desktop" ? "lg:px-10 lg:py-8" : ""}`}
    >
      <h3 className="text-lg md:text-xl xl:text-2xl">{description}</h3>
      {/* Todu: Use arrow from lucide  */}
      <ProjectArrow />
    </div>
  );
}
