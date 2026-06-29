import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
    rules: {
      "*.glb": { type: "asset" },
      "*.gltf": { type: "asset" },
    },
  },
  async rewrites() { // allow for spline CDN url (live-updating url)
    return [
      {
        source: '/spline/:path*',
        destination: 'https://prod.spline.design/:path*'
      }
    ]
  }
};

export default nextConfig;