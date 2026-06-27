"use client";

import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  text?: string;
  fullScreen?: boolean;
  overlay?: boolean;
}

export default function Loader({
  size = "md",
  text = "Loading...",
  fullScreen = false,
  overlay = false,
}: LoaderProps) {
  const spinnerSize = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
    xl: "text-8xl",
  };

  const textSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const containerClass = fullScreen
    ? "fixed inset-0 z-50 flex items-center justify-center"
    : "flex items-center justify-center py-20";

  return (
    <div
      className={`${containerClass} ${
        overlay
          ? "bg-slate-950/80 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Spinner */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 1,
          }}
          className={`${spinnerSize[size]} text-blue-500`}
        >
          <FaSpinner />
        </motion.div>

        {/* Pulsing Dots */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-3 w-3 rounded-full bg-cyan-400"
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className={`${textSize[size]} font-medium tracking-wide text-slate-300`}
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
}