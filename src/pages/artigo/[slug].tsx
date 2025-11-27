import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { GetServerSideProps } from "next";
import ArticleDetails from "@/components/ArticleDetails";
import calculateReadingTime from "@/utils/calculateReadingTime";
import formatDate from "@/utils/formatDate";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Frontmatter } from "@/types/Frontmatter";
import { PostProps } from "@/types/PostProps";
import { incrementArticleView } from "@/utils/redisClient";

export const getServerSideProps: GetServerSideProps<PostProps> = async ({ params }) => {
        const slug = params?.slug as string;
        if (!slug) {
                return { notFound: true };
        }

        const filePath = path.join("articles", `${slug}.md`);
        if (!fs.existsSync(filePath)) {
                return { notFound: true };
        }

        const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
        const { data: frontmatterData, content } = matter(markdownWithMeta);

        if (!content) {
                console.error(`Content not found for slug: ${slug}`);
                return { notFound: true };
        }

        const frontmatter = frontmatterData as Partial<Frontmatter>;
        const hasRequiredFrontmatterFields =
                !!frontmatter.title &&
                !!frontmatter.image &&
                Array.isArray(frontmatter.authors) &&
                Array.isArray(frontmatter.tags) &&
                !!frontmatter.date &&
                !!frontmatter.excerpt;

        if (!hasRequiredFrontmatterFields) {
                console.error(`Invalid frontmatter for slug: ${slug}`);
                return { notFound: true };
        }

        const validatedFrontmatter: Frontmatter = {
                slug: frontmatter.slug ?? slug,
                title: frontmatter.title!,
                image: frontmatter.image!,
                authors: frontmatter.authors!,
                tags: frontmatter.tags!,
                date: frontmatter.date!,
                excerpt: frontmatter.excerpt!,
        };

        const renderedContent = await marked(content);

        let viewCount = 0;
        try {
                viewCount = await incrementArticleView(slug);
        } catch (error) {
                console.error("Failed to register article view", error);
        }

        return {
                props: {
                        frontmatter: validatedFrontmatter,
                        slug,
                        content: renderedContent || "",
                        viewCount,
                        date: validatedFrontmatter.date ?? "",
                        readingTime: calculateReadingTime(renderedContent || ""),
                },
        };
};

export default function PostPage({ frontmatter, content = "", viewCount = 0 }: PostProps) {
        if (!frontmatter || !frontmatter.title || !frontmatter.excerpt || !frontmatter.date || !frontmatter.image || !content) {
                return <p>Conteúdo não disponível</p>;
        }

        const formattedViews = new Intl.NumberFormat("pt-BR").format(viewCount ?? 0);

        return (
                <>
                        <NextSeo
                                title={frontmatter.title || "Post"}
                                description={frontmatter.excerpt || "Descrição indisponível"}
                                canonical="https://campinasfighters.vercel.app"
                                openGraph={{
                                        url: `https://campinasfighters.vercel.app`,
                                        title: frontmatter.title || "Post",
                                        description: frontmatter.excerpt || "Descrição indisponível",
                                        images: frontmatter.image
                                                ? [
                                                                {
                                                                        url: frontmatter.image,
                                                                        width: 460,
                                                                        height: 460,
                                                                        alt: frontmatter.title || "Imagem",
                                                                        type: frontmatter.image.includes(".png") ? "image/png" : "image/jpeg",
                                                                },
                                                        ]
                                                : [],
                                        siteName: "Campinas Fighters | Associação Campineira de Formação ao Esporte",
                                }}
                                twitter={{
                                        handle: "@",
                                        site: "@campinas.fighters.team",
                                        cardType: "summary_large_image",
                                }}
                        />

                        <Head>
                                <title>{frontmatter.title || "Campinas Fighters | Associação Campineira de Formação ao Esporte"}</title>
                                <link rel="icon" type="image/png" href="/campinasfighters.png" />
                        </Head>

                        <Navigation />

                        <ArticleDetails>
                                <div className="card card-page text">
                                        <div className="title">
                                                <h1 className="post-title">{frontmatter.title || "Título indisponível"}</h1>
                                        </div>

                                        <div className="details">
                                                <div className="date">
                                                        <p>
                                                                Publicado em <span>{formatDate(frontmatter.date)}</span>
                                                        </p>
                                                </div>
                                                <div className="tags">
                                                        <p className="minRead">Leitura de {calculateReadingTime(content)} minutos</p>
                                                </div>
                                                <div className="views">
                                                        <p className="view-count">{formattedViews} visualizações</p>
                                                </div>
                                        </div>
                                        <div className="post-body">
                                                <div dangerouslySetInnerHTML={{ __html: content ?? "" }} />
                                        </div>
                                </div>
                        </ArticleDetails>
                        <Footer />
                </>
        );
}
