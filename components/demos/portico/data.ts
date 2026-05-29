export const PORTICO_PALETTE = {
  grafite: "#1F242B",
  ambar: "#E2802B",
  concreto: "#F4F2EF",
  aco: "#5C6470",
  branco: "#FFFFFF",
  linha: "#E4DFD7",
  nevoa: "#CDCCC7",
} as const;

const P = "/demos/portico";

export const PORTICO_WHATSAPP =
  "https://wa.me/5549991234567?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site da Pórtico e gostaria de um orçamento para o meu evento."
  );

export const PORTICO_DATA = {
  nav: {
    wordmark: "PÓRTICO",
    links: [
      { label: "Estruturas", href: "#estruturas" },
      { label: "Trabalhos", href: "#trabalhos" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Contato", href: "#contato" },
    ],
    cta: "Orçamento",
  },
  hero: {
    eyebrow: "LOCAÇÃO DE ESTRUTURAS PARA EVENTOS",
    title: "Estruturas que sustentam grandes eventos.",
    subtitle:
      "Toldos, tendas e tablados para casamentos, festas e eventos corporativos — com projeto, montagem e desmontagem por nossa conta.",
    ctaPrimary: "Pedir orçamento",
    ctaSecondary: "Ver trabalhos",
    credentials:
      "Montagem própria · Projeto sob medida · Cobertura de 20 a 1.000 m²",
    image: `${P}/hero.jpg`,
    imageAlt:
      "Tendas cristal montadas para uma cerimônia ao ar livre, ao entardecer",
  },
  alugamos: {
    eyebrow: "O QUE ALUGAMOS",
    title: "Toldos, tendas e tablados",
    cards: [
      {
        image: `${P}/alugamos-toldos.jpg`,
        alt: "Tenda piramidal branca montada num gramado",
        title: "Toldos & Tendas",
        desc: "Coberturas que protegem o seu evento do sol e da chuva — do modelo clássico ao cristal transparente.",
        items: [
          "Piramidal e duas águas",
          "Tenda cristal transparente",
          "Galpões e grandes coberturas",
        ],
      },
      {
        image: `${P}/alugamos-tablados.png`,
        alt: "Deck de madeira amplo montado sobre o jardim",
        title: "Tablados & Pisos",
        desc: "Pisos nivelados e seguros para pista de dança, palco, cerimônia e áreas sociais.",
        items: [
          "Tablado de madeira",
          "Passarelas e palcos",
          "Nivelamento em qualquer terreno",
        ],
      },
    ],
  },
  trabalhos: {
    eyebrow: "TRABALHOS",
    title: "Eventos que a gente cobriu",
    photos: [
      { src: `${P}/trabalho-1.jpg`, alt: "Tenda cristal com lounge à beira-mar" },
      {
        src: `${P}/trabalho-2.jpg`,
        alt: "Passarela de tablado de madeira sobre o gramado",
      },
      {
        src: `${P}/trabalho-3.jpg`,
        alt: "Tenda cristal com mesas postas para jantar",
      },
      {
        src: `${P}/trabalho-4.jpg`,
        alt: "Tendas brancas montadas ao lado da piscina",
      },
      {
        src: `${P}/trabalho-5.jpg`,
        alt: "Duas tendas cristal montadas em campo aberto",
      },
    ],
  },
  comoFunciona: {
    eyebrow: "COMO FUNCIONA",
    title: "Do orçamento à desmontagem",
    steps: [
      {
        num: "01",
        title: "Orçamento",
        desc: "Você conta o evento — data, local e tamanho — e a gente envia o orçamento rápido.",
      },
      {
        num: "02",
        title: "Projeto",
        desc: "Definimos a estrutura ideal e, se precisar, visitamos o local antes.",
      },
      {
        num: "03",
        title: "Montagem",
        desc: "Nossa equipe monta tudo com segurança, bem antes do evento começar.",
      },
      {
        num: "04",
        title: "Desmontagem",
        desc: "Depois do evento, recolhemos tudo. Você não se preocupa com nada.",
      },
    ],
  },
  contato: {
    eyebrow: "ORÇAMENTO",
    title: "Vamos montar o seu evento?",
    subtitle:
      "Conte o que você precisa — data, local e tamanho do evento. Respondemos rápido, com projeto e preço sem compromisso.",
    contacts: [
      { label: "WHATSAPP", value: "(49) 99123-4567" },
      { label: "E-MAIL", value: "contato@portico.com.br" },
      { label: "ATENDEMOS", value: "Serra Catarinense e região" },
    ],
    card: {
      title: "Fale com a gente no WhatsApp",
      text: "Manda a data, o local e o tamanho do evento — a gente responde com o orçamento na hora, sem compromisso.",
      button: "Chamar no WhatsApp",
      detail: "Resposta rápida · Seg a Sáb, 8h–19h",
    },
  },
  footer: {
    copyright: "© 2026 Pórtico Estruturas · Serra Catarinense/SC",
    credit: "Site por Nashpages",
  },
} as const;
