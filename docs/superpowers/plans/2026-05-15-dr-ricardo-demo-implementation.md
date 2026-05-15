# Dr Ricardo Demo — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar a demo Premium do Dr Ricardo Rizzo Luiz em Next.js seguindo o spec aprovado em Figma (8 sections + footer, desktop + mobile, paleta clara + dourado fosco, animações cinematográficas com Framer Motion).

**Architecture:** Single-page long-scroll com sections empilhadas. Cada section é um React component em `components/demo/`. Paleta injetada via CSS vars no body. Animações via Framer Motion (parallax, reveal, hover). Lenis pra smooth scroll. Inter + JetBrains Mono via next/font. SSG via `app/[slug]/page.tsx`. URL final: `demos.nashpages.com.br/dr-ricardo-rizzo-luiz`.

**Tech Stack:** Next.js 16 (App Router) · React 19 · TypeScript 5 · Tailwind v4 · Framer Motion 12 · Lenis 1.3 · next/font (Inter + JetBrains Mono). Tudo já instalado em `C:\nashpages-demos`.

**Spec source:** `docs/superpowers/specs/2026-05-15-dr-ricardo-demo-design.md`
**Figma file (reference):** `2PikAyJ6676v6UUlFbAq9g`

---

## File Structure

Arquivos a criar/modificar:

```
app/
  layout.tsx                  ← MODIFY: trocar fontes Geist+Cormorant por Inter+JetBrains Mono
  globals.css                 ← MODIFY: adicionar tokens da paleta clara, reduced-motion já tem
  [slug]/page.tsx             ← OK (já funciona, só adicionar Dr Ricardo no registry)
  
lib/
  types.ts                    ← MODIFY: expandir DemoConfig pra suportar §Sobre/§Forbes/§Tratamentos/§Tecnologia/§Atendimento/§Footer
  demos.ts                    ← MODIFY: importar config Dr Ricardo + adicionar no registry
  utils.ts                    ← OK
  motion.ts                   ← CREATE: easing + duration tokens compartilhados pra Framer Motion
  
demos/dr-ricardo-rizzo-luiz/
  config.ts                   ← CREATE: DemoConfig completo do Dr Ricardo
  
public/demos/dr-ricardo-rizzo-luiz/
  portrait.jpg                ← JÁ EXISTE
  hero.jpg                    ← JÁ EXISTE (consultório)
  clinica.jpg                 ← JÁ EXISTE (não usar no final)
  forbes-capa.jpg             ← COPY: de C:\Users\enzos\forbes_capa.jpg
  varizes.jpg                 ← COPY: de C:\Users\enzos\pexels_varizes.jpg
  vasinhos.jpg                ← COPY: de C:\Users\enzos\pexels_vasinhos.jpg
  lipedema.jpg                ← COPY: de C:\Users\enzos\pexels_lip_v2.jpg
  
components/
  motion/
    ParallaxLayer.tsx         ← CREATE: wrapper que aplica parallax Y via useScroll
    RevealFadeUp.tsx          ← CREATE: substitui Reveal.tsx existente (mais robusto)
    LetterReveal.tsx          ← CREATE: headline letter-by-letter pro hero
    AnimatedUnderline.tsx     ← CREATE: underline gold que cresce em hover
    HoverLift.tsx             ← CREATE: lift sutil em hover (cards §03)
  SmoothScroll.tsx            ← CREATE: Lenis provider client component (respeita reduced-motion)
  demo/
    DemoLayout.tsx            ← REESCREVER: orquestra 8 sections + footer
    DemoNav.tsx               ← REESCREVER: sticky com blur backdrop
    DemoHero.tsx              ← REESCREVER: split foto-right + texto-left + parallax
    DemoSobre.tsx             ← CREATE: §02 editorial puro + strip 5 credenciais
    DemoForbes.tsx            ← CREATE: §Forbes split capa-left dark + texto-right
    DemoTratamentos.tsx       ← REESCREVER (era DemoEspecialidades): grid 3 cards
    DemoTecnologia.tsx        ← CREATE: §04 foto top + texto bottom + 3 specs
    DemoAtendimento.tsx       ← CREATE: §05 2-col paralelo ONDE/COMO
    DemoContato.tsx           ← REESCREVER: §06 monumental + CTA pill
    DemoFooter.tsx            ← REESCREVER: 3-col institucional
  
components/demo/ (a DELETAR — não usados na nova arquitetura):
  DemoAbout.tsx               ← DELETE (substituído por DemoSobre)
  DemoDiferenciais.tsx        ← DELETE (não usado)
  DemoEspecialidades.tsx      ← DELETE (renomeado pra DemoTratamentos)
```

---

## Phase 1: Foundations (cores, fontes, tokens, fotos)

### Task 1: Copiar 4 fotos novas pra public/demos/

**Files:**
- Create: `public/demos/dr-ricardo-rizzo-luiz/forbes-capa.jpg`
- Create: `public/demos/dr-ricardo-rizzo-luiz/varizes.jpg`
- Create: `public/demos/dr-ricardo-rizzo-luiz/vasinhos.jpg`
- Create: `public/demos/dr-ricardo-rizzo-luiz/lipedema.jpg`

- [ ] **Step 1: Copiar 4 arquivos**

Run:
```bash
cp "C:/Users/enzos/forbes_capa.jpg" "C:/nashpages-demos/public/demos/dr-ricardo-rizzo-luiz/forbes-capa.jpg"
cp "C:/Users/enzos/pexels_varizes.jpg" "C:/nashpages-demos/public/demos/dr-ricardo-rizzo-luiz/varizes.jpg"
cp "C:/Users/enzos/pexels_vasinhos.jpg" "C:/nashpages-demos/public/demos/dr-ricardo-rizzo-luiz/vasinhos.jpg"
cp "C:/Users/enzos/pexels_lip_v2.jpg" "C:/nashpages-demos/public/demos/dr-ricardo-rizzo-luiz/lipedema.jpg"
```

- [ ] **Step 2: Verificar 7 arquivos no diretório**

Run: `ls -la C:/nashpages-demos/public/demos/dr-ricardo-rizzo-luiz/`
Expected: 7 arquivos JPG (portrait.jpg, hero.jpg, clinica.jpg, forbes-capa.jpg, varizes.jpg, vasinhos.jpg, lipedema.jpg)

- [ ] **Step 3: Commit**

```bash
cd C:/nashpages-demos
git add public/demos/dr-ricardo-rizzo-luiz/forbes-capa.jpg public/demos/dr-ricardo-rizzo-luiz/varizes.jpg public/demos/dr-ricardo-rizzo-luiz/vasinhos.jpg public/demos/dr-ricardo-rizzo-luiz/lipedema.jpg
git commit -m "chore(demo): add 4 photos for Dr Ricardo (forbes-capa, varizes, vasinhos, lipedema)"
```

---

### Task 2: Trocar fontes em app/layout.tsx (Geist→Inter, manter JetBrains Mono)

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Substituir fontes**

Write `app/layout.tsx` completo:

```tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Nashpages — demos",
  description: "Demos de site para profissionais.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Atualizar globals.css pra remover --font-display (Cormorant não usado mais)**

Modify `app/globals.css` — substituir o bloco `@theme inline` por:

```css
@theme inline {
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);

  /* Tokens apontam pras CSS vars dinâmicas */
  --color-demo-bg: var(--demo-bg);
  --color-demo-fg: var(--demo-fg);
  --color-demo-muted: var(--demo-muted);
  --color-demo-hair: var(--demo-hair);
  --color-demo-accent: var(--demo-accent);
  --color-demo-accent-soft: var(--demo-accent-soft);
}
```

(remove a linha `--font-display: var(--font-display);`)

- [ ] **Step 3: Rodar dev e verificar console**

Run:
```bash
cd C:/nashpages-demos
npm run dev
```

Expected: server starts em `http://localhost:3002` sem erros de fontes. Abrir browser e verificar que Inter aparece (não Geist).

