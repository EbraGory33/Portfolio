import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

function CardOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 rounded-xl bg-linear-to-br from-transparent via-transparent to-indigo-400/20 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 dark:to-white/5"></div>
  );
}
// TODO: Make it only a div
type BentoCardProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export function BentoCard<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: BentoCardProps<T>) {
  const Component = as || "div";

  return (
    <Component
      // className={cn(
      //   "group bg-surface dark:bg-card/15 dark:hover:bg-card/5 ring-border relative flex w-full flex-col justify-between overflow-hidden rounded-xl ring-1 transition-colors duration-300 hover:bg-white",
      //   className,
      // )}
      className={cn(
        "group bg-surface dark:bg-card/15 dark:hover:bg-card/5 ring-border relative flex h-full min-h-72 w-full flex-col justify-between overflow-hidden rounded-xl ring-1 transition-colors duration-300 hover:bg-white",
        className,
      )}
      {...props}
    >
      <CardOverlay />
      {children}
    </Component>
  );
}

{
  //   //Selective button
  //   <div class="absolute right-4 bottom-4 z-20 flex size-9 -translate-y-2 items-center justify-center rounded-2xl border-dashed bg-black/10 opacity-100 transition-all duration-300 ease-out max-md:border md:translate-y-0 md:opacity-0 md:group-hover:-translate-y-2 md:group-hover:opacity-100 dark:bg-white/10">
  //     <svg
  //       fill="none"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       width="24"
  //       xmlns="http://www.w3.org/2000/svg"
  //       class="size-[18px] text-neutral-700 dark:text-neutral-200"
  //     >
  //       <path
  //         d="M18.5 12L4.99997 12"
  //         stroke="currentColor"
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //         stroke-width="1.5"
  //       ></path>
  //       <path
  //         d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"
  //         stroke="currentColor"
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //         stroke-width="1.5"
  //       ></path>
  //     </svg>
  //   </div>;
}
