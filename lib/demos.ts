// Registry de demos disponíveis.
// Ao adicionar um novo demo, criar `demos/[slug]/config.ts` exportando default DemoConfig,
// importar aqui e adicionar ao registry.

import type { DemoConfig } from "./types";
import drRicardoConfig from "@/demos/dr-ricardo-rizzo-luiz/config";

export const demoRegistry: Record<string, DemoConfig> = {
  [drRicardoConfig.slug]: drRicardoConfig,
};

export function getDemoConfig(slug: string): DemoConfig | null {
  return demoRegistry[slug] ?? null;
}

export function listDemoSlugs(): string[] {
  return Object.keys(demoRegistry);
}
