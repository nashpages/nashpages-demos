"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Smart wheel-based section snap:
 * - Smooth Lenis scroll baseline (sempre ativo)
 * - Ao tocar borda de uma section (top ou bottom), próximo wheel SNAP forte
 * - Dentro da section (entre top e bottom), scroll natural via Lenis
 * - Mobile/touch: respeita UX nativa, sem hijack
 *
 * Pattern William Fry: sensação de "scroll automático" entre sections
 * mas permite ler sections longas internamente.
 */

const EDGE_TOLERANCE = 24;       // px de tolerância pras bordas
const SNAP_DURATION = 1.05;       // segundos do scroll animado
const SNAP_COOLDOWN_MS = 80;      // espera após snap completar
const WHEEL_MIN_DELTA = 8;        // ignora wheel events muito pequenos
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

    // Touch device: somente Lenis suave, sem hijack
    if (isTouch) {
      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }

    let isSnapping = false;
    let cooldownTimeout: number | null = null;

    const getSections = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-snap-section]"));

    const findCurrentIdx = (sections: HTMLElement[], scrollY: number) => {
      const winH = window.innerHeight;
      const center = scrollY + winH / 2;
      let currentIdx = 0;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= center) currentIdx = i;
      }
      return currentIdx;
    };

    const snapTo = (target: HTMLElement) => {
      isSnapping = true;
      lenis.scrollTo(target, {
        duration: SNAP_DURATION,
        easing: EASE_OUT_QUART,
        lock: true,
        onComplete: () => {
          if (cooldownTimeout) clearTimeout(cooldownTimeout);
          cooldownTimeout = window.setTimeout(() => {
            isSnapping = false;
            cooldownTimeout = null;
          }, SNAP_COOLDOWN_MS);
        },
      });
    };

    const onWheel = (e: WheelEvent) => {
      if (isSnapping) {
        e.preventDefault();
        return;
      }
      if (Math.abs(e.deltaY) < WHEEL_MIN_DELTA) return;

      const sections = getSections();
      if (sections.length < 2) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const scrollY = window.scrollY;
      const winH = window.innerHeight;
      const currentIdx = findCurrentIdx(sections, scrollY);
      const current = sections[currentIdx];

      const sectionTop = current.offsetTop;
      const sectionBottom = sectionTop + current.offsetHeight;

      if (direction > 0) {
        // Scroll DOWN: snap apenas se já estamos no final da section atual
        const isNearBottom = scrollY + winH >= sectionBottom - EDGE_TOLERANCE;
        if (isNearBottom && currentIdx < sections.length - 1) {
          e.preventDefault();
          snapTo(sections[currentIdx + 1]);
        }
      } else {
        // Scroll UP: snap apenas se já estamos no topo da section atual
        const isNearTop = scrollY <= sectionTop + EDGE_TOLERANCE;
        if (isNearTop && currentIdx > 0) {
          e.preventDefault();
          snapTo(sections[currentIdx - 1]);
        }
      }
    };

    // passive: false necessário pra usar e.preventDefault()
    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", onWheel);
      if (cooldownTimeout) clearTimeout(cooldownTimeout);
      lenis.destroy();
    };
  }, [reduce, isTouch]);

  return <>{children}</>;
}
