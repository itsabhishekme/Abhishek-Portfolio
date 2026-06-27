"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

export interface BadgeProps {
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light"
    | "outline";

  size?: "sm" | "md" | "lg";

  rounded?: boolean;

  animate?: boolean;

  icon?: ReactNode;

  className?: string;

  onClick?: () => void;
}

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  rounded = true,
  animate = true,
  icon,
  className = "",
  onClick,
}: BadgeProps) {
  const variantClasses = {
    primary:
      "bg-blue-600 text-white border-blue-600",

    secondary:
      "bg-slate-700 text-white border-slate-700",

    success:
      "bg-emerald-600 text-white border-emerald-600",

    danger:
      "bg-red-600 text-white border-red-600",

    warning:
      "bg-amber-500 text-black border-amber-500",

    info:
      "bg-cyan-500 text-white border-cyan-500",

    dark:
      "bg-black text-white border-black",

    light:
      "bg-white text-black border-gray-300",

    outline:
      "bg-transparent text-blue-500 border-blue-500",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-xs",

    md: "px-4 py-2 text-sm",

    lg: "px-5 py-3 text-base",
  };

  const badge = (
    <span
      onClick={onClick}
      className={clsx(
        "inline-flex items-center gap-2",
        "border",
        "font-semibold",
        "transition-all duration-300",
        "select-none",
        "shadow-sm",
        "hover:shadow-lg",
        "cursor-pointer",
        rounded ? "rounded-full" : "rounded-lg",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {icon && <span>{icon}</span>}

      <span>{children}</span>
    </span>
  );

  if (!animate) {
    return badge;
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.2,
      }}
      className="inline-block"
    >
      {badge}
    </motion.div>
  );
}