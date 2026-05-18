import { ANDRADEGC_PALETTE } from "./data";
import { AndradeGCSmoothScroll } from "./AndradeGCSmoothScroll";
import { AndradeGCNav } from "./AndradeGCNav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Areas } from "./sections/Areas";
import { Historia } from "./sections/Historia";
import { Equipe } from "./sections/Equipe";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

const themeVars = {
  "--c-papel": ANDRADEGC_PALETTE.papel,
  "--c-pedra": ANDRADEGC_PALETTE.pedra,
  "--c-tinta": ANDRADEGC_PALETTE.tinta,
  "--c-neblina": ANDRADEGC_PALETTE.neblina,
  "--c-linha": ANDRADEGC_PALETTE.linha,
  "--c-accent": ANDRADEGC_PALETTE.accent,
  "--c-accent-deep": ANDRADEGC_PALETTE.accentDeep,
  "--c-footer-linha": ANDRADEGC_PALETTE.footerLinha,
  "--c-footer-muted": ANDRADEGC_PALETTE.footerMuted,
} as React.CSSProperties;

export function AndradeGCLayout() {
  return (
    <AndradeGCSmoothScroll>
      <main
        style={{
          ...themeVars,
          backgroundColor: "var(--c-papel)",
          color: "var(--c-tinta)",
          fontFamily: "var(--font-inter)",
        }}
        className="min-h-screen overflow-x-hidden"
      >
        <AndradeGCNav />
        <Hero />
        <Sobre />
        <Areas />
        <Historia />
        <Equipe />
        <Contato />
        <Footer />
      </main>
    </AndradeGCSmoothScroll>
  );
}
