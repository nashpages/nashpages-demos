"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BARBARA_DATA } from "./data";

const EASE = [0.32, 0.72, 0, 1] as const;

export function BarbaraNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 backdrop-blur-md"
        animate={{
          backgroundColor: scrolled
            ? "rgba(248, 242, 234, 0.92)"
            : "rgba(248, 242, 234, 0)",
        }}
        transition={{ duration: 0.4, ease: EASE }}
      />
      <div className="relative flex items-center px-6 lg:px-16 py-5 lg:py-6 gap-10 lg:gap-14">
        <a href="#top" className="group">
          <motion.span
            className="text-[11px] tracking-[0.18em] font-medium block"
            animate={{
              color: scrolled ? "var(--c-tinta)" : "var(--c-cream)",
            }}
            transition={{ duration: 0.4 }}
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            {BARBARA_DATA.nav.logo}
          </motion.span>
        </a>
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {BARBARA_DATA.nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="group inline-flex flex-col gap-1">
                <motion.span
                  className="text-[11px] tracking-[0.16em] font-medium"
                  animate={{
                    color: scrolled ? "var(--c-tinta)" : "var(--c-cream)",
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {link.label}
                </motion.span>
                <motion.span
                  className="h-px w-full origin-left scale-x-0 group-hover:scale-x-100"
                  animate={{
                    backgroundColor: scrolled
                      ? "var(--c-nude)"
                      : "var(--c-cream)",
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ transitionProperty: "transform" }}
                />
              </a>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {scrolled && (
            <motion.a
              key="cta"
              href={BARBARA_DATA.hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto px-5 py-2.5 rounded-full text-[10px] tracking-[0.14em] font-medium text-[var(--c-cream)] bg-[var(--c-nude)] hover:opacity-90 transition-opacity overflow-hidden whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.9, width: 0, paddingLeft: 0, paddingRight: 0 }}
              animate={{ opacity: 1, scale: 1, width: "auto", paddingLeft: 20, paddingRight: 20 }}
              exit={{ opacity: 0, scale: 0.9, width: 0, paddingLeft: 0, paddingRight: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              AGENDAR  →
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// Helper for global CSS transition on transform (FW workaround)
// (the underline scale-x animates via Tailwind's group-hover, motion adds color)
