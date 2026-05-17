"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AMANDA_DATA, AMANDA_PALETTE } from "./data";

export function AmandaNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors"
      style={{
        backgroundColor: scrolled ? `${AMANDA_PALETTE.papel}E6` : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        <div className="flex items-center justify-between md:justify-start gap-6 py-5">
          <a
            href="#"
            className="font-medium whitespace-nowrap"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 18,
              color: AMANDA_PALETTE.tinta,
              letterSpacing: "-0.2px",
            }}
          >
            {AMANDA_DATA.nav.logo}
          </a>
          <nav className="hidden md:flex items-center gap-7 lg:gap-10 md:ml-12 lg:ml-16">
            {AMANDA_DATA.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium whitespace-nowrap hover:opacity-60 transition-opacity"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  fontSize: 12,
                  color: AMANDA_PALETTE.tinta,
                  letterSpacing: "1.92px",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={AMANDA_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden ml-auto whitespace-nowrap"
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              fontSize: 11,
              color: AMANDA_PALETTE.carmim,
              letterSpacing: "1.76px",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            AGENDAR →
          </a>
        </div>
      </div>
    </motion.header>
  );
}
