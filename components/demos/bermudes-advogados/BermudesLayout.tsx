import { BERMUDES_PALETTE } from "./data";
import { BermudesSmoothScroll } from "./BermudesSmoothScroll";
import { BermudesNav } from "./BermudesNav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Memorial } from "./sections/Memorial";
import { Herzog } from "./sections/Herzog";
import { Areas } from "./sections/Areas";
import { Escritorios } from "./sections/Escritorios";
import { Equipe } from "./sections/Equipe";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

const themeVars = {
  "--c-papel": BERMUDES_PALETTE.papel,
  "--c-pedra": BERMUDES_PALETTE.pedra,
  "--c-tinta": BERMUDES_PALETTE.tinta,
  "--c-tinta-deep": BERMUDES_PALETTE.tintaDeep,
  "--c-neblina": BERMUDES_PALETTE.neblina,
  "--c-linha": BERMUDES_PALETTE.linha,
  "--c-accent": BERMUDES_PALETTE.accent,
  "--c-footer-linha": BERMUDES_PALETTE.footerLinha,
  "--c-footer-muted": BERMUDES_PALETTE.footerMuted,
} as React.CSSProperties;

export function BermudesLayout() {
  return (
    <BermudesSmoothScroll>
      <main
        style={{
          ...themeVars,
          backgroundColor: "var(--c-papel)",
          color: "var(--c-tinta)",
          fontFamily: "var(--font-inter)",
        }}
        className="min-h-screen overflow-x-hidden"
      >
        <BermudesNav />
        <Hero />
        <Sobre />
        <Memorial />
        <Herzog />
        <Areas />
        <Escritorios />
        <Equipe />
        <Contato />
        <Footer />
      </main>
    </BermudesSmoothScroll>
  );
}
