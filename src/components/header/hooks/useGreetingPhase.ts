"use client";
import { useEffect, useState } from "react";

type NavPhase = "greeting" | "ready";

export function useGreetingPhase() {
  const [phase, setPhase] = useState<NavPhase>("greeting");

  useEffect(() => {
    const readyTimer = window.setTimeout(() => {
      setPhase("ready");
    }, 5000);

    return () => {
      window.clearTimeout(readyTimer);
    };
  }, []);
  return phase;
}
