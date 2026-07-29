import { GithubWeek } from "@/lib/types";
import { GithubContributionCalendar, GithubFooter } from ".";

type GithubContributionGraphProps = {
  total: number;
  calendar: GithubWeek[];
};

export function GithubContributionGraph({
  total,
  calendar,
}: GithubContributionGraphProps) {
  return (
    <article className="react-activity-calendar flex w-max max-w-full flex-col gap-2 text-sm 2xl:w-full">
      <GithubContributionCalendar calendar={calendar} />
      <GithubFooter total={total} />
    </article>
  );
}
