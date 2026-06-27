"use client";

import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaChevronRight,
} from "react-icons/fa";

export interface TimelineCardProps {
  year: string;
  title: string;
  company: string;
  location: string;
  employmentType?: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
  isLeft?: boolean;
}

export default function TimelineCard({
  year,
  title,
  company,
  location,
  employmentType = "Full Time",
  description,
  technologies = [],
  achievements = [],
  isLeft = true,
}: TimelineCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className={`relative flex ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      {/* Timeline Dot */}

      <div className="absolute left-1/2 top-10 z-20 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-slate-900 bg-blue-600 lg:block" />

      {/* Card */}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.01,
        }}
        className="w-full rounded-3xl border border-slate-700 bg-slate-900 shadow-xl transition-all duration-300 hover:border-blue-500 lg:w-[46%]"
      >
        {/* Header */}

        <div className="rounded-t-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-600 p-6 text-white">
          <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
            {year}
          </span>

          <h2 className="mt-5 text-3xl font-bold">
            {title}
          </h2>

          <p className="mt-2 text-lg">
            {company}
          </p>

          <div className="mt-6 flex flex-wrap gap-5 text-sm">
            <span className="flex items-center gap-2">
              <FaCalendarAlt />
              {year}
            </span>

            <span className="flex items-center gap-2">
              <FaMapMarkerAlt />
              {location}
            </span>

            <span className="flex items-center gap-2">
              <FaBriefcase />
              {employmentType}
            </span>
          </div>
        </div>

        {/* Body */}

        <div className="space-y-8 p-8">
          {/* Description */}

          <div>
            <h3 className="mb-3 text-xl font-semibold text-white">
              Overview
            </h3>

            <p className="leading-8 text-slate-300">
              {description}
            </p>
          </div>

          {/* Technologies */}

          {technologies.length > 0 && (
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="rounded-full border border-blue-500 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}

          {achievements.length > 0 && (
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Achievements
              </h3>

              <ul className="space-y-4">
                {achievements.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <FaChevronRight className="mt-1 shrink-0 text-blue-500" />

                    <span className="leading-7">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}