// Portfólio v2 — dados dos projetos selecionados (escolhidos à mão).
// Ryo = projeto-âncora (no hero, em destaque). Os outros 4 = feed editorial.
// Cada projeto carrega a PRÓPRIA fonte/identidade; logos em preto puro,
// fotos coloridas (exceto o retrato do chef, em P&B). Lados ALTERNAM.

export type LogoFont = "shippori" | "cormorant" | "inter" | "fraunces";

export const FONT_VAR: Record<LogoFont, string> = {
  shippori: "'Shippori Mincho', serif",
  cormorant: "var(--font-cormorant-garamond)",
  inter: "var(--font-inter)",
  fraunces: "var(--font-fraunces)",
};

export type ProjectLogo = {
  font: LogoFont;
  main: string;
  sub?: string; // sub-texto (uppercase, pequeno)
  size: number; // px no desktop (linha principal)
  weight?: number;
  letterSpacing?: string;
};

export type Project = {
  index: string;
  slug: string; // rota da demo ao vivo (abre ao clicar)
  name: string;
  category: string;
  photo: string; // /public/demos/<slug>/...
  logoSide: "left" | "right"; // de que lado fica a logo
  logo: ProjectLogo;
};

export const CONTACT_HREF = "https://nashpages.com.br"; // TODO: WhatsApp real do Enzo

export const RYO = {
  index: "01",
  slug: "ryo-gastronomia",
  name: "Ryo Gastronomia",
  category: "GASTRONOMIA",
  photo: "/demos/ryo-gastronomia/chef.jpg",
  kanji: "良",
};

export const FEED: Project[] = [
  {
    index: "02",
    slug: "fasano-trancoso",
    name: "Fasano Trancoso",
    category: "HOTELARIA",
    photo: "/demos/fasano-trancoso/acomod-casa-piscina.jpg",
    logoSide: "left",
    logo: { font: "cormorant", main: "Fasano", sub: "TRANCOSO", size: 84, weight: 500, letterSpacing: "-0.005em" },
  },
  {
    index: "03",
    slug: "cyrela-by-pininfarina",
    name: "Cyrela by Pininfarina",
    category: "IMÓVEL",
    photo: "/demos/cyrela-by-pininfarina/fachada.jpg",
    logoSide: "right",
    logo: { font: "inter", main: "CYRELA", sub: "BY PININFARINA", size: 76, weight: 500, letterSpacing: "0.04em" },
  },
  {
    index: "04",
    slug: "bermudes-advogados",
    name: "Bermudes Advogados",
    category: "ADVOCACIA",
    photo: "/demos/bermudes-advogados/recepcao.jpg",
    logoSide: "left",
    logo: { font: "fraunces", main: "Bermudes", size: 80, weight: 400, letterSpacing: "-0.02em" },
  },
  {
    index: "05",
    slug: "gero-rio",
    name: "Gero Rio",
    category: "GASTRONOMIA",
    photo: "/demos/gero-rio/espaco-salao.jpg",
    logoSide: "right",
    logo: { font: "fraunces", main: "Gero Rio", size: 80, weight: 600, letterSpacing: "-0.01em" },
  },
];
