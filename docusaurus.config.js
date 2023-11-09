/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Anderson Marlon // Yagasaki7K",
  url: "https://yagasaki.vercel.app",
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
    defaultLocale: "pt-br",
    locales: ["pt-br"],
  },

  plugins: [
    "docusaurus-plugin-sass",
    require.resolve("@cmfcmf/docusaurus-search-local"),
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
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
      image: "https://github.com/Yagasaki7K.png",
      navbar: {
        title: "Yagasaki Zettelkasten",
        logo: {
          alt: "Anderson Marlon // Software Developer",
          src: "https://github.com/yagasaki7k.png",
        },
        items: [
          //   { to: "/", label: "Início", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/docs/git-push-results-in-authentication-failed", label: "Docs", position: "left" },

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
      footer: {
        style: "dark",
        links: [
          {
            title: "Projetos",
            items: [
              {
                label: "Kalify Inc",
                to: "https://kalify.vercel.app/#projects",
              },
              {
                label: "Essentials",
                to: "https://webessentials.com.br/",
              },
              {
                label: "FindYourPet",
                to: "https://findyourpet.vercel.app/",
              },
              {
                label: "Onigiri Hardcore",
                to: "https://onigirihardcore.vercel.app/",
              },
            ],
          },
          {
            title: "Contato",
            items: [
              {
                label: "Email",
                href: "mailto:anderson18.marlon@gmail.com",
              },
              {
                label: "Linkedin",
                href: "https://linkedin.com/in/andersonmarlon",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/yagasaki7k",
              },
            ],
          },
          {
            title: "Meus Trabalhos",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Docs",
                to: "/docs/git-push-results-in-authentication-failed",
              },
              {
                label: "Github",
                to: "https://github.com/Yagasaki7K",
              },
              {
                label: "Behance",
                to: "https://behance.net/yagasaki",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anderson "Yagasaki" Marlon`,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
    }),
};

module.exports = config;
