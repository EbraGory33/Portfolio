import { SectionBuilder } from "@/components/layout";
import { AnimatedLink } from "@/components/ui/animated-link";
import { ProjectList } from ".";
import { Project as ProjectData } from "@/lib/types";
// import { projects } from "@/lib/data/project";

interface ProjectProps {
  projects: ProjectData[];
}
export async function Project({ projects }: ProjectProps) {
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
      <ProjectList projects={projects} layout="mobile" />

      <ProjectList projects={projects} layout="desktop" />
      <AnimatedLink href="/projects">See more projects</AnimatedLink>
    </SectionBuilder>
  );
}