Stop server with Ctrl+C antes de continuar.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat(demo): switch fonts to Inter + JetBrains Mono"
```

---

### Task 3: Adicionar tokens de motion em lib/motion.ts

**Files:**
- Create: `lib/motion.ts`

- [ ] **Step 1: Criar arquivo**

Write `lib/motion.ts`:

```ts
// Tokens de motion compartilhados — easings e durações canônicos da demo.
// Aplicar em todos os Framer Motion variants pra manter ritmo coeso.

export const EASE = {
  outExpo: [0.32, 0.72, 0, 1] as const, // canonical — entradas e parallax
  outCubic: [0.16, 1, 0.3, 1] as const, // suaves
  inOut: [0.4, 0, 0.2, 1] as const, // hover
} as const;

export const DURATION = {
  hover: 0.28, // 280ms — hover transitions
  entrance: 0.48, // 480ms — fade-up entrance
  display: 0.8, // 800ms — headline entrance lento
  parallax: 1.2, // 1200ms — sensação cinematográfica
} as const;

export const STAGGER = {
  tight: 0.03, // letter-by-letter
  word: 0.08, // word entrance
  card: 0.1, // cards em grid
  section: 0.15, // sections sequenciais
} as const;

// Variants reutilizáveis pra Framer Motion
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.entrance, ease: EASE.outExpo },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.entrance, ease: EASE.outExpo },
  },
};

export const staggerContainer = (gap = STAGGER.word) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: gap, delayChildren: 0.05 },
  },
});
```

- [ ] **Step 2: Type-check**

Run: `cd C:/nashpages-demos && npx tsc --noEmit`
Expected: zero erros relacionados a motion.ts.

- [ ] **Step 3: Commit**

```bash
git add lib/motion.ts
git commit -m "feat(demo): add motion tokens (easings, durations, stagger, variants)"
```

---

### Task 4: Atualizar tokens da paleta clara em globals.css

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Substituir defaults do `:root` pelos valores da paleta clara da demo**

Modify `app/globals.css` — substituir o bloco `:root` por:

```css
/* Defaults base — cada demo customiza via inline style no <body> via paletteToCssVars */
/* Estes defaults são fallback se a paleta não for injetada. */
:root {
  --demo-bg: #FFFFFF;
  --demo-fg: #1A1A1A;
  --demo-muted: #4A4A4A;
  --demo-hair: #E8E8E8;
  --demo-accent: #B89554;
  --demo-accent-soft: #B89554;
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: zero erros.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "style(demo): update default palette tokens to clear/gold scheme"
```

---

## Phase 2: Type system — expandir DemoConfig

### Task 5: Expandir DemoConfig pra suportar §Sobre/§Forbes/§Tecnologia/§Atendimento

**Files:**
- Modify: `lib/types.ts`

- [ ] **Step 1: Sobrescrever lib/types.ts**

Write `lib/types.ts`:

```ts
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
    dados: string[]; // ["CRM/SC 18.482 · RQE 7.829", "RUA ELIZEU DI BERNARDI, 34", ...]
    navHeader: string; // "NAVEGAR"
    navLinks: string[]; // ["SOBRE", "TRATAMENTOS", ...]
    redesHeader: string; // "REDES"
    redesLinks: string[]; // ["@DRRICARDORIZZOLUIZ", ...]
    copyright: string; // "© 2026 · RICARDO P. RIZZO LUIZ LTDA"
    cnpj: string; // "CNPJ 11.729.686/0001-72"
    credit: string; // "SITE POR NASHPAGES"
  };

  // Meta tags
  meta: {
    title: string;
    description: string;
  };
};
```

- [ ] **Step 2: Type-check (vai quebrar com os components antigos que usam old shape — OK pra agora)**

Run: `npx tsc --noEmit`
Expected: erros em `components/demo/DemoAbout.tsx`, `DemoEspecialidades.tsx`, `DemoDiferenciais.tsx`, etc, porque mudamos a estrutura. Será resolvido nas tasks seguintes (delete + reescrever).

- [ ] **Step 3: Commit**

```bash
git add lib/types.ts
git commit -m "feat(types): expand DemoConfig with sobre, forbes, tratamentos, tecnologia, atendimento, contato, footer"
```

---

### Task 6: Criar config Dr Ricardo

**Files:**
- Create: `demos/dr-ricardo-rizzo-luiz/config.ts`

- [ ] **Step 1: Criar arquivo com config completo**

Write `demos/dr-ricardo-rizzo-luiz/config.ts`:

```ts
import type { DemoConfig } from "@/lib/types";

