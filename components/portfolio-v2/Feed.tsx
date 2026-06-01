"use client";

import { Float } from "./MouseParallax";
import { ParallaxImage, ProjectLogo, Eyebrow, ProjectName } from "./ui";
import { FEED, type Project } from "./data";

function PhotoBlock({ p }: { p: Project }) {
  return (
    <Float depth={14} className="w-full shrink-0 md:w-[clamp(300px,46vw,660px)]">
      <ParallaxImage src={p.photo} alt={p.name} className="aspect-[33/20]" />
      <div className="mt-4">
        <Eyebrow>
          {p.index} · {p.category}
        </Eyebrow>
        <ProjectName>{p.name}</ProjectName>
      </div>
    </Float>
  );
}

function LogoBlock({ p }: { p: Project }) {
  return (
    <Float depth={26} className="flex w-full md:flex-1">
      <div className={p.logoSide === "left" ? "" : "md:ml-auto"}>
        <ProjectLogo logo={p.logo} align={p.logoSide} />
      </div>
    </Float>
  );
}

export function Feed() {
  return (
    <div>
      {FEED.map((p) => (
        <section key={p.slug} className="py-[clamp(40px,7vh,72px)]">
          <a
            href={`/${p.slug}`}
            target="_blank"
            rel="noreferrer"
            className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 md:flex-row md:items-center md:gap-[clamp(24px,5vw,80px)] md:px-14"
          >
            {p.logoSide === "left" ? (
              <>
                <LogoBlock p={p} />
                <PhotoBlock p={p} />
              </>
            ) : (
              <>
                <PhotoBlock p={p} />
                <LogoBlock p={p} />
              </>
            )}
          </a>
        </section>
      ))}
    </div>
  );
}
