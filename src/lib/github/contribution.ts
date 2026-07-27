export function getContributionColor(count: number) {
  if (count === 0) return "#1B1C22";
  if (count <= 2) return "#4F46E5";
  if (count <= 5) return "#6366F1";
  if (count <= 10) return "#818CF8";
  return "#A5B4FC";
}
