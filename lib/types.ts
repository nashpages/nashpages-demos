// Type da configuração de cada demo.
// Cada cliente piloto tem um config.ts em `demos/[slug]/config.ts` que exporta um DemoConfig.

export type DemoPalette = {
  bg: string; // background da página (#hex)
  fg: string; // texto principal
  muted: string; // texto secundário
  hair: string; // hairlines/dividers
  accent: string; // cor de destaque (CTA, links, accents)
  accentSoft?: string; // accent em variante mais clara (pra texto pequeno em bg dark, se aplicável)
};

export type DemoSpecialty = {
  title: string;
  description?: string;
};

export type DemoDifferential = {
  label: string; // ex "EXPERIÊNCIA"
  title: string; // ex "20 anos de cirurgia vascular"
  body: string; // detalhe
};

export type DemoContactItem = {
  label: string; // "WhatsApp", "Instagram", "Endereço"
  value: string; // texto a exibir
  href?: string; // link clicável (opcional)
};

export type DemoConfig = {
  slug: string; // url segment: "dr-fulano"

  // Identidade
  name: string; // "Dr. Fulano de Tal"
  title: string; // "Cirurgião Vascular · CRM 123456"
  taglineEyebrow?: string; // ex "§ 01 / ATENDIMENTO"

  // Visual
  palette: DemoPalette;

  // Conteúdo
  hero: {
    headline: string; // "Vidas que circulam melhor."
    sublineMuted?: string; // segunda linha em tom mais suave
    description: string; // paragrafo curto
    photoSrc?: string; // /demos/[slug]/hero.jpg (relativo a /public)
  };

  about: {
    title: string;
    body: string[]; // parágrafos
    credentials?: string[]; // bullets ("CRM 123456", "Membro SBACV", etc)
  };

  specialties: {
    title: string; // "Áreas de atuação"
    items: DemoSpecialty[];
  };

  differentials?: {
    title: string;
    items: DemoDifferential[];
  };

  contact: {
    title: string;
    subline?: string;
    primaryCtaLabel: string; // ex "Agendar consulta"
    primaryCtaHref: string; // ex "https://wa.me/..."
    items: DemoContactItem[];
  };

  // Meta
  meta: {
    title: string; // <title>
    description: string;
  };
};
