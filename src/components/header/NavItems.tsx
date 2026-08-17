"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import {
  NavActiveIndicator,
  MoreMenuTrigger,
  ConnectButon,
} from "./components";
import { baseClasses, activeClasses, inactiveClasses } from "./constant";
import { primaryPages, morePages } from "@/lib/data";

export function NavItems() {
  const pathname = usePathname();
  const activePathname = `/${pathname.split("/")[1]}`;
  const navListRef = useRef<HTMLUListElement>(null);
  return (
    <div className="relative flex items-center">
      {navListRef && <NavActiveIndicator navListRef={navListRef} />}

      <ul ref={navListRef} className="relative flex items-center">
        {[...primaryPages].map((item) => (
          <li
            key={item.value}
            className="relative list-none"
            aria-current={activePathname === item.link ? "page" : undefined}
          >
            <Link
              href={item.link}
              className={[
                baseClasses,
                pathname === item.link ? activeClasses : inactiveClasses,
              ].join(" ")}
            >
              {item.label}
            </Link>
          </li>
        ))}

        <MoreMenuTrigger active={morePages.has(activePathname)} />
        <ConnectButon />
      </ul>
    </div>
  );
}
