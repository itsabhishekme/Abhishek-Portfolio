"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextProps {
  texts?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export default function AnimatedText({
  texts = [
    "DevOps Engineer",
    "QA Automation Engineer",
    "AWS Cloud Enthusiast",
    "Docker & Kubernetes Learner",
    "Playwright Expert",
    "Cypress Automation Engineer",
    "CI/CD Pipeline Builder",
    "Linux Enthusiast",
    "Open Source Learner",
  ],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = "",
}: AnimatedTextProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timer = setTimeout(() => {
          setDisplayText(current.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(current.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <div className={`flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -8,
          }}
          transition={{
            duration: 0.2,
          }}
          className="text-3xl font-bold text-blue-500 md:text-5xl"
        >
          {displayText}
        </motion.span>
      </AnimatePresence>

      {/* Cursor */}

      <motion.span
        animate={{
          opacity: [1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
        }}
        className="ml-1 text-3xl font-bold text-cyan-400 md:text-5xl"
      >
        |
      </motion.span>
    </div>
  );
}