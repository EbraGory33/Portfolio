"use client";

import { useEffect, useState } from "react";

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

function NavGreeting() {
  const [greeting, setGreeting] = useState<Greeting | null>(null);

  useEffect(() => {
    setGreeting(getGreeting(new Date().getHours()));
  }, []);

  if (!greeting) {
    return (
      <span
        aria-hidden="true"
        className="block h-5 w-28 animate-pulse rounded-full bg-neutral-900/8 dark:bg-white/10"
      />
    );
  }

  return (
    <p
      aria-live="polite"
      className="flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap text-neutral-700 dark:text-white/80"
    >
      <span aria-hidden="true">{greeting.icon}</span>
      <span>{greeting.message}</span>
    </p>
  );
}

export { NavGreeting };
