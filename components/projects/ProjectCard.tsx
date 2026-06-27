"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCode,
} from "react-icons/fa";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category?: string;
  duration?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  category = "Project",
  duration = "",
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
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
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
      }}
      className="group overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-xl transition-all duration-300 hover:border-blue-500"
    >
      {/* Image */}

      <div className="relative h-64 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        {featured && (
          <div className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
            Featured
          </div>
        )}

        <div className="absolute bottom-5 left-5 rounded-full bg-slate-900/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
          {category}
        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        {duration && (
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
            <FaCalendarAlt />
            <span>{duration}</span>
          </div>
        )}

        <p className="mt-5 leading-8 text-slate-300">
          {description}
        </p>

        {/* Technologies */}

        <div className="mt-8">

          <div className="mb-4 flex items-center gap-2 text-white">
            <FaCode />

            <h3 className="font-semibold">
              Technologies
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">

            {technologies.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{
                  scale: 1.05,
                }}
                className="rounded-full border border-blue-600 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-600 hover:text-white"
              >
                {tech}
              </motion.span>
            ))}

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

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
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <FaGithub />

              Source Code
            </Link>
          </motion.div>

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
                className="flex items-center gap-3 rounded-xl border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
              >
                <FaExternalLinkAlt />

                Live Demo
              </Link>
            </motion.div>
          )}

        </div>

      </div>
    </motion.article>
  );
}
