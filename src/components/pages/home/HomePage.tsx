import { Hero, Info, Project, About } from ".";
import { PageBuilder, Content } from "@/components/layout";

export function HomePage() {
  return (
    <>
      <Hero />
      <PageBuilder>
        <Content className="">
          <Info />
          <Project />
          <About />
        </Content>
      </PageBuilder>
    </>
  );
}
