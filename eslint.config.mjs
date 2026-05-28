import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
    ...nextVitals,
    ...nextTypescript,
    {
        ignores: [
            ".next/**",
            "out/**",
            "build/**",
            "next-env.d.ts",
            "bun-env.d.ts",
            "getSecurity.ts",
        ],
    },
    {
        rules: {
            "@next/next/no-img-element": "off",
        },
    },
];

export default config;
