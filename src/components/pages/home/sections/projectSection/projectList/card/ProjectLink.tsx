// TODO:
import Link from "next/link";
import { Project } from "@/lib/types/project";
import { ProjectFrame } from ".";

interface ProjectLinkProps {
  project: Project;
  layout: "mobile" | "desktop";
}

export function ProjectLink({ project, layout }: ProjectLinkProps) {
  return layout == "mobile" ? (
    <></>
  ) : layout == "desktop" ? (
    <Link
      href={`/projects/${project.title}`}
      aria-label={`View Details of ${project.title}`}
      className="group shadow-border relative block aspect-16/11 w-full cursor-pointer overflow-hidden rounded-2xl bg-white p-1 sm:aspect-video md:aspect-16/10 lg:aspect-16/11 lg:rounded-3xl lg:p-2 dark:bg-white/6"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 hidden h-px bg-[linear-gradient(90deg,rgba(0,0,0,0)_5%,rgba(255,255,255,0.8)_35%,rgb(255,255,255)_50%,rgba(255,255,255,0.8)_65%,rgba(0,0,0,0)_95%)] dark:block"
      ></div>
      <ProjectFrame
        id={project.id}
        image={project.previewImages[0]}
        description={project.description}
        background={project.backgroundGradient}
      />
    </Link>
  ) : null;
}
