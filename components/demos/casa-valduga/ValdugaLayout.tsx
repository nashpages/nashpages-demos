import { VALDUGA_PALETTE } from "./data";
import { ValdugaSmoothScroll } from "./ValdugaSmoothScroll";
import { ValdugaNav } from "./ValdugaNav";
import { Hero } from "./sections/Hero";
import { Manifesto } from "./sections/Manifesto";
import { Espacos } from "./sections/Espacos";
import { Experiencias } from "./sections/Experiencias";
import { Gastronomia } from "./sections/Gastronomia";
import { Vinhos } from "./sections/Vinhos";
import { Atmosfera } from "./sections/Atmosfera";
import { Visite } from "./sections/Visite";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

const themeVars = {
  "--c-pergaminho": VALDUGA_PALETTE.pergaminho,
  "--c-pedra": VALDUGA_PALETTE.pedra,
  "--c-linha": VALDUGA_PALETTE.linha,
  "--c-neblina": VALDUGA_PALETTE.neblina,
  "--c-tinta": VALDUGA_PALETTE.tinta,
  "--c-vinho": VALDUGA_PALETTE.vinho,
  "--c-vinho-deep": VALDUGA_PALETTE.vinhoDeep,
  "--c-dourado": VALDUGA_PALETTE.dourado,
  "--c-dourado-deep": VALDUGA_PALETTE.douradoDeep,
  "--c-dourado-light": VALDUGA_PALETTE.douradoLight,
  "--c-footer-bg": VALDUGA_PALETTE.footerBg,
  "--c-muted": VALDUGA_PALETTE.muted,
} as React.CSSProperties;

export function ValdugaLayout() {
  return (
    <ValdugaSmoothScroll>
      <main
        style={{
          ...themeVars,
          backgroundColor: "var(--c-pergaminho)",
          color: "var(--c-tinta)",
          fontFamily: "var(--font-inter)",
        }}
        className="min-h-screen overflow-x-hidden"
      >
        <ValdugaNav />
        <Hero />
        <Manifesto />
        <Espacos />
        <Experiencias />
        <Gastronomia />
        <Vinhos />
        <Atmosfera />
        <Visite />
        <Contato />
        <Footer />
      </main>
    </ValdugaSmoothScroll>
  );
}
