import { SectionBuilder } from "@/components/layout";
import { projects } from "@/lib/data/project";
import { ProjectList } from ".";
import { AnimatedLink } from "@/components/ui/animated-link";
export function Project() {
  if (projects.length == 0) {
    return <></>;
  }
  {
    projects.length == 0 && <></>;
  }
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
