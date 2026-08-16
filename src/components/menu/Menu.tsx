import {
  MessageCircle,
  Moon,
  Search,
  Sun,
  X,
  Home,
  User,
  Folder,
  FileText,
  BookOpen,
  Laptop,
  Trophy,
  Link,
} from "lucide-react";
import { useMenu, useThemeToggle } from "@/lib/hooks";
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
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandEmpty,
} from "@/components/ui/command";
import { InputGroup } from "../ui/input-group";

const pages = [
  { value: "home", label: "Home", icon: Home },
  { value: "about", label: "About", icon: User },
  { value: "projects", label: "Projects", icon: Folder },
  { value: "blog", label: "Blog", icon: FileText },
  { value: "guestbook", label: "Guestbook", icon: BookOpen },
  { value: "uses", label: "Uses", icon: Laptop },
  { value: "attribution", label: "Attribution", icon: Trophy },
  { value: "links", label: "Links", icon: Link },
];
export function Menu() {
  const { expanded, closeMenu } = useMenu();
  const { toggleTheme } = useThemeToggle();
  return (
    <Drawer open={expanded} onOpenChange={closeMenu}>
      <DrawerContent className="pointer-events-none mx-auto w-full max-w-lg gap-1.5 bg-transparent! px-3 pb-3 shadow-none! after:bg-transparent! data-[swipe-direction=down]:rounded-t-none! data-[swipe-direction=down]:border-t-0!">
        <DrawerTitle className="sr-only">Command Menu</DrawerTitle>

        <DrawerDescription className="sr-only">
          Search pages, blog posts, projects, and more.
        </DrawerDescription>

        {/* top search/actions block */}

        <div className="pointer-events-auto relative flex h-13 shrink-0 items-center gap-2.5">
          <Command
            className={[
              "focus-within:ring-primary/20 h-11 flex-1 justify-center rounded-2xl! bg-white/70 p-0! shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(255,255,255,0.5),0_12px_32px_-12px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150 focus-within:ring-2 dark:bg-neutral-900/70 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.07),0_12px_32px_-12px_rgba(0,0,0,0.6)]",
              "**:data-[slot=command-input-wrapper]:p-0",
              "**:data-[slot=command-input-wrapper]:px-4",
              "**:data-[slot=input-group]:gap-2.5!",
              "**:data-[slot=input-group]:border-none",
              "**:data-[slot=input-group-addon]:py-0!",
              "**:data-[slot=input-group-addon]:pl-0!",
              "**:data-[slot=input-group-addon]:[&_svg]:opacity-75!",
            ].join(" ")}
          >
            <CommandInput
              placeholder="Search pages, posts, projects..."
              className="h-11 border-0"
            />
          </Command>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Reach out"
            className="size-11 shrink-0 cursor-pointer rounded-2xl bg-white/70 text-neutral-600 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(255,255,255,0.5),0_12px_32px_-12px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-200 hover:bg-white/80 hover:text-neutral-900 dark:bg-neutral-900/70 dark:text-white/60 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.07),0_12px_32px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/15 dark:hover:text-white"
          >
            <MessageCircle className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="size-11 shrink-0 cursor-pointer rounded-2xl bg-white/70 text-neutral-600 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(255,255,255,0.5),0_12px_32px_-12px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-200 hover:bg-white/80 hover:text-neutral-900 dark:bg-neutral-900/70 dark:text-white/60 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.07),0_12px_32px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/15 dark:hover:text-white"
          >
            <Sun className="size-5 dark:hidden" />
            <Moon className="hidden size-5 dark:block" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close"
            className="size-11 shrink-0 cursor-pointer rounded-2xl bg-white/70 text-neutral-600 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(255,255,255,0.5),0_12px_32px_-12px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-200 hover:bg-white/80 hover:text-neutral-900 dark:bg-neutral-900/70 dark:text-white/60 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.07),0_12px_32px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/15 dark:hover:text-white"
            onClick={closeMenu}
          >
            <X className="size-5" />
          </Button>
        </div>

        {/* results block */}
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
                      <span className="flex-1 truncate leading-snug">Home</span>
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
                      <span className="flex-1 truncate leading-snug">Blog</span>
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
                      <span className="flex-1 truncate leading-snug">Uses</span>
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
                          <path d="M208,216H160L48,40H96Z" opacity="0.2"></path>
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
              </div>
            </div>
          </div>
        </div>
        {/* End OF TODO AREA */}
        {/* TODO AREA */}

        <Command className="pointer-events-auto h-[min(430px,58dvh)] rounded-3xl border-0 bg-white/70 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(255,255,255,0.5),0_12px_32px_-12px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150 dark:bg-neutral-900/70 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.07),0_12px_32px_-12px_rgba(0,0,0,0.6)]">
          <CommandList className="max-h-none flex-1 px-2 py-2">
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Recent">
              <CommandItem value="keythm">
                <Search className="size-4" />
                <span>Keythm</span>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Pages">
              <div className="grid grid-cols-2 gap-1">
                <CommandItem value="home" className="rounded-xl">
                  <Home className="size-4" />
                  <span>Home</span>
                </CommandItem>

                <CommandItem value="about" className="rounded-xl">
                  <User className="size-4" />
                  <span>About</span>
                </CommandItem>

                <CommandItem value="projects" className="rounded-xl">
                  <Folder className="size-4" />
                  <span>Projects</span>
                </CommandItem>

                <CommandItem value="blog" className="rounded-xl">
                  <FileText className="size-4" />
                  <span>Blog</span>
                </CommandItem>

                <CommandItem value="guestbook" className="rounded-xl">
                  <BookOpen className="size-4" />
                  <span>Guestbook</span>
                </CommandItem>

                <CommandItem value="uses" className="rounded-xl">
                  <Laptop className="size-4" />
                  <span>Uses</span>
                </CommandItem>

                <CommandItem value="attribution" className="rounded-xl">
                  <Trophy className="size-4" />
                  <span>Attribution</span>
                </CommandItem>

                <CommandItem value="links" className="rounded-xl">
                  <Link className="size-4" />
                  <span>Links</span>
                </CommandItem>
              </div>
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Connect">
              <div className="grid grid-cols-3 gap-1">
                {/* connect items */}
              </div>
            </CommandGroup>
          </CommandList>
        </Command>
      </DrawerContent>
    </Drawer>
  );
}
