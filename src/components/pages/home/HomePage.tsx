import { Hero, Info } from ".";
import { PageBuilder, Content } from "@/components/layout";

export function HomePage() {
  return (
    <>
      <Hero />
      <PageBuilder>
        <Content className="">
          <Info />
        </Content>
      </PageBuilder>
    </>
  );
}
