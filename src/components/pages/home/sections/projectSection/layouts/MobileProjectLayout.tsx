import { Project } from "@/lib/types/project";

import { ProjectCard } from "..";

interface MobileProjectLayoutProps {
  projects: Project[];
}

export function MobileProjectLayout({ projects }: MobileProjectLayoutProps) {
  return (
    <div className="gap-pagebuilder flex flex-col lg:hidden">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          index={index}
          project={project}
          layout={"mobile"}
        />
      ))}
    </div>
  );
}
