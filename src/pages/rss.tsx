import { Feed } from "feed";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import calculateReadingTime from "@/utils/calculateReadingTime";
import { PostProps } from ".";
import { useEffect, useState } from "react";

const feed = new Feed({
    title: "yagasaki.dev/Blog",
    description: "I enjoy turning solutions into code. I'm a tech enthusiast and love staying up to date with all the latest cutting-edge features.",
    id: "http://yagasaki.dev/",
    link: "http://yagasaki.dev/",
    language: "pt-br",
    image: "https://yagasaki.dev/_next/image?url=https%3A%2F%2Fgithub.com%2FYagasaki7K.png&w=640&q=75",
    favicon: "https://yagasaki.dev/_next/image?url=https%3A%2F%2Fgithub.com%2FYagasaki7K.png&w=640&q=75",
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

export async function getStaticProps() {
    // Obter arquivos do diretório de artigos
    const files = fs.readdirSync(path.join('article'))

    // Obter slug e frontmatter dos artigos
    const posts = files.map((filename) => {
        // Criar slug
        let slug = '';
        slug = filename.replace('.mdx', '');

        const markdownWithMeta = fs.readFileSync(
            path.join('article', filename),
            'utf-8'
        )

        const { data: frontmatter, content: markdownContent } = matter(markdownWithMeta)
        const readingTime = calculateReadingTime(markdownContent);

        return {
            slug,
            frontmatter,
            readingTime,
        }
    })

    return {
        props: {
            posts: posts.sort((a, b) => {
                if (a.frontmatter.date && b.frontmatter.date) {
                    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
                } else {
                    console.error('Erro: Uma das datas está ausente nos posts.');
                    return 0;
                }
            }),
        },
    }
}

export default function RSS({ posts }: { posts: PostProps[] }) {
    const [rss, setRss] = useState('');
    if (!posts) {
        console.error('Erro: Nenhum post encontrado.');
        return null;
    }

    useEffect(() => {
        getPostsToRSS(posts);
    }, [posts]);

    async function getPostsToRSS(posts: PostProps[]) {
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
        });

        setRss(feed.rss2())
    }

    return (
        <div className="rss">
            {
                rss
            }
        </div>
    );
}