import type { Metadata } from "next";
import { RenataLayout } from "@/components/demos/dra-renata-americo/RenataLayout";

export const metadata: Metadata = {
  title: "Dra. Renata Americo — Dermatologia em Balneário Camboriú",
  description:
    "Dermatologia clínica, cirúrgica e estética. Oncologia cutânea pelo Hospital Sírio-Libanês. CRM-SC 16.083 · RQE 19.621.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <RenataLayout />;
}
