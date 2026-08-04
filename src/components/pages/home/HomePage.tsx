import { Content, PageBuilder } from "@/components/layout";

import { About, Hero, Info, Project } from ".";

import { Project as ProjectData } from "@/lib/types";

interface PageProps {
  projects: ProjectData[];
}

export function HomePage({ projects }: PageProps) {
  return (
    <>
      <Hero />
      <PageBuilder>
        <Content className="">
          <Info />
          <Project projects={projects} />
          <About />
        </Content>
      </PageBuilder>
    </>
  );
}
