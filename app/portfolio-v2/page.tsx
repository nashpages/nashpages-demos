import type { Metadata } from "next";
import { PortfolioV2 } from "@/components/portfolio-v2/PortfolioV2";

export const metadata: Metadata = {
  title: "Nashpages — Portfólio",
  description: "Trabalhos selecionados da Nashpages.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PortfolioV2 />;
}
