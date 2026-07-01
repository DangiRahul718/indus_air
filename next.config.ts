import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/landing-v2',
        destination: '/compressor-manufacturer',
        permanent: true, // 301 redirect — preserves SEO link equity
      },
    ];
  },
};

export default nextConfig;
