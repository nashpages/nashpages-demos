"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Lenis from "lenis";

const MAGNET_INNER = 8;
const MAGNET_DOWN_RANGE = 500; // snap pra próxima section se estiver ≤500px de distância
const MAGNET_UP_RANGE = 80;    // snap pra alinhar topo da section atual só se MUITO perto
const STABLE_FRAMES = 14;
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

    let lastY = window.scrollY;
    let stableFrames = 0;
    let isSnapping = false;
    let snapReleaseTime = 0;
    let lastTriggerReason = "";

    const findSnapTarget = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap-section]")
      );
      if (sections.length === 0) return null;
      const scrollY = window.scrollY;
      // posição absoluta de cada section start
      const items = sections.map((el) => ({
        el,
        top: el.getBoundingClientRect().top + scrollY,
      }));
      items.sort((a, b) => a.top - b.top);

      // section start logo acima (prev) e logo abaixo (next) do scrollY
      let prev: (typeof items)[0] | null = null;
      let next: (typeof items)[0] | null = null;
      for (const it of items) {
        if (it.top <= scrollY + 1) prev = it;
        else if (next === null) next = it;
      }
      const distPrev = prev ? scrollY - prev.top : Infinity;
      const distNext = next ? next.top - scrollY : Infinity;

      // 1) Snap DOWN — passou da metade entre prev e next (mais perto do next)
      if (next && distNext > MAGNET_INNER && distNext <= MAGNET_DOWN_RANGE && distNext < distPrev) {
        return { target: next.el, distance: distNext, total: items.length, reason: "down" };
      }
      // 2) Snap UP — está MUITO perto do topo da section atual (alinha)
      if (prev && distPrev > MAGNET_INNER && distPrev <= MAGNET_UP_RANGE) {
        return { target: prev.el, distance: distPrev, total: items.length, reason: "up" };
      }
      // 3) Nenhum snap (no meio de uma section longa, scroll natural)
      const closer = distNext <= distPrev ? next : prev;
      return { target: closer?.el ?? items[0].el, distance: Math.min(distNext, distPrev), total: items.length, reason: "none" };
    };

    const raf = (time: number) => {
      lenis.raf(time);

      if (isSnapping && time >= snapReleaseTime) {
        isSnapping = false;
        stableFrames = 0;
      }

      const y = window.scrollY;
      if (Math.abs(y - lastY) < 0.5) {
        stableFrames++;
      } else {
        stableFrames = 0;
      }
      lastY = y;

      if (!isSnapping && stableFrames >= STABLE_FRAMES) {
        stableFrames = 0;
        const result = findSnapTarget();
        if (result) {
          const { target, distance, reason } = result;
          if (reason === "down" || reason === "up") {
            isSnapping = true;
            snapReleaseTime = time + SNAP_DURATION * 1000 + 200;
            lastTriggerReason = `SNAP ${reason} → ${target.id || "?"} (dist ${Math.round(distance)})`;
            lenis.scrollTo(target, {
              duration: SNAP_DURATION,
              easing: EASE_OUT_QUART,
            });
          } else if (distance <= MAGNET_INNER) {
            lastTriggerReason = `aligned (dist ${Math.round(distance)})`;
          } else {
            lastTriggerReason = `no-snap (dist ${Math.round(distance)})`;
          }
        }
      }

      if (debugRef.current) {
        const r = findSnapTarget();
        const sectionsList = Array.from(
          document.querySelectorAll<HTMLElement>("[data-snap-section]")
        ).map((s) => s.id || "?").join(", ");
        debugRef.current.textContent = [
          `scrollY      ${Math.round(y)}`,
          `stable       ${stableFrames}/${STABLE_FRAMES}`,
          `snapping     ${isSnapping}`,
          `sections     ${r?.total ?? 0}  [${sectionsList}]`,
          `target       ${r?.target.id ?? "—"}  (${r?.reason ?? "—"})`,
          `distance     ${r ? Math.round(r.distance) : "—"}  (down≤${MAGNET_DOWN_RANGE} / up≤${MAGNET_UP_RANGE})`,
          `last         ${lastTriggerReason || "—"}`,
        ].join("\n");
      }

      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
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
