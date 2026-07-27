// TODO:
import { PageBuilder, Content, BackgroundImage } from "@/components/layout";
import { Project } from ".";

export function ProjectPage() {
  return (
    <>
      <BackgroundImage
        image="/images/backgrounds/blueprint.avif"
        alt="Blueprint"
      />
      <PageBuilder>
        <Content className="py-36">
          <Project />
        </Content>
      </PageBuilder>
    </>
  );
}
