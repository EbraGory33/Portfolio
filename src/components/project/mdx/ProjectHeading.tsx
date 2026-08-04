interface ProjectHeadingProps {
  number?: number;
  children: React.ReactNode;
}

export function ProjectHeading({ number, children }: ProjectHeadingProps) {
  return (
    <>
      <div className="px-4 pt-8 md:px-6 lg:col-span-3 lg:py-16">
        <div className="sticky top-32 space-y-2">
          <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-600">
            {number?.toString().padStart(2, "0")}
          </span>
          <h2 className="font-bluu text-2xl tracking-wider text-neutral-900 dark:text-white">
            {children}
          </h2>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="hidden border-x border-dashed lg:col-span-1 lg:block"
      ></div>
    </>
  );
}
