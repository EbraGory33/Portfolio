// Todo:
interface ProjectBackgroundProp {
  background: string;
}
export function ProjectBackground({ background }: ProjectBackgroundProp) {
  return (
    <>
      {/* Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 transition-[transform,filter] duration-500 ease-in-out group-hover:scale-105 lg:brightness-95 lg:saturate-90 lg:group-hover:brightness-110 lg:group-hover:saturate-125"
        style={{ background: background }}
      ></div>

      {/* Border Shine */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 hidden h-px bg-[linear-gradient(90deg,transparent_20%,white_50%,transparent_80%)] opacity-70 dark:block"
      />
    </>
  );
}
