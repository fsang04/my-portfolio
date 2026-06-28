import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
    rules: {
      "*.glb": { type: "asset" },
      "*.gltf": { type: "asset" },
    },
  },
};

export default nextConfig;
