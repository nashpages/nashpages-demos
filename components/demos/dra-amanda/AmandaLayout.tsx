"use client";

import { AmandaNav } from "./AmandaNav";
import { AMANDA_PALETTE } from "./data";

export function AmandaLayout() {
  return (
    <main
      style={{
        backgroundColor: AMANDA_PALETTE.papel,
        minHeight: "100vh",
      }}
    >
      <AmandaNav />
      <p style={{ paddingTop: 200, paddingLeft: 80, color: AMANDA_PALETTE.tinta }}>
        Em reconstrução — sections a vir.
      </p>
    </main>
  );
}
