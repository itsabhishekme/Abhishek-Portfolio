"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  footer?: ReactNode;
  className?: string;
  contentClassName?: string;
  hover?: boolean;
  glass?: boolean;
  shadow?: boolean;
  border?: boolean;
  padding?: boolean;
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  animation?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  title,
  subtitle,
  icon,
  footer,
  className = "",
  contentClassName = "",
  hover = true,
  glass = false,
  shadow = true,
  border = true,
  padding = true,
  rounded = "3xl",
  animation = true,
  onClick,
}: CardProps) {
  const roundedClass = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
  };

  const Wrapper = animation ? motion.div : "div";

  return (
    <Wrapper
      {...(animation && {
        initial: {
          opacity: 0,
          y: 40,
        },
        whileInView: {
          opacity: 1,
          y: 0,
        },
        viewport: {
          once: true,
        },
        transition: {
          duration: 0.5,
        },
        whileHover: hover
          ? {
              y: -8,
              scale: 1.01,
            }
          : undefined,
      })}
      onClick={onClick}
      className={clsx(
        "overflow-hidden transition-all duration-300",
        roundedClass[rounded],
        glass
          ? "bg-white/10 backdrop-blur-xl"
          : "bg-slate-900",
        border && "border border-slate-700",
        shadow && "shadow-2xl",
        hover && "hover:border-blue-500 hover:shadow-blue-500/20",
        onClick && "cursor-pointer",
        className
      )}
    >
      {(title || subtitle || icon) && (
        <div className="border-b border-slate-700 p-6">
          <div className="flex items-center gap-4">
            {icon && (
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
                {icon}
              </div>
            )}

            <div>
              {title && (
                <h3 className="text-2xl font-bold text-white">
                  {title}
                </h3>
              )}

              {subtitle && (
                <p className="mt-1 text-sm text-slate-400">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div
        className={clsx(
          padding && "p-6",
          contentClassName
        )}
      >
        {children}
      </div>

      {footer && (
        <div className="border-t border-slate-700 p-6">
          {footer}
        </div>
      )}
    </Wrapper>
  );
}