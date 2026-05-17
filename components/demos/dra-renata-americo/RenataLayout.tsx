import { RENATA_PALETTE } from "./data";
import { RenataNav } from "./RenataNav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Formacao } from "./sections/Formacao";
import { Praticas } from "./sections/Praticas";
import { Tecnologia } from "./sections/Tecnologia";
import { Atendimento } from "./sections/Atendimento";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

const themeVars = {
  "--c-papel": RENATA_PALETTE.papel,
  "--c-ares": RENATA_PALETTE.ares,
  "--c-tinta": RENATA_PALETTE.tinta,
  "--c-neblina": RENATA_PALETTE.neblina,
  "--c-linha": RENATA_PALETTE.linha,
  "--c-accent": RENATA_PALETTE.accent,
  "--c-accent-deep": RENATA_PALETTE.accentDeep,
  "--c-footer-linha": RENATA_PALETTE.footerLinha,
  "--c-footer-muted": RENATA_PALETTE.footerMuted,
} as React.CSSProperties;

export function RenataLayout() {
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
      <RenataNav />
      <Hero />
      <Sobre />
      <Formacao />
      <Praticas />
      <Tecnologia />
      <Atendimento />
      <Contato />
      <Footer />
    </main>
  );
}
