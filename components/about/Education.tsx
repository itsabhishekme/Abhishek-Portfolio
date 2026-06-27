"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCloud,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import {
  SiJenkins,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";

const roadmap = [
  {
    title: "QA Automation Engineer",
    period: "2022 - 2025",
    description:
      "Built automation frameworks using Cypress and Playwright, automated API testing with Postman, validated databases using SQL, performed performance testing using JMeter, and worked with AWS CI/CD pipelines.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Career Transition",
    period: "2025 - 2026",
    description:
      "Dedicated time to strengthen Linux, Git, Shell Scripting, networking fundamentals, DevOps concepts, and cloud technologies while planning hands-on infrastructure projects.",
    icon: <FaArrowRight />,
  },
  {
    title: "DevOps Journey",
    period: "2026 - Present",
    description:
      "Learning Docker, Kubernetes, Jenkins, Terraform and AWS while building CI/CD pipelines, Infrastructure as Code projects and cloud-native applications.",
    icon: <FaRocket />,
  },
];

const technologies = [
  {
    name: "Linux",
    icon: <FaLinux />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
  },
  {
    name: "Jenkins",
    icon: <SiJenkins />,
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
  },
  {
    name: "AWS",
    icon: <FaCloud />,
  },
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[5px] text-blue-500">
            Career Journey
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            QA Automation → DevOps
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            My goal is to combine automation testing expertise with modern
            DevOps practices to build scalable, reliable and cloud-native
            software delivery pipelines.
          </p>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-blue-600" />
        </motion.div>

        {/* Timeline */}

        <div className="space-y-10">

          {roadmap.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-xl transition hover:border-blue-500"
            >
              <div className="flex flex-col gap-6 md:flex-row">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl">
                  {step.icon}
                </div>

                <div className="flex-1">

                  <span className="rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-400">
                    {step.period}
                  </span>

                  <h3 className="mt-4 text-3xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-300">
                    {step.description}
                  </p>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Technology Stack */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="mb-12 text-center text-4xl font-bold">
            DevOps Learning Stack
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center transition"
              >
                <div className="mb-5 flex justify-center text-5xl text-blue-500">
                  {tech.icon}
                </div>

                <h4 className="text-xl font-semibold">
                  {tech.name}
                </h4>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* Quote */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-4xl rounded-3xl border border-blue-700 bg-gradient-to-r from-blue-600 to-cyan-600 p-10 text-center"
        >
          <h3 className="text-3xl font-bold">
            Continuous Learning Never Stops
          </h3>

          <p className="mt-6 text-lg leading-8 text-white/90">
            Every day I invest in improving my skills in cloud computing,
            Infrastructure as Code, containerization, Kubernetes, CI/CD,
            automation, and scalable software engineering to become a
            well-rounded DevOps Engineer.
          </p>
        </motion.div>

      </div>
    </section>
  );
}