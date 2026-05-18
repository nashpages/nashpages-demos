// Dados da demo Dra. Elisangela Medeiros — Acolhimento Editorial (cream + verde-jade #4A6B5C).

export const ELISANGELA_PALETTE = {
  papel: "#F4F4EE",
  pedra: "#E8E9DF",
  tinta: "#1F2924",
  neblina: "#6A7068",
  linha: "#D5D8C8",
  accent: "#4A6B5C",
  accentDeep: "#2C443A",
  footerLinha: "#7A8775",
  footerMuted: "#BFCBB7",
} as const;

export const ELISANGELA_DATA = {
  whatsapp: "https://wa.me/5585991751962",
  whatsappShort: "(85) 99175-1962",
  phone: "(85) 99175-1962",
  instagram: "https://instagram.com/elisangelamedeirosdermato",
  instagramHandle: "@elisangelamedeirosdermato",

  nav: {
    logo: "Dra. Elisangela",
    links: [
      { label: "SOBRE",        href: "#sobre" },
      { label: "FRENTES",      href: "#frentes" },
      { label: "ATENDIMENTO",  href: "#atendimento" },
      { label: "CONTATO",      href: "#contato" },
    ],
    cta: { label: "AGENDAR", href: "https://wa.me/5585991751962" },
  },

  hero: {
    photo: "/demos/dra-elisangela-medeiros/elisangela-hero.png",
    eyebrow: "DRA. ELISANGELA MEDEIROS",
    headlineLines: ["Cada pessoa é única.", "Cada pele, escutada."],
    subline: "Dermatologia clínica, cirúrgica, estética e tricologia em Fortaleza.",
    marginalia: "CRM-CE 29844  ·  RQE 18195  ·  FORTALEZA/CE",
  },

  sobre: {
    eyebrow: "SOBRE A DRA. ELISANGELA",
    photo: "/demos/dra-elisangela-medeiros/elisangela-quote.png",
    headlineLines: ["Escutar antes", "de tratar."],
    bio: [
      "Dermatologista pelo Hospital das Clínicas da Universidade Federal de Pernambuco (HC-UFPE), com graduação em Medicina pela Universidade Pontiguar (UNP). Cosmiatria pela Bruna Bravo Academy. Multilingue — atende em português, inglês e francês.",
      "Pratica dermatologia clínica, cirúrgica, estética e tricologia em Fortaleza, com olhar individualizado para cada paciente, em todas as fases da vida — crianças, adultos e idosos.",
    ],
    credenciais: [
      { label: "CRM-CE", val: "29844" },
      { label: "RQE",    val: "18195" },
      { label: "IDIOMAS", val: "PT · EN · FR" },
    ],
  },

  frentes: {
    eyebrow: "FRENTES DE ATUAÇÃO",
    headlineLines: ["Quatro frentes,", "uma só prática."],
    subline: "Crianças, adultos e idosos — cada pele atendida no seu tempo, com diagnóstico antes do tratamento.",
    list: [
      { num: "§03.1", title: "Dermatologia Clínica",   body: "Avaliação, diagnóstico e acompanhamento de doenças da pele. Crianças, adultos e idosos." },
      { num: "§03.2", title: "Dermatologia Cirúrgica", body: "Pequenos procedimentos em consultório com anestesia local. Retirada de lesões e cirurgia ambulatorial." },
      { num: "§03.3", title: "Dermatologia Estética",  body: "Toxina botulínica, preenchimentos, bioestimuladores, fios PDO, lasers — resultados naturais sem caricatura." },
      { num: "§03.4", title: "Tricologia",             body: "Diagnóstico e tratamento de doenças capilares — alopecias, queda, couro cabeludo sensível. Investigação antes do tratamento." },
    ],
  },

  tecnologia: {
    eyebrow: "EM CONSULTÓRIO",
    headlineLines: ["Tecnologia atual.", "Aplicada com escuta."],
    list: [
      { name: "Toxina Botulínica",    body: "Aplicação personalizada — expressão preservada, não congelamento." },
      { name: "Preenchimentos",       body: "Ácido hialurônico para lábios, sulcos, contorno e harmonização sutil." },
      { name: "Bioestimuladores",     body: "Sculptra · Radiesse · Ellansé — estímulo de colágeno para firmeza prolongada." },
      { name: "MMP",                  body: "Microinfusão de medicamentos na pele — drug delivery preciso pra cada caso." },
      { name: "Lasers & Luz Pulsada", body: "Manchas, melasma, vasos, rejuvenescimento de textura e tom." },
      { name: "Fios PDO",             body: "Fios bioestimuladores para sustentação facial e bioestímulo de colágeno." },
    ],
    signature: "Cada procedimento individualizado — diagnóstico antes da indicação.",
  },

  atendimento: {
    eyebrow: "ATENDIMENTO",
    photo: "/demos/dra-elisangela-medeiros/elisangela-atendimento.png",
    headlineLines: ["Três endereços", "em Fortaleza."],
    subline: "Atendimento exclusivamente particular. Agendamento direto via WhatsApp.",
    enderecos: [
      { num: "01", name: "Clínica Biomed",          addr: "Rua Carlos Vasconcelos, 1921 · Aldeota", cep: "Fortaleza/CE · CEP 60115-171" },
      { num: "02", name: "Consultório Particular",  addr: "Av. Barão de Studart · Aldeota",         cep: "Fortaleza/CE" },
      { num: "03", name: "Grupo Clay",              addr: "Clínica multidisciplinar · @grupo.clay", cep: "Fortaleza/CE" },
    ],
    footnote: "+ teleconsulta disponível mediante agendamento.",
  },

  contato: {
    eyebrow: "CONTATO",
    headlineLines: ["Vamos cuidar", "da sua pele."],
    subline: "Agendamento direto pelo WhatsApp. Atendimento em três endereços em Fortaleza — Aldeota.",
    ctaWhatsapp: { label: "AGENDAR PELO WHATSAPP", href: "https://wa.me/5585991751962" },
    contatoLabel: "CONTATO DIRETO",
    signature: "Dra. Elisangela Medeiros · Dermatologia · Fortaleza",
    signatureNote: "PT  ·  EN  ·  FR  ·  ATENDIMENTO POR AGENDAMENTO",
  },

  footer: {
    blocks: [
      {
        label: "PRINCÍPIO",
        title: "Dra. Elisangela Medeiros",
        body: ["Dermatologia", "CRM-CE 29844 · RQE 18195", "PT · EN · FR", "Atendimento particular"],
      },
      {
        label: "ENDEREÇOS",
        title: "Aldeota · Fortaleza",
        body: ["Clínica Biomed · R. Carlos Vasconcelos, 1921", "Consultório · Av. Barão de Studart", "Grupo Clay · clínica multidisciplinar"],
      },
      {
        label: "CONTATO",
        title: "(85) 99175-1962",
        body: ["WhatsApp", "@elisangelamedeirosdermato", "Agendamento direto"],
      },
      {
        label: "PROJETO",
        title: "Acolhimento Editorial",
        body: ["© 2026", "Site por Nashpages"],
      },
    ],
    bottomLine: "© 2026  DRA. ELISANGELA MEDEIROS  ·  DERMATOLOGIA EM FORTALEZA",
    bottomSignature: "SITE POR NASHPAGES",
  },
} as const;

export type ElisangelaData = typeof ELISANGELA_DATA;
