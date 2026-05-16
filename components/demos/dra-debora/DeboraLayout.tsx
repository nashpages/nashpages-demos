import { DEBORA_PALETTE } from "./data";
import { DeboraNav } from "./DeboraNav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { UERJ } from "./sections/UERJ";
import { Tratamentos } from "./sections/Tratamentos";
import { Consultorio } from "./sections/Consultorio";
import { Atendimento } from "./sections/Atendimento";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

export function DeboraLayout() {
  const themeVars: React.CSSProperties = {
    ["--c-pedra" as string]: DEBORA_PALETTE.pedra,
    ["--c-concreto" as string]: DEBORA_PALETTE.concreto,
    ["--c-grafite" as string]: DEBORA_PALETTE.grafite,
    ["--c-nevoa" as string]: DEBORA_PALETTE.nevoa,
    ["--c-linha" as string]: DEBORA_PALETTE.linha,
    ["--c-musgo" as string]: DEBORA_PALETTE.musgo,
    ["--c-footer-bg" as string]: DEBORA_PALETTE.footerBg,
    ["--c-footer-muted" as string]: DEBORA_PALETTE.footerMuted,
    ["--c-footer-divider" as string]: DEBORA_PALETTE.footerDivider,
  };
  return (
    <div
      style={themeVars}
      className="text-[var(--c-grafite)] bg-[var(--c-pedra)]"
    >
      <DeboraNav />
      <main>
        <Hero />
        <Sobre />
        <UERJ />
        <Tratamentos />
        <Consultorio />
        <Atendimento />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
