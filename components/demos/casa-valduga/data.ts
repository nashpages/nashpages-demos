export const VALDUGA_PALETTE = {
  pergaminho: "#F4EEE3",
  pedra: "#E7DECF",
  linha: "#D8CDB8",
  neblina: "#6E6457",
  tinta: "#241A15",
  vinho: "#6B2433",
  vinhoDeep: "#3E1620",
  dourado: "#B68A4E",
  douradoDeep: "#8A6536",
  douradoLight: "#C9A86A",
  footerBg: "#170C0F",
  muted: "#8C7E68",
} as const;

const P = "/demos/casa-valduga";

export const VALDUGA_DATA = {
  nav: {
    wordmark: "Casa Valduga",
    links: [
      { label: "A Casa", href: "#manifesto" },
      { label: "Os Espaços", href: "#espacos" },
      { label: "Experiências", href: "#experiencias" },
      { label: "Gastronomia", href: "#gastronomia" },
      { label: "Visite", href: "#visite" },
    ],
  },
  hero: {
    eyebrow: "VALE DOS VINHEDOS — DESDE 1875",
    wordmark: "Casa Valduga",
    phrase: "O tempo é o nosso melhor enólogo.",
    photos: [
      `${P}/hero-entrada.jpg`,
      `${P}/corredor-cave.jpg`,
      `${P}/vinhedo.jpg`,
      `${P}/exterior-vista.jpg`,
    ],
  },
  manifesto: {
    eyebrow: "A CASA — DESDE 1875",
    headline: "Fomos além do vinho.",
    body: "Em 1875, a família Valduga chegou de Rovereto, no norte da Itália, e plantou as primeiras videiras do Vale dos Vinhedos. Cinco gerações depois, criamos o primeiro complexo enoturístico do Brasil — para que o vinho seja vivido, e não apenas servido.",
    stats: [
      { num: "150", label: "ANOS DE HISTÓRIA" },
      { num: "5", label: "GERAÇÕES" },
      { num: "1º", label: "ENOTURISMO NO BRASIL" },
    ],
    photo: `${P}/vinhedo.jpg`,
  },
  espacos: {
    eyebrow: "OS ESPAÇOS",
    headline: "Um complexo inteiro para viver o vinho.",
    cue: "ARRASTE PARA EXPLORAR",
    cards: [
      { name: "A Adega", meta: "ONDE O VINHO DESCANSA", photo: `${P}/adega.jpg` },
      { name: "A Cave dos Espumantes", meta: "A MAIOR DA AMÉRICA LATINA", photo: `${P}/taca-barris.jpg` },
      { name: "O Casarão", meta: "ARQUITETURA · 1875", photo: `${P}/arcos.jpg` },
      { name: "O Salão de Degustação", meta: "DEGUSTAÇÕES GUIADAS", photo: `${P}/mesa-degustacao.jpg` },
    ],
  },
  experiencias: {
    eyebrow: "EXPERIÊNCIAS",
    headline: "O vinho se vive de muitas formas.",
    pano: `${P}/cave-pano.jpg`,
    cols: [
      { num: "01", title: "A Visita Guiada", line: "Duas horas pelos espaços icônicos, com a história da família e degustação de cinco rótulos." },
      { num: "02", title: "A Degustação", line: "Com os enólogos da casa — do espumante premiado ao tinto mais encorpado." },
      { num: "03", title: "A Hospedagem", line: "24 suítes em cinco pousadas boutique, cercadas pelos parreirais." },
    ],
  },
  gastronomia: {
    eyebrow: "GASTRONOMIA & VINHO",
    headline: "O vinho é o nosso anfitrião.",
    body: "Cinco gerações de enologia em cada taça. O mesmo vinho que a família produz é o que recebe você à mesa — do almoço italiano ao brinde da noite.",
    highlights: [
      "Restaurante Maria Valduga — cozinha da imigração italiana",
      "Lui Wine Bar — tábuas, vinhos e drinks autorais",
      "Enoboutique — toda a coleção da casa",
    ],
    cta: "VER A CARTA DE VINHOS",
    photos: {
      pour: `${P}/vinho-servido-2.jpg`,
      mesa: `${P}/mesa-especiarias.jpg`,
      barril: `${P}/barril-zoom.jpg`,
    },
  },
  vinhos: {
    eyebrow: "OS VINHOS",
    headline: "Cada rótulo, um capítulo.",
    photo: `${P}/corredor-vinhos.jpg`,
    lines: [
      { name: "Raízes", tag: "GRAN CORTE", desc: "O corte que celebra os 150 anos da família — potente e marcante." },
      { name: "Identidade", tag: "VINHOS DE GUARDA", desc: "A expressão pura de cada terroir do Vale dos Vinhedos." },
      { name: "Gran Reserva", tag: "ÍCONES DA CASA", desc: "Do Chardonnay brasileiro número um aos tintos de exceção." },
      { name: "Premivm", tag: "ESPUMANTES", desc: "Método tradicional, da maior cave de espumantes da América Latina." },
    ],
  },
  atmosfera: {
    eyebrow: "A ATMOSFERA",
    headline: "O resto, as fotos contam.",
    tag: "GALERIA — CASA VALDUGA",
    photos: [
      { src: `${P}/corredor-cave.jpg`, alt: "Corredor da cave da Casa Valduga" },
      { src: `${P}/vinhedo.jpg`, alt: "Parreirais do Vale dos Vinhedos" },
      { src: `${P}/vista-fora.jpg`, alt: "Fachada da Casa Valduga" },
      { src: `${P}/barris-gigantes.jpg`, alt: "Barris de carvalho" },
      { src: `${P}/mesa-degustacao.jpg`, alt: "Salão de degustação" },
    ],
  },
  visite: {
    eyebrow: "VISITE",
    headline: "Sua visita começa aqui.",
    intro: "A 125 km de Porto Alegre, no coração do Vale dos Vinhedos — onde nasceu o enoturismo brasileiro.",
    info: [
      { label: "ENDEREÇO", value: "Vale dos Vinhedos · Bento Gonçalves — RS" },
      { label: "COMO CHEGAR", value: "~125 km do aeroporto de Porto Alegre" },
      { label: "EXPERIÊNCIAS", value: "Visitas guiadas diárias, com reserva" },
    ],
    cta: "PLANEJE SUA VISITA",
    photo: `${P}/exterior-vista.jpg`,
  },
  contato: {
    eyebrow: "ATÉ BREVE",
    headline: "Vamos brindar.",
    invite: "Reserve sua visita e viva o Vale dos Vinhedos como a nossa família vive — com tempo, mesa farta e boa companhia.",
    cta: "FALE COM A CASA VALDUGA",
    contact: "reservas@casavalduga.com.br      ·      @casavalduga      ·      Bento Gonçalves — RS",
  },
  footer: {
    marquee: "CASA VALDUGA · DESDE 1875 · VALE DOS VINHEDOS · ",
    brand: "Casa Valduga",
    brandSub: "Vinícola & enoturismo — desde 1875.",
    cols: [
      { label: "NAVEGAR", items: ["A Casa", "Os Espaços", "Experiências", "Os Vinhos", "Gastronomia"] },
      { label: "VISITE", items: ["Vale dos Vinhedos", "Bento Gonçalves — RS", "Reservas no site"] },
      { label: "SIGA", items: ["Instagram", "Facebook", "YouTube"] },
    ],
    credit: "Site por Nashpages",
    copyright: "© 2026 Casa Valduga",
  },
} as const;
