"use client";
import { CopyButton } from "@/components/ui";

export function CopyEmailButton() {
  const email = "Gory.Ebrahim30@gmail.com";

  return (
    <CopyButton
      value={email}
      className="focus-visible:ring-primary/50 focus-visible:ring-offset-background flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-base font-light text-black transition-colors duration-300 hover:text-black/60 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-white/75 dark:hover:text-white/90"
    >
      {(copied) => <span>{copied ? "Copied to clipboard" : email}</span>}
    </CopyButton>
  );
}
