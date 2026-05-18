"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Magnetic section snap — rAF-based stability detection.
 *
 * Bug anterior: lenis.on('scroll', ...) dispara a 60fps DURANTE a animação
 * smooth do Lenis. settleTimer era resetado cada frame → nunca chegava aos
 * 220ms → magnetic check nunca rodava.
 *
 * Fix: dentro do mesmo rAF do Lenis, conta frames estáveis (scrollY sem
 * mudança > 0.5px). Após ~14 frames estáveis (~230ms a 60fps), considera
 * user parado e dispara magnetic check.
 */

const MAGNET_INNER = 8;       // < 8px: já alinhado, não puxa
const MAGNET_OUTER = 160;     // > 160px: longe da borda, não puxa
const STABLE_FRAMES = 14;     // ~230ms @ 60fps
const SNAP_DURATION = 0.7;    // segundos
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

    // Touch device: somente Lenis suave, sem magnet
    if (isTouch) {
      const rafTouch = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(rafTouch);
      };
      rafId = requestAnimationFrame(rafTouch);
      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }

    let lastY = window.scrollY;
    let stableFrames = 0;
    let isSnapping = false;
    let snapReleaseTime = 0;

    const findClosestSection = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap-section]")
      );
      if (sections.length === 0) return null;
      const scrollY = window.scrollY;
      // Posição absoluta no document via bounding rect (offsetTop é relativo ao offsetParent)
      const tops = sections.map((s) => s.getBoundingClientRect().top + scrollY);
      let closestIdx = 0;
      let minDist = Math.abs(tops[0] - scrollY);
      for (let i = 1; i < tops.length; i++) {
        const d = Math.abs(tops[i] - scrollY);
        if (d < minDist) {
          minDist = d;
          closestIdx = i;
        }
      }
      return { target: sections[closestIdx], distance: minDist };
    };

    const raf = (time: number) => {
      lenis.raf(time);

      // Libera flag isSnapping com base no tempo (não em callback do Lenis)
      if (isSnapping && time >= snapReleaseTime) {
        isSnapping = false;
        stableFrames = 0; // reseta contador após snap completar
      }

      const y = window.scrollY;
      if (Math.abs(y - lastY) < 0.5) {
        stableFrames++;
      } else {
        stableFrames = 0;
      }
      lastY = y;

      // User estabilizou + não está em snap ativo → check magnet
      if (!isSnapping && stableFrames >= STABLE_FRAMES) {
        stableFrames = 0; // reset imediato pra não disparar de novo no próximo frame
        const result = findClosestSection();
        if (result) {
          const { target, distance } = result;
          if (distance > MAGNET_INNER && distance < MAGNET_OUTER) {
            isSnapping = true;
            snapReleaseTime = time + SNAP_DURATION * 1000 + 200;
            lenis.scrollTo(target, {
              duration: SNAP_DURATION,
              easing: EASE_OUT_QUART,
            });
          }
        }
      }

      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [reduce, isTouch]);

  return <>{children}</>;
}
