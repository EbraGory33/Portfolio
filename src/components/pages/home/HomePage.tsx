import { Content, PageBuilder } from "@/components/layout";

import { About, Hero, Info } from ".";
import { FeaturedProjectsSection } from "@/components/project";

import { Project } from "@/lib/types";

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
