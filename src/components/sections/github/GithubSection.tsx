import { SectionBuilder } from "@/components/layout";
import { getGithubData } from "@/lib/data/github/getGithub";
import { GithubSectionData } from "@/lib/types/tech";

import { GithubProfile } from "./profile";
import { GithubStats } from "./stats";

export async function GithubSection() {
  const githubData: GithubSectionData = await getGithubData();
  // console.log(githubData);
  return (
    <SectionBuilder
      className=""
      header={"OPEN SOURCE"}
      headline={"Code and Contributions"}
      alignment="center"
    >
      <div className="grid w-full grid-cols-1 gap-2 border-y md:grid-cols-12">
        <GithubProfile contributions={githubData.contributions} />
        <GithubStats stats={githubData.stats} />
      </div>
    </SectionBuilder>
  );
}
