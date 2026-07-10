export function CopyEmailButton() {
  return (
    <button
      className="focus-visible:ring-primary/50 focus-visible:ring-offset-background flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-base font-light text-black transition-colors duration-300 hover:text-black/60 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-white/75 dark:hover:text-white/90"
      type="button"
      tabIndex={0}
    >
      <span className="relative size-4">
        <svg
          className="absolute inset-0"
          fill="currentColor"
          viewBox="0 0 256 256"
          style={{ opacity: 1, transform: "scale(1.1)" }}
        >
          <path d="M216,40V168H168V88H88V40Z" opacity="0.2"></path>
          <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
        </svg>
      </span>
      <span className="relative grid text-left select-none">
        <span className="invisible col-start-1 row-start-1">
          Copied to clipboard
        </span>
        <span className="invisible col-start-1 row-start-1">
          hello@aayushbharti.in
        </span>
        <span
          className="col-start-1 row-start-1"
          style={{ opacity: 1, transform: "none" }}
        >
          hello@aayushbharti.in
        </span>
      </span>
    </button>
  );
}
