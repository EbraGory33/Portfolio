import { Project } from "@/types/project";
import { MobileProjectLayout, DesktopProjectLayout } from ".";

interface ProjectListProps {
  projects: Project[];
  layout: "mobile" | "desktop";
}

export function ProjectList({ projects, layout }: ProjectListProps) {
  return layout == "mobile" ? (
    <MobileProjectLayout projects={projects} />
  ) : layout == "desktop" ? (
    // Todo: text inside layout file or leave it here?
    <div className="relative hidden w-full lg:flex">
      <DesktopProjectLayout projects={projects} />
      <div className="hidden py-4 lg:sticky lg:block lg:w-[40%] lg:pl-8"></div>
    </div>
  ) : null;
}
