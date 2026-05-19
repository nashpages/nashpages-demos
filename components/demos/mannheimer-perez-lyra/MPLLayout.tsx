import { MPL_PALETTE } from "./data";
import { MPLSmoothScroll } from "./MPLSmoothScroll";
import { MPLNav } from "./MPLNav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Sergio } from "./sections/Sergio";
import { Cortes } from "./sections/Cortes";
import { Areas } from "./sections/Areas";
import { Escritorios } from "./sections/Escritorios";
import { Equipe } from "./sections/Equipe";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

const themeVars = {
  "--c-papel": MPL_PALETTE.papel,
  "--c-pedra": MPL_PALETTE.pedra,
  "--c-linha": MPL_PALETTE.linha,
  "--c-neblina": MPL_PALETTE.neblina,
  "--c-accent": MPL_PALETTE.accent,
  "--c-accent-light": MPL_PALETTE.accentLight,
  "--c-tinta": MPL_PALETTE.tinta,
  "--c-tinta-deep": MPL_PALETTE.tintaDeep,
  "--c-footer-linha": MPL_PALETTE.footerLinha,
  "--c-footer-muted": MPL_PALETTE.footerMuted,
} as React.CSSProperties;

export function MPLLayout() {
  return (
    <MPLSmoothScroll>
      <main
        style={{
          ...themeVars,
          backgroundColor: "var(--c-papel)",
          color: "var(--c-tinta)",
          fontFamily: "var(--font-inter)",
        }}
        className="min-h-screen overflow-x-hidden"
      >
        <MPLNav />
        <Hero />
        <Sobre />
        <Sergio />
        <Cortes />
        <Areas />
        <Escritorios />
        <Equipe />
        <Contato />
        <Footer />
      </main>
    </MPLSmoothScroll>
  );
}
