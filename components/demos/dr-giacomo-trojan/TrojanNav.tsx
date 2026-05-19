"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { TROJAN_DATA } from "./data";

const EASE = [0.32, 0.72, 0, 1] as const;

export function TrojanNav() {
  const { nav } = TROJAN_DATA;
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: -10 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(250, 250, 251, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--c-linha)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] py-5 lg:py-6 flex items-center justify-between md:justify-start gap-6">
        <a
          href="#top"
          className="whitespace-nowrap"
          style={{
            fontFamily: "var(--font-newsreader)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "22px",
            letterSpacing: "-0.4px",
            color: "var(--c-tinta)",
          }}
        >
          {nav.logo}
        </a>
        <nav className="hidden md:flex items-center gap-7 lg:gap-10 md:ml-12 lg:ml-16">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap hover:opacity-70 transition-opacity duration-300"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "1.6px",
                color: "var(--c-neblina)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex ml-auto items-center min-w-[120px] justify-end">
          <AnimatePresence>
            {scrolled && (
              <motion.a
                key="cta-agendar"
                href={nav.ctaShort.href}
                className="group inline-flex items-center gap-2 hover:opacity-80"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "1.4px",
                  color: "var(--c-azul)",
                  border: "1px solid var(--c-azul)",
                  borderRadius: "24px",
                  padding: "9px 18px",
                }}
                initial={reduce ? false : { opacity: 0, x: 14 }}
                animate={reduce ? undefined : { opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: 14 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <span>{nav.ctaShort.label}</span>
                <span aria-hidden>→</span>
              </motion.a>
            )}
          </AnimatePresence>
        </div>
        <a
          href={nav.ctaShort.href}
          className="md:hidden ml-auto"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontWeight: 500,
            fontSize: "10px",
            letterSpacing: "1.6px",
            color: "var(--c-tinta)",
          }}
        >
          AGENDAR
        </a>
      </div>
    </motion.header>
  );
}
