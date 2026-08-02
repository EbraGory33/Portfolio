import { forwardRef } from "react";

import { Project } from "@/lib/types/project";

import { ProjectLink } from ".";

interface ProjectCardProps {
  index: number;
  project: Project;
  layout: "mobile" | "desktop";
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ index, project, layout }, ref) => {
    return layout == "mobile" ? (
      <></>
    ) : layout == "desktop" ? (
      <div
        ref={ref}
        aria-label={`Project ${project.title}}`}
        className="group relative flex w-full flex-col gap-6"
      >
        <div className="relative w-full transition-all duration-500 group-hover:-translate-y-2">
          <ProjectLink project={project} layout="desktop" />
        </div>
      </div>
    ) : null;
  },
);
ProjectCard.displayName = "ProjectCard";
