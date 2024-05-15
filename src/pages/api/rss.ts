import { Feed } from "feed";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import calculateReadingTime from "@/utils/calculateReadingTime";
import { Frontmatter, PostProps } from "..";

const feed = new Feed({
    title: "yagasaki.dev/Blog",
    description: "I enjoy turning solutions into code. I'm a tech enthusiast and love staying up to date with all the latest cutting-edge features.",
    id: "http://yagasaki.dev/",
    link: "http://yagasaki.dev/",
    language: "pt-br",
    image: "https://github.com/Yagasaki7K.png",
    favicon: "https://github.com/Yagasaki7K.png",
    copyright: "© 2014 - 2024 Anderson \"Yagasaki\" Marlon",
    updated: new Date(), // optional, default = today
    generator: "Feed", // optional, default = 'Feed for Node.js'
    feedLinks: {
        json: "https://yagasaki.dev/rss",
    },
    author: {
        name: "Anderson Marlon",
        email: "anderson18.marlon@gmail.com",
        link: "https://yagasaki.dev"
    }
});

export default async function handler(req: any, res: any){
    if (req.method === 'GET') {
        const posts = getPosts();
        const rss = await generateRSS(posts);
        res.setHeader('Content-Type', 'text/xml');
        res.status(200).send(rss);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        res.status(500).send('Internal Server Error');
    }
}

function getPosts(): PostProps[] {
    const files = fs.readdirSync(path.join('article'));

    return files.map((filename) => {
        let slug = filename.replace('.mdx', '');

        const markdownWithMeta = fs.readFileSync(
            path.join('article', filename),
            'utf-8'
        )

        const { data: frontmatter, content: markdownContent } = matter(markdownWithMeta)
        const readingTime = calculateReadingTime(markdownContent);

        // Ensure frontmatter object includes all required properties
        const formattedFrontmatter: Frontmatter = {
            slug, // Ensure slug is included
            title: frontmatter.title || '', // Include title
            image: frontmatter.image || '', // Include image
            authors: frontmatter.authors || [], // Include authors
            tags: frontmatter.tags || [], // Include tags
            date: frontmatter.date || '', // Include date
            excerpt: frontmatter.excerpt || '', // Include excerpt
        };

        return {
            slug,
            frontmatter: formattedFrontmatter,
            readingTime,
            date: frontmatter.date, // Include the date property
            content: markdownContent, // Include the content property
        };
    });
}


async function generateRSS(posts: PostProps[]): Promise<string> {
    const rssItems: PostProps[] = [];

    posts.forEach((post) => {
        feed.addItem({
            title: post.frontmatter.title,
            id: post.slug,
            link: `https://yagasaki.dev/article/${post.slug}`,
            description: post.frontmatter.excerpt,
            date: new Date(post.frontmatter.date),
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

        // Assuming PostProps has similar structure to what is being added to the feed
        rssItems.push({
            slug: post.slug,
            frontmatter: post.frontmatter,
            readingTime: post.readingTime,
            date: post.frontmatter.date,
            content: '', // or whatever content field should be
        });
    });

    return feed.rss2();
}
