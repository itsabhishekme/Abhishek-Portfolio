"use client";

import {
  Fragment,
  ReactNode,
  useEffect,
} from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
} from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;

  title?: string;
  subtitle?: string;

  children: ReactNode;

  size?: "sm" | "md" | "lg" | "xl" | "full";

  closeOnOverlay?: boolean;
  showCloseButton?: boolean;

  className?: string;
}

const sizeClasses = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
  full: "max-w-[95vw]",
};

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  size = "lg",
  closeOnOverlay = true,
  showCloseButton = true,
  className = "",
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          {/* Overlay */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={() => {
              if (closeOnOverlay) {
                onClose();
              }
            }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}

          <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto p-5">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) => event.stopPropagation()}
              className={`
                relative
                w-full
                ${sizeClasses[size]}
                overflow-hidden
                rounded-3xl
                border
                border-slate-700
                bg-slate-900
                shadow-2xl
                ${className}
              `}
            >
              {/* Header */}

              {(title || showCloseButton) && (
                <div className="flex items-start justify-between border-b border-slate-700 px-8 py-6">
                  <div>
                    {title && (
                      <h2 className="text-3xl font-bold text-white">
                        {title}
                      </h2>
                    )}

                    {subtitle && (
                      <p className="mt-2 text-slate-400">
                        {subtitle}
                      </p>
                    )}
                  </div>

                  {showCloseButton && (
                    <button
                      onClick={onClose}
                      aria-label="Close Modal"
                      className="
                        rounded-xl
                        p-3
                        text-slate-400
                        transition-all
                        duration-300
                        hover:bg-slate-800
                        hover:text-white
                      "
                    >
                      <FaTimes size={20} />
                    </button>
                  )}
                </div>
              )}

              {/* Body */}

              <div className="max-h-[80vh] overflow-y-auto p-8">
                {children}
              </div>
            </motion.div>
          </div>
        </Fragment>
      )}
    </AnimatePresence>
  );
}