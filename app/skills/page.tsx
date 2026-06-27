"use client";

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
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiPostman,
  SiCypress,
  SiPlaywright,
  SiTerraform,
  SiKubernetes,
  SiJmeter,
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const automation: Skill[] = [
  { name: "Cypress", level: 95, icon: <SiCypress /> },
  { name: "Playwright", level: 90, icon: <SiPlaywright /> },
  { name: "Postman API", level: 92, icon: <SiPostman /> },
  { name: "JMeter", level: 85, icon: <SiJmeter /> },
  { name: "SQL", level: 90, icon: <SiMysql /> },
];

const devops: Skill[] = [
  { name: "AWS", level: 80, icon: <FaAws /> },
  { name: "Docker", level: 82, icon: <FaDocker /> },
  { name: "Kubernetes", level: 72, icon: <SiKubernetes /> },
  { name: "Terraform", level: 70, icon: <SiTerraform /> },
  { name: "Jenkins", level: 78, icon: <FaJenkins /> },
  { name: "Linux", level: 85, icon: <FaLinux /> },
  { name: "Git", level: 90, icon: <FaGitAlt /> },
];

const programming: Skill[] = [
  { name: "JavaScript", level: 92, icon: <SiJavascript /> },
  { name: "TypeScript", level: 82, icon: <SiTypescript /> },
  { name: "Python", level: 80, icon: <FaPython /> },
  { name: "React", level: 84, icon: <FaReact /> },
  { name: "Next.js", level: 80, icon: <SiNextdotjs /> },
  { name: "Database", level: 88, icon: <FaDatabase /> },
];

function SkillCard({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-white shadow-lg border border-gray-200 p-8"
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-8">
        {title}
      </h2>

      <div className="space-y-7">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-2">

              <div className="flex items-center gap-3">

                <div className="text-2xl text-blue-600">
                  {skill.icon}
                </div>

                <span className="font-semibold">
                  {skill.name}
                </span>

              </div>

              <span className="font-bold text-blue-600">
                {skill.level}%
              </span>

            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{
                  duration: 1.4,
                }}
                viewport={{ once: true }}
                className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600"
              />

            </div>

          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gray-100">

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .7 }}
            className="text-center mb-16"
          >

            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              Technical Skills
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced in QA Automation, API Testing,
              Cloud Technologies and modern DevOps tools.
              Passionate about Infrastructure as Code,
              CI/CD pipelines, Cloud Engineering and
              Full Stack Development.
            </p>

          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">

            <SkillCard
              title="QA Automation"
              skills={automation}
            />

            <SkillCard
              title="DevOps & Cloud"
              skills={devops}
            />

            <SkillCard
              title="Programming"
              skills={programming}
            />

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="mt-20"
          >

            <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl text-white p-12 shadow-xl">

              <h2 className="text-4xl font-bold mb-6">
                Current Learning Journey
              </h2>

              <p className="text-lg leading-8">

                I am transitioning from QA Automation
                to DevOps by building real-world projects
                using Docker, Kubernetes, Terraform,
                Jenkins, AWS, Linux, GitHub Actions,
                Shell Scripting, Next.js and AI-powered
                development workflows.

              </p>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}