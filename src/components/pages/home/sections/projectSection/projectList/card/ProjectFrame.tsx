// TODO:
import { ProjectBackground, ProjectContent, ProjectImage } from ".";

interface ProjectFrameProps {
  id: string;
  image: string;
  description: string;
  background: string;
}

export function ProjectFrame({
  id,
  image,
  description,
  background,
}: ProjectFrameProps) {
  return (
    <div
      // TODO: ClassNames
      className="relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl bg-white from-black/20 to-black/45 transition-colors duration-300 hover:from-black/20 max-lg:pt-2 lg:rounded-2xl lg:from-black/35 dark:bg-black dark:bg-linear-to-b"
      // className="relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl bg-white dark:bg-black"
    >
      <ProjectBackground background={background} />

      <ProjectContent description={description} />

      <ProjectImage id={id} image={image} />
    </div>
  );
}
