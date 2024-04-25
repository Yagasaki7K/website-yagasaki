import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { GetStaticPaths } from 'next';
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
            params: {
                slug: slug,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async ({ params }: any) => {
    if (!params || !params.slug) {
        return {
            notFound: true,
        };
    }

    const { slug } = params;
    const filePath = path.join('article', `${slug}.mdx`);
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);
    const renderedContent = await marked(content);

    return {
        props: {
            frontmatter,
            slug,
            content: renderedContent,
        },
    };
}

export default function PostPage({ frontmatter, content }: PostProps) {
    const [htmlContent, setHtmlContent] = useState<string | null>(null);

    useEffect(() => {
        const fetchContent = async () => {
            const markedContent = content;
            setHtmlContent(markedContent);
        };

        fetchContent();
    }, [content]);

    useEffect(() => {
        hljs.highlightAll();
    }, [htmlContent]);

    return (
        <>
            <NextSeo
                title={frontmatter.title}
                description={frontmatter.excerpt}
                canonical={`https://yagasaki.dev/`}
                openGraph={{
                    url: 'https://yagasaki.dev/',
                    title: frontmatter.title,
                    description: frontmatter.excerpt,
                    images: [
                        {
                            url: frontmatter.image,
                            width: 460,
                            height: 460,
                            alt: frontmatter.title,
                            type: 'image/jpeg' || 'image/png',
                        }
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
                <title>{frontmatter.title}&nbsp;|&nbsp;Yagasaki7K</title>
            </Head>

            <div className="overlay" />

            <ArticleDetails>
                <div className='card card-page'>
                    <Link className="backToHome" href={'/'}><i className="uil uil-arrow-left"> Back To Home</i></Link>
                    <h1 className='post-title'>{frontmatter.title}</h1>
                    <p className="minRead">Leitura de {calculateReadingTime(htmlContent ? htmlContent : '')} minutos</p>

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
                        <div dangerouslySetInnerHTML={({ __html: htmlContent || '' })} />
                    </div>
                </div>
            </ArticleDetails>
            <Copyright />
        </>
    );
}