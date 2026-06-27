"use client";

import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaNodeJs,
  FaReact,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiPostman,
  SiCypress,
  SiPlaywright,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiNginx,
  SiGrafana,
  SiPrometheus,
  SiApachekafka,
  SiGithubactions,
  SiFirebase,
  SiVercel,
  SiExpress,
} from "react-icons/si";

const techStack = [
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    title: "DevOps & Cloud",
    technologies: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Nginx", icon: <SiNginx /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Testing & Monitoring",
    technologies: [
      { name: "Playwright", icon: <SiPlaywright /> },
      { name: "Cypress", icon: <SiCypress /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Grafana", icon: <SiGrafana /> },
      { name: "Prometheus", icon: <SiPrometheus /> },
      { name: "Kafka", icon: <SiApachekafka /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="bg-slate-950 py-24"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-blue-500">
            Technology Stack
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Tools & Technologies
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Technologies, frameworks and cloud platforms I use to build
            scalable web applications, automation frameworks and DevOps
            solutions.
          </p>
        </motion.div>

        <div className="space-y-14">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: categoryIndex * 0.15,
              }}
            >
              <h3 className="mb-8 text-3xl font-bold text-white">
                {category.title}
              </h3>

              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {category.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="group rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg transition-all hover:border-blue-500 hover:shadow-blue-500/20"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-5 text-6xl text-blue-500 transition-transform duration-300 group-hover:scale-110">
                        {tech.icon}
                      </div>

                      <h4 className="text-center text-lg font-semibold text-white">
                        {tech.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-blue-600 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 p-10 text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            Always Learning 🚀
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-white/90">
            I continuously explore modern technologies, cloud-native
            architectures, Infrastructure as Code, container orchestration,
            automation testing, CI/CD pipelines, AI-powered development,
            monitoring, and scalable software engineering practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}