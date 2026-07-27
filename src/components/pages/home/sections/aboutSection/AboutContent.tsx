import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export function AboutContent() {
  return (
    <div className="relative z-5 mx-auto flex max-w-130 flex-col gap-y-8 text-center text-base font-light tracking-wider text-black/80 lg:mx-0 lg:text-left lg:text-lg dark:text-neutral-300">
      <p>
        I'm Ebrahim Gory, a software engineer who loves building things and
        figuring out how they work. Whether it's React, Next.js, Django, or
        FastAPI, I'm happiest when I'm solving problems and turning ideas into
        products people enjoy using.
      </p>

      <p>
        What defines me most is persistence. I don't see "I don't know how" as a
        reason to stop—just a starting point. If I can't build it today, I'll
        learn what I need and come back tomorrow until I can.
      </p>

      <p>
        For me, software has always been about curiosity. Every project is a
        chance to learn something new, push my limits, and build something I'm
        proud of.
      </p>

      <div className="mx-auto -mt-4 flex w-fit -translate-x-3 gap-2 lg:mx-0">
        <a
          className="inline-flex min-h-11 min-w-11 items-center justify-center p-2.5 text-neutral-900 transition-colors hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100"
          href="https://linkedin.com/in/ebrahim-gory/"
          title="LinkedIn"
        >
          <span className="sr-only">LinkedIn</span>
          <FaLinkedin className="size-5" />
        </a>
        <a
          className="inline-flex min-h-11 min-w-11 items-center justify-center p-2.5 text-neutral-900 transition-colors hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100"
          href="https://github.com/ebragory33"
          title="GitHub"
        >
          <span className="sr-only">GitHub</span>
          <FaGithub className="size-5" />
        </a>
        <a
          className="inline-flex min-h-11 min-w-11 items-center justify-center p-2.5 text-neutral-900 transition-colors hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100"
          href="https://instagram.com/webstudios.dev/"
          title="X"
        >
          <span className="sr-only">Instagram</span>
          <FaInstagram className="size-5" />
        </a>
        <a
          className="inline-flex min-h-11 min-w-11 items-center justify-center p-2.5 text-neutral-900 transition-colors hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100"
          href="https://x.com/SWEbra24"
          title="X"
        >
          <span className="sr-only">X</span>
          <FaXTwitter className="size-5" />
        </a>
      </div>
    </div>
  );
}
