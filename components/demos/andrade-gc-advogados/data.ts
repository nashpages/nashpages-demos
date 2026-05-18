// Dados da demo Andrade GC Advogados — Northern Atlas (premium law firm warm gray + teal #0B3A4F)

export const ANDRADEGC_PALETTE = {
  papel: "#F4F2EE",
  pedra: "#EBE8E2",
  tinta: "#0B3A4F",
  neblina: "#5C6470",
  linha: "#D6D2CA",
  accent: "#0D5F73",
  accentDeep: "#051E2A",
  footerLinha: "#1F2E45",
  footerMuted: "#6E7B8E",
} as const;

export const ANDRADEGC_DATA = {
  whatsapp: "https://wa.me/559221264649", // placeholder — fixo Manaus até ter WhatsApp real
  instagram: "https://instagram.com/andradegcadv",
  instagramHandle: "@andradegcadv",
  website: "andradegc.com.br",

  nav: {
    logo: "Andrade GC",
    links: [
      { label: "O ESCRITÓRIO", href: "#sobre" },
      { label: "ATUAÇÃO", href: "#areas" },
      { label: "EQUIPE", href: "#equipe" },
      { label: "CONTATO", href: "#contato" },
    ],
    ctaShort: { label: "FALAR", href: "#contato" },
  },

  hero: {
    photos: [
      "/demos/andrade-gc-advogados/hero-02-pillars.jpg",
      "/demos/andrade-gc-advogados/hero-01-columns.jpg",
      "/demos/andrade-gc-advogados/hero-03-library.jpg",
      "/demos/andrade-gc-advogados/hero-04-boardroom.jpg",
      "/demos/andrade-gc-advogados/hero-05-signing.jpg",
    ],
    logoMain: "GC",
    logoFull: "Andrade GC Advogados",
    tagline: "MANAUS · BRASÍLIA · DESDE 1997",
    explore: "EXPLORE",
  },

  sobre: {
    eyebrow: "O ESCRITÓRIO",
    quoteLines: ["Da Zona Franca", "ao STF."],
    stats: [
      { num: "1997", label: "INÍCIO DA TRAJETÓRIA", body: "Fundado em Manaus por Germano Costa Andrade. Empresarial e tributário para empresas com investimentos no Norte." },
      { num: "Band 1", label: "CHAMBERS BRASIL DESDE 2019", body: "Único advogado do Amazonas em Band 1 do guia mais prestigioso da advocacia mundial." },
      { num: "500+", label: "RECUPERAÇÕES TRIBUTÁRIAS", body: "Casos de recuperação e isenção fiscal nos últimos cinco anos. Foco em Zona Franca de Manaus." },
    ],
  },

  areas: {
    eyebrow: "ÁREAS DE ATUAÇÃO",
    headlineLines: ["Seis frentes.", "Tributário no eixo."],
    list: [
      { num: "§03.1", nameLines: ["Direito", "Tributário"], desc: "Contencioso e planejamento tributário. Foco em Zona Franca de Manaus — recuperação e isenção fiscal estratégica. Liderança ranqueada em Band 1 Chambers." },
      { num: "§03.2", nameLines: ["Empresarial", "e Societário"], desc: "Sociedades, contratos comerciais, M&A, propriedade intelectual. Assessoria a empresas brasileiras e estrangeiras com investimento no Norte." },
      { num: "§03.3", nameLines: ["Direito", "Imobiliário"], desc: "Compra e venda, incorporação, condominial, usucapião. Referência reconhecida no mercado imobiliário de Manaus." },
      { num: "§03.4", nameLines: ["Direito", "Trabalhista"], desc: "Defesa patronal e assessoria laboral. Litígio estratégico conforme CLT, Constituição e legislação pertinente." },
      { num: "§03.5", nameLines: ["Cível", "e Contratos"], desc: "Relações privadas, contratos, danos morais e materiais, consumidor. Proteção de patrimônio e interesses." },
      { num: "§03.6", nameLines: ["Criminal", "Empresarial"], desc: "Defesa em investigações corporativas, compliance e crimes econômicos. Atuação preventiva e contenciosa." },
    ],
  },

  historia: {
    eyebrow: "HISTÓRIA",
    headlineLines: ["Vinte e oito anos", "no Norte."],
    milestones: [
      { year: "1997", label: "Trajetória inicia", body: "Andrade GC Advogados é fundado em Manaus." },
      { year: "2010", label: "Associação OAB/AM", body: "Em associação com Dias dos Santos — OAB/AM 010-K/2010." },
      { year: "2019", label: "Band 1 Chambers", body: "Germano Costa Andrade entra no Band 1 — único do AM." },
      { year: "2023", label: "Reconhecimentos", body: "Análise Advocacia 500 + Great Place to Work." },
      { year: "2026", label: "28 anos consolidados", body: "Manaus + Brasília. Tributário, empresarial, imobiliário." },
    ],
    footnote: "Quase três décadas de advocacia empresarial no Norte. Manaus, Brasília, presença federal.",
  },

  equipe: {
    eyebrow: "EQUIPE",
    headlineLines: ["Treze sócios.", "Um direcionador."],
    spotlight: {
      title: "SÓCIO FUNDADOR",
      name: "Germano Costa Andrade",
      monogram: "GCA",
      photoLabel: "FOTO A INSERIR",
      badge: "★ CHAMBERS BAND 1  ·  BRASIL DESDE 2019",
      bio: "Único advogado do Amazonas em Band 1 do Chambers and Partners desde 2019. Líder de estratégia em tributário, contencioso administrativo e direito da Zona Franca de Manaus. Responsável pelo posicionamento institucional do escritório.",
    },
    othersLabel: "OS DEMAIS DOZE SÓCIOS",
    others: [
      "Aline Ferraz Tavares",
      "Angélica Ortiz Ribeiro",
      "Armando Cláudio Dias dos Santos Junior",
      "Carolina Ribeiro Botelho",
      "Carlos Murilo Laredo Souza",
      "Fábio Loureiro Guerreiro",
      "Keyth Yara Pontes Pina",
      "Lucianna de Souza Silva",
      "Luís Henrique Medeiros da Silva",
      "Mauro Couto da Cunha",
      "Raphaela Batista de Oliveira",
      "Victor Bastos da Costa",
    ],
  },

  contato: {
    eyebrow: "CONTATO",
    headlineLines: ["Vamos", "conversar."],
    subline: "Empresas com operação no Norte e em Brasília. Resposta no mesmo dia útil.",
    cta: { label: "Falar com a equipe", href: "https://wa.me/559221264649" },
    addresses: [
      {
        label: "MANAUS",
        title: "Rua Salvador, 460",
        lines: ["Adrianópolis · 69057-040", "Manaus · AM", "Tel (92) 2126-4649"],
      },
      {
        label: "BRASÍLIA",
        title: "SCN Qd. 4 Bl. B-100",
        lines: ["Sala 1201 · Centro Empresarial Varig", "70714-900 · Brasília · DF", "Tel (61) 3533-6403"],
      },
    ],
  },

  footer: {
    blocks: [
      {
        label: "PRINCÍPIO",
        lines: [
          { text: "Andrade GC Advogados", bold: true },
          { text: "Associados" },
          { text: "Desde 1997" },
          { text: "Em associação com Dias dos Santos" },
        ],
      },
      {
        label: "MANAUS",
        lines: [
          { text: "Rua Salvador, 460", bold: true },
          { text: "Adrianópolis · 69057-040" },
          { text: "Manaus · AM" },
          { text: "Tel (92) 2126-4649" },
        ],
      },
      {
        label: "BRASÍLIA",
        lines: [
          { text: "SCN Qd. 4 Bl. B-100", bold: true },
          { text: "Sala 1201 · Centro Emp. Varig" },
          { text: "70714-900 · Brasília · DF" },
          { text: "Tel (61) 3533-6403" },
        ],
      },
      {
        label: "PROJETO",
        lines: [
          { text: "Northern Atlas", bold: true },
          { text: "© 2026" },
          { text: "Site por Nashpages" },
        ],
      },
    ],
    bottomLogo: "Andrade GC Advogados",
    bottomTag: "ADVOCACIA EMPRESARIAL DESDE 1997",
  },
} as const;

export type AndradeGCData = typeof ANDRADEGC_DATA;
