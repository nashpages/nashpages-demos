@AGENTS.md

# Nashpages Demos — sistema de mockups por prospect

Sistema de demos da Nashpages: pra cada prospect Premium, geramos uma demo customizada hospedada em `demos.nashpages.com.br/[slug]`. Usado em cold outreach (mostra o site do profissional já feito antes mesmo dele pedir).

## Regra crítica de isolamento

Este projeto é **completamente isolado** de:
- `C:\MEDERM` (SaaS médico — outro produto)
- `C:\nashpages` (site institucional da empresa Nashpages)
- `C:\PALINDOR`

NUNCA importar, copiar ou referenciar nada desses outros projetos aqui. Sem packages compartilhados.

## Stack

- Next.js 16 App Router · TypeScript 5
- Tailwind CSS v4
- Framer Motion 12
- Geist + Geist Mono via next/font

## Arquitetura

```
demos/[slug]/config.ts       → dados do prospect (DemoConfig)
public/demos/[slug]/         → fotos do prospect (hero.jpg, etc)
lib/demos.ts                 → registry (import dos configs + helpers)
app/[slug]/page.tsx          → rota dinâmica (generateStaticParams)
components/demo/*.tsx        → template reusável (DemoNav, DemoHero, ...)
```

## Como adicionar nova demo

1. Criar pasta `demos/[novo-slug]/`
2. Criar `config.ts` exportando `DemoConfig` default
3. Adicionar fotos em `public/demos/[novo-slug]/`
4. Importar e adicionar no registry em `lib/demos.ts`
5. Commit + push → deploy auto Vercel
6. URL pronta: `demos.nashpages.com.br/[novo-slug]`

## Visual

**NÃO é o visual do site Nashpages.** Cada demo tem paleta própria (via `palette` no config) — neutra, profissional, customizável pra cada profissional. O slash bordô e a estética cubicism do site principal NÃO devem aparecer aqui.

## Privacidade

- Páginas demo são `noindex` (robots) — não querem aparecer no Google
- Index `/` é privado (lista as demos pra navegação interna)
