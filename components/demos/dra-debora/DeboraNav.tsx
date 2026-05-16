"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DEBORA_DATA } from "./data";

const EASE = [0.32, 0.72, 0, 1] as const;

export function DeboraNav() {
  const { nav, hero } = DEBORA_DATA;
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
      transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(236, 231, 223, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] py-5 lg:py-7 flex items-center justify-between gap-6">
        <a
          href="#top"
          className="text-[14px] lg:text-[18px] tracking-[0.12em]"
          style={{
            fontFamily: "var(--font-geist)",
            fontWeight: 500,
            color: scrolled ? "var(--c-grafite)" : "#ffffff",
          }}
        >
          {nav.logo}
        </a>
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] tracking-[0.16em] transition-opacity hover:opacity-70"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                color: scrolled ? "var(--c-grafite)" : "#ffffff",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={hero.primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden text-[10px] tracking-[0.12em]"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontWeight: 500,
            color: scrolled ? "var(--c-grafite)" : "#ffffff",
          }}
        >
          MENU
        </a>
      </div>
    </motion.header>
  );
}
