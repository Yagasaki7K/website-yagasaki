/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Anderson Marlon // Yagasaki7K",
    description: "Software Developer @ Stone & Kalify Inc",
    url: "https://yagasaki.vercel.app",
    image: "https://i.imgur.com/1ypU0Xs.png",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "https://github.com/Yagasaki7k.png",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "Yagasaki7K", // Usually your GitHub org/user name.
    projectName: "website-yagasaki", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    plugins: ["docusaurus-plugin-sass"],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    // sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "Yagasaki",
                logo: {
                    alt: "Anderson Marlon // Software Developer",
                    src: "https://github.com/yagasaki7k.png",
                },
                items: [
                    { to: "/", label: "Início", position: "left" },
                    { to: "/blog", label: "Blog", position: "left" },

                    {
                        href: "https://twitter.com/Yagasaki7k",
                        label: "Twitter",
                        position: "right",
                    },
                    {
                        href: "https://github.com/Yagasaki7k",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
        }),
};

module.exports = config;
