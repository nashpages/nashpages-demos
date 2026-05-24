export const CYRELA_PALETTE = {
  branco: "#FFFFFF",
  pedra: "#F6F4F0",
  tinta: "#26231F",
  fumo: "#8A8378",
  linha: "#E2DDD3",
  rosso: "#C81A27",
} as const;

const P = "/demos/cyrela-by-pininfarina";

export const CYRELA_DATA = {
  nav: {
    wordmark: "Cyrela by Pininfarina",
    links: [
      { label: "O EDIFÍCIO", href: "#forma" },
      { label: "ARQUITETURA", href: "#dna" },
      { label: "LOCALIZAÇÃO", href: "#localizacao" },
      { label: "CONTATO", href: "#contato" },
    ],
  },
  hero: {
    eyebrow: "VILA OLÍMPIA · SÃO PAULO",
    subtitle:
      "Branded residence assinada pela Pininfarina — o estúdio italiano que desenha a Ferrari desde 1930.",
    photo: `${P}/fachada.jpg`,
    alt: "Fachada curva do Cyrela by Pininfarina vista de baixo, contra o céu azul",
    captionL: "A FORMA — FACHADA EM CURVAS",
    captionR: "VILA OLÍMPIA · 2018",
  },
  dna: {
    eyebrow: "02 — A ASSINATURA",
    body: "Fundada em Turim, a Pininfarina deu forma aos carros mais desejados do mundo — Ferrari, Maserati, Alfa Romeo. Esta é a sua primeira obra residencial na América Latina: a mesma obsessão por aerodinâmica e movimento, agora em concreto.",
    facts: [
      { value: "1930", label: "DESENHANDO A FERRARI" },
      { value: "2014", label: "PARCERIA COM A CYRELA" },
      { value: "1º", label: "RESIDENCIAL NA AMÉRICA LATINA" },
    ],
  },
  forma: {
    eyebrow: "03 — A FORMA",
    body: "A fachada inteira é desenhada em curvas — como se o edifício tivesse sido moldado pela passagem do ar. Não existe fachada principal: a torre é escultura por todos os lados.",
    tickLabel: "AERODINÂMICA APLICADA AO MORAR",
    photo: `${P}/forma-entardecer.jpg`,
    alt: "Cyrela by Pininfarina ao entardecer — torre escultural, base de vidro curva e espelho d'água",
    caption: "ENTARDECER · BASE ESCULTURAL & ESPELHO D'ÁGUA",
  },
  varandas: {
    eyebrow: "04 — PRIVACIDADE",
    body: "Cada varanda se curva para fora da fachada e nunca se alinha à vizinha. De dentro, nenhuma unidade enxerga a outra — privacidade como consequência do desenho, não como promessa.",
    tickLabel: "NENHUMA UNIDADE VÊ A OUTRA",
    photo: `${P}/varandas.jpg`,
    alt: "Detalhe das varandas curvas em camadas, com guarda-corpos de vidro azul",
    caption: "AS VARANDAS QUE NÃO SE ENCONTRAM",
  },
  premiado: {
    eyebrow: "05 — RECONHECIMENTO",
    body: "Reconhecimento internacional por um feito raro — arquitetura residencial assinada por uma casa de design automotivo italiana.",
    awards: [
      { year: "2016", name: "iF Design Award", issuer: "HANNOVER · ALEMANHA" },
      { year: "2019", name: "International Architecture Award", issuer: "THE CHICAGO ATHENAEUM" },
    ],
  },
  interiores: {
    eyebrow: "06 — INTERIORES",
    body: "Os interiores assinados por Fernanda Marques levam o gesto da fachada para dentro — tetos esculpidos em madeira e luz, mármore, latão e mobiliário de linhas sinuosas. O lobby é a primeira obra do edifício.",
    photoA: {
      src: `${P}/lobby-teto.jpg`,
      alt: "Lobby com teto esculpido em madeira e luz",
      caption: "LOBBY · TETO ESCULPIDO EM MADEIRA E LUZ",
    },
    photoB: {
      src: `${P}/lounge.jpg`,
      alt: "Lounge com anéis de luz, poltronas e piso de mármore",
      caption: "LOUNGE · ANÉIS DE LUZ & MÁRMORE",
    },
  },
  lazer: {
    eyebrow: "07 — LAZER",
    photo: `${P}/piscina-noite.jpg`,
    alt: "Piscina com raia iluminada ao entardecer, com o edifício ao fundo",
    caption: "PISCINA COM RAIA · ENTARDECER",
    listTitle: "O QUE O EDIFÍCIO OFERECE",
    amenities: [
      "Piscina com raia",
      "Fitness",
      "Spa",
      "Sauna",
      "Salão de festas",
      "Lounge",
      "Porte-cochère",
      "Bicicletário",
    ],
  },
  localizacao: {
    eyebrow: "08 — LOCALIZAÇÃO",
    address: "RUA DAS FIANDEIRAS, 705 · VILA OLÍMPIA · SÃO PAULO",
    body: "Na Rua das Fiandeiras, a passos da Avenida Brigadeiro Faria Lima — o centro financeiro de São Paulo. Gastronomia, escritórios, cultura e parques no entorno: o melhor da cidade à porta.",
    anchors: [
      { name: "Faria Lima", desc: "CENTRO FINANCEIRO" },
      { name: "Parque do Povo", desc: "ÁREA VERDE" },
      { name: "JK Iguatemi", desc: "COMPRAS" },
      { name: "Vila Olímpia", desc: "ESTAÇÃO CPTM" },
    ],
  },
  ficha: {
    eyebrow: "09 — FICHA TÉCNICA",
    rows: [
      { label: "INCORPORAÇÃO", value: "Cyrela" },
      { label: "ARQUITETURA & DESIGN", value: "Pininfarina" },
      { label: "INTERIORES", value: "Fernanda Marques" },
      { label: "ENTREGA", value: "2018" },
      { label: "PAVIMENTOS", value: "23 andares" },
      { label: "RESIDÊNCIAS", value: "92 unidades" },
      { label: "METRAGEM", value: "46–95 m²" },
      { label: "TERRENO", value: "2.050 m²" },
    ],
  },
  contato: {
    eyebrow: "VENHA CONHECER",
    body: "Agende uma visita e conheça de perto a única obra residencial da Pininfarina na América Latina.",
    cta: "AGENDE UMA VISITA",
    footerBrand: "CYRELA BY PININFARINA",
    footerCredit: "ESCULPIDO PELO VENTO · SITE POR NASHPAGES",
  },
} as const;
