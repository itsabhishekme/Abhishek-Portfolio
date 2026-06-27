"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaExternalLinkAlt,
} from "react-icons/fa";

export interface CompanyCardProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  employmentType?: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  companyUrl?: string;
}

export default function CompanyCard({
  company,
  role,
  duration,
  location,
  employmentType = "Full Time",
  description,
  technologies,
  achievements = [],
  companyUrl,
}: CompanyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-xl transition-all duration-300 hover:border-blue-500"
    >
      {/* Header */}

      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white">
            <FaBuilding />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              {company}
            </h3>

            <p className="mt-2 text-lg font-semibold text-blue-400">
              {role}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <FaCalendarAlt />
                {duration}
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
        </div>

        {companyUrl && (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-blue-600 px-4 py-2 text-blue-400 transition hover:bg-blue-600 hover:text-white"
          >
            Visit
            <FaExternalLinkAlt size={13} />
          </a>
        )}
      </div>

      {/* Description */}

      <div className="mt-8">
        <h4 className="mb-3 text-xl font-semibold text-white">
          About the Role
        </h4>

        <p className="leading-8 text-gray-300">
          {description}
        </p>
      </div>

      {/* Tech Stack */}

      <div className="mt-10">
        <h4 className="mb-4 text-xl font-semibold text-white">
          Technologies
        </h4>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-600 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-600 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements */}

      {achievements.length > 0 && (
        <div className="mt-10">
          <h4 className="mb-4 text-xl font-semibold text-white">
            Key Achievements
          </h4>

          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-300"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.article>
  );
}