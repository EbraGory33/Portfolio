"use client";

import { useState } from "react";
import { Menu } from "@/components/menu";
import { MenuContext } from "@/lib/hooks/useMenu";

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded((expanded) => !expanded);
  };

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <MenuContext.Provider
      value={{
        expanded,
        toggleMenu,
        closeMenu,
      }}
    >
      {children}

      {expanded && <Menu />}
    </MenuContext.Provider>
  );
}
