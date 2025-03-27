import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "206.189.14.25",
        port: "9090",
        pathname: "/media/avatar/**",
      },
    ],
  },
};

export default nextConfig;
