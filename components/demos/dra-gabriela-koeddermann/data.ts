// Dados da demo Dra. Gabriela Koeddermann — Maison cirúrgica (boutique premium warm).

export const GABRIELA_PALETTE = {
  papel: "#F7ECE3",
  bege: "#EAD9CC",
  tinta: "#2A1F1A",
  neblina: "#857770",
  linha: "#DBCFC2",
  accent: "#A87E68",
  accentDeep: "#4E342B",
  footerLinha: "#6E4F3D",
  footerMuted: "#A89484",
} as const;

export const GABRIELA_DATA = {
  whatsapp: "https://linktr.ee/dermato_gabikoeddermann",
  instagram: "https://instagram.com/dermato_gabikoeddermann",
  instagramHandle: "@dermato_gabikoeddermann",

  nav: {
    logo: "Dra. Gabriela Koeddermann",
    links: [
      { label: "PRINCÍPIO", href: "#top" },
      { label: "MOHS", href: "#mohs" },
      { label: "FORMAÇÃO", href: "#formacao" },
      { label: "ATENDIMENTO", href: "#atendimento" },
    ],
    ctaShort: { label: "AGENDAR", href: "https://linktr.ee/dermato_gabikoeddermann" },
  },

  hero: {
    eyebrow: "PRINCÍPIO",
    headlineLines: ["A precisão", "também preserva."],
    subline:
      "Cirurgia micrográfica de Mohs com fellowship UFSC. A única especialista em Balneário Camboriú.",
    primaryCta: { label: "AGENDAR PELO WHATSAPP", href: "https://linktr.ee/dermato_gabikoeddermann" },
    secondaryCta: { label: "CONHECER MOHS", href: "#mohs" },
    photo: "/demos/dra-gabriela-koeddermann/retrato-hero.jpg",
    meta: [
      "CRM-SC 24.288",
      "RQE 22.794",
      "FELLOWSHIP MOHS · UFSC",
      "BALNEÁRIO CAMBORIÚ/SC",
    ],
    metaMobile: ["CRM-SC 24.288", "RQE 22.794"],
  },

  sobre: {
    eyebrow: "SOBRE",
    quoteLines: ["A pele tem memória.", "A cicatriz, também."],
    attribution: "— PRINCÍPIO CIRÚRGICO",
    photo: "/demos/dra-gabriela-koeddermann/retrato-sobre.jpg",
    bio: [
      "Gabriela Koeddermann é dermatologista em Balneário Camboriú.",
      "Especialização em Cirurgia Cutânea e Oncologia pelo Hospital Universitário Evangélico Mackenzie em Curitiba, e fellowship em Cirurgia Micrográfica de Mohs pela Universidade Federal de Santa Catarina, em Florianópolis.",
      "Atua em cirurgia de pele, câncer cutâneo, hidradenite, psoríase, dermatite atópica e dermatopediatria.",
    ],
  },

  mohs: {
    eyebrow: "MOHS",
    headline: "A cirurgia que preserva.",
    photo: "/demos/dra-gabriela-koeddermann/microscopio.jpg",
    body: "A cirurgia micrográfica de Mohs é o padrão-ouro mundial pra remoção de câncer de pele em áreas cosméticas — face, lábios, pálpebras, orelhas. Em camadas finíssimas, sob microscópio, até confirmar margens livres. Preserva o máximo de tecido sadio.",
    cols: [
      { num: "01", label: "TÉCNICA", body: "Em camadas finíssimas, sob microscópio. Cada camada examinada antes da seguinte." },
      { num: "02", label: "INDICAÇÃO", body: "Câncer de pele em áreas cosméticas — face, lábios, pálpebras, orelhas." },
      { num: "03", label: "DIFERENCIAL", body: "Única dermatologista especialista em Mohs em Balneário Camboriú." },
    ],
    signature: "Tirar o que precisa. Preservar o que pode.",
    signatureAttribution: "— PRINCÍPIO DA CIRURGIA DE MOHS",
  },

  formacao: {
    eyebrow: "FORMAÇÃO",
    headline: "Onde se formou.",
    cv: [
      { label: "ESPECIALIZAÇÃO EM CIRURGIA CUTÂNEA E ONCOLOGIA", inst: "Hospital Universitário Evangélico Mackenzie", city: "Curitiba" },
      { label: "FELLOWSHIP EM CIRURGIA MICROGRÁFICA DE MOHS", inst: "Universidade Federal de Santa Catarina", city: "Florianópolis" },
    ],
    afiliacoesLabel: "AFILIAÇÃO PROFISSIONAL",
    memberships: [
      { acronym: "SBD", name: "Sociedade Brasileira de Dermatologia" },
    ],
  },

  frentes: {
    eyebrow: "PRÁTICA",
    headline: "Além da cirurgia.",
    list: [
      { num: "§05.1", name: "CIRURGIA GERAL DE PELE", desc: "Remoção de lesões benignas e malignas, biópsias diagnósticas e excisão com sutura simples." },
      { num: "§05.2", name: "HIDRADENITE SUPURATIVA", desc: "Condição crônica inflamatória. Diagnóstico, plano clínico-cirúrgico e acompanhamento de longo prazo." },
      { num: "§05.3", name: "PSORÍASE", desc: "Tratamento clínico e biológico. Membro da rede Psoríase Brasil." },
      { num: "§05.4", name: "DERMATITE ATÓPICA", desc: "Plano de longo prazo para pele atópica do adulto à criança." },
      { num: "§05.5", name: "DERMATOPEDIATRIA", desc: "Pele infantil e adolescente. Marcas de nascimento, dermatites e acompanhamento desde o primeiro mês." },
    ],
  },

  atendimento: {
    eyebrow: "ATENDIMENTO",
    headline: "Onde, e como.",
    photo: "/demos/dra-gabriela-koeddermann/retrato-clinica.jpg",
    ondeLabel: "ONDE",
    ondeNome: "Barra Sul",
    ondeLines: ["Rua 3850, nº 3984", "Balneário Camboriú · SC", "CEP 88330-190"],
    comoLabel: "COMO",
    como: [
      { num: "01", text: "Agendamento via WhatsApp ou Doctoralia." },
      { num: "02", text: "Avaliação clínica e cirúrgica em consulta presencial." },
      { num: "03", text: "Plano terapêutico ou cirúrgico personalizado." },
      { num: "04", text: "Acompanhamento de longo prazo." },
    ],
    note: "Atende particular e Unimed Litoral. Teleconsulta disponível.",
  },

  contato: {
    eyebrow: "CONTATO",
    headlineLines: ["Vamos", "conversar."],
    sublineLines: ["Comece pelo WhatsApp.", "Eu respondo pessoalmente."],
    cta: { label: "Falar com a Dra. Gabriela", href: "https://linktr.ee/dermato_gabikoeddermann" },
    instagram: "@DERMATO_GABIKOEDDERMANN",
  },

  footer: {
    blocks: [
      {
        label: "PRINCÍPIO",
        lines: [
          { text: "Dra. Gabriela Koeddermann", bold: true },
          { text: "Dermatologia e Mohs" },
          { text: "CRM-SC 24.288" },
          { text: "RQE 22.794" },
        ],
      },
      {
        label: "ATENDIMENTO",
        lines: [
          { text: "Barra Sul", bold: true },
          { text: "Rua 3850, nº 3984" },
          { text: "Balneário Camboriú · SC" },
          { text: "CEP 88330-190" },
        ],
      },
      {
        label: "CONTATO",
        lines: [
          { text: "WhatsApp via Linktree", bold: true },
          { text: "@dermato_gabikoeddermann" },
        ],
      },
      {
        label: "PROJETO",
        lines: [
          { text: "Maison cirúrgica", bold: true },
          { text: "© 2026" },
          { text: "Site por Nashpages" },
        ],
      },
    ],
    bottomLogo: "Dra. Gabriela Koeddermann",
    bottomTag: "DERMATOLOGIA E MOHS · BC",
  },
} as const;

export type GabrielaData = typeof GABRIELA_DATA;
