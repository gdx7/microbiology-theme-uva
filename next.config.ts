// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // You might need to add other image sources if your data.ts files link to external images
    ],
  },
};

export default nextConfig;