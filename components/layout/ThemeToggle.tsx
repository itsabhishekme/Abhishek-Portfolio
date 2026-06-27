"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme");

    if (
      storedTheme === "light" ||
      storedTheme === "dark"
    ) {
      setTheme(storedTheme);

      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const defaultTheme = prefersDark ? "dark" : "light";

      setTheme(defaultTheme);

      if (defaultTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        rotate: 10,
      }}
      whileTap={{
        scale: 0.9,
      }}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-slate-700
        bg-slate-900
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:border-blue-500
        hover:bg-blue-600
        dark:bg-slate-900
        dark:text-white
      "
    >
      <motion.div
        key={theme}
        initial={{
          rotate: -180,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          rotate: 0,
          opacity: 1,
          scale: 1,
        }}
        exit={{
          rotate: 180,
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="text-xl"
      >
        {theme === "dark" ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-slate-800" />
        )}
      </motion.div>
    </motion.button>
  );
}
