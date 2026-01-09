import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    output: "export",
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
