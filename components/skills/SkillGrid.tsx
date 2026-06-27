"use client";

import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaPython,
  FaJava,
  FaDatabase,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiPostman,
  SiCypress,
  SiPlaywright,
  SiJavascript,
  SiTypescript,
  SiMysql,
} from "react-icons/si";

interface Skill {
  title: string;
  level: number;
  icon: React.ReactNode;
  color: string;
  category: string;
}

const skills: Skill[] = [
  {
    title: "AWS",
    level: 75,
    icon: <FaAws />,
    color: "text-orange-400",
    category: "Cloud",
  },
  {
    title: "Docker",
    level: 80,
    icon: <FaDocker />,
    color: "text-sky-400",
    category: "DevOps",
  },
  {
    title: "Kubernetes",
    level: 65,
    icon: <SiKubernetes />,
    color: "text-blue-500",
    category: "DevOps",
  },
  {
    title: "Jenkins",
    level: 70,
    icon: <SiJenkins />,
    color: "text-red-500",
    category: "DevOps",
  },
  {
    title: "Terraform",
    level: 65,
    icon: <SiTerraform />,
    color: "text-purple-500",
    category: "DevOps",
  },
  {
    title: "Linux",
    level: 85,
    icon: <FaLinux />,
    color: "text-yellow-400",
    category: "OS",
  },
  {
    title: "Git",
    level: 90,
    icon: <FaGitAlt />,
    color: "text-orange-500",
    category: "Version Control",
  },
  {
    title: "Cypress",
    level: 95,
    icon: <SiCypress />,
    color: "text-green-400",
    category: "Automation",
  },
  {
    title: "Playwright",
    level: 90,
    icon: <SiPlaywright />,
    color: "text-lime-400",
    category: "Automation",
  },
  {
    title: "Postman",
    level: 92,
    icon: <SiPostman />,
    color: "text-orange-500",
    category: "API",
  },
  {
    title: "JavaScript",
    level: 92,
    icon: <SiJavascript />,
    color: "text-yellow-300",
    category: "Programming",
  },
  {
    title: "TypeScript",
    level: 88,
    icon: <SiTypescript />,
    color: "text-blue-500",
    category: "Programming",
  },
  {
    title: "Python",
    level: 75,
    icon: <FaPython />,
    color: "text-yellow-500",
    category: "Programming",
  },
  {
    title: "Java",
    level: 65,
    icon: <FaJava />,
    color: "text-red-500",
    category: "Programming",
  },
  {
    title: "SQL",
    level: 90,
    icon: <SiMysql />,
    color: "text-sky-500",
    category: "Database",
  },
  {
    title: "Database",
    level: 88,
    icon: <FaDatabase />,
    color: "text-green-500",
    category: "Database",
  },
];

export default function SkillGrid() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="font-semibold uppercase tracking-[5px] text-blue-500">
            Technical Skills
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            My Tech Stack
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Passionate about Automation Testing, DevOps, Cloud Computing,
            Infrastructure as Code and Modern Web Technologies.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition-all hover:border-blue-500"
            >
              {/* Icon */}

              <div
                className={`mb-6 text-6xl ${skill.color}`}
              >
                {skill.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-white">
                {skill.title}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-wide text-slate-400">
                {skill.category}
              </p>

              {/* Progress */}

              <div className="mt-8">
                <div className="mb-3 flex justify-between text-sm">
                  <span className="text-slate-400">
                    Proficiency
                  </span>

                  <span className="font-semibold text-blue-400">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-500"
                  />
                </div>
              </div>
            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}