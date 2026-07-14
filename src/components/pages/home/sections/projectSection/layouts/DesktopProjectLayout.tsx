import { Project } from "@/types/project";
import { ProjectCard } from "..";

interface DesktopProjectLayoutProps {
  projects: Project[];
}

export function DesktopProjectLayout({ projects }: DesktopProjectLayoutProps) {
  return (
    <div className="mx-auto flex w-full flex-col gap-y-20 md:ps-2 lg:max-w-[60%] lg:gap-y-32 2xl:px-6">
      {projects.map((project, index) => (
        <ProjectCard
          aria-label={`Project ${project.title}`}
          key={project.id}
          index={index}
          project={project}
          layout={"desktop"}
        />
      ))}
    </div>
  );
}
