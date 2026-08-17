"use client";
import { usePathname } from "next/navigation";
import { useMenu, useThemeToggle } from "@/lib/hooks";
import Link from "next/link";
import {
  MessageCircle,
  Moon,
  Sun,
  X,
  Home,
  User,
  Folder,
  FileText,
  BookOpen,
  Laptop,
  Trophy,
  Link as LinkIcon,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandEmpty,
} from "@/components/ui/command";

const pages = [
  { value: "home", link: "/", icon: Home },
  { value: "about", link: "/about", icon: User },
  { value: "projects", link: "/projects", icon: Folder },
  { value: "blog", link: "/blog", icon: FileText },
  { value: "guestbook", link: "/guestbook", icon: BookOpen },
  { value: "uses", link: "/uses", icon: Laptop },
  { value: "attribution", link: "/attribution", icon: Trophy },
  { value: "links", link: "/links", icon: LinkIcon },
];
const socials = [
  {
    value: "Linkedin",
    link: "https://linkedin.com/in/ebrahim-gory/",
    icon: FaLinkedin,
  },
  { value: "Github", link: "https://github.com/ebragory33", icon: FaGithub },
  {
    value: "Instagram",
    link: "https://instagram.com/webstudios.dev/",
    icon: FaInstagram,
  },

  { value: "X (Twitter)", link: "https://x.com/SWEbra24", icon: FaXTwitter },
];
export function Menu() {
  const { expanded, closeMenu } = useMenu();
  const { toggleTheme } = useThemeToggle();
  const pathname = usePathname();
  const activePathname = `/${pathname.split("/")[1]}`;
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
            <a href="mailto:gory.ebrahim30@gmail.com?subject=Reaching%20out%20via%20your%20portfolio">
              <MessageCircle className="size-5" />
            </a>
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

        <Command className="pointer-events-auto h-[min(430px,58dvh)] overflow-hidden rounded-3xl! border bg-white/70 p-0! shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(255,255,255,0.5),0_12px_32px_-12px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150 dark:bg-neutral-900/70 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.07),0_12px_32px_-12px_rgba(0,0,0,0.6)]">
          <CommandList className="max-h-none flex-1 pt-2 pb-4">
            <CommandGroup
              heading={
                <div className="flex items-center gap-2">
                  <span>Pages</span>
                  <span className="h-px flex-1 bg-neutral-200 dark:bg-white/8" />
                </div>
              }
              className="px-2 pt-1.5 pb-0!"
            >
              <div className="grid grid-cols-2 gap-1">
                {pages.map((page) => {
                  const Icon = page.icon;
                  const isActive = activePathname === page.link;
                  return (
                    <Link href={page.link} onClick={closeMenu}>
                      <Button
                        key={page.value}
                        className={[
                          "group focus-visible:ring-primary/30 h-auto w-full justify-start gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm font-medium transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
                          isActive
                            ? "bg-primary/10 ring-primary/20 dark:bg-primary/15 dark:ring-primary/25 text-neutral-900 shadow-sm ring-1 dark:text-white"
                            : "bg-transparent text-neutral-700 hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white",
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "flex size-7 shrink-0 items-center justify-center rounded-lg ring-1 transition-all duration-150",
                            isActive
                              ? "bg-primary/15 ring-primary/25 dark:bg-primary/20 dark:ring-primary/30"
                              : "bg-neutral-100 ring-neutral-200/60 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/7 dark:ring-white/6 dark:group-hover:bg-white/15 dark:group-hover:ring-white/15",
                          ].join(" ")}
                        >
                          <Icon
                            className={[
                              "size-3.5 transition-all duration-150",
                              isActive
                                ? "text-primary"
                                : "text-neutral-500 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white",
                            ].join(" ")}
                          />
                        </div>
                        <span className="flex-1 truncate leading-snug">
                          {page.value.charAt(0).toUpperCase() +
                            page.value.slice(1)}
                        </span>
                        {isActive && (
                          <span className="relative flex size-2 shrink-0">
                            <span className="bg-primary/40 absolute inset-0 animate-ping rounded-full"></span>
                            <span className="bg-primary shadow-primary/50 relative size-2 rounded-full shadow-sm"></span>
                          </span>
                        )}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </CommandGroup>
            <CommandGroup
              heading={
                <div className="flex items-center gap-2">
                  <span>Connect</span>
                  <span className="h-px flex-1 bg-neutral-200 dark:bg-white/8" />
                </div>
              }
              className="px-2 pt-1.5 pb-0!"
            >
              <div className="grid grid-cols-3 gap-1">
                {/* connect items */}
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group focus-visible:ring-primary/30 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm text-neutral-700 transition-all duration-150 outline-none hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-1 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200/60 transition-all duration-150 group-hover:bg-white group-hover:shadow-sm group-hover:ring-neutral-300/60 dark:bg-white/[0.07] dark:ring-white/6 dark:group-hover:bg-white/15 dark:group-hover:ring-white/15">
                        <Icon className="size-3.5 text-neutral-500 transition-all duration-150 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white" />
                      </div>
                      <span className="flex-1 truncate leading-snug">
                        {social.value}
                      </span>
                      <ArrowUpRight className="size-3 shrink-0 text-neutral-500 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-600 dark:text-white/40 dark:group-hover:text-white/70" />
                    </a>
                  );
                })}
              </div>
            </CommandGroup>
          </CommandList>
        </Command>
      </DrawerContent>
    </Drawer>
  );
}

{
  /* <div
              aria-label="Search results"
              className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto pt-2 pb-1"
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
            </div> */
}
