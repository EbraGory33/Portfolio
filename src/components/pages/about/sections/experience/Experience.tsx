// TODO:
import { SectionBuilder } from "@/components/layout";
import { experiences } from "@/lib/data/experience";
import { ExperienceList } from ".";

export function Experience() {
  return (
    <SectionBuilder
      className="py-pagebuilder"
      header={"MY EXPERIENCE"}
      headline={"Career Highlights"}
      alignment="center"
    >
      <ExperienceList experiences={experiences} />
    </SectionBuilder>
  );
}
