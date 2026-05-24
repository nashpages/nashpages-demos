"use client";

import { useEffect, useState } from "react";
import { CYRELA_DATA } from "./data";

export function CyrelaNav() {
  const [scrolled, setScrolled] = useState(false);
  const { nav } = CYRELA_DATA;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(38,35,31,0.07)" : "transparent"}`,
        transition:
          "background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 md:px-12 lg:h-[88px] lg:px-[100px]">
        <a
          href="#top"
          data-cursor
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: "13px",
            letterSpacing: "0.14em",
            color: "var(--c-tinta)",
          }}
        >
          {nav.wordmark.toUpperCase()}
        </a>
        <nav className="hidden items-center gap-8 md:flex lg:gap-12">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor
              className="transition-opacity hover:opacity-100"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.1em",
                color: "var(--c-tinta)",
                opacity: 0.82,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
