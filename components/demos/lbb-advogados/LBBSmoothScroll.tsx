"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Scroll híbrido:
 * 1. Hero (§01) → Sobre (§02): LOCK MAGNÉTICO. Qualquer wheel down dispara
 *    snap suave pra Sobre. Wheel up dentro de Sobre (perto do topo) volta
 *    pra Hero. Scroll natural BLOQUEADO nessa zona (preventDefault).
 * 2. Sobre em diante: scroll natural via Lenis smooth (sem magnet, sem snap).
 *
 * Captura ANTES do Lenis (capture:true + stopPropagation) pra interceptar
 * wheel apenas na zona de transição.
 */

const HERO_LOCK_TOLERANCE = 10;
const SOBRE_TOP_RETURN_ZONE = 80;
const SNAP_DURATION = 1.2;
const WHEEL_MIN_DELTA = 4;

const EASE_IN_OUT_CUBIC = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

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
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    let isSnapping = false;
    let snapReleaseTime = 0;

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

    const getHeroSobre = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap-section]")
      );
      if (sections.length < 2) return null;
      const hero = sections[0];
      const sobre = sections[1];
      const sobreTop = sobre.getBoundingClientRect().top + window.scrollY;
      return { hero, sobre, sobreTop };
    };

    const onWheel = (e: WheelEvent) => {
      if (isSnapping) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (Math.abs(e.deltaY) < WHEEL_MIN_DELTA) return;

      const refs = getHeroSobre();
      if (!refs) return;
      const { hero, sobre, sobreTop } = refs;
      const scrollY = window.scrollY;
      const inHero = scrollY < sobreTop - HERO_LOCK_TOLERANCE;

      if (inHero) {
        e.preventDefault();
        e.stopPropagation();
        if (e.deltaY > 0) {
          isSnapping = true;
          snapReleaseTime = performance.now() + SNAP_DURATION * 1000 + 200;
          lenis.scrollTo(sobre, {
            duration: SNAP_DURATION,
            easing: EASE_IN_OUT_CUBIC,
          });
        }
        return;
      }

      const justBelowSobreTop =
        scrollY >= sobreTop - HERO_LOCK_TOLERANCE &&
        scrollY < sobreTop + SOBRE_TOP_RETURN_ZONE;
      if (justBelowSobreTop && e.deltaY < 0) {
        e.preventDefault();
        e.stopPropagation();
        isSnapping = true;
        snapReleaseTime = performance.now() + SNAP_DURATION * 1000 + 200;
        lenis.scrollTo(hero, {
          duration: SNAP_DURATION,
          easing: EASE_IN_OUT_CUBIC,
        });
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false, capture: true });

    const raf = (time: number) => {
      lenis.raf(time);
      if (isSnapping && time >= snapReleaseTime) isSnapping = false;
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", onWheel, { capture: true });
      lenis.destroy();
    };
  }, [reduce, isTouch]);

  return <>{children}</>;
}
