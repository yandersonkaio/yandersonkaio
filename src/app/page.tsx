import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ProjectsSection from "@/components/home/ProjectsSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full flex-1 bg-background text-foreground">
      <div className="mx-auto w-full max-w-280 px-4.5 sm:px-7">
        <Hero />
        <Stats />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
