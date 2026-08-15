"use client";

import { createContext, useContext } from "react";

export type MenuContextValue = {
  expanded: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

export const MenuContext = createContext<MenuContextValue | null>(null);

export function useMenu() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenu must be used inside MenuProvider");
  }

  return context;
}
