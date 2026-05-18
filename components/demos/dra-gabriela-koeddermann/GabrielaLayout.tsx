import { GABRIELA_PALETTE } from "./data";
import { GabrielaNav } from "./GabrielaNav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Mohs } from "./sections/Mohs";
import { Formacao } from "./sections/Formacao";
import { Frentes } from "./sections/Frentes";
import { Atendimento } from "./sections/Atendimento";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

const themeVars = {
  "--c-papel": GABRIELA_PALETTE.papel,
  "--c-bege": GABRIELA_PALETTE.bege,
  "--c-tinta": GABRIELA_PALETTE.tinta,
  "--c-neblina": GABRIELA_PALETTE.neblina,
  "--c-linha": GABRIELA_PALETTE.linha,
  "--c-accent": GABRIELA_PALETTE.accent,
  "--c-accent-deep": GABRIELA_PALETTE.accentDeep,
  "--c-footer-linha": GABRIELA_PALETTE.footerLinha,
  "--c-footer-muted": GABRIELA_PALETTE.footerMuted,
} as React.CSSProperties;

export function GabrielaLayout() {
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
      <GabrielaNav />
      <Hero />
      <Sobre />
      <Mohs />
      <Formacao />
      <Frentes />
      <Atendimento />
      <Contato />
      <Footer />
    </main>
  );
}
