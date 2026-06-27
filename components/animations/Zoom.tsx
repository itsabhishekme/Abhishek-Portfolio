"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ZoomProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  scale?: number;
  once?: boolean;
}

const zoomVariants: Variants = {
  hidden: (scale: number) => ({
    opacity: 0,
    scale,
  }),

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Zoom({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  scale = 0.8,
  once = true,
}: ZoomProps) {
  return (
    <motion.div
      className={className}
      custom={scale}
      variants={zoomVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}