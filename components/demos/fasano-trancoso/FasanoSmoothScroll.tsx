"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Scroll suave + duplo-hero.
 * - Hero-lock (clone Casa Valduga): uma rolada para baixo no Hero (01) snapa
 *   para a Apresentação (02); rolar para cima volta ao topo. Dá a transição
 *   cinematográfica "tela de impacto → revela a marca".
 * - GSAP ScrollTrigger é dirigido pelo Lenis (gsap.ticker + lenis.on scroll)
 *   para o parallax/Ken Burns das fotos acompanharem o scroll suave.
 * - As duas primeiras <section> precisam de [data-snap-section].
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

export function FasanoSmoothScroll({ children }: { children: ReactNode }) {
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
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    // Lenis dirige o ScrollTrigger (pro parallax das fotos).
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

    const getHeroApres = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap-section]")
      );
      if (sections.length < 2) return null;
      const hero = sections[0];
      const apres = sections[1];
      const apresTop = apres.getBoundingClientRect().top + window.scrollY;
      return { hero, apres, apresTop };
    };

    const onWheel = (e: WheelEvent) => {
      if (isTouch) return;
      if (isSnapping) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (Math.abs(e.deltaY) < WHEEL_MIN_DELTA) return;

      const refs = getHeroApres();
      if (!refs) return;
      const { hero, apres, apresTop } = refs;
      const scrollY = window.scrollY;
      const inHero = scrollY < apresTop - HERO_LOCK_TOLERANCE;

      if (inHero) {
        e.preventDefault();
        e.stopPropagation();
        if (e.deltaY > 0) {
          beginSnap(apres);
        } else if (scrollY > HERO_TOP_EPSILON) {
          beginSnap(hero);
        }
        return;
      }

      const justBelowApresTop =
        scrollY >= apresTop - HERO_LOCK_TOLERANCE &&
        scrollY < apresTop + SOBRE_TOP_RETURN_ZONE;
      if (justBelowApresTop && e.deltaY < 0) {
        e.preventDefault();
        e.stopPropagation();
        beginSnap(hero);
      }
    };

    const onLenisScrollSnap = () => {
      if (isTouch || isSnapping) return;
      const refs = getHeroApres();
      if (!refs) return;
      const { hero, apresTop } = refs;
      if (
        lenis.scroll < apresTop - HERO_LOCK_TOLERANCE &&
        lenis.velocity < AUTO_SNAP_VELOCITY_THRESHOLD
      ) {
        beginSnap(hero);
      }
    };

    if (!isTouch) {
      window.addEventListener("wheel", onWheel, { passive: false, capture: true });
      lenis.on("scroll", onLenisScrollSnap);
    }

    // ScrollTrigger recalcula após o layout assentar.
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
