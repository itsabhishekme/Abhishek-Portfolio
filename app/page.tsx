import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Education from "@/components/about/Education";
import CareerTransition from "@/components/about/CareerTransition";
import SkillGrid from "@/components/skills/SkillGrid";
import TechStack from "@/components/skills/TechStack";
import TimelineCard from "@/components/experience/TimelineCard";
import ProjectGrid from "@/components/projects/ProjectGrid";
import CertificateGrid from "@/components/certifications/CertificateGrid";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-slate-950 text-white">
      {/* Global Background */}
      <div className="pointer-events-none fixed inset-0 -z-30 bg-slate-950" />

      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,#2563eb18,transparent_35%),radial-gradient(circle_at_top_right,#06b6d418,transparent_30%),radial-gradient(circle_at_bottom_left,#7c3aed15,transparent_35%),radial-gradient(circle_at_bottom_right,#3b82f615,transparent_35%),linear-gradient(to_bottom,#020617,#0f172a,#020617)]" />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-transparent"
      >
        <Hero />
      </section>

      {/* About */}
      <section
        id="about"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent" />

        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative container mx-auto px-6">
          <div className="rounded-[32px] border border-slate-800/60 bg-slate-900/30 p-10 backdrop-blur-xl">
            <About />
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/20 to-slate-900/50" />

        <div className="absolute left-10 top-16 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute right-10 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="relative container mx-auto px-6">
          <div className="rounded-[32px] border border-slate-800/60 bg-slate-900/40 p-10 backdrop-blur-xl">
            <Education />
          </div>
        </div>
      </section>

      {/* Career Transition */}
      <section
        id="transition"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[220px]" />

        <div className="relative container mx-auto px-6">
          <div className="rounded-[32px] border border-slate-800/60 bg-slate-900/30 p-10 backdrop-blur-xl">
            <CareerTransition />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-slate-900/40" />

        <div className="absolute left-0 top-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[220px]" />

        <div className="relative container mx-auto px-6">
          <div className="rounded-[32px] border border-slate-800/60 bg-slate-900/40 p-10 backdrop-blur-xl">
            <SkillGrid />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section
        id="tech-stack"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[220px]" />

        <div className="relative container mx-auto px-6">
          <div className="rounded-[32px] border border-slate-800/60 bg-slate-900/30 p-10 backdrop-blur-xl">
            <TechStack />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-slate-900/40" />

        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[220px]" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[220px]" />

        <div className="relative container mx-auto px-6">
          <div className="rounded-[32px] border border-slate-800/60 bg-slate-900/40 p-10 backdrop-blur-xl">
            <TimelineCard
              year=""
              title=""
              company=""
              location=""
              description=""
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[240px]" />

        <div className="relative container mx-auto px-6">
          <div className="rounded-[32px] border border-slate-800/60 bg-slate-900/30 p-10 backdrop-blur-xl">
            <ProjectGrid />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-slate-900/40" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[220px]" />

        <div className="relative container mx-auto px-6">
          <div className="rounded-[32px] border border-slate-800/60 bg-slate-900/40 p-10 backdrop-blur-xl">
            <CertificateGrid />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[250px]" />

        <div className="relative container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-800/60 bg-slate-900/40 p-10 shadow-2xl backdrop-blur-xl">
              <ContactInfo />
            </div>

            <div className="rounded-[32px] border border-slate-800/60 bg-slate-900/40 p-10 shadow-2xl backdrop-blur-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}