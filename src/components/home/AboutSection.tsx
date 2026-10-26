import { ArrowRight, BookOpen, Brain, Code2, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  const highlights = [
    { icon: Sparkles, title: "Criatividade", text: "Ideias que viram produtos." },
    { icon: Brain, title: "Curiosidade", text: "Aprender e resolver desafios." },
    { icon: Code2, title: "Engenharia", text: "Construção com qualidade." },
    { icon: BookOpen, title: "Evolução", text: "Melhoria constante." },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-11.25 sm:py-16.25 lg:py-17.5">
      <SectionHeading eyebrow="01 / Sobre mim" title="Além do código" />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[18px] border border-border bg-surface p-6 sm:p-8">
          <h3 className="text-[21px] font-bold tracking-[-0.6px]">
            O que me move é construir.
          </h3>
          <p className="mt-4 text-sm leading-[1.9] text-muted">
            Sou desenvolvedor de software e gosto de transformar problemas
            cotidianos em soluções práticas. Minha trajetória combina
            experiência profissional em sistemas financeiros com a criação
            de projetos independentes.
          </p>
          <a
            href="#experience"
            className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
          >
            Minha trajetória <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 max-[400px]:grid-cols-1">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-[15px] border border-border bg-surface-2 p-5"
            >
              <Icon size={23} className="text-primary" />
              <h3 className="mt-3 text-[13px] font-bold">{title}</h3>
              <p className="mt-1 text-[11px] leading-5 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
