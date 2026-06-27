"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section" | "main" | "article";
  animate?: boolean;
  fluid?: boolean;
}

export default function Container({
  children,
  className = "",
  id,
  as = "section",
  animate = false,
  fluid = false,
}: ContainerProps) {
  const baseClasses = clsx(
    "mx-auto w-full",
    fluid ? "max-w-full px-4 sm:px-6 lg:px-8" : "max-w-7xl px-6 lg:px-8",
    className
  );

  if (animate) {
    return (
      <motion.div
        id={id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={baseClasses}
      >
        {children}
      </motion.div>
    );
  }

  switch (as) {
    case "main":
      return (
        <main id={id} className={baseClasses}>
          {children}
        </main>
      );

    case "article":
      return (
        <article id={id} className={baseClasses}>
          {children}
        </article>
      );

    case "div":
      return (
        <div id={id} className={baseClasses}>
          {children}
        </div>
      );

    default:
      return (
        <section id={id} className={baseClasses}>
          {children}
        </section>
      );
  }
}