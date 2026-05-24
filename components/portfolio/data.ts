// Mural do portfólio Nashpages — "loop infinito com logo-âncora".
// Cada tile é uma hero de uma das 5 demos, posicionada dentro de UM ciclo
// (o ciclo se repete em loop — por isso cycleHeight é fixo por view).
// Dois layouts: DESKTOP (palco largo, mural denso) e MOBILE (palco estreito,
// fotos alternando lados). Coordenadas em px no palco de stageWidth.

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

export type ViewConfig = {
  tiles: Tile[];
  stageWidth: number;
  cycleHeight: number;
};

export const CONTACT_HREF = "https://nashpages.com.br";

// ---------- DESKTOP (palco 1500) ----------
const DESKTOP_TILES: Tile[] = [
  { slug: "fasano-trancoso", name: "Fasano Trancoso", label: "FASANO TRANCOSO — HOTELARIA · TRANCOSO/BA", img: "/demos/fasano-trancoso/hero-aerea.jpg", left: 40, top: 60, width: 460, height: 300 },
  { slug: "villa-francioni", name: "Villa Francioni", label: "VILLA FRANCIONI — VINÍCOLA · SÃO JOAQUIM/SC", img: "/demos/villa-francioni/hero-fachada.jpg", left: 1080, top: 120, width: 360, height: 250 },
  { slug: "cyrela-by-pininfarina", name: "Cyrela by Pininfarina", label: "CYRELA BY PININFARINA — IMÓVEL · SÃO PAULO", img: "/demos/cyrela-by-pininfarina/fachada.jpg", left: 630, top: 380, width: 250, height: 360 },
  { slug: "casa-valduga", name: "Casa Valduga", label: "CASA VALDUGA — VINÍCOLA · SERRA GAÚCHA/RS", img: "/demos/casa-valduga/hero-entrada.jpg", left: 70, top: 520, width: 320, height: 380 },
  { slug: "bermudes-advogados", name: "Bermudes Advogados", label: "BERMUDES — ADVOCACIA · RIO · SP · BH · BSB", img: "/demos/bermudes-advogados/city-rio.jpg", left: 1090, top: 560, width: 360, height: 250 },
  { slug: "fasano-trancoso", name: "Fasano Trancoso", label: "FASANO TRANCOSO — HOTELARIA · TRANCOSO/BA", img: "/demos/fasano-trancoso/mar-piscinas.jpg", left: 380, top: 1000, width: 300, height: 200 },
  { slug: "cyrela-by-pininfarina", name: "Cyrela by Pininfarina", label: "CYRELA BY PININFARINA — IMÓVEL · SÃO PAULO", img: "/demos/cyrela-by-pininfarina/hero-piscina-dia.jpg", left: 120, top: 1230, width: 300, height: 210 },
  { slug: "villa-francioni", name: "Villa Francioni", label: "VILLA FRANCIONI — VINÍCOLA · SÃO JOAQUIM/SC", img: "/demos/villa-francioni/hero-janelao.jpg", left: 1010, top: 1180, width: 330, height: 235 },
  { slug: "casa-valduga", name: "Casa Valduga", label: "CASA VALDUGA — VINÍCOLA · SERRA GAÚCHA/RS", img: "/demos/casa-valduga/adega.jpg", left: 660, top: 1430, width: 280, height: 195 },
];

// ---------- MOBILE (palco 390, fotos alternando lados) ----------
const MOBILE_TILES: Tile[] = [
  { slug: "fasano-trancoso", name: "Fasano Trancoso", label: "FASANO TRANCOSO — HOTELARIA · BA", img: "/demos/fasano-trancoso/hero-aerea.jpg", left: 16, top: 80, width: 250, height: 165 },
  { slug: "villa-francioni", name: "Villa Francioni", label: "VILLA FRANCIONI — SÃO JOAQUIM/SC", img: "/demos/villa-francioni/hero-fachada.jpg", left: 150, top: 300, width: 224, height: 155 },
  { slug: "cyrela-by-pininfarina", name: "Cyrela by Pininfarina", label: "CYRELA BY PININFARINA — SP", img: "/demos/cyrela-by-pininfarina/fachada.jpg", left: 30, top: 500, width: 150, height: 215 },
  { slug: "casa-valduga", name: "Casa Valduga", label: "CASA VALDUGA — SERRA GAÚCHA/RS", img: "/demos/casa-valduga/hero-entrada.jpg", left: 190, top: 540, width: 184, height: 138 },
  { slug: "bermudes-advogados", name: "Bermudes Advogados", label: "BERMUDES — ADVOCACIA · RIO+SP", img: "/demos/bermudes-advogados/city-rio.jpg", left: 50, top: 760, width: 220, height: 150 },
  { slug: "fasano-trancoso", name: "Fasano Trancoso", label: "FASANO TRANCOSO — HOTELARIA · BA", img: "/demos/fasano-trancoso/mar-piscinas.jpg", left: 180, top: 960, width: 194, height: 130 },
  { slug: "cyrela-by-pininfarina", name: "Cyrela by Pininfarina", label: "CYRELA BY PININFARINA — SP", img: "/demos/cyrela-by-pininfarina/hero-piscina-dia.jpg", left: 24, top: 1110, width: 210, height: 145 },
];

export const DESKTOP: ViewConfig = { tiles: DESKTOP_TILES, stageWidth: 1500, cycleHeight: 1700 };
export const MOBILE: ViewConfig = { tiles: MOBILE_TILES, stageWidth: 390, cycleHeight: 1500 };
