// Registry de demos disponíveis.
// Ao adicionar um novo demo, criar `demos/[slug]/config.ts` exportando default DemoConfig,
// importar aqui e adicionar ao registry.

import type { DemoConfig } from "./types";

// Importações dinâmicas dos configs registrados
import drVascularConfig from "@/demos/dr-vascular-placeholder/config";

export const demoRegistry: Record<string, DemoConfig> = {
  [drVascularConfig.slug]: drVascularConfig,
};

export function getDemoConfig(slug: string): DemoConfig | null {
  return demoRegistry[slug] ?? null;
}

export function listDemoSlugs(): string[] {
  return Object.keys(demoRegistry);
}
