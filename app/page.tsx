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
      <section id="home">
        <Hero />
      </section>

      <section id="about" className="py-24">
        <About />
      </section>

      <section
        id="education"
        className="bg-slate-50 py-24 dark:bg-slate-900"
      >
        <Education />
      </section>

      <section id="transition" className="py-24">
        <CareerTransition />
      </section>

      <section
        id="skills"
        className="bg-slate-50 py-24 dark:bg-slate-900"
      >
        <SkillGrid />
      </section>

      <section id="tech-stack" className="py-24">
        <TechStack />
      </section>

      <section
        id="experience"
        className="bg-slate-50 py-24 dark:bg-slate-900"
      >
        <TimelineCard
          year=""
          title=""
          company=""
          location=""
          description=""
        />
      </section>

      <section id="projects" className="py-24">
        <ProjectGrid />
      </section>

      <section
        id="certifications"
        className="bg-slate-50 py-24 dark:bg-slate-900"
      >
        <CertificateGrid />
      </section>

      <section id="contact" className="py-24">
        <div className="container mx-auto grid gap-16 px-6 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}