"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const handleChange = () => {
    if (theme === "system") {
      setTheme(resolvedTheme === "light" ? "dark" : "light");
    } else {
      setTheme(resolvedTheme === "light" ? "dark" : "light");
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isDark}
        onChange={handleChange}
        className="sr-only peer"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        title={`Currently ${resolvedTheme} mode. Click to switch to ${
          isDark ? "light" : "dark"
        } mode.`}
      />
      <div className="group peer ring-0 bg-primary rounded-full outline-none duration-300 after:duration-300 w-12 h-6 shadow peer-checked:bg-white/50 peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-4 after:w-4 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-5 peer-hover:after:scale-95">
        {/* Dark icon */}
        <Sun className="absolute top-1 left-6 stroke-white dark:stroke-black w-4 h-4" />

        {/* Light icon */}
        <Moon className="absolute top-1 left-1 stroke-white dark:stroke-black w-4 h-4" />
      </div>
    </label>
  );
}
