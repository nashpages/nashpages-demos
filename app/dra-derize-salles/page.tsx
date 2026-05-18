import type { Metadata } from "next";
import { DerizeLayout } from "@/components/demos/dra-derize-salles/DerizeLayout";

export const metadata: Metadata = {
  title: "Dra. Derize Salles — Dermatologia em Fortaleza",
  description:
    "Dra. Derize Salles — dermatologia clínica, estética e oncológica preventiva em Fortaleza. Pátio Dom Luís, Aldeota. CRM-CE 6170 · RQE 4891.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <DerizeLayout />;
}
