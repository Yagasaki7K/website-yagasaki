import { getArticleData } from "../../../lib/articles";
import { Article } from "../../../components/article";
import { NextSeo } from "next-seo";
import Head from "next/head";

function Tag({ tag }: { tag: string }) {
	return (
		<div className="flex size-4 w-fit items-center justify-center rounded-full px-2 py-3 text-sm ring-1 ring-zinc-400 dark:ring-1 dark:ring-zinc-500">
			#{tag}
		</div>
	);
}

export default async function ArticlePage({
	params,
}: {
	params: { slug: string };
}) {
	const articleData = await getArticleData(params.slug);

	return (
		<>
			<NextSeo
				title={articleData.title || "Post"}
				description={articleData.description || "Descrição indisponível"}
				canonical="https://yagasaki.dev/"
				openGraph={{
					url: `https://yagasaki.dev/`,
					title: articleData.title || "Post",
					description: articleData.description || "Descrição indisponível",
					images: articleData.image
						? [
								{
									url: articleData.image,
									width: 460,
									height: 460,
									alt: articleData.title || "Imagem",
									type: articleData.image.includes(".png")
										? "image/png"
										: "image/jpeg",
								},
							]
						: [],
					siteName: "Anderson Marlon // Yagasaki7K",
				}}
				twitter={{
					handle: "@Yagasaki7K",
					site: "@Yagasaki7K",
					cardType: "summary_large_image",
				}}
			/>

			<Head>
				<title>{articleData.title || "Yagasaki7K - Software Developer"}</title>
				<link
					rel="icon"
					type="image/png"
					href="https://github.com/Yagasaki7K.png"
				/>
			</Head>

			<div className="flex flex-col items-center justify-center p-8">
				<span className="text-sm text-zinc-500 dark:text-zinc-400">
					{articleData.date}
				</span>
				<div className="flex w-full max-w-prose flex-col items-center justify-center gap-4 px-4 pb-6 pt-1">
					<h1 className="text-center max-sm:text-3xl text-5xl">
						{articleData.title}
					</h1>
					<div className="flex flex-wrap gap-x-3">
						{articleData.tags.map((tag: string) => (
							<Tag tag={tag} key={tag} />
						))}
					</div>
				</div>
			</div>
			<Article html={articleData.contentHtml} />
		</>
	);
}
