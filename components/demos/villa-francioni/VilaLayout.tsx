import { FRANCIONI_PALETTE } from "./data";
import { VilaSmoothScroll } from "./VilaSmoothScroll";
import { VilaNav } from "./VilaNav";
import { Hero } from "./sections/Hero";
import { OSonho } from "./sections/OSonho";
import { Altitude } from "./sections/Altitude";
import { Arte } from "./sections/Arte";
import { OsVinhos } from "./sections/OsVinhos";
import { Visite } from "./sections/Visite";
import { Rodape } from "./sections/Rodape";

const themeVars = {
  "--c-nevoa": FRANCIONI_PALETTE.nevoa,
  "--c-pedra": FRANCIONI_PALETTE.pedra,
  "--c-grafite": FRANCIONI_PALETTE.grafite,
  "--c-neblina": FRANCIONI_PALETTE.neblina,
  "--c-pinheiro": FRANCIONI_PALETTE.pinheiro,
  "--c-salvia": FRANCIONI_PALETTE.salvia,
  "--c-terracota": FRANCIONI_PALETTE.terracota,
  "--c-vitral": FRANCIONI_PALETTE.vitral,
  "--c-noite": FRANCIONI_PALETTE.noite,
  "--c-giz": FRANCIONI_PALETTE.giz,
} as React.CSSProperties;

export function VilaLayout() {
  return (
    <VilaSmoothScroll>
      <main
        style={{
          ...themeVars,
          backgroundColor: "var(--c-nevoa)",
          color: "var(--c-grafite)",
          fontFamily: "var(--font-inter)",
        }}
        className="min-h-screen overflow-x-hidden"
      >
        <VilaNav />
        <Hero />
        <OSonho />
        <Altitude />
        <Arte />
        <OsVinhos />
        <Visite />
        <Rodape />
      </main>
    </VilaSmoothScroll>
  );
}
