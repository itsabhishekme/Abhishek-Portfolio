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
    <main className="overflow-x-hidden">

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24"
      >
        <About />
      </section>

      {/* Education */}
      <section
        id="education"
        className="py-24 bg-slate-50 dark:bg-slate-900"
      >
        <Education />
      </section>

      {/* Career Transition */}
      <section
        id="transition"
        className="py-24"
      >
        <CareerTransition />
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-24 bg-slate-50 dark:bg-slate-900"
      >
        <SkillGrid />
      </section>

      {/* Tech Stack */}
      <section
        id="tech-stack"
        className="py-24"
      >
        <TechStack />
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="py-24 bg-slate-50 dark:bg-slate-900"
      >
        <TimelineCard year={""} title={""} company={""} location={""} description={""} />
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-24"
      >
        <ProjectGrid />
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="py-24 bg-slate-50 dark:bg-slate-900"
      >
        <CertificateGrid />
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24"
      >
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

    </main>
  );
}