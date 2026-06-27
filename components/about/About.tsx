"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaLaptopCode,
  FaDocker,
  FaAws,
  FaDownload,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiCypress,
} from "react-icons/si";

const skills = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "Linux",
  "Git",
  "Shell Script",
  "Playwright",
  "Cypress",
  "Postman",
  "SQL",
  "JavaScript",
  "TypeScript",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-blue-500 font-semibold tracking-[4px] uppercase">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Know More About Me
          </h2>

          <div className="mx-auto mt-5 h-1 w-28 rounded bg-blue-600"></div>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-2">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-700">

              <Image
                src="/images/profile.png"
                alt="Abhishek Kumar"
                width={700}
                height={700}
                priority
                className="w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8">

                <h3 className="text-3xl font-bold">
                  Abhishek Kumar
                </h3>

                <p className="mt-2 text-blue-400">
                  DevOps Engineer | QA Automation Engineer
                </p>

              </div>

            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-4xl font-bold leading-tight">
              Building Reliable Software through
              <span className="text-blue-500">
                {" "}Automation & DevOps
              </span>
            </h3>

            <p className="text-gray-300 leading-8">
              I'm Abhishek Kumar, a passionate QA Automation Engineer
              with experience in Cypress, Playwright, API Testing,
              SQL, JMeter and AWS CI/CD pipelines. I am currently
              transitioning into DevOps by learning Docker,
              Kubernetes, Terraform, Jenkins and cloud technologies.
            </p>

            <p className="mt-6 text-gray-300 leading-8">
              I enjoy building scalable automation frameworks,
              creating CI/CD pipelines, improving software quality,
              and continuously learning modern DevOps practices.
            </p>

            {/* Cards */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

                <FaUserTie className="text-4xl text-blue-500" />

                <h4 className="mt-4 text-xl font-semibold">
                  Experience
                </h4>

                <p className="mt-2 text-gray-400">
                  2.9+ Years in QA Automation
                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

                <FaLaptopCode className="text-4xl text-blue-500" />

                <h4 className="mt-4 text-xl font-semibold">
                  Career Goal
                </h4>

                <p className="mt-2 text-gray-400">
                  Junior DevOps Engineer
                </p>

              </div>

            </div>

            {/* Skills */}

            <div className="mt-12">

              <h4 className="mb-5 text-2xl font-semibold">
                Core Skills
              </h4>

              <div className="flex flex-wrap gap-4">

                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-600 px-5 py-2 text-sm transition hover:bg-blue-600"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

            {/* Icons */}

            <div className="mt-10 flex flex-wrap gap-5 text-5xl text-blue-500">

              <FaAws />

              <FaDocker />

              <SiKubernetes />

              <SiTerraform />

              <SiJenkins />

              <SiCypress />

            </div>

            {/* Button */}

            <div className="mt-12">

              <a
                href="/resume/Abhishek-Kumar-Resume.pdf"
                download
                className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
              >
                <FaDownload />

                Download Resume
              </a>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}