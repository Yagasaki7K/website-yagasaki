import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import ArticleDetails from '@/components/ArticleDetails';
import { PostProps } from '../index';
import calculateReadingTime from '@/utils/calculateReadingTime';
import formatDate from '@/utils/formatDate';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Copyright from '@/components/Copyright';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync(path.join('article'));

    const paths = files.map((filename) => {
        const slug = filename.replace('.mdx', '');
        return {
            params: { slug },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    if (!slug) {
        return { notFound: true };
    }

    const filePath = path.join('article', `${slug}.mdx`);
    try {
        const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
        const { data: frontmatter, content } = matter(markdownWithMeta);

        if (!content) {
            console.error(`Content not found for slug: ${slug}`);
            return { notFound: true };
        }

        const renderedContent = marked(content);

        return {
            props: {
                frontmatter,
                slug,
                content: renderedContent,
            },
        };
    } catch (error) {
        console.error(`Failed to load file for slug: ${slug}`, error);
        return { notFound: true };
    }
}

export default function PostPage({ frontmatter, content }: PostProps) {
    // Initialize htmlContent with content, or fallback to an empty string if undefined
    const [htmlContent, setHtmlContent] = useState<string>(content || "");

    // Handle updates to content
    useEffect(() => {
        setHtmlContent(content || ""); // Ensure htmlContent is always a string
    }, [content]);

    // Initialize syntax highlighting after HTML content is set
    useEffect(() => {
        hljs.highlightAll();
    }, [htmlContent]);

    // Render null if frontmatter or htmlContent is missing
    if (!frontmatter || !htmlContent) {
        console.error("frontmatter or htmlContent is missing", { frontmatter, htmlContent });
        return null;
    }

    return (
        <>
            <NextSeo
                title={frontmatter.title}
                description={frontmatter.excerpt}
                canonical="https://yagasaki.dev/"
                openGraph={{
                    url: `https://yagasaki.dev/`,
                    title: frontmatter.title,
                    description: frontmatter.excerpt,
                    images: [
                        {
                            url: frontmatter.image,
                            width: 460,
                            height: 460,
                            alt: frontmatter.title,
                            type: frontmatter.image.includes('.png') ? 'image/png' : 'image/jpeg',
                        },
                    ],
                    siteName: 'Anderson Marlon // Yagasaki7K',
                }}
                twitter={{
                    handle: '@Yagasaki7K',
                    site: '@Yagasaki7K',
                    cardType: 'summary_large_image',
                }}
            />

            <Head>
                <title>{frontmatter.title} | Yagasaki7K</title>
            </Head>

            <div className="overlay" />

            <ArticleDetails>
                <div className='card card-page text'>
                    <div className="backToHome">
                        <Link href={'/'}><i className="uil uil-arrow-left"> Back To Home</i></Link>
                    </div>
                    <div className="title">
                        <h1 className='post-title'>{frontmatter.title}</h1>
                        <h1 className="stylish">{frontmatter.tags[0]}</h1>
                    </div>
                    <p className="minRead">Leitura de {calculateReadingTime(htmlContent)} minutos</p>

                    <div className="details">
                        <div className="tags">
                            {frontmatter.tags.map((tag: string) => (
                                <p key={tag}>
                                    <span>{tag}</span>
                                </p>
                            ))}
                        </div>
                        <div className="date">
                            <p>Publicado em <span>{formatDate(frontmatter.date)}</span></p>
                        </div>
                    </div>
                    <div className='post-body'>
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    </div>

                    <div className="touch">
                        <div className="leftContent">
                            <h2>Fique atualizado!</h2>
                            <p>Nunca perca um post ou anúncio de projeto que eu faça. Siga-me no Twitter para manter contato, fazer perguntas ou conversar.</p>
                        </div>
                        <div className="rightContent">
                            <a href="https://twitter.com/Yagasaki7K" target="_blank" rel="noreferrer">
                                <span>
                                    <i className="uil uil-twitter" /> Conecte-se
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="buymeacoffee">
                        <p>Gostou do artigo? <a href="https://pixmeacoffee.vercel.app/yagasaki" target='_blank' rel="noreferrer">Faça um PIX de café! ☕</a></p>
                    </div>
                </div>

            </ArticleDetails>
            <Copyright />
        </>
    );
}
