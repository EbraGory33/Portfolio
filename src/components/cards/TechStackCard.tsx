import { CardFooter } from "@/components/cards";
import { BentoCard } from "@/components/layout";
import { TechStackOverlay } from "./overlay";

export function TechStackCard() {
  return (
    <BentoCard link={"/skills"}>
      <TechStackOverlay />
      <CardFooter
        title="TECH STACK"
        description="The stack behind everything I ship"
        overlay={true}
        align="center"
      />
    </BentoCard>
  );
}
