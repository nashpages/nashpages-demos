"use client";

import type { CSSProperties } from "react";
import { AmandaNav } from "./AmandaNav";
import { AMANDA_PALETTE } from "./data";

const themeVars: CSSProperties = {
  ["--c-papel" as string]: AMANDA_PALETTE.papel,
  ["--c-neve" as string]: AMANDA_PALETTE.neve,
  ["--c-tinta" as string]: AMANDA_PALETTE.tinta,
  ["--c-neblina" as string]: AMANDA_PALETTE.neblina,
  ["--c-linha" as string]: AMANDA_PALETTE.linha,
  ["--c-carmim" as string]: AMANDA_PALETTE.carmim,
  ["--c-footer-bg" as string]: AMANDA_PALETTE.footerBg,
  ["--c-footer-muted" as string]: AMANDA_PALETTE.footerMuted,
  ["--c-footer-divider" as string]: AMANDA_PALETTE.footerDivider,
  backgroundColor: AMANDA_PALETTE.papel,
  minHeight: "100vh",
};

export function AmandaLayout() {
  return (
    <main style={themeVars}>
      <AmandaNav />
      <p style={{ paddingTop: 200, paddingLeft: 80, color: AMANDA_PALETTE.tinta }}>
        Em reconstrução — sections a vir.
      </p>
    </main>
  );
}
