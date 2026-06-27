"use client";

import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import {
  FaAws,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaJenkins,
} from "react-icons/fa";
import {
  SiTerraform,
  SiKubernetes,
  SiCypress,
} from "react-icons/si";

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credential?: string;
  image: string;
  icon: React.ReactNode;
  color: string;
  verify?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Cypress Modern Automation Testing",
    issuer: "Udemy",
    date: "2025",
    description:
      "Mastered Cypress end-to-end automation testing, framework development, API testing, fixtures, intercepts, CI/CD integration, and best automation practices.",
    image: "/images/certificates/cypress.png",
    icon: <SiCypress />,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 3,
    title: "Linux Administration",
    issuer: "Besant Technologies",
    date: "2026",
    description:
      "Linux command line, file systems, users, permissions, networking, shell scripting and server administration.",
    image: "/images/certificates/linux.png",
    icon: <FaLinux />,
    color: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "Docker Essentials",
    issuer: "Besant Technologies",
    date: "2026",
    description:
      "Containerization, Docker Images, Docker Compose, Volumes, Networks and container deployment.",
    image: "/images/certificates/docker.png",
    icon: <FaDocker />,
    color: "from-sky-500 to-blue-700",
  },
  {
    id: 5,
    title: "Kubernetes",
    issuer: "Besant Technologies",
    date: "2026",
    description:
      "Pods, Deployments, ReplicaSets, Services, ConfigMaps, Secrets, Ingress and production deployments.",
    image: "/images/certificates/kubernetes.png",
    icon: <SiKubernetes />,
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: 6,
    title: "AWS Cloud",
    issuer: "Besant Technologies",
    date: "2026",
    description:
      "EC2, IAM, VPC, S3, Load Balancer, Auto Scaling, Route53 and Cloud fundamentals.",
    image: "/images/certificates/aws.png",
    icon: <FaAws />,
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: 7,
    title: "Terraform",
    issuer: "Besant Technologies",
    date: "2026",
    description:
      "Infrastructure as Code using Terraform modules, variables, state files and AWS provisioning.",
    image: "/images/certificates/terraform.png",
    icon: <SiTerraform />,
    color: "from-purple-500 to-violet-700",
  },
  {
    id: 8,
    title: "Git & GitHub",
    issuer: "Self Learning",
    date: "2026",
    description:
      "Version control, branching strategies, merge requests, GitHub Actions and collaborative development.",
    image: "/images/certificates/git.png",
    icon: <FaGitAlt />,
    color: "from-red-500 to-orange-500",
  },
  {
    id: 9,
    title: "Jenkins CI/CD",
    issuer: "Besant Technologies",
    date: "2026",
    description:
      "Pipeline creation, Declarative Pipeline, Jenkinsfile, build automation, Docker integration and deployment.",
    image: "/images/certificates/jenkins.png",
    icon: <FaJenkins />,
    color: "from-gray-600 to-slate-800",
  },
];

export default function CertificateGrid() {
  return (
    <section
      id="certifications"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[6px] text-blue-500">
            Certifications
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Learning & Certifications
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            My professional learning journey includes Automation Testing,
            DevOps, Cloud Computing, Containerization, Infrastructure as
            Code and Continuous Integration technologies.
          </p>

          <div className="mx-auto mt-8 h-1 w-32 rounded-full bg-blue-600" />
        </motion.div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
            </motion.div>
          ))}
        </div>

        {/* Footer */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 rounded-3xl border border-slate-700 bg-slate-900 p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Continuous Learning
          </h3>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-400">
            Technology evolves every day. I believe the best engineers
            never stop learning. My current focus is mastering Docker,
            Kubernetes, AWS, Jenkins, Terraform, Linux, GitHub Actions,
            monitoring, and cloud-native DevOps practices while building
            real-world production projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}