import { CYRELA_PALETTE } from "./data";
import { CyrelaSmoothScroll } from "./CyrelaSmoothScroll";
import { Cursor } from "./Cursor";
import { Preloader } from "./Preloader";
import { CyrelaNav } from "./CyrelaNav";
import {
  Hero,
  Dna,
  Forma,
  Varandas,
  Premiado,
  Interiores,
  Lazer,
  Localizacao,
  Ficha,
  Contato,
} from "./sections";

const themeVars = {
  "--c-branco": CYRELA_PALETTE.branco,
  "--c-pedra": CYRELA_PALETTE.pedra,
  "--c-tinta": CYRELA_PALETTE.tinta,
  "--c-fumo": CYRELA_PALETTE.fumo,
  "--c-linha": CYRELA_PALETTE.linha,
  "--c-rosso": CYRELA_PALETTE.rosso,
} as React.CSSProperties;

export function CyrelaLayout() {
  return (
    <CyrelaSmoothScroll>
      <div style={themeVars}>
        <Preloader />
        <Cursor />
        <main
          style={{
            backgroundColor: "var(--c-branco)",
            color: "var(--c-tinta)",
            fontFamily: "var(--font-inter)",
          }}
          className="min-h-screen overflow-x-clip"
        >
          <CyrelaNav />
          <Hero />
          <Dna />
          <Forma />
          <Varandas />
          <Premiado />
          <Interiores />
          <Lazer />
          <Localizacao />
          <Ficha />
          <Contato />
        </main>
      </div>
    </CyrelaSmoothScroll>
  );
}
