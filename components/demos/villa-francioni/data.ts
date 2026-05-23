export const FRANCIONI_PALETTE = {
  nevoa: "#ECEAE3",
  pedra: "#DBD8CE",
  grafite: "#1B1F1B",
  neblina: "#6F736B",
  pinheiro: "#33402E",
  salvia: "#7E8B6E",
  terracota: "#A85D3E",
  vitral: "#7A3B52",
  noite: "#14180F",
  giz: "#EFEDE6",
} as const;

const P = "/demos/villa-francioni";

export const FRANCIONI_DATA = {
  nav: {
    wordmark: "Villa Francioni",
    links: [
      { label: "A CASA", href: "#sonho" },
      { label: "ARTE", href: "#arte" },
      { label: "OS VINHOS", href: "#vinhos" },
      { label: "VISITE", href: "#visite" },
    ],
  },
  hero: {
    photos: [
      `${P}/hero-janelao.jpg`,
      `${P}/hero-fachada.jpg`,
      `${P}/hero-cave.jpg`,
      `${P}/hero-mesa.jpg`,
    ],
    eyebrow: "SERRA CATARINENSE · SÃO JOAQUIM · 1.260 M",
    wordmark: "Villa Francioni",
    tagline: "Onde o vinho é arte.",
    cue: "ROLE PARA DESCER",
  },
  sonho: {
    headline: ["Um sonho de família,", "erguido em cinco níveis."],
    body: "Manoel Dilor de Freitas buscou o terroir perfeito por Argentina, Chile, Itália e França — e o encontrou a 1.260 metros, na serra de São Joaquim. Batizou a vinícola com o nome da mãe, Agripina Francioni, e a ergueu como arte: cinco níveis onde o vinho desce pela própria gravidade. Não viveu para vê-la pronta; seus filhos concluíram o sonho.",
    cta: "CONHEÇA A CASA",
    photo: {
      src: `${P}/sonho-tanques.jpg`,
      alt: "Tanques de fermentação distribuídos pelos níveis da vinícola, vistos da mureta de ferro",
      caption: "PRODUÇÃO POR GRAVIDADE · CINCO NÍVEIS",
    },
  },
  altitude: {
    eyebrow: "O TERROIR · SERRA CATARINENSE",
    headline: ["A 1.260 metros,", "o frio faz o vinho."],
    body: "São Joaquim é a vinícola pioneira da maior região de altitude do Brasil — entre 900 e 1.400 metros, onde o inverno traz neve e o verão alterna dias quentes com noites frias. Essa amplitude faz a uva amadurecer devagar, concentrando aroma, cor e a acidez viva que assina os vinhos de altitude.",
    photo: {
      src: `${P}/altitude-vinhedo.jpg`,
      alt: "Vinhedo de altitude em São Joaquim, com a luz do fim de tarde entre as parreiras",
    },
    stats: [
      { n: "1.260 m", l: "DE ALTITUDE" },
      { n: "IG", l: "VINHOS DE ALTITUDE" },
      { n: "Neve", l: "NO INVERNO" },
    ],
  },
  arte: {
    eyebrow: "VINHO COMO ARTE",
    headline: ["Uma vinícola que é", "obra de arte."],
    body: "Fiel ao desejo do fundador — fazer vinho com amor e arte —, a casa é uma obra em si: cada vidraça, cada mosaico e cada parede carrega história.",
    photo: {
      src: `${P}/arte-galeria.jpg`,
      alt: "Galeria de arte da Villa Francioni — corredor abobadado de tijolo com obras e vitrines",
      caption: "GALERIA DE ARTE",
    },
    items: [
      { name: "Vitrais de igreja", desc: "Vidraças de igrejas do Uruguai, hoje luminárias." },
      { name: "Mosaicos de Rodrigo de Haro", desc: "Painéis cerâmicos do renomado artista catarinense." },
      { name: "Galeria de arte", desc: "De Camille Claudel a Juarez Machado." },
    ],
  },
  vinhos: {
    eyebrow: "OS VINHOS · VINHOS DE ALTITUDE",
    headline: ["Da terra alta,", "para a taça."],
    body: "Cultivados a 1.260 metros, os rótulos da Villa Francioni são premiados no Brasil e no exterior. Três linhas — Villa Francioni, Joaquim e Aparados — traduzem a serra em cada taça.",
    photo: {
      src: `${P}/vinho-garrafa.jpg`,
      alt: "Garrafa do Villa Francioni VF Rosé sobre madeira, com fundo dourado",
      caption: "VILLA FRANCIONI · ROSÉ",
    },
    icons: [
      { name: "Francesco", desc: "Blend de cinco castas — o tinto-ícone da casa." },
      { name: "Dilor", desc: "Tributo ao fundador, Manoel Dilor de Freitas." },
      { name: "Juarez Machado", desc: "Safra assinada com o artista (2022)." },
    ],
  },
  visite: {
    eyebrow: "VISITE · ENOTURISMO",
    headline: ["Venha subir", "até a serra."],
    body: "Tours guiados percorrem os cinco níveis da vinícola e terminam em degustação — a serra catarinense emoldurada pelos janelões.",
    cta: "AGENDE SUA VISITA",
    info: "São Joaquim · SC-114 · ~90 min · reserva online",
    photo: {
      src: `${P}/visite-lounge.jpg`,
      alt: "Sala de degustação com janelões e vista da serra catarinense ao entardecer",
      caption: "SALA DE DEGUSTAÇÃO",
    },
    tours: [
      { name: "Taças nas Mãos", desc: "Visita guiada + degustação de quatro vinhos." },
      { name: "Tour VIP", desc: "A experiência premium da casa." },
      { name: "Tour Cave", desc: "Imersão na cave, com rótulos premium." },
      { name: "Pôr do Sol", desc: "A serra na hora dourada." },
    ],
  },
  footer: {
    wordmark: "Villa Francioni",
    tagline: "Vinhos de altitude · São Joaquim, Serra Catarinense",
    lema: "Vinho elaborado com amor e arte.",
    cols: [
      { head: "VISITE", items: ["Rodovia SC-114, km 300", "São Joaquim — SC", "Tours com reserva online"] },
      { head: "EXPLORE", items: ["A Casa", "Arte", "Os Vinhos", "Visite"] },
      { head: "SIGA", items: ["Instagram", "Facebook"] },
    ],
    copyright: "© 2026 Villa Francioni · São Joaquim, SC",
    credit: "Site por Nashpages",
  },
} as const;
