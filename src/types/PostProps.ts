import { Frontmatter } from "./Frontmatter";

export interface PostProps {
    date: string;
    slug: string;
    frontmatter: Frontmatter;
    readingTime: number;
    content?: string;
    identifier?: string;
    viewCount?: number;
}
