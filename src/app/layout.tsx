import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Header from "./Header";

export const metadata: Metadata = {
	title: 'Anderson "Yagasaki" Marlon',
	description: "Software Engineer",
};

const karla = Karla({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const themeInit = `
  (function() {
    try {
      var d = document.documentElement;
      var t = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var isDark = (t === 'dark') || (t === null && prefersDark);
      if (isDark) d.classList.add('dark'); else d.classList.remove('dark');
    } catch (e) {}
  })();`;

	return (
		<html lang="en" className="min-h-screen">
			<head>
				{/* Garante a classe 'dark' correta ANTES da hidratação */}
				<Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInit }} />
			</head>
			<body className={`${karla.className} min-h-full px-6`}>
				<Analytics />

				<Header />

				<main className="mx-auto max-w-prose pb-4">
					{children}
					<ScrollToTop />
				</main>
				<footer className="mx-auto flex max-w-prose flex-col items-center gap-2 py-6 text-sm text-zinc-500 dark:text-zinc-400">
					<div className="flex items-center gap-4">
						<a
							className="decoration-zinc-500 underline-offset-4 transition-all sm:hover:underline dark:decoration-zinc-400"
							href="https://github.com/yagasaki7k/website-yagasaki"
							target="_blank"
						>
							Code
						</a>
						<Link className="decoration-zinc-500 underline-offset-4 transition-all sm:hover:underline dark:decoration-zinc-400" target="_blank" href="/rss.xml">
							RSS Feed
						</Link>
						<a className="decoration-zinc-500 underline-offset-4 transition-all sm:hover:underline dark:decoration-zinc-400" href="https://x.com/Yagasaki7K" target="_blank">
							@Yagasaki7K
						</a>
					</div>
					<blockquote className="text-zinc-800 dark:text-zinc-300">Smile, you&apos;re alive :)</blockquote>
				</footer>
			</body>
		</html>
	);
}
