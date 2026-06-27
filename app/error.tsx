"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBug, FaHome, FaRedo } from "react-icons/fa";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900/70 p-10 shadow-2xl backdrop-blur-lg"
      >
        {/* Icon */}
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="mb-8 flex justify-center"
        >
          <div className="rounded-full bg-red-500/20 p-6">
            <FaBug className="text-6xl text-red-500" />
          </div>
        </motion.div>

        {/* Title */}
        <h1 className="text-center text-5xl font-bold text-white">
          Oops!
        </h1>

        <p className="mt-4 text-center text-lg text-gray-300">
          Something unexpected happened while loading this page.
        </p>

        <p className="mt-2 text-center text-gray-500">
          Don't worry, you can try again or return to the homepage.
        </p>

        {/* Error Details */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 overflow-auto rounded-xl border border-red-800 bg-red-950 p-4">
            <h3 className="mb-2 font-semibold text-red-400">
              Error Details
            </h3>

            <pre className="whitespace-pre-wrap text-sm text-red-300">
              {error.message}
            </pre>

            {error.digest && (
              <p className="mt-4 text-xs text-red-400">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <FaRedo />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            <FaHome />
            Back Home
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-gray-500">
          Abhishek Kumar Portfolio • Built with Next.js 15, React & TypeScript
        </div>
      </motion.div>
    </main>
  );
}