import type { Metadata } from "next";
import { AntabiLayout } from "@/components/demos/antabi-advogados/AntabiLayout";

export const metadata: Metadata = {
  title: "Antabi Advogados — Rangel & Sousa · Centro · Rio de Janeiro",
  description:
    "Antabi, Rangel & Sousa Advogados — boutique tributária multidisciplinar. Contencioso fiscal, consultoria, incentivo fiscal e incentivos à pesquisa e desenvolvimento. Desde 2014.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AntabiLayout />;
}
