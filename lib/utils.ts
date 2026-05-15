import type { DemoPalette } from "./types";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// Gera o style inline a aplicar no <body> pra injetar a paleta do demo via CSS vars.
export function paletteToCssVars(p: DemoPalette): React.CSSProperties {
  return {
    "--demo-bg": p.bg,
    "--demo-fg": p.fg,
    "--demo-muted": p.muted,
    "--demo-hair": p.hair,
    "--demo-accent": p.accent,
    "--demo-accent-soft": p.accentSoft ?? p.accent,
  } as React.CSSProperties;
}
