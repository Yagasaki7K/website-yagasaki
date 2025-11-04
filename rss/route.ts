// src/app/rss.xml/route.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Feed } from "feed";
import { NextResponse } from "next/server";

type Article = {
	slug: string;
	title: string;
	date: string; // ISO
	excerpt?: string;
	content?: string;
	tags?: string[];
};

// Se preferir, puxe do env em prod
const SITE_URL = "https://yagasaki.vercel.app";

// Deixe estático por padrão; se quiser revalidar, use Cache-Control abaixo
export const dynamic = "force-static";

/** Lê todos os .md da pasta /articles e retorna os posts já ordenados por data desc */
function getArticles(): Article[] {
	const articlesDir = path.join(process.cwd(), "articles");
	const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md"));

	const posts = files.map((filename) => {
		const slug = filename.replace(/\.md$/, "");
		const file = fs.readFileSync(path.join(articlesDir, filename), "utf-8");
		const { data, content } = matter(file);

		const title = String(data?.title ?? slug);
		const date = String(data?.date ?? new Date().toISOString());
		const excerpt = typeof data?.excerpt === "string" ? data.excerpt : undefined;
		const tags = Array.isArray(data?.tags) ? data.tags : undefined;

		return { slug, title, date, excerpt, content, tags };
	});

	return posts.sort((a, b) => {
		const da = new Date(a.date).getTime();
		const db = new Date(b.date).getTime();
		return db - da;
	});
}

/** Cria o objeto Feed (metadados do RSS) */
function createFeed() {
	return new Feed({
		title: "yagasaki.dev/Blog",
		description: "I enjoy turning solutions into code. I'm a tech enthusiast and love staying up to date with all the latest cutting-edge features.",
		id: SITE_URL + "/",
		link: SITE_URL + "/",
		language: "pt-BR",
		image: "https://github.com/Yagasaki7K.png",
		favicon: "https://github.com/Yagasaki7K.png",
		copyright: '© 2014 - 2025 Anderson "Yagasaki" Marlon',
		updated: new Date(),
		generator: "feed",
		feedLinks: {
			rss: SITE_URL + "/rss.xml",
			json: SITE_URL + "/rss.json",
			atom: SITE_URL + "/atom.xml",
		},
		author: {
			name: "Anderson Marlon",
			email: "anderson18.marlon@gmail.com",
			link: SITE_URL,
		},
	});
}

/** Gera o XML (RSS 2.0) a partir dos posts */
function generateRSS(posts: Article[]): string {
	const feed = createFeed();

	posts.forEach((post) => {
		const url = `${SITE_URL}/artigo/${post.slug}`;

		feed.addItem({
			title: post.title,
			id: url,
			link: url,
			date: new Date(post.date),
			description: post.excerpt,
			content: post.content, // opcional: pode remover se quiser feed mais enxuto
			category: (post.tags ?? []).map((t) => ({ name: t })),
			author: [{ name: 'Anderson "Yagasaki" Marlon' }],
			contributor: [{ name: 'Anderson "Yagasaki" Marlon' }],
		});
	});

	return feed.rss2();
}

export async function GET() {
	try {
		const posts = getArticles();
		const rss = generateRSS(posts);

		return new NextResponse(rss, {
			status: 200,
			headers: {
				"Content-Type": "application/rss+xml; charset=utf-8",
				// Ajuste o cache conforme seu fluxo (1h aqui)
				"Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=60",
			},
		});
	} catch (err) {
		console.error("Erro ao gerar RSS:", err);
		return new NextResponse("Internal Server Error", {
			status: 500,
			headers: { "Content-Type": "text/plain; charset=utf-8" },
		});
	}
}
