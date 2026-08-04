"use client";
import { useActiveProject } from "@/lib/hooks";
import { Project } from "@/lib/types";

import { DesktopProjectLayout, MobileProjectLayout, ProjectSidebar } from "..";

interface ProjectListProps {
  projects: Project[];
  layout: "mobile" | "desktop";
}

export function ProjectList({ projects, layout }: ProjectListProps) {
  const { activeIndex, activeProject, registerProject } =
    useActiveProject(projects);
  // const [activeProject, setActiveProject] = useState(projects[0]);
  return layout == "mobile" ? (
    <MobileProjectLayout projects={projects} />
  ) : layout == "desktop" ? (
    // Todo: text inside layout file or leave it here?
    <div className="relative hidden w-full lg:flex">
      <DesktopProjectLayout
        projects={projects}
        registerProject={registerProject}
        // setActiveProject={setActiveProject}
      />
      <ProjectSidebar activeIndex={activeIndex} activeProject={activeProject} />
    </div>
  ) : null;
}
