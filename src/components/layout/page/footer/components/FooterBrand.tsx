import { Terminal } from "lucide-react";
import Link from "next/link";

export function FooterBrand() {
  return (
    <div className="hidden w-full flex-col justify-between px-4 py-6 text-sm max-lg:border-b lg:flex lg:w-[44%] lg:border-e lg:px-16 lg:pr-8">
      <div className="grow space-y-4">
        <Link aria-label="Homepage" className="inline-block" href="/">
          <Terminal className="size-10 bg-black text-white dark:bg-white dark:text-black" />
        </Link>
        <p className="w-60 text-base leading-5 text-neutral-500 dark:text-neutral-400">
          I'm Ebrahim - a software engineer, freelancer &amp; problem solver.
          Thanks for visiting my site!
        </p>
      </div>
    </div>
  );
}
