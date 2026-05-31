"use client";

import { useState } from "react";
import { RYO } from "./data";
import { RyoSmoothScroll } from "./RyoSmoothScroll";
import { RyoIntro } from "./RyoIntro";
import { RyoHero } from "./RyoHero";
import { ACasa, Omakase, Chef, Galeria, Visite } from "./sections";

export function RyoLayout() {
  const [ready, setReady] = useState(false);
  return (
    <RyoSmoothScroll>
      {/* Shippori Mincho via Google Fonts — traz o glifo japonês 良 (next/font latin não traria). */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&display=swap"
      />
      <RyoIntro onDone={() => setReady(true)} />
      <main
        style={{ backgroundColor: RYO.washi, color: RYO.ink, fontFamily: "var(--font-jost), sans-serif" }}
        className="min-h-screen overflow-x-clip"
      >
        <RyoHero start={ready} />
        <ACasa />
        <Omakase />
        <Chef />
        <Galeria />
        <Visite />
      </main>
    </RyoSmoothScroll>
  );
}