const config: DemoConfig = {
  slug: "dr-ricardo-rizzo-luiz",

  name: "Dr Ricardo Rizzo Luiz",
  logoText: "DR RICARDO",

  palette: {
    bg: "#FFFFFF",
    fg: "#1A1A1A",
    muted: "#4A4A4A",
    hair: "#E8E8E8",
    accent: "#B89554",
    accentSoft: "#B89554",
  },

  nav: {
    links: [
      { label: "SOBRE", href: "#sobre" },
      { label: "TRATAMENTOS", href: "#tratamentos" },
      { label: "CONSULTÓRIO", href: "#tecnologia" },
      { label: "CONTATO", href: "#contato" },
    ],
    ctaLabel: "AGENDAR",
    ctaHref: "https://wa.me/5548991995583",
  },

  hero: {
    eyebrow: "CIRURGIÃO VASCULAR · FLORIANÓPOLIS",
    headlineLines: ["Voltar a andar", "sem pensar nelas."],
    photoSrc: "/demos/dr-ricardo-rizzo-luiz/portrait.jpg",
    primaryCta: { label: "AGENDAR CONSULTA", href: "https://wa.me/5548991995583" },
    secondaryCta: { label: "CONHECER O DR", href: "#sobre" },
  },

  sobre: {
    headlineLines: ["Um cirurgião", "com dupla", "especialização."],
    quote: {
      text: "Diagnosticar antes\nde operar.",
      attribution: "— DR RICARDO RIZZO LUIZ",
    },
    bio: [
      "Cirurgião vascular formado pela FURB (Blumenau, 2012), com dupla especialização: Cirurgia Geral e Cirurgia Vascular. Há mais de 10 anos em Florianópolis, atende varizes, vasinhos e lipedema com ultrassom doppler em consultório — diagnóstico e procedimento no mesmo lugar, sem peregrinação por exames.",
      "Médico regulador do SAMU e instrutor de ACLS pela American Heart Association.",
    ],
    credentials: [
      { num: "01", label: "FORMAÇÃO", value: "FURB BLUMENAU · 2012" },
      { num: "02", label: "DUPLA ESP.", value: "CIRURGIA GERAL + VASCULAR" },
      { num: "03", label: "SAMU", value: "MÉDICO REGULADOR · FLORIANÓPOLIS" },
      { num: "04", label: "ACLS", value: "INSTRUTOR · AHA" },
      { num: "05", label: "MÍDIA", value: "NDTV · ND+ · REVISTA SAÚDE" },
    ],
  },

  forbes: {
    eyebrow: "FORBES LATINA · DESTAQUE 2025",
    headlineLines: ["Referência nacional", "em lipedema", "e varizes."],
    body: "Forbes Latina destaca o Dr Ricardo como uma das principais autoridades brasileiras no tratamento de lipedema e varizes. Criador do protocolo BeyondLegs e voz ativa no Consenso Brasileiro de Lipedema 2025.",
    cta: { label: "ACESSAR MATÉRIA NA FORBES", href: "https://forbeslatina.com/" },
    coverSrc: "/demos/dr-ricardo-rizzo-luiz/forbes-capa.jpg",
    midiaItems: ["NDTV", "RECORD", "ND+", "REVISTA SAÚDE"],
  },

  tratamentos: {
    headlineLines: ["Três especialidades,", "um consultório."],
    items: [
      {
        num: "01",
        name: "VARIZES",
        body: "Escleroterapia com espuma, laser endovenoso e cirurgia convencional. Diagnóstico por ultrassom doppler na primeira consulta.",
        photoSrc: "/demos/dr-ricardo-rizzo-luiz/varizes.jpg",
      },
      {
        num: "02",
        name: "VASINHOS",
        body: "Microescleroterapia e laser transdérmico. Sessões ambulatoriais, sem internação. Resultado progressivo, sem afastamento.",
        photoSrc: "/demos/dr-ricardo-rizzo-luiz/vasinhos.jpg",
      },
      {
        num: "03",
        name: "LIPEDEMA",
        body: "Avaliação clínica especializada e tecnologia Deep Slim. Acompanhamento contínuo com nutrição e estilo de vida.",
        photoSrc: "/demos/dr-ricardo-rizzo-luiz/lipedema.jpg",
      },
    ],
  },

  tecnologia: {
    headlineLines: ["Tecnologia", "no mesmo", "consultório."],
    body: "Diagnóstico, procedimento e acompanhamento no mesmo lugar. O ultrassom doppler venoso fica em consultório — sem peregrinação por exames externos. A tecnologia Deep Slim apoia o tratamento de lipedema. E a formação em ACLS dá segurança em cada decisão clínica.",
    photoSrc: "/demos/dr-ricardo-rizzo-luiz/hero.jpg",
    specs: [
      { num: "01", label: "DOPPLER", value: "ULTRASSOM VENOSO" },
      { num: "02", label: "ACLS", value: "INSTRUTOR AHA" },
      { num: "03", label: "DEEP SLIM", value: "TECNOLOGIA LIPEDEMA" },
    ],
  },

  atendimento: {
    headlineLines: ["Onde,", "e como."],
    cols: [
      {
        header: "ONDE",
        lines: [
          "Clínica em São José, sala 110.",
          "Rua Elizeu di Bernardi, 34 — Campinas.",
          "São José/SC · CEP 88101-050.",
          "Atendimento em São José e Florianópolis.",
        ],
      },
      {
        header: "COMO",
        lines: [
          "SC Saúde · UNIMED.",
          "Particulares, com condições especiais.",
          "Demais convênios sob consulta.",
          "Doppler venoso já na primeira consulta.",
        ],
      },
    ],
  },

  contato: {
    headlineLines: ["Vamos cuidar", "disso."],
    body: "Agende sua consulta direto pelo WhatsApp. Resposta no mesmo dia útil.",
    primaryCta: { label: "AGENDAR PELO WHATSAPP", href: "https://wa.me/5548991995583" },
    phoneText: "(48) 99199-5583 — DIRETO COM O DOUTOR",
    socialLinks: [
      "@DRRICARDORIZZOLUIZ",
      "@LIPEDEMAFLORIANOPOLIS",
      "DRRICARDORIZZOLUIZ.COM.BR",
    ],
  },

  footer: {
    dados: [
      "CRM/SC 18.482 · RQE 7.829",
      "RUA ELIZEU DI BERNARDI, 34",
      "SALA 110 · CAMPINAS · SÃO JOSÉ/SC",
    ],
    navHeader: "NAVEGAR",
    navLinks: ["SOBRE", "TRATAMENTOS", "CONSULTÓRIO", "CONTATO"],
    redesHeader: "REDES",
    redesLinks: [
      "@DRRICARDORIZZOLUIZ",
      "@LIPEDEMAFLORIANOPOLIS",
      "DRRICARDORIZZOLUIZ.COM.BR",
    ],
    copyright: "© 2026 · RICARDO P. RIZZO LUIZ LTDA",
    cnpj: "CNPJ 11.729.686/0001-72",
    credit: "SITE POR NASHPAGES",
  },

  meta: {
    title: "Dr Ricardo Rizzo Luiz · Cirurgião Vascular em Florianópolis",
    description:
      "Cirurgia vascular com dupla especialização, doppler em consultório e foco em varizes, vasinhos e lipedema. Florianópolis e São José/SC.",
  },
};

export default config;
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: erros nos components old (DemoAbout, DemoEspecialidades, DemoDiferenciais) — vão ser deletados/reescritos. Sem erros no config.ts.

- [ ] **Step 3: Commit**

```bash
git add demos/dr-ricardo-rizzo-luiz/config.ts
git commit -m "feat(demo): add Dr Ricardo config (8 sections + footer, all approved copy)"
```

---

## Phase 3: Animation primitives

### Task 7: Criar SmoothScroll wrapper (Lenis client-side)

**Files:**
- Create: `components/SmoothScroll.tsx`

- [ ] **Step 1: Criar componente**

Write `components/SmoothScroll.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    // Respeita prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exp out
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return null;
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: erros nos components old, mas SmoothScroll OK.

- [ ] **Step 3: Commit**

```bash
git add components/SmoothScroll.tsx
git commit -m "feat(motion): add Lenis SmoothScroll provider (respects reduced-motion)"
```

---

### Task 8: Criar ParallaxLayer component

**Files:**
- Create: `components/motion/ParallaxLayer.tsx`

- [ ] **Step 1: Criar diretório components/motion/**

Run: `mkdir -p C:/nashpages-demos/components/motion`

- [ ] **Step 2: Criar arquivo**

Write `components/motion/ParallaxLayer.tsx`:

```tsx
"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  /** Quanto a camada se move em Y conforme scrolla. Default 80px. */
  range?: number;
  /** Direção do movimento. "up" = sobe quando scrolla (foto sai), "down" = desce. */
  direction?: "up" | "down";
  className?: string;
};

export function ParallaxLayer({ children, range = 80, direction = "up", className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // anima durante todo o trajeto do element no viewport
  });
  const yRange = direction === "up" ? [range, -range] : [-range, range];
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : yRange);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/motion/ParallaxLayer.tsx
git commit -m "feat(motion): add ParallaxLayer (Framer Motion useScroll, respects reduced-motion)"
```

---

### Task 9: Criar RevealFadeUp component (substitui Reveal.tsx existente)

**Files:**
- Create: `components/motion/RevealFadeUp.tsx`

- [ ] **Step 1: Criar arquivo**

Write `components/motion/RevealFadeUp.tsx`:

```tsx
"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  children: ReactNode;
  /** Delay extra em segundos. */
  delay?: number;
  /** Duração custom (default 0.48s). */
  duration?: number;
  /** Quanto a camada sobe em Y (default 24px). */
  distance?: number;
  /** Tag HTML (default span). */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export function RevealFadeUp({
  children,
  delay = 0,
  duration = DURATION.entrance,
  distance = 24,
  as = "div",
  className,
}: Props) {
  const reduced = useReducedMotion();
  const Component = motion[as as "div"] as typeof motion.div;
  return (
    <Component
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: EASE.outExpo }}
      className={className}
    >
      {children}
    </Component>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/motion/RevealFadeUp.tsx
git commit -m "feat(motion): add RevealFadeUp (whileInView fade+translate, reduced-motion friendly)"
```

---

### Task 10: Criar LetterReveal pra headlines monumentais

**Files:**
- Create: `components/motion/LetterReveal.tsx`

- [ ] **Step 1: Criar arquivo**

Write `components/motion/LetterReveal.tsx`:

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, STAGGER } from "@/lib/motion";

type Props = {
  /** Linhas — cada linha é um array de strings (palavras ficam inteiras pra evitar quebra estranha). */
  lines: string[];
  /** Duração da animação por palavra. */
  duration?: number;
  /** Stagger entre palavras (default 0.06s — entre tight e word). */
  stagger?: number;
  /** Delay inicial total antes de começar. */
  delay?: number;
  className?: string;
};

export function LetterReveal({
  lines,
  duration = 0.6,
  stagger = 0.06,
  delay = 0,
  className,
}: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    // Sem animação: renderiza texto normal
    return (
      <h1 className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h1>
    );
  }

  return (
    <motion.h1
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%" },
              visible: {
                y: 0,
                transition: { duration, ease: EASE.outExpo },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/motion/LetterReveal.tsx
git commit -m "feat(motion): add LetterReveal (line-by-line reveal pra headlines monumentais)"
```

