"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
  FaStar,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface GithubButtonProps {
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  showStats?: boolean;
  className?: string;
}

export default function GithubButton({
  githubUrl,
  liveUrl,
  stars = 0,
  forks = 0,
  variant = "primary",
  size = "md",
  fullWidth = false,
  showStats = false,
  className = "",
}: GithubButtonProps) {
  const variantClasses = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white border-blue-600",

    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white border-slate-700",

    outline:
      "bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",

    md: "px-6 py-3 text-base",

    lg: "px-8 py-4 text-lg",
  };

  return (
    <div
      className={`flex flex-col gap-4 ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      <div className="flex flex-wrap gap-4">
        {/* GitHub */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-xl
              font-semibold
              transition-all
              duration-300
              ${variantClasses[variant]}
              ${sizeClasses[size]}
              ${fullWidth ? "w-full" : ""}
            `}
          >
            <FaGithub size={20} />

            <span>View Source Code</span>
          </Link>
        </motion.div>

        {/* Live Demo */}

        {liveUrl && (
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                border
                border-cyan-500
                bg-cyan-600
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-cyan-700
                ${
                  fullWidth ? "w-full" : ""
                }
              `}
            >
              <FaExternalLinkAlt />

              <span>Live Demo</span>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Repository Stats */}

      {showStats && (
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-wrap gap-6 rounded-2xl border border-slate-700 bg-slate-900 p-5"
        >
          <div className="flex items-center gap-3">
            <FaStar className="text-yellow-400" />

            <div>
              <p className="text-sm text-slate-400">
                Stars
              </p>

              <h4 className="font-bold text-white">
                {stars}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaCodeBranch className="text-green-400" />

            <div>
              <p className="text-sm text-slate-400">
                Forks
              </p>

              <h4 className="font-bold text-white">
                {forks}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaGithub className="text-blue-500" />

            <div>
              <p className="text-sm text-slate-400">
                Repository
              </p>

              <h4 className="font-bold text-white">
                Public
              </h4>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
