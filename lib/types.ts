// Type da configuração de cada demo.
// Cada cliente piloto tem um config.ts em `demos/[slug]/config.ts` que exporta um DemoConfig.

export type DemoPalette = {
  bg: string; // background da página (#hex)
  fg: string; // texto principal
  muted: string; // texto secundário (eyebrows, body)
  hair: string; // hairlines/dividers sutis
  accent: string; // cor de destaque (CTA, links, accents)
  accentSoft?: string; // accent em variante mais clara (opcional)
};

export type DemoNavLink = {
  label: string; // ex "SOBRE"
  href: string; // anchor ex "#sobre"
};

export type DemoCta = {
  label: string;
  href: string;
};

export type DemoCredential = {
  num: string; // "01"
  label: string; // "FORMAÇÃO"
  value: string; // "FURB BLUMENAU · 2012" (1 linha)
};

export type DemoTratamento = {
  num: string; // "01"
  name: string; // "VARIZES"
  body: string; // descrição técnica
  photoSrc: string; // /demos/[slug]/varizes.jpg
};

export type DemoSpec = {
  num: string;
  label: string;
  value: string;
};

export type DemoAtendimentoCol = {
  header: string; // "ONDE"
  lines: string[]; // ["Clínica em São José, sala 110.", ...]
};

export type DemoConfig = {
  slug: string; // url segment

  // Identidade
  name: string; // "Dr Ricardo Rizzo Luiz"
  logoText: string; // ex "DR RICARDO" (uppercase pra nav/footer)

  // Visual
  palette: DemoPalette;

  // Nav
  nav: {
    links: DemoNavLink[]; // 4 links principais
    ctaLabel: string; // "AGENDAR"
    ctaHref: string;
  };

  // §01 Hero
  hero: {
    eyebrow: string; // "CIRURGIÃO VASCULAR · FLORIANÓPOLIS"
    headlineLines: string[]; // ["Voltar a andar", "sem pensar nelas."]
    photoSrc: string;
    primaryCta: DemoCta;
    secondaryCta: DemoCta;
  };

  // §02 Sobre
  sobre: {
    headlineLines: string[]; // ["Um cirurgião", "com dupla", "especialização."]
    quote: {
      text: string; // "Diagnosticar antes de operar."
      attribution: string; // "— DR RICARDO RIZZO LUIZ"
    };
    bio: string[]; // parágrafos
    credentials: DemoCredential[]; // 5 items strip
  };

  // §Forbes (opcional — só se prospect tem prêmio de mídia relevante)
  forbes?: {
    eyebrow: string; // "FORBES LATINA · DESTAQUE 2025"
    headlineLines: string[];
    body: string;
    cta: DemoCta;
    coverSrc: string; // /demos/[slug]/forbes-capa.jpg
    midiaItems: string[]; // ["NDTV", "RECORD", "ND+", "REVISTA SAÚDE"]
  };

  // §03 Tratamentos
  tratamentos: {
    headlineLines: string[];
    items: DemoTratamento[]; // 3 cards
  };

  // §04 Tecnologia
  tecnologia: {
    headlineLines: string[];
    body: string;
    photoSrc: string; // /demos/[slug]/hero.jpg (consultório)
    specs: DemoSpec[]; // 3 specs
  };

  // §05 Atendimento
  atendimento: {
    headlineLines: string[];
    cols: [DemoAtendimentoCol, DemoAtendimentoCol]; // [ONDE, COMO]
  };

  // §06 Contato
  contato: {
    headlineLines: string[];
    body: string;
    primaryCta: DemoCta; // WhatsApp pill
    phoneText: string; // "(48) 99199-5583 — DIRETO COM O DOUTOR"
    socialLinks: string[]; // ["@DRRICARDORIZZOLUIZ", ...]
  };

  // Footer
  footer: {
    dados: string[];
    navHeader: string; // "NAVEGAR"
    navLinks: string[];
    redesHeader: string; // "REDES"
    redesLinks: string[];
    copyright: string;
    cnpj: string;
    credit: string; // "SITE POR NASHPAGES"
  };

  // Meta tags
  meta: {
    title: string;
    description: string;
  };
};
