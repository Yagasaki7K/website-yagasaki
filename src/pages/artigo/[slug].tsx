import fs from "fs";
import path from "path";
import { marked } from "marked";
import { GetStaticPaths, GetStaticProps } from "next";
import ArticleDetails from "@/components/ArticleDetails";
import calculateReadingTime from "@/utils/calculateReadingTime";
import formatDate from "@/utils/formatDate";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Frontmatter } from "@/types/Frontmatter";
import { PostProps } from "@/types/PostProps";
import { useEffect } from "react";

function parseFrontmatter(markdown: string): { data: Record<string, unknown>; content: string } {
  if (!markdown.startsWith("---")) {
    return { data: {}, content: markdown };
  }

  const end = markdown.indexOf("\n---", 3);
  if (end === -1) {
    return { data: {}, content: markdown };
  }

  const frontmatterRaw = markdown.slice(3, end).trim();
  const content = markdown.slice(end + 4).trim();
  const data: Record<string, unknown> = {};

  for (const line of frontmatterRaw.split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();

    if (!key) {
      continue;
    }

    if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
      data[key] = rawValue
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^['"]|['"]$/g, ""))
        .filter(Boolean);
      continue;
    }

    data[key] = rawValue.replace(/^['"]|['"]$/g, "");
  }

  return { data, content };
}

declare global {
  interface Window {
    hljs?: {
      highlightAll: () => void;
    };
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesDirectory = path.join("articles");
  const fileNames = fs.readdirSync(articlesDirectory);
  const paths = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      params: { slug: fileName.replace(/\.md$/, "") },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const slug = params?.slug as string;
  if (!slug) {
    return { notFound: true };
  }

  const filePath = path.join("articles", `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatterData, content } = parseFrontmatter(markdownWithMeta);

  if (!content) {
    console.error(`Content not found for slug: ${slug}`);
    return { notFound: true };
  }

  const frontmatter = frontmatterData as Partial<Frontmatter>;
  const hasRequiredFrontmatterFields =
    !!frontmatter.title &&
    !!frontmatter.image &&
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
    authors: frontmatter.authors ?? [],
    tags: frontmatter.tags!,
    date: frontmatter.date!,
    excerpt: frontmatter.excerpt!,
  };

  const renderedContent = await marked(content);

  return {
    props: {
      frontmatter: validatedFrontmatter,
      slug,
      content: renderedContent || "",
      viewCount: 0,
      date: validatedFrontmatter.date ?? "",
      readingTime: calculateReadingTime(renderedContent || ""),
    },
  };
};

export default function PostPage({
  frontmatter,
  content = "",
}: PostProps) {
  if (
    !frontmatter ||
    !frontmatter.title ||
    !frontmatter.excerpt ||
    !frontmatter.date ||
    !frontmatter.image ||
    !content
  ) {
    return <p>Conteúdo não disponível</p>;
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.hljs?.highlightAll();
    }
  }, [content]);

  return (
    <>
      <NextSeo
        title={frontmatter.title || "Post"}
        description={frontmatter.excerpt || "Descrição indisponível"}
        canonical="https://yagasaki.vercel.app"
        openGraph={{
          url: `https://yagasaki.vercel.app`,
          title: frontmatter.title || "Post",
          description: frontmatter.excerpt || "Descrição indisponível",
          images: frontmatter.image
            ? [
                {
                  url: frontmatter.image,
                  width: 460,
                  height: 460,
                  alt: frontmatter.title || "Imagem",
                  type: frontmatter.image.includes(".png")
                    ? "image/png"
                    : "image/jpeg",
                },
              ]
            : [],
          siteName: "Anderson Marlon",
        }}
        twitter={{
          handle: "@",
          site: "@yagasaki7k",
          cardType: "summary_large_image",
        }}
      />

      <Head>
        <title>{frontmatter.title || "Anderson Marlon"}</title>
        <link
          rel="icon"
          type="image/png"
          href="https://github.com/Yagasaki7K.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/dracula.min.css"
        />
      </Head>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
        strategy="afterInteractive"
        onLoad={() => window.hljs?.highlightAll()}
      />

      <Navigation />

      <ArticleDetails>
        <div className="card card-page text">
          <div className="title">
            <h1 className="post-title">
              {frontmatter.title || "Título indisponível"}
            </h1>
          </div>

          <div className="details">
            <div className="date">
              <p>
                Publicado em <span>{formatDate(frontmatter.date)}</span>
              </p>
            </div>
            <div className="tags">
              <p className="minRead">
                Leitura de {calculateReadingTime(content)} minutos
              </p>
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
