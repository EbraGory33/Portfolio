import { CardFooter } from "@/components/cards";
import { BentoCard } from "@/components/layout";
import { ProjectsOverlay } from "./overlay";

export function ProjectsCard() {
  return (
    <BentoCard link="/projects">
      <ProjectsOverlay />
      <CardFooter
        title="PROJECTS"
        description="Selected applications I've built"
        overlay={true}
      />
    </BentoCard>
  );
}
