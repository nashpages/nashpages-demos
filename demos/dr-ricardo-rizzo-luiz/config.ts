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
