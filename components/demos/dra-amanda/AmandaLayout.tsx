"use client";

import type { CSSProperties } from "react";
import { AmandaNav } from "./AmandaNav";
import { Hero } from "./sections/Hero";
import { Pratica } from "./sections/Pratica";
import { Tecnologia } from "./sections/Tecnologia";
import { Presenca } from "./sections/Presenca";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";
import { TravelingPhotos } from "./TravelingPhotos";
import { AMANDA_PALETTE } from "./data";
import { useAmandaCoreography } from "./coreography";

const themeVars: CSSProperties = {
  ["--c-papel" as string]: AMANDA_PALETTE.papel,
  ["--c-neve" as string]: AMANDA_PALETTE.neve,
  ["--c-tinta" as string]: AMANDA_PALETTE.tinta,
  ["--c-neblina" as string]: AMANDA_PALETTE.neblina,
  ["--c-linha" as string]: AMANDA_PALETTE.linha,
  ["--c-carmim" as string]: AMANDA_PALETTE.carmim,
  ["--c-footer-bg" as string]: AMANDA_PALETTE.footerBg,
  ["--c-footer-muted" as string]: AMANDA_PALETTE.footerMuted,
  ["--c-footer-divider" as string]: AMANDA_PALETTE.footerDivider,
  backgroundColor: AMANDA_PALETTE.papel,
  minHeight: "100vh",
};

export function AmandaLayout() {
  useAmandaCoreography();

  return (
    <main style={themeVars}>
      <AmandaNav />
      <Hero />
      <Pratica />
      <Tecnologia />
      <Presenca />
      <Contato />
      <Footer />
      <TravelingPhotos />
    </main>
  );
}
