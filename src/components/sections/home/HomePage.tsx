import { Hero, Body } from ".";
import { Divider } from "@/components/layout";

export function HomePage() {
  return (
    <>
      <Hero />
      <div className="relative container flex flex-col max-sm:px-1">
        <div className="grid flex-1 grid-cols-[12px_1fr_12px] lg:grid-cols-[32px_1fr_32px]">
          <Divider />
          <Body />
          <Divider />
        </div>
      </div>
    </>
  );
}
