// TODO:
import Link from "next/link";
import { ProjectBackground, ProjectContent, PreviewImage } from ".";

interface ProjectFrameProps {
  id: string;
  image: string;
  description: string;
  background: string;
  layout: "mobile" | "desktop";
  slug: string;
}

export function ProjectFrame({
  id,
  image,
  description,
  background,
  layout,
  slug,
}: ProjectFrameProps) {
  return layout == "mobile" ? (
    <Link
      href={`/projects/${slug}`}
      className="group shadow-border relative block aspect-16/11 w-full cursor-pointer overflow-hidden rounded-2xl bg-white p-1 transition-transform duration-300 ease-in-out hover:-translate-y-2 sm:aspect-video md:aspect-16/10 lg:aspect-16/11 lg:rounded-3xl lg:p-2 dark:bg-white/6"
    >
      <div className="relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl bg-white from-black/20 to-black/45 transition-colors duration-300 hover:from-black/20 max-lg:pt-2 lg:rounded-2xl lg:from-black/35 dark:bg-black dark:bg-linear-to-b">
        <ProjectBackground background={background} />

        <ProjectContent description={description} layout={layout} />

        <PreviewImage id={id} image={image} />
      </div>
    </Link>
  ) : layout == "desktop" ? (
    <div
      // TODO: ClassNames
      className="relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl bg-white from-black/20 to-black/45 transition-colors duration-300 hover:from-black/20 max-lg:pt-2 lg:rounded-2xl lg:from-black/35 dark:bg-black dark:bg-linear-to-b"
      // className="relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl bg-white dark:bg-black"
    >
      <ProjectBackground background={background} />

      <ProjectContent description={description} layout={layout} />

      <PreviewImage id={id} image={image} />
    </div>
  ) : (
    <></>
  );
}
