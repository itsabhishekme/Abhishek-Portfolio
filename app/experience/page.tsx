"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Besant Technologies",
    role: "DevOps Trainee",
    duration: "Jun 2026 - Present",
    color: "from-blue-600 to-cyan-500",
    description:
      "Currently learning and implementing DevOps tools through structured training and hands-on projects.",

    responsibilities: [
      "Linux Administration",
      "Git & GitHub",
      "Shell Scripting",
      "Docker Containerization",
      "Jenkins CI/CD",
      "Kubernetes",
      "Terraform",
      "AWS Cloud",
      "Infrastructure as Code",
      "CI/CD Pipeline Design",
    ],
  },

  {
    id: 2,
    company: "Datman",
    role: "QA Automation Engineer",
    duration: "Aug 2022 - Apr 2025",
    color: "from-purple-600 to-pink-500",

    description:
      "Worked as QA Automation Engineer developing scalable automation frameworks for Web, API and Database Testing.",

    responsibilities: [
      "Developed Cypress Automation Framework",
      "Implemented Playwright Automation",
      "API Testing using Postman",
      "SQL Database Validation",
      "Performance Testing using JMeter",
      "AWS CI/CD Integration",
      "Regression Automation",
      "Cross Browser Testing",
      "Agile Scrum Development",
      "Bug Tracking & Reporting",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Career Journey
          </p>

          <h1 className="text-5xl font-extrabold mt-3">
            Work Experience
          </h1>

          <div className="w-28 h-1 bg-cyan-500 rounded-full mx-auto mt-5" />

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto leading-8">
            Nearly 3 years of professional experience in QA Automation,
            Cypress, Playwright, API Testing, SQL, AWS CI/CD and currently
            transitioning into DevOps with Docker, Kubernetes, Terraform,
            Jenkins and Cloud technologies.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative border-l-4 border-cyan-500 ml-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="mb-16 ml-10"
            >
              {/* Timeline Dot */}

              <span className="absolute -left-[14px] flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 shadow-lg" />

              {/* Card */}

              <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-cyan-500 transition-all duration-300 shadow-xl">
                {/* Top */}

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="text-cyan-400" />

                      <h2 className="text-3xl font-bold">
                        {experience.role}
                      </h2>
                    </div>

                    <h3 className="text-xl text-cyan-400 mt-3">
                      {experience.company}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 bg-slate-800 px-5 py-3 rounded-xl">
                    <Calendar size={18} />

                    <span>{experience.duration}</span>
                  </div>
                </div>

                {/* Description */}

                <p className="text-gray-400 leading-8 mt-8">
                  {experience.description}
                </p>

                {/* Responsibilities */}

                <div className="grid md:grid-cols-2 gap-4 mt-10">
                  {experience.responsibilities.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        x: 5,
                      }}
                      className="flex items-center gap-3 bg-slate-800 rounded-xl p-4"
                    >
                      <CheckCircle2
                        className="text-green-400"
                        size={20}
                      />

                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Button */}

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: .95,
                  }}
                  className={`mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${experience.color} px-6 py-3 font-semibold`}
                >
                  View Projects

                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold">
            Looking for New Opportunities
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            I am actively seeking opportunities as a Junior DevOps Engineer,
            Cloud Engineer or Automation Engineer where I can contribute my QA
            Automation expertise while growing in modern DevOps technologies.
          </p>

          <button className="mt-10 rounded-xl bg-cyan-500 hover:bg-cyan-600 px-8 py-4 font-semibold transition">
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
}