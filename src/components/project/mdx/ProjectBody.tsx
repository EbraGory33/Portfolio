export function ProjectBody({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="px-4 py-8 md:px-6 lg:col-span-8 lg:py-16">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </>
  );
}
