import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "217.114.7.66",
        port: "9080",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
