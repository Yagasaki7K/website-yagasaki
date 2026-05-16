import type { ImageLoaderProps } from "next/image";

export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
    const separator = src.includes("?") ? "&" : "?";
    const q = quality ?? 75;
    return `${src}${separator}w=${width}&q=${q}`;
}