---

### Task 11: Criar AnimatedUnderline component

**Files:**
- Create: `components/motion/AnimatedUnderline.tsx`

- [ ] **Step 1: Criar arquivo**

Write `components/motion/AnimatedUnderline.tsx`:

```tsx
"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  children: ReactNode;
  /** Cor da underline. Default usa --demo-accent. */
  color?: string;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
};

export function AnimatedUnderline({ children, color, className, href, target, rel }: Props) {
  const lineColor = color ?? "var(--demo-accent)";
  const Tag = href ? motion.a : motion.div;

  return (
    <Tag
      href={href}
      target={target}
      rel={rel}
      initial="rest"
      whileHover="hover"
      className={`relative inline-flex items-center group ${className ?? ""}`}
    >
      <span className="relative inline-block">
        {children}
        <motion.span
          variants={{
            rest: { scaleX: 1 },
            hover: { scaleX: 1.05 },
          }}
          transition={{ duration: DURATION.hover, ease: EASE.outExpo }}
          className="absolute left-0 right-0 -bottom-1 h-px origin-left"
          style={{ background: lineColor }}
        />
      </span>
    </Tag>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/motion/AnimatedUnderline.tsx
git commit -m "feat(motion): add AnimatedUnderline pra CTAs editoriais"
```

---

### Task 12: Criar HoverLift component pra cards §03

**Files:**
- Create: `components/motion/HoverLift.tsx`

- [ ] **Step 1: Criar arquivo**

Write `components/motion/HoverLift.tsx`:

```tsx
"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Hover sutil que sobe o card 4px e aplica scale 1.02 na foto interna.
 * Pra usar nos cards de §03 Tratamentos.
 */
export function HoverLift({ children, className }: Props) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { y: 0 },
        hover: { y: -4 },
      }}
      transition={{ duration: DURATION.hover, ease: EASE.outExpo }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/motion/HoverLift.tsx
git commit -m "feat(motion): add HoverLift pra cards §03"
```

---

## Phase 4: Section components

### Task 13: Reescrever DemoNav (sticky + blur backdrop on scroll)

**Files:**
- Modify: `components/demo/DemoNav.tsx`
- Test (manual visual): `npm run dev` + screenshot

- [ ] **Step 1: Sobrescrever DemoNav.tsx**

