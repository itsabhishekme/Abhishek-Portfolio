"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`mb-16 flex flex-col ${alignment[align]} ${className}`}
    >
      {subtitle && (
        <span className="mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-400">
          {subtitle}
        </span>
      )}

      <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 120,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
        className="mt-5 h-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500"
      />

      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="mt-8 max-w-3xl text-lg leading-8 text-slate-300"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}