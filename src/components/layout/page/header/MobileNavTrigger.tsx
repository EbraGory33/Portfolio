type MobileNavTriggerProps = {
  expanded: boolean;
  onClick: () => void;
};

export function MobileNavTrigger({ expanded, onClick }: MobileNavTriggerProps) {
  return (
    <button
      aria-label={expanded ? "Close menu" : "Open menu"}
      aria-expanded={expanded}
      aria-controls="mobile-navigation-menu"
      className="flex min-w-46 cursor-pointer items-center justify-between gap-2 px-2.5 py-1 select-none"
      draggable="false"
      style={{ opacity: 1, transform: "none" }}
      onClick={onClick}
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
}
