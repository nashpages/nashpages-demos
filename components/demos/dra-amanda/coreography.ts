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
 * Task 13: FLIP morph #2 — foto Retrato encolhe da Presença pra Contato via scroll-tied GSAP ScrollTrigger.
 */
export function useAmandaCoreography() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        // === Morph #1: Hero → Prática ===
        const heroPhoto = document.querySelector<HTMLElement>("[data-hero-photo]");
        const praticaPhoto = document.querySelector<HTMLElement>("[data-pratica-photo]");
        const praticaSection = document.querySelector<HTMLElement>("#pratica");

        if (heroPhoto && praticaPhoto && praticaSection) {
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

        // === Morph #2: Presença → Contato ===
        // Foto Retrato-hero: 520×720 ESQ na Presença → 280×360 ESQ canto superior do Contato.
        // Encolhimento DRÁSTICO (vibe "doutora se aproximando pra conversar"). Scroll-tied.
        const presencaPhoto = document.querySelector<HTMLElement>("[data-presenca-photo]");
        const contatoPhoto = document.querySelector<HTMLElement>("[data-contato-photo]");
        const contatoSection = document.querySelector<HTMLElement>("#contato");

        if (presencaPhoto && contatoPhoto && contatoSection) {
          // Esconde o placeholder do Contato (vai aparecer quando o morph terminar)
          gsap.set(contatoPhoto, { opacity: 0 });

          // Posição inicial: foto na Presença
          // left=120, top=160, width=520, height=720 (relativo ao max-w-[1440px] mx-auto da Presença)
          // Posição final: foto no Contato (coincidindo com o topo da seção Contato)
          // left=120, top=1050 (Presença.height=950 + Contato.top=100 = 1050 relativo ao pai da Presença)
          // width=280, height=360

          const startState = { width: 520, height: 720, top: 160, left: 120 };
          const endState = { width: 280, height: 360, top: 1050, left: 120 };

          ScrollTrigger.create({
            trigger: contatoSection,
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

              gsap.set(presencaPhoto, { width: w, height: h, top, left });

              // Contato placeholder vira visível só no fim do morph (p > 0.95)
              gsap.set(contatoPhoto, { opacity: p > 0.95 ? 1 : 0 });
            },
          });
        }

        // === Cross-morph #1: Prática → Tecnologia (momento WOW) ===
        // praticaPhoto e heroPhoto já declarados no bloco Morph #1 acima — reutilizados aqui.
        const tecnologiaPhoto = document.querySelector<HTMLElement>("[data-tecnologia-photo]");
        const tecnologiaSection = document.querySelector<HTMLElement>("#tecnologia");

        if (praticaPhoto && tecnologiaPhoto && tecnologiaSection) {
          // Estado inicial — tecnologiaPhoto começa invisível à direita
          gsap.set(tecnologiaPhoto, { opacity: 0, x: 200, scale: 0.8 });

          ScrollTrigger.create({
            trigger: tecnologiaSection,
            start: "top 90%",
            end: "top 30%",
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress; // 0..1

              // === Palestra ESCAPA pra ESQUERDA ===
              // scale 1→0.85, x 0→-200, opacity 1→0.4
              const scaleOut = 1 - 0.15 * p;
              const xOut = -200 * p;
              const opacityOut = 1 - 0.6 * p;
              gsap.set(praticaPhoto, {
                scale: scaleOut,
                x: xOut,
                opacity: opacityOut,
              });

              // Também esconde heroPhoto (overlap pós-Morph#1)
              if (heroPhoto) gsap.set(heroPhoto, { opacity: opacityOut });

              // === Ultraformer ENTRA pela DIREITA ===
              // Mapeia p 0.2..1 → 0..1 (entrada atrasada — começa quando palestra já saiu 20%)
              const enterProgress = Math.max(0, (p - 0.2) / 0.8);
              const scaleIn = 0.8 + 0.2 * enterProgress;
              const xIn = 200 - 200 * enterProgress;
              const opacityIn = enterProgress;
              gsap.set(tecnologiaPhoto, {
                scale: scaleIn,
                x: xIn,
                opacity: opacityIn,
              });
            },
            onLeave: () => {
              // Snap final + micro-overshoot back.out(1.3) na chegada
              gsap.set(tecnologiaPhoto, { scale: 1, x: 0, opacity: 1 });
              gsap.fromTo(
                tecnologiaPhoto,
                { scale: 1 },
                { scale: 1.02, duration: 0.18, ease: "back.out(1.3)", yoyo: true, repeat: 1 }
              );
            },
            onEnterBack: () => {
              // Scroll reverso — voltar pra estado da Prática com opacity 1
              if (praticaPhoto) gsap.set(praticaPhoto, { opacity: 1 });
            },
          });
        }

        // === Cross-morph #2: Tecnologia → Presença (espelho do #1) ===
        // tecnologiaPhoto declarado no bloco Cross-morph #1 acima — reutilizado aqui.
        // presencaPhoto declarado no bloco Morph #2 acima — reutilizado aqui.
        const presencaSection = document.querySelector<HTMLElement>("#presenca");

        if (tecnologiaPhoto && presencaPhoto && presencaSection) {
          // Estado inicial — presencaPhoto começa invisível à esquerda
          gsap.set(presencaPhoto, { opacity: 0, x: -200, scale: 0.8 });

          ScrollTrigger.create({
            trigger: presencaSection,
            start: "top 90%",
            end: "top 30%",
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;

              // Ultraformer ESCAPA pra DIREITA
              const scaleOut = 1 - 0.15 * p;
              const xOut = 200 * p;
              const opacityOut = 1 - 0.6 * p;
              gsap.set(tecnologiaPhoto, {
                scale: scaleOut,
                x: xOut,
                opacity: opacityOut,
              });

              // Retrato ENTRA pela ESQUERDA — espelhado
              const enterProgress = Math.max(0, (p - 0.2) / 0.8);
              const scaleIn = 0.8 + 0.2 * enterProgress;
              const xIn = -200 + 200 * enterProgress; // -200 → 0 (entra pela esquerda)
              const opacityIn = enterProgress;
              gsap.set(presencaPhoto, {
                scale: scaleIn,
                x: xIn,
                opacity: opacityIn,
              });
            },
            onLeave: () => {
              gsap.set(presencaPhoto, { scale: 1, x: 0, opacity: 1 });
              gsap.fromTo(
                presencaPhoto,
                { scale: 1 },
                { scale: 1.02, duration: 0.18, ease: "back.out(1.3)", yoyo: true, repeat: 1 }
              );
            },
            onEnterBack: () => {
              if (tecnologiaPhoto) gsap.set(tecnologiaPhoto, { opacity: 1 });
            },
          });
        }
      }
    );

    return () => mm.revert();
  }, []);
}
