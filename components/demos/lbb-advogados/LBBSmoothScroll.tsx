"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Lenis from "lenis";

const MAGNET_INNER = 8;
const MAGNET_OUTER = 160;
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

    const findClosestSection = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap-section]")
      );
      if (sections.length === 0) return null;
      const scrollY = window.scrollY;
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
      return { target: sections[closestIdx], distance: minDist, total: sections.length };
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
        const result = findClosestSection();
        if (result) {
          const { target, distance } = result;
          if (distance > MAGNET_INNER && distance < MAGNET_OUTER) {
            isSnapping = true;
            snapReleaseTime = time + SNAP_DURATION * 1000 + 200;
            lastTriggerReason = `SNAP → ${target.id || "?"} (dist ${Math.round(distance)})`;
            lenis.scrollTo(target, {
              duration: SNAP_DURATION,
              easing: EASE_OUT_QUART,
            });
          } else if (distance <= MAGNET_INNER) {
            lastTriggerReason = `aligned (dist ${Math.round(distance)} ≤ ${MAGNET_INNER})`;
          } else {
            lastTriggerReason = `too far (dist ${Math.round(distance)} ≥ ${MAGNET_OUTER})`;
          }
        }
      }

      if (debugRef.current) {
        const r = findClosestSection();
        const sectionsList = Array.from(
          document.querySelectorAll<HTMLElement>("[data-snap-section]")
        ).map((s) => s.id || "?").join(", ");
        debugRef.current.textContent = [
          `scrollY      ${Math.round(y)}`,
          `stable       ${stableFrames}/${STABLE_FRAMES}`,
          `snapping     ${isSnapping}`,
          `sections     ${r?.total ?? 0}  [${sectionsList}]`,
          `closest      ${r?.target.id ?? "—"}`,
          `distance     ${r ? Math.round(r.distance) : "—"}  (zone ${MAGNET_INNER}–${MAGNET_OUTER})`,
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
