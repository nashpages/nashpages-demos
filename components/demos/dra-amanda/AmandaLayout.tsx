import { AMANDA_PALETTE } from "./data";
import { AmandaNav } from "./AmandaNav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Tratamentos } from "./sections/Tratamentos";
import { Tecnologia } from "./sections/Tecnologia";
import { Reconhecimento } from "./sections/Reconhecimento";
import { Atendimento } from "./sections/Atendimento";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

export function AmandaLayout() {
  const themeVars: React.CSSProperties = {
    ["--c-papel" as string]: AMANDA_PALETTE.papel,
    ["--c-neve" as string]: AMANDA_PALETTE.neve,
    ["--c-tinta" as string]: AMANDA_PALETTE.tinta,
    ["--c-neblina" as string]: AMANDA_PALETTE.neblina,
    ["--c-linha" as string]: AMANDA_PALETTE.linha,
    ["--c-carmim" as string]: AMANDA_PALETTE.carmim,
    ["--c-footer-bg" as string]: AMANDA_PALETTE.footerBg,
    ["--c-footer-muted" as string]: AMANDA_PALETTE.footerMuted,
    ["--c-footer-divider" as string]: AMANDA_PALETTE.footerDivider,
  };
  return (
    <div
      style={themeVars}
      className="text-[var(--c-tinta)] bg-[var(--c-papel)]"
    >
      <AmandaNav />
      <main>
        <Hero />
        <Sobre />
        <Tratamentos />
        <Tecnologia />
        <Reconhecimento />
        <Atendimento />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
