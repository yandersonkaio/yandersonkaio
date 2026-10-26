import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-11.25 sm:py-16.25 lg:py-17.5">
      <SectionHeading
        eyebrow="04 / Tecnologias"
        title="Meu universo técnico"
        description="Ferramentas e tecnologias que utilizo para transformar ideias em soluções."
      />
      <div className="mt-7 grid gap-3.25 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-surface p-5.5"
          >
            <Icon size={23} className="text-primary" />
            <h3 className="mt-4 text-[13px] font-bold">{title}</h3>
            <p className="mt-2 text-[11px] leading-[1.75] text-muted">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
