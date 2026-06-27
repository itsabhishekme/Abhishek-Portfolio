"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
} from "react-icons/si";

import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#2563eb22,transparent_40%),radial-gradient(circle_at_bottom_left,#06b6d422,transparent_35%)]" />

      <div className="absolute inset-0 -z-10 bg-grid opacity-10" />

      <div className="container mx-auto px-6 py-20">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <span className="rounded-full border border-blue-500 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
              👋 Welcome To My Portfolio
            </span>

            <h2 className="mt-8 text-2xl font-semibold text-slate-300">
              Hello, I'm
            </h2>

            <h1 className="mt-2 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Abhishek Kumar
            </h1>

            <div className="mt-8 min-h-[70px]">
              <AnimatedText />
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Passionate QA Automation Engineer transitioning into DevOps.
              Experienced in Cypress, Playwright, API Testing, SQL,
              AWS CI/CD, Docker, Kubernetes, Terraform and Linux.
              I enjoy building scalable automation frameworks and
              cloud-native solutions.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/projects"
                className="flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                View Projects

                <FaArrowRight />
              </Link>

              <a
                href="/resume/Abhishek-Kumar-Resume.pdf"
                download
                className="flex items-center gap-3 rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition hover:border-blue-500 hover:bg-slate-900"
              >
                <FaDownload />

                Download Resume
              </a>

            </div>

            {/* Social */}

            <div className="mt-12 flex gap-5">

              <a
                href="https://github.com/"
                target="_blank"
                className="rounded-full bg-slate-800 p-4 text-2xl text-white transition hover:bg-blue-600"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="rounded-full bg-slate-800 p-4 text-2xl text-white transition hover:bg-blue-600"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:abhishekkumardipu@gmail.com"
                className="rounded-full bg-slate-800 p-4 text-2xl text-white transition hover:bg-blue-600"
              >
                <FaEnvelope />
              </a>

            </div>

            {/* Tech Stack */}

            <div className="mt-14">

              <p className="mb-5 text-sm uppercase tracking-widest text-slate-400">
                Tech Stack
              </p>

              <div className="flex flex-wrap gap-6 text-5xl text-blue-500">

                <motion.div
                  whileHover={{ scale: 1.2 }}
                >
                  <FaDocker />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                >
                  <SiKubernetes />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                >
                  <FaAws />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                >
                  <SiTerraform />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                >
                  <SiJenkins />
                </motion.div>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative flex justify-center"
          >
            {/* Glow */}

            <div className="absolute h-[430px] w-[430px] rounded-full bg-blue-600/20 blur-3xl" />

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative"
            >
              <Image
                src="/images/profile.png"
                alt="Abhishek Kumar"
                width={450}
                height={450}
                priority
                className="rounded-full border-8 border-slate-800 object-cover shadow-2xl"
              />
            </motion.div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute bottom-8 left-0 rounded-2xl border border-slate-700 bg-slate-900/90 p-5 backdrop-blur"
            >
              <h4 className="font-bold text-white">
                Experience
              </h4>

              <p className="mt-2 text-blue-400">
                2.9+ Years
              </p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute right-0 top-12 rounded-2xl border border-slate-700 bg-slate-900/90 p-5 backdrop-blur"
            >
              <h4 className="font-bold text-white">
                Current Goal
              </h4>

              <p className="mt-2 text-cyan-400">
                DevOps Engineer
              </p>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
