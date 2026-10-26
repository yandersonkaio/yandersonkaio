"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const navigation = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "experience", label: "Experiência" },
  { id: "contact", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;

    const updateActiveSection = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main section[id]"),
      );
      const navigationIds = new Set(navigation.map((item) => item.id));
      const activationOffset = 110;
      const scrollPosition = window.scrollY + activationOffset;
      let current = "home";

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop > scrollPosition) break;

        if (section.id === "skills") {
          current = "experience";
        } else if (navigationIds.has(section.id)) {
          current = section.id;
        }
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isAtBottom) current = "contact";

      setActiveSection((previous) =>
        previous === current ? previous : current,
      );
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (id: string) => pathname === "/" && activeSection === id;

  return (
    <header className="sticky top-0 z-50 h-15.5 border-b border-border bg-header backdrop-blur-[20px] min-[681px]:h-18">
      <div className="mx-auto flex h-full max-w-280 items-center justify-between gap-5 px-4.5 min-[681px]:px-7">
        <Link
          href="/#home"
          onClick={closeMenu}
          aria-label="Página inicial"
          className="flex items-center text-[23px] font-extrabold tracking-[-1.4px] text-foreground"
        >
          YK<span className="text-primary">.</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7.5 min-[681px]:flex">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              aria-current={isActive(item.id) ? "location" : undefined}
              className={`text-[13px] transition-colors duration-200 ${isActive(item.id)
                ? "text-foreground"
                : "text-muted hover:text-foreground"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Alternar tema"
            title="Alternar tema"
            className="grid size-9 place-items-center rounded-[11px] border border-border bg-transparent text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
          >
            <Sun size={17} strokeWidth={1.7} className="hidden dark:block" />
            <Moon size={17} strokeWidth={1.7} className="block dark:hidden" />
          </button>

          <Link
            href="/#contact"
            onClick={closeMenu}
            className="hidden items-center justify-center gap-2 rounded-[11px] border border-border bg-surface-2 px-3 py-2.25 text-[11px] font-bold text-foreground transition-opacity hover:opacity-90 min-[681px]:inline-flex"
          >
            Fale comigo <ArrowUpRight size={13} strokeWidth={1.7} />
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="grid size-9 place-items-center rounded-[11px] border border-border bg-transparent text-muted transition-colors hover:bg-surface-2 hover:text-foreground min-[681px]:hidden"
          >
            {isMenuOpen ? <X size={19} strokeWidth={1.7} /> : <Menu size={19} strokeWidth={1.7} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação mobile"
          className="absolute inset-x-0 top-full flex flex-col items-start gap-4.75 border-b border-border bg-surface px-6 py-4.5 shadow-lg min-[681px]:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              onClick={() => {
                setActiveSection(item.id);
                closeMenu();
              }}
              aria-current={isActive(item.id) ? "location" : undefined}
              className={`text-[13px] transition-colors duration-200 ${isActive(item.id)
                ? "text-foreground"
                : "text-muted hover:text-foreground"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
