"use client";

import * as React from "react";
import { motion } from "motion/react";

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

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700",
  secondary:
    "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700",
  outline:
    "border border-blue-600 bg-transparent text-blue-500 hover:bg-blue-600 hover:text-white",
  ghost:
    "bg-transparent text-slate-300 hover:bg-slate-800",
  danger:
    "bg-red-600 text-white border border-red-600 hover:bg-red-700",
  success:
    "bg-green-600 text-white border border-green-600 hover:bg-green-700",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
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
  disabled = false,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
   
   
      disabled={disabled || loading}
      className={[
        "inline-flex items-center justify-center gap-3",
        "font-semibold transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        sizeClasses[size],
        rounded ? "rounded-xl" : "rounded-md",
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="h-5 w-5 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              className="opacity-25"
            />
            <path
              fill="currentColor"
              className="opacity-75"
              d="M12 2a10 10 0 0 0-10 10h4a6 6 0 0 1 6-6V2z"
            />
          </svg>

          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}

          <span>{children}</span>

          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}