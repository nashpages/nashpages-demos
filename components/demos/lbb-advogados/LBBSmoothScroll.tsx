"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EASE_SNAP = "power2.inOut";

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
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    // Integrate Lenis with GSAP ticker (canonical pattern)
    lenis.on("scroll", () => ScrollTrigger.update());
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    let snapTrigger: ScrollTrigger | null = null;

    // Setup snap: pular se touch device (UX nativo respeitado em mobile)
    const setupSnap = () => {
      if (isTouch) return;

      const sections = gsap.utils.toArray<HTMLElement>("[data-snap-section]");
      if (sections.length < 2) return;

      const maxScroll = document.body.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const fractions = sections
        .map((s) => s.offsetTop / maxScroll)
        .filter((p) => p >= 0 && p <= 1)
        .sort((a, b) => a - b);

      snapTrigger = ScrollTrigger.create({
        snap: {
          snapTo: fractions,
          duration: { min: 0.5, max: 1.1 },
          delay: 0.12,
          ease: EASE_SNAP,
          inertia: false,
        },
      });
    };

    // Aguarda layout estabilizar antes de calcular positions
    const t = window.setTimeout(setupSnap, 250);

    // Re-setup on resize (positions mudam)
    const onResize = () => {
      if (snapTrigger) snapTrigger.kill();
      setupSnap();
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
      if (snapTrigger) snapTrigger.kill();
      ScrollTrigger.getAll().forEach((s) => s.kill());
      lenis.destroy();
    };
  }, [reduce, isTouch]);

  return <>{children}</>;
}
