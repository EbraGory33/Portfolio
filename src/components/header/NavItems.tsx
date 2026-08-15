"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import {
  NavActiveIndicator,
  MoreMenuTrigger,
  ConnectButon,
} from "./components";
import {
  navItems,
  baseClasses,
  activeClasses,
  inactiveClasses,
} from "./constant";

export function NavItems() {
  const pathname = usePathname();
  const navListRef = useRef<HTMLUListElement>(null);

  return (
    <div className="relative flex items-center">
      {navListRef && <NavActiveIndicator navListRef={navListRef} />}

      <ul ref={navListRef} className="relative flex items-center">
        {navItems.map((item) => (
          <li
            key={item.href}
            className="relative list-none"
            data-nav-id={item.href}
          >
            <Link
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={[
                baseClasses,
                pathname === item.href ? activeClasses : inactiveClasses,
              ].join(" ")}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <MoreMenuTrigger />
        <ConnectButon />
      </ul>
    </div>
  );
}
