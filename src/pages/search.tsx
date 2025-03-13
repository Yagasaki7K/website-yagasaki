import HeaderDetails from "@/components/HeaderDetails";
import HomeArticlesDetails from "@/components/HomeArticlesDetails";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import calculateReadingTime from "@/utils/calculateReadingTime";
import { useState, useMemo } from "react";
import Link from "next/link";
import LayoutArticle from "@/components/LayoutArticle";
import Head from "next/head";
import Copyright from "@/components/Copyright";

export interface Frontmatter {
    slug: string;
    title: string;
    image: string;
    authors: string[];
    tags: string[];
    date: string;
    excerpt: string;
}

export interface PostProps {
    date: string;
    slug: string;
    frontmatter: Frontmatter;
    readingTime: number;
    content?: string;
}

export async function getStaticProps() {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join('article'));

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.mdx', '');

        const markdownWithMeta = fs.readFileSync(
            path.join('article', filename),
            'utf-8'
        );

        const { data: frontmatter, content: markdownContent } = matter(markdownWithMeta);
        const readingTime = calculateReadingTime(markdownContent);

        return {
            slug,
            frontmatter,
            readingTime,
        };
    });

    return {
        props: {
            posts: posts.sort((a, b) => {
                if (a.frontmatter.date && b.frontmatter.date) {
                    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
                } else {
                    console.error('Error: One of the posts is missing a date.');
                    return 0;
                }
            }),
        },
    };
}

export default function Search({ posts }: { posts: PostProps[] }) {
    const [search, setSearch] = useState('');

    // Memoize filteredPosts to avoid re-calculating on every render unless `posts` or `search` changes
    const filteredPosts = useMemo(() => {
        const searchTerm = search.toLowerCase();
        return posts.filter((post) => {
            const title = post.frontmatter?.title?.toLowerCase() || '';
            const excerpt = post.frontmatter?.excerpt?.toLowerCase() || '';
            return title.includes(searchTerm) || excerpt.includes(searchTerm);
        });
    }, [posts, search]);

    return (
        <>
            <Head>
                <title>Yagasaki | mid-level software developer using JS and TS</title>
                <link rel="icon" type="image/png" href="https://github.com/Yagasaki7K.png" />
            </Head>

            <div className="overlay" />

            <HeaderDetails>
                <input
                    type="text"
                    className="search"
                    placeholder="Search an article..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </HeaderDetails>

            <HomeArticlesDetails>
                <div className="articles poppins">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => {
                            const identifier = ['one', 'two', 'three', 'four'][index % 4];
                            return (
                                <Link href={`/article/${post.slug}`} key={index}>
                                    <LayoutArticle {...post} identifier={identifier} />
                                </Link>
                            )
                        })
                    ) : (
                        <p>No articles found for your search.</p>
                    )}
                </div>
            </HomeArticlesDetails>
            <Copyright />
        </>
    );
}
