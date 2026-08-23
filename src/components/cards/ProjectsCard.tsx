import { CardFooter } from "@/components/cards";
import { BentoCard } from "@/components/layout";

export function ProjectsCard() {
  return (
    <BentoCard link="/projects">
      <CardFooter
        title="PROJECTS"
        description="Selected applications I've built"
        overlay={true}
      />
    </BentoCard>
  );
}
