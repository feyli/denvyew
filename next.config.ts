import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    outputFileTracingRoot: path.join(__dirname)
//    experimental: {
//	webpackMemoryOptimizations: true,
//    }
    output: 'standalone',
};

export default nextConfig;
