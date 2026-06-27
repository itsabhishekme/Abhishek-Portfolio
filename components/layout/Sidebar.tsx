"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaCertificate,
  FaBlog,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaTimes,
} from "react-icons/fa";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    title: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    title: "About",
    href: "/about",
    icon: FaUser,
  },
  {
    title: "Skills",
    href: "/skills",
    icon: FaCode,
  },
  {
    title: "Experience",
    href: "/experience",
    icon: FaBriefcase,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FaProjectDiagram,
  },
  {
    title: "Certifications",
    href: "/certifications",
    icon: FaCertificate,
  },
  {
    title: "Blogs",
    href: "/blogs",
    icon: FaBlog,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: FaEnvelope,
  },
];

export default function Sidebar({
  open,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          />

          {/* Sidebar */}

          <motion.aside
            initial={{ x: 350 }}
            animate={{ x: 0 }}
            exit={{ x: 350 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col bg-slate-950 shadow-2xl"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-800 p-6">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Abhishek
                </h2>

                <p className="text-sm text-blue-400">
                  Portfolio
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-lg p-2 text-white transition hover:bg-slate-800"
              >
                <FaTimes size={22} />
              </button>
            </div>

            {/* Navigation */}

            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;

                  const active =
                    pathname === item.href;

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                    >
                      <motion.div
                        whileHover={{
                          x: 6,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        onClick={onClose}
                        className={`flex items-center gap-4 rounded-xl px-5 py-4 transition ${
                          active
                            ? "bg-blue-600 text-white"
                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                        }`}
                      >
                        <Icon size={20} />

                        <span className="font-medium">
                          {item.title}
                        </span>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              {/* Resume */}

              <div className="mt-10">
                <a
                  href="/resume/Abhishek-Kumar-Resume.pdf"
                  download
                  className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  <FaDownload />

                  Download Resume
                </a>
              </div>
            </nav>

            {/* Footer */}

            <div className="border-t border-slate-800 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Connect With Me
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-800 p-3 text-white transition hover:bg-blue-600"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-800 p-3 text-white transition hover:bg-blue-600"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="mailto:abhishekkumardipu@gmail.com"
                  className="rounded-full bg-slate-800 p-3 text-white transition hover:bg-blue-600"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>

              <div className="mt-6 border-t border-slate-800 pt-5">
                <p className="text-sm text-slate-500">
                  © {new Date().getFullYear()}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Abhishek Kumar
                </p>

                <p className="text-xs text-slate-500">
                  DevOps Engineer Portfolio
                </p>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
