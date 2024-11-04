import HeaderDetails from "@/components/HeaderDetails";
import HomeArticlesDetails from "@/components/HomeArticlesDetails";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import calculateReadingTime from "@/utils/calculateReadingTime";
import { useState } from "react";
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
    date: string
    slug: string
    frontmatter: Frontmatter
    readingTime: number,
    content?: string
}

export async function getStaticProps() {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join('article'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
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

export default function Search({ posts }: { posts: PostProps[] }) {
    const [search, setSearch] = useState('');

    const filteredPosts = posts.filter((post) => {
        return (
            post.frontmatter?.title?.toLowerCase()?.includes(search.toLowerCase()) ||
            post.frontmatter?.excerpt?.toLowerCase()?.includes(search.toLowerCase())
        );
    });
    return (
        <>
            <Head>
                <title>Anderson Marlon // Yagasaki7K</title>
            </Head>

            <div className="overlay" />

            <HeaderDetails>
                <input type="text" className="search" placeholder="Search a article..." onChange={(e) => setSearch(e.target.value)} />
            </HeaderDetails>

            <HomeArticlesDetails>
                <div className="articles poppins">
                    {filteredPosts && filteredPosts.map((post, index) => (
                        <Link href={`/article/${post.slug}`} key={index}>
                            <LayoutArticle {...post} />
                        </Link>
                    ))}
                </div>
            </HomeArticlesDetails>
            <Copyright />
        </>
    );
}
