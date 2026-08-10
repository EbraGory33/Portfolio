import Image from "next/image";
// Todo:
// import Link from "next/link";

import { CardFooter } from "@/components/cards";
import { BentoCard } from "@/components/layout";

function Graphic() {
  return (
    <div className="size-full">
      <div
        aria-hidden="true"
        className="absolute flex h-75 w-full flex-col overflow-hidden max-sm:bottom-2"
      >
        <div className="relative size-full mask-[linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]">
          <span className="absolute top-2.5 left-1/2 -translate-x-1/2">
            <div className="relative mt-9">
              <svg
                className="mx-auto"
                fill="none"
                height="148"
                viewBox="0 0 148 148"
                width="148"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-surface"
                  height="116"
                  rx="58"
                  width="116"
                  x="16"
                  y="16"
                ></rect>
                <rect
                  className="stroke-neutral-300 transition-colors delay-200 duration-500 group-hover:stroke-indigo-400 dark:stroke-neutral-700 dark:group-hover:stroke-indigo-400"
                  height="114.5"
                  rx="57.25"
                  strokeWidth="1.5"
                  width="114.5"
                  x="16.75"
                  y="16.75"
                ></rect>
              </svg>
              <Image
                // TODO:
                src="/NothingYet"
                alt="Ebrahim Gory"
                width={96}
                height={96}
                className="absolute top-1/2 left-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neutral-200 transition-colors delay-100 duration-500 group-hover:border-indigo-400 dark:border-neutral-800"
              />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
export function AboutMeCard() {
  return (
    <BentoCard>
      <Graphic />
      <CardFooter
        title="MY JOURNEY"
        description="Building products through continuous learning."
        align="center"
      />
    </BentoCard>
  );
}
