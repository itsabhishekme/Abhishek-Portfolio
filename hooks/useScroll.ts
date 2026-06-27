"use client";

import { useEffect, useState } from "react";

interface ScrollState {
  scrollY: number;
  scrollX: number;
  scrollDirection: "up" | "down";
  scrollProgress: number;
  isAtTop: boolean;
  isAtBottom: boolean;
}

export default function useScroll(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollX: 0,
    scrollDirection: "down",
    scrollProgress: 0,
    isAtTop: true,
    isAtBottom: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollProgress =
        documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0;

      const isAtTop = scrollY <= 0;

      const isAtBottom =
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 2;

      const scrollDirection =
        scrollY > lastScrollY ? "down" : "up";

      lastScrollY = scrollY;

      setScrollState({
        scrollY,
        scrollX,
        scrollDirection,
        scrollProgress,
        isAtTop,
        isAtBottom,
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return scrollState;
}