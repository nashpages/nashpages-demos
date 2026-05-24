import type { Metadata } from "next";
import { PortfolioLoop } from "@/components/portfolio/PortfolioLoop";

export const metadata: Metadata = {
  title: "Nashpages — Portfólio",
  description: "Trabalhos selecionados da Nashpages.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PortfolioLoop />;
}
