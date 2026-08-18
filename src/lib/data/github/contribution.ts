export function getContributionColor(count: number) {
  if (count === 0) return "var(--github-contribution-color-0)";
  if (count <= 2) return "var(--github-contribution-color-1)";
  if (count <= 5) return "var(--github-contribution-color-2)";
  if (count <= 10) return "var(--github-contribution-color-3)";
  return "var(--github-contribution-color-4)";
}
