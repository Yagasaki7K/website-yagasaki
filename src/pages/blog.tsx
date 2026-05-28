import fs from "fs";
import path from "path";
import calculateReadingTime from "@/utils/calculateReadingTime";
import { useState, useMemo } from "react";
import Link from "next/link";
import Head from "next/head";
import Footer from "@/components/Footer";
import HomeDetails from "@/components/HomeDetails";
import formatDate from "@/utils/formatDate";
import Navigation from "@/components/Navigation";
import { PostProps } from "@/types/PostProps";
import { Frontmatter } from "@/types/Frontmatter";

function parseFrontmatter(markdown: string): { data: Partial<Frontmatter>; content: string } {
    if (!markdown.startsWith("---")) {
        return { data: {}, content: markdown };
    }

    const end = markdown.indexOf("\n---", 3);
    if (end === -1) {
        return { data: {}, content: markdown };
    }

    const frontmatterBlock = markdown.slice(3, end).trim();
    const content = markdown.slice(end + 4).trimStart();
    const data: Record<string, string | string[]> = {};

    for (const line of frontmatterBlock.split("\n")) {
        const [rawKey, ...rawValueParts] = line.split(":");
        if (!rawKey || rawValueParts.length === 0) continue;

        const key = rawKey.trim();
        const rawValue = rawValueParts.join(":").trim();

        if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
            data[key] = rawValue
                .slice(1, -1)
                .split(",")
                .map((value) => value.trim().replace(/^\"|\"$/g, "").replace(/^'|'$/g, ""))
                .filter(Boolean);
            continue;
        }

        data[key] = rawValue.replace(/^\"|\"$/g, "").replace(/^'|'$/g, "");
    }

    return { data: data as Partial<Frontmatter>, content };
}

export async function getStaticProps() {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join("articles"));

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace(".md", "");

        const markdownWithMeta = fs.readFileSync(path.join("articles", filename), "utf-8");

        const { data: frontmatter, content: markdownContent } = parseFrontmatter(markdownWithMeta);
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
                    console.error("Error: One of the posts is missing a date.");
                    return 0;
                }
            }),
        },
    };
}

export default function Search({ posts }: { posts: PostProps[] }) {
    const [search, setSearch] = useState("");

    // Memoize filteredPosts to avoid re-calculating on every render unless `posts` or `search` changes
    const filteredPosts = useMemo(() => {
        const searchTerm = search.toLowerCase();
        return posts.filter((post) => {
            const title = post.frontmatter?.title?.toLowerCase() || "";
            const excerpt = post.frontmatter?.excerpt?.toLowerCase() || "";
            return title.includes(searchTerm) || excerpt.includes(searchTerm);
        });
    }, [posts, search]);

    return (
        <>
            <Head>
                <title>Blog - Anderson Marlon</title>
                <link rel="icon" type="image/png" href="/campinasfighters.png" />
            </Head>

            <Navigation />
            <HomeDetails>
                <div className="blogSearch">
                    <h1 className="title">Blog</h1>
                    <input type="text" className="search" placeholder="Pesquisar..." value={search} onChange={(e) => setSearch(e.target.value)} />

                    <div className="article">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post, index) => {
                                return (
                                    <Link href={`/artigo/${post.slug}`} key={index}>
                                        <div className="content">
                                            <p className="title">{post.frontmatter?.title}</p>
                                            <p className="small">
                                                {formatDate(post.frontmatter?.date)} • {post.frontmatter.tags[0]} • {post.readingTime} min de leitura
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })
                        ) : (
                            <p>No articles found for your search.</p>
                        )}
                    </div>
                </div>
            </HomeDetails>
            <Footer />
        </>
    );
}
