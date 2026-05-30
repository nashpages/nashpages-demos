// Gero Rio — identidade "Bronze & Âmbar" + conteúdo + caminhos de imagem.
export const GERO = {
  linho: "#F4EDE1",
  espresso: "#1E1610",
  salao: "#17110B",
  bronze: "#B5894E",
  vinho: "#6B2B2C",
  camel: "#8A7257",
  creme: "#C9BBA6",
  para: "#6A5B47",
  linha: "#E0D6C6",
} as const;

const IMG = "/demos/gero-rio";

export const NAV = ["A Casa", "A Carta", "O Espaço", "Reservar"];

export const HERO = {
  eyebrow: "Cucina Italiana · Ipanema, Rio de Janeiro",
  name: "Gero Rio",
  tagline:
    "Clássicos da cozinha italiana à beira-mar de Ipanema — no Hotel Fasano, desde 2002.",
  address: "Avenida Vieira Souto, 80 · Ipanema",
  img: `${IMG}/hero.jpg`,
};

export const GASTRONOMIA = {
  eyebrow: "A Cozinha — desde 2002",
  // partes pra destacar "alta cozinha italiana" em itálico
  lead: ["Há mais de quatro décadas, Fasano é a ", "alta cozinha italiana", " no Brasil."],
  para:
    "Risotos, massas e clássicos italianos no comando do chef Luigi Moressa — os mesmos da primeira casa, em 2002.",
};

export type Dish = { course: string; name: string; it: string; desc: string; img: string };
export const DISHES: Dish[] = [
  { course: "Primi", name: "Gnocchi di Patate Dorati", it: "alla Mediterranea", desc: "Gnocchi de batata dourado na panela, com lulas e vieiras.", img: `${IMG}/dish-gnocchi.jpg` },
  { course: "Primi", name: "Ravioli di Vitello", it: "ai Funghi", desc: "Ravioli de vitelo ao molho de funghi porcini.", img: `${IMG}/dish-ravioli.jpg` },
  { course: "Primi", name: "Tortelli Gialli e Verdi", it: "ai Carciofi e Taleggio", desc: "Alcachofra e taleggio, manteiga de avelã e pó de porcini.", img: `${IMG}/dish-tortelli.jpg` },
  { course: "Primi", name: "Spaghetti alla Carbonara", it: "Tradizionale", desc: "Guanciale, pecorino e gema de ovo curada.", img: `${IMG}/dish-carbonara.jpg` },
  { course: "Secondi", name: "Filetto di Robalo", it: "alla Griglia", desc: "Robalo grelhado, creme de fava e aspargos.", img: `${IMG}/dish-robalo.jpg` },
  { course: "Secondi", name: "Polpo alla Piastra", it: "con Riso Nero", desc: "Polvo grelhado sobre arroz nero venere al salto.", img: `${IMG}/dish-polpo.jpg` },
  { course: "Secondi", name: "Stinco d'Agnello al Forno", it: "con Patate e Carciofini", desc: "Cordeiro assado ao forno, batatas e alcachofrinhas.", img: `${IMG}/dish-cordeiro.jpg` },
];

export type Espaco = { label: string; name: string; img: string; w: number; h: number };
export const ESPACO: Espaco[] = [
  { label: "A Chegada", name: "Avenida Vieira Souto.", img: `${IMG}/espaco-externo.jpg`, w: 560, h: 560 },
  { label: "O Salão", name: "Luz baixa, madeira morna.", img: `${IMG}/espaco-salao.jpg`, w: 800, h: 540 },
  { label: "A Sala", name: "Paredes que contam histórias.", img: `${IMG}/espaco-sala.jpg`, w: 820, h: 520 },
  { label: "A Varanda", name: "Verde e sombra.", img: `${IMG}/espaco-varanda-lateral.jpg`, w: 760, h: 560 },
  { label: "A Céu Aberto", name: "À beira de Ipanema.", img: `${IMG}/espaco-varanda-tijolo.jpg`, w: 800, h: 540 },
];

export const BAR = {
  eyebrow: "O Bar",
  headline: ["O ritual do ", "aperitivo", "."],
  para:
    "Madeira polida e garrafas em contraluz. Antes de sentar à mesa, o bar do Gero é o prelúdio da noite — o aperitivo como manda a tradição italiana, sem pressa.",
  drinks: "Negroni · Americano · Bellini",
  img: `${IMG}/bar.jpg`,
};

export const LOCAL = {
  eyebrow: "Localização",
  headline: "À beira-mar, no Hotel Fasano.",
  address: ["Avenida Vieira Souto, 80", "Ipanema · Rio de Janeiro", "Dentro do Hotel Fasano Rio de Janeiro"],
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Gero+Rio+Hotel+Fasano+Ipanema",
  hours: [
    ["Segunda a Quarta", "12h às 15h e 19h às 23h"],
    ["Quinta", "12h às 15h e 19h às 00h"],
    ["Sexta e Sábado", "12h às 16h e 19h às 01h"],
    ["Domingo", "12h às 22h"],
  ],
  phone: "RESERVAS · (21) 3202-4030",
};

export const RESERVA = {
  eyebrow: "Reservas",
  headline: "Será um prazer recebê-lo.",
  cta: "Reservar uma mesa",
  phone: "ou pelo telefone (21) 3202-4030",
  phoneHref: "tel:+552132024030",
};
