---
slug: configurando-o-seo-do-head-com-nextjs
title: Configurando o SEO do Head com Next.js
description: Em 2013, eu havia criado o Onigiri Hardcore, um blog de notícias sobre animes, jogos e tudo que envolve a cultura nerd como um todo. Ano passado, depois de nove anos, eu tinha decidido restaurar ele e desenvolvê-lo, mas com outras tecnologias ...
authors:
  name: Anderson Marlon
  title: Software Developer na Stone Co.
  url: https://github.com/yagasaki7k
  image_url: https://github.com/yagasaki7k.png
---

![](https://images.unsplash.com/photo-1616499370260-485b3e5ed653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 "Firmbee.com")

> _"Em 2013, eu havia criado o Onigiri Hardcore, um blog de notícias sobre animes, jogos e tudo que envolve a cultura nerd como um todo. Ano passado, depois de nove anos, eu tinha decidido restaurar ele e desenvolvê-lo, mas com outras tecnologias ..."_

Em 2013, eu havia criado o Onigiri Hardcore, um blog de notícias sobre animes, jogos e tudo que envolve a
cultura nerd como um todo. Ano passado, depois de nove anos, eu tinha decidido restaurar ele e
desenvolvê-lo com outras tecnologias. Inicialmente ele era em Blogger, depois passou para Wordpress e
hoje, fiquei na dúvida sobre como desenvolver ele. Seria em Docusaurus, por conta da otimização do SEO e
fácil manipulação com Markdown, ou seria em Next.js, por conta da facilidade de desenvolvimento - por ser
em React por debaixo dos panos - e otimização do SEO? Manteria ele em React e forçaria um _Server Side
Rendering_ para que o SEO funcionasse?

Teve muitas coisas que tive que estudar para transformar o Onigiri Hardcore no que está hoje, em questões
visuais não foi difícil, para um desenvolvedor focado em Front-end como eu, desevolvi em duas, três
semanas. Ali contava com tudo pronto, slide, menu, footer, etc. Mas, o que me deixou mais tempo foi a
questão do SEO. Eu não queria que o SEO fosse feito de forma manual, eu queria que fosse feito de forma
automática, como o Docusaurus faz. Então, eu tive que estudar como o Docusaurus fazia e como o Next.js
fazia e comparar como funcionava por debaixo dos panos.

E, no final, não resolveu de nada. O maior problema? Várias fontes auxiliavam em desenvolver o SEO focado
apenas na primeira página e não em algo como um blog que requer um SEO dinâmico em outras páginas, o
Docusaurus fazia isso, mas valeria a pena trocar toda a infraestrutura só para testar isso? Não, não
valia, seria muito retrabalho e havia vários projetos já em NextJS, a questão era identificar o que eu
estava fazendo de errado.

E eis a solução.

# Configurando o SEO do Head com Next.js

Neste artigo, discutiremos a criação de um arquivo _document.js, a organização do componente principal
NextJs, a criação de um componente principal de SEO dinâmico e a otimização do SEO com o seguinte:

- Título e descrição “regulares”
- Og title e descrição
- Twitter Card
- URL canônico
- Dados estruturados

Também discutiremos brevemente algumas práticas recomendadas para metatags e dados estruturados aplicados
ao site. Também podemos criar “variáveis globais” para manter nossas informações centralizadas em um
arquivo. Dessa forma, se uma informação mudar, não precisamos vasculhar todos os arquivos e
potencialmente nos expor a erros. Então vamos começar!

Começaremos com nossas variáveis globais, pois as usaremos várias vezes. Manterei o número de variáveis
no mínimo, mas use sua imaginação para aplicá-las. Eles não funcionam apenas para metatags e são úteis
para números de telefone, endereços ou qualquer coisa que você tenha em seu site mais de uma vez. Usarei
as informações do Onigiri Hardcore para demonstrar melhor tudo que acontece.

## Criando Variáveis Globais

No caso, dentro da estrutura do NextJS, usei o próprio `src` e criei um arquivo chamado `SEO.js`. Este
arquivo conterá o objeto SEO que usaremos em todo o site. Este arquivo é adequado para metadados e
qualquer coisa sujeita a alterações. Verifique se essa nomenclatura não irá atrapalhar o projeto ou dar
conflito em alguma palavra reservada.

```js
// src/seo.js

const SEO = {
    title: 'Onigiri Hardcore',
    description: 'Um site nerd entregando conteúdos nerds desde 2013',
    siteThumbnail: 'https://i.imgur.com/VoOogmx.jpg',
    siteUrl: "https://onigirihardcore.vercel.app",
    email: "kalifyinc@gmail.com",
    twitter: "https://twitter.com/OnigiriHardcore",
    twitterHandle: "@OnigiriHardcore",
    ogType: "website",
}

export default SEO
```

Podemos facilmente importar este arquivo e usar a notação de ponto regular ao acessar nossas variáveis
(SEO.title = Onigiri Hardcore). Se o seu logotipo aparecer no cabeçalho, rodapé e outras áreas do seu
site, você pode aplicá-lo em todos os lugares necessários com `<img src={SEO.siteThumbnail} alt="" />`,
por exemplo. Se for necessário alterar o logotipo ou o nome do logotipo, basta acessar `SEO.js` e
alterá-lo aqui para refletir as alterações em todo o site.

## Criando um arquivo _document
A criação de um arquivo `_document.js` personalizado estenderá o documento padrão usado em cada página,
que controlará a estrutura HTML. É aqui que você pode colocar links para arquivos externos, como o link
de uma fonte do Google Fonts, e é um bom lugar para metatags que permanecerão constantes em todo o site.

:::tip
Se você não usa o styled-components em seu projeto, você pode ignorar as informações abaixo do
`Fast refresh with NextJS doesn't broken the CSS` e focar apenas na codificação dentro do `render()`,
nele temos informações simples que não iremos alterar e irá permanecer em toda a aplicação.
:::

```js
// pages/_document.js

import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Main, Head, NextScript } from 'next/document';

export default class MyDocument extends Document {

    // Fast refresh with NextJS doesn't broken the CSS
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
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
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <link rel="icon" type="image/png" href="/icone.png" />
                    <meta name="robots" content="index, follow" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
```

## Criando um componente de Head dinâmico
Em seguida, precisaremos criar um arquivo para nosso componente Head dinâmico. Chamei meu `OwnHead.jsx`;
é aqui que residirá a maior parte de nossa marcação de metadados.

```js
// components/OwnHead.jsx

import Head from "next/head"

const OwnHead = () => {
    return (
        <Head>

        </Head>
    )
}

export default OwnHead
```

Em seguida, inicialize as metavariáveis a serem usadas em outros componentes. Itens como título,
descrição e URL da imagem podem ser usados várias vezes aqui, reduzindo a quantidade de código necessária
em nossos outros componentes. Descobri que usar o título, descrição, canonicalUrl, ogTwitterImage e
ogType era suficiente para qualquer metatag lançada contra mim. Se você precisar de mais, basta adicionar
mais variáveis aqui e usá-las em outros componentes.

```js
// components/OwnHead.jsx

import Head from "next/head"

const OwnHead = ({
    title,
    description,
    canonicalUrl,
    ogTwitterImage,
    ogType,
    children,
}) => {

    return (
        <Head>

        </Head>
    )
}

export default OwnHead
```

Podemos começar retornando nossas meta tags junto com as variáveis globais que criamos anteriormente com
elas inicializadas.

```js
// components/OwnHead.jsx

import Head from "next/head"
import SEO from "@data/siteMetadata"

const OwnHead = ({
    title,
    description,
    canonicalUrl,
    ogTwitterImage,
    ogType,
    children,
}) => {

    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={description} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={SEO.twitterHandle} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogTwitterImage} />

            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content={SEO.companyName} />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:url" content={canonicalUrl} />
        </Head>
    )
}

export default OwnHead
```

Agora temos uma boa visão do que cada página irá ter em sua seção de cabeçalho. A seguir, vamos discutir
o que estamos usando para entender melhor nossos metadados; então, usaremos nosso componente recém-criado
em nossas páginas.

## Title

Assim como parece, o título de cada documento. O título é exibido na guia do navegador e geralmente exibe
de 55 a 60 caracteres. Os mecanismos de pesquisa omitirão qualquer coisa mais longa nos resultados.
Certifique-se de que seus títulos sejam informativos e exclusivos para cada página.

Ao inicializar uma variável de título em nosso componente, podemos usá-la para nossa metatag de título
regular, a metatag de título de gráfico aberto e nosso cartão do Twitter.

## Description

Cada página deve ter uma descrição informativa e exclusiva. Descrições com mais de 160 caracteres
geralmente não são exibidas. Embora não haja um mínimo, deve ser longo o suficiente para descrever a
página com precisão.

Ao inicializar uma variável de descrição em nosso componente, podemos usá-la para nossa metatag de
descrição regular, a metatag de descrição de gráfico aberto e nosso cartão do Twitter.

## Canonical

O Google recomenda o uso de tags canônicas para conteúdo duplicado em seu site. No entanto, se um link
canônico não for definido explicitamente, o Google fará essa escolha para você, levando a resultados
inesperados. Esteja ciente, mesmo que você selecione um link canônico, o Google pode escolher uma página
diferente se achar necessário. Como o inicializamos em nosso componente, teremos um definido
explicitamente para cada página.

Ao inicializar uma variável canonicalUrl em nosso componente, podemos usá-la para nossa tag Link canônica
e a metatag de URL de grafo aberto.

## Open Graph

O Open Graph do Facebook tem algumas meta tags, e nós cobrimos a maioria, mas não todas. O que incluí é o
suficiente para exibir postagens compartilhadas corretamente, mas é isso. Se você tiver um, precisará
adicionar propriedades para o vídeo ou para o ID do aplicativo do Facebook.

Inicializamos uma variável chamada ogType e devo explicar como usaremos isso. A propriedade “tipo” tem
usos diferentes dependendo da página do nosso site. Por exemplo, o “tipo” para páginas como índice,
contato, sobre ou similares será “site” e para postagens de blog será “artigo”.

Além disso, o comprimento máximo da descrição é de 60 caracteres, mas temos nossa variável {description},
que também usamos para nossa meta tag de descrição regular. No entanto, a descrição padrão é de 160
caracteres, então o que fazemos? Você pode dividir os dois se quiser, mas não há penalidade por passar
gráficos abertos de 60 caracteres no máximo. Tenha em mente que ele será truncado.

## Twitter Card
Como o Open Graph, temos a maioria das bases cobertas aqui, mas não todas. Temos o suficiente para exibir
uma página ou postar corretamente. O comprimento máximo da descrição do Twitter é de 200 caracteres,
então estamos seguros com o comprimento máximo de 160 caracteres que definimos para nossa variável.

## Head com conteúdos dinâmicos na Página Inicial

Por fim, podemos usar nosso componente dinâmico de cabeça para visualizar como nos salvamos da repetição
de codificação. Novamente, isso funciona excepcionalmente bem para páginas estáticas, e veremos como usar
isso em uma seção de blog a seguir.

```js
import SEO from "src/SEO"
import OwnHead from "components/OwnHead"

const Index = () => {
    return (
        <>
            <OwnHead
                title={`Your Awesome Title Here`}
                description={`Your description goes here on every page. Keep character count between 140 to 160 characters`}
                canonicalUrl={SEO.siteUrl}
                ogTwitterImage={SEO.siteLogoSquare}
                ogType={"website"}
            />

            <div>
                <h1>Página Inicial</h1>
            </div>
        </>
    )
}

export default Index
```

## Head com conteúdos dinâmicos no Blog

Aqui veremos como utilizar o componente head dinâmico em uma página de blog. Como este é um blog NextJS,
ele é inicializado com {post} que mapeia as postagens. Podemos usar `post.title`, `post.description` e,
dependendo da sua configuração, `post.image.url`. O site deste projeto usa um método de fetch e criei
todos os parâmetros em seu site.

```js
// pages/blog/[slug].js

import { getPosts } from "../../services"
import SEO from "src/SEO"
import OwnHead from "components/OwnHead"

export async function getStaticProps() {
    const response = await fetch('API_FETCH')
    const data = await response.json()
    return {
        props: {
            data
        }
    }
}

const Post = ({post}) => {
    return (
        <>
            <Header />
            <SlugDetails>
                {
                    data && data.map((post, index) => (
                        post.slug === slug ? (
                            <div key={index}>
                                <OwnHead title={title + post.title} description={post.description}
                                    canonicalUrl={SEO.website + slug} ogTwitterImage={post.image} ogType={SEO.ogType} />
                                <h1>{post.title}</h1>
                                <p>{post.description}</p>
                            </div>
                        ) : null
                    ))
                }
            </SlugDetails>
            <Footer />
        </>
    )
}

export default Post
```

E é isso, espero que te ajude da mesma maneira que me ajudou, levei muito tempo para entender como fazer
isso, vários tutoriais em vão, várias abordagens diferentes para tentar chegar nesse mesmo resultado e
tudo em vão. Qualquer dúvida, estarei a disposição no [Twitter](https://twitter.com/yagasaki7k).

Essa publicação é uma versão adaptada em português do [Javascript Articles sobre NextJS Dynamic Head For SEO](https://javascriptarticles.com/nextjs-dynamic-head-for-seo/)

Aproveite!
