import { NavItems } from ".";

function Navigation() {
  return (
    <nav className="container flex items-start py-1.5">
      <div className="mx-auto flex items-start gap-3.5">
        <div className="relative flex justify-center">
          {/* <!-- Spacer --> */}
          <div
            aria-hidden="true"
            className="pointer-events-none invisible h-10 shrink-0"
            style={{ width: 480 }}
          ></div>

          {/* <!-- Actual navbar --> */}
          <div
            //   deal with the shadow: shadow-[0_10px_30px_-14px_rgba(0,0,0,0.22),0_3px_8px_-4px_rgba(0,0,0,0.08)]
            className="shadow-border absolute top-0 left-1/2 flex min-h-10 -translate-x-1/2 items-start justify-center bg-white/90 px-1 dark:bg-neutral-800/90 dark:shadow-none"
            id="js-nav-content"
            style={{
              borderRadius: "22px",
              clipPath: "inset(-24px -32px -32px round 22px)",
              opacity: 1,
              width: "480px",
              height: "42px",
            }}
          >
            <div
              className="relative flex w-full flex-col items-center py-1"
              style={{ opacity: 1, transform: "none" }}
            >
              <NavItems />
            </div>
          </div>
        </div>

        {/* fix the search icon */}
        <button
          aria-label="Open search (⌘K)"
          className="shadow-border relative mt-0.5 hidden size-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.22),0_3px_8px_-4px_rgba(0,0,0,0.08)] transition-all delay-0 duration-150 hover:text-neutral-900 active:scale-95 lg:inline-flex dark:bg-neutral-800/90 dark:text-white/85 dark:shadow-none dark:hover:text-white"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="size-4.5"
          >
            <path
              d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z"
              opacity="0.2"
            ></path>
            <path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
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
      </div>
    </nav>
  );
}
export { Navigation };
