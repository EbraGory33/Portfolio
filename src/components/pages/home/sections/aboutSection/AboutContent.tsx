import { socials } from "@/lib/data";
export function AboutContent() {
  return (
    <div className="relative z-5 mx-auto flex max-w-130 flex-col gap-y-8 text-center text-base font-light tracking-wider text-black/80 lg:mx-0 lg:text-left lg:text-lg dark:text-neutral-300">
      <p>
        I&apos;m <strong>Ebrahim Gory</strong>, a software engineer who enjoys
        understanding how things work beneath the surface. I&apos;m especially
        curious about how data flows, how services communicate, and how
        different parts of a system come together to create reliable software.
      </p>
      <p>
        That curiosity drives the way I build. I enjoy working across the stack
        with technologies including React, Next.js, Node.js, Java, Python,
        Django, FastAPI, PostgreSQL, MongoDB, and Docker. More than any specific
        technology, I care about{" "}
        <strong>understanding how the pieces fit together</strong> and choosing
        the right tools for the problem.
      </p>
      <p>
        I approach every challenge with{" "}
        <strong>curiosity and persistence</strong>, treating what I don&apos;t
        know as an opportunity to learn. Right now, I&apos;m focused on growing
        as an engineer by exploring{" "}
        <strong>
          backend architecture, distributed systems, and scalable cloud
          applications
        </strong>
        .
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
