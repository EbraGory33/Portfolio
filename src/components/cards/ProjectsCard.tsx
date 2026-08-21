import { CardFooter } from "@/components/cards";
import { BentoCard } from "@/components/layout";

export function ProjectsCard() {
  return (
    <BentoCard link="/projects">
      <CardFooter
        title="WHAT YOU GET"
        description="The stack behind everything I ship"
        overlay={true}
      />
    </BentoCard>
  );
}
