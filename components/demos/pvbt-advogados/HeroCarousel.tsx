"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PVBT_DATA } from "./data";

const SLIDE_DURATION_MS = 7000;
const CROSSFADE_DURATION = 1.8;
const EASE = [0.32, 0.72, 0, 1] as const;

/**
 * Two-layer crossfade carousel.
 *
 * Both layers stay mounted with absolute positioning. Each tick we swap
 * which layer holds the "incoming" image; opacity animates between 0/1 on
 * both layers simultaneously, producing a true harmonic crossfade (no flash,
 * no popLayout flicker).
 */
export function HeroCarousel() {
  const { hero } = PVBT_DATA;
  const reduce = useReducedMotion();
  const photos = hero.photos;
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);
  const [srcs, setSrcs] = useState<[string, string]>([photos[0], photos[1] ?? photos[0]]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setStep((s) => {
        const nextStep = s + 1;
        const nextPhotoIdx = (nextStep + 1) % photos.length;
        setActiveLayer((layer) => {
          const incomingLayer = layer === 0 ? 1 : 0;
          setSrcs((prev) => {
            const next: [string, string] = [...prev] as [string, string];
            next[incomingLayer] = photos[nextPhotoIdx];
            return next;
          });
          return incomingLayer;
        });
        return nextStep;
      });
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [photos, reduce]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[0, 1].map((layerIdx) => (
        <motion.div
          key={layerIdx}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: activeLayer === layerIdx ? 1 : 0,
            scale: activeLayer === layerIdx ? 1 : 1.04,
          }}
          transition={{
            opacity: { duration: CROSSFADE_DURATION, ease: EASE },
            scale: { duration: (SLIDE_DURATION_MS + CROSSFADE_DURATION * 1000) / 1000, ease: "linear" },
          }}
        >
          <Image
            src={srcs[layerIdx]}
            alt=""
            fill
            priority={layerIdx === 0}
            loading="eager"
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      ))}
    </div>
  );
}
