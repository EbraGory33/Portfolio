import { socials } from "@/lib/data";
export function AboutContent() {
  return (
    <div className="relative z-5 mx-auto flex max-w-130 flex-col gap-y-8 text-center text-base font-light tracking-wider text-black/80 lg:mx-0 lg:text-left lg:text-lg dark:text-neutral-300">
      <p>
        I&apos;m Ebrahim Gory, a software engineer who loves building things and
        figuring out how they work. Whether it&apos;s React, Next.js, Django, or
        FastAPI, I&apos;m happiest when I&apos;m solving problems and turning
        ideas into products people enjoy using.
      </p>

      <p>
        What defines me most is persistence. I don&apos;t see &quot;I don&apos;t
        know how&quot; as a reason to stop—just a starting point. If I
        can&apos;t build it today, I&apos;ll learn what I need and come back
        tomorrow until I can.
      </p>

      <p>
        For me, software has always been about curiosity. Every project is a
        chance to learn something new, push my limits, and build something
        I&apos;m proud of.
      </p>

      <div className="mx-auto -mt-4 flex w-fit -translate-x-3 gap-2 lg:mx-0">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={`about-${social.value}`}
              className="inline-flex min-h-11 min-w-11 items-center justify-center p-2.5 text-neutral-900 transition-colors hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100"
              href={social.link}
              title="LinkedIn"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="sr-only">{social.label}</span>
              <Icon className="size-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
