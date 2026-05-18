import type { Metadata } from "next";
import { BermudesLayout } from "@/components/demos/bermudes-advogados/BermudesLayout";

export const metadata: Metadata = {
  title: "Bermudes Advogados — Rio · São Paulo · Belo Horizonte · Brasília",
  description:
    "Bermudes Advogados — líder brasileiro em contencioso, arbitragem e insolvência. Quatro escritórios, cento e trinta advogados. Chambers Global. Desde 1969.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <BermudesLayout />;
}
