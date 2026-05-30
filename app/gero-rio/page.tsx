import type { Metadata } from "next";
import { GeroLayout } from "@/components/demos/gero-rio/GeroLayout";

export const metadata: Metadata = {
  title: "Gero Rio — Cucina Italiana · Ipanema, Rio de Janeiro",
  description:
    "Gero Rio — clássicos da cozinha italiana à beira-mar de Ipanema, no Hotel Fasano. Sob o comando do chef Luigi Moressa, desde 2002.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <GeroLayout />;
}
