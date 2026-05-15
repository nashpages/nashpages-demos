import type { DemoConfig } from "@/lib/types";

// Placeholder pra validar a infra de demos.
// Será substituído pelos dados reais do prospect piloto (cirurgião vascular)
// assim que tivermos research feito.

const config: DemoConfig = {
  slug: "dr-vascular-placeholder",

  name: "Dr. Nome Sobrenome",
  title: "Cirurgião Vascular · CRM 00000-0",
  taglineEyebrow: "§ 01 / ATENDIMENTO",

  palette: {
    bg: "#F7F4EE", // off-white quente
    fg: "#1A1A19", // quase preto
    muted: "#6B6660",
    hair: "#D9D2C5",
    accent: "#2A4A4F", // verde-azulado clínico (placeholder)
    accentSoft: "#5C7F84",
  },

  hero: {
    headline: "Cuidado vascular que devolve qualidade de vida.",
    sublineMuted: "Para casos simples e complexos.",
    description:
      "Cirurgia vascular periférica, tratamento de varizes, doenças arteriais e venosas. Atendimento personalizado, técnica atual, acolhimento humano.",
  },

  about: {
    title: "Sobre o profissional.",
    body: [
      "Cirurgião vascular com formação reconhecida e atualização constante nas técnicas mais modernas de tratamento vascular periférico.",
      "Atende casos eletivos e de urgência. Compromisso com diagnóstico preciso, conduta baseada em evidência e relação direta médico–paciente.",
    ],
    credentials: [
      "CRM 00000-0",
      "Título de Especialista pela SBACV",
      "Membro da Sociedade Brasileira de Angiologia e Cirurgia Vascular",
    ],
  },

  specialties: {
    title: "Áreas de atuação.",
    items: [
      { title: "Tratamento de varizes" },
      { title: "Insuficiência venosa crônica" },
      { title: "Doença arterial obstrutiva periférica" },
      { title: "Cirurgia vascular periférica" },
      { title: "Ecodoppler vascular" },
      { title: "Tratamento de feridas vasculares" },
    ],
  },

  differentials: {
    title: "Por que escolher este atendimento.",
    items: [
      {
        label: "TÉCNICA",
        title: "Equipamento moderno.",
        body: "Ecodoppler de alta resolução em consultório, escleroterapia ecoguiada, laser endovenoso quando indicado.",
      },
      {
        label: "ATENDIMENTO",
        title: "Consulta sem pressa.",
        body: "Cada paciente recebe tempo adequado pra anamnese completa, exame e orientação. Sem fila industrial.",
      },
      {
        label: "RETORNO",
        title: "Acompanhamento pós-procedimento.",
        body: "Suporte direto via WhatsApp clínico nos primeiros 30 dias após qualquer procedimento.",
      },
    ],
  },

  contact: {
    title: "Vamos conversar.",
    subline:
      "Agende sua consulta. Resposta no mesmo dia útil em horário comercial.",
    primaryCtaLabel: "Agendar pelo WhatsApp",
    primaryCtaHref: "https://wa.me/55XXXXXXXXXXX",
    items: [
      {
        label: "WhatsApp",
        value: "(00) 0000-0000",
        href: "https://wa.me/55XXXXXXXXXXX",
      },
      {
        label: "Instagram",
        value: "@perfil",
        href: "https://instagram.com/perfil",
      },
      {
        label: "Endereço",
        value: "Rua Exemplo, 000 — Cidade/UF",
      },
    ],
  },

  meta: {
    title: "Dr. Nome Sobrenome — Cirurgião Vascular",
    description:
      "Cirurgia vascular periférica, tratamento de varizes, doenças arteriais e venosas. Atendimento personalizado e técnica atual.",
  },
};

export default config;
