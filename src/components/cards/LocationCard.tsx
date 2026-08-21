import { CardFooter } from "@/components/cards";
import { BentoCard } from "@/components/layout";
import { LocationOverlay } from "./overlay";

export function LocationCard() {
  return (
    <BentoCard>
      <LocationOverlay />
      <CardFooter
        title="WHERE I WORK"
        description="Based in New York, Avaiable Remotely"
        overlay={true}
      />
    </BentoCard>
  );
}
