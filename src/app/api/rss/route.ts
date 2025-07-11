import { Article, getArticles } from "@/src/lib/articles";
import { Feed } from "feed";
import { NextRequest, NextResponse } from "next/server";

export interface PostProps {
	date: string;
	slug: string;
	readingTime: number;
	content?: string;
	identifier?: string;
}

function createFeed() {
	return new Feed({
		title: "yagasaki.dev/Blog",
		description:
			"I enjoy turning solutions into code. I'm a tech enthusiast and love staying up to date with all the latest cutting-edge features.",
		id: "http://yagasaki.dev/",
		link: "http://yagasaki.dev/",
		language: "pt-br",
		image: "https://github.com/Yagasaki7K.png",
		favicon: "https://github.com/Yagasaki7K.png",
		copyright: '© 2014 - 2024 Anderson "Yagasaki" Marlon',
		updated: new Date(),
		generator: "Feed",
		feedLinks: {
			json: "https://yagasaki.dev/rss",
		},
		author: {
			name: "Anderson Marlon",
			email: "anderson18.marlon@gmail.com",
			link: "https://yagasaki.dev",
		},
	});
}

export async function GET(request: NextRequest) {
	try {
		const posts = getArticles();
		const rss = await generateRSS(posts);

		return new NextResponse(rss, {
			status: 200,
			headers: {
				"Content-Type": "text/xml",
				"Cache-Control": "public, max-age=3600", // Cache por 1 hora
			},
		});
	} catch (error) {
		console.error("Erro ao gerar RSS:", error);
		return new NextResponse("Internal Server Error", {
			status: 500,
			headers: {
				"Content-Type": "text/plain",
			},
		});
	}
}

async function generateRSS(posts: Article[]): Promise<string> {
	const feed = createFeed();

	posts.forEach((post) => {
		feed.addItem({
			title: post.title,
			id: post.id,
			link: `https://yagasaki.dev/article/${post.id}`,
			date: new Date(post.date),
			author: [
				{
					name: 'Anderson "Yagasaki" Marlon',
				},
			],
			contributor: [
				{
					name: 'Anderson "Yagasaki" Marlon',
				},
			],
		});
	});

	return feed.rss2();
}
