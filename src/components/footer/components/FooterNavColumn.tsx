import { primaryPages } from "@/lib/data";
import { FooterLink } from ".";

const links = {
  General: primaryPages.map((page) => ({
    name: page.label,
    href: page.link,
  })),

  // Specifics: [
  //   { name: "Guest Book", href: "/" },
  //   { name: "Bucket List", href: "/" },
  //   { name: "Uses", href: "/" },
  //   { name: "Attribution", href: "/" },
  // ],
  // More: [
  //   { name: "Book a call", href: "/" },
  //   { name: "Links", href: "/" },
  //   { name: "RSS", href: "/" },
  //   { name: "Privacy", href: "/" },
  //   { name: "Terms", href: "/" },
  // ],
};

interface NavColumnProps {
  column: keyof typeof links;
}

export function FooterNavColumn({ column }: NavColumnProps) {
  return (
    <>
      <div className="flex flex-col gap-2 sm:gap-4">
        <h4 className="px-2 font-mono text-xs text-neutral-700 uppercase dark:text-neutral-400">
          {column}
        </h4>
        <ul className="flex flex-col flex-wrap items-start gap-x-4 gap-y-2 text-base sm:gap-y-3 dark:text-neutral-50">
          {links[column].map((link) => (
            <FooterLink key={link.href} name={link.name} link={link.href} />
          ))}
        </ul>
      </div>
    </>
  );
}
