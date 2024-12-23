import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { NextSeo } from 'next-seo';
import { Toaster } from 'sonner';

export default class MyDocument extends Document {

    // Fast refresh with NextJS doesn't broken the CSS
    static async getInitialProps(ctx: any) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App: any) => (props: any) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
    // Finish Here

    render() {
        return (
            <Html lang="pt-br">
                <NextSeo
                    title='Anderson Marlon // Yagasaki7K'
                    description='Software Developer'
                    canonical={`https://yagasaki.dev/`}
                    openGraph={{
                        url: 'https://yagasaki.dev/',
                        title: 'Anderson Marlon // Yagasaki7K',
                        description: 'Software Developer',
                        images: [
                            {
                                url: 'https://cdn-images-1.medium.com/max/800/0*eBBvNAU5Qz9roeNf.png',
                                width: 460,
                                height: 460,
                                alt: 'Anderson Marlon // Yagasaki7K',
                                type: 'image/jpeg',
                            }
                        ],
                        siteName: 'Anderson Marlon // Yagasaki7K',
                    }}
                    twitter={{
                        handle: '@Yagasaki7K',
                        site: '@Yagasaki7K',
                        cardType: 'summary_large_image',
                    }}
                />

                <Toaster richColors position="top-right" />

                <Head>
                    <meta name="keywords" content="Desenvolvedor front-end, Front-end developer, Desenvolvedor web, Web developer, Desenvolvedor de interfaces, Interface developer, Desenvolvedor de UX, UX developer, Desenvolvedor de UI, UI developer, Software developer, Programador, Developer, Engenheiro de software, Software engineer, Desenvolvedor de back-end, Back-end developer, Desenvolvedor full-stack, Full-stack developer, Desenvolvedor de jogos, Game developer, Agência, Agência de desenvolvimento, Web agency, Software agency, Agência de marketing digital, Digital marketing agency, Agência de design, Design agency, Freelance, Desenvolvedor freelancer, Freelance developer, Programador freelancer, Freelance programmer, Engenheiro de software freelancer, Freelance software engineer, react, nextjs, next, typescript, styled, styled components, components, firebase, rocketchat, docker" />

                    <meta name="author" content="Anderson 'Yagasaki' Marlon" />
                    <meta name="robots" content="index, follow" />
                    <link rel="shortcut icon" href="https://raw.githubusercontent.com/Yagasaki7K/main/logo.png" type="image/png"/>
                    <meta property="og:locale" content="pt_BR" />

                    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
