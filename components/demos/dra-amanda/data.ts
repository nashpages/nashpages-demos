// Dra. Amanda Fistarol — Rouge Editorial v4 + 3 Atos coreográficos.

export const AMANDA_PALETTE = {
  papel: "#FCF4ED",
  neve: "#F4E2DA",
  tinta: "#2A1A1A",
  neblina: "#8F7670",
  linha: "#E8D2CB",
  carmim: "#C73B5C",
  footerBg: "#1F0D11",
  footerMuted: "#806468",
  footerDivider: "#3C2026",
} as const;

export const AMANDA_PHOTOS = {
  hero: "/demos/dra-amanda-fistarol/retrato-hero.jpg",
  palestra: "/demos/dra-amanda-fistarol/palestra.jpg",
  congresso: "/demos/dra-amanda-fistarol/congresso.jpg",
  ultraformer: "/demos/dra-amanda-fistarol/ultraformer.jpg",
  procedimento: "/demos/dra-amanda-fistarol/procedimento-abdomen.jpg",
} as const;

export const AMANDA_DATA = {
  whatsapp: "https://wa.me/5547991156709",
  whatsappPhone: "(47) 99115-6709",
  fixedPhone: "(47) 3326-5232",
  instagram: "https://instagram.com/amandafistarol",

  nav: {
    logo: "Dra. Amanda Fistarol.",
    links: [
      { label: "PRÁTICA",    href: "#pratica" },
      { label: "TECNOLOGIA", href: "#tecnologia" },
      { label: "PRESENÇA",   href: "#presenca" },
      { label: "CONTATO",    href: "#contato" },
    ],
  },

  hero: {
    eyebrow: "§ HERO  /  DERMATOLOGIA",
    headlineLines: ["Pele é onde a", "saúde aparece."],
    subline: "Dermatologia em consultório próprio em Blumenau. Cada pele lida, cada lesão observada, cada tratamento pensado.",
    quote: '“A pele é o maior órgão do corpo. E o que mais conta histórias.”',
    primaryCta: { label: "AGENDAR CONSULTA", href: "https://wa.me/5547991156709" },
    secondaryCta: { label: "CONHECER A DRA", href: "#pratica" },
  },

  pratica: {
    eyebrow: "§ PRÁTICA",
    headlineLines: ["Quatro frentes,", "uma só leitura."],
    bio: [
      "Médica formada pela Universidade Regional de Blumenau (FURB), com especialização em Dermatologia pela Universidade de Santo Amaro (UNISA), em São Paulo. Membro da Sociedade Brasileira de Dermatologia.",
      "Atua em CEDERMA — Centro Dermatológico Alameda — em Blumenau, com prática nas quatro frentes da especialidade: clínica, cirúrgica, estética e oncológica.",
    ],
    bioMobile: "Médica formada pela FURB, com especialização em Dermatologia pela UNISA (São Paulo). Membro da Sociedade Brasileira de Dermatologia. Atua na CEDERMA, em Blumenau, nas quatro frentes da especialidade.",
    cards: [
      { num: "01", label: "CLÍNICA",    body: "Acne, melasma, rosácea, psoríase, dermatites e demais condições cutâneas." },
      { num: "02", label: "CIRÚRGICA",  body: "Remoção de lesões benignas e malignas, nevos, lipomas e biópsia diagnóstica." },
      { num: "03", label: "ESTÉTICA",   body: "Toxina botulínica, preenchimentos, bioestimuladores e Ultraformer (HIFU)." },
      { num: "04", label: "ONCOLÓGICA", body: "Avaliação especializada de lesões suspeitas e tratamento de câncer de pele." },
    ],
    credentials: [
      { num: "01", label: "FURB",  sub: "GRADUAÇÃO MEDICINA · 2017" },
      { num: "02", label: "UNISA", sub: "ESPECIALIZAÇÃO DERMATO SP · 2021" },
      { num: "03", label: "SBD",   sub: "TÍTULO DE ESPECIALISTA" },
    ],
  },

  tecnologia: {
    eyebrow: "§ TECNOLOGIA",
    headlineLines: ["Ultraformer", "e dermatoscopia."],
    photoCaption: "ULTRAFORMER HIFU  ·  TERÇO INFERIOR DO ROSTO",
    photoCaptionMobile: "ULTRAFORMER HIFU  ·  TERÇO INFERIOR",
    paragraphs: [
      "Ultraformer (HIFU) — lifting facial não-invasivo de última geração. Estimula colágeno em camadas profundas da pele com ultrassom focalizado.",
      "Dermatoscopia digital — diagnóstico por imagem de lesões suspeitas. Acompanhamento longitudinal de nevos atípicos e detecção precoce de câncer de pele.",
    ],
    quote: '"Equipamentos em consultório, sem peregrinação por centros externos."',
  },

  presenca: {
    eyebrow: "§ PRESENÇA",
    headlineLines: ["Em palco,", "em consultório."],
    reconhecimento: {
      subhead: "/ RECONHECIMENTO",
      paragraph: "Membro ativa da Sociedade Brasileira de Dermatologia. Participação contínua em congressos nacionais e atualização clínica permanente.",
    },
    atendimento: {
      subhead: "/ ATENDIMENTO",
      onde: [
        "Alameda Rio Branco, 477 — 3º.",
        "Jardim Blumenau · Blumenau/SC.",
        "CEDERMA — Centro Dermatológico.",
      ],
      como: [
        "Particular.",
        "Unimed (sob consulta).",
        "Agenda individual e tempo dedicado.",
      ],
    },
    note: "ATENDIMENTO ADULTOS  ·  SEM TELECONSULTA — EXAME REQUER PRESENÇA FÍSICA.",
  },

  contato: {
    eyebrow: "§ CONTATO",
    headlineLines: ["Vamos", "conversar."],
    accent: "blumenau · ao seu tempo.",
    body: "Agende sua consulta pelo WhatsApp. Resposta no mesmo dia útil.",
    cta: { label: "AGENDAR PELO WHATSAPP", href: "https://wa.me/5547991156709" },
    phoneLine: "(47) 99115-6709",
    phoneLabel: "DIRETO COM A DOUTORA",
    socials: [
      { label: "@amandafistarol",       href: "https://instagram.com/amandafistarol" },
      { label: "amandafistarol.com.br", href: "https://amandafistarol.com.br" },
    ],
    fixedNote: "(47) 3326-5232  ·  fixo CEDERMA",
  },

  footer: {
    logo: "Dra. Amanda",
    logoSub: "DERMATOLOGIA",
    dados: [
      "CRM 24.614 SC  ·  RQE 20.197",
      "ALAMEDA RIO BRANCO, 477 — 3º",
      "JARDIM BLUMENAU",
      "BLUMENAU/SC  ·  CEP 89010-301",
      "CEDERMA — CENTRO DERMATOLÓGICO",
    ],
    navegar: ["PRÁTICA", "TECNOLOGIA", "PRESENÇA", "CONTATO"],
    redes: ["@AMANDAFISTAROL", "AMANDAFISTAROL.COM.BR", "WHATSAPP (47) 99115-6709", "FIXO (47) 3326-5232"],
    copyright: "©  2026  DRA. AMANDA PRISCILA FISTAROL  ·  TODOS OS DIREITOS RESERVADOS",
    credit: "SITE POR NASHPAGES",
  },
} as const;
