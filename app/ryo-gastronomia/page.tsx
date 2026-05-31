import type { Metadata } from "next";
import { RyoLayout } from "@/components/demos/ryo-gastronomia/RyoLayout";

export const metadata: Metadata = {
  title: "Ryo Gastronomia — Omakase · Itaim Bibi, São Paulo",
  description:
    "Ryo Gastronomia — cozinha japonesa kaiseki e o omakase do chef Edson Yamashita, no Itaim Bibi. Oito tempos, uma estação.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <RyoLayout />;
}
