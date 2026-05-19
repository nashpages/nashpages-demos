"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ANTABI_DATA } from "./data";

const SLIDE_DURATION_MS = 6000;

export function HeroCarousel() {
  const { hero } = ANTABI_DATA;
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % hero.photos.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [hero.photos.length, reduce]);

  return (
    <div className="absolute inset-0 overflow-hidden">
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
            loading="eager"
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
