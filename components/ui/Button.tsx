"use client";

import * as React from "react";
import { motion } from "framer-motion";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "success";

  size?: "sm" | "md" | "lg" | "xl";

  loading?: boolean;

  fullWidth?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;

  rounded?: boolean;
}

const variantClasses = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white border border-blue-600",

  secondary:
    "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",

  outline:
    "bg-transparent border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white",

  ghost:
    "bg-transparent text-slate-300 hover:bg-slate-800",

  danger:
    "bg-red-600 hover:bg-red-700 text-white border border-red-600",

  success:
    "bg-green-600 hover:bg-green-700 text-white border border-green-600",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",

  md: "px-6 py-3 text-base",

  lg: "px-8 py-4 text-lg",

  xl: "px-10 py-5 text-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  rounded = true,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: disabled || loading ? 1 : 1.03,
      }}
      whileTap={{
        scale: disabled || loading ? 1 : 0.97,
      }}
      disabled={disabled || loading}
      className={`
        inline-flex
        items-center
        justify-center
        gap-3
        font-semibold
        transition-all
        duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-60

        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${rounded ? "rounded-xl" : "rounded-md"}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />

            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>

          Loading...
        </>
      ) : (
        <>
          {leftIcon && (
            <span className="flex items-center">
              {leftIcon}
            </span>
          )}

          <span>{children}</span>

          {rightIcon && (
            <span className="flex items-center">
              {rightIcon}
            </span>
          )}
        </>
      )}
    </motion.button>
  );
}