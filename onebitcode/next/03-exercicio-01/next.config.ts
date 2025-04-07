import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.apple.com"
      }
    ]
  }
};

export default nextConfig;
