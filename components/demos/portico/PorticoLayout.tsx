import type { CSSProperties } from "react";
import { PORTICO_PALETTE } from "./data";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PorticoNav } from "./PorticoNav";
import { Hero, Alugamos, Trabalhos, ComoFunciona, Contato, Footer } from "./sections";

const themeVars = {
  "--c-grafite": PORTICO_PALETTE.grafite,
  "--c-ambar": PORTICO_PALETTE.ambar,
  "--c-concreto": PORTICO_PALETTE.concreto,
  "--c-aco": PORTICO_PALETTE.aco,
  "--c-branco": PORTICO_PALETTE.branco,
  "--c-linha": PORTICO_PALETTE.linha,
  "--c-nevoa": PORTICO_PALETTE.nevoa,
} as CSSProperties;

export function PorticoLayout() {
  return (
    <div style={themeVars}>
      <SmoothScroll />
      <main
        className="min-h-screen overflow-x-clip"
        style={{
          backgroundColor: "var(--c-concreto)",
          color: "var(--c-grafite)",
          fontFamily: "var(--font-inter)",
        }}
      >
        <PorticoNav />
        <Hero />
        <Alugamos />
        <Trabalhos />
        <ComoFunciona />
        <Contato />
        <Footer />
      </main>
    </div>
  );
}
