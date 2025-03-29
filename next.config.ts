import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.skkamni.ru",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
