// Todo:
// import Link from "next/link";

import { CardFooter } from "@/components/cards";
import { BentoCard } from "@/components/layout";
import { AboutMeOverlay } from "./overlay";

export function AboutMeCard() {
  return (
    <BentoCard link="/about">
      <AboutMeOverlay />
      <CardFooter
        title="MY JOURNEY"
        description="Building products through continuous learning."
        align="center"
      />
    </BentoCard>
  );
}
