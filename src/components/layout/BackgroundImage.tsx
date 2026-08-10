import Image from "next/image";

interface ImageProps {
  image: string;
  alt: string;
}

export function BackgroundImage({ image, alt }: ImageProps) {
  return (
    <div
      className="absolute inset-0 z-[-1] h-112.5 w-full overflow-hidden bg-neutral-100/70 dark:bg-neutral-950/90"
      style={{
        maskImage: "linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%)",
        opacity: 1,
      }}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="pointer-events-none absolute inset-0 -z-10 h-112.5 w-full object-cover mix-blend-overlay select-none"
      />
    </div>
  );
}
