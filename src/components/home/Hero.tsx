import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import HeroArtwork from "@/components/home/HeroArtwork";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid scroll-mt-24 items-center gap-5 pt-13.25 pb-10 sm:pt-16.25 lg:grid-cols-[1.12fr_0.88fr] lg:gap-9.5 lg:pt-26.25 lg:pb-23.5"
    >
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-2 text-[11px]">
          <span className="size-1.5 rounded-full bg-success shadow-[0_0_0_4px_#52ca9222]" />
          Disponível para oportunidades
        </span>

        <h1 className="mt-4.5 mb-6 text-[clamp(36px,5.8vw,72px)] leading-[1.08] font-extrabold tracking-[-2px] sm:tracking-[-3.4px]">
          Olá, eu sou
          <br />
          <span className="gradient-text">Yanderson Kaio.</span>
        </h1>

        <h2 className="text-lg font-medium">Desenvolvedor de Software</h2>
        <p className="mt-3 max-w-130 text-[15px] leading-[1.85] text-muted">
          Transformo ideias em aplicações reais. Trabalho com backend,
          frontend e desenvolvimento de produtos digitais, da arquitetura à
          experiência do usuário.
        </p>

        <div className="my-7 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-[11px] bg-primary px-4.5 py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:opacity-90"
          >
            Explorar projetos <ArrowUpRight size={16} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-[11px] border border-border bg-surface-2 px-4.5 py-3 text-xs font-bold transition hover:-translate-y-0.5 hover:bg-surface-3"
          >
            Sobre mim <ArrowRight size={16} />
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/yanderson-kaio-486b41161/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-8.5 place-items-center rounded-[9px] border border-border text-muted transition hover:text-primary"
          >
            <LinkedInIcon size={17} />
          </a>
          <a
            href="mailto:yandersonkaio@gmail.com"
            aria-label="E-mail"
            className="grid size-8.5 place-items-center rounded-[9px] border border-border text-muted transition hover:text-primary"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>

      <HeroArtwork />
    </section>
  );
}
