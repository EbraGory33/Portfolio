import { Project } from "@/types/project";

interface ProjectCardProps {
  index: Number;
  project: Project;
  layout: "mobile" | "desktop";
}

export function ProjectCard({
  project,
  layout,
  index,
  ...props
}: ProjectCardProps) {
  return layout == "mobile" ? <></> : layout == "desktop" ? <div></div> : null;
}
