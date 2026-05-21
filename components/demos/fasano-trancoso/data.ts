export const FASANO_PALETTE = {
  areia: "#F2ECE1",
  bruma: "#E5DDD0",
  tinta: "#1C1A16",
  fumaca: "#82796B",
  madeira: "#9C7350",
  mata: "#3E4B3A",
  noite: "#14120E",
  madeiraLight: "#C6A07A",
} as const;

const P = "/demos/fasano-trancoso";

export const FASANO_DATA = {
  nav: {
    wordmark: "Fasano",
    links: [
      { label: "ACOMODAÇÕES", href: "#acomodacoes" },
      { label: "GASTRONOMIA", href: "#gastronomia" },
      { label: "EXPERIÊNCIAS", href: "#experiencias" },
      { label: "RESERVAR", href: "#reservar" },
    ],
  },
  hero: {
    photo: `${P}/hero-aerea.jpg`,
    alt: "Fasano Trancoso visto de cima — bangalôs na mata diante da praia de Itapororoca",
    cue: "ROLE PARA EXPLORAR",
  },
  apresentacao: {
    photo: `${P}/hero-piscina-vegetacao.jpg`,
    alt: "Piscina e vegetação nativa do Fasano Trancoso",
    eyebrow: "RESERVA TRANCOSO · BAHIA",
    wordmark: "Fasano Trancoso",
    phrase: "O tempo passa mais devagar à beira de Itapororoca.",
  },
  manifesto: {
    eyebrow: "A CASA",
    headline: ["Não ocupamos a paisagem.", "Pertencemos a ela."],
    body: "Projetado por Isay Weinfeld à beira da Praia de Itapororoca, o Fasano Trancoso espalha seus bangalôs e villas pela mata nativa — madeira, pedra e o verde, num conforto que não interrompe a natureza, apenas pertence a ela.",
  },
  acomodacoes: {
    eyebrow: "ACOMODAÇÕES",
    headline: "Quarenta bangalôs, vinte e três villas.",
    body: "Casas espalhadas pela mata, cada uma com piscina privativa e o silêncio do mar por perto — conforto que não disputa com a natureza, convive com ela.",
    casaPiscina: { src: `${P}/acomod-casa-piscina.jpg`, alt: "Casa com piscina privativa diante da mata" },
    bangalo: { src: `${P}/acomod-bangalo.jpg`, alt: "Interior de bangalô — escada e estar" },
    sala: { src: `${P}/acomod-sala.jpg`, alt: "Sala de estar com vista para o verde" },
  },
  mar: {
    eyebrow: "MAR & PISCINAS",
    headline: "Onde a piscina encontra o mar.",
    body: "Borda infinita sobre a Praia de Itapororoca — o azul da piscina e o do Atlântico, lado a lado.",
    photoBig: { src: `${P}/mar-piscina-beira.jpg`, alt: "Piscina de borda infinita diante do mar" },
    photos: [
      { src: `${P}/mar-piscinas.jpg`, alt: "Piscinas entre as palmeiras" },
      { src: `${P}/mar-beira-cima.jpg`, alt: "Praia de Itapororoca vista de cima" },
    ],
  },
  gastronomia: {
    eyebrow: "GASTRONOMIA",
    headline: "À mesa, com o mar.",
    body: "A cozinha italiana que consagrou o Fasano, agora sob a brisa de Itapororoca — frutos do mar, ingredientes da Bahia e a mesa posta de frente para o Atlântico.",
    photos: [
      { src: `${P}/gastro-mesa-mar.jpg`, alt: "Mesa posta à beira-mar" },
      { src: `${P}/gastro-salao.jpg`, alt: "Salão do restaurante" },
    ],
  },
  experiencias: {
    eyebrow: "BEM-ESTAR & EXPERIÊNCIAS",
    headline: "Os dias, à sua maneira.",
    body: "Do spa às trilhas, do beach tennis ao mar — o ritmo é seu. Há sempre o que fazer. E o direito de não fazer nada.",
    cards: [
      { name: "Spa", photo: `${P}/exp-spa.jpg` },
      { name: "Sauna", photo: `${P}/exp-sauna.jpg` },
      { name: "Academia", photo: `${P}/exp-fitness.jpg` },
      { name: "Beach Tennis", photo: `${P}/exp-beachtennis.jpg` },
      { name: "Náutica", photo: `${P}/exp-nauticos.jpg` },
      { name: "Trilhas", photo: `${P}/exp-trilhas.jpg` },
      { name: "Kids Club", photo: `${P}/exp-kids.jpg` },
      { name: "Quadras", photo: `${P}/exp-quadras.jpg` },
    ],
  },
  reserva: {
    eyebrow: "A RESERVA",
    headline: "A mata veio primeiro.",
    body: "Trezentos hectares de Mata Atlântica preservada — e o Fasano espalhado por ela, com leveza.",
    photo: { src: `${P}/reserva-natureza.jpg`, alt: "Mata Atlântica preservada da reserva" },
  },
  reservar: {
    eyebrow: "RESERVAS",
    headline: "Venha ficar.",
    cta: "RESERVAR",
  },
  footer: {
    brand: "Fasano",
    credit: "Site por Nashpages",
  },
} as const;
