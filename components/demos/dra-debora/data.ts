// Dados da demo Dra. Débora Soares — paleta concreto warm + verde musgo.

export const DEBORA_PALETTE = {
  pedra: "#ECE7DF",       // bg principal
  concreto: "#DDD7CC",    // bg alternância
  grafite: "#4A4943",     // texto principal
  nevoa: "#8B8983",       // texto secundário
  linha: "#D4CEC3",       // dividers sutis
  musgo: "#6B7355",       // accent ~5%
  footerBg: "#2E2D29",    // footer dark warm
  footerMuted: "#807C75", // footer texto secundário
  footerDivider: "#4A4943", // footer divider
} as const;

export const DEBORA_DATA = {
  whatsapp: "https://wa.me/5547996159443",
  whatsappPhone: "(47) 99615-9443",
  fixedPhone: "(47) 3326-5232",
  instagram: "https://instagram.com/adradeboradermato",

  nav: {
    logo: "DRA. DÉBORA",
    links: [
      { label: "SOBRE", href: "#sobre" },
      { label: "TRATAMENTOS", href: "#tratamentos" },
      { label: "CONSULTÓRIO", href: "#consultorio" },
      { label: "CONTATO", href: "#contato" },
    ],
  },

  hero: {
    eyebrow: "DERMATOLOGIA CLÍNICA, ESTÉTICA E CIRÚRGICA",
    headlineLines: ["Diagnóstico clínico", "para cada pele."],
    subline: "Dermatologia clínica, estética e cirúrgica. Atendimento particular em Blumenau.",
    primaryCta: { label: "AGENDAR CONSULTA", href: "https://wa.me/5547996159443" },
    secondaryCta: { label: "CONHECER A DRA", href: "#sobre" },
    // 4K real (3648×5472) — ela sorrindo em consulta, alta qualidade
    photo: "/demos/dra-debora-soares/atendendo.jpg",
    meta: [
      "BLUMENAU · SC",
      "CEDERMA · ALAMEDA RIO BRANCO 477",
      "CRM 17.319 SC · RQE 16.610",
      "UERJ · HUPE · SBD",
    ],
  },

  sobre: {
    eyebrow: "§ 02  /  SOBRE A DRA. DÉBORA",
    headlineLines: ["Uma médica", "com dupla", "competência."],
    quote: {
      lines: ["Diagnosticar", "é o primeiro", "tratamento."],
      attribution: "— DRA. DÉBORA SOARES",
    },
    bio: [
      "Médica pela Universidade Regional de Blumenau (FURB), com residência em Clínica Médica antes da pós-graduação em Dermatologia no Hospital Universitário Pedro Ernesto da UERJ. Especialista pela Sociedade Brasileira de Dermatologia.",
      "Atende na CEDERMA — Centro Dermatológico Alameda — em Blumenau, com prática nas três frentes da especialidade: clínica, estética e cirúrgica. Atendimento exclusivamente particular.",
    ],
  },

  uerj: {
    eyebrow: "FORMAÇÃO  ·  UERJ — HOSPITAL UNIVERSITÁRIO PEDRO ERNESTO",
    eyebrowMobile: "FORMAÇÃO  ·  UERJ — HUPE",
    headlineLines: ["Especialização", "no Rio."],
    body: [
      "Pós-graduação em Dermatologia no Hospital Universitário Pedro Ernesto (HUPE), vinculado à Universidade do Estado do Rio de Janeiro (UERJ). Três anos (2016–2019) em um dos serviços de dermatologia mais respeitados do país.",
      "Título de Especialista pela Sociedade Brasileira de Dermatologia. Antes da pós, residência em Clínica Médica — o que dá à prática dermatológica o fundamento clínico que poucos especialistas em estética têm.",
    ],
    photo: "/demos/dra-debora-soares/retrato-quote.jpg",
    credentials: [
      { num: "01", label: "UERJ",  sub: "UNIVERSIDADE DO ESTADO DO RJ" },
      { num: "02", label: "HUPE",  sub: "HOSPITAL UNIV. PEDRO ERNESTO" },
      { num: "03", label: "SBD",   sub: "TÍTULO DE ESPECIALISTA" },
    ],
  },

  tratamentos: {
    eyebrow: "§ 03  /  TRATAMENTOS",
    headlineLines: ["Três frentes,", "uma só médica."],
    cards: [
      {
        num: "01",
        label: "CLÍNICA",
        body: "Acne, melasma, rosácea, psoríase, alopecia, dermatites e demais condições cutâneas. Diagnóstico clínico aprofundado antes do tratamento — não pacote estético.",
      },
      {
        num: "02",
        label: "ESTÉTICA",
        body: "Toxina botulínica, preenchimentos com ácido hialurônico, bioestimuladores, skinboosters e peelings químicos. Resultado natural, sem exagero.",
      },
      {
        num: "03",
        label: "CIRÚRGICA",
        body: "Remoção de lesões benignas e malignas, nevos, lipomas e biópsia diagnóstica. Cirurgia ambulatorial com técnica precisa.",
      },
    ],
  },

  consultorio: {
    eyebrow: "§ 04  /  CONSULTÓRIO",
    headlineLines: ["Consultório próprio", "em Blumenau."],
    body: "Diagnóstico, tratamento e acompanhamento na CEDERMA — Centro Dermatológico Alameda — em pleno centro de Blumenau. Atendimento exclusivamente particular, com agenda própria e tempo dedicado por consulta.",
    photo: "/demos/dra-debora-soares/fachada-cederma.jpg",
    specs: [
      { num: "01", label: "CEDERMA",       sub: "CENTRO DERMATOLÓGICO ALAMEDA · BLUMENAU", subMobile: "CENTRO DERMATOLÓGICO ALAMEDA" },
      { num: "02", label: "SANTA ISABEL",  sub: "AFILIAÇÃO HOSPITALAR BLUMENAU", subMobile: "AFILIAÇÃO HOSPITALAR BLUMENAU" },
      { num: "03", label: "PARTICULAR",    sub: "ATENDIMENTO EXCLUSIVO SEM CONVÊNIOS", subMobile: "ATENDIMENTO EXCLUSIVO" },
    ],
  },

  atendimento: {
    eyebrow: "§ 05  /  ATENDIMENTO",
    headlineLines: ["Onde,", "e como."],
    onde: [
      "Alameda Rio Branco, 477 — 4º andar.",
      "Jardim Blumenau · Blumenau/SC.",
      "CEP 89010-300.",
      "Próximo ao Hospital Santa Isabel.",
    ],
    como: [
      "Particular exclusivo.",
      "Agenda individual e tempo dedicado por consulta.",
      "Avaliação completa na primeira consulta.",
      "Sem convênios.",
    ],
    comoMobile: [
      "Particular exclusivo.",
      "Agenda individual e tempo dedicado.",
      "Avaliação completa na 1ª consulta.",
      "Sem convênios.",
    ],
  },

  contato: {
    eyebrow: "§ 06  /  CONTATO",
    headlineLines: ["Vamos", "conversar."],
    accent: "blumenau · ao seu tempo.",
    body: "Agende sua consulta pelo WhatsApp. Resposta no mesmo dia útil.",
    cta: { label: "AGENDAR PELO WHATSAPP", href: "https://wa.me/5547996159443" },
    phoneLine: "(47) 99615-9443",
    phoneLabel: "DIRETO COM A DOUTORA",
    socials: [
      { label: "@adradeboradermato", href: "https://instagram.com/adradeboradermato" },
      { label: "cederma.com.br", href: "https://cederma.com.br" },
    ],
    fixedNote: "(47) 3326-5232  ·  fixo CEDERMA",
  },

  footer: {
    logo: "Dra. Débora",
    logoSub: "DERMATOLOGIA",
    dados: [
      "CRM 17.319 SC  ·  RQE 16.610",
      "ALAMEDA RIO BRANCO, 477 — 4º",
      "JARDIM BLUMENAU",
      "BLUMENAU/SC  ·  CEP 89010-300",
      "CEDERMA — CENTRO DERMATOLÓGICO",
    ],
    dadosMobile: [
      "CRM 17.319 SC  ·  RQE 16.610",
      "ALAMEDA RIO BRANCO, 477 — 4º",
      "JARDIM BLUMENAU  ·  BLUMENAU/SC",
      "CEP 89010-300",
    ],
    navegar: ["SOBRE", "TRATAMENTOS", "CONSULTÓRIO", "ATENDIMENTO", "CONTATO"],
    navegarMobile: ["SOBRE", "TRATAMENTOS", "CONSULTÓRIO", "CONTATO"],
    redes: ["@ADRADEBORADERMATO", "CEDERMA.COM.BR", "WHATSAPP (47) 99615-9443", "FIXO (47) 3326-5232"],
    redesMobile: ["@ADRADEBORADERMATO", "CEDERMA.COM.BR", "(47) 99615-9443", "(47) 3326-5232"],
    copyright: "©  2026  DRA. DÉBORA BERGAMI ROSA SOARES  ·  TODOS OS DIREITOS RESERVADOS",
    copyrightMobile: ["©  2026  DRA. DÉBORA BERGAMI ROSA SOARES", "TODOS OS DIREITOS RESERVADOS"],
    credit: "SITE POR NASHPAGES",
  },
} as const;

export type DeboraData = typeof DEBORA_DATA;
