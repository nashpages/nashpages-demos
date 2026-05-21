"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Foto full-bleed com parallax vertical suave no scroll.
 *
 * À prova de borda: o wrapper interno tem 124% de altura com -12% de topo
 * → 12% de FOLGA em cima e embaixo. O movimento (translateY) vai de
 * -amount% a +amount% da altura do CONTAINER (translateY% no Framer é
 * relativo ao próprio elemento, que é `inset-0` = o container). Como
 * amount (8%) < folga (12%), a borda da foto NUNCA aparece — e por ser
 * tudo proporcional, vale pra qualquer altura de viewport.
 *
 * prefers-reduced-motion → foto estática (sem parallax).
 * loading="eager" mantém o fix do bug Lenis × IntersectionObserver.
 */
export function ParallaxImage({
  src,
  alt,
  sizes,
  amount = 8,
  priority = false,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  sizes: string;
  amount?: number;
  priority?: boolean;
  objectPosition?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  if (reduce) {
    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading="eager"
          quality={95}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
    );
  }

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
        <div className="absolute left-0 right-0 -top-[12%] h-[124%]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            loading="eager"
            quality={95}
            sizes={sizes}
            className="object-cover"
            style={{ objectPosition }}
          />
        </div>
      </motion.div>
    </div>
  );
}
