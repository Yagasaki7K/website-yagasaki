import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
	name: string;
	description: string;
	imageUrl: string;
	githubUrl: string;
	url: string;
}

const projects: Project[] = [
	{
		name: "steamfolio",
		description:
			"Building a customizable portfolio interface in the style of Steam. Using Bun, React and Vite.",
		url: "https://steamfolio.vercel.app/",
		imageUrl: "/projects/steamfolio.png",
		githubUrl: "https://github.com/Yagasaki7K/website-steamfolio",
	},
	{
		name: "onigirihardcore",
		description:
			"Onigiri Hardcore is a website about news, games, animes and entertainment",
		url: "https://onigirihardcore.vercel.app/",
		imageUrl: "/projects/onigirihardcore.png",
		githubUrl: "https://github.com/Yagasaki7K/website-onigirihardcore",
	},
	{
		name: "app-stream",
		description: "A player website to watch Twitch.tv without distractions.",
		url: "https://thetwitch.vercel.app/",
		imageUrl: "/projects/appstream.png",
		githubUrl: "https://github.com/Yagasaki7K/app-stream",
	},
	{
		name: "essentials",
		description: "Essentials softwares for your computer",
		url: "https://webessentials.vercel.app/",
		imageUrl: "/projects/essentials.png",
		githubUrl: "https://github.com/Yagasaki7K/website-essentials",
	},
	{
		name: "findyourpet",
		description:
			"App to help you rescue, inform and donate your pets with love! 🐶💜🐱",
		url: "https://findyourpet.vercel.app/",
		imageUrl: "/projects/findyourpet.png",
		githubUrl: "https://github.com/Yagasaki7K/website-findyourpet",
	},
	{
		name: "notification-push",
		description:
			"A feature to do a Notification Push without framework or package",
		url: "https://yagasaki7k.github.io/feature-notificationpush/",
		imageUrl: "/projects/pushnotification.png",
		githubUrl: "https://github.com/Yagasaki7K/feature-notificationpush",
	},
	{
		name: "pomodoro",
		description:
			"An intuitive timer built with React, following the Pomodoro technique",
		url: "https://appomodoro.vercel.app/",
		imageUrl: "/projects/pomodoro.png",
		githubUrl: "https://github.com/Yagasaki7K/app-pomodoro",
	},
	{
		name: "notemarkdown",
		description:
			"Easy way to edit and preview a markdown without save and with fast refresh.",
		url: "https://notemarkdown.vercel.app/",
		imageUrl: "/projects/notemarkdown.png",
		githubUrl: "https://github.com/Yagasaki7K/app-notemarkdown",
	},
];

function ProjectCard({ name, description, imageUrl, githubUrl, url }: Project) {
	return (
		<div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
			<div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
				<h2 className="text-xl">{name}</h2>
			</div>
			<div>
				<p className="p-4">{description}</p>
			</div>
			<Image src={imageUrl} width={620} height={324} alt="Logo for CSS2wind" />
			<div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
				<a
					href={url}
					target="_blank"
					className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
				>
					<Globe className="size-4" /> Visit demo
				</a>
				<a
					href={githubUrl}
					target="_blank"
					className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
				>
					<GitBranch className="size-4" /> View code
				</a>
			</div>
		</div>
	);
}

export default function ProjectsPage() {
	return (
		<>
			<h1 className="mb-16 mt-4 text-center max-sm:text-4xl text-5xl">
				Projects
			</h1>
			<div className="space-y-20">
				{projects.map((project) => (
					<ProjectCard key={project.url} {...project} />
				))}
			</div>
		</>
	);
}
