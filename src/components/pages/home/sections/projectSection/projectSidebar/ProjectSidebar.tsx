import { Project } from "@/lib/types/project";
import {
  AccentLine,
  SidebarHeader,
  ProjectDetails,
  ProjectFeatures,
  TechStack,
} from ".";

interface ProjectSidebarProps {
  activeProject: Project;
}

export function ProjectSidebar({ activeProject }: ProjectSidebarProps) {
  return (
    <div className="hidden py-4 lg:sticky lg:block lg:w-[40%] lg:pl-8">
      <div className="sticky top-32">
        <div className="flex">
          <AccentLine accent={activeProject.accentColor} />
          <div>
            <div>
              {/* SidebarHeader */}
              <SidebarHeader title={activeProject.title} />

              {/* ProjectDetails */}
              <ProjectDetails detail={activeProject.detail} />

              {/* ProjectFeatures */}
              <ProjectFeatures
                accent={activeProject.accentColor}
                features={activeProject.features}
              />

              <TechStack technologies={activeProject.technologies} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
