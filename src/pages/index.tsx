import { useEffect } from "react";
import HeaderDetails from "@/components/HeaderDetails";
import HomeArticlesDetails from "@/components/HomeArticlesDetails";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import calculateReadingTime from "@/utils/calculateReadingTime";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';
import LayoutArticle from "@/components/LayoutArticle";
import Head from "next/head";
import Copyright from "@/components/Copyright";
import Link from "next/link";
import useFluidCursor from "@/hooks/use-FluidCursor";

dayjs.extend(relativeTime);
dayjs.locale('pt-br');

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
    identifier?: string;
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('article'));
    const posts = files.map((filename) => {
        const slug = filename.replace('.mdx', '');
        const markdownWithMeta = fs.readFileSync(
            path.join('article', filename),
            'utf-8'
        );

        const { data: frontmatter, content: markdownContent } = matter(markdownWithMeta);
        const readingTime = calculateReadingTime(markdownContent);

        if (!markdownContent) {
            console.warn(`Warning: ${filename} is missing content.`);
        }

        return {
            slug,
            frontmatter,
            readingTime,
            content: markdownContent || '' // Garante uma string vazia como fallback
        };
    });

    return {
        props: {
            posts: posts.sort((a, b) => {
                if (a.frontmatter.date && b.frontmatter.date) {
                    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
                } else {
                    console.error('Error: A date is missing in one of the posts.');
                    return 0;
                }
            }),
        },
    };
}

function redirectToSearch() {
    window.location.href = '/search';
}

function shareContent() {
    if (navigator.share) {
        navigator.share({
            url: "https://yagasaki.vercel.app/",
            title: 'Anderson Marlon // Software Developer',
        });
    }
}

// Interface para os dados de memória retornados
interface MemoryInfo {
    totalHeapMB: number; // Tamanho total do heap JS em MB
    usedHeapMB: number;  // Memória usada pelo heap JS em MB
    heapLimitMB: number; // Limite máximo do heap JS em MB
}

// Interface para o resultado da estimativa
interface DeviceEstimate {
    cores: number | null;          // Número de núcleos lógicos
    memoryInfo: MemoryInfo | null; // Informações de memória (se disponível)
    estimatedRAM: string;          // Estimativa da RAM total
}

// Função para obter informações de CPU
function getCPUInfo(): number | null {
    return navigator.hardwareConcurrency || null;
}

// Função para obter informações de memória (apenas Chrome/Edge)
function getMemoryInfo(): MemoryInfo | null {
    if ('memory' in performance) {
        const memory = performance.memory as PerformanceMemory;
        const totalHeapMB = Number((memory.totalJSHeapSize / 1024 / 1024).toFixed(2));
        const usedHeapMB = Number((memory.usedJSHeapSize / 1024 / 1024).toFixed(2));
        const heapLimitMB = Number((memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2));
        return { totalHeapMB, usedHeapMB, heapLimitMB };
    }
    return null;
}

// Tipagem para performance.memory (não está no lib.d.ts padrão)
interface PerformanceMemory {
    totalJSHeapSize: number;
    usedJSHeapSize: number;
    jsHeapSizeLimit: number;
}

// Função principal para estimar a memória do dispositivo
function estimateDeviceMemory(): DeviceEstimate {
    const cores = getCPUInfo();
    const memoryInfo = getMemoryInfo();
    let estimatedRAM: string;

    if (memoryInfo) {
        const { heapLimitMB } = memoryInfo;
        if (heapLimitMB < 1500) {
            estimatedRAM = 'Provavelmente menos de 4 GB';
        } else if (heapLimitMB < 3000) {
            estimatedRAM = 'Provavelmente entre 4 e 8 GB';
        } else {
            estimatedRAM = 'Provavelmente 16 GB ou mais';
        }
    } else {
        estimatedRAM = 'Informação de memória não disponível neste navegador';
    }

    return { cores, memoryInfo, estimatedRAM };
}

// Exemplo de uso
const deviceInfo = estimateDeviceMemory();

export default function Home({ posts }: { posts: PostProps[] }) {
    useEffect(() => {
        useFluidCursor();
    }, []);

    return (
        <>
            <Head>
                <title>Yagasaki | mid-level software developer using JS and TS</title>
                <link rel="icon" type="image/png" href="https://github.com/Yagasaki7K.png" />
            </Head>

            <div className="overlay" />
            <HeaderDetails>
                <div className='leftContent text'>
                    {deviceInfo.estimatedRAM === 'Provavelmente 16 GB ou mais' ? <canvas id='fluid' className='fluid' /> : null}
                    <h1>i'm yagasaki!</h1>

                    <p>cto, tech lead and software developer <a href="https://engide.com.br" target="_blank">@engide</a>, software developer <a href="https://github.com/astriia-com" target="_blank">@astriia</a> and mid-level software developer (javascript, typescript, nodejs, bun, express, firebase, lua, python, etc).</p>

                    <p>
                        <Link href="https://twitter.com/Yagasaki7K" target="_blank" rel="noreferrer"><i className="uil uil-twitter"></i></Link>
                        <Link href="https://github.com/Yagasaki7K" target="_blank" rel="noreferrer"><i className="uil uil-github"></i></Link>
                        <Link href="https://linkedin.com/in/andersonmarlon" target="_blank" rel="noreferrer"><i className="uil uil-linkedin"></i></Link>
                        <Link href="mailto:anderson18.marlon@gmail.com" target="_blank" rel="noreferrer"><i className="uil uil-at"></i></Link>
                        <Link href="/bookmarks"><i className="uil uil-bookmark"></i></Link>
                        <a onClick={shareContent}><i className="uil uil-share"></i></a>
                    </p>
                </div>
            </HeaderDetails>

            <HomeArticlesDetails>
                <h2 className="text">{posts.length} Articles in Brazilian Portuguese <span title="Why in Portuguese?"><i className="uil uil-question-circle"></i></span></h2>
                <div className="articles text">
                    {
                        posts && posts.slice(0, 15).map((post, index) => {
                            const identifier = ['one', 'two', 'three', 'four'][index % 4];
                            return (
                                post?.slug && post?.content ? (
                                    <Link href={`/article/${post.slug}`} key={index}>
                                        <LayoutArticle {...post} identifier={identifier} />
                                    </Link>
                                ) : null
                            )
                        })
                    }
                    <button className="text" onClick={redirectToSearch}>Veja mais ...</button>
                </div>
            </HomeArticlesDetails>
            <Copyright />
        </>
    );
}
