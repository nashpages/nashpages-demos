"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Scroll híbrido + integração GSAP/Lenis.
 * - Hero-lock (clone Bermudes Pattern 7): wheel down no Hero snapa pra §02;
 *   wheel up volta pro topo; Lenis listener fecha o caminho silencioso.
 * - GSAP ScrollTrigger é dirigido pelo Lenis (gsap.ticker + lenis.on scroll)
 *   pra o pan da cave (§04) funcionar com o scroll suave.
 */

const HERO_LOCK_TOLERANCE = 10;
const SOBRE_TOP_RETURN_ZONE = 200;
const SNAP_DURATION = 1.2;
const SNAP_RELEASE_BUFFER_MS = 200;
const WHEEL_MIN_DELTA = 4;
const HERO_TOP_EPSILON = 1;
const AUTO_SNAP_VELOCITY_THRESHOLD = -0.5;

const EASE_IN_OUT_CUBIC = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function ValdugaSmoothScroll({ children }: { children: ReactNode }) {
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

    // Lenis dirige o ScrollTrigger (pra o pin/pan da cave).
    const onScrollUpdate = () => ScrollTrigger.update();
    lenis.on("scroll", onScrollUpdate);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    let isSnapping = false;
    let releaseTimer: number | null = null;

    const beginSnap = (target: HTMLElement) => {
      isSnapping = true;
      if (releaseTimer) clearTimeout(releaseTimer);
      releaseTimer = window.setTimeout(() => {
        isSnapping = false;
        releaseTimer = null;
      }, SNAP_DURATION * 1000 + SNAP_RELEASE_BUFFER_MS);
      lenis.scrollTo(target, { duration: SNAP_DURATION, easing: EASE_IN_OUT_CUBIC });
    };

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
      if (isTouch) return;
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
          beginSnap(sobre);
        } else if (scrollY > HERO_TOP_EPSILON) {
          beginSnap(hero);
        }
        return;
      }

      const justBelowSobreTop =
        scrollY >= sobreTop - HERO_LOCK_TOLERANCE &&
        scrollY < sobreTop + SOBRE_TOP_RETURN_ZONE;
      if (justBelowSobreTop && e.deltaY < 0) {
        e.preventDefault();
        e.stopPropagation();
        beginSnap(hero);
      }
    };

    const onLenisScrollSnap = () => {
      if (isTouch || isSnapping) return;
      const refs = getHeroSobre();
      if (!refs) return;
      const { hero, sobreTop } = refs;
      if (
        lenis.scroll < sobreTop - HERO_LOCK_TOLERANCE &&
        lenis.velocity < AUTO_SNAP_VELOCITY_THRESHOLD
      ) {
        beginSnap(hero);
      }
    };

    if (!isTouch) {
      window.addEventListener("wheel", onWheel, { passive: false, capture: true });
      lenis.on("scroll", onLenisScrollSnap);
    }

    // ScrollTrigger precisa recalcular após o layout assentar.
    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      window.clearTimeout(refreshId);
      if (!isTouch) {
        window.removeEventListener("wheel", onWheel, { capture: true });
        lenis.off("scroll", onLenisScrollSnap);
      }
      lenis.off("scroll", onScrollUpdate);
      gsap.ticker.remove(tick);
      if (releaseTimer) clearTimeout(releaseTimer);
      lenis.destroy();
    };
  }, [reduce, isTouch]);

  return <>{children}</>;
}
