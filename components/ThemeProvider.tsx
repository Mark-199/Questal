"use client";

import { useEffect, useState } from "react";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState("lemonade"); // default light theme

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const applyTheme = (dark: boolean) => {
      const themeName = dark ? "forest" : "lemonade";
      html.setAttribute("data-theme", themeName);
      body.setAttribute("data-theme", themeName);
      setTheme(themeName);
    };

    // Check system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    applyTheme(mediaQuery.matches);

    // Listen for changes in system theme
    const listener = (e: MediaQueryListEvent) => applyTheme(e.matches);
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
