import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    /* Exports Settings  */
    output: "export",
    images: {
        unoptimized: true,
    },
    allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
};

export default nextConfig;
