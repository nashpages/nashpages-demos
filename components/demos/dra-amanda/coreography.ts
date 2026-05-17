"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Calcula o left offset pra alinhar a foto com o container 1440 mx-auto.
 * Em viewports >=1440, retorna (vw - 1440) / 2 + 120 (alinhado com x=120 do container).
 * Em viewports <1440 (mas >=1024 desktop matchMedia), retorna 120 (sem centralização).
 */
function getContainerLeft(): number {
  if (typeof window === "undefined") return 120;
  return Math.max(120, (window.innerWidth - 1440) / 2 + 120);
}

/**
 * Calcula o right offset (pra fotos alinhadas à direita).
 * Para uma foto com width W posicionada a x=120 from RIGHT do container 1440:
 * left = max(0, (vw - 1440) / 2) + (1440 - 120 - W)
 */
function getContainerRight(width: number): number {
  if (typeof window === "undefined") return 1440 - 120 - width;
  return Math.max(0, (window.innerWidth - 1440) / 2) + (1440 - 120 - width);
}

export function useAmandaCoreography() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const photoPalestra = document.querySelector<HTMLElement>("[data-photo-palestra]");
        const photoUltraformer = document.querySelector<HTMLElement>("[data-photo-ultraformer]");
        const photoRetrato = document.querySelector<HTMLElement>("[data-photo-retrato]");

        const heroSection = document.querySelector<HTMLElement>("#hero");
        const praticaSection = document.querySelector<HTMLElement>("#pratica");
        const tecnologiaSection = document.querySelector<HTMLElement>("#tecnologia");
        const presencaSection = document.querySelector<HTMLElement>("#presenca");
        const contatoSection = document.querySelector<HTMLElement>("#contato");

        if (!photoPalestra || !photoUltraformer || !photoRetrato) return;
        if (!heroSection || !praticaSection || !tecnologiaSection || !presencaSection || !contatoSection) return;

        // === Estado INICIAL: Palestra visível em posição Hero ===
        const heroLeft = getContainerLeft(); // ≈ containerLeft + 120
        gsap.set(photoPalestra, {
          left: heroLeft,
          top: 140,
          width: 620,
          height: 720,
          opacity: 1,
          scale: 1,
          x: 0,
        });

        gsap.set(photoUltraformer, { opacity: 0 });
        gsap.set(photoRetrato, { opacity: 0 });

        // === Entrada do Hero — scale 1.04 → 1 com easing back.out ===
        gsap.fromTo(
          photoPalestra,
          { scale: 1.04, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.2)" }
        );

        // === Morph #1: Hero → Prática (Palestra encolhe e desce) ===
        // Trigger na entrada da Prática section
        ScrollTrigger.create({
          trigger: praticaSection,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const startW = 620, endW = 360;
            const startH = 720, endH = 500;
            const startTop = 140, endTop = 200;
            const left = getContainerLeft();

            gsap.set(photoPalestra, {
              left,
              top: startTop + (endTop - startTop) * p,
              width: startW + (endW - startW) * p,
              height: startH + (endH - startH) * p,
            });
          },
        });

        // === Cross-morph #1: Prática → Tecnologia (Palestra escapa ESQ + Ultraformer entra DIR) ===
        ScrollTrigger.create({
          trigger: tecnologiaSection,
          start: "top 80%",
          end: "top 25%",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;

            // Palestra escapa: scale 1→0.85, x 0→-200, opacity 1→0
            gsap.set(photoPalestra, {
              scale: 1 - 0.15 * p,
              x: -200 * p,
              opacity: 1 - p,
            });

            // Ultraformer entra (mapeia p 0.2..1 → 0..1) na posição DIREITA da Tecnologia
            const enterProgress = Math.max(0, (p - 0.2) / 0.8);
            const tecLeft = getContainerRight(440); // 440 = width Ultraformer
            gsap.set(photoUltraformer, {
              left: tecLeft,
              top: 160,
              width: 440,
              height: 580,
              scale: 0.8 + 0.2 * enterProgress,
              x: 200 - 200 * enterProgress,
              opacity: enterProgress,
            });
          },
          onLeave: () => {
            // Hide palestra completely after cross-morph completes
            gsap.set(photoPalestra, { opacity: 0 });
            // Snap Ultraformer + micro-overshoot
            gsap.set(photoUltraformer, { scale: 1, x: 0, opacity: 1 });
            gsap.fromTo(
              photoUltraformer,
              { scale: 1 },
              { scale: 1.02, duration: 0.18, ease: "back.out(1.3)", yoyo: true, repeat: 1 }
            );
          },
          onEnterBack: () => {
            gsap.set(photoPalestra, { opacity: 1 });
          },
        });

        // === Cross-morph #2: Tecnologia → Presença (Ultraformer escapa DIR + Retrato entra ESQ) ===
        ScrollTrigger.create({
          trigger: presencaSection,
          start: "top 80%",
          end: "top 25%",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;

            // Ultraformer escapa pra direita
            gsap.set(photoUltraformer, {
              scale: 1 - 0.15 * p,
              x: 200 * p,
              opacity: 1 - p,
            });

            // Retrato entra pela esquerda na posição da Presença
            const enterProgress = Math.max(0, (p - 0.2) / 0.8);
            const preLeft = getContainerLeft();
            gsap.set(photoRetrato, {
              left: preLeft,
              top: 160,
              width: 520,
              height: 720,
              scale: 0.8 + 0.2 * enterProgress,
              x: -200 + 200 * enterProgress,
              opacity: enterProgress,
            });
          },
          onLeave: () => {
            gsap.set(photoUltraformer, { opacity: 0 });
            gsap.set(photoRetrato, { scale: 1, x: 0, opacity: 1 });
            gsap.fromTo(
              photoRetrato,
              { scale: 1 },
              { scale: 1.02, duration: 0.18, ease: "back.out(1.3)", yoyo: true, repeat: 1 }
            );
          },
          onEnterBack: () => {
            gsap.set(photoUltraformer, { opacity: 1 });
          },
        });

        // === Morph #2: Presença → Contato (Retrato encolhe pra cabeçalho) ===
        ScrollTrigger.create({
          trigger: contatoSection,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const startW = 520, endW = 280;
            const startH = 720, endH = 360;
            const startTop = 160, endTop = 100;
            const left = getContainerLeft();

            gsap.set(photoRetrato, {
              left,
              top: startTop + (endTop - startTop) * p,
              width: startW + (endW - startW) * p,
              height: startH + (endH - startH) * p,
            });
          },
        });

        // === Recalcular layout on resize (viewport width muda containerLeft/Right) ===
        const onResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", onResize);

        return () => {
          window.removeEventListener("resize", onResize);
        };
      }
    );

    return () => mm.revert();
  }, []);
}
