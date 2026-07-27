export function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border-t p-4 md:flex-row">
      <div className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-6">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          © 2026{" "}
          <a
            className="font-medium text-neutral-700 transition-colors hover:text-black hover:underline hover:underline-offset-4 dark:text-neutral-300 dark:hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ebragory33"
          >
            Ebrahim Gory
          </a>
          . All rights reserved
        </p>
      </div>
    </div>
  );
}
