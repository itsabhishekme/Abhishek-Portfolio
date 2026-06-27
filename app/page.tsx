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
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,#2563eb15,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d415,transparent_40%),linear-gradient(to_bottom,#020617,#0f172a,#020617)]" />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-white/[0.02]" />

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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent" />

        <div className="relative">
          <About />
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative">
          <Education />
        </div>
      </section>

      {/* Career Transition */}
      <section
        id="transition"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />

        <div className="relative">
          <CareerTransition />
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-slate-900/60" />

        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="relative">
          <SkillGrid />
        </div>
      </section>

      {/* Tech Stack */}
      <section
        id="tech-stack"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />

        <div className="relative">
          <TechStack />
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-slate-900/60" />

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="relative container mx-auto px-6">
          <TimelineCard
            year=""
            title=""
            company=""
            location=""
            description=""
          />
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />

        <div className="relative">
          <ProjectGrid />
        </div>
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-slate-900/60" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[180px]" />

        <div className="relative">
          <CertificateGrid />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="relative container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl">
              <ContactInfo />
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}