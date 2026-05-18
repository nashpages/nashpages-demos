"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { DERIZE_DATA } from "./data";

const EASE = [0.32, 0.72, 0, 1] as const;

export function DerizeNav() {
  const { nav } = DERIZE_DATA;
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 100);
      const threshold = window.innerHeight * 0.7;
      setPastHero(y > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColorClass = "text-[var(--c-tinta)]";

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: -10 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(245, 241, 232, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px] py-5 lg:py-7 flex items-center justify-between md:justify-start gap-6">
        <a
          href="#top"
          className={`whitespace-nowrap transition-colors duration-500 ${textColorClass}`}
          style={{
            fontFamily: "var(--font-spectral)",
            fontWeight: 400,
            fontSize: "22px",
            letterSpacing: "-0.4px",
          }}
        >
          {nav.logo}
        </a>
        <nav className="hidden md:flex items-center gap-7 lg:gap-10 md:ml-12 lg:ml-16">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`whitespace-nowrap transition-colors duration-500 hover:opacity-70 ${textColorClass}`}
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "1.76px",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex ml-auto items-center min-w-[110px] justify-end">
          <AnimatePresence>
            {pastHero && (
              <motion.a
                key="cta-agendar"
                href={nav.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 hover:opacity-80"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "1.76px",
                  color: "var(--c-accent)",
                }}
                initial={reduce ? false : { opacity: 0, x: 14 }}
                animate={reduce ? undefined : { opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: 14 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <span>{nav.cta.label}</span>
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
          href={nav.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`md:hidden ml-auto transition-colors duration-500 ${textColorClass}`}
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 500,
            fontSize: "10px",
            letterSpacing: "1.5px",
          }}
        >
          MENU
        </a>
      </div>
    </motion.header>
  );
}
