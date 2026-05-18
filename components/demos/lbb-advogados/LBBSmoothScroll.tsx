"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Scroll híbrido:
 * 1. Hero (§01) → Sobre (§02): LOCK MAGNÉTICO. Qualquer wheel down dispara
 *    snap suave pra Sobre. Wheel up dentro de Sobre (perto do topo) volta
 *    pra Hero. Scroll natural é BLOQUEADO nessa zona (preventDefault).
 * 2. Sobre em diante: scroll natural via Lenis smooth (sem magnet, sem snap).
 *
 * Captura ANTES do Lenis (capture:true + stopPropagation) pra interceptar
 * wheel apenas na zona de transição.
 */

const HERO_LOCK_TOLERANCE = 10;    // px de tolerância pra considerar "no Hero"
const SOBRE_TOP_RETURN_ZONE = 80;  // px abaixo de Sobre.top onde wheel-up volta pra Hero
const SNAP_DURATION = 1.2;          // segundos da animação Hero↔Sobre
const WHEEL_MIN_DELTA = 4;          // ignora wheels muito pequenos

const EASE_IN_OUT_CUBIC = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function LBBSmoothScroll({ children }: { children: ReactNode }) {
  const [reduce, setReduce] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const debugRef = useRef<HTMLPreElement>(null);

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
    if (reduce) {
      if (debugRef.current) debugRef.current.textContent = "reduce-motion ON";
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,  // smooth padrão pro resto — suave sem exagero
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      if (isSnapping && time >= snapReleaseTime) isSnapping = false;
      updateOverlay();
      rafId = requestAnimationFrame(raf);
    };

    if (isTouch) {
      const rafTouch = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(rafTouch);
      };
      rafId = requestAnimationFrame(rafTouch);
      if (debugRef.current) debugRef.current.textContent = "touch device (lock desativado em mobile)";
      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }

    let isSnapping = false;
    let snapReleaseTime = 0;
    let lastTrigger = "—";

    const getHeroSobre = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap-section]")
      );
      if (sections.length < 2) return null;
      const hero = sections[0];
      const sobre = sections[1];
      const sobreTop = sobre.getBoundingClientRect().top + window.scrollY;
      const heroTop = hero.getBoundingClientRect().top + window.scrollY;
      return { hero, sobre, heroTop, sobreTop };
    };

    const onWheel = (e: WheelEvent) => {
      if (isSnapping) {
        // durante snap, bloqueia todo wheel (não interromper)
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
        // Dentro do Hero: BLOQUEIA scroll natural, dispara snap
        e.preventDefault();
        e.stopPropagation();
        if (e.deltaY > 0) {
          isSnapping = true;
          snapReleaseTime = performance.now() + SNAP_DURATION * 1000 + 200;
          lastTrigger = "Hero → Sobre (lock)";
          lenis.scrollTo(sobre, {
            duration: SNAP_DURATION,
            easing: EASE_IN_OUT_CUBIC,
          });
        }
        // wheel up dentro do Hero: ignora (já está no topo)
        return;
      }

      // Fora do Hero — verifica se está na zona de "voltar pra Hero"
      const justBelowSobreTop =
        scrollY >= sobreTop - HERO_LOCK_TOLERANCE && scrollY < sobreTop + SOBRE_TOP_RETURN_ZONE;
      if (justBelowSobreTop && e.deltaY < 0) {
        e.preventDefault();
        e.stopPropagation();
        isSnapping = true;
        snapReleaseTime = performance.now() + SNAP_DURATION * 1000 + 200;
        lastTrigger = "Sobre → Hero (lock)";
        lenis.scrollTo(hero, {
          duration: SNAP_DURATION,
          easing: EASE_IN_OUT_CUBIC,
        });
        return;
      }

      // Caso contrário: scroll natural via Lenis, sem interceptar
    };

    // capture: true → meu listener roda ANTES de qualquer outro (Lenis incluso)
    window.addEventListener("wheel", onWheel, { passive: false, capture: true });

    const updateOverlay = () => {
      if (!debugRef.current) return;
      const refs = getHeroSobre();
      if (!refs) {
        debugRef.current.textContent = "no sections found";
        return;
      }
      const { sobreTop } = refs;
      const scrollY = window.scrollY;
      const inHero = scrollY < sobreTop - HERO_LOCK_TOLERANCE;
      debugRef.current.textContent = [
        `scrollY      ${Math.round(scrollY)}`,
        `sobre top    ${Math.round(sobreTop)}`,
        `zone         ${inHero ? "HERO (lock)" : "natural"}`,
        `snapping     ${isSnapping}`,
        `last         ${lastTrigger}`,
      ].join("\n");
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", onWheel, { capture: true });
      lenis.destroy();
    };
  }, [reduce, isTouch]);

  return (
    <>
      {children}
      <pre
        ref={debugRef}
        style={{
          position: "fixed",
          bottom: 120,
          right: 16,
          zIndex: 9999,
          background: "rgba(10, 22, 38, 0.92)",
          color: "#7CFFB6",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 11,
          lineHeight: 1.5,
          padding: "10px 12px",
          borderRadius: 6,
          pointerEvents: "none",
          margin: 0,
          minWidth: 280,
          whiteSpace: "pre",
        }}
      >
        loading…
      </pre>
    </>
  );
}
