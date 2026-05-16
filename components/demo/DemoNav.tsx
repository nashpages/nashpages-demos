"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  nav: DemoConfig["nav"];
  logoText: string;
};

export function DemoNav({ nav, logoText }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // ≥1024px (lg) — pra iPad portrait/landscape pequeno usar nav full-width
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 80);
  });

  // Desktop: nav width interpola de 65% (em cima da foto do Dr no hero) a 100%
  // (full width nas sections de baixo) conforme scrollY passa 800→1100.
  // Hero é 1080px alto; transição começa 280px antes do fim do hero pra ficar fluida.
  const navWidthDesktop = useTransform(scrollY, [800, 1100], ["65%", "100%"]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.entrance, ease: EASE.outExpo, delay: 0.2 }}
      className={`fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-md border-b" : ""
      }`}
      style={{
        width: isDesktop ? navWidthDesktop : "100%",
        background: scrolled ? "color-mix(in oklab, var(--demo-bg) 85%, transparent)" : "transparent",
        borderColor: scrolled ? "var(--demo-hair)" : "transparent",
      }}
    >
      {/* Padding-left dinâmico alinha logo com outras sections em vw>1440.
          Padding-right fixo 120 evita overflow quando nav width = 65% (no Hero) —
          o calc só faz sentido aqui se nav fosse always 100% width. */}
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-10 md:py-6 lg:py-8 lg:pl-[max(120px,calc((100vw-1440px)/2+120px))] lg:pr-[120px]">
        {/* Logo */}
        <a
          href="#top"
          className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] whitespace-nowrap shrink-0"
          style={{ color: "var(--demo-fg)" }}
        >
          {logoText}
        </a>

        {/* Links + CTA */}
        <div className="flex items-center gap-6 md:gap-9 shrink-0">
          <div className="hidden md:flex items-center gap-9">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium tracking-[0.16em] transition-colors whitespace-nowrap"
                style={{ color: "var(--demo-fg)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={nav.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-[11px] font-medium tracking-[0.16em] transition-transform hover:scale-[1.05] whitespace-nowrap"
            style={{
              background: "var(--demo-accent)",
              color: "var(--demo-bg)",
            }}
          >
            {nav.ctaLabel}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
