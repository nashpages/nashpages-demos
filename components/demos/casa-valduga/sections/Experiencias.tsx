"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VALDUGA_DATA } from "../data";
import { FadeUp, Stagger, StaggerItem } from "../motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SHADOW = "0 2px 20px rgba(0,0,0,0.5)";

/**
 * §04 — seção imersiva de tela cheia. A imagem panorâmica da cave faz um
 * pan horizontal cinematográfico (GSAP ScrollTrigger pin + scrub) enquanto o
 * conteúdo permanece por cima. Só no desktop (pointer fino); no mobile a
 * imagem fica estática (cover) sem pin.
 */
export function Experiencias() {
  const ex = VALDUGA_DATA.experiencias;
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (pointer: fine)", () => {
      const section = sectionRef.current;
      const img = imgRef.current;
      if (!section || !img) return;
      const dist = () => Math.max(0, img.offsetWidth - window.innerWidth);
      const tween = gsap.to(img, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${dist() + window.innerHeight * 0.9}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experiencias"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      style={{ backgroundColor: "var(--c-tinta)" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={ex.pano}
        alt="A cave da Casa Valduga"
        draggable={false}
        className="absolute inset-y-0 left-0 h-full w-auto max-w-none select-none will-change-transform"
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(18,9,11,0.44) 0%, rgba(18,9,11,0.30) 48%, rgba(18,9,11,0.80) 100%)" }}
      />

      <div className="absolute inset-0 z-10">
        <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-[80px] relative">
          <div className="absolute left-6 right-6 lg:left-[80px] lg:right-[80px] top-[13%]">
            <FadeUp>
              <div className="flex items-center gap-3 mb-5">
                <span style={{ width: "30px", height: "2px", backgroundColor: "var(--c-dourado-light)" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--c-pergaminho)" }} />
                <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "2.5px", color: "var(--c-dourado-light)", marginLeft: "4px", textShadow: SHADOW }}>{ex.eyebrow}</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.08, letterSpacing: "-0.5px", color: "var(--c-pergaminho)", margin: 0, maxWidth: "760px", textShadow: SHADOW }}>{ex.headline}</h2>
            </FadeUp>
          </div>

          <div className="absolute left-6 right-6 lg:left-[80px] lg:right-[80px] bottom-[8%]">
            <div aria-hidden className="w-full mb-8" style={{ height: "1px", backgroundColor: "var(--c-pergaminho)", opacity: 0.28 }} />
            <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-7 lg:gap-12" staggerChildren={0.12}>
              {ex.cols.map((c) => (
                <StaggerItem key={c.num}>
                  <p style={{ fontFamily: "var(--font-jetbrains-mono)", fontWeight: 500, fontSize: "13px", letterSpacing: "1px", color: "var(--c-dourado-light)", margin: 0, textShadow: SHADOW }}>{c.num}</p>
                  <h3 className="mt-2" style={{ fontFamily: "var(--font-playfair)", fontWeight: 500, fontSize: "clamp(22px, 2vw, 27px)", lineHeight: 1.1, color: "var(--c-pergaminho)", margin: 0, textShadow: SHADOW }}>{c.title}</h3>
                  <p className="mt-3" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "14px", lineHeight: 1.55, color: "var(--c-pergaminho)", opacity: 0.88, margin: 0, maxWidth: "320px", textShadow: SHADOW }}>{c.line}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
