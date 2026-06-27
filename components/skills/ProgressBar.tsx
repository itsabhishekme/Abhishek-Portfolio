"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
  showPercentage?: boolean;
  delay?: number;
}

export default function ProgressBar({
  label,
  percentage,
  color = "from-blue-500 to-cyan-500",
  showPercentage = true,
  delay = 0,
}: ProgressBarProps) {
  return (
    <motion.div
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
        duration: 0.5,
        delay,
      }}
      className="w-full"
    >
      {/* Header */}

      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold tracking-wide text-white">
          {label}
        </h4>

        {showPercentage && (
          <span className="text-sm font-bold text-blue-400">
            {percentage}%
          </span>
        )}
      </div>

      {/* Progress Track */}

      <div className="relative h-4 w-full overflow-hidden rounded-full bg-slate-800">
        {/* Animated Fill */}

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${percentage}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
            delay,
          }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />

        {/* Shine Effect */}

        <motion.div
          initial={{
            x: "-100%",
          }}
          whileInView={{
            x: "300%",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          className="absolute top-0 h-full w-12 -skew-x-12 bg-white/20"
        />
      </div>
    </motion.div>
  );
}