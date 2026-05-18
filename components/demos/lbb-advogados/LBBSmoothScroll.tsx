"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
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
 *
 * Debug overlay: ativável via querystring ?debug=1 — captura zonas,
 * contadores de wheels (swallowed vs processed) e tempo na "janela morta"
 * entre Lenis-landed e releaseTimer-fired. Só pra diagnóstico do bug
 * residual scroll Sobre→Hero. Não muda a lógica do scroll.
 */

const HERO_LOCK_TOLERANCE = 10;
const SOBRE_TOP_RETURN_ZONE = 200;
const SNAP_DURATION = 1.2;
const SNAP_RELEASE_BUFFER_MS = 200;
const WHEEL_MIN_DELTA = 4;

const EASE_IN_OUT_CUBIC = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function LBBSmoothScroll({ children }: { children: ReactNode }) {
  const [reduce, setReduce] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [debugOn, setDebugOn] = useState(false);
  const debugRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const mReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mTouch = window.matchMedia("(pointer: coarse)");
    setReduce(mReduce.matches);
    setIsTouch(mTouch.matches);
    const params = new URLSearchParams(window.location.search);
    setDebugOn(params.has("debug"));
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
    let releaseTimer: number | null = null;

    // ── Debug instrumentation (read-only — não muda comportamento) ──
    let snapTarget = 0;
    let snapLandedAt = 0;
    let lastBeginSnapAt = 0;
    let lastWheelAt = 0;
    let lastDeltaY = 0;
    let lastZone = "—";
    let lastDecision = "—";
    let total = 0;
    let passed = 0;
    let snapUps = 0;
    let snapDowns = 0;
    let swallowSnap = 0;
    let swallowUp = 0;
    let filtered = 0;

    const beginSnap = (target: HTMLElement) => {
      isSnapping = true;
      snapTarget = target.getBoundingClientRect().top + window.scrollY;
      snapLandedAt = 0;
      lastBeginSnapAt = performance.now();
      if (releaseTimer) clearTimeout(releaseTimer);
      releaseTimer = window.setTimeout(() => {
        isSnapping = false;
        releaseTimer = null;
      }, SNAP_DURATION * 1000 + SNAP_RELEASE_BUFFER_MS);
      lenis.scrollTo(target, {
        duration: SNAP_DURATION,
        easing: EASE_IN_OUT_CUBIC,
      });
    };

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
      total += 1;
      lastWheelAt = performance.now();
      lastDeltaY = e.deltaY;

      if (isSnapping) {
        lastZone = "snapping";
        lastDecision = "swallow ↻";
        swallowSnap += 1;
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (Math.abs(e.deltaY) < WHEEL_MIN_DELTA) {
        lastZone = "filtered";
        lastDecision = "filtered";
        filtered += 1;
        return;
      }

      const refs = getHeroSobre();
      if (!refs) return;
      const { hero, sobre, sobreTop } = refs;
      const scrollY = window.scrollY;
      const inHero = scrollY < sobreTop - HERO_LOCK_TOLERANCE;

      if (inHero) {
        lastZone = "inHero";
        e.preventDefault();
        e.stopPropagation();
        if (e.deltaY > 0) {
          lastDecision = "snap ↓";
          snapDowns += 1;
          beginSnap(sobre);
        } else {
          lastDecision = "swallow ↑ ⚠";
          swallowUp += 1;
        }
        return;
      }

      const justBelowSobreTop =
        scrollY >= sobreTop - HERO_LOCK_TOLERANCE &&
        scrollY < sobreTop + SOBRE_TOP_RETURN_ZONE;
      if (justBelowSobreTop && e.deltaY < 0) {
        lastZone = "returnZone";
        lastDecision = "snap ↑";
        snapUps += 1;
        e.preventDefault();
        e.stopPropagation();
        beginSnap(hero);
        return;
      }

      lastZone = "free";
      lastDecision = "→ lenis";
      passed += 1;
    };

    window.addEventListener("wheel", onWheel, { passive: false, capture: true });

    const raf = (time: number) => {
      lenis.raf(time);

      // Detecta quando Lenis chegou no destino do snap (lenis.scroll ≈ target)
      if (isSnapping && snapLandedAt === 0) {
        if (Math.abs(lenis.scroll - snapTarget) < 1) {
          snapLandedAt = performance.now();
        }
      }

      // Atualiza overlay (só se debug ligado)
      if (debugRef.current) {
        const refs = getHeroSobre();
        const sobreTop = refs?.sobreTop ?? 0;
        const scrollY = window.scrollY;
        const gap = scrollY - sobreTop;
        const now = performance.now();
        const sinceWheel = lastWheelAt ? Math.round(now - lastWheelAt) : 0;
        const sinceSnap = lastBeginSnapAt ? Math.round(now - lastBeginSnapAt) : 0;
        const deadWindow =
          isSnapping && snapLandedAt > 0 ? Math.round(now - snapLandedAt) : 0;
        const gapZone =
          gap < -HERO_LOCK_TOLERANCE
            ? "in Hero"
            : gap < SOBRE_TOP_RETURN_ZONE
              ? "return zone"
              : "free";

        debugRef.current.textContent = [
          `─ LBB SCROLL DEBUG ─────────`,
          `scrollY        ${Math.round(scrollY)}`,
          `sobreTop       ${Math.round(sobreTop)}`,
          `gap            ${gap >= 0 ? "+" : ""}${Math.round(gap)}  (${gapZone})`,
          ``,
          `isSnapping     ${isSnapping ? "YES" : "no"}`,
          `landed ago     ${deadWindow}ms${deadWindow > 0 ? "  ⚠ dead window" : ""}`,
          `last snap      ${sinceSnap}ms ago`,
          ``,
          `last wheel     ${lastDeltaY > 0 ? "+" : ""}${Math.round(lastDeltaY)}  (${sinceWheel}ms ago)`,
          `last zone      ${lastZone}`,
          `last decision  ${lastDecision}`,
          ``,
          `counters`,
          `  total        ${total}`,
          `  → lenis      ${passed}`,
          `  snap ↑       ${snapUps}`,
          `  snap ↓       ${snapDowns}`,
          `  swallow ↻    ${swallowSnap}`,
          `  swallow ↑ ⚠  ${swallowUp}`,
          `  filtered     ${filtered}`,
        ].join("\n");
      }

      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", onWheel, { capture: true });
      if (releaseTimer) clearTimeout(releaseTimer);
      lenis.destroy();
    };
  }, [reduce, isTouch]);

  return (
    <>
      {children}
      {debugOn && (
        <pre
          ref={debugRef}
          style={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 9999,
            background: "rgba(10, 22, 38, 0.94)",
            color: "#7CFFB6",
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: 11,
            lineHeight: 1.55,
            padding: "12px 14px",
            borderRadius: 6,
            pointerEvents: "none",
            whiteSpace: "pre",
            margin: 0,
            minWidth: 260,
            border: "1px solid rgba(124, 255, 182, 0.28)",
            letterSpacing: "0.2px",
          }}
        />
      )}
    </>
  );
}
