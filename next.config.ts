import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/release.apk',
        destination: 'https://github.com/battlezonexpro-bot/battlexclash.github.io/releases/download/v1.0/app-debug.apk',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
