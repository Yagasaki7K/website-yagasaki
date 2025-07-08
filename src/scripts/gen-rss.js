const fs = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");
const dotenv = require("dotenv");

dotenv.config({ path: ".env.local" });

console.log("SITE_URL:", process.env.VERCEL_PROJECT_PRODUCTION_URL);

const postsDirectory = path.join(process.cwd(), "src", "articles");

function getPosts() {
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		const filePath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(filePath, "utf8");
		const { data, content } = matter(fileContents);

		return {
			title: data.title,
			date: data.date,
			content: content,
			slug: fileName.replace(/\.md$/, ""),
		};
	});

	return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function generateRSS() {
	const siteUrl = "https://yagasaki.vercel.app/" || "http://localhost:3000";
	const feedUrl = `${siteUrl}/rss.xml`;

	const feed = new RSS({
		title: "Anderson Marlon // Blog",
		description: "Software Developer",
		feed_url: feedUrl,
		site_url: siteUrl,
		language: "en",
	});

	const posts = getPosts();

	posts.forEach((post) => {
		feed.item({
			title: post.title,
			description: post.content,
			url: `${siteUrl}/articles/${post.slug}`,
			date: post.date,
		});
	});

	const rss = feed.xml({ indent: true });
	fs.writeFileSync(path.join(process.cwd(), "public", "rss.xml"), rss);
}

generateRSS();
