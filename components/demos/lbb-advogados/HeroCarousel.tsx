"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { LBB_DATA } from "./data";

const SLIDE_DURATION_MS = 6000;

export function HeroCarousel() {
  const { hero } = LBB_DATA;
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  // Parallax cursor — logo central segue mouse com damping
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 25, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 70, damping: 25, mass: 0.6 });

  // Avanço do carousel
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % hero.photos.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [hero.photos.length, reduce]);

  // Cursor tracking (desktop only)
  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mx.set((e.clientX - cx) * 0.03);
      my.set((e.clientY - cy) * 0.03);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  const photoCount = hero.photos.length;
  const idxLabel = `${String(idx + 1).padStart(2, "0")} / ${String(photoCount).padStart(2, "0")}`;

  return (
    <section
      id="top"
      data-snap-section
      className="relative w-full h-screen min-h-[640px] overflow-hidden"
      style={{ backgroundColor: "var(--c-accent-deep)" }}
    >
      {/* Cross-fade carousel */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={idx}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1] }}
        >
          <Image
            src={hero.photos[idx]}
            alt=""
            fill
            priority={idx === 0}
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,22,38,0.55) 0%, rgba(10,22,38,0.35) 45%, rgba(10,22,38,0.65) 100%)",
        }}
      />

      {/* Carousel index top-right */}
      <div
        className="absolute right-6 top-7 lg:right-[80px] lg:top-10 z-20"
        style={{
          fontFamily: "var(--font-ibm-plex-mono)",
          fontWeight: 500,
          fontSize: "10px",
          letterSpacing: "1.5px",
          color: "var(--c-papel)",
        }}
      >
        {idxLabel}
      </div>

      {/* Centered LBB monogram + name (parallax cursor) */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 pointer-events-none"
        style={{ x: sx, y: sy }}
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.32, 0.72, 0, 1] }}
      >
        <h1
          style={{
            fontFamily: "var(--font-newsreader)",
            fontWeight: 400,
            fontSize: "clamp(96px, 14vw, 200px)",
            lineHeight: 1,
            letterSpacing: "clamp(-3px, -0.4vw, -6px)",
            color: "var(--c-papel)",
            margin: 0,
          }}
        >
          {hero.logoMain}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-newsreader)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(18px, 2vw, 28px)",
            letterSpacing: "0.2px",
            color: "var(--c-papel)",
            marginTop: "24px",
          }}
        >
          {hero.logoFull}
        </p>
        <p
          className="mt-8"
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "2.5px",
            color: "var(--c-papel)",
          }}
        >
          {hero.tagline}
        </p>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute left-0 right-0 bottom-12 flex flex-col items-center z-20 pointer-events-none"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.32, 0.72, 0, 1] }}
      >
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 500,
            fontSize: "10px",
            letterSpacing: "2px",
            color: "var(--c-papel)",
            marginBottom: "12px",
          }}
        >
          {hero.explore}
        </p>
        <motion.div
          className="w-px"
          style={{ backgroundColor: "var(--c-papel)" }}
          animate={reduce ? undefined : { height: ["8px", "30px", "8px"] }}
          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
