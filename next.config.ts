import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    qualities: [75, 85, 100]
  },
  compiler: {
    emotion: true,
  }
};

export default nextConfig;
