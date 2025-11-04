import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import ArticleDetails from "@/components/ArticleDetails";
import calculateReadingTime from "@/utils/calculateReadingTime";
import formatDate from "@/utils/formatDate";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { PostProps } from "@/types/PostProps";

export const getStaticPaths: GetStaticPaths = async () => {
	const files = fs.readdirSync(path.join("articles"));

	const paths = files.map((filename) => {
		const slug = filename.replace(".md", "");
		return {
			params: { slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug as string;
	if (!slug) {
		return { notFound: true };
	}

	const filePath = path.join("articles", `${slug}.md`);
	const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
	const { data: frontmatter, content } = matter(markdownWithMeta);

	if (!content) {
		console.error(`Content not found for slug: ${slug}`);
		return { notFound: true };
	}

	const renderedContent = marked(content);
	return {
		props: {
			frontmatter,
			slug,
			content: renderedContent || "", // content sempre será uma string
		},
	};
};

export default function PostPage({ frontmatter, content = "" }: PostProps) {
	const [htmlContent, setHtmlContent] = useState<string>(content);

	useEffect(() => {
		setHtmlContent(content || ""); // Garantindo que `htmlContent` não seja `null`
	}, [content]);

	// Verificação detalhada para `frontmatter`
	if (!frontmatter || !frontmatter.title || !frontmatter.excerpt || !frontmatter.date || !frontmatter.image || !htmlContent) {
		return <p>Conteúdo não disponível</p>;
	}

	return (
		<>
			<NextSeo
				title={frontmatter.title || "Post"}
				description={frontmatter.excerpt || "Descrição indisponível"}
				canonical="https://campinasfighters.vercel.app"
				openGraph={{
					url: `https://campinasfighters.vercel.app`,
					title: frontmatter.title || "Post",
					description: frontmatter.excerpt || "Descrição indisponível",
					images: frontmatter.image
						? [
								{
									url: frontmatter.image,
									width: 460,
									height: 460,
									alt: frontmatter.title || "Imagem",
									type: frontmatter.image.includes(".png") ? "image/png" : "image/jpeg",
								},
							]
						: [],
					siteName: "Campinas Fighters | Associação Campineira de Formação ao Esporte",
				}}
				twitter={{
					handle: "@",
					site: "@campinas.fighters.team",
					cardType: "summary_large_image",
				}}
			/>

			<Head>
				<title>{frontmatter.title || "Campinas Fighters | Associação Campineira de Formação ao Esporte"}</title>
				<link rel="icon" type="image/png" href="/campinasfighters.png" />
			</Head>

			<Navigation />

			<ArticleDetails>
				<div className="card card-page text">
					<div className="title">
						<h1 className="post-title">{frontmatter.title || "Título indisponível"}</h1>
					</div>

					<div className="details">
						<div className="date">
							<p>
								Publicado em <span>{formatDate(frontmatter.date)}</span>
							</p>
						</div>
						<div className="tags">
							<p className="minRead">Leitura de {calculateReadingTime(htmlContent)} minutos</p>
						</div>
					</div>
					<div className="post-body">
						<div dangerouslySetInnerHTML={{ __html: htmlContent ?? "" }} />
					</div>
				</div>
			</ArticleDetails>
			<Footer />
		</>
	);
}
