import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-11.25 sm:py-16.25 lg:py-17.5">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="02 / Portfólio"
          title="Projetos em destaque"
          description="Ideias que saíram do papel e viraram aplicações reais."
        />
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-[11px] border border-border px-3 py-2 text-[11px] font-bold text-muted transition hover:bg-surface-2 hover:text-foreground"
        >
          Fale sobre um projeto <ArrowRight size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4.5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
