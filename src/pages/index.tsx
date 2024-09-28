import { useEffect, useState } from "react";
import HeaderDetails from "@/components/HeaderDetails";
import HomeArticlesDetails from "@/components/HomeArticlesDetails";
import Image from "next/image";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import calculateReadingTime from "@/utils/calculateReadingTime";

import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import LayoutArticle from "@/components/LayoutArticle";
import Head from "next/head";
import Copyright from "@/components/Copyright";
import Link from "next/link";

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

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
    content: string
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

function redirectToSearch() {
    window.location.href = '/search'
}

function shareContent() {
    if (navigator.share) {
        navigator.share({
            url: "https://yagasaki.dev",
            title: 'Anderson Marlon // Software Developer',
        })
    }
}

export default function Home({ posts }: { posts: PostProps[] }) {
    return (
        <>
            <Head>
                <title>Anderson Marlon // Yagasaki7K</title>
            </Head>

            <div className="overlay" />
            {/* <div className="ball"></div>
            <div
                className="ball"
                style={
                    {
                        "--delay": "-12s",
                        "--size": "0.35",
                        "--speed": "25s",
                    } as React.CSSProperties
                }
            ></div>

            <div
                className="ball"
                style={
                    {
                        "--delay": "-10s",
                        "--size": "0.3",
                        "--speed": "15s",
                    } as React.CSSProperties
                }
            ></div> */}

            <HeaderDetails>
                <div className='leftContent text'>

                    <h1><img src="https://github.com/tairosonloa/tairosonloa/blob/main/assets/wave.gif?raw=true" alt="" />葛城 矢ヶ崎。</h1>

                    <p>lead dev <a href="https://github.com/byteonegroup" target="_blank">@byteonegroup</a>, support on <a href="https://github.com/byteonesolutions" target="_blank">@byteonesolutions</a> and mid-level software developer (javascript, typescript, lua, python, etc). </p>

                    <p>devout javascript advocate and occasionally dabbling in other languages, self-taught - can you read more <a href="/about">about me</a>.</p>

                    <p>third place in the ambev hackathon and worked at stone co in 2023.</p>

                    <p>notable projects: <a href="https://steamfolio.vercel.app" target="_blank">steamfolio</a>, <a href="https://sintoniasp.vercel.app" target="_blank">sintoniasp</a>, <a href="https://webessentials.vercel.app" target="_blank">webessentials</a>, <a href="https://onigirihardcore.vercel.app" target="_blank">onigirihardcore</a>.</p>

                    <p>living in são paulo - brazil, but you can find me online:</p>

                    <p>
                        <Link href="https://linkedin.com/in/andersonmarlon" target="_blank" rel="noreferrer"><i className="uil uil-linkedin"></i></Link>
                        <Link href="https://github.com/Yagasaki7K" target="_blank" rel="noreferrer"><i className="uil uil-github"></i></Link>
                        <Link href="https://twitter.com/Yagasaki7K" target="_blank" rel="noreferrer"><i className="uil uil-twitter"></i></Link>
                        <Link href="mailto:anderson18.marlon@gmail.com" target="_blank" rel="noreferrer"><i className="uil uil-at"></i></Link>
                        <Link href="/bookmarks"><i className="uil uil-bookmark"></i></Link>
                        <a onClick={shareContent}><i className="uil uil-share"></i></a>
                    </p>
                </div>
                <div className="rightContent">
                    <Image src="https://github.com/Yagasaki7K.png" alt="GitHub/Yagasaki7K"
                        width={400} height={400} loading="lazy" decoding="async" title="GitHub/Yagasaki7K" />
                </div>
            </HeaderDetails>

            <HomeArticlesDetails>
                <h2 className="poppins">{posts.length} Articles in Brazilian Portuguese <span title="Why in Portuguese? Because every developer in Brazil faces difficulty learning English in the initial stages."><i className="uil uil-question-circle"></i></span></h2>

                <div className="articles poppins">
                    {posts && posts.slice(0, 10).map((post, index) => (
                        <Link href={`/article/${post.slug}`} key={index}>
                            <LayoutArticle {...post} />
                        </Link>
                    ))}

                    <button className="poppins" onClick={redirectToSearch}>Veja mais ...</button>
                </div>
            </HomeArticlesDetails>
            <Copyright />
        </>
    );
}
