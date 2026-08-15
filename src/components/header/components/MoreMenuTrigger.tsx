export function MoreMenuTrigger() {
  return (
    <li className="relative list-none">
      <button
        aria-expanded="false"
        aria-haspopup="true"
        className="flex cursor-pointer items-center gap-0.5 rounded-full px-4 py-1.5 text-sm font-normal text-neutral-700 transition-colors duration-150 outline-none select-none hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:text-white/70 dark:hover:text-white dark:focus-visible:ring-white/25"
      >
        More
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          className="size-3.5 transition-transform duration-200 ease-out"
        >
          <path
            d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
        </svg>
      </button>
    </li>
  );
}
