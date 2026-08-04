// TODO:
import {
  BackgroundImage,
  Content,
  PageBuilder,
  SectionBuilder,
} from "@/components/layout";

import type { ProjectDataProps } from "@/lib/types";

import { ProjectCatalog } from "@/components/project";

// export function ProjectPage(projects: ProjectData[]
export function ProjectPage({ projects }: ProjectDataProps) {
  return (
    <>
      {/* <BackgroundImage
        image="/images/backgrounds/blueprint.avif"
        alt="Blueprint"
      /> */}
      <PageBuilder>
        {/* <Content className="py-36"> */}
        <Content className="pt-38 pb-32">
          <BackgroundImage
            image="/images/backgrounds/blueprint.avif"
            alt="Blueprint"
          />
          <SectionBuilder
            header={"Case Studies"}
            headline={"My Projects"}
            alignment="center"
            padding="big"
            className="pt-38 pb-32"
          >
            <ProjectCatalog projects={projects} />
          </SectionBuilder>
        </Content>
      </PageBuilder>
    </>
  );
}
