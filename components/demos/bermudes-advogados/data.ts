// Dados da demo Bermudes Advogados — Casa Bermudes (BigLaw editorial · Fraunces + tinta #324C5B)

export const BERMUDES_PALETTE = {
  papel: "#F1EFEA",
  pedra: "#E8E5DE",
  tinta: "#324C5B",
  tintaDeep: "#1E2F3A",
  neblina: "#5F6772",
  linha: "#D9D5CD",
  accent: "#7C8B96",
  footerLinha: "#324C5B",
  footerMuted: "#7C8B96",
} as const;

export const BERMUDES_DATA = {
  phone: "+55 21 3221 9000",
  phoneHref: "tel:+552132219000",
  email: "contato@bermudes.com.br",
  website: "bermudes.com.br",

  nav: {
    logo: "Bermudes",
    links: [
      { label: "O ESCRITÓRIO", href: "#sobre" },
      { label: "ATUAÇÃO",      href: "#areas" },
      { label: "ESCRITÓRIOS",  href: "#escritorios" },
      { label: "EQUIPE",       href: "#equipe" },
      { label: "CONTATO",      href: "#contato" },
    ],
    ctaShort: { label: "FALAR", href: "#contato" },
  },

  hero: {
    photo: "/demos/bermudes-advogados/recepcao.jpg",
    logoMain: "Bermudes",
    manifesto: "Litígio.  Arbitragem.  Insolvência.",
    tagline: "RIO DE JANEIRO  ·  SÃO PAULO  ·  BELO HORIZONTE  ·  BRASÍLIA  ·  DESDE 1969",
    explore: "EXPLORE",
  },

  sobre: {
    eyebrow: "O ESCRITÓRIO",
    headlineLines: ["Cinquenta e sete anos.", "Uma só prática."],
    subline: "Líderes brasileiros em contencioso, arbitragem e insolvência. Reconhecidos pelo Chambers Global, pelo Análise Advocacia 500 e por dezenove anos consecutivos entre os Escritórios Mais Admirados do país.",
    pullQuoteLabel: "ASSINATURA INSTITUCIONAL",
    pullQuote: "Uma casa. Quatro endereços.  Cento e trinta advogados.",
    stats: [
      { num: "57",  label: "ANOS",          body: "Fundado em 1969 por Sérgio Bermudes. Cinco décadas no centro das maiores disputas do país." },
      { num: "4",   label: "CIDADES",       body: "Rio de Janeiro, São Paulo, Belo Horizonte e Brasília. Cobertura nacional plena." },
      { num: "130", label: "PROFISSIONAIS", body: "Equipe formada por advogados sêniores especializados, com presença consolidada em todas as instâncias." },
    ],
  },

  memorial: {
    eyebrow: "LEGADO",
    photo: "/demos/bermudes-advogados/sergio-bermudes.jpg",
    name: "Sérgio Bermudes",
    dates: "1942  —  2025",
    tributeLines: ["Fundador. Cinquenta e seis anos à frente da casa.", "O legado segue na prática."],
  },

  herzog: {
    eyebrow: "MARCO HISTÓRICO",
    photo: "/demos/bermudes-advogados/biblioteca-arquivo.jpg",
    year: "1978.",
    subheadlineLines: ["A primeira vitória judicial", "contra a ditadura militar."],
    body: "Sérgio Bermudes obtém a primeira sentença reconhecendo a responsabilidade da União pela morte do jornalista Vladimir Herzog sob custódia militar. Marco fundador dos direitos humanos no Brasil.",
  },

  areas: {
    eyebrow: "ÁREAS DE ATUAÇÃO",
    headlineLines: ["Três pilares.", "Doze frentes."],
    subline: "Líderes brasileiros em contencioso, arbitragem e insolvência. Equipe ampla cobrindo todas as frentes correlatas.",
    pilaresLabel: "TRÊS PILARES",
    pilares: [
      { num: "§05.1", name: "Contencioso", body: "Contencioso cível, comercial e estratégico em todas as instâncias. Atuação histórica no STJ e STF, reconhecimento Chambers Global." },
      { num: "§05.2", name: "Arbitragem",  body: "Arbitragens nacionais e internacionais. Disputas societárias, contratuais e comerciais de alta complexidade." },
      { num: "§05.3", name: "Insolvência", body: "Recuperação judicial, extrajudicial e falência. Casos de maior repercussão do mercado brasileiro." },
    ],
    complementaresLabel: "COMPLEMENTARES",
    complementares: ["Administrativo", "Ambiental", "Cível", "Comercial", "Concorrencial", "Imobiliário", "Regulatório", "Societário"],
    setoriaisLabel: "SETORIAIS",
    setoriais: ["Energia", "Seguros"],
  },

  escritorios: {
    eyebrow: "OS ESCRITÓRIOS",
    headlineLines: ["Quatro cidades.", "Uma só prática."],
    subline: "Cobertura nacional integrada. Cada endereço, uma equipe sênior local.",
    hint: "PASSE O MOUSE PARA EXPANDIR",
    cities: [
      {
        slug: "rio",
        label: "RIO DE JANEIRO",
        badge: "SEDE",
        name: "Rio de Janeiro",
        street: "Praça XV de Novembro, 20",
        detail: "11º andar · Centro · 20010-010",
        phone: "Tel (21) 3221-9000",
        photo: "/demos/bermudes-advogados/city-rio.jpg",
      },
      {
        slug: "sp",
        label: "SÃO PAULO",
        badge: "ESCRITÓRIO",
        name: "São Paulo",
        street: "Avenida Paulista",
        detail: "Bela Vista · São Paulo/SP",
        phone: "Atendimento por agendamento",
        photo: "/demos/bermudes-advogados/city-sp.jpg",
      },
      {
        slug: "bh",
        label: "BELO HORIZONTE",
        badge: "ESCRITÓRIO",
        name: "Belo Horizonte",
        street: "Centro",
        detail: "Savassi · Funcionários · Belo Horizonte/MG",
        phone: "Atendimento por agendamento",
        photo: "/demos/bermudes-advogados/city-bh.jpg",
      },
      {
        slug: "brasilia",
        label: "BRASÍLIA",
        badge: "ESCRITÓRIO",
        name: "Brasília",
        street: "Eixo Monumental",
        detail: "Asa Sul · Centro · Brasília/DF",
        phone: "Atendimento por agendamento",
        photo: "/demos/bermudes-advogados/city-brasilia.jpg",
      },
    ],
  },

  equipe: {
    eyebrow: "EQUIPE",
    photo: "/demos/bermudes-advogados/sala-1.jpg",
    headlineLines: ["Cento e trinta", "advogados."],
    manifesto: "Equipe ampla, especialização vertical. Cada caso atendido por sócio. Cada disputa, tratada por equipe sênior dedicada.",
    composicaoLabel: "COMPOSIÇÃO",
    composicao: [
      { val: "13", label: "SÓCIOS SÊNIORES" },
      { val: "4",  label: "ESCRITÓRIOS" },
      { val: "57", label: "ANOS DE PRÁTICA" },
    ],
    partnersLabel: "OS SÓCIOS DA CASA",
    partners: [
      "Marcio Vieira Souto Costa Ferreira",
      "Marcelo Fontes Cesar de Oliveira",
      "Guilherme Valdetaro Mathias",
      "Fabiano Robalinho Cavalcanti",
      "Marcelo Lamego Carpenter",
      "Pedro Marinho Nunes",
      "Caetano Berenguer",
      "Alexandre Sigmaringa Seixas",
      "André Silveira",
      "Rafaela Filgueiras Fucci",
      "Livia Ikeda",
      "Thaís Vasconcellos de Sá",
    ],
    footnote: "+ associados, advogados sêniores, equipe administrativa.",
  },

  contato: {
    eyebrow: "CONTATO",
    headlineLines: ["Vamos", "conversar."],
    subline: "Empresas com operação no Brasil. Disputas de alta complexidade no Norte ao Sul. Resposta no mesmo dia útil.",
    addressesLabel: "ENDEREÇOS",
    addresses: [
      { label: "RIO DE JANEIRO", badge: "SEDE",       title: "Praça XV de Novembro, 20", lines: ["11º andar · Centro · 20010-010"] },
      { label: "SÃO PAULO",      badge: "ESCRITÓRIO", title: "Avenida Paulista",          lines: ["Bela Vista · São Paulo/SP"] },
      { label: "BELO HORIZONTE", badge: "ESCRITÓRIO", title: "Savassi · Funcionários",    lines: ["Belo Horizonte/MG"] },
      { label: "BRASÍLIA",       badge: "ESCRITÓRIO", title: "Eixo Monumental",           lines: ["Asa Sul · Brasília/DF"] },
    ],
    signature: "Bermudes Advogados · Desde 1969",
    signatureNote: "ATENDIMENTO POR AGENDAMENTO",
  },

  footer: {
    blocks: [
      {
        label: "CASA",
        title: "Bermudes Advogados",
        body: ["Associados", "Desde 1969", "Em memória de Sérgio Bermudes", "1942 — 2025"],
      },
      {
        label: "SEDE  ·  RIO DE JANEIRO",
        title: "Praça XV de Novembro, 20",
        body: ["11º andar · Centro", "20010-010 · Rio de Janeiro/RJ", "+55 21 3221 9000", "contato@bermudes.com.br"],
      },
      {
        label: "ESCRITÓRIOS",
        title: "Três filiais",
        body: ["São Paulo", "Belo Horizonte", "Brasília"],
      },
      {
        label: "PROJETO",
        title: "Casa Bermudes",
        body: ["© 2026", "Site por Nashpages"],
      },
    ],
    bottomLine: "© 2026  BERMUDES ADVOGADOS  ·  ADVOCACIA EMPRESARIAL DESDE 1969  ·  RIO  ·  SP  ·  BH  ·  BRASÍLIA",
    bottomSignature: "SITE POR NASHPAGES",
  },
} as const;

export type BermudesData = typeof BERMUDES_DATA;
