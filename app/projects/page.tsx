"use client";

import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code2,
  Database,
  Cloud,
  TestTube2,
  Server,
  ArrowUpRight,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  duration: string;
  role: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  icon: JSX.Element;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gateway Automation",
    duration: "12 Months",
    role: "QA Automation Engineer",
    image: "/images/projects/gateway.png",
    github: "#",
    live: "#",
    icon: <TestTube2 size={28} />,
    description:
      "Automated critical UI workflows using Cypress and API validation using Postman with SQL backend verification.",

    technologies: [
      "Cypress",
      "Postman",
      "SQL",
      "JMeter",
      "JavaScript",
      "Git",
      "CI/CD",
    ],

    highlights: [
      "50% UI automation coverage",
      "40% regression reduction",
      "API automation",
      "Database validation",
      "Performance testing",
      "Agile Development",
    ],
  },

  {
    id: 2,
    title: "Customer Portal",
    duration: "12 Months",
    role: "QA Automation Engineer",
    image: "/images/projects/customer.png",
    github: "#",
    live: "#",
    icon: <Database size={28} />,
    description:
      "Designed a scalable Cypress automation framework from scratch with API, SQL and JMeter integration.",

    technologies: [
      "Cypress",
      "Postman",
      "SQL",
      "JMeter",
      "JavaScript",
      "Git",
    ],

    highlights: [
      "90% Automation Coverage",
      "Framework Ownership",
      "70% Test Time Reduction",
      "Reusable Components",
      "Cross Browser Testing",
    ],
  },

  {
    id: 3,
    title: "Admin Portal Automation",
    duration: "9 Months",
    role: "SDET",
    image: "/images/projects/admin.png",
    github: "#",
    live: "#",
    icon: <Code2 size={28} />,
    description:
      "Developed Playwright automation framework with JavaScript integrated into CI/CD pipeline.",

    technologies: [
      "Playwright",
      "JavaScript",
      "Postman",
      "Python",
      "Git",
      "CI/CD",
    ],

    highlights: [
      "Playwright Framework",
      "Automation Architecture",
      "API Integration",
      "CI/CD",
      "Regression Testing",
    ],
  },

  {
    id: 4,
    title: "DevOps Learning Projects",
    duration: "Current",
    role: "DevOps Trainee",
    image: "/images/projects/devops.png",
    github: "#",
    live: "#",
    icon: <Cloud size={28} />,
    description:
      "Hands-on DevOps projects using Docker, Kubernetes, Jenkins, AWS, Terraform, Linux and Git.",

    technologies: [
      "Docker",
      "AWS",
      "Linux",
      "Terraform",
      "Jenkins",
      "Kubernetes",
      "Git",
      "Shell",
    ],

    highlights: [
      "Docker Containers",
      "Terraform",
      "AWS Deployment",
      "Linux",
      "CI/CD",
      "Infrastructure as Code",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="py-20 text-center">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Featured Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg"
        >
          Automation Testing, DevOps, Cloud, CI/CD and Full Stack
          projects showcasing real-world experience.
        </motion.p>

      </section>

      {/* Cards */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * .15,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <div className="flex justify-between items-center">

                  <div>

                    <div className="text-blue-400">
                      {project.icon}
                    </div>

                    <h2 className="text-3xl font-bold mt-4">
                      {project.title}
                    </h2>

                    <p className="text-blue-400 mt-2">
                      {project.role}
                    </p>

                  </div>

                  <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
                    {project.duration}
                  </span>

                </div>

                <p className="text-gray-400 mt-6 leading-8">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="bg-slate-800 rounded-full px-4 py-2 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-8">

                  <h3 className="font-semibold text-xl mb-4">
                    Highlights
                  </h3>

                  <ul className="space-y-3">

                    {project.highlights.map((item) => (

                      <li
                        key={item}
                        className="flex gap-3 items-center"
                      >
                        <Server
                          size={18}
                          className="text-blue-500"
                        />

                        {item}

                      </li>

                    ))}

                  </ul>

                </div>

                <div className="mt-10 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 duration-300"
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-blue-700 to-indigo-700">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Looking for a DevOps Engineer or QA Automation Engineer?
            Let's connect and discuss your next project.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 mt-10 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300"
          >
            Contact Me
            <ArrowUpRight size={22} />
          </a>

        </div>

      </section>

    </main>
  );
}