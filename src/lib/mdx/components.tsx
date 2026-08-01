import type { ComponentPropsWithoutRef } from "react";
import {
  ProjectParagraph,
  ProjectImage,
  ProjectCode,
  ProjectCallout,
  ProjectHeading,
  ProjectList,
  ProjectListItem,
  ProjectTable,
  ProjectTableHead,
  ProjectTableBody,
  ProjectTableRow,
  ProjectTableCell,
  ProjectLink,
  ProjectDivider,
  ProjectInlineCode,
} from "@/components/project";
import { createCapture } from "./create-capture";

// export const titleCapture = createCapture();
// export const subtitleCapture = createCapture();
// export const descriptionCapture = createCapture();

export const mdxComponents = {
  ProjectHeading,
  //   h2: ProjectHeading,
  h2: ({ children }: ComponentPropsWithoutRef<"h2">) => (
    <ProjectHeading>{children}</ProjectHeading>
  ),

  hr: ProjectDivider,
  // First MDX h1 becomes the hero title
  // h1: () => null,
  //   h1: titleCapture.Component,
  // First blockquote becomes subtitle
  //   blockquote: subtitleCapture.Component,
  //   blockquote: () => null,
  // First paragraph becomes description
  //   p: descriptionCapture.Component,
  //   // Headings
  //   h1: ProjectTitle,
  //   h2: ProjectHeading,
  //   h3: (props) => <ProjectHeading level={3} {...props} />,
  //   h4: (props) => <ProjectHeading level={4} {...props} />,
  //   // Text
  //   p: ProjectParagraph,
  //   strong: (props) => <strong className="font-semibold" {...props} />,
  //   em: (props) => <em className="italic" {...props} />,
  //   // Links
  //   a: ProjectLink,
  //   // Images
  //   img: ProjectImage,
  //   // Code
  //   pre: ProjectCode,
  //   code: ProjectInlineCode,
  //   // Quotes / Callouts
  //   blockquote: ProjectCallout,
  //   // Lists
  //   ul: ProjectList,
  //   ol: (props) => <ProjectList ordered {...props} />,
  //   li: ProjectListItem,
  //   // Tables
  //   table: ProjectTable,
  //   thead: ProjectTableHead,
  //   tbody: ProjectTableBody,
  //   tr: ProjectTableRow,
  //   td: ProjectTableCell,
  //   th: ProjectTableCell,
  //   // Misc
  //   hr: ProjectDivider,
};

