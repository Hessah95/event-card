import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.glb$/,
      type: "asset/resource", // Treat as a static asset
    });
    return config;
  },
};

export default nextConfig;
