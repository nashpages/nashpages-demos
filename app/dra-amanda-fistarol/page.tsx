import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dra. Amanda Fistarol — Dermatologia em Blumenau",
  description:
    "Dermatologia clínica, cirúrgica, estética e oncológica em Blumenau. CRM 24.614 SC · RQE 20.197.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main style={{ padding: 48, fontFamily: "sans-serif" }}>
      <p>Em reconstrução.</p>
    </main>
  );
}
