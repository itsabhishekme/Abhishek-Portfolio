"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaAward,
  FaExternalLinkAlt,
  FaDownload,
} from "react-icons/fa";

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialId?: string;
  description: string;
  image: string;
  certificateUrl?: string;
  skills: string[];
}

interface CertificateCardProps {
  certificate: Certificate;
  index?: number;
}

export default function CertificateCard({
  certificate,
  index = 0,
}: CertificateCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -10,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
      className="group overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-xl transition-all duration-300 hover:border-blue-500"
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
          <FaAward />
          Certified
        </div>
      </div>

      {/* Content */}

      <div className="space-y-5 p-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            {certificate.title}
          </h2>

          <p className="mt-2 text-blue-400">
            {certificate.issuer}
          </p>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <FaCalendarAlt />

          <span>{certificate.issuedDate}</span>
        </div>

        {certificate.credentialId && (
          <div className="rounded-xl border border-slate-700 bg-slate-800 p-3">
            <p className="text-sm text-gray-400">
              Credential ID
            </p>

            <p className="mt-1 font-mono text-sm text-white">
              {certificate.credentialId}
            </p>
          </div>
        )}

        <p className="leading-7 text-gray-300">
          {certificate.description}
        </p>

        {/* Skills */}

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
            Skills Covered
          </h3>

          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 pt-4">
          {certificate.certificateUrl && (
            <Link
              href={certificate.certificateUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <FaExternalLinkAlt />

              View Certificate
            </Link>
          )}

          <Link
            href={certificate.image}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 font-semibold text-white transition hover:border-blue-500 hover:bg-slate-800"
          >
            <FaDownload />

            Download
          </Link>
        </div>
      </div>
    </motion.article>
  );
}