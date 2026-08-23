export function HeroHeading() {
  return (
    <h1 className="animate-fadeInUp fill-mode-[backwards] font-instrument-serif w-full text-center text-4xl leading-tight text-balance text-zinc-700 [animation-delay:50ms] md:text-5xl lg:text-6xl dark:text-zinc-100">
      <em className="bg-linear-to-b from-zinc-500 via-zinc-600 to-zinc-900 bg-clip-text tracking-tight text-transparent not-italic dark:from-zinc-700 dark:via-zinc-200 dark:to-zinc-50">
        Consistent small changes,
      </em>
      <br className="block" />
      <span className="font-instrument-serif bg-linear-to-b from-zinc-500 via-zinc-600 to-zinc-900 bg-clip-text tracking-tight text-transparent italic dark:from-zinc-700 dark:via-zinc-200 dark:to-zinc-50">
        make big differences.
      </span>
    </h1>
  );
}
