"use client";

import { useEffect, useState } from "react";
import { FRANCIONI_DATA, FRANCIONI_PALETTE } from "./data";

export function VilaNav() {
  const [scrolled, setScrolled] = useState(false);
  const { nav } = FRANCIONI_DATA;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? FRANCIONI_PALETTE.grafite : FRANCIONI_PALETTE.giz;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? "rgba(236,234,227,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(27,31,27,0.08)" : "transparent"}`,
        transition: "background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] h-[68px] lg:h-[80px] flex items-center justify-between">
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 500,
            fontSize: "24px",
            letterSpacing: "0.3px",
            color: textColor,
            transition: "color 0.4s ease",
            textShadow: scrolled ? "none" : "0 1px 12px rgba(0,0,0,0.4)",
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
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "1.6px",
                color: textColor,
                opacity: 0.92,
                transition: "color 0.4s ease, opacity 0.2s ease",
                textShadow: scrolled ? "none" : "0 1px 12px rgba(0,0,0,0.4)",
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
