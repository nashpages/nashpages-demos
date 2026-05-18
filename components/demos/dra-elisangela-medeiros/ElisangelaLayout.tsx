import { ELISANGELA_PALETTE } from "./data";
import { ElisangelaNav } from "./ElisangelaNav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Frentes } from "./sections/Frentes";
import { Tecnologia } from "./sections/Tecnologia";
import { Atendimento } from "./sections/Atendimento";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

const themeVars = {
  "--c-papel": ELISANGELA_PALETTE.papel,
  "--c-pedra": ELISANGELA_PALETTE.pedra,
  "--c-tinta": ELISANGELA_PALETTE.tinta,
  "--c-neblina": ELISANGELA_PALETTE.neblina,
  "--c-linha": ELISANGELA_PALETTE.linha,
  "--c-accent": ELISANGELA_PALETTE.accent,
  "--c-accent-deep": ELISANGELA_PALETTE.accentDeep,
  "--c-footer-linha": ELISANGELA_PALETTE.footerLinha,
  "--c-footer-muted": ELISANGELA_PALETTE.footerMuted,
} as React.CSSProperties;

export function ElisangelaLayout() {
  return (
    <main
      style={{
        ...themeVars,
        backgroundColor: "var(--c-papel)",
        color: "var(--c-tinta)",
        fontFamily: "var(--font-inter)",
      }}
      className="min-h-screen overflow-x-hidden"
    >
      <ElisangelaNav />
      <Hero />
      <Sobre />
      <Frentes />
      <Tecnologia />
      <Atendimento />
      <Contato />
      <Footer />
    </main>
  );
}
