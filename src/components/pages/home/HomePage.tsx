import { Content, PageBuilder } from "@/components/layout";
import { FeaturedProjectsSection } from "@/components/project";
import { Project } from "@/lib/types";

import { About, Hero, Info } from ".";

interface PageProps {
  projects: Project[];
}

export function HomePage({ projects }: PageProps) {
  return (
    <>
      <Hero />
      <PageBuilder>
        <Content className="">
          <Info />
          <FeaturedProjectsSection projects={projects} />
          <About />
        </Content>
      </PageBuilder>
    </>
  );
}
