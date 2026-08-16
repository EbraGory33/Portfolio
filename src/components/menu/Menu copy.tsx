import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function Menu() {
  return (
    <div
      id="_r_4_"
      data-base-ui-portal=""
      data-slot="drawer-portal"
      className="z-[6000]"
    >
      <div
        role="presentation"
        data-base-ui-inert=""
        style={{ position: "fixed", inset: "0px", userSelect: "none" }}
        aria-hidden="true"
      ></div>
      <div
        data-open=""
        role="presentation"
        data-slot="drawer-backdrop"
        className="fixed inset-0 z-[6000] min-h-dvh bg-black/30 opacity-[calc(1-var(--drawer-swipe-progress,0))] backdrop-blur-[2px] transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] data-ending-style:opacity-0 data-starting-style:opacity-0 data-swiping:duration-0"
        style={
          {
            userSelect: "none",
            "--drawer-swipe-progress": 0,
            "--drawer-swipe-strength": 1,
          } as React.CSSProperties
        }
        aria-hidden="true"
        data-base-ui-inert=""
      ></div>
      <div
        data-open=""
        role="presentation"
        data-slot="drawer-viewport"
        className="fixed inset-0 z-[6000] flex items-end justify-center"
      >
        <span
          data-type="inside"
          aria-hidden="true"
          tabIndex={0}
          data-base-ui-focus-guard=""
          style={{
            clipPath: "inset(50%)",
            overflow: "hidden",
            whiteSpace: "nowrap",
            border: "0px",
            padding: "0px",
            width: "1px",
            height: "1px",
            margin: "-1px",
            position: "fixed",
            top: "0px",
            left: "0px",
          }}
          data-base-ui-inert=""
        ></span>
        <div
          data-open=""
          data-swipe-direction="down"
          id="_R_jlb_"
          role="dialog"
          tabIndex={-1}
          data-base-ui-focusable=""
          data-slot="drawer-content"
          className="group/popup pointer-events-none flex w-full max-w-lg [transform:translateY(var(--drawer-swipe-movement-y))] flex-col gap-1.5 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] outline-none data-ending-style:[transform:translateY(calc(100%+0.75rem+2px))] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:[transform:translateY(calc(100%+0.75rem+2px))] data-swiping:duration-0 data-swiping:select-none"
          style={
            {
              "--drawer-swipe-movement-x": "0px",
              "--drawer-swipe-movement-y": "0px",
              "--drawer-swipe-progress": 0,
              "--nested-drawers": 0,
              "--drawer-snap-point-offset": "0px",
              "--drawer-swipe-strength": 1,
              "--drawer-frontmost-height": "500px",
            } as React.CSSProperties
          }
          aria-labelledby="base-ui-_r_5_"
          aria-describedby="base-ui-_r_6_"
        >
          <h2
            id="base-ui-_r_5_"
            data-slot="drawer-title"
            className="font-heading text-foreground sr-only text-base font-medium"
          >
            Command Menu
          </h2>
          <p
            id="base-ui-_r_6_"
            data-slot="drawer-description"
            className="text-muted-foreground sr-only text-sm"
          >
            Search pages, blog posts, projects, and more.
          </p>
          <div className="pointer-events-auto relative flex h-13 shrink-0 items-center gap-2.5">
            <div className="focus-within:ring-primary/20 relative h-11 flex-1 rounded-2xl bg-white/70 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(255,255,255,0.5),0_12px_32px_-12px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150 focus-within:ring-2 dark:bg-neutral-900/70 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.07),0_12px_32px_-12px_rgba(0,0,0,0.6)]">
              <div
                className="absolute inset-0 flex items-center gap-2.5 px-4"
                style={{ opacity: 1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="size-5 shrink-0 text-neutral-500 dark:text-white/55"
                >
                  <path
                    d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z"
                    opacity="0.2"
                  ></path>
                  <path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
                <input
                  aria-activedescendant="home"
                  aria-controls="command-list"
                  aria-expanded="true"
                  aria-label="Search"
                  className="flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-600 placeholder:transition-opacity placeholder:duration-300 dark:text-white dark:placeholder:text-white/60"
                  placeholder="Search pages, posts, projects..."
                  role="combobox"
                  value=""
                />
              </div>
            </div>
            <button
              aria-label="Reach out"
              className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-2xl bg-white/70 text-neutral-600 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(255,255,255,0.5),0_12px_32px_-12px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-200 hover:bg-white/80 hover:text-neutral-900 dark:bg-neutral-900/70 dark:text-white/60 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.07),0_12px_32px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/15 dark:hover:text-white"
              type="button"
            >
              <span
                className="flex items-center justify-center"
                style={{ opacity: 1 }}
              >
                <span className="relative inline-flex size-5 items-center justify-center">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 inline-flex items-center justify-center"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: "scale(0.800144) rotate(15.9885deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="size-5"
                    >
                      <path
                        d="M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z"
                        opacity="0.2"
                      ></path>
                      <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-4-1.08,7.85,7.85,0,0,0-2.53.42L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,96,128Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,128Z"></path>
                    </svg>
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 inline-flex items-center justify-center"
                    style={{
                      opacity: 0,
                      filter: "blur(3px)",
                      transform: "scale(0.999847) rotate(-0.0122782deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="size-5"
                    >
                      <path
                        d="M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z"
                        opacity="0.2"
                      ></path>
                      <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </button>
            <button
              aria-label="Toggle theme"
              className="shadow-border flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-2xl bg-white/70 text-neutral-600 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(255,255,255,0.5),0_12px_32px_-12px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-200 outline-none hover:bg-white/80 hover:text-neutral-900 dark:bg-neutral-900/70 dark:text-white/60 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.07),0_12px_32px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/15 dark:hover:text-white"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="dark:hidden"
              >
                <path d="M116,36V20a12,12,0,0,1,24,0V36a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H20a12,12,0,0,0,0,24H36A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V220A12,12,0,0,0,128,208Zm108-92H220a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="hidden dark:block"
              >
                <path d="M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z"></path>
              </svg>
            </button>
            <button
              aria-label="Close"
              className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-2xl bg-white/70 text-neutral-600 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(255,255,255,0.5),0_12px_32px_-12px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-200 hover:bg-white/80 hover:text-neutral-900 dark:bg-neutral-900/70 dark:text-white/60 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.07),0_12px_32px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/15 dark:hover:text-white"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="size-5"
              >
                <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
              </svg>
            </button>
          </div>
          <div className="pointer-events-auto relative h-[min(430px,58dvh)] overflow-hidden rounded-3xl bg-white/70 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(255,255,255,0.5),0_12px_32px_-12px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150 dark:bg-neutral-900/70 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.07),0_12px_32px_-12px_rgba(0,0,0,0.6)]">
            <div
              className="absolute inset-0 flex flex-col"
              style={{
                backfaceVisibility: "hidden",
                transform: "translate3d(0px, 0px, 0px)",
                opacity: 1,
              }}
            >
              <div
                aria-label="Search results"
                className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto pt-2 pb-4"
                id="command-list"
                role="listbox"
              >
                <div className="px-3 pt-2 pb-1">
                  <div className="flex items-center justify-between px-1 pb-1.5">
                    <span className="text-xs tracking-wide text-neutral-600 dark:text-white/60">
                      Recent
                    </span>
                    <button
                      aria-label="Clear recent searches"
                      className="cursor-pointer text-xs text-neutral-600 transition-colors hover:text-neutral-900 dark:text-white/60 dark:hover:text-white"
                      type="button"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="flex gap-1.5 overflow-x-auto [mask-image:linear-gradient(to_right,black_calc(100%-2rem),transparent)]">
                    <button
                      aria-label="Go to Keythm"
                      className="hover:border-primary/30 dark:hover:border-primary/30 shrink-0 cursor-pointer rounded-lg border border-dashed border-neutral-300 px-2.5 py-1 text-xs text-neutral-600 transition-colors duration-200 hover:text-neutral-900 dark:border-white/15 dark:text-white/60 dark:hover:text-white"
                      type="button"
                    >
                      Keythm
                    </button>
                  </div>
                </div>
                <div>
                  <section
                    aria-label="Pages"
                    className="px-2 pt-1.5"
                    style={{
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <h3 className="flex items-center gap-2 px-2 pt-1 pb-1.5 text-xs font-normal tracking-wide text-neutral-600 dark:text-white/60">
                      Pages
                      <span className="h-px flex-1 bg-neutral-200 dark:bg-white/[0.08]"></span>
                    </h3>
                    <div className="grid grid-cols-2 gap-1">
                      <button
                        aria-current="page"
                        aria-selected="true"
                        className="group bg-primary/10 ring-primary/20 dark:bg-primary/15 dark:ring-primary/25 focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm font-medium text-neutral-900 shadow-sm ring-1 transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white"
                        data-selected="true"
                        id="home"
                        role="option"
                        type="button"
                      >
                        <div className="bg-primary/15 ring-primary/25 dark:bg-primary/20 dark:ring-primary/30 flex size-7 shrink-0 items-center justify-center rounded-lg ring-1 transition-all duration-150">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="text-primary size-3.5 transition-all duration-150"
                          >
                            <path
                              d="M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z"
                              opacity="0.2"
                            ></path>
                            <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          Home
                        </span>
                        <span className="relative flex size-2 shrink-0">
                          <span className="bg-primary/40 absolute inset-0 animate-ping rounded-full"></span>
                          <span className="bg-primary shadow-primary/50 relative size-2 rounded-full shadow-sm"></span>
                        </span>
                      </button>
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="about"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z"
                              opacity="0.2"
                            ></path>
                            <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          About
                        </span>
                      </button>
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="projects"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M208,88v24H69.77a8,8,0,0,0-7.59,5.47L32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72A8,8,0,0,1,208,88Z"
                              opacity="0.2"
                            ></path>
                            <path d="M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          Projects
                        </span>
                      </button>
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="blog"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path d="M208,88H152V32Z" opacity="0.2"></path>
                            <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          Blog
                        </span>
                      </button>
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="guestbook"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M232,56V200H160a32,32,0,0,0-32,32V88a32,32,0,0,1,32-32Z"
                              opacity="0.2"
                            ></path>
                            <path d="M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64ZM160,88h40a8,8,0,0,1,0,16H160a8,8,0,0,1,0-16Zm48,40a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,128Zm0,32a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,160Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          Guestbook
                        </span>
                      </button>
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="bucket"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path d="M216,64V192H128V64Z" opacity="0.2"></path>
                            <path d="M224,128a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128ZM128,72h88a8,8,0,0,0,0-16H128a8,8,0,0,0,0,16Zm88,112H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM82.34,42.34,56,68.69,45.66,58.34A8,8,0,0,0,34.34,69.66l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,82.34,42.34Zm0,64L56,132.69,45.66,122.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Zm0,64L56,196.69,45.66,186.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          Bucket List
                        </span>
                      </button>
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="contact"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z"
                              opacity="0.2"
                            ></path>
                            <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          Book a call
                        </span>
                      </button>
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="uses"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M216,72V176H40V72A16,16,0,0,1,56,56H200A16,16,0,0,1,216,72Z"
                              opacity="0.2"
                            ></path>
                            <path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          Uses
                        </span>
                      </button>
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="attribution"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M200,48v63.1c0,39.7-31.75,72.6-71.45,72.9A72,72,0,0,1,56,112V48Z"
                              opacity="0.2"
                            ></path>
                            <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-29,64.64-64,64.9a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          Attribution
                        </span>
                      </button>
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="links"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M218.34,119.6,183.6,154.34a46.58,46.58,0,0,1-44.31,12.26c-.31.34-.62.67-.95,1L103.6,202.34A46.63,46.63,0,1,1,37.66,136.4L72.4,101.66A46.6,46.6,0,0,1,116.71,89.4c.31-.34.62-.67,1-1L152.4,53.66a46.63,46.63,0,0,1,65.94,65.94Z"
                              opacity="0.2"
                            ></path>
                            <path d="M240,88.23a54.43,54.43,0,0,1-16,37L189.25,160a54.27,54.27,0,0,1-38.63,16h-.05A54.63,54.63,0,0,1,96,119.84a8,8,0,0,1,16,.45A38.62,38.62,0,0,0,150.58,160h0a38.39,38.39,0,0,0,27.31-11.31l34.75-34.75a38.63,38.63,0,0,0-54.63-54.63l-11,11A8,8,0,0,1,135.7,59l11-11A54.65,54.65,0,0,1,224,48,54.86,54.86,0,0,1,240,88.23ZM109,185.66l-11,11A38.41,38.41,0,0,1,70.6,208h0a38.63,38.63,0,0,1-27.29-65.94L78,107.31A38.63,38.63,0,0,1,144,135.71a8,8,0,0,0,7.78,8.22H152a8,8,0,0,0,8-7.78A54.86,54.86,0,0,0,144,96a54.65,54.65,0,0,0-77.27,0L32,130.75A54.62,54.62,0,0,0,70.56,224h0a54.28,54.28,0,0,0,38.64-16l11-11A8,8,0,0,0,109,185.66Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          Links
                        </span>
                      </button>
                    </div>
                  </section>
                  <section
                    aria-label="Connect"
                    className="px-2 pt-1.5"
                    style={{
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <h3 className="flex items-center gap-2 px-2 pt-1 pb-1.5 text-xs font-normal tracking-wide text-neutral-600 dark:text-white/60">
                      Connect
                      <span className="h-px flex-1 bg-neutral-200 dark:bg-white/[0.08]"></span>
                    </h3>
                    <div className="grid grid-cols-3 gap-1">
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="gh"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
                              opacity="0.2"
                            ></path>
                            <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          GitHub
                        </span>
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-3 shrink-0 text-neutral-500 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-600 dark:text-white/50 dark:group-hover:text-white/70"
                        >
                          <path
                            d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          ></path>
                        </svg>
                      </button>
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="linkedin"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z"
                              opacity="0.2"
                            ></path>
                            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          LinkedIn
                        </span>
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-3 shrink-0 text-neutral-500 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-600 dark:text-white/50 dark:group-hover:text-white/70"
                        >
                          <path
                            d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          ></path>
                        </svg>
                      </button>
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="x"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M208,216H160L48,40H96Z"
                              opacity="0.2"
                            ></path>
                            <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          X (Twitter)
                        </span>
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-3 shrink-0 text-neutral-500 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-600 dark:text-white/50 dark:group-hover:text-white/70"
                        >
                          <path
                            d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </section>
                  <section
                    aria-label="Legal"
                    className="px-2 pt-1.5"

                    style={{
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <h3 className="flex items-center gap-2 px-2 pt-1 pb-1.5 text-xs font-normal tracking-wide text-neutral-600 dark:text-white/60">
                      Legal
                      <span className="h-px flex-1 bg-neutral-200 dark:bg-white/[0.08]"></span>
                    </h3>
                    <div className="grid grid-cols-2 gap-1">
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="privacy"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z"
                              opacity="0.2"
                            ></path>
                            <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          Privacy Policy
                        </span>
                      </button>
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="terms"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M56,88l32,80c0,17.67-20,24-32,24s-32-6.33-32-24ZM200,56l-32,80c0,17.67,20,24,32,24s32-6.33,32-24Z"
                              opacity="0.2"
                            ></path>
                            <path d="M239.43,133l-32-80h0a8,8,0,0,0-9.16-4.84L136,62V40a8,8,0,0,0-16,0V65.58L54.26,80.19A8,8,0,0,0,48.57,85h0v.06L16.57,165a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32a7.92,7.92,0,0,0-.57-3L66.92,93.77,120,82V208H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V78.42L187,67.1,160.57,133a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32A7.92,7.92,0,0,0,239.43,133ZM56,184c-7.53,0-22.76-3.61-23.93-14.64L56,109.54l23.93,59.82C78.76,180.39,63.53,184,56,184Zm144-32c-7.53,0-22.76-3.61-23.93-14.64L200,77.54l23.93,59.82C222.76,148.39,207.53,152,200,152Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          Terms of Use
                        </span>
                      </button>
                    </div>
                  </section>
                  <section
                    aria-label="Discover"
                    className="px-2 pt-1.5"
                    style={{
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <h3 className="flex items-center gap-2 px-2 pt-1 pb-1.5 text-xs font-normal tracking-wide text-neutral-600 dark:text-white/60">
                      Discover
                      <span className="h-px flex-1 bg-neutral-200 dark:bg-white/[0.08]"></span>
                    </h3>
                    <div className="grid grid-cols-2 gap-1">
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="rss"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M216,200H56V40A160,160,0,0,1,216,200Z"
                              opacity="0.2"
                            ></path>
                            <path d="M106.91,149.09A71.53,71.53,0,0,1,128,200a8,8,0,0,1-16,0,56,56,0,0,0-56-56,8,8,0,0,1,0-16A71.53,71.53,0,0,1,106.91,149.09ZM56,80a8,8,0,0,0,0,16A104,104,0,0,1,160,200a8,8,0,0,0,16,0A120,120,0,0,0,56,80Zm118.79,1.21A166.89,166.89,0,0,0,56,32a8,8,0,0,0,0,16A151,151,0,0,1,163.48,92.52,151,151,0,0,1,208,200a8,8,0,0,0,16,0A166.9,166.9,0,0,0,174.79,81.21ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          Blog RSS
                        </span>
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-3 shrink-0 text-neutral-500 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-600 dark:text-white/50 dark:group-hover:text-white/70"
                        >
                          <path
                            d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          ></path>
                        </svg>
                      </button>
                      <button
                        aria-selected="false"
                        className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/[0.1] dark:hover:text-white"
                        data-selected="false"
                        id="sitemap"
                        role="option"
                        type="button"
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/[0.06] dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white"
                          >
                            <path
                              d="M64,112v32a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H56A8,8,0,0,1,64,112ZM208,40H160a8,8,0,0,0-8,8V96a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40Zm0,112H160a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152Z"
                              opacity="0.2"
                            ></path>
                            <path d="M160,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16V64H128a24,24,0,0,0-24,24v32H72v-8A16,16,0,0,0,56,96H24A16,16,0,0,0,8,112v32a16,16,0,0,0,16,16H56a16,16,0,0,0,16-16v-8h32v32a24,24,0,0,0,24,24h16v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16v16H128a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h16V96A16,16,0,0,0,160,112ZM56,144H24V112H56v32Zm104,16h48v48H160Zm0-112h48V96H160Z"></path>
                          </svg>
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          Sitemap
                        </span>
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-3 shrink-0 text-neutral-500 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-600 dark:text-white/50 dark:group-hover:text-white/70"
                        >
                          <path
                            d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span
          data-type="inside"
          aria-hidden="true"
          tabIndex={0}
          data-base-ui-focus-guard=""
          style={{
            clipPath: "inset(50%)",
            overflow: "hidden",
            whiteSpace: "nowrap",
            border: 0,
            padding: 0,
            width: "1px",
            height: "1px",
            margin: "-1px",
            position: "fixed",
            top: 0,
            left: 0,
          }}
          data-base-ui-inert=""
        ></span>
      </div>
    </div>
  );
}

<div
  data-open=""
  data-swipe-direction="down"
  id="_R_alb_"
  role="dialog"
  tabindex="-1"
  data-base-ui-focusable=""
  data-slot="drawer-popup"
  data-swipe-axis="y"
  class="group/drawer-popup bg-popover text-popover-foreground pointer-events-auto fixed z-50 m-(--drawer-inset,0px) flex h-(--drawer-content-height) max-h-(--drawer-content-max-height,none) min-h-0 w-(--drawer-content-width,auto) transform-[translate3d(var(--translate-x,0px),var(--translate-y,0px),0)_scale(var(--stack-scale))] flex-col text-sm transition-[transform,height,opacity,filter] duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform outline-none select-none [--bleed:3rem] [--drawer-content-height:var(--drawer-height,auto)] [--peek:1rem] [--stack-height:var(--drawer-frontmost-height,var(--drawer-height,0px))] [--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] [--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] [--stack-scale-base:max(0,calc(1-(var(--nested-drawers)*var(--stack-step))))] [--stack-scale:clamp(0,calc(var(--stack-scale-base)+(var(--stack-step)*var(--stack-progress))),1)] [--stack-shrink:calc(1-var(--stack-scale))] [--stack-step:0.05] [interpolate-size:allow-keywords] after:pointer-events-none after:absolute after:bg-(--drawer-bleed-background,var(--color-popover)) data-ending-style:transform-(--closed-transform) data-ending-style:opacity-[0.9999] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-nested-drawer-open:overflow-hidden data-nested-drawer-open:brightness-95 data-nested-drawer-swiping:duration-0 data-ending-style:data-nested-drawer-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:transform-(--closed-transform) data-swiping:duration-0 data-ending-style:data-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-[swipe-axis=x]:inset-y-0 data-[swipe-axis=x]:flex-row data-[swipe-axis=x]:[--drawer-content-width:75%] data-[swipe-axis=x]:after:inset-y-0 data-[swipe-axis=x]:after:w-(--bleed) data-[swipe-axis=y]:inset-x-0 data-[swipe-axis=y]:[--drawer-content-max-height:calc(100dvh-6rem)] data-[swipe-axis=y]:after:inset-x-0 data-[swipe-axis=y]:after:h-(--bleed) data-[swipe-axis=y]:data-nested-drawer-open:h-(--stack-height) data-[swipe-axis=y]:data-snap-points:[--drawer-content-height:100dvh] data-[swipe-direction=down]:bottom-0 data-[swipe-direction=down]:origin-bottom data-[swipe-direction=down]:rounded-t-xl data-[swipe-direction=down]:border-t data-[swipe-direction=down]:[--closed-transform:translate3d(0,calc(100%+var(--drawer-inset,0px)+2px),0)] data-[swipe-direction=down]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--stack-shrink)*var(--stack-height)))] data-[swipe-direction=down]:after:top-full data-[swipe-direction=left]:left-0 data-[swipe-direction=left]:origin-left data-[swipe-direction=left]:rounded-r-xl data-[swipe-direction=left]:border-r data-[swipe-direction=left]:[--closed-transform:translate3d(calc(-100%-var(--drawer-inset,0px)-2px),0,0)] data-[swipe-direction=left]:[--translate-x:calc(var(--drawer-swipe-movement-x)+var(--stack-peek-offset)+(var(--stack-shrink)*100%))] data-[swipe-direction=left]:after:right-full data-[swipe-direction=right]:right-0 data-[swipe-direction=right]:origin-right data-[swipe-direction=right]:rounded-l-xl data-[swipe-direction=right]:border-l data-[swipe-direction=right]:[--closed-transform:translate3d(calc(100%+var(--drawer-inset,0px)+2px),0,0)] data-[swipe-direction=right]:[--translate-x:calc(var(--drawer-swipe-movement-x)-var(--stack-peek-offset)-(var(--stack-shrink)*100%))] data-[swipe-direction=right]:after:left-full data-[swipe-direction=up]:top-0 data-[swipe-direction=up]:origin-top data-[swipe-direction=up]:rounded-b-xl data-[swipe-direction=up]:border-b data-[swipe-direction=up]:[--closed-transform:translate3d(0,calc(-100%-var(--drawer-inset,0px)-2px),0)] data-[swipe-direction=up]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--stack-shrink)*var(--stack-height)))] data-[swipe-direction=up]:after:bottom-full data-[swipe-axis=x]:sm:[--drawer-content-width:24rem]"
  aria-labelledby="base-ui-_r_5_"
  aria-describedby="base-ui-_r_6_"
  style="--drawer-swipe-movement-x: 0px; --drawer-swipe-movement-y: 0px; --drawer-swipe-progress: 0; --nested-drawers: 0; --drawer-snap-point-offset: 0px; --drawer-swipe-strength: 1; --drawer-frontmost-height: 483px;"
>
  <div
    data-drawer-content=""
    data-slot="drawer-content"
    class="flex min-h-0 flex-1 flex-col overflow-hidden overscroll-contain rounded-[inherit] transition-opacity duration-300 ease-[cubic-bezier(0.45,1.005,0,1.005)] select-text group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-swiping/drawer-popup:select-none"
  ></div>
</div>;
