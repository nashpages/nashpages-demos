"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Magnetic snap baseado em wheel-end + lenis.targetScroll.
 *
 * Bug anterior: rAF stability detection só disparava quando user PARAVA
 * completamente o scroll, depois do Lenis terminar a desaceleração suave.
 * Em scroll normal, magnet nunca disparava.
 *
 * Fix: detectar quando user solta a roda (wheel-end debounce 100ms) e
 * verificar onde Lenis está direcionado (targetScroll). Se esse destino
 * está perto de uma section, redireciona Lenis pra ela IMEDIATAMENTE —
 * antes de Lenis terminar de decelerar. Sensação: scroll natural com
 * finalização magnética.
 */

const MAGNET_INNER = 8;
const MAGNET_DOWN_RANGE = 500;
const MAGNET_UP_RANGE = 80;
const WHEEL_END_DELAY = 100;
const SNAP_DURATION = 0.7;
const EASE_OUT_QUART = (t: number) => 1 - Math.pow(1 - t, 4);

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
      if (debugRef.current) debugRef.current.textContent = "reduce-motion ON (snap desativado)";
      return;
    }

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let rafId: number;

    if (isTouch) {
      const rafTouch = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(rafTouch);
      };
      rafId = requestAnimationFrame(rafTouch);
      if (debugRef.current) debugRef.current.textContent = "touch device (snap desativado em mobile)";
      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }

    let isSnapping = false;
    let snapReleaseTime = 0;
    let wheelEndTimer: number | null = null;
    let lastTrigger = "—";
    let lastFinalY = 0;
    let lastDist = 0;
    let lastReason = "—";

    const findSnapTargetAt = (atY: number) => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap-section]")
      );
      if (sections.length === 0) return null;
      const items = sections.map((el) => ({
        el,
        top: el.getBoundingClientRect().top + window.scrollY,
      }));
      items.sort((a, b) => a.top - b.top);

      let prev: (typeof items)[0] | null = null;
      let next: (typeof items)[0] | null = null;
      for (const it of items) {
        if (it.top <= atY + 1) prev = it;
        else if (next === null) next = it;
      }
      const distPrev = prev ? atY - prev.top : Infinity;
      const distNext = next ? next.top - atY : Infinity;

      if (next && distNext > MAGNET_INNER && distNext <= MAGNET_DOWN_RANGE && distNext < distPrev) {
        return { target: next.el, distance: distNext, total: items.length, reason: "down" };
      }
      if (prev && distPrev > MAGNET_INNER && distPrev <= MAGNET_UP_RANGE) {
        return { target: prev.el, distance: distPrev, total: items.length, reason: "up" };
      }
      const closer = distNext <= distPrev ? next : prev;
      return {
        target: closer?.el ?? items[0].el,
        distance: Math.min(distNext, distPrev),
        total: items.length,
        reason: "none",
      };
    };

    const tryMagnetSnap = () => {
      if (isSnapping) return;
      const lenisAny = lenis as unknown as { targetScroll?: number };
      const finalY = lenisAny.targetScroll ?? window.scrollY;
      lastFinalY = finalY;

      const result = findSnapTargetAt(finalY);
      if (!result) return;
      lastDist = result.distance;
      lastReason = result.reason;

      if (result.reason === "down" || result.reason === "up") {
        isSnapping = true;
        snapReleaseTime = performance.now() + SNAP_DURATION * 1000 + 200;
        lastTrigger = `SNAP ${result.reason} → ${result.target.id || "?"} (dist ${Math.round(result.distance)})`;
        lenis.scrollTo(result.target, {
          duration: SNAP_DURATION,
          easing: EASE_OUT_QUART,
        });
      } else {
        lastTrigger = `no-snap (finalY=${Math.round(finalY)}, dist ${Math.round(result.distance)})`;
      }
    };

    const onWheel = () => {
      if (isSnapping) return;
      if (wheelEndTimer) clearTimeout(wheelEndTimer);
      wheelEndTimer = window.setTimeout(() => {
        wheelEndTimer = null;
        tryMagnetSnap();
      }, WHEEL_END_DELAY);
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    const raf = (time: number) => {
      lenis.raf(time);

      if (isSnapping && time >= snapReleaseTime) {
        isSnapping = false;
      }

      if (debugRef.current) {
        const lenisAny = lenis as unknown as { targetScroll?: number; scroll?: number };
        const sectionsList = Array.from(
          document.querySelectorAll<HTMLElement>("[data-snap-section]")
        ).map((s) => s.id || "?").join(", ");
        debugRef.current.textContent = [
          `scrollY      ${Math.round(window.scrollY)}`,
          `lenis target ${Math.round(lenisAny.targetScroll ?? 0)}`,
          `wheelEnd     ${wheelEndTimer !== null ? "pending..." : "idle"}`,
          `snapping     ${isSnapping}`,
          `sections     [${sectionsList}]`,
          `last finalY  ${Math.round(lastFinalY)}  dist ${Math.round(lastDist)}  (${lastReason})`,
          `last         ${lastTrigger}`,
        ].join("\n");
      }

      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", onWheel);
      if (wheelEndTimer) clearTimeout(wheelEndTimer);
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
          minWidth: 320,
          whiteSpace: "pre",
        }}
      >
        loading…
      </pre>
    </>
  );
}
