import { SectionBuilder } from "@/components/layout";
import { projects } from "@/data/project";
import { ProjectList } from ".";
export function Project() {
  return (
    <SectionBuilder
      className="px-2"
      header={"CASE STUDIES"}
      headline={"Curated Work"}
    >
      <ProjectList projects={projects} layout="mobile" />

      <ProjectList projects={projects} layout="desktop" />
    </SectionBuilder>
  );
}
