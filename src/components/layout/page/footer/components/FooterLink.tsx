import { ArrowRight } from "lucide-react";

interface NavLinkProps {
  name: string;
  link: string;
}
export function FooterLink({ name, link }: NavLinkProps) {
  return (
    <li key={name} className="">
      <a
        className="group relative inline-flex items-center px-2 before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:z-1 before:h-0 before:w-full before:origin-center before:bg-white before:mix-blend-difference before:transition-[height] before:duration-300 before:ease-in-out before:content-[''] hover:before:h-[1.4em]"
        href={link}
      >
        {name}
        {/* className="z-0 ml-[0.6em] size-[0.55em] translate-y-1 opacity-0 transition-all duration-300 [motion-reduce:transition-none] group-hover:translate-y-0 group-hover:rotate-45 group-hover:opacity-100" */}
        <ArrowRight className="z-0 ml-[0.6em] size-[0.55em] translate-y-1 opacity-0 transition-all duration-300 [motion-reduce:transition-none] group-hover:translate-y-0 group-hover:rotate-45 group-hover:opacity-100" />
      </a>
    </li>
  );
}
