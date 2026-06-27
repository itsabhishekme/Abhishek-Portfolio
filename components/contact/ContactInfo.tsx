"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

const contactDetails = [
  {
    title: "Email",
    value: "abhishekkumardipu@gmail.com",
    href: "mailto:abhishekkumardipu@gmail.com",
    icon: <FaEnvelope />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Phone",
    value: "+91 9142628227",
    href: "tel:+919142628227",
    icon: <FaPhoneAlt />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Location",
    value: "Bengaluru, Karnataka, India",
    href: "https://maps.google.com/?q=Bengaluru",
    icon: <FaMapMarkerAlt />,
    color: "from-orange-500 to-red-500",
  },
];

const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/your-github",
    icon: <FaGithub />,
    color: "hover:bg-gray-800",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/your-linkedin",
    icon: <FaLinkedin />,
    color: "hover:bg-blue-700",
  },
];

export default function ContactInfo() {
  return (
    <section
      id="contact-info"
      className="w-full"
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        {/* Heading */}

        <div>
          <p className="font-semibold uppercase tracking-[5px] text-blue-500">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Let's Build Something Amazing Together
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            I am actively looking for opportunities as a Junior DevOps
            Engineer or QA Automation Engineer. Feel free to reach out for
            full-time roles, freelance work, collaboration, or technical
            discussions.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="space-y-5">
          {contactDetails.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={
                item.title === "Location"
                  ? "_blank"
                  : "_self"
              }
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group flex items-center gap-5 rounded-2xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-2xl text-white`}
              >
                {item.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-gray-400">
                  {item.value}
                </p>
              </div>

              <FaArrowRight className="text-gray-500 transition group-hover:translate-x-2 group-hover:text-blue-500" />
            </motion.a>
          ))}
        </div>

        {/* Resume Download */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="rounded-3xl border border-blue-700 bg-gradient-to-br from-blue-600 to-cyan-600 p-8"
        >
          <h3 className="text-2xl font-bold text-white">
            Download My Resume
          </h3>

          <p className="mt-3 leading-7 text-blue-100">
            Download the latest version of my resume to explore my
            experience, projects, certifications, and technical skills.
          </p>

          <a
            href="/resume/Abhishek-Kumar-Resume.pdf"
            download
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:scale-105"
          >
            <FaDownload />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}

        <div>
          <h3 className="mb-6 text-2xl font-bold text-white">
            Connect With Me
          </h3>

          <div className="flex gap-5">
            {socialLinks.map((social) => (
              <Link
                key={social.title}
                href={social.href}
                target="_blank"
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-2xl text-white transition-all duration-300 hover:-translate-y-2 ${social.color}`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Availability */}

        <div className="rounded-2xl border border-emerald-600 bg-emerald-500/10 p-6">
          <div className="flex items-center gap-4">
            <span className="h-4 w-4 animate-pulse rounded-full bg-emerald-500"></span>

            <div>
              <h4 className="text-lg font-bold text-white">
                Available for Work
              </h4>

              <p className="mt-1 text-gray-300">
                Open to Full-Time, Remote, Hybrid, and Freelance
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}