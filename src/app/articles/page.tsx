import { Article, getArticles } from "../../lib/articles";
import moment from "moment";
import Link from "next/link";
// import { Tag } from "./[slug]/page";

export default async function ArticlesPage() {
    const articles = getArticles();
    return (
        <div>
            <h1 className="mb-8 mt-4 text-center max-sm:text-4xl text-5xl">Articles</h1>

            <p className="text-sm mb-8">
                Why are the publications written in Portuguese? Considering that Brazilians have a low level of knowledge of English, I focus on bringing the content to my people without difficulties and regardless of their level, obtaining the necessary knowledge.
            </p>

            <section className="flex flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
                {articles.map((article: Article) => (
                    <Link
                        className="flex items-center justify-between px-4 py-2 transition-all sm:p-4 sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
                        key={article.id}
                        href={`/articles/${article.id}`}
                    >
                        <div className="flex gap-x-2 gap-y-1 mr-8 max-sm:flex-col sm:items-center">
                            {article.title}{" "}
                        </div>
                        <span className="text-zinc-500 max-sm:text-sm dark:text-zinc-400">
                            {moment(article.date, "YYYY-MM-DD").format("MMM/YYYY")}
                        </span>
                    </Link>
                ))}
            </section>
        </div>
    );
}
