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
                    title='Onigiri Hardcore | Portal de Notícias e Entretenimento'
                    description='Um site nerd com conteúdos nerds'
                    canonical={`https://onigirihardcore.com.br/`}
                    openGraph={{
                        url: 'https://onigirihardcore.com.br/',
                        title: 'Onigiri Hardcore | Portal de Notícias e Entretenimento',
                        description: 'Um site nerd com conteúdos nerds',
                        images: [
                            {
                                url: 'https://i.imgur.com/VoOogmx.png',
                                width: 460,
                                height: 460,
                                alt: 'Onigiri Hardcore | Portal de Notícias e Entretenimento',
                                type: 'image/jpeg' || 'image/png',
                            }
                        ],
                        siteName: 'Onigiri Hardcore',
                    }}
                    twitter={{
                        handle: '@OnigiriHardcore',
                        site: '@OnigiriHardcore',
                        cardType: 'summary_large_image',
                    }}
                />

                <Toaster richColors position="top-right" />

                <Head>
                    <meta name="keywords" content="notícias de entretenimento, últimas notícias de anime, filmes de ação, séries populares de TV, jogos de vídeo game mais aguardados, críticas de filmes, cultura geek, análises de jogos de console, celebridades do entretenimento, trailers de filmes e séries, dicas para gamers, eventos de cultura pop, quadrinhos e graphic novels, streaming de séries e filmes online, guias de jogos para iniciantes, novidades de tecnologia no mundo dos games, entrevistas com criadores de conteúdo digital, filmes de ficção científica, novidades sobre jogos mobile, reviews de animes populares, jogos clássicos, curiosidades sobre filmes e séries, atualizações de lançamentos de jogos, análises de episódios de séries, personagens icônicos de anime, rumores do entretenimento, eSports competitivos, animes de romance e drama, entrevistas com dubladores famosos, eventos de cosplay, jogos de estratégia, filmes de suspense, jogos online, notícias sobre video games, jogos multiplayer, novidades de tecnologia, críticas de séries, cinema, análises de mangás, lançamentos de filmes, últimas notícias de jogos, séries de fantasia, filmes de aventura, jogos de RPG, cultura pop, séries de drama, filmes de comédia, séries de ação, jogos de tiro, filmes de ficção científica, jogos de aventura, animes de ação, filmes de animação, séries de suspense, jogos de estratégia, filmes de fantasia, animes de fantasia, séries de comédia, filmes de terror, jogos de luta, filmes de romance, animes de romance, jogos de corrida, filmes de drama, séries de ficção científica, animes de drama, jogos de mundo aberto, filmes de super-heróis, séries de terror, animes de comédia, filmes de mistério, séries de mistério, animes de terror, filmes de guerra, séries de guerra, animes de ficção científica, filmes de musical, séries de musical, animes de aventura, filmes de crime, séries de crime, animes de sobrenatural, filmes de sobrenatural, séries de sobrenatural, jogos de RPG de ação, filmes de histórico, séries de histórico, animes de histórico, filmes de documentário, séries de documentário, animes de esportes, filmes de esportes, séries de esportes, animes de psicológico, filmes de psicológico, séries de psicológico, animes de sobrenatural, filmes de animação, séries de animação, animes de ficção científica, filmes de drama, séries de fantasia, animes de aventura, filmes de ação, séries de ação, animes de comédia, filmes de comédia, séries de comédia, animes de terror, filmes de terror, séries de terror, animes de romance, filmes de romance, séries de romance, animes de ficção científica, filmes de ficção científica, séries de ficção científica, animes de sobrenatural, filmes de sobrenatural, séries de sobrenatural, animes de mistério, filmes de mistério, séries de mistério, animes de fantasia, filmes de fantasia, séries de fantasia, animes de drama, filmes de drama, séries de drama, animes de guerra, filmes de guerra, séries de guerra, animes de histórico, filmes de histórico, séries de histórico, animes de musical, filmes de musical, séries de musical, animes de documentário, filmes de documentário, séries de documentário, animes de esportes, filmes de esportes, séries de esportes, animes de psicológico, filmes de psicológico, séries de psicológico, animes de luta, filmes de luta, séries de luta, jogos de simulação, filmes de animação, séries de animação, jogos de quebra-cabeça, filmes de drama, séries de drama, jogos de estratégia, filmes de ação, séries de ação, jogos de aventura, filmes de aventura, séries de aventura, jogos de RPG, filmes de ficção científica, séries de ficção científica, jogos de tiro, filmes de terror, séries de terror, jogos de luta, filmes de romance, séries de romance, jogos de corrida, filmes de drama, séries de drama, jogos de mundo aberto, filmes de super-heróis, séries de super-heróis, jogos de plataforma, filmes de animação, séries de animação, jogos de terror, filmes de suspense, séries de suspense, jogos de comédia, filmes de comédia, séries de comédia, jogos de aventura, filmes de fantasia, séries de fantasia, jogos de ação, filmes de ação, séries de ação, jogos de RPG de ação, filmes de mistério, séries de mistério, jogos de simulação, filmes de guerra, séries de guerra, jogos de estratégia em tempo real, filmes de sobrenatural, séries de sobrenatural, jogos de terror psicológico, filmes de psicológico, séries de psicológico, jogos de tiro em primeira pessoa, filmes de drama, séries de drama, jogos de luta, filmes de ação, séries de ação, jogos de plataforma, filmes de animação, séries de animação, jogos de aventura, filmes de aventura, séries de aventura, jogos de RPG, filmes de ficção científica, séries de ficção científica, jogos de tiro, filmes de terror, séries de terror, jogos de comédia, filmes de comédia, séries de comédia, jogos de ação, filmes de ação, séries de ação, jogos de RPG de ação, filmes de mistério, séries de mistério, jogos de simulação, filmes de guerra, séries de guerra, jogos de estratégia em tempo real, filmes de sobrenatural, séries de sobrenatural, jogos de terror psicológico, filmes de psicológico, séries de psicológico, jogos de tiro em primeira pessoa, filmes de drama, séries de drama, jogos de luta, filmes de ação, séries de ação, jogos de plataforma, filmes de animação, séries de animação, jogos de aventura, filmes de aventura, séries de aventura, jogos de RPG, filmes de ficção científica, séries de ficção científica, jogos de tiro, filmes de terror, séries de terror, jogos de comédia, filmes de comédia, séries de comédia, jogos de ação, filmes de ação, séries de ação, jogos de RPG de ação, filmes de mistério, séries de mistério, jogos de simulação, filmes de guerra, séries de guerra, jogos de estratégia em tempo real, filmes de sobrenatural, séries de sobrenatural, jogos de terror psicológico, filmes de psicológico, séries de psicológico, jogos de tiro em primeira pessoa, filmes de drama, séries de drama, jogos de luta, filmes de ação, séries de ação, jogos de plataforma, filmes de animação, séries de animação, jogos de aventura, filmes de aventura, séries de aventura, jogos de RPG, filmes de ficção científica, séries de ficção científica, jogos de tiro, filmes de terror, séries de terror, jogos de comédia, filmes de comédia, séries de comédia." />

                    <meta name="author" content="Anderson 'Yagasaki' Marlon" />
                    <meta name="robots" content="index, follow" />
                    <link rel="shortcut icon" href="/logo.png" />
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
