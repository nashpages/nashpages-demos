import type { Metadata } from "next";
import { ElisangelaLayout } from "@/components/demos/dra-elisangela-medeiros/ElisangelaLayout";

export const metadata: Metadata = {
  title: "Dra. Elisangela Medeiros — Dermatologia em Fortaleza",
  description:
    "Dra. Elisangela Medeiros — dermatologia clínica, cirúrgica, estética e tricologia em Fortaleza. Pátio Aldeota · Clínica Biomed · Grupo Clay. CRM-CE 29844 · RQE 18195. Atende em PT · EN · FR.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ElisangelaLayout />;
}
