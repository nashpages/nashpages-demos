// Dados da demo Dra. Renata Americo — Cleveland sereno (editorial clínico humanizado).

export const RENATA_PALETTE = {
  papel: "#FAFAF7",
  ares: "#F2F1EC",
  tinta: "#1A1F24",
  neblina: "#5C6770",
  linha: "#E0E2DE",
  accent: "#1E3A4A",
  accentDeep: "#0E1C26",
  footerLinha: "#1F2E3A",
  footerMuted: "#7A8590",
} as const;

export const RENATA_DATA = {
  whatsapp: "https://wa.me/5547997641142",
  whatsappPhone: "(47) 99764-1142",
  instagram: "https://instagram.com/re.americo.dermato",
  instagramHandle: "@re.americo.dermato",

  nav: {
    logo: "Dra. Renata Americo",
    links: [
      { label: "PRINCÍPIO", href: "#top" },
      { label: "FORMAÇÃO", href: "#formacao" },
      { label: "PRÁTICA", href: "#pratica" },
      { label: "ATENDIMENTO", href: "#atendimento" },
    ],
    ctaShort: { label: "AGENDAR", href: "https://wa.me/5547997641142" },
  },

  hero: {
    eyebrow: "PRINCÍPIO",
    headlineLines: ["Responsabilidade,", "antes da promessa."],
    subline:
      "Dermatologia clínica, cirúrgica e estética. Oncologia cutânea pelo Hospital Sírio-Libanês. Mais de dez anos em Balneário Camboriú.",
    primaryCta: { label: "AGENDAR PELO WHATSAPP", href: "https://wa.me/5547997641142" },
    secondaryCta: { label: "CONHECER A DRA.", href: "#sobre" },
    photo: "/demos/dra-renata-americo/retrato-hero.jpg",
    meta: [
      "CRM-SC 16.083",
      "RQE 19.621",
      "ATENDIMENTO PARTICULAR",
      "BALNEÁRIO CAMBORIÚ/SC",
    ],
    metaMobile: ["CRM-SC 16.083", "RQE 19.621"],
  },

  sobre: {
    eyebrow: "SOBRE",
    latinDisplay: "Primum non nocere.",
    translation: "Antes de tudo, não causar dano.",
    attribution: "— HIPÓCRATES",
    photo: "/demos/dra-renata-americo/retrato-sobre.jpg",
    bio: [
      "Renata Fontanelle Americo é dermatologista em Balneário Camboriú.",
      "Formada em medicina pela Universidade do Planalto Catarinense em 2009, com especialização em dermatologia pela Fundação Souza Marques em 2012 e em oncologia dermatológica pelo Hospital Sírio-Libanês em 2022.",
      "Membro da SBD, SBCD e do Grupo Brasileiro de Melanoma.",
    ],
  },

  formacao: {
    eyebrow: "FORMAÇÃO",
    headline: "Onde se formou.",
    cv: [
      { year: "2009 · MEDICINA", inst: "Universidade do Planalto Catarinense", city: "Lages/SC" },
      { year: "2012 · ESPECIALIZAÇÃO EM DERMATOLOGIA", inst: "Fundação Souza Marques", city: "Rio de Janeiro" },
      { year: "2022 · ESPECIALIZAÇÃO EM ONCOLOGIA DERMATOLÓGICA", inst: "Hospital Sírio-Libanês", city: "São Paulo" },
    ],
    afiliacoesLabel: "AFILIAÇÕES PROFISSIONAIS",
    memberships: [
      { acronym: "SBD", name: "Sociedade Brasileira de Dermatologia" },
      { acronym: "SBCD", name: "Sociedade Brasileira de Cirurgia Dermatológica" },
      { acronym: "GBM", name: "Grupo Brasileiro de Melanoma" },
    ],
  },

  praticas: {
    eyebrow: "PRÁTICA",
    headline: "Frentes de atuação.",
    frentes: [
      { num: "§04.1", name: "CLÍNICA", desc: "Acne, melasma, dermatites, sinais e biópsias. Avaliação minuciosa antes de qualquer recomendação." },
      { num: "§04.2", name: "CIRÚRGICA", desc: "Pequenos procedimentos em consultório com anestesia local." },
      { num: "§04.3", name: "ESTÉTICA", desc: "Tratamentos para tom, textura e estímulo de colágeno." },
      { num: "§04.4", name: "ONCOLOGIA CUTÂNEA", desc: "Diagnóstico e tratamento de lesões com risco oncológico. Formação Sírio-Libanês." },
      { num: "§04.5", name: "TRICOLOGIA", desc: "Investigação clínica das causas de queda capilar." },
    ],
  },

  tecnologia: {
    eyebrow: "TECNOLOGIA",
    headline: "Em consultório.",
    equipamentos: [
      "Ultrassom Microfocado",
      "Lasers e Luz Intensa Pulsada",
      "Bioestimulação de Colágeno",
      "Peeling",
      "Biópsias com anestesia local",
    ],
    signature: "Em consultório, sem peregrinação por centros externos.",
  },

  atendimento: {
    eyebrow: "ATENDIMENTO",
    headline: "Onde, e como.",
    photo: "/demos/dra-renata-americo/retrato-clinica.jpg",
    ondeLabel: "ONDE",
    ondeNome: "Menara Medical Center",
    ondeLines: ["Av. do Estado, 1714 — sala 406", "Ariribá", "Balneário Camboriú, SC"],
    comoLabel: "COMO",
    como: [
      { num: "01", text: "Agendamento via WhatsApp" },
      { num: "02", text: "Avaliação minuciosa em consulta presencial" },
      { num: "03", text: "Retorno em até 30 dias" },
      { num: "04", text: "Plano terapêutico personalizado" },
    ],
    note: "Atendimento particular, sem convênios.",
  },

  contato: {
    eyebrow: "CONTATO",
    headlineLines: ["Vamos", "conversar."],
    sublineLines: ["Comece pelo WhatsApp.", "Eu respondo pessoalmente."],
    cta: { label: "Falar com a Dra. Renata", href: "https://wa.me/5547997641142" },
    instagram: "@RE.AMERICO.DERMATO",
  },

  footer: {
    blocks: [
      {
        label: "PRINCÍPIO",
        lines: [
          { text: "Dra. Renata Americo", bold: true },
          { text: "Dermatologista" },
          { text: "CRM-SC 16.083" },
          { text: "RQE 19.621" },
        ],
      },
      {
        label: "ATENDIMENTO",
        lines: [
          { text: "Menara Medical Center", bold: true },
          { text: "Av. do Estado, 1714 — sala 406" },
          { text: "Ariribá" },
          { text: "Balneário Camboriú, SC" },
        ],
      },
      {
        label: "CONTATO",
        lines: [
          { text: "(47) 99764-1142", bold: true },
          { text: "@re.americo.dermato" },
        ],
      },
      {
        label: "PROJETO",
        lines: [
          { text: "Cleveland sereno", bold: true },
          { text: "© 2026" },
          { text: "Site por Nashpages" },
        ],
      },
    ],
    bottomLogo: "Dra. Renata Americo",
    bottomTag: "DERMATOLOGIA EM BALNEÁRIO CAMBORIÚ",
  },
} as const;

export type RenataData = typeof RENATA_DATA;
