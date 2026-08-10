import { SectionBuilder } from "@/components/layout";
import { AnimatedLink } from "@/components/ui/animated-link";
import { Project as ProjectData } from "@/lib/types";

import { FeaturedProjectList } from ".";
// import { projects } from "@/lib/data/project";

interface FeaturedProjectsSectionProps {
  projects: ProjectData[];
}
export async function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  if (projects.length == 0) {
    return <></>;
  }
  // {
  //   projects.length == 0 && <></>;
  // }
  return (
    <SectionBuilder
      className="py-pagebuilder px-2"
      header={"CASE STUDIES"}
      headline={"Featured Work"}
      alignment="center"
    >
      <FeaturedProjectList projects={projects} layout="mobile" />

      <FeaturedProjectList projects={projects} layout="desktop" />
      <AnimatedLink href="/projects">See more projects</AnimatedLink>
    </SectionBuilder>
  );
}
