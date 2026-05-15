import { BARBARA_PALETTE } from "./data";
import { BarbaraNav } from "./BarbaraNav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Reconhecimento } from "./sections/Reconhecimento";
import { Tratamentos } from "./sections/Tratamentos";
import { Procedimentos } from "./sections/Procedimentos";
import { Atendimento } from "./sections/Atendimento";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

export function BarbaraLayout() {
  const themeVars: React.CSSProperties = {
    ["--c-cream" as string]: BARBARA_PALETTE.cream,
    ["--c-rose" as string]: BARBARA_PALETTE.rose,
    ["--c-tinta" as string]: BARBARA_PALETTE.tinta,
    ["--c-nude" as string]: BARBARA_PALETTE.nude,
    ["--c-grafite" as string]: BARBARA_PALETTE.grafite,
    ["--c-linha" as string]: BARBARA_PALETTE.linha,
    ["--c-footer-bg" as string]: BARBARA_PALETTE.footerBg,
    ["--c-footer-muted" as string]: BARBARA_PALETTE.footerMuted,
    ["--c-footer-divider" as string]: BARBARA_PALETTE.footerDivider,
  };
  return (
    <div
      style={themeVars}
      className="font-[var(--font-inter)] text-[var(--c-tinta)] bg-[var(--c-cream)]"
    >
      <BarbaraNav />
      <main>
        <Hero />
        <Sobre />
        <Reconhecimento />
        <Tratamentos />
        <Procedimentos />
        <Atendimento />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
