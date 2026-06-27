"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Gateway Automation",
    subtitle: "QA Automation Project",
    image: "/images/projects/gateway.png",
    description:
      "Developed an end-to-end automation framework using Cypress for Gateway applications. Automated UI, API, database validation, and performance testing while integrating CI/CD pipelines.",

    technologies: [
      "Cypress",
      "Postman",
      "JavaScript",
      "SQL",
      "JMeter",
      "AWS",
      "Git",
    ],

    githubUrl: "https://github.com/yourusername/gateway-automation",
    liveUrl: "",
    featured: true,
  },

  {
    id: 2,
    title: "Customer Portal",
    subtitle: "Enterprise Automation",
    image: "/images/projects/customer.png",
    description:
      "Designed and implemented a scalable Cypress automation framework achieving over 90% UI automation coverage with API testing and SQL validation.",

    technologies: [
      "Cypress",
      "Postman",
      "JavaScript",
      "SQL",
      "JMeter",
      "GitHub Actions",
    ],

    githubUrl: "https://github.com/yourusername/customer-portal",
    liveUrl: "",
    featured: true,
  },

  {
    id: 3,
    title: "Admin Portal",
    subtitle: "Playwright Framework",
    image: "/images/projects/admin.png",
    description:
      "Built a modern Playwright automation framework with reusable components, API validation, reporting, screenshots, and CI/CD integration.",

    technologies: [
      "Playwright",
      "TypeScript",
      "Postman",
      "Git",
      "Azure DevOps",
    ],

    githubUrl: "https://github.com/yourusername/admin-portal",
    liveUrl: "",
    featured: true,
  },

  {
    id: 4,
    title: "DevOps CI/CD Pipeline",
    subtitle: "Learning Project",
    image: "/images/projects/devops.png",
    description:
      "Created an automated CI/CD pipeline using Docker, Jenkins, Kubernetes, Terraform and AWS with Infrastructure as Code and GitHub integration.",

    technologies: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
      "AWS",
      "Linux",
      "Git",
    ],

    githubUrl: "https://github.com/yourusername/devops-project",
    liveUrl: "",
    featured: true,
  },
];

export default function ProjectGrid() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-24"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-blue-600 bg-blue-600/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A collection of automation frameworks, DevOps projects,
            cloud deployments, CI/CD pipelines and enterprise
            applications that showcase my experience in software
            quality engineering and DevOps.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                featured={project.featured}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}