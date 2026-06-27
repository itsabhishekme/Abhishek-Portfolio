"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const progress = useSpring(scrollProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      setScrollProgress(progress);

      setShowButton(scrollTop > 400);
    };

    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 2 * Math.PI * 26;

  return (
    <>
      {/* Top Progress Bar */}

      <motion.div
        className="fixed left-0 top-0 z-[9999] h-1 origin-left bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500"
        style={{
          scaleX: progress,
          width: "100%",
        }}
      />

      {/* Scroll To Top Button */}

      {showButton && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
          }}
          transition={{
            duration: 0.3,
          }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.92,
          }}
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 shadow-2xl ring-2 ring-blue-600 transition hover:bg-blue-600"
        >
          {/* Progress Circle */}

          <svg
            className="absolute h-16 w-16 -rotate-90"
            viewBox="0 0 60 60"
          >
            <circle
              cx="30"
              cy="30"
              r="26"
              stroke="#334155"
              strokeWidth="4"
              fill="none"
            />
            <motion.circle
              cx="30"
              cy="30"
              r="26"
              stroke="#3B82F6"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: circumference,
              }}
            />
          </svg>

          {/* Arrow */}

          <FaArrowUp className="relative z-10 text-white" />
        </motion.button>
      )}
    </>
  );
}
