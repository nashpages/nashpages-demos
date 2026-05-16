import { AMANDA_PALETTE } from "./data";
import { AmandaLeftPanel } from "./AmandaLeftPanel";
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
      <div className="lg:flex">
        <AmandaLeftPanel />
        <main className="flex-1 min-w-0">
          <Hero />
          <Sobre />
          <Tratamentos />
          <Tecnologia />
          <Reconhecimento />
          <Atendimento />
          <Contato />
        </main>
      </div>
      <Footer />
    </div>
  );
}
