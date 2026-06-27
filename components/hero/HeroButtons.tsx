"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

interface HeroButtonsProps {
  resumeUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
}

export default function HeroButtons({
  resumeUrl = "/resume/Abhishek-Kumar-Resume.pdf",
  githubUrl = "https://github.com/yourusername",
  linkedinUrl = "https://linkedin.com/in/yourusername",
  email = "abhishekkumardipu@gmail.com",
}: HeroButtonsProps) {
  return (
    <div className="mt-10 space-y-8">
      {/* Main Buttons */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        className="flex flex-wrap gap-5"
      >
        {/* Projects */}

        <Link
          href="/projects"
          className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
        >
          View Projects

          <motion.span
            whileHover={{
              x: 6,
            }}
          >
            <FaArrowRight />
          </motion.span>
        </Link>

        {/* Resume */}

        <a
          href={resumeUrl}
          download
          className="inline-flex items-center gap-3 rounded-xl border border-slate-600 bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-slate-800"
        >
          <FaDownload />

          Download Resume
        </a>

        {/* Contact */}

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 rounded-xl border border-cyan-500 px-8 py-4 text-lg font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-white"
        >
          <FaEnvelope />

          Contact Me
        </Link>
      </motion.div>

      {/* Social Buttons */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }}
        className="flex items-center gap-5"
      >
        {/* GitHub */}

        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.15,
            rotate: 8,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-2xl text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
        >
          <FaGithub />
        </motion.a>

        {/* LinkedIn */}

        <motion.a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.15,
            rotate: -8,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-2xl text-white transition-all duration-300 hover:border-sky-500 hover:bg-sky-600"
        >
          <FaLinkedin />
        </motion.a>

        {/* Email */}

        <motion.a
          href={`mailto:${email}`}
          whileHover={{
            scale: 1.15,
            rotate: 8,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-2xl text-white transition-all duration-300 hover:border-red-500 hover:bg-red-500"
        >
          <FaEnvelope />
        </motion.a>
      </motion.div>
    </div>
  );
}
