import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    transpilePackages: ["styled-components", "next-seo"],
    turbopack: {
        resolveAlias: {
            "next-seo": "next-seo/lib/next-seo.js",
        },
    },
    images: {
        unoptimized: true,
    },
    allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
};

export default nextConfig;
