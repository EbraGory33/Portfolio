import { TechStack } from "@/components/tech";
import { background } from "@/lib/data";
import { Project } from "@/lib/types/project";

import { AccentLine, ProjectDetails, ProjectFeatures, SidebarHeader } from ".";

interface ProjectSidebarProps {
  activeIndex: number;
  activeProject: Project;
}

export function ProjectSidebar({
  activeIndex,
  activeProject,
}: ProjectSidebarProps) {
  return (
    <div className="hidden py-4 lg:sticky lg:block lg:w-[40%] lg:pl-8">
      <div className="sticky top-32">
        <div className="flex">
          <AccentLine
            accent={background[activeIndex % background.length].accent}
          />

          <div>
            <div>
              {/* SidebarHeader */}
              <SidebarHeader title={activeProject.frontmatter.title} />

              {/* ProjectDetails */}
              <ProjectDetails detail={activeProject.frontmatter.description} />

              {/* ProjectFeatures */}
              <ProjectFeatures
                color={background[activeIndex % background.length].color}
                features={activeProject.frontmatter.Highlights}
              />

              <TechStack technologies={activeProject.frontmatter.tech} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
