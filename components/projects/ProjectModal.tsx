"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCode,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;

  title: string;
  image: string;
  description: string;

  technologies: string[];

  features: string[];

  githubUrl?: string;
  liveUrl?: string;

  category?: string;
  status?: string;
  year?: string;
}

export default function ProjectModal({
  isOpen,
  onClose,

  title,
  image,
  description,

  technologies,

  features,

  githubUrl,
  liveUrl,

  category = "Project",
  status = "Completed",
  year = new Date().getFullYear().toString(),
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 60,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 60,
            }}
            transition={{
              duration: 0.35,
            }}
            className="fixed left-1/2 top-1/2 z-[100] max-h-[90vh] w-[95%] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl"
          >
            {/* Header */}

            <div className="relative h-80 w-full">
              <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/40 to-transparent" />

              {/* Close Button */}

              <button
                onClick={onClose}
                className="absolute right-5 top-5 rounded-full bg-slate-900/90 p-3 text-white transition hover:bg-red-600"
              >
                <FaTimes size={20} />
              </button>

              {/* Title */}

              <div className="absolute bottom-8 left-8">
                <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  {category}
                </span>

                <h2 className="mt-5 text-4xl font-bold text-white">
                  {title}
                </h2>
              </div>
            </div>

            {/* Content */}

            <div className="space-y-10 p-8">
              {/* Info */}

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 rounded-full bg-slate-800 px-5 py-2 text-sm text-slate-300">
                  <FaCalendarAlt />

                  {year}
                </div>

                <div className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white">
                  {status}
                </div>
              </div>

              {/* Description */}

              <div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Project Overview
                </h3>

                <p className="leading-8 text-slate-300">
                  {description}
                </p>
              </div>

              {/* Technologies */}

              <div>
                <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold text-white">
                  <FaCode />

                  Technology Stack
                </h3>

                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <motion.span
                      whileHover={{
                        scale: 1.08,
                      }}
                      key={tech}
                      className="rounded-full border border-blue-600 bg-blue-600/10 px-5 py-2 font-medium text-blue-400"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Features */}

              <div>
                <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold text-white">
                  <FaStar />

                  Key Features
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        x: 5,
                      }}
                      className="flex items-start gap-4 rounded-2xl border border-slate-700 bg-slate-800 p-5"
                    >
                      <FaCheckCircle className="mt-1 shrink-0 text-green-500" />

                      <span className="leading-7 text-slate-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-5 pt-4">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                  >
                    <FaGithub />

                    Source Code
                  </a>
                )}

                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-cyan-500 bg-cyan-600 px-7 py-4 font-semibold text-white transition hover:bg-cyan-700"
                  >
                    <FaExternalLinkAlt />

                    Live Demo
                  </a>
                )}

                <button
                  onClick={onClose}
                  className="rounded-xl border border-slate-600 px-7 py-4 font-semibold text-white transition hover:bg-slate-800"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}