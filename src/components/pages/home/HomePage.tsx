import { Hero, Info, Project } from ".";
import { PageBuilder, Content } from "@/components/layout";

export function HomePage() {
  return (
    <>
      <Hero />
      <PageBuilder>
        <Content className="">
          <Info />
          <Project />
        </Content>
      </PageBuilder>
    </>
  );
}
