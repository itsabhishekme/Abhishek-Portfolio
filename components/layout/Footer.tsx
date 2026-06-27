"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
  FaDocker,
  FaAws,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFileDownload,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiCypress,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Skills", href: "/skills" },
    { title: "Experience", href: "/experience" },
    { title: "Projects", href: "/projects" },
    { title: "Certifications", href: "/certifications" },
    { title: "Blogs", href: "/blogs" },
    { title: "Contact", href: "/contact" },
  ];

  const technologies = [
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiTerraform />, name: "Terraform" },
    { icon: <SiJenkins />, name: "Jenkins" },
    { icon: <SiCypress />, name: "Cypress" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiNextdotjs />, name: "Next.js" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#2563eb15,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d415,transparent_35%)]" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* About */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Abhishek Kumar
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Passionate QA Automation Engineer transitioning into DevOps.
              Experienced in AWS, Docker, Kubernetes, Terraform, Jenkins,
              Cypress, Playwright, Linux and modern CI/CD practices.
              I love building scalable cloud-native applications and
              automation frameworks.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-3 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-3 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:abhishekkumardipu@gmail.com"
                className="rounded-full bg-slate-800 p-3 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="transition-all duration-300 hover:pl-2 hover:text-blue-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">
              Technologies
            </h3>

            <div className="grid grid-cols-4 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  title={tech.name}
                  className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-3xl text-blue-500 transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5 text-slate-400">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                abhishekkumardipu@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" />
                +91 9142628227
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500" />
                Bengaluru, Karnataka, India
              </p>
            </div>

            <a
              href="/resume/Abhishek-Kumar-Resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
            >
              <FaFileDownload />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">
          <p className="flex flex-wrap items-center justify-center gap-2 text-center text-slate-500">
            © {currentYear}
            <span className="font-semibold text-white">
              Abhishek Kumar
            </span>
            Made with
            <FaHeart className="text-red-500" />
            using
            <span className="font-medium text-blue-400">
              Next.js
            </span>
            &
            <span className="font-medium text-cyan-400">
              TypeScript
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}