import { DERIZE_PALETTE } from "./data";
import { DerizeNav } from "./DerizeNav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Frentes } from "./sections/Frentes";
import { Tecnologia } from "./sections/Tecnologia";
import { Atendimento } from "./sections/Atendimento";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

const themeVars = {
  "--c-papel": DERIZE_PALETTE.papel,
  "--c-pedra": DERIZE_PALETTE.pedra,
  "--c-tinta": DERIZE_PALETTE.tinta,
  "--c-neblina": DERIZE_PALETTE.neblina,
  "--c-linha": DERIZE_PALETTE.linha,
  "--c-accent": DERIZE_PALETTE.accent,
  "--c-accent-deep": DERIZE_PALETTE.accentDeep,
  "--c-footer-linha": DERIZE_PALETTE.footerLinha,
  "--c-footer-muted": DERIZE_PALETTE.footerMuted,
} as React.CSSProperties;

export function DerizeLayout() {
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
      <DerizeNav />
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
