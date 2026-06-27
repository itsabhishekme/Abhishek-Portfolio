"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaPython,
  FaReact,
  FaDatabase,
  FaJenkins,
  FaGithub,
  FaTerminal,
  FaCloud,
  FaCode,
  FaServer,
  FaTools,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiPostman,
  SiTerraform,
  SiKubernetes,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiGithubactions,
  SiNginx,
  SiVercel,
  SiRedis,
  SiPrometheus,
  SiGrafana,
  SiFirebase,
  SiLinux,
  SiJsonwebtokens,
} from "react-icons/si";

interface Skill {
  name: string;
  level: number;
  experience: string;
  description: string;
  icon: ReactNode;
  color: string;
}

const automation: Skill[] = [
  {
    name: "Playwright",
    level: 96,
    experience: "2+ Years",
    description:
      "Cross-browser end-to-end testing, UI automation, API validation, parallel execution and reporting.",
    icon: <FaCode />,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Cypress",
    level: 95,
    experience: "2+ Years",
    description:
      "Enterprise UI automation, regression testing, component testing and CI integration.",
    icon: <FaShieldAlt />,
    color: "from-green-600 to-teal-500",
  },
  {
    name: "Postman",
    level: 94,
    experience: "2+ Years",
    description:
      "REST API automation, collections, environments, Newman execution and API validation.",
    icon: <SiPostman />,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "SQL",
    level: 92,
    experience: "2+ Years",
    description:
      "Database validation, joins, stored procedures, test data verification and reporting.",
    icon: <SiMysql />,
    color: "from-blue-600 to-cyan-500",
  },
];

const devops: Skill[] = [
  {
    name: "AWS",
    level: 86,
    experience: "Learning + Projects",
    description:
      "EC2, S3, IAM, VPC, Route53, CloudWatch, Load Balancer and Auto Scaling.",
    icon: <FaAws />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Docker",
    level: 88,
    experience: "Projects",
    description:
      "Containerization, Docker Compose, Images, Volumes, Networks and Multi-stage builds.",
    icon: <FaDocker />,
    color: "from-sky-500 to-blue-700",
  },
  {
    name: "Kubernetes",
    level: 82,
    experience: "Projects",
    description:
      "Pods, Deployments, Services, ConfigMaps, Secrets and Ingress.",
    icon: <SiKubernetes />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Terraform",
    level: 80,
    experience: "Projects",
    description:
      "Infrastructure as Code, AWS provisioning, reusable modules and automation.",
    icon: <SiTerraform />,
    color: "from-violet-600 to-indigo-600",
  },
  {
    name: "Jenkins",
    level: 84,
    experience: "Projects",
    description:
      "Pipeline automation, CI/CD, deployment workflows and testing integration.",
    icon: <FaJenkins />,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "GitHub Actions",
    level: 82,
    experience: "Projects",
    description:
      "CI/CD automation, workflow creation, deployment pipelines and testing.",
    icon: <SiGithubactions />,
    color: "from-slate-700 to-black",
  },
  {
    name: "Linux",
    level: 90,
    experience: "Daily",
    description:
      "Shell scripting, process management, networking, permissions and automation.",
    icon: <FaLinux />,
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "Git",
    level: 94,
    experience: "Professional",
    description:
      "Version control, branching, merging, Git Flow and collaborative development.",
    icon: <FaGitAlt />,
    color: "from-orange-600 to-red-500",
  },
];

const programming: Skill[] = [
  {
    name: "JavaScript",
    level: 94,
    experience: "3+ Years",
    description:
      "Modern ES6+, asynchronous programming, DOM manipulation and testing.",
    icon: <SiJavascript />,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "TypeScript",
    level: 88,
    experience: "2+ Years",
    description:
      "Strong typing, interfaces, generics and scalable application development.",
    icon: <SiTypescript />,
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "React",
    level: 90,
    experience: "Projects",
    description:
      "Hooks, Context API, reusable components and modern frontend architecture.",
    icon: <FaReact />,
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Next.js",
    level: 86,
    experience: "Projects",
    description:
      "App Router, SSR, SSG, API Routes, SEO and production deployment.",
    icon: <SiNextdotjs />,
    color: "from-gray-800 to-black",
  },
  {
    name: "Python",
    level: 82,
    experience: "Projects",
    description:
      "Automation scripts, backend programming and DevOps tooling.",
    icon: <FaPython />,
    color: "from-blue-500 to-yellow-500",
  },
  {
    name: "MongoDB",
    level: 78,
    experience: "Projects",
    description:
      "Document database, CRUD operations and backend integration.",
    icon: <SiMongodb />,
    color: "from-green-500 to-emerald-700",
  },
  {
    name: "Redis",
    level: 72,
    experience: "Learning",
    description:
      "Caching, sessions and high-performance data storage.",
    icon: <SiRedis />,
    color: "from-red-600 to-red-800",
  },
  {
    name: "Firebase",
    level: 80,
    experience: "Projects",
    description:
      "Authentication, Firestore, Storage and Hosting.",
    icon: <SiFirebase />,
    color: "from-yellow-500 to-orange-500",
  },
];

