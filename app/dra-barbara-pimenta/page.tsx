import type { Metadata } from "next";
import { BarbaraLayout } from "@/components/demos/dra-barbara/BarbaraLayout";

export const metadata: Metadata = {
  title: "Dra. Bárbara Pimenta — Dermatologia em Florianópolis",
  description:
    "Dermatologia clínica, cirúrgica e estética em Florianópolis. CRM/SC 27.312 · RQE 17.648.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <BarbaraLayout />;
}
