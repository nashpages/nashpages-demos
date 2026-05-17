"use client";

import Image from "next/image";
import { AMANDA_PHOTOS } from "./data";

/**
 * 3 fotos protagonistas que viajam pelo viewport via GSAP.
 * Wrapper position: fixed cobre o viewport inteiro mas pointerEvents:none.
 * Cada foto absolute dentro com size/position controlados via JS (GSAP).
 *
 * Coords iniciais conservadoras (Hero Ato 1). GSAP atualiza tudo conforme scroll.
 * Apenas DESKTOP — em mobile (Task 17) as fotos voltam pra dentro das sections.
 */
export function TravelingPhotos() {
  return (
    <div
      aria-hidden
      className="hidden lg:block"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 5,
        overflow: "hidden",
      }}
    >
      {/* Foto Palestra (Ato 1: Hero + Prática) */}
      <div
        data-photo-palestra
        style={{
          position: "absolute",
          left: 0,
          top: 140,
          width: 620,
          height: 720,
          overflow: "hidden",
          willChange: "transform, width, height, top, left, opacity",
        }}
      >
        <Image
          src={AMANDA_PHOTOS.palestra}
          alt="Dra. Amanda Fistarol em palestra"
          fill
          quality={100}
          sizes="620px"
          style={{
            objectFit: "cover",
            objectPosition: "center 20%",
            filter: "sepia(0.06) saturate(1.04) brightness(1.02) contrast(1.04)",
          }}
          priority
        />
      </div>

      {/* Foto Ultraformer (Ato 2: Tecnologia) — começa invisível */}
      <div
        data-photo-ultraformer
        style={{
          position: "absolute",
          left: 0,
          top: 160,
          width: 440,
          height: 580,
          overflow: "hidden",
          opacity: 0,
          willChange: "transform, width, height, top, left, opacity",
        }}
      >
        <Image
          src={AMANDA_PHOTOS.ultraformer}
          alt="Equipamento Ultraformer"
          fill
          quality={100}
          sizes="440px"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "sepia(0.05) saturate(1.04) brightness(1.02) contrast(1.05)",
          }}
        />
      </div>

      {/* Foto Retrato (Ato 3: Presença + Contato) — começa invisível */}
      <div
        data-photo-retrato
        style={{
          position: "absolute",
          left: 0,
          top: 160,
          width: 520,
          height: 720,
          overflow: "hidden",
          opacity: 0,
          willChange: "transform, width, height, top, left, opacity",
        }}
      >
        <Image
          src={AMANDA_PHOTOS.hero}
          alt="Dra. Amanda Fistarol — jaleco SBD"
          fill
          quality={100}
          sizes="520px"
          style={{
            objectFit: "cover",
            objectPosition: "center 25%",
            filter: "sepia(0.05) saturate(1.05) brightness(1.02) contrast(1.04)",
          }}
        />
      </div>
    </div>
  );
}
