import { PageBuilder, Content, BackgroundImage } from "@/components/layout";
import { Experience } from ".";
import { GithubSection } from "@/components/sections";
import { About } from "@/components/pages/home";

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
