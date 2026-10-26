import SectionHeading from "@/components/ui/SectionHeading";

export default function ExperienceSection() {
  const timeline = [
    {
      period: "2025 — atualmente",
      title: "Criação de projetos independentes",
      text: "Desenvolvimento de aplicações próprias, explorando produtos web, experiência do usuário e novas tecnologias.",
    },
    {
      period: "2020 — 2024",
      title: "Desenvolvimento de software para o mercado financeiro",
      text: "Atuação com C#/.NET, integrações entre sistemas, OMS, protocolo FIX, aplicações corporativas e bases de dados.",
    },
  ];

  return (
    <section id="experience" className="scroll-mt-24 py-11.25 sm:py-16.25 lg:py-17.5">
      <SectionHeading eyebrow="03 / Experiência" title="Minha trajetória" />

      <div className="mt-8 ml-2.25 grid gap-8 border-l border-border">
        {timeline.map((item) => (
          <div key={item.period} className="relative pl-6.75">
            <span className="absolute top-0 -left-1.75 size-3 rounded-full border-[3px] border-primary bg-background" />
            <time className="text-[11px] font-bold text-primary">
              {item.period}
            </time>
            <h3 className="mt-1.5 text-[17px] font-semibold">{item.title}</h3>
            <p className="mt-2 max-w-162.5 text-[13px] leading-6 text-muted">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
