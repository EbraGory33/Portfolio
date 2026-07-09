import { ConnectButton } from ".";
import { CopyEmailButton } from ".";
export function HeroActions() {
  return (
    <div className="relative z-20 container mx-auto mb-8 flex w-full flex-col items-center justify-center gap-y-4 md:mb-14 md:gap-y-6">
      <div className="animate-fadeInUp fill-mode-[backwards] z-10 mt-4 flex flex-col items-center gap-4 [animation-delay:150ms] sm:flex-row">
        <ConnectButton />
        <CopyEmailButton />
      </div>
    </div>
  );
}
