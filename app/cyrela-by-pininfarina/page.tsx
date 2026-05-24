import type { Metadata } from "next";
import { CyrelaLayout } from "@/components/demos/cyrela-by-pininfarina/CyrelaLayout";

export const metadata: Metadata = {
  title: "Cyrela by Pininfarina — Vila Olímpia, São Paulo",
  description:
    "Cyrela by Pininfarina — branded residence assinada pela Pininfarina, o estúdio italiano que desenha a Ferrari desde 1930. Fachada esculpida pelo vento, na Vila Olímpia, São Paulo.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CyrelaLayout />;
}
