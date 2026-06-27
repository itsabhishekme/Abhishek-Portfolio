import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  ArrowRight,
  Tag,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Technical blogs by Abhishek Kumar covering DevOps, AWS, Docker, Kubernetes, Terraform, Linux, Git, Cypress, Playwright and QA Automation.",
};

type Blog = {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "My Journey From QA Automation To DevOps",
    description:
      "How I transitioned from QA Automation Engineer to becoming a DevOps Engineer by learning Linux, Docker, Kubernetes, Jenkins, AWS and Terraform.",
    category: "Career",
    readTime: "8 min read",
    date: "June 2026",
    slug: "#",
  },
  {
    id: 2,
    title: "Docker For Beginners",
    description:
      "Learn Docker fundamentals including Images, Containers, Dockerfile, Volumes, Networks and Docker Compose.",
    category: "Docker",
    readTime: "10 min read",
    date: "May 2026",
    slug: "#",
  },
  {
    id: 3,
    title: "Complete Git Commands Cheat Sheet",
    description:
      "Most useful Git commands every DevOps Engineer should know for daily development.",
    category: "Git",
    readTime: "7 min read",
    date: "May 2026",
    slug: "#",
  },
  {
    id: 4,
    title: "Deploy Next.js Application On Vercel",
    description:
      "Step-by-step guide to deploying your Next.js portfolio application to Vercel.",
    category: "Next.js",
    readTime: "5 min read",
    date: "April 2026",
    slug: "#",
  },
  {
    id: 5,
    title: "Kubernetes Architecture Explained",
    description:
      "Understand Pods, ReplicaSets, Deployments, Services, Ingress and Namespaces.",
    category: "Kubernetes",
    readTime: "12 min read",
    date: "April 2026",
    slug: "#",
  },
  {
    id: 6,
    title: "Terraform Basics",
    description:
      "Infrastructure as Code with Terraform including Providers, Resources, Variables and State.",
    category: "Terraform",
    readTime: "9 min read",
    date: "March 2026",
    slug: "#",
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <span className="rounded-full border border-cyan-500 px-4 py-2 text-sm text-cyan-400">
            BLOGS
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-6xl">
            Technical
            <span className="text-cyan-400"> Blogs</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Welcome to my technical blog where I share practical
            knowledge about DevOps, Cloud Computing,
            Linux, AWS, Docker, Kubernetes,
            Terraform, Git, CI/CD,
            Cypress and Playwright Automation.
          </p>

        </div>
      </section>

      {/* Search */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="relative mb-14">

          <Search
            className="absolute left-5 top-4 text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search blog..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 py-4 pl-14 pr-4 outline-none transition focus:border-cyan-400"
          />

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >

              <div className="mb-6 flex items-center justify-between">

                <span className="flex items-center gap-2 rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
                  <Tag size={16} />
                  {blog.category}
                </span>

              </div>

              <h2 className="text-2xl font-bold">
                {blog.title}
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                {blog.description}
              </p>

              <div className="mt-8 flex items-center justify-between text-sm text-slate-500">

                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  {blog.date}
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={16} />
                  {blog.readTime}
                </div>

              </div>

              <Link
                href={blog.slug}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Read Article

                <ArrowRight size={18} />

              </Link>

            </article>
          ))}

        </div>
      </section>

      {/* Newsletter */}

      <section className="mx-auto max-w-6xl px-6 pb-24">

        <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-12 text-center">

          <h2 className="text-4xl font-bold">
            Stay Updated
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-100">
            Subscribe to receive articles about DevOps,
            Cloud Computing,
            Linux,
            Docker,
            Kubernetes,
            Terraform,
            Automation Testing
            and Software Engineering.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 md:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-white/30 bg-white/10 px-5 py-4 text-white placeholder:text-slate-300 outline-none"
            />

            <button
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              Subscribe
            </button>

          </div>

        </div>

      </section>
    </main>
  );
}