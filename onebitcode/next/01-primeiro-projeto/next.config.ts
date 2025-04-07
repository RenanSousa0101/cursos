import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images-assets.nasa.gov"
      }
    ]
  }
};

export default nextConfig;