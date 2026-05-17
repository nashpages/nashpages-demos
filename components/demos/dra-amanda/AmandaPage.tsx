"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AMANDA_PALETTE, AMANDA_DATA } from "./data";
import { AmandaLeftPanel } from "./AmandaLeftPanel";
import { Manifesto } from "./sections/Manifesto";
import { Sobre } from "./sections/Sobre";
import { Tratamentos } from "./sections/Tratamentos";
import { Tecnologia } from "./sections/Tecnologia";
import { Reconhecimento } from "./sections/Reconhecimento";
import { Atendimento } from "./sections/Atendimento";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SECTIONS_COUNT = 7;
const SECTION_WIDTH = 860;
const LEFT_PANEL_WIDTH = 580;

export function AmandaPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const themeVars: React.CSSProperties = {
    ["--c-papel" as string]: AMANDA_PALETTE.papel,
    ["--c-neve" as string]: AMANDA_PALETTE.neve,
    ["--c-tinta" as string]: AMANDA_PALETTE.tinta,
    ["--c-neblina" as string]: AMANDA_PALETTE.neblina,
    ["--c-linha" as string]: AMANDA_PALETTE.linha,
    ["--c-carmim" as string]: AMANDA_PALETTE.carmim,
    ["--c-footer-bg" as string]: AMANDA_PALETTE.footerBg,
    ["--c-footer-muted" as string]: AMANDA_PALETTE.footerMuted,
    ["--c-footer-divider" as string]: AMANDA_PALETTE.footerDivider,
  };

  useEffect(() => {
    // Only run horizontal scroll on lg+ viewports
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (!trackRef.current || !containerRef.current) return;

      const track = trackRef.current;
      const totalSectionsWidth = SECTION_WIDTH * SECTIONS_COUNT;
      const viewportRightWidth = window.innerWidth - LEFT_PANEL_WIDTH;
      const distance = totalSectionsWidth - viewportRightWidth;

      if (distance <= 0) return; // viewport bigger than content, skip

      // Update active section based on scroll progress
      const tl = gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${distance + 200}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (SECTIONS_COUNT - 1));
            setActiveIndex(idx);
          },
        },
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div style={themeVars} className="text-[var(--c-tinta)] bg-[var(--c-papel)]">
      {/* ===== DESKTOP: horizontal scroll pinned ===== */}
      <div
        ref={containerRef}
        className="hidden lg:flex h-screen overflow-hidden relative"
      >
        <AmandaLeftPanel activeIndex={activeIndex} />
        <div
          ref={trackRef}
          className="flex h-full"
          style={{ width: `${SECTION_WIDTH * SECTIONS_COUNT}px` }}
        >
          <Manifesto />
          <Sobre />
          <Tratamentos />
          <Tecnologia />
          <Reconhecimento />
          <Atendimento />
          <Contato />
        </div>
      </div>

      {/* ===== MOBILE: stack vertical convencional ===== */}
      <div className="lg:hidden">
        <Manifesto />
        <Sobre />
        <Tratamentos />
        <Tecnologia />
        <Reconhecimento />
        <Atendimento />
        <Contato />
      </div>

      {/* Footer aparece após o scroll horizontal terminar (desktop) ou após sections (mobile) */}
      <Footer />
    </div>
  );
}
