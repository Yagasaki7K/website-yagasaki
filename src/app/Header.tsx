"use client";

import { Camera, ChevronLeft, Github, Moon, Rss, Sun, Triangle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function readIsDarkFromDOM(): boolean {
	if (typeof document === "undefined") return false;
	return document.documentElement.classList.contains("dark");
}

export default function Header() {
	const path = usePathname();
	const isHome = path === "/";

	// 1) Não leia tema no render inicial (SSR). Comece neutro.
	const [mounted, setMounted] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	// 2) Após mount, sincronize com o DOM (classe já setada pelo script do <head>)
	useEffect(() => {
		setMounted(true);
		setIsDarkMode(readIsDarkFromDOM());
	}, []);

	const toggleTheme = () => {
		const d = document.documentElement;
		const next = !d.classList.contains("dark");
		d.classList.toggle("dark", next);
		localStorage.setItem("theme", next ? "dark" : "light");
		setIsDarkMode(next);
	};

	// 3) Durante SSR/hidratação inicial, renderize um header estável (sem ícones tema-dependentes)
	if (!mounted) {
		return (
			<header className="mx-auto max-w-prose py-8 max-sm:pt-4">
				<nav className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
					{isHome ? (
						<div>
							<div className="flex flex-col max-sm:items-center">
								Anderson &quot;Yagasaki&quot; Marlon
								<span className="text-zinc-500 dark:text-zinc-400">Software Engineer</span>
							</div>
						</div>
					) : (
						<Link
							className="group relative -m-12 -my-2 -mr-4 flex items-center rounded py-2 pl-12 pr-4 ring-1 ring-purple-500 ring-opacity-0 transition-all sm:hover:ring-opacity-100 max-sm:text-center dark:ring-gray-50 dark:ring-opacity-0"
							href="/"
						>
							<div className="absolute left-1 flex size-4 h-full w-12 items-center px-2">
								<ChevronLeft />
							</div>
							<div className="flex flex-col max-sm:items-center">
								Anderson Marlon
								<span className="text-zinc-500 dark:text-zinc-400">Software Engineer</span>
							</div>
						</Link>
					)}

					{/* Placeholders estáveis para evitar mismatch */}
					<div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-200">
						<span className="inline-block h-5 w-5 rounded-full opacity-40 bg-current" />
						<span className="inline-block h-5 w-5 rounded-full opacity-40 bg-current" />
						<span className="inline-block h-5 w-5 rounded-full opacity-40 bg-current" />
						<span className="inline-block h-9 w-9 rounded-md border opacity-40" />
					</div>
				</nav>
			</header>
		);
	}

	// 4) Após mount, pode renderizar normalmente com tema correto (sem fill condicional)
	return (
		<header className="mx-auto max-w-prose py-8 max-sm:pt-4">
			<nav className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
				{isHome ? (
					<div>
						<div className="flex flex-col max-sm:items-center">
							Anderson &quot;Yagasaki&quot; Marlon
							<span className="text-zinc-500 dark:text-zinc-400">Software Engineer</span>
						</div>
					</div>
				) : (
					<Link
						className="group relative -m-12 -my-2 -mr-4 flex items-center rounded py-2 pl-12 pr-4 ring-1 ring-purple-500 ring-opacity-0 transition-all sm:hover:ring-opacity-100 max-sm:text-center dark:ring-gray-50 dark:ring-opacity-0"
						href="/"
					>
						<div className="absolute left-1 flex size-4 h-full w-12 items-center px-2">
							<ChevronLeft />
						</div>
						<div className="flex flex-col max-sm:items-center">
							Anderson Marlon
							<span className="text-zinc-500 dark:text-zinc-400">Software Engineer</span>
						</div>
					</Link>
				)}

				<div className="flex items-center gap-4 text-zinc-800 dark:text-zinc-100">
					<Link
						className="group relative rounded px-2 py-px ring-1 ring-gray-50 ring-opacity-0 transition-all sm:hover:ring-opacity-100 dark:ring-gray-50 dark:ring-opacity-0"
						href="/articles"
						data-is-current-path={path.startsWith("/articles")}
					>
						Blog
						<Triangle className="absolute left-1/2 mt-1 hidden size-2 fill-gray-50 text-zinc-800 group-data-[is-current-path=true]:block dark:fill-gray-50 dark:text-transparent" />
					</Link>

					<Link
						className="group relative rounded px-2 py-px ring-1 ring-gray-50 ring-opacity-0 transition-all sm:hover:ring-opacity-100 dark:ring-gray-50 dark:ring-opacity-0"
						href="/projects"
						data-is-current-path={path === "/projects"}
					>
						Projects
						<Triangle className="absolute left-1/2 mt-1 hidden size-2 fill-gray-50 text-zinc-800 group-data-[is-current-path=true]:block dark:fill-gray-50 dark:text-transparent" />
					</Link>

					<Link
						className="group relative rounded px-2 py-px ring-1 ring-gray-50 ring-opacity-0 transition-all sm:hover:ring-opacity-100 dark:ring-gray-50 dark:ring-opacity-0"
						href="/about"
						data-is-current-path={path === "/about"}
					>
						Me
						<Triangle className="absolute left-1/2 mt-1 hidden size-2 fill-gray-50 text-zinc-800 group-data-[is-current-path=true]:block dark:fill-gray-50 dark:text-transparent" />
					</Link>

					{/* Ícones SEM fill condicional, usando currentColor */}
					<Link className="group relative flex items-center" href="/photos" data-is-current-path={path === "/photos"}>
						<Camera className="size-5" />
					</Link>
					<Link className="group relative flex items-center" href="https://github.com/Yagasaki7K" target="_blank">
						<Github className="size-5" />
					</Link>
					<Link className="group relative flex items-center" href="/api/rss" data-is-current-path={path === "/api/rss"}>
						<Rss className="size-5" />
					</Link>

					{/* Botão de tema: ícone muda só após mount */}
					<button onClick={toggleTheme} className="group relative flex items-center" type="button" aria-label="Toggle theme">
						{isDarkMode ? <Moon className="size-5" /> : <Sun className="size-5" />}
					</button>
				</div>
			</nav>
		</header>
	);
}
