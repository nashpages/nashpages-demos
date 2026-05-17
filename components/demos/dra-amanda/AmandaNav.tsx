"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AMANDA_DATA } from "./data";

export function AmandaNav() {
  const { nav } = AMANDA_DATA;
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: -10 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(252, 244, 237, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[120px] py-5 lg:py-7 flex items-center justify-between md:justify-start gap-6">
        <a href="#top"
          className="text-[16px] lg:text-[22px] tracking-[-0.3px]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, color: "var(--c-tinta)" }}>
          {nav.logo}
        </a>
        <nav className="hidden md:flex items-center gap-7 lg:gap-10 md:ml-auto">
          {nav.links.map((link) => (
            <a key={link.label} href={link.href}
              className="text-[11px] tracking-[0.16em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-tinta)" }}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href={AMANDA_DATA.whatsapp} target="_blank" rel="noopener noreferrer"
          className="md:hidden ml-auto text-[10px] tracking-[0.16em]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", fontWeight: 500, color: "var(--c-carmim)" }}>
          AGENDAR
        </a>
      </div>
    </motion.header>
  );
}
