"use client";

import { useState } from "react";
import { MenuContext } from "@/lib/hooks/useMenu";
import { Menu } from "@/components/menu";

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  const openMenu = () => {
    setExpanded((expanded) => !expanded);
  };

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <MenuContext.Provider
      value={{
        expanded,
        openMenu,
        closeMenu,
      }}
    >
      {children}

      <Menu />
    </MenuContext.Provider>
  );
}
