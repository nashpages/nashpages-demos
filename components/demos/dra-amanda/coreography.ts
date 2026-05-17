"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra plugins uma vez ao import (idempotente).
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook que orquestra toda a coreografia das 3 atos da Amanda.
 * Roda apenas no desktop ≥1024 e com prefers-reduced-motion: no-preference.
 * Cleanup automático no unmount via matchMedia.revert().
 *
 * Task 12: FLIP morph #1 — foto Palestra viaja do Hero pra Prática via scroll-tied GSAP ScrollTrigger.
 */
export function useAmandaCoreography() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const heroPhoto = document.querySelector<HTMLElement>("[data-hero-photo]");
        const praticaPhoto = document.querySelector<HTMLElement>("[data-pratica-photo]");
        const praticaSection = document.querySelector<HTMLElement>("#pratica");

        if (!heroPhoto || !praticaPhoto || !praticaSection) return;

        // Esconde o placeholder da Prática (vai aparecer quando o morph terminar)
        gsap.set(praticaPhoto, { opacity: 0 });

        // Posição inicial: foto no Hero
        // left=120, top=140, width=620, height=720 (relativo ao max-w-[1440px] mx-auto)
        // Posição final: foto na Prática
        // left=120, top=200 relativo à Prática (Hero.height=900 + 200 = 1100 no documento)
        // width=360, height=500

        const startState = { width: 620, height: 720, top: 140, left: 120 };
        const endState = { width: 360, height: 500, top: 1100, left: 120 };

        ScrollTrigger.create({
          trigger: praticaSection,
          start: "top 90%",
          end: "top 20%",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress; // 0..1

            // Lerp linear entre os estados
            const w = startState.width + (endState.width - startState.width) * p;
            const h = startState.height + (endState.height - startState.height) * p;
            const top = startState.top + (endState.top - startState.top) * p;
            const left = startState.left + (endState.left - startState.left) * p;

            gsap.set(heroPhoto, { width: w, height: h, top, left });

            // Pratica placeholder vira visível só no fim do morph (p > 0.95)
            gsap.set(praticaPhoto, { opacity: p > 0.95 ? 1 : 0 });
          },
        });
      }
    );

    return () => mm.revert();
  }, []);
}