Write `components/demo/DemoNav.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  nav: DemoConfig["nav"];
  logoText: string;
};

export function DemoNav({ nav, logoText }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 80);
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.entrance, ease: EASE.outExpo, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md border-b" : "bg-transparent"
      }`}
      style={{
        borderColor: scrolled ? "var(--demo-hair)" : "transparent",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 md:px-[120px] md:py-8">
        {/* Logo */}
        <a
          href="#top"
          className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em]"
          style={{ color: "var(--demo-fg)" }}
        >
          {logoText}
        </a>

        {/* Links + CTA */}
        <div className="flex items-center gap-6 md:gap-9">
          <div className="hidden md:flex items-center gap-9">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium tracking-[0.16em] transition-colors"
                style={{ color: "var(--demo-fg)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={nav.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-[11px] font-medium tracking-[0.16em] transition-transform hover:scale-[1.05]"
            style={{
              background: "var(--demo-accent)",
              color: "var(--demo-bg)",
            }}
          >
            {nav.ctaLabel}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
```

- [ ] **Step 2: Commit (sem rodar dev — depende de outras coisas)**

```bash
git add components/demo/DemoNav.tsx
git commit -m "feat(demo): rewrite DemoNav with sticky blur backdrop on scroll"
```

---

### Task 14: Reescrever DemoHero (§01 split + parallax + letter reveal)

**Files:**
- Modify: `components/demo/DemoHero.tsx`

- [ ] **Step 1: Sobrescrever**

Write `components/demo/DemoHero.tsx`:

```tsx
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { AnimatedUnderline } from "@/components/motion/AnimatedUnderline";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  hero: DemoConfig["hero"];
};

export function DemoHero({ hero }: Props) {
  return (
    <section
      id="top"
      className="relative w-full min-h-screen md:min-h-[1080px] flex flex-col md:flex-row"
      style={{ background: "var(--demo-bg)" }}
    >
      {/* LEFT zone (65%) — texto */}
      <div className="relative z-10 flex flex-1 md:flex-[0_0_65%] flex-col justify-end md:justify-center px-6 pt-24 pb-10 md:px-[120px] md:py-0">
        <RevealFadeUp delay={0.4} className="mb-6">
          <p
            className="text-[11px] font-medium tracking-[0.16em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            /  {hero.eyebrow}
          </p>
        </RevealFadeUp>

        <LetterReveal
          lines={hero.headlineLines}
          delay={0.6}
          className="text-[40px] md:text-[108px] leading-[0.95] tracking-[-0.025em] font-normal"
          // style applied via tailwind, color via inheritance from body
        />

        <div className="mt-8 md:mt-14 flex flex-col gap-4 md:flex-row md:gap-14">
          <RevealFadeUp delay={1.2}>
            <AnimatedUnderline
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium tracking-[0.14em]"
            >
              {hero.primaryCta.label}  →
            </AnimatedUnderline>
          </RevealFadeUp>
          <RevealFadeUp delay={1.35}>
            <AnimatedUnderline
              href={hero.secondaryCta.href}
              color="rgba(26, 26, 26, 0.3)"
              className="text-[13px] font-medium tracking-[0.14em]"
            >
              {hero.secondaryCta.label}  →
            </AnimatedUnderline>
          </RevealFadeUp>
        </div>

        {/* Meta bar bottom — só desktop */}
        <div className="hidden md:flex absolute bottom-12 left-[120px] right-[120px] items-center justify-between">
          <p
            className="text-[11px] tracking-[0.16em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            § 01  /  HERO
          </p>
          <p
            className="text-[11px] tracking-[0.16em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            SCROLL  ↓
          </p>
        </div>
      </div>

      {/* RIGHT zone (35%) — foto com parallax */}
      <div className="relative md:flex-[0_0_35%] h-[320px] md:h-auto order-first md:order-last overflow-hidden">
        <ParallaxLayer range={60} direction="up" className="absolute inset-0">
          <div className="relative h-full w-full md:h-[120%] md:-mt-[10%]">
            <Image
              src={hero.photoSrc}
              alt={`Dr Ricardo Rizzo Luiz`}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 35vw, 100vw"
            />
          </div>
        </ParallaxLayer>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/demo/DemoHero.tsx
git commit -m "feat(demo): rewrite DemoHero with split + parallax + letter reveal"
```

---

### Task 15: Criar DemoSobre (§02 editorial puro + 5 credenciais)

**Files:**
- Create: `components/demo/DemoSobre.tsx`

- [ ] **Step 1: Criar arquivo**

Write `components/demo/DemoSobre.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { EASE, DURATION, STAGGER } from "@/lib/motion";

type Props = {
  sobre: DemoConfig["sobre"];
};

export function DemoSobre({ sobre }: Props) {
  return (
    <section
      id="sobre"
      className="relative w-full py-20 md:py-[120px]"
      style={{ background: "var(--demo-bg)" }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[120px]">
        {/* Eyebrow */}
        <RevealFadeUp>
          <p
            className="text-[11px] tracking-[0.16em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            § 02  /  SOBRE O DR RICARDO
          </p>
        </RevealFadeUp>

        {/* Headline */}
        <div className="mt-12 md:mt-14">
          <LetterReveal
            lines={sobre.headlineLines}
            className="text-[32px] md:text-[88px] leading-[1.0] tracking-[-0.025em]"
          />
        </div>

        {/* Divider gold (draw-in) */}
        <RevealFadeUp delay={0.3} className="mt-10 md:mt-14">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: DURATION.entrance, ease: EASE.outExpo, delay: 0.2 }}
            style={{
              background: "var(--demo-accent)",
              transformOrigin: "left",
              height: 1,
              width: 56,
            }}
            className="md:w-[80px]"
          />
        </RevealFadeUp>

        {/* 2-col: quote left + bio right */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <RevealFadeUp>
              <p
                className="text-[24px] md:text-[36px] leading-[1.1] tracking-[-0.01em] italic"
                style={{ color: "var(--demo-fg)" }}
              >
                {sobre.quote.text.split("\n").map((line, i) => (
                  <span key={i} className="block">"{line}"</span>
                ))}
              </p>
            </RevealFadeUp>
            <RevealFadeUp delay={0.15} className="mt-5">
              <p
                className="text-[11px] tracking-[0.14em]"
                style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
              >
                {sobre.quote.attribution}
              </p>
            </RevealFadeUp>
          </div>

          <div>
            {sobre.bio.map((para, i) => (
              <RevealFadeUp key={i} delay={0.1 * i} className={i > 0 ? "mt-6" : ""}>
                <p
                  className="text-[15px] md:text-[17px] leading-[1.6]"
                  style={{ color: "var(--demo-muted)" }}
                >
                  {para}
                </p>
              </RevealFadeUp>
            ))}
          </div>
        </div>

        {/* Strip 5 credenciais — horizontal desktop, vertical mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: STAGGER.card, delayChildren: 0.1 },
            },
          }}
          className="mt-16 md:mt-24 grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-6"
        >
          {sobre.credentials.map((cred) => (
            <motion.div
              key={cred.num}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: DURATION.entrance, ease: EASE.outExpo },
                },
              }}
              className="border-t pt-4"
              style={{ borderColor: "var(--demo-accent)" }}
            >
              <p
                className="text-[24px] md:text-[28px] font-medium"
                style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
              >
                {cred.num}
              </p>
              <p
                className="mt-4 text-[10px] font-medium tracking-[0.14em]"
                style={{ color: "var(--demo-fg)", fontFamily: "var(--font-mono)" }}
              >
                {cred.label}
              </p>
              <p
                className="mt-1 text-[10px] tracking-[0.12em]"
                style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
              >
                {cred.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/demo/DemoSobre.tsx
git commit -m "feat(demo): add DemoSobre (§02 editorial puro + 5 credenciais stagger)"
```

---

### Task 16: Criar DemoForbes (§Forbes split capa-left + texto-right)

**Files:**
- Create: `components/demo/DemoForbes.tsx`

- [ ] **Step 1: Criar arquivo**

Write `components/demo/DemoForbes.tsx`:

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { AnimatedUnderline } from "@/components/motion/AnimatedUnderline";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  forbes: NonNullable<DemoConfig["forbes"]>;
};

export function DemoForbes({ forbes }: Props) {
  return (
    <section
      id="forbes"
      className="relative w-full min-h-[800px] md:min-h-[1080px] flex flex-col md:flex-row"
      style={{ background: "var(--demo-bg)" }}
    >
      {/* LEFT 50% — capa Forbes (dark) com parallax */}
      <div className="relative md:flex-[0_0_50%] h-[470px] md:h-auto order-first overflow-hidden">
        <ParallaxLayer range={40} direction="up" className="absolute inset-0">
          <div className="relative h-full w-full md:h-[110%] md:-mt-[5%]">
            <Image
              src={forbes.coverSrc}
              alt="Destaque Forbes Latina 2025"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </ParallaxLayer>
      </div>

      {/* RIGHT 50% — texto editorial */}
      <div className="relative z-10 flex flex-1 md:flex-[0_0_50%] flex-col justify-center px-6 py-14 md:px-20 md:py-[160px]">
        {/* Eyebrow gold */}
        <RevealFadeUp>
          <p
            className="text-[10px] md:text-[11px] tracking-[0.16em]"
            style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
          >
            /  {forbes.eyebrow}
          </p>
        </RevealFadeUp>

        {/* Headline */}
        <div className="mt-6 md:mt-10">
          <LetterReveal
            lines={forbes.headlineLines}
            className="text-[28px] md:text-[56px] leading-[1.0] tracking-[-0.02em]"
          />
        </div>

        {/* Divider gold */}
        <RevealFadeUp delay={0.2} className="mt-8 md:mt-12">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: DURATION.entrance, ease: EASE.outExpo, delay: 0.2 }}
            style={{
              background: "var(--demo-accent)",
              transformOrigin: "left",
              height: 1,
              width: 40,
            }}
            className="md:w-[56px]"
          />
        </RevealFadeUp>

        {/* Body */}
        <RevealFadeUp delay={0.3} className="mt-6 md:mt-10">
          <p
            className="text-[14px] md:text-[17px] leading-[1.6]"
            style={{ color: "var(--demo-muted)" }}
          >
            {forbes.body}
          </p>
        </RevealFadeUp>

        {/* CTA underline */}
        <RevealFadeUp delay={0.45} className="mt-8 md:mt-14">
          <AnimatedUnderline
            href={forbes.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] md:text-[13px] font-medium tracking-[0.14em]"
          >
            {forbes.cta.label}  →
          </AnimatedUnderline>
        </RevealFadeUp>

        {/* Strip mídia */}
        <RevealFadeUp delay={0.6} className="mt-10 md:mt-20">
          <div className="flex flex-wrap items-center gap-5 md:gap-8">
            {forbes.midiaItems.map((item) => (
              <span
                key={item}
                className="text-[9px] md:text-[10px] tracking-[0.14em]"
                style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </RevealFadeUp>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/demo/DemoForbes.tsx
git commit -m "feat(demo): add DemoForbes (§Forbes split capa dark + texto + parallax)"
```

---

### Task 17: Reescrever DemoTratamentos (§03 grid 3 cards com hover lift)

**Files:**
- Modify: `components/demo/DemoEspecialidades.tsx` → DELETE
- Create: `components/demo/DemoTratamentos.tsx`

- [ ] **Step 1: Deletar component antigo**

Run: `rm "C:/nashpages-demos/components/demo/DemoEspecialidades.tsx"`

- [ ] **Step 2: Criar DemoTratamentos**

Write `components/demo/DemoTratamentos.tsx`:

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { HoverLift } from "@/components/motion/HoverLift";
import { AnimatedUnderline } from "@/components/motion/AnimatedUnderline";
import { EASE, DURATION, STAGGER } from "@/lib/motion";

type Props = {
  tratamentos: DemoConfig["tratamentos"];
};

export function DemoTratamentos({ tratamentos }: Props) {
  return (
    <section
      id="tratamentos"
      className="relative w-full py-20 md:py-[120px]"
      style={{ background: "var(--demo-bg)" }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[120px]">
        {/* Eyebrow */}
        <RevealFadeUp>
          <p
            className="text-[11px] tracking-[0.16em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            § 03  /  TRATAMENTOS
          </p>
        </RevealFadeUp>

        {/* Headline */}
        <div className="mt-12 md:mt-12">
          <LetterReveal
            lines={tratamentos.headlineLines}
            className="text-[38px] md:text-[64px] leading-[1.04] tracking-[-0.025em]"
          />
        </div>

        {/* Grid 3 cards (stagger entrance) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: STAGGER.card, delayChildren: 0.2 } },
          }}
          className="mt-16 md:mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6"
        >
          {tratamentos.items.map((item) => (
            <motion.div
              key={item.num}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: DURATION.entrance, ease: EASE.outExpo },
                },
              }}
            >
              <HoverLift className="cursor-default">
                {/* Foto top */}
                <div className="relative aspect-[384/420] overflow-hidden">
                  <Image
                    src={item.photoSrc}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>

                {/* Body */}
                <div className="mt-7">
                  <p
                    className="text-[28px] md:text-[32px] font-medium"
                    style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
                  >
                    {item.num}
                  </p>
                  <p
                    className="mt-3 md:mt-4 text-[18px] md:text-[22px] font-medium tracking-[0.08em]"
                    style={{ color: "var(--demo-fg)", fontFamily: "var(--font-mono)" }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="mt-4 md:mt-5 text-[14px] md:text-[15px] leading-[1.6]"
                    style={{ color: "var(--demo-muted)" }}
                  >
                    {item.body}
                  </p>
                  <div className="mt-5 md:mt-6">
                    <AnimatedUnderline className="text-[10px] md:text-[11px] font-medium tracking-[0.16em]">
                      <span style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}>
                        VER DETALHES  →
                      </span>
                    </AnimatedUnderline>
                  </div>
                </div>
              </HoverLift>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/demo/DemoTratamentos.tsx
git rm components/demo/DemoEspecialidades.tsx
git commit -m "feat(demo): replace DemoEspecialidades with DemoTratamentos (3 cards + hover lift + stagger)"
```

---

### Task 18: Criar DemoTecnologia (§04 foto top + texto bottom + 3 specs)

**Files:**
- Create: `components/demo/DemoTecnologia.tsx`

- [ ] **Step 1: Criar arquivo**

Write `components/demo/DemoTecnologia.tsx`:

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { EASE, DURATION, STAGGER } from "@/lib/motion";

type Props = {
  tecnologia: DemoConfig["tecnologia"];
};

export function DemoTecnologia({ tecnologia }: Props) {
  return (
    <section
      id="tecnologia"
      className="relative w-full"
      style={{ background: "var(--demo-bg)" }}
    >
      {/* Top 50% — foto consultório com parallax */}
      <div className="relative h-[320px] md:h-[540px] overflow-hidden">
        <ParallaxLayer range={80} direction="up" className="absolute inset-0">
          <div className="relative h-full w-full md:h-[120%] md:-mt-[10%]">
            <Image
              src={tecnologia.photoSrc}
              alt="Consultório do Dr Ricardo Rizzo Luiz"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </ParallaxLayer>
      </div>

      {/* Bottom 50% — texto */}
      <div className="py-20 md:py-[100px]">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[120px]">
          <RevealFadeUp>
            <p
              className="text-[10px] md:text-[11px] tracking-[0.16em]"
              style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
            >
              § 04  /  TECNOLOGIA EM CONSULTÓRIO
            </p>
          </RevealFadeUp>

          {/* 2-col: headline left + body+specs right */}
          <div className="mt-8 md:mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <LetterReveal
                lines={tecnologia.headlineLines}
                className="text-[38px] md:text-[56px] leading-[1.04] tracking-[-0.025em]"
              />
            </div>

            <div>
              <RevealFadeUp delay={0.2}>
                <p
                  className="text-[14px] md:text-[17px] leading-[1.6]"
                  style={{ color: "var(--demo-muted)" }}
                >
                  {tecnologia.body}
                </p>
              </RevealFadeUp>

              {/* 3 specs */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: STAGGER.card, delayChildren: 0.4 },
                  },
                }}
                className="mt-8 md:mt-12 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-8"
              >
                {tecnologia.specs.map((spec) => (
                  <motion.div
                    key={spec.num}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: DURATION.entrance, ease: EASE.outExpo },
                      },
                    }}
                    className="border-t pt-3 md:pt-3.5 flex md:flex-col gap-3 md:gap-1.5"
                    style={{ borderColor: "var(--demo-accent)" }}
                  >
                    <p
                      className="text-[11px] font-medium"
                      style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
                    >
                      {spec.num}
                    </p>
                    <div className="flex flex-col gap-1">
                      <p
                        className="text-[10px] md:text-[11px] font-medium tracking-[0.14em]"
                        style={{ color: "var(--demo-fg)", fontFamily: "var(--font-mono)" }}
                      >
                        {spec.label}
                      </p>
                      <p
                        className="text-[10px] tracking-[0.12em]"
                        style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
                      >
                        {spec.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/demo/DemoTecnologia.tsx
git commit -m "feat(demo): add DemoTecnologia (§04 foto top parallax + 3 specs stagger)"
```

---

### Task 19: Criar DemoAtendimento (§05 2-col paralelo ONDE/COMO)

**Files:**
- Create: `components/demo/DemoAtendimento.tsx`

- [ ] **Step 1: Criar arquivo**

Write `components/demo/DemoAtendimento.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { EASE, DURATION, STAGGER } from "@/lib/motion";

type Props = {
  atendimento: DemoConfig["atendimento"];
};

export function DemoAtendimento({ atendimento }: Props) {
  return (
    <section
      id="atendimento"
      className="relative w-full py-20 md:py-[100px]"
      style={{ background: "var(--demo-bg)" }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[120px]">
        <RevealFadeUp>
          <p
            className="text-[11px] tracking-[0.16em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            § 05  /  ATENDIMENTO
          </p>
        </RevealFadeUp>

        <div className="mt-10 md:mt-12">
          <LetterReveal
            lines={atendimento.headlineLines}
            className="text-[48px] md:text-[88px] leading-[1.0] tracking-[-0.025em]"
          />
        </div>

        {/* 2-col paralelo ONDE/COMO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: STAGGER.section } },
          }}
          className="mt-16 md:mt-24 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20"
        >
          {atendimento.cols.map((col) => (
            <motion.div
              key={col.header}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: DURATION.entrance, ease: EASE.outExpo },
                },
              }}
              className="border-t pt-4"
              style={{ borderColor: "var(--demo-accent)" }}
            >
              <p
                className="text-[11px] font-medium tracking-[0.18em]"
                style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
              >
                {col.header}
              </p>
              <div className="mt-8">
                {col.lines.map((line, i) => (
                  <p
                    key={i}
                    className={`text-[16px] md:text-[22px] leading-[1.4] tracking-[-0.01em] ${i > 0 ? "mt-3" : ""}`}
                    style={{ color: "var(--demo-fg)" }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/demo/DemoAtendimento.tsx
git commit -m "feat(demo): add DemoAtendimento (§05 2-col paralelo ONDE/COMO)"
```

---

### Task 20: Reescrever DemoContato (§06 monumental + CTA pill)

**Files:**
- Modify: `components/demo/DemoContato.tsx`

- [ ] **Step 1: Sobrescrever**

Write `components/demo/DemoContato.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import type { DemoConfig } from "@/lib/types";
import { RevealFadeUp } from "@/components/motion/RevealFadeUp";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { EASE, DURATION } from "@/lib/motion";

type Props = {
  contato: DemoConfig["contato"];
};

export function DemoContato({ contato }: Props) {
  return (
    <section
      id="contato"
      className="relative w-full py-24 md:py-[160px]"
      style={{ background: "var(--demo-bg)" }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[120px]">
        <RevealFadeUp>
          <p
            className="text-[11px] tracking-[0.16em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            § 06  /  CONTATO
          </p>
        </RevealFadeUp>

        <div className="mt-8 md:mt-12">
          <LetterReveal
            lines={contato.headlineLines}
            className="text-[48px] md:text-[144px] leading-[0.98] tracking-[-0.03em]"
          />
        </div>

        <RevealFadeUp delay={0.3} className="mt-8 md:mt-14">
          <p
            className="text-[16px] md:text-[19px] leading-[1.5]"
            style={{ color: "var(--demo-muted)" }}
          >
            {contato.body.split(". ").map((sentence, i, arr) => (
              <span key={i} className="block">
                {sentence}
                {i < arr.length - 1 ? "." : ""}
              </span>
            ))}
          </p>
        </RevealFadeUp>

        {/* CTA pill grande dourado */}
        <RevealFadeUp delay={0.5} className="mt-10 md:mt-16">
          <motion.a
            href={contato.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: DURATION.hover, ease: EASE.outExpo }}
            className="inline-flex items-center justify-center rounded-full px-8 py-5 text-[12px] md:text-[14px] font-medium tracking-[0.14em] md:tracking-[0.16em]"
            style={{ background: "var(--demo-accent)", color: "var(--demo-bg)" }}
          >
            {contato.primaryCta.label}   →
          </motion.a>
        </RevealFadeUp>

        <RevealFadeUp delay={0.6} className="mt-5 md:mt-7">
          <p
            className="text-[11px] md:text-[13px] tracking-[0.14em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            {contato.phoneText}
          </p>
        </RevealFadeUp>

        {/* Links sociais */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.7 } },
          }}
          className="mt-16 md:mt-24 flex flex-col gap-2 md:flex-row md:gap-12"
        >
          {contato.socialLinks.map((link) => (
            <motion.span
              key={link}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: DURATION.entrance, ease: EASE.outExpo },
                },
              }}
              className="text-[10px] md:text-[11px] tracking-[0.14em]"
              style={{ color: "var(--demo-fg)", fontFamily: "var(--font-mono)" }}
            >
              {link}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/demo/DemoContato.tsx
git commit -m "feat(demo): rewrite DemoContato (§06 monumental + CTA pill animated)"
```

---

### Task 21: Reescrever DemoFooter (3-col institucional)

**Files:**
- Modify: `components/demo/DemoFooter.tsx`

- [ ] **Step 1: Sobrescrever**

Write `components/demo/DemoFooter.tsx`:

```tsx
import type { DemoConfig } from "@/lib/types";

type Props = {
  footer: DemoConfig["footer"];
  logoText: string;
};

export function DemoFooter({ footer, logoText }: Props) {
  return (
    <footer
      className="relative w-full border-t py-10 md:py-14"
      style={{ background: "var(--demo-bg)", borderColor: "var(--demo-hair)" }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[120px]">
        {/* 3 cols */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-20">
          {/* Col 1: Logo + dados */}
          <div>
            <p
              className="text-[12px] md:text-[14px] font-semibold tracking-[0.18em]"
              style={{ color: "var(--demo-fg)" }}
            >
              {logoText}
            </p>
            <div className="mt-5 space-y-1.5">
              {footer.dados.map((linha, i) => (
                <p
                  key={i}
                  className="text-[10px] md:text-[11px] tracking-[0.12em]"
                  style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
                >
                  {linha}
                </p>
              ))}
            </div>
          </div>

          {/* Col 2: Navegar */}
          <div>
            <p
              className="text-[10px] md:text-[11px] font-medium tracking-[0.18em]"
              style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
            >
              {footer.navHeader}
            </p>
            <div className="mt-5 space-y-2">
              {footer.navLinks.map((link) => (
                <p
                  key={link}
                  className="text-[10px] md:text-[11px] tracking-[0.14em]"
                  style={{ color: "var(--demo-fg)", fontFamily: "var(--font-mono)" }}
                >
                  {link}
                </p>
              ))}
            </div>
          </div>

          {/* Col 3: Redes */}
          <div>
            <p
              className="text-[10px] md:text-[11px] font-medium tracking-[0.18em]"
              style={{ color: "var(--demo-accent)", fontFamily: "var(--font-mono)" }}
            >
              {footer.redesHeader}
            </p>
            <div className="mt-5 space-y-2">
              {footer.redesLinks.map((link) => (
                <p
                  key={link}
                  className="text-[10px] md:text-[11px] tracking-[0.14em]"
                  style={{ color: "var(--demo-fg)", fontFamily: "var(--font-mono)" }}
                >
                  {link}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 md:mt-16 flex flex-col items-start justify-between gap-1 md:flex-row md:items-center md:gap-0">
          <p
            className="text-[9px] md:text-[10px] tracking-[0.12em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            {footer.copyright} · {footer.cnpj}
          </p>
          <p
            className="text-[9px] md:text-[10px] tracking-[0.14em]"
            style={{ color: "var(--demo-muted)", fontFamily: "var(--font-mono)" }}
          >
            {footer.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/demo/DemoFooter.tsx
git commit -m "feat(demo): rewrite DemoFooter (3-col institucional)"
```

---

## Phase 5: Layout + Registry

### Task 22: Reescrever DemoLayout (orquestrador das 8 sections)

**Files:**
- Modify: `components/demo/DemoLayout.tsx`
- Delete: `components/demo/DemoAbout.tsx`
- Delete: `components/demo/DemoDiferenciais.tsx`

- [ ] **Step 1: Deletar components não usados**

Run:
```bash
rm "C:/nashpages-demos/components/demo/DemoAbout.tsx"
rm "C:/nashpages-demos/components/demo/DemoDiferenciais.tsx"
```

- [ ] **Step 2: Sobrescrever DemoLayout**

Write `components/demo/DemoLayout.tsx`:

```tsx
import type { DemoConfig } from "@/lib/types";
import { paletteToCssVars } from "@/lib/utils";
import { SmoothScroll } from "@/components/SmoothScroll";
import { DemoNav } from "./DemoNav";
import { DemoHero } from "./DemoHero";
import { DemoSobre } from "./DemoSobre";
import { DemoForbes } from "./DemoForbes";
import { DemoTratamentos } from "./DemoTratamentos";
import { DemoTecnologia } from "./DemoTecnologia";
import { DemoAtendimento } from "./DemoAtendimento";
import { DemoContato } from "./DemoContato";
import { DemoFooter } from "./DemoFooter";

type Props = {
  config: DemoConfig;
};

export function DemoLayout({ config }: Props) {
  return (
    <div style={paletteToCssVars(config.palette)}>
      <SmoothScroll />
      <DemoNav nav={config.nav} logoText={config.logoText} />
      <main>
        <DemoHero hero={config.hero} />
        <DemoSobre sobre={config.sobre} />
        {config.forbes && <DemoForbes forbes={config.forbes} />}
        <DemoTratamentos tratamentos={config.tratamentos} />
        <DemoTecnologia tecnologia={config.tecnologia} />
        <DemoAtendimento atendimento={config.atendimento} />
        <DemoContato contato={config.contato} />
      </main>
      <DemoFooter footer={config.footer} logoText={config.logoText} />
    </div>
  );
}
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: zero erros (todos components estão criados).

- [ ] **Step 4: Commit**

```bash
git add components/demo/DemoLayout.tsx
git rm components/demo/DemoAbout.tsx components/demo/DemoDiferenciais.tsx
git commit -m "feat(demo): rewrite DemoLayout (8 sections + footer orchestrator)"
```

---

### Task 23: Atualizar lib/demos.ts (registrar Dr Ricardo)

**Files:**
- Modify: `lib/demos.ts`

- [ ] **Step 1: Sobrescrever**

Write `lib/demos.ts`:

```ts
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
```

- [ ] **Step 2: Type-check + build**

Run:
```bash
cd C:/nashpages-demos
npx tsc --noEmit
npm run build
```

Expected: build sucesso, `/dr-ricardo-rizzo-luiz` listado como rota estática.

- [ ] **Step 3: Commit**

```bash
git add lib/demos.ts
git commit -m "feat(demo): register Dr Ricardo config in demoRegistry"
```

---

## Phase 6: Validation visual + acessibilidade

### Task 24: Validação visual em dev

**Files:**
- N/A (apenas verificação manual)

- [ ] **Step 1: Iniciar dev server**

Run:
```bash
cd C:/nashpages-demos
npm run dev
```

Expected: server starts em `http://localhost:3002`. Acessar `http://localhost:3002/dr-ricardo-rizzo-luiz`.

- [ ] **Step 2: Checklist visual desktop (1440px)**

Abrir browser em janela 1440x900. Conferir cada section visualmente contra spec/Figma:

- [ ] Nav sticky aparece com blur after scroll 80px+
- [ ] Hero: split foto-right + texto-left, parallax sutil ao scrollar
- [ ] Headline hero entra em letter-by-letter reveal
- [ ] CTAs primary (underline dourado) + secondary (underline cinza) funcionam
- [ ] Sobre: headline 88pt + quote italic + bio + 5 credenciais com top-border dourado
- [ ] Forbes: capa dark left, texto right, parallax na capa
- [ ] Tratamentos: 3 cards horizontais, hover lift sutil, foto cresce 5% no hover
- [ ] Tecnologia: foto consultório top com parallax, body + 3 specs bottom
- [ ] Atendimento: 2-col ONDE/COMO paralelos, fade-up entrance
- [ ] Contato: headline 144pt monumental, CTA pill dourado com hover scale
- [ ] Footer: 3-col + bottom row com copyright + "SITE POR NASHPAGES"

Anotar bugs visuais. Não passar pra próxima task antes de corrigir.

- [ ] **Step 3: Checklist mobile (375px)**

Abrir Chrome DevTools, simular iPhone SE (375x667). Conferir:

- [ ] Nav minimal: logo + AGENDAR pill (sem hambúrguer pq são só 4 links)
- [ ] Hero: foto top, texto bottom, CTAs full-width empilhados
- [ ] Sobre: headline 32pt 3 linhas, quote + bio empilhados, credenciais empilhadas vertical
- [ ] Forbes: capa top 470px, texto bottom
- [ ] Tratamentos: 3 cards stacked vertical
- [ ] Tecnologia: foto top + texto bottom (já é vertical)
- [ ] Atendimento: ONDE + COMO empilhados
- [ ] Contato: headline 48pt, CTA pill full-width
- [ ] Footer: 3-col empilhados

- [ ] **Step 4: Testar reduced-motion**

Em DevTools > Rendering > Emulate CSS prefers-reduced-motion: reduce

Conferir:
- [ ] Lenis smooth scroll desativado
- [ ] Parallax desativado (camadas estáticas)
- [ ] LetterReveal mostra texto direto (sem stagger)
- [ ] Hover effects mantidos (são instantâneos)

- [ ] **Step 5: Stop server + commit eventual fix bugs**

Se houver bug fix, commits separados com `fix(demo): ...`.

---

### Task 25: Build prod + Lighthouse

**Files:**
- N/A (validação)

- [ ] **Step 1: Build prod**

Run:
```bash
cd C:/nashpages-demos
npm run build
npm run start
```

Expected: server prod em `http://localhost:3000` (ou outra porta livre). Acessar `/dr-ricardo-rizzo-luiz`.

- [ ] **Step 2: Lighthouse audit**

No Chrome DevTools > Lighthouse > Mobile + Desktop. Rodar audit. Conferir scores:

- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 95
- SEO: ≥ 95 (mas robots noindex propositadamente baixa)

Se Performance < 90, investigar:
- Imagens grandes? (next/image deve estar otimizando)
- Fonts atrasando LCP? (next/font deve evitar)
- JS bundle grande? (Framer Motion é o culpado provável — aceitável pra demo)

- [ ] **Step 3: Stop prod server**

Ctrl+C.

---

### Task 26: Commit final + push

**Files:**
- N/A

- [ ] **Step 1: Verificar git status limpo**

Run: `cd C:/nashpages-demos && git status`
Expected: working tree clean.

- [ ] **Step 2: Listar commits da feature**

Run: `git log --oneline -25`
Expected: ver os ~22+ commits da implementação Dr Ricardo.

- [ ] **Step 3: Push**

Run: `git push origin main`
Expected: push success. Vercel auto-deploys em ~1-2 min.

- [ ] **Step 4: Verificar deploy ao vivo**

Aguardar Vercel build OK. Acessar `https://demos.nashpages.com.br/dr-ricardo-rizzo-luiz`. Conferir que site renderiza corretamente em produção.

- [ ] **Step 5: Mensagem pro Enzo**

Reportar URL final + screenshot + lista de pendências (CRM/RQE, URL Forbes real, etc).

---

## Animation Reference (consolidado)

| Section | Animação central | Detalhe |
|---|---|---|
| **Nav** | Fade-in load + blur backdrop on scroll | Aparece em 480ms; bg muda quando scrollY > 80 |
| **§01 Hero** | LetterReveal headline + parallax foto direita (60px Y) | Eyebrow fade-up · headline line-by-line · CTAs fade-up sequencial · foto parallax suave |
| **§02 Sobre** | Headline LetterReveal · divider dourado draw-in · 5 credenciais stagger | Stagger entre cards 100ms · divider scaleX 0→1 em 480ms |
| **§Forbes** | LetterReveal headline · capa parallax (40px Y) · CTA underline crescer | Body fade-up sequencial · strip mídia stagger |
| **§03 Tratamentos** | 3 cards stagger entrance (100ms) + hover lift (-4px Y + foto scale 1.05) | Headline LetterReveal · hover restaura em 280ms |
| **§04 Tecnologia** | Foto top parallax PESADO (80px Y) · 3 specs stagger | Foto manda na hierarquia · texto entra suave |
| **§05 Atendimento** | Headline LetterReveal · ONDE+COMO fade-up sequenciais (150ms entre) | 2 cols com top-border dourado |
| **§06 Contato** | Headline 144pt LetterReveal · CTA pill hover scale 1.03 + tap 0.98 | Body lineBreak por sentence · 3 redes stagger |
| **Footer** | Sem animação (estático) | Apenas bg + tipografia |

**Easing canonical:** `cubic-bezier(0.32, 0.72, 0, 1)` (`EASE.outExpo` em `lib/motion.ts`)

**Durações canônicas:**
- Hover: 280ms
- Entrance (fade-up): 480ms
- Display headline: 600-800ms
- Parallax: amarrado ao scroll progress

**Reduced-motion:** TODAS as animações respeitam `prefers-reduced-motion: reduce`. Implementado via `useReducedMotion()` em ParallaxLayer/LetterReveal/RevealFadeUp + CSS `@media` global em globals.css.

---

## Self-Review

**1. Spec coverage:**
- ✅ Paleta (Task 4): tokens em globals.css
- ✅ Tipografia (Task 2): Inter + JetBrains Mono via next/font
- ✅ Animação core parallax (Task 8 ParallaxLayer)
- ✅ Signature elements (numeração mono dourada em Tasks 15/17/18/19, top-border dourado idem)
- ✅ Tom de voz (preserved no config.ts da Task 6)
- ✅ Estrutura 8 sections (Tasks 14-21)
- ✅ Stack Next/Tailwind/Framer Motion: usado em todas tasks
- ✅ Mobile responsive: classes `md:` em todas sections
- ✅ Reduced-motion (motion primitives Tasks 7-12)
- ✅ SSG `generateStaticParams` (já funciona no projeto)
- ✅ noindex (já no root layout)
- ✅ Lighthouse audit (Task 25)

**2. Placeholder scan:** Sem TBDs. Cada step tem código completo ou comando exato.

**3. Type consistency:**
- `DemoConfig` definido em Task 5, consumido em Tasks 6, 13-22 — fields batem.
- `EASE`, `DURATION`, `STAGGER` definidos em Task 3, importados em Tasks 8-12 e 13-22.
- `paletteToCssVars` já existe em lib/utils.ts (não precisa modificar).

Plano completo e consistente.

---

## Próximo passo

Salvar este plano em `docs/superpowers/plans/2026-05-15-dr-ricardo-demo-implementation.md` (já feito ao escrever este arquivo) e oferecer escolha de execução.
