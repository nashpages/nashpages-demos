import { ANTABI_PALETTE } from "./data";
import { AntabiSmoothScroll } from "./AntabiSmoothScroll";
import { AntabiNav } from "./AntabiNav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Daniel } from "./sections/Daniel";
import { Atelier } from "./sections/Atelier";
import { Areas } from "./sections/Areas";
import { CentroRJ } from "./sections/CentroRJ";
import { Equipe } from "./sections/Equipe";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

const themeVars = {
  "--c-papel": ANTABI_PALETTE.papel,
  "--c-pedra": ANTABI_PALETTE.pedra,
  "--c-linha": ANTABI_PALETTE.linha,
  "--c-neblina": ANTABI_PALETTE.neblina,
  "--c-accent": ANTABI_PALETTE.accent,
  "--c-accent-light": ANTABI_PALETTE.accentLight,
  "--c-tinta": ANTABI_PALETTE.tinta,
  "--c-tinta-deep": ANTABI_PALETTE.tintaDeep,
  "--c-footer-linha": ANTABI_PALETTE.footerLinha,
  "--c-footer-muted": ANTABI_PALETTE.footerMuted,
} as React.CSSProperties;

export function AntabiLayout() {
  return (
    <AntabiSmoothScroll>
      <main
        style={{
          ...themeVars,
          backgroundColor: "var(--c-papel)",
          color: "var(--c-tinta)",
          fontFamily: "var(--font-inter)",
        }}
        className="min-h-screen overflow-x-hidden"
      >
        <AntabiNav />
        <Hero />
        <Sobre />
        <Daniel />
        <Atelier />
        <Areas />
        <CentroRJ />
        <Equipe />
        <Contato />
        <Footer />
      </main>
    </AntabiSmoothScroll>
  );
}
