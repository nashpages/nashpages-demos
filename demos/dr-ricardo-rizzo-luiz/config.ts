import type { DemoConfig } from "@/lib/types";

const config: DemoConfig = {
  slug: "dr-ricardo-rizzo-luiz",

  name: "Dr. Ricardo Rizzo Luiz",
  title:
    "Cirurgião Vascular · Especialista em Varizes, Vasinhos e Lipedema",
  taglineEyebrow: "§ 01 / ATENDIMENTO",

  // Verde clínico contemporâneo
  palette: {
    bg: "#F5F1EA",
    fg: "#18211F",
    muted: "#6F7975",
    hair: "#D9D2C5",
    accent: "#1E4A48",
    accentSoft: "#4A8884",
  },

  hero: {
    headline: "Cuidado vascular que devolve qualidade de vida.",
    description:
      "Cirurgião vascular com dupla especialização (Cirurgia Geral + Cirurgia Vascular). Atendimento em São José e Florianópolis, tecnologia em consultório e técnica atualizada.",
    photoSrc: "/demos/dr-ricardo-rizzo-luiz/portrait.jpg",
  },

  about: {
    title: "Quem te atende.",
    body: [
      "Cirurgião vascular formado pela Universidade Regional de Blumenau em 2012, com dupla especialização — Cirurgia Geral e Cirurgia Vascular, ambas com título de especialista.",
      "Atua na Grande Florianópolis com foco em tratamento de varizes, vasinhos e lipedema. Médico Regulador / Intervencionista do SAMU Florianópolis e Instrutor ACLS certificado pela American Heart Association.",
      "Diagnóstico com ultrassom Doppler em consultório, conduta clara e atendimento personalizado — sem etapas desnecessárias entre o problema e a solução.",
    ],
    credentials: [
      "Cirurgião Vascular · Cirurgia Geral",
      "Universidade Regional de Blumenau (2012)",
      "Médico Regulador — SAMU Florianópolis",
      "Instrutor ACLS · American Heart Association",
    ],
  },

  specialties: {
    title: "Tratamentos.",
    items: [
      {
        title: "Varizes",
        description:
          "Tratamento clínico e cirúrgico de varizes calibrosas, com técnica atualizada e acompanhamento pós-procedimento.",
      },
      {
        title: "Vasinhos (telangiectasias)",
        description:
          "Escleroterapia tradicional ou com espuma, conforme cada caso e tom de pele.",
      },
      {
        title: "Lipedema",
        description:
          "Protocolo dedicado com tecnologia Deep Slim, manejo clínico e orientação contínua.",
      },
      {
        title: "Ecodoppler Vascular",
        description:
          "Diagnóstico por imagem feito no próprio consultório — sem fila externa, conduta no mesmo dia.",
      },
      {
        title: "Cirurgia Vascular",
        description:
          "Procedimentos vasculares periféricos com técnica atual e suporte completo.",
      },
      {
        title: "Insuficiência Venosa Crônica",
        description:
          "Avaliação e tratamento da doença venosa em todas as fases — do desconforto inicial às úlceras.",
      },
    ],
  },

  differentials: {
    title: "O que diferencia este atendimento.",
    items: [
      {
        label: "FORMAÇÃO",
        title: "Dupla especialização.",
        body: "Cirurgia Geral + Cirurgia Vascular, com título de especialista nas duas. Base técnica que poucos vasculares têm.",
      },
      {
        label: "EMERGÊNCIA",
        title: "Médico Regulador do SAMU.",
        body: "Experiência em urgências vasculares e clínicas. Conduta firme em casos complexos.",
      },
      {
        label: "AMERICAN HEART",
        title: "Instrutor ACLS oficial.",
        body: "Certificação pela American Heart Association em suporte avançado de vida — formação técnica de referência.",
      },
      {
        label: "TECNOLOGIA",
        title: "Doppler em consultório.",
        body: "Diagnóstico por imagem sem fila externa. Você sai da consulta com plano de tratamento definido.",
      },
    ],
  },

  contact: {
    title: "Vamos conversar.",
    subline:
      "Atendimento em São José e Florianópolis. Convênios SC Saúde e UNIMED, além de particulares.",
    primaryCtaLabel: "Agendar pelo WhatsApp",
    primaryCtaHref: "https://wa.me/5548991995583",
    items: [
      {
        label: "WhatsApp",
        value: "(48) 99199-5583",
        href: "https://wa.me/5548991995583",
      },
      {
        label: "Endereço",
        value: "Rua Elizeu di Bernardi, 34 — sala 110, Campinas · São José/SC",
      },
      {
        label: "Instagram",
        value: "@drricardorizzoluiz",
        href: "https://instagram.com/drricardorizzoluiz",
      },
      {
        label: "Convênios",
        value: "SC Saúde · UNIMED · Particular",
      },
    ],
  },

  meta: {
    title:
      "Dr. Ricardo Rizzo Luiz — Cirurgião Vascular · Varizes, Vasinhos e Lipedema",
    description:
      "Cirurgião vascular em São José e Florianópolis. Especialista em varizes, vasinhos e lipedema. Doppler em consultório, conduta clara, atendimento personalizado.",
  },
};

export default config;
