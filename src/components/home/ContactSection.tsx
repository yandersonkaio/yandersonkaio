import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-11.25 sm:py-16.25 lg:py-17.5">
      <div className="rounded-[25px] border border-[#64548f6b] bg-[radial-gradient(ellipse_at_top_left,#654caa2e,transparent_60%)] bg-surface px-5 py-12 text-center sm:px-8 sm:py-15">
        <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-primary">
          Vamos conversar?
        </span>
        <h2 className="mt-2.5 text-[clamp(27px,4vw,43px)] font-extrabold tracking-[-1.5px]">
          Tem uma ideia em mente?
        </h2>
        <p className="mx-auto mt-3 mb-6 max-w-125 text-sm leading-7 text-muted">
          Estou aberto a oportunidades, colaborações e boas conversas sobre
          tecnologia e desenvolvimento.
        </p>
        <a
          href="mailto:yandersonkaio@gmail.com"
          className="inline-flex items-center justify-center gap-2 rounded-[11px] bg-primary px-4.5 py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:opacity-90"
        >
          <Mail size={17} /> Enviar um e-mail
        </a>
      </div>
    </section>
  );
}
