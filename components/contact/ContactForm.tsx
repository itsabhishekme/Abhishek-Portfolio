"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialState: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialState);

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      toast.success("Message sent successfully!");

      setFormData(initialState);
    } catch (error) {
      console.error(error);
      toast.error("Unable to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
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
        duration: 0.7,
      }}
      className="space-y-6 rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-xl"
    >
      <div>
        <h2 className="text-3xl font-bold text-white">
          Contact Me
        </h2>

        <p className="mt-2 text-gray-400">
          Have a project, internship opportunity or just want to
          say hello? Fill out the form below.
        </p>
      </div>

      {/* Name */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-300">
          Full Name
        </label>

        <div className="relative">
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="text"
            name="name"
            placeholder="Abhishek Kumar"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
          />
        </div>
      </div>

      {/* Email */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-300">
          Email Address
        </label>

        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
          />
        </div>
      </div>

      {/* Phone */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-300">
          Phone Number
        </label>

        <div className="relative">
          <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="tel"
            name="phone"
            placeholder="+91 9876543210"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
          />
        </div>
      </div>

      {/* Subject */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-300">
          Subject
        </label>

        <div className="relative">
          <FaCommentDots className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="text"
            name="subject"
            placeholder="Project Discussion"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
          />
        </div>
      </div>

      {/* Message */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-300">
          Message
        </label>

        <textarea
          rows={6}
          name="message"
          placeholder="Write your message..."
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                className="opacity-30"
              />

              <path
                fill="currentColor"
                d="M22 12a10 10 0 0 0-10-10v4a6 6 0 0 1 6 6h4z"
              />
            </svg>

            Sending...
          </>
        ) : (
          <>
            <FaPaperPlane />
            Send Message
          </>
        )}
      </button>
    </motion.form>
  );
}