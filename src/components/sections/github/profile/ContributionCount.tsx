type ContributionCountProps = {
  value: number;
};

export function ContributionCount({ value }: ContributionCountProps) {
  const previousYear = new Date().getFullYear() - 1;
  return (
    <>
      <span className="text-lg leading-none font-bold text-zinc-900 dark:text-zinc-100">
        {value}
      </span>
      <span className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
        {previousYear} Total
      </span>
    </>
  );
}
