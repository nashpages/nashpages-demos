"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Magnetic section snap (gentle):
 * - Lenis smooth scroll baseline sempre ativo
 * - Wheel NÃO é hijack-ado — user scrolla naturalmente
 * - Após user PARAR de scrollar 220ms, calcula se está perto de uma section start
 * - Se estiver na "zona magnética" (8-130px), puxa suavemente pra section
 * - Se estiver longe (>130px), não interfere — scroll natural permanece
 * - Touch device: sem snap, UX nativa
 *
 * Sensação: scroll normal funciona em todas as velocidades, mas há um
 * "puxão" magnético sutil que termina o movimento na próxima section.
 */

const MAGNET_INNER = 8;      // < 8px: já está alinhado, não puxar
const MAGNET_OUTER = 140;    // > 140px: longe da borda, não puxar
const SETTLE_DELAY_MS = 220; // espera após user parar de scrollar
const SNAP_DURATION = 0.75;  // segundos do magnetic pull
const SNAP_COOLDOWN_MS = 60; // espera após snap completar
const EASE_OUT_QUART = (t: number) => 1 - Math.pow(1 - t, 4);

export function LBBSmoothScroll({ children }: { children: ReactNode }) {
  const [reduce, setReduce] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mTouch = window.matchMedia("(pointer: coarse)");
    setReduce(mReduce.matches);
    setIsTouch(mTouch.matches);
    const onReduce = () => setReduce(mReduce.matches);
    const onTouch = () => setIsTouch(mTouch.matches);
    mReduce.addEventListener("change", onReduce);
    mTouch.addEventListener("change", onTouch);
    return () => {
      mReduce.removeEventListener("change", onReduce);
      mTouch.removeEventListener("change", onTouch);
    };
  }, []);

  useEffect(() => {
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    if (isTouch) {
      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }

    let isSnapping = false;
    let settleTimer: number | null = null;
    let cooldownTimer: number | null = null;

    const findClosestSection = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap-section]")
      );
      if (sections.length === 0) return null;
      const scrollY = window.scrollY;
      let closest = sections[0];
      let minDist = Math.abs(closest.offsetTop - scrollY);
      for (const s of sections) {
        const d = Math.abs(s.offsetTop - scrollY);
        if (d < minDist) {
          minDist = d;
          closest = s;
        }
      }
      return { target: closest, distance: minDist };
    };

    const onScroll = () => {
      if (isSnapping) return;
      if (settleTimer) clearTimeout(settleTimer);
      settleTimer = window.setTimeout(() => {
        if (isSnapping) return;
        const result = findClosestSection();
        if (!result) return;
        const { target, distance } = result;
        if (distance > MAGNET_INNER && distance < MAGNET_OUTER) {
          isSnapping = true;
          lenis.scrollTo(target, {
            duration: SNAP_DURATION,
            easing: EASE_OUT_QUART,
            onComplete: () => {
              if (cooldownTimer) clearTimeout(cooldownTimer);
              cooldownTimer = window.setTimeout(() => {
                isSnapping = false;
                cooldownTimer = null;
              }, SNAP_COOLDOWN_MS);
            },
          });
        }
      }, SETTLE_DELAY_MS);
    };

    lenis.on("scroll", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", onScroll);
      if (settleTimer) clearTimeout(settleTimer);
      if (cooldownTimer) clearTimeout(cooldownTimer);
      lenis.destroy();
    };
  }, [reduce, isTouch]);

  return <>{children}</>;
}
