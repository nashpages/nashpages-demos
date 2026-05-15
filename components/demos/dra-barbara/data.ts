// Dados da demo Dra Bárbara Pimenta — paleta nude rosé + textos do Figma.

export const BARBARA_PALETTE = {
  cream: "#F8F2EA",
  rose: "#F2E4DD",
  tinta: "#2A2520",
  nude: "#C4998A",
  grafite: "#6B5F5A",
  linha: "#DCC8BC",
  footerBg: "#1E1B17",
  footerMuted: "#9C8F87",
  footerDivider: "#4A3938",
} as const;

export const BARBARA_DATA = {
  whatsapp: "https://wa.me/5548996739186",
  phone: "(48) 99673-9186",
  doctoraliaUrl: "https://www.doctoralia.com.br/barbara-pimenta",

  nav: {
    logo: "DRA. BÁRBARA",
    links: [
      { label: "SOBRE", href: "#sobre" },
      { label: "TRATAMENTOS", href: "#tratamentos" },
      { label: "CONSULTÓRIO", href: "#atendimento" },
      { label: "CONTATO", href: "#contato" },
    ],
  },

  hero: {
    eyebrow: "DERMATOLOGIA CLÍNICA, CIRÚRGICA E ESTÉTICA",
    headlineLines: ["Cuidado da pele", "que escuta você."],
    subline: "Dermatologia clínica, cirúrgica e estética. Florianópolis.",
    primaryCta: { label: "AGENDAR CONSULTA", href: "https://wa.me/5548996739186" },
    secondaryCta: { label: "TRATAMENTOS E PREÇOS", href: "#tratamentos" },
    photo: "/demos/dra-barbara-pimenta/doutora-hero.jpg",
  },

  sobre: {
    eyebrow: "§ 02  /  SOBRE A DRA BÁRBARA",
    headlineLines: ["Olhar integrativo", "pra cada pele."],
    quote: {
      lines: ["“Cada pele tem", "sua história.”"],
      attribution: "— DRA. BÁRBARA PIMENTA",
    },
    bio: [
      "Dermatologista pela UNESP (Botucatu), com residência na mesma faculdade e título de especialista pela Sociedade Brasileira de Dermatologia. Estágio internacional no Centro Hospitalar Universitário de Coimbra, Portugal, e pós-graduação em Dermatologia Integrativa em curso.",
      "Atua nas três frentes da dermatologia — clínica, cirúrgica e estética — em consultório próprio no Centro de Florianópolis. Premiada pelo Doctoralia em 2022 e 2024 como Best Quality.",
    ],
  },

  reconhecimento: {
    eyebrow: "RECONHECIMENTO  ·  DOCTORALIA",
    stat: "233",
    statLabel: "avaliações 5 estrelas",
    badges: ["BEST QUALITY 2022", "BEST QUALITY 2024"],
    quote: "“Atenciosa durante a consulta. Explicações detalhadas, ótimo consultório, pontual.”",
    attribution: "— SÍNTESE DE 233 AVALIAÇÕES NO DOCTORALIA",
    cta: { label: "ACESSAR PERFIL NO DOCTORALIA", href: "https://www.doctoralia.com.br/barbara-pimenta" },
    photo: "/demos/dra-barbara-pimenta/doutora-reconhecimento.jpg",
  },

  tratamentos: {
    eyebrow: "§ 03  /  TRATAMENTOS",
    headlineLines: ["Três dermatologias,", "um consultório."],
    cards: [
      {
        num: "01",
        label: "PREVENÇÃO",
        body: "Consulta dermatológica completa, check-up de pele, acompanhamento contínuo e skincare personalizado. Identificar antes de tratar.",
      },
      {
        num: "02",
        label: "ESTÉTICA SUTIL",
        body: "Toxina botulínica, preenchimentos com ácido hialurônico, bioestimuladores (Sculptra, Radiesse) e Ultraformer (HIFU). Resultado natural, sem exagero.",
      },
      {
        num: "03",
        label: "CIRURGIA DERMATO",
        body: "Remoção de lesões benignas e malignas, nevos, lipomas e biópsia diagnóstica. Cirurgia ambulatorial com técnica precisa.",
      },
    ],
  },

  procedimentos: {
    eyebrow: "§ 04  /  PROCEDIMENTOS",
    headlineLines: ["Procedimentos", "no mesmo", "consultório."],
    body: "Avaliação, tratamento e acompanhamento no mesmo lugar. Tecnologia atual (Ultraformer, bioestimuladores), técnica cirúrgica e olhar integrativo — pra que cada pele receba o cuidado que pede.",
    photo: "/demos/dra-barbara-pimenta/doutora-procedimento.jpg",
    specs: [
      { num: "01", label: "ULTRAFORMER", value: "HIFU FACE" },
      { num: "02", label: "BIOESTIMULADORES", value: "SCULPTRA + RADIESSE" },
      { num: "03", label: "SBD", value: "TÍTULO DE ESPECIALISTA" },
    ],
  },

  atendimento: {
    eyebrow: "§ 05  /  ATENDIMENTO",
    headlineLines: ["Onde,", "e como."],
    onde: [
      "Rua Ângelo La Porta, 53 — Estação Milano.",
      "Sala 1202 · Centro · Florianópolis/SC.",
      "CEP 88020-600.",
      "Atendimento adultos e pediátrico.",
    ],
    como: [
      "Particular.",
      "Convênios sob consulta.",
      "Teleconsulta disponível.",
      "Avaliação completa na primeira consulta.",
    ],
  },

  contato: {
    eyebrow: "§ 06  /  CONTATO",
    headlineLines: ["Vamos", "conversar."],
    accent: "florianópolis · ao seu tempo.",
    body: "Agende sua consulta pelo WhatsApp. Resposta no mesmo dia útil.",
    cta: { label: "AGENDAR PELO WHATSAPP", href: "https://wa.me/5548996739186" },
    phoneLine: "(48) 99673-9186",
    phoneLabel: "DIRETO COM A DOUTORA",
    socials: [
      { label: "@drapimentadermato", href: "https://instagram.com/drapimentadermato" },
      { label: "@amira.clinica", href: "https://instagram.com/amira.clinica" },
      { label: "clinicaamira.com.br", href: "https://clinicaamira.com.br" },
    ],
  },

  footer: {
    logo: "Dra. Bárbara",
    logoSub: "DERMATOLOGIA",
    dados: [
      "CRM/SC 27.312 · RQE 17.648",
      "RUA ÂNGELO LA PORTA, 53",
      "SALA 1202 · ESTAÇÃO MILANO",
      "CENTRO · FLORIANÓPOLIS/SC",
      "CEP 88020-600",
    ],
    navegar: ["SOBRE", "TRATAMENTOS", "CONSULTÓRIO", "CONTATO"],
    redes: ["@DRAPIMENTADERMATO", "@AMIRA.CLINICA", "CLINICAAMIRA.COM.BR"],
    copyright: "© 2026  BARBARA PIMENTA DERMATOLOGIA LTDA  ·  CNPJ 49.286.411/0001-72",
    credit: "SITE POR NASHPAGES",
  },
} as const;

export type BarbaraData = typeof BARBARA_DATA;
