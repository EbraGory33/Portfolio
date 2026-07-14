"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      //   className={cn(
      //     "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
      //     "focus:outlin-hidden"
      //   )}
      className="shadow-border relative mt-0.5 hidden size-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.22),0_3px_8px_-4px_rgba(0,0,0,0.08)] transition-all delay-0 duration-150 hover:text-neutral-900 active:scale-95 lg:inline-flex dark:bg-neutral-800/90 dark:text-white/85 dark:shadow-none dark:hover:text-white"
      type="button"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
