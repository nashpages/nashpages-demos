import { PVBT_PALETTE } from "./data";
import { PvbtSmoothScroll } from "./PvbtSmoothScroll";
import { PvbtNav } from "./PvbtNav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Socios } from "./sections/Socios";
import { Casos } from "./sections/Casos";
import { Areas } from "./sections/Areas";
import { Foros } from "./sections/Foros";
import { Equipe } from "./sections/Equipe";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

const themeVars = {
  "--c-navy-deep": PVBT_PALETTE.navyDeep,
  "--c-navy-alt": PVBT_PALETTE.navyAlt,
  "--c-navy-light": PVBT_PALETTE.navyLight,
  "--c-papel": PVBT_PALETTE.papel,
  "--c-pedra": PVBT_PALETTE.pedra,
  "--c-linha": PVBT_PALETTE.linha,
  "--c-neblina": PVBT_PALETTE.neblina,
  "--c-dourado": PVBT_PALETTE.dourado,
  "--c-dourado-deep": PVBT_PALETTE.douradoDeep,
  "--c-tinta": PVBT_PALETTE.tinta,
  "--c-tinta-deep": PVBT_PALETTE.tintaDeep,
} as React.CSSProperties;

export function PvbtLayout() {
  return (
    <PvbtSmoothScroll>
      <main
        style={{
          ...themeVars,
          backgroundColor: "var(--c-papel)",
          color: "var(--c-tinta)",
          fontFamily: "var(--font-inter)",
        }}
        className="min-h-screen overflow-x-hidden"
      >
        <PvbtNav />
        <Hero />
        <Sobre />
        <Socios />
        <Casos />
        <Areas />
        <Foros />
        <Equipe />
        <Contato />
        <Footer />
      </main>
    </PvbtSmoothScroll>
  );
}