const div = (
  <article>
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="px-4 pt-8 md:px-6 lg:col-span-3 lg:py-16">
          <div className="sticky top-32 space-y-2">
            <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-600">
              01
            </span>
            <h2 className="font-bluu text-2xl tracking-wider text-neutral-900 dark:text-white">
              Why I Built This
            </h2>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="hidden border-x border-dashed lg:col-span-1 lg:block"
        ></div>
        <div className="px-4 py-8 md:px-6 lg:col-span-8 lg:py-16">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              Every typing test I used got the basics right and stopped there.
              Monkeytype is feature-complete but heavy. Most alternatives show
              you a WPM number and call it a day — no sound, no personality, no
              breakdown of what actually happened during the test.
            </p>
            <p>
              I wanted typing to feel physical in the browser. I use mechanical
              keyboards daily, and the disconnect between pressing a real switch
              and hearing silence in a web app always bothered me. Not a generic
              click — actual per-key audio, so pressing{" "}
              <code className="rounded-sm bg-neutral-200 px-1.5 py-0.5 font-mono font-normal text-zinc-700 before:content-none after:content-none in-data-mdx-link:text-blue-600 dark:bg-neutral-800 dark:text-zinc-300 dark:in-data-mdx-link:text-blue-400">
                Q
              </code>{" "}
              sounds different from pressing{" "}
              <code className="rounded-sm bg-neutral-200 px-1.5 py-0.5 font-mono font-normal text-zinc-700 before:content-none after:content-none in-data-mdx-link:text-blue-600 dark:bg-neutral-800 dark:text-zinc-300 dark:in-data-mdx-link:text-blue-400">
                Enter
              </code>
              . That one constraint shaped every technical decision that
              followed.
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="flex w-full flex-col gap-4">
        <div className="border-t"></div>
        <div className="border-t"></div>
      </div>
      <div
        aria-label="Keythm typing test interface with virtual keyboard"
        className="not-prose ring-border relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-300 ring-1 dark:bg-zinc-700"
        data-block-type="media"
        role="img"
      >
        <img
          alt="Keythm typing test interface with virtual keyboard"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="absolute inset-0 size-full object-cover"
          sizes="(max-width: 1400px) 100vw, 1366px"
          srcSet="/_next/image?url=%2Fprojects%2Fkeythm%2Fscreen1.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fprojects%2Fkeythm%2Fscreen1.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fprojects%2Fkeythm%2Fscreen1.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fprojects%2Fkeythm%2Fscreen1.png&amp;w=1440&amp;q=75 1440w, /_next/image?url=%2Fprojects%2Fkeythm%2Fscreen1.png&amp;w=1920&amp;q=75 1920w"
          src="./Keythm - Aayush Bharti_files/screen1.png"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            color: "transparent",
          }}
        />
      </div>
      <div aria-hidden="true" className="flex w-full flex-col gap-4">
        <div className="border-t"></div>
        <div className="border-t"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="px-4 pt-8 md:px-6 lg:col-span-3 lg:py-16">
          <div className="sticky top-32 space-y-2">
            <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-600">
              02
            </span>
            <h2 className="font-bluu text-2xl tracking-wider text-neutral-900 dark:text-white">
              Sound System
            </h2>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="hidden border-x border-dashed lg:col-span-1 lg:block"
        ></div>
        <div className="px-4 py-8 md:px-6 lg:col-span-8 lg:py-16">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              Sound is the whole reason Keythm exists, so it had to be
              indistinguishable from real keystrokes — and fast enough that
              you'd never notice it wasn't.
            </p>
            <p>
              The entire library lives in a{" "}
              <strong>single 1.9MB OGG sprite</strong>: ~80 key samples packed
              into one file, each mapped to a{" "}
              <code className="rounded-sm bg-neutral-200 px-1.5 py-0.5 font-mono font-normal text-zinc-700 before:content-none after:content-none in-data-mdx-link:text-blue-600 dark:bg-neutral-800 dark:text-zinc-300 dark:in-data-mdx-link:text-blue-400">
                [startMs, durationMs]
              </code>{" "}
              tuple for both the "down" and "up" phase. On first load, the
              sprite gets fetched and decoded into an AudioBuffer at module
              import time — before any component mounts. When you press a key,{" "}
              <code className="rounded-sm bg-neutral-200 px-1.5 py-0.5 font-mono font-normal text-zinc-700 before:content-none after:content-none in-data-mdx-link:text-blue-600 dark:bg-neutral-800 dark:text-zinc-300 dark:in-data-mdx-link:text-blue-400">
                BufferSource.start(0, offset, duration)
              </code>{" "}
              slices the right sample on demand. One HTTP request, one decode,
              and latency that stays under a single frame.
            </p>
            <p>
              The part that took the most debugging was browser restrictions.
              Modern browsers suspend new AudioContexts until the user interacts
              with the page (thanks, autoplay policies). Keythm listens for the
              first{" "}
              <code className="rounded-sm bg-neutral-200 px-1.5 py-0.5 font-mono font-normal text-zinc-700 before:content-none after:content-none in-data-mdx-link:text-blue-600 dark:bg-neutral-800 dark:text-zinc-300 dark:in-data-mdx-link:text-blue-400">
                keydown
              </code>{" "}
              or{" "}
              <code className="rounded-sm bg-neutral-200 px-1.5 py-0.5 font-mono font-normal text-zinc-700 before:content-none after:content-none in-data-mdx-link:text-blue-600 dark:bg-neutral-800 dark:text-zinc-300 dark:in-data-mdx-link:text-blue-400">
                pointerdown
              </code>{" "}
              on the document and resumes the context immediately — so the audio
              pipeline is warm by the time you actually start typing. There's
              also a{" "}
              <code className="rounded-sm bg-neutral-200 px-1.5 py-0.5 font-mono font-normal text-zinc-700 before:content-none after:content-none in-data-mdx-link:text-blue-600 dark:bg-neutral-800 dark:text-zinc-300 dark:in-data-mdx-link:text-blue-400">
                modifiersDownRef
              </code>{" "}
              to track held modifier keys, because macOS has a lovely habit of
              swallowing keyup events after Cmd chords.
            </p>
            <p>
              And then there's "faah mode" — an Easter egg that plays a dramatic
              sound effect on wrong keys. It uses a plain HTML Audio element
              because, honestly, it doesn't need the precision of the sprite
              system.
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="flex w-full flex-col gap-4">
        <div className="border-t"></div>
        <div className="border-t"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="px-4 pt-8 md:px-6 lg:col-span-3 lg:py-16">
          <div className="sticky top-32 space-y-2">
            <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-600">
              03
            </span>
            <h2 className="font-bluu text-2xl tracking-wider text-neutral-900 dark:text-white">
              Typing Engine &amp; Results
            </h2>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="hidden border-x border-dashed lg:col-span-1 lg:block"
        ></div>
        <div className="px-4 py-8 md:px-6 lg:col-span-8 lg:py-16">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              The core hook —{" "}
              <code className="rounded-sm bg-neutral-200 px-1.5 py-0.5 font-mono font-normal text-zinc-700 before:content-none after:content-none in-data-mdx-link:text-blue-600 dark:bg-neutral-800 dark:text-zinc-300 dark:in-data-mdx-link:text-blue-400">
                useTypingTest
              </code>{" "}
              — manages the full lifecycle across four modes:{" "}
              <strong>timed</strong> (15–120s), <strong>word count</strong>{" "}
              (10–100), <strong>curated quotes</strong> (filtered by length),
              and <strong>zen</strong> (unlimited, Shift+Enter to end).
            </p>
            <p>
              Every second, the engine snapshots WPM, raw WPM, and error count.
              Those snapshots drive three things: the live stats overlay while
              you type, the WPM-over-time chart on the results screen, and the
              consistency score (100 minus the coefficient of variation of
              per-second WPMs — high consistency means steady rhythm, low means
              erratic bursts).
            </p>
            <p>
              Results give you six metrics: WPM, raw WPM, accuracy, consistency,
              elapsed time, and a character-level breakdown (correct, incorrect,
              extra, missed, corrected). The Recharts graph shows exactly where
              you sped up, lost focus, or hit a wall. Score 100+ WPM and
              confetti fires — tuned to feel celebratory without being annoying.
            </p>
            <p>
              <strong>Anti-cheat</strong> was more interesting than I expected.
              Simple threshold checks — WPM above 300, raw above 350, more than
              30 chars/sec — catch the obvious bots. But the interesting cheats
              are scripts that type at 120 WPM with inhuman consistency.
              Catching those required statistical analysis: flat WPM history
              (every second within 1 WPM of every other), perfect consistency at
              high speed, impossible single-second bursts above 600 WPM, and AFK
              gaps mid-test. All 13 checks only activate above 80 WPM —
              slow-but-steady typists shouldn't get flagged for being
              consistent.
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="flex w-full flex-col gap-4">
        <div className="border-t"></div>
        <div className="border-t"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="px-4 pt-8 md:px-6 lg:col-span-3 lg:py-16">
          <div className="sticky top-32 space-y-2">
            <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-600">
              04
            </span>
            <h2 className="font-bluu text-2xl tracking-wider text-neutral-900 dark:text-white">
              Key Decisions
            </h2>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="hidden border-x border-dashed lg:col-span-1 lg:block"
        ></div>
        <div className="px-4 py-8 md:px-6 lg:col-span-8 lg:py-16">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h3
              className="group scroll-mt-24"
              id="single-sprite-over-80-audio-files"
            >
              <a
                className="no-underline"
                href="https://aayushbharti.in/projects/keythm#single-sprite-over-80-audio-files"
              >
                Single sprite over 80+ audio files
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="ml-1.5 inline size-4 text-neutral-400 opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100 dark:text-neutral-600"
                >
                  <path
                    d="M165.82,96l-11.64,64h-64l11.64-64Z"
                    opacity="0.2"
                  ></path>
                  <path d="M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z"></path>
                </svg>
              </a>
            </h3>
            <p>
              The alternative was individual files per key — 80+ HTTP requests
              (or a bundling step that would need its own maintenance), 80+
              decode calls, and cache invalidation headaches. A single sprite
              with offset tuples keeps the entire sound system in one fetch and
              a lookup table. The tradeoff is manual offset mapping, but that's
              a one-time cost paid once during development.
            </p>
            <h3
              className="group scroll-mt-24"
              id="localstorage-first-server-optional"
            >
              <a
                className="no-underline"
                href="https://aayushbharti.in/projects/keythm#localstorage-first-server-optional"
              >
                localStorage-first, server-optional
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="ml-1.5 inline size-4 text-neutral-400 opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100 dark:text-neutral-600"
                >
                  <path
                    d="M165.82,96l-11.64,64h-64l11.64-64Z"
                    opacity="0.2"
                  ></path>
                  <path d="M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z"></path>
                </svg>
              </a>
            </h3>
            <p>
              All settings, personal bests, and preferences persist to
              localStorage with a{" "}
              <code className="rounded-sm bg-neutral-200 px-1.5 py-0.5 font-mono font-normal text-zinc-700 before:content-none after:content-none in-data-mdx-link:text-blue-600 dark:bg-neutral-800 dark:text-zinc-300 dark:in-data-mdx-link:text-blue-400">
                tc-
              </code>{" "}
              prefix. No auth, no round-trips. Combined with Serwist's
              precaching, the app works fully offline after the first visit.
              Drizzle + LibSQL is wired up for future aggregate features
              (leaderboards, distribution curves), but nothing in the core
              experience depends on it. If the server is unreachable, nothing
              breaks — you just don't get global stats.
            </p>
            <h3
              className="group scroll-mt-24"
              id="blocking-script-for-theme-hydration"
            >
              <a
                className="no-underline"
                href="https://aayushbharti.in/projects/keythm#blocking-script-for-theme-hydration"
              >
                Blocking script for theme hydration
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="ml-1.5 inline size-4 text-neutral-400 opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100 dark:text-neutral-600"
                >
                  <path
                    d="M165.82,96l-11.64,64h-64l11.64-64Z"
                    opacity="0.2"
                  ></path>
                  <path d="M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z"></path>
                </svg>
              </a>
            </h3>
            <p>
              A tiny inline script in{" "}
              <code className="rounded-sm bg-neutral-200 px-1.5 py-0.5 font-mono font-normal text-zinc-700 before:content-none after:content-none in-data-mdx-link:text-blue-600 dark:bg-neutral-800 dark:text-zinc-300 dark:in-data-mdx-link:text-blue-400">
                &lt;head&gt;
              </code>{" "}
              reads the accent color from localStorage before the first paint.
              Every React app with persisted themes has the same
              flash-of-wrong-color problem; this solves it by running before
              hydration. The page loads with correct colors from the first
              frame.
            </p>
            <h3
              className="group scroll-mt-24"
              id="intersectionobserver-gating-on-the-keyboard"
            >
              <a
                className="no-underline"
                href="https://aayushbharti.in/projects/keythm#intersectionobserver-gating-on-the-keyboard"
              >
                IntersectionObserver gating on the keyboard
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="ml-1.5 inline size-4 text-neutral-400 opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100 dark:text-neutral-600"
                >
                  <path
                    d="M165.82,96l-11.64,64h-64l11.64-64Z"
                    opacity="0.2"
                  ></path>
                  <path d="M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z"></path>
                </svg>
              </a>
            </h3>
            <p>
              The virtual keyboard renders a full QWERTY layout with
              spring-animated keys (stiffness: 700, damping: 38). That's a lot
              of event listeners and DOM work. An IntersectionObserver at 10%
              threshold detaches physical key listeners when the keyboard
              scrolls out of view. No wasted work, no frame drops on the typing
              input above it.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="px-4 pt-8 md:px-6 lg:col-span-3 lg:py-16">
          <div className="sticky top-32 space-y-2">
            <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-600">
              05
            </span>
            <h2 className="font-bluu text-2xl tracking-wider text-neutral-900 dark:text-white">
              What I Learned
            </h2>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="hidden border-x border-dashed lg:col-span-1 lg:block"
        ></div>
        <div className="px-4 py-8 md:px-6 lg:col-span-8 lg:py-16">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              <strong>Sound is the hardest kind of UX polish.</strong> Visual
              feedback is forgiving — a 50ms delay on a hover state is
              invisible. Audio feedback at 50ms delay feels broken. The entire
              sound pipeline (eager fetch, pre-decode, sprite slicing) exists to
              keep latency under one frame. The gap between "has sound" and
              "sounds right" is an order of magnitude of engineering effort.
            </p>
            <p>
              <strong>
                Anti-cheat is adversarial thinking, not validation.
              </strong>{" "}
              Threshold checks are table stakes. The interesting problem is
              detecting a script that types at 120 WPM with near-perfect
              consistency — plausible speed, inhuman steadiness. Solving that
              required statistical analysis of the WPM distribution, not bounds
              checking on the final number. Calibrating thresholds to avoid
              false positives on legitimate fast typists was the hardest part.
            </p>
            <p>
              <strong>Offline-first is a forcing function.</strong> Once you
              commit to "works without a connection," you stop reaching for
              server state by default. Settings become localStorage. Preferences
              become client-side. The server becomes optional infrastructure for
              features that genuinely need it. That constraint produced a
              simpler, faster app than "add offline support later" ever would
              have.
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="w-full border-t"></div>
    </div>
  </article>
);
