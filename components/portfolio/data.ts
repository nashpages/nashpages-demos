// Mural do portfólio Nashpages — "loop infinito com logo-âncora".
// Cada tile é uma hero de uma das 5 demos, posicionada dentro de UM ciclo.
// O ciclo se repete em loop (ver PortfolioLoop): por isso CYCLE_HEIGHT é fixo.
// Coordenadas em px num palco de STAGE_WIDTH centralizado (desktop-first; mobile vem depois).

export type Tile = {
  slug: string; // rota da demo (abre ao clicar)
  name: string;
  label: string; // contexto auto-explicativo (nome + setor · local)
  img: string; // foto em /public/demos/<slug>/
  left: number; // px no palco
  top: number; // px no ciclo
  width: number; // px
  height: number; // px
};

export const STAGE_WIDTH = 1500;
export const CYCLE_HEIGHT = 1700;

export const CONTACT_HREF = "https://nashpages.com.br";

export const TILES: Tile[] = [
  {
    slug: "fasano-trancoso",
    name: "Fasano Trancoso",
    label: "FASANO TRANCOSO — HOTELARIA · TRANCOSO/BA",
    img: "/demos/fasano-trancoso/hero-aerea.jpg",
    left: 40,
    top: 60,
    width: 460,
    height: 300,
  },
  {
    slug: "villa-francioni",
    name: "Villa Francioni",
    label: "VILLA FRANCIONI — VINÍCOLA · SÃO JOAQUIM/SC",
    img: "/demos/villa-francioni/hero-fachada.jpg",
    left: 1080,
    top: 120,
    width: 360,
    height: 250,
  },
  {
    slug: "cyrela-by-pininfarina",
    name: "Cyrela by Pininfarina",
    label: "CYRELA BY PININFARINA — IMÓVEL · SÃO PAULO",
    img: "/demos/cyrela-by-pininfarina/fachada.jpg",
    left: 630,
    top: 380,
    width: 250,
    height: 360,
  },
  {
    slug: "casa-valduga",
    name: "Casa Valduga",
    label: "CASA VALDUGA — VINÍCOLA · SERRA GAÚCHA/RS",
    img: "/demos/casa-valduga/hero-entrada.jpg",
    left: 70,
    top: 520,
    width: 320,
    height: 380,
  },
  {
    slug: "bermudes-advogados",
    name: "Bermudes Advogados",
    label: "BERMUDES — ADVOCACIA · RIO · SP · BH · BSB",
    img: "/demos/bermudes-advogados/city-rio.jpg",
    left: 1090,
    top: 560,
    width: 360,
    height: 250,
  },
  {
    slug: "fasano-trancoso",
    name: "Fasano Trancoso",
    label: "FASANO TRANCOSO — HOTELARIA · TRANCOSO/BA",
    img: "/demos/fasano-trancoso/mar-piscinas.jpg",
    left: 380,
    top: 1000,
    width: 300,
    height: 200,
  },
  {
    slug: "cyrela-by-pininfarina",
    name: "Cyrela by Pininfarina",
    label: "CYRELA BY PININFARINA — IMÓVEL · SÃO PAULO",
    img: "/demos/cyrela-by-pininfarina/hero-piscina-dia.jpg",
    left: 120,
    top: 1230,
    width: 300,
    height: 210,
  },
  {
    slug: "villa-francioni",
    name: "Villa Francioni",
    label: "VILLA FRANCIONI — VINÍCOLA · SÃO JOAQUIM/SC",
    img: "/demos/villa-francioni/hero-janelao.jpg",
    left: 1010,
    top: 1180,
    width: 330,
    height: 235,
  },
  {
    slug: "casa-valduga",
    name: "Casa Valduga",
    label: "CASA VALDUGA — VINÍCOLA · SERRA GAÚCHA/RS",
    img: "/demos/casa-valduga/adega.jpg",
    left: 660,
    top: 1430,
    width: 280,
    height: 195,
  },
];
