"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

interface SocialItem {
  name: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

const socialLinks: SocialItem[] = [
  {
    name: "GitHub",
    icon: <FaGithub size={30} />,
    href: "https://github.com/yourusername",
    color: "hover:bg-gray-900",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    href: "https://linkedin.com/in/yourusername",
    color: "hover:bg-blue-700",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={30} />,
    href: "mailto:abhishekkumardipu@gmail.com",
    color: "hover:bg-red-600",
  },
  {
    name: "Phone",
    icon: <FaPhone size={30} />,
    href: "tel:+919142628227",
    color: "hover:bg-green-600",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={30} />,
    href: "https://twitter.com/yourusername",
    color: "hover:bg-sky-500",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={30} />,
    href: "https://instagram.com/yourusername",
    color: "hover:bg-pink-600",
  },
];

export default function SocialLinks() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            Connect With Me
          </h2>

          <p className="mt-4 text-gray-400">
            Feel free to connect through any platform below.
          </p>
        </motion.div>

        {/* Social Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <Link
                href={social.href}
                target={
                  social.href.startsWith("http")
                    ? "_blank"
                    : "_self"
                }
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 rounded-2xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 ${social.color}`}
              >
                <div className="rounded-full bg-slate-800 p-4 text-blue-400 transition-all group-hover:bg-white group-hover:text-black">
                  {social.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {social.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {social.href
                      .replace("mailto:", "")
                      .replace("tel:", "")}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>

        {/* Bottom Message */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-400">
            Open to{" "}
            <span className="font-semibold text-blue-400">
              Junior DevOps Engineer
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-400">
              Cloud Engineer
            </span>{" "}
            opportunities.
          </p>
        </motion.div>

      </div>
    </section>
  );
}