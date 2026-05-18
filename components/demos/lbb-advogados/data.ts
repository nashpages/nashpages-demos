// Dados da demo LBB Advogados — Institucional Atlas (premium law firm warm gray + navy)

export const LBB_PALETTE = {
  papel: "#F7F6F4",
  pedra: "#ECEBE7",
  tinta: "#0E1A2C",
  neblina: "#5C6470",
  linha: "#D4D2CC",
  accent: "#1E3A5F",
  accentDeep: "#0A1626",
  footerLinha: "#1F2E45",
  footerMuted: "#6E7B8E",
} as const;

export const LBB_DATA = {
  whatsapp: "https://wa.me/5547999999999", // placeholder até ter o real
  instagram: "https://instagram.com/lbbadvogados",
  instagramHandle: "@lbbadvogados",
  website: "lbbadvogados.adv.br",

  nav: {
    logo: "LBB",
    links: [
      { label: "O ESCRITÓRIO", href: "#sobre" },
      { label: "ÁREAS", href: "#areas" },
      { label: "EQUIPE", href: "#equipe" },
      { label: "CONTATO", href: "#contato" },
    ],
    ctaShort: { label: "FALAR", href: "#contato" },
  },

  hero: {
    photos: [
      "/demos/lbb-advogados/hero-02-pillars.jpg",
      "/demos/lbb-advogados/hero-01-columns.jpg",
      "/demos/lbb-advogados/hero-03-library.jpg",
      "/demos/lbb-advogados/hero-04-boardroom.jpg",
      "/demos/lbb-advogados/hero-05-signing.jpg",
    ],
    logoMain: "LBB",
    logoFull: "Lins, Bittencourt & Bellaver",
    tagline: "ADVOGADOS · BALNEÁRIO CAMBORIÚ · DESDE 1989",
    explore: "EXPLORE",
  },

  sobre: {
    eyebrow: "O ESCRITÓRIO",
    quoteLines: ["Somos feitos", "de pessoas", "para pessoas."],
    stats: [
      { num: "1989", label: "INÍCIO DA TRAJETÓRIA", body: "Armando Lins Júnior começou a advogar em Balneário Camboriú no fim dos anos 80." },
      { num: "2001", label: "FUNDAÇÃO FORMAL", body: "Sociedade Lins, Bittencourt & Advogados Associados — OAB/SC nº 592/2001." },
      { num: "35+", label: "ANOS DE EXPERIÊNCIA", body: "Reconhecido pelo prêmio Os Melhores do Mercosul 2000." },
    ],
  },

  areas: {
    eyebrow: "ÁREAS DE ATUAÇÃO",
    headlineLines: ["Seis frentes,", "uma só doutrina."],
    list: [
      { num: "§03.1", nameLines: ["Direito", "Empresarial"], desc: "Sociedades e obrigações de empresários, contratos especiais de comércio, títulos de crédito e propriedade intelectual." },
      { num: "§03.2", nameLines: ["Direito", "Tributário"], desc: "Contencioso e planejamento tributário. Assessoria em gestão tributária para pessoas físicas e jurídicas." },
      { num: "§03.3", nameLines: ["Direito do", "Trabalho"], desc: "Defesa patronal e assessoria de interesses laborais conforme CLT, Constituição e legislação pertinente." },
      { num: "§03.4", nameLines: ["Direito", "Civil"], desc: "Relações privadas entre cidadãos. Vínculos pessoais, patrimoniais e proteção de interesses morais." },
      { num: "§03.5", nameLines: ["Direito", "Imobiliário"], desc: "Propriedade, condominial, usucapião, compra e venda, incorporação imobiliária e direito de vizinhança." },
      { num: "§03.6", nameLines: ["Direito Médico", "e Hospitalar"], desc: "Assessoria a profissionais da saúde, clínicas e hospitais. Equilíbrio paciente-médico-hospital." },
    ],
  },

  historia: {
    eyebrow: "HISTÓRIA",
    headlineLines: ["Trinta e cinco anos", "de advocacia."],
    milestones: [
      { year: "1989", label: "Trajetória inicia", body: "Armando Lins Júnior começa a advogar em Balneário Camboriú." },
      { year: "2000", label: "Prêmio Mercosul", body: "Os Melhores do Mercosul 2000. Reconhecimento regional." },
      { year: "2001", label: "Fundação OAB/SC", body: "Constituição formal. OAB/SC nº 592/2001." },
      { year: "2011", label: "Sócio Bellaver", body: "Pedro Henrique Bellaver ascende a sócio." },
      { year: "2018", label: "LBB consolidado", body: "Razão social atualizada: Lins, Bittencourt & Bellaver." },
    ],
    footnote: "Mais de três décadas defendendo interesses de empresas, famílias e profissionais em Santa Catarina.",
  },

  equipe: {
    eyebrow: "EQUIPE",
    headline: "Os sócios.",
    partners: [
      { name: "Armando Lins Júnior", oab: "OAB/SC 6.162", form: "UNIVALI · 1987 · advoga desde 1988", spec: "Direito Empresarial · Conselheiro OAB/SC 2010-2012 · Presidente Subseção BC 2007-2009" },
      { name: "Charles Bittencourt Vieira", oab: "OAB/SC 11.753", form: "UNIVALI · 1996 · advoga desde 1996", spec: "Direito Tributário · Tribunal de Ética OAB/SC 2010-2012" },
      { name: "Pedro Henrique Bellaver", oab: "OAB/SC 29.567", form: "UNIVALI · 2009 · sócio desde 2011", spec: "Direito Público · participações em congressos OAB" },
      { name: "Maria Luyhza Becker Lins", oab: "OAB/SC 43.175", form: "UNIVALI · 2015 · sócia desde 2018", spec: "Direito Civil · intercâmbio Université Lille 1 (França, 2010-2011)" },
    ],
  },

  contato: {
    eyebrow: "CONTATO",
    headlineLines: ["Vamos", "conversar."],
    subline: "Atendemos por agendamento. Resposta no mesmo dia útil.",
    cta: { label: "Falar com a equipe LBB", href: "#" },
    address: "RUA 904, Nº 960  ·  CENTRO  ·  BALNEÁRIO CAMBORIÚ/SC",
  },

  footer: {
    blocks: [
      {
        label: "PRINCÍPIO",
        lines: [
          { text: "Lins, Bittencourt & Bellaver", bold: true },
          { text: "Advogados Associados" },
          { text: "OAB/SC nº 592/2001" },
          { text: "Desde 1989" },
        ],
      },
      {
        label: "ENDEREÇO",
        lines: [
          { text: "Rua 904, nº 960", bold: true },
          { text: "Centro" },
          { text: "Balneário Camboriú · SC" },
        ],
      },
      {
        label: "CONTATO",
        lines: [
          { text: "lbbadvogados.adv.br", bold: true },
          { text: "@lbbadvogados" },
          { text: "Atendimento por agendamento" },
        ],
      },
      {
        label: "PROJETO",
        lines: [
          { text: "Institucional Atlas", bold: true },
          { text: "© 2026" },
          { text: "Site por Nashpages" },
        ],
      },
    ],
    bottomLogo: "Lins, Bittencourt & Bellaver Advogados",
    bottomTag: "ADVOCACIA EM BALNEÁRIO CAMBORIÚ",
  },
} as const;

export type LBBData = typeof LBB_DATA;
