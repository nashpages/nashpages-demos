// Dados da demo Dra. Derize Salles — Atemporal Aldeota (champagne quente + bronze fosco).

export const DERIZE_PALETTE = {
  papel: "#F5F1E8",
  pedra: "#ECE5D5",
  tinta: "#2A2520",
  neblina: "#6F6557",
  linha: "#DDD0B6",
  accent: "#9C7F4F",
  accentDeep: "#5C4A2D",
  footerLinha: "#7A6B47",
  footerMuted: "#C9BE9F",
} as const;

export const DERIZE_DATA = {
  whatsapp: "https://wa.me/5585986568823",
  whatsappShort: "(85) 98656-8823",
  phone: "(85) 3267-8822",
  instagram: "https://instagram.com/draderizesalles.dermato",
  instagramHandle: "@draderizesalles.dermato",

  nav: {
    logo: "Dra. Derize",
    links: [
      { label: "SOBRE",        href: "#sobre" },
      { label: "FRENTES",      href: "#frentes" },
      { label: "ATENDIMENTO",  href: "#atendimento" },
      { label: "CONTATO",      href: "#contato" },
    ],
    cta: { label: "AGENDAR", href: "https://wa.me/5585986568823" },
  },

  hero: {
    photo: "/demos/dra-derize-salles/derize-hero.png",
    eyebrow: "DRA. DERIZE SALLES",
    headlineLines: ["Cuidado da pele,", "com elegância."],
    subline: "Dermatologia em Fortaleza. Atendimento no Pátio Dom Luís, Aldeota.",
    marginalia: "CRM-CE 6170  ·  RQE 4891  ·  FORTALEZA/CE",
  },

  sobre: {
    eyebrow: "SOBRE A DRA. DERIZE",
    photo: "/demos/dra-derize-salles/derize-quote.png",
    headlineLines: ["Olhar atento", "à pele, em cada", "fase."],
    bio: [
      "Dermatologista em Fortaleza, com consultório no Pátio Dom Luís, Aldeota. Atende dermatologia clínica, estética e oncológica preventiva — com olhar especial para a pele que amadurece.",
      "Pratica uma medicina que respeita o tempo de cada paciente: rejuvenescimento sem caricatura, técnica sem pressa, tratamento personalizado.",
    ],
    credenciais: [
      { label: "CRM-CE", val: "6170" },
      { label: "RQE",    val: "4891" },
      { label: "ATENDE", val: "Particular · Unimed" },
    ],
  },

  frentes: {
    eyebrow: "FRENTES DE ATUAÇÃO",
    headlineLines: ["Cinco frentes,", "uma só prática."],
    subline: "Atenção à pele em todas as fases — feminina, masculina, madura — e à prevenção que faz a diferença.",
    list: [
      { num: "§03.1", title: "Rejuvenescimento Facial",      body: "Cuidado integrado de face, pescoço, colo e mãos. Atemporalidade sem caricatura — protocolo personalizado por idade e biotipo." },
      { num: "§03.2", title: "Cuidado da Pele Madura",        body: "Manchas hormonais, queda capilar, ressecamento, perda de firmeza. Acompanhamento dermatológico durante a transição." },
      { num: "§03.3", title: "Dermatologia Masculina",        body: "Pele, capilar e prevenção pensados para o paciente masculino. Tratamentos discretos com resultados naturais." },
      { num: "§03.4", title: "Tricologia & Saúde Capilar",    body: "Investigação clínica das causas de queda. Alopecias, eflúvio, couro cabeludo sensível — diagnóstico antes do tratamento." },
      { num: "§03.5", title: "Oncologia Cutânea Preventiva",  body: "Avaliação e retirada de sinais com análise de risco. Biópsias quando necessário, com acompanhamento contínuo." },
    ],
  },

  tecnologia: {
    eyebrow: "EM CONSULTÓRIO",
    headlineLines: ["Tecnologia de ponta.", "Aplicada com critério."],
    list: [
      { name: "Ultraformer (HIFU)",  body: "Lifting não-invasivo com ultrassom microfocado. Pele, pescoço e colo." },
      { name: "Plasma IQ",           body: "Plasma fracionado pra rejuvenescimento de área periorbital, pálpebras e textura." },
      { name: "Laser SpectraXT",     body: "Melasma, manchas hormonais, rejuvenescimento, peeling fototérmico." },
      { name: "Preenchimentos",      body: "Ácido hialurônico para lábios, sulcos, contorno e harmonização sutil." },
      { name: "Toxina Botulínica",   body: "Aplicação personalizada — expressão preservada, não congelamento." },
      { name: "DS Estética",         body: "Linha própria de protocolos integrados com produtos selecionados." },
    ],
    signature: "Tudo no mesmo consultório — sem peregrinação por centros externos.",
  },

  atendimento: {
    eyebrow: "ATENDIMENTO",
    photo: "/demos/dra-derize-salles/derize-atendimento.png",
    headlineLines: ["Onde, e", "como."],
    onde: {
      label: "ONDE",
      title: "Pátio Dom Luís",
      lines: [
        "Av. Dom Luís, 1200 — Torre BUSINESS",
        "Salas 1006 / 1007 / 1103",
        "Aldeota · Fortaleza/CE",
        "CEP 60160-230",
      ],
    },
    como: {
      label: "COMO",
      title: "Quatro etapas",
      etapas: [
        "01  ·  Agendamento via WhatsApp",
        "02  ·  Avaliação dermatológica em consulta",
        "03  ·  Plano terapêutico personalizado",
        "04  ·  Acompanhamento contínuo",
      ],
    },
    note: "Particular · Unimed Fortaleza.",
  },

  contato: {
    eyebrow: "CONTATO",
    headlineLines: ["Vamos cuidar", "da sua pele."],
    subline: "Agendamento direto pelo WhatsApp. Resposta no mesmo dia útil. Conte comigo.",
    ctaWhatsapp: { label: "AGENDAR PELO WHATSAPP", href: "https://wa.me/5585986568823" },
    contatoLabel: "CONTATO DIRETO",
    signature: "Dra. Derize Salles · Dermatologia · Fortaleza",
    signatureNote: "ATENDIMENTO POR AGENDAMENTO",
  },

  footer: {
    blocks: [
      {
        label: "PRINCÍPIO",
        title: "Dra. Derize Salles",
        body: ["Dermatologia", "CRM-CE 6170 · RQE 4891", "Atendimento por agendamento"],
      },
      {
        label: "ONDE",
        title: "Pátio Dom Luís",
        body: ["Av. Dom Luís, 1200", "Salas 1006 / 1007 / 1103", "Aldeota · Fortaleza/CE", "CEP 60160-230"],
      },
      {
        label: "CONTATO",
        title: "(85) 98656-8823",
        body: ["WhatsApp", "(85) 3267-8822 · consultório", "@draderizesalles.dermato"],
      },
      {
        label: "PROJETO",
        title: "Atemporal Aldeota",
        body: ["© 2026", "Site por Nashpages"],
      },
    ],
    bottomLine: "© 2026  DRA. DERIZE SALLES  ·  DERMATOLOGIA EM FORTALEZA",
    bottomSignature: "SITE POR NASHPAGES",
  },
} as const;

export type DerizeData = typeof DERIZE_DATA;
