"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PVBT_DATA } from "./data";

const EASE = [0.32, 0.72, 0, 1] as const;

export function PvbtNav() {
  const { nav } = PVBT_DATA;
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 100);
      setPastHero(y > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = pastHero ? "var(--c-tinta)" : "var(--c-papel)";
  const logoColor = pastHero ? "var(--c-dourado-deep)" : "var(--c-dourado)";

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: -10 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(245, 241, 230, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
      }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] py-5 lg:py-7 flex items-center justify-between md:justify-start gap-6">
        <a
          href="#top"
          className="whitespace-nowrap transition-colors duration-500"
          style={{
            fontFamily: "var(--font-cinzel)",
            fontWeight: 400,
            fontSize: "26px",
            letterSpacing: "2px",
            color: logoColor,
          }}
        >
          {nav.logo}
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-9 md:ml-10 lg:ml-14">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap transition-colors duration-500 hover:opacity-70"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "1.8px",
                color: textColor,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex ml-auto items-center min-w-[80px] justify-end">
          <AnimatePresence>
            {pastHero && (
              <motion.a
                key="cta-agendar"
                href={nav.ctaShort.href}
                className="group inline-flex items-center gap-2 hover:opacity-80"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "1.8px",
                  color: "var(--c-dourado-deep)",
                }}
                initial={reduce ? false : { opacity: 0, x: 14 }}
                animate={reduce ? undefined : { opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: 14 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <span>{nav.ctaShort.label}</span>
                <motion.span
                  aria-hidden
                  className="inline-block"
                  initial={reduce ? false : { x: -4, opacity: 0 }}
                  animate={reduce ? undefined : { x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.15 }}
                >
                  →
                </motion.span>
              </motion.a>
            )}
          </AnimatePresence>
        </div>
        <a
          href={nav.ctaShort.href}
          className="md:hidden ml-auto transition-colors duration-500"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontWeight: 500,
            fontSize: "10px",
            letterSpacing: "1.6px",
            color: textColor,
          }}
        >
          MENU
        </a>
      </div>
    </motion.header>
  );
}
