import { BackgroundImage,Content, PageBuilder } from "@/components/layout";
import { About } from "@/components/pages/home";
import { GithubSection } from "@/components/sections";

import { Experience } from ".";

export function AboutPage() {
  return (
    <>
      <BackgroundImage
        image="/images/backgrounds/blueprint.avif"
        alt="Blueprint"
      />
      <PageBuilder>
        <Content className="pt-36">
          <About className="bg-transparent" />
          <Experience />
          <GithubSection />
        </Content>
      </PageBuilder>
    </>
  );
}
