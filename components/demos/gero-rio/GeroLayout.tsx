import { GERO } from "./data";
import { GeroSmoothScroll } from "./GeroSmoothScroll";
import { GeroIntro } from "./GeroIntro";
import { Hero, Gastronomia, Degustacao, OEspaco, OBar, Localizacao, Reserva } from "./sections";

const themeVars = {
  "--c-linho": GERO.linho,
  "--c-espresso": GERO.espresso,
  "--c-salao": GERO.salao,
  "--c-bronze": GERO.bronze,
  "--c-vinho": GERO.vinho,
  "--c-camel": GERO.camel,
  "--c-creme": GERO.creme,
  "--c-para": GERO.para,
  "--c-linha": GERO.linha,
} as React.CSSProperties;

export function GeroLayout() {
  return (
    <GeroSmoothScroll>
      <div style={themeVars}>
        <GeroIntro />
        <main
          style={{ backgroundColor: "var(--c-espresso)", color: "var(--c-linho)", fontFamily: "var(--font-inter)" }}
          className="min-h-screen overflow-x-clip"
        >
          <Hero />
          <Gastronomia />
          <Degustacao />
          <OEspaco />
          <OBar />
          <Localizacao />
          <Reserva />
        </main>
      </div>
    </GeroSmoothScroll>
  );
}
