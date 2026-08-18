// TODO:
import {
  BackgroundImage,
  Content,
  PageBuilder,
  SectionBuilder,
} from "@/components/layout";
import { ProjectCatalog } from "@/components/project";
import type { ProjectDataProps } from "@/lib/types";

export function ProjectPage({ projects }: ProjectDataProps) {
  return (
    <>
      <PageBuilder>
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
