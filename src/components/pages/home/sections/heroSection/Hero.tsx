"use client";
import {
  HeadingBackground,
  HeroActions,
  HeroBackground,
  HeroHeading,
  HeroIntro,
} from ".";

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="py-pagebuilder relative flex max-h-250 min-h-dvh w-full flex-col items-center justify-center overflow-hidden"
      id="hero-section"
    >
      <div className="relative z-20 container mx-auto mb-8 flex w-full flex-col items-center justify-center gap-y-4 md:mb-14 md:gap-y-6">
        <HeadingBackground />
        <HeroHeading />
        <HeroIntro />
        {/* Todo: Make HeroActions button functional */}
        <HeroActions />
        <button
          onClick={() => {
            throw new Error("Portfolio Sentry test");
          }}
        >
          Test Sentry
        </button>
      </div>
      <HeroBackground />
    </section>
  );
}
