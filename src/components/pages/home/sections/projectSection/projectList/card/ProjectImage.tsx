// Todo:
import Image from "next/image";
interface ProjectImageProps {
  id: string;
  image: string;
}
export function ProjectImage({ id, image }: ProjectImageProps) {
  return (
    <div className="absolute top-14 right-0 left-0 z-10 flex w-full flex-col items-center justify-center md:top-20 lg:top-28">
      {/* TODO: Implement other image transitions */}
      <Image
        src={image}
        alt={id}
        width={3195}
        height={2091}
        priority
        className="h-auto w-full max-w-[85%] translate-y-5 rotate-1 rounded-t-sm border-2 border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.4),0_15px_50px_-5px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out lg:block lg:rotate-0 lg:border-3 lg:group-hover:transform-[perspective(1200px)_rotateX(-5deg)_translateY(-0.25rem)_rotate(1deg)_scale(1.05)]"
      />
    </div>
  );
}
