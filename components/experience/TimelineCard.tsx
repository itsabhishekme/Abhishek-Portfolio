"use client";

import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaChevronRight,
  FaBuilding,
  FaLaptopCode,
  FaAward,
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
        x: isLeft ? -80 : 80,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`relative flex ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-500 lg:block" />

      {/* Timeline Dot */}
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
        className="absolute left-1/2 top-16 z-20 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-950 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_35px_rgba(59,130,246,.8)] lg:flex"
      >
        <div className="h-2.5 w-2.5 rounded-full bg-white" />
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{
          y: -12,
          scale: 1.015,
        }}
        transition={{
          duration: 0.35,
        }}
        className="group relative w-full overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/70 shadow-[0_15px_60px_rgba(0,0,0,.35)] backdrop-blur-xl transition-all duration-500 hover:border-blue-500/70 lg:w-[46%]"
      >
        {/* Glow */}
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-indigo-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

        {/* Header */}
        <div className="relative overflow-hidden rounded-t-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 p-8">
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
              <FaCalendarAlt />
              {year}
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              {title}
            </h2>

            <div className="mt-3 flex items-center gap-2 text-lg text-white/90">
              <FaBuilding />
              <span>{company}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-5">
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur">
                <FaCalendarAlt className="text-cyan-200" />
                <span className="text-sm font-medium">{year}</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur">
                <FaMapMarkerAlt className="text-cyan-200" />
                <span className="text-sm font-medium">{location}</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur">
                <FaBriefcase className="text-cyan-200" />
                <span className="text-sm font-medium">
                  {employmentType}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="relative space-y-10 p-8">
          {/* Overview */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                <FaLaptopCode />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Role Overview
              </h3>
            </div>

            <p className="leading-8 text-slate-300">
              {description}
            </p>
          </div>

          {/* Technologies */}
          {technologies.length > 0 && (
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600/20 text-cyan-400">
                  <FaLaptopCode />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Technologies Used
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                    }}
                    className="rounded-full border border-blue-500/40 bg-gradient-to-r from-blue-600/15 to-cyan-500/15 px-5 py-2.5 text-sm font-semibold text-blue-300 transition-all duration-300 hover:border-cyan-400 hover:text-white"
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
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/20 text-yellow-400">
                  <FaAward />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Key Achievements
                </h3>
              </div>

              <ul className="space-y-5">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-800/30 p-5 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-800/60"
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                      <FaChevronRight />
                    </div>

                    <span className="leading-7 text-slate-300">
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}