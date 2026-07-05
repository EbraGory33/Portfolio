import { useEffect, useState } from "react";
const [theme, setTheme] = useState<"light" | "dark">("dark");

useEffect(() => {
  document.documentElement.className = theme;
  document.documentElement.style.colorScheme = theme;
}, [theme]);
