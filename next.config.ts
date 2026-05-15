import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 introduziu allowlist `qualities`. Default só permite [75].
    // Sem isto, qualquer quality={100} na <Image> é silenciosamente reduzido.
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
