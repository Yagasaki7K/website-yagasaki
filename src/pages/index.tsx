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
import { useRouter } from "next/router";

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
    const router = useRouter();
    const uwuUrl = router.asPath;
    const [uwu, setUwu] = useState(false);

    useEffect(() => {
        if (uwuUrl !== undefined && uwuUrl !== null) {
            if (uwuUrl.includes('uwu=true')) {
                setUwu(true);
            } else {
                setUwu(false);
            }
        }
    }, [uwuUrl]);

    return (
        <>
            <Head>
                <title>Anderson Marlon // Yagasaki7K</title>
            </Head>

            <div className="overlay" />

            <HeaderDetails>
                <div className={`${uwu ? 'leftContent uwu' : 'leftContent text'}`}>

                    <h1>Hi, I'm Yagasaki<span onClick={() => setUwu(!uwu)}>.</span></h1>

                    <p>I enjoy turning solutions into code. I&apos;m a tech enthusiast and love staying up to date with all the latest cutting-edge features.</p>

                    <p>I&apos;ve recently been improving my flaws - the backend side - and nowadays there&apos;s nothing I can&apos;t create. I like Final Fantasy, drifting, japanese culture and I believe that &quot;X-Tudo&quot; is a healthy snack.</p>

                    <p>Currently, I&apos;m based in São Paulo, Brazil, but also <Link href="/about">in the web</Link>.</p>

                    <p>You can also see me <Link href="https://stream.yagasaki.dev/">streaming</Link> something or even coding. </p>

                    <p>
                        <a href="https://linkedin.com/in/andersonmarlon" target="_blank" rel="noreferrer"><i className="uil uil-linkedin"></i></a>
                        <a href="https://github.com/Yagasaki7K" target="_blank" rel="noreferrer"><i className="uil uil-github"></i></a>
                        <a href="https://twitter.com/Yagasaki7K" target="_blank" rel="noreferrer"><i className="uil uil-twitter"></i></a>
                        <a href="mailto:anderson18.marlon@gmail.com" target="_blank" rel="noreferrer"><i className="uil uil-at"></i></a>
                        <a href="/bookmarks"><i className="uil uil-bookmark"></i></a>
                        <a onClick={shareContent}><i className="uil uil-share"></i></a>
                    </p>
                </div>
                <div className="rightContent">
                    <Image src="https://github.com/Yagasaki7K.png" alt="GitHub/Yagasaki7K"
                        width={400} height={400} loading="lazy" decoding="async" title="GitHub/Yagasaki7K" />
                </div>
            </HeaderDetails >

            <HomeArticlesDetails>
                <h2 className={`${uwu ? 'uwu' : 'poppins'}`}>{posts.length} Articles in Brazilian Portuguese <span title="Why in Portuguese? Because every developer in Brazil faces difficulty learning English in the initial stages."><i className="uil uil-question-circle"></i></span></h2>

                <div className={`${uwu ? 'articles uwu' : 'articles poppins'}`}>
                    {posts && posts.slice(0, 10).map((post, index) => (
                        <a href={`/article/${post.slug}`} key={index}>
                            <LayoutArticle {...post} />
                        </a>
                    ))}

                    <button className={`${uwu ? 'uwu' : 'poppins'}`} onClick={redirectToSearch}>See more ...</button>
                </div>
            </HomeArticlesDetails>
            <Copyright isUwu={uwu} />
        </>
    );
}