"use client";

import { useEffect, useState } from "react";
import { FASANO_DATA, FASANO_PALETTE } from "./data";

export function FasanoNav() {
  const [scrolled, setScrolled] = useState(false);
  const { nav } = FASANO_DATA;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? FASANO_PALETTE.tinta : FASANO_PALETTE.areia;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? "rgba(242,236,225,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(28,26,22,0.08)" : "transparent"}`,
        transition: "background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] h-[68px] lg:h-[80px] flex items-center justify-between">
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-cormorant-garamond)",
            fontWeight: 500,
            fontSize: "26px",
            letterSpacing: "0.5px",
            color: textColor,
            transition: "color 0.4s ease",
            textShadow: scrolled ? "none" : "0 1px 12px rgba(0,0,0,0.35)",
          }}
        >
          {nav.wordmark}
        </a>
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "12px",
                letterSpacing: "1.6px",
                color: textColor,
                opacity: 0.92,
                transition: "color 0.4s ease, opacity 0.2s ease",
                textShadow: scrolled ? "none" : "0 1px 12px rgba(0,0,0,0.35)",
              }}
              className="hover:opacity-100"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
