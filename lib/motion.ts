// Tokens de motion compartilhados — easings e durações canônicos da demo.
// Aplicar em todos os Framer Motion variants pra manter ritmo coeso.

export const EASE = {
  outExpo: [0.32, 0.72, 0, 1] as const, // canonical — entradas e parallax
  outCubic: [0.16, 1, 0.3, 1] as const, // suaves
  inOut: [0.4, 0, 0.2, 1] as const, // hover
} as const;

export const DURATION = {
  hover: 0.28, // 280ms — hover transitions
  entrance: 0.48, // 480ms — fade-up entrance
  display: 0.8, // 800ms — headline entrance lento
  parallax: 1.2, // 1200ms — sensação cinematográfica
} as const;

export const STAGGER = {
  word: 0.08, // word entrance
  card: 0.1, // cards em grid
  section: 0.15, // sections sequenciais
} as const;
