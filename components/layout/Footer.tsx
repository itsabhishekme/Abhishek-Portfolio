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
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiCypress,
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
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiTerraform />,
      name: "Terraform",
    },
    {
      icon: <SiJenkins />,
      name: "Jenkins",
    },
    {
      icon: <SiCypress />,
      name: "Cypress",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* About */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Abhishek Kumar
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Passionate QA Automation Engineer transitioning into DevOps.
              I enjoy building scalable automation frameworks, cloud-native
              applications, CI/CD pipelines and modern infrastructure using
              Docker, Kubernetes, AWS and Terraform.
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

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="transition duration-300 hover:pl-2 hover:text-blue-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">
              Technologies
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  title={tech.name}
                  className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-900 text-3xl text-blue-500 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
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

            <div className="space-y-4 text-slate-400">
              <p>📧 abhishekkumardipu@gmail.com</p>
              <p>📱 +91 9142628227</p>
              <p>📍 Bengaluru, Karnataka, India</p>
            </div>

            <a
              href="/resume/Abhishek-Kumar-Resume.pdf"
              download
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">
          <p className="flex flex-wrap items-center justify-center gap-2 text-center text-slate-500">
            © {currentYear}
            <span className="font-semibold text-white">
              Abhishek Kumar
            </span>
            Made with
            <FaHeart className="text-red-500" />
            using Next.js, TypeScript & Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="rounded-full bg-blue-600 p-3 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}