const additionalTools = [
  {
    icon: <FaTerminal />,
    title: "Shell Scripting",
  },
  {
    icon: <SiPrometheus />,
    title: "Prometheus",
  },
  {
    icon: <SiGrafana />,
    title: "Grafana",
  },
  {
    icon: <SiNginx />,
    title: "Nginx",
  },
  {
    icon: <FaServer />,
    title: "Apache",
  },
  {
    icon: <SiVercel />,
    title: "Vercel",
  },
  {
    icon: <FaCloud />,
    title: "Cloud",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
  },
  {
    icon: <FaTools />,
    title: "DevOps",
  },
  {
    icon: <SiJsonwebtokens />,
    title: "JWT",
  },
];

function SkillCard({
  title,
  subtitle,
  skills,
}: {
  title: string;
  subtitle: string;
  skills: Skill[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -10 }}
      className="rounded-3xl border border-slate-800 bg-white p-8 shadow-2xl"
    >
      <h2 className="text-3xl font-bold text-blue-700">
        {title}
      </h2>

      <p className="mt-2 mb-8 text-gray-600">
        {subtitle}
      </p>

      <div className="space-y-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.02 }}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-xl bg-gradient-to-r ${skill.color} p-3 text-2xl text-white`}
                >
                  {skill.icon}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {skill.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {skill.experience}
                  </p>
                </div>
              </div>

              <span className="text-lg font-bold text-blue-600">
                {skill.level}%
              </span>
            </div>

            <div className="mb-3 h-3 overflow-hidden rounded-full bg-gray-200">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${skill.level}%`,
                }}
                transition={{
                  duration: 1.5,
                }}
                viewport={{ once: true }}
                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
              />
            </div>

            <p className="text-sm leading-6 text-gray-600">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
              Professional Skills
            </span>

            <h1 className="mt-6 text-6xl font-black text-gray-900">
              Technical Expertise
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-600">
              My expertise spans QA Automation, Cloud Computing,
              DevOps, Full Stack Development and Infrastructure
              Automation. I continuously learn and build real-world
              production-ready applications using modern technologies.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-3">
            <SkillCard
              title="QA Automation"
              subtitle="Automation Testing & API Validation"
              skills={automation}
            />

            <SkillCard
              title="DevOps & Cloud"
              subtitle="Infrastructure, CI/CD & Cloud Platforms"
              skills={devops}
            />

            <SkillCard
              title="Programming"
              subtitle="Frontend, Backend & Databases"
              skills={programming}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24"
          >
            <h2 className="mb-10 text-center text-4xl font-bold text-gray-900">
              Additional Tools & Technologies
            </h2>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
              {additionalTools.map((tool) => (
                <motion.div
                  key={tool.title}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-lg"
                >
                  <div className="mb-4 flex justify-center text-4xl text-blue-600">
                    {tool.icon}
                  </div>

                  <h3 className="font-semibold text-gray-800">
                    {tool.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-700 p-14 text-white shadow-2xl"
          >
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-4xl">
                <h2 className="text-5xl font-bold">
                  Current Learning Journey 🚀
                </h2>

                <p className="mt-8 text-lg leading-9 text-blue-100">
                  I am transitioning from QA Automation Engineer to
                  DevOps Engineer by building production-grade projects
                  using Docker, Kubernetes, Terraform, Jenkins, AWS,
                  Linux, GitHub Actions, Monitoring, Infrastructure as
                  Code, AI-assisted development and scalable cloud-native
                  architectures. My goal is to design secure, automated
                  and highly available deployment pipelines while
                  continuously improving software delivery practices.
                </p>
              </div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="flex justify-center"
              >
                <FaRocket className="text-8xl text-yellow-300" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}