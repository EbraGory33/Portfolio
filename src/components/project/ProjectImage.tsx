import Image from "next/image";
type ProjectImageProps = {
  src: string;
  alt: string;
};
export function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <div
      aria-label={alt}
      className="not-prose ring-border relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-300 ring-1 dark:bg-zinc-700"
      data-block-type="media"
      role="img"
    >
      <img
        alt={alt}
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        className="absolute inset-0 size-full object-cover"
        sizes="(max-width: 1400px) 100vw, 1366px"
        // srcSet="/_next/image?url=%2Fprojects%2Fkeythm%2Fscreen1.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fprojects%2Fkeythm%2Fscreen1.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fprojects%2Fkeythm%2Fscreen1.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fprojects%2Fkeythm%2Fscreen1.png&amp;w=1440&amp;q=75 1440w, /_next/image?url=%2Fprojects%2Fkeythm%2Fscreen1.png&amp;w=1920&amp;q=75 1920w"
        src={src}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: "0px",
          color: "transparent",
        }}
      />
    </div>
  );
}
