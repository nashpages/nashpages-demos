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
        className={`absolute inset-0 ${scrolled ? "backdrop-blur-md" : ""}`}
        animate={{
          backgroundColor: scrolled
            ? "rgba(248, 242, 234, 0.92)"
            : "rgba(248, 242, 234, 0)",
        }}
        transition={{ duration: 0.4, ease: EASE }}
      />

      {/* Container 1440 centralizado pra alinhar items do nav com text de TODAS as sections.
          O bg overlay acima permanece full viewport (cobre toda a tela ao scrollar). */}
      <div className="relative max-w-[1440px] mx-auto">

      {/* ============================================================
          DESKTOP NAV — Figma 7:4 (logo Inter Semi Bold, links Inter Regular)
          ============================================================ */}
      <div className="hidden lg:flex items-center h-[72px] pl-[80px] pr-[80px] gap-[56px]">
        <a href="#top" className="group">
          <motion.span
            className="block text-[11px] tracking-[0.16em] whitespace-nowrap"
            animate={{
              color: scrolled ? "#2A2520" : "#FFFFFF",
            }}
            transition={{ duration: 0.4 }}
            style={{ fontFamily: "var(--font-inter)", fontWeight: 600 }}
          >
            {BARBARA_DATA.nav.logo}
          </motion.span>
        </a>
        <ul className="flex items-center gap-[28px]">
          {BARBARA_DATA.nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="group inline-flex flex-col gap-1">
                <motion.span
                  className="text-[11px] tracking-[0.14em]"
                  animate={{
                    color: scrolled ? "#2A2520" : "#FFFFFF",
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
                >
                  {link.label}
                </motion.span>
                <motion.span
                  className="h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  animate={{
                    backgroundColor: scrolled ? "#C4998A" : "#FFFFFF",
                  }}
                  transition={{ duration: 0.4 }}
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
              className="ml-auto rounded-full text-[10px] tracking-[0.14em] text-[#F8F2EA] bg-[#C4998A] hover:opacity-90 transition-opacity whitespace-nowrap px-[20px] py-[10px]"
              initial={{ opacity: 0, scale: 0.92, x: 16 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.92, x: 16 }}
              transition={{ duration: 0.45, ease: EASE }}
              style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
            >
              AGENDAR  →
            </motion.a>
          )}
        </AnimatePresence>
      </div>

      {/* ============================================================
          MOBILE NAV — Figma 47:5
          ============================================================ */}
      <div className="flex lg:hidden items-center justify-between px-[24px] py-[20px]">
        <motion.a
          href="#top"
          className="text-[11px] tracking-[0.1em]"
          animate={{ color: scrolled ? "#2A2520" : "#F8F2EA" }}
          transition={{ duration: 0.4 }}
          style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500 }}
        >
          {BARBARA_DATA.nav.logo}
        </motion.a>
        <motion.button
          type="button"
          className="text-[11px] tracking-[0.1em]"
          animate={{ color: scrolled ? "#2A2520" : "#F8F2EA" }}
          transition={{ duration: 0.4 }}
          style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500 }}
        >
          MENU
        </motion.button>
      </div>
      </div>
    </motion.nav>
  );
}
