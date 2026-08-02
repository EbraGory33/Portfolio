import { Content,PageBuilder } from "@/components/layout";

import { About,Hero, Info, Project } from ".";

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
