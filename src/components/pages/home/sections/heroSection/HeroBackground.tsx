export function HeadingBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 -z-1 h-96 w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-700/20 blur-3xl will-change-transform dark:bg-[#0b0218]"
    ></div>
  );
}
export function HeroBackground() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-56">
      <div aria-hidden="true" className="relative z-19 mt-4 h-60 w-full">
        <div className="absolute bottom-0 left-1/2 z-0 h-125 w-300 -translate-x-1/2 mask-[linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]">
          <div className="animate-hero-glow absolute bottom-40 left-1/2 h-28 w-200 -translate-x-1/2 overflow-hidden rounded-full blur-3xl will-change-[transform,opacity]">
            <div className="animate-hero-glow-shift h-full w-[300%] bg-[linear-gradient(90deg,#06b6d4,#7c3aed,#4f46e5,#38bdf8,#06b6d4,#7c3aed,#4f46e5,#38bdf8,#7c3aed)] will-change-transform"></div>
          </div>
          <div className="absolute -right-108 -bottom-188.25 -left-113.5 h-238.75 rounded-[100%] bg-linear-to-b from-indigo-500/40 to-transparent dark:from-white"></div>
          <div className="absolute -right-127.5 -bottom-189.75 -left-133 aspect-[2.346/1] h-239 rounded-[100%] bg-[#F3F2F8] shadow-[inset_0_2px_20px_#4f46e510,0_-10px_50px_1px_#4f46e520] dark:bg-black dark:shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]">
            <div className="animate-hero-glow-pulse absolute inset-0 rounded-[inherit] shadow-[inset_0_2px_30px_#4f46e530,0_-10px_60px_1px_#4f46e540] will-change-[opacity] dark:shadow-[inset_0_2px_30px_#fff,0_-10px_60px_1px_#ffffffa2]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
