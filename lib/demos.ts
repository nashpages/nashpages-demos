// Registry de demos disponíveis.
// Ao adicionar um novo demo, criar `demos/[slug]/config.ts` exportando default DemoConfig,
// importar aqui e adicionar ao registry.

import type { DemoConfig } from "./types";

// Nenhuma demo publicada no momento — voltarei a publicar depois que a versão
// Premium do Dr Ricardo Rizzo Luiz for aprovada no Figma e re-implementada.
export const demoRegistry: Record<string, DemoConfig> = {};

export function getDemoConfig(slug: string): DemoConfig | null {
  return demoRegistry[slug] ?? null;
}

export function listDemoSlugs(): string[] {
  return Object.keys(demoRegistry);
}
