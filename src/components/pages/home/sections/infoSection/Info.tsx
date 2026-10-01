import {
  AboutMeCard,
  LocationCard,
  MyToolsCard,
  ProjectsCard,
  TechStackCard,
} from "@/components/cards";
import { BentoGrid, BentoGridItem } from "@/components/layout";

export function Info() {
  return (
    <BentoGrid className="mb-pagebuilder lg:my-pagebuilder">
      <BentoGridItem className="col-span-1 md:col-span-6 lg:col-span-7 lg:row-span-5">
        <AboutMeCard />
      </BentoGridItem>

      <BentoGridItem className="md:col-span-6 lg:col-span-5 lg:row-span-5">
        <TechStackCard />
      </BentoGridItem>

      <BentoGridItem className="md:col-span-6 lg:col-span-4 lg:row-span-6">
        <ProjectsCard />
      </BentoGridItem>

      <BentoGridItem className="md:col-span-6 lg:col-span-4 lg:row-span-6">
        <LocationCard />
      </BentoGridItem>

      <BentoGridItem className="col-span-1 md:col-span-12 lg:col-span-4 lg:row-span-6">
        <MyToolsCard />
      </BentoGridItem>
    </BentoGrid>
  );
}
