import type { NextConfig } from "next";
import type { Configuration } from 'webpack'

const nextConfig = {
  /* handle 3D model files */
  webpack: (config: Configuration) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: { loader: 'file-loader' }
    });
    return config;
  }
};

export default nextConfig;
