import { ServerStyleSheet } from "styled-components";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";

export default class MyDocument extends Document {
	// Fast refresh with NextJS doesn't broken the CSS
	static async getInitialProps(ctx: any) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	// Finish Here

	render() {
		return (
			<Html lang="pt-br">
				<NextSeo
					title="Anderson Marlon"
					description="Hey! I’m Anderson Marlon, a software engineer and indie hacker - i'm netrunner btw."
					canonical={`https://yagasaki.vercel.app/`}
					openGraph={{
						url: "https://yagasaki.vercel.app/",
						title: "Hey! I’m Anderson Marlon, a software engineer and indie hacker - i'm netrunner btw",
						description: "Hey! I’m Anderson Marlon, a software engineer and indie hacker - i'm netrunner btw",
						images: [
							{
								url: "/thumbnail.png",
								width: 460,
								height: 460,
								alt: "Anderson Marlon",
								type: "image/png",
							},
						],
						siteName: "yagasaki7k",
					}}
					twitter={{
						handle: "@yagasaki7k",
						site: "@yagasaki7k",
						cardType: "summary_large_image",
					}}
				/>

				<Head>
					<meta
						name="keywords"
						content="anderson, marlon, himura, yagasaki, 7k, programador, programação, code, código aberto, github, linkedin, twitter, x, tomaz, alves, desenvolvedor, engide,
						git, javascript, typescript, css, html, supabase, firebase, hasura, graphql, elysia, bun, node, whatsapp, api, openai, mysql, sqlite, mongodb, software, engineer, developer"
					/>

					<meta name="author" content="Anderson 'Yagasaki' Marlon" />
					<meta name="robots" content="index, follow" />
					<link rel="shortcut icon" href="https://github.com/Yagasaki7K.png" type="image/png" />
					<meta property="og:locale" content="pt_BR" />

					<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
