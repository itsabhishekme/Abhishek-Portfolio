"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  duration: string;
  credential: string;
  description: string;
  skills: string[];
  link: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Cypress - Modern Automation Testing From Scratch + Frameworks",
    issuer: "Udemy",
    duration: "2025",
    credential: "Completed",
    description:
      "Learned Cypress automation framework, Page Object Model, API Testing, Fixtures, Custom Commands, CI/CD integration and real-world automation projects.",

    skills: [
      "Cypress",
      "JavaScript",
      "Automation",
      "API Testing",
      "Framework Design",
      "Regression Testing",
    ],

    link: "#",
  },

  {
    id: 2,
    title: "DevOps Training",
    issuer: "Besant Technologies",
    duration: "2026",
    credential: "In Progress",
    description:
      "Hands-on training covering Linux, Git, Docker, Jenkins, Kubernetes, AWS, Terraform and CI/CD pipelines.",

    skills: [
      "Linux",
      "Docker",
      "Git",
      "Jenkins",
      "Terraform",
      "AWS",
      "Kubernetes",
    ],

    link: "#",
  },

  {
    id: 3,
    title: "Playwright Automation",
    issuer: "Self Learning",
    duration: "2025",
    credential: "Completed",
    description:
      "Developed end-to-end automation frameworks using Playwright with TypeScript and API validations.",

    skills: [
      "Playwright",
      "TypeScript",
      "API Testing",
      "CI/CD",
      "JavaScript",
    ],

    link: "#",
  },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Award
            className="mx-auto text-blue-500 mb-4"
            size={60}
          />

          <h1 className="text-5xl font-bold">
            Certifications
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            Professional certifications and learning journey
            demonstrating continuous improvement in Automation
            Testing and DevOps technologies.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {certifications.map((certificate, index) => (

            <motion.div
              key={certificate.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                bg-gray-900
                rounded-3xl
                shadow-xl
                border
                border-gray-800
                overflow-hidden
              "
            >
              {/* Header */}

              <div className="bg-blue-600 p-8">

                <BadgeCheck size={45} />

                <h2 className="text-2xl font-bold mt-4">
                  {certificate.title}
                </h2>

                <p className="text-blue-100 mt-2">
                  {certificate.issuer}
                </p>

              </div>

              {/* Body */}

              <div className="p-8">

                <div className="flex items-center gap-2 text-gray-400 mb-5">
                  <Calendar size={18} />
                  {certificate.duration}
                </div>

                <span
                  className="
                  inline-block
                  bg-green-600
                  px-4
                  py-1
                  rounded-full
                  text-sm
                  font-semibold
                  mb-6
                  "
                >
                  {certificate.credential}
                </span>

                <p className="text-gray-300 leading-7">
                  {certificate.description}
                </p>

                {/* Skills */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {certificate.skills.map((skill) => (

                    <span
                      key={skill}
                      className="
                      bg-blue-500/20
                      border
                      border-blue-500
                      text-blue-300
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      "
                    >
                      {skill}
                    </span>

                  ))}

                </div>

                {/* Button */}

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  bg-blue-600
                  hover:bg-blue-700
                  transition
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  "
                >
                  View Certificate
                  <ExternalLink size={18} />
                </a>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
          mt-24
          bg-gradient-to-r
          from-blue-700
          to-indigo-700
          rounded-3xl
          p-12
          text-center
          "
        >
          <h2 className="text-4xl font-bold">
            Continuous Learning
          </h2>

          <p className="text-blue-100 mt-6 max-w-3xl mx-auto text-lg">
            I strongly believe technology evolves every day.
            My goal is to continuously upgrade my skills in
            Cloud Computing, DevOps, Infrastructure as Code,
            Automation Testing, AI, and Full Stack Development
            to build scalable, secure, and modern software
            solutions.
          </p>

          <button
            className="
            mt-10
            px-8
            py-4
            bg-white
            text-blue-700
            rounded-xl
            font-bold
            hover:scale-105
            transition
            "
          >
            More Certifications Coming Soon
          </button>
        </motion.div>

      </div>
    </main>
  );
}