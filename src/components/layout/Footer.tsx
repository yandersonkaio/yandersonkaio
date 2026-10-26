export default function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-5 border-t border-border py-8 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
      <div>
        <a href="#home" className="text-lg font-extrabold tracking-tight text-foreground">
          YK<span className="text-primary">.</span>
        </a>
        <p className="mt-1">Desenvolvido por Yanderson Kaio · © 2026</p>
      </div>
      <nav aria-label="Links do rodapé" className="flex flex-wrap gap-4.5">
        <a href="#projects" className="hover:text-primary">Projetos</a>
        <a href="#about" className="hover:text-primary">Sobre</a>
        <a href="#contact" className="hover:text-primary">Contato</a>
      </nav>
    </footer>
  );
}
