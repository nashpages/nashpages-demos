// Ryo Gastronomia — identidade "Sumi & Kin" (tinta e ouro) + conteúdo + caminhos de imagem.
export const RYO = {
  washi: "#FCFAF6", // branco quase-puro quente (fundo claro)
  ink: "#1C1A17", // tinta sumi
  inkSoft: "#58524C",
  gray: "#8A857C",
  sumi: "#1A1714", // fundo escuro (Visite/Reserva)
  paper: "#F7F3EA", // texto claro sobre escuro
  amber: "#DDA42B", // ouro / kin (acento único)
  line: "#E7E0D3", // hairline claro
} as const;

const IMG = "/demos/ryo-gastronomia";

export const NAV = ["A Casa", "O Omakase", "Reservar"];

export const HERO = {
  eyebrow: "OMAKASE — ITAIM BIBI",
  kanji: "良",
  tagline: ["Oito tempos,", "uma estação."],
  finalImg: `${IMG}/restaurante-por-dentro.jpg`,
  // deck de fotos menores que empilham na entrada
  deck: [
    { s: "sushi1", x: -105, y: -14, r: -4, w: 320, h: 418 },
    { s: "tarako", x: 135, y: -36, r: 3, w: 360, h: 240 },
    { s: "snack1", x: -190, y: 30, r: -6, w: 300, h: 300 },
    { s: "entremet", x: 185, y: 24, r: 5, w: 300, h: 400 },
    { s: "sashimi-de-lagostim", x: -60, y: 62, r: -2, w: 380, h: 252 },
    { s: "sumi-ika-cavatelli", x: 158, y: -54, r: 4, w: 312, h: 300 },
    { s: "osen-tamago", x: -170, y: -24, r: -5, w: 280, h: 404 },
    { s: "tomato-fresh", x: 105, y: 46, r: 2, w: 360, h: 240 },
    { s: "tewazari", x: 8, y: 4, r: 0, w: 382, h: 262 },
  ].map((c) => ({ ...c, img: `${IMG}/${c.s}.jpg` })),
};

export const CASA = {
  eyebrow: "A CASA",
  manifesto: ["O tempo, aqui,", "se mede em estações."],
  para:
    "Cozinha japonesa kaiseki conduzida pelo chef Edson Yamashita, pioneiro do omakase no Brasil. Um menu que acompanha as estações, servido a oito lugares ao balcão — onde cada detalhe é omotenashi, a arte japonesa de receber.",
  img: `${IMG}/sushi-sendo-cortado.jpg`,
};

export const OMAKASE = {
  eyebrow: "O OMAKASE",
  title: "Entregue-se ao chef.",
  para:
    "Omakase significa “deixo nas suas mãos”. São oito a dez tempos kaiseki, sem cardápio, ditados pelo que a estação oferece — cada prato finalizado diante de você, no ritmo do chef.",
  img: `${IMG}/sushi-zoom-alta-qualidade.jpg`,
  stats: [
    ["08", "Lugares ao balcão"],
    ["8–10", "Tempos por menu"],
    ["旬", "Ao ritmo da estação"],
  ] as const,
};

export const CHEF = {
  eyebrow: "O CHEF",
  name: "Edson Yamashita",
  role: "PIONEIRO DO OMAKASE NO BRASIL",
  bio:
    "Aos treze anos, Edson Yamashita entrou para a cozinha da família. Aos quinze, partiu para o Japão, onde se formou na tradição Edomae — em Tóquio e Kyoto, sob o mestre Sawamoto. De volta ao Brasil, trouxe o primeiro omakase de São Paulo e, com o Ryo, tornou-se o único chef japonês do país a alcançar duas estrelas Michelin.",
  quote: "Tudo acontece sobre o umami.",
  img: `${IMG}/chef.jpg`,
};

export const GALERIA = {
  eyebrow: "GALERIA",
  title: "À mesa.",
  photos: [
    "osen-tamago-sq",
    "snack1",
    "sushi-zoom-alta-qualidade-2",
    "sushi-zoom-alta-qualidade-3",
    "tarako",
    "sashimi-de-lagostim",
    "sumi-ika-cavatelli",
    "entremet",
    "robalo",
  ].map((s) => `${IMG}/${s}.jpg`),
};

export const VISITE = {
  eyebrow: "VISITE — ITAIM BIBI",
  title: "Será um prazer recebê-lo.",
  cta: "Reservar uma mesa",
  phone: "ou pelo telefone · (11) 99221-2525",
  phoneHref: "tel:+5511992212525",
  kanji: "良",
  endereco: { label: "ENDEREÇO", lines: ["Rua Pedroso Alvarenga, 665", "Itaim Bibi · São Paulo"] },
  horarios: { label: "HORÁRIOS", lines: ["Terça a sábado", "Almoço 12h – 15h · Jantar 19h – 23h"] },
  footerLinks: ["A Casa", "O Omakase", "Galeria", "Reservar"],
};
