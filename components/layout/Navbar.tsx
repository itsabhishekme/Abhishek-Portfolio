"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Certifications",
    href: "/certifications",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-700 bg-slate-950/95 backdrop-blur-xl shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          {/* Logo */}

          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <h1 className="text-3xl font-black tracking-wide text-white">
                Abhishek
                <span className="text-blue-500">.</span>
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => {
              const active = pathname === item.href;

              return (
                <Link key={item.name} href={item.href}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    className={`relative cursor-pointer text-[15px] font-semibold transition ${
                      active
                        ? "text-blue-500"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.name}

                    {active && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-blue-500"
                      />
                    )}
                  </motion.span>
                </Link>
              );
            })}
          </nav>

          {/* Right */}

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-800 p-3 text-white transition hover:bg-blue-600"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-800 p-3 text-white transition hover:bg-blue-600"
            >
              <FaLinkedin />
            </a>

            <a
              href="/resume/Abhishek-Kumar-Resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <FaDownload />

              Resume
            </a>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-3xl text-white lg:hidden"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              x: 300,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 300,
            }}
            transition={{
              duration: 0.35,
            }}
            className="fixed inset-0 z-40 bg-slate-950 pt-24 lg:hidden"
          >
            <nav className="flex flex-col px-8">
              {navLinks.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`block border-b border-slate-800 py-5 text-xl font-semibold ${
                      pathname === item.href
                        ? "text-blue-500"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-10 flex justify-center gap-5">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-4 text-2xl text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-4 text-2xl text-white"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="mt-10 px-8">
              <a
                href="/resume/Abhishek-Kumar-Resume.pdf"
                download
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
              >
                <FaDownload />

                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
