import { useMenu } from "@/lib/hooks";
import { Command, Search } from "lucide-react";
import { ThemeToggle } from "@/components/effects/themeToggle/ThemeToggle";

type MenuNavTriggerProps = {
  variant: "mobile" | "desktop";
};

export function MenuNavTrigger({ variant }: MenuNavTriggerProps) {
  const { expanded, openMenu } = useMenu();

  if (variant === "mobile")
    return (
      <button
        aria-label="Open menu (⌘K)"
        aria-expanded={expanded}
        aria-controls="mobile-navigation-menu"
        className="flex min-w-46 cursor-pointer items-center justify-between gap-2 px-2.5 py-1 select-none"
        draggable="false"
        style={{ opacity: 1, transform: "none" }}
        onClick={openMenu}
      >
        <svg
          aria-hidden="true"
          className="size-6 rounded-full pt-0.5"
          viewBox="0 0 24 24"
        >
          {/* Your existing logo mark or approved logo path goes here. */}
          <circle
            cx="12"
            cy="12"
            r="10"
            className="fill-neutral-900 dark:fill-white"
          />
        </svg>

        <span className="text-lg font-medium text-neutral-600 dark:text-white/70">
          Ebrahim
        </span>
      </button>
    );
  return (
    <>
      <button
        aria-label="Open menu (⌘K)"
        className="shadow-border relative mt-0.5 hidden size-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.22),0_3px_8px_-4px_rgba(0,0,0,0.08)] transition-all delay-0 duration-150 hover:text-neutral-900 active:scale-95 lg:inline-flex dark:bg-neutral-800/90 dark:text-white/85 dark:shadow-none dark:hover:text-white"
        type="button"
        onClick={openMenu}
      >
        <Search className="size-4.5" />
        {/* <Command className="size-4.5" /> */}
        {/* <span
            className="pointer-events-none absolute -bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-[3px] rounded-lg border border-white/20 bg-neutral-900 px-2 py-1 whitespace-nowrap shadow-lg shadow-black/20 dark:border-neutral-200 dark:bg-white dark:shadow-black/5"
            style={{ opacity: 1, transform: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="size-3 text-white/70 dark:text-neutral-500"
            >
              <path d="M180,140H164V116h16a40,40,0,1,0-40-40V92H116V76a40,40,0,1,0-40,40H92v24H76a40,40,0,1,0,40,40V164h24v16a40,40,0,1,0,40-40ZM164,76a16,16,0,1,1,16,16H164ZM60,76a16,16,0,0,1,32,0V92H76A16,16,0,0,1,60,76ZM92,180a16,16,0,1,1-16-16H92Zm24-64h24v24H116Zm64,80a16,16,0,0,1-16-16V164h16a16,16,0,0,1,0,32Z"></path>
            </svg>
            <span className="text-[11px] leading-none font-semibold text-white/80 dark:text-neutral-600">
              K
            </span>
          </span> */}
      </button>
      <ThemeToggle />
    </>
  );
}
