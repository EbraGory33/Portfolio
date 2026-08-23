import { CardFooter } from "@/components/cards";
import { BentoCard } from "@/components/layout";

export function MyToolsCard() {
  return (
    <BentoCard>
      <CardFooter
        title="MY TOOLS"
        description="Check out my favorite tools"
        overlay={true}
      />
    </BentoCard>
  );
}
