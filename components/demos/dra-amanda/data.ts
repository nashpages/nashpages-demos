// Dados da demo Dra. Amanda Fistarol — Rouge Editorial v4 (cream warm + carmim fashion).
// Layout: HORIZONTAL SCROLL (Mubi/Stripe Press vibe).

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

export const AMANDA_DATA = {
  whatsapp: "https://wa.me/5547991156709",
  whatsappPhone: "(47) 99115-6709",
  fixedPhone: "(47) 3326-5232",
  instagram: "https://instagram.com/amandafistarol",
  photoHero: "/demos/dra-amanda-fistarol/retrato-hero.jpg",
  photoPalestra: "/demos/dra-amanda-fistarol/palestra.jpg",
  photoCongresso: "/demos/dra-amanda-fistarol/congresso.jpg",
  photoUltraformer: "/demos/dra-amanda-fistarol/ultraformer.jpg",
  photoProcedimento: "/demos/dra-amanda-fistarol/procedimento-abdomen.jpg",

  identity: {
    nameLines: ["Dra. Amanda", "Fistarol."],
    eyebrow: "/  DERMATOLOGIA",
    crmRqe: "CRM 24.614 SC  ·  RQE 20.197",
    areas: ["CLÍNICA", "CIRÚRGICA", "ESTÉTICA", "ONCOLÓGICA"],
  },

  nav: {
    logo: "NASHPAGES DEMO",
    links: [
      { label: "SOBRE",       href: "#sobre" },
      { label: "TRATAMENTOS", href: "#tratamentos" },
      { label: "AGENDA",      href: "#atendimento" },
      { label: "CONTATO",     href: "#contato" },
    ],
  },

  sections: [
    {
      id: "manifesto",
      num: "01",
      label: "MANIFESTO",
      eyebrow: "§ 01  /  MANIFESTO",
      headlineLines: ["Pele é onde a", "saúde aparece."],
      subline: "Dermatologia clínica, cirúrgica, estética e oncológica em consultório próprio em Blumenau. Cada pele lida, cada lesão observada, cada tratamento pensado.",
      quote: "“A pele é o maior órgão do corpo. E o que mais conta histórias.”",
      quoteAttribution: "— DRA. AMANDA FISTAROL",
      primaryCta: { label: "AGENDAR CONSULTA", href: "https://wa.me/5547991156709" },
      secondaryCta: { label: "CONHECER A DRA", href: "#sobre" },
    },
    {
      id: "sobre",
      num: "02",
      label: "SOBRE",
      eyebrow: "§ 02  /  SOBRE A DRA",
      headlineLines: ["Quatro frentes,", "um só olhar."],
      quoteLines: ["“Cada caso tem", "sua própria", "leitura.”"],
      quoteAttribution: "— DRA. AMANDA FISTAROL",
      bio: [
        "Médica formada pela Universidade Regional de Blumenau (FURB), com especialização em Dermatologia pela Universidade de Santo Amaro (UNISA), em São Paulo. Membro da Sociedade Brasileira de Dermatologia.",
        "Atua em CEDERMA — Centro Dermatológico Alameda — em Blumenau, com prática nas quatro frentes da especialidade: clínica, cirúrgica, estética e oncológica.",
      ],
      credentials: [
        { num: "01", label: "FURB",  sub: "GRADUAÇÃO MEDICINA · 2017" },
        { num: "02", label: "UNISA", sub: "ESPECIALIZAÇÃO DERMATO SP · 2021" },
        { num: "03", label: "SBD",   sub: "TÍTULO DE ESPECIALISTA" },
      ],
    },
    {
      id: "tratamentos",
      num: "03",
      label: "TRATAMENTOS",
      eyebrow: "§ 03  /  TRATAMENTOS",
      headlineLines: ["Quatro frentes", "da pele."],
      cards: [
        { num: "01", label: "CLÍNICA",    body: "Acne, melasma, rosácea, psoríase, dermatites e demais condições cutâneas." },
        { num: "02", label: "CIRÚRGICA",  body: "Remoção de lesões benignas e malignas, nevos, lipomas e biópsia diagnóstica." },
        { num: "03", label: "ESTÉTICA",   body: "Toxina botulínica, preenchimentos com ácido hialurônico, bioestimuladores e Ultraformer (HIFU)." },
        { num: "04", label: "ONCOLÓGICA", body: "Avaliação de lesões suspeitas. Dermatoscopia e tratamento de câncer de pele." },
      ],
    },
    {
      id: "tecnologia",
      num: "04",
      label: "TECNOLOGIA",
      eyebrow: "§ 04  /  TECNOLOGIA",
      headlineLines: ["Ultraformer", "e dermatoscopia."],
      photoCaption: "ULTRAFORMER HIFU  ·  TERÇO INFERIOR DO ROSTO",
      paragraphs: [
        "Ultraformer (HIFU) — lifting facial não-invasivo de última geração. Estimula colágeno em camadas profundas da pele com ultrassom focalizado.",
        "Dermatoscopia digital — diagnóstico por imagem de lesões suspeitas. Detecção precoce de câncer de pele.",
      ],
      note: "Equipamentos em consultório, sem peregrinação por centros externos.",
    },
    {
      id: "reconhecimento",
      num: "05",
      label: "RECONHECIMENTO",
      eyebrow: "§ 05  /  RECONHECIMENTO",
      headlineLines: ["Em palco.", "Em congresso."],
      paragraph: "Membro ativa da Sociedade Brasileira de Dermatologia. Participação contínua em congressos nacionais, palestras e atualização clínica permanente.",
      note: "Dermatologia é uma área que muda a cada ano. A presença em eventos científicos não é vaidade — é o que mantém a prática atualizada.",
    },
    {
      id: "atendimento",
      num: "06",
      label: "ATENDIMENTO",
      eyebrow: "§ 06  /  ATENDIMENTO",
      headlineLines: ["Onde,", "e como."],
      onde: [
        "Alameda Rio Branco, 477 — 3º andar.",
        "Jardim Blumenau · Blumenau/SC.",
        "CEP 89010-301.",
        "CEDERMA — Centro Dermatológico Alameda.",
      ],
      como: [
        "Particular.",
        "Unimed (sob consulta).",
        "Agenda individual e tempo dedicado.",
        "Avaliação completa na primeira consulta.",
      ],
      note: "Atendimento adultos. Sem teleconsulta — exame dermatológico requer presença física.",
    },
    {
      id: "contato",
      num: "07",
      label: "CONTATO",
      eyebrow: "§ 07  /  CONTATO",
      headlineLines: ["Vamos", "conversar."],
      accent: "blumenau · ao seu tempo.",
      body: "Agende sua consulta pelo WhatsApp. Resposta no mesmo dia útil.",
      cta: { label: "AGENDAR PELO WHATSAPP", href: "https://wa.me/5547991156709" },
      phoneLine: "(47) 99115-6709",
      phoneLabel: "DIRETO COM A DOUTORA",
      socials: [
        { label: "@amandafistarol", href: "https://instagram.com/amandafistarol" },
        { label: "amandafistarol.com.br", href: "https://amandafistarol.com.br" },
      ],
      fixedNote: "(47) 3326-5232  ·  fixo CEDERMA",
    },
  ],

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
    navegar: ["SOBRE", "TRATAMENTOS", "TECNOLOGIA", "CONTATO"],
    redes: ["@AMANDAFISTAROL", "AMANDAFISTAROL.COM.BR", "WHATSAPP (47) 99115-6709", "FIXO (47) 3326-5232"],
    copyright: "©  2026  DRA. AMANDA PRISCILA FISTAROL  ·  TODOS OS DIREITOS RESERVADOS",
    credit: "SITE POR NASHPAGES",
  },
} as const;
