"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";

export function TrojanSmoothScroll({ children }: { children: ReactNode }) {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mReduce.matches);
    const onReduce = () => setReduce(mReduce.matches);
    mReduce.addEventListener("change", onReduce);
    return () => mReduce.removeEventListener("change", onReduce);
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
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [reduce]);

  return <>{children}</>;
}
