"use client";

import { SmoothScroll } from "@/components/SmoothScroll";
import { MouseParallaxProvider, Float } from "./MouseParallax";
import { Hero } from "./Hero";
import { Feed } from "./Feed";
import { CONTACT_HREF } from "./data";

function Nav() {
  return (
    <Float depth={8}>
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-5 pt-7 md:px-14 md:pt-10">
        <span
          style={{
            fontFamily: "var(--font-geist)",
            fontWeight: 500,
            fontSize: 22,
            letterSpacing: "-0.03em",
            color: "#0E0B0B",
          }}
        >
          nash/pages
        </span>
        <a
          href={CONTACT_HREF}
          target="_blank"
          rel="noreferrer"
          className="transition-opacity duration-200 hover:opacity-60"
          style={{ fontFamily: "var(--font-geist)", fontWeight: 400, fontSize: 15, color: "#0E0B0B" }}
        >
          Contato
        </a>
      </header>
    </Float>
  );
}

export function PortfolioV2() {
  return (
    <>
      {/* Shippori Mincho (kanji 良) — subset latin do next/font não traz o glifo */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500&display=swap"
        rel="stylesheet"
      />

      <SmoothScroll />
      <MouseParallaxProvider>
        {/* overflow-x-clip (não hidden) p/ o cursor-float não gerar scrollbar horizontal */}
        <main className="min-h-screen overflow-x-clip bg-white text-[#0E0B0B]">
          <Nav />
          <Hero />
          <Feed />
          <div className="h-[18vh]" />
        </main>
      </MouseParallaxProvider>
    </>
  );
}
