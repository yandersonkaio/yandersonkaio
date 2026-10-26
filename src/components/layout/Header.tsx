
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

      const navigationIds = new Set(
        navigation.map((item) => item.id),
      );

      const activationOffset = 110;
      const scrollPosition = window.scrollY + activationOffset;

      let current = "home";

      for (const section of sections) {
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

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

      if (isAtBottom) {
        current = "contact";
      }

      setActiveSection((previous) =>
        previous === current ? previous : current,
      );
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (id: string) =>
    pathname === "/" && activeSection === id;

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

        <nav
          aria-label="Navegação principal"
          className="hidden h-full items-center gap-7.5 min-[681px]:flex"
        >
          {navigation.map((item) => {
            const active = isActive(item.id);

            return (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                aria-current={active ? "location" : undefined}
                className={`
                  relative flex h-full items-center
                  text-[13px] font-medium
                  transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0
                  after:h-0.75 after:w-full
                  after:origin-center after:rounded-t-full
                  after:bg-primary
                  after:transition-transform after:duration-200
                  ${active
                    ? "text-primary after:scale-x-100"
                    : "text-muted after:scale-x-0 hover:text-primary hover:after:scale-x-100"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() =>
              setTheme(
                resolvedTheme === "dark" ? "light" : "dark",
              )
            }
            aria-label="Alternar tema"
            title="Alternar tema"
            className="grid size-9 place-items-center rounded-[11px] border border-border bg-transparent text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
          >
            <Sun
              size={17}
              strokeWidth={1.7}
              className="hidden dark:block"
            />

            <Moon
              size={17}
              strokeWidth={1.7}
              className="block dark:hidden"
            />
          </button>

          <Link
            href="/#contact"
            onClick={closeMenu}
            className="hidden items-center justify-center gap-2 rounded-[11px] border border-border bg-surface-2 px-3 py-2.25 text-[11px] font-bold text-foreground transition-opacity hover:opacity-90 min-[681px]:inline-flex"
          >
            Fale comigo
            <ArrowUpRight size={13} strokeWidth={1.7} />
          </Link>

          <button
            type="button"
            onClick={() =>
              setIsMenuOpen((previous) => !previous)
            }
            aria-label={
              isMenuOpen ? "Fechar menu" : "Abrir menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="grid size-9 place-items-center rounded-[11px] border border-border bg-transparent text-muted transition-colors hover:bg-surface-2 hover:text-foreground min-[681px]:hidden"
          >
            {isMenuOpen ? (
              <X size={19} strokeWidth={1.7} />
            ) : (
              <Menu size={19} strokeWidth={1.7} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação mobile"
          className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-border bg-surface px-4 py-4 shadow-lg min-[681px]:hidden"
        >
          {navigation.map((item) => {
            const active = isActive(item.id);

            return (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => {
                  setActiveSection(item.id);
                  closeMenu();
                }}
                aria-current={active ? "location" : undefined}
                className={`
                  relative flex items-center
                  rounded-lg px-4 py-3
                  text-[13px] font-medium
                  transition-all duration-200
                  ${active
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:bg-surface-2 hover:text-foreground"
                  }
                `}
              >
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute top-2 bottom-2 left-0 w-0.75 rounded-full bg-primary"
                  />
                )}

                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
