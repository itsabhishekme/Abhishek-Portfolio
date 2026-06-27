"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

export interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  employmentType?: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  achievements?: string[];
}

export default function ExperienceCard({
  company,
  role,
  duration,
  location,
  employmentType = "Full Time",
  description,
  technologies,
  responsibilities,
  achievements = [],
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -8,
      }}
      className="group overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-xl transition-all duration-300 hover:border-blue-500 hover:shadow-blue-500/20"
    >
      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white">

        <div className="flex items-center gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
            <FaBriefcase size={30} />
          </div>

          <div>

            <h2 className="text-3xl font-bold">
              {role}
            </h2>

            <p className="mt-1 text-lg">
              {company}
            </p>

          </div>

        </div>

        <div className="mt-6 flex flex-wrap gap-6 text-sm">

          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>{location}</span>
          </div>

          <div className="rounded-full bg-white/20 px-4 py-1">
            {employmentType}
          </div>

        </div>

      </div>

      {/* Body */}

      <div className="p-8">

        {/* About */}

        <div>

          <h3 className="mb-4 text-2xl font-semibold text-white">
            About Role
          </h3>

          <p className="leading-8 text-slate-300">
            {description}
          </p>

        </div>

        {/* Technologies */}

        <div className="mt-10">

          <h3 className="mb-5 text-2xl font-semibold text-white">
            Technology Stack
          </h3>

          <div className="flex flex-wrap gap-3">

            {technologies.map((tech) => (

              <span
                key={tech}
                className="rounded-full border border-blue-600 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-300 transition-all hover:bg-blue-600 hover:text-white"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

        {/* Responsibilities */}

        <div className="mt-10">

          <h3 className="mb-5 text-2xl font-semibold text-white">
            Responsibilities
          </h3>

          <ul className="space-y-4">

            {responsibilities.map((item, index) => (

              <li
                key={index}
                className="flex items-start gap-3 text-slate-300"
              >
                <FaCheckCircle
                  className="mt-1 shrink-0 text-green-500"
                />

                <span className="leading-7">
                  {item}
                </span>

              </li>

            ))}

          </ul>

        </div>

        {/* Achievements */}

        {achievements.length > 0 && (

          <div className="mt-10">

            <h3 className="mb-5 text-2xl font-semibold text-white">
              Key Achievements
            </h3>

            <div className="grid gap-4 md:grid-cols-2">

              {achievements.map((achievement, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="rounded-2xl border border-slate-700 bg-slate-800 p-5"
                >

                  <div className="flex items-start gap-3">

                    <div className="mt-1 h-3 w-3 rounded-full bg-blue-500"></div>

                    <p className="leading-7 text-slate-300">
                      {achievement}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        )}

      </div>
    </motion.article>
  );
}