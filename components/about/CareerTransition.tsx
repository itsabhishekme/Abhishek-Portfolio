"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaAws,
  FaCode,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
} from "react-icons/si";

const roadmap = [
  {
    title: "QA Automation",
    period: "2022 - 2025",
    description:
      "Built scalable automation frameworks using Cypress, Playwright, Postman, SQL and JMeter while working in Agile teams.",
  },
  {
    title: "Career Transition",
    period: "2025 - 2026",
    description:
      "Focused on strengthening Linux, Git, Shell Scripting, Networking and cloud fundamentals while preparing for DevOps.",
  },
  {
    title: "DevOps Training",
    period: "2026",
    description:
      "Hands-on learning with Docker, Kubernetes, Jenkins, AWS, Terraform and CI/CD pipelines.",
  },
  {
    title: "Future Goal",
    period: "Next",
    description:
      "Join a product company as a Junior DevOps Engineer and build reliable cloud infrastructure.",
  },
];

const technologies = [
  {
    icon: <FaLinux />,
    name: "Linux",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
  },
  {
    icon: <FaDocker />,
    name: "Docker",
  },
  {
    icon: <SiKubernetes />,
    name: "Kubernetes",
  },
  {
    icon: <SiJenkins />,
    name: "Jenkins",
  },
  {
    icon: <SiTerraform />,
    name: "Terraform",
  },
  {
    icon: <FaAws />,
    name: "AWS",
  },
  {
    icon: <FaCode />,
    name: "Shell Scripting",
  },
];

const achievements = [
  "2.9+ Years QA Automation Experience",
  "Automation Framework Development",
  "Playwright & Cypress Expertise",
  "API Testing with Postman",
  "Database Validation using SQL",
  "Performance Testing using JMeter",
  "AWS CI/CD Exposure",
  "Transitioning into DevOps",
];

export default function CareerTransition() {
  return (
    <section
      id="career-transition"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[5px] text-blue-500 font-semibold">
            Career Journey
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            QA Automation
            <span className="text-blue-500">
              {" "}→{" "}
            </span>
            DevOps Engineer
          </h2>

          <div className="mx-auto mt-6 h-1 w-32 rounded bg-blue-600"></div>
        </motion.div>

        {/* Timeline */}

        <div className="space-y-10">

          {roadmap.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                  {index + 1}
                </div>

                {index !== roadmap.length - 1 && (
                  <div className="mt-2 h-full w-1 bg-blue-600"></div>
                )}

              </div>

              <div className="flex-1 rounded-2xl border border-slate-700 bg-slate-800 p-8">

                <div className="flex flex-wrap items-center justify-between gap-3">

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <span className="rounded-full bg-blue-600 px-4 py-2 text-sm">
                    {item.period}
                  </span>

                </div>

                <p className="mt-5 leading-8 text-gray-300">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Skills */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="mb-10 text-center text-4xl font-bold">
            DevOps Technology Stack
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">

            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center transition hover:border-blue-500 hover:-translate-y-2"
              >
                <div className="flex justify-center text-5xl text-blue-500">
                  {tech.icon}
                </div>

                <h4 className="mt-5 text-xl font-semibold">
                  {tech.name}
                </h4>

              </div>
            ))}

          </div>

        </motion.div>

        {/* Achievements */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-slate-700 bg-slate-800 p-10"
        >
          <h3 className="mb-8 text-center text-4xl font-bold">
            Highlights
          </h3>

          <div className="grid gap-5 md:grid-cols-2">

            {achievements.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl bg-slate-900 p-5"
              >
                <FaCheckCircle className="text-green-400 text-xl" />

                <p>{item}</p>

              </div>
            ))}

          </div>

        </motion.div>

        {/* Quote */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center"
        >
          <h3 className="text-4xl font-bold">
            "Continuous Learning Builds Better Engineers."
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
            My journey from QA Automation to DevOps is driven by curiosity,
            automation, cloud technologies, and the desire to build scalable,
            reliable, and efficient software delivery pipelines.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3 text-xl font-semibold">
            Ready for the Next Challenge
            <FaArrowRight />
          </div>
        </motion.div>

      </div>
    </section>
  );
}