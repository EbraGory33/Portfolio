import type { GithubContributions } from "@/lib/types";

import { GithubContributionGraph,GithubHeader } from ".";

interface GithubProfileProps {
  contributions: GithubContributions;
}

export function GithubProfile({ contributions }: GithubProfileProps) {
  return (
    <div className="group bg-surface dark:bg-card/15 dark:hover:bg-card/5 ring-border relative flex min-h-56 w-full flex-col justify-center overflow-hidden rounded-xl p-6 ring-1 transition-colors duration-300 hover:bg-white md:col-span-9">
      <GithubHeader value={contributions.previousCalendarYearTotal} />
      <GithubContributionGraph
        total={contributions.total}
        calendar={contributions.calendar}
      />
    </div>
  );
}
