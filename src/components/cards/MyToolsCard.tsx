import { CardFooter } from "@/components/cards";
import { BentoCard } from "@/components/layout";
import { MyToolsOverlay } from "./overlay";

export function MyToolsCard() {
  return (
    <BentoCard link="/skills">
      <MyToolsOverlay />
      <CardFooter
        title="MY TOOLS"
        description="Check out my favorite tools"
        overlay={true}
      />
    </BentoCard>
  );
}
