export const MPL_PALETTE = {
  papel: "#F1ECE3",
  pedra: "#E8E0D2",
  linha: "#D9CFBC",
  neblina: "#6E6960",
  accent: "#5C2B2F",
  accentLight: "#D9C7B3",
  tinta: "#1F1A14",
  tintaDeep: "#100C08",
  footerLinha: "#34291F",
  footerMuted: "#8C7E68",
} as const;

const BASE_PHOTO = "/demos/mannheimer-perez-lyra";

export const MPL_DATA = {
  nav: {
    logo: "MPL",
    links: [
      { label: "ESCRITÓRIO", href: "#sobre" },
      { label: "ARBITRAGEM", href: "#arbitragem" },
      { label: "ÁREAS", href: "#areas" },
      { label: "EQUIPE", href: "#equipe" },
      { label: "CONTATO", href: "#contato" },
    ],
    ctaShort: { label: "AGENDAR", href: "#contato" },
  },
  hero: {
    eyebrow: "BOUTIQUE DE CONTENCIOSO · DESDE 2008",
    logoMain: "MPL",
    logoFull: "Mannheimer, Perez e Lyra",
    meta: [
      "RIO DE JANEIRO",
      "SÃO PAULO",
      "CHAMBERS GLOBAL",
      "MAIS ADMIRADOS · ANÁLISE ADVOCACIA",
    ],
    explore: "EXPLORE ↓",
    photos: [
      `${BASE_PHOTO}/hero-03-library.jpg`,
      `${BASE_PHOTO}/hero-01-columns.jpg`,
      `${BASE_PHOTO}/hero-04-boardroom.jpg`,
      `${BASE_PHOTO}/hero-02-pillars.jpg`,
      `${BASE_PHOTO}/hero-05-signing.jpg`,
    ],
  },
  sobre: {
    eyebrow: "ESCRITÓRIO · §02",
    headline: "Boutique de contencioso.",
    body: "Dezessete anos representando empresas nacionais e estrangeiras nas disputas mais relevantes do país. Atuação concentrada em contencioso judicial complexo, arbitragem nacional e internacional e consultoria societária — com dedicação direta dos sócios em cada caso.",
    stats: [
      { num: "17", label: "ANOS DE ATUAÇÃO", sub: "FUNDADO EM 2008" },
      { num: "24", label: "PROFISSIONAIS", sub: "9 SÓCIOS + 15 ASSOCIADOS" },
      { num: "02", label: "ESCRITÓRIOS", sub: "RIO DE JANEIRO + SÃO PAULO" },
    ],
    pullQuote:
      "Atuação em arbitragem nacional e internacional perante a CCI, LCIA, CBMA, CAM-CCBC, FGV e CIESP/FIESP — com sucesso nos maiores litígios corporativos do país.",
  },
  sergio: {
    eyebrow: "SÓCIO FUNDADOR · §03",
    nameLine1: "Sergio Nelson",
    nameLine2: "Mannheimer",
    body: "Trinta e três anos como Procurador do Estado do Rio de Janeiro. Hoje, voz nacional do contencioso brasileiro nas disputas corporativas mais relevantes do país.",
    chambers: [
      { band: "BAND 2", dept: "LITIGATION ELITE" },
      { band: "BAND 3", dept: "ARBITRATION" },
      { band: "BAND 3", dept: "DISPUTE RESOLUTION · RIO" },
    ],
    chambersFooter: "CHAMBERS BRAZIL 2026 · CHAMBERS GLOBAL 2024",
    photo: `${BASE_PHOTO}/socios/MC_0513-ok.jpg`,
  },
  cortes: {
    eyebrow: "ARBITRAGEM INTERNACIONAL · §04",
    headlineA: "Arbitragem",
    headlineB: "internacional.",
    body: "Atuação perante as sete cortes arbitrais de maior relevância no Brasil e no mundo. Experiência consolidada em arbitragens envolvendo M&A, infraestrutura, óleo e gás, construção, seguros e parcerias público-privadas.",
    list: [
      { code: "001", sigla: "CCI", name: "Câmara de Comércio Internacional", city: "PARIS" },
      { code: "002", sigla: "LCIA", name: "London Court of International Arbitration", city: "LONDRES" },
      { code: "003", sigla: "CBMA", name: "Centro Brasileiro de Mediação e Arbitragem", city: "RIO DE JANEIRO" },
      { code: "004", sigla: "CAM-CCBC", name: "Câmara de Comércio Brasil-Canadá", city: "SÃO PAULO" },
      { code: "005", sigla: "FGV", name: "Câmara FGV de Mediação e Arbitragem", city: "RIO + SP" },
      { code: "006", sigla: "CIESP/FIESP", name: "Câmara de Conciliação e Arbitragem", city: "SÃO PAULO" },
      { code: "007", sigla: "CAM", name: "Câmara do Mercado", city: "B3 / SÃO PAULO" },
    ],
  },
  areas: {
    eyebrow: "ÁREAS DE ATUAÇÃO · §05",
    headlineA: "Três frentes.",
    headlineB: "Sete indústrias.",
    pilares: [
      {
        num: "01",
        title: "Contencioso judicial",
        body: "Disputas complexas e estratégicas em direito civil, comercial, societário, administrativo, constitucional, tributário, internacional, securitário, falimentar e recuperação de empresas.",
      },
      {
        num: "02",
        title: "Arbitragem nacional e internacional",
        body: "Atuação consolidada perante as principais cortes arbitrais — CCI, LCIA, CBMA, CAM-CCBC, FGV, CIESP/FIESP e CAM. Arbitragens ad hoc sob regras UNCITRAL. Homologação de sentenças estrangeiras no STJ.",
      },
      {
        num: "03",
        title: "Consultivo societário e M&A",
        body: "Direito societário e fusões e aquisições. Consultoria em private equity, reestruturações societárias, due diligence, assembleias e arquivamentos junto a CVM, Banco Central, Receita Federal e Juntas Comerciais.",
      },
    ],
    industrias: [
      { name: "INFRAESTRUTURA", sub: "PPP, concessões, obras públicas" },
      { name: "ÓLEO & GÁS", sub: "Exploração, contratos, regulatório" },
      { name: "CONSTRUÇÃO", sub: "Disputas contratuais, atraso, qualidade" },
      { name: "SEGUROS & RESSEGUROS", sub: "Sinistros complexos, regulatório SUSEP" },
      { name: "MERCADO FINANCEIRO", sub: "Bancos, derivativos, securitização" },
      { name: "FALIMENTAR", sub: "Recuperação judicial e extrajudicial" },
      { name: "TRIBUTÁRIO", sub: "Contencioso fiscal de grande porte" },
    ],
  },
  escritorios: {
    eyebrow: "ESCRITÓRIOS · §06",
    headline: "Dois escritórios.",
    cidades: [
      {
        label: "SEDE · 01",
        nome: "Rio de Janeiro",
        endereco: "AV. ALMIRANTE BARROSO, 139 · 4º · CENTRO · CEP 20031-005",
        tel: "+55 21 2215 1733",
        photo: `${BASE_PHOTO}/city-rio.jpg`,
      },
      {
        label: "ESCRITÓRIO · 02",
        nome: "São Paulo",
        endereco: "AV. PRES. JUSCELINO KUBITSCHEK, 28 · 10º · ITAIM BIBI · CEP 04543-000",
        tel: "+55 11 3541 3306",
        photo: `${BASE_PHOTO}/city-sp.jpg`,
      },
    ],
  },
  equipe: {
    eyebrow: "EQUIPE · §07",
    headline: "Boutique consolidada.",
    body: "Nove sócios. Quinze associados. Dedicação direta dos sócios em cada caso — a marca de uma boutique de contencioso de elite. A seguir, quatro dos rostos por trás das disputas mais relevantes do país.",
    stats: [
      { num: "09", label: "SÓCIOS" },
      { num: "15", label: "ASSOCIADOS" },
      { num: "24", label: "PROFISSIONAIS" },
    ],
    socios: [
      {
        name: "Sergio Nelson",
        surname: "Mannheimer",
        role: "FUNDADOR · LITIGATION ELITE",
        photo: `${BASE_PHOTO}/socios/MC_0513-ok.jpg`,
      },
      {
        name: "Pedro Henrique",
        surname: "Perez",
        role: "FUNDADOR · M&A · SOCIETÁRIO",
        photo: `${BASE_PHOTO}/socios/MC_0553-ok-1.jpg`,
      },
      {
        name: "Karina Stern",
        surname: "de Freitas de Siqueira",
        role: "SÓCIA · CONTENCIOSO",
        photo: `${BASE_PHOTO}/socios/Karina_site.jpg`,
      },
      {
        name: "Fernanda",
        surname: "Aviz",
        role: "SÓCIA",
        photo: `${BASE_PHOTO}/socios/Fernanda_site.jpg`,
      },
    ],
    signature: "OUTROS 5 SÓCIOS · ASSOCIADOS · INTERNACIONAIS",
  },
  contato: {
    eyebrow: "CONTATO · §08",
    headlineA: "Vamos",
    headlineB: "conversar.",
    cidades: [
      {
        label: "RIO DE JANEIRO · SEDE",
        tel: "+55 21 2215 1733",
        telHref: "tel:+552122151733",
        endereco: "AV. ALMIRANTE BARROSO, 139 · 4º · CENTRO · 20031-005",
      },
      {
        label: "SÃO PAULO",
        tel: "+55 11 3541 3306",
        telHref: "tel:+551135413306",
        endereco: "AV. PRES. JUSCELINO KUBITSCHEK, 28 · 10º · ITAIM BIBI",
      },
    ],
    email: "contato@mpladv.com.br",
    emailHref: "mailto:contato@mpladv.com.br",
    signature: [
      "MPL ADVOGADOS · MANNHEIMER, PEREZ E LYRA · DESDE 2008",
      "ATENDIMENTO POR AGENDAMENTO",
    ],
  },
  footer: {
    logo: "MPL",
    sub: "Mannheimer, Perez e Lyra",
    cols: [
      {
        header: "ESCRITÓRIOS",
        items: ["Rio de Janeiro · Sede", "São Paulo"],
      },
      {
        header: "FRENTES",
        items: ["Contencioso", "Arbitragem", "Societário · M&A"],
      },
      {
        header: "RECONHECIMENTO",
        items: ["Chambers Brazil", "Chambers Global", "The Legal 500", "Análise Advocacia"],
      },
      {
        header: "CONTATO",
        items: ["+55 21 2215 1733", "+55 11 3541 3306", "contato@mpladv.com.br"],
      },
    ],
    marquee: "MPL · MPL · MPL · MPL · MPL · MPL",
    copyright: "© 2026 MPL ADVOGADOS · DESDE 2008",
    credit: "SITE POR NASHPAGES",
  },
} as const;
