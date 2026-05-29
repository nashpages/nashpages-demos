type Props = {
  /** altura em px; a largura é calculada na proporção do símbolo */
  h?: number;
  className?: string;
};

/** Símbolo da Pórtico: um pórtico (⊓) — dois pilares + viga, aberto embaixo. */
export function PorticoMark({ h = 24, className }: Props) {
  const w = (h * 88) / 92;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 88 92"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="18" height="92" />
      <rect x="70" y="0" width="18" height="92" />
      <rect x="0" y="0" width="88" height="18" />
    </svg>
  );
}
