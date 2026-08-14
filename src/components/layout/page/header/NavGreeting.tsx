"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type Greeting = {
  icon: string;
  message: string;
};

function getGreeting(hour: number): Greeting {
  if (hour < 12) {
    return {
      icon: "☀️",
      message: "Good Morning",
    };
  }

  if (hour < 18) {
    return {
      icon: "☀️",
      message: "Good Afternoon",
    };
  }

  return {
    icon: "🌙",
    message: "Good Evening",
  };
}

export function NavGreeting() {
  const [greeting, setGreeting] = useState<Greeting | null>(null);

  useEffect(() => {
    setGreeting(getGreeting(new Date().getHours()));
  }, []);

  if (!greeting) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          aria-hidden="true"
          className="block h-5 w-28 animate-pulse rounded-full bg-neutral-900/8 dark:bg-white/10"
        />
      </div>
    );
  }

  return (
    <div
      className={[
        "absolute inset-0 flex items-center justify-center",
        "transition-[opacity,transform] duration-200 ease-out",
      ].join(" ")}
      style={{ opacity: 1, transform: "none" }}
    >
      <p
        aria-live="polite"
        className="flex items-center justify-center gap-2 px-2.5 py-1 text-sm font-medium whitespace-nowrap text-neutral-700 select-none dark:text-white/80"
      >
        <span aria-hidden="true">{greeting.icon}</span>
        <span>{greeting.message}</span>
      </p>
    </div>
  );
}

<div
  className={[
    "absolute inset-0 flex items-center justify-center",
    "transition-[opacity,transform] duration-200 ease-out",
    "translate-y-0 opacity-100",
  ].join(" ")}
></div>;
