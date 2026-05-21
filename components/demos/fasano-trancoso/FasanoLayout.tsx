import { FASANO_PALETTE } from "./data";
import { FasanoSmoothScroll } from "./FasanoSmoothScroll";
import { FasanoNav } from "./FasanoNav";
import { Hero } from "./sections/Hero";
import { Apresentacao } from "./sections/Apresentacao";
import { Manifesto } from "./sections/Manifesto";
import { Acomodacoes } from "./sections/Acomodacoes";
import { MarPiscinas } from "./sections/MarPiscinas";
import { Gastronomia } from "./sections/Gastronomia";
import { Experiencias } from "./sections/Experiencias";
import { Reserva } from "./sections/Reserva";
import { Reservar } from "./sections/Reservar";

const themeVars = {
  "--c-areia": FASANO_PALETTE.areia,
  "--c-bruma": FASANO_PALETTE.bruma,
  "--c-tinta": FASANO_PALETTE.tinta,
  "--c-fumaca": FASANO_PALETTE.fumaca,
  "--c-madeira": FASANO_PALETTE.madeira,
  "--c-mata": FASANO_PALETTE.mata,
  "--c-noite": FASANO_PALETTE.noite,
  "--c-madeira-light": FASANO_PALETTE.madeiraLight,
} as React.CSSProperties;

export function FasanoLayout() {
  return (
    <FasanoSmoothScroll>
      <main
        style={{
          ...themeVars,
          backgroundColor: "var(--c-areia)",
          color: "var(--c-tinta)",
          fontFamily: "var(--font-inter)",
        }}
        className="min-h-screen overflow-x-hidden"
      >
        <FasanoNav />
        <Hero />
        <Apresentacao />
        <Manifesto />
        <Acomodacoes />
        <MarPiscinas />
        <Gastronomia />
        <Experiencias />
        <Reserva />
        <Reservar />
      </main>
    </FasanoSmoothScroll>
  );
}
