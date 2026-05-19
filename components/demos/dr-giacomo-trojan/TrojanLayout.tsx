import { TROJAN_PALETTE } from "./data";
import { TrojanSmoothScroll } from "./TrojanSmoothScroll";
import { TrojanNav } from "./TrojanNav";
import { Hero } from "./sections/Hero";
import { Filosofia } from "./sections/Filosofia";
import { Casos } from "./sections/Casos";
import { Protocolo } from "./sections/Protocolo";
import { Imersao } from "./sections/Imersao";
import { Tecnologia } from "./sections/Tecnologia";
import { InstitutoIovi } from "./sections/InstitutoIovi";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

const themeVars = {
  "--c-papel": TROJAN_PALETTE.papel,
  "--c-pedra": TROJAN_PALETTE.pedra,
  "--c-linha": TROJAN_PALETTE.linha,
  "--c-neblina": TROJAN_PALETTE.neblina,
  "--c-tinta": TROJAN_PALETTE.tinta,
  "--c-azul": TROJAN_PALETTE.azul,
  "--c-azul-deep": TROJAN_PALETTE.azulDeep,
  "--c-cinabrio": TROJAN_PALETTE.cinabrio,
  "--c-cinabrio-deep": TROJAN_PALETTE.cinabrioDeep,
  "--c-footer-bg": TROJAN_PALETTE.footerBg,
} as React.CSSProperties;

export function TrojanLayout() {
  return (
    <TrojanSmoothScroll>
      <main
        style={{
          ...themeVars,
          backgroundColor: "var(--c-papel)",
          color: "var(--c-tinta)",
          fontFamily: "var(--font-inter)",
        }}
        className="min-h-screen overflow-x-hidden"
      >
        <TrojanNav />
        <Hero />
        <Filosofia />
        <Casos />
        <Protocolo />
        <Imersao />
        <Tecnologia />
        <InstitutoIovi />
        <Contato />
        <Footer />
      </main>
    </TrojanSmoothScroll>
  );
}
