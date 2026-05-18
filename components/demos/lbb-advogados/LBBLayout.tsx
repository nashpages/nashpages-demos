import { LBB_PALETTE } from "./data";
import { LBBSmoothScroll } from "./LBBSmoothScroll";
import { LBBNav } from "./LBBNav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Areas } from "./sections/Areas";
import { Historia } from "./sections/Historia";
import { Equipe } from "./sections/Equipe";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

const themeVars = {
  "--c-papel": LBB_PALETTE.papel,
  "--c-pedra": LBB_PALETTE.pedra,
  "--c-tinta": LBB_PALETTE.tinta,
  "--c-neblina": LBB_PALETTE.neblina,
  "--c-linha": LBB_PALETTE.linha,
  "--c-accent": LBB_PALETTE.accent,
  "--c-accent-deep": LBB_PALETTE.accentDeep,
  "--c-footer-linha": LBB_PALETTE.footerLinha,
  "--c-footer-muted": LBB_PALETTE.footerMuted,
} as React.CSSProperties;

export function LBBLayout() {
  return (
    <LBBSmoothScroll>
      <main
        style={{
          ...themeVars,
          backgroundColor: "var(--c-papel)",
          color: "var(--c-tinta)",
          fontFamily: "var(--font-inter)",
        }}
        className="min-h-screen overflow-x-hidden"
      >
        <LBBNav />
        <Hero />
        <Sobre />
        <Areas />
        <Historia />
        <Equipe />
        <Contato />
        <Footer />
      </main>
    </LBBSmoothScroll>
  );
}
