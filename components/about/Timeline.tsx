"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaAws,
} from "react-icons/fa";
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
} from "react-icons/si";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const timeline: TimelineItem[] = [
  {
    id: 1,
    year: "2022",
    title: "Started Career",
    subtitle: "QA Automation Engineer",
    description:
      "Started my professional journey as a QA Automation Engineer. Worked on Cypress automation, API Testing, SQL validation, Postman and Agile methodologies.",
    icon: <FaBriefcase />,
    color: "bg-blue-600",
  },
  {
    id: 2,
    year: "2023",
    title: "Automation Expertise",
    subtitle: "Playwright • Cypress",
    description:
      "Built scalable automation frameworks, reduced regression execution time, integrated automation with CI/CD pipelines and improved overall software quality.",
    icon: <FaLaptopCode />,
    color: "bg-green-600",
  },
  {
    id: 3,
    year: "2025",
    title: "Career Transition",
    subtitle: "Preparing for DevOps",
    description:
      "Focused on Linux, Git, Shell Scripting, Networking fundamentals and modern DevOps practices while strengthening cloud and automation skills.",
    icon: <FaRocket />,
    color: "bg-purple-600",
  },
  {
    id: 4,
    year: "2026",
    title: "DevOps Learning",
    subtitle: "Besant Technologies",
    description:
      "Learning Docker, Kubernetes, Jenkins, Terraform, AWS, Infrastructure as Code and building real-world DevOps projects.",
    icon: <FaGraduationCap />,
    color: "bg-red-600",
  },
];

const technologies = [
  {
    name: "AWS",
    icon: <FaAws />,
  },
  {
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
  },
  {
    name: "Jenkins",
    icon: <SiJenkins />,
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-blue-500">
            Timeline
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            My Career Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            From QA Automation Engineer to DevOps Engineer,
            continuously learning modern cloud technologies,
            automation, Infrastructure as Code and CI/CD.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-blue-600" />
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-blue-700 lg:left-1/2 lg:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .7,
              }}
              viewport={{ once: true }}
              className={`relative mb-16 flex flex-col lg:flex-row ${
                index % 2 === 0
                  ? "lg:flex-row-reverse"
                  : ""
              }`}
            >

              {/* Content */}

              <div className="lg:w-1/2">
                <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-xl transition hover:border-blue-500">

                  <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold">
                    {item.year}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold">
                    {item.title}
                  </h3>

                  <h4 className="mt-2 text-blue-400">
                    {item.subtitle}
                  </h4>

                  <p className="mt-5 leading-8 text-gray-300">
                    {item.description}
                  </p>

                </div>
              </div>

              {/* Center Icon */}

              <div className="absolute left-0 top-8 lg:left-1/2 lg:-translate-x-1/2">
                <div
                  className={`${item.color} flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-950 text-2xl`}
                >
                  {item.icon}
                </div>
              </div>

            </motion.div>
          ))}

        </div>

        {/* Skills */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="mb-12 text-center text-4xl font-bold">
            DevOps Technologies
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{
                  scale: 1.08,
                  y: -10,
                }}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center transition"
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

      </div>
    </section>
  );
}