"use client";

import { useEffect, useState } from "react";
import { BARBARA_DATA } from "./data";

export function BarbaraNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--c-cream)]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center px-6 lg:px-16 py-5 lg:py-6 gap-10 lg:gap-14">
        <a
          href="#top"
          className={`text-[11px] tracking-[0.18em] font-medium transition-colors ${
            scrolled ? "text-[var(--c-tinta)]" : "text-[var(--c-cream)]"
          }`}
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          {BARBARA_DATA.nav.logo}
        </a>
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {BARBARA_DATA.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[11px] tracking-[0.16em] font-medium transition-colors ${
                  scrolled
                    ? "text-[var(--c-tinta)] hover:text-[var(--c-nude)]"
                    : "text-[var(--c-cream)] hover:opacity-70"
                }`}
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {scrolled && (
          <a
            href={BARBARA_DATA.hero.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto px-5 py-2.5 rounded-full text-[10px] tracking-[0.14em] font-medium text-[var(--c-cream)] bg-[var(--c-nude)] hover:opacity-90 transition-opacity"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            AGENDAR  →
          </a>
        )}
      </div>
    </nav>
  );
}
