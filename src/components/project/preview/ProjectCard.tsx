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
      <div className="flex flex-col gap-6">
        <ProjectLink index={index} project={project} layout="mobile" />
      </div>
    ) : layout == "desktop" ? (
      <div
        ref={ref}
        aria-label={`Project ${project.frontmatter.title}`}
        className="group relative flex w-full flex-col gap-6"
      >
        <div
          className="relative w-full transition-all duration-500 group-hover:-translate-y-2"
          // transition-transform duration-300 ease-in-out hover:-translate-y-2
        >
          <ProjectLink index={index} project={project} layout="desktop" />
        </div>
      </div>
    ) : null;
  },
);
