"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Magnetic section snap (gentle) — fixed:
 * - Lenis smooth scroll baseline sempre ativo
 * - Não hijack: user scrolla naturalmente
 * - Após user PARAR de scrollar 220ms, checa distância pra section start mais próxima
 * - Se 8-140px de uma section: magnetic pull suave (0.75s)
 * - >140px: scroll natural, sem interferência
 * - Fallback timer reseta isSnapping mesmo se onComplete não disparar
 * - Touch device: sem snap
 */

const MAGNET_INNER = 8;
const MAGNET_OUTER = 140;
const SETTLE_DELAY_MS = 220;
const SNAP_DURATION = 0.75;
const SNAP_FALLBACK_MS = SNAP_DURATION * 1000 + 250;
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
    let resetTimer: number | null = null;

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
      if (settleTimer) {
        clearTimeout(settleTimer);
        settleTimer = null;
      }
      settleTimer = window.setTimeout(() => {
        settleTimer = null;
        if (isSnapping) return;

        const result = findClosestSection();
        if (!result) return;

        const { target, distance } = result;
        if (distance <= MAGNET_INNER || distance >= MAGNET_OUTER) return;

        isSnapping = true;
        // Hard fallback: garante que isSnapping reseta mesmo se onComplete falhar
        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = window.setTimeout(() => {
          isSnapping = false;
          resetTimer = null;
        }, SNAP_FALLBACK_MS);

        lenis.scrollTo(target, {
          duration: SNAP_DURATION,
          easing: EASE_OUT_QUART,
        });
      }, SETTLE_DELAY_MS);
    };

    lenis.on("scroll", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", onScroll);
      if (settleTimer) clearTimeout(settleTimer);
      if (resetTimer) clearTimeout(resetTimer);
      lenis.destroy();
    };
  }, [reduce, isTouch]);

  return <>{children}</>;
}
