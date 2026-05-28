import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const themeScript = `
(function () {
  try {
    var storedTheme = window.localStorage.getItem("theme");
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : (prefersDark ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="pt-br" data-scroll-behavior="smooth">
                <Head>
                    <script dangerouslySetInnerHTML={{ __html: themeScript }} />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/dracula.min.css" />
                    <meta name="description" content="Hey! I’m Anderson Marlon, a software engineer and indie hacker - i'm netrunner btw." />
                    <link rel="canonical" href="https://yagasaki.vercel.app/" />
                    <meta property="og:url" content="https://yagasaki.vercel.app/" />
                    <meta property="og:title" content="Hey! I’m Anderson Marlon, a software engineer and indie hacker - i'm netrunner btw" />
                    <meta property="og:description" content="Hey! I’m Anderson Marlon, a software engineer and indie hacker - i'm netrunner btw" />
                    <meta property="og:image" content="/thumbnail.png" />
                    <meta property="og:image:width" content="460" />
                    <meta property="og:image:height" content="460" />
                    <meta property="og:image:alt" content="Anderson Marlon" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:site_name" content="yagasaki7k" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@yagasaki7k" />
                    <meta name="twitter:creator" content="@yagasaki7k" />
                    <meta
                        name="keywords"
                        content="anderson, marlon, himura, yagasaki, 7k, programador, programação, code, código aberto, github, linkedin, twitter, x, tomaz, alves, desenvolvedor, engide,
                        git, javascript, typescript, css, html, supabase, firebase, hasura, graphql, elysia, bun, node, whatsapp, api, openai, mysql, sqlite, mongodb, software, engineer, developer"
                    />

                    <meta name="author" content="Anderson 'Yagasaki' Marlon" />
                    <meta name="robots" content="index, follow" />
                    <link rel="shortcut icon" href="https://github.com/Yagasaki7K.png" type="image/png" />
                    <meta property="og:locale" content="pt_BR" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
