import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 introduziu allowlist `qualities`. Default só permite [75].
    // Sem isto, qualquer quality={100} na <Image> é silenciosamente reduzido.
    qualities: [75, 90, 100],
    // AVIF: ~50% menor que JPEG na mesma qualidade visual. WebP fallback.
    // Next escolhe automaticamente o melhor formato suportado pelo browser.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
