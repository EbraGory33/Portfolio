import { ContributionCount, GithubAvatar, GitHubUser } from ".";
type GithubHeaderProps = {
  value: number;
};

export function GithubHeader({ value }: GithubHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <GithubAvatar />
        <GitHubUser />
      </div>
      <div className="flex flex-col items-end">
        <ContributionCount value={value} />
      </div>
    </div>
  );
}
